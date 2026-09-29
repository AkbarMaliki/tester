// Character stats (The Long Dark style survival): a profile with attributes, four needs that drain over time
// (hunger, thirst, energy, bladder), two vitals (health, stamina) and effects (timed buffs/debuffs from food and
// actions, plus conditions that switch on/off with the meters). Needs shape the vitals: they cap max stamina/HP,
// speed up or stop regeneration, and at 0 they drain health.
// Pure data + rules, no DOM and no 3D. All numbers: public/assets/data/survival.json (design notes: SURVIVAL.md).
//   entities ask canRun / spendStamina / tryJump / speedMul, the HUD reads `stats` `derived` `shown`,
//   features call consume / addEffect / cure / sleep / revive. main.js calls updateStats every frame.
import { clamp, lerp, loadAsset } from '../engine/util.js';
import { emit } from '../engine/events.js';
import { registerSave } from './save.js';

export const RULES = await loadAsset('data/survival.json', 'json');
RULES.conditions.push(...(RULES.envConditions || []));   // season / weather conditions work like the meter ones
const B = RULES.base;
export const NEEDS = Object.keys(RULES.needs);          // hunger thirst energy bladder (100 = good)
export const METERS = [...NEEDS, 'health', 'stamina'];

export const stats = Object.fromEntries(METERS.map(k => [k, 100]));
export const profile = { name: RULES.profile.name, title: RULES.profile.title, attributes: { ...RULES.profile.attributes } };
const effects = new Map();                               // timed effects: id -> { left, total }
// what the rules work out every frame (read-only for everyone else)
export const derived = {
  fullHealth: 100, fullStamina: 100, maxHealth: 100, maxStamina: 100, healthRegen: 0, staminaRegen: 0, healthRate: 0, speed: 1, noRun: false,
  rates: Object.fromEntries(NEEDS.map(k => [k, 0])),   // per second, negative = draining
};
// active effects + conditions for the HUD: [{ id, def, left?, total? }] (conditions have no timer)
export const shown = [];

const att = (k) => (profile.attributes[k] ?? 5) - 5;     // -4..+5 around the average character
const MOD_KEYS = ['healthMax', 'staminaMax', 'healthRegen', 'staminaRegen', 'speed', 'health', 'noRun', ...NEEDS];
const mods = {};
// environment flags set by the world (season, weather, shelter): conditions with `env` need theirs switched on,
// `notEnv` switches a condition off (e.g. sheltered from rain), `unless` = timed effects that prevent it (warm drink)
export const env = {};
export function setEnv(k, v) { env[k] = !!v; }
let asleep = false;   // in bed: the weather can't reach you
const passes = (c) => Object.entries(c.above || {}).every(([k, v]) => stats[k] >= v) && Object.entries(c.below || {}).every(([k, v]) => stats[k] < v)
  && (!c.env || (!asleep && env[c.env])) && !(c.notEnv && env[c.notEnv]) && !(c.unless || []).some(id => effects.has(id));

let clock = 0, lastSpend = -9, running = false, downed = false;
let prevShown = new Set();

