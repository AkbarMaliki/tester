// Shortcut bar (bottom centre): the 9 slots of systems/hotbar.js. 1-9 / V / click pick a slot, G uses it:
//   item with def.hotbarUse (farming tools, seeds…)  -> 'hotbar:use' { id }: the owning feature acts
//   food / drink (def.use)                            -> 'inventory:use' (features/survival eats it)
//   anything else                                     -> lift it over the head ('inventory:hold'), G again = back in the bag
// Right-click a slot to clear it. Items are put on the bar from the bag panel (ui/inventory.js: drag or "Shortcut").
// Optional item def extras for the bar: status() -> text after the name, meter() -> 0..1 gauge (watering can water).
import { $ } from '../engine/util.js';
import { on, emit } from '../engine/events.js';
import { sfx } from '../engine/audio.js';
import { onAction, onKey, keyOf } from '../systems/input.js';
import { hotbar, HOTBAR, selectedItem, select, selectNext, unassign } from '../systems/hotbar.js';
import { inventory, itemDef, countOf } from '../systems/inventory.js';
import { player } from '../entities/player/controller.js';
import { ui, toast } from './ui.js';

const have = (id) => countOf(id) + (inventory.held === id ? 1 : 0);
const bagSlot = (id) => inventory.slots.findIndex(s => s && s.id === id);

function use() {
  const id = selectedItem();
  if (!id) { toast('Slot shortcut ini kosong. Isi dari tas (seret barang ke baris Shortcut)'); return; }
  const d = itemDef(id);
  if (d.hotbarUse) { emit('hotbar:use', { id }); return; }
  if (inventory.held === id) { if (d.use) emit('inventory:use', { slot: -1 }); else emit('inventory:stash'); return; }
  const slot = bagSlot(id);
  if (slot < 0) { toast(`${d.name} habis`); sfx.drop(); return; }
  if (d.use) emit('inventory:use', { slot });
  else emit('inventory:hold', { slot });
}

let lastKey = '';
function render() {
  const bar = $('hotbar');
  bar.classList.toggle('show', ui.started && player.mode === 'foot' && hotbar.slots.some(Boolean));
  const sel = selectedItem(), sd = sel && itemDef(sel);
  const key = [hotbar.slots.join(), hotbar.sel, inventory.held, ...hotbar.slots.map(id => (id ? have(id) : 0)), sd?.status?.(), ...hotbar.slots.map(id => (id ? itemDef(id).meter?.() : ''))].join('|');
  if (key === lastKey) return;
  lastKey = key;
  bar.innerHTML = `<div class="fb-name">${sd ? sd.name : '<span class="dim">kosong</span>'}${sd?.status ? ` <small>${sd.status()}</small>` : ''}</div>
    <div class="fb-slots">${hotbar.slots.map((id, i) => {
      if (!id) return `<button class="fb-slot empty${i === hotbar.sel ? ' sel' : ''}" data-i="${i}"><span>${i + 1}</span></button>`;
      const d = itemDef(id), n = have(id), m = d.meter?.();
      return `<button class="fb-slot${i === hotbar.sel ? ' sel' : ''}${n ? '' : ' out'}" data-i="${i}" title="${d.name} · klik kanan = lepas">${d.icon ? `<img src="${d.icon}" alt="">` : ''}${n > 1 ? `<b>${n}</b>` : ''}${m !== undefined ? `<i class="fb-water" style="height:${Math.round(m * 100)}%"></i>` : ''}<span>${i + 1}</span></button>`;
    }).join('')}</div>
    <div class="fb-keys"><kbd>${keyOf('tool')}</kbd> pakai · <kbd>${keyOf('toolNext')}</kbd> / <kbd>1-${HOTBAR}</kbd> ganti · klik kanan = lepas</div>`;
}
const refresh = () => { lastKey = ''; render(); };

export function initHotbarUI() {
  onAction('tool', use);
  onAction('toolNext', () => selectNext(1));
  for (let i = 1; i <= HOTBAR; i++) onKey('Digit' + i, () => select(i - 1));
  $('hotbar').addEventListener('click', (e) => { const b = e.target.closest('.fb-slot'); if (b) { select(+b.dataset.i); sfx.step(0.4); } });
  $('hotbar').addEventListener('contextmenu', (e) => { const b = e.target.closest('.fb-slot'); if (b) { e.preventDefault(); unassign(+b.dataset.i); sfx.drop(); } });
  for (const ev of ['inventory:changed', 'hotbar:changed', 'hotbar:refresh', 'player:mode', 'save:applied']) on(ev, render);
  on('game:start', refresh);
  render();
}
