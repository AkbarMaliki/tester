// Balai Warga buildings, low-poly from primitives: drinking fountain, public toilet, gazebo with a bed.
// Each builder places the model + static physics + keepOut and returns the spot where the kid should stand to use it.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { lam, glowMat, mesh, group, addStatic } from '../../engine/core.js';
import { canvasTex } from '../../engine/util.js';
import { keepOut } from '../../world/worldmap.js';

const box = (x, y, z) => new THREE.BoxGeometry(x, y, z);
const cyl = (a, b, h, n = 8) => new THREE.CylinderGeometry(a, b, h, n);
const stone = lam('#8f89c9'), stoneD = lam('#6a64b0'), woodM = lam('#8d5f9e'), woodD = lam('#5d3b6e');
const roofM = lam('#c9304c'), roofD = lam('#8e1f38');
const waterGlow = glowMat('#7fd4ff', 1.1, 2.4);

// local (lx, lz) of a model at (x, z) turned by `rot` -> world position (local +z = the model's front)
const toWorld = (x, z, rot, lx, lz) => new THREE.Vector3(x + lx * Math.cos(rot) + lz * Math.sin(rot), 0, z - lx * Math.sin(rot) + lz * Math.cos(rot));
const front = (x, z, rot, d) => toWorld(x, z, rot, 0, d);

// ---------------------------------------------------------------- drinking fountain (keran air minum)
export function fountain(x, z, rot) {
  const g = group(x, 0, z, rot);
  mesh(cyl(0.75, 0.85, 0.22, 8), stoneD, g, 0, 0.11, 0);                    // base
  mesh(cyl(0.32, 0.4, 0.95, 8), stone, g, 0, 0.7, 0);                       // column
  mesh(cyl(0.62, 0.42, 0.22, 10), stone, g, 0, 1.25, 0);                    // basin
  mesh(cyl(0.52, 0.52, 0.04, 10), waterGlow, g, 0, 1.35, 0, false);         // water in the basin
  mesh(box(0.14, 0.5, 0.14), stoneD, g, 0, 1.6, -0.35);                     // tap post at the back
  mesh(cyl(0.045, 0.045, 0.36, 6).rotateX(Math.PI / 2), lam('#c9c9d9'), g, 0, 1.82, -0.2, false);   // spout
  const arc = mesh(cyl(0.03, 0.03, 0.45, 5), waterGlow, g, 0, 1.6, -0.02, false); arc.rotation.x = 0.35;   // water jet
  mesh(cyl(0.05, 0.05, 0.08, 6), lam('#2f6fd6'), g, 0, 1.9, -0.33, false);  // blue tap handle
  mesh(box(0.5, 0.36, 0.05), lam('#e9e4ff'), g, 0, 0.75, 0.41, false);      // little sign plate
  mesh(box(0.1, 0.18, 0.06), lam('#2f6fd6'), g, 0, 0.78, 0.43, false);      // "drop" mark
  addStatic(new CANNON.Cylinder(0.62, 0.8, 1.4, 8), x, 0.7, z);
  keepOut.push({ x, z, r: 1.6 });
  return front(x, z, rot, 1.4);
}

