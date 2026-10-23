'use strict';
/* gen-classroom.js — Google Classroom Edition layer. Run AFTER gen-site.js:

     node scripts/gen-classroom.js

   Writes, using udl.html as the page template (same look + Teachers menu):
     classroom.html        teacher tutorial: using this suite with Google Classroom
     classroom-check.html  completion-code checker (runs in the browser, nothing sent)
   and injects, idempotently (between <!--gc--> markers):
     index.html            an edition ribbon linking the tutorial
     <band>/<id>.html      an "Assign in Google Classroom" panel on every teacher
                           launch page (copyable student link with ?lang=)

   Identical file in every Classroom-edition suite; suite-specific text comes
   from the locale files and the suite name (config.js SUITE_EN, or udl.html's title). */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BANDS = ['gradek2', 'grade35', 'grade68'];
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const LANGS = [['en', 'English'], ['es', 'Español'], ['vi', 'Tiếng Việt'], ['ar', 'العربية'], ['hi', 'हिन्दी'], ['ur', 'اردو'], ['zh', '中文']];

// ---- activity inventory (from the baked locale files) ---------------------
function loadBreakout(p) {
  const fn = new Function('window', fs.readFileSync(p, 'utf8') + '\nreturn window.BREAKOUT;');
  return fn({});
}
const gradeKey = g => (String(g).toUpperCase() === 'K' ? -1 : +g);
const ACTS = [];
for (const band of BANDS) {
  const dir = path.join(ROOT, band, 'locales');
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).sort()) {
    if (!f.endsWith('.js')) continue;
    const B = loadBreakout(path.join(dir, f));
    const g = /-grade([0-9k])/i.exec(B.id)[1].toUpperCase();
    ACTS.push({ id: B.id, band, grade: g, free: /-free$/.test(B.id), title: B.UI.en['header.h1'] });
  }
}
ACTS.sort((a, b) => gradeKey(a.grade) - gradeKey(b.grade) || (b.free - a.free));
const gradeLabel = g => (g === 'K' ? 'Kindergarten' : 'Grade ' + g);
const actLabel = a => `${gradeLabel(a.grade)} — ${a.title}`;

// ---- page template: everything around udl.html's body ---------------------
const TPL = fs.readFileSync(path.join(ROOT, 'udl.html'), 'utf8');
const TPL_TITLE = /<title>([^<]*)<\/title>/.exec(TPL)[1];
// Suite name: config.js SUITE_EN when the suite defines it, else the template's title suffix.
const SUITE_EN = require('./config').SUITE_EN || TPL_TITLE.split(' — ').pop();
const MAIN_OPEN = '<main id="main">';
function page(title, body) {
  const a = TPL.indexOf(MAIN_OPEN) + MAIN_OPEN.length;
  const b = TPL.indexOf('<footer>', a);
  return (TPL.slice(0, a).split(TPL_TITLE).join(esc(title)) + '\n' + body + '\n' + TPL.slice(b));
}
// Classroom-edition hero art, if the suite has it.
const HERO = fs.existsSync(path.join(ROOT, 'assets', 'hero-classroom.webp'))
  ? '<img class="hero-img" src="assets/hero-classroom.webp" alt="" width="1600" height="900" loading="eager">\n    ' : '';
