// Settings menu (main menu "Pengaturan", pause menu, T / the settings action, clicking the clock):
//   Grafis · Audio · HUD · Kamera · Tombol (key mapping) · Demo (only with DEBUG: time, weather, calendar jumps,
//   the all-items chest + condition tests, teleports). Everything but Demo is saved on this device (localStorage).
import { $ } from '../engine/util.js';
import { emit } from '../engine/events.js';
import { sfx } from '../engine/audio.js';
import { renderer, camera, sun, bloom, applyQuality, setTiltShift } from '../engine/core.js';
import { DEBUG } from '../game/config.js';
import { ACTIONS, keyLabel, setKeys, resetKeys, clearKeys, is } from '../systems/input.js';
import { camOpts } from '../systems/camera.js';
import { time, nowHour } from '../systems/daynight.js';
import { CAL, today, setDay, forceWeather, fmtDate } from '../systems/calendar.js';
import { mapMarkers } from '../systems/mapmarkers.js';
import { grassMeshes } from '../world/vegetation.js';
import { player, placePlayer } from '../entities/player/controller.js';
import { ui, toast, refreshMuteIcon, showHint } from './ui.js';
import { openCalendar } from './calendar.js';

// ---------------------------------------------------------------- state (persisted)
const STORE = 'tester.settings';
const DEF = {
  quality: null, shadow: true, bloom: true, tilt: true, wind: true, fps: false, vignette: true, fov: 38,
  volMaster: 1, volSfx: 1, volEngine: 1, volAmbient: 1,
  hudScale: 1, hudVitals: true, hudClock: true, hudHints: true, hudToasts: true, hudButtons: true, hudCamPad: true,
  camRotate: 1, camZoom: 1, invertX: false, invertY: false,
};
export const settings = { ...DEF };
try {
  Object.assign(settings, JSON.parse(localStorage.getItem(STORE)) || {});
  if (!settings.quality) settings.quality = localStorage.getItem('tester.quality');   // older builds saved only this
} catch { /* storage unavailable */ }
const persist = () => { try { localStorage.setItem(STORE, JSON.stringify(settings)); } catch { /* storage unavailable */ } };

function isIntegratedGpu() {
  try {
    const gl = renderer.getContext(), ext = gl.getExtension('WEBGL_debug_renderer_info');
    return /intel|iris|uhd|mali|adreno|powervr|apple|swiftshader/i.test(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : '');
  } catch { return false; }
}
const body = document.body.classList;
// what each setting does
const APPLY = {
  quality: (q) => { applyQuality(q); for (const m of grassMeshes) m.visible = q === 'high' || m.userData.layer === 0; },
  shadow: (v) => { sun.castShadow = v; },
  bloom: (v) => { bloom.enabled = v; },
  tilt: (v) => setTiltShift(v),
  fps: (v) => { $('fps').style.display = v ? 'block' : 'none'; },
  vignette: (v) => { $('vignette').style.display = v ? '' : 'none'; },
  fov: (v) => { camera.fov = v; camera.updateProjectionMatrix(); },
  volMaster: (v) => sfx.setVolume('master', v), volSfx: (v) => sfx.setVolume('sfx', v),
  volEngine: (v) => sfx.setVolume('engine', v), volAmbient: (v) => sfx.setVolume('ambient', v),
  hudScale: (v) => document.documentElement.style.setProperty('--hud', v),
  hudVitals: (v) => body.toggle('hide-vitals', !v), hudClock: (v) => body.toggle('hide-clock', !v),
  hudHints: (v) => body.toggle('hide-hints', !v), hudToasts: (v) => body.toggle('hide-toasts', !v),
  hudButtons: (v) => body.toggle('hide-hudbtns', !v), hudCamPad: (v) => body.toggle('hide-campad', !v),
  camRotate: (v) => { camOpts.rotate = v; }, camZoom: (v) => { camOpts.zoom = v; },
  invertX: (v) => { camOpts.invertX = v; }, invertY: (v) => { camOpts.invertY = v; },
};
export function set(key, v) { settings[key] = v; if (APPLY[key]) APPLY[key](v); persist(); }
export const windEnabled = () => settings.wind;
export const setQuality = (q) => set('quality', q);
// after the world is built (grass exists): apply everything saved
export function restoreQuality() {
  if (!settings.quality) settings.quality = isIntegratedGpu() ? 'auto' : 'high';   // first visit: a sensible default
  for (const k in APPLY) APPLY[k](settings[k]);
}
export function setManualHour(h) { time.real = false; time.hour = h; }

