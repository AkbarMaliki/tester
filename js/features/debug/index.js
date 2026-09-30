// Debug chest panel (game/config.js DEBUG): lists every item the game defines, with what eating/using it does,
// and hands out as many as you want. Plus quick buttons to put the character in a bad state (hungry, poisoned…)
// so every counter item / facility can be tested. Opened from Pengaturan > Demo (ui/settings.js) via 'debug:chest'.
import { on, emit } from '../../engine/events.js';
import { sfx } from '../../engine/audio.js';
import { DEBUG } from '../../game/config.js';
import { allItems, itemDef, addItem, countOf, roomFor } from '../../systems/inventory.js';
import { addGold } from '../../systems/wallet.js';
import { RULES, NEEDS, stats, derived, shown, addEffect, removeEffect, setMeter } from '../../systems/stats.js';
import { openModal, modalOpen, toast } from '../../ui/ui.js';
import { time } from '../../systems/daynight.js';
import { CAL, today, setDay, forceWeather, fmtDate } from '../../systems/calendar.js';

const METER_NAMES = { ...Object.fromEntries(NEEDS.map(k => [k, RULES.needs[k].name])), health: 'Darah', stamina: 'Stamina' };
let sel = null, tab = 'all';

// "Lapar +18 · Haus +6", cures and effect chances, as small tags
function useTags(use) {
  if (!use) return '<span class="dc-tag none">tidak bisa dimakan / dipakai</span>';
  const t = [];
  for (const k in METER_NAMES) if (use[k]) t.push(`<span class="dc-tag ${use[k] > 0 ? 'up' : 'down'}">${METER_NAMES[k]} ${use[k] > 0 ? '+' : '−'}${Math.abs(use[k])}</span>`);
  for (const how of use.cure || []) {
    const names = Object.entries(RULES.effects).filter(([, e]) => (e.cure || []).includes(how)).map(([, e]) => e.name);
    if (names.length) t.push(`<span class="dc-tag cure">menyembuhkan ${names.join(', ')}</span>`);
  }
  for (const { id, chance = 1 } of use.effects || []) {
    const e = RULES.effects[id];
    if (e) t.push(`<span class="dc-tag ${e.kind}" title="${e.desc}">${e.icon || ''} ${e.name}${chance < 1 ? ` ${Math.round(chance * 100)}%` : ''}</span>`);
  }
  if (use.gives) t.push(`<span class="dc-tag">sisa: ${itemDef(use.gives).name}</span>`);
  return t.join('');
}
const img = (d) => (d.icon ? `<img src="${d.icon}" alt="">` : `<i class="dot" style="background:${d.color || '#ccc'}"></i>`);

const TIME = [['gold', '+5000 G'], ['grow', 'Tumbuhkan tanaman'], ['d1', '+1 hari'], ['d7', '+7 hari'], ['season', 'Musim berikutnya'], ...Object.entries(CAL.weathers).map(([k, w]) => ['w:' + k, `${w.icon} ${w.name}`]), ['w:', 'Cuaca otomatis']];
const TABS = [['all', 'Semua'], ['use', 'Makanan & obat'], ['other', 'Bahan & lainnya']];
const STATES = [
  ['heal', 'Pulihkan semua'], ['hunger', 'Lapar 10%'], ['thirst', 'Haus 10%'], ['energy', 'Ngantuk 10%'], ['bladder', 'Kebelet 10%'],
  ['health', 'Darah 20%'], ['stamina', 'Stamina 0'], ['fx:keracunan', 'Keracunan'], ['fx:mual', 'Mual'],
];

