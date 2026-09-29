// Entry point: builds the world, then runs the frame loop.
import * as THREE from 'three';
import { MAX_LAMPS, PLAYER_SPAWN } from './config.js';
import { $, clamp, lerp, smooth, nextFrame, loadAsset } from './util.js';
import { scene, camera, composer, hemi, sun, bloom, world, U, glowMats, dynamics, resetDynamic, adaptResolution } from './core.js';
import { paletteAt, advanceTime, time } from './palette.js';
import { bakeMask, keepOut, LOT } from './worldmap.js';
import { buildTerrain, buildWater, WU } from './terrain.js';
import { buildGrass, plantTrees, scatterRocks, scatterGroundLeaves } from './vegetation.js';
import * as props from './props.js';
import { car, updateDriving, syncCar, updateCarEffects } from './car.js';
import { avatar, player, updatePlayer, syncPlayer, camActor, carKeys, carPrompt, zoneOrigin, cheer, initPlayerPhysics } from './player.js';
import { WINDU, updateWind, flies } from './effects.js';
import { sfx } from './audio.js';
import { batchStatic, mergeByMaterial, meshChildren } from './batch.js';
import { updateOrbit, orbitOffset, setActorScale } from './orbit.js';
import { keys, ui, modalOpen, windEnabled, setPrompt, showHint, updateClockUI, countFrame, setProgress, restoreQuality, setManualHour, setQuality } from './ui.js';

// ---------------------------------------------------------------- build
async function build() {
  // props first: their keep-out areas shape the grass mask
  setProgress(0.05, 'Menata taman…');
  const zoneData = await loadAsset('data/zones.json', 'json');
  const actions = { resetBowling: () => resetDynamic(props.pins) };
  for (const b of zoneData.boards) props.board(b, actions);
  props.booth(38, 8, 0.2); props.booth(44.5, 9.5, 0.2); props.arcade(45, -1.5, -0.35);
  props.bowling(-27, 28);
  for (const a of [0.8, 1.9, 3.3, -0.75, -2.5]) props.bench(Math.cos(a) * 10.6, Math.sin(a) * 10.6, -a - Math.PI / 2);
  for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2 + 0.4; props.lampPost(Math.cos(a) * 12.2, Math.sin(a) * 12.2, i < 6); }
  for (const [x, z] of [[20, 5], [-14, 16], [2, -27], [5, 20], [41, -12], [-38, 22], [30, 12]]) props.lampPost(x, z, props.lampLights.length < 9);
  for (const [x, z] of [[4, -3.5], [-6, 9], [9, 8], [35, 0], [-19, 30], [-5, -14], [47, 5], [2, -40]]) props.groundLantern(x, z);
  keepOut.push({ x: 0, z: 0, r: 13 });
  props.dock();
  await nextFrame();

  setProgress(0.15, 'Mengukir danau…');
  bakeMask(); await nextFrame();
  buildTerrain(); buildWater(); props.parking(); props.ramp(-16, LOT.z, Math.PI / 2);
  await nextFrame();

  setProgress(0.35, 'Menanam rumput…');
  const blades = buildGrass(); await nextFrame();

  setProgress(0.55, 'Menanam pohon…');
  const veg = plantTrees();
  scatterRocks(140); scatterGroundLeaves(3000);
  await nextFrame();

  setProgress(0.75, 'Menyusun peti & huruf…');
  const s = 1.25;
  for (let row = 0; row < 3; row++) for (let i = 0; i < 3 - row; i++) props.crate(7.5 + (i - (2 - row) / 2) * (s + 0.02), s / 2 + row * s + 0.01, 3.5);
  props.crate(40, s / 2, -6); props.crate(41.4, s / 2, -6.3);
  props.barrel(-7.5, 3, '#e07a2a'); props.barrel(-8.4, 4.2, '#4b57c9'); props.barrel(-7.2, 4.6, '#e07a2a'); props.barrel(22, -3, '#4b57c9');
  props.lampPositions.slice(0, MAX_LAMPS).forEach((p, i) => U.uLamps.value[i].copy(p));
  try { await props.buildLetters(); } catch (err) { console.warn('font failed, skipping letters', err); }
  console.log(`world: ${blades} grass blades, ${veg.trees} trees, ${veg.bushes} bushes, ${veg.leaves} leaves`);
  initPlayerPhysics();
  // draw-call batching: static props per material + 30 m cell, each physics prop into one mesh per material
  let merged = batchStatic(scene, [car, avatar, ...dynamics.map(d => d.mesh), ...props.zones.map(z => z.dia)]);
  for (const d of dynamics) if (!d.mesh.isMesh) merged += mergeByMaterial(d.mesh, meshChildren(d.mesh));
  console.log(`batching: ${merged} meshes merged away`);
  setProgress(1, 'Siap!');
}

// ---------------------------------------------------------------- per-frame helpers
const clock = new THREE.Clock();
const camTarget = new THREE.Vector3(PLAYER_SPAWN.x, 0.55, PLAYER_SPAWN.z), camLead = new THREE.Vector3(), camFollow = camTarget.clone();
const tmpV = new THREE.Vector3(), tmpV2 = new THREE.Vector3();

