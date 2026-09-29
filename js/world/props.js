// Park furniture, interactive notice boards, diner, dock, ramp, letters (generic, reusable props).
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { WORD, MAX_LAMPS, ASSETS } from '../game/config.js';
import { rand, canvasTex } from '../engine/util.js';
import { scene, lam, glowMat, mesh, group, addStatic, addDynamic } from '../engine/core.js';
import { LAKES, LOT, landDist, keepOut } from './worldmap.js';
import { addZone } from '../systems/interaction.js';
import { addMapMarker } from '../systems/mapmarkers.js';
import { emit } from '../engine/events.js';

export const lampPositions = [];   // fed to the ground shader for warm light pools
export const lampLights = [];      // real point lights (limited count)

const lanternGlow = glowMat('#ffae3a', 0.5, 4.2);
const stoneM = lam('#6a64d8'), postM = lam('#4a45a8'), capM = lam('#3b3584'), frameM = lam('#2e2860');
const woodM = lam('#8d5f9e'), woodDark = lam('#5d3b6e');

export function lampPost(x, z, withLight) {
  const g = group(x, 0, z);
  mesh(new THREE.BoxGeometry(0.7, 0.5, 0.7), stoneM, g, 0, 0.25, 0);
  mesh(new THREE.CylinderGeometry(0.1, 0.13, 2.8, 6), postM, g, 0, 1.9, 0);
  mesh(new THREE.BoxGeometry(0.4, 0.12, 0.4), capM, g, 0, 3.28, 0);
  mesh(new THREE.BoxGeometry(0.42, 0.55, 0.42), lanternGlow, g, 0, 3.62, 0, false);
  for (const [sx, sz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) mesh(new THREE.BoxGeometry(0.06, 0.6, 0.06), frameM, g, sx * 0.22, 3.62, sz * 0.22);
  mesh(new THREE.ConeGeometry(0.42, 0.38, 4).rotateY(Math.PI / 4), capM, g, 0, 4.08, 0);
  if (withLight) { const l = new THREE.PointLight(0xff9a3a, 0, 13, 1.6); l.position.set(0, 3.4, 0); g.add(l); lampLights.push(l); }
  addStatic(new CANNON.Cylinder(0.25, 0.25, 3.6, 8), x, 1.8, z);
  keepOut.push({ x, z, r: 0.8 }); lampPositions.push(new THREE.Vector3(x, 0, z));
}
export function groundLantern(x, z) {
  const g = new THREE.Group(); scene.add(g);
  mesh(new THREE.BoxGeometry(0.62, 0.72, 0.62), lanternGlow, g, 0, 0, 0, false);
  for (const [sx, sz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) mesh(new THREE.BoxGeometry(0.1, 0.8, 0.1), frameM, g, sx * 0.32, 0, sz * 0.32);
  mesh(new THREE.BoxGeometry(0.64, 0.05, 0.05), frameM, g, 0, 0, 0.33); mesh(new THREE.BoxGeometry(0.05, 0.05, 0.64), frameM, g, 0.33, 0, 0);
  mesh(new THREE.BoxGeometry(0.85, 0.14, 0.85), capM, g, 0, 0.44, 0);
  mesh(new THREE.BoxGeometry(0.85, 0.12, 0.85), capM, g, 0, -0.42, 0);
  const b = new CANNON.Body({ mass: 3, shape: new CANNON.Box(new CANNON.Vec3(0.42, 0.48, 0.42)), position: new CANNON.Vec3(x, 0.5, z) });
  b.quaternion.setFromEuler(0, rand(0, 3), 0);
  addDynamic(g, b);
  if (lampPositions.length < MAX_LAMPS) lampPositions.push(new THREE.Vector3(x, 0, z));
}
export function bench(x, z, rotY) {
  const g = group(x, 0, z, rotY);
  for (let i = 0; i < 3; i++) mesh(new THREE.BoxGeometry(2.6, 0.08, 0.22), woodM, g, 0, 0.62, -0.3 + i * 0.27);
  for (let i = 0; i < 2; i++) mesh(new THREE.BoxGeometry(2.6, 0.2, 0.07), woodM, g, 0, 0.95 + i * 0.26, -0.44);
  for (const s of [-1.1, 1.1]) { mesh(new THREE.BoxGeometry(0.1, 0.62, 0.7), woodDark, g, s, 0.31, -0.05); mesh(new THREE.BoxGeometry(0.1, 0.8, 0.08), woodDark, g, s, 0.95, -0.46); }
  addStatic(new CANNON.Box(new CANNON.Vec3(1.3, 0.6, 0.45)), x, 0.6, z, rotY);
  keepOut.push({ x, z, r: 1.8 });
}
const crateTex = canvasTex(128, 128, (g, w) => {
  g.fillStyle = '#b0563f'; g.fillRect(0, 0, w, w);
  g.fillStyle = '#8d3f31'; for (let i = 0; i < 5; i++) g.fillRect(16, 18 + i * 20, w - 32, 4);
  g.strokeStyle = '#5a2330'; g.lineWidth = 16; g.strokeRect(8, 8, w - 16, w - 16);
});
export function crate(x, y, z, s = 1.25) {
  const m = mesh(new THREE.BoxGeometry(s, s, s), new THREE.MeshLambertMaterial({ map: crateTex }));
  addDynamic(m, new CANNON.Body({ mass: 6, shape: new CANNON.Box(new CANNON.Vec3(s / 2, s / 2, s / 2)), position: new CANNON.Vec3(x, y, z) }));
}
export function barrel(x, z, hex) {
  const g = new THREE.Group(); scene.add(g);
  mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.2, 12), lam(hex), g);
  for (const y of [-0.38, 0.38]) mesh(new THREE.CylinderGeometry(0.53, 0.53, 0.1, 12), lam('#2c2640'), g, 0, y, 0);
  addDynamic(g, new CANNON.Body({ mass: 5, shape: new CANNON.Cylinder(0.5, 0.5, 1.2, 10), position: new CANNON.Vec3(x, 0.62, z) }));
}

