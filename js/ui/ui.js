// Keyboard/touch input, modal, clock HUD, interaction prompt, toasts. Settings live in ui/settings.js.
import { $ } from '../engine/util.js';
import { getPixelRatio } from '../engine/core.js';
import { dayLabel } from '../systems/daynight.js';
import { respawn, unflip, isUpsideDown } from '../entities/car/car.js';
import { player, toggleCar, respawnPlayer } from '../entities/player/controller.js';
import { sfx } from '../engine/audio.js';
import { clearKeys, dispatchKey, actionsOf, holdKey, keyOf, keys } from '../systems/input.js';

export const ui = { started: false, activeZone: null };
// any panel that pauses gameplay input (the info modal, the inventory from ui/inventory.js)
export const modalOpen = () => ['modal', 'inventory', 'pause', 'profile', 'fade', 'mapView', 'settingsMenu'].some(id => $(id).classList.contains('show'));
// Pengaturan > Tombol is waiting for a key: no other listener may react to it
export const rebinding = () => document.body.classList.contains('rebinding');

// ---------------------------------------------------------------- modal + zones
// onClick (optional) receives clicks inside the panel, e.g. for buttons in `html`
export function openModal(html, onClick = null) { $('modalBody').innerHTML = html; $('modalBody').onclick = onClick; $('modal').classList.add('show'); clearKeys(); }
export function closeModal() { $('modal').classList.remove('show'); }

// black screen for time skips (sleeping, the toilet, fainting): fades out, runs `mid` while it's dark, fades back in.
// Gameplay input is paused meanwhile (modalOpen). Resolves when the screen is visible again.
export function fadeThrough(text, mid, hold = 900) {
  if ($('fade').classList.contains('show')) return Promise.resolve();
  $('fadeText').innerHTML = text || ''; $('fade').classList.add('show'); clearKeys();
  return new Promise((done) => setTimeout(() => {
    if (mid) mid();
    setTimeout(() => { $('fade').classList.remove('show'); setTimeout(done, 500); }, hold);
  }, 550));
}
function openZone(z) { if (z.action) { z.action(); if (!z.quiet) sfx.pop(); } if (z.content) openModal(z.content); }
// R / respawn button: flips or resets the car while driving, puts the kid back at the start on foot
function doRespawn() { if (player.mode === 'car') { if (isUpsideDown()) unflip(); else respawn(); } else respawnPlayer(); }

// hint line under the screen, swapped between on-foot and driving controls (built from the current key bindings)
const k = (a) => `<kbd>${keyOf(a)}</kbd>`;
const HINTS = {
  foot: () => `${k('fwd')}${k('left')}${k('back')}${k('right')} = jalan · ${k('boost')} lari · ${k('brake')} lompat · ${k('car')} masuk mobil · ${k('interact')} ambil · ${k('tool')} pakai shortcut · ${k('bag')} tas · ${k('profile')} profil · ${k('calendar')} kalender · ${k('map')} peta · ${k('settings')} pengaturan<br>Drag mouse = putar kamera · Scroll = zoom · ${k('camReset')} reset kamera`,
  car: () => `${k('fwd')}${k('left')}${k('back')}${k('right')} = setir · ${k('boost')} boost · ${k('brake')} rem · ${k('horn')} klakson · ${k('car')} keluar mobil · ${k('respawn')} reset`,
};
let hintTimer = 0;
export function showHint(driving, ms = 8000) {
  $('hint').innerHTML = HINTS[driving ? 'car' : 'foot'](); $('hint').style.opacity = 0.85;
  clearTimeout(hintTimer); hintTimer = setTimeout(() => { $('hint').style.opacity = 0; }, ms);
}
export function setPrompt(zone) {
  if (zone === ui.activeZone) return;
  ui.activeZone = zone;
  $('prompt').innerHTML = zone ? `<kbd>${keyOf('interact')}</kbd> ${zone.label}` : '';
  $('prompt').classList.toggle('show', !!zone);
}

