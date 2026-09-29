// The farmer kid: low-poly model built from primitives (same flat "painted" look as the car),
// capsule physics, procedural animation (idle, walk, run, jump, cheer) and the
// walk-to-door / climb-in / climb-out sequence that hands control over to the car.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { PLAYER_SPAWN, WATER_Y } from './config.js';
import { clamp, lerp, smooth, frand, canvasTex } from './util.js';
import { scene, camera, world, U, lam, mesh } from './core.js';
import { groundY, maskAt } from './worldmap.js';
import { WU } from './terrain.js';
import { car, chassisBody, drive, setDoor, isUpsideDown, unflip } from './car.js';
import { smoke } from './effects.js';
import { sfx } from './audio.js';
import { bakeRig } from './batch.js';

const WALK = 3.4, RUN = 7, JUMP = 6.2, HIP_Y = 0.64;

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
const rb = (w, h, d, r) => new RoundedBoxGeometry(w, h, d, 2, r);
const cyl = (rt, rbot, h, n = 8) => new THREE.CylinderGeometry(rt, rbot, h, n);
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const deco = (geo, m, parent, x, y, z) => mesh(geo, m, parent, x, y, z, false);   // tiny details: no shadow

// ---------------------------------------------------------------- rig (root at the feet, facing +z)
export const avatar = new THREE.Group(); scene.add(avatar);
const squash = new THREE.Group(); avatar.add(squash);
const J = { hips: new THREE.Group(), spine: new THREE.Group(), head: new THREE.Group() };
squash.add(J.hips); J.hips.position.y = HIP_Y;
J.hips.add(J.spine); J.spine.position.y = 0.1;
J.spine.add(J.head); J.head.position.y = 0.44;

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

// torso: overall bib over a white shirt, open cropped jacket, scarf, whistle, chicken pin, hood
{
  const t = J.spine;
  mesh(rb(0.33, 0.3, 0.23, 0.08), M.denim, t, 0, 0.12, 0);
  mesh(rb(0.42, 0.25, 0.28, 0.08), M.jacketCream, t, 0, 0.29, 0);
  mesh(box(0.43, 0.04, 0.285), M.trim, t, 0, 0.175, 0);
  for (const s of [1, -1]) {
    deco(box(0.11, 0.2, 0.02), M.jacket, t, s * 0.15, 0.3, 0.14);
    deco(box(0.035, 0.12, 0.02), M.denim, t, s * 0.07, 0.35, 0.146);
    const col = deco(box(0.05, 0.12, 0.03), M.hood, t, s * 0.1, 0.4, 0.12); col.rotation.z = s * 0.4;
  }
  deco(box(0.16, 0.2, 0.012), M.shirt, t, 0, 0.31, 0.142);
  deco(box(0.17, 0.17, 0.012), M.denim, t, 0, 0.23, 0.149);
  deco(box(0.1, 0.07, 0.01), M.denimD, t, 0, 0.24, 0.157);
  deco(rb(0.05, 0.065, 0.035, 0.015), M.whistle, t, 0.01, 0.29, 0.17);
  for (const s of [1, -1]) { const str = deco(box(0.01, 0.13, 0.01), M.eye, t, s * 0.035, 0.36, 0.162); str.rotation.z = s * 0.45; }
  deco(box(0.05, 0.05, 0.014), M.shirt, t, -0.15, 0.35, 0.155);          // chicken pin
  deco(box(0.02, 0.02, 0.012), M.scarf, t, -0.15, 0.382, 0.155);
  deco(box(0.015, 0.012, 0.012), M.whistle, t, -0.126, 0.35, 0.16);
  deco(box(0.08, 0.05, 0.05), M.scarf, t, 0, 0.405, 0.13);               // scarf knot + tip
  deco(new THREE.ConeGeometry(0.07, 0.11, 3).rotateX(Math.PI), M.scarf, t, 0, 0.35, 0.15);
  mesh(rb(0.3, 0.11, 0.13, 0.04), M.hood, t, 0, 0.43, -0.1);
}

