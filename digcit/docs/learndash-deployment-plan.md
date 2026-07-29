# Deploying the Breakouts + Arcade in LearnDash (WordPress)

**Applies to both suites:** Digital Citizenship Breakouts (`digcit`) and Gen AI
Literacy Breakouts (`genailit`). Same engine, same steps.

**Do this on a COPY / staging site first** (clone the WordPress site or use a
staging environment), verify, then promote to production.

---

## 0. TL;DR

Each activity and arcade game is a **self-contained static page** (one HTML file +
its locale JS + shared `assets/`). It runs 100% client-side, needs no login, and
collects nothing. So we don't rebuild anything for LearnDash — we **host the static
files and embed them** in LearnDash lessons/topics via a responsive iframe, then
(optionally) wire **auto-completion** with a `postMessage` hook.

Recommended stack:
1. Host the built site on a subdomain or in `/wp-content/` (keep folder structure).
2. Embed each activity/game in a LearnDash **Topic** via a responsive iframe.
3. Add a `postMessage('ctob-complete')` on the win screen + a small parent-page
   listener that fires LearnDash "Mark Complete." (Or start with manual Mark Complete.)
4. Gate licensed content with normal LearnDash enrollment on the embedding lesson.

---

## 1. What we're deploying

| Content | Count / suite | Public? | Notes |
|---|---|---|---|
| Free featured lessons | 9 (grades K–8) | yes | fully playable |
| Licensed lessons | 9 (grades K–8) | gated | full per-grade breakouts |
| Arcade games | 3 (one per band) | yes | Kindness Catcher / Safe or Sketchy / Phish Tank (digcit); Robot or Real? / Double-Check Dash / Bias Buster (genailit) |

All are multilingual (7 languages, in-page 🌐 picker, RTL for Arabic/Urdu).

Student activity URLs look like `…/{band}/{id}-student.html`
(e.g. `gradek2/dc-gradeK-free-student.html`). Arcade: `…/arcade/{game}.html`.

---

## 2. Hosting options (pick one)

### Option A — Subdomain / static host (cleanest)
Serve the built `_site/` (or the repo) from e.g. `https://breakouts.YOURDOMAIN.org`.
- Keep the folder structure intact (pages use `../assets/…` and `locales/…`).
- Licensed content: host a **full** build (not the public `build-pages.js` output,
  which replaces licensed lessons with placeholders) at a path you only ever embed
  from inside enrolled LearnDash lessons.
- Pros: no WP routing conflicts, easy cache/CDN, one place to update.

### Option B — Inside WordPress `/wp-content/`
Upload the folder to `/wp-content/breakouts/{digcit|genailit}/…` via SFTP.
- The web server serves `.html`/`.js`/`.css` directly, bypassing WP.
- Reference as `/wp-content/breakouts/digcit/gradek2/dc-gradeK-free-student.html`.
- Pros: same origin as WP (simplifies `postMessage` origin checks); one backup.
- Cons: files live in the WP tree; redeploys are a file sync.

### Option C — GitHub Pages (fastest to pilot)
Embed the already-live free tier straight from `https://mglearn.github.io/activities/digcit/…`.
- Great for a quick proof-of-concept lesson tomorrow.
- Licensed content should NOT use the public Pages build (placeholders only).

> Decision to confirm: **which host** (A recommended for production; C for the pilot).

---

## 3. Embedding in LearnDash

LearnDash structure: **Course → Lesson → Topic**. Put one activity per **Topic**
(or per Lesson). In the Topic content, add a **Custom HTML** block:

```html
<div class="ctob-embed" style="position:relative;padding-top:135%;max-width:820px;margin:0 auto">
  <iframe
    src="https://breakouts.YOURDOMAIN.org/digcit/gradek2/dc-gradeK-free-student.html"
    style="position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:14px"
    loading="lazy" title="Be Kind Online" allow="fullscreen"></iframe>
</div>
```

- `padding-top` sets the aspect ratio (≈135% works for these; tune per game).
- The 🌐 language picker and gameplay work inside the iframe.
- Arcade games embed the same way (`…/arcade/kindness-catcher.html`).

### Optional: a shortcode so authors don't paste HTML
Add to a small site plugin or child theme `functions.php`:

```php
add_shortcode('ctob', function ($atts) {
  $a = shortcode_atts(['suite'=>'digcit','path'=>'','ratio'=>'135','title'=>'Breakout'], $atts);
  $base = 'https://breakouts.YOURDOMAIN.org/'; // or /wp-content/breakouts/
  $src  = esc_url($base . $a['suite'] . '/' . ltrim($a['path'],'/'));
  return '<div style="position:relative;padding-top:'.intval($a['ratio']).'%;max-width:820px;margin:0 auto">'
       . '<iframe src="'.$src.'" loading="lazy" title="'.esc_attr($a['title']).'" allow="fullscreen" '
       . 'style="position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:14px"></iframe></div>';
});
```
Then authors write: `[ctob suite="digcit" path="gradek2/dc-gradeK-free-student.html" title="Be Kind Online"]`

---

## 4. Completion tracking

A plain iframe does **not** tell LearnDash the student finished. Two levels:

### Level 1 — Manual (ship this first; zero code)
Enable the LearnDash **"Mark Complete" button** on the lesson/topic
(LearnDash → Settings, and per-lesson progression). Students play, then click
**Mark Complete**. Works today, good enough for the pilot.

