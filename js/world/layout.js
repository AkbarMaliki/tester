// Level layout: where every prop goes and the order the world is built in.
// Move/add park furniture here; self-contained gameplay (bowling, fishing...) belongs in js/features/.
import { MAX_LAMPS } from '../game/config.js';
import { nextFrame, loadAsset } from '../engine/util.js';
import { U, dynamics, resetDynamic } from '../engine/core.js';
import { registerSave } from '../systems/save.js';
import { bakeMask, keepOut, LOT } from './worldmap.js';
import { buildTerrain, buildWater } from './terrain.js';
import { buildGrass, plantTrees, scatterRocks, scatterGroundLeaves } from './vegetation.js';
import * as props from './props.js';

// progress(fraction, text) drives the loading bar; placeFeatures() builds js/features before the grass mask is baked
export async function buildWorld(progress, placeFeatures) {
  // props first: their keep-out areas shape the grass mask
  progress(0.05, 'Menata taman…');
  const zoneData = await loadAsset('data/zones.json', 'json');
  for (const b of zoneData.boards) props.board(b);
  props.booth(38, 8, 0.2); props.booth(44.5, 9.5, 0.2); props.arcade(45, -1.5, -0.35);
  for (const a of [0.8, 1.9, 3.3, -0.75, -2.5]) props.bench(Math.cos(a) * 10.6, Math.sin(a) * 10.6, -a - Math.PI / 2);
  for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2 + 0.4; props.lampPost(Math.cos(a) * 12.2, Math.sin(a) * 12.2, i < 6); }
  for (const [x, z] of [[20, 5], [-14, 16], [2, -27], [5, 20], [41, -12], [-38, 22], [30, 12]]) props.lampPost(x, z, props.lampLights.length < 9);
  for (const [x, z] of [[4, -3.5], [-6, 9], [9, 8], [35, 0], [-19, 30], [-5, -14], [47, 5], [2, -40]]) props.groundLantern(x, z);
  keepOut.push({ x: 0, z: 0, r: 13 });
  props.dock();
  await placeFeatures();
  await nextFrame();

  progress(0.15, 'Mengukir danau…');
  bakeMask(); await nextFrame();
  buildTerrain(); buildWater(); props.parking(); props.ramp(-16, LOT.z, Math.PI / 2);
  await nextFrame();

  progress(0.35, 'Menanam rumput…');
  const blades = buildGrass(); await nextFrame();

  progress(0.55, 'Menanam pohon…');
  const veg = plantTrees();
  scatterRocks(140); scatterGroundLeaves(3000);
  await nextFrame();

  progress(0.75, 'Menyusun peti & huruf…');
  const s = 1.25;
  for (let row = 0; row < 3; row++) for (let i = 0; i < 3 - row; i++) props.crate(7.5 + (i - (2 - row) / 2) * (s + 0.02), s / 2 + row * s + 0.01, 3.5);
  props.crate(40, s / 2, -6); props.crate(41.4, s / 2, -6.3);
  props.barrel(-7.5, 3, '#e07a2a'); props.barrel(-8.4, 4.2, '#4b57c9'); props.barrel(-7.2, 4.6, '#e07a2a'); props.barrel(22, -3, '#4b57c9');
  props.lampPositions.slice(0, MAX_LAMPS).forEach((p, i) => U.uLamps.value[i].copy(p));
  try { await props.buildLetters(); } catch (err) { console.warn('font failed, skipping letters', err); }
  console.log(`world: ${blades} grass blades, ${veg.trees} trees, ${veg.bushes} bushes, ${veg.leaves} leaves`);
}

// pushable props (letters, crates, bowling pins…): position + rotation by build order.
// If the world changed since the save (different count), they simply start at home.
const r3 = (v) => Math.round(v * 1000) / 1000;
registerSave('props', {
  save: () => dynamics.map(({ body: { position: p, quaternion: q } }) => [p.x, p.y, p.z, q.x, q.y, q.z, q.w].map(r3)),
  load(d) {
    if (d.length !== dynamics.length) { resetDynamic(dynamics); return; }
    dynamics.forEach(({ body: b }, i) => {
      const [x, y, z, qx, qy, qz, qw] = d[i];
      b.position.set(x, y, z); b.quaternion.set(qx, qy, qz, qw).normalize();
      b.previousPosition.copy(b.position); b.interpolatedPosition.copy(b.position);
      b.previousQuaternion.copy(b.quaternion); b.interpolatedQuaternion.copy(b.quaternion);
      b.velocity.setZero(); b.angularVelocity.setZero(); b.wakeUp();
    });
  },
  reset: () => resetDynamic(dynamics),
});
