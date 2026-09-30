// Farming, Harvest Moon / Rune Factory style: hoe the soil, plant seeds, water every day, harvest ⭐1-⭐5 crops, sell
// them in the shipping bin. Crops only grow on watered days, die of drought or when their season ends, weather waters
// (rain) or wrecks (storm) the field, crows eat unguarded crops. Plus fertiliser, giant crops, golden rare crops,
// mutations, fruit trees, flowers (pollination), a greenhouse, farm size and tool upgrades, sprinklers.
//   field.js  rules + state       view.js  instanced drawing       models.js  every 3D model
//   items.js  item definitions     shop.js  Toko Tani + Kotak Kirim panels
// Data: public/assets/data/farming.json. Controls: tool bar at the bottom (V / 1-9 pick), G use it on the tile in
// front, E = contextual (harvest, pick up, clear, or the selected tool). Talks to others only through events.
import * as THREE from 'three';
import { scene, world } from '../../engine/core.js';
import { on, emit } from '../../engine/events.js';
import { loadAsset, frand } from '../../engine/util.js';
import { sfx } from '../../engine/audio.js';
import { addZone } from '../../systems/interaction.js';
import { keyOf } from '../../systems/input.js';
import { selectedItem } from '../../systems/hotbar.js';
import { registerSave } from '../../systems/save.js';
import { inventory, itemDef, addItem, removeItem, countOf } from '../../systems/inventory.js';
import { addGold, fmtGold } from '../../systems/wallet.js';
import { time } from '../../systems/daynight.js';
import { CAL, today } from '../../systems/calendar.js';
import { stats, spendStamina, setMeter } from '../../systems/stats.js';
import { addMapMarker } from '../../systems/mapmarkers.js';
import { keepOut, landDist, maskAt, FARM } from '../../world/worldmap.js';
import { cutGrass, grassIn } from '../../world/vegetation.js';
import { board } from '../../world/props.js';
import { smoke } from '../../world/effects.js';
import { avatar, player, isCarrying } from '../../entities/player/controller.js';
import { ui, toast, setPrompt, modalOpen } from '../../ui/ui.js';
import {
  farm, initField, tileAt, near, unlocked, busy, cropDef, objDef, isRipe, stageOf, treeGrown, daysLeft, inSeason, allTiles,
  hoe, water, sickle, hammer, axe, plant, fertilize, place, takeObj, pullWeed, clearCrop, harvest, harvestGiant,
  stepDay, rainOnField, scatterDebris, resetFarm, serialize, deserialize,
} from './field.js';
import { redraw, drawCursor, rareTiles, sprinklerTiles } from './view.js';
import { defineFarmItems, setToolLevel, toolHand, KIND, TOOL_IDS } from './items.js';
import { openShop, openBin, payBin, setShopHooks, syncIncoming } from './shop.js';
import { setTool, play, playing, toolPoint, toolAction, update as animUpdate } from './anim.js';
import { initWoodcut, woodTarget, chop, updateWoodcut, woodNewDay, saveWood, loadWood, hitsOn, woodRules } from './woodcut.js';
import { shopKiosk, shippingBin, well, greenhouseFrame, greenhouseGlass, fence, fieldBase } from './models.js';

const REACH = 0.9;          // the tile this far in front of the kid is the one tools work on
const NEAR_FARM = 7;        // tool bar + cursor show up within this distance of the farm
const LVL_COST = [1, 0.8, 0.65];
const FAR = new THREE.Vector3(9999, 0, 9999);
let D = null, G = null;
const spots = {};
let gh = null, glass = null, fenceObj = null, baseObj = null;
let sel = null;             // item selected on the shortcut bar (systems/hotbar.js)
let target = null, cells = [], dir = [0, 1], ctx = null, nearFarm = false;
let wild = null;            // wild tree / stump in front of the kid while the axe is selected (woodcut.js)
const mow = new THREE.Vector3(); let mowable = false;   // sickle: standing grass in front of the kid
let rainT = 0, fxT = 0, roofK = 1, lastLabel = '', box = null;
const farmZonePos = new THREE.Vector3();

const onFoot = () => player.mode === 'foot' && avatar.visible;
const lvl = (id) => farm.tools[id] || 0;
const kindOf = (id) => (id ? KIND.get(id) : null);

