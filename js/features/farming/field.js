// Farm rules, no 3D and no DOM: the tile grid (outdoor field + greenhouse), what each tool does to a tile, and what
// happens overnight (growth, drought, seasons, weather, crows, giant crops, mutations, weeds, sprinklers, trees).
// Numbers: public/assets/data/farming.json (rules, quality, crops). index.js calls these and draws the result (view.js).
//   tile = { area: 'out'|'gh', i, j, x, z, soil (tilled), wet, dryDays, fert, debris, hits, obj, crop, giant }
//   crop = { id, age (watered days), lived, wetDays, dry (days in a row without water), dead, ripe, rare, harvests, variant }
//          trees: { id, tree: true, age, fruit, hits }
import { dateOf } from '../../systems/calendar.js';

export let D = null;                 // farming.json
const CROPS = new Map(), FERTS = new Map(), OBJS = new Map();
export const cropDef = (id) => CROPS.get(id);
export const fertDef = (id) => FERTS.get(id);
export const objDef = (id) => OBJS.get(id);
export const allCrops = () => [...CROPS.values()];

export const farm = {
  tier: 0, gh: false, day: 0,
  out: [], ghT: [], giants: [],
  bin: [],                           // shipping bin: [{ id, n }], paid out overnight
  water: 0,                          // watering can
  tools: {},                         // tool id -> level 0..2
  dirty: true,                       // something visible changed: view.js redraws
};
const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

// ---------------------------------------------------------------- grid
export function initField(data) {
  D = data;
  for (const c of D.crops) CROPS.set(c.id, c);
  for (const f of D.fertilizers) FERTS.set(f.id, f);
  for (const o of D.placeables) OBJS.set(o.id, o);
  const F = D.field, G = D.greenhouse, off = (G.w - G.tiles) / 2;
  const make = (area, i, j, x, z) => ({ area, i, j, x, z, soil: false, wet: false, dryDays: 0, fert: null, debris: null, hits: 0, obj: null, crop: null, giant: null });
  for (let j = 0; j < F.h; j++) for (let i = 0; i < F.w; i++) farm.out.push(make('out', i, j, F.x0 + i + 0.5, F.z0 + j + 0.5));
  for (let j = 0; j < G.tiles; j++) for (let i = 0; i < G.tiles; i++) farm.ghT.push(make('gh', i, j, G.x0 + off + i + 0.5, G.z0 + off + j + 0.5));
}
export const allTiles = () => [...farm.out, ...farm.ghT];
export function tileOf(area, i, j) {
  if (area === 'out') return i >= 0 && j >= 0 && i < D.field.w && j < D.field.h ? farm.out[j * D.field.w + i] : null;
  const n = D.greenhouse.tiles;
  return i >= 0 && j >= 0 && i < n && j < n ? farm.ghT[j * n + i] : null;
}
// the tile under a world position (or null)
export function tileAt(x, z) {
  const F = D.field, G = D.greenhouse, off = (G.w - G.tiles) / 2;
  const fi = Math.floor(x - F.x0), fj = Math.floor(z - F.z0);
  if (fi >= 0 && fj >= 0 && fi < F.w && fj < F.h) return tileOf('out', fi, fj);
  const gi = Math.floor(x - G.x0 - off), gj = Math.floor(z - G.z0 - off);
  return tileOf('gh', gi, gj);
}
export const near = (t, di, dj) => tileOf(t.area, t.i + di, t.j + dj);
export const tierSize = () => D.tiers[farm.tier];
export const unlocked = (t) => !!t && (t.area === 'gh' ? farm.gh : t.i < tierSize().w && t.j < tierSize().h);
export const inSeason = (def, seasonId) => def.seasons === 'all' || def.seasons.includes(seasonId);
export const busy = (t) => !!(t.crop || t.giant || t.debris || t.obj);

