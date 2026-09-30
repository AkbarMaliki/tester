// How the kid holds and uses the farming tools, built on arm / leg IK (entities/player/ik.js) on top of the normal
// walk cycle. Poses are keyframes in avatar space (origin between the feet, +z forward, +x = the kid's left, y up):
//   carry   hoe / axe on the right shoulder, hammer / sickle / can hanging in the right hand
//   strike  hoe, axe, hammer: both hands on the handle, swing up over the right shoulder, crouch and strike down
//   chop    axe on a standing tree: both hands, wind up to the right, one flat swing into the trunk at waist height
//   reap    sickle: crouch, wind up to the right, one low slash across the front
//   pour    watering can held out in front, tipped forward so the spout points down
//   sow     seeds / fertiliser: hand to the pouch, then a toss forward
//   pull    by hand (weeds, harvest, dead crops, picking up): squat, grab with both hands, stand up pulling
//   pick    fruit from a tree: reach up with both hands
// Tool pose = { p: right-hand point, d: shaft direction (grip -> working end), z: the tool's +z (its working face is -z),
// s: where along the shaft the right hand grips }. The left hand grabs the shaft 0.09 closer to the handle end.
import * as THREE from 'three';
import { smooth, lerp } from '../../engine/util.js';
import { J } from '../../entities/player/model.js';
import { avatar } from '../../entities/player/controller.js';
import { reachArm, handPos, squat } from '../../entities/player/ik.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const N = (x, y, z) => V(x, y, z).normalize();
const LEFT_GAP = 0.09;
const POLE_R = N(-0.8, -0.5, -0.3), POLE_L = N(0.8, -0.5, -0.3);

// carry poses (right hand only) + where the hand grips each tool
// hand in front of the right shoulder; the handle lies on top of the shoulder (y ≈ 1.22 there) and runs back past the
// side of the big head, rising a little so it clears the back
const SHOULDER = (s) => ({ p: V(-0.3, 1.19, 0.2), d: N(-0.32, 0.2, -1), z: N(0, 1, 0), s });
const HANG = (d, z, s = 0.03) => ({ p: V(-0.3, 0.74, 0.06), d: N(...d), z: N(...z), s });
const TOOLS = {
  cangkul:  { carry: SHOULDER(0.08), grip: 0.13, action: 'strike' },
  kapak:    { carry: SHOULDER(0.08), grip: 0.13, action: 'strike' },
  palu:     { carry: HANG([0, -1, 0.12], [0, 0, 1]), grip: 0.12, action: 'strike' },
  sabit:    { carry: HANG([0, -0.5, 1], [0, 1, 0]), grip: 0.03, action: 'reap' },
  penyiram: { carry: HANG([0, -1, 0], [0, 0, 1], 0), grip: 0, action: 'pour' },
};
export const toolAction = (id) => TOOLS[id]?.action;
const TOOL_ACTIONS = new Set(['strike', 'chop', 'reap', 'pour']);   // actions done with the tool in the hands