// ---------------------------------------------------------------- the shortcut bar (systems/hotbar.js, ui/hotbar.js)
// Our items carry `hotbarUse`, so G on them comes here as 'hotbar:use'. The watering can shows its water on the bar.
const barChanged = () => emit('hotbar:refresh');
function onHotbarUse({ id }) {
  if (!KIND.has(id)) return;   // another feature's item (ranch tools, feed…)
  sel = id;
  if (id === 'kapak' && wild && !target) { chopWild(); return; }
  if (id === 'sabit' && !target && (mowable || !nearFarm)) { mowGrass(); return; }
  if (!nearFarm) { toast(`${itemDef(id).name} dipakai di kebun`); return; }
  if (!countOf(id)) { toast(`${itemDef(id).name} habis. Beli lagi di Toko Tani`); sfx.drop(); return; }
  useSelected();
}

// ---------------------------------------------------------------- felling wild trees (woodcut.js)
const give = (gain) => { for (const [id, n] of gain) addItem(id, n); };
function woodCtx() {
  const R = woodRules();
  if (wild.stump) return { label: 'Bersihkan tunggul <small>· kapak</small>', run: chopWild };
  if (lvl('kapak') < R.axeLevel) return { label: `Pohon besar <small>· butuh Kapak ${D.toolLevels[R.axeLevel].name}</small>`, run: chopWild };
  return { label: `Tebang pohon <small>· ${hitsOn(wild.tree)}/${R.hits} ayunan</small>`, run: chopWild };
}
function chopWild() {
  if (!onFoot() || playing() || !wild || !ui.started || modalOpen()) return;
  if (isCarrying()) { toast(`Tanganmu penuh. <kbd>${keyOf('drop')}</kbd> taruh barangnya dulu`); sfx.drop(); return; }
  const w = wild, R = woodRules(), cost = D.tools.kapak.stamina * LVL_COST[lvl('kapak')];
  if (!w.stump && lvl('kapak') < R.axeLevel) {   // too weak: the axe bounces off
    play('chop', { onHit: () => { sfx.chop(true); puffs(w.tree.x, 0.85, w.tree.z, '#c49060', 3, 1, 0.06); toast(`Batangnya terlalu keras! Upgrade ke Kapak ${D.toolLevels[R.axeLevel].name} di Toko Tani`); spendStamina(cost * 0.5); } });
    return;
  }
  play('chop', { onHit: () => { const r = chop(w, avatar.position); if (r.gain) give(r.gain); spendStamina(cost); setMeter('energy', stats.energy - cost * 0.06); } });
}
// ---------------------------------------------------------------- mowing wild grass with the sickle (fodder)
const MOW_R = [1.0, 1.35, 1.7];   // cut radius per sickle level
function mowGrass() {
  if (!onFoot() || playing() || !ui.started || modalOpen()) return;
  if (isCarrying()) { toast(`Tanganmu penuh. <kbd>${keyOf('drop')}</kbd> taruh barangnya dulu`); sfx.drop(); return; }
  if (!mowable) { toast(today().season.id === 'dingin' ? 'Rumput tertutup salju' : 'Tidak ada rumput di depanmu'); return; }
  const p = mow.clone(), r = MOW_R[lvl('sabit')];
  play('reap', { onHit: () => {
    slashArc();
    const got = cutGrass(p.x, p.z, r);
    if (got <= 0) return;
    puffs(p.x, 0.25, p.z, '#9fdc5a', 8, 1.2, 0.09);
    const n = Math.max(1, Math.min(4, Math.floor(got / 1.3 + Math.random())));
    addItem('rumput', n);
    spendStamina(D.tools.sabit.stamina * LVL_COST[lvl('sabit')]);
  } });
}
function treeFelled(t, gain) {
  give(gain);
  toast('🌳 Pohon tumbang! Tunggulnya akan tumbuh jadi pohon lagi dalam beberapa hari');
}

