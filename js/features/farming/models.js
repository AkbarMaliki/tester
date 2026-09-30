// Farming models, low-poly from primitives (flat-shaded, baked to one vertex-coloured geometry each):
//   plantGeo(crop, stage, variant)  every growth stage of every crop: 0 seed mound, 1 sprout, 2 young, 3 grown
//                                   (flowers / buds), 4 ripe (fruit / produce showing), 'dead' = withered
//   treeGeo / fruitGeo              fruit trees (sapling → mature) + the fruit hanging on them
//   produceModel / toolModel / …    item protos (bag icons, held over the head, dropped on the ground)
//   debrisGeo / objectGeo           weeds, stones, branches, stumps · sprinklers, scarecrow
//   shopKiosk / shippingBin / well / greenhouseFrame   static buildings (+ physics + keepOut), built once
//   greenhouseGlass / fence / fieldBase                parts that change during play (built after static batching)
// Plant shapes and colours come from public/assets/data/farming.json (crop.shape, crop.produce, colours).
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { lam, glowMat, mesh, group, addStatic, DETAIL_LAYER } from '../../engine/core.js';
import { bakeRig } from '../../engine/batch.js';
import { canvasTex } from '../../engine/util.js';
import { keepOut } from '../../world/worldmap.js';

const box = (x, y, z) => new THREE.BoxGeometry(x, y, z);
const cyl = (a, b, h, n = 7) => new THREE.CylinderGeometry(a, b, h, n);
const ico = (r, d = 0) => new THREE.IcosahedronGeometry(r, d);
const sph = (r, w = 8, h = 6) => new THREE.SphereGeometry(r, w, h);
const mats = new Map();
const M = (c) => { if (!mats.has(c)) mats.set(c, lam(c)); return mats.get(c); };
const WOOD = '#8a6a4a', WOOD_D = '#5d4030', SOIL = '#6a4430', DEAD = '#8a6a3a', DEAD_D = '#6a4a2a';

// deterministic randomness per model, so a crop looks the same every time it's built
let seed = 1;
const R = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
const reseed = (key) => { seed = 7; for (const ch of String(key)) seed = (seed * 31 + ch.charCodeAt(0)) % 2147483647 || 1; };
const jit = (a) => (R() - 0.5) * 2 * a;

// builds into a throw-away group, bakes it into one vertex-coloured geometry
export const VC = lam('#ffffff', { vertexColors: true });
function bakeGeo(build) {
  const g = new THREE.Group(); build(g);
  bakeRig(g, [g]);
  const m = g.children.find(c => c.isMesh);
  return m ? m.geometry : new THREE.BoxGeometry(0.001, 0.001, 0.001);
}
// an item model (proto): baked, drawn SCALE× bigger like features/pickup items, on the detail layer
const SCALE = 1.4;
function itemProto(build) {
  const g = new THREE.Group(), inner = new THREE.Group(); inner.scale.setScalar(SCALE); g.add(inner);
  build(inner);
  bakeRig(g, [g]);
  g.traverse(o => { o.layers.set(DETAIL_LAYER); if (o.isMesh) o.castShadow = true; });
  return g;
}

// ---------------------------------------------------------------- plant parts
// flat leaf from its base (x,y,z): len along its direction, yaw around y, tilt = angle above horizontal
function leaf(g, x, y, z, len, wid, yaw, tilt, color, thick = 0.18) {
  const p = new THREE.Group(); p.position.set(x, y, z); p.rotation.y = yaw; g.add(p);
  const q = new THREE.Group(); q.rotation.x = -tilt; p.add(q);
  mesh(sph(0.5, 6, 3), M(color), q, 0, 0, len / 2, false).scale.set(wid, wid * thick, len);
  return p;
}
function stem(g, x, y0, z, h, r, color, lean = 0, yaw = 0) {
  const p = new THREE.Group(); p.position.set(x, y0, z); p.rotation.set(0, yaw, 0); g.add(p);
  const q = new THREE.Group(); q.rotation.x = lean; p.add(q);
  mesh(cyl(r * 0.75, r, h, 5), M(color), q, 0, h / 2, 0, false);
  // world-ish top of the stem (for placing heads on it)
  return new THREE.Vector3(x + Math.sin(yaw) * Math.sin(lean) * h, y0 + Math.cos(lean) * h, z + Math.cos(yaw) * Math.sin(lean) * h);
}
const darker = (hex, k = 0.7) => '#' + new THREE.Color(hex).multiplyScalar(k).getHexString();
const lighter = (hex, k = 0.35) => '#' + new THREE.Color(hex).lerp(new THREE.Color('#ffffff'), k).getHexString();

function seedMound(g, c) {
  mesh(sph(0.17, 8, 4), M(SOIL), g, 0, 0.01, 0, false).scale.set(1, 0.3, 1);
  for (let i = 0; i < 3; i++) mesh(ico(0.028), M(c.kind === 'tree' ? '#8a5a2a' : '#f0dca0'), g, jit(0.07), 0.055, jit(0.07), false);
}
function sprout(g, c) {
  stem(g, 0, 0, 0, 0.12, 0.014, c.leaf);
  for (const s of [0, Math.PI]) leaf(g, 0, 0.12, 0, 0.1, 0.07, s + 0.4, 0.35, lighter(c.leaf, 0.2));
  mesh(sph(0.1, 6, 3), M(SOIL), g, 0, 0, 0, false).scale.set(1, 0.25, 1);
}

