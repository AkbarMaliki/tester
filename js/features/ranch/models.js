// Ranch models, low-poly from primitives.
//   animalRig(species, variant, baby)  a posable animal: root (on the ground, turns) > body (at hip height) > head, tail,
//                                      legs FL/FR/BL/BR or legL/legR + wingL/wingR (birds), wool (sheep). Every joint is
//                                      baked to one vertex-coloured mesh (few draw calls), prototypes are cached + cloned.
//   barn / coop / silo / fence         the buildings (rebuilt when upgraded, so they're made after static batching)
//   shopStall / dogHouse / pond        built once with the world
//   productModel / goodsModel          item protos (bag icons, held over the head)
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { lam, glowMat, mesh, group, addStatic, DETAIL_LAYER } from '../../engine/core.js';
import { bakeRig } from '../../engine/batch.js';
import { canvasTex } from '../../engine/util.js';
import { keepOut } from '../../world/worldmap.js';

const box = (x, y, z) => new THREE.BoxGeometry(x, y, z);
const cyl = (a, b, h, n = 7) => new THREE.CylinderGeometry(a, b, h, n);
const ico = (r, d = 0) => new THREE.IcosahedronGeometry(r, d);
const sph = (r, w = 10, h = 8) => new THREE.SphereGeometry(r, w, h);
const cone = (r, h, n = 6) => new THREE.ConeGeometry(r, h, n);
const mats = new Map();
const M = (c) => { if (!mats.has(c)) mats.set(c, lam(c)); return mats.get(c); };
const P = (geo, color, parent, x = 0, y = 0, z = 0, cast = false) => mesh(geo, M(color), parent, x, y, z, cast);
let seed = 1;
const R = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
const reseed = (k) => { seed = 11; for (const ch of String(k)) seed = (seed * 31 + ch.charCodeAt(0)) % 2147483647 || 1; };
const WOOD = '#a8703e', WOOD_D = '#6b4020', STRAW = '#e8c56a';

// ---------------------------------------------------------------- animal parts
function joint(parent, name, x = 0, y = 0, z = 0) { const g = new THREE.Group(); g.name = 'a:' + name; g.position.set(x, y, z); parent.add(g); return g; }
const eye = (g, x, y, z, r = 0.03, iris = '#1c1636') => { P(sph(r, 7, 5), iris, g, x, y, z); P(sph(r * 0.35, 5, 3), '#ffffff', g, x + Math.sign(x) * r * 0.2, y + r * 0.4, z + r * 0.7); };
// four-legged base. o: len (body length), hip (hip height), r (body radius), wide, legR, colours
function quad(o) {
  const root = new THREE.Group(), body = joint(root, 'body', 0, o.hip, 0);
  P(sph(1, 12, 9), o.color, body, 0, o.r * 0.25, 0).scale.set(o.r * (o.wide || 0.95), o.r, o.len / 2);
  const legs = {};
  for (const [sx, sz, n] of [[1, 1, 'FL'], [-1, 1, 'FR'], [1, -1, 'BL'], [-1, -1, 'BR']]) {
    const L = legs[n] = joint(body, 'leg' + n, sx * o.r * 0.55, 0, sz * o.len * 0.3);
    P(cyl(o.legR, o.legR * 0.85, o.hip, 6), o.legColor || o.color, L, 0, -o.hip / 2, 0);
    if (o.sock && sz > 0) P(cyl(o.legR * 1.05, o.legR * 0.9, o.hip * 0.35, 6), o.sock, L, 0, -o.hip * 0.8, 0);
    P(cyl(o.legR * 1.15, o.legR * 1.2, 0.07, 6), o.hoof || '#3a3030', L, 0, -o.hip + 0.035, 0);
  }
  const head = joint(body, 'head', 0, o.r * 0.5, o.len / 2 - 0.02);
  const tail = joint(body, 'tail', 0, o.r * 0.55, -o.len / 2 + 0.02);
  return { root, body, head, tail, legs };
}
// flattened blob lying on a body surface (cow patches, dog chest…)
const patch = (g, color, x, y, z, sx, sy, sz) => P(sph(1, 8, 6), color, g, x, y, z).scale.set(sx, sy, sz);

