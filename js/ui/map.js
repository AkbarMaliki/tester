// Map view (M / 🗺 button): the camera flies up to a bird's-eye view of the whole world and back.
// Built to be cheap: while it's up the camera skips the detail layer (grass, particles, footprints: engine/core.js
// DETAIL_LAYER), shadows / bloom / tilt-shift are off, the fog is pushed away, and the kid is drawn as a DOM
// icon instead of the model. Places come from systems/mapmarkers.js (anything can add one). Gameplay pauses.
import * as THREE from 'three';
import { $, clamp, lerp, smooth } from '../engine/util.js';
import { renderer, scene, camera, sun, bloom, setTiltShift, DETAIL_LAYER } from '../engine/core.js';
import { sfx } from '../engine/audio.js';
import { clearKeys } from '../systems/input.js';
import { mapMarkers } from '../systems/mapmarkers.js';
import { today, fmtDate } from '../systems/calendar.js';
import { avatar, player } from '../entities/player/controller.js';
import { car } from '../entities/car/car.js';
import { ui } from './ui.js';

const FLY = 0.9;   // seconds up / down
const MAP = { pos: new THREE.Vector3(0, 245, 75), at: new THREE.Vector3(0, 0, 6), fov: 50 };
{ const o = new THREE.PerspectiveCamera(); o.position.copy(MAP.pos); o.lookAt(MAP.at); MAP.q = o.quaternion.clone(); }   // a camera looks down -z

let t = 0, dir = 0, lite = false, els = null, still = 0, t0 = 0, since = 0;   // flight runs on real time (smooth even at low fps)   // still = frames drawn since the camera arrived
const from = { pos: new THREE.Vector3(), q: new THREE.Quaternion(), fov: 38, near: 45, far: 115, camFar: 400 };
const saved = { shadow: true, bloom: true, avatar: true };
const v = new THREE.Vector3(), v2 = new THREE.Vector3();
const isOpen = () => $('mapView').classList.contains('show');
export const mapActive = () => dir !== 0 || t > 0;
// once the camera has arrived (and the game is paused) the picture can't change: the last rendered frame is copied
// into a plain 2D canvas (#mapSnap) and main.js stops rendering 3D, so an open map costs ~nothing. Resize redraws.
export const mapFrozen = () => t === 1 && dir === 0 && still > 2;
const snapOff = () => $('mapSnap').classList.remove('show');
addEventListener('resize', () => { still = 0; snapOff(); });
// main.js, right after composer.render(): the WebGL buffer is only readable in the same frame it was drawn
export function mapAfterRender() {
  if (t !== 1 || dir !== 0 || still !== 2) return;
  const src = renderer.domElement, snap = $('mapSnap');
  snap.width = src.width; snap.height = src.height;
  snap.getContext('2d').drawImage(src, 0, 0);
  snap.classList.add('show');
}

export function toggleMap(open = !isOpen()) {
  if (open === isOpen()) return;
  if (open) {
    if (!ui.started || ['modal', 'inventory', 'pause', 'profile', 'fade'].some(id => $(id).classList.contains('show'))) return;
    if (t === 0) {   // remember the follow camera to fly back to it
      from.pos.copy(camera.position); from.q.copy(camera.quaternion); from.fov = camera.fov;
      from.near = scene.fog.near; from.far = scene.fog.far; from.camFar = camera.far;
    }
    clearKeys(); build(); $('mapView').classList.add('show');
    const d = today(); $('mapDate').textContent = `${d.season.icon} ${d.weekday}, ${fmtDate(d)} ${d.weather.icon}`;
  } else $('mapView').classList.remove('show');
  document.body.classList.toggle('map-open', open);   // hides the E prompt / key hints (css)
  dir = open ? 1 : -1; still = 0; t0 = t; since = performance.now(); snapOff(); sfx.pop();
}

