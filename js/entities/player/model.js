// The farmer kid's look: low-poly model built from primitives (same flat "painted" look as the car),
// rigged into joints J that controller.js animates. Change clothes/hair/face here; motion lives in controller.js.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { clamp, lerp, canvasTex } from '../../engine/util.js';
import { scene, lam, mesh } from '../../engine/core.js';
import { bakeRig } from '../../engine/batch.js';

export const HIP_Y = 0.64;   // hip joint height above the feet in the rest pose

// ---------------------------------------------------------------- materials (colours from the concept art)
const M = {
  skin: lam('#f7c6a3'), blush: lam('#ff8e8e'), hair: lam('#3a2520'), eye: lam('#2a1712'), iris: lam('#dc972a'), white: lam('#fffaf0'),
  mouth: lam('#8a1f2c'), tongue: lam('#ff7a7a'),
  capCream: lam('#f1e7cf'), capTeal: lam('#1d98a6'), brim: lam('#f2b026'), leather: lam('#7b4a2b'), gold: lam('#e6b53a'), leaf: lam('#5fbf3a'),
  jacket: lam('#c9e04e'), jacketCream: lam('#f3eed8'), trim: lam('#1d98a6'), hood: lam('#f3a531'), shirt: lam('#fbf7ee'),
  scarf: lam('#e2472f'), denim: lam('#3d63b3'), denimD: lam('#2f4f92'), cuff: lam('#aaa5bf'), sock: lam('#f5f1ea'),
  boot: lam('#8b5a33'), toe: lam('#c98d4f'), sole: lam('#3b2b2e'), lace: lam('#ef6a2e'), fur: lam('#efe2c4'), glove: lam('#6e4428'),
  whistle: lam('#f7d22c'), wood: lam('#c98b45'), woodD: lam('#9a6431'), basket: lam('#b27a3e'), tomato: lam('#e8352c'),
  cloth: new THREE.MeshLambertMaterial({ map: canvasTex(16, 16, (c) => { c.fillStyle = '#fff'; c.fillRect(0, 0, 16, 16); c.fillStyle = '#e2472f'; for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) if ((i + j) % 2) c.fillRect(i * 4, j * 4, 4, 4); }) }),
};
const rb = (w, h, d, r, seg = 2) => new RoundedBoxGeometry(w, h, d, seg, r);
const cyl = (rt, rbot, h, n = 8) => new THREE.CylinderGeometry(rt, rbot, h, n);
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const deco = (geo, m, parent, x, y, z) => mesh(geo, m, parent, x, y, z, false);   // tiny details: no shadow

// ---------------------------------------------------------------- rig (root at the feet, facing +z)
export const avatar = new THREE.Group(); scene.add(avatar);
export const squash = new THREE.Group(); avatar.add(squash);
export const J = { hips: new THREE.Group(), spine: new THREE.Group(), head: new THREE.Group() };
squash.add(J.hips); J.hips.position.y = HIP_Y;
J.hips.add(J.spine); J.spine.position.y = 0.1;
J.spine.add(J.head); J.head.position.y = 0.41;

