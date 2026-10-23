/* Google Classroom Edition — completion codes.
   Loaded after assets/breakout.js on every student page. Does not modify the
   shared engine: it watches the win screen (#win.show) and adds a panel where
   the student types their name and gets a code to paste into their Classroom
   assignment. The code is computed in the browser from the activity id + the
   normalized name; nothing is stored or sent anywhere.

   Code format: <PREFIX>-XXXX-XXXX, e.g. AI3F-7KQ2-M9TD
     PREFIX = suite letters + grade (+ F for the free featured lesson),
     derived from BREAKOUT.id ("ai-grade3-free" -> "AI3F").
   This is a light-touch completion check, not secure proctoring: the code is
   tied to the student's name, so codes can't be passed around, but the
   algorithm is client-side by design (no accounts, no server).

   Also exposes window.CTOBCode = { make, parse, normName } for the teacher's
   classroom-check.html page, which loads this file without a BREAKOUT. */
(function () {
  'use strict';
  const SALT = 'ctob-gc-v1';
  const ALPHA = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'; // Crockford base32: no I L O U

  // Case, spacing, accents, punctuation and word order never matter:
  // "José  García-Ruiz", "jose garcia ruiz" and "Garcia Ruiz, Jose" give the
  // same code. Letters of any script are kept.
  function normName(s) {
    return String(s || '').normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase()
      .split(/[^\p{L}\p{N}]+/u).filter(Boolean).sort().join('');
  }
  // cyrb53 — small, well-distributed 53-bit string hash.
  function hash(str) {
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) {
      const c = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ c, 2654435761); h2 = Math.imul(h2 ^ c, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  }
  function prefixFor(id) {
    const m = /^([a-z]+)-grade([0-9k])(-free)?$/i.exec(id);
    return m ? (m[1] + m[2] + (m[3] ? 'F' : '')).toUpperCase() : String(id).replace(/[^a-z0-9]/gi, '').slice(0, 6).toUpperCase();
  }
  function idFor(prefix) {
    const m = /^([A-Z]+?)([0-9K])(F?)$/.exec(prefix);
    return m ? m[1].toLowerCase() + '-grade' + m[2] + (m[3] ? '-free' : '') : null;
  }
  function make(id, name) {
    const n = normName(name);
    if (n.length < 2) return null;
    let x = hash(SALT + '|' + id + '|' + n), body = '';
    for (let i = 0; i < 8; i++) { body += ALPHA[x % 32]; x = Math.floor(x / 32); }
    return prefixFor(id) + '-' + body.slice(0, 4) + '-' + body.slice(4);
  }
  // Pull a code out of free text ("Maria Lopez AI3F-7kq2-m9td") -> {code, id, rest}.
  function parse(text) {
    const m = /\b([A-Z]{1,6}[0-9K]F?)-?([0-9A-Z]{4})-?([0-9A-Z]{4})\b/i.exec(String(text || ''));
    if (!m) return null;
    const prefix = m[1].toUpperCase();
    const fix = s => s.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1');
    return { code: prefix + '-' + fix(m[2]) + '-' + fix(m[3]), id: idFor(prefix), rest: (text.slice(0, m.index) + ' ' + text.slice(m.index + m[0].length)).trim() };
  }
  window.CTOBCode = { make, parse, normName, prefixFor, idFor };

  const B = window.BREAKOUT;
  const win = document.getElementById('win');
  if (!B || !win) return;

  // AI-seeded translations, pending native-speaker review (same as the suite).
  const UI = {
    en: { h: 'Get your completion code', label: 'Type your first and last name, exactly as it shows in Google Classroom:', ph: 'First and last name', btn: 'Show my code', need: 'Please type your first and last name.', your: 'Your completion code:', copy: 'Copy code', copied: 'Copied!', next: 'Paste this code into your Google Classroom assignment, then click Turn in.', priv: 'Your name stays on this device. It is not saved or sent anywhere.', press: 'Press Ctrl+C (or ⌘+C) to copy.' },
    es: { h: 'Obtén tu código de finalización', label: 'Escribe tu nombre y apellido, tal como aparecen en Google Classroom:', ph: 'Nombre y apellido', btn: 'Mostrar mi código', need: 'Por favor, escribe tu nombre y apellido.', your: 'Tu código de finalización:', copy: 'Copiar código', copied: '¡Copiado!', next: 'Pega este código en tu tarea de Google Classroom y luego haz clic en Entregar.', priv: 'Tu nombre se queda en este dispositivo. No se guarda ni se envía a ningún lugar.', press: 'Pulsa Ctrl+C (o ⌘+C) para copiar.' },
    vi: { h: 'Nhận mã hoàn thành của em', label: 'Hãy gõ họ và tên của em, đúng như trên Google Classroom:', ph: 'Họ và tên', btn: 'Hiện mã của em', need: 'Hãy gõ họ và tên của em.', your: 'Mã hoàn thành của em:', copy: 'Sao chép mã', copied: 'Đã sao chép!', next: 'Dán mã này vào bài tập trên Google Classroom, rồi bấm Nộp bài.', priv: 'Tên của em chỉ ở trên thiết bị này. Tên không được lưu hay gửi đi đâu cả.', press: 'Nhấn Ctrl+C (hoặc ⌘+C) để sao chép.' },
    ar: { h: 'احصل على رمز الإنجاز', label: 'اكتب اسمك الأول واسم العائلة كما يظهران في Google Classroom:', ph: 'الاسم الأول واسم العائلة', btn: 'اعرض رمزي', need: 'من فضلك اكتب اسمك الأول واسم العائلة.', your: 'رمز الإنجاز الخاص بك:', copy: 'انسخ الرمز', copied: 'تم النسخ!', next: 'الصق هذا الرمز في مهمتك على Google Classroom، ثم انقر على «تسليم».', priv: 'يبقى اسمك على هذا الجهاز فقط. لا يتم حفظه أو إرساله إلى أي مكان.', press: 'اضغط Ctrl+C (أو ⌘+C) للنسخ.' },
    hi: { h: 'अपना पूरा होने का कोड पाएँ', label: 'अपना पहला और अंतिम नाम वैसे ही लिखें जैसे वह Google Classroom में दिखता है:', ph: 'पहला और अंतिम नाम', btn: 'मेरा कोड दिखाएँ', need: 'कृपया अपना पहला और अंतिम नाम लिखें।', your: 'आपका पूरा होने का कोड:', copy: 'कोड कॉपी करें', copied: 'कॉपी हो गया!', next: 'यह कोड अपने Google Classroom असाइनमेंट में पेस्ट करें, फिर "सबमिट करें" (Turn in) पर क्लिक करें।', priv: 'आपका नाम इसी डिवाइस पर रहता है। इसे कहीं सहेजा या भेजा नहीं जाता।', press: 'कॉपी करने के लिए Ctrl+C (या ⌘+C) दबाएँ।' },
    ur: { h: 'اپنا تکمیل کا کوڈ حاصل کریں', label: 'اپنا پہلا اور آخری نام بالکل ویسے ہی لکھیں جیسے وہ Google Classroom میں نظر آتا ہے:', ph: 'پہلا اور آخری نام', btn: 'میرا کوڈ دکھائیں', need: 'براہِ کرم اپنا پہلا اور آخری نام لکھیں۔', your: 'آپ کا تکمیل کا کوڈ:', copy: 'کوڈ کاپی کریں', copied: 'کاپی ہو گیا!', next: 'یہ کوڈ اپنے Google Classroom اسائنمنٹ میں پیسٹ کریں، پھر Turn in (جمع کروائیں) پر کلک کریں۔', priv: 'آپ کا نام صرف اسی ڈیوائس پر رہتا ہے۔ اسے کہیں محفوظ یا بھیجا نہیں جاتا۔', press: 'کاپی کرنے کے لیے Ctrl+C (یا ⌘+C) دبائیں۔' },
    zh: { h: '获取你的完成码', label: '请输入你的名字和姓氏，要和 Google Classroom 里显示的一样：', ph: '名字和姓氏', btn: '显示我的完成码', need: '请输入你的名字和姓氏。', your: '你的完成码：', copy: '复制完成码', copied: '已复制！', next: '把这个完成码粘贴到你的 Google Classroom 作业里，然后点击“提交”。', priv: '你的名字只留在这台设备上，不会被保存或发送到任何地方。', press: '按 Ctrl+C（或 ⌘+C）复制。' },
  };
  const lang = () => (window.BreakoutI18n && BreakoutI18n.getLang()) || 'en';
  const t = k => (UI[lang()] || UI.en)[k] || UI.en[k];

  const css = document.createElement('style');
  css.textContent = `
  .gc-box{margin:16px 0 14px;padding:14px 16px;border:2px dashed var(--line,#cbd5e1);border-radius:14px;background:var(--paper,#f8fafc);text-align:start}
  .gc-box h3{margin:0 0 6px;font-size:1.05rem}
  .gc-box label{display:block;font-size:.92rem;margin-bottom:8px}
  .gc-row{display:flex;gap:8px;flex-wrap:wrap}
  .gc-row input{flex:1 1 180px;min-width:0;font:inherit;padding:10px 12px;border:2px solid var(--line,#cbd5e1);border-radius:10px}
  .gc-row button,.gc-copy{font:inherit;font-weight:800;padding:10px 14px;border:0;border-radius:10px;background:var(--navy,#1e3a8a);color:#fff;cursor:pointer}
  .gc-msg{color:var(--red,#b91c1c);font-size:.88rem;min-height:1.2em;margin:6px 0 0}
  .gc-out{margin-top:10px}
  .gc-code{display:inline-block;font:700 1.45rem/1.2 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.06em;direction:ltr;unicode-bidi:isolate;background:#fff;border:2px solid var(--navy,#1e3a8a);border-radius:10px;padding:6px 12px;margin:4px 8px 4px 0;user-select:all}
  .gc-next{font-weight:700;margin:8px 0 0}
  .gc-priv{font-size:.82rem;color:var(--ink-soft,#4b5a78);margin:8px 0 0}
  .gc-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
  .win-card{max-height:92vh;overflow-y:auto}`;
  document.head.appendChild(css);

  let box = null, code = null;
  function build() {
    box = document.createElement('div');
    box.className = 'gc-box'; box.id = 'gcBox';
    box.innerHTML = `<h3 data-k="h"></h3>
      <label for="gcName" data-k="label"></label>
      <div class="gc-row"><input id="gcName" type="text" autocomplete="off" autocapitalize="words" spellcheck="false" maxlength="80"><button type="button" id="gcGo" data-k="btn"></button></div>
      <p class="gc-msg" id="gcMsg" role="alert"></p>
      <div class="gc-out" id="gcOut" hidden>
        <div data-k="your"></div>
        <span class="gc-code" id="gcCode"></span><button type="button" class="gc-copy" id="gcCopy" data-k="copy"></button>
        <p class="gc-next" data-k="next"></p>
      </div>
      <p class="gc-priv" data-k="priv"></p>
      <p class="gc-sr" id="gcSr" role="status" aria-live="polite"></p>`;
    const replay = document.getElementById('winReplay');
    replay.parentNode.insertBefore(box, replay);
    const name = box.querySelector('#gcName');
    const go = () => {
      code = B.id ? make(B.id, name.value) : null;
      box.querySelector('#gcMsg').textContent = code ? '' : t('need');
      box.querySelector('#gcOut').hidden = !code;
      if (code) box.querySelector('#gcCode').textContent = code;
      // Spell the code out for screen readers ("A I 3 F, 4 9 M E, …").
      box.querySelector('#gcSr').textContent = code ? t('your') + ' ' + code.split('-').map(p => p.split('').join(' ')).join(', ') : '';
    };
    box.querySelector('#gcGo').onclick = go;
    name.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
    name.addEventListener('input', () => { box.querySelector('#gcOut').hidden = true; });
    box.querySelector('#gcCopy').onclick = () => {
      const btn = box.querySelector('#gcCopy');
      const done = () => { btn.textContent = t('copied'); box.querySelector('#gcSr').textContent = t('copied'); setTimeout(() => { btn.textContent = t('copy'); }, 1800); };
      // Clipboard can be blocked (http, permissions, older Safari): select the code and say how to copy it.
      const manual = () => { const r = document.createRange(); r.selectNodeContents(box.querySelector('#gcCode')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); box.querySelector('#gcMsg').textContent = t('press'); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code).then(done, manual);
      else manual();
    };
    label();
  }
  function label() {
    if (!box) return;
    box.querySelectorAll('[data-k]').forEach(el => { el.textContent = t(el.dataset.k); });
    box.querySelector('#gcName').placeholder = t('ph');
    const msg = box.querySelector('#gcMsg');
    if (msg.textContent) msg.textContent = code ? t('press') : t('need');
  }
  function clear() {
    if (!box) return;
    code = null;
    box.querySelector('#gcName').value = '';
    box.querySelector('#gcMsg').textContent = '';
    box.querySelector('#gcSr').textContent = '';
    box.querySelector('#gcOut').hidden = true;
  }

  new MutationObserver(() => {
    if (win.classList.contains('show')) { if (!box) build(); }
    else clear();
  }).observe(win, { attributes: true, attributeFilter: ['class'] });
  window.addEventListener('breakout-i18n:changed', label);
})();
