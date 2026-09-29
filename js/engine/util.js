// Small math / noise / DOM helpers.
import * as THREE from 'three';
import { ASSETS } from '../game/config.js';

export const $ = (id) => document.getElementById(id);
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (e0, e1, x) => { const t = clamp((x - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t); };
export const nextFrame = () => new Promise(r => requestAnimationFrame(() => r()));

// seeded random -> the world layout is the same on every load
let seed = 20260929;
export const rnd = () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
export const rand = (a, b) => a + rnd() * (b - a);
export const frand = (a, b) => a + Math.random() * (b - a);   // non-deterministic (effects)
export const pick = (arr) => arr[Math.floor(rnd() * arr.length)];

function hash2(x, y) { const h = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return h - Math.floor(h); }
export function vnoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi), b = hash2(xi + 1, yi), c = hash2(xi, yi + 1), d = hash2(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
export const fbm = (x, y) => 0.5 * vnoise(x, y) + 0.3 * vnoise(x * 2.1 + 5.2, y * 2.1 + 1.3) + 0.2 * vnoise(x * 4.3 + 9.1, y * 4.3 + 3.7);
export function sdSeg(px, pz, ax, az, bx, bz) {
  const pax = px - ax, paz = pz - az, bax = bx - ax, baz = bz - az;
  const h = clamp((pax * bax + paz * baz) / (bax * bax + baz * baz), 0, 1);
  return Math.hypot(pax - bax * h, paz - baz * h);
}
export function sdBox(px, pz, cx, cz, hx, hz) {
  const dx = Math.abs(px - cx) - hx, dz = Math.abs(pz - cz) - hz;
  return Math.hypot(Math.max(dx, 0), Math.max(dz, 0)) + Math.min(Math.max(dx, dz), 0);
}

export function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

export async function loadAsset(path, as = 'text') {
  const res = await fetch(ASSETS + path);
  if (!res.ok) throw new Error(`Gagal memuat ${path} (${res.status})`);
  return as === 'json' ? res.json() : res.text();
}
