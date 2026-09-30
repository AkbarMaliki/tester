// Seasons + weather on the world (data: public/assets/data/calendar.json, date: systems/calendar.js):
//   applySeason(pal, dt)  tints the time-of-day palette (grass, leaves, ground: snow in winter), darkens it for rain
//   updateSeasonFx(dt, hour, focus)  grass height / leaf size, fallen leaves, season particles (petals, leaves),
//                         weather particles (rain streaks, snow), rain sound, and the env flags for systems/stats.js.
// Everything eases towards the current day's values, so a new season / weather blends in over a few seconds.
import * as THREE from 'three';
import { frand } from '../engine/util.js';
import { scene, U, DETAIL_LAYER } from '../engine/core.js';
import { sfx } from '../engine/audio.js';
import { CAL, today } from '../systems/calendar.js';
import { setEnv } from '../systems/stats.js';
import { groundLeaves } from './vegetation.js';
import { smoke } from './effects.js';
import { groundY, maskAt, keepOut, landDist } from './worldmap.js';
import { trees } from './vegetation.js';

const KEYS = ['grassA', 'grassB', 'leaf', 'ground', 'paved'];
const REF = Object.fromEntries(KEYS.map(k => [k, new THREE.Color(CAL.seasons[0].look[k])]));
const LOOK = CAL.seasons.map(s => Object.fromEntries(KEYS.map(k => [k, new THREE.Color(s.look[k])])));
const lum = (c) => c.r * 0.2126 + c.g * 0.7152 + c.b * 0.0722;
const ENV_NAMES = [...new Set([...CAL.seasons.flatMap(s => [...(s.env || []), ...(s.envNight || []), ...(s.envNoon || [])]), ...Object.values(CAL.weathers).flatMap(w => w.env || [])])];

const cur = { dead: 0, cover: 0, mounds: -1, tint: Object.fromEntries(KEYS.map(k => [k, REF[k].clone()])), leafMix: 0, leafMixColor: new THREE.Color(1, 1, 1), grassH: 1, leafScale: 1, dim: 1, amb: 0, rain: 0, snow: 0, season: -1, seasonKey: -1 };
let first = true;
const grey = new THREE.Color(), tmpA = new THREE.Color(), tmpB = new THREE.Color();
const ease = (dt, rate) => (first ? 1 : 1 - Math.exp(-dt * rate));

// called right after paletteAt(hour): changes the palette in place and returns it
export function applySeason(pal, dt) {
  const d = today();
  if (d.seasonIndex !== cur.seasonKey) { first = true; cur.seasonKey = d.seasonIndex; }   // a new season arrives overnight: no fade
  const k = ease(dt, 0.8), look = LOOK[d.seasonIndex];
  // season colour at the brightness the time of day gives this colour (+ a bit of the palette's own hue shift)
  for (const key of KEYS) {
    const target = cur.tint[key].lerp(look[key], k), c = pal[key], ref = REF[key];
    const b = lum(c) / Math.max(lum(ref), 1e-4);
    tmpA.copy(target).multiplyScalar(b);                                                              // brightness only
    tmpB.setRGB(c.r / Math.max(ref.r, 1e-3), c.g / Math.max(ref.g, 1e-3), c.b / Math.max(ref.b, 1e-3)).multiply(target);   // full hue shift
    c.copy(tmpA.lerp(tmpB, 0.3));
  }
  cur.leafMix += ((d.season.look.leafMix || 0) - cur.leafMix) * k; U.uLeafMix.value = cur.leafMix;
  cur.leafMixColor.lerp(tmpA.set(d.season.look.leafMixColor || '#ffffff'), k); U.uLeafMixColor.value.copy(cur.leafMixColor);
  cur.dim += (d.weather.dim - cur.dim) * ease(dt, 1);
  if (cur.dim < 0.999) {   // overcast: greyer, darker sky, weaker sun
    const g = (pal.sky.r + pal.sky.g + pal.sky.b) / 3;
    pal.sky.lerp(grey.setRGB(g, g, g * 1.05), (1 - cur.dim) * 1.2).multiplyScalar(0.55 + 0.45 * cur.dim);
    pal.sunI *= cur.dim * cur.dim; pal.hemiI *= 0.8 + 0.2 * cur.dim;
    // the painted ground / grass / leaves don't use the sun: darken them directly, and soften the shadows
    const dark = 0.5 + 0.5 * cur.dim;
    for (const key of KEYS) pal[key].multiplyScalar(dark);
    pal.shadow.lerp(grey.setRGB(dark, dark, dark), (1 - cur.dim) * 1.6);
  }
  return pal;
}

