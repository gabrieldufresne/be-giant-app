# Next session prompt

Paste everything below the line into a new Claude Code session opened on this repo. Updated October 23, 2026, after Round 12.

---

You're picking up the Be Giant app prototype. I'm Gabriel at August Strategy, the design lead. Field Office is the build partner and will build the native iOS app. This repo is the high-fidelity, clickable prototype the client reviews and the developers build from. It is not production code.

## Get oriented first (do this before any edits)
1. Read `CLAUDE.md`. It has the file map, the `.dc.html` component format, the deploy steps and the house rules.
2. Read `docs/Be Giant App - PRD v2.md` from start to finish. It is the source of truth: the decisions log (D1 to D70), the feature inventory, the open questions and the round log (through Round 12 and its QA).
3. Read `docs/handoff/README.md`: the decisions index (D53 to D70, with where each lives and whether it's built), the build guidelines, and the change log. Then skim the area files (01 to 15). `14-author-profile.md` and `15-loading-errors-offline.md` are new.
4. Skim `docs/round-11/` and `docs/round-12/` (port script and phone QA lists). Older context: `docs/Round 9 plan.md` and `docs/round-9/`.
5. Start the server with `npm run dev` (port 3000; file:// won't work). `/` is the board (a canvas on desktop: pinch or Cmd + scroll to zoom, drag to pan, Shift+1 to fit); `/app.html` is the full-screen app at 390×844. Live: https://gabrieldufresne.github.io/be-giant-app/ (app on a phone, board on desktop; `#app` forces the app).
6. Tell me back, in under 15 lines, what you understand the app to be, what's live, and the top open items. Don't change anything yet.

## What the product is
Be Giant is a Canadian non-profit, non-partisan digital publication about the people, places, ideas and breakthroughs shaping Canada's future. Its journalism is solutions-oriented. The app is its direct line to readers and wins on depth, not reach. Adoption is the hard part, so onboarding, the reason to install and the notification opt-in matter most. The reader audience skews 55+.

## What's live now (main = round-12)
- **Onboarding:** Globe welcome, then topics (the three most-read pre-checked, D66), notifications (Light and Balance; the big story only when there is one, D68; compact quiet hours), free account (Apple, Google, magic link that works on any device, D67, or password) with an unticked newsletter checkbox (D62). About you asks city and age range only (no gender, D65).
- **Home:** 6d hero, Jump back in, Latest (3), Watch, Short stories (3), Popular (5), grey feed end with milestone and send-a-story cards; swipe-to-save hint. For You with the star and "Show me a bonus story".
- **Discover:** search, topics, trending, video, short stories, Near you, Discover by province. No Series or Pillars; no Series hub at all (D53).
- **Article:** reading tools and the native Sanity modules (D45 to D50) on twelve real stories. The byline and the end-of-story writer rows open author profiles; shared bylines open a writer chooser (D61).
- **Author profiles (D54):** match begiant.ca/author/{slug} plus Follow and Share; 24 real writers ported with `docs/round-11/port-authors.js`.
- **Newsletter (D62, D64, D70):** account-step checkbox, a one-time sheet after the second finished story, the article card, and Settings › Newsletter as its own screen. Guests confirm by email ("Almost there", "To confirm").
- **Other:** native share sheet, Video Feed and Grid, Saved with Edit and 5-second Undo, Settings hub, guest soft gates.
- **Board only:** loading (D55), errors and offline (D58), sign in and account errors (D59), sections 11 to 13. Explorations: P1.3 newsletter, P3.1 For You icon.

## Open items, roughly in priority order
1. **Approved, to build into the app view (Round 13):** G4 greeting on the first open of each day, tap to skip (D56); error and offline states (D58, ERR-01 to ERR-07); sign in and account errors, with Sign in from the welcome's "I already have an account" and a link on every soft-gate sheet (D59; ONB-25 to ONB-29, ONB-31, ONB-32; GATE-13). Loading (D55) stays a board spec.
2. **Must, not designed:** notification tap opens the article, including cold start and a removed story (NOTIF-17; can reuse ERR-05).
3. **Accessibility:** Reduce Motion for the Globe welcome and the remaining motion; a Dynamic Type pass (the 55+ audience).
4. **Waiting on Be Giant:** Q1 floating tab bar and Q2 Model 1 (August recommends both), Q3 Discover name, Q6 Video tab autoplay, Q16 minimum age (August recommends none). Q4 Listen vendor is Field Office's.
5. **Data work for Field Office and Be Giant:** Beehiiv confirmation email on for app signups (D64, API-01); a per-topic readership source for the pre-checks (D66, SCR-04); `article.sendAsBigStory` (D68, SCR-05); the place field and archive backfill (D69, SCR-01). FO-2 and FO-4 are open; FO-1, FO-3, FO-5 to FO-7 need confirming.
6. **Prompt pack, not yet run:** P5.1 tablet estimate (docs only, can run in parallel), P1.4 nudges, P1.5 walkthrough, P3.3 illustrated states (Maya; the error screens share one drawing), P4.1 to P4.3, then P5.2 to P5.4.
7. **Repo:** it's public, but `README.md` says the licensed fonts in `_ds/` need the repo private unless the licence allows it. Raise with me before anything else is shared.

## How we work
- One round = one numbered feedback list from me, one build pass, one documentation pass: PRD v2 (decisions log, feature inventory, open questions, round log) **and** `docs/handoff/` (area files with IDs and Last changed, the decisions index, a change-log entry at the top of its README). Never reuse or delete a handoff ID; mark it Removed. Structural changes first, polish second.
- New features go into the app view (`#app`) as well as the board, tested on real begiant.ca stories. Board-only work goes in board presets (`bs` states and `start=` presets in `bg-app-data.js`), never in the app's own flow.
- Branch per round (`round-N`). Commit with a short summary. **Only fast-forward `main` and push when I say "Approved"**; then wait for Pages to serve the new build and tell me it's live.
- After each round, write a numbered phone QA list in `docs/round-N/qa.md` (how to get to each item, what should happen). I reply with item numbers. Fixes from QA get a D number if they change a decision, a QA note in the PRD round log, and new QA items.
- When I ask for my open calls, ask them as multiple-choice questions with your recommendation first, then record the answers as D numbers.
- Keep every path relative. `.nojekyll` must stay. Never edit `support.js` or `_ds/`.
- Before calling something done, load it in the browser and check the console. The board canvas doesn't repaint while the browser pane is hidden: to check board phones, make a temporary page that mounts the phone with a `start=` preset (delete it before committing). Inline `//` comments inside a one-line `const` list break the component; use `/* */`.
- Ask me when a decision isn't in the PRD instead of guessing. Keep updates short: what changed, what to check, what's open.

## Code notes that save time
- `BeGiantAppPhone.dc.html` is one large component. `renderVals()` takes `baseVals()`, then adds `auVals()` (author profile, writer chooser) and `bsVals()` (board-only states), then the newsletter `newsVals()` when the `news` prop is set. The app and every board phone pass `news="ac"`. Add new values on new lines, never inside the long existing ones.
- Author profile: state `au`, `auUnder`, `auFrom`; `openAuthor(name)`, `closeAuthor`; writer data in `BGD.AUTH`. Refresh it with `node docs/round-11/port-authors.js` (reads public Sanity, project `l3tzmu37`).
- Newsletter state: `nl` ('yes', 'no', 'later', 'off'), `nlPend` (guest waiting to confirm), `nlEmail`.
- `BG App.dc.html`: `this._v` is the version-check toast; the board canvas uses `_bc…` names.
- Presets live in `PRE` in `bg-app-data.js` (`author*`, `load-*`, `err-*`, `acc-*`, `set-news*`, etc.). Story places are the `PLACES` map.
