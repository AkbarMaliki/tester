// Grass (chunked blades), trees + bushes (instanced leaf squares), rocks, fallen leaves.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { HALF, WATER_Y } from '../game/config.js';
import { clamp, smooth, rnd, rand, pick } from '../engine/util.js';
import { scene, world, U, paint, lam, addStatic, DETAIL_LAYER } from '../engine/core.js';
import { on } from '../engine/events.js';
import { W } from '../game/config.js';
import { registerSave } from '../systems/save.js';
import { time } from '../systems/daynight.js';
import { maskAt, groundY, keepOut, noTrees, maskData, RES } from './worldmap.js';

// ---------------------------------------------------------------- grass
const grassMat = paint(new THREE.MeshLambertMaterial({ side: THREE.DoubleSide }), 'grass');
export const grassMeshes = [];   // userData.layer 0/1 -> "Sedang" quality hides layer 1

export function buildGrass() {
  const CH = 20, chunks = new Map(), step = 0.3;
  for (let z = -HALF + 1; z < HALF - 1; z += step) for (let x = -HALF + 1; x < HALF - 1; x += step) {
    const px = x + rand(-0.15, 0.15), pz = z + rand(-0.15, 0.15);
    const m = maskAt(px, pz);
    if (m.grass < 0.12 || rnd() > smooth(0.12, 0.3, m.grass)) continue;
    const key = Math.floor((px + HALF) / CH) + ',' + Math.floor((pz + HALF) / CH) + '|' + (rnd() < 0.5 ? 0 : 1);
    if (!chunks.has(key)) chunks.set(key, []);
    chunks.get(key).push(px, pz, m.grass);
  }
  let total = 0;
  for (const [key, arr] of chunks) {
    const n = arr.length / 3; total += n;
    const pos = new Float32Array(n * 9), nor = new Float32Array(n * 9), root = new Float32Array(n * 9), tip = new Float32Array(n * 3), rr = new Float32Array(n * 3);
    for (let b = 0; b < n; b++) {
      const x = arr[b * 3], z = arr[b * 3 + 1], g = arr[b * 3 + 2];
      const a = rand(0, Math.PI), w = rand(0.26, 0.38) * 0.5, h = rand(0.55, 0.85) * (0.75 + 0.25 * g);
      const cx = Math.cos(a) * w, cz = Math.sin(a) * w, lx = rand(-0.12, 0.12) * h, lz = rand(-0.12, 0.12) * h;
      pos.set([x - cx, 0, z - cz, x + cx, 0, z + cz, x + lx, h, z + lz], b * 9);
      for (let k = 0; k < 3; k++) { nor.set([0, 1, 0], b * 9 + k * 3); root.set([x, 0, z], b * 9 + k * 3); }
      tip.set([0, 0, 1], b * 3); const r0 = rnd(); rr.set([r0, r0, r0], b * 3);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    geo.setAttribute('aRoot', new THREE.BufferAttribute(root, 3));
    geo.setAttribute('aTip', new THREE.BufferAttribute(tip, 1));
    geo.setAttribute('aRand', new THREE.BufferAttribute(rr, 1));
    geo.computeBoundingSphere(); geo.boundingSphere.radius += 2;
    const me = new THREE.Mesh(geo, grassMat);
    me.receiveShadow = true; me.userData.layer = +key.split('|')[1]; me.layers.set(DETAIL_LAYER);
    grassMeshes.push(me); scene.add(me);
  }
  return total;
}

// ---------------------------------------------------------------- mowing (the sickle, features/farming)
// A 512x512 map over the world (same grid as the world mask): 1 = just cut to stubble, fading back to 0 as the grass
// grows again. The grass shader reads it per blade, so cutting costs no meshes. Cuts are kept as a short list
// { x, z, r, age } (saved) and re-stamped once a day.
const REGROW_DAYS = 3, MAX_CUTS = 1500;
const cutData = new Uint8Array(RES * RES);
const cutTex = new THREE.DataTexture(cutData, RES, RES, THREE.RedFormat);
cutTex.magFilter = cutTex.minFilter = THREE.LinearFilter; cutTex.needsUpdate = true;
U.uCut.value = cutTex;
const cuts = [];
const texel = (v) => Math.floor((v + HALF) / W * RES);
function stamp(c) {
  const v = Math.round(255 * Math.max(0, 1 - c.age / REGROW_DAYS)), rr = c.r / W * RES, ci = (c.x + HALF) / W * RES, cj = (c.z + HALF) / W * RES;
  for (let j = Math.max(0, Math.floor(cj - rr)); j <= Math.min(RES - 1, Math.ceil(cj + rr)); j++)
    for (let i = Math.max(0, Math.floor(ci - rr)); i <= Math.min(RES - 1, Math.ceil(ci + rr)); i++)
      if ((i + 0.5 - ci) ** 2 + (j + 0.5 - cj) ** 2 <= rr * rr) cutData[j * RES + i] = Math.max(cutData[j * RES + i], v);
}
function restamp() { cutData.fill(0); for (const c of cuts) stamp(c); cutTex.needsUpdate = true; }
// how much standing grass (m²) there is in a circle
export function grassIn(x, z, r) {
  const rr = r / W * RES, ci = (x + HALF) / W * RES, cj = (z + HALF) / W * RES, area = (W / RES) ** 2;
  let sum = 0;
  for (let j = Math.max(0, Math.floor(cj - rr)); j <= Math.min(RES - 1, Math.ceil(cj + rr)); j++)
    for (let i = Math.max(0, Math.floor(ci - rr)); i <= Math.min(RES - 1, Math.ceil(ci + rr)); i++)
      if ((i + 0.5 - ci) ** 2 + (j + 0.5 - cj) ** 2 <= rr * rr) {
        const g = maskData[(j * RES + i) * 4 + 2] / 255;
        if (g > 0.12) sum += g * (1 - cutData[j * RES + i] / 255) * area;
      }
  return sum;
}
// mow a circle; returns the m² of grass that was standing there
export function cutGrass(x, z, r) {
  const got = grassIn(x, z, r);
  if (got < 0.05) return 0;
  cuts.push({ x, z, r, age: 0 });
  if (cuts.length > MAX_CUTS) cuts.splice(0, cuts.length - MAX_CUTS);
  stamp(cuts[cuts.length - 1]); cutTex.needsUpdate = true;
  return got;
}
export const isMown = (x, z) => (cutData[texel(z) * RES + texel(x)] || 0) > 128;
// the grass grows back a little every day
let lastDay = 0;
function grow(days) {
  if (days <= 0 || !cuts.length) return;
  for (const c of cuts) c.age += days;
  for (let i = cuts.length - 1; i >= 0; i--) if (cuts[i].age >= REGROW_DAYS) cuts.splice(i, 1);
  restamp();
}
on('calendar:day', (d) => { grow(d.index - lastDay); lastDay = d.index; });
on('save:applied', () => { lastDay = time.day; });
const r2 = (v) => Math.round(v * 100) / 100;
registerSave('grass', {
  save: () => cuts.map(c => [r2(c.x), r2(c.z), r2(c.r), c.age]),
  load(d) { cuts.length = 0; for (const [x, z, r, age] of d || []) cuts.push({ x, z, r, age }); restamp(); },
  reset() { cuts.length = 0; restamp(); },
});

// ---------------------------------------------------------------- trees + bushes
const leafList = [];   // [x,y,z, rx,ry,rz, s, r,g,b] per leaf
const LEAF_COLORS = { pink: '#ff8fc4', orange: '#ff8a38', yellow: '#f2b53e', white: '#e2dcec', purple: '#a57aff', red: '#e8503c' };
const TREE_TYPES = ['pink', 'pink', 'orange', 'yellow', 'white', 'white', 'purple', 'red'];

function addLeafCluster(cx, cy, cz, r, hex, density = 125) {
  const base = new THREE.Color(hex), c = new THREE.Color(), hsl = {};
  base.getHSL(hsl);
  const n = Math.round(density * r * r);
  for (let i = 0; i < n; i++) {
    const u = rnd() * 2 - 1, th = rnd() * Math.PI * 2, s = Math.sqrt(1 - u * u);
    const dx = s * Math.cos(th), dy = u, dz = s * Math.sin(th);
    const dist = r * Math.pow(rnd(), 0.4);
    const shade = 0.28 + 0.72 * clamp((dy * 0.5 + 0.5) * 0.55 + (dist / r) * 0.5, 0, 1);   // dark inside / below
    c.setHSL(hsl.h + rand(-0.025, 0.025), hsl.s, hsl.l).multiplyScalar(shade * rand(0.9, 1.1));
    leafList.push(cx + dx * dist, cy + dy * dist * 0.85, cz + dz * dist, rand(0, 6.28), rand(0, 6.28), rand(0, 6.28), rand(0.7, 1.25), c.r, c.g, c.b);
  }
}
// Wild trees can be felled (features/farming: the golden axe) and grow back, so each one keeps its data:
//   { id, x, z, h, s, yaw, pale, hex, leaves: [first, end) ids in leafList, body, down }
// Trunks + branches are two InstancedMeshes (one draw call each); the leaves stay in their 30 m cell meshes.
export const trees = [];
const TRUNK_LIGHT = new THREE.Color('#eadcea'), TRUNK_DARK = new THREE.Color('#5b3b52');
function tree(x, z) {
  // same random calls in the same order as always, so the world layout doesn't change
  const type = pick(TREE_TYPES), s = rand(1.0, 1.45), h = rand(3.0, 4.2) * s;
  const pale = type === 'white' || type === 'pink' || rnd() < 0.3;
  const yaw = rand(0, 6);
  const hex = LEAF_COLORS[type], first = leafList.length / 10;
  addLeafCluster(x, h + 0.7 * s, z, rand(1.6, 2.0) * s, hex);
  const k = 2 + Math.floor(rnd() * 3);
  for (let i = 0; i < k; i++) {
    const a = rnd() * 6.28, rr = rand(0.9, 1.5) * s;
    addLeafCluster(x + Math.cos(a) * rand(0.9, 1.5) * s, h + rand(-0.6, 0.6) * s, z + Math.sin(a) * rand(0.9, 1.5) * s, rr, hex);
  }
  const body = addStatic(new CANNON.Cylinder(0.3 * s, 0.3 * s, h, 8), x, h / 2, z);
  trees.push({ id: trees.length, x, z, h, s, yaw, pale, hex, leaves: [first, leafList.length / 10], body, down: false });
}
// unit trunk (base at 0, height 1) and branch (centred, length 1), scaled per tree by (s, h, s)
const trunkGeo = new THREE.CylinderGeometry(0.13, 0.24, 1, 6).translate(0, 0.5, 0), branchGeo = new THREE.CylinderGeometry(0.06, 0.1, 1, 5);
const trunkMat = lam('#ffffff');
let trunkIM = null, branchIM = null;
const ZERO = new THREE.Matrix4().makeScale(0, 0, 0);
const tb = new THREE.Matrix4(), tl = new THREE.Matrix4(), tq = new THREE.Quaternion(), te = new THREE.Euler(), tp = new THREE.Vector3(), ts = new THREE.Vector3();
// trunk + branch of tree t, optionally leaning by (ax, az) radians around its base
function trunkMatrices(t, ax = 0, az = 0) {
  if (t.down) { trunkIM.setMatrixAt(t.id, ZERO); branchIM.setMatrixAt(t.id, ZERO); }
  else {
    tb.makeRotationFromEuler(te.set(ax, 0, az)).multiply(tl.makeRotationY(t.yaw)).setPosition(t.x, 0, t.z);
    trunkIM.setMatrixAt(t.id, tl.copy(tb).multiply(new THREE.Matrix4().makeScale(t.s, t.h, t.s)));
    const local = new THREE.Matrix4().compose(tp.set(0.35 * t.s, 0.65 * t.h, 0), tq.setFromEuler(te.set(0, 0, -0.7)), ts.set(t.s, 0.5 * t.h, t.s));
    branchIM.setMatrixAt(t.id, tl.copy(tb).multiply(local));
  }
  trunkIM.instanceMatrix.needsUpdate = branchIM.instanceMatrix.needsUpdate = true;
}
function buildTrunks() {
  trunkIM = new THREE.InstancedMesh(trunkGeo, trunkMat, Math.max(1, trees.length));
  branchIM = new THREE.InstancedMesh(branchGeo, trunkMat, Math.max(1, trees.length));
  for (const im of [trunkIM, branchIM]) { im.castShadow = true; im.receiveShadow = true; scene.add(im); }
  for (const t of trees) { trunkMatrices(t); trunkIM.setColorAt(t.id, t.pale ? TRUNK_LIGHT : TRUNK_DARK); branchIM.setColorAt(t.id, t.pale ? TRUNK_LIGHT : TRUNK_DARK); }
  trunkIM.computeBoundingSphere(); branchIM.computeBoundingSphere();
}
function bush(x, z) {
  const hex = pick(['#7b8a4a', '#8a5a8a', '#5a6a8a', LEAF_COLORS.pink, LEAF_COLORS.orange, '#9a8aa0']);
  const r = rand(0.8, 1.4);
  addLeafCluster(x, r * 0.55, z, r, hex, 130);
  if (rnd() < 0.5) addLeafCluster(x + rand(-0.8, 0.8), r * 0.4, z + rand(-0.8, 0.8), r * 0.7, hex, 130);
}
// leaves are bucketed into 30 m cells, one InstancedMesh each, so off-screen trees get frustum-culled.
// leafIM / leafSlot: which cell mesh + instance each leaf id ended up in (to hide one felled tree's leaves)
const leafGeo = new THREE.PlaneGeometry(0.3, 0.3), leafMat = paint(new THREE.MeshLambertMaterial({ side: THREE.DoubleSide }), 'leaves');
let leafIM = [], leafSlot = null;
function buildLeaves() {
  const n = leafList.length / 10, CELL = 30, cells = new Map();
  for (let i = 0; i < n; i++) {
    const key = Math.floor(leafList[i * 10] / CELL) + ',' + Math.floor(leafList[i * 10 + 2] / CELL);
    if (!cells.has(key)) cells.set(key, []);
    cells.get(key).push(i);
  }
  leafIM = new Array(n); leafSlot = new Int32Array(n);
  const mat = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), s = new THREE.Vector3(), c = new THREE.Color();
  for (const ids of cells.values()) {
    const im = new THREE.InstancedMesh(leafGeo, leafMat, ids.length);
    ids.forEach((id, k) => {
      leafIM[id] = im; leafSlot[id] = k;
      const o = id * 10;
      p.set(leafList[o], leafList[o + 1], leafList[o + 2]);
      q.setFromEuler(e.set(leafList[o + 3], leafList[o + 4], leafList[o + 5]));
      s.setScalar(leafList[o + 6]);
      im.setMatrixAt(k, mat.compose(p, q, s));
      im.setColorAt(k, c.setRGB(leafList[o + 7], leafList[o + 8], leafList[o + 9]));
    });
    im.computeBoundingSphere(); im.boundingSphere.radius += 1;   // + wind sway
    im.castShadow = true; im.receiveShadow = true;
    scene.add(im);
  }
  return n;
}
export const canopies = [];   // {x, z, r} of every tree/bush crown, filled by plantTrees (things that must stay visible from above avoid them)
export function plantTrees() {
  const trees = [];
  for (let i = 0; i < 3000 && trees.length < 62; i++) {
    const x = rand(-88, 88), z = rand(-88, 88), m = maskAt(x, z);
    if (m.d < 3 || m.paved > 0.05 || m.asphalt > 0.05 || (m.grass < 0.25 && rnd() < 0.7)) continue;
    if (keepOut.some(k => Math.hypot(x - k.x, z - k.z) < k.r + 2.5) || trees.some(t => Math.hypot(t.x - x, t.z - z) < 5.5)) continue;
    if (noTrees.some(r => x > r.x0 - 3 && x < r.x1 + 3 && z > r.z0 - 3 && z < r.z1 + 3)) continue;
    trees.push({ x, z }); canopies.push({ x, z, r: 3.6 }); tree(x, z);
  }
  let bushes = 0;
  for (let i = 0; i < 3000 && bushes < 90; i++) {
    const x = rand(-88, 88), z = rand(-88, 88), m = maskAt(x, z);
    if (m.d < 1.5 || m.paved > 0.3 || m.asphalt > 0.05) continue;
    if (keepOut.some(k => Math.hypot(x - k.x, z - k.z) < k.r + 1) || trees.some(t => Math.hypot(t.x - x, t.z - z) < 2.5)) continue;
    bush(x, z); canopies.push({ x, z, r: 1.6 }); bushes++;
  }
  buildTrunks();
  return { trees: trees.length, bushes, leaves: buildLeaves() };
}