const GC_CSS = `<style>
  .gc-steps{counter-reset:s;list-style:none;padding:0}
  .gc-steps>li{counter-increment:s;position:relative;padding:0 0 14px 46px}
  .gc-steps>li::before{content:counter(s);position:absolute;left:0;top:0;width:32px;height:32px;border-radius:50%;background:var(--navy);color:#fff;font-weight:800;display:grid;place-items:center}
  .gc-copybox{position:relative;background:#fff;border:2px solid var(--line);border-radius:12px;padding:12px 14px;white-space:pre-wrap;font-size:.92rem}
  .gc-copybtn,.gc-btn{font:inherit;font-weight:800;padding:8px 14px;border:0;border-radius:10px;background:var(--navy);color:#fff;cursor:pointer}
  .gc-copybox .gc-copybtn{float:right;margin:0 0 6px 10px}
  .gc-code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-weight:700;letter-spacing:.04em;white-space:nowrap}
  textarea.gc-ta{width:100%;min-height:150px;font:inherit;padding:10px 12px;border:2px solid var(--line);border-radius:12px;box-sizing:border-box}
  select.gc-sel{font:inherit;padding:8px 10px;border:2px solid var(--line);border-radius:10px;max-width:100%}
  .gc-ok{color:#15803d;font-weight:800}.gc-bad{color:#b91c1c;font-weight:800}.gc-warn{color:#a16207;font-weight:800}
  .gc-toc a{font-weight:700}
</style>`;
const copyScript = `<script>
document.querySelectorAll('[data-copy]').forEach(function (b) {
  b.addEventListener('click', function () {
    var el = document.getElementById(b.getAttribute('data-copy'));
    var txt = (el.value !== undefined ? el.value : el.innerText.replace(/^Copy\\s*/, '')).trim();
    var old = b.textContent;
    var fail = function () { b.textContent = 'Press Ctrl+C'; if (el.select) el.select(); else { var r = document.createRange(); r.selectNodeContents(el); getSelection().removeAllRanges(); getSelection().addRange(r); } };
    if (!navigator.clipboard) return fail();
    navigator.clipboard.writeText(txt).then(function () { b.textContent = 'Copied!'; setTimeout(function () { b.textContent = old; }, 1600); }, fail);
  });
});
</script>`;