// ---------------------------------------------------------------- plant shapes (stage 2 = young, 3 = grown, 4 = ripe)
const SHAPES = {
  root(g, c, st) {
    const s = st === 2 ? 0.6 : 1, n = c.feather ? 9 : 6;
    for (let i = 0; i < n; i++) {
      const yaw = i / n * Math.PI * 2 + jit(0.3), tilt = 0.9 + jit(0.25);
      if (c.feather) {   // carrot: thin feathery fronds
        const p = leaf(g, 0, 0.04, 0, 0.38 * s, 0.035, yaw, tilt, c.leaf, 0.5);
        for (let k = 1; k <= 3; k++) leaf(p, 0, Math.sin(tilt) * 0.1 * k * s, Math.cos(tilt) * 0.1 * k * s, 0.08 * s, 0.03, 0.9, tilt - 0.3, lighter(c.leaf, 0.1), 0.5);
      } else leaf(g, 0, 0.03, 0, 0.3 * s, 0.13 * s, yaw, tilt, i % 2 ? c.leaf : lighter(c.leaf, 0.12));
    }
    if (st === 3 && c.fruit) for (let i = 0; i < 4; i++) { const a = i * 1.6; mesh(ico(0.028), M(c.fruit), g, Math.cos(a) * 0.12, 0.3, Math.sin(a) * 0.12, false); }
    if (st < 3) return;
    const k = st === 4 ? 1 : 0.55;
    if (c.produce === 'bulb') {
      mesh(sph(0.12 * k, 8, 6), M(c.color), g, 0, 0.05 * k, 0).scale.set(1, 0.85, 1);
      mesh(sph(0.1 * k, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2), M(c.color2), g, 0, 0.09 * k, 0, false).scale.set(1, 0.6, 1);
    } else if (c.produce === 'long') mesh(cyl(0.075 * k, 0.06 * k, 0.1, 8), M(c.color), g, 0, 0.04, 0);
    else for (let i = 0; i < (st === 4 ? 3 : 2); i++) { const a = i * 2.1 + 0.4; mesh(ico(0.075 * k, 1), M(c.color), g, Math.cos(a) * 0.14, 0.02, Math.sin(a) * 0.14).scale.set(1.2, 0.7, 1); }
  },
  leafy(g, c, st) {
    if (c.produce === 'bokchoy') {   // upright spoon leaves on white stalks
      const n = st === 2 ? 4 : 7, h = st === 2 ? 0.16 : st === 3 ? 0.26 : 0.34;
      for (let i = 0; i < n; i++) {
        const yaw = i / n * Math.PI * 2, lean = 0.25 + jit(0.1);
        const top = stem(g, 0, 0, 0, h * 0.55, 0.03, c.color2, lean, yaw);
        leaf(g, top.x, top.y - 0.02, top.z, h * 0.75, 0.12 + h * 0.2, yaw, 1.25, i % 2 ? c.color : darker(c.color, 0.85));
      }
      return;
    }
    const n = st === 2 ? 5 : 8, len = st === 2 ? 0.2 : st === 3 ? 0.3 : 0.36;
    for (let i = 0; i < n; i++) leaf(g, 0, 0.02, 0, len, len * 0.85, i / n * Math.PI * 2 + jit(0.2), 0.3 + jit(0.1), i % 2 ? c.leaf : c.color2);
    if (st === 2) return;
    const r = st === 3 ? 0.1 : 0.19;
    mesh(sph(r, 9, 7), M(c.color), g, 0, r * 0.85, 0).scale.set(1, 0.88, 1);
    for (let i = 0; i < 3; i++) leaf(g, 0, 0.03, 0, r * 1.5, r * 1.3, i * 2.1, 1.05, lighter(c.color, 0.1));
  },
  bush(g, c, st) {
    const s = st === 2 ? 0.55 : 1, H = 0.85 * s;
    mesh(cyl(0.016, 0.02, H + 0.12, 5), M(WOOD), g, 0.1, (H + 0.12) / 2, -0.06);   // stake
    stem(g, 0, 0, 0, H, 0.028, darker(c.leaf, 0.8));
    const spots = [];
    for (const [h, n] of [[0.28, 3], [0.5, 3], [0.72, 2], [0.95, 1]]) {
      for (let i = 0; i < n; i++) {
        const a = i / n * Math.PI * 2 + h * 5, r = (1.05 - h) * 0.2 * s;
        const x = Math.cos(a) * r, z = Math.sin(a) * r, y = h * H;
        mesh(ico(0.13 * s * (1.1 - h * 0.4), 0), M(i % 2 ? c.leaf : lighter(c.leaf, 0.1)), g, x, y, z).scale.set(1, 0.75, 1);
        spots.push([x * 1.6 + jit(0.03), y - 0.05 * s, z * 1.6 + jit(0.03)]);
      }
    }
    if (st === 3) for (const [x, y, z] of spots.slice(0, 6)) mesh(ico(0.03), M(c.fruit || '#ffffff'), g, x, y + 0.06, z, false);
    if (st !== 4) return;
    for (const [x, y, z] of spots.slice(0, 7)) {
      if (c.produce === 'round') mesh(sph(0.075, 7, 5), M(c.color), g, x, y, z);
      else if (c.thin) { const p = mesh(cyl(0.022, 0.006, 0.16, 5), M(c.color), g, x, y - 0.05, z, false); p.rotation.set(jit(0.3), 0, jit(0.4)); }
      else { mesh(sph(0.06, 7, 5), M(c.color), g, x, y - 0.06, z).scale.set(1, 2, 1); mesh(cyl(0.04, 0.02, 0.04, 5), M(c.color2), g, x, y + 0.06, z, false); }
    }
  },
  low(g, c, st) {   // strawberry-like: low trefoil leaves, runners, berries on the edge
    const s = st === 2 ? 0.6 : 1, n = 6;
    for (let i = 0; i < n; i++) {
      const yaw = i / n * Math.PI * 2 + jit(0.2), top = stem(g, 0, 0, 0, 0.14 * s, 0.012, darker(c.leaf, 0.8), 0.6, yaw);
      for (const d of [-0.5, 0, 0.5]) leaf(g, top.x, top.y, top.z, 0.1 * s, 0.07 * s, yaw + d, 0.1, i % 2 ? c.leaf : lighter(c.leaf, 0.12));
    }
    if (st < 3) return;
    for (let i = 0; i < 5; i++) {
      const a = i / 5 * Math.PI * 2 + 0.3, x = Math.cos(a) * 0.26, z = Math.sin(a) * 0.26;
      if (st === 3) { mesh(ico(0.035), M(c.fruit || '#ffffff'), g, x, 0.1, z, false); mesh(ico(0.015), M('#ffd23a'), g, x, 0.13, z, false); }
      else { const b = mesh(cyl(0.05, 0.012, 0.09, 6), M(c.color), g, x, 0.06, z); b.rotation.z = Math.PI + jit(0.3); mesh(cyl(0.04, 0.04, 0.012, 5), M(c.color2), g, x, 0.11, z, false); }
    }
  },
  stalk(g, c, st) {   // corn
    const s = st === 2 ? 0.5 : 1, H = 1.55 * s;
    stem(g, 0, 0, 0, H, 0.04, darker(c.leaf, 0.85));
    for (let i = 0; i < 7; i++) leaf(g, 0, (0.12 + i * 0.12) * H, 0, 0.5 * s, 0.09, i * 2.4, 0.35 - i * 0.03, i % 2 ? c.leaf : lighter(c.leaf, 0.12), 0.25);
    if (st < 3) return;
    for (let i = 0; i < 5; i++) { const p = mesh(cyl(0.008, 0.008, 0.22, 4), M(c.fruit || '#f4e0a0'), g, 0, H + 0.08, 0, false); p.rotation.set(Math.cos(i * 1.3) * 0.5, 0, Math.sin(i * 1.3) * 0.5); }
    if (st !== 4) return;
    for (const [h, a] of [[0.55, 0.3], [0.72, 3.4]]) {
      const p = new THREE.Group(); p.position.set(0, h * H, 0); p.rotation.set(0, a, 0); g.add(p);
      const q = new THREE.Group(); q.rotation.x = 0.45; p.add(q);
      mesh(cyl(0.055, 0.04, 0.26, 6), M(c.color2), q, 0, 0.14, 0.04);
      mesh(sph(0.042, 6, 4), M(c.color), q, 0, 0.27, 0.04, false);
      mesh(cyl(0.01, 0.01, 0.1, 4), M('#a0602a'), q, 0, 0.33, 0.04, false);
    }
  },
  sunflower(g, c, st) {
    const s = st === 2 ? 0.5 : 1, H = 1.35 * s;
    stem(g, 0, 0, 0, H, 0.03, darker(c.leaf, 0.85));
    for (let i = 0; i < 5; i++) leaf(g, 0, (0.15 + i * 0.15) * H, 0, 0.24 * s, 0.22 * s, i * 2.5, 0.2, i % 2 ? c.leaf : lighter(c.leaf, 0.1));
    if (st === 2) return;
    const head = new THREE.Group(); head.position.set(0, H, 0.04); head.rotation.x = 1.15; g.add(head);
    if (st === 3) { mesh(sph(0.08, 7, 5), M(c.leaf), head, 0, 0, 0); return; }
    mesh(cyl(0.15, 0.15, 0.05, 12), M('#6a3a1a'), head, 0, 0.01, 0);
    for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2; leaf(head, Math.cos(a) * 0.13, 0, Math.sin(a) * 0.13, 0.13, 0.07, Math.atan2(Math.cos(a), Math.sin(a)), 0.05, c.color, 0.3); }
  },
  vine(g, c, st) {   // pumpkin / melon: sprawling leaves, flowers, one big fruit
    const n = st === 2 ? 4 : 8, r = st === 2 ? 0.18 : 0.34;
    for (let i = 0; i < n; i++) {
      const a = i / n * Math.PI * 2 + jit(0.3), d = r * (0.7 + R() * 0.5);
      leaf(g, Math.cos(a) * d * 0.4, 0.04, Math.sin(a) * d * 0.4, 0.26, 0.26, Math.atan2(Math.cos(a), Math.sin(a)), 0.2, i % 2 ? c.leaf : lighter(c.leaf, 0.12), 0.3);
    }
    for (let i = 0; i < 2; i++) { const v = mesh(cyl(0.012, 0.012, r * 2.2, 4), M(darker(c.leaf, 0.8)), g, 0, 0.03, 0, false); v.rotation.set(Math.PI / 2, i * 1.7 + 0.5, 0); v.rotation.order = 'YXZ'; }
    if (st === 3) for (let i = 0; i < 3; i++) { const a = i * 2.1 + 0.8; mesh(new THREE.ConeGeometry(0.05, 0.08, 5), M(c.fruit || '#ffd23a'), g, Math.cos(a) * 0.3, 0.12, Math.sin(a) * 0.3, false).rotation.x = Math.PI; }
    if (st !== 4) return;
    const f = new THREE.Group(); f.position.set(0.06, 0, 0.12); g.add(f);
    bigFruit(f, c, 0.23);
  },
  flower(g, c, st, v = 0) {
    const cols = c.colors || [c.color], n = c.rainbow ? 5 : 3, s = st === 2 ? 0.55 : 1;
    const style = { tulip: 'cup', krisan: 'pom', bunga_salju: 'bell' }[c.id] || (c.rainbow ? 'star' : 'cup');
    for (let i = 0; i < n; i++) {
      const yaw = i / n * Math.PI * 2 + 0.5, lean = i ? 0.22 : 0.05, h = (0.46 - i * 0.03) * s;
      const top = stem(g, 0, 0, 0, h, 0.012, c.leaf, lean, yaw);
      leaf(g, 0, 0.02, 0, 0.2 * s, 0.07, yaw + 0.6, 0.9, lighter(c.leaf, 0.1));
      if (st === 2) continue;
      const col = c.rainbow ? cols[(i + v) % cols.length] : cols[v % cols.length];
      if (st === 3) { mesh(sph(0.04, 6, 4), M(lighter(c.leaf, 0.3)), g, top.x, top.y, top.z, false).scale.set(1, 1.5, 1); mesh(sph(0.025, 5, 3), M(col), g, top.x, top.y + 0.04, top.z, false); continue; }
      const hd = new THREE.Group(); hd.position.copy(top); g.add(hd);
      if (style === 'cup') for (let k = 0; k < 5; k++) { const a = k / 5 * Math.PI * 2; leaf(hd, Math.cos(a) * 0.02, -0.02, Math.sin(a) * 0.02, 0.1, 0.06, Math.atan2(Math.cos(a), Math.sin(a)), 1.25, col, 0.5); }
      else if (style === 'pom') { mesh(ico(0.07, 1), M(col), hd, 0, 0.02, 0); mesh(ico(0.03), M(darker(col, 0.8)), hd, 0, 0.08, 0, false); }
      else if (style === 'bell') { mesh(new THREE.ConeGeometry(0.05, 0.08, 6, 1, true), M(col), hd, 0.03, -0.02, 0, false); mesh(ico(0.02), M('#bfe0a0'), hd, 0.03, 0.03, 0, false); }
      else { for (let k = 0; k < 5; k++) { const a = k / 5 * Math.PI * 2; leaf(hd, 0, 0, 0, 0.1, 0.06, a, 0.3, col, 0.3); } mesh(ico(0.025), M('#ffffff'), hd, 0, 0.02, 0, false); }
    }
  },
};
// pumpkin (ribs) / watermelon (stripes): a sphere cut into wedges of two alternating colours
function bigFruit(g, c, r) {
  const n = 10;
  for (let i = 0; i < n; i++) {
    const w = mesh(new THREE.SphereGeometry(r, 3, 7, i / n * Math.PI * 2, Math.PI * 2 / n), M(i % 2 ? c.color : (c.pattern === 'stripes' ? c.color2 : darker(c.color, 0.85))), g, 0, r * 0.85, 0);
    w.scale.set(c.pattern === 'stripes' ? 1.25 : 1, c.pattern === 'stripes' ? 0.85 : 0.8, 1);
  }
  mesh(cyl(0.025, 0.035, 0.1, 5), M(c.pattern === 'stripes' ? darker(c.leaf) : '#6a5020'), g, 0, r * 1.62, 0, false).rotation.z = 0.3;
}
function dead(g, c) {
  const tall = c.shape === 'stalk' || c.shape === 'sunflower' || c.shape === 'bush';
  if (tall) { const s = stem(g, 0, 0, 0, 0.45, 0.025, DEAD_D, 0.9, jit(3)); leaf(g, s.x, s.y, s.z, 0.2, 0.08, jit(3), -0.4, DEAD); }
  for (let i = 0; i < 5; i++) leaf(g, 0, 0.02, 0, 0.22, 0.09, i * 1.3 + jit(0.3), 0.08, i % 2 ? DEAD : DEAD_D);
}

