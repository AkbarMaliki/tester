// Main menu (on the loading screen: Main Baru / Lanjutkan / Muat Game / Keluar) and the in-game pause menu
// (☰ button or Esc: save to a slot, load, controls, back to the main menu). Saving itself is systems/save.js.
import { $ } from '../engine/util.js';
import { sfx } from '../engine/audio.js';
import { clearKeys } from '../systems/input.js';
import { snapCamera } from '../systems/camera.js';
import { slotName, listSaves, latestSave, saveGame, loadGame, newGame, cloud, session } from '../systems/save.js';
import { ui, openModal, toast } from './ui.js';

let startGame = () => {};   // main.js: switches the game on after a new game / load
let busy = false;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ---------------------------------------------------------------- shared bits
function cloudText() {
  if (!cloud.enabled) return '💾 Simpanan disimpan di perangkat ini (cloud belum diatur)';
  if (cloud.online === false) return '⚠ Cloud tidak terjangkau: memakai salinan di perangkat ini';
  return cloud.signedIn ? '☁ Simpanan tersinkron ke cloud' : '☁ Cloud aktif (tanpa login)';
}
const fmtDate = (ms) => new Date(ms).toLocaleString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
const fmtPlay = (s) => { const m = Math.floor(s / 60), h = Math.floor(m / 60); return h ? `${h}j ${m % 60}m` : `${m} mnt`; };
function slotList(list, mode) {
  return '<div class="slot-list">' + list.filter(s => mode === 'load' || s.slot !== 'auto').map(({ slot, meta, where }) => {
    const empty = !meta, disabled = mode === 'load' && empty;
    const whereTxt = where === 'cloud' ? '☁ cloud' : where === 'local' ? '💾 perangkat' : '';
    return `<button class="slot-row" data-slot="${slot}"${disabled ? ' disabled' : ''}>
      <div class="sr-top"><span>${slotName(slot)}</span><span class="sr-where">${whereTxt}</span></div>
      ${empty ? '<div class="sr-info">— kosong —</div>'
        : `<div class="sr-info">${esc(meta.summary || 'Permainan tersimpan')}</div><div class="sr-date">${fmtDate(meta.savedAt)} · main ${fmtPlay(meta.playTime || 0)}</div>`}
    </button>`;
  }).join('') + '</div>';
}
// wires slot buttons; in save mode a filled slot needs a second click to overwrite
function wireSlots(root, mode, onPick) {
  root.querySelectorAll('.slot-row').forEach((b) => {
    b.onclick = () => {
      const filled = !!b.querySelector('.sr-date');
      if (mode === 'save' && filled && !b.classList.contains('confirm')) {
        root.querySelectorAll('.slot-row.confirm').forEach(o => o.classList.remove('confirm'));
        b.classList.add('confirm'); b.querySelector('.sr-info').textContent = 'Klik lagi untuk menimpa simpanan ini'; return;
      }
      onPick(b.dataset.slot);
    };
  });
}
async function doSave(slot) {
  const where = await saveGame(slot);
  if (where) toast(`Tersimpan di ${slotName(slot)} ${where === 'cloud' ? '☁' : '(perangkat ini)'}`); else toast('Gagal menyimpan!');
  return where;
}

// ---------------------------------------------------------------- main menu
function hideLoader() {
  $('loader').style.opacity = 0;
  setTimeout(() => { if (ui.started) $('loader').classList.add('gone'); }, 800);
}
async function begin(slot) {   // slot = null for a new game
  if (busy) return;
  busy = true; sfx.init(); sfx.pop();
  $('loadText').textContent = slot ? 'Memuat simpanan…' : 'Menyiapkan dunia baru…';
  try {
    if (!slot) newGame();
    else if (!(await loadGame(slot))) { $('loadText').textContent = 'Simpanan tidak ditemukan.'; return; }
    $('mainMenu').classList.remove('panel');
    snapCamera(); hideLoader(); startGame({ fresh: !slot });
  } finally { busy = false; }
}
async function showLoadList(target, onBack, onPick) {
  target.innerHTML = '<h3>Muat Game</h3><p>Memeriksa simpanan…</p>';
  const list = await listSaves();
  target.innerHTML = '<h3>Muat Game</h3>' + slotList(list, 'load') + '<button class="menu-back">Kembali</button>';
  wireSlots(target, 'load', onPick);
  target.querySelector('.menu-back').onclick = onBack;
  $('mmStatus').textContent = cloudText();
}
async function refreshContinue() {
  $('mmContinue').disabled = true; $('mmContinueInfo').textContent = 'memeriksa simpanan…';
  const last = await latestSave();
  $('mmContinue').disabled = !last;
  $('mmContinue').dataset.slot = last ? last.slot : '';
  $('mmContinueInfo').textContent = last ? `${slotName(last.slot)} · ${fmtDate(last.meta.savedAt)}` : 'belum ada simpanan';
  $('mmStatus').textContent = cloudText();
}
export function showMainMenu() {
  ui.started = false; clearKeys();
  $('loader').classList.remove('gone'); $('loader').style.opacity = 1;
  $('bar').style.display = 'none'; $('loadText').textContent = '';
  $('mainMenu').style.display = 'flex'; $('mainMenu').classList.remove('panel');
  refreshContinue();
}
function mainMenuAction(what) {
  if (busy) return;
  if (what === 'new') begin(null);
  else if (what === 'continue') { if ($('mmContinue').dataset.slot) begin($('mmContinue').dataset.slot); }
  else if (what === 'load') {
    sfx.init(); $('mainMenu').classList.add('panel');
    showLoadList($('mmPanel'), () => $('mainMenu').classList.remove('panel'), (slot) => begin(slot));
  } else if (what === 'exit') {
    window.close();   // only works for windows opened by a script; otherwise say goodbye
    setTimeout(() => {
      $('mainMenu').classList.add('panel');
      $('mmPanel').innerHTML = '<h3>Sampai jumpa!</h3><p>Terima kasih sudah bermain. Tutup tab ini untuk keluar.</p><button class="menu-back">Kembali ke menu</button>';
      $('mmPanel').querySelector('.menu-back').onclick = () => $('mainMenu').classList.remove('panel');
    }, 150);
  }
}

