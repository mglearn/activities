#!/usr/bin/env node
/* ============================================================
   CER & ACE Case Files — document builder
   Renders the teacher guide and both student packets to HTML,
   then drives headless Chrome to produce print-ready PDFs with
   selectable text.

     node src/build.js          # HTML + PDFs
     node src/build.js --html   # HTML only (fast iteration)
   ============================================================ */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const C = require('./content.js');
const B = require('./page-parts.js');
const { esc } = B;

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'files');
const WORK = path.join(__dirname, '.work');

/* ---------- document wrapper ---------- */

function doc(title, pages, cls) {
  return `<!doctype html>
<html lang="en" class="${cls}">
<head>
<meta charset="utf-8">
<title>${esc(title)}</title>
<link rel="stylesheet" href="../print.css">
</head>
<body>
${pages.join('\n')}
</body>
</html>`;
}

/* ---------- run ---------- */

const CHROME = ['/usr/bin/google-chrome', '/opt/google/chrome/chrome', '/usr/bin/chromium']
  .find((p) => fs.existsSync(p));

function toPdf(htmlPath, pdfPath) {
  if (!CHROME) throw new Error('No Chrome binary found — cannot render PDFs.');
  execFileSync(CHROME, [
    '--headless=new', '--disable-gpu', '--no-sandbox',
    '--no-pdf-header-footer',
    '--virtual-time-budget=20000',
    `--print-to-pdf=${pdfPath}`,
    `file://${htmlPath}`,
  ], { stdio: ['ignore', 'ignore', 'pipe'] });
}

function main() {
  fs.mkdirSync(OUT, { recursive: true });
  fs.mkdirSync(WORK, { recursive: true });

  const docs = [
    ['CER_ACE_Case_Files_Teacher_Guide',
      doc('CER & ACE Case Files — Teacher Guide', B.teacherGuidePages(), '')],
    ['CER_Case_Files_Student_Packet',
      doc('CER Case Files — Student Packet', B.studentPacketPages('CER'), '')],
    ['ACE_Case_Files_Student_Packet',
      doc('ACE Case Files — Student Packet', B.studentPacketPages('ACE'), 'doc-ace')],
  ];

  for (const [name, html] of docs) {
    const htmlPath = path.join(WORK, `${name}.html`);
    fs.writeFileSync(htmlPath, html);
    process.stdout.write(`${name}.html  ${(html.length / 1024).toFixed(0)} KB`);
    if (!process.argv.includes('--html')) {
      const pdfPath = path.join(OUT, `${name}.pdf`);
      toPdf(htmlPath, pdfPath);
      const kb = (fs.statSync(pdfPath).size / 1024).toFixed(0);
      process.stdout.write(`  →  ${name}.pdf  ${kb} KB`);
    }
    process.stdout.write('\n');
  }
}

main();
