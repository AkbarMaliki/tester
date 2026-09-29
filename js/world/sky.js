// Applies the time-of-day palette (systems/daynight.js) to everything in this world:
// sky, fog, ground/grass/water shaders, lights, lamps, glow materials, wind lines, fireflies, sun/moon position.
import * as THREE from 'three';
import { clamp, lerp, smooth } from '../engine/util.js';
import { scene, hemi, sun, bloom, U, glowMats } from '../engine/core.js';
import { WU } from './terrain.js';
import { WINDU, flies } from './effects.js';
import { lampLights } from './props.js';

const dir = new THREE.Vector3();
// h = hour (0-24), p = palette from paletteAt(h), focus = point the shadow camera follows
export function updateSky(h, p, focus) {
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
  for (const l of lampLights) l.intensity = 22 * p.lamp;
  for (const g of glowMats) g.m.color.copy(g.base).multiplyScalar(lerp(g.dayI, g.nightI, p.lamp));
  // sun by day, moon by night (kept above the horizon so shadows stay readable)
  const e = Math.sin((h - 6) / 12 * Math.PI);
  const isDay = e > 0.02;
  const az = isDay ? (h - 6) / 12 * Math.PI : ((h - 18 + 24) % 24) / 12 * Math.PI;
  const el = Math.max(isDay ? Math.asin(clamp(e, 0, 1)) : Math.asin(clamp(-e, 0, 1)) * 0.6 + 0.45, 0.38);
  dir.set(-Math.cos(az) * Math.cos(el), Math.sin(el), -0.45 * Math.cos(el) - 0.3).normalize();
  sun.position.copy(focus).addScaledVector(dir, 60); sun.target.position.copy(focus);
}

export function updateAmbient(t) {
  flies.position.y = Math.sin(t * 0.7) * 0.3; flies.rotation.y = Math.sin(t * 0.05) * 0.03;
}