// arms: puffy sleeve with teal cuff, bare forearm, brown work glove
function arm(s) {
  const sh = new THREE.Group(); sh.position.set(0.225 * s, 0.37, 0); J.spine.add(sh);
  mesh(rb(0.15, 0.17, 0.16, 0.05), M.jacket, sh, 0.01 * s, -0.06, 0);
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
  mesh(cyl(0.05, 0.055, 0.07), M.skin, h, 0, 0.01, 0);
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
  mesh(rb(0.44, 0.16, 0.41, 0.07), M.hair, h, 0, 0.36, -0.005);
  mesh(rb(0.43, 0.3, 0.12, 0.05), M.hair, h, 0, 0.23, -0.14);
  mesh(box(0.42, 0.06, 0.06), M.hair, h, 0, 0.36, 0.17);
  for (let i = -2; i <= 2; i++) { const f = mesh(new THREE.ConeGeometry(0.05, 0.13, 4).rotateX(Math.PI), M.hair, h, i * 0.08, 0.31, 0.18); f.rotation.z = -i * 0.18; }
  for (const s of [1, -1]) {
    mesh(rb(0.06, 0.24, 0.24, 0.03), M.hair, h, s * 0.21, 0.25, 0.02);
    const lk = mesh(new THREE.ConeGeometry(0.04, 0.12, 4).rotateX(Math.PI), M.hair, h, s * 0.205, 0.09, 0.1); lk.rotation.z = s * 0.2;
    const tf = mesh(new THREE.ConeGeometry(0.045, 0.11, 4), M.hair, h, s * 0.23, 0.2, -0.07); tf.rotation.z = -s * (Math.PI / 2 + 0.6);
    const bk = mesh(new THREE.ConeGeometry(0.05, 0.12, 4).rotateX(Math.PI), M.hair, h, s * 0.12, 0.07, -0.15); bk.rotation.z = s * 0.3;
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

// ---------------------------------------------------------------- physics: two stacked spheres, never rotates
export const body = new CANNON.Body({ mass: 45, fixedRotation: true, linearDamping: 0 });
body.addShape(new CANNON.Sphere(0.3), new CANNON.Vec3(0, 0.3, 0));
body.addShape(new CANNON.Sphere(0.28), new CANNON.Vec3(0, 0.95, 0));
body.collisionFilterGroup = 2;   // our own ground rays skip the player
body.allowSleep = false; body.isPlayer = true;
world.addBody(body);
// Velocity is driven directly, so contact friction must be zero (with it, cannon stops the kid dead every step).
// Friction only follows a ContactMaterial when both bodies have a material, so give every material-less body the
// world default one (same behaviour as before for them) and add a frictionless pair for the player.
body.material = new CANNON.Material('player');
export function initPlayerPhysics() {
  const def = world.defaultMaterial;
  for (const b of world.bodies) if (!b.material) b.material = def;
  world.addContactMaterial(new CANNON.ContactMaterial(body.material, def, { friction: 0, restitution: 0 }));
}

const RAY_OPTS = { collisionFilterMask: 1, skipBackfaces: true };
const rayRes = new CANNON.RaycastResult(), rayFrom = new CANNON.Vec3(), rayTo = new CANNON.Vec3();
function probeGround(x, z, fromY) {
  rayFrom.set(x, fromY, z); rayTo.set(x, fromY - 8, z); rayRes.reset();
  return world.raycastClosest(rayFrom, rayTo, RAY_OPTS, rayRes) ? rayRes.hitPointWorld.y : groundY(x, z);
}

// ---------------------------------------------------------------- state
// mode: foot (walking) | toCar (auto-walk to the door) | enter | car (driving) | exit
export const player = { mode: 'foot', wantExit: false };
const st = {
  t: 0, yaw: PLAYER_SPAWN.yaw, phase: 0, hs: 0, grounded: true, lastGround: 0, jumpBuf: -1, prevJump: 0, airVy: 0,
  stretch: 0, squash: 0, airW: 0, cheer: 0, idleT: 0, blink: 3, blinkT: 0, inWater: false,
  path: [], seqT: 0, from: new THREE.Vector3(), to: new THREE.Vector3(), door: 0, doorGoal: 0,
};
export const isDriving = () => player.mode === 'car';
const onFoot = () => player.mode === 'foot' || player.mode === 'toCar';

export function placePlayer(x, z, yaw) {
  body.position.set(x, probeGround(x, z, 6) + 0.02, z); body.velocity.setZero();
  body.previousPosition.copy(body.position); body.interpolatedPosition.copy(body.position);
  st.yaw = yaw; avatar.position.copy(body.position); avatar.rotation.y = yaw;
}
export function respawnPlayer() { if (onFoot()) { player.mode = 'foot'; placePlayer(PLAYER_SPAWN.x, PLAYER_SPAWN.z, PLAYER_SPAWN.yaw); sfx.pop(); } }
export const cheer = () => { if (onFoot()) st.cheer = 1.8; };
placePlayer(PLAYER_SPAWN.x, PLAYER_SPAWN.z, PLAYER_SPAWN.yaw);

// ---------------------------------------------------------------- helpers (car frame: forward = -x, driver door on -z)
const DOOR_OUT = [0.3, -1.95], SEAT = new THREE.Vector3(0.3, 0.25, -0.55);
const invQ = new THREE.Quaternion(), tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3(), fwd = new THREE.Vector3(), col = new THREE.Color();
const carWorld = (x, y, z, out) => out.set(x, y, z).applyQuaternion(car.quaternion).add(car.position);
const carLocal = (v, out) => out.copy(v).sub(car.position).applyQuaternion(invQ.copy(car.quaternion).invert());
const carYaw = (x, z) => { tmp2.set(x, 0, z).applyQuaternion(car.quaternion); return Math.atan2(tmp2.x, tmp2.z); };
const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));
const lerpAngle = (a, b, k) => a + wrap(b - a) * k;

