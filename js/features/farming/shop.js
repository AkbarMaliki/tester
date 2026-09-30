// Toko Tani (seeds, saplings, fertiliser, sprinklers, tool / farm / greenhouse upgrades, guide) and the shipping
// bin (Kotak Kirim: whatever goes in is paid out the next morning). Both are modal panels (ui/ui.js openModal).
import { sfx } from '../../engine/audio.js';
import { itemDef, addItem, removeItem, countOf, roomFor, inventory } from '../../systems/inventory.js';
import { wallet, spendGold, addGold, fmtGold, setIncoming } from '../../systems/wallet.js';
import { today } from '../../systems/calendar.js';
import { openModal, toast } from '../../ui/ui.js';
import { farm, D, allCrops, inSeason, cropDef } from './field.js';
import { KIND, TOOL_IDS, toolIcon } from './items.js';

let tab = 'seed', hooks = {};
// index.js hands in what an upgrade has to redo in the world: { tier(), greenhouse(), tool(id) }
export function setShopHooks(h) { hooks = h; }

// ---------------------------------------------------------------- costs: { gold, batu, ranting }
const MATS = { batu: 'batu', ranting: 'ranting' };
export const canPay = (cost) => wallet.gold >= (cost.gold || 0) && Object.keys(MATS).every(k => countOf(k) >= (cost[k] || 0));
function pay(cost) {
  if (!canPay(cost)) return false;
  spendGold(cost.gold || 0);
  for (const k of Object.keys(MATS)) if (cost[k]) removeItem(k, cost[k]);
  return true;
}
const costHtml = (cost) => [cost.gold ? `<b class="${wallet.gold >= cost.gold ? '' : 'short'}">${fmtGold(cost.gold)}</b>` : '',
  ...Object.keys(MATS).filter(k => cost[k]).map(k => `<b class="${countOf(k) >= cost[k] ? '' : 'short'}">${cost[k]} ${itemDef(k).name}</b> <small>(punya ${countOf(k)})</small>`)].filter(Boolean).join(' + ');
const img = (id) => (itemDef(id).icon ? `<img src="${itemDef(id).icon}" alt="">` : '<i class="dot"></i>');