// ---------------------------------------------------------------- growth stage (for drawing and labels)
export function stageOf(c) {
  const d = cropDef(c.id);
  if (c.dead) return 'dead';
  if (c.tree) return c.age < d.days * 0.25 ? 0 : c.age < d.days * 0.5 ? 1 : c.age < d.days ? 2 : 3;
  if (c.age >= d.days) return 4;
  if (c.harvests) return 3;
  const f = c.age / d.days;
  return c.age <= 0 ? 0 : f < 0.34 ? 1 : f < 0.67 ? 2 : 3;
}
export const isRipe = (c) => !!c && !c.dead && !c.tree && c.age >= cropDef(c.id).days;
export const treeGrown = (c) => c.age >= cropDef(c.id).days;
export const treeQuality = (c) => Math.min(5, 1 + Math.floor(Math.max(0, c.age - cropDef(c.id).days) / 14));
export const daysLeft = (c) => Math.max(0, Math.ceil(cropDef(c.id).days - c.age));

// ---------------------------------------------------------------- tool / hand actions on one tile
// Each returns { ok, msg?, fx?, gain?: [[itemId, n]], hitOnly? }: index.js plays the effect, adds items, shows msg.
const no = (msg) => ({ ok: false, msg });
export function hoe(t) {
  if (!unlocked(t)) return no(t?.area === 'gh' ? 'Rumah kaca masih rusak' : 'Lahan ini belum dibuka. Perluas kebun di Toko Tani');
  if (t.debris) return no({ weed: 'Potong rumput liar dengan sabit dulu', stone: 'Pecahkan batu dengan palu dulu', branch: 'Singkirkan ranting dengan kapak dulu', stump: 'Tebang tunggul dengan kapak dulu' }[t.debris]);
  if (t.soil || busy(t)) return no(null);
  t.soil = true; t.dryDays = 0; farm.dirty = true;
  return { ok: true, fx: 'dig' };
}
export function water(t) {
  if (!t || !t.soil || t.giant) return no(null);
  if (t.crop?.tree) return no(null);
  const was = t.wet; t.wet = true; t.dryDays = 0; farm.dirty = true;
  return { ok: true, fx: 'water', fresh: !was };
}
export function sickle(t) {
  if (!t) return no(null);
  if (t.debris === 'weed') { t.debris = null; farm.dirty = true; return { ok: true, fx: 'cut', gain: [['rumput', 1]] }; }
  if (t.crop?.dead) { clearCrop(t); return { ok: true, fx: 'cut', msg: 'Tanaman layu dibersihkan' }; }
  if (isRipe(t.crop)) return harvest(t);
  return no(null);
}
export function hammer(t, lvl) {
  if (!t) return no(null);
  if (t.debris === 'stone') {
    if (++t.hits < D.tools.palu.hits[lvl]) return { ok: true, fx: 'rock', hitOnly: true };
    t.debris = null; t.hits = 0; farm.dirty = true;
    return { ok: true, fx: 'rock', gain: [['batu', rnd(1, 2)]] };
  }
  if (t.soil && !t.crop && !t.giant && !t.obj) { t.soil = false; t.wet = false; t.fert = null; farm.dirty = true; return { ok: true, fx: 'dig', msg: 'Tanah diratakan' }; }
  return no(null);
}
export function axe(t, lvl) {
  if (!t) return no(null);
  if (t.debris === 'branch') {
    if (++t.hits < D.tools.kapak.hits[lvl]) return { ok: true, fx: 'chop', hitOnly: true };
    t.debris = null; t.hits = 0; farm.dirty = true;
    return { ok: true, fx: 'chop', gain: [['ranting', rnd(1, 2)]] };
  }
  if (t.debris === 'stump') {
    if (lvl < 1) return no('Tunggul terlalu keras. Butuh Kapak Perak');
    if (++t.hits < 3) return { ok: true, fx: 'chop', hitOnly: true };
    t.debris = null; t.hits = 0; farm.dirty = true;
    return { ok: true, fx: 'chop', gain: [['ranting', rnd(3, 5)]] };
  }
  if (t.crop?.tree) {
    const c = t.crop, need = treeGrown(c) ? 6 - lvl * 2 : 1;
    if (++c.hits < need) return { ok: true, fx: 'chop', hitOnly: true, msg: c.hits === 1 ? `Menebang pohon ${cropDef(c.id).name}… (${need - c.hits} ayunan lagi)` : null };
    const wood = treeGrown(c) ? rnd(5, 8) : 1;
    t.crop = null; farm.dirty = true;
    return { ok: true, fx: 'chop', gain: [['ranting', wood]], msg: `Pohon ${cropDef(c.id).name} ditebang` };
  }
  if (t.giant) return harvestGiant(t.giant);
  return no(null);
}

