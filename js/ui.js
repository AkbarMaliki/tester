// Keyboard/touch input, modal, settings panel, clock HUD, interaction prompt.
import { $ } from './util.js';
import { renderer, sun, bloom, applyQuality, setTiltShift, getPixelRatio } from './core.js';
import { time, dayLabel, nowHour } from './palette.js';
import { grassMeshes } from './vegetation.js';
import { respawn, unflip, isUpsideDown } from './car.js';
import { player, toggleCar, respawnPlayer } from './player.js';
import { sfx } from './audio.js';

export const keys = { fwd: 0, back: 0, left: 0, right: 0, brake: 0, boost: 0 };
export const ui = { started: false, activeZone: null };
export const modalOpen = () => $('modal').classList.contains('show');
export const windEnabled = () => $('optWind').checked;

const KEYMAP = { KeyW: 'fwd', ArrowUp: 'fwd', KeyS: 'back', ArrowDown: 'back', KeyA: 'left', ArrowLeft: 'left', KeyD: 'right', ArrowRight: 'right', Space: 'brake', ShiftLeft: 'boost', ShiftRight: 'boost' };

// ---------------------------------------------------------------- modal + zones
export function openModal(html) { $('modalBody').innerHTML = html; $('modal').classList.add('show'); for (const k in keys) keys[k] = 0; }
function closeModal() { $('modal').classList.remove('show'); }
function openZone(z) { if (z.action) { z.action(); if (!z.quiet) sfx.pop(); } if (z.content) openModal(z.content); }
// R / respawn button: flips or resets the car while driving, puts the kid back at the start on foot
function doRespawn() { if (player.mode === 'car') { if (isUpsideDown()) unflip(); else respawn(); } else respawnPlayer(); }

// hint line under the screen, swapped between on-foot and driving controls
const HINTS = {
  foot: '<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> / panah = jalan · <kbd>Shift</kbd> lari · <kbd>Space</kbd> lompat · <kbd>F</kbd> / <kbd>E</kbd> masuk mobil · <kbd>R</kbd> reset<br>Drag mouse = putar kamera · Scroll = zoom · <kbd>C</kbd> reset kamera',
  car: '<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> / panah = setir · <kbd>Shift</kbd> boost · <kbd>Space</kbd> rem · <kbd>H</kbd> klakson · <kbd>F</kbd> keluar mobil · <kbd>R</kbd> reset',
};
let hintTimer = 0;
export function showHint(driving, ms = 8000) {
  $('hint').innerHTML = HINTS[driving ? 'car' : 'foot']; $('hint').style.opacity = 0.85;
  clearTimeout(hintTimer); hintTimer = setTimeout(() => { $('hint').style.opacity = 0; }, ms);
}
export function setPrompt(zone) {
  if (zone === ui.activeZone) return;
  ui.activeZone = zone;
  $('prompt').innerHTML = zone ? `<kbd>E</kbd> ${zone.label}` : '';
  $('prompt').classList.toggle('show', !!zone);
}