// hips: overalls, belt, tool pouch, bucket, basket
mesh(rb(0.36, 0.2, 0.26, 0.07), M.denim, J.hips, 0, 0.02, 0);
mesh(box(0.385, 0.055, 0.285), M.leather, J.hips, 0, 0.1, 0);
deco(box(0.075, 0.06, 0.02), M.gold, J.hips, 0, 0.1, 0.147);
{
  const pouch = new THREE.Group(); pouch.position.set(-0.215, 0.02, 0.02); J.hips.add(pouch);
  mesh(rb(0.09, 0.17, 0.15, 0.03), M.leather, pouch, 0, 0, 0);
  deco(box(0.095, 0.05, 0.155), M.woodD, pouch, 0, 0.06, 0);
  deco(cyl(0.02, 0.02, 0.12, 6), M.scarf, pouch, 0, 0.1, 0.035);
  deco(cyl(0.018, 0.018, 0.11, 6), M.hood, pouch, 0, 0.1, -0.03);
}
J.bucket = new THREE.Group(); J.bucket.position.set(-0.09, 0.07, 0.16); J.hips.add(J.bucket);
{
  deco(new THREE.TorusGeometry(0.025, 0.008, 4, 10), M.gold, J.bucket, 0, 0, 0);
  deco(new THREE.TorusGeometry(0.06, 0.007, 4, 10, Math.PI), M.leather, J.bucket, 0, -0.07, 0.03);
  mesh(cyl(0.065, 0.055, 0.1, 10), M.wood, J.bucket, 0, -0.1, 0.03);
  for (const y of [-0.07, -0.13]) deco(cyl(0.068, 0.068, 0.014, 10), M.woodD, J.bucket, 0, y, 0.03);
  const lf = deco(box(0.045, 0.03, 0.01), M.leaf, J.bucket, 0, -0.1, 0.095); lf.rotation.z = 0.5;
}
J.basket = new THREE.Group(); J.basket.position.set(0.23, 0.08, 0.02); J.hips.add(J.basket);
{
  mesh(cyl(0.11, 0.085, 0.13, 10), M.basket, J.basket, 0, -0.1, 0);
  deco(new THREE.TorusGeometry(0.11, 0.015, 4, 12).rotateX(Math.PI / 2), M.woodD, J.basket, 0, -0.035, 0);
  for (const [x, z] of [[0.03, 0.03], [-0.04, 0.01], [0.01, -0.05]]) mesh(new THREE.IcosahedronGeometry(0.045, 0), M.tomato, J.basket, x, -0.01, z);
  for (const a of [0, 2, 4]) { const l = deco(box(0.07, 0.012, 0.03), M.leaf, J.basket, Math.cos(a) * 0.04, 0.03, Math.sin(a) * 0.04); l.rotation.set(0.4, a, 0.5); }
  const c = deco(box(0.1, 0.07, 0.012), M.cloth, J.basket, 0.06, -0.06, 0.07); c.rotation.set(0.1, 0.7, -0.3);
}

// legs: denim thigh, rolled grey cuff, striped sock, chunky boot
function leg(s) {
  const hip = new THREE.Group(); hip.position.set(0.105 * s, -0.02, 0); J.hips.add(hip);
  mesh(cyl(0.115, 0.1, 0.27), M.denim, hip, 0, -0.12, 0);
  const knee = new THREE.Group(); knee.position.y = -0.24; hip.add(knee);
  mesh(cyl(0.1, 0.1, 0.1), M.denim, knee, 0, -0.03, 0);
  mesh(cyl(0.122, 0.122, 0.085), M.cuff, knee, 0, -0.11, 0);
  mesh(cyl(0.066, 0.066, 0.14), M.sock, knee, 0, -0.2, 0);
  deco(cyl(0.069, 0.069, 0.025), M.scarf, knee, 0, -0.17, 0);
  const foot = new THREE.Group(); foot.position.y = -0.38; knee.add(foot);
  mesh(rb(0.19, 0.06, 0.3, 0.025), M.sole, foot, 0, 0.03, 0.035);
  mesh(rb(0.18, 0.2, 0.24, 0.06), M.boot, foot, 0, 0.15, 0);
  mesh(rb(0.186, 0.11, 0.13, 0.05), M.toe, foot, 0, 0.1, 0.11);
  mesh(cyl(0.1, 0.1, 0.05, 10), M.fur, foot, 0, 0.26, -0.01);
  for (let i = 0; i < 3; i++) deco(box(0.1, 0.016, 0.02), M.lace, foot, 0, 0.17 + i * 0.035, 0.122);
  deco(box(0.06, 0.07, 0.02), M.brim, foot, 0, 0.2, -0.125);
  return { hip, knee, foot };
}
J.L = leg(1); J.R = leg(-1);

