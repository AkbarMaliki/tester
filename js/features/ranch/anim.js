// The kid's poses for ranch work, on the arm / leg IK of entities/player/ik.js (applied after the walk cycle):
//   pet    crouch to the animal's height, right hand strokes its head       brush  hand sweeps along its back
//   milk   deep squat, both hands under the belly, pulling in turns          shear  both hands snipping at the wool
//   feed   hand held out low to the mouth                                    ride   sitting astride the horse, reins
// Targets are world points (the animal moves a little), converted to avatar space every frame.
import * as THREE from 'three';
import { smooth, clamp } from '../../engine/util.js';
import { J } from '../../entities/player/model.js';
import { avatar } from '../../entities/player/controller.js';
import { reachArm, squat } from '../../entities/player/ik.js';

const POLE_R = new THREE.Vector3(-0.8, -0.5, -0.3).normalize(), POLE_L = new THREE.Vector3(0.8, -0.5, -0.3).normalize();
const ACTS = { pet: 1.3, brush: 1.4, milk: 1.7, shear: 1.6, feed: 0.9 };
let act = null;   // { kind, t, dur, hitAt, hit, onHit, target (world Vector3, may be updated) }
export const busy = () => !!act;
export function play(kind, target, onHit, hitAt = 0.6) { act = { kind, t: 0, dur: ACTS[kind], hitAt, hit: false, onHit, target: target.clone() }; }
export function retarget(p) { if (act) act.target.copy(p); }

const qa = new THREE.Quaternion(), qs = new THREE.Quaternion(), w1 = new THREE.Vector3(), w2 = new THREE.Vector3(), pl = new THREE.Vector3(), loc = new THREE.Vector3();
function reach(side, avatarPoint, weight) {
  if (weight <= 0.001) return;
  J.spine.worldToLocal(avatar.localToWorld(w1.copy(avatarPoint)));
  pl.copy(side === 'R' ? POLE_R : POLE_L).applyQuaternion(avatar.getWorldQuaternion(qa)).applyQuaternion(J.spine.getWorldQuaternion(qs).invert());
  reachArm(side, w1, pl, weight);
}

// every frame after the controller posed the kid
export function update(dt, riding) {
  if (riding) { ridingPose(); return; }
  if (!act) return;
  act.t += dt;
  const k = Math.min(1, act.t / act.dur);
  if (!act.hit && k >= act.hitAt) { act.hit = true; act.onHit?.(); }
  if (k >= 1) { act = null; return; }
  const w = smooth(0, 0.18, k) * smooth(1, 0.8, k), a = act;
  avatar.updateMatrixWorld(true);
  loc.copy(a.target); avatar.worldToLocal(loc);                       // target in avatar space (y = height above the feet)
  const low = clamp(1.0 - loc.y, 0, 0.62);                            // crouch deeper for low targets
  const drop = { pet: low * 0.55, brush: low * 0.45, milk: 0.36, shear: low * 0.4 + 0.05, feed: low * 0.5 }[a.kind];
  squat(drop, w);
  J.spine.rotation.x += ({ milk: 0.55, feed: 0.35 }[a.kind] ?? 0.3) * w;
  avatar.updateMatrixWorld(true);
  const t = a.t;
  if (a.kind === 'pet') { reach('R', w2.copy(loc).add(pl.set(-0.05, 0.08 + Math.sin(t * 9) * 0.03, Math.sin(t * 9) * 0.07 - 0.1)), w); }
  else if (a.kind === 'brush') { reach('R', w2.copy(loc).add(pl.set(-0.05, 0.12, Math.sin(t * 7) * 0.22 - 0.1)), w); reach('L', w2.copy(loc).add(pl.set(0.18, 0.1, -0.1)), w * 0.6); }
  else if (a.kind === 'milk') { const p = Math.sin(t * 10); reach('R', w2.copy(loc).add(pl.set(-0.08, 0.06 + p * 0.05, -0.05)), w); reach('L', w2.copy(loc).add(pl.set(0.08, 0.06 - p * 0.05, -0.05)), w); }
  else if (a.kind === 'shear') { const p = Math.sin(t * 16) * 0.04; reach('R', w2.copy(loc).add(pl.set(-0.12, 0.1 + p, -0.1)), w); reach('L', w2.copy(loc).add(pl.set(0.1, 0.12 - p, -0.12)), w); }
  else if (a.kind === 'feed') { reach('R', w2.copy(loc).add(pl.set(0, 0.02, -0.12)), w); }
}

// sitting on the horse: thighs forward and apart around its back, shins hanging, both hands on the reins
function ridingPose() {
  for (const [L, s] of [[J.L, 1], [J.R, -1]]) {
    L.hip.rotation.set(-1.25, 0, s * 0.42);
    L.knee.rotation.set(1.35, 0, 0);
    L.foot.rotation.set(-0.2, 0, 0);
  }
  J.hips.position.y -= 0.02;
  J.spine.rotation.x += 0.12;
  avatar.updateMatrixWorld(true);
  reach('R', w2.set(-0.1, 0.92, 0.34), 1);
  reach('L', w2.set(0.1, 0.92, 0.34), 1);
}