function puff(p, n, spread, up = 0.6) {
  const m = maskAt(p.x, p.z);
  if (p.y < WATER_Y) col.copy(WU.uFoam.value).multiplyScalar(0.8).addScalar(0.2);
  else col.copy(m.asphalt > 0.5 ? U.uAsphalt.value : m.paved > 0.5 ? U.uPaved.value : U.uGround.value).multiplyScalar(1.2);
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    smoke.spawn(tmp.set(p.x + Math.cos(a) * 0.2, Math.max(p.y, WATER_Y) + 0.08, p.z + Math.sin(a) * 0.2),
      tmp2.set(Math.cos(a) * spread, frand(0.2, up), Math.sin(a) * spread), frand(0.08, 0.15), frand(0.35, 0.6), col, 0.2);
  }
}
function land(k) { st.squash = 0.4 + k * 0.6; sfx.step(1); puff(body.position, 4 + Math.round(k * 6), 1.2 + k); }

// ---------------------------------------------------------------- car interaction
export const carZones = { enter: { label: 'Masuk mobil', quiet: true, action: () => toggleCar() }, flip: { label: 'Balikkan mobil', action: () => unflip() } };
const nearCar = () => Math.hypot(body.position.x - car.position.x, body.position.z - car.position.z) < 4.3 && Math.abs(body.position.y - car.position.y) < 2.5;
export const carPrompt = () => (player.mode === 'foot' && nearCar() ? (isUpsideDown() ? carZones.flip : carZones.enter) : null);

export function toggleCar() {
  if (player.mode === 'foot' && nearCar()) {
    if (isUpsideDown()) { unflip(); return; }
    // walk around the bumper first when standing on the passenger side
    const l = carLocal(body.position, tmp);
    st.path = [];
    if (l.z > -1.45) { const cx = l.x > DOOR_OUT[0] ? 2.95 : -2.95; st.path.push([cx, l.z], [cx, DOOR_OUT[1]]); }
    st.path.push(DOOR_OUT);
    st.seqT = 0; st.cheer = 0; player.mode = 'toCar';
  } else if (player.mode === 'toCar') player.mode = 'foot';
  else if (player.mode === 'car') {
    if (drive.speed < 2.5) startExit(); else player.wantExit = !player.wantExit;   // brake first, then hop out
  }
}
function startEnter() {
  player.mode = 'enter'; st.seqT = 0;
  st.from.copy(avatar.position);
  world.removeBody(body); body.velocity.setZero();
}
function startExit() {
  player.mode = 'exit'; player.wantExit = false; st.seqT = 0; st.doorGoal = 1; sfx.door(true);
  carWorld(DOOR_OUT[0], 0, DOOR_OUT[1], st.to);
  st.to.y = probeGround(st.to.x, st.to.z, car.position.y + 1.5) + 0.02;
  if (isUpsideDown()) st.to.y = Math.max(st.to.y, car.position.y + 1);
}
// camera / zone "actor": the car while driving (and at the ends of the sequences), the kid otherwise
const actor = { pos: new THREE.Vector3(), vel: new THREE.Vector3(), lead: 0.22, scale: 1 };
export function camActor() {
  const inCar = player.mode === 'car' || (player.mode === 'enter' && st.seqT > 0.7) || (player.mode === 'exit' && st.seqT < 0.35);
  if (inCar) {
    actor.pos.copy(car.position); actor.pos.y = Math.max(car.position.y - 0.6, 0);
    actor.vel.copy(chassisBody.velocity); actor.lead = 0.22; actor.scale = 1;
  } else {
    actor.pos.copy(avatar.position); actor.pos.y += 0.55;
    if (onFoot()) actor.vel.copy(body.velocity); else actor.vel.set(0, 0, 0);
    actor.lead = 0.14; actor.scale = 0.48;
  }
  return actor;
}
export const zoneOrigin = () => (player.mode === 'car' ? car.position : avatar.position);