export function plant(t, cropId, seasonId) {
  const d = cropDef(cropId);
  if (!unlocked(t)) return no(t?.area === 'gh' ? 'Rumah kaca masih rusak' : 'Lahan ini belum dibuka');
  if (d.kind === 'tree') {
    if (t.area !== 'out') return no('Pohon buah hanya bisa ditanam di luar rumah kaca');
    if (busy(t)) return no('Petak ini tidak kosong');
    for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) { const n = near(t, di, dj); if (n && n !== t && (n.crop?.tree || n.giant)) return no('Terlalu dekat dengan pohon lain'); }
    t.soil = false; t.wet = false; t.fert = null;
    t.crop = { id: cropId, tree: true, age: 0, fruit: 0, hits: 0 }; farm.dirty = true;
    return { ok: true, fx: 'plant' };
  }
  if (!t.soil) return no('Cangkul tanahnya dulu');
  if (busy(t)) return no(null);
  if (t.area === 'out' && !inSeason(d, seasonId)) return no(`${d.name} tidak tumbuh di musim ini (tanam di rumah kaca)`);
  t.crop = { id: cropId, age: 0, lived: 0, wetDays: 0, dry: 0, dead: false, ripe: false, rare: false, harvests: 0, variant: Math.floor(Math.random() * (d.colors?.length || 1)) };
  farm.dirty = true;
  return { ok: true, fx: 'plant' };
}
export function fertilize(t, fertId) {
  if (!t?.soil || t.giant) return no('Taburkan pupuk di tanah yang sudah dicangkul');
  if (t.fert) return no(`Sudah diberi ${fertDef(t.fert).name}`);
  if (t.crop && (t.crop.dead || isRipe(t.crop))) return no(null);
  t.fert = fertId; farm.dirty = true;
  return { ok: true, fx: 'plant' };
}
export function place(t, objId) {
  if (!unlocked(t)) return no('Lahan ini belum dibuka');
  if (busy(t)) return no('Petak ini tidak kosong');
  if (objDef(objId).model === 'scarecrow' && t.area !== 'out') return no('Tidak ada gagak di dalam rumah kaca');
  t.obj = objId; farm.dirty = true;
  return { ok: true, fx: 'place' };
}
export function takeObj(t) {
  const id = t.obj; t.obj = null; farm.dirty = true;
  return { ok: true, fx: 'pick', gain: [[id, 1]] };
}
export function pullWeed(t) { t.debris = null; farm.dirty = true; return { ok: true, fx: 'cut', gain: [['rumput', 1]] }; }
export function clearCrop(t) { t.crop = null; t.fert = null; farm.dirty = true; return { ok: true, fx: 'cut' }; }

