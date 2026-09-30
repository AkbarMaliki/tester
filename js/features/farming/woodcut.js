// Felling the wild trees around the map (world/vegetation.js) with a strong enough axe (farming.json wildTrees):
// every swing shakes the tree and sends chips + leaves flying; the last one brings it down (creak, a falling tree that
// speeds up, bounces and throws up dust), then it's gone, wood goes in the bag and a stump is left. The stump can be
// chopped away for a bit more wood; either way the tree grows back after regrowDays.
import * as THREE from 'three';
import { scene } from '../../engine/core.js';
import { frand, clamp } from '../../engine/util.js';
import { sfx } from '../../engine/audio.js';
import { smoke } from '../../world/effects.js';
import { trees, treeNear, tiltTree, fellTree, restoreTree, hideTree } from '../../world/vegetation.js';
import { debrisGeo, VC } from './models.js';

const FALL_T = 1.35;       // seconds from the last hit until the crown hits the ground
const LIE_T = 2.6;         // lies there this long before it's cleared away
let W = null, onFelled = null;
const hits = new Map();     // tree id -> swings so far
const stumps = new Map();   // tree id -> { days (until it grows back), mesh | null (null = stump chopped away / still falling) }
const falling = [];         // { tree, g, axis, dir, t, landed }
const shakes = [];          // { tree, t, dir }
let stumpGeo = null;

export function initWoodcut(data, felled) { W = data.wildTrees; onFelled = felled; }
export const woodRules = () => W;
export const hitsOn = (t) => hits.get(t.id) || 0;

// what the axe would hit in front of (x, z) facing (fx, fz): a standing tree or a stump
export function woodTarget(x, z, fx, fz) {
  const tree = treeNear(x, z, fx, fz, 1.15);
  if (tree) return { tree, stump: false };
  for (const [id, s] of stumps) {
    if (!s.mesh) continue;
    const t = trees[id], dx = t.x - x, dz = t.z - z, d = Math.hypot(dx, dz);
    if (d - 0.3 * t.s < 1.0 && (dx * fx + dz * fz) / (d || 1) > 0.45) return { tree: t, stump: true };
  }
  return null;
}

const col = new THREE.Color(), v = new THREE.Vector3(), vel = new THREE.Vector3();
function puff(x, y, z, color, n, spread, up, size, life = 0.6, rise = -1.5) {
  col.set(color);
  for (let i = 0; i < n; i++) smoke.spawn(v.set(x + frand(-spread, spread), y + frand(0, spread * 0.5), z + frand(-spread, spread)), vel.set(frand(-1, 1), frand(0.2, up), frand(-1, 1)), frand(size * 0.6, size), frand(life * 0.6, life), col, rise);
}
const trunkColor = (t) => (t.pale ? '#eadcea' : '#6b4a60');

// one axe swing landing on target (from woodTarget). from = the kid's position. Returns { felled, stump, gain }
export function chop(target, from) {
  const t = target.tree;
  if (target.stump) {
    const s = stumps.get(t.id);
    s.mesh.removeFromParent(); s.mesh = null;
    puff(t.x, 0.3, t.z, '#c49060', 10, 0.35, 2, 0.12);
    sfx.chop(true);
    return { stump: true, gain: [['ranting', rnd(W.stumpWood)]] };
  }
  const dx = t.x - from.x, dz = t.z - from.z, len = Math.hypot(dx, dz) || 1, dir = new THREE.Vector3(dx / len, 0, dz / len);
  const n = hitsOn(t) + 1;
  // chips out of the cut (on the kid's side of the trunk), a few leaves shaken loose from the crown
  puff(t.x - dir.x * 0.25 * t.s, 0.85, t.z - dir.z * 0.25 * t.s, trunkColor(t), 6, 0.1, 2.2, 0.09, 0.5, -3);
  puff(t.x, t.h + 0.4 * t.s, t.z, t.hex, 5, 1.4 * t.s, 0.2, 0.14, 1.6, -0.6);
  sfx.chop(true);
  if (n < W.hits) { hits.set(t.id, n); shakes.push({ tree: t, t: 0, dir }); return { felled: false }; }
  hits.delete(t.id);
  // timber! the loose copy tips over away from the kid
  const g = fellTree(t);
  if (!g) return { felled: false };
  scene.add(g);
  falling.push({ tree: t, g, dir, axis: new THREE.Vector3(dir.z, 0, -dir.x), t: 0, landed: false });
  stumps.set(t.id, { days: W.regrowDays, mesh: null });
  sfx.timber(FALL_T);
  return { felled: true };
}
const rnd = ([a, b]) => a + Math.floor(Math.random() * (b - a + 1));

