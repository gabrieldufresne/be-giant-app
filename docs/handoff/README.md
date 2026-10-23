# Be Giant app: developer handoff

**For:** Field Office (build), and the agents and designers who keep it current. **Owner:** August Strategy. **Last updated:** October 23, 2026 (Round 11).
**Live prototype:** https://gabrieldufresne.github.io/be-giant-app/ (the app on a phone; the review board on desktop). **Repo:** https://github.com/gabrieldufresne/be-giant-app

This folder is the master spec for building the iOS app: what every screen and element does, with exact values, states and the Sanity fields it reads. It grows with each design round. Start with the change log below to see what's new since you last looked.

**Data comes from Sanity, not the prototype.** The app connects to the same Sanity project as begiant.ca (project `l3tzmu37`, dataset `production`; schema in `field-office/client-giant`, `studio/src/schemaTypes/`). The prototype is a design reference: its content file (`bg-app-data.js`) and story shapes are prototype reference only. Every element row has a **Data** column naming the Sanity fields (or app state, or an outside API) it uses; `13-content-model.md` is the contract that ties them together.

## Which document answers what

| Question | Go to |
|---|---|
| How should this screen or element behave and look? | The area file in this folder (table below) |
| Why was it decided, and when? | `docs/Be Giant App - PRD v2.md`, Decisions log (D numbers) |
| Is a feature in V1, and is it designed yet? | PRD v2, Feature inventory |
| What's still undecided? | PRD v2, Open questions (Q numbers); Field Office questions (FO numbers) in the area files |
| What does it look like and feel like in motion? | The prototype: `BeGiantAppPhone.dc.html` (the app), `BG App.dc.html` (the board, one phone per state) |
| Which Sanity fields, queries and schema changes does it need? | `13-content-model.md` (the Sanity contract: queries per screen, fields per module, schema change requests SCR-01 onward, rules for drafts, missing references, new block types, images, offline and datasets) |

If this folder and the prototype disagree, tell August Strategy; the prototype is the visual reference, this folder is the written intent, and the PRD records the decision.

## Areas

| File | ID prefix | Covers | Status |
|---|---|---|---|
| [01-foundations.md](01-foundations.md) | FND | Platform, colour, type, shape, icons, motion, accessibility baseline | Designed |
| [02-app-shell-and-navigation.md](02-app-shell-and-navigation.md) | NAV | Tab bar, headers, status bar, sheets, toasts, gestures, transitions | Designed |
| [03-onboarding.md](03-onboarding.md) | ONB | Welcome (Globe), topics, notifications step, account, About you | Designed |
| [04-guest-and-account-gating.md](04-guest-and-account-gating.md) | GATE | Guests, soft-gate asks, unfinished profile, topic nudge | Designed |
| [05-home-and-for-you.md](05-home-and-for-you.md) | HOME | Home feed, lead story, Jump back in, Watch rail, end of Home, For You | Designed |
| [06-article.md](06-article.md) | ART | Reading view: hero, byline, tools, progress, Aa, night, article end | Designed |
| [07-article-modules.md](07-article-modules.md) | MOD | The article body: text, images, gallery, video, parallax, photo viewer, related reads, newsletter, callout | Designed (Phase 4 fallbacks planned) |
| [08-discover-and-search.md](08-discover-and-search.md) | DISC | Discover tab, search, filters, Near you, provinces | Designed (Near you and provinces blocked by SCR-01) |
| [09-video.md](09-video.md) | VID | Video tab: Feed and Grid | Partial (autoplay, captions, loading and end states open; SCR-03, SCR-07, SCR-08) |
| [10-saved.md](10-saved.md) | SAVED | Saved list, offline, Edit mode | Designed |
| [11-account-and-settings.md](11-account-and-settings.md) | SET | Account sheet, Settings hub and its screens | Designed |
| [12-notifications-newsletter-listen-share.md](12-notifications-newsletter-listen-share.md) | NOTIF, NEWS, LISTEN, SHARE | Notification presets and permission, newsletter, Listen, share sheet | Partial |
| [14-author-profile.md](14-author-profile.md) | AUTH | Writer page: name, bio, Learn more, Follow, Share, stories by the writer | Designed (Round 11) |
| [15-loading-errors-offline.md](15-loading-errors-offline.md) | LOAD, ERR | Launch screen, skeletons, slow connection, paging, offline banner and screens, server error, not found, video error | Proposed (Round 11, board only) |
| [13-content-model.md](13-content-model.md) | CMS, Q-, SCR-, API- | The Sanity contract: queries per screen, fields per body module, schema change requests, data rules, outside APIs, universal links, reader data | Partial (SCR-01 to SCR-10 pending) |

