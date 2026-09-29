// The monster truck: raycast-vehicle physics, visual model, lights and wheel/exhaust effects.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { SPAWN, WATER_Y } from '../../game/config.js';
import { clamp, lerp, frand } from '../../engine/util.js';
import { scene, world, U, lam, glowMat, mesh } from '../../engine/core.js';
import { maskAt } from '../../world/worldmap.js';
import { WU } from '../../world/terrain.js';
import { smoke, flames } from '../../world/effects.js';
import { sfx } from '../../engine/audio.js';
import { mergeByMaterial, meshChildren } from '../../engine/batch.js';
import { registerSave } from '../../systems/save.js';

// ---------------------------------------------------------------- physics (forward = local -x)
export const chassisBody = new CANNON.Body({ mass: 150 });
chassisBody.addShape(new CANNON.Box(new CANNON.Vec3(1.9, 0.45, 1.0)), new CANNON.Vec3(0, 0.3, 0));   // offset = lower centre of mass
chassisBody.allowSleep = false;   // a sleeping chassis ignores engine force
chassisBody.angularDamping = 0.5;
export const vehicle = new CANNON.RaycastVehicle({ chassisBody });
const WHEEL_R = 0.6;
const wheelOpts = {
  radius: WHEEL_R, directionLocal: new CANNON.Vec3(0, -1, 0), suspensionStiffness: 28, suspensionRestLength: 0.45,
  frictionSlip: 2.2, dampingRelaxation: 2.5, dampingCompression: 4.5, maxSuspensionForce: 100000, rollInfluence: 0.05,
  axleLocal: new CANNON.Vec3(0, 0, 1), chassisConnectionPointLocal: new CANNON.Vec3(), maxSuspensionTravel: 0.4,
  customSlidingRotationalSpeed: -30, useCustomSlidingRotationalSpeed: true,
};
// wheels 0/1 = front (steering), 2/3 = rear (drive)
for (const [x, z] of [[-1.35, 1.1], [-1.35, -1.1], [1.35, 1.1], [1.35, -1.1]]) { wheelOpts.chassisConnectionPointLocal.set(x, 0, z); vehicle.addWheel(wheelOpts); }
vehicle.addToWorld(world);