// ---------------------------------------------------------------- which tiles a tool reaches
const AREAS = {
  one: (t) => [t],
  line: (t) => [t, near(t, dir[0], dir[1]), near(t, dir[0] * 2, dir[1] * 2)],
  arc: (t) => [t, near(t, dir[1], dir[0]), near(t, -dir[1], -dir[0])],
  square: (t) => { const c = near(t, dir[0], dir[1]) || t, out = []; for (let j = -1; j <= 1; j++) for (let i = -1; i <= 1; i++) out.push(near(c, i, j)); return out; },
};
function cellsFor(id, t) {
  if (!t) return [];
  const k = kindOf(id);
  if (k?.type !== 'tool') return [t];
  return AREAS[k.ref.area[lvl(id)]](t).filter(Boolean);
}
// would the selected item do something on tile t? (cursor colour, prompt)
function applies(id, t) {
  const k = kindOf(id);
  if (!k || !t) return false;
  if (k.type === 'seed') return k.ref.kind === 'tree' ? unlocked(t) && t.area === 'out' && !busy(t) : unlocked(t) && t.soil && !busy(t);
  if (k.type === 'fert') return t.soil && !t.fert && !t.giant && !(t.crop && (t.crop.dead || isRipe(t.crop)));
  if (k.type === 'obj') return unlocked(t) && !busy(t);
  switch (id) {
    case 'cangkul': return unlocked(t) && !t.soil && !busy(t);
    case 'penyiram': return t.soil && !t.giant;
    case 'sabit': return t.debris === 'weed' || !!t.crop?.dead || isRipe(t.crop);
    case 'palu': return t.debris === 'stone' || (t.soil && !t.crop && !t.giant && !t.obj);
    case 'kapak': return t.debris === 'branch' || t.debris === 'stump' || !!t.crop?.tree || !!t.giant;
  }
  return false;
}
const VERB = { cangkul: 'Cangkul tanah', penyiram: 'Siram', sabit: 'Sabit', palu: 'Palu', kapak: 'Kapak' };
function verb(id, t) {
  const k = kindOf(id);
  if (k.type === 'seed') return `Tanam ${itemDef(id).name}`;
  if (k.type === 'fert') return `Taburkan ${itemDef(id).name}`;
  if (k.type === 'obj') return `Pasang ${itemDef(id).name}`;
  if (id === 'palu' && t.debris === 'stone') return 'Pecahkan batu';
  if (id === 'palu') return 'Ratakan tanah';
  if (id === 'kapak') return t.crop?.tree ? 'Tebang pohon' : t.giant ? 'Panen raksasa' : t.debris === 'stump' ? 'Tebang tunggul' : 'Singkirkan ranting';
  if (id === 'sabit') return t.debris === 'weed' ? 'Potong rumput' : t.crop?.dead ? 'Bersihkan tanaman layu' : 'Panen dengan sabit';
  return VERB[id];
}
// "Tomat · 3 hari lagi · 💧"
function info(t) {
  const c = t.crop;
  if (!c) return t.soil ? `tanah ${t.wet ? 'basah 💧' : 'kering'}${t.fert ? ' · ' + itemDef(t.fert).name : ''}` : '';
  const d = cropDef(c.id);
  if (c.tree) return treeGrown(c) ? `Pohon ${d.name} · ${inSeason(d, today().season.id) ? `berbuah (${c.fruit})` : `berbuah di musim ${d.seasons.map(s => CAL.seasons.find(x => x.id === s).short).join('/')}`}` : `Pohon ${d.name} · tumbuh ${c.age}/${d.days} hari`;
  if (c.dead) return `${d.name} layu`;
  const st = stageOf(c);
  return `${d.name} · ${st === 4 ? 'siap panen' : `${daysLeft(c)} hari lagi`} · ${t.wet ? '💧' : c.dry ? '<span class="warn">kering!</span>' : 'belum disiram'}`;
}
const facingWater = () => landDist(avatar.position.x + Math.sin(avatar.rotation.y) * 1.3, avatar.position.z + Math.cos(avatar.rotation.y) * 1.3) < 0.2;

