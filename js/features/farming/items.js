// Every farming item, defined in systems/inventory.js with an icon rendered from its 3D model and a `proto` (so
// features/pickup can hold it over the head / drop it): tools (level shown in the name), seeds + saplings,
// harvested produce in 5 qualities (⭐1 = <id>, ⭐2..5 = <id>_q2.._q5) + a golden rare one (<id>_emas),
// fertilisers, sprinklers and the scarecrow.
import { defineItem, itemDef } from '../../systems/inventory.js';
import { thumbnail, disposeThumbnails } from '../../engine/thumbs.js';
import { produceModel, seedModel, toolModel, toolHandModel, fertModel, objectModel, logModel, grassBundleModel } from './models.js';
import { qualityId } from './field.js';

export const TOOL_IDS = ['cangkul', 'penyiram', 'sabit', 'palu', 'kapak'];
export const KIND = new Map();          // item id -> { type: 'tool' | 'seed' | 'fert' | 'obj' | 'produce', ref }
const tools = {};                       // tool id -> { icons[lvl], protos[lvl], hand[lvl] }
let D = null;

// a copy of `url` with ⭐n painted in the corner (quality variants), applied to the def once the image has loaded
function starIcon(def, url, n) {
  const img = new Image();
  img.onload = () => {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const g = c.getContext('2d'); g.drawImage(img, 0, 0, 128, 128);
    g.font = '800 30px system-ui, sans-serif'; g.textBaseline = 'bottom'; g.lineWidth = 6; g.strokeStyle = '#2a1a10'; g.fillStyle = '#ffd23a';
    const txt = '★'.repeat(n);
    g.strokeText(txt, 4, 126); g.fillText(txt, 4, 126);
    def.icon = c.toDataURL('image/png');
  };
  img.src = url;
}
// food values grow a little with quality (and a lot for the golden one)
function scaleUse(use, k) {
  if (!use) return undefined;
  const out = { ...use };
  for (const key of ['hunger', 'thirst', 'energy', 'health', 'stamina']) if (out[key] > 0) out[key] = Math.round(out[key] * k);
  return out;
}
const seasonNames = (c, CAL) => (c.seasons === 'all' ? 'semua musim' : c.seasons.map(id => CAL.seasons.find(s => s.id === id)?.short || id).join(' & '));

export function defineFarmItems(data, CAL) {
  D = data;
  // tools: one model per level; the def's name / icon / proto follow the current level (setToolLevel)
  for (const id of TOOL_IDS) {
    const t = D.tools[id];
    tools[id] = { icons: [], protos: [], hand: [] };
    D.toolLevels.forEach((lv) => {
      const proto = toolModel(t.model, lv.color);
      tools[id].protos.push(proto); tools[id].icons.push(thumbnail(proto.clone(), 128));
      tools[id].hand.push(toolHandModel(t.model, lv.color));
    });
    defineItem({ id, name: t.name, desc: t.desc, stack: 1, price: 0, hotbarUse: true, icon: tools[id].icons[0], proto: tools[id].protos[0] });
    KIND.set(id, { type: 'tool', ref: t });
  }
  for (const c of D.crops) {
    // seeds / saplings
    const seed = seedModel(c), sid = `bibit_${c.id}`;
    const when = c.kind === 'tree' ? `Tumbuh besar dalam ${c.days} hari, lalu berbuah setiap hari di musim ${seasonNames(c, CAL)}. Tidak perlu disiram.`
      : `Musim: ${seasonNames(c, CAL)} · panen ${c.days} hari${c.regrow ? `, berbuah lagi tiap ${c.regrow} hari` : ''}${c.giant ? ' · bisa jadi RAKSASA' : ''}.`;
    defineItem({ id: sid, name: c.kind === 'tree' ? `Bibit Pohon ${c.name}` : `Bibit ${c.name}`, desc: `${c.desc} ${when}`, stack: c.kind === 'tree' ? 10 : 99,
      price: c.seed ?? Math.round(c.price / 2), hotbarUse: true, icon: thumbnail(seed.clone(), 128), proto: seed });
    KIND.set(sid, { type: 'seed', ref: c });
    // produce ⭐1..5
    const proto = produceModel(c), icon = thumbnail(proto.clone(), 128);
    for (let q = 1; q <= 5; q++) {
      const price = Math.round(c.price * D.quality.mul[q - 1]);
      const def = defineItem({ id: qualityId(c.id, q), name: `${c.name} ⭐${q}`, desc: `${c.desc} Kualitas ${'★'.repeat(q)}${'☆'.repeat(5 - q)}.`, stack: 99, price,
        use: scaleUse(c.use, 1 + (q - 1) * 0.1), icon, proto, variant: q > 1 });
      starIcon(def, icon, q);
      KIND.set(def.id, { type: 'produce', ref: c, q });
    }
    if (c.kind !== 'tree') {
      const gold = produceModel(c, { rare: true });
      defineItem({ id: `${c.id}_emas`, name: `${c.name} Emas ✨`, desc: `Versi langka ${c.name} yang berkilau emas. Sangat mahal!`, stack: 20, price: c.price * D.quality.rareMul,
        use: scaleUse(c.use, 1.6), icon: thumbnail(gold.clone(), 128), proto: gold, variant: true });
      KIND.set(`${c.id}_emas`, { type: 'produce', ref: c, q: 5, rare: true });
    }
  }
  for (const f of D.fertilizers) {
    const proto = fertModel(f);
    defineItem({ id: f.id, name: f.name, desc: f.desc, stack: 99, price: f.price, hotbarUse: true, icon: thumbnail(proto.clone(), 128), proto });
    KIND.set(f.id, { type: 'fert', ref: f });
  }
  for (const mt of D.materials || []) {
    const proto = mt.model === 'grass' ? grassBundleModel() : logModel();
    defineItem({ id: mt.id, name: mt.name, desc: mt.desc, stack: 99, price: mt.price, icon: thumbnail(proto.clone(), 128), proto });
    KIND.set(mt.id, { type: 'material', ref: mt });
  }
  for (const o of D.placeables) {
    const proto = objectModel(o);
    defineItem({ id: o.id, name: o.name, desc: o.desc, stack: 20, price: o.price, hotbarUse: true, icon: thumbnail(proto.clone(), 128), proto });
    KIND.set(o.id, { type: 'obj', ref: o });
  }
  disposeThumbnails();
}

// tool upgraded: new name, icon and model everywhere
export function setToolLevel(id, lvl) {
  const def = itemDef(id), lv = D.toolLevels[lvl];
  def.name = lv.name ? `${D.tools[id].name} ${lv.name}` : D.tools[id].name;
  def.icon = tools[id].icons[lvl]; def.proto = tools[id].protos[lvl];
}
export const toolHand = (id, lvl) => tools[id].hand[lvl];
export const toolIcon = (id, lvl) => tools[id].icons[lvl];
