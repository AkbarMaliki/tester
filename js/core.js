// Renderer, scene, camera, post-processing, lights, physics world and material helpers.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { Pass, FullScreenQuad } from 'three/addons/postprocessing/Pass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { $ } from './util.js';
import { MAX_LAMPS } from './config.js';
import { SH, DEFINES, sections, full } from './shaders.js';

// ---------------------------------------------------------------- renderer
export const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
let pixelRatio = Math.min(devicePixelRatio, 1.5);
renderer.setPixelRatio(pixelRatio);
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.NeutralToneMapping;
$('app').appendChild(renderer.domElement);

export const scene = new THREE.Scene();
scene.background = new THREE.Color();
scene.fog = new THREE.Fog(0x000000, 45, 115);
export const camera = new THREE.PerspectiveCamera(38, innerWidth / innerHeight, 0.5, 400);

// ---------------------------------------------------------------- post-processing
// Chain: ScenePass (scene -> own MSAA target, then NaN guard + tilt-shift in one pass)
//        -> bloom -> output (tone mapping) -> FXAA (only when MSAA is off).
// Only the scene render is multisampled; the composer's ping-pong buffers are not
// (MSAA on every full-screen pass was the biggest cost on integrated GPUs).
class ScenePass extends Pass {
  constructor() {
    super();
    this.target = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 });
    this.uniforms = { tDiffuse: { value: this.target.texture }, uRes: { value: new THREE.Vector2(1, 1) }, uAmount: { value: 0 } };
    this.quad = new FullScreenQuad(new THREE.ShaderMaterial({ uniforms: this.uniforms, vertexShader: SH['post.vert'], fragmentShader: SH['scenepost.frag'], depthTest: false, depthWrite: false }));
    this.tilt = true;
  }
  setSize(w, h) { this.target.setSize(w, h); this.uniforms.uRes.value.set(w, h); }
  setSamples(n) { if (this.target.samples !== n) { this.target.samples = n; this.target.dispose(); } }
  render(r, writeBuffer) {
    r.setRenderTarget(this.target); r.clear(); r.render(scene, camera);
    this.uniforms.uAmount.value = this.tilt ? 8.8 * pixelRatio : 0;
    r.setRenderTarget(this.renderToScreen ? null : writeBuffer);
    this.quad.render(r);
  }
}
export const composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType }));
export const scenePass = new ScenePass();
export const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.7, 0.5, 0.95);
const fxaa = new ShaderPass(FXAAShader);
composer.addPass(scenePass); composer.addPass(bloom); composer.addPass(new OutputPass()); composer.addPass(fxaa);

let bloomScale = 1;
const bloomSetSize = bloom.setSize.bind(bloom);
bloom.setSize = (w, h) => bloomSetSize(Math.max(1, Math.round(w * bloomScale)), Math.max(1, Math.round(h * bloomScale)));
function resizeAll() {
  renderer.setPixelRatio(pixelRatio); renderer.setSize(innerWidth, innerHeight);
  composer.setPixelRatio(pixelRatio); composer.setSize(innerWidth, innerHeight);
  fxaa.material.uniforms.resolution.value.set(1 / (innerWidth * pixelRatio), 1 / (innerHeight * pixelRatio));
}

// quality presets: pixel ratio, scene MSAA (else FXAA), bloom resolution, shadow map size
export const QUALITY = {
  high: { pr: () => Math.min(devicePixelRatio, 1.5), samples: 4, bloomScale: 1, shadow: 2048 },
  mid: { pr: () => 1, samples: 0, bloomScale: 0.5, shadow: 1024 },
  low: { pr: () => 0.8, samples: 0, bloomScale: 0.5, shadow: 1024 },
};
let autoRes = false;
export function applyQuality(name) {
  autoRes = name === 'auto';   // "auto" = mid settings + adaptive resolution
  const q = QUALITY[autoRes ? 'mid' : name] || QUALITY.high;
  pixelRatio = q.pr(); bloomScale = q.bloomScale;
  scenePass.setSamples(q.samples); fxaa.enabled = q.samples === 0;
  if (sun.shadow.mapSize.x !== q.shadow) { sun.shadow.mapSize.setScalar(q.shadow); sun.shadow.map?.dispose(); sun.shadow.map = null; }
  resizeAll();
}
resizeAll();
export const setTiltShift = (on) => { scenePass.tilt = on; };
export const getPixelRatio = () => pixelRatio;

// dynamic resolution for "auto": every 1.5 s nudge the pixel ratio to stay around 50-60 fps
let arFrames = 0, arStart = performance.now();
export function adaptResolution() {
  if (!autoRes) return;
  arFrames++;
  const now = performance.now(), secs = (now - arStart) / 1000;
  if (secs < 1.5) return;
  const fps = arFrames / secs; arFrames = 0; arStart = now;
  let pr = pixelRatio;
  if (fps < 48) pr = Math.max(0.7, pr - (fps < 35 ? 0.15 : 0.08));
  else if (fps > 57) pr = Math.min(Math.min(devicePixelRatio, 1.25), pr + 0.05);
  if (Math.abs(pr - pixelRatio) > 0.01) { pixelRatio = pr; resizeAll(); }
}
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  resizeAll();
});