// ---------------------------------------------------------------- public toilet (toilet umum)
const signTex = canvasTex(128, 64, (c, w, h) => {
  c.fillStyle = '#1c1636'; c.fillRect(0, 0, w, h);
  c.fillStyle = '#d6f58a'; c.font = '700 44px system-ui, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('WC', w / 2, h / 2 + 2);
});
export function toilet(x, z, rot) {
  const g = group(x, 0, z, rot);
  const wall = lam('#7fb3c9'), wallD = lam('#5c8fa8'), W = 2.4, D = 2.2, H = 2.5;
  mesh(box(W + 0.3, 0.16, D + 0.3), stoneD, g, 0, 0.08, 0);
  mesh(box(W, H, D), wall, g, 0, H / 2 + 0.16, 0);
  for (const s of [-1, 1]) mesh(box(0.14, H, 0.14), wallD, g, s * W / 2, H / 2 + 0.16, D / 2);        // corner trims
  mesh(box(1.0, 1.9, 0.08), woodD, g, 0, 1.11, D / 2 + 0.02);                                       // door
  mesh(box(0.08, 0.08, 0.1), lam('#ffd98a'), g, 0.35, 1.1, D / 2 + 0.08, false);                   // knob
  mesh(box(0.7, 0.14, 0.04), lam('#3b3584'), g, 0, 1.75, D / 2 + 0.07, false);                     // vent slot
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.4), new THREE.MeshBasicMaterial({ map: signTex, color: new THREE.Color(1.3, 1.3, 1.3) }));
  sign.position.set(0, 2.35, D / 2 + 0.02); g.add(sign);
  for (const s of [-1, 1]) {                                                                         // pitched roof
    const r = mesh(box(W + 0.7, 0.12, D / 2 + 0.6), roofM, g, 0, H + 0.5, s * (D / 4 + 0.15)); r.rotation.x = s * 0.42;
    for (let i = 0; i < 4; i++) mesh(box(W + 0.72, 0.05, 0.08), roofD, r, 0, 0.07, -0.55 + i * 0.36, false);
  }
  mesh(box(0.5, 0.5, 0.06), lam('#bfe8ff'), g, W / 2 + 0.01, 1.9, 0, false).rotation.y = Math.PI / 2;   // side window
  mesh(cyl(0.08, 0.08, 0.7, 6), lam('#9a9aa6'), g, -0.7, H + 0.8, -0.5);                             // vent pipe
  mesh(cyl(0.35, 0.3, 0.7, 8), lam('#4a4a8a'), g, W / 2 + 0.45, 0.35, D / 2 - 0.3);                  // bin
  addStatic(new CANNON.Box(new CANNON.Vec3(W / 2, H / 2 + 0.2, D / 2)), x, H / 2 + 0.2, z, rot);
  const bin = toWorld(x, z, rot, W / 2 + 0.45, D / 2 - 0.3);
  addStatic(new CANNON.Cylinder(0.35, 0.35, 0.7, 8), bin.x, 0.35, bin.z);
  keepOut.push({ x, z, r: 2.8 });
  return front(x, z, rot, D / 2 + 1.2);
}

