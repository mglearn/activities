# Learning Activities Hub

A single home for self-contained, browser-based classroom activities in seven
languages — no logins, no data collected. Published at
**https://mglearn.github.io/activities/**.

## Areas

| Path            | Area                              | Grades | Source (pre-consolidation) |
|-----------------|-----------------------------------|--------|----------------------------|
| `ctobs/`        | Critical Thinking Breakouts (CTOBs) | K–12 | `tcea/activities/` |
| `pst/`          | Problem-Solving Teaching (PBL units) | 3–8 | `tcea/pst/` |
| `relic-rooms/`  | Relic Rooms (investigation activities) | — | `tcea/relic-rooms/` |
| `digcit/`       | Digital Citizenship Breakouts     | K–8    | `digcit` repo |
| `genailit/`     | Gen AI Literacy Breakouts         | K–8    | `genailit` repo |

The root `index.html` is the unified landing. `404.html` forwards a couple of
legacy internal path shapes (e.g. `/activities/breakouts/*` → `/activities/ctobs/*`).

## Shared i18n engine

The single canonical seven-language engine lives at `ctobs/assets/i18n.js`.
`relic-rooms/` and `pst/` load it via relative paths (`../ctobs/assets/…`,
`../../ctobs/assets/…`). Starter-kit copies are kept self-contained on purpose.

## Rebuilding

- CTOB catalog:  `node ctobs/build-catalog.js`
- CTOB catalog i18n:  `node ctobs/build-catalog-i18n.js`

## External links

`Digital Math Tools` and the `Map Puzzle` generator remain in the `tcea` repo
and are linked root-relative (`/tcea/…`) from the hub.

## Licensing

Content CC BY-NC 4.0 · Code MIT.
