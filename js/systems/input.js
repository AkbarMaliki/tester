// Input: named ACTIONS with rebindable keys (Pengaturan > Tombol saves them on this device), the held movement state
// and one-shot bindings for features. Code everywhere asks for an action ("bag", "map"…), never a raw key, so a
// rebind works in every panel and in the on-screen hints. The DOM listeners live in ui/ui.js (+ each panel's own).
//   is(code, 'bag')  actionsOf(code)  keyOf('interact') -> 'E'   onAction('drop', fn)   setKeys / resetKeys
export const ACTIONS = {
  fwd:      { name: 'Maju / gas', group: 'Gerak', keys: ['KeyW', 'ArrowUp'] },
  back:     { name: 'Mundur', group: 'Gerak', keys: ['KeyS', 'ArrowDown'] },
  left:     { name: 'Kiri', group: 'Gerak', keys: ['KeyA', 'ArrowLeft'] },
  right:    { name: 'Kanan', group: 'Gerak', keys: ['KeyD', 'ArrowRight'] },
  boost:    { name: 'Lari / boost', group: 'Gerak', keys: ['ShiftLeft', 'ShiftRight'] },
  brake:    { name: 'Lompat / rem', group: 'Gerak', keys: ['Space'] },
  interact: { name: 'Interaksi / ambil', group: 'Aksi', keys: ['KeyE', 'Enter'] },
  drop:     { name: 'Taruh barang', group: 'Aksi', keys: ['KeyQ'] },
  tool:     { name: 'Pakai shortcut (alat, makan…)', group: 'Aksi', keys: ['KeyG'] },
  toolNext: { name: 'Shortcut berikutnya', group: 'Aksi', keys: ['KeyV'] },
  car:      { name: 'Masuk / keluar mobil', group: 'Aksi', keys: ['KeyF'] },
  horn:     { name: 'Klakson', group: 'Aksi', keys: ['KeyH'] },
  respawn:  { name: 'Kembali ke titik awal', group: 'Aksi', keys: ['KeyR'] },
  bag:      { name: 'Tas', group: 'Menu', keys: ['KeyI', 'Tab'] },
  profile:  { name: 'Profil', group: 'Menu', keys: ['KeyP'] },
  calendar: { name: 'Kalender', group: 'Menu', keys: ['KeyK'] },
  map:      { name: 'Peta', group: 'Menu', keys: ['KeyM'] },
  settings: { name: 'Pengaturan', group: 'Menu', keys: ['KeyT'] },
  mute:     { name: 'Suara on/off', group: 'Menu', keys: ['KeyN'] },
  camLeft:  { name: 'Putar kamera kiri', group: 'Kamera', keys: ['KeyZ'] },
  camRight: { name: 'Putar kamera kanan', group: 'Kamera', keys: ['KeyX'] },
  zoomIn:   { name: 'Zoom in', group: 'Kamera', keys: ['Equal', 'NumpadAdd'] },
  zoomOut:  { name: 'Zoom out', group: 'Kamera', keys: ['Minus', 'NumpadSubtract'] },
  camReset: { name: 'Reset kamera', group: 'Kamera', keys: ['KeyC'] },
};
const DEFAULTS = Object.fromEntries(Object.entries(ACTIONS).map(([k, a]) => [k, [...a.keys]]));
const STORE = 'tester.keys';

// ---------------------------------------------------------------- lookup
let byCode = new Map();   // code -> [actions]
function rebuild() {
  byCode = new Map();
  for (const [a, def] of Object.entries(ACTIONS)) for (const c of def.keys) { if (!byCode.has(c)) byCode.set(c, []); byCode.get(c).push(a); }
}
export const actionsOf = (code) => byCode.get(code) || [];
export const is = (code, action) => ACTIONS[action].keys.includes(code);
const NAMES = { Space: 'Space', Enter: 'Enter', Tab: 'Tab', Escape: 'Esc', Backspace: '⌫', ShiftLeft: 'Shift', ShiftRight: 'Shift kanan', ControlLeft: 'Ctrl', ControlRight: 'Ctrl kanan',
  AltLeft: 'Alt', AltRight: 'Alt kanan', ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→', Equal: '=', Minus: '-', NumpadAdd: 'Num +', NumpadSubtract: 'Num -',
  BracketLeft: '[', BracketRight: ']', Semicolon: ';', Quote: "'", Comma: ',', Period: '.', Slash: '/', Backslash: '\\', Backquote: '`', CapsLock: 'Caps' };
export const keyLabel = (code) => NAMES[code] || code.replace(/^Key|^Digit/, '').replace(/^Numpad/, 'Num ');
export const keyOf = (action) => (ACTIONS[action].keys[0] ? keyLabel(ACTIONS[action].keys[0]) : '—');   // for hints: "<kbd>E</kbd>"

// ---------------------------------------------------------------- rebinding (persisted on this device)
export function setKeys(action, codes) {
  ACTIONS[action].keys = codes.filter(Boolean);
  rebuild(); persist();
}
export function resetKeys() {
  for (const [a, k] of Object.entries(DEFAULTS)) ACTIONS[a].keys = [...k];
  rebuild(); persist();
}
function persist() {
  const diff = Object.fromEntries(Object.entries(ACTIONS).filter(([a, d]) => d.keys.join() !== DEFAULTS[a].join()).map(([a, d]) => [a, d.keys]));
  try { localStorage.setItem(STORE, JSON.stringify(diff)); } catch { /* storage unavailable */ }
}
try { for (const [a, k] of Object.entries(JSON.parse(localStorage.getItem(STORE)) || {})) if (ACTIONS[a] && Array.isArray(k)) ACTIONS[a].keys = k; } catch { /* storage unavailable */ }
rebuild();

// ---------------------------------------------------------------- held movement state
export const keys = { fwd: 0, back: 0, left: 0, right: 0, brake: 0, boost: 0 };
export const clearKeys = () => { for (const k in keys) keys[k] = 0; };
// returns true when the key drives movement (so the caller can preventDefault)
export function holdKey(code, down) {
  let hit = false;
  for (const a of actionsOf(code)) if (a in keys) { keys[a] = down ? 1 : 0; hit = true; }
  return hit;
}

// ---------------------------------------------------------------- one-shot bindings (fire while playing, not in a modal)
// onAction('drop', fn): follows rebinding (preferred). onKey('KeyG', fn): a fixed raw key. Both return unbind.
const byAction = new Map(), byKey = new Map();
const add = (map, k, fn) => { if (!map.has(k)) map.set(k, new Set()); map.get(k).add(fn); return () => map.get(k).delete(fn); };
export const onAction = (action, fn) => add(byAction, action, fn);
export const onKey = (code, fn) => add(byKey, code, fn);
export function dispatchKey(code) {
  for (const fn of byKey.get(code) || []) fn();
  for (const a of actionsOf(code)) for (const fn of byAction.get(a) || []) fn();
}
