/* Outbreak Lab Escape - original generative soundtrack and sound effects (Web Audio, no files, no licences needed).
   Each room has its own tempo, scale, bass line, arpeggio and drums. Overtime speeds the track up and adds a heartbeat.
   Nothing plays until the START click (browser rule). */
(function () {
  'use strict';
  var M = window.Music = {
    ctx: null, master: null, music: null, sfxBus: null, on: true, room: -1, timer: null, step: 0, next: 0, tense: false, heart: null, noiseBuf: null, delay: null,
    // root = MIDI note; scale = semitone steps; bass/arp/kick/hat/snare = 16-step patterns ('.' = rest, digits = scale degree)
    ROOMS: [
      { name: 'Biomechanics', bpm: 84, root: 45, scale: [0, 2, 3, 5, 7, 8, 10], wave: 'triangle', arpWave: 'sine',
        bass: '0.......3.......', arp: '0.4.7.4.0.4.8.4.', kick: 'x.......x.......', hat: '....x.......x...', snare: '................' },
      { name: 'Sprint', bpm: 112, root: 43, scale: [0, 2, 3, 5, 7, 8, 11], wave: 'sawtooth', arpWave: 'square',
        bass: '0.0.0.0.3.3.4.4.', arp: '7...7.6...6.4...', kick: 'x...x...x...x...', hat: '..x...x...x...xx', snare: '....x.......x...' },
      { name: 'Circuits', bpm: 120, root: 48, scale: [0, 1, 3, 5, 7, 8, 10], wave: 'square', arpWave: 'square',
        bass: '0..0..0.1..1..1.', arp: '0743074307430763', kick: 'x..x..x...x..x..', hat: 'xxxxxxxxxxxxxxxx', snare: '....x.......x..x' },
      { name: 'Heat', bpm: 92, root: 40, scale: [0, 1, 3, 5, 6, 8, 10], wave: 'sawtooth', arpWave: 'triangle',
        bass: '0...0...4...1...', arp: '....7.....6.....', kick: 'x.....x.x.......', hat: '..x...x...x...x.', snare: '........x.......' },
      { name: 'Refinery', bpm: 100, root: 41, scale: [0, 2, 3, 5, 7, 9, 10], wave: 'triangle', arpWave: 'sine',
        bass: '0.......5...4...', arp: '0.2.4.7.9.7.4.2.', kick: 'x.......x...x...', hat: '....x.......x...', snare: '............x...' },
      { name: 'Exit', bpm: 132, root: 46, scale: [0, 2, 3, 5, 7, 8, 10], wave: 'sawtooth', arpWave: 'square',
        bass: '0.0.0.0.5.5.4.4.', arp: '0473047304730762', kick: 'x...x...x...x...', hat: '.xxx.xxx.xxx.xxx', snare: '....x..x....x.xx' }
    ],
    init: function () {
      if (this.ctx) return;
      var C = window.AudioContext || window.webkitAudioContext; if (!C) return;
      var c = this.ctx = new C();
      this.master = c.createGain(); this.master.gain.value = this.on ? 0.9 : 0; this.master.connect(c.destination);
      this.music = c.createGain(); this.music.gain.value = 0.0001; this.music.connect(this.master);
      this.sfxBus = c.createGain(); this.sfxBus.gain.value = 0.9; this.sfxBus.connect(this.master);
      // a short echo gives the rooms some space
      this.delay = c.createDelay(1); this.delay.delayTime.value = 0.28;
      var fb = c.createGain(); fb.gain.value = 0.28; var wet = c.createGain(); wet.gain.value = 0.25;
      this.delay.connect(fb); fb.connect(this.delay); this.delay.connect(wet); wet.connect(this.music);
      var len = c.sampleRate * 0.5, b = c.createBuffer(1, len, c.sampleRate), d = b.getChannelData(0);
      for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      this.noiseBuf = b;
    },
    setOn: function (v) { this.on = v; if (this.master) this.master.gain.setTargetAtTime(v ? 0.9 : 0, this.ctx.currentTime, 0.05); },
    suspend: function () { if (this.ctx) this.ctx.suspend(); },
    resume: function () { if (this.ctx) this.ctx.resume(); },
    hz: function (m) { return 440 * Math.pow(2, (m - 69) / 12); },

    /* ---------- instruments ---------- */
    note: function (bus, f, t, dur, wave, vol, cutoff, echo) {
      var c = this.ctx, o = c.createOscillator(), g = c.createGain(), fl = c.createBiquadFilter();
      o.type = wave; o.frequency.value = f; fl.type = 'lowpass'; fl.frequency.value = cutoff || 2000; fl.Q.value = 4;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(fl); fl.connect(g); g.connect(bus); if (echo) g.connect(this.delay);
      o.start(t); o.stop(t + dur + 0.05);
    },
    kick: function (t) {
      var c = this.ctx, o = c.createOscillator(), g = c.createGain();
      o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.18);
      g.gain.setValueAtTime(0.9, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
      o.connect(g); g.connect(this.music); o.start(t); o.stop(t + 0.32);
    },
    noise: function (t, dur, hp, vol, bus) {
      var c = this.ctx, s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
      s.buffer = this.noiseBuf; f.type = 'highpass'; f.frequency.value = hp;
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      s.connect(f); f.connect(g); g.connect(bus || this.music); s.start(t); s.stop(t + dur + 0.02);
    },

    /* ---------- sequencer ---------- */
    play: function (i) {
      if (!this.ctx) return;
      this.room = i % this.ROOMS.length; this.step = 0; this.next = this.ctx.currentTime + 0.1; this.tense = false;
      this.music.gain.cancelScheduledValues(this.ctx.currentTime);
      this.music.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      this.music.gain.exponentialRampToValueAtTime(0.55, this.ctx.currentTime + 2);
      var self = this; clearInterval(this.timer);
      this.timer = setInterval(function () { self.schedule(); }, 25);
    },
    schedule: function () {
      var R = this.ROOMS[this.room], c = this.ctx; if (!R || c.state !== 'running') return;
      var bpm = R.bpm * (this.tense ? 1.25 : 1), sixteenth = 60 / bpm / 4;
      while (this.next < c.currentTime + 0.12) {
        var s = this.step % 16, t = this.next, bar = Math.floor(this.step / 16);
        var shift = (bar % 4 === 3) ? R.scale[3] : 0;            // simple four-bar progression
        var deg = function (ch) { var d = parseInt(ch, 10); return R.scale[d % R.scale.length] + 12 * Math.floor(d / R.scale.length); };
        if (R.bass[s] !== '.') this.note(this.music, this.hz(R.root - 12 + shift + deg(R.bass[s])), t, sixteenth * 3.5, R.wave, 0.28, 420);
        if (R.arp[s] !== '.') this.note(this.music, this.hz(R.root + 12 + shift + deg(R.arp[s])), t, sixteenth * 1.6, R.arpWave, 0.07, 2600, true);
        if (R.kick[s] === 'x') this.kick(t);
        if (R.hat[s] === 'x') this.noise(t, 0.04, 7000, 0.12);
        if (R.snare[s] === 'x') this.noise(t, 0.16, 1500, 0.3);
        if (this.tense && s % 4 === 2) this.note(this.music, this.hz(R.root + 13), t, sixteenth * 1.2, 'sawtooth', 0.05, 3000);  // clashing alarm note
        if (s === 0 && bar % 2 === 0) this.note(this.music, this.hz(R.root + shift), t, sixteenth * 30, 'sine', 0.06, 900);     // pad
        this.next += sixteenth; this.step++;
      }
    },
    stop: function () {
      clearInterval(this.timer); this.timer = null;
      if (this.ctx) { var t = this.ctx.currentTime; this.music.gain.cancelScheduledValues(t); this.music.gain.setTargetAtTime(0.0001, t, 0.3); }
    },
    setTense: function (v) { this.tense = v; this.heartbeat(v); },
    heartbeat: function (on) {
      var self = this; clearInterval(this.heart); this.heart = null;
      if (on && this.ctx) this.heart = setInterval(function () {
        if (self.ctx.state !== 'running') return; var t = self.ctx.currentTime;
        self.note(self.sfxBus, 62, t, 0.16, 'sine', 0.7, 300); self.note(self.sfxBus, 52, t + 0.22, 0.2, 'sine', 0.55, 300);
      }, 850);
    },

    /* ---------- sound effects ---------- */
    fx: function (f, dur, wave, vol, when) { if (!this.ctx) return; this.note(this.sfxBus, f, this.ctx.currentTime + (when || 0), dur, wave || 'sine', vol || 0.3, 5000); },
    count: function (go) { if (go) { this.fx(880, 0.6, 'square', 0.25); this.fx(1320, 0.6, 'sine', 0.2); this.fx(110, 0.8, 'sawtooth', 0.3); } else this.fx(440, 0.2, 'square', 0.25); },
    key: function () { this.fx(1200 + Math.random() * 300, 0.06, 'square', 0.12); },
    right: function () { this.fx(660, 0.12, 'triangle', 0.3); this.fx(990, 0.25, 'triangle', 0.28, 0.1); },
    wrong: function () { this.fx(150, 0.35, 'sawtooth', 0.28); this.fx(141, 0.35, 'sawtooth', 0.28); },
    buzz: function () { this.fx(90, 0.5, 'square', 0.3); },
    unlock: function () { var s = this; [392, 523, 659, 784, 1047].forEach(function (f, i) { s.fx(f, 0.4, 'triangle', 0.25, i * 0.09); }); if (this.ctx) this.noise(this.ctx.currentTime + 0.4, 1.1, 300, 0.25, this.sfxBus); },
    infect: function () { this.fx(110, 1.4, 'sawtooth', 0.35); this.fx(117, 1.4, 'sawtooth', 0.35); this.fx(233, 1.0, 'square', 0.15, 0.15); if (this.ctx) this.noise(this.ctx.currentTime, 0.8, 900, 0.3, this.sfxBus); },
    cure: function () { var s = this; [523, 784, 1047].forEach(function (f, i) { s.fx(f, 0.5, 'sine', 0.22, i * 0.12); }); },
    victory: function () { var s = this; [523, 659, 784, 1047, 784, 1047, 1319].forEach(function (f, i) { s.fx(f, 0.45, 'triangle', 0.25, i * 0.15); }); },
    defeat: function () { var s = this; [220, 208, 196, 185, 147].forEach(function (f, i) { s.fx(f, 0.7, 'sawtooth', 0.22, i * 0.3); }); }
  };
})();
