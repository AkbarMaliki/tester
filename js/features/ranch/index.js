// Animal farming (Harvest Moon style): chickens + ducks in the coop, cows, goats, sheep and a horse in the barn, a dog
// and a cat as pets. Feed them every day (trough, by hand, or they graze outside), pet and brush them for affection
// (hearts), keep them healthy, collect eggs / milk / wool whose quality ⭐ follows their affection (golden at 10
// hearts), breed them (potion, incubator), upgrade the barn + coop. They walk out to the pasture on nice days and
// back in when it rains or gets late. Ride the horse; take the dog / cat for a walk.
//   models.js  rigs + buildings + item models      animals.js  behaviour + animation of one animal
//   anim.js    the kid's poses (pet, milk, ride…)   shop.js     Toko Ternak + Buku Ternak
// Data: public/assets/data/ranch.json. Sells through the farm's shipping bin (any item with a price).
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { scene, world } from '../../engine/core.js';
import { on } from '../../engine/events.js';
import { loadAsset, frand, pick } from '../../engine/util.js';
import { sfx } from '../../engine/audio.js';
import { thumbnail, disposeThumbnails, starred } from '../../engine/thumbs.js';
import { addZone } from '../../systems/interaction.js';
import { keyOf } from '../../systems/input.js';
import { registerSave } from '../../systems/save.js';
import { defineItem, itemDef, addItem, removeItem, countOf } from '../../systems/inventory.js';
import { time } from '../../systems/daynight.js';
import { today } from '../../systems/calendar.js';
import { addEffect, removeEffect } from '../../systems/stats.js';
import { addMapMarker } from '../../systems/mapmarkers.js';
import { keepOut, noTrees, RANCH } from '../../world/worldmap.js';
import { board } from '../../world/props.js';
import { cutGrass } from '../../world/vegetation.js';
import { smoke } from '../../world/effects.js';
import { avatar, player, body, isCarrying } from '../../entities/player/controller.js';
import { ui, toast, setPrompt, modalOpen } from '../../ui/ui.js';
import { heartMaterial, barn, coop, silo, fence, troughHay, pond, dogHouse, shopStall, productModel, goodsModel } from './models.js';
import { Animal } from './animals.js';
import * as act from './anim.js';
import { initShop, open as openShop, hearts } from './shop.js';

const SEAT = 0.62;            // how far the kid sits above the ground on the horse
const REACH = 1.1;
const FAR = new THREE.Vector3(9999, 0, 9999);
let S = null;                 // ranch.json
const ranch = { barn: 0, coop: 0, door: true, silo: 0, nextId: 1, day: 0, animals: [], eggs: [], incubator: null };
const live = new Map();       // id -> Animal
let B = null, C = null, siloObj = null, fenceObj = null, barnBodies = [], coopBodies = [], siloBody = null, eggMeshes = [], barnHay = null, coopHay = null;
const zones = { barn: null, coop: null, pasture: null, yard: null, free: null };
let riding = null, target = null, ctx = null, lastLabel = '', schedT = 0, rideT = 0, roofK = { barn: 1, coop: 1 };
const ctxPos = new THREE.Vector3();
const hearts3 = [];           // floating hearts { s, t, vy }
const PROTOS = {};            // item id -> proto (for eggs lying in nests)

const sp = (a) => S.species[a.species];
const onFoot = () => player.mode === 'foot' && avatar.visible;
const adult = (a) => !a.baby;
const inHome = (home) => ranch.animals.filter(a => sp(a).home === home);
const cap = (home) => (home === 'barn' ? S.barn.levels[ranch.barn].cap : S.coop.levels[ranch.coop].cap);
const room = (home) => cap(home) - inHome(home).length;

// ---------------------------------------------------------------- items: products ⭐1-5 + golden, goods, tools
const QMUL = () => S.quality.mul;
const pid = (id, q) => (q > 1 ? `${id}_q${q}` : id);
function defineItems() {
  for (const p of S.products) {
    const proto = productModel(p), icon = thumbnail(proto.clone(), 128);
    PROTOS[p.id] = proto;
    for (let q = 1; q <= 5; q++) {
      const def = defineItem({ id: pid(p.id, q), name: `${p.name} ⭐${q}`, desc: `${p.desc} Kualitas ${'★'.repeat(q)}${'☆'.repeat(5 - q)} (dari hewan yang ${['kurang', 'cukup', 'lumayan', 'sangat', 'paling'][q - 1]} sayang padamu).`,
        stack: 99, price: Math.round(p.price * QMUL()[q - 1]), use: p.use, icon, proto, variant: q > 1 });
      starred(icon, q, (url) => { def.icon = url; });
    }
    const gp = productModel(p, true);
    defineItem({ id: `${p.id}_emas`, name: `${p.name} Emas ✨`, desc: `${p.desc} Hanya dari hewan dengan 10 hati. Sangat langka & mahal!`, stack: 20, price: p.price * S.quality.goldMul, use: p.use, icon: thumbnail(gp.clone(), 128), proto: gp, variant: true });
  }
  for (const g of S.goods) {
    if (g.buy) continue;
    const proto = goodsModel(g);
    defineItem({ id: g.id, name: g.name, desc: g.desc, stack: g.tool ? 1 : 99, price: g.tool ? 0 : Math.round(g.price / 2), hotbarUse: true, icon: thumbnail(proto.clone(), 128), proto });
  }
  disposeThumbnails();
}
const quality = (a) => { const h = (a.affection || 0) / 100; let q = Math.min(5, 1 + Math.floor(h / 2)); if (a.health < 60) q--; return Math.max(1, q); };
const productId = (a) => { const p = sp(a).product; return (a.affection >= 950 && a.health >= 95 && Math.random() < S.quality.goldChance) ? `${p}_emas` : pid(p, quality(a)); };