function html() {
  const items = allItems().filter(d => !d.variant && (tab === 'all' || (tab === 'use') === !!d.use));
  const d = sel && itemDef(sel);
  const detail = d
    ? `<div class="dc-big">${img(d)}</div><h3 class="amatic">${d.name}</h3><p>${d.desc || ''}</p><div class="dc-tags">${useTags(d.use)}</div>
       <p class="dc-meta">id <code>${d.id}</code> · tumpukan ${d.stack} · harga ${d.price ?? '–'} G · di tas <b>${countOf(d.id)}</b></p>
       <div class="choice-btns dc-take"><button data-take="1">Ambil 1</button><button data-take="5">Ambil 5</button><button data-take="${d.stack}">Ambil ${d.stack}<small>1 tumpuk</small></button></div>`
    : '<p class="dc-empty">Pilih barang untuk melihat detail dan efeknya.</p>';
  const fx = shown.map(s => `<span class="dc-tag ${s.def.kind}">${s.def.icon || ''} ${s.def.name}</span>`).join('') || '<span class="dc-tag none">normal</span>';
  return `<div class="debug-chest">
    <h2>Peti Debug</h2>
    <p class="dc-sub">Semua barang yang ada di game (${allItems().filter(d => !d.variant).length}, tanpa varian kualitas). Ambil sebanyak apa pun untuk dicoba. Muncul karena <code>DEBUG = true</code> di game/config.js.</p>
    <div class="dc-tabs">${TABS.map(([k, t]) => `<button data-tab="${k}" class="${k === tab ? 'on' : ''}">${t}</button>`).join('')}</div>
    <div class="dc-body">
      <div class="dc-grid">${items.map(i => `<button class="dc-item${i.id === sel ? ' on' : ''}" data-id="${i.id}" title="${i.name}">${img(i)}<span>${i.name}</span>${countOf(i.id) ? `<b>${countOf(i.id)}</b>` : ''}</button>`).join('')}</div>
      <div class="dc-detail">${detail}</div>
    </div>
    <h4>Uang, kebun, waktu &amp; cuaca</h4>
    <div class="dc-states">${TIME.map(([k, t]) => `<button data-time="${k}">${t}</button>`).join('')}</div>
    <p class="dc-now">Tanggal: <b>${fmtDate(today())}</b> · cuaca ${today().weather.icon} ${today().weather.name}</p>
    <h4>Uji kondisi</h4>
    <div class="dc-states">${STATES.map(([k, t]) => `<button data-state="${k}">${t}</button>`).join('')}</div>
    <p class="dc-now">Sekarang: ${NEEDS.map(k => `${RULES.needs[k].name} <b>${Math.round(stats[k])}%</b>`).join(' · ')} · Darah <b>${Math.round(stats.health)}/${Math.round(derived.maxHealth)}</b><br>${fx}</p>
  </div>`;
}
const render = () => openModal(html(), onClick);

function take(n) {
  const room = roomFor(sel);
  if (!room) { toast('Tas penuh!'); sfx.drop(); return; }
  addItem(sel, Math.min(n, room));
  sfx.stash();
}
function setState(k) {
  if (k === 'heal') {
    for (const s of [...shown]) if (s.left !== undefined) removeEffect(s.id);
    for (const m of NEEDS) setMeter(m, 100);
    setMeter('health', derived.maxHealth); setMeter('stamina', derived.maxStamina);
  } else if (k.startsWith('fx:')) addEffect(k.slice(3)) || toast('Diblokir oleh efek lain');
  else if (k === 'health') setMeter('health', derived.maxHealth * 0.2);
  else if (k === 'stamina') setMeter('stamina', 0);
  else setMeter(k, 10);
  sfx.pop();
}
function setTime(k) {
  if (k === 'gold') addGold(5000);
  else if (k === 'grow') emit('farming:debugGrow');   // features/farming (no import: features talk through events)
  else if (k === 'd1' || k === 'd7') setDay(time.day + (k === 'd1' ? 1 : 7));
  else if (k === 'season') setDay((Math.floor(time.day / CAL.daysPerSeason) + 1) * CAL.daysPerSeason);
  else forceWeather(k.slice(2) || null);
  sfx.pop();
}
function onClick(e) {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.dataset.id) { sel = sel === b.dataset.id ? null : b.dataset.id; sfx.step(0.5); }
  else if (b.dataset.tab) tab = b.dataset.tab;
  else if (b.dataset.take) take(+b.dataset.take);
  else if (b.dataset.state) setState(b.dataset.state);
  else if (b.dataset.time) setTime(b.dataset.time);
  else return;
  render();
}

export default {
  id: 'debug',
  build() {
    if (!DEBUG) return;
    on('debug:chest', () => { if (!modalOpen()) render(); });
  },
};
