// Pickable items, Harvest Moon style: walk up to one and press E to lift it over your head, E again puts it in
// the bag, Q sets it down in front of you. Wild items grow back somewhere else after a while.
// Item list: public/assets/data/items.json. The bag is systems/inventory.js, the panel ui/inventory.js
// (it asks us to hold/drop things through inventory:hold / inventory:drop / inventory:stash).
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { scene, world } from '../../engine/core.js';
import { on } from '../../engine/events.js';
import { loadAsset, frand, smooth } from '../../engine/util.js';
import { thumbnail, disposeThumbnails } from '../../engine/thumbs.js';
import { sfx } from '../../engine/audio.js';
import { PLAYER_SPAWN } from '../../game/config.js';
import { addZone, removeZone } from '../../systems/interaction.js';
import { onAction, keyOf } from '../../systems/input.js';
import { registerSave } from '../../systems/save.js';
import { today } from '../../systems/calendar.js';
import { inventory, defineItem, itemDef, addItem, takeFrom, roomFor, setHeld } from '../../systems/inventory.js';
import { landDist, groundY, maskAt, keepOut } from '../../world/worldmap.js';
import { canopies } from '../../world/vegetation.js';
import { avatar, player, carry, setCarrying } from '../../entities/player/controller.js';
import { ui, toast, setPrompt } from '../../ui/ui.js';
import { buildModel } from './models.js';

const PICK_RANGE = 1.5;     // how close the kid must stand to get the "Ambil" prompt
const WORLD_R = 80;         // wild items spawn within this radius of the map centre
const NEAR_START = [13, 26];// the first item of each kind lies this far from the player spawn, so it's found quickly
const LIFT_T = 0.28, DROP_T = 0.34, STASH_T = 0.25;

const types = new Map();    // id -> { proto (mesh to clone), spawn }
const loose = [];           // items lying in the world: { id, obj, zone, wild, baseY, hl }
const regrow = [];          // { id, at } wild items waiting to grow back
const tweens = [];          // flying items: { obj, from, to, t, dur, arc, s0, s1, done }
let held = null;            // { id, obj, zone }
let clock = 0;

// ---------------------------------------------------------------- helpers
const v = new THREE.Vector3(), rayFrom = new CANNON.Vec3(), rayTo = new CANNON.Vec3(), rayRes = new CANNON.RaycastResult();
// top of whatever is at (x, z): terrain, a plaza, a ramp, a crate…
function floorY(x, z, fromY = 6) {
  rayFrom.set(x, fromY, z); rayTo.set(x, fromY - 12, z); rayRes.reset();
  return world.raycastClosest(rayFrom, rayTo, { collisionFilterMask: 1, skipBackfaces: true }, rayRes) ? rayRes.hitPointWorld.y : groundY(x, z);
}
function findSpot(where, near) {
  for (let i = 0; i < 80; i++) {
    const a = Math.random() * Math.PI * 2, r = near ? frand(...NEAR_START) : Math.sqrt(Math.random()) * WORLD_R;
    const x = (near ? PLAYER_SPAWN.x : 0) + Math.cos(a) * r, z = (near ? PLAYER_SPAWN.z : 0) + Math.sin(a) * r;
    const d = landDist(x, z);
    if (where === 'shore' ? d < 0.7 || d > 3.2 : d < 2) continue;
    const m = maskAt(x, z);
    if (m.asphalt > 0.2 || (where === 'grass' && m.paved > 0.25)) continue;
    if (keepOut.some(k => Math.hypot(x - k.x, z - k.z) < k.r + 0.6)) continue;
    if (canopies.some(k => Math.hypot(x - k.x, z - k.z) < k.r)) continue;   // hidden under leaves from the camera
    if (loose.some(o => Math.hypot(x - o.obj.position.x, z - o.obj.position.z) < 2.5)) continue;
    const y = floorY(x, z);
    if (y > groundY(x, z) + 0.12) continue;   // something stands there (tree trunk, rock, prop)
    return v.set(x, y, z);
  }
  return null;
}
function tween(obj, from, to, dur, { arc = 0, s0 = 1, s1 = 1, done } = {}) {
  const tw = { obj, from: from.clone(), to: to.clone(), t: 0, dur, arc, s0, s1, done };
  for (let i = tweens.length - 1; i >= 0; i--) if (tweens[i].obj === obj) tweens.splice(i, 1);
  tweens.push(tw); obj.position.copy(from); obj.scale.setScalar(s0);
}
// world model of an item: ours (items.json) or one another feature attached to its item def (defineItem({ proto }))
const protoOf = (id) => types.get(id)?.proto || itemDef(id).proto || null;
const forward = (d) => v.set(Math.sin(avatar.rotation.y) * d, 0, Math.cos(avatar.rotation.y) * d);
const onFoot = () => player.mode === 'foot' && avatar.visible;

