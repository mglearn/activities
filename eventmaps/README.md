# History Event Maps

24 reusable, one-page social studies graphic organizers for grades 3–5, 6–8,
and 9–12. Published at **https://mglearn.github.io/activities/eventmaps/**.

## What this is

- Printable event maps — organizers, not lessons or units
- Eight maps per grade band, each built around one thinking skill
- Seven languages: English, Spanish, Vietnamese, Arabic, Simplified Chinese, Urdu, Hindi
- Grayscale, US Letter landscape; box roles are carried by border *style*, not
  colour, so one monochrome print works on any classroom copier
- TEKS-aligned by reusable Social Studies Skills focus
- Static HTML/CSS/JS, no login, no data collection

## Layout

```
index.html          the 24-map library, filterable by grade band / skill / search
organizer.html?map= one sheet, full size, for screen and print
about.html          about / how to use / standards / privacy / accessibility
assets/
  data.js           24 maps + 7 locales (the map library's own dictionary)
  i18n-chrome.js    the Activities-hub chrome strings layered on top
  i18n.js           the shared hub i18n engine (canonical copy: ctobs/assets/i18n.js)
  chrome.js         merges the two dictionaries, registers them, wires back-to-top
  sheet.js          pure (map, lang) -> sheet HTML renderer
  sheet.css         the printable sheet
  sheet-print.css   @page rules — organizer.html only, never the hub
  eventmaps.css     hub chrome (activities design system)
  hub.js            the library page
pdf/<map>/<lang>/bw.pdf   168 single sheets
pdf-packets/              7 full-library packets (24 pages)
pdf-band-packets/         21 grade-band packets (8 pages)
```

## Thumbnails are the real sheet

The library cards do not use preview images. Each card renders the *actual*
organizer via `sheet.js` and scales it to card width with a CSS transform, so a
thumbnail cannot drift out of sync with the map it previews, and it re-renders
in whatever language the reader picked. The card blurb is likewise read back
out of the rendered layout — it lists the prompts genuinely printed on that
sheet.

This is also why `sheet.css` states `box-sizing`, margins, and `text-align`
explicitly, and why the hub's footer rules are scoped to `.wrap > footer`: the
sheet carries its own `<header>` and `<footer>`, and a bare element selector in
the page chrome silently reaches into all 24 thumbnails and the printout.

## Language

The picker uses the hub's shared engine, so the language a teacher chose in
CTOBs, PlotPoint, or lab-safety carries into this area (`tcea.breakouts.lang`),
and `?lang=es` share links work. Arabic and Urdu render right-to-left, sheets
included.

## Regenerating the PDFs

```bash
python3 generate_packets.py
```

Renders each language's 24-page packet with headless Chrome from the same
`assets/` files the site loads, then splits it into single sheets and grade-band
packets. Requires `pypdf` and Chrome/Chromium on PATH.

**Re-run it after editing `data.js`, `sheet.js`, `sheet.css`, or
`sheet-print.css`** — otherwise the downloads drift away from what the site
shows. The splitter fails loudly if a sheet overflows onto a second page.

## Current TEKS basis

Aligned to the 2022-adopted Texas Social Studies TEKS implemented beginning in
2024–2025. The Texas Education Agency is revising the Social Studies TEKS, so
exact codes should be reviewed when new standards take effect. Alignment here
emphasizes the recurring Social Studies Skills strand: source use, chronology,
sequencing, cause/effect, comparison, historical context, point of view,
geographic interpretation, claims/evidence, and written/visual communication.

See `TEKS_ALIGNMENT.md` for the reference table.

## Privacy

No accounts, cookies, forms, analytics, or student data. The only thing stored
in the browser is the language preference.
