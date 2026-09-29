// Facial expressions for the farmer kid, picked from the survival state (systems/stats.js) and applied to any rig
// with the face parts from model.js (the avatar via controller.js, the menu preview via ui/preview.js).
//   moodNow() -> expression id        updateFace(rig, state, dt, t, mood?) every frame after the head is posed
import { smooth } from '../../engine/util.js';
import { stats, derived, shown } from '../../systems/stats.js';

// lid: 0 open .. 1 shut · brow: + worried (inner ends up), − angry/tense · browY: raise/lower
// mouth: smile | o | frown | wavy (smile = the model's open smile, scaled by `smile`)
export const EXPRESSIONS = {
  senang:    { label: 'Senang', lid: 0, brow: 0, browY: 0.006, mouth: 'smile', smile: 1.15 },
  normal:    { label: 'Biasa', lid: 0.05, brow: 0, browY: 0, mouth: 'smile', smile: 0.8 },
  lapar:     { label: 'Lapar', lid: 0.15, brow: 0.35, browY: 0.004, mouth: 'o', drool: true },
  haus:      { label: 'Haus', lid: 0.4, brow: 0.3, browY: -0.004, mouth: 'frown', tongue: true, sweat: true },
  ngantuk:   { label: 'Ngantuk', lid: 0.62, brow: 0.1, browY: -0.012, mouth: 'smile', smile: 0.2, bags: true, yawn: true, nod: true },
  capek:     { label: 'Kelelahan', lid: 0.7, brow: 0.45, browY: 0.002, mouth: 'o', pant: true, sweat: true },
  sakit:     { label: 'Keracunan', lid: 0.45, brow: 0.5, browY: 0.004, mouth: 'wavy', sick: true, sweat: true, wobble: true },
  mual:      { label: 'Mual', lid: 0.35, brow: 0.45, browY: 0.002, mouth: 'wavy', sick: true, wobble: true },
  kebelet:   { label: 'Kebelet', lid: 0.55, brow: -0.4, browY: -0.01, mouth: 'frown', sweat: true, jitter: true, squeeze: true },
  dingin:    { label: 'Kedinginan', lid: 0.3, brow: 0.4, browY: 0.002, mouth: 'wavy', cold: true, jitter: true },
  panas:     { label: 'Kepanasan', lid: 0.4, brow: 0.3, browY: -0.004, mouth: 'o', sweat: true, pant: true },
  kesakitan: { label: 'Kesakitan', lid: 0.35, brow: 0.55, browY: 0.004, mouth: 'frown', sweat: true },
};

// the most pressing state wins
export function moodNow() {
  const has = (id) => shown.some(s => s.id === id);
  if (has('ngos')) return 'capek';
  if (has('keracunan')) return 'sakit';
  if (has('mual')) return 'mual';
  if (has('kebelet_parah')) return 'kebelet';
  if (stats.health < derived.maxHealth * 0.3) return 'kesakitan';
  if (has('membeku') || has('kedinginan')) return 'dingin';
  if (has('kepanasan')) return 'panas';
  if (has('dehidrasi') || has('haus')) return 'haus';
  if (has('kelaparan') || has('lapar')) return 'lapar';
  if (has('kecapekan') || has('ngantuk')) return 'ngantuk';
  if (has('kebelet')) return 'kebelet';
  if (has('kenyang')) return 'senang';
  return 'normal';
}

export const faceState = () => ({ mood: 'normal', lid: 0, brow: 0, browY: 0, smile: 1, yawnT: 4, squeeze: 0 });
const BROW_Y = 0.285, SWEAT_Y = 0.26;

export function updateFace(R, st, dt, t, mood = moodNow()) {
  const e = EXPRESSIONS[mood] || EXPRESSIONS.normal, k = 1 - Math.exp(-dt * 8);
  st.mood = mood;
  // yawning (sleepy): every 6-10 s the mouth opens wide and the eyes squeeze shut for ~1.6 s
  let yawn = 0;
  if (e.yawn) {
    if ((st.yawnT -= dt) < 0) st.yawnT = 6 + Math.random() * 4;
    if (st.yawnT < 1.6) yawn = Math.sin(Math.PI * (1 - st.yawnT / 1.6));
  }
  st.lid += (Math.max(e.lid, yawn * 0.9) - st.lid) * k;
  st.brow += (e.brow - st.brow) * k;
  st.browY += (e.browY - st.browY) * k;
  st.smile += ((e.smile ?? 1) - st.smile) * k;

  // squeeze (holding it in): eyes pinch shut in short bursts
  st.squeeze += ((e.squeeze && Math.sin(t * 2.4) > 0.3 ? 1 : 0) - st.squeeze) * (1 - Math.exp(-dt * 14));
  const lid = st.lid + (e.nod ? Math.max(0, Math.sin(t * 0.9)) * 0.15 : 0) + st.squeeze * 0.4;
  for (const l of [R.lidL, R.lidR]) { l.scale.y = Math.max(0.001, Math.min(1, lid)); l.visible = lid > 0.03; }
  R.browL.rotation.z = -(0.12 + st.brow); R.browR.rotation.z = 0.12 + st.brow;
  R.browL.position.y = R.browR.position.y = BROW_Y + st.browY;

  const type = yawn > 0.2 ? 'o' : e.mouth;
  R.mouth.visible = type === 'smile'; R.mouthO.visible = type === 'o';
  R.mouthFrown.visible = type === 'frown'; R.mouthWavy.visible = type === 'wavy';
  if (type === 'smile') R.mouth.scale.y *= st.smile;
  if (type === 'o') {
    const open = e.pant ? 1 + 0.35 * Math.sin(t * 10) : 1;
    R.mouthO.scale.set(1 + yawn * 0.35, Math.max(open, 1 + yawn * 1.3), 1);
  }
  if (type === 'wavy') R.mouthWavy.position.x = Math.sin(t * 3) * 0.004;
  R.tongue.visible = !!e.tongue && type !== 'o';
  if (R.tongue.visible) R.tongue.scale.y = 1 + Math.sin(t * 5) * 0.15;

  R.fxSick.visible = !!e.sick; R.fxBags.visible = !!e.bags; R.fxCold.visible = !!e.cold;
  R.fxSweat.visible = !!e.sweat;
  if (e.sweat) R.fxSweat.position.y = SWEAT_Y - ((t * 0.35) % 1) * 0.07;
  R.fxDrool.visible = !!e.drool;
  if (e.drool) R.fxDrool.scale.y = 0.6 + smooth(0, 1, (t * 0.4) % 1) * 0.9;

  // whole-head motion on top of whatever pose the caller set
  if (e.wobble) R.head.rotation.z += Math.sin(t * 2.1) * 0.07;
  if (e.jitter) R.head.rotation.z += Math.sin(t * 28) * 0.018;
  if (e.nod) R.head.rotation.x += Math.max(0, Math.sin(t * 0.9)) * 0.12 + yawn * -0.15;
  if (e.pant) R.head.rotation.x += Math.sin(t * 10) * 0.03;
}
