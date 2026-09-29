// Grass (chunked blades), trees + bushes (instanced leaf squares), rocks, fallen leaves.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { HALF, WATER_Y } from '../game/config.js';
import { clamp, smooth, rnd, rand, pick } from '../engine/util.js';
import { scene, paint, lam, mesh, group, addStatic, DETAIL_LAYER } from '../engine/core.js';
import { maskAt, groundY, keepOut } from './worldmap.js';

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
const trunkLight = lam('#eadcea'), trunkDark = lam('#5b3b52');
function tree(x, z) {
  const type = pick(TREE_TYPES), s = rand(1.0, 1.45), h = rand(3.0, 4.2) * s;
  const pale = type === 'white' || type === 'pink' || rnd() < 0.3;
  const g = group(x, 0, z, rand(0, 6));
  mesh(new THREE.CylinderGeometry(0.13 * s, 0.24 * s, h, 6), pale ? trunkLight : trunkDark, g, 0, h / 2, 0);
  const br = mesh(new THREE.CylinderGeometry(0.06 * s, 0.1 * s, h * 0.5, 5), pale ? trunkLight : trunkDark, g, 0.35 * s, h * 0.65, 0);
  br.rotation.z = -0.7;
  const hex = LEAF_COLORS[type];
  addLeafCluster(x, h + 0.7 * s, z, rand(1.6, 2.0) * s, hex);
  const k = 2 + Math.floor(rnd() * 3);
  for (let i = 0; i < k; i++) {
    const a = rnd() * 6.28, rr = rand(0.9, 1.5) * s;
    addLeafCluster(x + Math.cos(a) * rand(0.9, 1.5) * s, h + rand(-0.6, 0.6) * s, z + Math.sin(a) * rand(0.9, 1.5) * s, rr, hex);
  }
  addStatic(new CANNON.Cylinder(0.3 * s, 0.3 * s, h, 8), x, h / 2, z);
}
function bush(x, z) {
  const hex = pick(['#7b8a4a', '#8a5a8a', '#5a6a8a', LEAF_COLORS.pink, LEAF_COLORS.orange, '#9a8aa0']);
  const r = rand(0.8, 1.4);
  addLeafCluster(x, r * 0.55, z, r, hex, 130);
  if (rnd() < 0.5) addLeafCluster(x + rand(-0.8, 0.8), r * 0.4, z + rand(-0.8, 0.8), r * 0.7, hex, 130);
}
// leaves are bucketed into 30 m cells, one InstancedMesh each, so off-screen trees get frustum-culled
function buildLeaves() {
  const n = leafList.length / 10, CELL = 30, cells = new Map();
  for (let i = 0; i < n; i++) {
    const key = Math.floor(leafList[i * 10] / CELL) + ',' + Math.floor(leafList[i * 10 + 2] / CELL);
    if (!cells.has(key)) cells.set(key, []);
    cells.get(key).push(i);
  }
  const geo = new THREE.PlaneGeometry(0.3, 0.3), material = paint(new THREE.MeshLambertMaterial({ side: THREE.DoubleSide }), 'leaves');
  const mat = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), s = new THREE.Vector3(), c = new THREE.Color();
  for (const ids of cells.values()) {
    const im = new THREE.InstancedMesh(geo, material, ids.length);
    ids.forEach((id, k) => {
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
    trees.push({ x, z }); canopies.push({ x, z, r: 3.6 }); tree(x, z);
  }
  let bushes = 0;
  for (let i = 0; i < 3000 && bushes < 90; i++) {
    const x = rand(-88, 88), z = rand(-88, 88), m = maskAt(x, z);
    if (m.d < 1.5 || m.paved > 0.3 || m.asphalt > 0.05) continue;
    if (keepOut.some(k => Math.hypot(x - k.x, z - k.z) < k.r + 1) || trees.some(t => Math.hypot(t.x - x, t.z - z) < 2.5)) continue;
    bush(x, z); canopies.push({ x, z, r: 1.6 }); bushes++;
  }
  return { trees: trees.length, bushes, leaves: buildLeaves() };
}

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