// ---------------------------------------------------------------- visual model
export const car = new THREE.Group(); scene.add(car);
const lights = {};
const doorPivot = new THREE.Group(); doorPivot.position.set(-0.52, 0, -1.1); car.add(doorPivot);
export const setDoor = (k) => { doorPivot.rotation.y = k * 1.15; };
{
  const paint = lam('#c8243f'), paintD = lam('#9c1a33'), dark = lam('#2a2238'), trim = lam('#3d3250'), glass = lam('#1b1734');
  const rb = (w, h, d, r = 0.12) => new RoundedBoxGeometry(w, h, d, 2, r);
  mesh(new THREE.BoxGeometry(3.6, 0.3, 1.4), dark, car, 0, -0.12, 0);                 // frame
  mesh(rb(4.1, 0.78, 2.15), paint, car, 0, 0.36, 0);                                   // body
  mesh(rb(1.6, 0.14, 1.5, 0.06), paintD, car, -1.2, 0.78, 0);                          // hood bulge
  for (const z of [-0.35, 0, 0.35]) mesh(new THREE.BoxGeometry(0.7, 0.05, 0.12), dark, car, -1.2, 0.86, z);
  mesh(rb(2.15, 0.78, 1.96, 0.1), paint, car, 0.48, 1.12, 0);                          // cabin
  mesh(new THREE.BoxGeometry(0.08, 0.52, 1.72), glass, car, -0.6, 1.14, 0);
  mesh(new THREE.BoxGeometry(1.75, 0.46, 2.0), glass, car, 0.52, 1.16, 0);
  mesh(new THREE.BoxGeometry(0.08, 0.46, 1.6), glass, car, 1.57, 1.16, 0);
  mesh(new THREE.BoxGeometry(2.0, 0.08, 1.85), trim, car, 0.45, 1.55, 0);              // roof rack
  for (const x of [-0.3, 0.3, 0.9, 1.3]) mesh(new THREE.BoxGeometry(0.08, 0.1, 1.9), dark, car, x, 1.63, 0);
  const led = glowMat('#ffb428', 2.2, 4.5);
  for (let i = 0; i < 5; i++) mesh(new THREE.BoxGeometry(0.12, 0.12, 0.16), led, car, -0.52, 1.62, -0.66 + i * 0.33, false);
  mesh(rb(0.38, 0.42, 2.35, 0.08), dark, car, -2.14, 0.05, 0);                         // front bumper + LED strip
  mesh(new THREE.BoxGeometry(0.06, 0.11, 1.7), led, car, -2.34, 0.1, 0, false);
  mesh(new THREE.BoxGeometry(0.05, 0.3, 0.9), dark, car, -2.06, 0.46, 0);
  lights.head = glowMat('#fff4d0', 1.2, 5);
  for (const s of [1, -1]) mesh(new THREE.BoxGeometry(0.06, 0.2, 0.34), lights.head, car, -2.07, 0.5, s * 0.75, false);
  mesh(rb(0.36, 0.42, 2.3, 0.08), dark, car, 2.13, 0.05, 0);                           // rear bumper
  lights.brake = new THREE.MeshBasicMaterial({ color: new THREE.Color(2, 0.1, 0.2) });
  for (const s of [1, -1]) mesh(new THREE.BoxGeometry(0.06, 0.22, 0.3), lights.brake, car, 2.07, 0.52, s * 0.8, false);
  mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.3, 14).rotateZ(Math.PI / 2), dark, car, 2.22, 0.95, 0);   // spare tyre
  mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.32, 8).rotateZ(Math.PI / 2), trim, car, 2.24, 0.95, 0);
  const pink = glowMat('#ff4fc0', 1.5, 3.2);
  for (let i = 0; i < 5; i++) for (const s of [1, -1]) mesh(new THREE.BoxGeometry(0.2, 0.05, 0.02), pink, car, -1.0 + i * 0.4, 0.56, s * 1.085, false);
  // driver door (right side, local -z), hinged at its front edge; opened by the player via setDoor()
  mesh(rb(1.08, 0.74, 0.07, 0.03), paint, doorPivot, 0.54, 0.37, 0);
  mesh(new THREE.BoxGeometry(1.0, 0.44, 0.05), glass, doorPivot, 0.56, 1.13, 0);
  mesh(new THREE.BoxGeometry(1.08, 0.08, 0.07), paint, doorPivot, 0.54, 1.39, 0);
  mesh(new THREE.BoxGeometry(0.07, 0.5, 0.07), paint, doorPivot, 0.035, 1.12, 0);
  mesh(new THREE.BoxGeometry(0.2, 0.06, 0.05), dark, doorPivot, 0.85, 0.62, -0.05);
  for (const x of [0.32, 0.72]) mesh(new THREE.BoxGeometry(0.2, 0.05, 0.02), pink, doorPivot, x, 0.56, -0.045, false);
  const tri = new THREE.ConeGeometry(0.12, 0.2, 3).rotateZ(Math.PI / 2).rotateX(Math.PI / 2);
  for (const z of [-0.4, 0.4]) { const t = mesh(tri, pink, car, -1.2, 0.87, z, false); t.rotation.y = Math.PI / 2; }
  for (const s of [1, -1]) {
    mesh(new THREE.BoxGeometry(3.0, 0.14, 0.18), dark, car, 0, -0.14, s * 1.1);           // side steps
    for (const x of [-1.35, 1.35]) mesh(rb(1.5, 0.28, 0.42, 0.08), dark, car, x, 0.5, s * 1.02);   // fender flares
  }
  mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.5, 8).rotateZ(Math.PI / 2), trim, car, 2.2, -0.15, -0.72);   // exhaust pipe
  lights.spot = new THREE.SpotLight(0xfff0c8, 0, 30, 0.6, 0.6, 1.3);
  lights.spot.position.set(-2.1, 0.4, 0); lights.spot.target.position.set(-10, -1.4, 0);
  car.add(lights.spot, lights.spot.target);
}
const wheelMeshes = [];
{
  // tyre = cylinder (axis Y) + 16 tread lugs, then turned so the axle is local Z
  const lugs = Array.from({ length: 16 }, (_, i) => {
    const a = i / 16 * Math.PI * 2;
    return new THREE.BoxGeometry(0.14, i % 2 ? 0.5 : 0.36, 0.2).rotateY(-a).translate(Math.cos(a) * (WHEEL_R - 0.06), i % 2 ? 0 : 0.07, Math.sin(a) * (WHEEL_R - 0.06));
  });
  const tireGeo = mergeGeometries([new THREE.CylinderGeometry(WHEEL_R - 0.07, WHEEL_R - 0.07, 0.5, 18), ...lugs]).rotateX(Math.PI / 2);
  const rimGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.52, 8).rotateX(Math.PI / 2);
  const hubGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.56, 6).rotateX(Math.PI / 2);
  const tireM = lam('#262036'), rimM = lam('#8a86cc'), hubM = lam('#c8243f');
  for (let i = 0; i < 4; i++) {
    const w = new THREE.Group();
    mesh(tireGeo, tireM, w); mesh(rimGeo, rimM, w); mesh(hubGeo, hubM, w);
    car.add(w); wheelMeshes.push(w);
  }
}
// body parts sharing a material become one mesh (wheels and door keep their own transforms)
mergeByMaterial(car, meshChildren(car)); mergeByMaterial(doorPivot, meshChildren(doorPivot));
const EXHAUST_LOCAL = new THREE.Vector3(2.48, -0.15, -0.72);