// ---------------------------------------------------------------- particles around the camera focus
const BOX = { x: 44, y: 18, z: 44 };
function field(n, make) {
  const pos = new Float32Array(n * make.verts * 3), seed = new Float32Array(n);
  for (let i = 0; i < n; i++) seed[i] = Math.random() * 100;
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const obj = make.build(geo); obj.frustumCulled = false; obj.visible = false; obj.layers.set(DETAIL_LAYER); scene.add(obj);
  const p = []; for (let i = 0; i < n; i++) p.push(new THREE.Vector3(frand(-BOX.x, BOX.x) / 2, frand(0, BOX.y), frand(-BOX.z, BOX.z) / 2));
  return { n, obj, pos, p, seed, verts: make.verts, inited: false };
}
const points = (size, color) => ({ verts: 1, build: (g) => new THREE.Points(g, new THREE.PointsMaterial({ size, color, transparent: true, opacity: 0.95, depthWrite: false })) });
const ambient = field(260, points(0.3, '#ffffff'));
const snow = field(1100, points(0.3, '#ffffff'));
const rain = field(1500, { verts: 2, build: (g) => new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: '#e4ecff', transparent: true, opacity: 0.8, depthWrite: false })) });
const splashC = new THREE.Color('#dfe9ff'), sp = new THREE.Vector3(), sv = new THREE.Vector3();

// f.p = positions relative to the focus (x/z in -BOX/2..BOX/2, y 0..BOX.y); drift them, wrap them, write the buffer
function move(f, count, dt, focus, fall, sway, t, streak = 0) {
  f.obj.visible = count > 0;
  if (!count) return;
  f.obj.geometry.setDrawRange(0, count * f.verts);
  const wx = U.uWindDir.value.x, wz = U.uWindDir.value.y;
  for (let i = 0; i < count; i++) {
    const q = f.p[i], s = f.seed[i];
    q.y -= fall * (0.75 + (s % 1) * 0.5) * dt;
    q.x += (Math.sin(t * sway + s) * sway * 0.5 + wx * fall * 0.12) * dt;
    q.z += (Math.cos(t * sway * 0.8 + s) * sway * 0.5 + wz * fall * 0.12) * dt;
    if (q.y < 0) q.y += BOX.y;
    if (q.x > BOX.x / 2) q.x -= BOX.x; else if (q.x < -BOX.x / 2) q.x += BOX.x;
    if (q.z > BOX.z / 2) q.z -= BOX.z; else if (q.z < -BOX.z / 2) q.z += BOX.z;
    const o = i * f.verts * 3, x = focus.x + q.x, y = focus.y - 2 + q.y, z = focus.z + q.z;
    f.pos[o] = x; f.pos[o + 1] = y; f.pos[o + 2] = z;
    if (streak) { f.pos[o + 3] = x - wx * streak * 0.15; f.pos[o + 4] = y + streak; f.pos[o + 5] = z - wz * streak * 0.15; }
  }
  f.obj.geometry.attributes.position.needsUpdate = true;
}

// ---------------------------------------------------------------- snow mounds (one InstancedMesh, built on the first winter)
let mounds = null, moundData = null;
function buildMounds() {
  let seed = 1234567;
  const r = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
  moundData = [];
  // a drift at the foot of most trees, the rest scattered over open land (not on roads, water or farm fields)
  for (const t of trees) if (r() < 0.8) moundData.push([t.x + (r() - 0.5) * 1.2, t.z + (r() - 0.5) * 1.2, 0.9 + r() * 0.7, 0.35 + r() * 0.2, t.id]);
  for (let i = 0; i < 2000 && moundData.length < 260; i++) {
    const x = (r() - 0.5) * 180, z = (r() - 0.5) * 180, m = maskAt(x, z);
    if (landDist(x, z) < 2 || m.paved > 0.1 || m.asphalt > 0.05) continue;
    if (keepOut.some(k => Math.hypot(x - k.x, z - k.z) < k.r + 0.5)) continue;
    moundData.push([x, z, 0.5 + r() * 1.3, 0.18 + r() * 0.3, -1]);
  }
  const geo = new THREE.IcosahedronGeometry(1, 1);
  mounds = new THREE.InstancedMesh(geo, new THREE.MeshLambertMaterial({ color: '#f4f7ff', flatShading: true }), moundData.length);
  mounds.receiveShadow = true; mounds.castShadow = false;
  scene.add(mounds);
}
const mm = new THREE.Matrix4(), mq = new THREE.Quaternion(), mp = new THREE.Vector3(), ms = new THREE.Vector3(), my = new THREE.Vector3(0, 1, 0);
function updateMounds(k) {
  const q = Math.round(k * 50) / 50;   // only rewrite the matrices when the amount really changed
  if (q === cur.mounds) return;
  cur.mounds = q;
  if (q <= 0) { if (mounds) mounds.visible = false; return; }
  if (!mounds) buildMounds();
  mounds.visible = true;
  moundData.forEach(([x, z, w, h, tree], i) => {
    const down = tree >= 0 && trees[tree].down;   // no drift where a tree was cut down
    mounds.setMatrixAt(i, mm.compose(mp.set(x, groundY(x, z) - h * 0.25, z), mq.setFromAxisAngle(my, i * 1.7), ms.set(w * q, down ? 0 : h * q, w * 0.8 * q)));
  });
  mounds.instanceMatrix.needsUpdate = true;
  mounds.computeBoundingSphere();
}