// ---------------------------------------------------------------- animals
function newAnimal(species, { baby = false, at = null } = {}) {
  const used = new Set(ranch.animals.map(a => a.name)), names = S.names.filter(n => !used.has(n));
  const home = S.species[species].home;
  const d = { id: ranch.nextId++, species, name: pick(names.length ? names : S.names), variant: Math.floor(Math.random() * S.species[species].variants),
    baby, age: 0, affection: baby ? 150 : 80, health: 100, fed: false, petted: false, brushed: false, handFed: false, outside: false, rain: false, sick: false,
    milk: false, woolDays: 0, lay: 0, pregnant: 0, rode: false, following: false, zone: home === 'pet' ? 'yard' : home };
  const door = home === 'barn' ? B.door.in : home === 'coop' ? C.door.in : new THREE.Vector3(S.dogHouse.x, 0, S.dogHouse.z + 1.3);
  d.x = (at || door).x; d.z = (at || door).z;
  ranch.animals.push(d);
  spawn(d);
  return d;
}
function spawn(d) { const a = new Animal(d); live.set(d.id, a); return a; }
function despawn(id) { const a = live.get(id); if (a) { if (riding === a) dismount(); a.dispose(); live.delete(id); } }
function hearts2(a, n = 6) {   // a little burst of hearts over its head
  const p = a.headWorld(new THREE.Vector3());
  for (let i = 0; i < n; i++) {
    const s = new THREE.Sprite(heartMaterial()); s.scale.setScalar(0.22); s.position.set(p.x + frand(-0.3, 0.3), p.y + 0.2 + frand(0, 0.2), p.z + frand(-0.3, 0.3));
    scene.add(s); hearts3.push({ s, t: 0, vy: frand(0.5, 0.9), vx: frand(-0.2, 0.2) });
  }
}
function love(a, pts, burst = true) {
  a.d.affection = Math.max(0, Math.min(1000, (a.d.affection || 0) + pts));
  if (burst && pts > 0) { hearts2(a, pts >= 25 ? 7 : 4); a.hop(); }
}
function say(a) { if (Math.hypot(a.pos.x - avatar.position.x, a.pos.z - avatar.position.z) < 22) sfx.animal(sp(a.d).sound, a.d.baby ? 1.5 : 1); }

// ---------------------------------------------------------------- buildings (rebuilt on upgrade)
function addBodies(list) { return list.map(([shape, x, y, z]) => addStatic(shape, x, y, z)); }
function addStatic(shape, x, y, z) { const b = new CANNON.Body({ mass: 0 }); b.addShape(shape); b.position.set(x, y, z); world.addBody(b); return b; }
function rebuild() {
  for (const o of [B?.root, C?.root, siloObj, fenceObj, barnHay, coopHay]) if (o) o.removeFromParent();
  for (const b of [...barnBodies, ...coopBodies, siloBody]) if (b) world.removeBody(b);
  B = barn(S.barn, S.barn.levels[ranch.barn], ranch.barn); scene.add(B.root); barnBodies = addBodies(B.bodies);
  C = coop(S.coop, S.coop.levels[ranch.coop], ranch.coop); scene.add(C.root); coopBodies = addBodies(C.bodies);
  siloObj = null; siloBody = null;
  if (S.barn.levels[ranch.barn].silo) { const s = silo(S.silo); siloObj = s.root; scene.add(siloObj); siloBody = addStatic(...s.body); }
  const X = S.pasture.fenceX, bz = B.door.in.z, cz = C.door.in.z;
  fenceObj = fence([[X, 20.5, RANCH.x - 1.2, 20.5], [RANCH.x + 1.2, 20.5, 66, 20.5], [66, 20.5, 66, 40.6], [66, 40.6, X, 40.6],
    [X, 40.6, X, cz + 0.9], [X, cz - 0.9, X, bz + 1.4], [X, bz - 1.4, X, 20.5]]);
  scene.add(fenceObj);
  zones.barn = B.rect; zones.coop = C.rect;
  refreshHay(); refreshEggs();
}
function refreshHay() {
  for (const o of [barnHay, coopHay]) if (o) o.removeFromParent();
  const frac = (home) => { const l = inHome(home); return l.length ? l.filter(a => a.fed).length / l.length : 0; };
  barnHay = troughHay(B.trough, frac('barn')); scene.add(barnHay);
  coopHay = troughHay(C.trough, frac('coop')); coopHay.material = coopHay.material.clone(); coopHay.material.color.set('#e0b040'); scene.add(coopHay);
}
function refreshEggs() {
  for (const m of eggMeshes) m.removeFromParent();
  eggMeshes = ranch.eggs.map((e) => {
    const n = C.nests[e.nest % C.nests.length], m = (PROTOS[S.species[e.species].product]).clone();
    m.scale.setScalar(0.7); m.position.copy(n); scene.add(m); return m;
  });
}