// notice board with a red roof + white diamond interaction point.
// `action` (from public/assets/data/zones.json) is an event name emitted on E, e.g. 'bowling:reset'
export function board({ x, z, rot, title, html, label, action, map = true }) {   // map: false = no map-view marker
  const g = group(x, 0, z, rot);
  const woodB = lam('#7a4f8a'), roofM = lam('#c9304c'), roofD = lam('#8e1f38');
  for (const s of [-2, 2]) mesh(new THREE.BoxGeometry(0.28, 3.4, 0.28), woodB, g, s, 1.7, 0);
  mesh(new THREE.BoxGeometry(4.3, 2.3, 0.2), woodB, g, 0, 2.05, 0);
  const tex = canvasTex(512, 280, (c, w, h) => {
    c.fillStyle = '#3d3574'; c.fillRect(0, 0, w, h);
    const papers = ['#e9e4ff', '#ffe7d6', '#d6ecff', '#ffd6ea'];
    for (let i = 0; i < 6; i++) {
      c.save(); c.translate(40 + (i % 3) * 160 + rand(0, 40), 90 + Math.floor(i / 3) * 95 + rand(-8, 8)); c.rotate(rand(-0.15, 0.15));
      c.fillStyle = papers[i % 4]; c.fillRect(0, 0, rand(80, 120), rand(60, 80));
      c.fillStyle = '#00000030'; for (let l = 0; l < 4; l++) c.fillRect(10, 14 + l * 13, rand(40, 80), 4);
      c.fillStyle = '#c9304c'; c.beginPath(); c.arc(8, 6, 5, 0, 7); c.fill(); c.restore();
    }
    c.fillStyle = '#1c1636'; c.fillRect(0, 0, w, 64);
    c.fillStyle = '#d6f58a'; c.font = '700 52px "Amatic SC", sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(title, w / 2, 34);
  });
  const face = new THREE.Mesh(new THREE.PlaneGeometry(4, 2.1), new THREE.MeshLambertMaterial({ map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.25 }));
  face.position.set(0, 2.05, 0.11); g.add(face);
  for (const sgn of [1, -1]) {
    const r = mesh(new THREE.BoxGeometry(5, 0.12, 1.2), roofM, g, 0, 3.6, sgn * 0.45); r.rotation.x = sgn * 0.5;
    for (let i = 0; i < 5; i++) mesh(new THREE.BoxGeometry(5.02, 0.05, 0.08), roofD, r, 0, 0.07, -0.5 + i * 0.25, false);
  }
  addStatic(new CANNON.Box(new CANNON.Vec3(2.2, 1.8, 0.3)), x, 1.8, z, rot);
  const front = new THREE.Vector3(0, 0, 3.2).applyAxisAngle(new THREE.Vector3(0, 1, 0), rot).add(g.position);
  const dia = new THREE.Mesh(new THREE.OctahedronGeometry(0.3), new THREE.MeshBasicMaterial({ color: new THREE.Color(2, 2, 2) }));
  dia.position.set(0, 1.4, 0.35); g.add(dia);
  const ring = new THREE.Mesh(new THREE.RingGeometry(1.6, 1.85, 48).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.6, 1.6), transparent: true, opacity: 0.3, depthWrite: false }));
  ring.position.set(front.x, 0.04, front.z); scene.add(ring);
  addZone({ pos: front, label: label || title, content: html || null, action: action ? () => emit(action) || console.warn(`board '${title}': no listener for event '${action}'`) : null, dia, ring });
  keepOut.push({ x, z, r: 3.5 }, { x: front.x, z: front.z, r: 2.5 });
  if (map) addMapMarker({ x, z, icon: '📋', label: title, kind: 'board' });
}