// ---------------------------------------------------------------- per frame
let t = 0;
export function updateSeasonFx(dt, hour, focus) {
  t += dt;
  const d = today(), s = d.season, w = d.weather, k = ease(dt, 0.8);
  cur.grassH += (s.look.grassH - cur.grassH) * k; U.uGrassH.value = cur.grassH;
  cur.leafScale += (s.look.leafScale - cur.leafScale) * k; U.uLeafScale.value = cur.leafScale;
  if (cur.season !== d.seasonIndex) {   // switches that don't need easing
    cur.season = d.seasonIndex;
    const gl = groundLeaves.mesh;
    if (gl) { gl.visible = !!s.look.groundLeaves; if (s.look.groundLeaves) gl.material.color.set(s.look.groundLeaves); }
    const pc = s.particles || {};
    if (pc.kind && pc.kind !== 'none') { ambient.obj.material.color.set(pc.color); ambient.obj.material.size = pc.size; }
  }
  // season particles (lighter while it rains or snows), weather particles
  const pc = s.particles || {}, wet = Math.max(cur.rain, cur.snow);
  cur.amb += ((pc.kind && pc.kind !== 'none' ? 1 : 0) * (1 - wet * 0.7) - cur.amb) * ease(dt, 0.5);
  cur.rain += ((w.fx === 'rain' ? w.amount : 0) - cur.rain) * ease(dt, 1);
  cur.snow += ((w.fx === 'snow' ? w.amount : 0) - cur.snow) * ease(dt, 1);
  move(ambient, Math.round((pc.count || 0) * cur.amb), dt, focus, pc.fall || 0.6, pc.sway || 1, t);
  move(snow, Math.round(snow.n * cur.snow), dt, focus, 1.4, 0.7, t);
  move(rain, Math.round(rain.n * cur.rain), dt, focus, 17, 0, t, 1.1);
  // little splashes on the ground around the camera focus
  for (let n = Math.floor(cur.rain * 40 * dt + Math.random()); n > 0 && cur.rain > 0.2; n--) {
    const x = focus.x + frand(-16, 16), z = focus.z + frand(-16, 16);
    smoke.spawn(sp.set(x, Math.max(groundY(x, z), -0.3) + 0.04, z), sv.set(0, frand(0.6, 1.2), 0), frand(0.04, 0.07), 0.3, splashC, -2);
  }
  sfx.rain(cur.rain);
  // winter: dead grass patches, snow on props (engine/core.js snowCover) and snow mounds on the ground
  cur.dead += ((s.look.deadGrass || 0) - cur.dead) * k; U.uDead.value = cur.dead;
  const cover = Math.min(1, (s.look.snow || 0) + (s.look.snow ? cur.snow * 0.1 : 0));
  cur.cover += (cover - cur.cover) * (first ? 1 : 1 - Math.exp(-dt * 0.35)); U.uSnow.value = cur.cover;
  updateMounds(cur.cover);
  first = false;

  // environment flags for the survival conditions (Kedinginan, Kepanasan, Basah kuyup…)
  const night = hour >= 20 || hour < 6, noon = hour >= 11 && hour < 15.5;
  const onFlags = new Set([...(s.env || []), ...(night ? s.envNight || [] : []), ...(noon ? s.envNoon || [] : []), ...(w.env || [])]);
  for (const n of ENV_NAMES) setEnv(n, onFlags.has(n));
}