// ---------------------------------------------------------------- rules
function collect() {
  for (const k of MOD_KEYS) mods[k] = 0;
  shown.length = 0;
  const on = new Set(RULES.conditions.filter(passes).map(c => c.id));
  for (const c of RULES.conditions) if (on.has(c.id) && !on.has(c.hideIf)) shown.push({ id: c.id, def: c });
  for (const [id, e] of effects) shown.push({ id, def: RULES.effects[id], left: e.left, total: e.total });
  for (const s of shown) for (const k in s.def.mods) mods[k] += s.def.mods[k];
}
function derive(sleeping) {
  const d = derived, energyCap = lerp(RULES.energyMinCap, 1, clamp(stats.energy / RULES.energyFullAt, 0, 1));
  d.fullHealth = B.health * (1 + att('vitalitas') * 0.06);      // max without any penalty (HUD bar length)
  d.fullStamina = B.stamina * (1 + att('ketahanan') * 0.06);
  d.maxHealth = d.fullHealth * Math.max(0.2, 1 + mods.healthMax);
  d.maxStamina = d.fullStamina * Math.max(0.2, 1 + mods.staminaMax) * energyCap;
  d.staminaRegen = B.staminaRegen * (1 + att('ketahanan') * 0.05) * Math.max(0, 1 + mods.staminaRegen);
  const fed = Object.entries(RULES.healthRegenNeeds).every(([k, v]) => stats[k] >= v);
  d.healthRegen = fed ? B.healthRegen * (1 + att('vitalitas') * 0.08) * Math.max(0, 1 + mods.healthRegen) * (sleeping ? 2 : 1) : 0;
  d.healthRate = d.healthRegen + mods.health;
  d.speed = Math.max(0.4, 1 + mods.speed);
  d.noRun = mods.noRun > 0;
  const metab = 1 - att('metabolisme') * 0.05;
  for (const k of NEEDS) {
    const n = RULES.needs[k];
    if (sleeping && n.sleep) { d.rates[k] = n.sleep; continue; }
    d.rates[k] = -n.drain * metab * Math.max(0, 1 + mods[k]) * (sleeping ? n.sleepMul ?? 1 : running ? n.runMul : 1);
  }
}
function step(dt, sleeping) {
  clock += dt; asleep = sleeping;
  running = !sleeping && clock - lastSpend < 0.35;
  for (const [id, e] of effects) if ((e.left -= dt) <= 0) effects.delete(id);
  collect(); derive(sleeping);
  for (const k of NEEDS) stats[k] = clamp(stats[k] + derived.rates[k] * dt, 0, 100);
  if (clock - lastSpend > B.staminaDelay) stats.stamina += derived.staminaRegen * dt;
  stats.stamina = clamp(stats.stamina, 0, derived.maxStamina);
  stats.health = clamp(stats.health + derived.healthRate * dt, 0, derived.maxHealth);
}
// events for whatever switched on/off since last time: stats:effect { id, on, def }, and stats:depleted once at 0 HP
function announce() {
  const now = new Set(shown.map(s => s.id));
  for (const s of shown) if (!prevShown.has(s.id)) emit('stats:effect', { id: s.id, on: true, def: s.def });
  for (const id of prevShown) if (!now.has(id)) emit('stats:effect', { id, on: false, def: RULES.effects[id] || RULES.conditions.find(c => c.id === id) });
  prevShown = now;
  if (stats.health <= 0 && !downed) { downed = true; emit('stats:depleted', { meter: 'health' }); }
}

// re-apply the rules right away after a change from outside (also while paused, so the HUD/panels are current)
function refresh() {
  collect(); derive(false);
  stats.health = Math.min(stats.health, derived.maxHealth); stats.stamina = Math.min(stats.stamina, derived.maxStamina);
  announce();
}

// every frame from main.js; `playing` false = menus/modals open, the clock stands still
export function updateStats(dt, playing) {
  if (!playing) return;
  step(dt, false);
  announce();
}

// ---------------------------------------------------------------- movement (entities/player/controller.js)
// Starting a sprint needs runMin stamina; once running you may run it down to 0 (then: Ngos-ngosan).
export const canRun = () => !derived.noRun && stats.stamina > (running ? 0 : B.runMin);
export const speedMul = () => derived.speed;
export function spendStamina(n) {
  stats.stamina = Math.max(0, stats.stamina - n);
  lastSpend = clock;
  if (stats.stamina <= 0 && !effects.has('ngos')) addEffect('ngos');
}
export const runStamina = (dt) => spendStamina(B.runCost * (1 - att('ketahanan') * 0.05) * dt);
export function tryJump() {
  if (stats.stamina < B.jumpCost * 0.5) return false;
  spendStamina(B.jumpCost);
  return true;
}

// ---------------------------------------------------------------- effects
export function addEffect(id, { duration } = {}) {
  const def = RULES.effects[id];
  if (!def) { console.warn(`stats: unknown effect '${id}'`); return false; }
  // an active effect can block another one (antidote: can't get poisoned)
  if ([...effects.keys()].some(o => (RULES.effects[o].blocks || []).includes(id))) return false;
  let t = duration ?? def.duration;
  if (def.immunity) t *= 1 - att('imunitas') * 0.06;
  const e = effects.get(id);
  if (e) { e.left = Math.max(e.left, t); e.total = Math.max(e.total, e.left); } else effects.set(id, { left: t, total: t });
  refresh();
  return true;
}
export const hasEffect = (id) => effects.has(id) || shown.some(s => s.id === id);
export function removeEffect(id) { if (effects.delete(id)) refresh(); }
// removes every timed effect whose `cure` list has `how` (e.g. 'toilet'); returns the removed ids
export function cure(how) {
  const gone = [...effects.keys()].filter(id => (RULES.effects[id].cure || []).includes(how));
  for (const id of gone) effects.delete(id);
  if (gone.length) refresh();
  return gone;
}