Each file starts with the same header: ID prefix, status, last changed, board section, where to find it in the prototype, decisions, open questions, and **Affects / depends on** (the other areas a change here touches). Then: Summary, Elements and behaviour (a table with IDs and a **Data** column), States, Motion, Accessibility, Data and analytics, Open items.

### IDs and statuses
- Every element has a stable ID (for example `MOD-12` gallery, `ART-13` reading tools). IDs never get reused; a removed element is marked **Removed** with the date.
- **Designed:** on the board and in the live prototype. **Partial:** exists, gaps listed. **Not designed:** a gap, named so it isn't forgotten. **Fallback planned:** a simple behaviour agreed, not yet drawn.
- Values are in iOS points. Copy in quotes is exact.
- **Data column:** Sanity fields as paths (for example `article.readTime`, `author.firstName` + `author.lastName`), "App state (device)", "Account (backend)", an outside API (API-01 onward), or "Missing in schema", which points to a schema change request (SCR) in `13-content-model.md`. "—" means pure UI.
- **Change tags:** every change-log entry is tagged **UI only** (no Sanity or API work) or **Data / schema** (touches queries, fields, schema or APIs).

## Discrepancies: prototype vs decisions (all resolved)
Found while writing these specs and ruled on by Gabriel on October 23, 2026. The prototype, the PRD and the area files now follow each ruling. If a new discrepancy turns up, add it here as X-22 onward, and **build to the decision (D number)** until it's ruled on.

| # | Where | Prototype did | Decision or note said | Area | Ruling |
|---|---|---|---|---|---|
| X-01 | Home story count | 15 stories (lead, 5 Latest, 3 short, 6 Popular), 17 after a refresh, since the article-module stories were added | 12 (D40) | HOME | Back to 12 (D40) |
| X-02 | Saved undo | Single swipe-remove: Undo toast lasts 2.4s. Bulk remove: the toast's button says "View" but undoes. | 5-second Undo (D18) | SAVED | 5s Undo for every remove, labelled Undo (D18) |
| X-03 | Search filters | Filter chips and tag suggestions still offer series and pillars | Series and Pillars removed from Discover (D39) | DISC | Topics only (D39) |
| X-04 | Milestones | 10, 25, 50, 100, 250, 500 | 10, 25, 50, 100 (D21) | HOME | Keep 250 and 500 (D21 updated) |
| X-05 | "Finished" | Saved and Clear finished use 98%; Jump back in, reading card and rating prompt use 90% | One definition needed (feature inventory) | SAVED, HOME, ART-21 | 90% everywhere (new D51) |
| X-06 | Search instant results | Matched text in the serif at weight 600 | Serif is never bold (foundations) | DISC | Cream highlight, regular weight |
| X-07 | Search no-results copy | Says search covers every video | `shortStory` isn't in the search index | DISC | Copy says stories only; indexing videos is a later request |
| X-08 | Avatar dot | Shows for any unfinished profile | Appears once the profile strip is dismissed (D25) | GATE | After the strip is dismissed (D25) |
| X-09 | Follow ask | Fires at three topics plus writers, counting the three pre-checked onboarding topics | Third follow (D24) | GATE | Third follow made after onboarding (D24 updated) |
| X-10 | Milestone ask | Any milestone while eligible | First milestone (D24) | GATE | Any milestone, within the caps (D24 updated) |
| X-11 | First-follow notification ask | Guests only | The declined screen promises everyone a reminder at their first follow | GATE, NOTIF | Anyone with alerts off (D26 updated) |
| X-12 | Topic chip check | Cycles four accents by position | The topic's accent (D27); Sanity has `topic.color` | ONB | `topic.color`, else neutral `#DCD6FF` (D27 updated) |
| X-13 | Guest avatar | Same `user-circle` for everyone | Board note: turns into a guest icon | GATE | Same icon for everyone |
| X-14 | Age | Email form asks exact age; About you asks an age range | Pick one (D33) | ONB, SET | Age range everywhere (D33 updated) |
| X-15 | Back swipe | Accepted from anywhere on the article | Standard left-edge gesture (spec) | NAV, ART-20 | Left edge only (new D52) |
| X-16 | Newsletter confirmation | Guests are told "Check your email to confirm" | The website endpoint sends no confirmation email (API-01); Q9 decides double opt-in | MOD-44, NEWS | No confirmation email, as on the website (D50 updated) |
| X-17 | Newsletter name | "The Be Giant newsletter" | The only active newsletter in Sanity is "The Leap" | MOD-44, NEWS | `newsletter.title` (today "The Leap") |
| X-18 | Settings newsletter row | The hub row is a static "Subscribed" | Should reflect the real state and open Account | SET | Live state, opens Account |
| X-19 | Notification preview | Example copy for the removed video, major and digest types | Three types remain (R7, D36) | NOTIF | Examples for the three current types (D36 note) |
| X-20 | Video side buttons | 54pt buttons, 30pt title | Round 6 log: 64pt glass, 32pt title | VID | Keep 54pt and 30pt (D30 note) |
| X-21 | Round notes | `docs/round-9/P1.1-onboarding.md` still describes the top-bar Skip and earlier rules | D35 replaced them | ONB | Marked superseded; current spec is 03-onboarding.md |