// ---------------------------------------------------------------- schedule: in / out, day / night
const nightNow = () => time.hour >= 19.5 || time.hour < 6;
function outsideOK() {
  const o = S.outside, d = today();
  return ranch.door && time.hour >= o.from && time.hour < o.to && o.weathers.includes(d.weather.id) && !o.notSeasons.includes(d.season.id);
}
const sleepSpot = (a) => {
  const list = ranch.animals.filter(x => live.get(x.id)?.zone === a.zone), i = Math.max(0, list.indexOf(a.d));
  if (a.zone === 'barn') { const r = zones.barn, cols = 2; return new THREE.Vector3(r.x0 + 0.6 + (i % cols) * (r.x1 - r.x0 - 1.2), 0, r.z0 + 0.6 + Math.floor(i / cols) * 1.6); }
  if (a.zone === 'coop') { const n = C.nests[i % C.nests.length]; return new THREE.Vector3(n.x, 0, n.z - 0.45); }
  return new THREE.Vector3(S.dogHouse.x + (a.d.species === 'cat' ? 1.4 : 0.2), 0, S.dogHouse.z + 1.1);
};
function schedule() {
  const out = outsideOK(), d = today();
  for (const a of live.values()) {
    if (a.ridden || a.following || a.zone === 'free') continue;
    const home = sp(a.d).home;
    if (home === 'pet') continue;
    const want = out ? 'pasture' : home, door = home === 'barn' ? B.door : C.door;
    if (a.zone === 'pasture' && d.weather.fx !== 'none') a.d.rain = true;   // caught in the rain
    if (want === a.zone || a.path.length) continue;
    if (want === 'pasture') { a.goTo([door.in, door.out, new THREE.Vector3(frand(zones.pasture.x0 + 1, zones.pasture.x0 + 6), 0, frand(zones.pasture.z0 + 1, zones.pasture.z1 - 1))]); a.zone = 'pasture'; a.d.outside = true; }
    else { a.goTo([new THREE.Vector3(door.out.x + 0.4, 0, door.out.z), door.out, door.in]); a.zone = home; }
    a.d.zone = a.zone;
  }
}

// ---------------------------------------------------------------- overnight
function newDay() {
  const A = S.affection, Hh = S.health, season = today().season.id, heater = S.barn.levels[ranch.barn].heater;
  const msgs = [];
  for (const d of [...ranch.animals]) {
    const s = sp(d), a = live.get(d.id);
    if (s.home === 'pet') {
      d.affection = Math.max(0, Math.min(1000, d.affection + (d.petted ? 10 : -15)));
      d.petted = false; continue;
    }
    let aff = 0, hp = 0;
    if (d.fed) { hp += Hh.fed; aff += A.fed; } else { hp += Hh.hungry; aff += A.hungry; msgs.push(`${d.name} kelaparan`); }
    if (d.outside) aff += A.outside;
    if (d.rain) { hp += Hh.rain; aff += A.rain; msgs.push(`${d.name} kehujanan`); }
    if (season === 'dingin' && s.home === 'barn' && !heater && d.baby) hp += Hh.cold;
    if (d.sick) aff += A.sick;
    if (d.rode) aff += A.ride;
    d.health = Math.max(5, Math.min(100, d.health + hp));
    d.affection = Math.max(0, Math.min(1000, d.affection + aff));
    const wasSick = d.sick; d.sick = d.health < Hh.sickBelow;
    if (d.sick && !wasSick) msgs.push(`${d.name} sakit! Beri Obat Ternak`);
    // products for today (fed yesterday, healthy, grown up)
    if (d.fed && !d.sick && adult(d) && s.product) {
      d.lay = (d.lay || 0) + 1;
      if (d.lay >= s.every) {
        d.lay = 0;
        if (s.home === 'coop') { const used = new Set(ranch.eggs.map(e => e.nest)); for (let n = 0; n < C.nests.length; n++) if (!used.has(n)) { ranch.eggs.push({ species: d.species, nest: n, item: productId(d) }); break; } }
        else if (s.tool === 'pemerah') d.milk = true;
      }
      if (s.tool === 'gunting') d.woolDays = Math.min(3, (d.woolDays || 0) + 1);
    }
    // babies grow up, pregnancies end
    if (d.baby && ++d.age >= s.adultDays) { d.baby = false; if (a) a.buildRig(); msgs.push(`${d.name} sudah dewasa!`); }
    if (d.pregnant && --d.pregnant <= 0) { d.pregnant = 0; const b = newAnimal(d.species, { baby: true, at: new THREE.Vector3(d.x, 0, d.z) }); msgs.push(`🍼 ${d.name} melahirkan! Sambut ${b.name}`); }
    Object.assign(d, { fed: false, petted: false, brushed: false, handFed: false, outside: false, rain: false, rode: false });
  }
  // incubator: the chick hatches
  if (ranch.incubator && --ranch.incubator.days <= 0) {
    if (room('coop') > 0) { const b = newAnimal(ranch.incubator.species, { baby: true, at: C.door.in }); msgs.push(`🐣 Telur di mesin tetas menetas: ${b.name}!`); ranch.incubator = null; }
    else ranch.incubator.days = 1;
  }
  // level 3 barn: troughs fill themselves from the silo
  if (S.barn.levels[ranch.barn].auto) for (const d of inHome('barn')) if (ranch.silo > 0) { ranch.silo--; d.fed = true; }
  // the horse left somewhere comes home
  for (const a of live.values()) if (a.zone === 'free' && !a.ridden) { a.zone = 'barn'; a.d.zone = 'barn'; a.pos.copy(B.door.in); a.path = []; }
  refreshHay(); refreshEggs();
  if (ui.started && msgs.length) setTimeout(() => toast(`🐮 Peternakan: ${msgs.slice(0, 3).join(' · ')}${msgs.length > 3 ? '…' : ''}`), 2800);
}