// ---------------------------------------------------------------- felling / regrowing wild trees
const lm = new THREE.Matrix4(), lq = new THREE.Quaternion(), le = new THREE.Euler(), lp = new THREE.Vector3(), ls = new THREE.Vector3();
function leafMatrix(id, ox = 0, oz = 0) {
  const o = id * 10;
  return lm.compose(lp.set(leafList[o] - ox, leafList[o + 1], leafList[o + 2] - oz), lq.setFromEuler(le.set(leafList[o + 3], leafList[o + 4], leafList[o + 5])), ls.setScalar(leafList[o + 6]));
}
function showLeaves(t, on) {
  const touched = new Set();
  for (let id = t.leaves[0]; id < t.leaves[1]; id++) { leafIM[id].setMatrixAt(leafSlot[id], on ? leafMatrix(id) : ZERO); touched.add(leafIM[id]); }
  for (const im of touched) im.instanceMatrix.needsUpdate = true;
}
// nearest standing tree whose trunk is within `reach` of (x, z) and roughly in the direction (fx, fz)
export function treeNear(x, z, fx, fz, reach = 1.2) {
  let best = null, bd = reach;
  for (const t of trees) {
    if (t.down) continue;
    const dx = t.x - x, dz = t.z - z, d = Math.hypot(dx, dz), edge = d - 0.28 * t.s;
    if (edge < bd && (dx * fx + dz * fz) / (d || 1) > 0.45) { bd = edge; best = t; }
  }
  return best;
}
// lean a standing tree (hit wobble): only the trunk moves, the crown shivers with particles
export function tiltTree(t, ax, az) { if (!t.down) trunkMatrices(t, ax, az); }
// cut down: the tree disappears from the world (trunk, leaves, collision) and a loose copy is returned, pivoting
// at its base (x, 0, z), for the caller to animate falling and then remove
export function fellTree(t) {
  if (t.down) return null;
  t.down = true; trunkMatrices(t); showLeaves(t, false); world.removeBody(t.body);
  const g = new THREE.Group(); g.position.set(t.x, 0, t.z);
  const m = lam((t.pale ? TRUNK_LIGHT : TRUNK_DARK).clone());
  const inner = new THREE.Group(); inner.rotation.y = t.yaw; g.add(inner);
  const trunk = new THREE.Mesh(trunkGeo, m); trunk.scale.set(t.s, t.h, t.s); inner.add(trunk);
  const br = new THREE.Mesh(branchGeo, m); br.position.set(0.35 * t.s, 0.65 * t.h, 0); br.rotation.z = -0.7; br.scale.set(t.s, 0.5 * t.h, t.s); inner.add(br);
  const n = t.leaves[1] - t.leaves[0], leaves = new THREE.InstancedMesh(leafGeo, leafMat, n), c = new THREE.Color();
  for (let id = t.leaves[0]; id < t.leaves[1]; id++) {
    const o = id * 10;
    leaves.setMatrixAt(id - t.leaves[0], leafMatrix(id, t.x, t.z));
    leaves.setColorAt(id - t.leaves[0], c.setRGB(leafList[o + 7], leafList[o + 8], leafList[o + 9]));
  }
  g.add(leaves);
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; o.frustumCulled = false; } });
  return g;
}
// back to a full standing tree (regrown, or reset by a load / new game)
export function restoreTree(t) {
  if (!t.down) return;
  t.down = false; trunkMatrices(t); showLeaves(t, true);
  if (!world.bodies.includes(t.body)) world.addBody(t.body);
}
// silently take a tree away (loading a save where it was cut down)
export function hideTree(t) { if (t.down) return; t.down = true; trunkMatrices(t); showLeaves(t, false); world.removeBody(t.body); }

