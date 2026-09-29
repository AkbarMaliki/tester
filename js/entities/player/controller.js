// The farmer kid's behaviour: capsule physics, procedural animation (idle, walk, run, jump, cheer) and the
// walk-to-door / climb-in / climb-out sequence that hands control over to the car. The mesh/rig is in model.js.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { PLAYER_SPAWN, WATER_Y } from '../../game/config.js';
import { clamp, lerp, smooth, frand } from '../../engine/util.js';
import { camera, world, U } from '../../engine/core.js';
import { groundY, maskAt } from '../../world/worldmap.js';
import { WU } from '../../world/terrain.js';
import { car, chassisBody, drive, setDoor, isUpsideDown, unflip } from '../car/car.js';
import { smoke } from '../../world/effects.js';
import { stampFootprint } from '../../world/footprints.js';
import { sfx } from '../../engine/audio.js';
import { avatar, squash, J, HIP_Y } from './model.js';
import { faceState, updateFace } from './face.js';
import { registerSave } from '../../systems/save.js';
import { canRun, runStamina, tryJump, speedMul, hasEffect } from '../../systems/stats.js';

export { avatar };
const WALK = 3.4, RUN = 7, JUMP = 6.2;

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
  stretch: 0, squash: 0, airW: 0, cheer: 0, tiredW: 0, breathT: 0, carry: false, carryW: 0, idleT: 0, blink: 3, blinkT: 0, inWater: false,
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

// ---------------------------------------------------------------- carrying (Harvest Moon style: one item held over the head)
// Features parent the held item's mesh to `carry` (origin = on top of the raised hands, item base at y = 0)
// and call setCarrying(true/false); the kid squats to lift, then walks with both arms up.
export const carry = new THREE.Group();
avatar.updateMatrixWorld(true);
carry.position.set(0, new THREE.Box3().setFromObject(J.head).max.y - avatar.position.y - HIP_Y - 0.1 + 0.02, 0.04);
J.spine.add(carry);
export function setCarrying(on) {
  if (on === st.carry) return;
  st.carry = on; st.cheer = 0; st.idleT = 0;
  if (onFoot()) st.squash = Math.max(st.squash, 0.55);   // bend the knees to lift / set down
}
export const isCarrying = () => st.carry;

// ---------------------------------------------------------------- save / load (on foot or sitting in the car)
// Mid-sequence states are saved as their end state: walking to the door = on foot, climbing in/out = in the car.
function restore(inCar, x, z, yaw) {
  const inWorld = world.bodies.includes(body);
  player.wantExit = false; st.path = []; st.seqT = 0; st.door = st.doorGoal = 0; setDoor(0);
  st.cheer = 0; st.squash = st.stretch = 0; body.velocity.setZero();
  if (inCar) { if (inWorld) world.removeBody(body); player.mode = 'car'; avatar.visible = false; return; }
  if (!inWorld) world.addBody(body);
  player.mode = 'foot'; avatar.visible = true; st.grounded = true;
  placePlayer(x, z, yaw);
}
registerSave('player', {
  save: () => ({
    inCar: player.mode === 'car' || player.mode === 'enter' || player.mode === 'exit',
    x: +body.position.x.toFixed(3), z: +body.position.z.toFixed(3), yaw: +st.yaw.toFixed(3),
  }),
  load: (d) => restore(d.inCar, d.x, d.z, d.yaw),
  reset: () => restore(false, PLAYER_SPAWN.x, PLAYER_SPAWN.z, PLAYER_SPAWN.yaw),
  summary: (d) => (d.inCar ? 'di mobil' : ''),
});
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
  // stamina (systems/stats.js): sprinting drains it, needs/effects can forbid running or slow the kid down
  const moving = Math.hypot(mx, mz) > 0.3;
  if (player.mode === 'foot') {
    run = run && moving && canRun();
    if (run && st.grounded) runStamina(dt);
  }
  const speed = (run ? RUN : WALK) * (st.inWater ? 0.55 : 1) * (player.mode === 'foot' ? speedMul() : 1);
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
  if (player.mode === 'foot' && st.jumpBuf >= 0 && st.t - st.jumpBuf < 0.15 && st.t - st.lastGround < 0.12 && tryJump()) {
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
const face = faceState();
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
    if (!st.inWater) stampFootprint(avatar.position.x, avatar.position.y, avatar.position.z, st.yaw, Math.floor(st.phase / Math.PI) % 2 ? 1 : -1);
    if (runW > 0.5 || st.inWater) puff(avatar.position, st.inWater ? 3 : 1, 0.5, st.inWater ? 2.5 : 0.6);
  }
  // idle -> an occasional fist pump like the concept art
  st.idleT = foot && grounded && walkW < 0.1 ? st.idleT + dt : 0;
  if (st.idleT > 9 && !st.carry) { st.cheer = 1.8; st.idleT = 0; }
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
  // --- frosty breath when it's freezing (a little white puff in front of the face)
  if ((st.breathT -= dt) < 0) {
    st.breathT = frand(1.4, 2.2);
    if (hasEffect('kedinginan') || hasEffect('membeku')) {
      const fx = Math.sin(st.yaw), fz = Math.cos(st.yaw);
      col.setRGB(1, 1, 1);
      smoke.spawn(tmp.set(avatar.position.x + fx * 0.28, avatar.position.y + 1.2, avatar.position.z + fz * 0.28), tmp2.set(fx * 0.5, 0.15, fz * 0.5), 0.07, 0.9, col, 0.25);
    }
  }
  // --- out of breath (stamina ran out): bent over, panting
  st.tiredW += ((foot && hasEffect('ngos') ? 1 : 0) - st.tiredW) * (1 - Math.exp(-dt * 5));
  if (st.tiredW > 0.01) {
    const w = st.tiredW * (1 - st.airW), pant = Math.sin(t * 10) * 0.5 + 0.5;
    G.spineX += (0.3 + pant * 0.05) * w; G.headX -= 0.2 * w; G.mouth += (0.4 + pant * 0.7) * w;
    G.lShZ += 0.15 * w; G.rShZ -= 0.15 * w; G.hipsY -= 0.03 * w;
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
  // --- carrying: both hands up holding the item over the head, arms barely swing
  st.carryW += ((st.carry && avatar.visible ? 1 : 0) - st.carryW) * (1 - Math.exp(-dt * 12));
  const hw = st.carryW;
  if (hw > 0.01) {
    const sway = s * 0.05 * walkW;
    mix('lShX', -0.2 + sway, hw); mix('lShZ', 2.75, hw); mix('lElX', 0, hw); mix('lElZ', 0.4, hw);
    mix('rShX', -0.2 - sway, hw); mix('rShZ', -2.75, hw); mix('rElX', 0, hw); mix('rElZ', -0.4, hw);
    mix('spineX', G.spineX * 0.4 - 0.04, hw); mix('headX', -0.08, hw); mix('headY', 0, hw * 0.6);
  }
  carry.rotation.z = -G.spineZ; carry.rotation.x = -G.spineX * 0.8;   // keep the item roughly level

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
  updateFace(J, face, dt, t, cw > 0.3 ? 'senang' : undefined);   // expression from hunger, poison… (a cheer is always happy)
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