// ---------------------------------------------------------------- keyboard / touch
// A clicked HUD button keeps keyboard focus, and the browser then "clicks" it again on Enter/Space, so interacting
// (E/Enter) or jumping would also fire the last button pressed (reset camera, respawn…). Buttons drop focus after a
// click, and while playing, gameplay keys never reach a focused button.
document.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) b.blur(); });
addEventListener('keydown', (e) => {
  if (rebinding()) return;
  const acts = actionsOf(e.code);
  if (ui.started && !modalOpen() && acts.length && document.activeElement?.tagName === 'BUTTON') { e.preventDefault(); document.activeElement.blur(); }
  if ((e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') && e.code !== 'Escape') return;
  if (holdKey(e.code, true)) e.preventDefault();
  if (e.repeat) return;
  if (e.code === 'Escape') closeModal();
  if (!ui.started || modalOpen()) return;
  if (acts.includes('respawn')) doRespawn();
  if (acts.includes('horn') && player.mode === 'car') sfx.horn();
  if (acts.includes('car')) toggleCar();
  if (acts.includes('mute')) toggleMute();
  if (acts.includes('interact')) { if (ui.activeZone) openZone(ui.activeZone); else if (player.mode === 'car') toggleCar(); }
  dispatchKey(e.code);   // one-shot bindings registered by features via systems/input.js onAction() / onKey()
});
addEventListener('keyup', (e) => { holdKey(e.code, false); });
addEventListener('blur', clearKeys);
document.querySelectorAll('#touch button').forEach(b => {
  const k = b.dataset.k, on = (v) => (e) => { e.preventDefault(); keys[k] = v; b.classList.toggle('on', !!v); };
  b.addEventListener('pointerdown', on(1)); b.addEventListener('pointerup', on(0)); b.addEventListener('pointerleave', on(0)); b.addEventListener('pointercancel', on(0));
});

// ---------------------------------------------------------------- buttons
$('modalClose').onclick = closeModal;
$('modal').onclick = (e) => { if (e.target.id === 'modal') closeModal(); };
$('prompt').onclick = () => ui.activeZone && openZone(ui.activeZone);
$('respawnBtn').onclick = doRespawn;

// short message stacked above the bag button, e.g. "+1 Apel" (html allowed)
export function toast(html, icon) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = (icon ? `<img src="${icon}" alt="">` : '') + `<span>${html}</span>`;
  $('toasts').prepend(el);
  while ($('toasts').children.length > 4) $('toasts').lastChild.remove();
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 400); }, 1800);
}
$('carBtn').onclick = () => { if (ui.started && !modalOpen()) toggleCar(); };
export function toggleMute() { sfx.toggle(); refreshMuteIcon(); }
export function refreshMuteIcon() {
  $('muteIcon').innerHTML = sfx.muted ? '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9l5 6M21 9l-5 6"/>' : '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/>';
}
$('muteBtn').onclick = toggleMute;

// ---------------------------------------------------------------- clock HUD
const fmt = (h) => { const m = Math.floor(h * 60) % 1440; return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); };
const SUN_SVG = '<circle r="7" fill="#ffd45a"/>' + Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return `<line x1="${Math.cos(a) * 9.5}" y1="${Math.sin(a) * 9.5}" x2="${Math.cos(a) * 13}" y2="${Math.sin(a) * 13}" stroke="#ffd45a" stroke-width="2.4" stroke-linecap="round"/>`; }).join('');
const MOON_SVG = '<circle r="8" fill="#e8e6ff"/><circle r="7" cx="4" cy="-3" fill="#1b1624"/>';
let lastIconDay = null, lastClockText = '';
export function updateClockUI(h) {
  const isDay = h >= 6 && h < 18;
  const frac = isDay ? (h - 6) / 12 : ((h - 18 + 24) % 24) / 12;
  const x = 6 + 88 * frac, y = 50 - 44 * Math.sin(Math.PI * frac);
  if (isDay !== lastIconDay) { $('skyIcon').innerHTML = isDay ? SUN_SVG : MOON_SVG; lastIconDay = isDay; }
  $('skyIcon').setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)})`);
  const txt = fmt(h);
  if (txt !== lastClockText) {
    lastClockText = txt; $('clockTime').textContent = txt; $('clockLabel').textContent = dayLabel(h);
  }
}

let frames = 0, fpsT = 0;
export function countFrame(dt) {
  frames++; fpsT += dt;
  if (fpsT > 0.5) { $('fps').textContent = Math.round(frames / fpsT) + ' fps · resolusi ' + Math.round(getPixelRatio() * 100) + '%'; frames = 0; fpsT = 0; }
}
export const setProgress = (p, t) => { $('bar').firstElementChild.style.width = (p * 100) + '%'; if (t) $('loadText').textContent = t; };