const SPECIES = {
  cow(v) {
    const c = v ? '#c58a52' : '#f4f0ea', spot = v ? '#f4ece0' : '#2a2a30';
    const a = quad({ len: 1.25, hip: 0.6, r: 0.36, color: c, legR: 0.075, sock: v ? null : '#f4f0ea', hoof: '#3a3030' });
    for (const [x, y, z, sx, sy, sz] of [[0.3, 0.12, 0.25, 0.07, 0.18, 0.2], [-0.31, 0.2, -0.2, 0.07, 0.16, 0.24], [0.25, 0.26, -0.36, 0.09, 0.14, 0.16], [0.02, 0.41, 0.02, 0.2, 0.05, 0.22], [-0.27, 0.06, 0.3, 0.08, 0.12, 0.13]])
      patch(a.body, spot, x, y, z, sx, sy, sz);
    P(sph(0.14, 8, 6), '#f2a0b0', a.body, 0, -0.14, -0.28);                                  // udder
    for (const [x, z] of [[0.05, -0.24], [-0.05, -0.24], [0.05, -0.32], [-0.05, -0.32]]) P(cyl(0.018, 0.014, 0.06, 4), '#e8889a', a.body, x, -0.27, z);
    const h = a.head;
    P(sph(0.21, 9, 7), c, h, 0, 0.14, 0.2).scale.set(0.95, 0.95, 1.15);
    P(box(0.28, 0.18, 0.16), '#f2b0b8', h, 0, 0.03, 0.42);                                   // muzzle
    for (const s of [-1, 1]) {
      P(sph(0.025, 5, 3), '#6a3040', h, s * 0.065, 0.05, 0.5);
      eye(h, s * 0.13, 0.2, 0.34, 0.034);
      const ear = P(sph(0.1, 6, 4), v ? c : '#e8e0d8', h, s * 0.24, 0.24, 0.14); ear.scale.set(1.3, 0.4, 0.75); ear.rotation.z = s * -0.4;
      const horn = P(cone(0.035, 0.13, 5), '#f4e8c8', h, s * 0.12, 0.36, 0.12); horn.rotation.z = s * -0.7;
    }
    if (!v) patch(h, spot, 0.12, 0.22, 0.28, 0.08, 0.1, 0.06);
    P(sph(0.2, 8, 6), c, h, 0, 0.02, 0.02);                                                   // neck
    // unique: a brass cow bell on a red collar
    const collar = P(new THREE.TorusGeometry(0.19, 0.03, 5, 12), '#8e1f38', h, 0, -0.06, 0.06); collar.rotation.x = Math.PI / 2 + 0.4;
    P(cone(0.07, 0.12, 8), '#ffcc33', h, 0, -0.27, 0.16); P(sph(0.03, 5, 3), '#b08820', h, 0, -0.34, 0.16);
    P(cyl(0.022, 0.015, 0.42, 4), c, a.tail, 0, -0.2, -0.04).rotation.x = 0.15;
    P(sph(0.06, 6, 4), spot === '#2a2a30' ? '#2a2a30' : '#6a4028', a.tail, 0, -0.43, -0.07).scale.set(1, 1.5, 1);
    return a;
  },
  horse(v) {
    const c = v ? '#eeeae4' : '#8a5a36', mane = v ? '#b8b0a8' : '#3a2418';
    const a = quad({ len: 1.25, hip: 0.82, r: 0.3, wide: 0.88, color: c, legR: 0.058, sock: v ? null : '#f4ece0', hoof: '#2a2420' });
    // saddle, blanket, stirrups (the horse is ridden)
    P(box(0.62, 0.05, 0.62), '#ffd23a', a.body, 0, 0.35, 0.05);
    P(sph(0.2, 8, 6), '#8e1f38', a.body, 0, 0.37, 0.05).scale.set(1.4, 0.4, 1.3);
    P(box(0.08, 0.1, 0.1), '#6a1a2a', a.body, 0, 0.45, 0.24);
    for (const s of [-1, 1]) { P(cyl(0.01, 0.01, 0.34, 3), '#3a2418', a.body, s * 0.3, 0.18, 0.05); P(new THREE.TorusGeometry(0.04, 0.012, 4, 8), '#c9c9d9', a.body, s * 0.31, 0.0, 0.05).rotation.y = Math.PI / 2; }
    const h = a.head, neck = new THREE.Group(); neck.rotation.x = 0.32; h.add(neck);
    P(cyl(0.12, 0.18, 0.7, 8), c, neck, 0, 0.32, 0);
    for (let i = 0; i < 7; i++) P(box(0.05, 0.1, 0.1), mane, neck, 0.02 * (i % 2 ? 1 : -1), 0.08 + i * 0.085, -0.12);   // mane
    const skull = new THREE.Group(); skull.position.set(0, 0.66, 0.02); skull.rotation.x = 1.75; neck.add(skull);   // head angled down-forward
    P(sph(0.16, 9, 7), c, skull, 0, 0.13, 0.02).scale.set(0.85, 1.75, 0.95);
    P(sph(0.11, 8, 6), v ? '#d8d0c8' : '#5a3a26', skull, 0, 0.35, 0.02).scale.set(1, 0.8, 0.95);   // muzzle
    if (!v) P(box(0.04, 0.26, 0.02), '#f4ece0', skull, 0, 0.14, 0.135);                         // blaze
    for (const s of [-1, 1]) { eye(skull, s * 0.125, 0.04, 0.06, 0.032); const ear = P(cone(0.04, 0.14, 5), c, skull, s * 0.065, -0.12, -0.06); ear.rotation.x = -1.3; P(sph(0.016, 4, 3), '#1c1636', skull, s * 0.045, 0.42, 0.07); }
    P(box(0.06, 0.1, 0.08), mane, skull, 0, -0.12, 0.08);                                         // forelock
    for (let i = 0; i < 3; i++) P(sph(0.07, 6, 4), mane, a.tail, 0, -0.08 - i * 0.18, -0.06 - i * 0.05).scale.set(0.8, 2, 0.8);
    return a;
  },
  goat(v) {
    const c = v ? '#8a6040' : '#f2eee6';
    const a = quad({ len: 0.8, hip: 0.48, r: 0.23, wide: 0.88, color: c, legR: 0.042, hoof: '#4a3a30' });
    if (v) patch(a.body, '#f2eee6', 0, -0.05, 0.05, 0.18, 0.1, 0.3);
    const h = a.head;
    P(sph(0.13, 8, 6), c, h, 0, 0.02, 0.02);
    P(sph(0.13, 9, 7), c, h, 0, 0.14, 0.13).scale.set(0.85, 0.95, 1.35);
    P(cone(0.05, 0.14, 5), '#d8d0c0', h, 0, -0.02, 0.22).rotation.x = Math.PI;                    // beard
    for (const s of [-1, 1]) {
      const horn = P(new THREE.TorusGeometry(0.09, 0.022, 4, 8, Math.PI * 1.1), '#8a7a6a', h, s * 0.05, 0.25, 0.05); horn.rotation.set(0, Math.PI / 2, 0.3);
      const ear = P(sph(0.07, 6, 4), c, h, s * 0.14, 0.16, 0.08); ear.scale.set(1.7, 0.35, 0.65);
      P(sph(0.03, 7, 5), '#e8c040', h, s * 0.1, 0.2, 0.24);                                       // yellow eye…
      P(box(0.035, 0.012, 0.012), '#1c1636', h, s * 0.1, 0.2, 0.265);                             // …with the goat's flat pupil
    }
    P(sph(0.02, 4, 3), '#3a2a2a', h, 0, 0.12, 0.3);
    P(cone(0.04, 0.12, 5), c, a.tail, 0, 0.05, -0.02).rotation.x = -0.8;
    return a;
  },
  sheep(v) {
    const wool = v ? '#e8dcc0' : '#f6f3ec', face = v ? '#f0e6dc' : '#2a2428';
    const a = quad({ len: 0.78, hip: 0.44, r: 0.24, color: '#d8cfc4', legColor: face, legR: 0.038, hoof: face });
    const W = joint(a.body, 'wool', 0, 0.06, 0);
    reseed('wool' + v);
    for (let i = 0; i < 18; i++) {
      const u = R() * 2 - 1, th = R() * Math.PI * 2, s = Math.sqrt(1 - u * u);
      P(ico(0.13 + R() * 0.05, 1), i % 3 ? wool : '#ffffff', W, s * Math.cos(th) * 0.26, u * 0.22 + 0.05, s * Math.sin(th) * 0.4);
    }
    const h = a.head;
    P(sph(0.12, 9, 7), face, h, 0, 0.1, 0.12).scale.set(0.9, 1, 1.25);
    for (let i = 0; i < 3; i++) P(ico(0.06, 1), wool, h, (i - 1) * 0.05, 0.21, 0.08);
    for (const s of [-1, 1]) { const ear = P(sph(0.06, 6, 4), face, h, s * 0.14, 0.12, 0.08); ear.scale.set(1.7, 0.4, 0.7); eye(h, s * 0.08, 0.15, 0.22, 0.026, '#1c1636'); P(sph(0.028, 6, 4), '#ffffff', h, s * 0.08, 0.15, 0.215); }
    P(ico(0.08, 1), wool, a.tail, 0, 0, -0.03);
    return a;
  },
  dog(v) {
    const c = v ? '#2a2630' : '#e08a3a', white = '#fff4e8';
    const a = quad({ len: 0.55, hip: 0.28, r: 0.16, wide: 0.9, color: c, legR: 0.038, hoof: white, sock: white });
    patch(a.body, white, 0, -0.03, 0.17, 0.11, 0.12, 0.12);
    const h = a.head;
    P(sph(0.13, 9, 7), c, h, 0, 0.1, 0.07).scale.set(1, 0.95, 1.05);
    P(sph(0.09, 8, 6), white, h, 0, 0.05, 0.16).scale.set(1.1, 0.75, 1);
    if (v) for (const s of [-1, 1]) P(sph(0.03, 5, 3), '#c07a40', h, s * 0.05, 0.16, 0.17);    // tan eyebrows
    P(sph(0.03, 6, 4), '#1c1636', h, 0, 0.08, 0.25);
    for (const s of [-1, 1]) { eye(h, s * 0.065, 0.13, 0.17, 0.026); const ear = P(cone(0.05, 0.11, 4), c, h, s * 0.08, 0.23, 0.04); ear.rotation.z = s * -0.25; }
    const col = P(new THREE.TorusGeometry(0.1, 0.02, 4, 10), '#d0342c', h, 0, -0.02, 0.02); col.rotation.x = Math.PI / 2 + 0.3;
    P(cyl(0.025, 0.025, 0.01, 8), '#ffcc33', h, 0, -0.08, 0.1).rotation.x = Math.PI / 2;
    const t = P(new THREE.TorusGeometry(0.07, 0.03, 5, 9, Math.PI * 1.5), c, a.tail, 0, 0.08, -0.02); t.rotation.set(0, Math.PI / 2, 0);
    P(sph(0.035, 5, 4), white, a.tail, 0, 0.13, 0.04);
    return a;
  },
  cat(v) {
    const c = v ? '#e89a4a' : '#8a8a96', stripe = v ? '#c0702a' : '#5a5a66', white = '#ffffff';
    const a = quad({ len: 0.5, hip: 0.22, r: 0.13, wide: 0.9, color: c, legR: 0.03, hoof: white, sock: null });
    for (let i = 0; i < 3; i++) P(box(0.2, 0.02, 0.035), stripe, a.body, 0, 0.16, -0.12 + i * 0.1);
    const h = a.head;
    P(sph(0.12, 9, 7), c, h, 0, 0.1, 0.06).scale.set(1.1, 0.95, 0.95);
    P(sph(0.06, 7, 5), white, h, 0, 0.06, 0.14).scale.set(1.2, 0.7, 0.8);
    P(sph(0.018, 4, 3), '#ff8aa0', h, 0, 0.09, 0.18);
    for (const s of [-1, 1]) {
      const ear = P(cone(0.05, 0.1, 3), c, h, s * 0.07, 0.21, 0.04); ear.rotation.z = s * -0.2;
      P(cone(0.025, 0.06, 3), '#ffb0c0', h, s * 0.07, 0.2, 0.055).rotation.z = s * -0.2;
      P(sph(0.028, 7, 5), '#8fd06a', h, s * 0.055, 0.13, 0.15);
      P(box(0.008, 0.035, 0.01), '#1c1636', h, s * 0.055, 0.13, 0.177);
      for (const d of [-0.012, 0.012]) { const w = P(box(0.12, 0.004, 0.004), white, h, s * 0.1, 0.07 + d, 0.15); w.rotation.z = s * d * 8; }
    }
    for (const [y, z, rx, len] of [[0.05, -0.08, -1.0, 0.2], [0.19, -0.15, -0.2, 0.2], [0.31, -0.12, 0.55, 0.14]]) { const s = P(cyl(0.024, 0.026, len, 5), c, a.tail, 0, y, z); s.rotation.x = rx; }
    for (const [y, z] of [[0.11, -0.13], [0.26, -0.15]]) P(sph(0.026, 5, 4), c, a.tail, 0, y, z);
    P(sph(0.03, 5, 4), stripe, a.tail, 0, 0.37, -0.08);
    return a;
  },
  chicken(v, baby) { return bird(v, baby, false); },
  duck(v, baby) { return bird(v, baby, true); },
};
// two-legged birds: body, head, 2 wings, 2 legs, tail feathers
function bird(v, baby, duck) {
  const root = new THREE.Group(), hip = duck ? 0.13 : 0.19;
  const c = baby ? '#ffe04a' : duck ? (v ? '#9a7a5a' : '#f8f6f0') : (v ? '#b06a3a' : '#f6f2ea');
  const headC = baby ? c : duck && v ? '#2f7a4a' : c;
  const body = joint(root, 'body', 0, hip, 0);
  P(sph(0.17, 10, 8), c, body, 0, 0.1, 0).scale.set(0.85, 0.85, duck ? 1.35 : 1.1);
  if (!baby) for (let i = 0; i < 3; i++) { const f = P(sph(0.08, 6, 4), duck ? c : (v ? '#3a2a20' : c), body, (i - 1) * 0.035, 0.2 + (duck ? 0 : 0.05), duck ? -0.24 : -0.17); f.scale.set(0.4, duck ? 0.6 : 1.3, 0.7); f.rotation.x = duck ? -0.9 : -0.5; }
  const wings = {};
  for (const [s, n] of [[1, 'wingL'], [-1, 'wingR']]) { const w = wings[n] = joint(body, n, s * 0.13, 0.13, 0); P(sph(0.1, 7, 5), duck && v ? '#7a6a5a' : c, w, s * 0.01, -0.02, -0.03).scale.set(0.35, 0.7, 1.4); }
  const legs = {};
  for (const [s, n] of [[1, 'legL'], [-1, 'legR']]) {
    const L = legs[n] = joint(body, n, s * 0.06, 0, duck ? 0.02 : 0);
    P(cyl(0.014, 0.012, hip, 4), '#ff9a2a', L, 0, -hip / 2, 0);
    if (duck) P(box(0.07, 0.012, 0.08), '#ff9a2a', L, 0, -hip + 0.006, 0.03);
    else for (const a of [-0.5, 0, 0.5]) { const t = P(box(0.012, 0.01, 0.06), '#ff9a2a', L, Math.sin(a) * 0.02, -hip + 0.005, 0.025); t.rotation.y = a; }
  }
  const head = joint(body, 'head', 0, duck ? 0.18 : 0.22, duck ? 0.17 : 0.1);
  if (duck) P(cyl(0.05, 0.065, 0.14, 7), headC, head, 0, -0.03, 0);
  P(sph(baby ? 0.1 : 0.085, 9, 7), headC, head, 0, 0.06, 0.02);
  if (duck && v && !baby) P(cyl(0.056, 0.056, 0.02, 8), '#ffffff', head, 0, -0.05, 0);                  // mallard collar
  if (duck) P(box(0.07, 0.025, 0.1), '#ff9a2a', head, 0, 0.04, 0.1);
  else { P(cone(0.03, 0.07, 5), '#ffc02a', head, 0, 0.05, 0.1).rotation.x = Math.PI / 2; if (!baby) { for (let i = 0; i < 3; i++) P(sph(0.025, 5, 4), '#e8243c', head, 0, 0.14 + (i === 1 ? 0.015 : 0), -0.02 + i * 0.03); P(sph(0.02, 5, 4), '#e8243c', head, 0, 0.0, 0.08).scale.set(0.8, 1.4, 0.6); } }
  for (const s of [-1, 1]) eye(head, s * 0.06, 0.08, 0.05, 0.018);
  return { root, body, head, tail: null, legs, wings };
}