// ---------------------------------------------------------------- keyboard / touch
addEventListener('keydown', (e) => {
  if ((e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') && e.code !== 'Escape') return;
  if (KEYMAP[e.code]) { keys[KEYMAP[e.code]] = 1; e.preventDefault(); }
  if (e.repeat) return;
  if (e.code === 'Escape') { closeModal(); $('settings').classList.remove('show'); }
  if (e.code === 'KeyT') $('settings').classList.toggle('show');
  if (e.code === 'BracketLeft' || e.code === 'BracketRight') setManualHour((time.hour + (e.code === 'BracketLeft' ? -1 : 1) + 24) % 24);
  if (!ui.started || modalOpen()) return;
  if (e.code === 'KeyR') doRespawn();
  if (e.code === 'KeyH' && player.mode === 'car') sfx.horn();
  if (e.code === 'KeyF') toggleCar();
  if (e.code === 'KeyM') toggleMute();
  if (e.code === 'KeyE' || e.code === 'Enter') { if (ui.activeZone) openZone(ui.activeZone); else if (player.mode === 'car') toggleCar(); }
});
addEventListener('keyup', (e) => { if (KEYMAP[e.code]) keys[KEYMAP[e.code]] = 0; });
addEventListener('blur', () => { for (const k in keys) keys[k] = 0; });
document.querySelectorAll('#touch button').forEach(b => {
  const k = b.dataset.k, on = (v) => (e) => { e.preventDefault(); keys[k] = v; b.classList.toggle('on', !!v); };
  b.addEventListener('pointerdown', on(1)); b.addEventListener('pointerup', on(0)); b.addEventListener('pointerleave', on(0)); b.addEventListener('pointercancel', on(0));
});

// ---------------------------------------------------------------- buttons
$('modalClose').onclick = closeModal;
$('modal').onclick = (e) => { if (e.target.id === 'modal') closeModal(); };
$('prompt').onclick = () => ui.activeZone && openZone(ui.activeZone);
$('respawnBtn').onclick = doRespawn;
$('carBtn').onclick = () => { if (ui.started && !modalOpen()) toggleCar(); };
function toggleMute() {
  const m = sfx.toggle();
  $('muteIcon').innerHTML = m ? '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9l5 6M21 9l-5 6"/>' : '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/>';
}
$('muteBtn').onclick = toggleMute;
$('menuBtn').onclick = () => openModal($('controlsTemplate').innerHTML);

// ---------------------------------------------------------------- time + settings panel
$('clock').onclick = () => $('settings').classList.toggle('show');
export function setManualHour(h) {
  time.real = false; time.hour = h;
  $('realTime').checked = false; $('speedSel').disabled = false;
}
$('realTime').onchange = (e) => { time.real = e.target.checked; $('speedSel').disabled = time.real; };
$('hourSlider').oninput = (e) => setManualHour(parseFloat(e.target.value));
$('speedSel').onchange = (e) => { time.speed = parseFloat(e.target.value); };
$('speedSel').disabled = true;
document.querySelectorAll('#settings .presets button').forEach(b => { b.onclick = () => setManualHour(parseFloat(b.dataset.h)); });

export function setQuality(q, remember = true) {
  applyQuality(q);
  for (const m of grassMeshes) m.visible = q === 'high' || m.userData.layer === 0;
  if (remember) try { localStorage.setItem('tester.quality', q); } catch { /* storage unavailable */ }
}
$('qualitySel').onchange = (e) => setQuality(e.target.value);
function isIntegratedGpu() {
  try {
    const gl = renderer.getContext(), ext = gl.getExtension('WEBGL_debug_renderer_info');
    return /intel|iris|uhd|mali|adreno|powervr|apple|swiftshader/i.test(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : '');
  } catch { return false; }
}
export function restoreQuality() {
  let q = null;
  try { q = localStorage.getItem('tester.quality'); } catch { /* storage unavailable */ }
  if (!q) q = isIntegratedGpu() ? 'auto' : 'high';   // first visit: pick a sensible default
  $('qualitySel').value = q; setQuality(q, false);
}
$('optShadow').onchange = (e) => { sun.castShadow = e.target.checked; };
$('optBloom').onchange = (e) => { bloom.enabled = e.target.checked; };
$('optTilt').onchange = (e) => setTiltShift(e.target.checked);
$('optFps').onchange = (e) => { $('fps').style.display = e.target.checked ? 'block' : 'none'; };

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
    $('hourVal').textContent = txt; $('realNow').textContent = fmt(nowHour());
    if (document.activeElement !== $('hourSlider')) $('hourSlider').value = h;
  }
}

let frames = 0, fpsT = 0;
export function countFrame(dt) {
  frames++; fpsT += dt;
  if (fpsT > 0.5) { $('fps').textContent = Math.round(frames / fpsT) + ' fps · resolusi ' + Math.round(getPixelRatio() * 100) + '%'; frames = 0; fpsT = 0; }
}
export const setProgress = (p, t) => { $('bar').firstElementChild.style.width = (p * 100) + '%'; if (t) $('loadText').textContent = t; };
