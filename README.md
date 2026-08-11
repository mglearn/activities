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
- Hub search index:  `node build-search-index.js`

## Hub search

The landing-page search filters the area cards. A card on its own only knows its
own title, blurb, and `data-kw`, so searching for something plainly inside an
area — `photosynthesis`, `Shakespeare` — used to return "No areas match", which
reads as *the hub does not have this*.

`build-search-index.js` harvests what each area actually contains (the CTOB
catalog's `kw` blobs, the math catalog, and the pages themselves including
inline `<script>` data) and writes `search-index.js`:

```js
window.HUB_SEARCH = { "<card href>": "<searchable text>" }
```

`index.html` loads it deferred and folds each entry into that card's search
haystack on first search, so the page works with or without it. **Re-run it after
adding, renaming, or removing activities**, or the search silently goes stale.

`gtky/` and `sojourn/` are in their own repos and are not on disk here, so they
keep hand-written `data-kw` in `index.html` instead.

## External links

`Digital Math Tools` and the `Map Puzzle` generator remain in the `tcea` repo
and are linked root-relative (`/tcea/…`) from the hub.

`Getting to Know You` (`mglearn/gtky`) and `Suffrage Sojourn` (`mglearn/sojourn`)
are their own repos, deployed to `mglearn.github.io/gtky/` and
`mglearn.github.io/sojourn/`, and linked root-relative (`/gtky/`, `/sojourn/`)
from the hub. Suffrage Sojourn is a Vite/React build — its `vite.config.js` sets
`base: '/sojourn/'`, which must match the repo name.

Sibling repos pull in the hub's licensing footer with
`<script src="/activities/licensing-footer.js" defer></script>`. The path is
absolute and same-origin, so it resolves in production but not on a local dev
server.

## Licensing

Content CC BY-NC 4.0 · Code MIT. `licensing.html` is the authoritative page —
`licensing-footer.js` links every activity to it. Activities hosted in sibling
repos are covered by the same terms and are recorded under **Provenance** there.