// stage: 0..4 or 'dead'; variant: flower colour
export function plantGeo(c, stage, variant = 0) {
  reseed(`${c.id}:${stage}:${variant}`);
  return bakeGeo((g) => {
    if (stage === 'dead') dead(g, c);
    else if (stage === 0) seedMound(g, c);
    else if (stage === 1) sprout(g, c);
    else SHAPES[c.shape](g, c, stage, variant);
  });
}

// ---------------------------------------------------------------- fruit trees
// stage 0 sapling, 1 small, 2 young, 3 grown. `blossom` = flowers instead of plain leaves (in season, no fruit yet)
const CANOPY = [[0, 2.15, 0, 0.72], [0.45, 1.95, 0.2, 0.55], [-0.4, 2.0, 0.25, 0.5], [0.1, 1.95, -0.45, 0.55], [-0.2, 2.5, -0.05, 0.45]];
export function treeGeo(c, stage) {
  reseed(`${c.id}:tree:${stage}`);
  return bakeGeo((g) => {
    if (stage === 0) {
      stem(g, 0, 0, 0, 0.45, 0.025, c.trunk);
      for (let i = 0; i < 4; i++) leaf(g, 0, 0.3 + i * 0.05, 0, 0.14, 0.08, i * 1.7, 0.4, c.leaf);
      mesh(sph(0.16, 7, 4), M(SOIL), g, 0, 0, 0, false).scale.set(1, 0.3, 1);
      return;
    }
    const k = [0, 0.4, 0.7, 1][stage];
    mesh(cyl(0.07 * k + 0.03, 0.1 * k + 0.05, 1.7 * k, 7), M(c.trunk), g, 0, 0.85 * k, 0);
    for (const s of [-1, 1]) { const b = mesh(cyl(0.025, 0.045, 0.6 * k, 5), M(c.trunk), g, s * 0.18 * k, 1.35 * k, 0, false); b.rotation.z = -s * 0.7; }
    for (const [x, y, z, r] of CANOPY.slice(0, stage + 2)) mesh(ico(r * k, 1), M(R() > 0.5 ? c.leaf : lighter(c.leaf, 0.12)), g, x * k, y * k, z * k);
    mesh(cyl(0.3 * k, 0.35 * k, 0.05, 8), M(SOIL), g, 0, 0.02, 0, false);
  });
}
// blossoms on a grown tree (its season, before it fruits) and the fruit hanging on it (n = 1..3)
const FRUIT_AT = [[0.55, 1.75, 0.55], [-0.6, 1.8, 0.45], [0.2, 1.65, 0.75], [0.7, 2.2, -0.2], [-0.35, 2.5, 0.5], [0.05, 1.7, -0.7]];
export function fruitGeo(c, n) {
  reseed(`${c.id}:fruit:${n}`);
  return bakeGeo((g) => {
    for (const [x, y, z] of FRUIT_AT.slice(0, n * 2)) {
      if (c.produce === 'cherry') { for (const d of [-0.04, 0.04]) mesh(sph(0.06, 6, 4), M(c.color), g, x + d, y - 0.1, z); }
      else mesh(sph(0.1, 7, 5), M(c.color), g, x, y - 0.08, z).scale.set(1, c.oval ? 1.3 : 1, 1);
      mesh(cyl(0.008, 0.008, 0.08, 3), M(WOOD_D), g, x, y, z, false);
    }
  });
}
export function blossomGeo(c) {
  reseed(`${c.id}:blossom`);
  return bakeGeo((g) => { for (const [x, y, z, r] of CANOPY) for (let i = 0; i < 6; i++) mesh(ico(0.05), M(c.blossom || '#ffffff'), g, x + jit(r), y + jit(r * 0.8), z + jit(r), false); });
}