// diner booths + neon arcade screen
export function booth(x, z, rotY) {
  const g = group(x, 0, z, rotY);
  const red = lam('#b52c44'), blue = lam('#4b53d6'), table = lam('#4d48b8'), leg = lam('#2c2650');
  for (const s of [-1, 1]) {
    mesh(new THREE.BoxGeometry(2.4, 0.5, 0.9), red, g, 0, 0.25, s * 1.25);
    mesh(new THREE.BoxGeometry(2.4, 1.2, 0.35), red, g, 0, 0.85, s * 1.65);
    for (let i = 0; i < 2; i++) mesh(new THREE.BoxGeometry(0.3, 1.21, 0.37), blue, g, -0.45 + i * 0.9, 0.86, s * 1.65);
    mesh(new THREE.BoxGeometry(2.42, 0.12, 0.92), blue, g, 0, 0.52, s * 1.25);
  }
  mesh(new THREE.BoxGeometry(2.1, 0.1, 1.3), table, g, 0, 0.92, 0);
  mesh(new THREE.CylinderGeometry(0.1, 0.18, 0.9, 6), leg, g, 0, 0.45, 0);
  mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.35, 8), lam('#d0342c'), g, 0.2, 1.14, 0.1);
  mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.35, 8), lam('#e6c23a'), g, 0.42, 1.14, -0.05);
  addStatic(new CANNON.Box(new CANNON.Vec3(1.25, 0.7, 1.85)), x, 0.7, z, rotY);
  keepOut.push({ x, z, r: 3 });
}
export function arcade(x, z, rotY) {
  const g = group(x, 0, z, rotY);
  mesh(new RoundedBoxGeometry(4.4, 2.9, 0.4, 3, 0.35), glowMat('#e2a4ff', 1.3, 3.2), g, 0, 2.1, -0.02, false);
  mesh(new RoundedBoxGeometry(4.1, 2.6, 0.45, 3, 0.3), lam('#2a2650'), g, 0, 2.1, 0);
  const tex = canvasTex(256, 160, (c, w) => {
    c.fillStyle = '#1a1830'; c.fillRect(0, 0, w, 160); c.fillStyle = '#ffffff';
    for (let r = 0; r < 4; r++) for (let i = 0; i <= r; i++) { c.beginPath(); c.arc(w / 2 + (i - r / 2) * 30, 34 + r * 30, 7, 0, 7); c.fill(); }
  });
  const scr = new THREE.Mesh(new THREE.PlaneGeometry(3.7, 2.2), new THREE.MeshBasicMaterial({ map: tex, color: new THREE.Color(1.6, 1.6, 1.6) }));
  scr.position.set(0, 2.1, 0.24); g.add(scr);
  for (const s of [-1.5, 1.5]) mesh(new THREE.TorusGeometry(0.35, 0.08, 6, 16).rotateX(Math.PI / 2), glowMat('#e2a4ff', 1.2, 3), g, s, 0.3, 0.2, false);
  mesh(new THREE.BoxGeometry(0.3, 1.2, 0.3), lam('#2a2650'), g, 0, 0.6, 0);
  addStatic(new CANNON.Box(new CANNON.Vec3(2.2, 1.6, 0.35)), x, 1.6, z, rotY);
  keepOut.push({ x, z, r: 3.2 });
}

