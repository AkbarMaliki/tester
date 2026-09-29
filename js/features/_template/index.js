// TEMPLATE, not registered. Copy this folder to js/features/<name>/, rename the id,
// then add it to js/features/index.js. Checklist: js/features/README.md.
import * as THREE from 'three';
import { scene, lam, mesh } from '../../engine/core.js';
import { on, emit } from '../../engine/events.js';
import { addZone } from '../../systems/interaction.js';
import { onKey } from '../../systems/input.js';
import { keepOut } from '../../world/worldmap.js';

const SPOT = { x: 0, z: 0 };   // tweakables at the top (or load them from public/assets/data/<name>.json via loadAsset)
const state = { active: false };

export default {
  id: 'template',

  // once, while the world is placed (before grass is baked): build meshes, physics, zones, listeners
  build(ctx) {
    mesh(new THREE.BoxGeometry(1, 1, 1), lam('#ffffff'), scene, SPOT.x, 0.5, SPOT.z);
    keepOut.push({ x: SPOT.x, z: SPOT.z, r: 2 });   // no grass/trees on top of it
    addZone({ pos: new THREE.Vector3(SPOT.x, 0, SPOT.z + 2), label: 'Contoh aksi', action: () => emit('template:used') });
    on('template:used', () => { state.active = !state.active; });
    onKey('KeyG', () => { /* feature hotkey while playing */ });
  },

  // every frame (optional): ctx = { t, player, active } — see main.js
  update(dt, ctx) {
  },
};
