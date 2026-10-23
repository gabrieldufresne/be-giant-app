# Next session prompt

Paste everything below the line into a new Claude Code session opened on this repo. Updated October 23, 2026.

---

You're picking up the Be Giant app prototype. I'm Gabriel at August Strategy, the design lead. Field Office is the build partner and will build the native iOS app. This repo is the high-fidelity, clickable prototype the client reviews and the developers build from. It is not production code.

## Get oriented first (do this before any edits)
1. Read `CLAUDE.md`. It has the file map, the `.dc.html` component format, the deploy steps and the house rules.
2. Read `docs/Be Giant App - PRD v2.md` from start to finish. It is the source of truth for decisions: the decisions log (D1 to D61), the feature inventory, the open questions (Q1 to Q16) and the round log (through Round 11, its calls and its QA).
3. Read `docs/handoff/README.md`, then skim the area files in `docs/handoff/`. That folder is the developer handoff: one file per area, stable element IDs, a Data column, a Sanity contract (`13-content-model.md`) and a change log. Field Office questions are numbered FO-1 to FO-7 inside the area files.
4. Skim `docs/Round 9 plan.md` (status of the Oct 19 prompt pack), the notes in `docs/round-9/` (one per prompt, plus the article-modules plan and QA list) and `docs/round-11/` (writer port script and phone QA list).
5. Start the server with `npm run dev` (serves on :3000; file:// won't work). Open `/` for the board (a canvas on desktop: pinch or Cmd + scroll to zoom, drag to pan, Shift+1 to fit) and `/app.html` for the full-screen app at 390×844. The live preview is https://gabrieldufresne.github.io/be-giant-app/.
6. Tell me back, in under 15 lines, what you understand the app to be, what's live, and the top open items. Don't change anything yet.

## What the product is
Be Giant is a Canadian non-profit, non-partisan digital publication about the people, places, ideas and breakthroughs shaping Canada's future. Its journalism is solutions-oriented. The app is its direct line to readers and wins on depth, not reach. Adoption is the hard part, so onboarding, the reason to install and the notification opt-in matter most. The reader audience skews 55+.

## What's live now
- **Onboarding:** Globe welcome, then three steps (topics with three pre-checked, notifications with Light and Balance and compact quiet hours, free account with Apple, Google, magic link or password). One bottom-anchored "Skip for now" on every step. About you exists with and without gender.
- **Home:** 6d hero, Jump back in, Latest (3), Watch, Short stories (3, stopwatch and read time), Popular (5), then the grey feed end with white milestone and send-a-story cards. A first-load swipe-to-save hint on the first Latest story. For You uses a star (not the sparkle) and ends with "Show me a bonus story".
- **Discover:** search, topics, trending, video, short stories, Near you and Discover by province. Series and Pillars are gone.
- **Article:** reading tools, and the article body rebuilt from the website's Sanity modules (D45 to D50: subheads, images, galleries with a full-screen viewer, video tap to play, parallax, pull quotes, related reads, newsletter card, callout). Twelve real begiant.ca stories, ported with `docs/round-9/port-article.py`, lead Home.
- **Author profiles (Round 11, D54, D61):** match begiant.ca/author/{slug} (name, bio, Learn more, Stories by…) plus Follow and Share. Open from the byline, the writer row at the end of a story and Settings › Following; shared bylines open a writer chooser. 24 real writers from Sanity, ported with `docs/round-11/port-authors.js`.
- **Other:** native iOS share sheet, Video Feed and Grid, Saved with Edit and a 5-second Undo everywhere, Settings hub, guest soft gates.
- **Board only, not in the app view:** loading (D55: launch screen, skeletons with a shimmer, option B wordmark line), errors and offline (D58), sign in and account errors (D59), board sections 11 to 13. Also the P1.3 newsletter placements (`explorations/P1.3 Newsletter.dc.html`) and the P3.1 For You icon options. The Series hub is removed from V1 (D53).
- **Prototype tooling:** a Refresh toast after each deploy, a solid status bar in home-screen mode (D34; the native build should do the Instagram-style top), Board and View as app chips on phones.

## Open items, roughly in priority order
1. **Approved, to build into the app view:** G4 greeting on the first open of each day, tap to skip (D56); error and offline states (D58, ERR-01 to ERR-07); sign in and account errors, with Sign in on the welcome and a link on each soft-gate sheet (D59, ONB-25 to ONB-29, ONB-31, ONB-32, GATE-13). Red stays on Get started only (D57).
2. **Must features not designed yet:** notification tap opening the article (including cold start).
3. **Decisions Be Giant owes:** newsletter (Q7, Q9, including CASL and double opt-in), gender (Q10), topic list and pre-checks (Q11), magic link and Microsoft (Q12), notification cadence and triggers (Q13), a location field in Sanity (Q14), Video tab autoplay (Q6). Also older ones still open: Q1 to Q4 and Q8 (Q5 closed by D60).
   Also: minimum age (Q16; August recommends none), floating tab bar (Q1) and Model 1 (Q2), both recommended by August.
4. **Field Office:** FO-2 and FO-4 are open; FO-1, FO-3, FO-5, FO-6 and FO-7 need confirming (see the handoff README change log).
5. **Prompt pack, not yet run:** P1.4 nudges, P1.5 walkthrough, P3.3 illustrated states, the rest of phase 2, P4.1 to P4.3, P5.1 tablet estimate (doc only, can run any time), then P5.2 to P5.4.
6. **Accessibility:** a reduced-motion version of the Globe welcome and the other motion (G4 and parallax already have one).

## How we work
- One round = one numbered feedback list from me, one build pass, then one documentation pass: PRD v2 (decisions log, feature inventory, round log) **and** `docs/handoff/` (affected area files with IDs and Last changed, plus a change-log entry at the top of its README). Never reuse or delete a handoff ID; mark it Removed. Structural changes first, polish second.
- New features go into the app view (`#app`) as well as the board, tested on real begiant.ca stories.
- Use a branch per round (`round-N`). Commit with a short summary. When I approve, fast-forward `main` and push; GitHub Pages redeploys and I check on my phone.
- For big parallel work, one agent per prompt in its own worktree, merged by the coordinating session after my review. Options I need to compare go in `explorations/` first.
- Keep every path relative. `.nojekyll` must stay, or Pages hides `_ds/`. Never edit `support.js` or `_ds/`.
- Before calling something done, load it in the browser (board and `/app.html` at 390×844) and check the console for errors. For anything iOS-specific (status bar, keyboard, home-screen mode), check in the iOS Simulator.
- Ask me when a decision isn't in the PRD instead of guessing. Keep updates short: what changed, what to check, what's open.

## Code notes that save time
- `BeGiantAppPhone.dc.html` is one large component. `renderVals()` wraps `baseVals()` and adds the P1.3 `newsVals()` only when `news` is set. Add new values on new lines, never inside the long existing ones.
- `BG App.dc.html`: `this._v` belongs to the version-check toast; the board canvas uses `_bc…` names. The swipe hint plays once per app launch in the prototype (sessionStorage); the build should play it once per install.
- Board-only states use `start=` presets in `bg-app-data.js` (`PRE`). Story places (for Near you) are the `PLACES` map in the same file.
