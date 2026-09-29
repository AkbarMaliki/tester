// Entry point: boots the world, then runs the frame loop. Keep this file thin: it only decides ORDER.
// What happens inside each step lives in the module it calls (see ARCHITECTURE.md > Frame loop).
import * as THREE from 'three';
import { $ } from './engine/util.js';
import { scene, composer, world, U, dynamics, adaptResolution } from './engine/core.js';
import { emit } from './engine/events.js';
import { registerFeatures, buildFeatures, updateFeatures } from './engine/features.js';
import { batchStatic, mergeByMaterial, meshChildren } from './engine/batch.js';
import { paletteAt, advanceTime, time } from './systems/daynight.js';
import { keys } from './systems/input.js';
import { updateStats } from './systems/stats.js';
import { updateCalendar } from './systems/calendar.js';
import { zones, updateZones } from './systems/interaction.js';
import { camTarget, updateCamera, snapCamera } from './systems/camera.js';
import { buildWorld } from './world/layout.js';
import { updateSky, updateAmbient } from './world/sky.js';
import { updateWind } from './world/effects.js';
import { applySeason, updateSeasonFx } from './world/seasons.js';
import { updateFootprints } from './world/footprints.js';
import { car, updateDriving, syncCar, updateCarEffects } from './entities/car/car.js';
import { avatar, player, updatePlayer, syncPlayer, camActor, carKeys, carPrompt, zoneOrigin, cheer, initPlayerPhysics } from './entities/player/controller.js';
import { ui, modalOpen, windEnabled, setPrompt, showHint, updateClockUI, countFrame, setProgress, restoreQuality, setManualHour, setQuality } from './ui/ui.js';
import { initInventoryUI } from './ui/inventory.js';
import { initSurvivalUI, updateSurvivalUI } from './ui/survival.js';
import { initCalendarUI, updateDateUI } from './ui/calendar.js';
import { initMapUI, updateMap, mapFrozen, mapAfterRender } from './ui/map.js';
import { initMenu, autoStart } from './ui/menu.js';
import { updateSave } from './systems/save.js';
import features from './features/index.js';

registerFeatures(features);
initInventoryUI();
initSurvivalUI();
initCalendarUI();
initMapUI();

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
  updateCalendar();
  const pal = applySeason(paletteAt(hour), dt);
  updateClockUI(hour);
  updateDateUI();

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

  // 4. survival stats + features, 5. camera + world visuals, 6. interaction prompt, 7. render
  updateStats(dt, active);
  frame.t = t; frame.active = active;
  updateFeatures(dt, frame);
  if (!updateMap()) updateCamera(dt, camActor());   // the map view flies the camera itself
  updateSky(hour, pal, camTarget);
  updateCarEffects(dt, pal);
  updateWind(dt, camTarget, windEnabled());
  updateSeasonFx(dt, hour, camTarget);
  updateFootprints(dt);
  updateAmbient(t);
  setPrompt(updateZones(t, zoneOrigin(), carPrompt()));
  updateSurvivalUI(dt);

  if (!mapFrozen()) { composer.render(); mapAfterRender(); }   // an open map is a still picture: drawn once, then frozen
  adaptResolution();
  updateSave(dt, active);
  countFrame(dt);
  requestAnimationFrame(tick);
}

// called by the main menu (ui/menu.js) once a new game is set up or a save is loaded
const params = new URLSearchParams(location.search);
function startGame({ fresh }) {
  // debug via URL: ?jam=17.5 fixes the hour of a new game
  if (fresh && params.has('jam')) { setManualHour(parseFloat(params.get('jam')) % 24); $('speedSel').value = '0'; time.speed = 0; }
  ui.started = true;
  showHint(player.mode === 'car', 12000);
  if (fresh) cheer();
  emit('game:start');
}

build().then(() => {
  restoreQuality();
  // debug via URL: ?kualitas=mid
  if (params.has('kualitas')) { $('qualitySel').value = params.get('kualitas'); setQuality(params.get('kualitas')); }
  snapCamera();
  window.__tester = { tick, camTarget, player };   // handle for automated screenshot tests
  emit('world:ready');
  initMenu(startGame);
  if (location.hash === '#auto') autoStart();
  tick();
}).catch((err) => {
  console.error(err);
  $('loadText').innerHTML = `<span class="err">Gagal memuat: ${err.message}</span>`;
});
