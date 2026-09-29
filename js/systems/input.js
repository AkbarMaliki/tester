// Input state shared by gameplay: held movement keys + one-shot key bindings for features.
// The DOM listeners live in ui/ui.js (they also handle modal/settings keys); gameplay keys go through here.
export const keys = { fwd: 0, back: 0, left: 0, right: 0, brake: 0, boost: 0 };
export const KEYMAP = { KeyW: 'fwd', ArrowUp: 'fwd', KeyS: 'back', ArrowDown: 'back', KeyA: 'left', ArrowLeft: 'left', KeyD: 'right', ArrowRight: 'right', Space: 'brake', ShiftLeft: 'boost', ShiftRight: 'boost' };
export const clearKeys = () => { for (const k in keys) keys[k] = 0; };

// one-shot bindings: onKey('KeyG', () => ...) fires on key down while playing (not in a modal). Returns unbind.
const bindings = new Map();
export function onKey(code, fn) {
  if (!bindings.has(code)) bindings.set(code, new Set());
  bindings.get(code).add(fn);
  return () => bindings.get(code).delete(fn);
}
export function dispatchKey(code) { const set = bindings.get(code); if (set) for (const fn of set) fn(); }
