// Time of day: palettes from public/assets/data/palettes.json, blended by hour.
import * as THREE from 'three';
import { lerp, smooth, loadAsset } from '../engine/util.js';
import { registerSave } from './save.js';

const data = await loadAsset('data/palettes.json', 'json');
const toPal = (o) => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, typeof v === 'string' ? new THREE.Color(v) : v]));
const PALS = Object.fromEntries(Object.entries(data.palettes).map(([k, v]) => [k, toPal(v)]));
const KEYS = data.keys.map(([h, name]) => [h, PALS[name]]);

const pal = toPal(Object.fromEntries(Object.entries(data.palettes.night).map(([k, v]) => [k, typeof v === 'string' ? '#000' : 0])));
export function paletteAt(h) {
  let i = 0; while (i < KEYS.length - 2 && h >= KEYS[i + 1][0]) i++;
  const [h0, a] = KEYS[i], [h1, b] = KEYS[i + 1];
  const t = smooth(0, 1, (h - h0) / (h1 - h0));
  for (const k in pal) pal[k] instanceof THREE.Color ? pal[k].lerpColors(a[k], b[k], t) : (pal[k] = lerp(a[k], b[k], t));
  return pal;
}
export function dayLabel(h) {
  if (h < 4.5 || h >= 20.4) return 'Malam';
  if (h < 6) return 'Subuh'; if (h < 7.5) return 'Fajar'; if (h < 11) return 'Pagi';
  if (h < 15) return 'Siang'; if (h < 17.3) return 'Sore'; if (h < 18.6) return 'Matahari terbenam'; return 'Senja';
}
export const time = { real: true, hour: 12, speed: 60 };
const fmtHour = (h) => String(Math.floor(h)).padStart(2, '0') + ':' + String(Math.floor(h * 60) % 60).padStart(2, '0');
registerSave('time', {
  save: () => ({ hour: +time.hour.toFixed(3), real: time.real, speed: time.speed }),
  load(d) { time.real = !!d.real; time.hour = d.hour ?? 12; time.speed = d.speed ?? 60; },
  reset() { time.real = true; time.speed = 60; },
  summary: (d) => `${fmtHour(d.hour)} ${dayLabel(d.hour)}`,
});
export const nowHour = () => { const d = new Date(); return d.getHours() + d.getMinutes() / 60 + d.getSeconds() / 3600; };
export function advanceTime(dt) {
  time.hour = time.real ? nowHour() : (time.hour + dt * time.speed / 3600) % 24;
  return time.hour;
}