// E: the most useful thing to do with the tile in front. Done by hand: squat + pull (or reach up for fruit) first.
const byHand = (kind, t, fn) => () => {
  if (!onFoot() || playing()) return;
  if (isCarrying()) { toast(`Tanganmu penuh. <kbd>${keyOf('drop')}</kbd> taruh barangnya dulu`); sfx.drop(); return; }
  play(kind, { onHit: () => { fn(); puffs(t.x, 0.2, t.z, '#8a6a3a', 4, 1.4, 0.1); } });
};
function contextFor(t) {
  if (!t) return sel === 'penyiram' && facingWater() ? { label: 'Isi penyiram dengan air danau', run: refill } : null;
  const c = t.crop, d = c && cropDef(c.id);
  if (t.giant) return { label: `Panen ${cropDef(t.giant.id).name} Raksasa!`, run: byHand('pull', t, () => t.giant && finish(harvestGiant(t.giant), [t])) };
  if (c?.tree && c.fruit) return { label: `Petik ${d.name} (${c.fruit})`, run: byHand('pick', t, () => t.crop?.fruit && finish(harvest(t), [t])) };
  if (isRipe(c)) return { label: `Panen ${d.name}${c.rare ? ' ✨' : ''}`, run: byHand('pull', t, () => isRipe(t.crop) && finish(harvest(t), [t])) };
  if (c?.dead) return { label: `Cabut ${d.name} yang layu`, run: byHand('pull', t, () => t.crop?.dead && finish(clearCrop(t), [t])) };
  if (t.obj) return { label: `Ambil ${objDef(t.obj).name}`, run: byHand('pull', t, () => t.obj && finish(takeObj(t), [t])) };
  if (t.debris === 'weed') return { label: 'Cabut rumput liar', run: byHand('pull', t, () => t.debris === 'weed' && finish(pullWeed(t), [t], 1.5)) };
  if (sel && applies(sel, t)) { const i = info(t); return { label: `${verb(sel, t)}${i ? ` <small>· ${i}</small>` : ''}`, run: useSelected }; }
  if (sel === 'penyiram' && facingWater()) return { label: 'Isi penyiram dengan air danau', run: refill };
  const i = info(t);
  return i ? { label: i, run: () => {} } : null;
}

// ---------------------------------------------------------------- using the selected item
function refill() {
  const cap = D.tools.penyiram.water[lvl('penyiram')];
  if (!countOf('penyiram')) { toast('Kamu tidak membawa penyiram'); return; }
  if (farm.water >= cap) { toast('Penyiram sudah penuh'); return; }
  farm.water = cap; sfx.splash(); toast(`Penyiram penuh (💧 ${cap})`); barChanged();
}
function useSelected() {
  if (!onFoot() || playing() || !ui.started || modalOpen()) return;
  const k = kindOf(sel);
  if (!k) return;
  if (!nearFarm) return;
  if (isCarrying()) { toast(`Tanganmu penuh. <kbd>${keyOf('drop')}</kbd> taruh barangnya dulu`); sfx.drop(); return; }
  if (sel === 'penyiram' && (facingWater() || Math.hypot(avatar.position.x - spots.well.x, avatar.position.z - spots.well.z) < 2.2) && farm.water < D.tools.penyiram.water[lvl('penyiram')]) { refill(); return; }
  if (!target) { toast('Hadapkan badan ke petak kebun'); return; }
  if (sel === 'penyiram' && farm.water <= 0) { toast('Penyiram kosong! Isi di sumur atau di tepi danau'); sfx.drop(); return; }
  const at = [...cells], t = target, id = sel;
  const kind = k.type === 'tool' ? toolAction(id) : k.type === 'obj' ? 'pull' : 'sow';
  play(kind, { onHit: () => { apply(id, k, t, at); if (kind === 'reap') slashArc(); }, each: kind === 'pour' ? pourDrops : null });
}
function apply(id, k, t, at) {
  const season = today().season.id;
  if (k.type === 'seed') { const r = plant(t, k.ref.id, season); if (r.ok) removeItem(id, 1); return finish(r, [t], 0.5); }
  if (k.type === 'fert') { const r = fertilize(t, id); if (r.ok) removeItem(id, 1); return finish(r, [t], 0.5); }
  if (k.type === 'obj') { const r = place(t, id); if (r.ok) removeItem(id, 1); return finish(r, [t], 0.5); }
  const L = lvl(id), res = { ok: false, gain: [], msg: null, fx: null, hitOnly: true }, done = [];
  for (const c of at) {
    let r;
    if (id === 'cangkul') r = hoe(c);
    else if (id === 'penyiram') { if (farm.water <= 0) break; r = water(c); if (r.ok) farm.water--; }
    else if (id === 'sabit') r = sickle(c);
    else if (id === 'palu') r = hammer(c, L);
    else r = axe(c, L);
    if (r.ok) { res.ok = true; res.fx ||= r.fx; res.gain.push(...(r.gain || [])); res.hitOnly &&= !!r.hitOnly; res.giant ||= r.giant; res.rare ||= r.rare; done.push(c); if (r.msg) res.msg = r.msg; }
    else if (r.msg && !res.msg) res.msg = r.msg;
  }
  if (id === 'penyiram') barChanged();
  const cost = D.tools[id].stamina * LVL_COST[L] * (done.length ? 1 + 0.25 * (done.length - 1) : 0.5);
  finish(res, done.length ? done : [t], cost, !res.ok && id !== 'penyiram');
}
// shared ending of every action: effects, sounds, items, stamina/energy, messages
const FX_COL = { dig: '#7a5030', rock: '#b0b0c0', water: '#7fd4ff', cut: '#7ac24a', chop: '#c49060', plant: '#9a7050', harvest: '#fff4a0', place: '#e0d0a8', pick: '#ffffff' };
const col = new THREE.Color(), v = new THREE.Vector3(), vel = new THREE.Vector3();
function puffs(x, y, z, color, n, up = 1.2, size = 0.12) {
  col.set(color);
  for (let i = 0; i < n; i++) smoke.spawn(v.set(x + frand(-0.3, 0.3), y, z + frand(-0.3, 0.3)), vel.set(frand(-0.6, 0.6), frand(0.6, up * 1.8), frand(-0.6, 0.6)), frand(size * 0.6, size), frand(0.35, 0.6), col, -1.5);
}
function finish(r, tiles, stamina = 1, swingMiss = false) {
  if (!r.ok) {
    if (r.msg) toast(r.msg);
    if (swingMiss) sfx.chop(false); else if (r.msg) sfx.drop();
    return;
  }
  for (const t of tiles) puffs(t.x, 0.15, t.z, FX_COL[r.fx] || '#ffffff', r.fx === 'water' ? 6 : 4, r.fx === 'water' ? 0.6 : 1.2);
  ({ dig: () => sfx.dig(0), rock: () => sfx.dig(1), water: () => sfx.splash(), cut: () => sfx.chop(false), chop: () => sfx.chop(true), plant: () => sfx.step(0.5),
    harvest: () => sfx.pick(), place: () => sfx.drop(), pick: () => sfx.pick() }[r.fx] || (() => {}))();
  if (r.giant || r.rare) { sfx.sparkle(); for (const t of tiles) puffs(t.x, 0.5, t.z, '#ffe28a', 14, 2, 0.16); }
  let spill = 0;
  for (const [id, n] of r.gain || []) {
    const got = addItem(id, n);
    if (got < n) { farm.bin.push({ id, n: n - got }); spill += n - got; }
    if (KIND.get(id)?.type === 'produce') emit('farming:harvest', { id, n, giant: !!r.giant });
  }
  if (spill) { syncIncoming(); toast(`Tas penuh: ${spill} barang dimasukkan ke Kotak Kirim`); }
  if (r.msg) toast(r.msg);
  if (stamina > 0) { spendStamina(stamina); setMeter('energy', stats.energy - stamina * 0.06); }
}