// ---- classroom.html — the tutorial ----------------------------------------
const sample = ACTS.find(a => a.free && a.grade === '3') || ACTS[0];
// The same code module the pages use, so the tutorial's example really checks out.
const CODE = (() => { const w = {}; new Function('window', 'document', fs.readFileSync(path.join(ROOT, 'assets', 'classroom.js'), 'utf8'))(w, { getElementById: () => null }); return w.CTOBCode; })();
const sampleCode = CODE.make(sample.id, 'Maria Lopez');
const tutorial = `${GC_CSS}
  <div class="crumb" role="navigation" aria-label="Breadcrumb"><a href="index.html">‹ Suite home</a> · <a href="classroom-check.html">Check completion codes</a></div>
  <div class="hero">
    ${HERO}<div class="eyebrow">Google Classroom Edition · Teacher tutorial</div>
    <h1>Using ${esc(SUITE_EN)} with Google Classroom</h1>
    <p class="lede">Post any breakout as a Classroom assignment in about two minutes. Students play in their browser, earn a completion code when they open all four locks, and turn the code in on Classroom. You check the codes and return grades. Nobody needs a new account, and no student data leaves the student's device.</p>
    <div class="btnrow">
      <a class="btn" href="library.html">🔎 Pick an activity</a>
      <a class="btn ghost" href="classroom-check.html">✅ Check completion codes</a>
    </div>
  </div>

  <div class="panel tip">🧭 <b>On this page:</b> <span class="gc-toc"><a href="#what">What's different</a> · <a href="#post">Post an assignment</a> · <a href="#students">What students do</a> · <a href="#check">Check codes &amp; grade</a> · <a href="#k2">Grades K–2</a> · <a href="#lang">Multilingual students</a> · <a href="#privacy">Privacy</a> · <a href="#faq">Troubleshooting</a></span></div>

  <h2 id="what">1 · What's different in the Classroom Edition</h2>
  <div class="panel">
    <p style="margin-top:0">The activities, clues, locks, and teacher materials are <b>the same</b> as the original suite. The Classroom Edition adds three things:</p>
    <ul>
      <li><b>A completion code on the win screen.</b> After the last lock opens, students type their name and get a code like <span class="gc-code">${esc(sampleCode)}</span>. The code is tied to that student's name and that activity, so a code copied from a friend won't check out.</li>
      <li><b>An "Assign in Google Classroom" box</b> on every teacher launch page. It has the student link, ready to copy, in any of the seven languages.</li>
      <li><b>A <a href="classroom-check.html">code checker</a></b>, where you paste the codes students turned in and see right away which ones are valid.</li>
    </ul>
  </div>

  <h2 id="post">2 · Post an assignment in Google Classroom</h2>
  <ol class="gc-steps">
    <li><b>Pick the activity.</b> Open the <a href="library.html">library</a> or a grade-band hub and click an activity to reach its <b>teacher launch page</b>. Skim the premise and the CLEAR mapping so you know where students are headed.</li>
    <li><b>Copy the student link.</b> On the launch page, find the <b>🎓 Assign in Google Classroom</b> box. Choose the language your students will start in, then click <b>Copy student link</b>. (Students can still switch languages with the 🌐 menu.)</li>
    <li><b>Create the assignment.</b> In Google Classroom open your class → <b>Classwork</b> → <b>+ Create</b>. Choose one of these:
      <ul>
        <li><b>Question → Short answer</b> <i>(recommended)</i>. Students paste their code as the answer, and Classroom lists every student's answer next to their name, so checking is fast. Type the question as <i>"Paste your completion code."</i></li>
        <li><b>Assignment</b>. Students paste the code in the <b>Private comments</b> box (or attach a screenshot of the win screen) and click <b>Turn in</b>.</li>
      </ul></li>
    <li><b>Attach the link.</b> Click <b>Add</b> (the link icon 🔗) and paste the student link. Classroom shows it as a link card that opens in a new tab, which works on Chromebooks, iPads, and laptops.</li>
    <li><b>Paste the instructions.</b> Copy the text below into the instructions box and adjust it if you like.
      <div class="gc-copybox" id="gcInstr"><button type="button" class="gc-copybtn" data-copy="gcInstr">Copy</button>1. Click the link to open the breakout.
2. Read all six clues. One clue is a decoy, so think about which clues really help!
3. Use the clues to open all four locks. After each lock, read the reason why the answer is right.
4. When you win, type your first and last name the way it shows in Google Classroom, and click "Show my code."
5. Copy your completion code, paste it here, and click Turn in.</div></li>
    <li><b>Set points and a due date.</b> Completion work is often worth 10 points or marked complete/incomplete. Then click <b>Assign</b>, or <b>Schedule</b> it for the day you'll teach it.</li>
  </ol>
  <div class="panel gold"><b>Tip:</b> a breakout works best as the <b>engage</b> or <b>collaborative-practice</b> part of a lesson. Assign it to pairs or trios (one device, one shared code), then debrief the CLEAR steps together. See the <a href="lessons.html">lesson-plan guide</a>.</div>

  <h2 id="students">3 · What students do</h2>
  <ol class="gc-steps">
    <li>Open the assignment in Google Classroom and click the activity link.</li>
    <li>Read the clues and open the four locks. Wrong answers are fine: they get a hint and try again, and nothing is graded inside the activity.</li>
    <li>On the win screen, under <b>Get your completion code</b>, type their <b>first and last name</b> and click <b>Show my code</b>.</li>
    <li>Click <b>Copy code</b>, return to the Classroom tab, paste the code, and click <b>Turn in</b>.</li>
  </ol>
  <p class="section-note">Capital letters, accents, extra spaces, hyphens, and name order don't matter: <i>"José García-Ruiz"</i>, <i>"jose garcia ruiz"</i>, and <i>"Garcia Ruiz, Jose"</i> all give the same code. Spelling does matter, so a nickname gives a different code. That's why students should type their name the way it appears in Classroom.</p>

  <h2 id="check">4 · Check codes and return grades</h2>
  <ol class="gc-steps">
    <li>Open the Classroom assignment → <b>Student answers</b> (for a Question) or <b>Student work</b> (for an Assignment).</li>
    <li>Open the <a href="classroom-check.html"><b>code checker</b></a>. There are two ways to use it:
      <ul>
        <li><b>Check what came in.</b> Paste one student per line, with the name and the code (for example <span class="gc-code">Maria Lopez ${esc(sampleCode)}</span>). Each line is marked ✅ valid, ❌ doesn't match that name, or ⚠️ no code found.</li>
        <li><b>Make a list of expected codes.</b> Choose the activity and paste your class roster, one name per line. You'll get each student's expected code, so you can compare it with Classroom at a glance or paste the list into a gradebook spreadsheet.</li>
      </ul></li>
    <li>In Classroom, enter the points (or mark complete) and click <b>Return</b>.</li>
  </ol>
  <div class="panel tip">🔁 <b>Re-teaching?</b> Students can click <b>Play Again</b> and get the same code for the same name, so they never lose credit by replaying.</div>

  <h2 id="k2">5 · Grades K–2</h2>
  <div class="panel">
    <ul style="margin:0">
      <li>Play the breakout <b>whole-class</b> on the board, or in a small group with an adult. Typing a name is the hardest part for young students, so let a grown-up or older buddy type it.</li>
      <li>If students don't use Classroom on their own yet, skip the code. Post the link as <b>Material</b> (Classwork → + Create → Material) so families can replay it at home.</li>
      <li>For a quick check, have students show you the win screen, or take a photo of it with the Classroom app.</li>
    </ul>
  </div>

  <h2 id="lang">6 · Multilingual students</h2>
  <div class="panel">
    <p style="margin-top:0">Every activity runs in English, Spanish, Vietnamese, Arabic, Hindi, Urdu, and Chinese, and the completion-code box is translated too. You can either:</p>
    <ul style="margin-bottom:0">
      <li>Post <b>one link</b> and show students the 🌐 menu, so each student picks a language, <i>or</i></li>
      <li>Post a <b>language-specific link</b> from the launch page's language menu (it adds <span class="gc-code">?lang=es</span> and similar) to a Classroom <b>topic</b> or to specific students. (When you create the assignment, choose <b>All students → select students</b>.)</li>
    </ul>
    <p class="small" style="margin-bottom:0">The code is the same whichever language a student plays in. Translations are AI-seeded and awaiting native-speaker review.</p>
  </div>

  <h2 id="privacy">7 · Privacy</h2>
  <div class="panel gold">
    <ul style="margin:0">
      <li>There's no login, no account, no tracking, and no server. The activity runs entirely in the student's browser.</li>
      <li>The student's name is used <b>only in their own browser</b> to calculate the code. It is <b>not saved</b> and <b>not sent anywhere</b>. Closing the tab or clicking Play Again clears it.</li>
      <li>The code checker works the same way: the names you paste stay on your computer.</li>
      <li>The student's name and code reach you only through Google Classroom, which your district already manages under its own Google Workspace for Education agreement.</li>
    </ul>
  </div>

  <h2 id="faq">8 · Troubleshooting</h2>
  <div class="panel">
    <p style="margin-top:0"><b>A code shows ❌, but the student really finished.</b> Their name is spelled differently from the one you checked, for example a nickname or a missing second last name. Check it again with the name the student typed, or have them replay. (The activity remembers nothing, but the locks go fast the second time.)</p>
    <p><b>The student closed the win screen before copying the code.</b> Have them open all four locks again. Same name, same code.</p>
    <p><b>Can students cheat?</b> Copying a friend's code doesn't work, because the code depends on the name. This is a <b>light-touch completion check</b>, though, not secure testing: the code is calculated in the browser, so a determined, tech-savvy student could work it out. For graded evidence of thinking, add a short reflection question to the assignment (for example, <i>"Which clue was the decoy, and how did you know?"</i>).</p>
    <p><b>The link is blocked at school.</b> Ask your tech team to allow this site. It's a static website with no logins, ads, or third-party trackers.</p>
    <p style="margin-bottom:0"><b>What about the 🕹️ Arcade games?</b> They don't issue codes. Use them as ungraded warm-ups or early-finisher choices, and post them as Classroom <b>Material</b>.</p>
  </div>
  <div class="panel tip">🚧 <b>Coming later:</b> a Google Classroom <b>add-on</b> that opens activities inside Classroom and sends grades back automatically, with no codes to check.</div>
${copyScript}`;
fs.writeFileSync(path.join(ROOT, 'classroom.html'), page('Google Classroom Guide — ' + SUITE_EN, tutorial));

