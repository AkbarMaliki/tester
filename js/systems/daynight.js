// Time of day: palettes from public/assets/data/palettes.json, blended by hour.
import * as THREE from 'three';
import { lerp, smooth, loadAsset } from '../engine/util.js';
import { emit } from '../engine/events.js';
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
// day = days since the game started (0 = first day); systems/calendar.js turns it into season / date / year
export const time = { real: true, hour: 12, speed: 60, day: 0 };
const fmtHour = (h) => String(Math.floor(h)).padStart(2, '0') + ':' + String(Math.floor(h * 60) % 60).padStart(2, '0');
registerSave('time', {
  version: 2,
  migrate: (d) => ({ ...d, day: 0 }),   // v1 had no day counter
  save: () => ({ hour: +time.hour.toFixed(3), real: time.real, speed: time.speed, day: time.day }),
  load(d) { time.real = !!d.real; time.hour = d.hour ?? 12; time.speed = d.speed ?? 60; time.day = d.day ?? 0; },
  reset() { time.real = true; time.speed = 60; time.day = 0; },
  summary: (d) => `${fmtHour(d.hour)} ${dayLabel(d.hour)}`,
});
// jump the clock forward (sleeping, fainting…). Leaves real-time mode, since the real clock can't be skipped.
export function skipTime(hours) {
  if (time.real) { time.real = false; time.hour = nowHour(); }
  const h = time.hour + hours;
  time.day += Math.floor(h / 24);
  time.hour = h % 24;
  emit('time:skipped', { hours });
}
export const nowHour = () => { const d = new Date(); return d.getHours() + d.getMinutes() / 60 + d.getSeconds() / 3600; };
// only the clock running past midnight starts a new day (moving the hour slider back and forth doesn't)
export function advanceTime(dt) {
  if (time.real) {
    const h = nowHour();
    if (h < time.hour - 12) time.day++;
    time.hour = h;
  } else {
    const h = time.hour + dt * time.speed / 3600;
    if (h >= 24) time.day++;
    time.hour = h % 24;
  }
  return time.hour;
}