// ---------------------------------------------------------------- Toko Tani
function seedRows() {
  const season = today().season.id, rows = [];
  for (const c of allCrops()) {
    if (c.seed == null) continue;
    const id = `bibit_${c.id}`, ok = c.kind === 'tree' || inSeason(c, season) || farm.gh;
    const tag = c.kind === 'tree' ? '<span class="fs-tag tree">pohon</span>' : c.kind === 'flower' ? '<span class="fs-tag flower">bunga</span>' : '';
    const why = ok ? (c.kind !== 'tree' && !inSeason(c, season) ? '<span class="fs-tag gh">untuk rumah kaca</span>' : '') : '<span class="fs-tag off">bukan musimnya</span>';
    rows.push({ id, ok, sort: ok ? 0 : 1, html: buyRow(id, itemDef(id).price, ok, tag + why) });
  }
  return rows.sort((a, b) => a.sort - b.sort).map(r => r.html).join('');
}
function buyRow(id, price, ok = true, tags = '', cost = null) {
  const d = itemDef(id), afford = wallet.gold >= price && (!cost || canPay(cost));
  return `<div class="fs-row${ok ? '' : ' off'}">${img(id)}<div class="fs-info"><b>${d.name}</b> ${tags}<small>${d.desc || ''}</small></div>
    <div class="fs-buy"><span>${fmtGold(price)}${cost ? ` <small>+ ${costHtml({ ...cost, gold: 0 })}</small>` : ''}</span>${ok ? `<button data-buy="${id}" data-n="1"${afford ? '' : ' disabled'}>Beli</button>${d.stack > 1 && !cost ? `<button data-buy="${id}" data-n="10"${wallet.gold >= price * 10 ? '' : ' disabled'}>×10</button>` : ''}` : ''}</div></div>`;
}
function upgradeRows() {
  const rows = [];
  for (const id of TOOL_IDS) {
    const lvl = farm.tools[id] || 0, next = D.toolLevels[lvl + 1], t = D.tools[id];
    const name = `${t.name}${D.toolLevels[lvl].name ? ' ' + D.toolLevels[lvl].name : ''}`;
    const what = { cangkul: 'Area cangkul lebih luas (1 → 3 petak → 3x3)', penyiram: `Kapasitas air ${t.water?.[lvl]} → ${t.water?.[lvl + 1]}, area siram lebih luas`, sabit: 'Memotong/memanen lebih banyak petak sekaligus',
      palu: 'Batu pecah sekali pukul, lalu 3 petak sekaligus', kapak: lvl === 0 ? 'Bisa menebang tunggul, pohon buah tumbang lebih cepat' : 'Kapak terkuat: bisa MENEBANG POHON BESAR di seluruh desa (dapat Kayu & Ranting, pohon tumbuh lagi)' }[id];
    rows.push(`<div class="fs-row"><img src="${toolIcon(id, Math.min(lvl + 1, D.toolLevels.length - 1))}" alt=""><div class="fs-info"><b>${next ? `${name} → ${t.name} ${next.name}` : `${name} (maksimal)`}</b><small>${next ? what : 'Sudah level tertinggi.'}</small></div>
      <div class="fs-buy">${next ? `<span>${costHtml(next.cost)}</span><button data-up="tool:${id}"${canPay(next.cost) ? '' : ' disabled'}>Upgrade</button>` : '<span>✔</span>'}</div></div>`);
  }
  const nt = D.tiers[farm.tier + 1];
  rows.push(`<div class="fs-row"><i class="fs-emoji">🌾</i><div class="fs-info"><b>${nt ? `Perluas kebun: ${D.tiers[farm.tier].w}x${D.tiers[farm.tier].h} → ${nt.w}x${nt.h} petak` : `Kebun sudah maksimal (${D.tiers[farm.tier].w}x${D.tiers[farm.tier].h})`}</b><small>${nt ? `${nt.name}: pagar dipindah, lahan baru siap dibersihkan.` : 'Semua lahan sudah milikmu.'}</small></div>
    <div class="fs-buy">${nt ? `<span>${costHtml(nt.cost)}</span><button data-up="tier"${canPay(nt.cost) ? '' : ' disabled'}>Perluas</button>` : '<span>✔</span>'}</div></div>`);
  rows.push(`<div class="fs-row"><i class="fs-emoji">🏡</i><div class="fs-info"><b>${farm.gh ? 'Rumah kaca sudah diperbaiki' : 'Perbaiki rumah kaca'}</b><small>${D.greenhouse.tiles}x${D.greenhouse.tiles} petak di dalam ruangan: semua bibit tumbuh di musim apa pun, aman dari badai, salju, dan gagak.</small></div>
    <div class="fs-buy">${farm.gh ? '<span>✔</span>' : `<span>${costHtml(D.greenhouseCost)}</span><button data-up="gh"${canPay(D.greenhouseCost) ? '' : ' disabled'}>Perbaiki</button>`}</div></div>`);
  return rows.join('');
}
function guideHtml() {
  const mut = allCrops().filter(c => c.mutation).map(c => `<li><b>${cropDef(c.mutation.a).name}</b> + <b>${cropDef(c.mutation.b).name}</b> → <b>${c.name}</b></li>`).join('');
  return `<div class="fs-guide">
    <p><b>Dasar:</b> cangkul tanah → tanam bibit → siram setiap hari → panen. Tanaman hanya tumbuh pada hari ia disiram (hujan menyiram otomatis). Tidur di Balai Warga untuk melewati malam.</p>
    <p><b>Tanaman mati</b> kalau ${D.rules.dieAfterDryDays} hari berturut-turut tidak disiram, atau kalau musimnya berganti (kecuali di rumah kaca). Bersihkan dengan sabit.</p>
    <p><b>Kualitas ⭐1-⭐5:</b> makin rajin disiram makin bagus. Pupuk Kompos +1, Pupuk Super +2, bunga mekar di dekatnya +½. Harga jual ⭐5 = 3x lipat.</p>
    <p><b>Langka:</b> kadang tanaman matang berubah jadi versi EMAS (Pupuk Ajaib = 5x lebih sering). <b>Raksasa:</b> 3x3 kubis / semangka / labu matang bisa bergabung jadi satu. Panen dengan <kbd>E</kbd> atau kapak.</p>
    <p><b>Mutasi:</b> biarkan satu petak tanah KOSONG yang disiram di antara dua tanaman matang ini (bersebelahan):</p><ul>${mut}</ul>
    <p><b>Cuaca:</b> hujan = tersiram otomatis. Badai merusak sebagian tanaman di luar dan menjatuhkan ranting. Gagak memakan tanaman kalau kebun tidak dijaga orang-orangan sawah.</p>
    <p><b>Kotak Kirim:</b> masukkan hasil panen, uangnya diterima besok pagi.</p>
    <p><b>Kapak Emas:</b> bisa menebang pohon besar di mana saja (pilih kapak di shortcut, hadap ke pohon, tekan G). Dapat Kayu &amp; Ranting, tunggulnya tumbuh jadi pohon lagi dalam seminggu.</p>
  </div>`;
}
const TABS = [['seed', 'Bibit'], ['misc', 'Pupuk & Alat'], ['sell', 'Jual'], ['up', 'Upgrade'], ['guide', 'Panduan']];
function shopHtml() {
  let body = '';
  if (tab === 'seed') body = seedRows();
  else if (tab === 'misc') body = D.fertilizers.map(f => buyRow(f.id, f.price)).join('') + D.placeables.map(o => buyRow(o.id, o.price, true, '', o.cost || null)).join('');
  else if (tab === 'up') body = upgradeRows();
  else if (tab === 'sell') body = sellRows();
  else body = guideHtml();
  return `<div class="fshop"><h2>Toko Tani</h2>
    <p class="fs-sub">💰 <b>${fmtGold(wallet.gold)}</b> · ${today().season.icon} ${today().season.name} · ${itemDef('batu').name} ${countOf('batu')} · ${itemDef('ranting').name} ${countOf('ranting')}</p>
    <div class="dc-tabs">${TABS.map(([k, t]) => `<button data-tab="${k}" class="${k === tab ? 'on' : ''}">${t}</button>`).join('')}</div>
    <div class="fs-list">${body}</div></div>`;
}
function buy(id, n) {
  const d = itemDef(id), extra = D.placeables.find(o => o.id === id)?.cost;
  n = Math.min(n, roomFor(id));
  if (!n) { toast('Tas penuh!'); sfx.drop(); return; }
  if (extra && !canPay(extra)) { toast('Bahan kurang'); sfx.drop(); return; }
  if (!spendGold(d.price * n)) { toast('Uang tidak cukup'); sfx.drop(); return; }
  if (extra) pay({ ...extra, gold: 0 });
  addItem(id, n); sfx.coin();
}
function upgrade(what) {
  if (what.startsWith('tool:')) {
    const id = what.slice(5), lvl = farm.tools[id] || 0, next = D.toolLevels[lvl + 1];
    if (!next || !pay(next.cost)) return;
    farm.tools[id] = lvl + 1; hooks.tool?.(id);
    toast(`${itemDef(id).name} siap dipakai!`, itemDef(id).icon);
  } else if (what === 'tier') {
    const nt = D.tiers[farm.tier + 1];
    if (!nt || !pay(nt.cost)) return;
    farm.tier++; hooks.tier?.();
    toast(`Kebun diperluas jadi ${nt.w}x${nt.h} petak!`);
  } else if (what === 'gh') {
    if (farm.gh || !pay(D.greenhouseCost)) return;
    farm.gh = true; hooks.greenhouse?.();
    toast('Rumah kaca sudah diperbaiki! Semua bibit bisa tumbuh di dalamnya.');
  }
  sfx.sparkle();
}
function onShopClick(e) {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.dataset.tab) { tab = b.dataset.tab; sfx.step(0.5); }
  else if (b.dataset.buy) buy(b.dataset.buy, +b.dataset.n);
  else if (b.dataset.up) upgrade(b.dataset.up);
  else if (b.dataset.sell) sellNow(b.dataset.sell, +b.dataset.n);
  else return;
  openShop();
}
export function openShop() { openModal(shopHtml(), onShopClick); }