chassisBody.addEventListener('collide', (e) => {
  const v = Math.abs(e.contact.getImpactVelocityAlongNormal());
  if (v > 1.5 && e.body.mass > 0 && !e.body.isPlayer) sfx.hit(Math.min(1, v / 12));
});

// ---------------------------------------------------------------- placement
export function placeCar(p, yaw) {
  chassisBody.position.set(p.x, p.y, p.z); chassisBody.quaternion.setFromEuler(0, yaw, 0);
  chassisBody.velocity.setZero(); chassisBody.angularVelocity.setZero();
  chassisBody.previousPosition.copy(chassisBody.position); chassisBody.interpolatedPosition.copy(chassisBody.position);
  chassisBody.previousQuaternion.copy(chassisBody.quaternion); chassisBody.interpolatedQuaternion.copy(chassisBody.quaternion);
}
export const respawn = () => { placeCar(SPAWN, SPAWN.yaw); sfx.pop(); };
export const isUpsideDown = () => chassisBody.quaternion.vmult(new CANNON.Vec3(0, 1, 0)).y < 0.5;
export function unflip() {
  const fwd = chassisBody.quaternion.vmult(new CANNON.Vec3(-1, 0, 0));
  const p = chassisBody.position.clone(); p.y = Math.max(p.y, 0) + 1.6;
  placeCar(p, Math.atan2(fwd.z, -fwd.x));
}
placeCar(SPAWN, SPAWN.yaw);

const r3 = (v) => Math.round(v * 1000) / 1000;
registerSave('car', {
  save: () => { const p = chassisBody.position, q = chassisBody.quaternion; return { p: [p.x, p.y, p.z].map(r3), q: [q.x, q.y, q.z, q.w].map(r3) }; },
  load({ p, q }) {
    placeCar({ x: p[0], y: p[1] + 0.05, z: p[2] }, 0);
    chassisBody.quaternion.set(q[0], q[1], q[2], q[3]).normalize();
    chassisBody.previousQuaternion.copy(chassisBody.quaternion); chassisBody.interpolatedQuaternion.copy(chassisBody.quaternion);
  },
  reset: () => placeCar(SPAWN, SPAWN.yaw),
});

// ---------------------------------------------------------------- driving
export const drive = { throttle: 0, braking: false, boosting: false, speed: 0, fwdSpeed: 0, inWater: false, engineOn: true };
let steer = 0, upsideTimer = 0;
const NO_KEYS = { fwd: 0, back: 0, left: 0, right: 0, brake: 0, boost: 0 };

export function updateDriving(dt, keys, active, engineOn = true) {
  const k = active ? keys : NO_KEYS;
  const vLocal = chassisBody.vectorToLocalFrame(chassisBody.velocity);
  const fwdSpeed = -vLocal.x, speed = chassisBody.velocity.length();
  const boosting = !!(k.boost && k.fwd);
  const maxSpeed = boosting ? 30 : 19;
  let force = 0;
  if (k.fwd && fwdSpeed < maxSpeed) force = -(boosting ? 1250 : 780) * (fwdSpeed < 4 ? 1.25 : 1);
  if (k.back) force = fwdSpeed > 1 ? 0 : (fwdSpeed > -9 ? 520 : 0);
  const braking = !!(k.brake || (k.back && fwdSpeed > 1));
  vehicle.applyEngineForce(force, 2); vehicle.applyEngineForce(force, 3);
  const brake = braking ? 13 : (force === 0 ? (active ? 1.1 : 3) : 0);
  for (let i = 0; i < 4; i++) vehicle.setBrake(brake, i);
  const target = (k.left - k.right) * lerp(0.62, 0.24, clamp(speed / 26, 0, 1));   // less steering at speed
  steer += (target - steer) * (1 - Math.exp(-dt * (target === 0 ? 9 : 6)));
  vehicle.setSteeringValue(steer, 0); vehicle.setSteeringValue(steer, 1);
  const inWater = chassisBody.position.y < WATER_Y + 0.85;
  chassisBody.linearDamping = inWater ? 0.45 : 0.02;
  Object.assign(drive, { throttle: (k.fwd || k.back) ? 1 : 0, braking, boosting, speed, fwdSpeed, inWater, engineOn });
  sfx.engine(speed, drive.throttle, engineOn);
  const up = chassisBody.quaternion.vmult(new CANNON.Vec3(0, 1, 0)).y;
  upsideTimer = up < 0.3 && speed < 2 ? upsideTimer + dt : 0;
  if (upsideTimer > 2) { unflip(); upsideTimer = 0; }
  if (chassisBody.position.y < -6) respawn();
}