// ---------------------------------------------------------------- items lying in the world
function addLoose(id, pos, { wild = false, pop = false } = {}) {
  const obj = protoOf(id).clone();
  obj.position.copy(pos); obj.rotation.y = Math.random() * Math.PI * 2;
  scene.add(obj);
  const it = { id, obj, wild, baseY: pos.y, hl: 0 };
  it.zone = addZone({ pos: obj.position, label: `Ambil ${itemDef(id).name}`, quiet: true, range: PICK_RANGE, action: () => pickUp(it) });
  loose.push(it);
  if (pop) tween(obj, pos, pos, 0.4, { arc: 0.3, s0: 0.05 });
  return it;
}
// wild items only grow in their seasons (items.json spawn.seasons, missing = all year)
const inSeason = (id) => { const ss = types.get(id).spawn?.seasons; return !ss || ss.includes(today().season.id); };
function spawnWild(id, near = false) {
  if (!inSeason(id)) return;
  const p = (near && findSpot(types.get(id).spawn.where, true)) || findSpot(types.get(id).spawn.where, false);
  if (p) addLoose(id, p, { wild: true, pop: clock > 0 }); else regrow.push({ id, at: clock + 10 });
}

// ---------------------------------------------------------------- hands: pick up, hold, stash, put down
function hold(id, obj, fromLocal, s0 = 1) {
  held = { id, obj };
  held.zone = addZone({ pos: avatar.position, label: `Simpan ${itemDef(id).name} ke tas · <kbd>${keyOf('drop')}</kbd> taruh`, quiet: true, action: stash });
  setHeld(id); setCarrying(true);
  setPrompt(held.zone);   // right away, so a quick second E already means "into the bag"
  carry.add(obj); obj.rotation.set(0, 0.5, 0);
  tween(obj, fromLocal, new THREE.Vector3(), LIFT_T, { arc: 0.25, s0 });
}
function release() {
  const h = held;
  removeZone(h.zone); held = null; setHeld(null); setCarrying(false); setPrompt(null);
  return h;
}
function pickUp(it) {
  if (held || !onFoot()) return;
  loose.splice(loose.indexOf(it), 1); removeZone(it.zone);
  if (it.wild) regrow.push({ id: it.id, at: clock + (types.get(it.id).spawn.respawn || 90) });
  const from = carry.worldToLocal(it.obj.getWorldPosition(new THREE.Vector3()));
  sfx.pick();
  hold(it.id, it.obj, from);
}
function stash() {
  if (!held) return;
  if (!roomFor(held.id)) { toast(`Tas penuh! Tekan <kbd>${keyOf('drop')}</kbd> untuk menaruh`); sfx.drop(); return; }
  const { id, obj } = release();
  addItem(id, 1); sfx.stash();
  tween(obj, obj.position, new THREE.Vector3(0.25, -0.75, -0.2), STASH_T, { arc: 0.2, s1: 0.1, done: () => obj.removeFromParent() });
}
// fly `obj` (already in the scene) from where it is to the ground in front of the kid, then leave it there
function throwDown(id, obj) {
  const f = forward(0.85), x = avatar.position.x + f.x + frand(-0.15, 0.15), z = avatar.position.z + f.z + frand(-0.15, 0.15);
  const to = new THREE.Vector3(x, floorY(x, z, avatar.position.y + 1.5), z);
  obj.rotation.set(0, Math.random() * Math.PI * 2, 0);
  tween(obj, obj.position, to, DROP_T, { arc: 0.35, s0: obj.scale.x, done: () => { obj.removeFromParent(); addLoose(id, to); } });
}
const overWater = () => { const f = forward(0.85); return landDist(avatar.position.x + f.x, avatar.position.z + f.z) < 0.3; };
function putDown() {
  if (!held || !onFoot()) return;
  if (overWater()) { toast('Jangan dibuang ke air!'); sfx.drop(); return; }
  const { id, obj } = release();
  scene.attach(obj);
  sfx.drop(); throwDown(id, obj);
}

// ---------------------------------------------------------------- requests from the inventory panel
function holdFromBag({ slot }) {
  if (!onFoot()) { toast('Keluar dari mobil dulu'); return; }
  const id = inventory.slots[slot]?.id;
  if (!id) return;
  if (!protoOf(id)) { toast('Barang ini tidak bisa dipegang'); return; }
  takeFrom(slot, 1);
  if (held) {   // hands full: swap, the held item goes into the bag (there's room now unless it's a different full stack)
    if (!roomFor(held.id)) { addItem(id, 1); toast('Tas penuh! Taruh dulu barang yang dipegang'); return; }
    const old = release(); addItem(old.id, 1); old.obj.removeFromParent();
  }
  sfx.pick();
  hold(id, protoOf(id).clone(), new THREE.Vector3(0.25, -0.8, -0.15), 0.2);   // pops out of the bag
}
function dropFromBag({ slot }) {
  if (slot === -1) { putDown(); return; }
  if (!onFoot()) { toast('Keluar dari mobil dulu'); return; }
  if (overWater()) { toast('Jangan dibuang ke air!'); return; }
  if (!protoOf(inventory.slots[slot]?.id)) { toast('Barang ini tidak bisa dibuang'); return; }
  const id = takeFrom(slot, 1);
  if (!id) return;
  const obj = protoOf(id).clone();
  scene.add(obj); obj.position.copy(avatar.position).y += 0.7;
  sfx.drop(); throwDown(id, obj);
}