// ---------------------------------------------------------------- riding the horse
function mount(a) {
  if (!onFoot() || isCarrying()) { toast('Tanganmu penuh'); return; }
  riding = a; a.ridden = true; a.path = []; a.following = false;
  if (!a.d.rode) { a.d.rode = true; love(a, 0); }
  sfx.animal('horse'); addEffect('berkuda');
  toast(`Menunggang ${a.d.name} · <kbd>${keyOf('interact')}</kbd> turun`);
}
function dismount() {
  const a = riding;
  if (!a) return;
  riding = null; a.ridden = false; removeEffect('berkuda');
  const fx = Math.sin(avatar.rotation.y), fz = Math.cos(avatar.rotation.y);
  a.pos.set(avatar.position.x + fz * 0.9, 0, avatar.position.z - fx * 0.9);
  const inRanch = a.pos.x > S.area.x0 && a.pos.x < S.area.x1 && a.pos.z > S.area.z0 && a.pos.z < S.area.z1;
  if (inRanch) { a.zone = 'pasture'; } else { a.zone = 'free'; zones.free = { x0: a.pos.x - 2.5, x1: a.pos.x + 2.5, z0: a.pos.z - 2.5, z1: a.pos.z + 2.5 }; }
  a.d.zone = a.zone; a.mode = 'idle'; a.timer = 2;
}
function updateRiding(dt) {
  const a = riding;
  if ((rideT -= dt) < 0) { rideT = 1; addEffect('berkuda'); }
  a.pos.set(avatar.position.x, 0, avatar.position.z); a.yaw = avatar.rotation.y;
  const sp2 = Math.hypot(body.velocity.x, body.velocity.z);
  a.t += dt; a.speed = sp2; a.d.x = a.pos.x; a.d.z = a.pos.z;
  a.rig.root.visible = true;
  a.rig.root.position.set(a.pos.x, avatar.position.y, a.pos.z); a.rig.root.rotation.y = a.yaw;
  a.animate(dt, W, sp2);
  avatar.position.y += SEAT;
  if (sp2 > 3 && Math.random() < dt * 8) { const c = new THREE.Color('#d8c0a0'); smoke.spawn(new THREE.Vector3(a.pos.x, 0.1, a.pos.z), new THREE.Vector3(frand(-0.5, 0.5), 0.6, frand(-0.5, 0.5)), 0.16, 0.6, c, 0.3); }
}