export function ramp(x, z, rotY) {
  const g = group(x, 0, z, rotY);
  const tilt = 0.26, L = 9, T = 0.5;
  const r = mesh(new THREE.BoxGeometry(5.5, T, L), lam('#5a4fc0'), g, 0, Math.sin(tilt) * L / 2 - T / 2 + 0.05, 0);
  r.rotation.x = tilt;
  for (let i = 0; i < 4; i++) mesh(new THREE.BoxGeometry(5.52, 0.02, 0.35), glowMat('#ff4fb8', 1.2, 3), r, 0, T / 2 + 0.01, -L / 2 + 1.2 + i * 2.2, false);
  const q = new CANNON.Quaternion().setFromEuler(0, rotY, 0).mult(new CANNON.Quaternion().setFromEuler(tilt, 0, 0));
  const wp = new THREE.Vector3(0, r.position.y, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), rotY).add(g.position);
  addStatic(new CANNON.Box(new CANNON.Vec3(2.75, T / 2, L / 2)), wp.x, wp.y, wp.z, 0, q);
}
export function parking() {
  const m = glowMat('#8a90ff', 0.9, 1.8);
  for (let i = -4; i <= 4; i++) for (const s of [-1, 1]) {
    const x = i * 5, z = LOT.z + s * 3.2;
    mesh(new THREE.BoxGeometry(0.22, 0.03, 2.6), m, scene, x - 1.2, 0.02, z + s * 0.2, false);
    mesh(new THREE.BoxGeometry(1.2, 0.03, 0.22), m, scene, x - 0.7, 0.02, z + s * 1.4, false);
  }
}
export function dock() {   // wooden pier from the south road into lake #2
  const L = LAKES[1];
  let dx = 8 - L.x, dz = 31 - L.z; const len = Math.hypot(dx, dz); dx /= len; dz /= len;
  let t = len; while (t > 0 && landDist(L.x + dx * t, L.z + dz * t) > 0.6) t -= 0.25;
  const sx = L.x + dx * (t + 2.5), sz = L.z + dz * (t + 2.5);
  const rotY = Math.atan2(dx, dz), D = 11;
  const cx = sx - dx * D / 2, cz = sz - dz * D / 2;
  const g = group(cx, 0, cz, rotY);
  for (let i = 0; i < 16; i++) mesh(new THREE.BoxGeometry(3.4, 0.14, 0.62), i % 2 ? woodM : lam('#9c6cab'), g, 0, 0.12, -D / 2 + 0.35 + i * 0.68);
  for (let i = 0; i < 4; i++) for (const s of [-1.5, 1.5]) mesh(new THREE.CylinderGeometry(0.13, 0.13, 1.8, 6), woodDark, g, s, -0.6, -D / 2 + 1 + i * 3);
  addStatic(new CANNON.Box(new CANNON.Vec3(1.7, 0.1, D / 2)), cx, 0.1, cz, rotY);
  keepOut.push({ x: sx, z: sz, r: 3 });
  addMapMarker({ x: cx, z: cz, icon: '⚓', label: 'Dermaga' });
}

export async function buildLetters() {
  const font = await new FontLoader().loadAsync(ASSETS + 'fonts/helvetiker_bold.typeface.json');
  const m = lam('#a58cff', { flatShading: false });
  const geos = [...WORD].map(ch => {
    const geo = new TextGeometry(ch, { font, size: 2.4, depth: 0.9, curveSegments: 6, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.06, bevelSegments: 2 });
    geo.center(); geo.computeBoundingBox(); return geo;
  });
  const widths = geos.map(g => g.boundingBox.max.x - g.boundingBox.min.x);
  let x = -(widths.reduce((a, b) => a + b, 0) + 0.35 * (geos.length - 1)) / 2;
  geos.forEach((geo, i) => {
    const bb = geo.boundingBox, hx = widths[i] / 2, hy = (bb.max.y - bb.min.y) / 2, hz = (bb.max.z - bb.min.z) / 2;
    const b = new CANNON.Body({ mass: 10, shape: new CANNON.Box(new CANNON.Vec3(hx, hy, hz)), position: new CANNON.Vec3(x + hx, hy + 0.02, -6) });
    b.sleep();
    addDynamic(mesh(geo, m), b);
    x += widths[i] + 0.35;
  });
}