const protoCache = new Map();
export const VC = lam('#ffffff', { vertexColors: true });
function jointsOf(root) { const out = []; root.traverse(o => { if (o.name.startsWith('a:')) out.push(o); }); return out; }
// posable animal: { root, body, head, tail, legs: {FL..} | {legL, legR}, wings, wool }
export function animalRig(species, variant = 0, baby = false) {
  const key = `${species}:${variant}:${baby ? 1 : 0}`;
  if (!protoCache.has(key)) {
    reseed(key);
    const a = SPECIES[species](variant, baby);
    if (baby && species !== 'chicken' && species !== 'duck') { a.head.scale.setScalar(1.35); }
    bakeRig(a.root, jointsOf(a.root));
    a.root.traverse(o => { if (o.isMesh) { o.material = VC; o.castShadow = o.parent.name === 'a:body'; o.receiveShadow = true; } });
    protoCache.set(key, a.root);
  }
  const root = protoCache.get(key).clone(true);
  const find = (n) => root.getObjectByName('a:' + n);
  const legs = {};
  for (const n of ['legFL', 'legFR', 'legBL', 'legBR', 'legL', 'legR']) { const j = find(n); if (j) legs[n.slice(3)] = j; }
  const rig = { root, body: find('body'), head: find('head'), tail: find('tail'), wool: find('wool'), legs, wings: { L: find('wingL'), R: find('wingR') } };
  rig.hip = rig.body.position.y;
  if (baby && species !== 'chicken' && species !== 'duck') root.scale.setScalar(0.58);
  return rig;
}

