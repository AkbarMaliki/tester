// One live animal: where it wants to be (barn / coop / pasture / yard / following you), what it's doing (wander,
// graze, swim, sleep, sit, eat, follow, happy hop) and the procedural animation of its rig (models.js animalRig).
// All decisions are local and cheap; far from the camera it keeps its position but skips animating and is hidden.
import * as THREE from 'three';
import { clamp, lerp, frand } from '../../engine/util.js';
import { scene } from '../../engine/core.js';
import { animalRig, emoteMaterial } from './models.js';

// per species: walk speed (m/s), run speed, step cadence, body size (for spacing), emote height
const MOVE = {
  cow: { walk: 0.8, run: 1.8, cad: 3.2, size: 0.8, top: 1.45 }, horse: { walk: 1.1, run: 5.5, cad: 3.0, size: 0.8, top: 1.9 },
  goat: { walk: 1.0, run: 2.2, cad: 4.2, size: 0.55, top: 1.05 }, sheep: { walk: 0.8, run: 1.9, cad: 4.2, size: 0.6, top: 1.0 },
  dog: { walk: 1.6, run: 5.2, cad: 7.0, size: 0.4, top: 0.72 }, cat: { walk: 1.1, run: 3.2, cad: 6.5, size: 0.35, top: 0.58 },
  chicken: { walk: 0.7, run: 1.8, cad: 12, size: 0.3, top: 0.62 }, duck: { walk: 0.6, run: 1.5, cad: 10, size: 0.35, top: 0.55 },
};
const BIRDS = new Set(['chicken', 'duck']);
const rndIn = (r) => new THREE.Vector3(frand(r.x0, r.x1), 0, frand(r.z0, r.z1));

export class Animal {
  // d = saved data (index.js owns it); zone = where it is now: barn | coop | pasture | yard | free
  constructor(d) {
    this.d = d;
    this.m = MOVE[d.species];
    this.bird = BIRDS.has(d.species);
    this.buildRig();
    this.pos = new THREE.Vector3(d.x ?? 0, 0, d.z ?? 0);
    this.yaw = d.yaw ?? Math.random() * 6.28;
    this.path = []; this.target = null;
    this.mode = 'idle'; this.timer = frand(0.5, 3);
    this.speed = 0; this.phase = Math.random() * 6; this.t = Math.random() * 10;
    this.w = { graze: 0, lie: 0, sit: 0, hop: 0, swim: 0, flap: 0, peck: 0, look: 0 };
    this.hopT = 0; this.emoteT = 0; this.grazeT = frand(2, 8); this.soundT = frand(8, 30);
    this.zone = d.zone || 'yard';
    this.ridden = false; this.following = !!d.following;
  }
  buildRig() {
    if (this.rig) this.rig.root.removeFromParent();
    this.rig = animalRig(this.d.species, this.d.variant || 0, !!this.d.baby);
    this.emote = new THREE.Sprite(emoteMaterial('❤')); this.emote.visible = false;
    this.emote.scale.setScalar(0.42 / this.rig.root.scale.x); this.emote.position.y = this.m.top / this.rig.root.scale.x;
    this.rig.root.add(this.emote);
    scene.add(this.rig.root);
  }
  dispose() { this.rig.root.removeFromParent(); }
  say(ch, secs = 2.2) { this.emote.material = emoteMaterial(ch); this.emote.visible = true; this.emoteT = secs; }
  hop(secs = 1.1) { this.hopT = secs; }
  goTo(points) { this.path = points.map(p => p.clone()); this.target = null; this.mode = 'walk'; }
  headWorld(out) { return this.rig.head.getWorldPosition(out); }