// ---------------------------------------------------------------- harvesting + quality ⭐1..5
export const qualityId = (id, q) => (q > 1 ? `${id}_q${q}` : id);
function flowerNearby(t) {
  const r = D.quality.flowerRange;
  for (let dj = -r; dj <= r; dj++) for (let di = -r; di <= r; di++) {
    const n = (di || dj) && near(t, di, dj);
    if (n && isRipe(n.crop) && cropDef(n.crop.id).kind === 'flower') return true;
  }
  return false;
}
export function qualityOf(t) {
  const c = t.crop, d = cropDef(c.id);
  const care = c.wetDays / Math.max(1, c.lived);
  const score = 1 + care * 2 + (fertDef(t.fert)?.quality || 0) + (d.kind !== 'flower' && flowerNearby(t) ? D.quality.flowerBonus : 0) + (d.mutant ? 1 : 0) + Math.random();
  return Math.max(1, Math.min(5, Math.floor(score)));
}
export function harvest(t) {
  const c = t.crop, d = cropDef(c.id);
  if (c.tree) {
    if (!c.fruit) return no(null);
    const n = c.fruit; c.fruit = 0; farm.dirty = true;
    return { ok: true, fx: 'harvest', gain: [[qualityId(d.id, treeQuality(c)), n]] };
  }
  const q = qualityOf(t), n = rnd(d.yield[0], d.yield[1]), gain = [], rare = c.rare;
  if (rare) { gain.push([`${d.id}_emas`, 1]); if (n > 1) gain.push([qualityId(d.id, q), n - 1]); }
  else gain.push([qualityId(d.id, q), n]);
  if (d.mutant && Math.random() < D.rules.mutantSeedChance) gain.push([`bibit_${d.id}`, 1]);
  if (d.regrow) { c.age = d.days - d.regrow; c.harvests++; c.ripe = false; c.rare = false; c.dry = 0; }
  else { t.crop = null; t.fert = null; }
  farm.dirty = true;
  return { ok: true, fx: 'harvest', gain, rare, quality: q };
}
export function harvestGiant(gi) {
  const d = cropDef(gi.id);
  for (const t of giantTiles(gi)) { t.giant = null; t.fert = null; }
  farm.giants.splice(farm.giants.indexOf(gi), 1); farm.dirty = true;
  return { ok: true, fx: 'harvest', gain: [[qualityId(d.id, 3 + (Math.random() < 0.5 ? 1 : 0) + (Math.random() < 0.2 ? 1 : 0)), rnd(12, 16)]], giant: true };
}
export const giantTiles = (gi) => { const out = []; for (let dj = 0; dj < 3; dj++) for (let di = 0; di < 3; di++) out.push(tileOf(gi.area, gi.i + di, gi.j + dj)); return out; };

// ---------------------------------------------------------------- sprinklers
const RANGES = { plus: [[1, 0], [-1, 0], [0, 1], [0, -1]] };
const square = (r) => { const a = []; for (let j = -r; j <= r; j++) for (let i = -r; i <= r; i++) if (i || j) a.push([i, j]); return a; };
RANGES['3'] = square(1); RANGES['5'] = square(2);
export const sprinklerCells = (objId) => RANGES[objDef(objId).range] || [];
function runSprinklers() {
  let n = 0;
  for (const t of allTiles()) {
    if (!t.obj || !objDef(t.obj).range || !unlocked(t)) continue;
    for (const [di, dj] of sprinklerCells(t.obj)) { const o = near(t, di, dj); if (o?.soil && !o.wet) { o.wet = true; o.dryDays = 0; n++; } }
  }
  return n;
}
// rain waters every tilled tile outdoors (also called during the day when the weather turns to rain)
export function rainOnField() {
  let n = 0;
  for (const t of farm.out) if (t.soil && !t.wet) { t.wet = true; t.dryDays = 0; n++; }
  if (n) farm.dirty = true;
  return n;
}