// ---- classroom-check.html — the code checker ------------------------------
const options = ACTS.map(a => `<option value="${esc(a.id)}">${esc(actLabel(a))}</option>`).join('\n        ');
const checker = `${GC_CSS}
  <div class="crumb" role="navigation" aria-label="Breadcrumb"><a href="index.html">‹ Suite home</a> · <a href="classroom.html">Google Classroom guide</a></div>
  <div class="hero">
    ${HERO}<div class="eyebrow">Google Classroom Edition · Teacher tool</div>
    <h1>Check completion codes</h1>
    <p class="lede">Paste the codes your students turned in, or make a list of the codes your roster should earn. Everything runs on this page: the names you paste are <b>never saved or sent anywhere</b>.</p>
  </div>

  <h2>Check codes students turned in</h2>
  <p class="section-note">One student per line: the name and then the code, separated by a space, comma, or tab. The activity is read from the code itself, so you can mix activities in one list.</p>
  <label for="ckIn"><b>Student names and codes</b></label>
  <textarea class="gc-ta" id="ckIn" placeholder="Maria Lopez  ${esc(sampleCode)}&#10;Garcia Ruiz, Jose, ${esc(CODE.make(sample.id, 'Jose Garcia Ruiz'))}" spellcheck="false"></textarea>
  <p><button type="button" class="gc-btn" id="ckGo">Check codes</button></p>
  <div class="tbl-wrap" id="ckOutWrap" hidden><table><thead><tr><th>Student</th><th>Activity</th><th>Code</th><th>Result</th></tr></thead><tbody id="ckOut"></tbody></table></div>
  <p class="small" id="ckSum" role="status" aria-live="polite"></p>

  <h2>Expected codes for my roster</h2>
  <p class="section-note">Choose the activity and paste your class list, one name per line. You can copy it from Classroom's <b>People</b> tab or from your SIS.</p>
  <p><select class="gc-sel" id="rsAct" aria-label="Activity">
        ${options}
      </select></p>
  <label for="rsIn"><b>Class roster (one name per line)</b></label>
  <textarea class="gc-ta" id="rsIn" placeholder="Maria Lopez&#10;Jose Garcia Ruiz" spellcheck="false"></textarea>
  <p><button type="button" class="gc-btn" id="rsGo">Make codes</button> <button type="button" class="gc-btn" id="rsCopy" hidden>Copy for a spreadsheet</button></p>
  <div class="tbl-wrap" id="rsOutWrap" hidden><table><thead><tr><th>Student</th><th>Expected code</th></tr></thead><tbody id="rsOut"></tbody></table></div>

  <div class="panel tip">ℹ️ Capitals, accents, spacing, punctuation, and name order are ignored, but spelling counts. If a code shows ❌, try the spelling the student actually typed. See the <a href="classroom.html#faq">troubleshooting tips</a>.</div>
<script src="assets/classroom.js"></script>
<script>
(function () {
  var C = window.CTOBCode, ACTS = ${JSON.stringify(Object.fromEntries(ACTS.map(a => [a.id, actLabel(a)])))};
  var $ = function (id) { return document.getElementById(id); };
  var h = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var lines = function (id) { return $(id).value.split(/\\r?\\n/).map(function (l) { return l.trim(); }).filter(Boolean); };
  $('ckGo').onclick = function () {
    var ok = 0, bad = 0, none = 0;
    $('ckOut').innerHTML = lines('ckIn').map(function (l) {
      var p = C.parse(l), name = p ? p.rest.replace(/^[\\s,;:\\t-]+|[\\s,;:\\t-]+$/g, '') : l, res;
      if (!p) { none++; res = '<span class="gc-warn">⚠️ No code found</span>'; }
      else if (!p.id || !ACTS[p.id]) { bad++; res = '<span class="gc-bad">❌ Not an activity in this suite</span>'; }
      else if (C.make(p.id, name) === p.code) { ok++; res = '<span class="gc-ok">✅ Valid</span>'; }
      else { bad++; res = '<span class="gc-bad">❌ Doesn\\u2019t match this name</span>'; }
      return '<tr><td>' + h(name) + '</td><td>' + h(p && ACTS[p.id] || '—') + '</td><td><span class="gc-code">' + h(p ? p.code : '—') + '</span></td><td>' + res + '</td></tr>';
    }).join('');
    $('ckOutWrap').hidden = false;
    $('ckSum').textContent = ok + ' valid · ' + bad + ' not matching · ' + none + ' without a code';
  };
  var rows = [];
  $('rsGo').onclick = function () {
    var id = $('rsAct').value;
    rows = lines('rsIn').map(function (n) { return [n, C.make(id, n) || '(name too short)']; });
    $('rsOut').innerHTML = rows.map(function (r) { return '<tr><td>' + h(r[0]) + '</td><td><span class="gc-code">' + h(r[1]) + '</span></td></tr>'; }).join('');
    $('rsOutWrap').hidden = $('rsCopy').hidden = !rows.length;
  };
  $('rsCopy').onclick = function () {
    var b = this, tsv = 'Student\\tExpected code (' + ACTS[$('rsAct').value] + ')\\n' + rows.map(function (r) { return r.join('\\t'); }).join('\\n');
    var fail = function () { b.textContent = 'Copy blocked: select the table and press Ctrl+C'; };
    if (!navigator.clipboard) return fail();
    navigator.clipboard.writeText(tsv).then(function () { b.textContent = 'Copied!'; setTimeout(function () { b.textContent = 'Copy for a spreadsheet'; }, 1600); }, fail);
  };
})();
</script>`;
fs.writeFileSync(path.join(ROOT, 'classroom-check.html'), page('Check Completion Codes — ' + SUITE_EN, checker));

