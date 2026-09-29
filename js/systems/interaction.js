// Interaction points: "press E here" spots (white diamond + ground ring).
// Anything can add one; ui/ui.js shows the prompt and runs the zone when E is pressed.
//   zone = { pos: Vector3, label, content?: html for the modal, action?: fn, quiet?: no pop sound, range?: metres, dia?, ring? }
export const zones = [];
export function addZone(zone) { zones.push(zone); return zone; }
export function removeZone(zone) { const i = zones.indexOf(zone); if (i >= 0) zones.splice(i, 1); }

const RANGE = 3.2;
// animates the markers and returns the zone nearest to `origin` (or `fallback`, e.g. the car prompt)
export function updateZones(t, origin, fallback) {
  let near = null, best = RANGE;
  for (const z of zones) {
    if (z.dia) { z.dia.rotation.y = t * 1.5; z.dia.position.y = 1.4 + Math.sin(t * 2.5) * 0.1; }
    const d = Math.hypot(origin.x - z.pos.x, origin.z - z.pos.z);
    if (d < best && d < (z.range || RANGE)) { best = d; near = z; }
  }
  if (fallback && (!near || best > 1.6)) near = fallback;
  for (const z of zones) if (z.ring) z.ring.material.opacity += ((z === near ? 0.95 : 0.3) - z.ring.material.opacity) * 0.15;
  return near;
}