// ---------------------------------------------------------------- the kid's poses (anim.js): tool in hand + actions
let spoutT = 0;
function animate(dt) {
  const k = kindOf(sel), isTool = k?.type === 'tool';
  const holding = isTool && (nearFarm || (sel === 'kapak' && !!wild) || (sel === 'sabit' && mowable)) && onFoot() && !isCarrying();
  setTool(isTool ? sel : null, isTool && (holding || playing()) ? toolHand(sel, lvl(sel)) : null);
  animUpdate(dt, holding);
}
// the sickle's cut: a quick arc of grass-green flecks low in front of the kid
function slashArc() {
  const yaw = avatar.rotation.y, a = avatar.position;
  for (let i = 0; i <= 8; i++) { const ang = yaw - 1.1 + i * 0.275; puffs(a.x + Math.sin(ang) * 0.85, 0.3, a.z + Math.cos(ang) * 0.85, i % 2 ? '#eaffd0' : '#9fdc5a', 1, 0.4, 0.07); }
}
// water drops out of the spout while pouring
function pourDrops(k) {
  if (k < 0.2 || k > 0.8 || (spoutT += 1) % 2) return;
  if (!toolPoint(0, -0.1, 0.3, v)) return;
  col.set('#9fe0ff');
  smoke.spawn(v, vel.set(Math.sin(avatar.rotation.y) * 0.8, -1.5, Math.cos(avatar.rotation.y) * 0.8), 0.05, 0.5, col, -4);
}

