// Inventory: item definitions + a fixed grid of slots holding stacks, plus the one item held in the hands
// (Harvest Moon style: you carry one thing over your head, the rest lives in the bag).
// Pure data + events, no DOM and no 3D: the HUD (ui/inventory.js) and features only talk to it through here.
//   item def = { id, name, desc?, stack?: max per slot, icon?: image url, color?: fallback css colour, price? }
import { emit } from '../engine/events.js';
import { registerSave } from './save.js';

export const SLOTS = 20;
const defs = new Map();
export const inventory = {
  slots: Array.from({ length: SLOTS }, () => null),   // { id, n } | null
  held: null,                                        // item id carried in the hands, or null
};

export function defineItem(def) { defs.set(def.id, { stack: 99, ...def }); return defs.get(def.id); }
export const itemDef = (id) => defs.get(id) || { id, name: id, stack: 99 };

const changed = () => emit('inventory:changed', inventory);

// how many of `id` still fit in the bag
export function roomFor(id) {
  const max = itemDef(id).stack;
  let room = 0;
  for (const s of inventory.slots) room += !s ? max : s.id === id ? max - s.n : 0;
  return room;
}
// adds up to n (fills existing stacks first), returns how many went in; emits inventory:full when some didn't fit
export function addItem(id, n = 1) {
  const max = itemDef(id).stack, slots = inventory.slots;
  let left = n;
  for (const s of slots) if (left && s && s.id === id && s.n < max) { const k = Math.min(max - s.n, left); s.n += k; left -= k; }
  for (let i = 0; i < slots.length && left; i++) if (!slots[i]) { const k = Math.min(max, left); slots[i] = { id, n: k }; left -= k; }
  const added = n - left;
  if (added) { changed(); emit('inventory:added', { id, n: added }); }
  if (left) emit('inventory:full', { id, n: left });
  return added;
}
// takes n from slot i, returns the item id (or null if the slot is empty)
export function takeFrom(i, n = 1) {
  const s = inventory.slots[i];
  if (!s) return null;
  s.n -= Math.min(n, s.n);
  if (s.n <= 0) inventory.slots[i] = null;
  changed();
  return s.id;
}
// removes n of `id` from anywhere in the bag (quests, shops, crafting). Returns false and changes nothing if there aren't enough.
export function removeItem(id, n = 1) {
  if (countOf(id) < n) return false;
  const slots = inventory.slots;
  for (let i = slots.length - 1; i >= 0 && n; i--) if (slots[i] && slots[i].id === id) { const k = Math.min(slots[i].n, n); slots[i].n -= k; n -= k; if (!slots[i].n) slots[i] = null; }
  changed();
  return true;
}
export const countOf = (id) => inventory.slots.reduce((c, s) => c + (s && s.id === id ? s.n : 0), 0);

// drag & drop: merge into the same item's stack, otherwise swap the two slots
export function moveSlot(a, b) {
  const s = inventory.slots, A = s[a], B = s[b];
  if (a === b || !A) return;
  if (B && B.id === A.id) {
    const k = Math.min(itemDef(A.id).stack - B.n, A.n);
    B.n += k; A.n -= k; if (!A.n) s[a] = null;
  } else { s[a] = B; s[b] = A; }
  changed();
}
export function setHeld(id) { inventory.held = id; changed(); }

// the bag's contents (the held item belongs to whoever draws it: features/pickup saves that)
registerSave('inventory', {
  save: () => inventory.slots.map(s => (s ? [s.id, s.n] : 0)),
  load(d) {
    inventory.slots = Array.from({ length: SLOTS }, (_, i) => (d[i] && defs.has(d[i][0]) ? { id: d[i][0], n: d[i][1] } : null));
    changed();
  },
  reset() { inventory.slots = Array.from({ length: SLOTS }, () => null); changed(); },
  summary: (d) => { const n = d.reduce((c, s) => c + (s ? s[1] : 0), 0); return n ? `${n} barang` : ''; },
});
