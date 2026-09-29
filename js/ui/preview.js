// Character preview for menu panels (bag, profile): a copy of the avatar in its own small renderer. It idles,
// turns its head and eyes toward the mouse, wears the current expression (entities/player/face.js) and waves
// when clicked. Only renders while the panel holding it is visible; one canvas, moved to whichever panel opens.
import * as THREE from 'three';
import { clamp } from '../engine/util.js';
import { avatar, rigOf, HIP_Y } from '../entities/player/model.js';
import { faceState, updateFace, EXPRESSIONS } from '../entities/player/face.js';

const W = 180, H = 270;
// cloned now, while the avatar is still in its rest pose with empty hands
const doll = avatar.clone(true);
doll.position.set(0, 0, 0); doll.rotation.set(0, 0, 0); doll.visible = true;
const R = rigOf(doll), face = faceState();
const mouse = { x: innerWidth / 2, y: innerHeight / 2 }, look = { x: 0, y: 0 };
let r = null, sc, cam, host = null, moodEl, raf = 0, last = 0, t = 0, wave = 0, zoom = 0, zoomGoal = 0;
// camera: whole body at zoom 0, face close-up at zoom 1 (mouse wheel over the preview)
const FAR = { y: 1.05, z: 4.4, at: 0.84 }, NEAR = { y: 1.42, z: 1.55, at: 1.36 };

function init() {
  r = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  r.setPixelRatio(Math.min(devicePixelRatio, 2)); r.setSize(W, H); r.setClearColor(0x000000, 0);
  r.toneMapping = THREE.NeutralToneMapping;
  r.domElement.className = 'cp-canvas'; r.domElement.title = 'Klik: melambai · Scroll: zoom ke wajah';
  sc = new THREE.Scene();
  sc.add(new THREE.HemisphereLight('#ffffff', '#5a4a7a', 2.1));
  const key = new THREE.DirectionalLight('#fff4e0', 2.4); key.position.set(1.5, 3, 3); sc.add(key);
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.42, 24).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28 }));
  shadow.position.y = 0.005; sc.add(shadow, doll);
  cam = new THREE.PerspectiveCamera(24, W / H, 0.1, 20);
  moodEl = document.createElement('div'); moodEl.className = 'cp-mood';
  addEventListener('pointermove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  r.domElement.addEventListener('click', () => { wave = 1.8; });
  r.domElement.addEventListener('wheel', (e) => { e.preventDefault(); zoomGoal = clamp(zoomGoal - Math.sign(e.deltaY) * 0.34, 0, 1); }, { passive: false });
}

// idle pose + look at the cursor (screen right = the doll's left, since it faces the camera)
function pose(dt) {
  const b = r.domElement.getBoundingClientRect();
  const nx = clamp((mouse.x - (b.left + b.width / 2)) / 320, -1, 1), ny = clamp((mouse.y - (b.top + b.height * 0.3)) / 320, -1, 1);
  const k = 1 - Math.exp(-dt * 7);
  look.x += (nx - look.x) * k; look.y += (ny - look.y) * k;
  const br = Math.sin(t * 2.2);
  R.squash.scale.set(1, 1, 1);
  R.hips.position.y = HIP_Y + br * 0.004; R.hips.rotation.set(0, look.x * 0.12, 0);
  R.spine.rotation.set(0.03 + br * 0.012, look.x * 0.22, 0);
  R.head.rotation.set(look.y * 0.4, look.x * 0.65, 0);
  R.eyes.position.set(look.x * 0.014, 0.19 - look.y * 0.01, 0.192);
  for (const [leg, s] of [[R.L, 1], [R.R, -1]]) { leg.hip.rotation.set(0, 0, s * 0.02); leg.knee.rotation.set(0.04, 0, 0); leg.foot.rotation.set(-0.03, 0, 0); }
  R.LA.sh.rotation.set(0.04, 0, 0.12 + br * 0.02); R.LA.el.rotation.set(-0.18, 0, 0);
  R.RA.sh.rotation.set(0.04, 0, -0.12 - br * 0.02); R.RA.el.rotation.set(-0.18, 0, 0);
  if (wave > 0) {   // right hand up, waving
    wave -= dt;
    const w = Math.min(1, wave * 3, (1.8 - wave) * 5);
    R.RA.sh.rotation.set(-0.2 * w, 0, -0.12 - 2.5 * w); R.RA.el.rotation.set(0, 0, (-0.3 + Math.sin(t * 14) * 0.45) * w);
    R.head.rotation.z = 0.08 * w;
  }
  R.bucket.rotation.set(0, 0, 0); R.basket.rotation.set(0, 0, 0);
  R.mouth.scale.set(1, 1 + (wave > 0 ? 0.3 : 0), 1);
}

function frame(now) {
  if (!host || !host.isConnected || host.offsetParent === null) { raf = 0; return; }   // panel closed: stop drawing
  raf = requestAnimationFrame(frame);
  const dt = clamp((now - last) / 1000, 0, 0.05); last = now; t += dt;   // rAF time can be older than the mount time
  zoom += (zoomGoal - zoom) * (1 - Math.exp(-dt * 8));
  const z = zoom * zoom * (3 - 2 * zoom);
  cam.position.set(0, FAR.y + (NEAR.y - FAR.y) * z, FAR.z + (NEAR.z - FAR.z) * z); cam.lookAt(0, FAR.at + (NEAR.at - FAR.at) * z, 0);
  pose(dt);
  updateFace(R, face, dt, t, wave > 0 ? 'senang' : undefined);
  const txt = EXPRESSIONS[face.mood].label;
  if (moodEl.textContent !== txt) moodEl.textContent = txt;
  r.render(sc, cam);
}

// show the preview inside `el` (an empty .char-preview box) and start animating it
export function mountPreview(el) {
  if (!r) init();
  if (host !== el) { el.append(r.domElement, moodEl); host = el; }
  if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
}