// ---------------------------------------------------------------- panel
const TABS = [['grafis', '🖥 Grafis'], ['audio', '🔊 Audio'], ['hud', '🧭 HUD'], ['kamera', '🎥 Kamera'], ['tombol', '⌨ Tombol'], ...(DEBUG ? [['demo', '🧪 Demo']] : [])];
let tab = 'grafis', listen = null;   // listen = { action, slot } while waiting for a key
const isOpen = () => $('settingsMenu').classList.contains('show');
export function openSettings(which) {
  if (which) tab = which;
  if (!TABS.some(([k]) => k === tab)) tab = 'grafis';
  $('settingsMenu').classList.add('show'); clearKeys(); render(); sfx.pop();
}
export function closeSettings() { stopListen(); $('settingsMenu').classList.remove('show'); }

const pct = (v) => `${Math.round(v * 100)}%`;
const fmtHour = (h) => String(Math.floor(h)).padStart(2, '0') + ':' + String(Math.floor(h * 60) % 60).padStart(2, '0');
const row = (label, desc, ctrl) => `<div class="set-row"><div><b>${label}</b>${desc ? `<small>${desc}</small>` : ''}</div>${ctrl}</div>`;
const toggle = (k, label, desc = '') => row(label, desc, `<label class="switch"><input type="checkbox" data-set="${k}"${settings[k] ? ' checked' : ''}><i></i></label>`);
const slider = (k, label, min, max, step, fmt = pct, desc = '') => row(label, desc, `<span class="set-slider"><input type="range" data-set="${k}" min="${min}" max="${max}" step="${step}" value="${settings[k]}"><em data-val="${k}">${fmt(settings[k])}</em></span>`);
const select = (k, label, opts, desc = '') => row(label, desc, `<select data-set="${k}">${opts.map(([v, t]) => `<option value="${v}"${String(settings[k]) === v ? ' selected' : ''}>${t}</option>`).join('')}</select>`);
const FMT = { fov: (v) => `${v}°`, hudScale: pct, camRotate: (v) => `${v.toFixed(1)}×`, camZoom: (v) => `${v.toFixed(1)}×` };

