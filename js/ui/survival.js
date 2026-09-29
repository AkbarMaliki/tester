// Survival HUD (bottom-left): four need rings (Lapar, Haus, Energi, Kandung kemih) with trend arrows, the health and
// stamina bars (the dark hatched end = max locked by hunger/poison/tiredness), and buff/debuff chips.
// Clicking it or pressing P opens the character profile panel. Data + rules: systems/stats.js.
import { $ } from '../engine/util.js';
import { on } from '../engine/events.js';
import { sfx } from '../engine/audio.js';
import { clearKeys } from '../systems/input.js';
import { RULES, NEEDS, stats, derived, shown, profile } from '../systems/stats.js';
import { ui, toast } from './ui.js';
import { mountPreview } from './preview.js';

const ICONS = {
  hunger: '<path d="M7 3v7a2 2 0 0 0 2 2 2 2 0 0 0 2-2V3M9 12v9M16.5 3C14.5 4.5 14 8 14 12h2.5v9"/>',
  thirst: '<path d="M12 3s6 7 6 11.2a6 6 0 0 1-12 0C6 10 12 3 12 3z"/><path d="M9.5 15a2.6 2.6 0 0 0 2.4 2.5"/>',
  energy: '<path d="M17 15.5A7 7 0 1 1 9 5a5.6 5.6 0 0 0 8 10.5z"/><path d="M14.5 3.5h4l-4 4h4"/>',
  bladder: '<path d="M7 3h5v7H7z"/><path d="M4.5 10h15a6.5 6.5 0 0 1-6.5 6.5h-2A6.5 6.5 0 0 1 4.5 10z"/><path d="M9 16.5 8 21h8l-1-4.5"/>',
};
const HEART = '<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/>';
const BOLT = '<path d="M13 3 6 13h5l-1 8 7-10h-5z"/>';
const CIRC = 2 * Math.PI * 19;
const HOUR = RULES.secondsPerGameHour;