// torso: overall bib over a white shirt, open cropped jacket, scarf, whistle, chicken pin, hood.
// The chest is an elliptical lathe (soft shoulders, slight waist) and the jacket/shirt/bib are
// partial shells of the same profile, so the front wraps around instead of reading as a box.
const TORSO = [[0.15, 0], [0.155, 0.93], [0.2, 0.98], [0.26, 1], [0.33, 1], [0.38, 0.93], [0.41, 0.78], [0.43, 0.5], [0.44, 0]];
const TW = 0.21, TD = 0.14;
const torsoR = (y) => {
  for (let i = 1; i < TORSO.length; i++) if (y <= TORSO[i][0]) { const [y0, r0] = TORSO[i - 1], [y1, r1] = TORSO[i]; return lerp(r0, r1, (y - y0) / (y1 - y0)); }
  return 0;
};
function shell(m, parent, y0, y1, grow = 1, phi0 = -Math.PI, phi1 = Math.PI, cast = false) {
  const ys = [y0, ...TORSO.map(p => p[0]).filter(y => y > y0 && y < y1), y1];
  const seg = Math.max(3, Math.ceil((phi1 - phi0) / (Math.PI * 2) * 28));
  const geo = new THREE.LatheGeometry(ys.map(y => new THREE.Vector2(torsoR(y) * grow, y)), seg, phi0, phi1 - phi0).scale(TW, 1, TD);
  return mesh(geo, m, parent, 0, 0, 0, cast);
}
// sit a detail on the torso surface at angle a (0 = front, PI = back) and height y, turned to follow the curve
function onTorso(o, a, y, grow = 1) {
  const r = torsoR(y) * grow;
  o.position.set(TW * r * Math.sin(a), y, TD * r * Math.cos(a)); o.rotation.y = Math.atan2(Math.sin(a) / TW, Math.cos(a) / TD);
  return o;
}
const onChest = (o, x, y, lift = 0) => { onTorso(o, Math.asin(clamp(x / (TW * torsoR(y)), -1, 1)), y); o.position.z += lift; return o; };
{
  const t = J.spine;
  mesh(rb(0.33, 0.3, 0.23, 0.08, 4), M.denim, t, 0, 0.12, 0);
  shell(M.jacketCream, t, 0.15, 0.44, 1, -Math.PI, Math.PI, true);
  shell(M.trim, t, 0.155, 0.195, 1.06);
  for (const s of [1, -1]) {
    shell(M.jacket, t, 0.2, 0.4, 1.05, ...(s > 0 ? [0.47, 1.4] : [-1.4, -0.47]));
    shell(M.denim, t, 0.29, 0.41, 1.05, ...(s > 0 ? [0.26, 0.44] : [-0.44, -0.26]));
    const col = deco(box(0.05, 0.12, 0.03), M.hood, t, s * 0.1, 0.4, 0.105); col.rotation.z = s * 0.4;
  }
  shell(M.shirt, t, 0.21, 0.41, 1.025, -0.39, 0.39);
  shell(M.denim, t, 0.195, 0.315, 1.05, -0.42, 0.42);
  shell(M.denimD, t, 0.205, 0.275, 1.075, -0.24, 0.24);
  deco(rb(0.05, 0.065, 0.035, 0.015), M.whistle, t, 0.01, 0.29, 0.16);
  for (const s of [1, -1]) { const str = deco(box(0.01, 0.13, 0.01), M.eye, t, s * 0.035, 0.36, 0.145); str.rotation.z = s * 0.45; }
  const pin = new THREE.Group(); t.add(onChest(pin, -0.15, 0.35, 0.012));  // chicken pin
  deco(box(0.05, 0.05, 0.014), M.shirt, pin, 0, 0, 0);
  deco(box(0.02, 0.02, 0.012), M.scarf, pin, 0, 0.032, 0);
  deco(box(0.015, 0.012, 0.012), M.whistle, pin, 0.024, 0, 0.005);
  deco(box(0.08, 0.05, 0.05), M.scarf, t, 0, 0.405, 0.13);               // scarf knot + tip
  deco(new THREE.ConeGeometry(0.07, 0.11, 3).rotateX(Math.PI), M.scarf, t, 0, 0.35, 0.15);
  // scarf: wrapped round the neck, two tails hanging down the back with fringed ends
  const wrap = mesh(new THREE.TorusGeometry(0.13, 0.042, 6, 18).rotateX(Math.PI / 2), M.scarf, t, 0, 0.415, -0.005); wrap.scale.z = 0.8;
  for (const [a0, a1, y0, g] of [[3.0, 3.58, 0.17, 1.08], [2.52, 3.0, 0.23, 1.12]]) {
    shell(M.scarf, t, y0, 0.41, g, a0, a1, true);
    for (let k = 0; k < 5; k++) onTorso(deco(box(0.014, 0.045, 0.01), M.scarf, t), lerp(a0 + 0.04, a1 - 0.04, k / 4), y0 - 0.018, g);
  }
}