const PAGES = {
  grafis: () => `<h3>Grafis</h3>
    ${select('quality', 'Kualitas', [['auto', 'Auto (disarankan)'], ['high', 'Tinggi'], ['mid', 'Sedang (laptop)'], ['low', 'Rendah']], 'Resolusi, anti-aliasing, bayangan & kepadatan rumput. Auto menyesuaikan resolusi agar tetap lancar.')}
    ${toggle('shadow', 'Bayangan')}
    ${toggle('bloom', 'Bloom', 'Cahaya lampu & matahari berpendar.')}
    ${toggle('tilt', 'Tilt-shift', 'Blur di tepi layar (efek miniatur).')}
    ${toggle('vignette', 'Vignette', 'Tepi layar sedikit lebih gelap.')}
    ${toggle('wind', 'Garis angin')}
    ${slider('fov', 'Sudut pandang kamera (FOV)', 28, 60, 1, FMT.fov)}
    ${toggle('fps', 'Tampilkan FPS')}`,
  audio: () => `<h3>Audio</h3>
    ${row('Suara', 'Juga tombol ' + keyLabel(ACTIONS.mute.keys[0] || '') + ' atau 🔊 di kanan.', `<label class="switch"><input type="checkbox" data-mute${sfx.muted ? '' : ' checked'}><i></i></label>`)}
    ${slider('volMaster', 'Volume utama', 0, 1, 0.05)}
    ${slider('volSfx', 'Efek suara', 0, 1, 0.05, pct, 'Langkah, ambil barang, makan, pintu…')}
    ${slider('volEngine', 'Mesin mobil', 0, 1, 0.05)}
    ${slider('volAmbient', 'Suasana', 0, 1, 0.05, pct, 'Suara hujan.')}`,
  hud: () => `<h3>HUD</h3>
    ${slider('hudScale', 'Ukuran HUD', 0.7, 1.4, 0.05, FMT.hudScale)}
    ${toggle('hudVitals', 'Status bertahan hidup', 'Lapar, haus, energi, kandung kemih, darah, stamina (kiri bawah).')}
    ${toggle('hudClock', 'Jam & tanggal', 'Kiri atas.')}
    ${toggle('hudHints', 'Petunjuk tombol', 'Baris bantuan di bawah layar.')}
    ${toggle('hudToasts', 'Notifikasi', '"+1 Apel", "Hari baru"… di kanan bawah.')}
    ${toggle('hudButtons', 'Tombol kanan', 'Menu, respawn, peta, suara.')}
    ${toggle('hudCamPad', 'Tombol kamera', 'Putar / zoom / reset di kanan.')}`,
  kamera: () => `<h3>Kamera</h3>
    ${slider('camRotate', 'Sensitivitas putar', 0.3, 2.5, 0.1, FMT.camRotate, 'Drag mouse / jari untuk memutar.')}
    ${slider('camZoom', 'Sensitivitas zoom', 0.3, 2.5, 0.1, FMT.camZoom, 'Scroll mouse / cubit.')}
    ${toggle('invertX', 'Balik arah horizontal')}
    ${toggle('invertY', 'Balik arah vertikal')}`,
  tombol: () => {
    const groups = {};
    for (const [a, d] of Object.entries(ACTIONS)) (groups[d.group] ||= []).push([a, d]);
    const slot = (a, i, code) => {
      const on = listen && listen.action === a && listen.slot === i;
      return `<button class="keycap${on ? ' listening' : ''}${code ? '' : ' empty'}" data-bind="${a}" data-slot="${i}">${on ? 'Tekan tombol…' : code ? keyLabel(code) : '＋'}</button>`;
    };
    return `<h3>Tombol</h3><p class="set-note">Klik tombol lalu tekan tombol baru. <kbd>Esc</kbd> batal, <kbd>⌫</kbd> kosongkan. Tombol yang sudah dipakai aksi lain akan dipindah.</p>
      ${Object.entries(groups).map(([g, list]) => `<h4>${g}</h4>${list.map(([a, d]) => row(d.name, '', `<span class="keys">${slot(a, 0, d.keys[0])}${slot(a, 1, d.keys[1])}</span>`)).join('')}`).join('')}
      <h4>Mouse / layar sentuh</h4>
      ${row('Putar kamera', '', '<span class="set-fixed">Drag</span>')}${row('Zoom', '', '<span class="set-fixed">Scroll / cubit</span>')}${row('Reset kamera', '', '<span class="set-fixed">Klik ganda</span>')}
      <div class="set-actions"><button data-act="resetKeys">Kembalikan tombol default</button></div>`;
  },
  demo: () => {
    if (!ui.started) return '<h3>Demo</h3><p class="set-note">Mulai atau muat permainan dulu untuk memakai alat demo.</p>';
    const d = today(), fmtH = fmtHour;
    const speeds = [['0', 'Berhenti'], ['1', '1× (nyata)'], ['60', '60× (1 mnt = 1 jam)'], ['600', '600×'], ['3600', '3600× (1 dtk = 1 jam)']];
    return `<h3>Demo</h3><p class="set-note">Alat untuk mencoba fitur (hanya saat <code>DEBUG = true</code> di game/config.js).</p>
      <h4>Waktu</h4>
      ${row('Ikuti jam asli', `sekarang ${fmtH(nowHour())}`, `<label class="switch"><input type="checkbox" data-time="real"${time.real ? ' checked' : ''}><i></i></label>`)}
      ${row('Jam', '<kbd>[</kbd> <kbd>]</kbd> geser ±1 jam', `<span class="set-slider"><input type="range" data-time="hour" min="0" max="24" step="0.05" value="${time.hour}"><em data-val="hour">${fmtH(time.hour)}</em></span>`)}
      ${row('Kecepatan', '', `<select data-time="speed"${time.real ? ' disabled' : ''}>${speeds.map(([v, t]) => `<option value="${v}"${+v === time.speed ? ' selected' : ''}>${t}</option>`).join('')}</select>`)}
      <div class="set-btns">${[['5.4', 'Subuh'], ['6.6', 'Fajar'], ['12', 'Siang'], ['17.6', 'Sunset'], ['19', 'Senja'], ['23', 'Malam']].map(([h, t]) => `<button data-hour="${h}">${t}</button>`).join('')}</div>
      <h4>Cuaca <small>hari ini, kembali otomatis besok</small></h4>
      <div class="set-btns">${Object.entries(CAL.weathers).map(([k, w]) => `<button data-weather="${k}"${d.weather.id === k ? ' class="on"' : ''}>${w.icon} ${w.name}</button>`).join('')}<button data-weather="">🔄 Otomatis</button></div>
      <h4>Kalender <small>${d.season.icon} ${d.weekday}, ${fmtDate(d)}</small></h4>
      <div class="set-btns"><button data-day="1">+1 hari</button><button data-day="7">+7 hari</button><button data-day="season">Musim berikutnya</button><button data-act="calendar">📅 Buka kalender<small>klik tanggal = lompat</small></button></div>
      <h4>Barang &amp; kondisi</h4>
      <div class="set-btns"><button data-act="chest">🎁 Peti semua barang<small>ambil barang apa pun, uji lapar/racun…</small></button></div>
      <h4>Teleport</h4>
      <div class="set-btns">${mapMarkers.filter(m => m.kind !== 'water').map((m) => `<button data-tp="${mapMarkers.indexOf(m)}">${m.icon} ${m.label}</button>`).join('')}</div>`;
  },
};
function render() {
  $('setTabs').innerHTML = TABS.map(([k, t]) => `<button data-tab="${k}" class="${k === tab ? 'on' : ''}">${t}</button>`).join('');
  $('setBody').innerHTML = PAGES[tab]();
}

