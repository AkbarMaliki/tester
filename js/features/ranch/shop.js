// Toko Ternak panel: buy animals (needs room in the barn / coop), goods (feed, tools, medicine, potion), barn & coop
// upgrades, and the Buku Ternak (every animal with its hearts, health and today's care; rename or sell it).
import { sfx } from '../../engine/audio.js';
import { itemDef, addItem, removeItem, countOf, roomFor } from '../../systems/inventory.js';
import { wallet, spendGold, addGold, fmtGold } from '../../systems/wallet.js';
import { openModal, toast } from '../../ui/ui.js';

let tab = 'animals', S = null, H = null;
// index.js: data + { animals(), room(home), count(species), buyAnimal(species), upgrade(kind), rename(id, name), sell(id), barnLvl(), coopLvl() }
export function initShop(data, hooks) { S = data; H = hooks; }

const MATS = ['kayu', 'batu'];
const canPay = (c) => wallet.gold >= (c.gold || 0) && MATS.every(k => countOf(k) >= (c[k] || 0));
function pay(c) { if (!canPay(c)) return false; spendGold(c.gold || 0); for (const k of MATS) if (c[k]) removeItem(k, c[k]); return true; }
const costHtml = (c) => [c.gold ? `<b class="${wallet.gold >= c.gold ? '' : 'short'}">${fmtGold(c.gold)}</b>` : '',
  ...MATS.filter(k => c[k]).map(k => `<b class="${countOf(k) >= c[k] ? '' : 'short'}">${c[k]} ${itemDef(k).name}</b> <small>(punya ${countOf(k)})</small>`)].filter(Boolean).join(' + ');
export const hearts = (aff) => { const h = Math.round((aff || 0) / 100); return '❤'.repeat(Math.floor(h / 2)) + (h % 2 ? '💗' : '') + '♡'.repeat(5 - Math.ceil(h / 2)); };
const img = (id) => (itemDef(id).icon ? `<img src="${itemDef(id).icon}" alt="">` : '<i class="fs-emoji">?</i>');

function animalRows() {
  return Object.entries(S.species).map(([id, sp]) => {
    const home = sp.home, full = home !== 'pet' && H.room(home) <= 0, maxed = sp.max && H.count(id) >= sp.max;
    const why = maxed ? 'sudah punya' : full ? `${home === 'coop' ? 'kandang ayam' : 'kandang'} penuh` : '';
    const where = home === 'pet' ? 'hewan peliharaan · ikut kamu jalan-jalan' : `tinggal di ${home === 'coop' ? 'kandang ayam' : 'kandang'}`;
    const prod = sp.product ? `menghasilkan ${itemDef(sp.product).name}${sp.every > 1 ? ` tiap ${sp.every} hari` : ' tiap hari'}` : sp.ride ? 'bisa ditunggangi (jalan 2x lebih cepat)' : 'teman setia';
    const ok = !why && wallet.gold >= sp.price;
    return `<div class="fs-row"><i class="fs-emoji">${sp.icon}</i><div class="fs-info"><b>${sp.name}</b> ${why ? `<span class="fs-tag off">${why}</span>` : ''}<small>${where} · ${prod}${sp.feed ? ` · makan ${sp.feed.filter(f => itemDef(f).price !== undefined).map(f => itemDef(f).name).join(' / ')}` : ''}</small></div>
      <div class="fs-buy"><span>${fmtGold(sp.price)}</span><button data-animal="${id}"${ok ? '' : ' disabled'}>Beli</button></div></div>`;
  }).join('');
}
function goodsRows() {
  return S.goods.map(g => {
    const id = g.buy || g.id, d = itemDef(id), afford = wallet.gold >= g.price;
    return `<div class="fs-row">${img(id)}<div class="fs-info"><b>${d.name}</b><small>${d.desc || g.desc || ''}</small></div>
      <div class="fs-buy"><span>${fmtGold(g.price)}</span><button data-good="${g.id}" data-n="1"${afford ? '' : ' disabled'}>Beli</button>${d.stack > 1 ? `<button data-good="${g.id}" data-n="10"${wallet.gold >= g.price * 10 ? '' : ' disabled'}>×10</button>` : ''}</div></div>`;
  }).join('');
}
function upgradeRows() {
  const row = (kind, cur, levels, icon) => {
    const next = levels[cur + 1];
    return `<div class="fs-row"><i class="fs-emoji">${icon}</i><div class="fs-info"><b>${next ? `${levels[cur].name} → ${next.name}` : `${levels[cur].name} (maksimal)`}</b><small>${next ? next.desc : `Menampung ${levels[cur].cap} hewan.`}</small></div>
      <div class="fs-buy">${next ? `<span>${costHtml(next.cost)}</span><button data-up="${kind}"${canPay(next.cost) ? '' : ' disabled'}>Upgrade</button>` : '<span>✔</span>'}</div></div>`;
  };
  return row('barn', H.barnLvl(), S.barn.levels, '🏚') + row('coop', H.coopLvl(), S.coop.levels, '🐔')
    + '<p class="fs-sub">Kayu didapat dari menebang pohon dengan Kapak Emas, batu dari memecah batu dengan palu.</p>';
}
function bookRows() {
  const list = H.animals();
  if (!list.length) return '<p class="dc-empty">Belum punya hewan. Beli di tab Hewan.</p>';
  return list.map(a => {
    const sp = S.species[a.species], care = [];
    if (sp.home !== 'pet') care.push(a.fed ? '🍽 sudah makan' : '<span class="warn">🍽 belum makan</span>');
    care.push(a.petted ? '✋ sudah dielus' : '✋ belum dielus');
    if (a.sick) care.push('<span class="warn">🤒 sakit</span>');
    if (a.baby) care.push(`🍼 bayi (${a.age}/${sp.adultDays} hari)`);
    if (a.pregnant) care.push(`🤰 lahir ${a.pregnant} hari lagi`);
    if (a.species === 'sheep' && !a.baby) care.push(a.woolDays >= 3 ? '✂ wol siap' : `wol ${a.woolDays}/3`);
    if ((a.species === 'cow' || a.species === 'goat') && !a.baby) care.push(a.milk ? '🥛 siap diperah' : '🥛 belum');
    return `<div class="fs-row"><i class="fs-emoji">${sp.icon}</i><div class="fs-info"><b>${a.name}</b> <small style="display:inline">${a.baby ? sp.baby : sp.name}</small>
      <small>${hearts(a.affection)} · darah ${Math.round(a.health)}%<br>${care.join(' · ')}</small></div>
      <div class="fs-buy"><button data-rename="${a.id}">Ganti nama</button>${sp.home !== 'pet' ? `<button data-sell="${a.id}">Jual (${fmtGold(sellPrice(a))})</button>` : ''}</div></div>`;
  }).join('');
}
const sellPrice = (a) => Math.round(S.species[a.species].price * (a.baby ? 0.3 : 0.5) * (0.6 + (a.affection || 0) / 1000 * 0.8));