// ---------------------------------------------------------------- farm-wide visuals that change (built after batching)
function rebuildField() {
  const t = D.tiers[farm.tier], F = D.field;
  if (fenceObj) fenceObj.removeFromParent();
  if (baseObj) baseObj.removeFromParent();
  fenceObj = fence(F.x0, F.z0, t.w, t.h, FARM.x); scene.add(fenceObj);
  baseObj = fieldBase(F.x0, F.z0, t.w, t.h); scene.add(baseObj);
  farm.dirty = true;
}
function rebuildGreenhouse() {
  if (glass) glass.root.removeFromParent();
  glass = greenhouseGlass(G, gh.H, farm.gh); scene.add(glass.root);
  glass.base = glass.roofMats.map(m => m.opacity);
  const has = world.bodies.includes(gh.blocker);
  if (farm.gh && has) world.removeBody(gh.blocker); else if (!farm.gh && !has) world.addBody(gh.blocker);
  farm.dirty = true;
}
function toolChanged(id) {
  setToolLevel(id, lvl(id));
  if (id === 'penyiram') farm.water = D.tools.penyiram.water[lvl(id)];
  barChanged(); emit('inventory:changed', inventory);
}
function syncAll() {
  for (const id of TOOL_IDS) setToolLevel(id, lvl(id));
  if (D && gh) { rebuildField(); rebuildGreenhouse(); }
  barChanged(); syncIncoming(); farm.dirty = true;
}

// ---------------------------------------------------------------- overnight
function newDays(from, to) {
  const reps = [];
  for (let d = Math.max(from + 1, to - 55); d <= to; d++) { reps.push(stepDay(d)); woodNewDay(); }
  const sum = (k) => reps.reduce((n, r) => n + (Array.isArray(r[k]) ? r[k].length : r[k]), 0), list = (k) => [...new Set(reps.flatMap(r => r[k]))].join(', ');
  const gold = payBin();
  if (gold) { addGold(gold); sfx.coin(); emit('farming:shipped', { gold }); }
  if (!ui.started) return;
  const good = [], bad = [];
  if (gold) good.push(`💰 Hasil Kotak Kirim: <b>+${fmtGold(gold)}</b>`);
  if (sum('giants')) good.push(`🎉 ${list('giants')} RAKSASA tumbuh di kebun!`);
  if (sum('mutants')) good.push(`🧬 Mutasi! ${list('mutants')} muncul di kebun`);
  if (sum('rare')) good.push(`✨ ${list('rare')} berubah jadi EMAS!`);
  const rip = sum('ripe'); if (rip) good.push(`🌾 ${rip} tanaman siap panen`);
  if (reps.at(-1).rain) good.push('🌧 Hujan menyiram kebunmu');
  if (reps.at(-1).sprinkled) good.push(`💦 Penyiram otomatis menyiram ${reps.at(-1).sprinkled} petak`);
  if (sum('died')) bad.push(`🥀 ${sum('died')} tanaman mati kekeringan`);
  if (sum('season')) bad.push(`🍂 ${sum('season')} tanaman layu: musimnya sudah lewat`);
  if (sum('storm')) bad.push(`⛈ Badai merusak ${sum('storm')} tanaman`);
  if (sum('crows')) bad.push('🐦 Gagak memakan tanamanmu! Pasang orang-orangan sawah');
  const all = [...good, ...bad];
  all.slice(0, 4).forEach((m, i) => setTimeout(() => toast(m), 900 + i * 700));
}
function growAll() {   // debug: every crop ripe, every tree grown with fruit
  for (const t of allTiles()) {
    const c = t.crop;
    if (!c || c.dead) continue;
    const d = cropDef(c.id);
    if (c.tree) { c.age = Math.max(c.age, d.days); c.fruit = inSeason(d, today().season.id) ? D.rules.treeMaxFruit : 0; }
    else { c.age = d.days; c.ripe = true; c.wetDays = Math.max(c.wetDays, c.lived); c.dry = 0; }
  }
  farm.dirty = true; toast('Semua tanaman matang');
}

