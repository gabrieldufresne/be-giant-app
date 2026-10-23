# Working rules for this project

## What this is
A clickable, high-fidelity prototype of the Be Giant iOS news app. It is plain static HTML/JS (no build step). It is a design reference and a testable prototype, not production code.

- `BG App.dc.html` — the review board AND the shareable app. On a phone (coarse pointer, width ≤ 540), with `#app` in the URL, or via the "View as app" button, it shows the single full-screen app.
- `BeGiantAppPhone.dc.html` — the app itself. One component, used by every phone on the board. All screens are sections inside it.
- `bg-app-data.js` — stories, imagery, videos, onboarding content, presets.
- `support.js` — the runtime that renders `.dc.html` files (loads React 18 from unpkg). Do not edit.
- `ios-frame.js` — device bezel used on the board.
- `_ds/` — Be Giant design system bundle: tokens, fonts, components. Do not edit; upstream is `field-office/client-giant`.
- `assets/` — Phosphor light/fill icons, imagery, illustrations, gradients, app icon. `uploads/` — the three short-form videos.
- `docs/handoff/` — the developer handoff: master build spec for Field Office, one file per area with stable element IDs, plus a change log in its README.
- `docs/` — PRD v2 (source of truth for decisions), strategic foundation, original wireflow PRD, decision roadmap, the Oct 19 prompt pack and `Round 9 plan.md`. `docs/round-9/` holds one notes file per prompt.
- `explorations/` — standalone `.dc.html` pages that compare options (P1.3 newsletter, P3.1 For You icon). Nothing in them changes the app until an option is picked.

## Running
`npm run dev` (or `npx serve .`) then open http://localhost:3000. Must be served over http — opening the file directly (file://) will not load the phone component.

On desktop the board is a canvas: pinch or Cmd + scroll to zoom, drag the background to pan, Shift+1 to fit.

## Deploying
Work on a round branch (`round-N`). When Gabriel approves, fast-forward `main` to it and push; GitHub Pages serves `main` at https://gabrieldufresne.github.io/be-giant-app/ within a minute or two, and open copies of the app offer a Refresh toast. `.nojekyll` must stay.

## How `.dc.html` files work
Each file is a full HTML page: `<head>` loads `support.js`; the body holds an `<x-dc>` template plus a `<script data-dc-script>` logic class (`class Component extends DCLogic`).
- Template holes are dotted lookups only: `{{ item.title }}`. No expressions in holes; compute in `renderVals()`.
- Loops/conditions: `<sc-for list="{{ items }}" as="item">`, `<sc-if value="{{ flag }}">`.
- Child components: `<dc-import name="BeGiantAppPhone" ...></dc-import>` mounts the sibling file of that name.
- Styling is inline `style="…"` only. Pseudo-states via `style-hover`, `style-active`. `<helmet>` holds only font/keyframe/reset CSS and script tags.
- `renderVals()` returns everything the template reads (values, arrays, handlers).

## Rules
- Source of truth: `docs/Be Giant App - PRD v2.md`. Read it at the start of a round. Update its decisions log, feature inventory and round log at the end of every round.
- Keep `docs/handoff/` current in the same pass: update the affected area files (new or changed element IDs, Last changed), and add a change-log entry at the top of `docs/handoff/README.md` naming the IDs and the other areas affected. Never reuse or delete an ID; mark it Removed.
- New features go into the app view (`#app`) as well as the board, tested on real begiant.ca stories ported with `docs/round-9/port-article.py`.
- Prefer targeted edits to `BeGiantAppPhone.dc.html`. Do not rewrite it unless asked. New screens are new sections inside it.
- Batch edits for a round into as few passes as possible. Structural changes first, polish second.
- Before a large rebuild, snapshot to `BeGiantAppPhone-backup.dc.html` (git-ignored); delete once approved. Prefer a git branch instead.
- Visual rules: Be Giant design system, white pages, hairline rules #E6E6E6, square media, rounded only for controls.
- Cream (#FAF7F0) is allowed as a page option on articles and for the unfinished-profile strip and topic nudge. The end-of-Home cards (milestone, send-a-story) are white on the grey feed end.
- Floating cards are the one exception to the square rule: 12px card radius, 6px media inside. In-feed content, rows and media stay square.
- Feed ends (Home, For You) sit on a light grey surface below the white feed.
- Serif (Serrif Condensed) for editorial, never bold. Gibson for everything else. Sentence case headlines; uppercase only for chrome. No emoji. Canadian spelling.
- Icons: Phosphor light from `assets/light/`. Do not draw SVG icons.
- Keep every asset path relative. The site is deployed as static files (GitHub Pages), so a broken relative path breaks the phone build.