// cheap mode on/off: detail layer, shadows, bloom, tilt-shift, the kid's model
function setLite(on) {
  if (on === lite) return;
  lite = on;
  if (on) {
    saved.shadow = sun.castShadow; saved.bloom = bloom.enabled; saved.avatar = avatar.visible;
    camera.layers.disable(DETAIL_LAYER); sun.castShadow = false; bloom.enabled = false; setTiltShift(false);
  } else {
    camera.layers.enable(DETAIL_LAYER); sun.castShadow = saved.shadow; bloom.enabled = saved.bloom; setTiltShift($('optTilt').checked);
    avatar.visible = saved.avatar;
  }
}

function build() {
  if (els) return;
  const box = $('mapMarkers');
  els = mapMarkers.map((m) => {
    const e = document.createElement('div');
    e.className = 'mk mk-' + m.kind; e.innerHTML = `<i>${m.icon}</i><span>${m.label}</span>`;
    box.append(e); return { m, e };
  });
  els.car = document.createElement('div'); els.car.className = 'mk mk-car'; els.car.innerHTML = '<i>🚙</i><span>Mobil</span>'; box.append(els.car);
  els.me = document.createElement('div'); els.me.className = 'mk-me';
  els.me.innerHTML = '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17"/><path d="M20 6 30 30 20 24 10 30z"/></svg><span>Kamu</span>';
  box.append(els.me);
}
// world point -> CSS pixels (null when behind the camera)
function screen(x, y, z) {
  v.set(x, y, z).project(camera);
  if (v.z > 1) return null;
  return [(v.x * 0.5 + 0.5) * innerWidth, (-v.y * 0.5 + 0.5) * innerHeight];
}
const place = (el, p) => { el.style.display = p ? '' : 'none'; if (p) el.style.transform = `translate(${p[0].toFixed(1)}px, ${p[1].toFixed(1)}px)`; };

// every frame from main.js instead of updateCamera while the map is up or flying; returns false when idle
export function updateMap() {
  if (!mapActive()) return false;
  if (dir) t = clamp(t0 + dir * (performance.now() - since) / 1000 / FLY, 0, 1);
  const e = smooth(0, 1, t);
  camera.position.lerpVectors(from.pos, MAP.pos, e);
  camera.quaternion.slerpQuaternions(from.q, MAP.q, e);
  camera.fov = lerp(from.fov, MAP.fov, e);
  scene.fog.near = lerp(from.near, 500, e); scene.fog.far = lerp(from.far, 900, e);
  camera.far = lerp(from.camFar, 900, e); camera.updateProjectionMatrix();
  setLite(e > 0.35);
  if (lite) avatar.visible = false;   // after syncPlayer, before rendering: the icon stands in for the kid
  if (t === 0 && dir < 0) {   // landed back: hand the camera to systems/camera.js
    dir = 0; setLite(false);
    camera.fov = from.fov; scene.fog.near = from.near; scene.fog.far = from.far; camera.far = from.camFar; camera.updateProjectionMatrix();
    return false;
  }
  if (t === 1 && dir > 0) dir = 0;
  if (t === 1) still++;
  // markers (only while the overlay shows)
  if (els && isOpen()) {
    for (const { m, e: el } of els) place(el, screen(m.x, 0, m.z));
    place(els.car, player.mode === 'car' ? null : screen(car.position.x, car.position.y, car.position.z));
    const me = player.mode === 'car' ? car.position : avatar.position;
    const p = screen(me.x, me.y, me.z);
    // heading on screen: project a point a few metres ahead
    const yaw = player.mode === 'car' ? Math.atan2(v2.set(-1, 0, 0).applyQuaternion(car.quaternion).x, v2.z) : avatar.rotation.y;
    const q = screen(me.x + Math.sin(yaw) * 4, me.y, me.z + Math.cos(yaw) * 4);
    place(els.me, p);
    if (p && q) els.me.firstChild.style.transform = `rotate(${Math.atan2(q[0] - p[0], p[1] - q[1])}rad)`;
  }
  return true;
}

export function initMapUI() {
  $('mapBtn').onclick = () => toggleMap();
  $('mapClose').onclick = () => toggleMap(false);
  addEventListener('keydown', (e) => {
    if (e.repeat || e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    if (e.code === 'KeyM') toggleMap();
    else if (e.code === 'Escape') toggleMap(false);
  });
}
