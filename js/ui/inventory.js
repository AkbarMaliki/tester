// Inventory panel (I key / bag button bottom-right): slot grid with drag & drop, the item held in the hands,
// item details and the Pegang / Buang buttons. The data lives in systems/inventory.js; world actions are only
// requested through events, so whichever feature owns the 3D side (features/pickup) carries them out:
//   inventory:hold {slot}  take one out into the hands      inventory:drop {slot}  put one on the ground (slot -1 = the hands)
//   inventory:stash        put the held item into the bag       inventory:use {slot}   eat / drink one (features/survival)
import { $ } from '../engine/util.js';
import { on, emit } from '../engine/events.js';
import { sfx } from '../engine/audio.js';
import { clearKeys } from '../systems/input.js';
import { inventory, itemDef, moveSlot, countOf, SLOTS } from '../systems/inventory.js';
import { ui, toast } from './ui.js';
import { mountPreview } from './preview.js';

const HAND = -1;
let sel = null;   // selected slot index, HAND, or null
const isOpen = () => $('inventory').classList.contains('show');
const cells = [];

export function toggleInventory(open = !isOpen()) {
  if (open && (!ui.started || $('modal').classList.contains('show'))) return;
  if (open === isOpen()) return;
  $('inventory').classList.toggle('show', open);
  if (open) { clearKeys(); sel = null; render(); mountPreview($('invPreview')); }
  sfx.pop();
}

const icon = (id, cls = '') => {
  const d = itemDef(id);
  return d.icon ? `<img class="${cls}" src="${d.icon}" alt="" draggable="false">` : `<i class="dot ${cls}" style="background:${d.color || '#ccc'}"></i>`;
};
const slotHtml = (s) => (s ? icon(s.id) + (s.n > 1 ? `<b>${s.n}</b>` : '') : '');

function detailHtml() {
  const id = sel === HAND ? inventory.held : sel !== null && inventory.slots[sel]?.id;
  if (!id) return `<p class="inv-empty">${inventory.slots.some(Boolean) || inventory.held ? 'Pilih barang untuk melihat detailnya.' : 'Tas masih kosong.<br>Dekati barang di taman lalu tekan <kbd>E</kbd>.'}</p>`;
  const d = itemDef(id), n = sel === HAND ? 1 : inventory.slots[sel].n;
  const use = d.use ? `<button data-act="use" class="use">${d.use.verb || 'Pakai'}</button>` : '';
  const btns = use + (sel === HAND
    ? '<button data-act="stash">Simpan ke tas</button><button data-act="drop" class="alt">Taruh</button>'
    : `<button data-act="hold"${inventory.held ? ' title="Tanganmu penuh: barang yang dipegang akan disimpan dulu"' : ''}>Pegang</button><button data-act="drop" class="alt">Buang 1</button>`);
  return `<div class="inv-big">${icon(id)}</div><h3 class="amatic">${d.name}</h3>`
    + (d.desc ? `<p>${d.desc}</p>` : '')
    + `<p class="inv-meta">${sel === HAND ? 'Sedang dipegang' : `Jumlah: <b>${n}</b>`}${sel === HAND && countOf(id) ? ` · di tas: <b>${countOf(id)}</b>` : ''}${d.price ? ` · harga <b>${d.price} G</b>` : ''}</p>`
    + `<div class="inv-btns">${btns}</div>`;
}

function render() {
  inventory.slots.forEach((s, i) => {
    cells[i].innerHTML = slotHtml(s);
    cells[i].classList.toggle('full', !!s); cells[i].classList.toggle('sel', sel === i);
  });
  $('invHand').innerHTML = inventory.held ? icon(inventory.held) : '';
  $('invHand').classList.toggle('full', !!inventory.held); $('invHand').classList.toggle('sel', sel === HAND);
  $('invCap').textContent = `${inventory.slots.filter(Boolean).length}/${SLOTS} slot`;
  $('invDetail').innerHTML = detailHtml();
}
function renderBadge() {
  const n = inventory.slots.reduce((c, s) => c + (s ? s.n : 0), 0);
  $('bagCount').textContent = n > 99 ? '99+' : n || '';
}
function select(i) {
  const id = i === HAND ? inventory.held : inventory.slots[i]?.id;
  sel = id && sel !== i ? i : null;
  render();
}
function act(what) {
  const slot = sel;
  let n = 0;
  if (what === 'hold') n = emit('inventory:hold', { slot });
  else if (what === 'drop') n = emit('inventory:drop', { slot });
  else if (what === 'stash') n = emit('inventory:stash');
  else if (what === 'use') n = emit('inventory:use', { slot });
  if (!n) toast('Belum bisa dilakukan di sini');
  if (what === 'hold' || (slot === HAND && what !== 'use')) toggleInventory(false);   // show the kid lifting / setting it down
  else if (slot === HAND) { if (!inventory.held) sel = null; render(); }
  else { if (!inventory.slots[slot]) sel = null; render(); }
}