## How the areas connect

| Change in | Also check |
|---|---|
| Foundations (type, colour, motion) | Every area |
| App shell (tab bar, sheets, gestures) | Home, Video, Saved, Discover, Article (tools replace the tab bar) |
| Article modules | Article (More like this skips stories shown in the body), Notifications and newsletter (shared subscribe state), Video (different autoplay rule), Content model |
| Notifications and newsletter | Onboarding (step 2), Settings, Guest gating (first-follow ask), Article modules (newsletter card) |
| Guest gating | Onboarding (skip makes a guest), Home (profile strip, For You picker), Article (follow and save asks), Settings |
| Saved and reading progress | Home (Jump back in, end-of-Home reading card), Article (Save tool, finished count) |
| Content model | Every content screen |
| Author profile | Article (byline, writer row), Settings (Following), Guest gating (follow ask), Notifications (writer alerts), Content model (Q-AUTHOR) |
| Loading, errors and offline | Every content screen, Foundations (shimmer, error red), Saved (offline copies) |

## Change log
Newest first. Each entry lists what changed, the IDs, and the other areas it affects.

### October 23, 2026: Round 11 (author profile; loading, error and account-error proposals; Series hub removed)
- **Data / schema. New: author profile** (`14-author-profile.md`, AUTH-01 to AUTH-13), built to match begiant.ca/author/{slug}, plus Follow and Share. New query Q-AUTHOR; the universal link `/author/{slug}` now has a screen. No schema change: it reads `author.firstName`, `lastName`, `slug`, `bio`, `website`, `socialLinks`. Decision D54.
  - **Affects:** `06-article.md` (ART-07 byline and ART-10 writer row open it), `11-account-and-settings.md` (SET-19), `13-content-model.md` (Q-AUTHOR, universal links), `04-…` (follow ask), `12-…` (writer alerts).
- **UI only. Proposed, board only: loading, errors and offline** (`15-loading-errors-offline.md`, LOAD-01 to LOAD-08, ERR-01 to ERR-07): static launch screen, skeletons with a shimmer, articles that open with the card's content, a slow-connection line, paging, offline banner, offline and server screens, story not found (as the website's 404), story not downloaded, video can't play. Not in the app view until approved.
  - **Affects:** every content screen; `01-foundations.md` (FND-54 shimmer, proposed).
- **UI only. Proposed, board only: sign in and account errors** (`03-onboarding.md`, ONB-25 to ONB-32): sign in for existing accounts, field validation, wrong password, email already used, expired link, age minimum (14 proposed, Q16), Apple or Google failure, offline at the account step.
  - **Affects:** `04-guest-and-account-gating.md` (asks would offer Sign in), `11-…` (SET-14 sign-in row), `01-foundations.md` (FND-19 error red, proposed).
