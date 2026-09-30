// World layout as signed-distance functions, baked into a mask texture
// (r = distance to water, g = paved, b = grass, a = asphalt).
import { W, HALF } from '../game/config.js';
import { clamp, lerp, smooth, vnoise, fbm, sdSeg, sdBox } from '../engine/util.js';

export const LAKES = [{ x: -40, z: -20, r: 14 }, { x: 18, z: 47, r: 12 }, { x: 51, z: -35, r: 9 }, { x: -61, z: 12, r: 6 }];
// Balai Warga: the village rest area (drinking fountain, public toilet, gazebo with a bed; built by features/survival)
export const BALAI = { x: 24, z: -25, r: 9.5 };
// Kebun (farm, built by features/farming; field/greenhouse layout in public/assets/data/farming.json): the road ends at its gate
export const FARM = { x: -21, z: 42 };
// Peternakan (ranch, built by features/ranch; layout in public/assets/data/ranch.json): east of the kiosk plaza
export const RANCH = { x: 52, z: 18 };
export const PLAZAS = [[0, 0, 12.5], [40, 4, 9], [-26, 28, 11], [46, -23, 5], [-50, 16, 5], [BALAI.x, BALAI.z, BALAI.r]];
export const ROADS = [[0, 0, 36, 4], [0, 0, -24, 26], [0, 0, 0, -48], [0, 0, 8, 31], [36, 4, 46, -22], [-24, 26, -50, 16], [0, -25, BALAI.x, BALAI.z], [-26, 30, FARM.x, FARM.z - 0.5], [40, 12, RANCH.x, RANCH.z]];
export const LOT = { x: 0, z: -55, hx: 26, hz: 7 };
export const keepOut = [];   // {x,z,r} areas without grass/trees (filled by props before baking)
export const noTrees = [];   // {x0,x1,z0,z1} areas that keep their grass but get no trees (a pasture…)

export function landDist(x, z) {   // > 0 land, < 0 water
  let d = 86 + 18 * (fbm(x * 0.02 + 3, z * 0.02 + 7) - 0.5) - Math.hypot(x, z);
  for (const l of LAKES) d = Math.min(d, Math.hypot(x - l.x, z - l.z) - l.r * (1 + 0.45 * (vnoise(x * 0.11 + l.x, z * 0.11 + l.z) - 0.5)));
  return d;
}
export const heightFromDist = (d) => d >= 0 ? 0 : -1.2 * smooth(0, 5, -d);
export const groundY = (x, z) => heightFromDist(landDist(x, z));

function pavedAt(x, z, d) {
  let s = 1e9;
  for (const [cx, cz, r] of PLAZAS) s = Math.min(s, Math.hypot(x - cx, z - cz) - r);
  for (const [ax, az, bx, bz] of ROADS) s = Math.min(s, sdSeg(x, z, ax, az, bx, bz) - 2.8);
  s += (vnoise(x * 0.35, z * 0.35) - 0.5) * 0.9;
  return smooth(0.5, -0.5, s) * smooth(0.3, 1.5, d);
}
const asphaltAt = (x, z) => smooth(0.3, -0.3, sdBox(x, z, LOT.x, LOT.z, LOT.hx, LOT.hz));
function grassAt(x, z, d, pv, as) {
  let g = smooth(0.32, 0.5, fbm(x * 0.045 + 11, z * 0.045 + 4));
  g *= (1 - pv) * (1 - as) * smooth(0.5, 2.5, d);
  for (const k of keepOut) { const q = Math.hypot(x - k.x, z - k.z); if (q < k.r + 1) g *= smooth(k.r, k.r + 1, q); }
  return g;
}

export const RES = 512;
export const maskData = new Uint8Array(RES * RES * 4);
export function bakeMask() {
  for (let j = 0; j < RES; j++) {
    const z = -HALF + (j + 0.5) * W / RES;
    for (let i = 0; i < RES; i++) {
      const x = -HALF + (i + 0.5) * W / RES;
      const d = landDist(x, z), as = asphaltAt(x, z), pv = pavedAt(x, z, d) * (1 - as), g = grassAt(x, z, d, pv, as);
      const o = (j * RES + i) * 4;
      maskData[o] = clamp((d + 10) / 20, 0, 1) * 255;
      maskData[o + 1] = pv * 255; maskData[o + 2] = g * 255; maskData[o + 3] = as * 255;
    }
  }
}
export function maskAt(x, z) {   // bilinear sample -> {d, paved, grass, asphalt}
  const fx = clamp((x + HALF) / W * RES - 0.5, 0, RES - 1.001), fz = clamp((z + HALF) / W * RES - 0.5, 0, RES - 1.001);
  const i = Math.floor(fx), j = Math.floor(fz), tx = fx - i, tz = fz - j;
  const out = [0, 0, 0, 0];
  for (let c = 0; c < 4; c++) {
    const a = maskData[(j * RES + i) * 4 + c], b = maskData[(j * RES + i + 1) * 4 + c];
    const e = maskData[((j + 1) * RES + i) * 4 + c], f = maskData[((j + 1) * RES + i + 1) * 4 + c];
    out[c] = lerp(lerp(a, b, tx), lerp(e, f, tx), tz) / 255;
  }
  return { d: out[0] * 20 - 10, paved: out[1], grass: out[2], asphalt: out[3] };
}