const TABS = [['animals', 'Hewan'], ['goods', 'Pakan & Alat'], ['up', 'Upgrade'], ['book', 'Buku Ternak']];
function html() {
  const body = { animals: animalRows, goods: goodsRows, up: upgradeRows, book: bookRows }[tab]();
  return `<div class="fshop"><h2>Toko Ternak</h2>
    <p class="fs-sub">💰 <b>${fmtGold(wallet.gold)}</b> · Kandang ${H.animals().filter(a => S.species[a.species].home === 'barn').length}/${S.barn.levels[H.barnLvl()].cap} · Kandang ayam ${H.animals().filter(a => S.species[a.species].home === 'coop').length}/${S.coop.levels[H.coopLvl()].cap}</p>
    <div class="dc-tabs">${TABS.map(([k, t]) => `<button data-tab="${k}" class="${k === tab ? 'on' : ''}">${t}</button>`).join('')}</div>
    <div class="fs-list">${body}</div></div>`;
}
function onClick(e) {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.dataset.tab) { tab = b.dataset.tab; sfx.step(0.5); }
  else if (b.dataset.animal) {
    const sp = S.species[b.dataset.animal];
    if (!spendGold(sp.price)) { toast('Uang tidak cukup'); return; }
    const a = H.buyAnimal(b.dataset.animal); sfx.coin();
    toast(`${sp.icon} ${a.name} si ${sp.name} datang ke peternakanmu!`);
  } else if (b.dataset.good) {
    const g = S.goods.find(x => x.id === b.dataset.good), id = g.buy || g.id, n = Math.min(+b.dataset.n, roomFor(id));
    if (!n) { toast('Tas penuh!'); return; }
    if (!spendGold(g.price * n)) { toast('Uang tidak cukup'); return; }
    addItem(id, n); sfx.coin();
  } else if (b.dataset.up) {
    const kind = b.dataset.up, lv = kind === 'barn' ? H.barnLvl() : H.coopLvl(), next = (kind === 'barn' ? S.barn : S.coop).levels[lv + 1];
    if (!next || !pay(next.cost)) return;
    H.upgrade(kind); sfx.sparkle(); toast(`${next.name} selesai dibangun!`);
  } else if (b.dataset.rename) {
    const a = H.animals().find(x => x.id === +b.dataset.rename), name = prompt(`Nama baru untuk ${a.name}:`, a.name);
    if (name && name.trim()) H.rename(a.id, name.trim().slice(0, 16));
  } else if (b.dataset.sell) {
    const a = H.animals().find(x => x.id === +b.dataset.sell);
    if (!confirm(`Jual ${a.name} seharga ${fmtGold(sellPrice(a))}? ${a.name} akan pergi ke peternakan lain.`)) return;
    addGold(sellPrice(a)); H.sell(a.id); sfx.coin();
  } else return;
  open();
}
export function open(t) { if (t) tab = t; openModal(html(), onClick); }