// ---------------------------------------------------------------- feature
export default {
  id: 'farming',

  async build() {
    D = await loadAsset('data/farming.json', 'json');
    G = D.greenhouse;
    initField(D);
    initWoodcut(D, treeFelled);
    defineFarmItems(D, CAL);
    const F = D.field;
    box = { x0: Math.min(F.x0, G.x0) - NEAR_FARM, x1: F.x0 + F.w + NEAR_FARM, z0: Math.min(F.z0, G.z0) - NEAR_FARM, z1: Math.max(F.z0 + F.h, G.z0 + G.d) + NEAR_FARM };
    // bare farmland: no wild grass / trees / wild items on the field, around the greenhouse and along the south yard
    for (let x = box.x0 + NEAR_FARM + 2; x < box.x1 - NEAR_FARM + 3; x += 5) for (let z = F.z0 - 2; z < box.z1 - NEAR_FARM + 3; z += 5) keepOut.push({ x, z, r: 4.2 });
    // buildings along the south edge, facing the field (and the camera); the road from the plaza ends at the gate
    spots.shop = shopKiosk(FARM.x + 8, FARM.z + 0.6, 0);
    spots.bin = shippingBin(FARM.x + 3.5, FARM.z + 1.6, 0);
    spots.well = well(FARM.x - 4.5, FARM.z + 1.4, 0);
    gh = greenhouseFrame(G);
    board({ x: FARM.x - 3, z: FARM.z - 2.5, rot: 0.62, map: false, title: 'KEBUN', label: 'Baca papan Kebun', html:
      '<h2>Kebun</h2><p>Lahan pertanianmu! Alat ada di <b>bar kebun</b> (bawah layar) saat kamu di kebun.</p><ul>'
      + '<li><b>Cangkul</b> tanah → <b>tanam</b> bibit → <b>siram</b> setiap hari → <b>panen</b>. Tidur untuk melewati hari.</li>'
      + '<li>Tanaman mati kalau 3 hari tidak disiram atau musimnya lewat. Hujan menyiram otomatis.</li>'
      + '<li><b>Toko Tani</b>: bibit, pupuk, penyiram otomatis, upgrade alat, perluas kebun, perbaiki rumah kaca.</li>'
      + '<li><b>Kotak Kirim</b>: jual hasil panen, uangnya datang besok pagi.</li>'
      + '<li><b>Sumur</b> atau tepi danau: isi ulang penyiram.</li></ul>'
      + '<p>Kontrol: <kbd>G</kbd> pakai alat · <kbd>E</kbd> panen / aksi · <kbd>V</kbd> atau <kbd>1</kbd>-<kbd>9</kbd> ganti alat.</p>' });
    addMapMarker({ x: F.x0 + F.w / 2, z: F.z0 + F.h / 2, icon: '🌱', label: 'Kebun' });
    addMapMarker({ x: G.x0 + G.w / 2, z: G.z0 + G.d / 2, icon: '🏡', label: 'Rumah Kaca' });
    addMapMarker({ x: spots.shop.x, z: spots.shop.z - 1.4, icon: '🛒', label: 'Toko Tani' });

    addZone({ pos: spots.shop, label: 'Toko Tani <small>· bibit, pupuk, upgrade</small>', range: 1.8, action: openShop });
    addZone({ pos: spots.bin, label: 'Kotak Kirim <small>· jual hasil panen</small>', range: 1.6, action: openBin });
    addZone({ pos: spots.well, get label() { return countOf('penyiram') ? 'Isi penyiram di sumur' : 'Sumur'; }, quiet: true, range: 1.8, action: refill });
    addZone({ get pos() { return farm.gh ? FAR : gh.door; }, label: 'Rumah kaca (rusak)', range: 2, action: () => toast('Rumah kaca ini rusak. Perbaiki di Toko Tani (tab Upgrade)') });
    addZone({ farm: true, get pos() { return ctx ? farmZonePos : FAR; }, get label() { return ctx?.label || ''; }, quiet: true, range: 1.9, action: () => ctx?.run() });

    setShopHooks({ tier: rebuildField, greenhouse: rebuildGreenhouse, tool: toolChanged });
    on('world:ready', () => { syncAll(); redraw(); });
    on('farming:debugGrow', growAll);
    on('hotbar:use', onHotbarUse);
    const can = itemDef('penyiram'), cap = () => D.tools.penyiram.water[lvl('penyiram')];
    can.meter = () => farm.water / cap(); can.status = () => `💧 ${farm.water}/${cap()}`;

    registerSave('farming', {
      version: 1,
      save: () => ({ ...serialize(), wild: saveWood() }),
      load(d) { deserialize(d, (id) => itemDef(id).price !== undefined); loadWood(d.wild); farm.day = d.day ?? time.day; syncAll(); },
      reset() {
        resetFarm(); scatterDebris(); loadWood([]); farm.day = time.day;
        farm.water = D.tools.penyiram.water[0];
        for (const [id, n] of D.startItems) addItem(id, n);
        syncAll();
      },
      summary: (d) => { const n = (d.tiles || []).filter(t => t.crop).length; return n ? `🌱 ${n} tanaman` : ''; },
    });
  },

  update(dt) {
    // a new day (the clock passed midnight, sleeping, debug skip)
    if (time.day !== farm.day) { if (time.day > farm.day) newDays(farm.day, time.day); farm.day = time.day; }
    if ((rainT -= dt) < 0) { rainT = 2; if (today().weather.fx === 'rain') rainOnField(); }
    if (farm.dirty) redraw();

    // near the farm on foot: target tile, cursor, contextual prompt
    if (!playing()) sel = selectedItem();
    const a = avatar.position;
    nearFarm = onFoot() && ui.started && a.x > box.x0 && a.x < box.x1 && a.z > box.z0 && a.z < box.z1;
    target = null; cells = []; ctx = null;
    if (nearFarm) {
      const fx = Math.sin(avatar.rotation.y), fz = Math.cos(avatar.rotation.y);
      dir = Math.abs(fx) > Math.abs(fz) ? [Math.sign(fx), 0] : [0, Math.sign(fz)];
      target = tileAt(a.x + fx * REACH, a.z + fz * REACH);
      if (target && target.area === 'gh' && !farm.gh) target = null;
      cells = cellsFor(sel, target);
      ctx = contextFor(target);
      if (target) farmZonePos.set(target.x, 0, target.z); else farmZonePos.set(a.x + fx * REACH, 0, a.z + fz * REACH);
    }
    // the axe on a wild tree / stump (anywhere on the map, and next to the farm when not facing a field tile)
    wild = null;
    if (sel === 'kapak' && onFoot() && ui.started && !playing()) {
      wild = woodTarget(a.x, a.z, Math.sin(avatar.rotation.y), Math.cos(avatar.rotation.y));
      if (wild && !target) { ctx = woodCtx(); farmZonePos.set(wild.tree.x, 0, wild.tree.z); }
    } else if (playing() && sel === 'kapak') wild = woodTarget(a.x, a.z, Math.sin(avatar.rotation.y), Math.cos(avatar.rotation.y));
    // the sickle on wild grass (anywhere outside the field tiles)
    mowable = false;
    if (sel === 'sabit' && onFoot() && ui.started && !target && !playing() && today().season.id !== 'dingin') {
      const fx = Math.sin(avatar.rotation.y), fz = Math.cos(avatar.rotation.y);
      mow.set(a.x + fx * 1.0, 0, a.z + fz * 1.0);
      mowable = maskAt(mow.x, mow.z).grass > 0.2 && grassIn(mow.x, mow.z, 0.8) > 0.6;
      if (mowable && !ctx) { ctx = { label: 'Sabit rumput <small>· dapat Rumput Pakan</small>', run: mowGrass }; farmZonePos.copy(mow); }
    }
    updateWoodcut(dt);
    const label = ctx?.label || '';
    if (label !== lastLabel) { lastLabel = label; if (ui.activeZone?.farm) setPrompt(null); }
    drawCursor(!target || playing() ? [] : sel && applies(sel, target) ? cells.map(t => ({ t, state: applies(sel, t) ? 'ok' : 'info' })) : [{ t: target, state: ctx ? 'info' : 'bad' }]);
    animate(dt);

    // greenhouse roof fades while the kid is inside
    const inside = onFoot() && a.x > G.x0 && a.x < G.x0 + G.w && a.z > G.z0 && a.z < G.z0 + G.d;
    const k = roofK + ((inside ? 0.12 : 1) - roofK) * (1 - Math.exp(-dt * 8));
    if (glass && Math.abs(k - roofK) > 1e-4) { roofK = k; glass.roofMats.forEach((m, i) => { m.opacity = glass.base[i] * k; m.depthWrite = k > 0.99 && i > 0; }); }

    // sparkles over golden crops, spray over sprinklers in the early morning
    if ((fxT -= dt) < 0) {
      fxT = 0.25;
      const rare = rareTiles();
      if (rare.length) { const r = rare[Math.floor(Math.random() * rare.length)]; puffs(r.x, 0.6, r.z, '#ffe28a', 1, 0.8, 0.07); }
      if (time.hour >= 6 && time.hour < 8.5) for (const s of sprinklerTiles()) { col.set('#9fe0ff'); for (let i = 0; i < 3; i++) { const an = Math.random() * 6.28; smoke.spawn(v.set(s.x, 0.5, s.z), vel.set(Math.cos(an) * 2.2, 1.4, Math.sin(an) * 2.2), 0.05, 0.6, col, -3); } }
    }
  },
};