// ---------------------------------------------------------------- render sync (interpolated physics)
const wheelContact = [false, false, false, false];
const invQ = new CANNON.Quaternion(), wLocalP = new CANNON.Vec3(), wLocalQ = new CANNON.Quaternion(), tmpV = new THREE.Vector3();
export function syncCar() {
  car.position.copy(chassisBody.interpolatedPosition); car.quaternion.copy(chassisBody.interpolatedQuaternion);
  chassisBody.quaternion.conjugate(invQ);
  for (let i = 0; i < 4; i++) {
    wheelContact[i] = vehicle.wheelInfos[i].isInContact;   // updateWheelTransform() resets isInContact
    vehicle.updateWheelTransform(i);
    const tr = vehicle.wheelInfos[i].worldTransform;
    tr.position.vsub(chassisBody.position, wLocalP);        // vsub returns nothing when given a target
    invQ.vmult(wLocalP, wLocalP);
    invQ.mult(tr.quaternion, wLocalQ);
    wheelMeshes[i].position.copy(wLocalP); wheelMeshes[i].quaternion.copy(wLocalQ);
  }
  U.uCarPos.value.copy(car.position);
  tmpV.set(-1, 0, 0).applyQuaternion(car.quaternion); U.uCarDir.value.set(tmpV.x, tmpV.z).normalize();
}

// ---------------------------------------------------------------- exhaust, flames, dust, splash, lights
let smokeAcc = 0, flameAcc = 0, dustAcc = 0;
const vA = new THREE.Vector3(), vB = new THREE.Vector3(), col = new THREE.Color();
export function updateCarEffects(dt, pal) {
  const exhaust = vA.copy(EXHAUST_LOCAL).applyQuaternion(car.quaternion).add(car.position);
  const back = vB.set(1, 0, 0).applyQuaternion(car.quaternion);
  smokeAcc += dt * (drive.throttle ? 26 : drive.engineOn ? 5 : 0);
  while (smokeAcc > 1) {
    smokeAcc--;
    const g = drive.throttle ? 0.62 : 0.75;
    smoke.spawn(exhaust, back.clone().multiplyScalar(frand(1.2, 2.5)).add(new THREE.Vector3(frand(-0.3, 0.3), frand(0.2, 0.6), frand(-0.3, 0.3))),
      frand(0.12, 0.2) * (drive.throttle ? 1.5 : 1), frand(0.7, 1.2), col.setRGB(g, g, g * 1.08), 0.9);
  }
  if (drive.boosting) {
    flameAcc += dt * 40;
    while (flameAcc > 1) { flameAcc--; flames.spawn(exhaust, back.clone().multiplyScalar(frand(3, 5)), frand(0.12, 0.22), frand(0.18, 0.3), col.setRGB(3.2, frand(0.5, 1.2), 2.4), 0); }
  }
  dustAcc += dt * 30;
  if (dustAcc > 1) {
    dustAcc = 0;
    for (let i = 0; i < 4; i++) {
      if (!wheelContact[i]) continue;
      const w = vehicle.wheelInfos[i], hp = w.raycastResult.hitPointWorld, pos = new THREE.Vector3(hp.x, hp.y, hp.z);
      const slip = w.skidInfo < 0.7 || (i >= 2 && drive.throttle && drive.speed < 6 && Math.abs(drive.fwdSpeed) < 3);
      if (hp.y < WATER_Y - 0.05 && drive.speed > 1.5) {
        smoke.spawn(pos.setY(WATER_Y + 0.1), new THREE.Vector3(frand(-1.5, 1.5), frand(2.5, 4.5), frand(-1.5, 1.5)), frand(0.15, 0.28), frand(0.4, 0.7), col.copy(WU.uFoam.value).multiplyScalar(0.8).addScalar(0.2), -3);
      } else if ((slip || drive.speed > 9) && i >= 2) {
        const mk = maskAt(pos.x, pos.z);
        if (mk.paved > 0.6 && !slip) continue;
        col.copy(mk.asphalt > 0.5 ? U.uAsphalt.value : U.uGround.value).multiplyScalar(1.15);
        smoke.spawn(pos.setY(pos.y + 0.15), new THREE.Vector3(frand(-0.6, 0.6), frand(0.5, 1.4), frand(-0.6, 0.6)), frand(0.18, 0.32), frand(0.5, 0.9), col, 0.3);
      }
    }
  }
  smoke.update(dt); flames.update(dt);
  const braking = drive.braking || (drive.fwdSpeed < -0.5 && drive.throttle);
  lights.brake.color.setRGB(braking ? 5 : 1.4 + 1.2 * pal.lamp, 0.08, 0.15);
  lights.spot.intensity = 70 * pal.lamp;
}
