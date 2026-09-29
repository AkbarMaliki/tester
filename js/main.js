// Entry point: boots the world, then runs the frame loop. Keep this file thin: it only decides ORDER.
// What happens inside each step lives in the module it calls (see ARCHITECTURE.md > Frame loop).
import * as THREE from 'three';
import { $ } from './engine/util.js';
import { scene, composer, world, U, dynamics, adaptResolution } from './engine/core.js';
import { emit } from './engine/events.js';
import { registerFeatures, buildFeatures, updateFeatures } from './engine/features.js';
import { batchStatic, mergeByMaterial, meshChildren } from './engine/batch.js';
import { sfx } from './engine/audio.js';
import { paletteAt, advanceTime, time } from './systems/daynight.js';
import { keys } from './systems/input.js';
import { zones, updateZones } from './systems/interaction.js';
import { camTarget, updateCamera, snapCamera } from './systems/camera.js';
import { buildWorld } from './world/layout.js';
import { updateSky, updateAmbient } from './world/sky.js';
import { updateWind } from './world/effects.js';
import { car, updateDriving, syncCar, updateCarEffects } from './entities/car/car.js';
import { avatar, player, updatePlayer, syncPlayer, camActor, carKeys, carPrompt, zoneOrigin, cheer, initPlayerPhysics } from './entities/player/controller.js';
import { ui, modalOpen, windEnabled, setPrompt, showHint, updateClockUI, countFrame, setProgress, restoreQuality, setManualHour, setQuality } from './ui/ui.js';
import features from './features/index.js';

registerFeatures(features);

// ---------------------------------------------------------------- build
async function build() {
  await buildWorld(setProgress, () => buildFeatures({ player }));
  initPlayerPhysics();
  // draw-call batching: static props per material + 30 m cell, each physics prop into one mesh per material
  let merged = batchStatic(scene, [car, avatar, ...dynamics.map(d => d.mesh), ...zones.map(z => z.dia).filter(Boolean)]);
  for (const d of dynamics) if (!d.mesh.isMesh) merged += mergeByMaterial(d.mesh, meshChildren(d.mesh));
  console.log(`batching: ${merged} meshes merged away`);
  setProgress(1, 'Siap!');
}

// ---------------------------------------------------------------- loop
const clock = new THREE.Clock();
const frame = { t: 0, player, active: false };   // ctx handed to features every frame
let wasDriving = false;
export function tick() {
  const dt = Math.min(clock.getDelta(), 1 / 20);
  const t = (U.uTime.value += dt);
  const hour = advanceTime(dt);
  const pal = paletteAt(hour);
  updateClockUI(hour);

  // 1. input -> entities, 2. physics step, 3. sync meshes to bodies
  const active = ui.started && !modalOpen();
  updatePlayer(dt, keys, active);
  updateDriving(dt, carKeys(keys), active && player.mode === 'car', player.mode === 'car');
  world.step(1 / 120, dt, 10);
  syncCar();
  syncPlayer(dt);
  if (player.mode === 'car' ? !wasDriving : wasDriving && player.mode === 'foot') { wasDriving = !wasDriving; showHint(wasDriving); emit('player:mode', player.mode); }
  for (const d of dynamics) {
    d.mesh.position.copy(d.body.interpolatedPosition); d.mesh.quaternion.copy(d.body.interpolatedQuaternion);
    if (d.body.position.y < -8) { d.body.position.copy(d.home.p); d.body.velocity.setZero(); d.body.angularVelocity.setZero(); }
  }

  // 4. features, 5. camera + world visuals, 6. interaction prompt, 7. render
  frame.t = t; frame.active = active;
  updateFeatures(dt, frame);
  updateCamera(dt, camActor());
  updateSky(hour, pal, camTarget);
  updateCarEffects(dt, pal);
  updateWind(dt, camTarget, windEnabled());
  updateAmbient(t);
  setPrompt(updateZones(t, zoneOrigin(), carPrompt()));

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
  emit('game:start');
};

build().then(() => {
  restoreQuality();
  // debug via URL: ?jam=17.5 (fixed hour), ?kualitas=mid
  const params = new URLSearchParams(location.search);
  if (params.has('jam')) { setManualHour(parseFloat(params.get('jam')) % 24); $('speedSel').value = '0'; time.speed = 0; }
  if (params.has('kualitas')) { $('qualitySel').value = params.get('kualitas'); setQuality(params.get('kualitas')); }
  snapCamera();
  $('start').style.display = 'block';
  window.__tester = { tick, camTarget, player };   // handle for automated screenshot tests
  emit('world:ready');
  if (location.hash === '#auto') $('start').click();
  tick();
}).catch((err) => {
  console.error(err);
  $('loadText').innerHTML = `<span class="err">Gagal memuat: ${err.message}</span>`;
});