// ---------------------------------------------------------------- overnight
// `day` = index of the day that just began. Returns a report for the morning toasts.
export function stepDay(day) {
  const R = D.rules, date = dateOf(day), yesterday = dateOf(day - 1), season = date.season.id;
  const rep = { died: 0, season: 0, storm: 0, crows: 0, giants: [], mutants: [], rare: [], weeds: 0, ripe: 0, rain: false, sprinkled: 0, shipped: 0 };
  const kill = (c) => { c.dead = true; };
  const tiles = allTiles().filter(unlocked);

  // 1. growth from yesterday's water, drought, first ripeness (rare roll)
  for (const t of tiles) {
    const c = t.crop;
    if (!c || c.dead) continue;
    const d = cropDef(c.id);
    if (c.tree) {   // trees don't need watering: they grow, then fruit every day in their season (never in winter outside)
      if (c.age < d.days) c.age++;
      else { c.age++; if (inSeason(d, season)) c.fruit = Math.min(R.treeMaxFruit, c.fruit + 1); else c.fruit = 0; }
      continue;
    }
    c.lived++;
    const ripe = c.age >= d.days;
    if (t.wet) { c.wetDays++; c.dry = 0; if (!ripe) c.age = Math.min(d.days, c.age + 1 + (fertDef(t.fert)?.speed || 0)); }
    else if (!ripe && ++c.dry >= R.dieAfterDryDays) { kill(c); rep.died++; continue; }
    if (!c.ripe && c.age >= d.days) {
      c.ripe = true; rep.ripe++;
      if (!d.mutant && Math.random() < D.quality.rareChance * (fertDef(t.fert)?.rare || 1)) { c.rare = true; rep.rare.push(d.name); }
    }
  }
  // 2. a new season: outdoor crops of the old season wither (the greenhouse keeps them)
  if (yesterday.seasonIndex !== date.seasonIndex) {
    for (const t of farm.out) { const c = t.crop; if (c && !c.dead && !c.tree && !inSeason(cropDef(c.id), season)) { kill(c); rep.season++; } }
  }
  // 3. yesterday's storm: flattened crops outdoors and branches blown onto the field
  if (yesterday.weather.id === 'badai') {
    for (const t of farm.out) { const c = t.crop; if (c && !c.dead && !c.tree && unlocked(t) && Math.random() < R.stormKill) { kill(c); rep.storm++; } }
    const free = shuffle(farm.out.filter(t => unlocked(t) && !t.soil && !busy(t)));
    for (let k = rnd(...R.stormDebris); k > 0 && free.length; k--) free.pop().debris = 'branch';
  }
  // 4. crows eat one crop that no scarecrow protects
  const growing = farm.out.filter(t => unlocked(t) && t.crop && !t.crop.dead && !t.crop.tree);
  if (growing.length >= R.crowMinCrops && Math.random() < R.crowChance) {
    const guards = farm.out.filter(t => t.obj && objDef(t.obj).model === 'scarecrow');
    const open = growing.filter(t => !guards.some(g => Math.hypot(g.i - t.i, g.j - t.j) <= R.scarecrowRange));
    if (open.length) { const t = open[Math.floor(Math.random() * open.length)]; t.crop = null; rep.crows++; }
  }
  // 5. mutations: an empty watered tile between two ripe parents may sprout a mutant crop
  const mutants = allCrops().filter(c => c.mutation);
  for (const t of tiles) {
    if (!t.soil || !t.wet || busy(t)) continue;
    const around = new Set([[1, 0], [-1, 0], [0, 1], [0, -1]].map(([di, dj]) => near(t, di, dj)?.crop).filter(isRipe).map(c => c.id));
    for (const m of mutants) {
      if (!around.has(m.mutation.a) || !around.has(m.mutation.b) || Math.random() >= m.mutation.chance) continue;
      t.crop = { id: m.id, age: 1, lived: 1, wetDays: 1, dry: 0, dead: false, ripe: false, rare: false, harvests: 0, variant: 0 };
      rep.mutants.push(m.name); break;
    }
  }
  // 6. giant crops: a full 3x3 of the same ripe giant-capable crop may merge
  for (const t of tiles) {
    const c = t.crop;
    if (!isRipe(c) || !cropDef(c.id).giant || c.rare) continue;
    const block = []; let ok = true;
    for (let dj = 0; dj < 3 && ok; dj++) for (let di = 0; di < 3 && ok; di++) {
      const o = near(t, di, dj);
      if (!o || !unlocked(o) || !isRipe(o.crop) || o.crop.id !== c.id || o.crop.rare) ok = false; else block.push(o);
    }
    if (!ok || Math.random() >= R.giantChance) continue;
    const gi = { id: c.id, area: t.area, i: t.i, j: t.j };
    for (const o of block) { o.crop = null; o.giant = gi; }
    farm.giants.push(gi); rep.giants.push(cropDef(c.id).name);
  }
  // 7. weeds on untouched ground, forgotten tilled soil turns back to ground
  let weeds = farm.out.filter(t => t.debris === 'weed').length;
  for (const t of farm.out) {
    if (!unlocked(t)) continue;
    if (!t.soil && !busy(t) && weeds < R.maxWeeds && Math.random() < R.weedChance) { t.debris = 'weed'; weeds++; rep.weeds++; }
    if (t.soil && !t.crop && !t.giant && !t.obj) {
      if (t.wet) t.dryDays = 0;
      else if (++t.dryDays >= R.revertAfterDryDays && Math.random() < R.revertChance) { t.soil = false; t.fert = null; t.dryDays = 0; }
    }
  }
  // 8. the soil dries overnight (water-retaining fertiliser may keep it wet), then today's rain and the sprinklers
  for (const t of allTiles()) if (t.wet) t.wet = Math.random() < (fertDef(t.fert)?.keepWet || 0);
  if (date.weather.fx === 'rain') { rainOnField(); rep.rain = true; }
  rep.sprinkled = runSprinklers();
  farm.dirty = true;
  return rep;
}