// ---------------------------------------------------------------- drag & drop between slots (mouse + touch)
let drag = null;   // { from, x, y, ghost }
function dragMove(e) {
  if (!drag) return;
  if (!drag.ghost) {
    if (Math.hypot(e.clientX - drag.x, e.clientY - drag.y) < 6 || !inventory.slots[drag.from]) return;
    drag.ghost = document.createElement('div'); drag.ghost.className = 'slot full inv-ghost';
    drag.ghost.innerHTML = slotHtml(inventory.slots[drag.from]);
    document.body.append(drag.ghost); cells[drag.from].classList.add('dragging');
  }
  drag.ghost.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%) scale(1.1)`;
  const over = document.elementFromPoint(e.clientX, e.clientY)?.closest('#invGrid .slot');
  for (const c of cells) c.classList.toggle('over', c === over && c !== cells[drag.from]);
}
function dragEnd(e) {
  if (!drag) return;
  const d = drag; drag = null;
  if (!d.ghost) { if (e.type === 'pointerup') select(d.from); return; }
  d.ghost.remove();
  for (const c of cells) c.classList.remove('over', 'dragging');
  const over = e.type === 'pointerup' && document.elementFromPoint(e.clientX, e.clientY)?.closest('#invGrid .slot');
  if (over && +over.dataset.i !== d.from) { moveSlot(d.from, +over.dataset.i); sel = +over.dataset.i; sfx.step(0.6); }
  render();
}

export function initInventoryUI() {
  for (let i = 0; i < SLOTS; i++) {
    const c = document.createElement('div'); c.className = 'slot'; c.dataset.i = i;
    $('invGrid').append(c); cells.push(c);
  }
  $('invGrid').addEventListener('pointerdown', (e) => {
    const c = e.target.closest('.slot');
    if (c && e.button === 0) { drag = { from: +c.dataset.i, x: e.clientX, y: e.clientY, ghost: null }; e.preventDefault(); }
  });
  $('invGrid').addEventListener('dblclick', (e) => { const c = e.target.closest('.slot'); if (c && inventory.slots[+c.dataset.i]) { sel = +c.dataset.i; act('hold'); } });
  addEventListener('pointermove', dragMove);
  addEventListener('pointerup', dragEnd);
  addEventListener('pointercancel', dragEnd);
  $('invHand').onclick = () => select(HAND);
  $('invDetail').onclick = (e) => { const b = e.target.closest('button[data-act]'); if (b) act(b.dataset.act); };
  $('invClose').onclick = () => toggleInventory(false);
  $('inventory').onclick = (e) => { if (e.target.id === 'inventory') toggleInventory(false); };
  $('bagBtn').onclick = () => toggleInventory();
  addEventListener('keydown', (e) => {
    if (e.repeat || e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    if (e.code === 'KeyI' || e.code === 'Tab') { e.preventDefault(); toggleInventory(); }
    else if (e.code === 'Escape') toggleInventory(false);
  });

  on('inventory:changed', () => { renderBadge(); if (isOpen()) render(); });
  on('inventory:added', ({ id, n }) => {
    toast(`+${n} ${itemDef(id).name}`, itemDef(id).icon);
    $('bagBtn').classList.remove('bump'); void $('bagBtn').offsetWidth; $('bagBtn').classList.add('bump');
  });
  on('inventory:full', () => toast('Tas penuh!'));
  renderBadge();
}
