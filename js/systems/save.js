// Save games. Every module that owns game state registers a *slice* of it; a save is just all slices together:
//   registerSave('fishing', {
//     version: 1,                       // bump when the shape of the data changes...
//     migrate(data, fromVersion) {},    // ...and upgrade older data here (optional)
//     save() { return {...} },          // plain JSON (numbers, strings, arrays, objects)
//     load(data) {},                    // apply it to the live game (may run mid-game: clean up the current state)
//     reset() {},                       // back to a fresh New Game; also used when an older save has no such slice
//     summary(data) { return '…' },     // optional short text for the save list, e.g. '12 ikan'
//   });
// So new features (fishing, hunger/thirst/stamina, farming…) only register their slice: old saves keep loading,
// the missing slice simply starts from reset().
//
// Storage: always a local copy (localStorage) + Firebase Realtime Database when configured (game/config.js).
// Cloud layout: <SAVE_ROOT>/<player>/meta/<slot> = meta, <SAVE_ROOT>/<player>/slots/<slot> = JSON string of the data
// (stored as a string because Firebase drops nulls/empty arrays and turns sparse arrays into objects).
import { emit } from '../engine/events.js';
import { createFirebase } from '../engine/firebase.js';
import { FIREBASE, SAVE_ROOT } from '../game/config.js';

export const SAVE_VERSION = 1;                       // version of the save envelope itself
export const SAVE_SLOTS = ['auto', 'slot1', 'slot2', 'slot3'];
// 'auto' = the save made when going to bed (key kept so older saves still load); 'reload' = dev-only hidden snapshot
const NAMES = { auto: 'Simpanan tidur', reload: 'Muat ulang (dev)' };
export const slotName = (s) => NAMES[s] || 'Slot ' + s.slice(4);

const parts = new Map();
export function registerSave(key, part) {
  if (parts.has(key)) console.warn(`save: slice '${key}' registered twice, the newer one wins (hot reload?)`);
  parts.set(key, { version: 1, ...part });
}

// ---------------------------------------------------------------- snapshot <-> live game
export const session = { playTime: 0, slot: null };   // seconds played in this save, slot it came from
function snapshot() {
  const data = {}, summary = [];
  for (const [key, p] of parts) {
    const d = p.save();
    data[key] = { v: p.version, d };
    const s = p.summary && p.summary(d);
    if (s) summary.push(s);
  }
  const meta = { version: SAVE_VERSION, savedAt: Date.now(), playTime: Math.round(session.playTime), summary: summary.join(' · ') };
  return { meta, data };
}
function apply(data) {
  for (const [key, p] of parts) {
    const slice = data[key];
    try {
      if (!slice) { p.reset(); continue; }
      let d = slice.d;
      if (slice.v !== p.version) {
        if (!p.migrate) { console.warn(`save: '${key}' v${slice.v} -> v${p.version} without migrate(), using defaults`); p.reset(); continue; }
        d = p.migrate(d, slice.v);
      }
      p.load(d);
    } catch (e) { console.error(`save: slice '${key}' failed to load, reset instead`, e); p.reset(); }
  }
}
export function newGame() {
  for (const p of parts.values()) p.reset();
  session.playTime = 0; session.slot = null;
  emit('save:applied', { slot: null });
}

// ---------------------------------------------------------------- storage backends
const fb = createFirebase(FIREBASE);
const LOCAL = (slot) => `tester.save.${slot}`;
const local = {
  read(slot) { try { return JSON.parse(localStorage.getItem(LOCAL(slot))); } catch { return null; } },
  write(slot, snap) { try { localStorage.setItem(LOCAL(slot), JSON.stringify(snap)); return true; } catch { return false; } },
};
export const cloud = { get enabled() { return fb.enabled; }, get signedIn() { return fb.signedIn; }, online: null };
const node = async () => `${SAVE_ROOT}/${await fb.id()}`;

// [{ slot, meta | null, where: 'cloud' | 'local' | null }], newest copy of each slot
export async function listSaves() {
  let remote = {};
  if (fb.enabled) {
    try { remote = (await fb.get(`${await node()}/meta`)) || {}; cloud.online = true; }
    catch (e) { console.warn('save: cloud list failed', e.message); cloud.online = false; }
  }
  return SAVE_SLOTS.map((slot) => {
    const l = local.read(slot)?.meta, r = remote[slot];
    if (r && (!l || r.savedAt >= l.savedAt)) return { slot, meta: r, where: 'cloud' };
    return { slot, meta: l || null, where: l ? 'local' : null };
  });
}
export async function latestSave() {
  const all = (await listSaves()).filter(s => s.meta);
  return all.sort((a, b) => b.meta.savedAt - a.meta.savedAt)[0] || null;
}

// returns 'cloud' | 'local' | null (failed everywhere). localOnly: skip the cloud (dev reload snapshot)
export async function saveGame(slot, { keepalive = false, localOnly = false } = {}) {
  const snap = snapshot();
  const okLocal = local.write(slot, snap);
  let where = okLocal ? 'local' : null;
  if (fb.enabled && !localOnly) {
    try {
      await fb.update(await node(), { [`meta/${slot}`]: snap.meta, [`slots/${slot}`]: JSON.stringify(snap.data) }, { keepalive });
      where = 'cloud'; cloud.online = true;
    } catch (e) { console.warn('save: cloud save failed, kept locally', e.message); cloud.online = false; }
  }
  if (where) { if (!localOnly) session.slot = slot; emit('save:saved', { slot, where, meta: snap.meta }); }
  return where;
}
// loads the newest copy of `slot`; returns 'cloud' | 'local' | null (nothing there)
export async function loadGame(slot) {
  const l = local.read(slot);
  let snap = null, where = null;
  if (fb.enabled) {
    try {
      const n = await node();
      const meta = await fb.get(`${n}/meta/${slot}`);
      if (meta && (!l || meta.savedAt >= l.meta.savedAt)) {
        const raw = await fb.get(`${n}/slots/${slot}`);
        if (raw) { snap = { meta, data: JSON.parse(raw) }; where = 'cloud'; local.write(slot, snap); }
      }
      cloud.online = true;
    } catch (e) { console.warn('save: cloud load failed, using the local copy', e.message); cloud.online = false; }
  }
  if (!snap && l) { snap = l; where = 'local'; }
  if (!snap) return null;
  apply(snap.data);
  session.playTime = snap.meta.playTime || 0; session.slot = slot;
  emit('save:applied', { slot, meta: snap.meta });
  return where;
}
export async function deleteSave(slot) {
  try { localStorage.removeItem(LOCAL(slot)); } catch { /* storage unavailable */ }
  if (fb.enabled) {
    try { await fb.update(await node(), { [`meta/${slot}`]: null, [`slots/${slot}`]: null }); }
    catch (e) { console.warn('save: cloud delete failed', e.message); }
  }
}

// ---------------------------------------------------------------- play clock (called every frame by main.js)
// No timed autosave: like Harvest Moon the game is saved when you go to bed (features/survival -> saveGame('auto')).
export function updateSave(dt, playing) {
  if (playing) session.playTime += dt;
}