const el = {};
const colorOf = (v) => (v > 50 ? 'var(--lime)' : v > 25 ? 'var(--gold)' : '#ff5a6e');
// ▾ / ▴ arrows by how fast a meter moves per game hour
function trend(rate) {
  const h = Math.abs(rate * HOUR);
  const n = h < 0.5 ? 0 : h < 5 ? 1 : h < 10 ? 2 : 3;
  return (rate < 0 ? '▾' : '▴').repeat(n);
}
const fmtTime = (s) => (s >= 60 ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}` : `${Math.ceil(s)} dtk`);

function build() {
  el.needs = NEEDS.map((k) => {
    const d = document.createElement('div');
    d.className = 'need'; d.title = RULES.needs[k].name;
    d.innerHTML = `<svg class="ring" viewBox="0 0 44 44"><circle class="bg" cx="22" cy="22" r="19"/><circle class="fg" cx="22" cy="22" r="19" stroke-dasharray="${CIRC}"/></svg>`
      + `<svg class="ico" viewBox="0 0 24 24">${ICONS[k] || ''}</svg><i class="trend"></i>`;
    $('needRow').append(d);
    return { k, d, fg: d.querySelector('.fg'), tr: d.querySelector('.trend'), last: '' };
  });
  for (const [id, svg] of [['hpBar', HEART], ['stBar', BOLT]]) {
    $(id).innerHTML = `<svg class="ico" viewBox="0 0 24 24">${svg}</svg><div class="track"><i class="fill"></i><i class="lock"></i></div><b class="rate"></b>`;
  }
}

// ---------------------------------------------------------------- HUD refresh (10 Hz is plenty)
let acc = 0, pacc = 0, lastChips = '';
function bar(id, v, max, full, rate, cls) {
  const b = $(id), scale = Math.max(full, max);
  b.querySelector('.fill').style.width = (v / scale * 100).toFixed(1) + '%';
  b.querySelector('.lock').style.width = ((1 - max / scale) * 100).toFixed(1) + '%';
  b.querySelector('.rate').textContent = rate > 0.01 && v < max - 0.5 ? '+' : rate < -0.01 ? '−' : '';
  b.querySelector('.rate').className = 'rate ' + (rate > 0 ? 'up' : 'down');
  b.classList.toggle('low', v / max < 0.25);
  if (cls) b.classList.toggle(cls[0], cls[1]);
}
export function updateSurvivalUI(dt) {
  pacc += dt;
  if ((acc += dt) < 0.1) return;
  acc = 0;
  for (const n of el.needs) {
    const v = stats[n.k];
    n.fg.style.strokeDashoffset = (CIRC * (1 - v / 100)).toFixed(1);
    n.fg.style.stroke = colorOf(v);
    n.d.classList.toggle('crit', v < 15);
    const t = trend(derived.rates[n.k]);
    if (t !== n.last) { n.tr.textContent = t; n.tr.classList.toggle('up', derived.rates[n.k] > 0); n.last = t; }
    const r = derived.rates[n.k] * HOUR;
    n.d.title = `${RULES.needs[n.k].name}: ${Math.round(v)}%` + (t ? ` · ${r > 0 ? 'naik' : 'turun'} ${Math.abs(r).toFixed(1)}/jam (${t})` : '');
  }
  bar('hpBar', stats.health, derived.maxHealth, derived.fullHealth, derived.healthRate);
  bar('stBar', stats.stamina, derived.maxStamina, derived.fullStamina, 0, ['norun', derived.noRun]);
  // buff / debuff chips: rebuilt only when the list changes, timers updated in place
  const key = shown.map(s => s.id).join();
  if (key !== lastChips) {
    lastChips = key;
    $('fxRow').innerHTML = shown.map(s => `<span class="fx ${s.def.kind}" title="${s.def.name}: ${s.def.desc}"><i>${s.def.icon || '•'}</i>${s.def.name}<em></em></span>`).join('');
  }
  shown.forEach((s, i) => { const em = $('fxRow').children[i]?.lastChild; if (em) em.textContent = s.left ? fmtTime(s.left) : ''; });
  if (isOpen() && pacc > 0.5) { pacc = 0; renderProfile(); }
}

// ---------------------------------------------------------------- profile panel (P)
const isOpen = () => $('profile').classList.contains('show');
export function toggleProfile(open = !isOpen()) {
  if (open && (!ui.started || ['modal', 'inventory', 'pause', 'fade'].some(id => $(id).classList.contains('show')))) return;
  if (open === isOpen()) return;
  $('profile').classList.toggle('show', open);
  if (open) { clearKeys(); renderProfile(); mountPreview($('pfPreview')); }
  sfx.pop();
}
const perHour = (r) => { const h = r * HOUR; return Math.abs(h) < 0.05 ? '—' : `${h > 0 ? '+' : ''}${h.toFixed(1)}/jam`; };
function renderProfile() {
  const a = profile.attributes, d = derived;
  const attrs = RULES.attributes.map(x => `<div class="pf-attr" title="${x.desc}"><span>${x.name}</span><span class="pips">${'<i class="on"></i>'.repeat(a[x.id]) + '<i></i>'.repeat(Math.max(0, 10 - a[x.id]))}</span><b>${a[x.id]}</b></div>`).join('');
  const meters = NEEDS.map(k => `<tr><td>${RULES.needs[k].name}</td><td><b style="color:${colorOf(stats[k])}">${Math.round(stats[k])}%</b></td><td>${perHour(d.rates[k])}</td></tr>`).join('')
    + `<tr><td>Darah</td><td><b>${Math.round(stats.health)}</b> / ${Math.round(d.maxHealth)}</td><td>${perHour(d.healthRate)}</td></tr>`
    + `<tr><td>Stamina</td><td><b>${Math.round(stats.stamina)}</b> / ${Math.round(d.maxStamina)}</td><td>+${d.staminaRegen.toFixed(0)}/dtk</td></tr>`;
  const fx = shown.length
    ? shown.map(s => `<div class="pf-fx ${s.def.kind}"><b>${s.def.icon || '•'} ${s.def.name}</b>${s.left ? ` <small>${fmtTime(s.left)}</small>` : ''}<p>${s.def.desc}</p></div>`).join('')
    : '<p class="pf-none">Tidak ada efek. Kondisi normal.</p>';
  $('profileBody').innerHTML = `
    <div class="pf-head"><div><h3 class="amatic">${profile.name}</h3><span>${profile.title}</span></div>
      <div class="pf-quick"><span>Kecepatan <b>${Math.round(d.speed * 100)}%</b></span><span>Lari <b>${d.noRun ? 'tidak bisa' : 'bisa'}</b></span></div></div>
    <div class="pf-cols">
      <section><h4>Atribut</h4>${attrs}<h4>Kondisi</h4><table class="pf-tab">${meters}</table></section>
      <section><h4>Efek aktif</h4>${fx}
        <h4>Cara bertahan</h4><ul class="pf-tips">
          <li><b>Lapar</b>: buka tas (<kbd>I</kbd>), pilih makanan, lalu <b>Makan</b>. Jamur &amp; telur mentah bisa bikin sakit.</li>
          <li><b>Haus</b>: keran air minum di Balai Warga, atau botol air (isi ulang di keran).</li>
          <li><b>Energi</b>: tidur di kasur gazebo Balai. Waktu akan dilewati.</li>
          <li><b>Kandung kemih</b>: toilet umum di Balai. Juga menyembuhkan keracunan &amp; mual.</li>
          <li>Kebutuhan di 0% menguras darah. Darah habis = pingsan.</li>
        </ul></section>
    </div>`;
}

export function initSurvivalUI() {
  build();
  $('vitals').onclick = () => toggleProfile();
  $('profileClose').onclick = () => toggleProfile(false);
  $('profile').onclick = (e) => { if (e.target.id === 'profile') toggleProfile(false); };
  addEventListener('keydown', (e) => {
    if (e.repeat || e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    if (e.code === 'KeyP') toggleProfile();
    else if (e.code === 'Escape') toggleProfile(false);
  });
  // a toast when something important starts or ends (not for the short out-of-breath one)
  on('stats:effect', ({ on: started, def }) => {
    if (!def || def.quiet || !ui.started) return;
    if (started) toast(`<span class="fx-toast ${def.kind}">${def.icon || ''} ${def.name}</span>`);
    else if (def.kind === 'debuff') toast(`${def.name} hilang`);
  });
  updateSurvivalUI(1);
}
