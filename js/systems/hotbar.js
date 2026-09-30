// Hotbar: 9 shortcut slots holding item ids (not the items themselves: the count shown is what's in the bag), plus
// which slot is selected. Pure data + events, no DOM: the bar (ui/hotbar.js) draws it and decides what "use" means.
// Any item can be put on it by the player (bag panel); items whose def has `hotbarUse: true` (tools, seeds…) are
// added automatically when they first land in the bag, and their owner feature handles 'hotbar:use'.
import { on, emit } from '../engine/events.js';
import { registerSave } from './save.js';
import { inventory, itemDef } from './inventory.js';

export const HOTBAR = 9;
export const hotbar = { slots: Array(HOTBAR).fill(null), sel: 0 };

const changed = () => emit('hotbar:changed', hotbar);
export const selectedItem = () => hotbar.slots[hotbar.sel];
export const slotOf = (id) => hotbar.slots.indexOf(id);

// put `id` in slot i (moved there if it was already on the bar; whatever was in i swaps into its old place)
export function assign(i, id) {
  const old = slotOf(id);
  if (old === i) return;
  if (old >= 0) hotbar.slots[old] = hotbar.slots[i];
  hotbar.slots[i] = id;
  changed();
}
export function unassign(i) { if (hotbar.slots[i]) { hotbar.slots[i] = null; changed(); } }
// first free slot; returns its index (or where it already is), -1 = bar full
export function assignFree(id) {
  const have = slotOf(id);
  if (have >= 0) return have;
  const i = hotbar.slots.indexOf(null);
  if (i >= 0) assign(i, id);
  return i;
}
export function select(i) { if (i >= 0 && i < HOTBAR && i !== hotbar.sel) { hotbar.sel = i; changed(); } }
// next filled slot (dir 1 / -1)
export function selectNext(dir = 1) {
  for (let k = 1; k <= HOTBAR; k++) { const i = (hotbar.sel + dir * k + HOTBAR * 2) % HOTBAR; if (hotbar.slots[i]) { select(i); return; } }
}

on('inventory:added', ({ id }) => { if (itemDef(id).hotbarUse && slotOf(id) < 0) assignFree(id); });

registerSave('hotbar', {
  save: () => ({ slots: [...hotbar.slots], sel: hotbar.sel }),
  load(d) {
    hotbar.slots = Array.from({ length: HOTBAR }, (_, i) => d.slots?.[i] || null);
    hotbar.sel = Math.min(HOTBAR - 1, Math.max(0, d.sel || 0));
    changed();
  },
  // new game (bag is empty then) or a save from before the hotbar: fill it with the auto items already in the bag
  reset() {
    hotbar.slots = Array(HOTBAR).fill(null); hotbar.sel = 0;
    for (const s of inventory.slots) if (s && itemDef(s.id).hotbarUse && slotOf(s.id) < 0) { const i = hotbar.slots.indexOf(null); if (i >= 0) hotbar.slots[i] = s.id; }
    changed();
  },
});