### Level 2 — Automatic on win (postMessage → LearnDash)
Two small pieces:

**(a) Emit an event when the activity is solved.** Add to the engines
(`assets/breakout.js` at the point the win screen shows; `assets/arcade.js` in
`end()`), guarded so it's harmless outside an iframe:

```js
try {
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ type: 'ctob-complete', id: (window.BREAKOUT && window.BREAKOUT.id) || (window.ARCADE_DATA && window.ARCADE_DATA.id) }, '*');
  }
} catch (e) {}
```

**(b) Listen on the LearnDash page and mark complete.** In the site plugin /
child theme, enqueue a small script on LearnDash lesson/topic pages:

```js
window.addEventListener('message', function (e) {
  // SECURITY: restrict to your hosting origin
  if (e.origin !== 'https://breakouts.YOURDOMAIN.org') return;
  if (!e.data || e.data.type !== 'ctob-complete') return;
  // LearnDash renders a Mark Complete form; submit it programmatically:
  var btn = document.querySelector('.learndash_mark_complete_button, [name="learndash_mark_complete"]');
  if (btn) { btn.closest('form') ? btn.closest('form').submit() : btn.click(); }
});
```

- For a server-side/plugin approach instead, call
  `learndash_process_mark_complete( $user_id, $post_id, false, $course_id )`
  from an authenticated AJAX/REST endpoint the listener hits.
- Decide policy: mark complete on **first win**, or require a **score threshold**
  for arcade games (the arcade end screen has the score; include it in the message).

> Decision to confirm: **manual first, then auto?** and **what counts as "complete"**
> for arcade games (any win vs. a minimum score).

---

## 5. Access control for licensed content

- LearnDash enrollment already gates the **lesson page** that embeds the iframe.
  Only enrolled users reach the embed.
- Because the content is client-side, true DRM isn't possible — the access control
  is "only enrolled students see the page that loads it." That's the same model the
  suite already uses (the public site never ships licensed playables).
- Practical setup: host licensed files at a non-guessable path (Option A/B) and only
  ever embed them from enrolled lessons. Do **not** list those URLs publicly.

---

## 6. Cross-cutting notes

- **Privacy:** activities collect nothing; the language choice + arcade best score
  live in the student's browser `localStorage`. LearnDash's own login is separate and
  unaffected. Good for COPPA/FERPA posture.
- **Multilingual:** the in-iframe 🌐 picker works as-is. If you want the LMS UI language
  to drive it, pass `?lang=es` and have the engine read it (small enhancement).
- **Responsive/mobile:** the aspect-ratio wrapper handles resizing; test on phone.
- **Caching:** if hosting on a CDN/host, set sensible cache headers; bust on redeploy.
- **Accessibility:** keyboard play works (arrows in arcade, tab/enter in breakouts);
  keep the iframe `title` meaningful per lesson.

---

## 7. Step-by-step for tomorrow (on the copy)

1. **Choose host** (A/B/C). For the pilot, C (GitHub Pages) is instant.
2. **Build the content to host:**
   - Free tier is already built/live. For licensed, produce a **full** build
     (not `build-pages.js`, which placeholders licensed lessons). Simplest: copy the
     repo folders (`gradek2/`, `grade35/`, `grade68/`, `arcade/`, `assets/`) as-is —
     the raw student pages are fully playable.
3. **Upload** to the chosen host; verify a couple of URLs load and play.
4. **Create a test LearnDash Course** with 2–3 Topics.
5. **Embed** one free lesson, one licensed lesson, and one arcade game via the iframe
   block (or `[ctob]` shortcode).
6. **Manual completion:** enable Mark Complete; walk the course as a test student.
7. **(Optional) Auto-completion:** add the `postMessage` hook to the engines, deploy
   that build, add the listener script, retest that a win advances the course.
8. **Access test:** confirm a non-enrolled user can't reach the licensed embed page.
9. **Language test:** switch 🌐 to Arabic (RTL) and Chinese inside the iframe.
10. **Sign-off checklist** (below), then promote to production.

### Sign-off checklist
- [ ] Free lesson loads, plays to win, in an iframe
- [ ] Licensed lesson loads only for enrolled users
- [ ] Arcade game plays; best score persists
- [ ] Mark Complete records completion (manual)
- [ ] (If built) auto-complete fires on win, origin-checked
- [ ] 7 languages + RTL render correctly in the iframe
- [ ] Mobile/tablet layout OK
- [ ] No console errors; nothing collected

---

## 8. Optional helpers we can generate

- A **node script** that emits ready-to-paste iframe/shortcode snippets for all 36
  activities + 6 games (titles + correct paths, per suite).
- The **engine `postMessage` patch** (breakout + arcade) as a small, tested diff.
- A **tiny WP plugin** bundling the `[ctob]` shortcode + the completion listener,
  so nothing goes in the theme.
- A **full-build script** (`build-all.js`) that assembles a licensed-inclusive folder
  for hosting behind the LMS.

Ask and we'll build any of these before/at the session.

---

## 9. Open decisions to confirm tomorrow
1. Host: subdomain (A) vs `/wp-content/` (B) vs GitHub Pages pilot (C).
2. Completion: manual only, or add auto-complete on win?
3. Arcade "complete" rule: any win vs. minimum score.
4. Which suite(s) and how many lessons in the first LearnDash course.
5. Do we want the shortcode + WP plugin, or hand-placed iframes?