// arms: puffy sleeve with teal cuff, bare forearm, brown work glove
function arm(s) {
  const sh = new THREE.Group(); sh.position.set(0.225 * s, 0.37, 0); J.spine.add(sh);
  mesh(rb(0.15, 0.17, 0.16, 0.065, 4), M.jacket, sh, 0.01 * s, -0.06, 0);
  mesh(cyl(0.085, 0.085, 0.04, 10), M.trim, sh, 0.01 * s, -0.155, 0);
  mesh(cyl(0.048, 0.048, 0.08), M.skin, sh, 0.01 * s, -0.2, 0);
  const el = new THREE.Group(); el.position.set(0.01 * s, -0.22, 0); sh.add(el);
  mesh(cyl(0.048, 0.045, 0.1), M.skin, el, 0, -0.04, 0);
  mesh(rb(0.105, 0.06, 0.105, 0.02), M.glove, el, 0, -0.1, 0);
  mesh(rb(0.095, 0.11, 0.09, 0.035), M.glove, el, 0, -0.17, 0.005);
  deco(box(0.05, 0.045, 0.012), M.toe, el, 0, -0.165, 0.052);
  return { sh, el };
}
J.LA = arm(1); J.RA = arm(-1);

// head: face, big amber eyes, open smile, messy hair, backwards-ish farmer cap with a sprout
{
  const h = J.head;
  mesh(cyl(0.065, 0.075, 0.09), M.skin, h, 0, 0, 0);
  mesh(rb(0.4, 0.37, 0.36, 0.11), M.skin, h, 0, 0.2, 0.01);
  for (const s of [1, -1]) mesh(rb(0.05, 0.08, 0.06, 0.02), M.skin, h, s * 0.2, 0.18, 0);
  J.eyes = new THREE.Group(); J.eyes.position.set(0, 0.19, 0.192); h.add(J.eyes);
  for (const s of [1, -1]) {
    const x = s * 0.085;
    deco(box(0.075, 0.1, 0.012), M.eye, J.eyes, x, 0, 0);
    deco(box(0.057, 0.055, 0.012), M.iris, J.eyes, x, -0.018, 0.003);
    deco(box(0.026, 0.026, 0.01), M.white, J.eyes, x + 0.014, 0.022, 0.007);
    deco(box(0.012, 0.012, 0.01), M.white, J.eyes, x - 0.018, -0.03, 0.007);
    const lash = deco(box(0.092, 0.018, 0.014), M.eye, J.eyes, x + s * 0.004, 0.052, 0.002); lash.rotation.z = s * 0.15;
    const brow = deco(box(0.07, 0.014, 0.01), M.hair, h, x, 0.285, 0.19); brow.rotation.z = -s * 0.12;
    const bl = deco(new THREE.CircleGeometry(0.032, 10), M.blush, h, s * 0.135, 0.12, 0.188); bl.scale.y = 0.55;
  }
  J.mouth = new THREE.Group(); J.mouth.position.set(0, 0.095, 0.19); h.add(J.mouth);
  deco(new THREE.CircleGeometry(0.045, 12, Math.PI, Math.PI), M.mouth, J.mouth, 0, 0, 0.002).scale.x = 1.2;
  deco(new THREE.CircleGeometry(0.026, 10, Math.PI, Math.PI), M.tongue, J.mouth, 0, -0.02, 0.004);
  deco(box(0.08, 0.012, 0.004), M.white, J.mouth, 0, -0.005, 0.004);
  // hair
  // dome rather than a box: a box's top corners poked out from under the cap as two bumps at the back
  const top = mesh(new THREE.SphereGeometry(0.25, 16, 6, 0, Math.PI * 2, 0, Math.PI / 2), M.hair, h, 0, 0.3, -0.005); top.scale.set(0.95, 0.75, 0.9);
  mesh(rb(0.44, 0.28, 0.14, 0.07), M.hair, h, 0, 0.21, -0.14);
  // jagged nape: a fan of spikes along the bottom of the back hair, longer in the middle
  for (let i = -3; i <= 3; i++) {
    const len = (i % 2 ? 0.1 : 0.14) - Math.abs(i) * 0.008;
    const sp = mesh(new THREE.ConeGeometry(0.045, len, 4).rotateX(Math.PI), M.hair, h, i * 0.055, 0.09 - len / 2, -0.17 + Math.abs(i) * 0.008);
    sp.rotation.set(-0.25, 0, -i * 0.05);
  }
  mesh(box(0.42, 0.06, 0.06), M.hair, h, 0, 0.36, 0.17);
  for (let i = -2; i <= 2; i++) { const f = mesh(new THREE.ConeGeometry(0.05, 0.13, 4).rotateX(Math.PI), M.hair, h, i * 0.08, 0.31, 0.18); f.rotation.z = -i * 0.18; }
  for (const s of [1, -1]) {
    mesh(rb(0.05, 0.22, 0.24, 0.02), M.hair, h, s * 0.205, 0.22, 0.02);
    const lk = mesh(new THREE.ConeGeometry(0.04, 0.12, 4).rotateX(Math.PI), M.hair, h, s * 0.205, 0.09, 0.1); lk.rotation.z = s * 0.2;
  }
  // cap
  const cap = new THREE.Group(); cap.position.set(0, 0.395, -0.01); cap.rotation.set(-0.12, 0.55, -0.1); h.add(cap);
  const crown = (m, from) => { const c = mesh(new THREE.SphereGeometry(0.24, 12, 6, from, Math.PI, 0, Math.PI / 2), m, cap); c.scale.set(1, 0.62, 1.05); };
  crown(M.capCream, 0); crown(M.capTeal, Math.PI);
  const brim = mesh(new THREE.CylinderGeometry(0.21, 0.21, 0.025, 14, 1, false, -Math.PI / 2, Math.PI), M.brim, cap, 0, 0.005, 0.1);
  brim.rotation.x = 0.1;
  deco(box(0.02, 0.045, 0.2), M.leather, cap, -0.236, 0.05, -0.07);
  deco(box(0.022, 0.05, 0.04), M.gold, cap, -0.246, 0.05, -0.01);
  const patch = deco(box(0.1, 0.07, 0.01), M.leather, cap, 0, 0.1, 0.228); patch.rotation.x = -0.5;
  const pl = deco(box(0.06, 0.035, 0.01), M.leaf, patch, 0, 0, 0.007); pl.rotation.z = 0.5;
  deco(cyl(0.03, 0.03, 0.02, 8), M.capTeal, cap, 0, 0.175, 0);
  deco(new THREE.IcosahedronGeometry(0.022, 0), M.brim, cap, 0.06, 0.18, -0.04);
  deco(cyl(0.008, 0.008, 0.06, 4), M.leaf, cap, 0.06, 0.21, -0.04);
  for (const s of [1, -1]) { const l = deco(new THREE.SphereGeometry(0.03, 6, 4), M.leaf, cap, 0.06 + s * 0.03, 0.24, -0.04); l.scale.set(1.4, 0.35, 0.8); l.rotation.z = s * 0.45; }
}

// ~130 primitives -> one vertex-coloured mesh per joint (~17 draw calls instead of ~200 with shadows)
bakeRig(avatar, [J.hips, J.spine, J.head, J.eyes, J.mouth, J.bucket, J.basket, J.L.hip, J.L.knee, J.L.foot, J.R.hip, J.R.knee, J.R.foot, J.LA.sh, J.LA.el, J.RA.sh, J.RA.el]);
