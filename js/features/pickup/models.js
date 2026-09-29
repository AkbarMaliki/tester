// Low-poly item models, one builder per `model` name in public/assets/data/items.json.
// Each returns a Group with its base at y = 0. Modelled at ~0.3–0.5 m, then drawn SCALE× bigger so they read from the
// high camera (the kid is ~1.5 m tall).
// Built once per item type, baked to a single vertex-coloured mesh, then cloned for every copy in the world.
import * as THREE from 'three';
import { lam, mesh, DETAIL_LAYER } from '../../engine/core.js';
import { bakeRig } from '../../engine/batch.js';

const SCALE = 1.4;
const box = (x, y, z) => new THREE.BoxGeometry(x, y, z);
const cyl = (a, b, h, n = 7) => new THREE.CylinderGeometry(a, b, h, n);
const ico = (r, d = 0) => new THREE.IcosahedronGeometry(r, d);

const BUILD = {
  apple(g) {
    mesh(ico(0.17, 1), lam('#e8323c'), g, 0, 0.16, 0).scale.set(1, 0.9, 1);
    mesh(ico(0.07, 0), lam('#ff8a7a'), g, -0.07, 0.22, 0.1, false);                       // shine
    mesh(cyl(0.015, 0.02, 0.1, 5), lam('#6b4020'), g, 0, 0.34, 0, false).rotation.z = 0.25;
    const leaf = mesh(box(0.12, 0.015, 0.06), lam('#5fb84a'), g, 0.06, 0.36, 0, false); leaf.rotation.z = -0.4;
  },
  mushroom(g) {
    mesh(cyl(0.06, 0.08, 0.2, 8), lam('#f4ead0'), g, 0, 0.1, 0);
    mesh(new THREE.SphereGeometry(0.19, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), lam('#d9344a'), g, 0, 0.17, 0).scale.y = 0.8;
    for (const [x, z] of [[0.09, 0.05], [-0.07, 0.09], [-0.05, -0.1], [0.06, -0.09], [0, 0]]) {
      const y = 0.17 + Math.sqrt(Math.max(0, 0.034 - x * x - z * z)) * 0.8;
      mesh(ico(0.028, 0), lam('#fff8ec'), g, x, y, z, false);
    }
  },
  flower(g) {
    mesh(cyl(0.015, 0.02, 0.32, 5), lam('#4f9e3c'), g, 0, 0.16, 0, false);
    for (const s of [1, -1]) { const l = mesh(box(0.13, 0.015, 0.05), lam('#6cc24e'), g, s * 0.06, 0.1, 0, false); l.rotation.z = s * 0.5; }
    const head = new THREE.Group(); head.position.y = 0.34; head.rotation.x = 0.35; g.add(head);
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; mesh(ico(0.065, 0), lam('#ffd23a'), head, Math.cos(a) * 0.08, 0, Math.sin(a) * 0.08).scale.y = 0.45; }
    mesh(ico(0.05, 0), lam('#e8751a'), head, 0, 0.02, 0, false);
  },
  berry(g) {
    const l = mesh(box(0.26, 0.02, 0.14), lam('#4f9e3c'), g, 0, 0.02, 0, false); l.rotation.y = 0.5;
    for (const [x, z, y] of [[0, 0, 0.09], [0.1, 0.04, 0.08], [-0.06, 0.08, 0.08], [0.03, -0.09, 0.08], [0.04, 0.02, 0.18]]) mesh(ico(0.075, 1), lam('#6a3fc0'), g, x, y, z);
    mesh(ico(0.03, 0), lam('#c6a8ff'), g, 0.02, 0.24, 0.04, false);
  },
  egg(g) {
    const nest = mesh(new THREE.TorusGeometry(0.16, 0.06, 5, 10).rotateX(Math.PI / 2), lam('#b98d4e'), g, 0, 0.05, 0); nest.scale.y = 0.8;
    mesh(cyl(0.14, 0.1, 0.05, 10), lam('#9c7340'), g, 0, 0.03, 0, false);
    mesh(ico(0.12, 1), lam('#fff4dc'), g, 0, 0.17, 0).scale.set(0.9, 1.25, 0.9);
    mesh(ico(0.025, 0), lam('#d8b98a'), g, 0.07, 0.22, 0.05, false);
  },
  shell(g) {
    mesh(new THREE.ConeGeometry(0.2, 0.12, 9), lam('#f5a3b4'), g, 0, 0.06, 0).scale.set(1, 1, 0.8);
    for (let i = -3; i <= 3; i++) { const r = mesh(box(0.018, 0.02, 0.2), lam('#e0788e'), g, Math.sin(i * 0.4) * 0.1, 0.075, 0.02, false); r.rotation.y = i * 0.4; r.rotation.x = -0.45; }
    mesh(box(0.1, 0.04, 0.06), lam('#f5a3b4'), g, 0, 0.02, -0.15);
  },
  stone(g) {
    mesh(new THREE.DodecahedronGeometry(0.2, 0), lam('#9a9aa6'), g, 0, 0.14, 0).scale.set(1.1, 0.7, 0.9);
    mesh(new THREE.DodecahedronGeometry(0.1, 0), lam('#b8b8c4'), g, 0.14, 0.07, 0.1).scale.set(1, 0.7, 1);
  },
  branch(g) {
    const m = lam('#a8703e'), md = lam('#6b4020');
    mesh(cyl(0.05, 0.065, 0.62, 6), m, g, 0, 0.05, 0).rotation.set(0, 0.3, Math.PI / 2);
    const tw = mesh(cyl(0.02, 0.03, 0.26, 5), m, g, 0.06, 0.07, 0.1); tw.rotation.set(Math.PI / 2, 0, 0.9); tw.rotation.order = 'YXZ'; tw.rotation.y = -0.6;
    mesh(cyl(0.05, 0.05, 0.01, 6), md, g, 0.29, 0.05, -0.09, false).rotation.set(0, 0.3, Math.PI / 2);
    const lf = mesh(box(0.1, 0.015, 0.06), lam('#8fb84a'), g, -0.2, 0.09, 0.08, false); lf.rotation.y = 0.7;
  },
  bottle(g) { bottle(g, true); },
  bottleEmpty(g) { bottle(g, false); },
  ginger(g) {   // knobbly root with a green shoot
    const m = lam('#d9a55a');
    for (const [x, z, r] of [[0, 0, 0.09], [0.12, 0.03, 0.07], [-0.11, -0.02, 0.075], [0.05, -0.1, 0.06], [-0.04, 0.1, 0.055]]) mesh(ico(r, 0), m, g, x, r * 0.8, z).scale.set(1.2, 0.8, 1);
    mesh(ico(0.03, 0), lam('#f1d59a'), g, 0.02, 0.13, 0.02, false);
    mesh(cyl(0.012, 0.015, 0.14, 4), lam('#6cc24e'), g, -0.1, 0.13, -0.02, false).rotation.z = 0.4;
  },
  antidote(g) {   // little green potion bottle with a cork and a white cross label
    mesh(ico(0.12, 1), lam('#5fe08a'), g, 0, 0.12, 0).scale.set(1, 1, 1);
    mesh(cyl(0.04, 0.05, 0.1, 7), lam('#9ff0bb'), g, 0, 0.25, 0);
    mesh(cyl(0.045, 0.04, 0.06, 7), lam('#a8703e'), g, 0, 0.32, 0, false);
    mesh(box(0.1, 0.03, 0.02), lam('#ffffff'), g, 0, 0.13, 0.115, false);
    mesh(box(0.03, 0.1, 0.02), lam('#ffffff'), g, 0, 0.13, 0.115, false);
  },
  bandage(g) {   // roll lying down + loose end, red cross stripe
    const roll = new THREE.Group(); roll.rotation.z = Math.PI / 2; roll.position.y = 0.11; g.add(roll);
    mesh(cyl(0.11, 0.11, 0.18, 10), lam('#f4f0e8'), roll);
    mesh(cyl(0.045, 0.045, 0.19, 8), lam('#d8cfc0'), roll, 0, 0, 0, false);
    mesh(box(0.18, 0.01, 0.2), lam('#f4f0e8'), g, 0, 0.005, 0.18, false);
    mesh(box(0.1, 0.012, 0.03), lam('#e8324f'), g, 0, 0.012, 0.2, false);
    mesh(box(0.03, 0.012, 0.1), lam('#e8324f'), g, 0, 0.012, 0.2, false);
  },
  bread(g) {   // loaf with a golden crust and score marks
    mesh(box(0.36, 0.12, 0.2), lam('#e0a95c'), g, 0, 0.06, 0);
    mesh(ico(0.14, 1), lam('#c47e38'), g, 0, 0.12, 0).scale.set(1.3, 0.55, 0.75);
    for (const x of [-0.09, 0, 0.09]) { const s = mesh(box(0.02, 0.012, 0.14), lam('#f1d59a'), g, x, 0.19, 0, false); s.rotation.y = 0.5; }
  },
  soup(g) {   // red bowl of soup with mushroom bits and a spoon
    mesh(cyl(0.18, 0.1, 0.13, 10), lam('#d0342c'), g, 0, 0.065, 0);
    mesh(cyl(0.16, 0.16, 0.02, 10), lam('#e8b04a'), g, 0, 0.12, 0, false);
    for (const [x, z] of [[0.06, 0.04], [-0.07, 0.02], [0, -0.08]]) mesh(ico(0.035, 0), lam('#f4ead0'), g, x, 0.135, z, false);
    mesh(ico(0.03, 0), lam('#d9344a'), g, -0.02, 0.14, 0.08, false);
    const sp = mesh(box(0.03, 0.02, 0.26), lam('#c9c9d9'), g, 0.1, 0.17, -0.02, false); sp.rotation.set(0.5, 0.4, 0);
  },
  coffee(g) {   // cup on a saucer
    mesh(cyl(0.16, 0.16, 0.025, 12), lam('#f2eeff'), g, 0, 0.012, 0);
    mesh(cyl(0.1, 0.08, 0.16, 10), lam('#ffffff'), g, 0, 0.1, 0);
    mesh(cyl(0.088, 0.088, 0.01, 10), lam('#4a2a18'), g, 0, 0.176, 0, false);
    mesh(new THREE.TorusGeometry(0.045, 0.015, 5, 8), lam('#ffffff'), g, 0.11, 0.1, 0, false);
  },
  energyDrink(g) {   // can with a lightning stripe
    mesh(cyl(0.075, 0.075, 0.26, 10), lam('#2f8cff'), g, 0, 0.13, 0);
    mesh(cyl(0.065, 0.075, 0.03, 10), lam('#c9c9d9'), g, 0, 0.275, 0, false);
    const b = mesh(box(0.05, 0.14, 0.02), lam('#ffe03a'), g, 0, 0.14, 0.072, false); b.rotation.z = 0.5;
  },
  tea(g) {   // glass mug of amber tea with a steam curl
    mesh(cyl(0.09, 0.08, 0.18, 10), lam('#e8f4ff'), g, 0, 0.09, 0);
    mesh(cyl(0.082, 0.082, 0.01, 10), lam('#c9772a'), g, 0, 0.17, 0, false);
    mesh(new THREE.TorusGeometry(0.045, 0.014, 5, 8), lam('#e8f4ff'), g, 0.1, 0.1, 0, false);
    for (const [y, x] of [[0.24, 0.02], [0.3, -0.02]]) mesh(ico(0.025, 0), lam('#ffffff'), g, x, y, 0, false).scale.y = 1.4;
  },
  cocoa(g) {   // red mug of cocoa with marshmallows
    mesh(cyl(0.1, 0.09, 0.17, 10), lam('#d0342c'), g, 0, 0.085, 0);
    mesh(cyl(0.09, 0.09, 0.01, 10), lam('#5a2e1a'), g, 0, 0.165, 0, false);
    for (const [x, z] of [[0.03, 0.02], [-0.03, -0.01], [0.0, -0.04]]) mesh(box(0.035, 0.03, 0.035), lam('#fff4f8'), g, x, 0.18, z, false);
    mesh(new THREE.TorusGeometry(0.05, 0.016, 5, 8), lam('#d0342c'), g, 0.11, 0.09, 0, false);
  },
  icedTea(g) {   // tall glass, ice cubes, straw
    mesh(cyl(0.075, 0.06, 0.28, 10), lam('#e0a050'), g, 0, 0.14, 0);
    for (const [x, z, y] of [[0.02, 0.02, 0.26], [-0.025, -0.01, 0.27]]) mesh(box(0.04, 0.04, 0.04), lam('#eaf8ff'), g, x, y, z, false);
    const st = mesh(cyl(0.01, 0.01, 0.2, 5), lam('#e8324f'), g, 0.03, 0.33, 0.01, false); st.rotation.z = -0.3;
  },
  umbrella(g) {   // open red-and-white umbrella (base at the handle, so it sits over the head when carried)
    mesh(cyl(0.012, 0.012, 0.5, 5), lam('#5d3b6e'), g, 0, 0.25, 0);
    const hook = mesh(new THREE.TorusGeometry(0.035, 0.012, 4, 8, Math.PI), lam('#5d3b6e'), g, 0.035, 0.0, 0, false); hook.rotation.z = Math.PI;
    for (let i = 0; i < 8; i++) {
      const a = i / 8 * Math.PI * 2;
      const panel = mesh(new THREE.ConeGeometry(0.42, 0.2, 3, 1, true, a, Math.PI / 4), lam(i % 2 ? '#ffffff' : '#e8324f', { side: THREE.DoubleSide }), g, 0, 0.58, 0);
      panel.castShadow = true;
    }
    mesh(ico(0.02, 0), lam('#ffd98a'), g, 0, 0.69, 0, false);
  },
  sachet(g) {   // flat orange packet with a white label
    mesh(box(0.22, 0.03, 0.28), lam('#ff9a3a'), g, 0, 0.015, 0);
    mesh(box(0.14, 0.01, 0.12), lam('#ffffff'), g, 0, 0.034, 0.02, false);
    mesh(box(0.22, 0.02, 0.03), lam('#e0772a'), g, 0, 0.02, -0.14, false);
  },
};
// drinking bottle, lying on its side so it reads from above; `full` = blue water inside, else a pale empty one
function bottle(g, full) {
  const b = new THREE.Group(); b.rotation.z = Math.PI / 2; b.position.y = 0.09; g.add(b);
  mesh(cyl(0.085, 0.085, 0.3, 9), lam(full ? '#5fb8f0' : '#cfe3ee'), b, 0, 0, 0);
  mesh(cyl(0.088, 0.088, 0.1, 9), lam(full ? '#ffffff' : '#e9eef2'), b, 0, 0.02, 0, false);     // label
  mesh(cyl(0.05, 0.085, 0.07, 9), lam(full ? '#8fd0f7' : '#dcebf2'), b, 0, 0.185, 0);           // shoulder
  mesh(cyl(0.045, 0.045, 0.06, 8), lam(full ? '#2f6fd6' : '#8a96a8'), b, 0, 0.25, 0);           // cap
}

// returns a single-mesh Group; unknown model names fall back to a grey box so a data typo is visible, not fatal
export function buildModel(name) {
  const g = new THREE.Group(), inner = new THREE.Group(); inner.scale.setScalar(SCALE); g.add(inner);
  (BUILD[name] || ((o) => mesh(box(0.25, 0.25, 0.25), lam('#888'), o, 0, 0.125, 0)))(inner);
  if (!BUILD[name]) console.warn(`pickup: unknown item model '${name}'`);
  bakeRig(g, [g]);
  g.traverse(o => o.layers.set(DETAIL_LAYER));   // too small for the map view: skipped there (clones keep it)
  return g;
}