// ---------------------------------------------------------------- interaction
const W = {
  zones, pond: null, night: false, player: { x: 0, z: 0, yaw: 0 }, others: [],
  sleepSpot, mother: (a) => { for (const o of live.values()) if (o !== a && o.d.species === a.d.species && !o.d.baby && o.zone === a.zone) return o; return null; },
  graze: (x, z) => cutGrass(x, z, 0.4),
  sound: (a) => say(a),
};
function animalInFront() {
  const fx = Math.sin(avatar.rotation.y), fz = Math.cos(avatar.rotation.y), px = avatar.position.x + fx * 0.8, pz = avatar.position.z + fz * 0.8;
  let best = null, bd = 1e9;
  for (const a of live.values()) {
    if (a.ridden || !a.rig.root.visible) continue;
    const d = Math.hypot(a.pos.x - px, a.pos.z - pz) - a.m.size * 0.5;
    if (d < REACH * 0.8 && d < bd) { bd = d; best = a; }
  }
  return best;
}
const near = (p, r) => Math.hypot(avatar.position.x - p.x, avatar.position.z - p.z) < r;
const status = (d) => (sp(d).home === 'pet' ? '' : d.sick ? ' · <span class="warn">sakit</span>' : !d.fed ? ' · <span class="warn">lapar</span>' : '');
function petAnimal(a) {
  act.play('pet', a.headWorld(new THREE.Vector3()), () => {
    if (!a.d.petted) { a.d.petted = true; love(a, S.affection.pet); } else { hearts2(a, 2); a.hop(0.6); }
    say(a);
  });
}
function contextFor() {
  if (riding) return { label: `Turun dari ${riding.d.name}`, pos: avatar.position, run: dismount };
  const a = target;
  if (a) {
    const d = a.d, s = sp(d), name = `${d.name} ${s.icon}`, info = `<small>· ${hearts(d.affection)}${status(d)}</small>`;
    if (d.species === 'horse' && adult(d)) return { label: `Tunggangi ${name} ${info}`, pos: a.pos, run: () => mount(a) };
    if (s.home === 'pet' && d.petted) return { label: `${a.following ? 'Suruh tinggal' : 'Ajak jalan-jalan'} ${name} ${info}`, pos: a.pos, run: () => {
      a.following = d.following = !a.following; a.say(a.following ? '♪' : '💤'); say(a);
      if (!a.following) { a.zone = 'yard'; d.zone = 'yard'; a.mode = 'idle'; a.timer = 0; if (!inRanch(a.pos)) a.goTo([new THREE.Vector3(S.dogHouse.x, 0, S.dogHouse.z + 1.3)]); }
    } };
    return { label: `${d.petted ? '' : 'Elus '}${name} ${info}`, pos: a.pos, run: () => petAnimal(a) };
  }
  // eggs in the nests
  if (ranch.eggs.length && C) for (const e of ranch.eggs) { const n = C.nests[e.nest % C.nests.length]; if (near(n, 1.1)) return { label: `Ambil ${itemDef(e.item).name}`, pos: n, run: () => takeEgg(e) }; }
  if (C.incubator && near(C.incubator, 1.2)) {
    if (ranch.incubator) return { label: `Mesin tetas <small>· menetas ${ranch.incubator.days} hari lagi</small>`, pos: C.incubator, run: () => {} };
    const egg = ['telur_ayam', 'telur_bebek'].flatMap(p => [1, 2, 3, 4, 5].map(q => pid(p, q))).find(id => countOf(id));
    return egg ? { label: `Masukkan ${itemDef(egg).name} ke mesin tetas`, pos: C.incubator, run: () => incubate(egg) } : { label: 'Mesin tetas <small>· butuh telur ayam / bebek</small>', pos: C.incubator, run: () => {} };
  }
  if (near(new THREE.Vector3(B.trough.x, 0, (B.trough.z0 + B.trough.z1) / 2), 1.6) && avatar.position.x > B.rect.x0 - 1) return { label: `Isi tempat pakan kandang <small>· ${inHome('barn').filter(d => !d.fed).length} hewan belum makan · rumput ${countOf('rumput')}${siloObj ? ` + silo ${ranch.silo}` : ''}</small>`, pos: new THREE.Vector3(B.trough.x, 0, avatar.position.z), run: () => fillTrough('barn') };
  if (near(new THREE.Vector3(C.trough.x, 0, (C.trough.z0 + C.trough.z1) / 2), 1.3)) return { label: `Isi tempat pakan unggas <small>· ${inHome('coop').filter(d => !d.fed).length} belum makan · pakan ${countOf('pakan_unggas') + countOf('jagung')}</small>`, pos: new THREE.Vector3(C.trough.x, 0, avatar.position.z), run: () => fillTrough('coop') };
  if (siloObj && near(S.silo, 2.3)) return { label: `Simpan rumput ke silo <small>· isi ${ranch.silo} · di tas ${countOf('rumput')}</small>`, pos: new THREE.Vector3(S.silo.x + 1.3, 0, S.silo.z), run: storeSilo };
  const dz = B.door.out;
  if (near(dz, 1.3)) return { label: `${ranch.door ? 'Tutup' : 'Buka'} pintu kandang <small>· ${ranch.door ? 'hewan boleh keluar saat cerah' : 'hewan tetap di dalam'}</small>`, pos: dz, run: () => { ranch.door = !ranch.door; sfx.door(ranch.door); schedT = 0; } };
  return null;
}
const inRanch = (p) => p.x > S.area.x0 && p.x < S.area.x1 && p.z > S.area.z0 && p.z < S.area.z1;
function takeEgg(e) {
  if (!addItem(e.item, 1)) return;
  ranch.eggs.splice(ranch.eggs.indexOf(e), 1); sfx.pick(); refreshEggs();
}
function incubate(egg) {
  if (room('coop') <= 0) { toast('Kandang ayam penuh. Upgrade dulu'); return; }
  removeItem(egg, 1); ranch.incubator = { species: egg.startsWith('telur_bebek') ? 'duck' : 'chicken', days: S.incubatorDays };
  sfx.stash(); toast(`Telur dimasukkan. Menetas dalam ${S.incubatorDays} hari`);
}
function fillTrough(home) {
  const hungry = inHome(home).filter(d => !d.fed);
  if (!hungry.length) { toast(inHome(home).length ? 'Semua hewan sudah makan' : 'Belum ada hewan'); return; }
  let fed = 0;
  for (const d of hungry) {
    const food = home === 'barn' ? ['rumput'] : ['pakan_unggas', 'jagung'];
    const id = food.find(f => countOf(f));
    if (id) removeItem(id, 1); else if (home === 'barn' && ranch.silo > 0) ranch.silo--; else break;
    d.fed = true; fed++;
    const a = live.get(d.id); if (a && a.zone === home) { a.target = new THREE.Vector3((home === 'barn' ? B : C).trough.x + 0.3, 0, frand((home === 'barn' ? B : C).trough.z0, (home === 'barn' ? B : C).trough.z1)); a.mode = 'walk'; a.timer = 8; }
  }
  if (!fed) { toast(home === 'barn' ? 'Tidak ada rumput (sabit rumput liar, beli di Toko Ternak, atau isi silo)' : 'Tidak ada Pakan Unggas / jagung'); sfx.drop(); return; }
  sfx.stash(); toast(`${fed} hewan diberi makan${fed < hungry.length ? ` (${hungry.length - fed} lagi, pakan habis)` : ''}`); refreshHay();
}
function storeSilo() {
  const n = countOf('rumput');
  if (!n) { toast('Tidak ada Rumput Pakan di tas. Sabit rumput liar dulu'); return; }
  removeItem('rumput', n); ranch.silo = Math.min(S.silo.max, ranch.silo + n); sfx.stash(); toast(`${n} rumput disimpan · silo: ${ranch.silo}`);
}
// G with a ranch item (or rumput) on the animal in front
function useItem({ id }) {
  const mine = S.goods.some(g => g.id === id) || id === 'rumput';
  if (!mine) return;
  const a = target;
  if (!onFoot() || act.busy() || riding) return;
  if (!a) {
    if (id === 'rumput' && siloObj && near(S.silo, 2.3)) { storeSilo(); return; }
    toast('Hadapkan badan ke hewan'); return;
  }
  const d = a.d, s = sp(d), n = `${d.name}`;
  if (id === 'rumput' || id === 'pakan_unggas') {
    if (!s.feed || !s.feed.includes(id)) { toast(`${n} tidak makan ${itemDef(id).name}`); return; }
    if (d.fed && d.handFed) { toast(`${n} sudah kenyang`); return; }
    act.play('feed', a.headWorld(new THREE.Vector3()), () => { removeItem(id, 1); if (!d.handFed) love(a, S.affection.handFeed); d.fed = d.handFed = true; a.mode = 'graze'; a.timer = 3; say(a); refreshHay(); });
  } else if (id === 'sikat') {
    if (s.home === 'coop') { toast('Unggas tidak perlu disikat'); return; }
    act.play('brush', a.rig.body.getWorldPosition(new THREE.Vector3()), () => { if (!d.brushed) { d.brushed = true; love(a, S.affection.brush); } else hearts2(a, 2); a.say('✨'); });
  } else if (id === 'pemerah') {
    if (s.tool !== 'pemerah') { toast(`${n} tidak bisa diperah`); return; }
    if (d.baby) { toast(`${n} masih bayi`); return; }
    if (!d.milk) { toast(d.fed ? `Susu ${n} belum siap (besok pagi)` : `${n} harus diberi makan dulu, susunya keluar besok pagi`); return; }
    const p = a.rig.body.localToWorld(new THREE.Vector3(0, -0.15, -0.28));
    act.play('milk', p, () => { d.milk = false; addItem(productId(d), 1); sfx.drink(); love(a, 5, false); say(a); });
  } else if (id === 'gunting') {
    if (s.tool !== 'gunting') { toast(`${n} tidak punya wol`); return; }
    if ((d.woolDays || 0) < 3) { toast(`Wol ${n} belum lebat (${d.woolDays || 0}/3 hari)`); return; }
    act.play('shear', a.rig.body.getWorldPosition(new THREE.Vector3()), () => {
      d.woolDays = 0; addItem(productId(d), 1); sfx.chop(false);
      const p = a.rig.body.getWorldPosition(new THREE.Vector3()), c = new THREE.Color('#f6f3ec');
      for (let i = 0; i < 14; i++) smoke.spawn(p.clone().add(new THREE.Vector3(frand(-0.3, 0.3), frand(0, 0.3), frand(-0.4, 0.4))), new THREE.Vector3(frand(-1, 1), frand(0.5, 1.5), frand(-1, 1)), 0.1, 1.2, c, -0.8);
      a.say('😳');
    });
  } else if (id === 'obat_ternak') {
    if (!d.sick && d.health >= 95) { toast(`${n} sehat-sehat saja`); return; }
    act.play('feed', a.headWorld(new THREE.Vector3()), () => { removeItem(id, 1); d.health = 100; d.sick = false; a.say('💊'); hearts2(a, 3); });
  } else if (id === 'ramuan_kawin') {
    if (s.home !== 'barn') { toast(`Ramuan untuk sapi, kambing, domba, dan kuda. ${s.home === 'coop' ? 'Unggas pakai mesin tetas' : ''}`); return; }
    if (d.baby || d.pregnant) { toast(d.baby ? `${n} masih bayi` : `${n} sedang hamil`); return; }
    if (d.affection < 400) { toast(`${n} belum cukup sayang padamu (butuh 4 hati)`); return; }
    if (room('barn') <= 0) { toast('Kandang penuh. Upgrade kandang dulu'); return; }
    act.play('feed', a.headWorld(new THREE.Vector3()), () => { removeItem(id, 1); d.pregnant = S.pregnantDays; a.say('💕'); hearts2(a, 8); toast(`${n} hamil! Bayinya lahir dalam ${S.pregnantDays} hari`); });
  }
}