// ---------------------------------------------------------------- key mapping
function stopListen() { listen = null; body.remove('rebinding'); }
addEventListener('keydown', (e) => {   // capture: runs before every other key listener
  if (!listen) return;
  e.preventDefault(); e.stopImmediatePropagation();
  const { action, slot } = listen, keysNow = [...ACTIONS[action].keys];
  stopListen();
  if (e.code !== 'Escape') {
    if (e.code === 'Backspace' || e.code === 'Delete') keysNow[slot] = null;
    else {
      for (const [a, d] of Object.entries(ACTIONS)) if (a !== action && d.keys.includes(e.code)) { setKeys(a, d.keys.filter(c => c !== e.code)); toast(`${keyLabel(e.code)} dipindah dari "${d.name}"`); }
      const other = keysNow.indexOf(e.code); if (other >= 0) keysNow[other] = null;
      keysNow[slot] = e.code;
    }
    setKeys(action, keysNow.filter(Boolean));
    showHint(player.mode === 'car', 4000);
  }
  render();
}, true);

// ---------------------------------------------------------------- demo actions
function demo(b) {
  if (b.dataset.hour) setManualHour(parseFloat(b.dataset.hour));
  else if ('weather' in b.dataset) forceWeather(b.dataset.weather || null);
  else if (b.dataset.day) setDay(b.dataset.day === 'season' ? (Math.floor(time.day / CAL.daysPerSeason) + 1) * CAL.daysPerSeason : time.day + +b.dataset.day);
  else if (b.dataset.tp) {
    if (player.mode !== 'foot') { toast('Keluar dari mobil dulu'); return; }
    const m = mapMarkers[+b.dataset.tp];
    closeSettings(); placePlayer(m.x + 2.5, m.z + 2.5, 0); toast(`Teleport ke ${m.label}`); return;
  } else return false;
  sfx.pop(); render();
}

export function initSettings() {
  $('setClose').onclick = closeSettings;
  $('settingsMenu').onclick = (e) => { if (e.target.id === 'settingsMenu') closeSettings(); };
  $('setTabs').onclick = (e) => { const b = e.target.closest('button[data-tab]'); if (b) { stopListen(); tab = b.dataset.tab; render(); sfx.step(0.5); } };
  $('clock').onclick = () => openSettings(DEBUG ? 'demo' : 'grafis');
  $('setBody').addEventListener('input', (e) => {
    const el = e.target, k = el.dataset.set;
    if (k) {
      const v = el.type === 'checkbox' ? el.checked : el.type === 'range' ? parseFloat(el.value) : el.value;
      set(k, v);
      const out = $('setBody').querySelector(`[data-val="${k}"]`); if (out) out.textContent = (FMT[k] || pct)(v);
    } else if ('mute' in el.dataset) { sfx.setMuted(!el.checked); refreshMuteIcon(); }
    else if (el.dataset.time === 'real') { time.real = el.checked; render(); }
    else if (el.dataset.time === 'hour') { setManualHour(parseFloat(el.value)); $('setBody').querySelector('[data-val="hour"]').textContent = fmtHour(time.hour); }
    else if (el.dataset.time === 'speed') time.speed = parseFloat(el.value);
  });
  $('setBody').addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.bind) { listen = { action: b.dataset.bind, slot: +b.dataset.slot }; body.add('rebinding'); render(); return; }
    if (b.dataset.act === 'resetKeys') { resetKeys(); toast('Tombol dikembalikan ke default'); showHint(player.mode === 'car', 4000); render(); return; }
    if (b.dataset.act === 'chest' || b.dataset.act === 'calendar') {
      // these open their own panel: close every menu in the way first (Pengaturan may sit on top of the pause menu)
      if (!ui.started) { toast('Mulai permainan dulu, lalu buka lagi dari sini'); return; }
      closeSettings(); $('pause').classList.remove('show');
      if (b.dataset.act === 'chest') emit('debug:chest'); else openCalendar();
      return;
    }
    demo(b);
  });
  addEventListener('keydown', (e) => {
    if (listen || e.repeat || e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    if (e.code === 'Escape' && isOpen()) { closeSettings(); return; }
    if (is(e.code, 'settings')) { if (isOpen()) closeSettings(); else if (!['modal', 'inventory', 'profile', 'fade', 'mapView'].some(id => $(id).classList.contains('show'))) openSettings(); }
    // demo: shift the hour
    if (DEBUG && ui.started && (e.code === 'BracketLeft' || e.code === 'BracketRight')) setManualHour((time.hour + (e.code === 'BracketLeft' ? -1 : 1) + 24) % 24);
  });
}
export const settingsOpen = isOpen;