// ---------------------------------------------------------------- emotes (sprites above an animal's head)
const emoteTex = new Map();
export function emoteMaterial(ch) {
  if (!emoteTex.has(ch)) {
    const t = canvasTex(64, 64, (c, w, h) => { c.clearRect(0, 0, w, h); c.fillStyle = '#ffffffee'; c.beginPath(); c.arc(32, 30, 26, 0, 7); c.fill(); c.beginPath(); c.moveTo(24, 50); c.lineTo(32, 63); c.lineTo(40, 50); c.fill(); c.font = '34px system-ui, "Segoe UI Emoji", sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(ch, 32, 32); });
    emoteTex.set(ch, new THREE.SpriteMaterial({ map: t, depthWrite: false, transparent: true }));
  }
  return emoteTex.get(ch);
}
let heartMat = null;
export function heartMaterial() {
  heartMat ||= new THREE.SpriteMaterial({ map: canvasTex(64, 64, (c) => { c.clearRect(0, 0, 64, 64); c.fillStyle = '#ff4f8a'; c.font = '52px system-ui, "Segoe UI Emoji", sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('❤', 32, 34); }), transparent: true, depthWrite: false });
  return heartMat;
}

// ---------------------------------------------------------------- buildings
const signTex = (text, bg, fg, w = 256) => canvasTex(w, 64, (c, W, H) => { c.fillStyle = bg; c.fillRect(0, 0, W, H); c.fillStyle = fg; c.font = '800 38px system-ui, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(text, W / 2, H / 2 + 2); });
function sign(parent, text, x, y, z, w, bg, fg, ry = 0) {
  const s = new THREE.Mesh(new THREE.PlaneGeometry(w, w / 4), new THREE.MeshBasicMaterial({ map: signTex(text, bg, fg), color: new THREE.Color(1.15, 1.15, 1.15) }));
  s.position.set(x, y, z); s.rotation.y = ry; parent.add(s); return s;
}
const toWorld = (x, z, rot, lx, lz) => new THREE.Vector3(x + lx * Math.cos(rot) + lz * Math.sin(rot), 0, z - lx * Math.sin(rot) + lz * Math.cos(rot));

// Barn (gambrel roof, ridge along x, the big door in the east gable facing the pasture).
// Returns { root, roofMats, bodies: [[shape, x, y, z]], door: { in, out }, trough: { x, z0, z1 }, lantern }
export function barn(B, L, lvl) {
  const { w, d } = L, x0 = B.x0, z0 = B.z0, H = 2.7, cz = z0 + d / 2, root = new THREE.Group();
  const red = '#b8323a', trim = '#f4efe6', roofC = '#6a2a30';
  const roofMats = [lam(roofC, { transparent: true }), lam('#4a1c22', { transparent: true }), lam(trim, { transparent: true })];
  // gable walls: gambrel profile (z across, y up), extruded 0.16 in x; the east one has the big doorway
  const prof = (hole) => {
    const s = new THREE.Shape(), k = d * 0.22;
    s.moveTo(-d / 2, 0); s.lineTo(d / 2, 0); s.lineTo(d / 2, H); s.lineTo(d / 2 - k, H + 1.05); s.lineTo(0, H + 1.65); s.lineTo(-d / 2 + k, H + 1.05); s.lineTo(-d / 2, H); s.lineTo(-d / 2, 0);
    if (hole) { const h = new THREE.Path(); h.moveTo(-1.15, 0); h.lineTo(-1.15, 2.35); h.lineTo(1.15, 2.35); h.lineTo(1.15, 0); h.lineTo(-1.15, 0); s.holes.push(h); }
    const g = new THREE.ExtrudeGeometry(s, { depth: 0.16, bevelEnabled: false }); g.rotateY(Math.PI / 2); return g;
  };
  mesh(prof(false), M(red), root, x0 - 0.08, 0, cz);
  mesh(prof(true), M(red), root, x0 + w - 0.08, 0, cz);
  for (const s of [-1, 1]) mesh(box(w, H, 0.16), M(red), root, x0 + w / 2, H / 2, cz + s * d / 2);
  // board lines + white corner trims
  for (const s of [-1, 1]) for (let i = 1; i < w / 0.7; i++) mesh(box(0.03, H, 0.02), M('#9a2830'), root, x0 + i * 0.7, H / 2, cz + s * (d / 2 + 0.09), false);
  for (const [x, z] of [[x0, z0], [x0 + w, z0], [x0, z0 + d], [x0 + w, z0 + d]]) mesh(box(0.2, H, 0.2), M(trim), root, x, H / 2, z);
  // the doorway: white frame with the classic X, the sliding door pushed aside (open)
  const dx = x0 + w + 0.02;
  mesh(box(0.12, 0.16, 2.6), M(trim), root, dx, 2.43, cz);
  for (const s of [-1, 1]) mesh(box(0.12, 2.43, 0.14), M(trim), root, dx, 1.215, cz + s * 1.22);
  const slide = new THREE.Group(); slide.position.set(dx + 0.14, 0, cz - 2.2); root.add(slide);
  mesh(box(0.08, 2.35, 2.2), M(red), slide, 0, 1.18, 0);
  for (const s of [-1, 1]) { const b = mesh(box(0.04, 3.1, 0.14), M(trim), slide, 0.05, 1.18, 0, false); b.rotation.x = s * 0.72; }
  mesh(box(0.05, 2.35, 0.1), M(trim), slide, 0.05, 1.18, -1.05, false); mesh(box(0.05, 2.35, 0.1), M(trim), slide, 0.05, 1.18, 1.05, false);
  mesh(box(0.05, 0.1, 2.2), M(trim), slide, 0.05, 2.3, 0, false); mesh(box(0.05, 0.1, 2.2), M(trim), slide, 0.05, 0.08, 0, false);
  // hayloft door above
  mesh(box(0.05, 0.8, 0.8), M('#7a1e28'), root, dx + 0.02, H + 0.55, cz, false);
  for (const s of [-1, 1]) { const b = mesh(box(0.04, 1.1, 0.07), M(trim), root, dx + 0.05, H + 0.55, cz, false); b.rotation.x = s * 0.78; }
  // roof: lower (steep) and upper (shallow) slabs on each side, fading while the kid is inside
  const k = d * 0.22, lowLen = Math.hypot(k, 1.05), upLen = Math.hypot(d / 2 - k, 0.6);
  for (const s of [-1, 1]) {
    const lo = new THREE.Mesh(box(w + 0.5, 0.12, lowLen + 0.1), roofMats[0]); lo.position.set(x0 + w / 2, H + 0.52, cz + s * (d / 2 - k / 2 + 0.05)); lo.rotation.x = s * Math.atan2(1.05, k); root.add(lo);
    const up = new THREE.Mesh(box(w + 0.5, 0.12, upLen + 0.1), roofMats[0]); up.position.set(x0 + w / 2, H + 1.36, cz + s * (d / 4 - k / 2)); up.rotation.x = s * Math.atan2(0.6, d / 2 - k); root.add(up);
    for (let i = 0; i < 3; i++) { const r = new THREE.Mesh(box(w + 0.52, 0.03, 0.06), roofMats[1]); r.position.set(0, 0.07, -lowLen / 2 + 0.3 + i * (lowLen / 3)); lo.add(r); }
  }
  const ridge = new THREE.Mesh(box(w + 0.55, 0.12, 0.16), roofMats[1]); ridge.position.set(x0 + w / 2, H + 1.68, cz); root.add(ridge);
  // interior: straw floor, feed trough along the west wall, stall rails, hay bales, lantern
  mesh(box(w - 0.3, 0.02, d - 0.3), M('#d8b060'), root, x0 + w / 2, 0.02, cz, false).receiveShadow = true;
  const tx = x0 + 0.55;
  mesh(box(0.5, 0.36, d - 1.6), M(WOOD), root, tx, 0.18, cz);
  mesh(box(0.36, 0.05, d - 1.8), M(WOOD_D), root, tx, 0.33, cz, false);
  for (let z = z0 + 1.6; z < z0 + d - 1; z += 1.7) { mesh(box(1.4, 0.07, 0.07), M(WOOD), root, x0 + 1.2, 0.85, z, false); mesh(box(0.08, 1.0, 0.08), M(WOOD_D), root, x0 + 1.9, 0.5, z); }
  for (const [x, y, z, ry] of [[x0 + w - 1, 0.3, z0 + 0.8, 0], [x0 + w - 2.1, 0.3, z0 + 0.8, 0.1], [x0 + w - 1.5, 0.84, z0 + 0.8, -0.05]]) {
    const b = mesh(box(1.0, 0.55, 0.6), M('#e0c060'), root, x, y, z); b.rotation.y = ry;
    for (const s of [-1, 1]) mesh(box(1.02, 0.56, 0.03), M('#a0802a'), b, 0, 0, s * 0.18, false).rotation.y = Math.PI / 2 * 0 ;
  }
  mesh(cyl(0.02, 0.02, 0.5, 4), M(WOOD_D), root, x0 + w / 2, H - 0.05, cz, false);
  const lantern = mesh(box(0.28, 0.34, 0.28), glowMat('#ffb04a', 0.6, 4), root, x0 + w / 2, H - 0.45, cz, false);
  if (L.heater) {   // level 3: a little iron stove glowing in the corner
    mesh(cyl(0.3, 0.34, 0.8, 8), M('#3a3a44'), root, x0 + w - 0.7, 0.4, z0 + d - 0.7);
    mesh(box(0.3, 0.2, 0.05), glowMat('#ff7a2a', 1.2, 3), root, x0 + w - 0.7, 0.35, z0 + d - 0.36, false);
    mesh(cyl(0.07, 0.07, H + 0.8, 5), M('#3a3a44'), root, x0 + w - 0.7, (H + 0.8) / 2 + 0.4, z0 + d - 0.7, false);
    for (const s of [-1, 1]) mesh(box(0.05, 0.6, 0.9), glowMat('#ffd98a', 0.4, 2.2), root, x0 + w / 2 + s * 2, 1.7, cz + s * (d / 2 + 0.09), false).rotation.y = Math.PI / 2;
  }
  if (L.auto) {     // level 3: feed chute from the silo along the trough
    mesh(cyl(0.12, 0.12, d - 1.6, 6), M('#c8c8d0'), root, tx, 1.6, cz, false).rotation.x = Math.PI / 2;
    for (let z = z0 + 1.2; z < z0 + d - 1; z += 1.7) mesh(cyl(0.05, 0.05, 1.2, 5), M('#c8c8d0'), root, tx, 1.0, z, false);
  }
  if (lvl >= 2) {   // weathervane rooster on the ridge
    const v = new THREE.Group(); v.position.set(x0 + w / 2, H + 1.7, cz); root.add(v);
    mesh(cyl(0.02, 0.02, 0.8, 4), M('#3a3a44'), v, 0, 0.4, 0, false);
    mesh(box(0.34, 0.2, 0.04), M('#ffcc33'), v, 0, 0.82, 0, false);
    mesh(cone(0.08, 0.2, 3), M('#ffcc33'), v, -0.2, 0.9, 0, false).rotation.z = 1.2;
    mesh(sph(0.06, 5, 4), M('#ffcc33'), v, 0.17, 0.95, 0, false);
    for (const s of [-1, 1]) mesh(box(0.5, 0.02, 0.02), M('#3a3a44'), v, 0, 0.62, 0, false).rotation.y = s > 0 ? 0 : Math.PI / 2;
  }
  sign(root, lvl ? (lvl > 1 ? 'KANDANG MEWAH' : 'KANDANG BESAR') : 'KANDANG', dx + 0.1, H + 1.3, cz, 1.6, '#f4efe6', '#8e1f38', Math.PI / 2);
  root.traverse(o => { if (o.isMesh) { o.receiveShadow = true; if (o.castShadow === undefined) o.castShadow = true; } });
  // physics: 3 full walls + the east wall split around the doorway
  const bodies = [], seg = (d - 2.4) / 4;
  bodies.push([new CANNON.Box(new CANNON.Vec3(w / 2, H / 2, 0.1)), x0 + w / 2, H / 2, z0]);
  bodies.push([new CANNON.Box(new CANNON.Vec3(w / 2, H / 2, 0.1)), x0 + w / 2, H / 2, z0 + d]);
  bodies.push([new CANNON.Box(new CANNON.Vec3(0.1, H / 2, d / 2)), x0, H / 2, cz]);
  for (const s of [-1, 1]) bodies.push([new CANNON.Box(new CANNON.Vec3(0.1, H / 2, seg)), x0 + w, H / 2, cz + s * (1.2 + seg)]);
  bodies.push([new CANNON.Box(new CANNON.Vec3(0.26, 0.2, (d - 1.6) / 2)), tx, 0.2, cz]);
  return { root, roofMats, bodies, door: { in: new THREE.Vector3(x0 + w - 0.9, 0, cz), out: new THREE.Vector3(x0 + w + 1.2, 0, cz) },
    rect: { x0: x0 + 1.25, x1: x0 + w - 0.7, z0: z0 + 0.8, z1: z0 + d - 0.8 }, trough: { x: tx + 0.55, z0: z0 + 1, z1: z0 + d - 1 }, fodder: [] };
}
// hay lying in the trough: a strip whose length follows how many animals are fed
export function troughHay(t, frac) {
  const m = new THREE.Mesh(box(0.34, 0.08, 1), M('#9ed45a'));
  m.scale.z = Math.max(0.01, (t.z1 - t.z0) * frac); m.position.set(t.x - 0.55, 0.36, t.z0 + m.scale.z / 2);
  return m;
}

// Coop: yellow walls, red gable roof, doorway + ramp facing east, nests along the north wall, trough, incubator (lv 2)
export function coop(C, L, lvl) {
  const { w, d } = L, x0 = C.x0, z0 = C.z0, H = 1.9, cz = z0 + d / 2, root = new THREE.Group();
  const wall = '#f2d06a', trim = '#ffffff';
  const roofMats = [lam('#c9304c', { transparent: true }), lam('#8e1f38', { transparent: true })];
  for (const s of [-1, 1]) mesh(box(w, H, 0.12), M(wall), root, x0 + w / 2, H / 2, cz + s * d / 2);
  mesh(box(0.12, H, d), M(wall), root, x0, H / 2, cz);
  const seg = (d - 1.1) / 2;
  for (const s of [-1, 1]) mesh(box(0.12, H, seg), M(wall), root, x0 + w, H / 2, cz + s * (0.55 + seg / 2));
  mesh(box(0.12, 0.5, 1.1), M(wall), root, x0 + w, H - 0.25, cz);
  // gable triangles + round window
  for (const x of [x0, x0 + w]) {
    const s = new THREE.Shape(); s.moveTo(-d / 2, 0); s.lineTo(d / 2, 0); s.lineTo(0, 1); s.lineTo(-d / 2, 0);
    const g = new THREE.ExtrudeGeometry(s, { depth: 0.12, bevelEnabled: false }); g.rotateY(Math.PI / 2);
    mesh(g, M(wall), root, x - 0.06, H, cz);
  }
  mesh(cyl(0.22, 0.22, 0.05, 10), M('#8ad0f0'), root, x0 + w + 0.04, H + 0.35, cz, false).rotation.z = Math.PI / 2;
  mesh(new THREE.TorusGeometry(0.22, 0.04, 4, 10), M(trim), root, x0 + w + 0.07, H + 0.35, cz, false).rotation.y = Math.PI / 2;
  for (const [x, z] of [[x0, z0], [x0 + w, z0], [x0, z0 + d], [x0 + w, z0 + d]]) mesh(box(0.14, H, 0.14), M(trim), root, x, H / 2, z);
  const slope = Math.hypot(d / 2 + 0.3, 1);
  for (const s of [-1, 1]) { const r = new THREE.Mesh(box(w + 0.5, 0.1, slope), roofMats[0]); r.position.set(x0 + w / 2, H + 0.52, cz + s * (d / 4 + 0.08)); r.rotation.x = s * Math.atan2(1, d / 2 + 0.3); root.add(r); }
  const ridge = new THREE.Mesh(box(w + 0.55, 0.1, 0.14), roofMats[1]); ridge.position.set(x0 + w / 2, H + 1.02, cz); root.add(ridge);
  const ramp = mesh(box(0.9, 0.05, 1.0), M(WOOD), root, x0 + w + 0.5, 0.12, cz); ramp.rotation.z = -0.2;
  for (let i = 0; i < 4; i++) mesh(box(0.05, 0.03, 0.9), M(WOOD_D), ramp, -0.3 + i * 0.2, 0.04, 0, false);
  // interior
  mesh(box(w - 0.2, 0.02, d - 0.2), M('#e0c070'), root, x0 + w / 2, 0.02, cz, false);
  mesh(box(0.35, 0.2, d - 1), M(WOOD), root, x0 + 0.35, 0.1, cz);
  const nests = [];
  for (let i = 0; i < L.cap; i++) {
    const nx = x0 + 0.9 + i * ((w - 1.5) / Math.max(1, L.cap - 1)), nz = z0 + d - 0.42;
    mesh(cyl(0.2, 0.18, 0.1, 8), M(WOOD_D), root, nx, 0.1, nz);
    mesh(new THREE.TorusGeometry(0.15, 0.06, 4, 10).rotateX(Math.PI / 2), M(STRAW), root, nx, 0.17, nz, false);
    nests.push(new THREE.Vector3(nx, 0.16, nz));
  }
  mesh(cyl(0.03, 0.03, w - 1, 5), M(WOOD), root, x0 + w / 2, 0.55, z0 + 0.5, false).rotation.z = Math.PI / 2;   // perch
  let incubator = null;
  if (L.incubator) {
    const ix = x0 + w - 0.8, iz = z0 + 0.55;
    mesh(box(0.5, 0.45, 0.4), M('#f2f2f8'), root, ix, 0.23, iz);
    mesh(sph(0.2, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), lam('#cdeeff', { transparent: true, opacity: 0.5 }), root, ix, 0.46, iz, false).scale.z = 0.8;
    mesh(sph(0.04, 6, 4), glowMat('#ff4a3a', 1, 2), root, ix + 0.18, 0.35, iz + 0.21, false);
    incubator = new THREE.Vector3(ix, 0.5, iz);
  }
  sign(root, 'KANDANG AYAM', x0 + w + 0.08, H + 0.85, cz, 1.1, '#ffffff', '#c9304c', Math.PI / 2);
  root.traverse(o => { if (o.isMesh) o.receiveShadow = true; });
  const bodies = [
    [new CANNON.Box(new CANNON.Vec3(w / 2, H / 2, 0.08)), x0 + w / 2, H / 2, z0], [new CANNON.Box(new CANNON.Vec3(w / 2, H / 2, 0.08)), x0 + w / 2, H / 2, z0 + d],
    [new CANNON.Box(new CANNON.Vec3(0.08, H / 2, d / 2)), x0, H / 2, cz],
  ];
  for (const s of [-1, 1]) bodies.push([new CANNON.Box(new CANNON.Vec3(0.08, H / 2, seg / 2)), x0 + w, H / 2, cz + s * (0.55 + seg / 2)]);
  return { root, roofMats, bodies, nests, incubator, door: { in: new THREE.Vector3(x0 + w - 0.5, 0, cz), out: new THREE.Vector3(x0 + w + 1.3, 0, cz) },
    rect: { x0: x0 + 0.7, x1: x0 + w - 0.4, z0: z0 + 0.5, z1: z0 + d - 0.9 }, trough: { x: x0 + 0.35 + 0.45, z0: z0 + 0.6, z1: z0 + d - 0.6 } };
}
export function silo(S) {
  const g = new THREE.Group(); g.position.set(S.x, 0, S.z);
  mesh(cyl(1.15, 1.2, 5, 12), M('#c8c8d4'), g, 0, 2.5, 0);
  for (let i = 1; i < 5; i++) mesh(cyl(1.18, 1.18, 0.06, 12), M('#9a9aa8'), g, 0, i, 0, false);
  mesh(sph(1.18, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), M('#b8323a'), g, 0, 5, 0);
  for (let i = 0; i < 16; i++) mesh(box(0.4, 0.03, 0.04), M('#6a6a78'), g, 1.2, 0.3 + i * 0.3, 0, false);
  for (const s of [-1, 1]) mesh(box(0.04, 4.8, 0.04), M('#6a6a78'), g, 1.2, 2.4, s * 0.2, false);
  sign(g, 'SILO', 1.21, 3.6, 0, 1.0, '#f4efe6', '#8e1f38', Math.PI / 2);
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return { root: g, body: [new CANNON.Cylinder(1.2, 1.2, 5, 10), S.x, 2.5, S.z] };
}
// wooden fence along a list of segments [ax, az, bx, bz] (gaps are just missing segments)
export function fence(segs) {
  const g = new THREE.Group(), post = M('#8a5a36'), rail = M('#c49060');
  for (const [ax, az, bx, bz] of segs) {
    const len = Math.hypot(bx - ax, bz - az), n = Math.max(1, Math.round(len / 1.6)), yaw = Math.atan2(bx - ax, bz - az);
    for (let i = 0; i <= n; i++) mesh(box(0.12, 0.95, 0.12), post, g, ax + (bx - ax) * i / n, 0.47, az + (bz - az) * i / n);
    for (const y of [0.4, 0.78]) { const r = mesh(box(0.05, 0.1, len), rail, g, (ax + bx) / 2, y, (az + bz) / 2, false); r.rotation.y = yaw; }
  }
  return g;
}

// ---------------------------------------------------------------- built once (static)
export function pond(p) {
  const g = group(p.x, 0, p.z);
  const water = mesh(new THREE.CircleGeometry(p.r, 18).rotateX(-Math.PI / 2), glowMat('#6fc8f0', 0.55, 0.9), g, 0, 0.04, 0, false);
  water.receiveShadow = false;
  reseed('pond');
  for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2; mesh(new THREE.DodecahedronGeometry(0.22 + R() * 0.12, 0), M(i % 2 ? '#9a9aa6' : '#b8b8c4'), g, Math.cos(a) * (p.r + 0.1), 0.06, Math.sin(a) * (p.r + 0.1)).scale.y = 0.55; }
  for (let i = 0; i < 9; i++) { const a = R() * 6.28, r = p.r * (0.9 + R() * 0.25); mesh(cyl(0.015, 0.02, 0.6 + R() * 0.4, 3), M('#5a8a2a'), g, Math.cos(a) * r, 0.35, Math.sin(a) * r, false); }
  for (let i = 0; i < 4; i++) { const a = R() * 6.28, r = R() * p.r * 0.7; mesh(cyl(0.22, 0.22, 0.02, 8), M('#4fa83a'), g, Math.cos(a) * r, 0.06, Math.sin(a) * r, false); }
  keepOut.push({ x: p.x, z: p.z, r: p.r + 0.4 });
}
export function dogHouse(D) {
  const g = group(D.x, 0, D.z, 0);
  mesh(box(0.9, 0.7, 1.0), M('#c47e38'), g, 0, 0.35, 0);
  for (const s of [-1, 1]) { const r = mesh(box(1.1, 0.07, 0.65), M('#c9304c'), g, 0, 0.9, s * 0.26); r.rotation.x = s * 0.7; }
  mesh(box(0.42, 0.46, 0.05), M('#3a2418'), g, 0, 0.26, 0.51, false);
  mesh(box(0.5, 0.12, 0.04), M('#ffffff'), g, 0, 0.68, 0.52, false);
  mesh(cyl(0.16, 0.12, 0.07, 10), M('#d0342c'), g, 0.55, 0.035, 0.55);                 // bowl
  addStatic(new CANNON.Box(new CANNON.Vec3(0.45, 0.45, 0.5)), D.x, 0.45, D.z);
  keepOut.push({ x: D.x, z: D.z, r: 1 });
  return toWorld(D.x, D.z, 0, 0, 1.0);
}
// "Toko Ternak": stall with eggs, milk bottles and a wool bundle on the counter
export function shopStall(S) {
  const g = group(S.x, 0, S.z, 0);
  mesh(box(2.6, 0.95, 1.0), M('#8a5a36'), g, 0, 0.475, 0);
  mesh(box(2.75, 0.08, 1.12), M('#5d3b2e'), g, 0, 0.99, 0);
  for (const [px, pz] of [[-1.25, -0.45], [1.25, -0.45], [-1.25, 0.45], [1.25, 0.45]]) mesh(cyl(0.06, 0.06, 2.4, 6), M('#5d3b2e'), g, px, 1.2, pz);
  for (let i = 0; i < 7; i++) { const a = mesh(box(0.42, 0.06, 1.5), M(i % 2 ? '#ffffff' : '#c9304c'), g, -1.26 + i * 0.42, 2.45, 0.1); a.rotation.x = -0.28; }
  for (let i = 0; i < 5; i++) mesh(sph(0.07, 7, 5), M('#fff4dc'), g, -0.9 + (i % 3) * 0.14, 1.1, 0.1 + Math.floor(i / 3) * 0.14).scale.y = 1.25;
  for (let i = 0; i < 3; i++) { mesh(cyl(0.07, 0.07, 0.24, 8), M('#ffffff'), g, 0.1 + i * 0.2, 1.15, 0.15); mesh(cyl(0.04, 0.04, 0.05, 6), M('#2f8cff'), g, 0.1 + i * 0.2, 1.3, 0.15, false); }
  for (let i = 0; i < 4; i++) mesh(ico(0.12, 1), M('#f6f3ec'), g, 0.85 + (i % 2) * 0.15, 1.1 + Math.floor(i / 2) * 0.12, 0.12);
  sign(g, 'TOKO TERNAK', 0, 2.1, 0.62, 1.6, '#c9304c', '#ffffff');
  addStatic(new CANNON.Box(new CANNON.Vec3(1.35, 0.6, 0.55)), S.x, 0.6, S.z);
  keepOut.push({ x: S.x, z: S.z, r: 2.2 });
  return toWorld(S.x, S.z, 0, 0, 1.4);
}

// ---------------------------------------------------------------- item protos
const SCALE = 1.4;
function itemProto(build, gold = false) {
  const g = new THREE.Group(), inner = new THREE.Group(); inner.scale.setScalar(SCALE); g.add(inner);
  build(inner);
  bakeRig(g, [g]);
  g.traverse(o => { o.layers.set(DETAIL_LAYER); if (o.isMesh) { o.castShadow = true; if (gold) o.material = lam('#ffd23a', { vertexColors: true, emissive: '#6a4a00' }); } });
  return g;
}
export function productModel(p, gold = false) {
  return itemProto((g) => {
    if (p.model === 'egg') { P(sph(0.1, 9, 7), p.color, g, 0, 0.12, 0).scale.set(0.9, 1.25, 0.9); P(sph(0.025, 4, 3), '#ffffff', g, -0.03, 0.2, 0.06); }
    else if (p.model === 'milk') {
      P(cyl(0.08, 0.09, 0.22, 10), p.color, g, 0, 0.11, 0); P(cyl(0.04, 0.08, 0.08, 10), p.color, g, 0, 0.26, 0);
      P(cyl(0.045, 0.045, 0.04, 8), p.cap, g, 0, 0.32, 0); P(cyl(0.092, 0.092, 0.07, 10), p.cap, g, 0, 0.12, 0);
    } else if (p.model === 'wool') { reseed('woolball'); for (let i = 0; i < 9; i++) P(ico(0.08, 1), i % 2 ? p.color : '#ffffff', g, (R() - 0.5) * 0.16, 0.08 + R() * 0.1, (R() - 0.5) * 0.16); }
    if (gold) for (let i = 0; i < 4; i++) P(new THREE.OctahedronGeometry(0.03), '#fff6b0', g, (R() - 0.5) * 0.3, 0.3 + R() * 0.1, (R() - 0.5) * 0.3);
  }, gold);
}
export function goodsModel(gd) {
  return itemProto((g) => {
    switch (gd.model) {
      case 'feed': P(sph(0.15, 8, 6), '#e8d8b0', g, 0, 0.13, 0).scale.set(1, 0.95, 0.7); P(cyl(0.12, 0.08, 0.06, 8), '#e8d8b0', g, 0, 0.27, 0); for (let i = 0; i < 6; i++) P(sph(0.02, 4, 3), gd.color, g, (i - 2.5) * 0.03, 0.3, 0.02); P(box(0.2, 0.08, 0.01), '#c9304c', g, 0, 0.14, 0.105); break;
      case 'brush': P(box(0.26, 0.05, 0.1), WOOD, g, 0, 0.08, 0); for (let i = 0; i < 12; i++) P(cyl(0.006, 0.006, 0.05, 3), '#e0c080', g, -0.11 + (i % 6) * 0.044, 0.035, (Math.floor(i / 6) - 0.5) * 0.05); P(box(0.05, 0.05, 0.14), WOOD, g, 0, 0.13, 0.02); break;
      case 'milker': P(cyl(0.12, 0.1, 0.2, 10), '#c9c9d9', g, 0, 0.1, 0); P(new THREE.TorusGeometry(0.11, 0.012, 4, 10, Math.PI), '#8a8a9a', g, 0, 0.2, 0); P(cyl(0.02, 0.02, 0.16, 5), '#e8889a', g, 0.1, 0.24, 0).rotation.z = 0.6; break;
      case 'shears': for (const s of [-1, 1]) { const b = P(box(0.03, 0.01, 0.28), '#c9c9d9', g, s * 0.03, 0.03, 0.06); b.rotation.y = s * 0.15; P(new THREE.TorusGeometry(0.04, 0.012, 4, 8), '#d0342c', g, s * 0.05, 0.03, -0.12).rotation.x = Math.PI / 2; } break;
      case 'medicine': P(cyl(0.07, 0.07, 0.18, 8), '#5fb8f0', g, 0, 0.09, 0); P(cyl(0.035, 0.035, 0.05, 6), '#ffffff', g, 0, 0.2, 0); P(box(0.08, 0.025, 0.01), '#ffffff', g, 0, 0.1, 0.07); P(box(0.025, 0.08, 0.01), '#ffffff', g, 0, 0.1, 0.07); break;
      case 'potion': P(sph(0.11, 9, 7), '#ff6ab0', g, 0, 0.11, 0); P(cyl(0.03, 0.04, 0.08, 6), '#ffb0d8', g, 0, 0.24, 0); P(cyl(0.035, 0.03, 0.04, 6), WOOD, g, 0, 0.29, 0); P(sph(0.035, 6, 4), '#ffffff', g, -0.04, 0.15, 0.08); break;
    }
  });
}
