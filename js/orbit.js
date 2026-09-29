// Orbit camera around the car: drag to rotate, wheel / pinch to zoom,
// plus HUD buttons (tap = step, hold = continuous) and keys Z/X, -/=, C.
import { clamp } from './util.js';
import { CAM_OFFSET } from './config.js';
import { renderer, scene, sun } from './core.js';

const [ox, oy, oz] = CAM_OFFSET;
const BASE_DIST = Math.hypot(ox, oy, oz);
const HOME = { yaw: Math.atan2(ox, oz), pitch: Math.asin(oy / BASE_DIST), zoom: 1 };
const PITCH_MIN = 0.12, PITCH_MAX = 1.45, ZOOM_MIN = 0.45, ZOOM_MAX = 2;
const ROT_SPEED = 2.2, ZOOM_SPEED = 1.2;           // per second while a key/button is held
const STEP_YAW = Math.PI / 4, STEP_ZOOM = 1.25;    // per tap
const FOG = { near: scene.fog.near, far: scene.fog.far };
const SHADOW = sun.shadow.camera.right;

const view = { ...HOME, scale: 0.48 };   // smoothed, what the camera uses (scale = per-actor distance: kid vs car)
let scaleGoal = view.scale;
export const setActorScale = (s) => { scaleGoal = s; };
const goal = { ...HOME };   // where the input wants to go

function setGoal(yaw, pitch, zoom) {
  goal.yaw = yaw;
  goal.pitch = clamp(pitch, PITCH_MIN, PITCH_MAX);
  goal.zoom = clamp(zoom, ZOOM_MIN, ZOOM_MAX);
}
const rotate = (a) => setGoal(goal.yaw + a, goal.pitch, goal.zoom);
const zoomBy = (f) => setGoal(goal.yaw, goal.pitch, goal.zoom * f);
export function resetView() { setGoal(Math.round((goal.yaw - HOME.yaw) / (Math.PI * 2)) * Math.PI * 2 + HOME.yaw, HOME.pitch, HOME.zoom); }

// camera offset from the target for the current (smoothed) view
export function orbitOffset(out) {
  return out.setFromSphericalCoords(BASE_DIST * view.zoom * view.scale, Math.PI / 2 - view.pitch, view.yaw);
}

// ---------------------------------------------------------------- held actions (keys + buttons)
const held = new Set();
const ACTIONS = {
  left: { rate: (dt) => rotate(-ROT_SPEED * dt), step: () => rotate(-STEP_YAW) },
  right: { rate: (dt) => rotate(ROT_SPEED * dt), step: () => rotate(STEP_YAW) },
  in: { rate: (dt) => zoomBy(Math.exp(-ZOOM_SPEED * dt)), step: () => zoomBy(1 / STEP_ZOOM) },
  out: { rate: (dt) => zoomBy(Math.exp(ZOOM_SPEED * dt)), step: () => zoomBy(STEP_ZOOM) },
};

export function updateOrbit(dt) {
  for (const a of held) ACTIONS[a].rate(dt);
  const k = 1 - Math.exp(-dt * 12);
  view.yaw += (goal.yaw - view.yaw) * k;
  view.pitch += (goal.pitch - view.pitch) * k;
  view.zoom += (goal.zoom - view.zoom) * k;
  view.scale += (scaleGoal - view.scale) * (1 - Math.exp(-dt * 2.5));
  // keep the fog band around the car when zoomed out, widen shadows so they don't end on screen
  const z = view.zoom * view.scale, extra = BASE_DIST * (z - 1);
  scene.fog.near = FOG.near + Math.max(extra, 0); scene.fog.far = FOG.far + Math.max(extra, 0);
  const s = SHADOW * Math.max(z, 1), c = sun.shadow.camera;
  if (Math.abs(c.right - s) > 0.5) { Object.assign(c, { left: -s, right: s, top: s, bottom: -s }); c.updateProjectionMatrix(); }
}

// ---------------------------------------------------------------- mouse / touch on the canvas
const el = renderer.domElement;
const pointers = new Map();
let pinch = 0;
const pinchDist = () => { const [a, b] = [...pointers.values()]; return Math.hypot(a.x - b.x, a.y - b.y); };

el.addEventListener('pointerdown', (e) => {
  if (e.pointerType === 'mouse' && e.button !== 0 && e.button !== 2) return;
  el.setPointerCapture(e.pointerId);
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pointers.size === 2) pinch = pinchDist();
  el.classList.add('dragging');
});
el.addEventListener('pointermove', (e) => {
  const p = pointers.get(e.pointerId);
  if (!p) return;
  if (pointers.size === 1) {
    setGoal(goal.yaw - (e.clientX - p.x) * 0.006, goal.pitch + (e.clientY - p.y) * 0.004, goal.zoom);
  }
  p.x = e.clientX; p.y = e.clientY;
  if (pointers.size === 2) { const d = pinchDist(); if (pinch > 0 && d > 0) zoomBy(pinch / d); pinch = d; }
});
const release = (e) => {
  pointers.delete(e.pointerId);
  if (pointers.size < 2) pinch = 0;
  if (!pointers.size) el.classList.remove('dragging');
};
el.addEventListener('pointerup', release);
el.addEventListener('pointercancel', release);
el.addEventListener('contextmenu', (e) => e.preventDefault());
el.addEventListener('dblclick', resetView);
el.addEventListener('wheel', (e) => { e.preventDefault(); zoomBy(Math.exp(clamp(e.deltaY, -200, 200) * 0.0012)); }, { passive: false });

// ---------------------------------------------------------------- HUD buttons
document.querySelectorAll('#camPad button').forEach((b) => {
  const a = b.dataset.cam;
  if (a === 'reset') { b.onclick = resetView; return; }
  let t0 = 0, timer = 0;
  const stop = (tapped) => {
    if (!t0) return;
    clearTimeout(timer); held.delete(a); b.classList.remove('on');
    if (tapped && performance.now() - t0 < 250) ACTIONS[a].step();
    t0 = 0;
  };
  b.addEventListener('pointerdown', (e) => {
    e.preventDefault(); b.setPointerCapture(e.pointerId);
    t0 = performance.now(); b.classList.add('on');
    timer = setTimeout(() => held.add(a), 250);   // hold -> continuous
  });
  b.addEventListener('pointerup', () => stop(true));
  b.addEventListener('pointercancel', () => stop(false));
});

// ---------------------------------------------------------------- keyboard
const KEYS = { KeyZ: 'left', KeyX: 'right', Equal: 'in', NumpadAdd: 'in', Minus: 'out', NumpadSubtract: 'out' };
addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
  if (KEYS[e.code]) { held.add(KEYS[e.code]); e.preventDefault(); }
  if (e.code === 'KeyC' && !e.repeat) resetView();
});
addEventListener('keyup', (e) => { if (KEYS[e.code]) held.delete(KEYS[e.code]); });
addEventListener('blur', () => held.clear());
