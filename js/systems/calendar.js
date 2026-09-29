// Calendar on top of the day counter in systems/daynight.js (time.day): seasons, dates, years, weekdays,
// festivals and the weather of each day. Data: public/assets/data/calendar.json. Pure data + events, no DOM / 3D.
//   today() -> { index, day (1..daysPerSeason), season, seasonIndex, year, weekday, weather }
//   emits calendar:day (a new day began) and calendar:season (… and it's a new season) while playing.
import { loadAsset } from '../engine/util.js';
import { on, emit } from '../engine/events.js';
import { time } from './daynight.js';

export const CAL = await loadAsset('data/calendar.json', 'json');
const N = CAL.daysPerSeason, S = CAL.seasons.length;

// weather is fixed per day (a hash of the day number, weighted by the season's chances), so tomorrow can be forecast
function hash(n) {
  let x = Math.imul((n + 1) ^ 0x5bd1e995, 0x27d4eb2d) >>> 0;
  x ^= x >>> 15; x = Math.imul(x, 0x85ebca6b) >>> 0; x ^= x >>> 13;
  return x / 4294967296;
}
export function weatherOn(day) {
  const season = CAL.seasons[Math.floor(day / N) % S];
  const chances = Object.entries(season.weather || { cerah: 1 });
  const total = chances.reduce((t, [, p]) => t + p, 0);
  let r = hash(day) * total, id = chances[0][0];
  for (const [k, p] of chances) { if ((r -= p) < 0) { id = k; break; } }
  return { id, ...CAL.weathers[id] };
}
// debug: force today's weather (null = back to the forecast)
let forced = null;   // { day, weather }: only for the day it was forced on
export function forceWeather(id) { forced = id && CAL.weathers[id] ? { day: time.day, weather: { id, ...CAL.weathers[id] } } : null; }
export function dateOf(day) {
  const d = Math.max(0, Math.floor(day)), s = Math.floor(d / N) % S;
  const weather = forced && forced.day === d ? forced.weather : weatherOn(d);
  return { index: d, day: (d % N) + 1, season: CAL.seasons[s], seasonIndex: s, year: Math.floor(d / (N * S)) + 1, weekday: CAL.weekdays[d % 7], weather };
}
export const today = () => dateOf(time.day);
export const eventsOn = (seasonId, day) => CAL.events.filter(e => e.season === seasonId && e.day === day);
export const fmtDate = (d) => `${d.season.short} ${d.day} · Thn ${d.year}`;

// jump to another day (debug tools); the day/season events fire on the next update
export function setDay(day) { time.day = Math.max(0, Math.floor(day)); }

// every frame from main.js: announce a new day / season. Loading a save or starting a new game resyncs silently.
let last = -1, lastSeason = -1;
const sync = () => { last = time.day; lastSeason = today().seasonIndex; };
on('save:applied', sync);
export function updateCalendar() {
  if (time.day === last) return;
  if (last < 0) { sync(); return; }
  const d = today(), newSeason = d.seasonIndex !== lastSeason;
  sync();
  emit('calendar:day', d);
  if (newSeason) emit('calendar:season', d);
}