// ---------------------------------------------------------------- eating, drinking, resting
// use = { hunger?, thirst?, energy?, bladder?, health?, stamina?, cure?: [tags], effects?: [{ id, chance }] } (items.json "use")
// Drinking/eating also fills the bladder. `cure` first (so an antidote's own buff can't be removed by it), then new effects.
// Returns { delta: { meter: change }, added: [effect ids], cured: [effect ids] } for toasts.
export function consume(use) {
  const delta = {}, added = [], cured = [];
  for (const how of use.cure || []) cured.push(...cure(how));
  const bump = (k, v) => { if (!v) return; const was = stats[k]; stats[k] = clamp(was + v, 0, k === 'health' ? derived.maxHealth : k === 'stamina' ? derived.maxStamina : 100); delta[k] = (delta[k] || 0) + stats[k] - was; };
  for (const k of METERS) if (k !== 'bladder') bump(k, use[k]);
  bump('bladder', (use.bladder || 0) - Math.max(0, use.thirst || 0) * RULES.bladderPerThirst - Math.max(0, use.hunger || 0) * RULES.bladderPerHunger);
  for (const { id, chance = 1 } of use.effects || []) {
    const def = RULES.effects[id];
    const p = def && def.immunity ? chance * (1 - att('imunitas') * 0.08) : chance;
    if (Math.random() < p && addEffect(id)) added.push(id);
  }
  refresh();
  return { delta, added, cured };
}
export function setMeter(k, v) { stats[k] = clamp(v, 0, k === 'health' ? derived.maxHealth : k === 'stamina' ? derived.maxStamina : 100); refresh(); }

// Sleep `hours` of game time (1 h = RULES.secondsPerGameHour of play). Needs keep draining slowly, energy refills,
// timed effects tick down. Wakes up early when health drops under wakeHealth (starving/thirsty in bed).
// Returns { hours actually slept, woke: 'rested' | 'hurt' }.
export function sleep(hours) {
  const S = RULES.secondsPerGameHour, before = { ...stats };
  let t = 0;
  while (t < hours * S) {
    step(1, true); t += 1;
    if (stats.health < RULES.wakeHealth && derived.healthRate < 0) break;
  }
  const slept = t / S;
  running = false; lastSpend = clock - 9; asleep = false;
  stats.stamina = derived.maxStamina;
  if (slept >= 6 && stats.health >= RULES.wakeHealth) addEffect('bugar');
  collect(); derive(false); announce();
  return { hours: slept, woke: slept < hours ? 'hurt' : 'rested', energy: stats.energy - before.energy };
}

// back on your feet after fainting (health hit 0): the worst is over, but you're weak
export function revive() {
  effects.clear();
  for (const k of NEEDS) stats[k] = Math.max(stats[k], 30);
  collect(); derive(false);
  stats.health = derived.maxHealth * 0.35; stats.stamina = derived.maxStamina * 0.5;
  downed = false;
  announce();
}

// ---------------------------------------------------------------- save / load
function resetAll() {
  for (const k of METERS) stats[k] = 100;
  effects.clear(); Object.assign(profile.attributes, RULES.profile.attributes);
  downed = false; lastSpend = clock - 9;
  collect(); derive(false); prevShown = new Set(shown.map(s => s.id));
}
const r1 = (x) => Math.round(x * 10) / 10;
registerSave('stats', {
  save: () => ({ m: Object.fromEntries(METERS.map(k => [k, r1(stats[k])])), fx: [...effects].map(([id, e]) => [id, r1(e.left), r1(e.total)]), p: { ...profile.attributes } }),
  load(d) {
    resetAll();
    for (const k of METERS) if (typeof d.m?.[k] === 'number') stats[k] = d.m[k];
    for (const [id, left, total] of d.fx || []) if (RULES.effects[id]) effects.set(id, { left, total: total || left });
    Object.assign(profile.attributes, d.p || {});
    collect(); derive(false); prevShown = new Set(shown.map(s => s.id));
    downed = false;   // loaded at 0 HP: faints on the next frame
  },
  reset: resetAll,
  summary: (d) => (d.m && d.m.health < 99.5 ? `❤ ${Math.round(d.m.health)}` : ''),
});
resetAll();
