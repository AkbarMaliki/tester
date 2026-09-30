// Synthesised sounds (WebAudio): engine, impacts, horn, pop. No audio files needed.
import { frand } from './util.js';

let ctx, master, engOsc, engOsc2, engGain, engFilter, noiseBuf, muted = false, lastHit = 0, rainGain = null, rainLevel = -1;
// volume buses under the master: one-shot effects, the car engine, ambience (rain). Values 0..1 (Pengaturan > Audio);
// kept here before the AudioContext exists (it's created on the first user gesture) and applied when it is.
const vol = { master: 1, sfx: 1, engine: 1, ambient: 1 };
const bus = {};
const applyVol = () => {
  if (!ctx) return;
  master.gain.value = muted ? 0 : 0.55 * vol.master;
  for (const k of ['sfx', 'engine', 'ambient']) bus[k].gain.value = vol[k];
};

export const sfx = {
  init() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.connect(ctx.destination);
    for (const k of ['sfx', 'engine', 'ambient']) { bus[k] = ctx.createGain(); bus[k].connect(master); }
    applyVol();
    engFilter = ctx.createBiquadFilter(); engFilter.type = 'lowpass'; engFilter.frequency.value = 500;
    engGain = ctx.createGain(); engGain.gain.value = 0;
    engOsc = ctx.createOscillator(); engOsc.type = 'sawtooth';
    engOsc2 = ctx.createOscillator(); engOsc2.type = 'square';
    engOsc.connect(engFilter); engOsc2.connect(engFilter); engFilter.connect(engGain).connect(bus.engine);
    engOsc.start(); engOsc2.start();
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 0.3, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 3);
  },
  engine(speed, throttle, on = true) {
    if (!ctx) return;
    if (!on) { engGain.gain.setTargetAtTime(0, ctx.currentTime, 0.25); return; }
    const f = 36 + speed * 4.2 + throttle * 16, t = ctx.currentTime;
    engOsc.frequency.setTargetAtTime(f, t, 0.08); engOsc2.frequency.setTargetAtTime(f * 0.5, t, 0.08);
    engFilter.frequency.setTargetAtTime(320 + speed * 38 + throttle * 280, t, 0.1);
    engGain.gain.setTargetAtTime(0.045 + throttle * 0.05 + Math.min(speed, 25) * 0.002, t, 0.1);
  },
  hit(k) {
    if (!ctx || performance.now() - lastHit < 90) return; lastHit = performance.now();
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.playbackRate.value = frand(0.5, 0.9);
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 700 + k * 1200;
    const g = ctx.createGain(); g.gain.value = 0.2 + k * 0.6;
    s.connect(f).connect(g).connect(bus.sfx); s.start();
  },
  horn() {
    if (!ctx) return; const t = ctx.currentTime;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);
    g.connect(bus.sfx);
    for (const fr of [392, 494]) { const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = fr; o.connect(g); o.start(t); o.stop(t + 0.5); }
  },
  step(k = 0) {
    if (!ctx) return; const t = ctx.currentTime;
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.playbackRate.value = frand(1.4, 2.1);
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 420 + k * 380;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.09 + k * 0.1, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
    s.connect(f).connect(g).connect(bus.sfx); s.start(t); s.stop(t + 0.12);
  },
  jump() {
    if (!ctx) return; const t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'triangle';
    o.frequency.setValueAtTime(320, t); o.frequency.exponentialRampToValueAtTime(640, t + 0.12);
    g.gain.setValueAtTime(0.09, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    o.connect(g).connect(bus.sfx); o.start(t); o.stop(t + 0.18);
  },
  door(open) {
    if (!ctx) return; const t = ctx.currentTime;
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.playbackRate.value = open ? 1.6 : 0.9;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = open ? 1800 : 700; f.Q.value = 1.2;
    const g = ctx.createGain(); g.gain.value = open ? 0.25 : 0.4;
    s.connect(f).connect(g).connect(bus.sfx); s.start(t); s.stop(t + 0.15);
    if (open) return;
    const o = ctx.createOscillator(), og = ctx.createGain(); o.type = 'sine';
    o.frequency.setValueAtTime(130, t); o.frequency.exponentialRampToValueAtTime(60, t + 0.15);
    og.gain.setValueAtTime(0.35, t); og.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
    o.connect(og).connect(bus.sfx); o.start(t); o.stop(t + 0.22);
  },
  pop() {
    if (!ctx) return; const t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sine';
    o.frequency.setValueAtTime(300, t); o.frequency.exponentialRampToValueAtTime(900, t + 0.15);
    g.gain.setValueAtTime(0.2, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
    o.connect(g).connect(bus.sfx); o.start(t); o.stop(t + 0.3);
  },
  // item lifted up (quick rising chirp)
  pick() {
    if (!ctx) return; const t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'triangle';
    o.frequency.setValueAtTime(420, t); o.frequency.exponentialRampToValueAtTime(1100, t + 0.1);
    g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    o.connect(g).connect(bus.sfx); o.start(t); o.stop(t + 0.18);
  },
  // item put in the bag (two-note jingle)
  stash() {
    if (!ctx) return; const t = ctx.currentTime;
    [[660, 0], [990, 0.08]].forEach(([f, d]) => {
      const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'square';
      o.frequency.value = f; g.gain.setValueAtTime(0.0001, t + d); g.gain.exponentialRampToValueAtTime(0.06, t + d + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.14);
      o.connect(g).connect(bus.sfx); o.start(t + d); o.stop(t + d + 0.16);
    });
  },
  // item set down / refused (low soft thud)
  drop() {
    if (!ctx) return; const t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sine';
    o.frequency.setValueAtTime(220, t); o.frequency.exponentialRampToValueAtTime(90, t + 0.12);
    g.gain.setValueAtTime(0.22, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    o.connect(g).connect(bus.sfx); o.start(t); o.stop(t + 0.18);
  },
  // three crunchy bites
  eat() {
    if (!ctx) return; const t = ctx.currentTime;
    for (let i = 0; i < 3; i++) {
      const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.playbackRate.value = frand(1.8, 2.6);
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = frand(1400, 2400); f.Q.value = 0.9;
      const g = ctx.createGain(); g.gain.setValueAtTime(0.35, t + i * 0.16); g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.16 + 0.08);
      s.connect(f).connect(g).connect(bus.sfx); s.start(t + i * 0.16); s.stop(t + i * 0.16 + 0.1);
    }
  },
  // gulps: short falling sine blips
  drink() {
    if (!ctx) return; const t = ctx.currentTime;
    for (let i = 0; i < 3; i++) {
      const o = ctx.createOscillator(), g = ctx.createGain(), d = i * 0.22; o.type = 'sine';
      o.frequency.setValueAtTime(420, t + d); o.frequency.exponentialRampToValueAtTime(170, t + d + 0.1);
      g.gain.setValueAtTime(0.16, t + d); g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.13);
      o.connect(g).connect(bus.sfx); o.start(t + d); o.stop(t + d + 0.15);
    }
  },
  // toilet flush: filtered noise swirling down
  flush() {
    if (!ctx) return; const t = ctx.currentTime;
    for (let i = 0; i < 4; i++) {
      const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.playbackRate.value = 0.35;
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(2200, t + i * 0.18); f.frequency.exponentialRampToValueAtTime(300, t + i * 0.18 + 0.6);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.3, t + i * 0.18); g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.18 + 0.7);
      s.connect(f).connect(g).connect(bus.sfx); s.start(t + i * 0.18); s.stop(t + i * 0.18 + 0.8);
    }
  },
  // hoe / hammer into the ground: low thud + crumbly noise (k 0..1 = harder, e.g. breaking a stone)
  dig(k = 0) {
    if (!ctx) return; const t = ctx.currentTime;
    const o = ctx.createOscillator(), og = ctx.createGain(); o.type = 'sine';
    o.frequency.setValueAtTime(140 + k * 120, t); o.frequency.exponentialRampToValueAtTime(55, t + 0.12);
    og.gain.setValueAtTime(0.3, t); og.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    o.connect(og).connect(bus.sfx); o.start(t); o.stop(t + 0.18);
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.playbackRate.value = frand(0.6, 0.9) + k;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 900 + k * 2200; f.Q.value = 0.8;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.25, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    s.connect(f).connect(g).connect(bus.sfx); s.start(t + 0.02); s.stop(t + 0.25);
  },
  // watering can pouring: soft filtered hiss with a few drips
  splash() {
    if (!ctx) return; const t = ctx.currentTime;
    for (let i = 0; i < 3; i++) {
      const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.playbackRate.value = frand(0.9, 1.3);
      const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 2400;
      const g = ctx.createGain(); g.gain.setValueAtTime(0.12, t + i * 0.1); g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.1 + 0.25);
      s.connect(f).connect(g).connect(bus.sfx); s.start(t + i * 0.1); s.stop(t + i * 0.1 + 0.3);
    }
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sine';
    o.frequency.setValueAtTime(900, t + 0.2); o.frequency.exponentialRampToValueAtTime(1500, t + 0.26);
    g.gain.setValueAtTime(0.05, t + 0.2); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    o.connect(g).connect(bus.sfx); o.start(t + 0.2); o.stop(t + 0.32);
  },
  // sickle / axe: quick swish, then a woody knock when `hit`
  chop(hit = true) {
    if (!ctx) return; const t = ctx.currentTime;
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.playbackRate.value = 2.2;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.setValueAtTime(1800, t); f.frequency.exponentialRampToValueAtTime(4200, t + 0.1); f.Q.value = 2;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.14, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
    s.connect(f).connect(g).connect(bus.sfx); s.start(t); s.stop(t + 0.14);
    if (!hit) return;
    const o = ctx.createOscillator(), og = ctx.createGain(); o.type = 'triangle';
    o.frequency.setValueAtTime(320, t + 0.08); o.frequency.exponentialRampToValueAtTime(160, t + 0.16);
    og.gain.setValueAtTime(0.25, t + 0.08); og.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
    o.connect(og).connect(bus.sfx); o.start(t + 0.08); o.stop(t + 0.22);
  },
  // money in / out: two bright coin pings
  coin() {
    if (!ctx) return; const t = ctx.currentTime;
    [[1320, 0], [1760, 0.09]].forEach(([fr, d]) => {
      const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'square';
      o.frequency.value = fr; g.gain.setValueAtTime(0.0001, t + d); g.gain.exponentialRampToValueAtTime(0.05, t + d + 0.005);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.25);
      o.connect(g).connect(bus.sfx); o.start(t + d); o.stop(t + d + 0.27);
    });
  },
  // something special happened (rare crop, giant crop, upgrade): rising sparkle arpeggio
  sparkle() {
    if (!ctx) return; const t = ctx.currentTime;
    [784, 988, 1175, 1568].forEach((fr, i) => {
      const o = ctx.createOscillator(), g = ctx.createGain(), d = i * 0.07; o.type = 'triangle';
      o.frequency.value = fr; g.gain.setValueAtTime(0.0001, t + d); g.gain.exponentialRampToValueAtTime(0.09, t + d + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.3);
      o.connect(g).connect(bus.sfx); o.start(t + d); o.stop(t + d + 0.32);
    });
  },
  // a tree falling: wood creaking, then a heavy crash + rustle (at = seconds until it hits the ground)
  timber(at = 1.2) {
    if (!ctx) return; const t = ctx.currentTime;
    const o = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain(); o.type = 'sawtooth';
    o.frequency.setValueAtTime(90, t); o.frequency.linearRampToValueAtTime(55, t + at * 0.8);
    for (let i = 0; i < 6; i++) o.frequency.setValueAtTime(70 + (i % 2) * 25, t + i * at * 0.13);
    f.type = 'bandpass'; f.frequency.value = 600; f.Q.value = 4;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.09, t + 0.1); g.gain.exponentialRampToValueAtTime(0.0001, t + at * 0.9);
    o.connect(f).connect(g).connect(bus.sfx); o.start(t); o.stop(t + at);
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.playbackRate.value = 0.35;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 500;
    const sg = ctx.createGain(); sg.gain.setValueAtTime(0.0001, t + at); sg.gain.exponentialRampToValueAtTime(0.7, t + at + 0.02); sg.gain.exponentialRampToValueAtTime(0.0001, t + at + 0.8);
    s.connect(lp).connect(sg).connect(bus.sfx); s.start(t + at); s.stop(t + at + 0.85);
    const b = ctx.createOscillator(), bg = ctx.createGain(); b.type = 'sine';
    b.frequency.setValueAtTime(80, t + at); b.frequency.exponentialRampToValueAtTime(35, t + at + 0.3);
    bg.gain.setValueAtTime(0.5, t + at); bg.gain.exponentialRampToValueAtTime(0.0001, t + at + 0.4);
    b.connect(bg).connect(bus.sfx); b.start(t + at); b.stop(t + at + 0.45);
  },
  // animal voices, all synthesised: moo, baa, bleat, cluck, quack, neigh, woof, meow, peep (babies / chicks)
  animal(kind, pitch = 1) {
    if (!ctx) return; const t = ctx.currentTime;
    const tone = (type, f0, f1, dur, gain, at = 0, vib = 0, filt = 0) => {
      const o = ctx.createOscillator(), g = ctx.createGain(); o.type = type;
      o.frequency.setValueAtTime(f0 * pitch, t + at); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1 * pitch), t + at + dur);
      g.gain.setValueAtTime(0.0001, t + at); g.gain.exponentialRampToValueAtTime(gain, t + at + Math.min(0.06, dur * 0.2)); g.gain.exponentialRampToValueAtTime(0.0001, t + at + dur);
      let node = o;
      if (vib) { const l = ctx.createOscillator(), lg = ctx.createGain(); l.frequency.value = vib; lg.gain.value = f0 * pitch * 0.06; l.connect(lg).connect(o.frequency); l.start(t + at); l.stop(t + at + dur); }
      if (filt) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = filt; node = o.connect(f); }
      node.connect(g).connect(bus.sfx); o.start(t + at); o.stop(t + at + dur + 0.02);
    };
    const noise = (dur, freq, gain, at = 0) => {
      const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.playbackRate.value = 1.2;
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq * pitch; f.Q.value = 1.5;
      const g = ctx.createGain(); g.gain.setValueAtTime(gain, t + at); g.gain.exponentialRampToValueAtTime(0.0001, t + at + dur);
      s.connect(f).connect(g).connect(bus.sfx); s.start(t + at); s.stop(t + at + dur + 0.02);
    };
    switch (kind) {
      case 'cow': tone('sawtooth', 110, 90, 0.9, 0.12, 0, 0, 700); tone('sawtooth', 140, 105, 0.7, 0.06, 0.15, 0, 900); break;
      case 'sheep': tone('sawtooth', 330, 290, 0.6, 0.07, 0, 9, 1800); break;
      case 'goat': tone('sawtooth', 420, 360, 0.45, 0.07, 0, 14, 2200); break;
      case 'chicken': for (let i = 0; i < 3; i++) tone('square', 620 + i * 60, 420, 0.07, 0.05, i * 0.11, 0, 2500); break;
      case 'duck': for (let i = 0; i < 2; i++) { tone('square', 380, 300, 0.12, 0.06, i * 0.17, 0, 1600); noise(0.1, 1200, 0.08, i * 0.17); } break;
      case 'horse': tone('sawtooth', 520, 900, 0.25, 0.06, 0, 18, 3000); tone('sawtooth', 900, 380, 0.7, 0.06, 0.25, 22, 2600); break;
      case 'dog': for (let i = 0; i < 2; i++) { tone('square', 300, 180, 0.12, 0.08, i * 0.22, 0, 1400); noise(0.08, 900, 0.12, i * 0.22); } break;
      case 'cat': tone('triangle', 560, 820, 0.25, 0.08, 0); tone('triangle', 820, 480, 0.35, 0.07, 0.25); break;
      case 'peep': for (let i = 0; i < 2; i++) tone('sine', 2400, 3000, 0.07, 0.05, i * 0.1); break;
      case 'bell': for (const [f, d] of [[1760, 0], [2217, 0.03]]) tone('sine', f, f * 0.98, 0.8, 0.04, d); break;
    }
  },
  // steady rain hiss, level 0..1 (called every frame; only touches the audio graph when the level changes)
  rain(level) {
    if (!ctx) return;
    const l = Math.round(level * 50) / 50;
    if (l === rainLevel) return;
    rainLevel = l;
    if (!rainGain) {
      const buf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2600;
      const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 400;
      rainGain = ctx.createGain(); rainGain.gain.value = 0;
      src.connect(lp).connect(hp).connect(rainGain).connect(bus.ambient); src.start();
    }
    rainGain.gain.setTargetAtTime(l * 0.09, ctx.currentTime, 0.4);
  },
  toggle() { muted = !muted; applyVol(); return muted; },
  get muted() { return muted; },
  setMuted(m) { muted = !!m; applyVol(); },
  // name: master | sfx | engine | ambient, v: 0..1
  setVolume(name, v) { vol[name] = v; applyVol(); },
};