// ---------------------------------------------------------------- keyframes
// tool actions: { t, p, d, z, s ('carry' = the carry pose), wl (left hand on the handle), drop, bend, twist }
// hand actions: { t, r, l (hand targets, null = free), drop, bend, twist }
const C = 'carry';
const ACTIONS = {
  strike: { dur: 0.8, hit: 0.5, keys: [
    { t: 0, pose: C, wl: 0, drop: 0, bend: 0, twist: 0 },
    { t: 0.36, pose: { p: V(-0.07, 1.25, 0.2), d: N(-0.6, 0.5, -0.62), z: N(0, 1, 0) }, wl: 1, drop: 0.03, bend: -0.1, twist: -0.3 },
    { t: 0.5, pose: { p: V(-0.02, 0.62, 0.4), d: N(0, -0.78, 0.63), z: N(0, 1, 0) }, wl: 1, drop: 0.22, bend: 0.6, twist: 0 },
    { t: 0.66, pose: { p: V(-0.02, 0.64, 0.36), d: N(0, -0.72, 0.69), z: N(0, 1, 0) }, wl: 1, drop: 0.2, bend: 0.55, twist: 0 },
    { t: 1, pose: C, wl: 0, drop: 0, bend: 0, twist: 0 },
  ] },
  chop: { dur: 0.75, hit: 0.5, keys: [
    { t: 0, pose: C, wl: 0, drop: 0, bend: 0, twist: 0 },
    { t: 0.36, pose: { p: V(-0.3, 0.9, 0.02), d: N(-0.55, 0.25, -0.8), z: N(0.1, 0.2, -1) }, wl: 1, drop: 0.06, bend: 0.05, twist: -0.55 },
    { t: 0.5, pose: { p: V(-0.06, 0.86, 0.3), d: N(0.3, 0.05, 1), z: N(-1, 0.1, 0.3) }, wl: 1, drop: 0.1, bend: 0.15, twist: 0.12 },
    { t: 0.64, pose: { p: V(-0.05, 0.86, 0.28), d: N(0.25, 0.05, 1), z: N(-1, 0.1, 0.25) }, wl: 1, drop: 0.1, bend: 0.15, twist: 0.1 },
    { t: 1, pose: C, wl: 0, drop: 0, bend: 0, twist: 0 },
  ] },
  reap: { dur: 0.7, hit: 0.55, keys: [
    { t: 0, pose: C, wl: 0, drop: 0, bend: 0, twist: 0 },
    { t: 0.38, pose: { p: V(-0.45, 0.56, 0.2), d: N(-0.6, -0.15, 0.8), z: N(-0.8, 0, -0.6) }, wl: 0, drop: 0.2, bend: 0.5, twist: -0.35 },
    { t: 0.5, pose: { p: V(-0.22, 0.52, 0.45), d: N(-0.1, -0.2, 1), z: N(-1, 0, -0.1) }, wl: 0, drop: 0.22, bend: 0.55, twist: 0 },
    { t: 0.62, pose: { p: V(0, 0.56, 0.42), d: N(0.6, -0.2, 0.8), z: N(-0.8, 0, 0.6) }, wl: 0, drop: 0.2, bend: 0.5, twist: 0.4 },
    { t: 1, pose: C, wl: 0, drop: 0, bend: 0, twist: 0 },
  ] },
  pour: { dur: 0.95, hit: 0.35, keys: [
    { t: 0, pose: C, wl: 0, drop: 0, bend: 0, twist: 0 },
    { t: 0.22, pose: { p: V(-0.12, 0.86, 0.34), d: N(0, -0.54, -0.84), z: N(0, -0.84, 0.54) }, wl: 0, drop: 0.05, bend: 0.22, twist: 0 },
    { t: 0.78, pose: { p: V(-0.1, 0.85, 0.36), d: N(0, -0.5, -0.86), z: N(0, -0.86, 0.5) }, wl: 0, drop: 0.05, bend: 0.22, twist: 0 },
    { t: 1, pose: C, wl: 0, drop: 0, bend: 0, twist: 0 },
  ] },
  sow: { dur: 0.6, hit: 0.55, keys: [
    { t: 0, wr: 0, drop: 0, bend: 0, twist: 0 },
    { t: 0.28, r: V(-0.28, 0.76, 0.02), wr: 1, drop: 0.03, bend: 0.1, twist: -0.15 },
    { t: 0.55, r: V(-0.08, 0.84, 0.38), wr: 1, drop: 0.08, bend: 0.3, twist: 0.1 },
    { t: 1, wr: 0, drop: 0, bend: 0, twist: 0 },
  ] },
  pull: { dur: 0.95, hit: 0.55, keys: [
    { t: 0, wr: 0, wl: 0, drop: 0, bend: 0, twist: 0 },
    { t: 0.35, r: V(-0.1, 0.34, 0.42), l: V(0.1, 0.34, 0.42), wr: 1, wl: 1, drop: 0.3, bend: 0.9, twist: 0 },
    { t: 0.55, r: V(-0.08, 0.36, 0.4), l: V(0.08, 0.36, 0.4), wr: 1, wl: 1, drop: 0.3, bend: 0.88, twist: 0 },
    { t: 0.78, r: V(-0.1, 0.86, 0.26), l: V(0.1, 0.86, 0.26), wr: 1, wl: 1, drop: 0.06, bend: 0.12, twist: 0 },
    { t: 1, wr: 0, wl: 0, drop: 0, bend: 0, twist: 0 },
  ] },
  pick: { dur: 0.75, hit: 0.5, keys: [
    { t: 0, wr: 0, wl: 0, drop: 0, bend: 0, twist: 0 },
    { t: 0.4, r: V(-0.14, 1.38, 0.26), l: V(0.14, 1.38, 0.26), wr: 1, wl: 1, drop: 0, bend: -0.15, twist: 0 },
    { t: 0.55, r: V(-0.12, 1.36, 0.24), l: V(0.12, 1.36, 0.24), wr: 1, wl: 1, drop: 0, bend: -0.12, twist: 0 },
    { t: 1, wr: 0, wl: 0, drop: 0, bend: 0, twist: 0 },
  ] },
};

// ---------------------------------------------------------------- state
let tool = null, toolId = null;          // mesh in the hand (child of the avatar), its item id
let act = null;                          // { kind, t, dur, hit, done, onHit, each }
let holdW = 0;                           // eases the carry pose in / out
export const debug = { kind: null, k: 0 }; // freeze an action at k (tuning poses from the console)

export function setTool(id, obj) {
  if (obj === tool) return;
  if (tool) tool.removeFromParent();
  tool = obj; toolId = obj ? id : null;
  if (tool) avatar.add(tool);
}
export const playing = () => !!act;
export function play(kind, { onHit, each } = {}) { act = { kind, t: 0, dur: ACTIONS[kind].dur, hit: ACTIONS[kind].hit, done: false, onHit, each }; }
// a point on the tool (its local space) in world space, e.g. the watering can's spout
export const toolPoint = (x, y, z, out) => (tool ? tool.localToWorld(out.set(x, y, z)) : null);