// ---------------------------------------------------------------- Jual (sell right now, cheaper than the bin)
const nowPrice = (id) => Math.max(1, Math.floor(itemDef(id).price * D.sellNow));
function bagSellables() {
  const out = [];
  for (const s of inventory.slots) if (s && sellable(s.id) && !out.includes(s.id)) out.push(s.id);
  return out;
}
function sellRows() {
  const rows = bagSellables().map(id => { const d = itemDef(id), n = countOf(id);
    return `<div class="fs-row">${img(id)}<div class="fs-info"><b>${d.name}</b> <small>×${n} di tas · <b>${fmtGold(nowPrice(id))}</b> / buah sekarang (Kotak Kirim: ${fmtGold(d.price)} besok)</small></div>
      <div class="fs-buy"><button data-sell="${id}" data-n="1">Jual 1</button><button data-sell="${id}" data-n="${n}">Semua (${fmtGold(nowPrice(id) * n)})</button></div></div>`; }).join('');
  return `<p class="fs-sub">Dibayar <b>langsung</b>, tapi hanya ${Math.round(D.sellNow * 100)}% harga. Mau harga penuh? Masukkan ke <b>Kotak Kirim</b> (dibayar besok pagi).</p>`
    + (rows || '<p class="dc-empty">Tidak ada barang yang bisa dijual di tasmu.</p>');
}
function sellNow(id, n) {
  const k = Math.min(n, countOf(id));
  if (!k || !removeItem(id, k)) return;
  addGold(nowPrice(id) * k); sfx.coin();
  toast(`Terjual ${k} ${itemDef(id).name}: +${fmtGold(nowPrice(id) * k)}`, itemDef(id).icon);
}

