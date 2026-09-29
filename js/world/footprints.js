// Temporary footprints: a fixed pool of MAX prints in ONE instanced mesh (one draw call, no allocations while
// playing). A new step reuses the oldest slot; each print fades out after its season's printLife.
// Multiply blending: white = invisible, so fading = blending the colour towards white; works on any ground colour.
// Darkness and lifetime per season: calendar.json (footprints, printLife), x weather (weathers[].prints).
import * as THREE from 'three';
import { scene, DETAIL_LAYER } from '../engine/core.js';
import { today } from '../systems/calendar.js';

const MAX = 80;
const geo = new THREE.CircleGeometry(1, 10).rotateX(-Math.PI / 2);
const mat = new THREE.MeshBasicMaterial({ blending: THREE.MultiplyBlending, premultipliedAlpha: true, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
const im = new THREE.InstancedMesh(geo, mat, MAX);
im.frustumCulled = false; im.renderOrder = 1; im.layers.set(DETAIL_LAYER);
const prints = Array.from({ length: MAX }, () => ({ age: 1, life: 1, dark: 0 }));
const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
const WHITE = new THREE.Color(1, 1, 1), c = new THREE.Color();
const INK = { dingin: new THREE.Color('#8f9cc4'), other: new THREE.Color('#9c7a62') };   // snow shadow / mud
let next = 0;
for (let i = 0; i < MAX; i++) { im.setMatrixAt(i, m4.makeScale(0, 0, 0)); im.setColorAt(i, WHITE); }
scene.add(im);

// one step at (x, y, z), walking towards `yaw`; side = -1 left / +1 right foot
export function stampFootprint(x, y, z, yaw, side) {
  const d = today(), dark = Math.min(1, d.season.footprints * (d.weather.prints || 1));
  if (dark < 0.02) return;
  const k = next; next = (next + 1) % MAX;
  const f = prints[k]; f.age = 0; f.life = d.season.printLife || 10; f.dark = dark; f.ink = d.season.id === 'dingin' ? INK.dingin : INK.other;
  const ox = Math.cos(yaw) * 0.11 * side, oz = -Math.sin(yaw) * 0.11 * side;   // feet sit left / right of the path
  p.set(x + ox, y + 0.025, z + oz); q.setFromAxisAngle(up, yaw); s.set(0.085, 1, 0.14);
  im.setMatrixAt(k, m4.compose(p, q, s)); im.instanceMatrix.needsUpdate = true;
}

// every frame: fade (only the live ones are touched)
export function updateFootprints(dt) {
  let dirty = false;
  for (let k = 0; k < MAX; k++) {
    const f = prints[k];
    if (f.age >= f.life) continue;
    f.age += dt;
    const fade = f.age >= f.life ? 0 : f.dark * (1 - Math.max(0, (f.age / f.life - 0.6) / 0.4));   // hold, then fade the last 40%
    im.setColorAt(k, c.copy(WHITE).lerp(f.ink, fade));
    dirty = true;
  }
  if (dirty) im.instanceColor.needsUpdate = true;
}