// ---------------------------------------------------------------- debris, soil, placed objects
export function debrisGeo(kind) {
  reseed(kind);
  return bakeGeo((g) => {
    if (kind === 'weed') {
      for (let i = 0; i < 7; i++) leaf(g, jit(0.08), 0, jit(0.08), 0.3 + R() * 0.15, 0.06, R() * 6.3, 1.1 + jit(0.3), i % 2 ? '#5a9a2a' : '#7ab83a', 0.4);
      mesh(ico(0.03), M('#fff4a0'), g, 0.05, 0.3, 0, false);
    } else if (kind === 'stone') {
      mesh(new THREE.DodecahedronGeometry(0.26, 0), M('#a39c96'), g, 0, 0.14, 0).scale.set(1.2, 0.7, 1);
      mesh(new THREE.DodecahedronGeometry(0.13, 0), M('#c4bcb4'), g, 0.22, 0.07, 0.12).scale.set(1, 0.7, 1);
    } else if (kind === 'branch') {
      for (const [a, l] of [[0.4, 0.7], [-0.5, 0.45]]) { const b = mesh(cyl(0.035, 0.05, l, 5), M(WOOD), g, 0, 0.05, 0); b.rotation.set(0, a, Math.PI / 2); b.rotation.order = 'YXZ'; }
      leaf(g, 0.2, 0.06, 0.1, 0.12, 0.07, 1, 0.1, '#8fb84a');
    } else if (kind === 'stump') {
      mesh(cyl(0.3, 0.38, 0.4, 8), M('#7a5238'), g, 0, 0.2, 0);
      mesh(cyl(0.26, 0.26, 0.02, 8), M('#d8b080'), g, 0, 0.41, 0, false);
      for (let i = 0; i < 3; i++) { const r = mesh(cyl(0.05, 0.09, 0.4, 5), M('#7a5238'), g, Math.cos(i * 2.1) * 0.3, 0.06, Math.sin(i * 2.1) * 0.3); r.rotation.set(0, -i * 2.1, 1.2); r.rotation.order = 'YXZ'; }
    }
  });
}
export const soilGeo = () => new THREE.BoxGeometry(0.96, 0.05, 0.96).translate(0, 0.025, 0);
// fertiliser granules on the soil (white, tinted per instance)
export function fertGeo() { reseed('fert'); return bakeGeo((g) => { for (let i = 0; i < 14; i++) mesh(ico(0.022), M('#ffffff'), g, jit(0.4), 0.055, jit(0.4), false); }); }

const LEVEL_METAL = ['#c98a4a', '#e8f0ff', '#ffcc33'];   // sprinkler: copper, silver, gold
function sprinkler(g, lvl) {
  mesh(cyl(0.16, 0.19, 0.06, 8), M('#6a6a7a'), g, 0, 0.03, 0);
  mesh(cyl(0.03, 0.03, 0.3, 6), M(LEVEL_METAL[lvl]), g, 0, 0.2, 0);
  mesh(cyl(0.09, 0.07, 0.07, 8), M(LEVEL_METAL[lvl]), g, 0, 0.37, 0);
  for (let i = 0; i < 2 + lvl * 2; i++) { const a = i / (2 + lvl * 2) * Math.PI * 2; const n = mesh(cyl(0.012, 0.012, 0.12, 4), M('#4a4a5a'), g, Math.cos(a) * 0.08, 0.4, Math.sin(a) * 0.08, false); n.rotation.set(0, -a, Math.PI / 2 - 0.4); n.rotation.order = 'YXZ'; }
  mesh(ico(0.03), M('#5fd0ff'), g, 0, 0.44, 0, false);
}
function scarecrow(g) {
  mesh(cyl(0.04, 0.05, 1.45, 6), M(WOOD), g, 0, 0.72, 0);
  const bar = mesh(cyl(0.03, 0.03, 0.95, 5), M(WOOD), g, 0, 1.1, 0); bar.rotation.z = Math.PI / 2;
  mesh(box(0.46, 0.4, 0.2), M('#c9304c'), g, 0, 1.02, 0);
  for (const x of [-0.12, 0.08]) mesh(box(0.05, 0.4, 0.21), M('#8e1f38'), g, x, 1.02, 0, false);
  for (const s of [-1, 1]) { mesh(box(0.2, 0.14, 0.16), M('#c9304c'), g, s * 0.3, 1.1, 0); for (let i = 0; i < 3; i++) { const t = mesh(cyl(0.012, 0.004, 0.14, 3), M('#f0d060'), g, s * (0.42 + i * 0.015), 1.08 + (i - 1) * 0.03, 0, false); t.rotation.z = s * (1.3 + i * 0.1); } }
  mesh(sph(0.15, 8, 6), M('#e8d0a0'), g, 0, 1.4, 0);
  for (const s of [-1, 1]) mesh(box(0.03, 0.03, 0.02), M('#2a1a10'), g, s * 0.05, 1.43, 0.14, false);
  mesh(box(0.08, 0.015, 0.02), M('#2a1a10'), g, 0, 1.36, 0.14, false);
  mesh(cyl(0.28, 0.28, 0.03, 10), M('#e0c060'), g, 0, 1.53, 0);
  mesh(cyl(0.1, 0.14, 0.14, 8), M('#e0c060'), g, 0, 1.6, 0);
  mesh(cyl(0.141, 0.141, 0.03, 8), M('#c9304c'), g, 0, 1.56, 0, false);
}
export function objectGeo(def) { reseed(def.id); return bakeGeo((g) => (def.model === 'scarecrow' ? scarecrow(g) : sprinkler(g, def.level || 0))); }

