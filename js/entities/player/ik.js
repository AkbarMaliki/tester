// Inverse kinematics for the kid's rig (model.js), applied on top of the procedural animation (controller.js
// syncPlayer) by whoever needs exact poses: holding a tool with both hands, reaching to the ground, squatting.
//   reachArm('R' | 'L', target, pole, weight)  puts that hand on `target` (a point in J.spine space); the elbow bends
//                                              towards `pole` (a direction in spine space). weight 0..1 blends.
//   handPos('R' | 'L', out)                    where that hand is now, in spine space
//   squat(drop, weight)                        lowers the hips by `drop` metres with the feet kept planted
// Call after syncPlayer (features update after it in main.js).
import * as THREE from 'three';
import { clamp } from '../../engine/util.js';
import { J } from './model.js';

const HAND = new THREE.Vector3(0, -0.17, 0.005);          // palm centre in elbow space (the glove)
const X = new THREE.Vector3(1, 0, 0);
const qEl = new THREE.Quaternion(), qSh = new THREE.Quaternion();
const m1 = new THREE.Matrix4(), m2 = new THREE.Matrix4();
const u = new THREE.Vector3(), p = new THREE.Vector3(), w = new THREE.Vector3(), u2 = new THREE.Vector3(), p2 = new THREE.Vector3(), w2 = new THREE.Vector3();
const h = new THREE.Vector3(), to = new THREE.Vector3();

export function reachArm(side, target, pole, weight = 1) {
  if (weight <= 0.001) return;
  const A = side === 'R' ? J.RA : J.LA, U = A.el.position;
  const L1 = U.length(), L2 = HAND.length();
  to.subVectors(target, A.sh.position);
  const d = clamp(to.length(), Math.abs(L1 - L2) + 0.02, L1 + L2 - 0.002);
  // elbow: bend the forearm forward (about its x axis) until shoulder-hand distance = d
  const bend = Math.PI - Math.acos(clamp((L1 * L1 + L2 * L2 - d * d) / (2 * L1 * L2), -1, 1));
  qEl.setFromAxisAngle(X, -bend);
  // shoulder: rotate so shoulder->hand points at the target and the elbow sits on the pole side
  h.copy(HAND).applyQuaternion(qEl).add(U);
  u.copy(h).normalize(); p.copy(U).addScaledVector(u, -U.dot(u)).normalize(); w.crossVectors(u, p);
  u2.copy(to).normalize(); p2.copy(pole).addScaledVector(u2, -pole.dot(u2));
  if (p2.lengthSq() < 1e-6) p2.set(0, 0, -1).addScaledVector(u2, u2.z);
  p2.normalize(); w2.crossVectors(u2, p2);
  m1.makeBasis(u, p, w); m2.makeBasis(u2, p2, w2).multiply(m1.transpose());
  qSh.setFromRotationMatrix(m2);
  A.sh.quaternion.slerp(qSh, weight); A.el.quaternion.slerp(qEl, weight);
}

export function handPos(side, out) {
  const A = side === 'R' ? J.RA : J.LA;
  A.sh.updateMatrix(); A.el.updateMatrix();
  return out.copy(HAND).applyMatrix4(A.el.matrix).applyMatrix4(A.sh.matrix);
}

// legs: thigh 0.24, shin 0.38 (model.js). Keeps each foot under its hip and flat on the ground.
const THIGH = 0.24, SHIN = 0.38, LEG = THIGH + SHIN;
export function squat(drop, weight = 1) {
  if (drop <= 0.001 || weight <= 0.001) return;
  const hgt = LEG - drop;
  const hipA = Math.acos(clamp((THIGH * THIGH + hgt * hgt - SHIN * SHIN) / (2 * THIGH * hgt), -1, 1));
  const knee = Math.PI - Math.acos(clamp((THIGH * THIGH + SHIN * SHIN - hgt * hgt) / (2 * THIGH * SHIN), -1, 1));
  J.hips.position.y -= drop * weight;
  for (const L of [J.L, J.R]) {
    L.hip.rotation.x += (-hipA - L.hip.rotation.x) * weight;
    L.knee.rotation.x += (knee - L.knee.rotation.x) * weight;
    L.foot.rotation.x += (hipA - knee - L.foot.rotation.x) * weight;
  }
}