// ---------------------------------------------------------------- save / load
// Everything lying around (wild + dropped), the regrow timers and the item in the hands.
function clearAll() {
  for (const it of loose) { removeZone(it.zone); it.obj.removeFromParent(); }
  for (const w of tweens) w.obj.removeFromParent();
  loose.length = regrow.length = tweens.length = 0;
  if (held) { const h = release(); h.obj.removeFromParent(); }
}
function scatterWild() {
  for (const [id, t] of types) if (t.spawn) for (let i = 0; i < t.spawn.count; i++) spawnWild(id, i === 0);
}
// new season: out-of-season wild items wither away, in-season ones are topped up to their count
function changeSeason() {
  for (let i = loose.length - 1; i >= 0; i--) {
    const it = loose[i];
    if (!it.wild || inSeason(it.id)) continue;
    loose.splice(i, 1); removeZone(it.zone);
    tween(it.obj, it.obj.position, it.obj.position, 0.35, { s0: 1, s1: 0.01, done: () => it.obj.removeFromParent() });
  }
  for (let i = regrow.length - 1; i >= 0; i--) if (!inSeason(regrow[i].id)) regrow.splice(i, 1);
  for (const [id, t] of types) {
    if (!t.spawn || !inSeason(id)) continue;
    const have = loose.filter(it => it.wild && it.id === id).length + regrow.filter(r => r.id === id).length;
    for (let k = have; k < t.spawn.count; k++) spawnWild(id);
  }
}
const r2 = (x) => Math.round(x * 100) / 100;
const saveSlice = {
  save: () => ({
    items: loose.map(it => [it.id, r2(it.obj.position.x), r2(it.baseY), r2(it.obj.position.z), it.wild ? 1 : 0]),
    regrow: regrow.map(r => [r.id, Math.max(0, Math.round(r.at - clock))]),
    held: held ? held.id : null,
  }),
  load(d) {
    clearAll();
    for (const [id, x, y, z, wild] of d.items || []) if (protoOf(id)) addLoose(id, new THREE.Vector3(x, y, z), { wild: !!wild });
    for (const [id, left] of d.regrow || []) if (types.has(id)) regrow.push({ id, at: clock + left });
    if (d.held && protoOf(d.held)) hold(d.held, protoOf(d.held).clone(), new THREE.Vector3(), 1);
  },
  reset() { clearAll(); scatterWild(); },
};

// ---------------------------------------------------------------- feature
export default {
  id: 'pickup',

  async build() {
    const data = await loadAsset('data/items.json', 'json');
    for (const d of data.items) {
      const proto = buildModel(d.model);
      defineItem({ id: d.id, name: d.name, desc: d.desc, stack: d.stack, price: d.price, use: d.use, icon: thumbnail(proto.clone(), 128) });
      types.set(d.id, { proto, spawn: d.spawn || null });
    }
    disposeThumbnails();

    on('inventory:hold', holdFromBag);
    on('inventory:drop', dropFromBag);
    on('inventory:stash', stash);
    // the held item was eaten / drunk (features/survival): it just disappears from the hands
    on('inventory:discardHeld', () => { if (held) release().obj.removeFromParent(); });
    onAction('drop', putDown);
    // climbing into the car: the held item goes into the bag (or is left at the door when the bag is full)
    on('player:mode', (mode) => {
      if (mode !== 'car' || !held) return;
      const { id, obj } = release();
      obj.removeFromParent();
      if (!addItem(id, 1)) { const { x, z } = avatar.position; addLoose(id, new THREE.Vector3(x, floorY(x, z), z)); }
    });
    // wild items are scattered once the world (and its grass mask) is finished
    on('world:ready', scatterWild);
    on('calendar:season', changeSeason);
    registerSave('pickup', saveSlice);
  },

  update(dt, { t }) {
    clock += dt;
    for (let i = tweens.length - 1; i >= 0; i--) {
      const w = tweens[i], k = Math.min(1, (w.t += dt) / w.dur), e = 1 - (1 - k) * (1 - k);
      w.obj.position.lerpVectors(w.from, w.to, e).y += Math.sin(Math.PI * k) * w.arc;
      w.obj.scale.setScalar(w.s0 + (w.s1 - w.s0) * smooth(0, 1, k));
      if (k >= 1) { tweens.splice(i, 1); if (w.done) w.done(); }
    }
    for (let i = regrow.length - 1; i >= 0; i--) if (clock > regrow[i].at) spawnWild(regrow.splice(i, 1)[0].id);
    // the item you'd pick up hops and turns a little
    for (const it of loose) {
      const target = ui.activeZone === it.zone ? 1 : 0;
      if (!target && it.hl < 0.001) continue;
      it.hl += (target - it.hl) * (1 - Math.exp(-dt * 10));
      it.obj.position.y = it.baseY + it.hl * (0.06 + Math.abs(Math.sin(t * 5)) * 0.1);
      it.obj.rotation.y += dt * 1.2 * it.hl;
    }
  },
};