- **UI only. Removed from V1: the Series hub** (D53). It had no ID in this folder; `08-…` and `13-…` no longer ask where readers find a series. Series stories stay ordinary stories with their franchise colour.

### October 23, 2026: rulings on X-01 to X-21
- **UI only.** Gabriel ruled on all 21 discrepancies (table above). Changed: HOME-18 (12 stories), SAVED-07/10/12 and NAV-17 (5s Undo, 90% finished), DISC-13/15/17 (regular highlight, topic filters, copy), GATE-03/09/14 (follow ask after onboarding, dot after dismissal, alert ask for anyone), ONB-08/22 (topic colour, age range), NAV-23 and ART-20 (left-edge back swipe), NOTIF-02 (three types), MOD-44, SET-17/28 and NEWS (newsletter name, no confirmation email, live row). New decisions D51 (finished = 90%) and D52 (left-edge back).
- **Data / schema.** ONB-08 now reads `topic.color` (with a neutral fallback); MOD-44, SET-17 and SET-28 read `newsletter.title`.
  - **Affects:** `05-…`, `10-…` and `06-…` (finished definition), `04-…` and `12-…` (alert ask), `13-content-model.md` (no new fields).

### October 23, 2026: Sanity contract
- **Data / schema.** `13-content-model.md` is now the Sanity contract, with field names checked against the website's schema at `e8a1d3d`:
  - queries per screen (Q-HOME-LEAD to Q-NEWSLETTER) and fields per body module (CMS-30 to CMS-43);
  - schema change requests SCR-01 to SCR-06: story place, push line, the short story's article, the onboarding topics, the big story, and narrated audio;
  - data rules CMS-01 to CMS-12: dataset, drafts, live filter, missing references, unknown blocks, writer names, captions, images, files, caching, offline;
  - outside APIs and universal links.
  - Field Office questions FO-1, FO-3, FO-5, FO-6 and FO-7 are now decisions to confirm. FO-2 and FO-4 stay open.
  - **Affects:** every area file (Data columns).
- **UI only.** Every area file has a Data column. Open discrepancies between the prototype and the decisions are listed (X-01 to X-21).

### October 23, 2026: article modules (Round 9, Phases 1 to 3) and this handoff folder
- **Data / schema.** The article body is read through the website's `articleBodyBlocksProjection` (CMS-21).
- **UI only. New: the article body as native modules.** `07-article-modules.md` MOD-01 to MOD-45: subheads, links and lists; inline image; image pair; gallery; annotated image; video (tap to play); parallax; full-screen photo viewer; divider; related read; related stories; newsletter CTA; callout. Fallbacks planned for MOD-90 to MOD-94. Decisions D45 to D50.
  - **Affects:** `06-article.md` (ART-08 body, ART-11 More like this now skips stories shown in the body), `12-…` (the newsletter card shares the subscribe state with Settings and the P1.3 asks; it amends D9, which had no newsletter in articles), `09-video.md` (articles never autoplay; the Video tab policy is still Q6), `13-content-model.md` (CMS-20 to CMS-33).
- **UI only. Changed: the article's frosted status strip** (FND-03, ART-14) now sits above the body. Before, it was hidden under the text, so it only showed over the hero.
- **UI only (prototype only):** the board's phones no longer play video or animate (FND-05); the shareable app is unchanged.
- **UI only. New: this folder.** Baseline is the prototype as of Round 10 (October 20, 2026) plus the article modules.

## Keeping this current (for agents and designers)
After any design change:
1. Update the element rows in the area file (or add new IDs). Mark removed elements **Removed** with the date; never delete an ID.
2. Change the file's **Last changed** line, and add a line to its change history if it has one.
3. Add an entry at the top of the change log above, tagged **UI only** or **Data / schema**: what changed, the IDs, and the areas it affects (use the table above).
4. Record the decision in the PRD's Decisions log, and update its Feature inventory and Round log.
5. If a screen needs content that has no Sanity field, add a schema change request (next SCR number) to `13-content-model.md` and write "Missing in schema (SCR-…)" in the Data column. Check field names against the website repo's schema; never guess.
