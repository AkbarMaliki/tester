// Survival gameplay on top of systems/stats.js: eating & drinking items from the bag, and the Balai Warga rest area
// with a drinking fountain (thirst + refills empty bottles), a public toilet (bladder + cures poison/nausea) and a
// gazebo bed (sleep = skip time, refills energy). Also handles fainting when health hits 0.
// Rules and numbers: public/assets/data/survival.json, food values: items.json "use". Design: SURVIVAL.md.
import { on, emit } from '../../engine/events.js';
import { sfx } from '../../engine/audio.js';
import { addZone } from '../../systems/interaction.js';
import { inventory, itemDef, takeFrom, addItem, countOf, removeItem } from '../../systems/inventory.js';
import { RULES, stats, derived, consume, cure, addEffect, hasEffect, setMeter, sleep, revive, setEnv } from '../../systems/stats.js';
import { today } from '../../systems/calendar.js';
import { time, skipTime } from '../../systems/daynight.js';
import { saveGame } from '../../systems/save.js';
import { addMapMarker } from '../../systems/mapmarkers.js';
import { BALAI } from '../../world/worldmap.js';
import { board } from '../../world/props.js';
import { player, placePlayer, avatar } from '../../entities/player/controller.js';
import { ui, toast, openModal, closeModal, fadeThrough } from '../../ui/ui.js';
import { openCalendar } from '../../ui/calendar.js';
import { fountain, toilet, gazebo, calendarStand } from './models.js';

const FOUNTAIN_DRINK = { thirst: 35 };
const TOILET_HOURS = 0.25, FAINT_HOURS = 4, WAKE_AT = 7;
const B = BALAI;
const spots = {};   // where the kid stands to use each building (from models.js)
let roof = null;    // gazebo roof, faded out while the kid is under it

// ---------------------------------------------------------------- helpers
const NAMES = { ...Object.fromEntries(Object.entries(RULES.needs).map(([k, n]) => [k, n.name])), health: 'Darah', stamina: 'Stamina' };
// "Lapar +18 · Haus +6 · Kandung kemih −5"
const deltaText = (delta) => Object.entries(delta).filter(([, v]) => Math.abs(v) >= 0.5)
  .map(([k, v]) => `${NAMES[k]} ${v > 0 ? '+' : '−'}${Math.round(Math.abs(v))}`).join(' · ');
const fmtHour = (h) => String(Math.floor(h)).padStart(2, '0') + ':' + String(Math.floor(h * 60) % 60).padStart(2, '0');
const onFoot = () => player.mode === 'foot';

// ---------------------------------------------------------------- eating / drinking from the bag (inventory:use)
function useItem({ slot }) {
  const id = slot === -1 ? inventory.held : inventory.slots[slot]?.id;
  const use = id && itemDef(id).use;
  if (!use) { toast('Barang ini tidak bisa dipakai'); return; }
  // nothing would go in: don't waste it (items that cure or give an effect are always worth using)
  const fills = ['hunger', 'thirst', 'energy', 'health', 'stamina'].filter(k => use[k] > 0);
  const max = (k) => (k === 'health' ? derived.maxHealth : k === 'stamina' ? derived.maxStamina : 100);
  if (fills.length && !use.effects && !use.cure && fills.every(k => stats[k] >= max(k) - 1)) {
    toast(fills.includes('hunger') ? 'Kamu sudah kenyang' : fills.includes('thirst') ? 'Kamu belum haus' : fills.includes('health') ? 'Darahmu sudah penuh' : 'Belum perlu');
    sfx.drop(); return;
  }
  if (slot === -1) { if (!emit('inventory:discardHeld')) return; } else takeFrom(slot, 1);
  const { delta, cured } = consume(use);
  if (use.verb === 'Pakai') sfx.pick(); else if (use.verb === 'Minum') sfx.drink(); else sfx.eat();
  const word = { Minum: 'Glek!', Makan: 'Nyam!' }[use.verb] || 'Beres!';
  const parts = [deltaText(delta), cured.length ? `${cured.map(c => RULES.effects[c].name).join(' & ')} sembuh` : ''].filter(Boolean).join(' · ');
  toast(`${word} ${itemDef(id).name}${parts ? ': ' + parts : ''}`, itemDef(id).icon);
  if (use.gives) addItem(use.gives, 1);
  emit('survival:consumed', { id, delta, cured });
}

// ---------------------------------------------------------------- Balai Warga
function drinkFountain() {
  if (!onFoot()) return;
  let did = false;
  if (stats.thirst < 97) {
    const { delta } = consume(FOUNTAIN_DRINK);
    addEffect('segar'); sfx.drink(); did = true;
    toast(`Glek glek… segar! ${deltaText(delta)}`);
  }
  const empty = countOf('botol_kosong');
  if (empty) { removeItem('botol_kosong', empty); addItem('botol_air', empty); sfx.stash(); did = true; toast(`${empty} botol diisi ulang`); }
  if (!did) toast('Kamu belum haus');
}