function updateSky(h, p) {
  scene.background.copy(p.sky); scene.fog.color.copy(p.sky); WU.uFog.value.copy(p.sky);
  U.uGround.value.copy(p.ground); U.uPaved.value.copy(p.paved); U.uAsphalt.value.copy(p.asphalt);
  U.uGrassA.value.copy(p.grassA); U.uGrassB.value.copy(p.grassB); U.uShadowTint.value.copy(p.shadow); U.uLeafTint.value.copy(p.leaf);
  WU.uDeep.value.copy(p.deep); WU.uShallow.value.copy(p.shallow); WU.uFoam.value.copy(p.foam); WU.uFoamI.value = p.foamI;
  hemi.color.copy(p.hemiS); hemi.groundColor.copy(p.hemiG); hemi.intensity = p.hemiI;
  sun.color.copy(p.sunC); sun.intensity = p.sunI;
  U.uLampI.value = p.lamp; U.uHeadI.value = p.lamp;
  bloom.strength = p.bloom;
  WINDU.uColor.value.copy(p.wind).multiplyScalar(p.windI * 0.6);
  flies.material.opacity = 0.9 * smooth(0.4, 0.9, p.lamp);
  for (const l of props.lampLights) l.intensity = 22 * p.lamp;
  for (const g of glowMats) g.m.color.copy(g.base).multiplyScalar(lerp(g.dayI, g.nightI, p.lamp));
  // sun by day, moon by night (kept above the horizon so shadows stay readable)
  const e = Math.sin((h - 6) / 12 * Math.PI);
  const isDay = e > 0.02;
  const az = isDay ? (h - 6) / 12 * Math.PI : ((h - 18 + 24) % 24) / 12 * Math.PI;
  const el = Math.max(isDay ? Math.asin(clamp(e, 0, 1)) : Math.asin(clamp(-e, 0, 1)) * 0.6 + 0.45, 0.38);
  tmpV.set(-Math.cos(az) * Math.cos(el), Math.sin(el), -0.45 * Math.cos(el) - 0.3).normalize();
  sun.position.copy(camTarget).addScaledVector(tmpV, 60); sun.target.position.copy(camTarget);
}

// follows whoever is in control: the kid on foot, the car while driving
function updateCamera(dt) {
  const a = camActor();
  setActorScale(a.scale);
  camLead.lerp(tmpV2.set(a.vel.x, 0, a.vel.z).multiplyScalar(a.lead), 1 - Math.exp(-dt * 2.5));
  camTarget.lerp(tmpV.copy(a.pos).add(camLead), 1 - Math.exp(-dt * 7));
  // the eye trails the target a little (same feel as before) but always sits on the orbit sphere
  camFollow.lerp(camTarget, 1 - Math.exp(-dt * 10));
  updateOrbit(dt);
  camera.position.copy(camFollow).add(orbitOffset(tmpV));
  camera.position.y = Math.max(camera.position.y, 1);
  camera.lookAt(camTarget);
}

function updateZones(t) {
  let near = null, best = 3.2;
  const o = zoneOrigin();
  for (const z of props.zones) {
    z.dia.rotation.y = t * 1.5; z.dia.position.y = 1.4 + Math.sin(t * 2.5) * 0.1;
    const d = Math.hypot(o.x - z.pos.x, o.z - z.pos.z);
    if (d < best) { best = d; near = z; }
  }
  const cz = carPrompt();
  if (cz && (!near || best > 1.6)) near = cz;
  for (const z of props.zones) z.ring.material.opacity += ((z === near ? 0.95 : 0.3) - z.ring.material.opacity) * 0.15;
  setPrompt(near);
}

// ---------------------------------------------------------------- loop
let wasDriving = false;
export function tick() {
  const dt = Math.min(clock.getDelta(), 1 / 20);
  const t = (U.uTime.value += dt);
  const hour = advanceTime(dt);
  const pal = paletteAt(hour);
  updateClockUI(hour);

  const active = ui.started && !modalOpen();
  updatePlayer(dt, keys, active);
  updateDriving(dt, carKeys(keys), active && player.mode === 'car', player.mode === 'car');
  world.step(1 / 120, dt, 10);
  syncCar();
  syncPlayer(dt);
  if (player.mode === 'car' ? !wasDriving : wasDriving && player.mode === 'foot') { wasDriving = !wasDriving; showHint(wasDriving); }
  for (const d of dynamics) {
    d.mesh.position.copy(d.body.interpolatedPosition); d.mesh.quaternion.copy(d.body.interpolatedQuaternion);
    if (d.body.position.y < -8) { d.body.position.copy(d.home.p); d.body.velocity.setZero(); d.body.angularVelocity.setZero(); }
  }

  updateCamera(dt);
  updateSky(hour, pal);
  updateCarEffects(dt, pal);
  updateWind(dt, camTarget, windEnabled());
  flies.position.y = Math.sin(t * 0.7) * 0.3; flies.rotation.y = Math.sin(t * 0.05) * 0.03;
  updateZones(t);

  composer.render();
  adaptResolution();
  countFrame(dt);
  requestAnimationFrame(tick);
}

$('start').onclick = () => {
  sfx.init(); sfx.pop();
  ui.started = true;
  $('loader').style.opacity = 0;
  setTimeout(() => $('loader').remove(), 800);
  showHint(false, 12000);
  cheer();
};

build().then(() => {
  restoreQuality();
  // debug via URL: ?jam=17.5 (fixed hour), ?kualitas=mid
  const params = new URLSearchParams(location.search);
  if (params.has('jam')) { setManualHour(parseFloat(params.get('jam')) % 24); $('speedSel').value = '0'; time.speed = 0; }
  if (params.has('kualitas')) { $('qualitySel').value = params.get('kualitas'); setQuality(params.get('kualitas')); }
  camera.position.copy(camTarget).add(orbitOffset(tmpV)); camera.lookAt(camTarget);
  $('start').style.display = 'block';
  window.__tester = { tick, camTarget, player };   // handle for automated screenshot tests
  if (location.hash === '#auto') $('start').click();
  tick();
}).catch((err) => {
  console.error(err);
  $('loadText').innerHTML = `<span class="err">Gagal memuat: ${err.message}</span>`;
});