// ---------------------------------------------------------------- pause menu
const pauseOpen = () => $('pause').classList.contains('show');
function pauseMain() {
  $('pauseBody').innerHTML = `<h2>Jeda</h2><div class="mm-buttons">
    <button class="amatic" data-p="resume">Lanjutkan</button>
    <button class="amatic" data-p="save">Simpan Game</button>
    <button class="amatic" data-p="load">Muat Game</button>
    <button class="amatic" data-p="controls">Kontrol</button>
    <button class="amatic" data-p="menu">Menu Utama</button>
  </div><p class="save-status">${cloudText()}${session.slot ? ` · terakhir: ${slotName(session.slot)}` : ''}</p>`;
  $('pauseBody').querySelectorAll('[data-p]').forEach(b => { b.onclick = () => pauseAction(b.dataset.p); });
}
export function togglePause(open = !pauseOpen()) {
  if (open && !ui.started) return;
  $('pause').classList.toggle('show', open);
  if (open) { clearKeys(); pauseMain(); }
  sfx.pop();
}
async function pauseAction(what) {
  if (busy) return;
  const body = $('pauseBody');
  if (what === 'resume') togglePause(false);
  else if (what === 'controls') { togglePause(false); openModal($('controlsTemplate').innerHTML); }
  else if (what === 'save') {
    body.innerHTML = '<h2>Simpan Game</h2><p class="save-status">Memeriksa slot…</p>';
    const list = await listSaves();
    body.innerHTML = '<h2>Simpan Game</h2>' + slotList(list, 'save') + `<p class="save-status">${cloudText()}</p><button class="menu-back">Kembali</button>`;
    wireSlots(body, 'save', async (slot) => {
      busy = true; body.querySelectorAll('.slot-row').forEach(b => { b.disabled = true; });
      try { if (await doSave(slot)) togglePause(false); else pauseMain(); } finally { busy = false; }
    });
    body.querySelector('.menu-back').onclick = pauseMain;
  } else if (what === 'load') {
    body.innerHTML = '<div></div>';
    showLoadList(body.firstChild, pauseMain, async (slot) => {
      busy = true;
      try {
        const where = await loadGame(slot);
        if (where) { togglePause(false); snapCamera(); toast(`${slotName(slot)} dimuat`); } else toast('Simpanan tidak ditemukan');
      } finally { busy = false; }
    });
  } else if (what === 'menu') {
    busy = true;
    body.innerHTML = '<h2>Menyimpan…</h2><p class="save-status">Menyimpan otomatis sebelum keluar</p>';
    try { await saveGame('auto'); } finally { busy = false; }
    $('pause').classList.remove('show');
    showMainMenu();
  }
}

// ---------------------------------------------------------------- setup
export function initMenu(start) {
  startGame = start;
  document.querySelectorAll('#mainMenu [data-mm]').forEach(b => { b.onclick = () => mainMenuAction(b.dataset.mm); });
  $('menuBtn').onclick = () => togglePause();
  $('pause').onclick = (e) => { if (e.target.id === 'pause' && !busy) togglePause(false); };
  // capture phase: decide before ui.js / the inventory close their own panels on the same Esc
  addEventListener('keydown', (e) => {
    if (e.code !== 'Escape' || e.repeat || !ui.started || busy) return;
    if (pauseOpen()) { togglePause(false); return; }
    const other = ['modal', 'settings', 'inventory'].some(id => $(id).classList.contains('show'));
    if (!other) togglePause(true);
  }, true);
  // leaving the page: a last autosave (the local copy is synchronous, the cloud one best effort)
  let lastLeave = 0;
  const leave = () => {
    if (!ui.started || Date.now() - lastLeave < 5000) return;
    lastLeave = Date.now(); saveGame('auto', { keepalive: true });
  };
  addEventListener('pagehide', leave);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') leave(); });
  showMainMenu();
}
export const autoStart = () => begin(null);   // #auto in the URL (screenshot tests)
