// Draws the farm state (field.js) with instanced meshes: one InstancedMesh per model (tilled soil, each crop stage,
// weeds, stones, sprinklers, trees…), so a full field costs a few dozen draw calls. Redrawn only when farm.dirty.
// Created after the static batching (on world:ready), so nothing here is merged away.
import * as THREE from 'three';
import { scene } from '../../engine/core.js';
import { today } from '../../systems/calendar.js';
import { VC, plantGeo, treeGeo, fruitGeo, blossomGeo, debrisGeo, soilGeo, fertGeo, objectGeo, giantGeo, cursorGeo, cursorMaterial } from './models.js';
import { farm, allTiles, cropDef, fertDef, objDef, stageOf, treeGrown, inSeason, unlocked, tileOf } from './field.js';

const SOIL_DRY = new THREE.Color('#8a5a3a'), SOIL_WET = new THREE.Color('#4a2e22'), WHITE = new THREE.Color(1, 1, 1);
const WILT = [WHITE, new THREE.Color(0.9, 0.8, 0.55), new THREE.Color(0.75, 0.6, 0.38)];
const GOLD = new THREE.Color(1.5, 1.2, 0.35);
const soilMat = new THREE.MeshLambertMaterial({ color: '#ffffff' });
const pools = new Map();   // key -> { geo, mat, shadow, im, cap }
const want = new Map();    // key -> [instances] for the current redraw
const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3(), UP = new THREE.Vector3(0, 1, 0);
const hash = (t) => { const h = Math.sin(t.i * 127.1 + t.j * 311.7 + (t.area === 'gh' ? 71 : 0)) * 43758.5453; return h - Math.floor(h); };

function put(key, make, x, y, z, yaw = 0, scale = 1, tint = WHITE, mat = VC, shadow = true) {
  if (!pools.has(key)) pools.set(key, { geo: make(), mat, shadow, im: null, cap: 0 });
  if (!want.has(key)) want.set(key, []);
  want.get(key).push([x, y, z, yaw, scale, tint]);
}
function flush() {
  for (const [key, P] of pools) {
    const list = want.get(key) || [];
    if (list.length > P.cap) {
      if (P.im) { scene.remove(P.im); P.im.dispose(); }
      P.cap = Math.max(8, 1 << Math.ceil(Math.log2(list.length)));
      P.im = new THREE.InstancedMesh(P.geo, P.mat, P.cap);
      P.im.castShadow = P.shadow; P.im.receiveShadow = true;
      scene.add(P.im);
    }
    if (!P.im) continue;
    list.forEach(([x, y, z, yaw, sc, tint], k) => {
      P.im.setMatrixAt(k, m4.compose(p.set(x, y, z), q.setFromAxisAngle(UP, yaw), s.setScalar(sc)));
      P.im.setColorAt(k, tint);
    });
    P.im.count = list.length;
    P.im.visible = list.length > 0;
    P.im.instanceMatrix.needsUpdate = true;
    if (P.im.instanceColor) P.im.instanceColor.needsUpdate = true;
    if (list.length) P.im.computeBoundingSphere();
  }
  want.clear();
}

// ---------------------------------------------------------------- the whole farm
export function redraw() {
  const season = today().season.id;
  for (const t of allTiles()) {
    if (t.area === 'gh' && !farm.gh) continue;
    const yaw = hash(t) * Math.PI * 2, x = t.x, z = t.z;
    if (t.soil) {
      put('soil', soilGeo, x, 0, z, 0, 1, t.wet ? SOIL_WET : SOIL_DRY, soilMat, false);
      if (t.fert) put('fert', fertGeo, x, 0, z, yaw, 1, new THREE.Color(fertDef(t.fert).color), VC, false);
    }
    const y0 = t.soil ? 0.05 : 0.01;
    if (t.debris) put('debris:' + t.debris, () => debrisGeo(t.debris), x, 0.01, z, yaw, 0.9 + hash(t) * 0.25);
    if (t.obj) put('obj:' + t.obj, () => objectGeo(objDef(t.obj)), x, y0, z, t.obj === 'orang_orangan' ? 0.6 : yaw);
    const c = t.crop;
    if (!c) continue;
    const d = cropDef(c.id);
    if (c.tree) {
      const st = stageOf(c);
      put(`tree:${c.id}:${st}`, () => treeGeo(d, st), x, 0.01, z, yaw);
      if (treeGrown(c) && c.fruit) put(`fruit:${c.id}:${c.fruit}`, () => fruitGeo(d, c.fruit), x, 0.01, z, yaw);
      else if (treeGrown(c) && season === 'semi') put(`blossom:${c.id}`, () => blossomGeo(d), x, 0.01, z, yaw);
      continue;
    }
    const st = stageOf(c), v = d.colors ? c.variant % d.colors.length : 0;
    const tint = c.dead ? WHITE : c.rare && st === 4 ? GOLD : WILT[Math.min(2, c.dry)];
    put(`plant:${c.id}:${st}:${d.kind === 'flower' ? v : 0}`, () => plantGeo(d, st, v), x, y0, z, yaw, 1, tint);
  }
  for (const gi of farm.giants) {
    const mid = tileOf(gi.area, gi.i + 1, gi.j + 1);
    put('giant:' + gi.id, () => giantGeo(cropDef(gi.id)), mid.x, 0.05, mid.z, (gi.i * 7 + gi.j) % 6);
  }
  flush();
  farm.dirty = false;
}

// sparkles over golden crops, spray over sprinklers in the morning: positions for index.js effects
export const rareTiles = () => allTiles().filter(t => t.crop?.rare && unlocked(t) && stageOf(t.crop) === 4);
export const sprinklerTiles = () => allTiles().filter(t => t.obj && objDef(t.obj).range && unlocked(t));

// ---------------------------------------------------------------- cursor (tiles the next tool use affects)
let cur = null;
const OK = new THREE.Color('#d6f58a'), BAD = new THREE.Color('#ff6a7a'), INFO = new THREE.Color('#ffffff');
export function drawCursor(cells) {
  if (!cur) {
    cur = new THREE.InstancedMesh(cursorGeo(), cursorMaterial(), 25);
    cur.frustumCulled = false; cur.renderOrder = 2; scene.add(cur);
  }
  let n = 0;
  for (const { t, state } of cells.slice(0, 25)) {
    cur.setMatrixAt(n, m4.compose(p.set(t.x, (t.soil ? 0.07 : 0.03), t.z), q.identity(), s.setScalar(1)));
    cur.setColorAt(n, state === 'ok' ? OK : state === 'bad' ? BAD : INFO); n++;
  }
  cur.count = n; cur.visible = n > 0;
  cur.instanceMatrix.needsUpdate = true;
  if (cur.instanceColor) cur.instanceColor.needsUpdate = true;
}