function useToilet() {
  if (!onFoot()) return;
  const cures = Object.entries(RULES.effects).some(([id, e]) => (e.cure || []).includes('toilet') && hasEffect(id));
  if (stats.bladder > 90 && !cures) { toast('Belum kebelet'); return; }
  let cured = [];
  sfx.door(true);
  fadeThrough('Di toilet…', () => {
    setMeter('bladder', 100); cured = cure('toilet'); addEffect('lega'); skipTime(TOILET_HOURS); sfx.flush();
  }, 1100).then(() => {
    sfx.door(false);
    toast(cured.length ? `Lega! ${cured.map(id => RULES.effects[id].name).join(' & ')} sembuh` : 'Lega!');
  });
}
function askSleep() {
  if (!onFoot()) return;
  if (stats.energy > 90) { toast('Kamu belum ngantuk'); return; }
  const full = Math.ceil((100 - stats.energy) / (RULES.needs.energy.sleep * RULES.secondsPerGameHour));
  const toMorning = ((WAKE_AT - time.hour) % 24 + 24) % 24;
  const opts = [[1, '1 jam', 'tidur siang'], [3, '3 jam', ''], [full, 'Sampai segar', `± ${full} jam`]];
  if (toMorning > 0.5 && toMorning <= 12) opts.push([toMorning, 'Sampai pagi', `bangun jam 0${WAKE_AT}:00`]);
  const warn = stats.hunger < 25 || stats.thirst < 25 ? '<p style="color:#ff9aaa">Kamu lapar / haus. Tidur lama bisa membuatmu terbangun kesakitan.</p>' : '';
  openModal(`<h2>Tidur</h2><p>Energi <b>${Math.round(stats.energy)}%</b> · sekarang jam <b>${fmtHour(time.hour)}</b>. Mau tidur berapa lama? Lapar, haus dan kandung kemih tetap berkurang pelan-pelan. <b>Game tersimpan saat kamu bangun.</b></p>${warn}`
    + `<div class="choice-btns">${opts.map(([h, t, s]) => `<button data-h="${h}">${t}${s ? `<small>${s}</small>` : ''}</button>`).join('')}</div>`,
  (e) => { const b = e.target.closest('button[data-h]'); if (b) { closeModal(); goToSleep(+b.dataset.h); } });
}
function goToSleep(hours) {
  let r;
  fadeThrough('Zzz…', () => {
    r = sleep(hours);
    skipTime(r.hours);
    placePlayer(spots.bed.x, spots.bed.z, avatar.rotation.y);
  }, 1700).then(() => {
    toast(`Bangun jam ${fmtHour(time.hour)} · Energi ${r.energy >= 0 ? '+' : '−'}${Math.round(Math.abs(r.energy))}`);
    if (r.woke === 'hurt') toast('Kamu terbangun karena lapar / haus!');
    emit('survival:slept', { hours: r.hours });
    saveGame('auto');   // Harvest Moon style: going to bed saves the game (toast from ui/menu.js)
  });
}

// health hit 0: black out, wake up hours later at the Balai (or in the car seat when driving)
function faint() {
  fadeThrough('Kamu pingsan…', () => {
    revive(); skipTime(FAINT_HOURS);
    if (onFoot()) placePlayer(spots.bed.x, spots.bed.z, 0);
  }, 2000).then(() => toast('Kamu siuman di Balai Warga. Makan, minum, lalu istirahat!'));
}

export default {
  id: 'survival',

  build() {
    addMapMarker({ x: B.x, z: B.z, icon: '🏠', label: 'Balai Warga' });
    // Balai Warga layout around the plaza centre. The road comes in from the west; the default camera looks from
    // +x/+z, so the buildings stand at the back with their fronts (door, bed, tap) facing it and the kid stays visible.
    spots.fountain = fountain(B.x - 1.5, B.z + 5, 0.65);
    spots.toilet = toilet(B.x + 5.5, B.z - 3.5, 0.25);
    let cal;
    ({ spot: spots.bed, roof, cal } = gazebo(B.x - 2, B.z - 6, 0.65));
    // calendar stand next to the bed: its page shows today, E opens the calendar panel
    const stand = calendarStand(cal.x, cal.z, cal.rot);
    addZone({ pos: stand.spot, label: 'Lihat kalender', range: 1.2, action: openCalendar });
    const repaint = () => stand.draw(today());
    repaint(); on('calendar:day', repaint); on('save:applied', repaint);
    board({ x: B.x - 8.5, z: B.z + 6.5, rot: 0.62, map: false, title: 'BALAI WARGA', label: 'Baca papan Balai Warga', html:
      '<h2>Balai Warga</h2><p>Tempat istirahat warga desa.</p><ul><li><b>Keran air minum</b>: hilangkan haus, isi ulang botol kosong.</li>'
      + '<li><b>Toilet umum</b>: kosongkan kandung kemih. Juga menyembuhkan keracunan &amp; mual.</li>'
      + '<li><b>Gazebo</b>: tidur di kasur untuk memulihkan energi (waktu akan dilewati).</li></ul>'
      + '<p>Tekan <kbd>P</kbd> untuk melihat profil dan kondisi tubuhmu.</p>' });
    addZone({ pos: spots.fountain, get label() { return countOf('botol_kosong') ? 'Minum air · isi botol' : 'Minum air'; }, quiet: true, range: 2, action: drinkFountain });
    addZone({ pos: spots.toilet, label: 'Pakai toilet umum', quiet: true, range: 2, action: useToilet });
    addZone({ pos: spots.bed, label: 'Tidur (lewati waktu)', quiet: true, range: 2.2, action: askSleep });

    on('inventory:use', useItem);
    on('stats:depleted', () => { if (ui.started) faint(); });
  },

  update(dt) {
    // see-through roof while standing in the gazebo, so the bed and the kid stay visible from the high camera
    const inside = avatar.visible && Math.hypot(avatar.position.x - roof.x, avatar.position.z - roof.z) < roof.r;
    // sheltered from rain / snow / midday sun: under the gazebo roof, in the car, or holding an umbrella over the head
    setEnv('teduh', inside || !onFoot() || inventory.held === 'payung');
    const k = roof.k + ((inside ? 0.15 : 1) - roof.k) * (1 - Math.exp(-dt * 8));
    if (Math.abs(k - roof.k) < 1e-4) return;
    roof.k = k;
    for (const m of roof.mats) { m.opacity = k; m.depthWrite = k > 0.99; }
  },
};
