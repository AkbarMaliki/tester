// Tiny event bus: the only way features talk to each other (and how data files trigger code).
// Event names are 'area:verb' strings; the full list lives in docs/ARCHITECTURE.md (Events).
const handlers = new Map();

// returns an unsubscribe function
export function on(name, fn) {
  if (!handlers.has(name)) handlers.set(name, new Set());
  handlers.get(name).add(fn);
  return () => handlers.get(name).delete(fn);
}
export function once(name, fn) { const off = on(name, (p) => { off(); fn(p); }); return off; }
// returns how many listeners ran (0 = nobody listens, e.g. a typo in a data file)
export function emit(name, payload) {
  const set = handlers.get(name);
  if (!set) return 0;
  for (const fn of [...set]) fn(payload);
  return set.size;
}