// ---------------------------------------------------------------- gazebo with a bed (tidur)
// Returns { spot, roof }: roof = its own materials, so the feature can fade the roof out while the kid is inside
// (static batching merges per material, a private material keeps the roof separate).
export function gazebo(x, z, rot) {
  const g = group(x, 0, z, rot);
  const R = 3, H = 2.6, posts = 6;
  mesh(cyl(R + 0.15, R + 0.3, 0.12, posts), woodD, g, 0, 0.06, 0);                                   // floor
  for (let i = 0; i < 12; i++) mesh(box(0.08, 0.01, R * 1.7), lam('#9c6cab'), g, -R * 0.85 + i * 0.155, 0.125, 0, false);   // planks
  const corners = [];
  for (let i = 0; i < posts; i++) {
    const a = (i + 0.5) / posts * Math.PI * 2, px = Math.sin(a) * R, pz = Math.cos(a) * R;
    corners.push([px, pz]);
    mesh(cyl(0.12, 0.14, H, 6), woodM, g, px, H / 2 + 0.12, pz);
  }
  // railings on every side except the front (+z) one, which is the entrance
  const railed = [];
  for (let i = 0; i < posts; i++) {
    const [ax, az] = corners[i], [bx, bz] = corners[(i + 1) % posts], mx = (ax + bx) / 2, mz = (az + bz) / 2;
    if (mz > R * 0.8) continue;
    const len = Math.hypot(bx - ax, bz - az), ang = Math.atan2(bx - ax, bz - az);
    for (const y of [0.45, 0.85]) { const r = mesh(box(0.08, 0.08, len), woodD, g, mx, y, mz); r.rotation.y = ang; }
    railed.push([mx, mz, len, ang]);
  }
  // roof: six-sided cone + trim + finial, a lantern hanging in the middle
  const roof = ['#c9304c', '#8e1f38', '#ffd98a'].map(c => lam(c, { transparent: true }));
  mesh(cyl(0.01, R + 0.9, 1.5, posts), roof[0], g, 0, H + 0.12 + 0.75, 0);
  mesh(cyl(R + 0.92, R + 0.92, 0.14, posts), roof[1], g, 0, H + 0.12, 0);
  mesh(new THREE.SphereGeometry(0.18, 8, 6), roof[2], g, 0, H + 1.95, 0);
  mesh(cyl(0.02, 0.02, 0.5, 4), woodD, g, 0, H - 0.1, 0, false);
  mesh(box(0.3, 0.38, 0.3), glowMat('#ffae3a', 0.5, 4.2), g, 0, H - 0.45, 0, false);
  // bed against the back railing: frame, mattress, pillow, blanket
  const bed = new THREE.Group(); bed.position.set(0, 0.12, -R + 1.35); g.add(bed);
  mesh(box(1.4, 0.35, 2.3), woodM, bed, 0, 0.18, 0);
  mesh(box(1.5, 0.75, 0.12), woodD, bed, 0, 0.38, -1.15);
  mesh(box(1.3, 0.18, 2.1), lam('#f2eeff'), bed, 0, 0.44, 0.05);
  mesh(box(0.9, 0.14, 0.45), lam('#ffffff'), bed, 0, 0.58, -0.75, false);
  mesh(box(1.34, 0.08, 1.3), lam('#4b57c9'), bed, 0, 0.56, 0.45, false);
  mesh(box(1.34, 0.02, 0.14), lam('#ffd98a'), bed, 0, 0.605, -0.15, false);
  // physics: posts, railings, bed (the floor is low enough to walk onto)
  const world = (lx, lz) => toWorld(x, z, rot, lx, lz);
  for (const [px, pz] of corners) { const w = world(px, pz); addStatic(new CANNON.Cylinder(0.14, 0.14, H, 6), w.x, H / 2, w.z); }
  for (const [mx, mz, len, ang] of railed) { const w = world(mx, mz); addStatic(new CANNON.Box(new CANNON.Vec3(0.06, 0.5, len / 2)), w.x, 0.5, w.z, rot + ang); }
  const b = world(bed.position.x, bed.position.z);
  addStatic(new CANNON.Box(new CANNON.Vec3(0.72, 0.35, 1.2)), b.x, 0.35, b.z, rot);
  addStatic(new CANNON.Cylinder(R + 0.2, R + 0.2, 0.12, 12), x, 0.06, z);
  keepOut.push({ x, z, r: R + 1.4 });
  const foot = world(0, bed.position.z + 1.55);   // free floor at the foot of the bed (debug chest)
  const cal = world(-1.25, bed.position.z - 0.2);   // back corner left of the bed (calendar stand)
  return { spot: world(1.1, bed.position.z + 0.3), roof: { mats: roof, x, z, r: R + 0.6, k: 1 }, foot: { x: foot.x, z: foot.z, rot }, cal: { x: cal.x, z: cal.z, rot } };   // spot = beside the bed
}