  // ---------------------------------------------------------------- decisions
  // W = { zones, pond, night, player, others, graze(x, z), ripple(x, z), mother? }
  think(W) {
    const r = W.zones[this.zone];
    if (this.following && this.zone !== 'free') { this.mode = 'follow'; return; }
    if (W.night && (this.zone === 'barn' || this.zone === 'coop' || this.d.home === 'pet')) { this.target = W.sleepSpot(this); this.mode = 'toSleep'; return; }
    const roll = Math.random(), out = this.zone === 'pasture';
    if (this.d.baby && W.mother(this)) { const m = W.mother(this); this.target = new THREE.Vector3(m.pos.x + frand(-0.8, 0.8), 0, m.pos.z + frand(-0.8, 0.8)); this.mode = 'walk'; this.timer = frand(2, 5); return; }
    if (this.d.species === 'duck' && out && roll < 0.35) { const a = Math.random() * 6.28, rr = Math.random() * W.pond.r * 0.7; this.target = new THREE.Vector3(W.pond.x + Math.cos(a) * rr, 0, W.pond.z + Math.sin(a) * rr); this.mode = 'walk'; this.timer = frand(10, 20); return; }
    if (out && !this.bird && roll < 0.5) { this.mode = 'graze'; this.timer = frand(4, 9); return; }
    if (this.bird && roll < 0.45) { this.mode = 'peck'; this.timer = frand(2, 5); return; }
    if ((this.d.species === 'cat' && roll < 0.25) || (this.d.species === 'dog' && roll < 0.15)) { this.mode = roll < 0.12 ? 'nap' : 'sit'; this.timer = frand(6, 14); return; }
    if (roll < 0.8 && r) { this.target = rndIn(r); this.mode = 'walk'; this.timer = frand(6, 12); return; }
    this.mode = 'idle'; this.timer = frand(2, 5);
  }

  // ---------------------------------------------------------------- per frame
  update(dt, W, visible) {
    this.t += dt;
    if (this.ridden) return;
    this.timer -= dt;
    if ((this.emoteT -= dt) <= 0) this.emote.visible = false;
    this.hopT = Math.max(0, this.hopT - dt);
    let goal = null, fast = false;
    if (this.path.length) { goal = this.path[0]; fast = true; if (goal.distanceTo(this.pos) < 0.35) { this.path.shift(); goal = this.path[0] || null; if (!goal) { this.mode = 'idle'; this.timer = 0.5; } } }
    else if (this.mode === 'follow') {
      const p = W.player, fx = Math.sin(p.yaw), fz = Math.cos(p.yaw);
      const want = new THREE.Vector3(p.x - fx * 1.2 + fz * (this.d.species === 'cat' ? -0.7 : 0.7), 0, p.z - fz * 1.2 - fx * (this.d.species === 'cat' ? -0.7 : 0.7));
      const dd = want.distanceTo(this.pos);
      if (dd > 25) this.pos.copy(want);                           // got left far behind (car, sleeping…): catch up
      if (dd > 0.6) { goal = want; fast = dd > 3; } else this.faceTowards(p.x, p.z, dt);
      this.w.sit += ((dd < 0.6 && this.t % 12 > 5 ? 1 : 0) - this.w.sit) * (1 - Math.exp(-dt * 4));
    } else {
      if (this.timer <= 0 && this.mode !== 'toSleep') this.think(W);
      if (this.mode === 'walk' || this.mode === 'toSleep') {
        goal = this.target;
        if (!goal || goal.distanceTo(this.pos) < 0.3) {
          if (this.mode === 'toSleep') { this.mode = 'sleep'; if (!W.night) this.timer = 0; }
          else { this.mode = this.d.species === 'duck' && this.inPond(W) ? 'swim' : 'idle'; this.timer = this.mode === 'swim' ? frand(8, 16) : frand(1.5, 4); }
          goal = null;
        }
      }
      if (this.mode === 'sleep' && !W.night) { this.mode = 'idle'; this.timer = frand(1, 3); }
      if (this.mode === 'swim' && this.timer > 0 && Math.random() < dt * 0.4) { const a = Math.random() * 6.28, rr = Math.random() * W.pond.r * 0.6; this.target = new THREE.Vector3(W.pond.x + Math.cos(a) * rr, 0, W.pond.z + Math.sin(a) * rr); goal = this.target; }
      if (this.mode === 'graze' && (this.grazeT -= dt) < 0) { this.grazeT = frand(7, 11); const fx = Math.sin(this.yaw), fz = Math.cos(this.yaw); W.graze(this.pos.x + fx * 0.5, this.pos.z + fz * 0.5); }
    }
    // steering: towards the goal, around the others and the player
    const want = goal ? (fast ? this.m.run * (this.path.length ? 0.55 : 1) : this.m.walk) : 0;
    this.speed += (want - this.speed) * (1 - Math.exp(-dt * 4));
    const v = new THREE.Vector3();
    if (goal && this.speed > 0.02) { v.subVectors(goal, this.pos); v.y = 0; const l = v.length(); if (l > 1e-3) v.multiplyScalar(Math.min(this.speed, l / dt) / l); }
    for (const o of W.others) {
      if (o === this || o.ridden) continue;
      const dx = this.pos.x - o.pos.x, dz = this.pos.z - o.pos.z, d2 = dx * dx + dz * dz, min = (this.m.size + o.m.size) * 0.55;
      if (d2 < min * min && d2 > 1e-6) { const d = Math.sqrt(d2), k = (min - d) / min * 1.2; v.x += dx / d * k; v.z += dz / d * k; }
    }
    const px = this.pos.x - W.player.x, pz = this.pos.z - W.player.z, pd = Math.hypot(px, pz), pmin = this.m.size * 0.5 + 0.35;
    if (pd < pmin && pd > 1e-4 && this.mode !== 'sleep') { v.x += px / pd * 1.5; v.z += pz / pd * 1.5; }
    this.pos.addScaledVector(v, dt);
    if (!this.path.length && this.mode !== 'follow') { const r = W.zones[this.zone]; if (r) { this.pos.x = clamp(this.pos.x, r.x0, r.x1); this.pos.z = clamp(this.pos.z, r.z0, r.z1); } }
    if (v.lengthSq() > 0.01 && goal) this.faceTowards(this.pos.x + v.x, this.pos.z + v.z, dt);
    // a sound now and then
    if ((this.soundT -= dt) < 0) { this.soundT = frand(15, 45); if (visible && this.mode !== 'sleep') W.sound(this); }
    this.d.x = this.pos.x; this.d.z = this.pos.z; this.d.yaw = this.yaw;
    this.rig.root.visible = visible;
    if (visible) this.animate(dt, W);
    this.rig.root.position.set(this.pos.x, this.mode === 'swim' || (this.d.species === 'duck' && this.inPond(W)) ? -0.1 : 0, this.pos.z);
    this.rig.root.rotation.y = this.yaw;
  }
  inPond(W) { return Math.hypot(this.pos.x - W.pond.x, this.pos.z - W.pond.z) < W.pond.r - 0.2; }
  faceTowards(x, z, dt) {
    const want = Math.atan2(x - this.pos.x, z - this.pos.z);
    let d = want - this.yaw; d = Math.atan2(Math.sin(d), Math.cos(d));
    this.yaw += d * (1 - Math.exp(-dt * 6));
  }

