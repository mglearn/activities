#!/usr/bin/env node
/* ============================================================
   CER & ACE Case Files — design-canvas artboards

   Emits one .dc.html artboard per page archetype, built from
   exactly the same renderers and stylesheet as the PDFs, so the
   canvas and the printables can never disagree. Writes into a
   directory you pass on the command line:

     node src/build-canvas.js /path/to/canvas-dir

   The images must already be in that directory (downsampled —
   the canvas republishes whole on every save).
   ============================================================ */

const fs = require('fs');
const path = require('path');
const C = require('./content.js');

const OUT = process.argv[2];
if (!OUT) { console.error('usage: build-canvas.js <out-dir>'); process.exit(1); }

const B = require('./page-parts.js');

/* The print stylesheet, retargeted from local TTFs to Google Fonts
   and from the print body to a transparent artboard. */
function canvasCss() {
  let css = fs.readFileSync(path.join(__dirname, 'print.css'), 'utf8');
  css = css.replace(/@font-face \{[^}]*\}\n?/g, '');
  css = css.replace(/font-family: Zilla, Georgia, serif/g, "font-family: 'Zilla Slab', Georgia, serif");
  css = css.replace(/font-family: Zilla,/g, "font-family: 'Zilla Slab',");
  css = css.replace(/font-family: Plex, 'Courier New', monospace/g, "font-family: 'IBM Plex Mono', 'Courier New', monospace");
  css = css.replace(/font-family: Plex, monospace/g, "font-family: 'IBM Plex Mono', monospace");
  css = css.replace(/font-family: SS3, 'Source Sans Pro'/g, "font-family: 'Source Sans 3', 'Source Sans Pro'");
  css = css.replace(/font-family: SS3, sans-serif/g, "font-family: 'Source Sans 3', sans-serif");
  /* The artboard IS the sheet; drop the print-preview desk around it. */
  css = css.replace(/@page \{[^}]*\}\n?/, '');
  css = css.replace(/@media screen \{[\s\S]*?\n\}\n/, '');
  css = css.replace(/background: #8a857e;/, 'background: transparent;');
  return css;
}

const CSS = canvasCss();

function artboard(name, inner, accentVar) {
  const isAce = accentVar === 'ace';
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap">
  <style>
${CSS}
  a { color: #8F3222; }
  a:hover { color: #241E1A; }
  html, body { width: 816px; height: 1056px; overflow: hidden; }
  </style>
</helmet>
<div class="sheet${isAce ? ' doc-ace' : ''}" style="--accent: {{accent}}; --accent-lt: {{accentLt}}; --accent-wash: {{accentWash}};">
${inner}
</div>
</x-dc>
<script data-dc-script data-props='{"accent":{"editor":"color","default":"${isAce ? '#17559B' : '#8F3222'}","options":["#8F3222","#17559B","#0A6B52","#5B3FA5"],"section":"Case file"},"$preview":{"width":816,"height":1056}}'>
class Component extends DCLogic {
  /* One accent runs the whole sheet: the spine rule, the case chip,
     the section kickers, the response bars. Tint and wash are derived
     so a viewer only ever picks one colour. */
  renderVals() {
    const hex = this.props.accent ?? '${isAce ? '#17559B' : '#8F3222'}';
    return { accent: hex, accentLt: this.mix(hex, 0.42), accentWash: this.mix(hex, 0.90) };
  }
  mix(hex, t) {
    const n = parseInt(hex.replace('#', ''), 16);
    const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    const m = (c) => Math.round(c + (252 - c) * t);
    return '#' + [m(r), m(g), m(b)].map((c) => c.toString(16).padStart(2, '0')).join('');
  }
}
</script>
</body>
</html>
`;
}

/* The renderers emit <section class="page">; on the canvas the sheet
   wrapper carries the accent, so unwrap one level. */
const unwrap = (html) => html
  .replace(/^\s*<section class="page([^"]*)">/, '<div class="page$1">')
  .replace(/<\/section>\s*$/, '</div>')
  .replace(/src="\.\.\/\.\.\/assets\//g, 'src="./');

const boards = [
  ['Main',         unwrap(B.teacherCover()),                                        'cer'],
  ['StudentCover', unwrap(B.studentCover('CER')),                                   'cer'],
  ['Investigation', unwrap(B.pageOne(C.CASES[0], 'CER', 5)),                        'cer'],
  ['ResponseCER',  unwrap(B.pageTwo(C.CASES[0], 'CER', 6)),                         'cer'],
  ['ResponseACE',  unwrap(B.pageTwo(C.CASES[0], 'ACE', 6)),                         'ace'],
  ['TeacherCase',  unwrap(B.teacherCasePage(C.CASES[0], 4)),                        'cer'],
];

fs.mkdirSync(OUT, { recursive: true });
boards.forEach(([name, inner, acc]) => {
  fs.writeFileSync(path.join(OUT, `${name}.dc.html`), artboard(name, inner, acc));
});

/* Two rows: the teacher's covers and case page above, the student
   sheets below, so the pair of response formats sit side by side. */
const W = 816, H = 1056, GAP = 120;
const canvas = {
  artboards: [
    { file: 'Main.dc.html',          title: 'Teacher guide · cover',   x: 0,                 y: 0,        w: W, h: H },
    { file: 'TeacherCase.dc.html',   title: 'Teacher guide · a case',  x: W + GAP,           y: 0,        w: W, h: H },
    { file: 'StudentCover.dc.html',  title: 'Student packet · cover',  x: 2 * (W + GAP),     y: 0,        w: W, h: H },
    { file: 'Investigation.dc.html', title: 'Student · Page 1',        x: 0,                 y: H + GAP,  w: W, h: H },
    { file: 'ResponseCER.dc.html',   title: 'Student · Page 2 · CER',  x: W + GAP,           y: H + GAP,  w: W, h: H },
    { file: 'ResponseACE.dc.html',   title: 'Student · Page 2 · ACE',  x: 2 * (W + GAP),     y: H + GAP,  w: W, h: H },
  ].map((a) => ({ ...a, print: 'fixed' })),
  annotations: [
    {
      id: 'brief',
      x: 0, y: -190, w: 640,
      text: 'CER & ACE Case Files — case-file dossier.\nZilla Slab display · IBM Plex Mono labels · Source Sans 3 body.\nOxblood for CER, indigo for ACE; manila and warm ink throughout.\nThe accent chip above each artboard recolours that whole sheet.',
    },
  ],
  launch: { view: 'canvas' },
};
fs.writeFileSync(path.join(OUT, 'canvas.json'), JSON.stringify(canvas, null, 2));

console.log(`${boards.length} artboards + canvas.json → ${OUT}`);