// ---------------------------------------------------------------- per-frame update (before the physics step)
const NO_KEYS = { fwd: 0, back: 0, left: 0, right: 0, brake: 0, boost: 0 };
const BRAKE_KEYS = { ...NO_KEYS, brake: 1 };
export const carKeys = (keys) => (player.wantExit ? BRAKE_KEYS : keys);
const walls = [];

function footUpdate(dt, k) {
  const p = body.position, v = body.velocity;
  // ground: a short ray under the feet, or any contact pushing us up; walls: side contacts with static bodies
  rayFrom.set(p.x, p.y + 0.45, p.z); rayTo.set(p.x, p.y - 0.3, p.z); rayRes.reset();
  const rayHit = world.raycastClosest(rayFrom, rayTo, RAY_OPTS, rayRes) && rayRes.distance < 0.55;
  let contactGround = false; walls.length = 0;
  for (const c of world.contacts) {
    const s = c.bi === body ? -1 : c.bj === body ? 1 : 0;
    if (!s) continue;
    const ny = c.ni.y * s, other = s < 0 ? c.bj : c.bi;
    if (ny > 0.5) contactGround = true;
    else if (Math.abs(ny) < 0.5 && (other.mass === 0 || !st.grounded) && walls.length < 8) walls.push(c.ni.x * s, c.ni.z * s);
  }
  const was = st.grounded;
  st.grounded = (rayHit || contactGround) && v.y < 2.5;
  if (st.grounded) { st.lastGround = st.t; if (!was && st.airVy < -2.5) land(Math.min(1, -st.airVy / 10)); }
  else st.airVy = v.y;

  // input -> desired velocity (camera-relative), or auto-walk along the path to the door
  let mx, mz, run = !!k.boost;
  if (player.mode === 'toCar') {
    st.seqT += dt;
    if (k.fwd || k.back || k.left || k.right || k.brake) player.mode = 'foot';
    const wp = st.path[0];
    carWorld(wp[0], 0, wp[1], tmp);
    const dx = tmp.x - p.x, dz = tmp.z - p.z, d = Math.hypot(dx, dz), last = st.path.length === 1;
    if (d < (last ? 0.22 : 0.5) || st.seqT > 5) {
      st.path.shift();
      if (!st.path.length || st.seqT > 5) { if (player.mode === 'toCar') { startEnter(); return; } }
    }
    const slow = last ? clamp(d / 0.8, 0.25, 1) : 1;
    mx = dx / (d || 1) * slow; mz = dz / (d || 1) * slow; run = d > 3;
  }
  if (player.mode === 'foot') {
    const ix = k.right - k.left, iz = k.fwd - k.back;
    camera.getWorldDirection(fwd); fwd.y = 0; fwd.normalize();
    mx = fwd.x * iz - fwd.z * ix; mz = fwd.z * iz + fwd.x * ix;
    const mag = Math.hypot(mx, mz); if (mag > 1) { mx /= mag; mz /= mag; }
  }
  st.inWater = p.y < WATER_Y - 0.2;
  const speed = (run ? RUN : WALK) * (st.inWater ? 0.55 : 1);
  const a = 1 - Math.exp(-dt * (st.grounded ? 14 : 3.5));
  let vx = v.x + (mx * speed - v.x) * a, vz = v.z + (mz * speed - v.z) * a;
  for (let i = 0; i < walls.length; i += 2) {   // slide along walls instead of sticking to them
    const d = vx * walls[i] + vz * walls[i + 1];
    if (d < 0) { vx -= d * walls[i]; vz -= d * walls[i + 1]; }
  }
  v.x = vx; v.z = vz;
  if (Math.hypot(mx, mz) > 0.05) st.yaw = lerpAngle(st.yaw, Math.atan2(mx, mz), 1 - Math.exp(-dt * 12));

  // jump (with a little buffering + coyote time)
  if (k.brake && !st.prevJump) st.jumpBuf = st.t;
  st.prevJump = k.brake;
  if (player.mode === 'foot' && st.jumpBuf >= 0 && st.t - st.jumpBuf < 0.15 && st.t - st.lastGround < 0.12) {
    v.y = JUMP; st.jumpBuf = -1; st.lastGround = -1; st.grounded = false; st.stretch = 1; st.cheer = 0;
    sfx.jump(); puff(p, 4, 0.8);
  }
  if (p.y < -6) respawnPlayer();
}