  // ---------------------------------------------------------------- animation
  animate(dt, W, speedOverride) {
    const R = this.rig, m = this.m, t = this.t, e = (k) => 1 - Math.exp(-dt * k);
    const speed = speedOverride ?? this.speed, walkW = clamp(speed / m.walk, 0, 1), runW = clamp((speed - m.walk * 1.4) / (m.run - m.walk * 1.4), 0, 1);
    this.phase += dt * m.cad * Math.max(speed / m.walk, 0) * (1 - runW * 0.35);
    const swimming = this.d.species === 'duck' && this.inPond(W);
    const wl = this.w;
    wl.graze += ((this.mode === 'graze' ? 1 : 0) - wl.graze) * e(4);
    wl.lie += ((this.mode === 'sleep' || this.mode === 'nap' || (this.d.sick && this.mode === 'idle') ? 1 : 0) - wl.lie) * e(3);
    if (this.mode !== 'follow') wl.sit += ((this.mode === 'sit' ? 1 : 0) - wl.sit) * e(4);
    wl.hop = this.hopT > 0 ? 1 : wl.hop * (1 - e(6));
    wl.swim += ((swimming ? 1 : 0) - wl.swim) * e(4);
    wl.peck += ((this.mode === 'peck' ? 1 : 0) - wl.peck) * e(6);
    const s = Math.sin(this.phase), breathe = Math.sin(t * 2.2) * 0.012;
    const hop = Math.abs(Math.sin(t * 13)) * 0.1 * wl.hop;
    if (this.bird) {
      const A = 0.7 * walkW * (1 - wl.swim);
      R.legs.L.rotation.x = s * A * (1 - wl.lie); R.legs.R.rotation.x = -s * A * (1 - wl.lie);
      R.legs.L.visible = R.legs.R.visible = wl.swim < 0.5;
      R.body.position.y = R.hip * (1 - 0.45 * wl.lie) + Math.abs(s) * 0.02 * walkW + hop + Math.sin(t * 3) * 0.01 * wl.swim;
      R.body.rotation.z = (this.d.species === 'duck' ? Math.sin(this.phase * 0.5) * 0.16 : 0) * walkW;   // waddle
      R.body.rotation.x = 0.1 * wl.peck;
      // peck: quick dips; head bobs with the steps (chickens)
      const peck = wl.peck * Math.max(0, Math.sin(t * 7)) ** 3 * 1.1;
      R.head.rotation.x = peck + (this.d.species === 'chicken' ? Math.max(0, s) * 0.15 * walkW : 0) + wl.lie * 0.5;
      R.head.position.z = (this.d.species === 'chicken' ? Math.sin(this.phase * 2) * 0.015 * walkW : 0) + (R.head.userData.z0 ??= R.head.position.z);
      const flap = (wl.hop + runW) * (Math.sin(t * 28) * 0.55 + 0.6) + (this.t % 9 < 0.5 ? Math.sin(t * 30) * 0.4 + 0.4 : 0);
      R.wings.L.rotation.z = flap; R.wings.R.rotation.z = -flap;
    } else {
      const lie = wl.lie, sit = wl.sit;
      // trot: diagonal pairs; the horse gallops (front pair / back pair) when fast
      const A = lerp(0.42, 0.75, runW) * walkW * (1 - lie), gal = this.d.species === 'horse' ? runW : 0;
      const fl = lerp(s, Math.sin(this.phase), gal), br = lerp(s, Math.sin(this.phase + 2.4), gal);
      const fr = lerp(-s, Math.sin(this.phase + 0.35), gal), bl = lerp(-s, Math.sin(this.phase + 2.75), gal);
      R.legs.FL.rotation.x = fl * A + lie * 1.45 + sit * 0.35; R.legs.FR.rotation.x = fr * A + lie * 1.45 + sit * 0.35;
      R.legs.BL.rotation.x = bl * A - lie * 1.5 - sit * 1.3; R.legs.BR.rotation.x = br * A - lie * 1.5 - sit * 1.3;
      R.body.position.y = R.hip * (1 - 0.62 * lie - 0.28 * sit) + Math.abs(Math.cos(this.phase)) * lerp(0.025, 0.07, runW) * walkW + hop;
      R.body.rotation.x = -0.38 * sit + Math.sin(this.phase * 2) * 0.05 * gal;
      R.body.scale.set(1, 1 + breathe, 1);
      // head: grazing, sleeping, looking around, following the player's head with its eyes
      const look = Math.sin(t * 0.37 + this.d.id) * 0.5 * (1 - walkW) * (1 - wl.graze) * (1 - lie);
      R.head.rotation.set(wl.graze * (0.95 + Math.sin(t * 6) * 0.06) + lie * 0.35 - sit * 0.25 + Math.sin(this.phase * 2) * 0.05 * walkW - hop * 1.5, look, lie * 0.25);
      if (R.tail) {
        if (this.d.species === 'dog') { const wag = 8 + (this.d.affection || 0) / 60; R.tail.rotation.set(0, Math.sin(t * wag) * (0.35 + wl.hop * 0.4) * (1 - lie * 0.7), 0); }
        else if (this.d.species === 'cat') R.tail.rotation.set(Math.sin(t * 0.9) * 0.2, Math.sin(t * 1.3) * 0.4, 0);
        else R.tail.rotation.set(0.1 * walkW, 0, Math.sin(t * 1.8 + this.d.id) * 0.35);
      }
      if (R.wool) R.wool.scale.setScalar(0.72 + 0.28 * clamp((this.d.woolDays || 0) / 3, 0, 1));
    }
  }
}