// ---------------------------------------------------------------- evaluation
const cur = { p: V(0, 0, 0), d: V(0, 0, 0), z: V(0, 0, 0), s: 0, r: V(0, 0, 0), l: V(0, 0, 0), wl: 0, wr: 0, drop: 0, bend: 0, twist: 0 };
const A = V(0, 0, 0), B = V(0, 0, 0);
const poseOf = (k) => (k.pose === C ? TOOLS[toolId].carry : { ...k.pose, s: TOOLS[toolId].grip });
function sample(keys, k, withTool) {
  let i = 0; while (i < keys.length - 2 && k > keys[i + 1].t) i++;
  const a = keys[i], b = keys[i + 1], f = smooth(0, 1, (k - a.t) / Math.max(1e-4, b.t - a.t));
  for (const key of ['drop', 'bend', 'twist', 'wl', 'wr']) cur[key] = lerp(a[key] ?? 0, b[key] ?? 0, f);
  if (withTool) {
    const pa = poseOf(a), pb = poseOf(b);
    cur.p.lerpVectors(pa.p, pb.p, f); cur.d.lerpVectors(pa.d, pb.d, f).normalize(); cur.z.lerpVectors(pa.z, pb.z, f).normalize(); cur.s = lerp(pa.s, pb.s, f);
  }
  // free hands: a key without a target lets that hand follow the walk cycle (weight 0 there)
  cur.r.lerpVectors(a.r || b.r || A.set(0, 0, 0), b.r || a.r || B.set(0, 0, 0), f);
  cur.l.lerpVectors(a.l || b.l || A.set(0, 0, 0), b.l || a.l || B.set(0, 0, 0), f);
}

// avatar space -> spine space (IK works in the spine's space)
const w1 = V(0, 0, 0), pole = V(0, 0, 0), hand = V(0, 0, 0), grip = V(0, 0, 0), zz = V(0, 0, 0), xx = V(0, 0, 0), yy = V(0, 0, 0), m = new THREE.Matrix4();
const toSpine = (v, out) => J.spine.worldToLocal(avatar.localToWorld(out.copy(v)));
const qa = new THREE.Quaternion(), qs = new THREE.Quaternion();
const dirToSpine = (dir, out) => out.copy(dir).applyQuaternion(avatar.getWorldQuaternion(qa)).applyQuaternion(J.spine.getWorldQuaternion(qs).invert());
function reach(side, targetAvatar, poleAvatar, weight) {
  if (weight <= 0.001) return;
  reachArm(side, toSpine(targetAvatar, w1), dirToSpine(poleAvatar, pole), weight);
}

// every frame after the controller posed the kid. holding: the selected item is a tool and the kid can hold it
export function update(dt, holding) {
  let k = 0, kind = null;
  if (debug.kind) { kind = debug.kind; k = debug.k; }
  else if (act) {
    act.t += dt; k = Math.min(1, act.t / act.dur); kind = act.kind;
    if (act.each) act.each(k);
    if (!act.done && k >= act.hit) { act.done = true; act.onHit?.(); }
    if (k >= 1) { act = null; kind = null; }
  }
  const def = kind && ACTIONS[kind];
  const toolAct = def && TOOL_ACTIONS.has(kind) && !!TOOLS[toolId];
  holdW += ((holding || toolAct ? 1 : 0) - holdW) * (1 - Math.exp(-dt * 10));
  if (tool) tool.visible = (holding || toolAct) && !(def && !toolAct);
  if (!def && holdW < 0.01) return;

  // body (squat, lean, turn) first: the arms are solved against the moved shoulders
  if (def) sample(def.keys, k, toolAct);
  else { const c = TOOLS[toolId]?.carry; if (!c) return; Object.assign(cur, { drop: 0, bend: 0, twist: 0, wl: 0, wr: 0 }); cur.p.copy(c.p); cur.d.copy(c.d); cur.z.copy(c.z); cur.s = c.s; }
  squat(cur.drop, 1);
  J.spine.rotation.x += cur.bend; J.spine.rotation.y += cur.twist;
  avatar.updateMatrixWorld(true);

  if (def && !toolAct) {   // hand-only actions
    reach('R', cur.r, POLE_R, cur.wr); reach('L', cur.l, POLE_L, cur.wl);
    return;
  }
  if (!tool || !TOOLS[toolId]) return;
  // right hand to its grip, then hang the tool from where the hand really is, then the left hand onto the handle
  reach('R', cur.p, POLE_R, holdW);
  avatar.worldToLocal(J.spine.localToWorld(handPos('R', hand)));
  yy.copy(cur.d).negate(); zz.copy(cur.z).addScaledVector(yy, -cur.z.dot(yy)).normalize(); xx.crossVectors(yy, zz);
  tool.quaternion.setFromRotationMatrix(m.makeBasis(xx, yy, zz));
  tool.position.copy(hand).addScaledVector(cur.d, -cur.s);
  if (cur.wl > 0.001) { grip.copy(hand).addScaledVector(cur.d, -LEFT_GAP); reach('L', grip, POLE_L, cur.wl); }
}