function addStump(t) {
  stumpGeo ||= debrisGeo('stump');
  const m = new THREE.Mesh(stumpGeo, VC);
  m.position.set(t.x, 0, t.z); m.rotation.y = t.yaw; m.scale.set(t.s * 1.1, t.s * 0.9, t.s * 1.1);
  m.castShadow = m.receiveShadow = true; scene.add(m);
  return m;
}

export function updateWoodcut(dt) {
  for (let i = shakes.length - 1; i >= 0; i--) {
    const s = shakes[i]; s.t += dt;
    const a = s.t > 0.45 ? 0 : Math.sin(s.t * 34) * 0.05 * (1 - s.t / 0.45) + 0.03 * (1 - s.t / 0.45);
    tiltTree(s.tree, s.dir.z * a, -s.dir.x * a);
    if (s.t > 0.45) shakes.splice(i, 1);
  }
  for (let i = falling.length - 1; i >= 0; i--) {
    const f = falling[i], t = f.tree; f.t += dt;
    const REST = Math.PI / 2 - 0.06;
    let ang;
    if (f.t < FALL_T) ang = REST * Math.pow(f.t / FALL_T, 2.3);                              // gravity: slow start, fast end
    else ang = REST - 0.12 * Math.abs(Math.sin((f.t - FALL_T) * 10)) * Math.exp(-(f.t - FALL_T) * 6);   // bounce
    f.g.quaternion.setFromAxisAngle(f.axis, ang);
    if (!f.landed && f.t >= FALL_T) {
      f.landed = true;
      // dust along the trunk and a burst of leaves where the crown hits
      for (let k = 0.2; k <= 1; k += 0.2) puff(t.x + f.dir.x * t.h * k, 0.15, t.z + f.dir.z * t.h * k, '#d8c0a0', 3, 0.3, 1.2, 0.2, 0.9, -0.4);
      puff(t.x + f.dir.x * (t.h + 0.7 * t.s), 0.5, t.z + f.dir.z * (t.h + 0.7 * t.s), t.hex, 16, 1.2 * t.s, 1.6, 0.16, 1.4, -0.8);
      sfx.dig(1);
      const st = stumps.get(t.id);
      if (st && !st.mesh) st.mesh = addStump(t);
    }
    // cleared away: shrink into the ground, then the wood goes into the bag
    if (f.t > FALL_T + LIE_T) {
      const k = clamp(1 - (f.t - FALL_T - LIE_T) / 0.5, 0, 1);
      f.g.scale.setScalar(Math.max(0.001, k));
      if (k <= 0) {
        f.g.removeFromParent();
        f.g.traverse(o => { if (o.isInstancedMesh) o.dispose(); });
        falling.splice(i, 1);
        puff(t.x + f.dir.x * t.h * 0.5, 0.3, t.z + f.dir.z * t.h * 0.5, '#c49060', 10, 0.8, 1.5, 0.12);
        onFelled?.(t, [['ranting', rnd(W.wood)], ['kayu', rnd(W.logs)]]);
      }
    }
  }
}

// a new day: stumps count down, then the tree is back
export function woodNewDay() {
  for (const [id, s] of [...stumps]) {
    if (falling.some(f => f.tree.id === id) || --s.days > 0) continue;
    if (s.mesh) s.mesh.removeFromParent();
    stumps.delete(id); restoreTree(trees[id]);
  }
}

// ---------------------------------------------------------------- save / load
export const saveWood = () => [...stumps].map(([id, s]) => [id, s.days, s.mesh || falling.some(f => f.tree.id === id) ? 1 : 0]);
export function loadWood(list) {
  for (const f of falling) f.g.removeFromParent();
  falling.length = shakes.length = 0; hits.clear();
  for (const s of stumps.values()) if (s.mesh) s.mesh.removeFromParent();
  stumps.clear();
  for (const t of trees) restoreTree(t);
  for (const [id, days, stump] of list || []) {
    const t = trees[id];
    if (!t) continue;
    hideTree(t);
    stumps.set(id, { days, mesh: stump ? addStump(t) : null });
  }
}
