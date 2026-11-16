/* Outbreak Lab Escape - shared engine for every grade.
   Grade content lives in data/<GRADE>.js (window.GAME_DATA). No network calls at play time. */
(function () {
  'use strict';
  var ROOM_SECONDS = 300;          // 5:00 per room (was 6:00; the first class finished in 20 min)
  var LOSS_EVERY = 60;             // one team member per full minute late
  var TEAM = 6;
  var PENALTY = 30;              // seconds added for each wrong answer (was 15)
  var LOCK = 30;                 // a question locks this long after a wrong answer, so clicking through choices does not pay
  var BEATS = ['The quarantine lights flicker. Something moved in the next room.', 'Claw marks on the walls lead deeper into the lab.', 'The power is failing. Sparks rain from the ceiling.', 'You hear scratching behind the vault door.', 'The air turns thick and blue. Not much further.', 'Daylight! The exit is open, but the keypad still guards it.', 'THE VAULT. The cure is sealed inside. Three final locks.'];
  var ROLES = ['Code Keeper', 'Note-taker', 'Planner', 'Strategist', 'Decider', 'Researcher'];
  var $ = function (id) { return document.getElementById(id); };

  var Snd = window.Music;   // music.js: generative soundtrack + effects

  /* ---------------- helpers ---------------- */
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function word(r) { return atob(r.w).split('').reverse().join(''); }
  function answerIndex(q) { return (q.k - 11) / 37; }
  function accepts(q) { try { return JSON.parse(decodeURIComponent(escape(atob(q.t))).split('').reverse().join('')); } catch (e) { return []; } }
  function norm(t) { return String(t).toLowerCase().replace(/[\s,]+/g, '').replace(/[.]+$/g, ''); }
  function numOf(t) { var m = String(t).replace(/(\d)[\s,](?=\d{3}\b)/g, '$1').match(/-?\d+(\.\d+)?/); return m ? parseFloat(m[0]) : null; }
  function typedOk(q, v) {
    var n = numOf(v);
    return accepts(q).some(function (x) {
      var xn = numOf(x);
      if (xn !== null && /^\s*-?\d/.test(String(x))) return n !== null && Math.abs(n - xn) <= Math.max(Math.abs(xn) * 0.01, 1e-9);
      return norm(v) === norm(x);
    });
  }
  function mmss(s) { s = Math.max(0, Math.floor(s)); return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); }
  function esc(t) { var d = document.createElement('div'); d.textContent = t; return d.innerHTML; }
  function person(state) {
    var c = state === 'z' ? '#7cff6b' : '#e8eef0', arms = state === 'z'
      ? '<path d="M6 15 L18 13 M22 15 L34 13" stroke="' + c + '" stroke-width="3" stroke-linecap="round"/>'
      : '<path d="M8 26 L12 16 M28 26 L24 16" stroke="' + c + '" stroke-width="3" stroke-linecap="round"/>';
    return '<svg viewBox="0 0 40 52" aria-hidden="true"><circle cx="20" cy="8" r="6" fill="' + c + '"/><rect x="13" y="15" width="14" height="18" rx="5" fill="' + c + '"/>' + arms +
      '<path d="M16 33 L13 50 M24 33 L27 50" stroke="' + c + '" stroke-width="4" stroke-linecap="round"/>' + (state === 'z' ? '<circle cx="17.5" cy="7" r="1.3" fill="#300"/><circle cx="22.5" cy="7" r="1.3" fill="#300"/>' : '') + '</svg>';
  }
  var toastT;
  function toast(m, ms) { var t = $('toast'); t.textContent = m; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('show'); }, ms || 2600); }

  /* ---------------- game state ---------------- */
  var D, S;
  function fresh() {
    return { team: '', room: 0, lost: 0, keys: 0, running: false, acc: 0, t0: 0, roomLoss: 0, overtime: false,
      solved: [], letters: [], letterFor: [], order: [], splits: [], words: [], correct: 0, roleAt: 0, players: [], alive: [], turned: [], over: false, startedAt: null, wrongRoom: 0, antidote: 0, cures: 0, penalties: 0 };
  }

  var Game = window.Game = {
    boot: function (data) {
      D = data; S = fresh();
      document.title = 'Outbreak Lab Escape · ' + D.grade;
      $('coverGrade').textContent = D.gradeLabel + ' · ' + D.unit;
      $('coverStory').textContent = D.story; $('coverRule').textContent = D.rule;
      $('coverJourney').innerHTML = D.rooms.map(function (r, i) { return '<div><b>' + (i + 1) + '. ' + esc(r.name) + '</b>' + esc(r.lessons) + '</div>'; }).join('');
      D.rooms.forEach(function (r) { var im = new Image(); im.src = r.image; });   // preload
      $('btnStart').onclick = start;
      $('btnPause').onclick = function () { S.paused ? resume() : pause(); };
      $('btnResume').onclick = resume;
      $('btnSound').onclick = function () { Snd.setOn(!Snd.on); $('btnSound').textContent = Snd.on ? '🔊' : '🔇'; };
      $('btnRestart').onclick = function () { if (confirm('Restart the whole game from Room 1? Your progress will be lost.')) restart(); };
      $('btnFailRestart').onclick = restart; $('btnAgain').onclick = restart;
      $('btnPrint').onclick = function () { buildPass(); window.print(); };
      document.addEventListener('keydown', function (e) {
        if (e.target.tagName === 'INPUT') return;
        if (e.key === 'p' || e.key === 'P') { if (!$('hud').classList.contains('hidden') && !S.over) (S.paused ? resume() : pause()); }
        if (e.key === 'm' || e.key === 'M') $('btnSound').click();
        if (e.key === 'Escape') closePanel();
      });
      if (/debug=1/.test(location.search)) {          // teacher/builder check: outline every hotspot
        document.body.classList.add('debug');
        Game.room = function (i) { $('cover').classList.add('hidden'); ['hud', 'stage', 'bar'].forEach(function (id) { $(id).classList.remove('hidden'); }); loadRoom(i); };
        Game.state = function () { return S; }; Game.pass = buildPass;
      }
      window.addEventListener('resize', fit);
      setInterval(tick, 250);
    }
  };

  function start() {
    S = fresh();
    S.team = ($('teamName').value || '').trim() || 'Team ' + (Math.floor(Math.random() * 90) + 10);
    var names = [].slice.call(document.querySelectorAll('.pname')).map(function (i) { return i.value.trim(); }).filter(Boolean).slice(0, TEAM);
    S.players = names.map(function (n) { return { name: n, real: true }; });
    for (var k = 1; S.players.length < TEAM; k++) S.players.push({ name: 'Lab assistant ' + k, real: false });
    S.alive = S.players.slice(); S.turned = [];
    document.body.classList.toggle('reduced', $('optReduced').checked);
    document.body.classList.toggle('noflash', $('optNoFlash').checked);
    Snd.on = $('optSound').checked; Snd.init(); Snd.setOn(Snd.on); Snd.resume();
    $('btnSound').textContent = Snd.on ? '🔊' : '🔇';
    $('cover').classList.add('hidden');
    ['hud', 'stage', 'bar'].forEach(function (id) { $(id).classList.remove('hidden'); });
    S.startedAt = new Date();
    loadRoom(0);
    countdown(function () { beginRoom(); toast('Room 1: ' + D.rooms[0].name + '. ' + BEATS[0], 4200); });
  }

  function countdown(done) {
    var el = $('countdown'), seq = ['3', '2', '1', 'GO'], i = 0;
    el.classList.remove('hidden');
    (function step() {
      if (i === seq.length) { el.classList.add('hidden'); el.classList.remove('go'); done(); return; }
      el.textContent = seq[i]; el.classList.toggle('go', seq[i] === 'GO'); Snd.count(seq[i] === 'GO'); i++;
      setTimeout(step, 850);
    })();
  }

  function loadRoom(i) {
    var r = D.rooms[i];
    S.room = i; S.acc = 0; S.wrongRoom = 0; S.running = false; S.roomLoss = 0; S.overtime = false;
    S.solved = r.qs.map(function () { return false; });
    S.letters = [];
    S.letterFor = shuffle(word(r).split(''));            // which question gives which letter, new every run
    S.order = r.qs.map(function (q) { return shuffle((q.c || []).map(function (t, idx) { return idx; })); });
    S.lockAt = r.qs.map(function () { return -1e9; });
    document.body.classList.toggle('vault', !!r.vault);
    $('roomImg').src = r.image; $('roomImg').alt = r.name;
    $('roomName').textContent = 'Room ' + (i + 1) + ' of ' + D.rooms.length + ' · ' + r.name;
    $('roomLessons').textContent = '· ' + r.lessons;
    document.body.classList.remove('overtime');
    buildHots(r); drawLetters(); drawTeam(); drawKeys(); closePanel(); fit(); paintClock(0);
    $('barMsg').textContent = 'Find the ' + r.qs.length + ' question objects in this room.' + (r.vault ? ' This is the final vault.' : '');
  }

  function beginRoom() { S.t0 = performance.now(); S.running = true; Snd.play(S.room); }

  function elapsed() { return S.acc + (S.running ? (performance.now() - S.t0) / 1000 : 0); }

  function tick() {
    if (!S || !S.running || S.paused) return;
    var e = elapsed(); paintClock(e);
    if (e >= ROOM_SECONDS && !S.overtime) { S.overtime = true; document.body.classList.add('overtime'); Snd.setTense(true); toast('Time is up! Every full minute late, one team member turns.', 3500); }
    var due = e >= ROOM_SECONDS ? Math.floor((e - ROOM_SECONDS) / LOSS_EVERY) : 0;   // first loss at 07:00
    while (S.roomLoss < due && !S.over) { S.roomLoss++; infect(); }
  }

  function paintClock(e) {
    var c = $('clock');
    if (e < ROOM_SECONDS) { c.textContent = mmss(ROOM_SECONDS - e); c.classList.remove('late'); }
    else { c.textContent = '+' + mmss(e - ROOM_SECONDS); c.classList.add('late'); }
  }

  function infect() {
    if (S.antidote > 0) { S.antidote--; drawTeam(); toast('Your saved antidote stopped the infection! Nobody turned.', 3200); Snd.right(); return; }
    var pool = S.alive.filter(function (p) { return !p.real; }); if (!pool.length) pool = S.alive;
    var who = pool[Math.floor(Math.random() * pool.length)];
    S.alive.splice(S.alive.indexOf(who), 1); S.turned.push(who);
    S.lost++; drawTeam(); Snd.infect();
    var el = $('infect'); el.innerHTML = esc(who.name) + ' has turned into a zombie!<br><span style="font-size:24px">' + (TEAM - S.lost) + ' of 6 survivors left</span>';
    el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
    if (S.lost >= TEAM) fail();
  }

  function drawTeam() {
    var h = ''; S.alive.forEach(function (p) { h += '<span title="' + esc(p.name) + '">' + person('a') + '</span>'; });
    S.turned.forEach(function (p) { h += '<span title="' + esc(p.name) + ' (zombie)">' + person('z') + '</span>'; });
    if (S.antidote) h += '<span title="Antidote saved" style="font-size:18px;margin-left:4px">🧪×' + S.antidote + '</span>';
    $('survivors').innerHTML = h; $('survivors').setAttribute('aria-label', (TEAM - S.lost) + ' survivors of 6');
  }
  function drawKeys() { var h = ''; for (var i = 0; i < D.rooms.length; i++) h += '<span class="key' + (i < S.keys ? ' got' : '') + '"></span>'; $('keys').innerHTML = h; }
  function drawLetters() {
    var h = '', L = (S.room != null && D.rooms[S.room]) ? word(D.rooms[S.room]).length : 4; for (var i = 0; i < L; i++) h += '<div class="slot' + (S.letters[i] ? ' got' : '') + '">' + (S.letters[i] || '') + '</div>';
    $('letters').innerHTML = h;
    $('role').innerHTML = 'Swap jobs every 2 correct answers · <b>Rotation ' + (S.roleAt + 1) + '</b>';
  }

  /* ---------------- hotspots ---------------- */
  function hot(cls, o, label, fn) {
    var b = document.createElement('button'); b.className = 'hot ' + cls;
    b.style.left = o.x + '%'; b.style.top = o.y + '%'; b.style.width = o.w + '%'; b.style.height = o.h + '%';
    b.setAttribute('aria-label', label); b.onclick = fn;
    var tip; b.onmouseenter = b.onfocus = function () { tip = document.createElement('div'); tip.className = 'tip'; tip.textContent = label; tip.style.left = (o.x + o.w / 2) + '%'; tip.style.top = o.y + '%'; $('hots').appendChild(tip); };
    b.onmouseleave = b.onblur = function () { if (tip) tip.remove(); };
    $('hots').appendChild(b); return b;
  }
  function buildHots(r) {
    $('hots').innerHTML = '';
    hot('door', r.door, r.door.label, openDoor);
    r.qs.forEach(function (q, i) { var b = hot('q', q, q.obj, function () { openQ(i); }); b.dataset.q = i; });
    hot('clue', r.clue, r.clue.label, openClue);      // last, so it sits on top where it overlaps
  }
  function markDone() { document.querySelectorAll('.hot.q').forEach(function (b) { b.classList.toggle('done', !!S.solved[+b.dataset.q]); }); }

  /* fit the 16:9 scene inside the stage without cropping, so hotspots stay on their objects */
  function fit() {
    var st = $('stage'), sc = $('scene'); if (!st || st.classList.contains('hidden')) return;
    var W = st.clientWidth, H = st.clientHeight, ar = 1376 / 768;
    var w = Math.min(W, H * ar); sc.style.width = w + 'px'; sc.style.height = (w / ar) + 'px';
  }

  /* ---------------- panel ---------------- */
  function openPanel(html) { var p = $('panel'); p.innerHTML = '<button class="close" aria-label="Close">✕</button>' + html; p.classList.add('open'); p.querySelector('.close').onclick = closePanel; }
  function closePanel() { $('panel').classList.remove('open'); }

  function openQ(i) {
    if (S.paused || S.over) return;
    var q = D.rooms[S.room].qs[i], ans = answerIndex(q), need = D.rooms[S.room].qs.length;
    var left = Math.ceil(S.lockAt[i] + LOCK - elapsed());
    if (!S.solved[i] && left > 0) {
      openPanel('<h3>' + esc(q.card || q.obj) + '</h3><div class="q">&#128274; Locked for <b id="lockN">' + left + '</b> more seconds after a wrong answer.</div><p>Use the time: check the lesson it names in your worksheets.</p><div class="fb bad">' + esc(q.hint) + '</div>');
      var iv = setInterval(function () { var el = $('lockN'); if (!el) { clearInterval(iv); return; } var l = Math.ceil(S.lockAt[i] + LOCK - elapsed()); if (l <= 0) { clearInterval(iv); openQ(i); } else el.textContent = l; }, 500);
      return;
    }
    var wrongNow = function () {
      Snd.wrong(); S.wrongRoom++; S.penalties++;
      if (S.running) { S.acc += PENALTY; paintClock(elapsed()); }
      S.lockAt[i] = elapsed();
      S.order[i] = shuffle(S.order[i]);
      $('fb').innerHTML = '<div class="fb bad">Not that one. <b>+' + PENALTY + ' seconds</b>, and this question locks for ' + LOCK + ' s. ' + esc(q.hint) + '</div>';
      document.querySelectorAll('#ch .choice, #tin, #tgo').forEach(function (x) { x.disabled = true; });
      setTimeout(function () { if ($('panel').classList.contains('open') && $('fb')) openQ(i); }, 2200);
    };
    var rightNow = function () {
      S.solved[i] = true; S.letters.push(S.letterFor[i]); S.correct++;
      $('fb').innerHTML = '<div class="fb good">Correct! Your team earns the letter <b style="font-size:22px">' + S.letterFor[i] + '</b>.</div>';
      Snd.right(); drawLetters(); markDone();
      if (S.correct % 2 === 0) { S.roleAt++; drawLetters(); toast('Rotate jobs! Everyone passes their job to the next person.'); }
      var n = S.letters.length;
      $('barMsg').textContent = n < need ? (need - n) + ' more correct answer' + (need - n === 1 ? '' : 's') + ' to unlock the code.' : 'All ' + need + ' letters found! Unscramble them and enter the code at the door.';
    };
    if (q.t) {
      var th = '<h3>' + esc(q.card || q.obj) + ' &middot; type your answer</h3><div class="q">' + esc(q.q) + '</div>';
      if (S.solved[i]) th += '<div class="fb good">Solved. This object gave your team the letter <b>' + S.letterFor[i] + '</b>.</div>';
      else th += '<div class="typed"><input id="tin" autocomplete="off" aria-label="Your answer" placeholder="Type the answer"> <button class="big" id="tgo">Check</button></div><div id="fb"></div>';
      th += '<div class="src"><button class="srcbtn" id="srcBtn">Show where to look</button> <span id="srcTxt"></span></div>';
      openPanel(th);
      $('srcBtn').onclick = function () { $('srcTxt').textContent = 'Search: ' + q.src; };
      if (!S.solved[i]) {
        var tin = $('tin'); tin.focus(); tin.oninput = function () { Snd.key(); };
        var check = function () { if (S.solved[i] || !tin.value.trim()) return; if (typedOk(q, tin.value)) { tin.disabled = true; $('tgo').disabled = true; rightNow(); } else wrongNow(); };
        $('tgo').onclick = check; tin.onkeydown = function (e) { if (e.key === 'Enter') check(); };
      }
      return;
    }
    var h = '<h3>' + esc(q.card || q.obj) + '</h3><div class="q">' + esc(q.q) + '</div><div id="ch">';
    S.order[i].forEach(function (idx) {
      var cls = S.solved[i] ? (idx === ans ? ' right' : ' wrong') : '';
      h += '<button class="choice' + cls + '" data-i="' + idx + '"' + (S.solved[i] ? ' disabled' : '') + '>' + esc(q.c[idx]) + '</button>';
    });
    h += '</div><div id="fb"></div><div class="src"><button class="srcbtn" id="srcBtn">Show where to look</button> <span id="srcTxt"></span></div>';
    openPanel(h);
    if (S.solved[i]) $('fb').innerHTML = '<div class="fb good">Solved. This object gave your team the letter <b>' + S.letterFor[i] + '</b>.</div>';
    $('srcBtn').onclick = function () { $('srcTxt').textContent = 'Search: ' + q.src; };
    document.querySelectorAll('#ch .choice').forEach(function (b) {
      b.onclick = function () {
        if (S.solved[i]) return;
        var pick = +b.dataset.i;
        if (pick === ans) {
          b.classList.add('right'); document.querySelectorAll('#ch .choice').forEach(function (x) { x.disabled = true; });
          rightNow();
        } else {
          b.classList.add('wrong'); wrongNow();
        }
      };
    });
  }

  function openClue() {
    if (S.paused || S.over) return;
    var r = D.rooms[S.room];
    openPanel('<h3>' + esc(r.clue.label) + '</h3><div class="q">' + esc(r.clue.text) + '</div>');
  }

  function openDoor() {
    if (S.paused || S.over) return;
    var n = S.letters.length, r = D.rooms[S.room];
    var need = r.qs.length;
    if (n < need) { openPanel('<h3>' + esc(r.door.label) + '</h3><div class="q">The door is sealed. The keypad needs a ' + need + '-letter code.</div><p>Correct answers so far: <b>' + n + ' / ' + need + '</b>. Each correct answer gives your team one letter.</p>'); return; }
    openPanel('<h3>' + esc(r.door.label) + '</h3><div class="q">Your letters: <b style="font:800 26px Consolas,monospace;color:var(--warn);letter-spacing:.3em">' + S.letters.join('') +
      '</b><br>Rearrange them into a science word and type it in.</div><input id="codein" maxlength="' + need + '" autocomplete="off" aria-label="Door code"><div id="codefb"></div><button class="big" id="codeGo">Unlock</button>');
    var inp = $('codein'); inp.focus(); inp.oninput = function () { Snd.key(); };
    var go = function () {
      var v = inp.value.trim().toUpperCase();
      if (v === word(r)) { unlock(); return; }
      inp.classList.remove('shake'); void inp.offsetWidth; inp.classList.add('shake'); Snd.wrong();
      Snd.buzz(); $('codefb').innerHTML = '<div class="fb bad">The keypad buzzes. Wrong code. You keep your letters, so try another order.</div>';
    };
    $('codeGo').onclick = go; inp.onkeydown = function (e) { if (e.key === 'Enter') go(); };
  }

  /* ---------------- progression ---------------- */
  function unlock() {
    var e = elapsed(); S.acc = e; S.running = false;
    S.splits.push(e); S.words.push(word(D.rooms[S.room])); S.keys++; drawKeys();
    if (S.wrongRoom === 0) {
      S.cures++;
      if (S.lost > 0) { S.lost--; var back = S.turned.pop(); S.alive.push(back); Snd.cure(); setTimeout(function () { toast('Perfect room! The antidote cured ' + back.name + '.', 3400); }, 1300); }
      else { S.antidote++; setTimeout(function () { toast('Perfect room! You found an antidote. It will stop the next infection.', 3400); }, 1300); }
      drawTeam();
    }
    Snd.setTense(false); Snd.stop(); Snd.unlock(); closePanel();
    document.body.classList.remove('overtime');
    toast('Key ' + S.keys + ' of ' + D.rooms.length + ' collected!');
    if (S.keys === D.rooms.length) { setTimeout(win, 900); return; }
    var fx = $('doorfx'); fx.classList.remove('hidden', 'open'); fx.classList.add('closed');
    setTimeout(function () {
      loadRoom(S.room + 1);
      fx.classList.remove('closed'); void fx.offsetWidth; fx.classList.add('open');
      setTimeout(function () { fx.classList.add('hidden'); fx.classList.remove('open'); beginRoom(); toast('Room ' + (S.room + 1) + ': ' + D.rooms[S.room].name + '. ' + BEATS[S.room % BEATS.length], 4200); }, 1200);
    }, 900);
  }

  function pause() { if (S.over || !S.running) return; S.acc = elapsed(); S.running = false; S.paused = true; Snd.suspend(); $('pausescr').classList.remove('hidden'); }
  function resume() { if (!S.paused) return; S.paused = false; $('pausescr').classList.add('hidden'); Snd.resume(); S.t0 = performance.now(); S.running = true; }

  function fail() {
    S.over = true; S.running = false; Snd.setTense(false); Snd.stop(); Snd.defeat(); closePanel();
    var h = ''; for (var i = 0; i < TEAM; i++) h += person('z'); $('failTeam').innerHTML = h;
    setTimeout(function () { $('failscr').classList.remove('hidden'); }, 1800);
  }

  function listNames(a) {
    var n = a.map(function (p) { return p.name; });
    return n.length < 2 ? n.join('') : n.slice(0, -1).join(', ') + ' and ' + n[n.length - 1];
  }
  function survivalLine() {
    var real = function (a) { return a.filter(function (p) { return p.real; }); };
    var ok = real(S.alive), z = real(S.turned), t = '';
    t += ok.length ? '<b>' + esc(listNames(ok)) + '</b> ' + (ok.length === 1 ? 'survived' : 'all survived') + '.' : 'None of the team survived.';
    if (z.length) t += ' <b>' + esc(listNames(z)) + '</b> ' + (z.length === 1 ? 'was' : 'were') + ' turned into ' + (z.length === 1 ? 'a zombie' : 'zombies') + '.';
    if (!S.players.some(function (p) { return p.real; })) t = (TEAM - S.lost) + ' of 6 lab members survived.';
    return t;
  }
  function total() { return S.splits.reduce(function (a, b) { return a + b; }, 0); }

  function win() {
    S.over = true; Snd.victory();
    var alive = TEAM - S.lost, h = '';
    S.alive.forEach(function (p) { h += '<figure class="who">' + person('a').replace('<svg', '<svg class="alive"') + '<figcaption>' + esc(p.name) + '</figcaption></figure>'; });
    S.turned.forEach(function (p) { h += '<figure class="who z">' + person('z') + '<figcaption>' + esc(p.name) + '</figcaption></figure>'; });
    $('winTeam').innerHTML = h;
    $('winLine').innerHTML = '<b>' + esc(S.team) + '</b> escaped in <b>' + mmss(total()) + '</b>! ' + survivalLine() +
      ' Perfect rooms: <b>' + S.cures + '</b> · Wrong answers: <b>' + S.penalties + '</b>.';
    var t = '<tr><th>Room</th><th>Time</th><th>Code</th></tr>';
    D.rooms.forEach(function (r, i) { t += '<tr><td>' + (i + 1) + '. ' + esc(r.name) + '</td><td>' + mmss(S.splits[i]) + (S.splits[i] > ROOM_SECONDS ? ' (late)' : '') + '</td><td>' + S.words[i] + '</td></tr>'; });
    $('winSplits').innerHTML = t;
    ['hud', 'stage', 'bar'].forEach(function (id) { $(id).classList.add('hidden'); });
    $('winscr').classList.remove('hidden');
  }

  function buildPass() {
    var now = new Date(), alive = TEAM - S.lost;
    var cells = D.rooms.map(function (r, i) { return '<td>' + (i + 1) + '<br>' + esc(r.name) + '</td>'; }).join('');
    var times = S.splits.map(function (s) { return '<td>' + mmss(s) + '</td>'; }).join('');
    var codes = S.words.map(function (w) { return '<td><b>' + w + '</b> 🔑</td>'; }).join('');
    $('pass').innerHTML = '<div class="pass"><h1>LABORATORY RELEASE PASS</h1><h2>Outbreak Lab Escape · ' + esc(D.gradeLabel) + ' · ' + esc(D.unit) + '</h2>' +
      '<div class="row"><div>Team:&nbsp;<span class="big2">' + esc(S.team) + '</span></div></div>' +
      '<div class="row" style="font-size:15pt"><div>' + survivalLine() + '</div></div>' +
      '<div class="row"><div>Survivors: <span class="big2">' + alive + ' / 6</span></div><div>Total time: <span class="big2">' + mmss(total()) + '</span></div><div>Keys: <span class="big2">6 / 6</span></div></div>' +
      '<div class="row"><div>Perfect rooms (antidotes): <b>' + S.cures + '</b></div><div>Wrong answers: <b>' + S.penalties + '</b></div></div><div class="row"><div>Escaped: ' + now.toLocaleDateString() + ' at ' + now.toLocaleTimeString() + '</div></div>' +
      '<table><tr><th></th>' + cells + '</tr><tr><th>Time</th>' + times + '</tr><tr><th>Code</th>' + codes + '</tr></table>' +
      '<div class="claim"><div class="stamp">SHOW YOUR TEACHER TO CLAIM THE PRIZE</div><div>Teacher initials: ______________</div></div></div>';
  }

  function restart() {
    Snd.setTense(false); Snd.stop(); closePanel();
    ['failscr', 'winscr', 'pausescr'].forEach(function (id) { $(id).classList.add('hidden'); });
    ['hud', 'stage', 'bar'].forEach(function (id) { $(id).classList.add('hidden'); });
    document.body.classList.remove('overtime'); $('doorfx').classList.add('hidden');
    S = fresh(); $('cover').classList.remove('hidden');
  }
})();