// ---------------------------------------------------------------- new game: an overgrown field (Harvest Moon style)
export function scatterDebris() {
  const free = shuffle(farm.out.filter(t => !busy(t)));
  const put = (kind, n) => { for (let k = 0; k < n && free.length; k++) free.pop().debris = kind; };
  put('weed', 22); put('stone', 12); put('branch', 10); put('stump', 4);
  // keep the gate + the first rows mostly clear so the first lobak seeds can go in right away
  for (const t of farm.out) if (t.j < 2 && t.i >= 4 && t.i < 8) t.debris = null;
}
export function resetFarm() {
  for (const t of allTiles()) Object.assign(t, { soil: false, wet: false, dryDays: 0, fert: null, debris: null, hits: 0, obj: null, crop: null, giant: null });
  farm.giants.length = 0; farm.bin.length = 0;
  farm.tier = 0; farm.gh = false; farm.water = 0; farm.tools = {};
  farm.dirty = true;
}

// ---------------------------------------------------------------- save / load (compact: only tiles that aren't empty ground)
const TILE_KEYS = ['soil', 'wet', 'dryDays', 'fert', 'debris', 'hits', 'obj'];
export function serialize() {
  const tiles = [];
  allTiles().forEach((t, k) => {
    if (!t.soil && !t.debris && !t.obj && !t.crop) return;
    const o = { k };
    for (const key of TILE_KEYS) if (t[key]) o[key] = t[key];
    if (t.crop) o.crop = { ...t.crop };
    tiles.push(o);
  });
  return { tier: farm.tier, gh: farm.gh, day: farm.day, water: farm.water, tools: { ...farm.tools }, bin: farm.bin.map(b => [b.id, b.n]),
    giants: farm.giants.map(g => [g.id, g.area, g.i, g.j]), tiles };
}
export function deserialize(s, validItem) {
  resetFarm();
  farm.tier = Math.min(D.tiers.length - 1, s.tier || 0); farm.gh = !!s.gh; farm.water = s.water || 0; farm.tools = { ...(s.tools || {}) };
  farm.bin = (s.bin || []).filter(([id]) => validItem(id)).map(([id, n]) => ({ id, n }));
  const all = allTiles();
  for (const o of s.tiles || []) {
    const t = all[o.k];
    if (!t) continue;
    for (const key of TILE_KEYS) if (o[key] !== undefined) t[key] = o[key];
    if (o.crop && cropDef(o.crop.id)) t.crop = { ...o.crop };
  }
  for (const [id, area, i, j] of s.giants || []) {
    if (!cropDef(id)) continue;
    const gi = { id, area, i, j };
    farm.giants.push(gi);
    for (const t of giantTiles(gi)) if (t) t.giant = gi;
  }
  farm.dirty = true;
}
