// Low-poly item models, one builder per `model` name in public/assets/data/items.json.
// Each returns a Group with its base at y = 0. Modelled at ~0.3–0.5 m, then drawn SCALE× bigger so they read from the
// high camera (the kid is ~1.5 m tall).
// Built once per item type, baked to a single vertex-coloured mesh, then cloned for every copy in the world.
import * as THREE from 'three';
import { lam, mesh } from '../../engine/core.js';
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
};

// returns a single-mesh Group; unknown model names fall back to a grey box so a data typo is visible, not fatal
export function buildModel(name) {
  const g = new THREE.Group(), inner = new THREE.Group(); inner.scale.setScalar(SCALE); g.add(inner);
  (BUILD[name] || ((o) => mesh(box(0.25, 0.25, 0.25), lam('#888'), o, 0, 0.125, 0)))(inner);
  if (!BUILD[name]) console.warn(`pickup: unknown item model '${name}'`);
  bakeRig(g, [g]);
  return g;
}