function enterUpdate(dt) {
  const T = (st.seqT += dt);
  if (T > 0.08 && T < 0.9 && st.doorGoal === 0) { st.doorGoal = 1; sfx.door(true); }
  const faceCar = carYaw(0, 1), faceFwd = carYaw(-1, 0);
  const e = smooth(0.42, 0.95, T);
  st.yaw = lerpAngle(lerpAngle(st.yaw, faceCar, 1 - Math.exp(-dt * 12)), faceFwd, e);
  carWorld(SEAT.x, SEAT.y, SEAT.z, st.to);
  avatar.position.lerpVectors(st.from, st.to, e); avatar.position.y += Math.sin(Math.PI * e) * 0.55;
  if (T > 0.92) avatar.visible = false;
  if (T > 0.95) st.doorGoal = 0;
  if (T > 1.35) player.mode = 'car';
}
function exitUpdate(dt) {
  const T = (st.seqT += dt);
  avatar.visible = T > 0.22;
  carWorld(SEAT.x, SEAT.y, SEAT.z, st.from);
  const e = smooth(0.28, 0.78, T);
  st.yaw = lerpAngle(carYaw(-1, 0), carYaw(0, -1), smooth(0.2, 0.6, T));
  avatar.position.lerpVectors(st.from, st.to, e); avatar.position.y += Math.sin(Math.PI * e) * 0.5;
  if (T > 0.78) {
    body.position.set(st.to.x, st.to.y, st.to.z); body.velocity.setZero();
    body.previousPosition.copy(body.position); body.interpolatedPosition.copy(body.position);
    world.addBody(body);
    player.mode = 'foot'; st.grounded = true; st.doorGoal = 0; land(0.4);
  }
}

export function updatePlayer(dt, keys, active) {
  st.t += dt;
  const k = active ? keys : NO_KEYS;
  if (onFoot()) footUpdate(dt, k);
  else if (player.mode === 'enter') enterUpdate(dt);
  else if (player.mode === 'exit') exitUpdate(dt);
  else if (player.wantExit && drive.speed < 2.5) startExit();
  // door: eased, thunk when it shuts
  const was = st.door;
  st.door += clamp(st.doorGoal - st.door, -dt / 0.3, dt / 0.3);
  if (was > 0 && st.door === 0) sfx.door(false);
  setDoor(st.door * st.door * (3 - 2 * st.door));
}

// ---------------------------------------------------------------- render sync + procedural animation (after the step)
const P = {}, G = {};
const KEYS = ['hipsY', 'hipsYaw', 'spineX', 'spineY', 'spineZ', 'headX', 'headY', 'lHipX', 'lKnee', 'rHipX', 'rKnee',
  'lShX', 'lShZ', 'lElX', 'lElZ', 'rShX', 'rShZ', 'rElX', 'rElZ', 'mouth'];
for (const k of KEYS) P[k] = G[k] = 0;
P.hipsY = HIP_Y; P.mouth = 1;
const mix = (k, v, w) => { G[k] += (v - G[k]) * w; };