// the highlighted tile(s) in front of the kid
export function cursorMaterial() {
  const tex = canvasTex(64, 64, (c, w, h) => { c.clearRect(0, 0, w, h); c.strokeStyle = '#ffffff'; c.lineWidth = 6; c.strokeRect(4, 4, w - 8, h - 8); c.fillStyle = '#ffffff22'; c.fillRect(4, 4, w - 8, h - 8); });
  return new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
}
export const cursorGeo = () => new THREE.PlaneGeometry(0.98, 0.98).rotateX(-Math.PI / 2);

// ---------------------------------------------------------------- item protos
const PRODUCE = {
  bulb(g, c) {
    mesh(sph(0.13, 8, 6), M(c.color), g, 0, 0.12, 0).scale.set(1, 0.9, 1);
    mesh(sph(0.1, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2), M(c.color2), g, 0, 0.16, 0, false).scale.set(1, 0.7, 1);
    mesh(cyl(0.02, 0.002, 0.08, 4), M(c.color), g, 0, 0.02, 0, false);
    for (let i = 0; i < 3; i++) leaf(g, 0, 0.22, 0, 0.16, 0.07, i * 2.1, 1.1, c.leaf);
  },
  long(g, c) {
    const p = new THREE.Group(); p.rotation.z = Math.PI / 2 - 0.1; p.position.y = 0.08; g.add(p);
    if (c.thin) { mesh(cyl(0.035, 0.008, 0.26, 6), M(c.color), p, 0, 0, 0); mesh(cyl(0.03, 0.035, 0.04, 6), M(c.color2), p, 0, 0.14, 0, false); }
    else if (c.shape === 'root') { mesh(cyl(0.075, 0.012, 0.34, 7), M(c.color), p, 0, -0.02, 0); for (let i = 0; i < 3; i++) leaf(p, 0, 0.15, 0, 0.16, 0.05, i * 2.1, 1.2, c.color2); }
    else { mesh(sph(0.09, 8, 6), M(c.color), p, 0, 0, 0).scale.set(1, 2.1, 1); mesh(cyl(0.05, 0.03, 0.06, 6), M(c.color2), p, 0, 0.19, 0, false); }
  },
  potato(g, c) {
    mesh(ico(0.12, 1), M(c.color), g, 0, 0.09, 0).scale.set(1.3, 0.8, 1);
    mesh(ico(0.08, 1), M(c.color), g, 0.16, 0.06, 0.06).scale.set(1.2, 0.8, 1);
    for (let i = 0; i < 4; i++) mesh(ico(0.015), M(c.color2), g, jit(0.12), 0.16, jit(0.08), false);
  },
  round(g, c) {
    mesh(sph(0.14, 9, 7), M(c.color), g, 0, 0.13, 0).scale.set(c.oval ? 0.85 : 1, c.oval ? 1 : 0.9, c.oval ? 1.25 : 1);
    mesh(cyl(0.012, 0.015, 0.06, 4), M(WOOD_D), g, 0, 0.27, 0, false);
    leaf(g, 0, 0.27, 0, 0.12, 0.07, 0.5, 0.3, c.color2);
  },
  berry(g, c) {
    const b = mesh(cyl(0.12, 0.03, 0.2, 8), M(c.color), g, 0, 0.12, 0); b.rotation.z = 0;
    mesh(sph(0.12, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2), M(c.color), g, 0, 0.21, 0, false).scale.set(1, 0.4, 1);
    for (let i = 0; i < 8; i++) { const a = i * 0.8, y = 0.08 + (i % 3) * 0.04, r = 0.035 + y * 0.35; mesh(ico(0.012), M('#fff0a0'), g, Math.cos(a) * r * 1.1, y, Math.sin(a) * r * 1.1, false); }
    for (let i = 0; i < 5; i++) leaf(g, 0, 0.24, 0, 0.08, 0.05, i * 1.26, 0.1, c.color2);
  },
  cherry(g, c) {
    for (const s of [-1, 1]) { mesh(sph(0.075, 8, 6), M(c.color), g, s * 0.07, 0.075, 0); const st = mesh(cyl(0.008, 0.008, 0.2, 3), M('#4f8f2a'), g, s * 0.035, 0.22, 0, false); st.rotation.z = s * 0.35; }
    leaf(g, 0, 0.31, 0, 0.12, 0.07, 1.2, 0.3, c.color2);
  },
  head(g, c) {
    mesh(sph(0.17, 9, 7), M(c.color), g, 0, 0.15, 0).scale.set(1, 0.9, 1);
    for (let i = 0; i < 5; i++) leaf(g, 0, 0.02, 0, 0.24, 0.2, i * 1.26, 0.9, i % 2 ? c.color2 : lighter(c.color, 0.1));
  },
  bokchoy(g, c) {
    const p = new THREE.Group(); p.rotation.z = Math.PI / 2; p.position.y = 0.08; g.add(p);
    for (let i = 0; i < 5; i++) { const a = (i - 2) * 0.18; const s = new THREE.Group(); s.rotation.z = a; p.add(s); mesh(cyl(0.025, 0.035, 0.18, 5), M(c.color2), s, 0, -0.06, 0); leaf(s, 0, 0.02, 0, 0.22, 0.12, 0, 1.5, c.color); }
  },
  big(g, c) { bigFruit(g, c, 0.2); },
  cob(g, c) {
    const p = new THREE.Group(); p.rotation.z = Math.PI / 2; p.position.y = 0.07; g.add(p);
    mesh(cyl(0.065, 0.05, 0.3, 8), M(c.color), p, 0, 0, 0);
    for (let i = 0; i < 3; i++) leaf(p, 0, -0.14, 0, 0.3, 0.1, i * 2.1, 1.35, c.color2, 0.3);
  },
  bloom(g, c, v = 0) {
    const cols = c.colors || [c.color];
    for (let i = 0; i < 3; i++) {
      const s = stem(g, 0, 0.02, 0, 0.3, 0.012, c.leaf, 1.35, (i - 1) * 0.35);
      const col = c.rainbow ? cols[i % cols.length] : cols[v % cols.length];
      mesh(ico(0.06, 1), M(col), g, s.x, s.y + 0.02, s.z).scale.set(1, 0.7, 1);
      mesh(ico(0.025), M(c.id === 'bunga_matahari' ? '#6a3a1a' : '#ffe08a'), g, s.x, s.y + 0.06, s.z, false);
    }
    mesh(box(0.05, 0.05, 0.08), M('#c9304c'), g, 0, 0.04, 0.12, false);   // ribbon
  },
};
// harvested crop / tree fruit (rare = gold tint + sparkles)
export function produceModel(c, { rare = false, variant = 0 } = {}) {
  reseed(`${c.id}:produce`);
  const g = itemProto((g) => {
    PRODUCE[c.produce](g, c, variant);
    if (rare) for (let i = 0; i < 4; i++) mesh(new THREE.OctahedronGeometry(0.035), M('#fff6b0'), g, jit(0.18), 0.3 + R() * 0.12, jit(0.18), false);
  });
  if (rare) g.traverse(o => { if (o.isMesh) o.material = lam('#ffd23a', { vertexColors: true, emissive: '#6a4a00' }); });
  return g;
}
// giant crop (3x3 tiles): the produce, huge, lying on the field
export function giantGeo(c) { reseed(`${c.id}:giant`); return bakeGeo((g) => { const s = new THREE.Group(); s.scale.setScalar(4.6); g.add(s); PRODUCE[c.produce](s, c); }); }

