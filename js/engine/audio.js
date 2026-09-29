// Synthesised sounds (WebAudio): engine, impacts, horn, pop. No audio files needed.
import { frand } from './util.js';

let ctx, master, engOsc, engOsc2, engGain, engFilter, noiseBuf, muted = false, lastHit = 0;

export const sfx = {
  init() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = 0.55; master.connect(ctx.destination);
    engFilter = ctx.createBiquadFilter(); engFilter.type = 'lowpass'; engFilter.frequency.value = 500;
    engGain = ctx.createGain(); engGain.gain.value = 0;
    engOsc = ctx.createOscillator(); engOsc.type = 'sawtooth';
    engOsc2 = ctx.createOscillator(); engOsc2.type = 'square';
    engOsc.connect(engFilter); engOsc2.connect(engFilter); engFilter.connect(engGain).connect(master);
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
    s.connect(f).connect(g).connect(master); s.start();
  },
  horn() {
    if (!ctx) return; const t = ctx.currentTime;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);
    g.connect(master);
    for (const fr of [392, 494]) { const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = fr; o.connect(g); o.start(t); o.stop(t + 0.5); }
  },
  step(k = 0) {
    if (!ctx) return; const t = ctx.currentTime;
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.playbackRate.value = frand(1.4, 2.1);
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 420 + k * 380;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.09 + k * 0.1, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
    s.connect(f).connect(g).connect(master); s.start(t); s.stop(t + 0.12);
  },
  jump() {
    if (!ctx) return; const t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'triangle';
    o.frequency.setValueAtTime(320, t); o.frequency.exponentialRampToValueAtTime(640, t + 0.12);
    g.gain.setValueAtTime(0.09, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    o.connect(g).connect(master); o.start(t); o.stop(t + 0.18);
  },
  door(open) {
    if (!ctx) return; const t = ctx.currentTime;
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.playbackRate.value = open ? 1.6 : 0.9;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = open ? 1800 : 700; f.Q.value = 1.2;
    const g = ctx.createGain(); g.gain.value = open ? 0.25 : 0.4;
    s.connect(f).connect(g).connect(master); s.start(t); s.stop(t + 0.15);
    if (open) return;
    const o = ctx.createOscillator(), og = ctx.createGain(); o.type = 'sine';
    o.frequency.setValueAtTime(130, t); o.frequency.exponentialRampToValueAtTime(60, t + 0.15);
    og.gain.setValueAtTime(0.35, t); og.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
    o.connect(og).connect(master); o.start(t); o.stop(t + 0.22);
  },
  pop() {
    if (!ctx) return; const t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sine';
    o.frequency.setValueAtTime(300, t); o.frequency.exponentialRampToValueAtTime(900, t + 0.15);
    g.gain.setValueAtTime(0.2, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
    o.connect(g).connect(master); o.start(t); o.stop(t + 0.3);
  },
  // item lifted up (quick rising chirp)
  pick() {
    if (!ctx) return; const t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'triangle';
    o.frequency.setValueAtTime(420, t); o.frequency.exponentialRampToValueAtTime(1100, t + 0.1);
    g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    o.connect(g).connect(master); o.start(t); o.stop(t + 0.18);
  },
  // item put in the bag (two-note jingle)
  stash() {
    if (!ctx) return; const t = ctx.currentTime;
    [[660, 0], [990, 0.08]].forEach(([f, d]) => {
      const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'square';
      o.frequency.value = f; g.gain.setValueAtTime(0.0001, t + d); g.gain.exponentialRampToValueAtTime(0.06, t + d + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.14);
      o.connect(g).connect(master); o.start(t + d); o.stop(t + d + 0.16);
    });
  },
  // item set down / refused (low soft thud)
  drop() {
    if (!ctx) return; const t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sine';
    o.frequency.setValueAtTime(220, t); o.frequency.exponentialRampToValueAtTime(90, t + 0.12);
    g.gain.setValueAtTime(0.22, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    o.connect(g).connect(master); o.start(t); o.stop(t + 0.18);
  },
  toggle() { if (!ctx) return false; muted = !muted; master.gain.value = muted ? 0 : 0.55; return muted; },
};