// ---------------------------------------------------------------- save / load
function clearLive() { if (riding) dismount(); for (const id of [...live.keys()]) despawn(id); }
function loadAll(d) {
  clearLive();
  Object.assign(ranch, { barn: 0, coop: 0, door: true, silo: 0, nextId: 1, animals: [], eggs: [], incubator: null }, d || {});
  ranch.barn = Math.min(ranch.barn, S.barn.levels.length - 1); ranch.coop = Math.min(ranch.coop, S.coop.levels.length - 1);
  ranch.animals = ranch.animals.filter(x => S.species[x.species]);
  if (B) rebuild();
  for (const a of ranch.animals) { if (a.zone === 'free' || a.following) { a.zone = sp(a).home === 'pet' ? 'yard' : sp(a).home; a.following = false; const p = a.zone === 'barn' ? B.door.in : a.zone === 'coop' ? C.door.in : new THREE.Vector3(S.dogHouse.x, 0, S.dogHouse.z + 1.3); a.x = p.x; a.z = p.z; } spawn(a); }
}
function starter() {   // a new game: uncle left you two hens and a puppy
  newAnimal('chicken'); newAnimal('chicken'); newAnimal('dog');
}

// ---------------------------------------------------------------- feature
export default {
  id: 'ranch',

  async build() {
    S = await loadAsset('data/ranch.json', 'json');
    defineItems();
    zones.pasture = { x0: S.pasture.x0, x1: S.pasture.x1, z0: S.pasture.z0, z1: S.pasture.z1 };
    zones.yard = zones.pasture;
    W.pond = S.pond;
    noTrees.push({ ...zones.pasture });
    // static, built with the world: pond, dog house, shop stall, board, keep-out for the buildings
    pond(S.pond);
    dogHouse(S.dogHouse);
    const shopSpot = shopStall(S.shop);
    for (let x = S.barn.x0 + 1; x < S.barn.x0 + 11; x += 3) for (let z = S.barn.z0 + 1; z < S.coop.z0 + 5; z += 3) keepOut.push({ x, z, r: 2.2 });
    keepOut.push({ x: S.silo.x, z: S.silo.z, r: 1.8 });
    board({ x: RANCH.x - 4.5, z: RANCH.z - 1.5, rot: 0.62, map: false, title: 'PETERNAKAN', label: 'Baca papan Peternakan', html:
      '<h2>Peternakan</h2><p>Kandang (sapi, kambing, domba, kuda), kandang ayam (ayam, bebek), padang rumput, dan hewan peliharaan.</p><ul>'
      + '<li><b>Makan tiap hari:</b> isi tempat pakan (rumput / pakan unggas) atau beri langsung dengan <kbd>G</kbd>. Saat cerah mereka merumput sendiri di luar.</li>'
      + '<li><b>Sayang (hati):</b> elus (<kbd>E</kbd>) dan sikat setiap hari. Makin sayang, makin bagus kualitas telur / susu / wol (⭐5, bahkan EMAS di 10 hati).</li>'
      + '<li><b>Sehat:</b> lapar dan kehujanan bikin sakit. Obat Ternak menyembuhkan.</li>'
      + '<li><b>Hasil:</b> telur diambil di sarang, susu diperah (Pemerah Susu), wol dicukur (Gunting) tiap 3 hari.</li>'
      + '<li><b>Beranak:</b> Ramuan Kawin (4 hati+) untuk hewan besar, mesin tetas untuk telur (kandang ayam besar).</li>'
      + '<li><b>Kuda</b> bisa ditunggangi. <b>Anjing & kucing</b> bisa diajak jalan-jalan.</li>'
      + '<li>Pintu kandang: tutup kalau mau hewan tetap di dalam.</li></ul>' });
    addMapMarker({ x: 55, z: 30, icon: '🐄', label: 'Peternakan' });
    addMapMarker({ x: S.shop.x, z: S.shop.z, icon: '🛒', label: 'Toko Ternak' });
    addZone({ pos: shopSpot, label: 'Toko Ternak <small>· hewan, pakan, upgrade, buku ternak</small>', range: 1.8, action: () => openShop() });
    addZone({ farm: true, get pos() { return ctx ? ctxPos : FAR; }, get label() { return ctx?.label || ''; }, quiet: true, range: 1.9, action: () => ctx?.run() });
    initShop(S, {
      animals: () => ranch.animals, room, count: (s) => ranch.animals.filter(a => a.species === s).length,
      buyAnimal: (s) => newAnimal(s), barnLvl: () => ranch.barn, coopLvl: () => ranch.coop,
      upgrade: (k) => { ranch[k]++; rebuild(); },
      rename: (id, name) => { const a = ranch.animals.find(x => x.id === id); if (a) a.name = name; },
      sell: (id) => { despawn(id); ranch.animals = ranch.animals.filter(x => x.id !== id); },
    });
    on('world:ready', () => { rebuild(); for (const a of ranch.animals) if (!live.has(a.id)) spawn(a); });
    on('hotbar:use', useItem);
    on('player:mode', (m) => { if (m === 'car' && riding) dismount(); });
    // rumput (from the farm) is used here: G on an animal feeds it
    on('world:ready', () => { const r = itemDef('rumput'); if (r.price !== undefined) r.hotbarUse = true; });
    registerSave('ranch', {
      version: 1,
      save: () => ({ ...ranch, animals: ranch.animals.map(a => ({ ...a })) }),
      load(d) { loadAll(d); ranch.day = d.day ?? time.day; },
      reset() { loadAll(null); ranch.day = time.day; starter(); },
      summary: (d) => { const n = (d.animals || []).length; return n ? `🐮 ${n} hewan` : ''; },
    });
  },

  update(dt) {
    if (!B) return;
    if (time.day !== ranch.day) { if (time.day > ranch.day) for (let k = Math.max(ranch.day + 1, time.day - 20); k <= time.day; k++) newDay(); ranch.day = time.day; }
    if ((schedT -= dt) < 0) { schedT = 1; schedule(); }
    const a0 = avatar.position;
    W.night = nightNow(); W.player.x = a0.x; W.player.z = a0.z; W.player.yaw = avatar.rotation.y; W.others = [...live.values()];
    for (const a of live.values()) {
      const vis = a === riding || Math.hypot(a.pos.x - a0.x, a.pos.z - a0.z) < 60;
      a.update(dt, W, vis);
      if (vis && !a.emote.visible && Math.random() < dt * 0.03) {
        if (a.d.sick) a.say('🤒'); else if (!a.d.fed && sp(a.d).home !== 'pet' && time.hour > 12 && !W.night) a.say('🍽'); else if (a.mode === 'sleep') a.say('💤', 3);
      }
    }
    if (riding) updateRiding(dt);
    // hearts floating up
    for (let i = hearts3.length - 1; i >= 0; i--) { const h = hearts3[i]; h.t += dt; h.s.position.y += h.vy * dt; h.s.position.x += h.vx * dt; h.s.material.opacity = 1; h.s.scale.setScalar(0.22 * (1 - h.t / 1.4) + 0.05); if (h.t > 1.4) { h.s.removeFromParent(); hearts3.splice(i, 1); } }
    // what the kid can do here (E), the animal in front (for G)
    target = onFoot() && !riding && ui.started ? animalInFront() : null;
    ctx = ui.started && (onFoot() || riding) && (riding || inRanch(a0) || target) ? contextFor() : null;
    if (ctx) ctxPos.set(ctx.pos.x, 0, ctx.pos.z);
    if (riding) ctxPos.copy(a0);
    const label = ctx?.label || '';
    if (label !== lastLabel) { lastLabel = label; if (ui.activeZone?.farm) setPrompt(null); }
    act.update(dt, !!riding);
    // roofs fade while the kid is inside
    for (const [k, o] of [['barn', B], ['coop', C]]) {
      const r = o.rect, inside = onFoot() && a0.x > r.x0 - 1.4 && a0.x < r.x1 + 0.8 && a0.z > r.z0 - 0.9 && a0.z < r.z1 + 0.9;
      const v = roofK[k] + ((inside ? 0.1 : 1) - roofK[k]) * (1 - Math.exp(-dt * 8));
      if (Math.abs(v - roofK[k]) > 1e-4) { roofK[k] = v; for (const m of o.roofMats) { m.opacity = v; m.depthWrite = v > 0.99; } }
    }
  },
};
