// Static check for the module graph (no dependencies): node tools/check.cjs
//  - every relative import resolves to a file
//  - every named import is actually exported by that file
//  - layer rules: a module may only import from its own layer or a lower one,
//    and one feature never imports another feature (they talk through engine/events.js)
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'js');
// lower number = lower layer; see ARCHITECTURE.md
const LAYERS = { engine: 0, game: 0, systems: 1, world: 2, entities: 3, ui: 4, features: 5, 'main.js': 6 };

const files = [];
(function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p); else if (f.endsWith('.js')) files.push(p);
  }
})(ROOT);

const rel = (p) => path.relative(ROOT, p).split(path.sep).join('/');
const layerOf = (p) => LAYERS[rel(p).split('/')[0]];
const featureOf = (p) => { const r = rel(p).split('/'); return r[0] === 'features' && r.length > 2 ? r[1] : null; };

const exportCache = new Map();
function exportsOf(file) {
  if (exportCache.has(file)) return exportCache.get(file);
  const src = fs.readFileSync(file, 'utf8'), names = new Set();
  for (const m of src.matchAll(/export\s+(?:async\s+)?(?:const|let|var|function\*?|class)\s+([A-Za-z_$][\w$]*)/g)) names.add(m[1]);
  // extra declarators on one line: export const W = 220, HALF = W / 2;
  for (const m of src.matchAll(/^export\s+(?:const|let|var)\s+.*/gm)) for (const d of m[0].matchAll(/,\s*([A-Za-z_$][\w$]*)\s*=(?!=)/g)) names.add(d[1]);
  for (const m of src.matchAll(/export\s+(?:const|let|var)\s+\{([^}]*)\}/g)) m[1].split(',').forEach(n => n.trim() && names.add(n.split(':').pop().trim()));
  for (const m of src.matchAll(/export\s*\{([^}]*)\}/g)) m[1].split(',').forEach(n => n.trim() && names.add(n.trim().split(/\s+as\s+/).pop()));
  if (/export\s+default\b/.test(src)) names.add('default');
  exportCache.set(file, names);
  return names;
}

const errors = [];
for (const file of files) {
  const src = fs.readFileSync(file, 'utf8');
  for (const m of src.matchAll(/import\s+([^'";]*?)\s+from\s+'(\.[^']+)'/g)) {
    const [, clause, spec] = m;
    const target = path.resolve(path.dirname(file), spec);
    const where = `${rel(file)} -> ${spec}`;
    if (!fs.existsSync(target)) { errors.push(`missing file: ${where}`); continue; }
    const have = exportsOf(target);
    const named = clause.match(/\{([^}]*)\}/);
    if (named) for (const n of named[1].split(',').map(s => s.trim().split(/\s+as\s+/)[0]).filter(Boolean))
      if (!have.has(n)) errors.push(`'${n}' is not exported: ${where}`);
    const def = clause.replace(/\{[^}]*\}/, '').replace(/\*\s+as\s+\w+/, '').replace(/,/g, '').trim();
    if (def && !have.has('default')) errors.push(`no default export: ${where}`);
    const a = layerOf(file), b = layerOf(target);
    if (a !== undefined && b !== undefined && b > a) errors.push(`layer rule: ${where} (a lower layer may not import a higher one)`);
    const fa = featureOf(file), fb = featureOf(target);
    if (fa && fb && fa !== fb) errors.push(`feature rule: ${where} (features talk through engine/events.js, not imports)`);
  }
}

if (errors.length) { console.error(errors.join('\n')); console.error(`\n${errors.length} problem(s)`); process.exit(1); }
console.log(`ok: ${files.length} modules, imports and layers are consistent`);