// ---------------------------------------------------------------- lights
export const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
scene.add(hemi);
export const sun = new THREE.DirectionalLight(0xffffff, 1.5);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -38, right: 38, top: 38, bottom: -38, near: 1, far: 160 });
sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.05;
scene.add(sun, sun.target);

// ---------------------------------------------------------------- shared uniforms + "painted" materials
export const U = {
  uTime: { value: 0 }, uMask: { value: null },
  uGround: { value: new THREE.Color() }, uPaved: { value: new THREE.Color() }, uAsphalt: { value: new THREE.Color() },
  uGrassA: { value: new THREE.Color() }, uGrassB: { value: new THREE.Color() }, uShadowTint: { value: new THREE.Color() },
  uLeafTint: { value: new THREE.Color() },
  uLamps: { value: Array.from({ length: MAX_LAMPS }, () => new THREE.Vector3(9999, 0, 9999)) },
  uLampI: { value: 0 }, uLampColor: { value: new THREE.Color(1.0, 0.55, 0.2) },
  uCarPos: { value: new THREE.Vector3() }, uPlayerPos: { value: new THREE.Vector3(9999, -99, 9999) }, uCarDir: { value: new THREE.Vector2(0, -1) }, uHeadI: { value: 0 },
  uWindDir: { value: new THREE.Vector2(1, 0.35).normalize() },
};

// Palette colour + shadow mask instead of full lighting (Bruno-style flat look).
// `name` picks assets/shaders/<name>.vert.glsl / <name>.frag.glsl.
export function paint(material, name) {
  const v = sections(SH[`${name}.vert`]), f = sections(SH[`${name}.frag`]);
  material.customProgramCacheKey = () => 'paint-' + name;
  material.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, U);
    sh.vertexShader = [DEFINES, SH.common, v.head, ''].join('\n') + sh.vertexShader
      .replace('#include <begin_vertex>', '#include <begin_vertex>\n' + v.main)
      .replace('#include <fog_vertex>', '#include <fog_vertex>\n vW = (modelMatrix * vec4(transformed, 1.)).xyz;');
    sh.fragmentShader = [DEFINES, SH.common, f.head, ''].join('\n') + sh.fragmentShader
      .replace('#include <shadowmap_pars_fragment>', '#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>')
      .replace('#include <opaque_fragment>', f.main + '\n#include <opaque_fragment>');
  };
  return material;
}
export const shaderMat = (vert, frag, opts) => new THREE.ShaderMaterial({ vertexShader: full(vert), fragmentShader: full(frag), ...opts });

// ---------------------------------------------------------------- physics
export const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82 * 1.3, 0) });
world.broadphase = new CANNON.SAPBroadphase(world);
world.allowSleep = true;
world.defaultContactMaterial.friction = 0.35;
world.defaultContactMaterial.restitution = 0.12;

export const dynamics = [];   // {mesh, body, home} rendered from interpolated physics
export function addDynamic(obj, body) {
  world.addBody(body);
  const d = { mesh: obj, body, home: { p: body.position.clone(), q: body.quaternion.clone() } };
  dynamics.push(d); return d;
}
export function addStatic(shape, x, y, z, rotY = 0, q) {
  const b = new CANNON.Body({ mass: 0 });
  b.addShape(shape); b.position.set(x, y, z);
  if (q) b.quaternion.copy(q); else b.quaternion.setFromEuler(0, rotY, 0);
  world.addBody(b); return b;
}
export function resetDynamic(list) {
  for (const d of list) { d.body.position.copy(d.home.p); d.body.quaternion.copy(d.home.q); d.body.velocity.setZero(); d.body.angularVelocity.setZero(); d.body.wakeUp(); }
}

// ---------------------------------------------------------------- mesh helpers
export const lam = (color, o = {}) => new THREE.MeshLambertMaterial({ color, flatShading: true, ...o });
export const glowMats = [];   // emissive materials that brighten at night
export function glowMat(hex, dayI, nightI) {
  const m = new THREE.MeshBasicMaterial({ color: new THREE.Color(hex) });
  glowMats.push({ m, base: new THREE.Color(hex), dayI, nightI }); return m;
}
export function mesh(geo, m, parent, x = 0, y = 0, z = 0, cast = true) {
  const me = new THREE.Mesh(geo, m);
  me.position.set(x, y, z); me.castShadow = cast; me.receiveShadow = true;
  (parent || scene).add(me); return me;
}
export function group(x, y, z, rotY = 0) { const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = rotY; scene.add(g); return g; }