// ---- injections into gen-site.js output ------------------------------------
const strip = s => s.replace(/<!--gc-->[\s\S]*?<!--\/gc-->\n?/g, '');
function afterHero(html, block) {
  const h = html.indexOf('<div class="hero">');
  const end = html.indexOf('\n  </div>\n', h) + '\n  </div>\n'.length;
  return html.slice(0, end) + '\n  <!--gc-->' + block + '<!--/gc-->\n' + html.slice(end);
}
function inject(file, block) {
  const html = strip(fs.readFileSync(file, 'utf8'));
  if (!html.includes('<div class="hero">')) throw new Error('no hero in ' + file);
  fs.writeFileSync(file, afterHero(html, block));
}

inject(path.join(ROOT, 'index.html'), `<div class="panel tip" style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><span style="font-size:1.6rem" aria-hidden="true">🎓</span><span style="flex:1 1 260px"><b>Google Classroom Edition.</b> Every breakout gives students a completion code to turn in on Google Classroom, and you check the codes in one click.</span><a class="btn" href="classroom.html">How to use it with Classroom</a><a class="btn ghost" href="classroom-check.html">Check codes</a></div>`);

const langOpts = LANGS.map(([c, n]) => `<option value="${c}">${esc(n)}</option>`).join('');
for (const a of ACTS) {
  const file = path.join(ROOT, a.band, a.id + '.html');
  if (!fs.existsSync(file)) continue;
  const k = a.id.replace(/[^a-z0-9]/gi, '');
  inject(file, `<div class="panel" style="border-color:var(--navy)">
    <h3 style="margin-top:0">🎓 Assign in Google Classroom</h3>
    <p style="margin:.2em 0 .6em">Paste this link into a Classroom assignment or short-answer question. When students win, they get a completion code to turn in. <a href="../classroom.html">Step-by-step guide</a> · <a href="../classroom-check.html">Check codes</a></p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
      <select class="gc-sel" id="gcL${k}" aria-label="Starting language" style="font:inherit;padding:8px 10px;border:2px solid var(--line);border-radius:10px">${langOpts}</select>
      <input id="gcU${k}" readonly aria-label="Student link" style="flex:1 1 260px;min-width:0;font:inherit;padding:8px 10px;border:2px solid var(--line);border-radius:10px;direction:ltr">
      <button type="button" id="gcC${k}" style="font:inherit;font-weight:800;padding:8px 14px;border:0;border-radius:10px;background:var(--navy);color:#fff;cursor:pointer">Copy student link</button>
    </div>
    <script>(function(){var s=document.getElementById('gcL${k}'),u=document.getElementById('gcU${k}'),b=document.getElementById('gcC${k}');
      function upd(){var x=new URL('${a.id}-student.html',location.href);if(s.value!=='en')x.searchParams.set('lang',s.value);u.value=x.href;}
      s.onchange=upd;upd();u.onfocus=function(){u.select();};
      b.onclick=function(){var no=function(){u.focus();u.select();b.textContent='Press Ctrl+C';};if(!navigator.clipboard)return no();navigator.clipboard.writeText(u.value).then(function(){b.textContent='Copied!';setTimeout(function(){b.textContent='Copy student link';},1600);},no);};})();</script>
  </div>`);
}
console.log(`gen-classroom: classroom.html, classroom-check.html, index ribbon, ${ACTS.length} launch-page panels (${SUITE_EN})`);