// seed packet (crop colour on the label) or a sapling in a burlap ball for trees
export function seedModel(c) {
  reseed(`${c.id}:seed`);
  return itemProto((g) => {
    if (c.kind === 'tree') {
      mesh(sph(0.11, 8, 6), M('#b08a5a'), g, 0, 0.1, 0).scale.set(1, 0.85, 1);
      mesh(cyl(0.012, 0.014, 0.1, 5), M('#8a6a3a'), g, 0, 0.16, 0, false);
      stem(g, 0, 0.16, 0, 0.26, 0.014, c.trunk);
      for (let i = 0; i < 4; i++) leaf(g, 0, 0.3 + i * 0.03, 0, 0.1, 0.06, i * 1.6, 0.4, c.leaf);
      return;
    }
    mesh(box(0.24, 0.03, 0.32), M('#efe0bc'), g, 0, 0.015, 0);
    mesh(box(0.2, 0.01, 0.16), M(c.color), g, 0, 0.033, 0.05, false);
    mesh(box(0.2, 0.012, 0.03), M(c.leaf), g, 0, 0.033, -0.08, false);
    mesh(box(0.24, 0.035, 0.03), M('#d8c8a0'), g, 0, 0.017, -0.15, false);
    for (let i = 0; i < 3; i++) mesh(ico(0.018), M('#f0dca0'), g, 0.06 * (i - 1), 0.05, -0.12, false);
  });
}
// bundle of cut grass (rumput pakan) tied with straw
export function grassBundleModel() {
  return itemProto((g) => {
    reseed('grassbundle');
    for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2; leaf(g, Math.cos(a) * 0.05, 0.03, Math.sin(a) * 0.05, 0.3 + R() * 0.1, 0.05, a, 0.25 + R() * 0.3, i % 3 ? '#6cc24e' : '#9ed45a', 0.4); }
    mesh(cyl(0.07, 0.07, 0.04, 8), M('#e0c060'), g, 0, 0.05, 0, false);
  });
}
// wood log (kayu): a short trunk piece lying down, light end rings
export function logModel() {
  return itemProto((g) => {
    for (const [x, z, a] of [[0, 0, 0.2], [0.04, 0.2, -0.15]]) {
      const p = new THREE.Group(); p.position.set(x, 0.1, z - 0.1); p.rotation.set(0, a, Math.PI / 2); g.add(p);
      mesh(cyl(0.1, 0.1, 0.42, 7), M('#8a5a3a'), p, 0, 0, 0);
      for (const s of [-1, 1]) mesh(cyl(0.085, 0.085, 0.01, 7), M('#e8c08a'), p, 0, s * 0.211, 0, false);
    }
  });
}
export function fertModel(f) {
  return itemProto((g) => {
    mesh(sph(0.15, 8, 6), M('#e0c890'), g, 0, 0.13, 0).scale.set(1, 0.95, 0.7);
    mesh(cyl(0.1, 0.14, 0.05, 8), M('#e0c890'), g, 0, 0.26, 0, false);
    mesh(cyl(0.155, 0.155, 0.07, 8), M(f.color), g, 0, 0.13, 0, false).scale.set(1, 1, 0.72);
    mesh(cyl(0.03, 0.03, 0.03, 6), M('#8a5a2a'), g, 0, 0.3, 0, false);
  });
}
export function objectModel(def) {
  return itemProto((g) => { const s = new THREE.Group(); s.scale.setScalar(def.model === 'scarecrow' ? 0.3 : 0.7); g.add(s); def.model === 'scarecrow' ? scarecrow(s) : sprinkler(s, def.level || 0); });
}

// ---------------------------------------------------------------- tools
// Built in hand space: grip at the origin, the shaft running down -y, the working end away from the kid (+z).
const TOOLS = {
  hoe(g, m) {
    mesh(cyl(0.022, 0.024, 0.8, 6), M(WOOD), g, 0, -0.3, 0);
    mesh(box(0.2, 0.03, 0.16), M(m), g, 0, -0.69, 0.08);
    mesh(box(0.06, 0.06, 0.05), M(darker(m, 0.8)), g, 0, -0.69, 0.0);
  },
  can(g, m) {
    mesh(cyl(0.11, 0.12, 0.2, 10), M(m), g, 0, -0.2, 0);
    mesh(cyl(0.112, 0.112, 0.03, 10), M(darker(m, 0.8)), g, 0, -0.13, 0, false);
    const h = mesh(new THREE.TorusGeometry(0.07, 0.015, 4, 8, Math.PI), M(darker(m, 0.8)), g, 0, -0.08, 0, false); h.rotation.y = Math.PI / 2;
    const sp = mesh(cyl(0.018, 0.025, 0.26, 6), M(m), g, 0, -0.2, 0.17); sp.rotation.x = 1.0;
    mesh(cyl(0.04, 0.02, 0.04, 6), M(darker(m, 0.8)), g, 0, -0.1, 0.27, false).rotation.x = 1.0;
  },
  sickle(g, m) {
    mesh(cyl(0.022, 0.026, 0.24, 6), M(WOOD), g, 0, -0.07, 0);
    const b = mesh(new THREE.TorusGeometry(0.13, 0.014, 3, 10, Math.PI * 1.15), M(m), g, 0, -0.2, 0.12, false); b.rotation.set(0, Math.PI / 2, Math.PI);
  },
  hammer(g, m) {
    mesh(cyl(0.022, 0.024, 0.44, 6), M(WOOD), g, 0, -0.18, 0);
    mesh(box(0.1, 0.1, 0.24), M(m), g, 0, -0.42, 0.04);
  },
  axe(g, m) {
    mesh(cyl(0.022, 0.024, 0.55, 6), M(WOOD), g, 0, -0.24, 0);
    mesh(box(0.035, 0.16, 0.18), M(m), g, 0, -0.46, 0.09);
    mesh(box(0.02, 0.19, 0.03), M(lighter(m, 0.4)), g, 0, -0.46, 0.18, false);
  },
};
// in the hand (attached to the kid's right elbow joint)
export function toolHandModel(name, metal) {
  const g = new THREE.Group(), inner = new THREE.Group(); g.add(inner);
  if (name !== 'can') inner.rotation.y = Math.PI;   // the working end leads the downward swing
  TOOLS[name](inner, metal);
  bakeRig(g, [g]);
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = false; } });
  return g;
}
// lying on the ground / bag icon
export function toolModel(name, metal) {
  return itemProto((g) => {
    const p = new THREE.Group(); g.add(p);
    if (name === 'can') p.position.y = 0.3;   // stands upright
    else { p.rotation.x = -Math.PI / 2; p.position.set(0, 0.06, -0.3); }
    TOOLS[name](p, metal);
  });
}