// ---------------------------------------------------------------- storage chest (debug: every item in the game)
// Wooden chest with iron bands and a glowing purple gem so it reads as "special". Returns where to stand.
export function chest(x, z, rot) {
  const g = group(x, 0.12, z, rot);
  const band = lam('#3b3584');
  mesh(box(1.0, 0.45, 0.6), lam('#a8703e'), g, 0, 0.23, 0);
  const lid = mesh(cyl(0.3, 0.3, 1.0, 8, 1), lam('#c0844a'), g, 0, 0.45, 0); lid.rotation.z = Math.PI / 2; lid.scale.set(1, 1, 0.55);
  for (const s of [-0.38, 0.38]) {
    mesh(box(0.08, 0.47, 0.62), band, g, s, 0.23, 0, false);
    const b = mesh(cyl(0.31, 0.31, 0.08, 8), band, g, s, 0.45, 0, false); b.rotation.z = Math.PI / 2; b.scale.set(1, 1, 0.57);
  }
  mesh(box(0.16, 0.2, 0.06), lam('#ffd98a'), g, 0, 0.42, 0.31, false);                       // lock
  mesh(new THREE.OctahedronGeometry(0.1), glowMat('#c77dff', 1.4, 3.2), g, 0, 0.72, 0, false);   // debug gem
  addStatic(new CANNON.Box(new CANNON.Vec3(0.5, 0.35, 0.3)), x, 0.35, z, rot);
  return front(x, z, rot, 0.95);
}

// ---------------------------------------------------------------- calendar stand (easel with a tear-off calendar)
// Returns { spot, draw(date) }: draw() repaints the page (season colour, day number, weekday, weather, month dots).
export function calendarStand(x, z, rot) {
  const g = group(x, 0.12, z, rot);
  for (const s of [-1, 1]) { const l = mesh(box(0.06, 1.35, 0.06), woodM, g, s * 0.3, 0.64, 0); l.rotation.z = s * -0.08; }
  const back = mesh(box(0.05, 1.25, 0.05), woodM, g, 0, 0.58, -0.25); back.rotation.x = -0.38;
  mesh(box(0.76, 0.86, 0.05), woodD, g, 0, 1.0, 0.03);
  const canvas = document.createElement('canvas'); canvas.width = 256; canvas.height = 288;
  const tex = new THREE.CanvasTexture(canvas); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  const page = new THREE.Mesh(new THREE.PlaneGeometry(0.66, 0.76), new THREE.MeshBasicMaterial({ map: tex, color: new THREE.Color(1.15, 1.15, 1.15) }));
  page.position.set(0, 1.0, 0.062); g.add(page);
  for (const s of [-0.2, 0, 0.2]) mesh(new THREE.TorusGeometry(0.03, 0.008, 4, 8), lam('#c9c9d9'), g, s, 1.38, 0.065, false);
  addStatic(new CANNON.Box(new CANNON.Vec3(0.38, 0.7, 0.2)), x, 0.7, z, rot);
  const draw = (d) => {
    const c = canvas.getContext('2d'), W = canvas.width, H = canvas.height;
    c.fillStyle = '#fffaf0'; c.fillRect(0, 0, W, H);
    c.fillStyle = d.season.color; c.fillRect(0, 0, W, 64);
    c.fillStyle = '#1c1636'; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.font = '700 34px system-ui, sans-serif'; c.fillText(`${d.season.short} · Thn ${d.year}`, W / 2, 34);
    c.font = '800 110px system-ui, sans-serif'; c.fillText(String(d.day), W / 2, 128);
    c.font = '700 30px system-ui, sans-serif'; c.fillText(`${d.weekday}  ${d.weather.icon}`, W / 2, 200);
    const n = d.season.days || 28;   // month dots: past = filled, today = ring
    for (let i = 0; i < n; i++) {
      const cx = 30 + (i % 14) * 14.4, cy = 238 + Math.floor(i / 14) * 18;
      c.beginPath(); c.arc(cx, cy, 5, 0, 7);
      if (i + 1 < d.day) { c.fillStyle = '#b8b0c8'; c.fill(); } else if (i + 1 === d.day) { c.strokeStyle = d.season.color; c.lineWidth = 4; c.stroke(); } else { c.fillStyle = '#e4e0ec'; c.fill(); }
    }
    tex.needsUpdate = true;
  };
  return { spot: front(x, z, rot, 0.85), draw };
}