// ---------------------------------------------------------------- rocks + fallen leaves
export function scatterRocks(n) {
  const im = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.5, 0), lam('#7c78f0'), n);
  const mat = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  let k = 0;
  for (let i = 0; i < n * 6 && k < n; i++) {
    const x = rand(-95, 95), z = rand(-95, 95), mk = maskAt(x, z);
    if (mk.d < -1.2 || (mk.d > 6 && rnd() < 0.7) || mk.paved > 0.5 || mk.asphalt > 0.1) continue;
    const s = rand(0.35, 1.3);
    mat.compose(new THREE.Vector3(x, groundY(x, z) + 0.1 * s, z), q.setFromEuler(e.set(rand(0, 3), rand(0, 3), 0)), new THREE.Vector3(s, s * 0.65, s));
    im.setMatrixAt(k++, mat);
  }
  im.count = k; im.castShadow = true; im.receiveShadow = true; scene.add(im);
}
export const groundLeaves = { mesh: null };   // fallen leaves on the ground (world/seasons.js recolours / hides them)
export function scatterGroundLeaves(n) {
  const im = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.26, 0.26).rotateX(-Math.PI / 2), lam('#8a2a44', { side: THREE.DoubleSide }), n);
  const mat = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  let k = 0;
  for (let i = 0; i < n * 3 && k < n; i++) {
    const x = rand(-100, 100), z = rand(-100, 100);
    if (Math.hypot(x, z) > 110) continue;
    const y = Math.max(groundY(x, z), WATER_Y) + 0.02, s = rand(0.6, 1.4);
    mat.compose(new THREE.Vector3(x, y, z), q.setFromEuler(e.set(0, rand(0, 6.28), 0)), new THREE.Vector3(s, 1, s));
    im.setMatrixAt(k++, mat);
  }
  im.count = k; im.receiveShadow = true; scene.add(im);
  groundLeaves.mesh = im;
}