// ---------------------------------------------------------------- buildings (static: built once, batched, with physics)
const toWorld = (x, z, rot, lx, lz) => new THREE.Vector3(x + lx * Math.cos(rot) + lz * Math.sin(rot), 0, z - lx * Math.sin(rot) + lz * Math.cos(rot));
const signTex = (text, bg, fg) => canvasTex(256, 64, (c, w, h) => { c.fillStyle = bg; c.fillRect(0, 0, w, h); c.fillStyle = fg; c.font = '800 40px system-ui, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(text, w / 2, h / 2 + 2); });
function sign(g, text, x, y, z, w, bg = '#1c1636', fg = '#d6f58a') {
  const s = new THREE.Mesh(new THREE.PlaneGeometry(w, w / 4), new THREE.MeshBasicMaterial({ map: signTex(text, bg, fg), color: new THREE.Color(1.2, 1.2, 1.2) }));
  s.position.set(x, y, z); g.add(s); return s;
}

// market stall "Toko Tani": counter with crates of produce, striped awning. Returns the spot in front.
export function shopKiosk(x, z, rot) {
  const g = group(x, 0, z, rot);
  mesh(box(2.6, 0.95, 1.0), M('#8d5f9e'), g, 0, 0.475, 0);
  mesh(box(2.75, 0.08, 1.12), M('#5d3b6e'), g, 0, 0.99, 0);
  for (const [px, pz] of [[-1.25, -0.45], [1.25, -0.45], [-1.25, 0.45], [1.25, 0.45]]) mesh(cyl(0.06, 0.06, 2.4, 6), M(WOOD_D), g, px, 1.2, pz);
  for (let i = 0; i < 7; i++) { const a = mesh(box(0.42, 0.06, 1.5), M(i % 2 ? '#ffffff' : '#2f9a5a'), g, -1.26 + i * 0.42, 2.45, 0.1); a.rotation.x = -0.28; }
  const cols = ['#e8323c', '#ff8a28', '#6cc24e', '#ffd23a'];
  for (let i = 0; i < 4; i++) {
    mesh(box(0.5, 0.2, 0.42), M(WOOD), g, -0.9 + i * 0.6, 1.13, 0.15);
    for (let k = 0; k < 5; k++) mesh(ico(0.07, 0), M(cols[i]), g, -0.9 + i * 0.6 + jit(0.15), 1.27, 0.15 + jit(0.12), false);
  }
  for (let i = 0; i < 3; i++) mesh(box(0.2, 0.03, 0.28), M(cols[i]), g, -0.5 + i * 0.35, 0.7, 0.51, false).rotation.x = -1.4;
  sign(g, 'TOKO TANI', 0, 2.1, 0.62, 1.6, '#2f9a5a', '#ffffff');
  addStatic(new CANNON.Box(new CANNON.Vec3(1.35, 0.6, 0.55)), x, 0.6, z, rot);
  keepOut.push({ x, z, r: 2.2 });
  return toWorld(x, z, rot, 0, 1.4);
}
// shipping bin: wooden chest with a slanted lid. Returns the spot in front.
export function shippingBin(x, z, rot) {
  const g = group(x, 0, z, rot);
  mesh(box(1.3, 0.7, 0.85), M('#a8703e'), g, 0, 0.35, 0);
  for (const y of [0.15, 0.55]) mesh(box(1.34, 0.07, 0.89), M('#6b4020'), g, 0, y, 0, false);
  const lid = mesh(box(1.38, 0.08, 0.92), M('#c47e38'), g, 0, 0.76, -0.04); lid.rotation.x = -0.12;
  sign(g, 'KIRIM', 0, 0.36, 0.431, 0.6, '#ffd98a', '#5d3b6e');
  addStatic(new CANNON.Box(new CANNON.Vec3(0.66, 0.4, 0.44)), x, 0.4, z, rot);
  keepOut.push({ x, z, r: 1.3 });
  return toWorld(x, z, rot, 0, 1.2);
}
// well: stone ring, water, a little roof and a bucket. Returns the spot in front.
export function well(x, z, rot) {
  const g = group(x, 0, z, rot);
  mesh(cyl(0.8, 0.85, 0.75, 10), M('#8f89c9'), g, 0, 0.375, 0);
  mesh(cyl(0.82, 0.82, 0.08, 10), M('#6a64b0'), g, 0, 0.76, 0, false);
  mesh(cyl(0.62, 0.62, 0.02, 10), glowMat('#5fb8f0', 0.9, 1.8), g, 0, 0.62, 0, false);
  for (const s of [-1, 1]) mesh(box(0.1, 1.5, 0.1), M(WOOD_D), g, s * 0.75, 1.25, 0);
  mesh(cyl(0.05, 0.05, 1.6, 5), M(WOOD), g, 0, 1.6, 0, false).rotation.z = Math.PI / 2;
  for (const s of [-1, 1]) { const r = mesh(box(1.9, 0.07, 0.8), M('#c9304c'), g, 0, 2.12, s * 0.33); r.rotation.x = s * 0.5; }
  mesh(cyl(0.12, 0.1, 0.16, 8), M(WOOD), g, 0.2, 1.1, 0);
  mesh(cyl(0.008, 0.008, 0.45, 3), M('#d8c8a0'), g, 0.2, 1.4, 0, false);
  addStatic(new CANNON.Cylinder(0.85, 0.85, 0.8, 10), x, 0.4, z);
  keepOut.push({ x, z, r: 1.6 });
  return toWorld(x, z, rot, 0, 1.4);
}

// greenhouse shell: stone base, white frame, physics walls with a door gap on the east side.
// Returns { door: spot outside the door, blocker: physics body across the door (removed once repaired), roof: fading info }
export function greenhouseFrame(G) {
  const cx = G.x0 + G.w / 2, cz = G.z0 + G.d / 2, H = 2.4, frame = M('#f2f2f8'), base = M('#8f89c9');
  const g = group(cx, 0, cz, 0);
  const hw = G.w / 2, hd = G.d / 2, doorW = 1.6;
  // low stone base on every side (east side split around the door)
  mesh(box(G.w, 0.35, 0.2), base, g, 0, 0.175, -hd); mesh(box(G.w, 0.35, 0.2), base, g, 0, 0.175, hd);
  mesh(box(0.2, 0.35, G.d), base, g, -hw, 0.175, 0);
  for (const s of [-1, 1]) mesh(box(0.2, 0.35, hd - doorW / 2), base, g, hw, 0.175, s * (hd + doorW / 2) / 2);
  // posts + eaves + gable ridge
  for (let i = 0; i <= 4; i++) for (const s of [-1, 1]) { mesh(box(0.08, H, 0.08), frame, g, -hw + i * G.w / 4, H / 2, s * hd); }
  for (let i = 1; i < 4; i++) for (const s of [-1, 1]) mesh(box(0.08, H, 0.08), frame, g, s * hw, H / 2, -hd + i * G.d / 4);
  for (const s of [-1, 1]) { mesh(box(G.w + 0.1, 0.08, 0.08), frame, g, 0, H, s * hd); mesh(box(0.08, 0.08, G.d), frame, g, s * hw, H, 0); }
  // physics: three full walls + the east wall in two pieces
  const wall = (x, z, hx, hz) => addStatic(new CANNON.Box(new CANNON.Vec3(hx, H / 2, hz)), x, H / 2, z);
  wall(cx, G.z0, G.w / 2, 0.12); wall(cx, G.z0 + G.d, G.w / 2, 0.12); wall(G.x0, cz, 0.12, G.d / 2);
  const seg = (hd - doorW / 2) / 2;
  for (const s of [-1, 1]) wall(G.x0 + G.w, cz + s * (doorW / 2 + seg), 0.12, seg);
  const blocker = wall(G.x0 + G.w, cz, 0.12, doorW / 2);
  for (let x = G.x0 + 1.5; x < G.x0 + G.w; x += 3) for (let z = G.z0 + 1.5; z < G.z0 + G.d; z += 3) keepOut.push({ x, z, r: 2.4 });
  return { door: new THREE.Vector3(G.x0 + G.w + 1, 0, cz), blocker, center: new THREE.Vector3(cx, 0, cz), H };
}

// ---------------------------------------------------------------- parts that change during play (not batched)
// greenhouse glass + roof. repaired = clean panes; otherwise broken panes, planks across the door and a sign.
// Returns { root, roofMats } (roof materials fade out while the kid is inside)
export function greenhouseGlass(G, H, repaired) {
  const root = new THREE.Group(); root.position.set(G.x0 + G.w / 2, 0, G.z0 + G.d / 2);
  const glass = lam(repaired ? '#cdeeff' : '#9fb8c8', { transparent: true, opacity: repaired ? 0.28 : 0.2, depthWrite: false, side: THREE.DoubleSide });
  const roofGlass = lam('#dff4ff', { transparent: true, opacity: 0.35, depthWrite: false, side: THREE.DoubleSide });
  const roofFrame = lam('#f2f2f8', { transparent: true });
  const hw = G.w / 2, hd = G.d / 2, doorW = 1.6, rise = 1.1;
  const pane = (w, h, x, y, z, ry) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), glass); m.position.set(x, y, z); m.rotation.y = ry; root.add(m); return m; };
  for (let i = 0; i < 4; i++) for (const s of [-1, 1]) if (repaired || (i + (s > 0 ? 1 : 0)) % 2) pane(G.w / 4 - 0.1, H - 0.4, -hw + G.w / 8 + i * G.w / 4, 0.35 + (H - 0.35) / 2, s * hd, 0);
  pane(G.d - 0.1, H - 0.4, -hw, 0.35 + (H - 0.35) / 2, 0, Math.PI / 2);
  const seg = hd - doorW / 2;
  for (const s of [-1, 1]) pane(seg - 0.1, H - 0.4, hw, 0.35 + (H - 0.35) / 2, s * (doorW / 2 + seg / 2), Math.PI / 2);
  // gable roof: two slanted glass planes + a ridge beam
  const slope = Math.hypot(hd, rise), ang = Math.atan2(rise, hd);
  for (const s of [-1, 1]) {
    if (!repaired && s > 0) continue;   // half the roof is missing on the broken greenhouse
    const r = new THREE.Mesh(new THREE.PlaneGeometry(G.w + 0.2, slope), roofGlass);
    r.position.set(0, H + rise / 2, s * hd / 2); r.rotation.x = -Math.PI / 2 + s * ang; root.add(r);
  }
  const ridge = new THREE.Mesh(box(G.w + 0.2, 0.1, 0.1), roofFrame); ridge.position.set(0, H + rise, 0); root.add(ridge);
  for (let i = 0; i <= 4; i++) for (const s of [-1, 1]) {
    const rafter = new THREE.Mesh(box(0.07, 0.07, slope), roofFrame);
    rafter.position.set(-hw + i * G.w / 4, H + rise / 2, s * hd / 2); rafter.rotation.x = s * ang; root.add(rafter);
  }
  if (!repaired) {   // planks across the door + a "RUSAK" sign
    for (const [y, a] of [[0.7, 0.35], [1.35, -0.3]]) { const p = mesh(box(0.08, 0.16, doorW + 0.5), M(WOOD), root, hw + 0.12, y, 0); p.rotation.x = a; }
    const s = sign(root, 'RUSAK', hw + 0.2, 1.9, 0, 1.1, '#8e1b2c', '#ffffff'); s.rotation.y = Math.PI / 2;
    for (let i = 0; i < 6; i++) { const w = mesh(debrisGeo('weed'), VC, root, -hw + 1 + (i % 3) * 2.5, 0, -hd + 1.5 + Math.floor(i / 3) * 4); w.scale.setScalar(1.3); }
  } else { const s = sign(root, 'RUMAH KACA', hw + 0.05, H + 0.35, 0, 1.4, '#2f9a5a', '#ffffff'); s.rotation.y = Math.PI / 2; }
  root.traverse(o => { if (o.isMesh) { o.castShadow = o.material !== glass && o.material !== roofGlass; o.receiveShadow = true; } });
  return { root, roofMats: [roofGlass, roofFrame] };
}
// low stake-and-rope fence around the usable field, with a gap on the south side (towards the road)
export function fence(x0, z0, w, h, gapX) {
  const g = new THREE.Group(), post = M(WOOD_D), rope = M('#e0c890');
  const x1 = x0 + w, z1 = z0 + h, pad = 0.35;
  const posts = [];
  for (let x = x0 - pad; x <= x1 + pad + 0.01; x += (w + pad * 2) / Math.ceil(w / 2)) posts.push([x, z0 - pad], [x, z1 + pad]);
  for (let z = z0 - pad; z <= z1 + pad + 0.01; z += (h + pad * 2) / Math.ceil(h / 2)) posts.push([x0 - pad, z], [x1 + pad, z]);
  for (const [x, z] of posts) { if (Math.abs(z - (z0 - pad)) < 0.01 && Math.abs(x - gapX) < 1) continue; mesh(cyl(0.05, 0.06, 0.7, 5), post, g, x, 0.35, z); }
  const run = (ax, az, bx, bz) => { const l = Math.hypot(bx - ax, bz - az); if (l < 0.05) return; for (const y of [0.35, 0.6]) { const r = mesh(cyl(0.015, 0.015, l, 4), rope, g, (ax + bx) / 2, y, (az + bz) / 2, false); r.rotation.set(Math.PI / 2, Math.atan2(bx - ax, bz - az), 0, 'YXZ'); } };
  run(x0 - pad, z1 + pad, x1 + pad, z1 + pad); run(x0 - pad, z0 - pad, x0 - pad, z1 + pad); run(x1 + pad, z0 - pad, x1 + pad, z1 + pad);
  run(x0 - pad, z0 - pad, gapX - 1, z0 - pad); run(gapX + 1, z0 - pad, x1 + pad, z0 - pad);
  for (const s of [-1, 1]) { mesh(cyl(0.08, 0.09, 1.1, 6), post, g, gapX + s * 1, 0.55, z0 - pad); mesh(ico(0.1), M('#ffd23a'), g, gapX + s * 1, 1.15, z0 - pad, false); }
  return g;
}
// darker dirt under the usable field (tilled tiles sit on top)
export function fieldBase(x0, z0, w, h) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w + 0.3, h + 0.3).rotateX(-Math.PI / 2), lam('#b8875a', { polygonOffset: true, polygonOffsetFactor: -1 }));
  m.position.set(x0 + w / 2, 0.012, z0 + h / 2); m.receiveShadow = true;
  return m;
}