export function syncPlayer(dt) {
  if (onFoot()) { avatar.position.copy(body.interpolatedPosition); avatar.visible = true; }
  avatar.rotation.y = st.yaw;
  if (avatar.visible) U.uPlayerPos.value.copy(avatar.position); else U.uPlayerPos.value.set(9999, -99, 9999);
  if (!avatar.visible) return;

  const foot = onFoot(), t = st.t, v = body.velocity;
  st.hs += ((foot ? Math.hypot(v.x, v.z) : 0) - st.hs) * (1 - Math.exp(-dt * 10));
  const grounded = !foot || st.grounded;
  st.airW += ((grounded ? 0 : 1) - st.airW) * (1 - Math.exp(-dt * (grounded ? 16 : 8)));
  const walkW = smooth(0.15, 1.6, st.hs) * (1 - st.airW), runW = smooth(3.6, 6.2, st.hs);
  const prev = st.phase;
  st.phase += dt * st.hs * lerp(2.9, 2.3, runW);
  if (foot && grounded && st.hs > 0.8 && Math.floor(st.phase / Math.PI) !== Math.floor(prev / Math.PI)) {
    sfx.step(runW * 0.6);
    if (runW > 0.5 || st.inWater) puff(avatar.position, st.inWater ? 3 : 1, 0.5, st.inWater ? 2.5 : 0.6);
  }
  // idle -> an occasional fist pump like the concept art
  st.idleT = foot && grounded && walkW < 0.1 ? st.idleT + dt : 0;
  if (st.idleT > 9) { st.cheer = 1.8; st.idleT = 0; }
  if (walkW > 0.3 || !grounded) st.cheer = 0;
  st.cheer = Math.max(0, st.cheer - dt);
  st.squash = Math.max(0, st.squash - dt * 4); st.stretch = Math.max(0, st.stretch - dt * 4);

  // --- locomotion (idle <-> walk <-> run)
  const s = Math.sin(st.phase), c = Math.cos(st.phase), breathe = Math.sin(t * 2.2);
  const legA = lerp(0.55, 0.85, runW) * walkW, kneeA = lerp(0.7, 1.35, runW) * walkW, armA = lerp(0.45, 1.0, runW) * walkW;
  G.hipsY = HIP_Y + walkW * (lerp(0.025, 0.06, runW) * (Math.abs(c) - 0.6) - runW * 0.04);
  G.hipsYaw = -s * 0.1 * walkW;
  G.spineX = 0.03 + breathe * 0.012 + walkW * lerp(0.06, 0.26, runW);
  G.spineY = s * 0.14 * walkW; G.spineZ = 0;
  G.headX = -G.spineX * 0.5 + Math.sin(t * 1.3) * 0.02;
  G.headY = -G.spineY * 0.8 + (1 - walkW) * Math.sin(t * 0.45) * 0.35 * smooth(2.5, 4.5, st.idleT);
  G.lHipX = -s * legA; G.rHipX = s * legA;
  G.lKnee = 0.04 + kneeA * Math.max(0, c); G.rKnee = 0.04 + kneeA * Math.max(0, -c);
  G.lShX = 0.04 + s * armA; G.rShX = 0.04 - s * armA;
  G.lShZ = 0.12 + breathe * 0.02 + runW * 0.1 * walkW; G.rShZ = -G.lShZ;
  G.lElX = G.rElX = -0.18 - lerp(0.1, 1.2, runW) * walkW; G.lElZ = G.rElZ = 0;
  G.mouth = 1 + runW * 0.25 * walkW;

  // --- airborne: tuck while rising, flail while falling
  if (st.airW > 0.01) {
    const w = st.airW, up = smooth(-2, 2, v.y), flap = Math.sin(t * 18) * 0.18 * (1 - up);
    mix('lHipX', lerp(-0.25, -0.95, up), w); mix('lKnee', lerp(0.35, 1.3, up), w);
    mix('rHipX', lerp(-0.1, 0.35, up), w); mix('rKnee', lerp(0.25, 0.6, up), w);
    mix('lShX', lerp(-0.5, -0.3, up), w); mix('lShZ', lerp(1.9, 0.6, up) + flap, w);
    mix('rShX', lerp(-0.5, 0.5, up), w); mix('rShZ', -lerp(1.9, 0.6, up) + flap, w);
    mix('lElX', -0.5, w); mix('rElX', -0.5, w); mix('spineX', 0.12, w); mix('mouth', 1.6, w);
  }
  // --- landing squash
  if (st.squash > 0) {
    const q = Math.min(st.squash, 1);
    G.hipsY -= 0.14 * q; G.lKnee += 0.75 * q; G.rKnee += 0.75 * q; G.lHipX -= 0.45 * q; G.rHipX -= 0.45 * q;
    G.spineX += 0.25 * q; G.lShZ += 0.3 * q; G.rShZ -= 0.3 * q;
  }
  // --- cheer: right fist pumping, left hand on the hip
  const cw = smooth(0, 0.25, st.cheer) * smooth(1.8, 1.55, st.cheer);
  if (cw > 0) {
    const pump = Math.sin(st.cheer * 14) * 0.22;
    mix('rShX', -0.35, cw); mix('rShZ', -1.35, cw); mix('rElX', 0, cw); mix('rElZ', -1.7 + pump, cw);
    mix('lShX', 0.25, cw); mix('lShZ', 0.8, cw); mix('lElX', 0, cw); mix('lElZ', -1.6, cw);
    G.hipsY += Math.abs(Math.sin(st.cheer * 7)) * 0.035 * cw; G.headX -= 0.12 * cw; G.spineZ = 0.06 * cw; G.mouth += 0.6 * cw;
  }
  // --- car door: reach for the handle, then climb (enter) / hop down (exit)
  if (player.mode === 'enter' || player.mode === 'exit') {
    const T = st.seqT, enter = player.mode === 'enter';
    const reach = enter ? smooth(0.05, 0.25, T) * smooth(0.55, 0.4, T) : 0;
    const climb = enter ? smooth(0.38, 0.6, T) : smooth(0.8, 0.6, T);
    mix('lShX', -1.35, reach); mix('lShZ', 0.15, reach); mix('lElX', -0.2, reach);
    mix('hipsY', HIP_Y - 0.2, climb); mix('lHipX', -1.3, climb); mix('lKnee', 1.6, climb); mix('rHipX', -0.6, climb); mix('rKnee', 1.1, climb);
    mix('spineX', 0.35, climb); mix('lShX', -1.1, climb); mix('rShX', -1.1, climb); mix('mouth', 1.5, climb);
  }

  const kd = 1 - Math.exp(-dt * 22);
  for (const k of KEYS) P[k] += (G[k] - P[k]) * kd;

  J.hips.position.y = P.hipsY; J.hips.rotation.y = P.hipsYaw;
  J.spine.rotation.set(P.spineX, P.spineY, P.spineZ);
  J.head.rotation.set(P.headX, P.headY, 0);
  J.L.hip.rotation.x = P.lHipX; J.L.knee.rotation.x = P.lKnee; J.L.foot.rotation.x = -(P.lHipX + P.lKnee) * 0.85;
  J.R.hip.rotation.x = P.rHipX; J.R.knee.rotation.x = P.rKnee; J.R.foot.rotation.x = -(P.rHipX + P.rKnee) * 0.85;
  J.LA.sh.rotation.set(P.lShX, 0, P.lShZ); J.LA.el.rotation.set(P.lElX, 0, P.lElZ);
  J.RA.sh.rotation.set(P.rShX, 0, P.rShZ); J.RA.el.rotation.set(P.rElX, 0, P.rElZ);
  J.mouth.scale.set(1, P.mouth, 1);
  J.bucket.rotation.x = Math.sin(st.phase * 2) * 0.3 * walkW - st.airW * 0.35 * Math.sign(v.y);
  J.basket.rotation.z = Math.sin(st.phase) * 0.12 * walkW;
  // blink
  st.blink -= dt;
  if (st.blink < 0) { st.blink = frand(2, 5); st.blinkT = 0.12; }
  st.blinkT = Math.max(0, st.blinkT - dt);
  J.eyes.scale.y = st.blinkT > 0 ? 0.15 : 1;
  // squash & stretch
  const S = st.stretch * 0.12 * (1 - st.stretch * 0.3) - Math.min(st.squash, 1) * 0.1;
  squash.scale.set(1 - S * 0.5, 1 + S, 1 - S * 0.5);
}
