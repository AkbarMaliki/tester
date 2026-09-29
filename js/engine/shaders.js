// Loads every GLSL file from public/assets/shaders (top-level await: importers wait until ready).
import { W, HALF, WATER_Y, MAX_LAMPS } from '../game/config.js';
import { loadAsset } from './util.js';

const FILES = [
  'common', 'ground.frag', 'grass.vert', 'grass.frag', 'leaves.vert', 'leaves.frag',
  'water.vert', 'water.frag', 'post.vert', 'scenepost.frag', 'wind.vert', 'wind.frag',
];
export const DEFINES = [
  `#define WORLD_HALF ${HALF.toFixed(1)}`, `#define WORLD_SIZE ${W.toFixed(1)}`,
  `#define WATER_Y ${WATER_Y.toFixed(2)}`, `#define MAX_LAMPS ${MAX_LAMPS}`, '',
].join('\n');

export const SH = {};
await Promise.all(FILES.map(async (f) => { SH[f] = await loadAsset(`shaders/${f}.glsl`); }));

// "painted" snippets are split in a head (declarations) and a main part by a `//#main` line
export function sections(src = '') {
  const i = src.indexOf('//#main');
  return i < 0 ? { head: src, main: '' } : { head: src.slice(0, i), main: src.slice(i + 7) };
}
export const full = (name) => DEFINES + SH[name];