// ---------------------------------------------------------------- Kotak Kirim (shipping bin)
const sellable = (id) => { const d = itemDef(id); return d.price > 0 && KIND.get(id)?.type !== 'tool'; };
const isProduce = (id) => KIND.get(id)?.type === 'produce';
const binValue = () => farm.bin.reduce((g, b) => g + itemDef(b.id).price * b.n, 0);
function binHtml() {
  const bag = [];
  inventory.slots.forEach((s) => { if (s && sellable(s.id) && !bag.includes(s.id)) bag.push(s.id); });
  const rows = bag.map(id => { const d = itemDef(id), n = countOf(id);
    return `<div class="fs-row">${img(id)}<div class="fs-info"><b>${d.name}</b> <small>×${n} di tas · ${fmtGold(d.price)} / buah</small></div>
      <div class="fs-buy"><button data-ship="${id}" data-n="1">Masukkan 1</button><button data-ship="${id}" data-n="${n}">Semua (${fmtGold(d.price * n)})</button></div></div>`; }).join('');
  const inBin = farm.bin.map(b => `<span class="fs-chip">${img(b.id)}${b.n}</span>`).join('');
  return `<div class="fshop"><h2>Kotak Kirim</h2>
    <p class="fs-sub">Barang di kotak dijual dengan harga penuh, uangnya diterima <b>besok pagi</b> (tidur di Balai Warga untuk langsung ke besok). Butuh uang sekarang? Jual di Toko Tani (${Math.round(D.sellNow * 100)}% harga).<br>Sekarang di kotak: <b>${fmtGold(binValue())}</b></p>
    <div class="fs-binrow">${inBin || '<small>kosong</small>'}</div>
    ${bag.some(isProduce) ? '<div class="choice-btns"><button data-ship="*">Masukkan semua hasil kebun</button></div>' : ''}
    <div class="fs-list">${rows || '<p class="dc-empty">Tidak ada barang yang bisa dijual di tasmu.</p>'}</div></div>`;
}
function ship(id, n) {
  const k = Math.min(n, countOf(id));
  if (!k || !removeItem(id, k)) return 0;
  const b = farm.bin.find(x => x.id === id);
  if (b) b.n += k; else farm.bin.push({ id, n: k });
  return k;
}
function onBinClick(e) {
  const b = e.target.closest('button[data-ship]');
  if (!b) return;
  let n = 0;
  if (b.dataset.ship === '*') { for (const id of new Set(inventory.slots.filter(s => s && isProduce(s.id)).map(s => s.id))) n += ship(id, countOf(id)); }
  else n = ship(b.dataset.ship, +b.dataset.n);
  if (n) { sfx.stash(); syncIncoming(); toast(`📦 ${n} barang masuk Kotak Kirim · total <b>${fmtGold(binValue())}</b> dibayar besok pagi`); }
  openBin();
}
export function openBin() { openModal(binHtml(), onBinClick); }
// morning: pay for the bin's contents, returns the gold earned
export function payBin() {
  const g = binValue();
  farm.bin.length = 0; syncIncoming();
  return g;
}
// the bin's value shown as money on its way (next to the gold in the HUD)
export const syncIncoming = () => setIncoming('bin', binValue());
