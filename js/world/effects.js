// Particles (smoke / dust / splash / boost flames), wind lines and fireflies.
import * as THREE from 'three';
import { frand } from '../engine/util.js';
import { scene, U, shaderMat } from '../engine/core.js';

export class Puffs {
  constructor(n, material) {
    this.n = n; this.i = 0; this.p = [];
    this.im = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), material, n);
    this.im.frustumCulled = false; this.im.castShadow = false;
    const zero = new THREE.Matrix4().makeScale(0, 0, 0), c = new THREE.Color(1, 1, 1);
    for (let k = 0; k < n; k++) {
      this.p.push({ life: 1, max: 1, pos: new THREE.Vector3(), vel: new THREE.Vector3(), size: 1, rise: 0, rot: 0 });
      this.im.setMatrixAt(k, zero); this.im.setColorAt(k, c);
    }
    scene.add(this.im);
    this.m = new THREE.Matrix4(); this.q = new THREE.Quaternion(); this.e = new THREE.Euler(); this.s = new THREE.Vector3();
  }
  spawn(pos, vel, size, life, color, rise = 0.6) {
    const k = this.i, q = this.p[k]; this.i = (this.i + 1) % this.n;
    q.life = 0; q.max = life; q.pos.copy(pos); q.vel.copy(vel); q.size = size; q.rise = rise; q.rot = Math.random() * 6;
    this.im.setColorAt(k, color); this.im.instanceColor.needsUpdate = true;
  }
  update(dt) {
    for (let k = 0; k < this.n; k++) {
      const q = this.p[k];
      if (q.life >= q.max) continue;
      q.life += dt;
      const t = Math.min(1, q.life / q.max);
      q.vel.multiplyScalar(Math.exp(-dt * 2.2)); q.vel.y += q.rise * dt;
      q.pos.addScaledVector(q.vel, dt);
      const sc = t >= 1 ? 0 : q.size * Math.pow(Math.max(Math.sin(Math.PI * Math.min(1, t * 1.15 + 0.08)), 0), 0.6);
      this.im.setMatrixAt(k, this.m.compose(q.pos, this.q.setFromEuler(this.e.set(q.rot, q.rot * 0.7 + t, 0)), this.s.setScalar(sc)));
    }
    this.im.instanceMatrix.needsUpdate = true;
  }
}
export const smoke = new Puffs(260, new THREE.MeshLambertMaterial({ flatShading: true }));
export const flames = new Puffs(80, new THREE.MeshBasicMaterial());

// ---------------------------------------------------------------- wind lines
export const WINDU = { uColor: { value: new THREE.Color() } };
export const windLines = [];
function makeWindLine() {
  const N = 60, pos = new Float32Array((N + 1) * 2 * 3), s = new Float32Array((N + 1) * 2), idx = [];
  for (let k = 0; k <= N; k++) { s[k * 2] = s[k * 2 + 1] = k / N; if (k < N) { const a = k * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); } }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('aS', new THREE.BufferAttribute(s, 1)); geo.setIndex(idx);
  const m = shaderMat('wind.vert', 'wind.frag', {
    uniforms: { uColor: WINDU.uColor, uHead: { value: 0 } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
  });
  const me = new THREE.Mesh(geo, m); me.frustumCulled = false; me.visible = false; scene.add(me);
  return { me, t: 0, dur: 1, N };
}
for (let i = 0; i < 4; i++) windLines.push(makeWindLine());

function spawnWind(w, center) {
  const dir = new THREE.Vector3(U.uWindDir.value.x, 0, U.uWindDir.value.y), perp = new THREE.Vector3(-dir.z, 0, dir.x);
  const start = center.clone().addScaledVector(dir, frand(-26, -14)).addScaledVector(perp, frand(-14, 14));
  const L = frand(22, 32), amp = frand(0.6, 1.8), ph = frand(0, 6), fr = frand(3, 6), y0 = frand(1.2, 3.2), width = 0.07;
  const pos = w.me.geometry.attributes.position;
  for (let k = 0; k <= w.N; k++) {
    const s = k / w.N;
    const p = start.clone().addScaledVector(dir, s * L).addScaledVector(perp, Math.sin(s * fr + ph) * amp);
    p.y = y0 + Math.sin(s * fr * 0.7 + ph) * 0.6;
    const tw = width * (0.4 + Math.sin(s * Math.PI));
    pos.setXYZ(k * 2, p.x - perp.x * tw, p.y, p.z - perp.z * tw);
    pos.setXYZ(k * 2 + 1, p.x + perp.x * tw, p.y, p.z + perp.z * tw);
  }
  pos.needsUpdate = true;
  w.t = 0; w.dur = frand(2.2, 3.4); w.me.visible = true;
}
let windTimer = 1;
export function updateWind(dt, center, enabled) {
  windTimer -= dt;
  if (enabled && windTimer <= 0) {
    const free = windLines.find(w => !w.me.visible);
    if (free) spawnWind(free, center);
    windTimer = frand(0.8, 2.2);
  }
  for (const w of windLines) if (w.me.visible) {
    w.t += dt; w.me.material.uniforms.uHead.value = w.t / w.dur * 1.5;
    if (w.t > w.dur || !enabled) w.me.visible = false;
  }
}

// ---------------------------------------------------------------- fireflies (night only)
export const flies = (() => {
  const n = 300, pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { pos[i * 3] = frand(-80, 80); pos[i * 3 + 1] = frand(0.4, 4); pos[i * 3 + 2] = frand(-80, 80); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const p = new THREE.Points(g, new THREE.PointsMaterial({ color: new THREE.Color(3, 1.8, 0.8), size: 0.14, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
  scene.add(p); return p;
})();
