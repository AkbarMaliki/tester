// Feature registry. A feature is one folder under js/features/<name>/ whose index.js default-exports
//   { id, build?(ctx), update?(dt, ctx) }
// and is switched on by listing it in js/features/index.js. See js/features/README.md.
const list = [];

export function registerFeatures(features) {
  for (const f of features) {
    if (!f || !f.id) throw new Error('feature without an id');
    if (list.some(o => o.id === f.id)) throw new Error(`feature '${f.id}' registered twice`);
    list.push(f);
  }
}
// build phase: runs while the world is being placed (before the grass mask is baked), in list order
export async function buildFeatures(ctx) { for (const f of list) if (f.build) await f.build(ctx); }
// every frame, after physics and entities are synced, before the camera
export function updateFeatures(dt, ctx) { for (const f of list) if (f.update) f.update(dt, ctx); }
export const featureIds = () => list.map(f => f.id);
