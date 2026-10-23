# Be Giant App — PRD v2 (Phase II: UX and UI design)

**Owner:** August Strategy · **Build partner:** Field Office
**Status:** Living document. Updated at the end of every design round.
**Last updated:** October 23, 2026, after the Round 9 article modules (Phases 1 to 3)
**Supersedes:** `docs/GIANT-App-Wireflow-PRD.md` (Phase I wireflow). Phase I stays the record of the original structure. Where the two disagree, this document wins.
**Repo:** https://github.com/gabrieldufresne/be-giant-app (public). Preview: https://gabrieldufresne.github.io/be-giant-app/ (GitHub Pages, deployed from `main`).
**Design files:** `BG App.dc.html` (board, and the full-screen app on phones or at `#app`), `BeGiantAppPhone.dc.html` (the app itself), `bg-app-data.js` (content). Explorations that compare options live in `explorations/`; round notes in `docs/round-9/`. **Developer handoff:** `docs/handoff/` is the master build spec (every screen and element, with IDs, values, states and data needs, plus a change log). This PRD keeps the decisions and status; the handoff says how to build them. Reference docs are in `docs/`: Strategic Foundation, Phase I wireflow PRD, Decision Roadmap, the Oct 19 prompt pack and the Round 9 plan. Earlier phase files (`archive/`, `Welcome Explorations.dc.html`) stayed in the Claude design project and are not in this repo.

---

## 1. Why the app exists

From the Strategic Foundation: the app is Be Giant's direct line to its readers. It wins on depth, not reach. Adoption is the hard part, so onboarding, the reason to install and notification permission are the highest-leverage design problems. The position to own: the news app you open to feel like the future is possible.

**Success measures for V1** (to confirm with Be Giant)
- Notification opt-in rate at onboarding
- Topics followed per new reader (target: 3 or more)
- 30-day retention of app installs
- Weekly returning readers, and share of reading that happens in the app
- Video starts per session

---

## 2. Process and gates

| Phase | Output | Gate to move on | Status |
|---|---|---|---|
| 0. Strategy | Strategic Foundation, Decision Roadmap | Leadership alignment | Done |
| 1. Wireflow | Phase I PRD, Wireflow v1 and v2 | Structure approved | Done |
| 2. UX and UI design | Board, live prototype, this PRD | Every Must feature designed, navigation model chosen, client sign-off | **In progress: Round 10** |
| 3. Design QA and spec | Annotated specs, motion spec, component list, edge states | Field Office confirms it can be built as specified | Not started |
| 4. Build | iOS app | Feature-complete build | Not started |
| 5. Beta | TestFlight with staff and friendly readers | Crash-free, analytics firing, content pipeline proven | Not started |
| 6. Launch | App Store release | Store listing, privacy labels, marketing plan | Not started |

**Rule for Phase 2:** each round has one numbered feedback list, one build pass and one update to this document. Structural changes (navigation, new screens) go first. Polish (motion, copy, spacing) comes after the structure is approved.

---

## 3. Decisions log

Changes from Phase I are marked **(changed)**.

| # | Decision | Round | Notes |
|---|---|---|---|
| D1 | Visual system follows the website: white pages, ink type, hairline rules, Serrif Condensed and Gibson. Cream is only a reader option for article pages. | R1 | Client: "beige backgrounds should be white." |
| D2 | **(changed)** Video is a primary destination, with Feed (vertical, one film per swipe) and Grid views. | Pre-R1, R1 | Phase I had video out of scope. Strategic Foundation names video as a differentiator. |
| D3 | **(changed)** Explore and Search are merged into **Discover** (the Search tab). Topics, trending and video lead; series and pillars sit lower. | R1 | Phase I had Explore as a tab and Search in the header. |
| D4 | **(changed)** Account lives behind the avatar on Home, not in a tab. | Pre-R1 | Frees a tab for Video. |
| D5 | Tab bar follows iOS 26: a floating glass bar (Home, Video, Saved) with Search as its own round button. It shrinks while scrolling. A docked alternative stays on the board. | R1 | Final pick between floating and docked is open (Q1). |
| D6 | Onboarding is Welcome, Topics, Notifications and Create account. Topics are the only personalization step; pillars, series and writers were removed. | R1 | Phase I had welcome, topics, notifications. |
| D7 | Notifications start from a level and break down per type and per followed topic, with quiet hours. | R1 | Levels updated in R7 (Everything removed) and R9 (D36). Strategic Foundation: segmentation beats blanket sends. |
| D8 | Article reading tools replace the tab bar: Back, Aa, Listen, Night, Share, Save. Progress is a thin line under the status bar only. | Pre-R1, R1 | |
| D9 | Article ends with "Follow similar topics" (plus the writer), then "More like this". No newsletter block in articles. | R1 | Replaces "Filed under". **Amended by D50:** the editor-placed newsletter card in the body is in. |
| D10 | **(changed)** Listen (text to speech) is in V1 as a mini player. | Pre-R1 | Phase I had it out of scope. Needs a technical decision (Q4). |
| D11 | Home leads with one big story that scrolls away; nothing pins. For You sits one swipe away. | R1 | |
| D12 | Topics stay filters, not hub screens. Series keep a hub. | Phase I | Unchanged. |
| D13 | Saving from lists is swipe only. Save icons are removed from cards, the cover and the video feed. The article keeps Save in its reading tools; video keeps double tap. | R2 | |
| D14 | Tab bar is icons only by default. Labels are a Display setting. | R2 | |
| D15 | **(changed from D1)** Article page is light or dark only, via the contrast tool. Cream and Paper options are removed; Aa sets text size only. | R2 | |
| D16 | **(superseded by D27)** Onboarding topic picker uses round bubbles in light tints of the brand accents (violet, magenta, yellow, peach). Selected bubbles fill with the full accent and show a check. | R2b | Colour is decorative here only; franchise colours still identify series elsewhere. |
| D17 | **(superseded by D33)** Create account leads with an email form (name, age, city, email, password). Apple and Google sit below as secondary, styled to each company's guidelines. A storage disclaimer sits above the button. | R2b | Age and city support audience reporting. Needs legal review of the disclaimer copy. |
| D18 | Saved has an Edit mode: select and remove, Clear finished, Clear all. No confirm dialog; a 5-second Undo toast. | R3 | X-02 (Oct 23): the 5-second Undo applies to every remove, single swipe or bulk, and the button always says Undo. |
| D19 | Settings is a hub with real screens: Account, Following, Notifications, Reading and display, plus one static page template. Nothing links back into onboarding. | R3 | Account includes delete account (App Store requirement). |
| D20 | Jump back in is a row after the lead story on Home, for a story left 10–90% read within 7 days. | R3 | |
| D21 | The end of Home rotates two share cards (white since R10, D44): a reading card (an award with confetti at 10, 25, 50, 100 stories; an overview between them, with a segmented progress bar and a reader rank in the style of “top 4% of readers”) and Send a story. Rating uses Apple's prompt after the third finished story, plus a quiet link at the end of Home. | R3 | Gamification stays in the brand's voice: no streaks, no badges. X-04 (Oct 23): milestones are 10, 25, 50, 100, 250 and 500. |
| D22 | Floating cards (end-of-Home milestone and send-a-story) use a subtle radius (12px card, 6px media). This is the only exception to the square rule; in-feed content stays square. | R3 | Cream background replaced by white in R10 (D44). |
| D23 | Card home stays a board-only trial. No scroll-linked card motion (not buildable reliably). Topic tags are lilac squares; series keep their accent. Its article uses the same card language on the dark ground: one white body card with quotes, inline photos and corrections inside it, then follow topics, a Next story card and quick reads. Reading tools sit in a bottom pill that hides on scroll down. | R4 | Trial only; not replacing Home. |
| D24 | **(changed)** Guests can do everything without an account. Skipping onboarding makes a guest whose saves, follows and settings stay on the phone. Soft gate: the action finishes first, then a half sheet offers a free account. Asks come at the first share (after the sheet closes), second save, third follow and first milestone. One ask per session; Not now snoozes asks for 7 days; after three dismissals only the avatar asks. | R5 | Replaces the login-modal-first plan in the inventory. Protects the 3+ topics target. X-09 and X-10 (Oct 23): the follow ask counts follows made after onboarding (the third one asks); any milestone can carry the ask, within the session cap, snooze and three dismissals. |
| D25 | An unfinished profile (Apple or Google sign-in, or a form left half done) shows a dismissible cream strip under the Home header with progress. Once dismissed, a red dot stays on the avatar and Finish your profile tops the account sheet. | R5 | X-08 (Oct 23): confirmed. The dot appears only after the strip is dismissed; the prototype now does this. |
| D26 | Topics for guests: For You becomes a pick-3 topic picker until three are followed; a cream nudge offers to follow a topic after three reads in it; article-end follow works without an account. The first follow asks for notifications once if they were skipped. | R5 | X-11 (Oct 23): the first-follow alert ask is for any reader with notifications off, guest or signed in, once ever. |
| D27 | **(changed from D16)** Topic chips are outlines: grey at rest, ink when followed, with a small check in a circle of the topic's accent. 40px tall, 14px text. Setup summary chips are outlines with an accent dot. | R6 | Less colour; clearer on and off states. X-12 (Oct 23): the check uses the topic's `color` from Sanity (only series topics have one today), else neutral `#DCD6FF`. |
| D28 | Followed topics are marked with the small For You mark (a sparkle until R9, now a star, D37), not a check. For You rows lead with the reason ("Because you follow Economy") instead of the tag. | R6 | |
| D29 | Serif page titles step down one size across the app (for example Settings and Saved 52 → 44px, onboarding 36 → 32px, article 40 → 34px). | R6 | |
| D30 | Video feed: no topic tag or author line; the title is 17px sans; Read and Share are unlabelled round buttons, with Read on top. | R6 | X-20 (Oct 23): side buttons stay 54pt and the title 30pt, as built; the Round 6 log's 64pt and 32pt are superseded. |
| D31 | Home hero is 6d, highlight boxes, from the website's HeroFullBleed: a pinned 2:3 photo with slight parallax; headline, dek and byline in white line boxes that scroll up over it and fade out near the top. 6a–6c stay on the board for reference. | R6 | |
| D32 | Welcome is 1b, the Globe: story covers in mixed sizes on a slowly turning sphere (drag to spin) above centred logo and copy on white. Headline reveals line by line, then the dek, then buttons. Get started is brand red and throws the sphere outward into Topics. | R7 | Chosen over 1a Flow and 1c Reels in Welcome Explorations. |
| D33 | **(changed from D17)** Create account is split. Step 3 offers Continue with Apple, Continue with Google and, third, Continue with email, under a summary of what the account keeps; no fields. Apple or Google then shows About you: name and email confirmed from the provider, plus optional city (with Use location), age range and gender as chips. Email shows the full form. Blanks feed the unfinished-profile strip (D25). | R7 | Fewer fields before the account exists; personal details asked only after the account is made, and all optional. X-14 (Oct 23): age is an age range (chips) everywhere: About you, the email form and Settings > Account. |
| D34 | The home-screen preview (Add to Home Screen) uses a solid iOS status bar. The native build should do what Instagram does: content runs under the status bar with iOS 26's soft scroll-edge blur, and the header controls sit above it. | R8 | A web app can't put controls above iOS's blur, so the prototype can't show the native behaviour. Don't read the solid bar as the intended design. |
| D35 | Onboarding is a welcome plus three steps: topics, notifications, free account. Three topics start checked. Every step has one "Skip for now", anchored at the bottom; there is no Skip in the top bar. The account step offers Continue with Apple, Continue with Google, Email me a sign-in link (magic link) and Use a password instead, with no summary of choices above them. About you is designed with and without gender. | R9, R10 | P1.1. Gender, the final topic list and which topics are pre-checked are open (Q10, Q11). |
| D36 | **(changed from D7)** Notification presets are Light (the big story of the day) and Balance (the big story plus followed topics and writers). Quiet hours are on by default, 10 p.m. to 7 a.m., editable, and shown as one compact row; anything inside them is held until morning. A line before Allow says the iPhone asks next. Declining leads to a calm "No notifications, for now" screen, and Settings shows allowed, never asked or declined. | R9, R10 | P1.2. Quiet hours are a server-side hold, not iOS Focus. Cadence and triggers are open (Q13). X-19 (Oct 23): the preview banner only shows examples for the three current types. |
| D37 | **(changed from D28)** For You and followed tags use a star (Phosphor `star`), not the sparkle, which reads as an AI mark. | R9 | P3.1 explored six options. Heart was the agent's top pick; a hand-drawn star by Maya could replace the Phosphor one later. Any four-point star is ruled out. |
| D38 | The greeting is G4: a dark veil over Home with the date, "Good morning, [name]" rising in at the centre, and a what's-new line; it holds, then fades to Home (3.2s). Guests get the greeting without a name. Reduce Motion keeps only the fade. | R9 | P3.2. Chosen over three lighter treatments, which were removed. Built and on the board, but not yet switched on in the app (Q15). |
| D39 | Discover drops Series and Pillars. It adds Near you (stories from the reader's city or province, or a Use my location card for readers without one) and Discover by province (all 13, the reader's own first). Every story carries a place. | R10 | Story places in the prototype are inferred from the copy; the build needs a location field in Sanity (Q14). X-03 and X-07 (Oct 23): search filters and tag suggestions offer topics only; the no-results line says search covers every story (short videos aren't indexed). |
| D40 | After the Watch rail, Home shows Short stories (three stories under 10 minutes, each with a stopwatch and a large read time instead of a topic tag), then a Popular section with the rest. Home holds 12 stories in all. Discover's short stories rail uses the same under-10-minute rule. | R10 | X-01 (Oct 23): confirmed at 12 (lead, 3 Latest, 3 Short stories, 5 Popular). |
| D41 | Sharing uses the native share sheet (UIActivityViewController on iOS, the Android sharesheet). The prototype shows iOS. The branded share sheet is gone. | R10 | |
| D42 | The first time the first Latest story is fully on screen, it slides left to show its Save panel, with a tip: "Swipe left on any story to save it". Once per install in the build; once each time the app opens in the prototype. | R10 | |
| D43 | The For You end button reads "Show me a bonus story". The send-a-story card no longer says where the link opens. | R10 | |
| D44 | **(changed from D22)** The end-of-Home milestone and send-a-story cards are white on the grey feed end. Panels inside them use #F2F2F2. | R10 | Cream stays for article pages, the unfinished-profile strip and the topic nudge. |
| D45 | The app renders the website's article body (Sanity Portable Text) natively, block by block, rebuilt for the phone: subheads, links, lists, inline images, image pairs, galleries, annotated images, video, parallax, dividers, pull quotes, related reads, related stories, newsletter card and callout. Horizontal scroll, social posts, HTML embeds, audio and footnotes get simple fallbacks (link cards or stacked panels). | R9 modules | Spec: `docs/handoff/07-article-modules.md`. Research: `docs/round-9/article-modules.md`. |
| D46 | Video in articles is tap to play, never autoplay. Shorts get a 9:16 poster; other videos 16:9. Tap opens a full-screen player. | R9 modules | Answers Q6 for articles; the Video tab's policy stays open. |
| D47 | Editor-placed related reads stay mid-story as a single row. Stories shown there, or in a related-stories box, are left out of More like this. | R9 modules | |
| D48 | Parallax stays, as on the website: the photo pins and the text scrolls over it on the editor's tint, with no panel behind the text. The photo holds until the last line has left through the top. Reduce Motion and the two largest text sizes get a still version. | R9 modules | Revised after Gabriel's notes (panel removed, longer exit). |
| D49 | Galleries swipe in place with visible previous and next buttons and a count. Any photo in a story opens a full-screen viewer that pages through all of the story's photos, with tap for caption, double-tap to zoom and swipe down to close. | R9 modules | Also covers the P2.4 "image zoom into article" item. |
| D50 | **(amends D9)** The editor-placed newsletter card appears in articles: a cream card with one Subscribe button (one tap when signed in, an email field for guests). It shares the subscribe state with Settings and the P1.3 asks, and disappears from every story once the reader subscribes. | R9 modules | Q7 and Q9 still decide the wider newsletter placement. X-16 to X-18 (Oct 23): the card shows the newsletter's name from Sanity (today "The Leap"); guests are subscribed at once with no confirmation email, as on the website; the Settings row shows the real state and opens Account. |
| D51 | A story counts as finished at 90% read, everywhere: Saved and Clear finished, milestones, Jump back in and the rating prompt. | R9 rulings (X-05) | Replaces the prototype's 98% in Saved. Answers the feature inventory's "what counts as finished". |
| D52 | Closing an article by swiping works only from the left edge, like the native iOS back gesture. | R9 rulings (X-15) | Avoids closing a story by accident while reading or swiping a gallery. |

---

## 4. Feature inventory

**Priority:** Must = V1 launch blocker · Should = V1 if time allows · Later = after launch
**Design status:** Designed = on the board and live · Partial = exists but incomplete · Not designed = gap

### Reading and discovery

| Feature | Priority | Design status | Gap or next step |
|---|---|---|---|
| Home: lead story, latest, Watch rail, short stories, popular | Must | Designed | R10: Short stories and Popular after Watch (D40). Greeting G4 built, not yet on (D38, Q15). |
| For You (personalized feed with reasons) | Must | Designed | Star mark (D37); bonus story at the end (D43). Empty state for readers who skip topics is the guest topic picker (D26). |
| Pull to refresh, new-story indicator | Must | Designed | |
| Article reading view | Must | Partial | Missing: author link to the Author screen, correction or editor's note block, swipe to the next article. Inline images done (D45). |
| Article modules (the body) | Must | Designed | R9 modules: 14 modules built and QA'd, 4 fallbacks planned (D45 to D50). Spec: `docs/handoff/07-article-modules.md`. Needs Field Office answers FO-1 to FO-7. |
| Text size and night page | Must | Designed | Page colour options removed in R2. |
| Listen (text to speech) | Should | Designed | Needs a voice and vendor decision (Q4). |
| Share sheet | Must | Designed | Native share sheet, iOS shown (D41). |
| Follow similar topics at article end | Must | Designed | |
| Discover (browse and search) | Must | Designed | R10: Series and Pillars removed; Near you and Discover by province added (D39). Needs a location field in Sanity (Q14). |
| Feed pattern (topic or pillar list, filters, pagination) | Must | Partial | Search results cover it. Still missing: a filter sheet and a loading state when you scroll to the end. |
| **Series hub** | Must | **Not designed** | Intro, featured entry, entries list, follow series. With Series out of Discover (D39), decide where a reader finds a series. |
| **Author profile** | Must | **Not designed** | Bio, follow writer, stories list. Follow writer already exists at article end. |
| Video Feed and Grid | Must | Designed | Needs an autoplay and sound policy (Q6) and captions. |
| Card long-press menu (Save, Share, Follow topic) | Should | Not designed | |
| Swipe-to-save hint | Should | Designed | R10 (D42). Board phone 02 Swipe hint. |

### Account and retention

| Feature | Priority | Design status | Gap or next step |
|---|---|---|---|
| Onboarding (welcome and 3 steps) | Must | Designed | R9 and R10 (D35). Board row 09b. |
| Notification levels and permission | Must | Designed | R9 (D36): Light and Balance, quiet hours, iPhone Settings handoff, declined state. Board row 09c. Copy needs editorial sign-off; cadence and triggers open (Q13). |
| Create account (Apple, Google, magic link, password) | Must | Partial | R9: magic link and a five-provider layout. Missing: sign-in versus create, validation and error states, age minimum. |
| Logged-out states and login gating | Must | Designed | R5: soft gate (D24). Guest Home, For You picker, topic nudge, first-follow notification ask, four account asks, create account opened on its own, unfinished profile strip and avatar dot. Missing: Saved empty state copy for guests, sign in with an existing account from the ask. |
| Saved, offline, reading progress | Must | Designed | R3: Edit mode with Clear finished and Clear all. Missing: logged-out state and an out-of-storage message. |
| Jump back in | Should | Designed | R3. |
| End of Home: milestones, your week, send a story, rating | Should | Designed | R3. Finished = 90% read (D51). Reader rank still needs an analytics definition. |
| Account sheet and Settings | Must | Designed | R3: Account, Following, Notifications, Reading and display screens. |
| Preferences: manage followed topics and writers | Must | Designed | Following screen in Settings (R3). |
| Notification tap opens the article | Must | Not designed | Includes cold start from a notification. |
| Newsletter signup | Should | Explored | R9: `explorations/P1.3 Newsletter.dc.html` compares the account step, About you, and a one-time sheet after the second story, plus a switch in Settings. Recommended: the sheet plus Settings. Waits on Q7 and Q9. |
| Static pages (About, Editorial standards, Privacy, Terms) | Must | Designed | One template (R3). Copy is placeholder for editorial and legal. Corrections page still to add. |

### Platform and quality (needed before build)

| Feature | Priority | Status | Note |
|---|---|---|---|
| Loading, error and offline states (skeletons, retry, no connection) | Must | Not designed | Every screen needs one. |
| Accessibility: Dynamic Type, VoiceOver labels, reduced motion, contrast | Must | Not specified | G4 has a Reduce Motion version; the Globe welcome and the other motion still need one. |
| Universal links from begiant.ca into the app | Must | Not specified | Field Office |
| Analytics events (onboarding steps, opt-in, follows, saves, video plays) | Must | Not specified | Ties to the success measures in section 1. |
| CMS fields the app needs (focal point, video files, audio, notification copy) | Must | Not specified | Check against the Sanity schema. |
| App Store listing, privacy labels, app icon set | Must | Not started | |
| iPad layout | Later | | |
| Android | Later | | Confirm with Be Giant (Q8). |

---

## 5. Open questions

| # | Question | Owner | Needed by |
|---|---|---|---|
| Q1 | Floating or docked tab bar? | Be Giant + August | End of Round 2 |
| Q2 | Model 1 (Home, Video, Saved and Search) or Model 3 (Read and Watch plus a menu)? | Be Giant + August | End of Round 2 |
| Q3 | Is "Discover" the final name for the Search tab? | Be Giant | Round 2 |
| Q4 | Listen: synthetic voice vendor, or narrated audio only? | Field Office | Phase 3 |
| Q5 | Do trending and series rails come back on Home? | August | Round 2 |
| Q6 | Video: autoplay on Wi-Fi only, starts muted? (Answered for articles by D46: tap to play. Still open for the Video tab.) | Be Giant | Round 2 |
| Q7 | Where does newsletter signup live? | Be Giant | Round 2 |
| Q8 | Is Android in scope for V1? | Be Giant | Before Phase 4 |
| Q9 | Is newsletter signup a core KPI? Decides between the one-time sheet alone and adding the account-step checkbox. Also: which lists, how often, and CASL consent and double opt-in for guest emails. | Be Giant (and counsel) | Before the newsletter ships |
| Q10 | Collect gender, or drop it? | Be Giant | Before build |
| Q11 | Final onboarding topic list, and which three start checked. | Be Giant | Before build |
| Q12 | Magic-link lifetime, whether the link opens on another device, and whether a fifth sign-in provider (Microsoft) is wanted. | Be Giant with Field Office | Before build |
| Q13 | Notification cadence and push triggers: is the big story daily and at a fixed time, is there a cap for Balance, and should quiet hours deliver held alerts one by one or as a summary? | Be Giant | Before build |
| Q14 | Can stories carry a location in Sanity, and who tags them? Needed for Near you and Discover by province. | Field Office with Be Giant | Before build |
| Q15 | Switch the G4 greeting on in the app? | Gabriel | Next round |

---

## 6. Round log

### Round 1 (October 13, 2026)
Applied: white pages; liquid-glass tab bar with separate Search and shrink on scroll; docked bar with more space above the icons; board-wide Floating/Docked switch; onboarding reduced to topics with richer notification levels; Home header no longer collides with the cover, and the story no longer pins; pull to refresh loops on the board and works by touch; family business article used as the lead; Follow similar topics replaces Filed under; newsletter removed from articles; progress line only, no title bar; Discover reorder; Video Feed and Grid; live single-phone page that works on a phone.
Proposed motion for Round 2: haptics on pull and save, bookmark flies to the Saved tab, live For You preview while picking topics, card lift on press, line-by-line headline reveal on the cover.

### Round 2a refinements (October 13, 2026, approved and live)
Applied: save icons removed (swipe to save; article Save kept); For You heading no longer sits under the header (the header was 160px tall, now 98px); less space above Home and For You; collapsed tab highlight is now a centred circle that matches Search; tab labels removed and added as a Display setting; long-form placeholder copy (family business about 1,250 words, potash and productivity about 650 each); Aa panel is text size only, and Paper and Cream are removed.
Housekeeping: the Live page merged into the board; R0 and R1 snapshots deleted; older files moved to `archive/`.

### Round 2 (proposed scope)
1. Structure: Series hub, Author profile, login gating and logged-out states, static page template.
2. Decisions: Q1, Q2, Q3, Q5, Q6, Q7.
3. Polish: chosen Round 2 motion items.

### Round 2b onboarding (October 14, 2026, on the board for review)
Applied: pastel topic bubbles; email-first account form with name, age, city and a data storage disclaimer; Apple (white outline) and Google (light theme, Roboto Medium) buttons as secondary; onboarding headlines reduced (36px steps, 46px welcome); account step bottom bar removed so the form scrolls as one page.
Follow-up: step 2 retitled "Notifications"; level switch 48 → 38px; notification preview drops in like an iOS banner on arrival and on every change; inputs 52 → 44px so Apple and Google sit higher.

### Round 3 (October 14, 2026, on the board for review)
Applied: Saved Edit mode with Clear finished, Clear all and Undo; Settings rebuilt as a hub with Account, Following, Notifications, Reading and display, and a static page template (About, Editorial standards, Privacy, Terms); Jump back in row after the lead story; end-of-Home rotating module (milestone card, your week, send a story) with a quiet rating link; Apple rating prompt after the third finished story. Board: 11 new phones.
Follow-up: end-of-Home modules rebuilt as beige cards with the red wordmark, ready to share; milestone and week merged into one reading card; topic squares and series removed; segmented story bar and reader rank added; confetti on round-number milestones. Rank figures are placeholders until analytics defines them.
Follow-up: cards now cream (#FAF7F0) with 12px corners; wordmark and site/date footer removed; trophy icon beside Milestone; progress shown as dots under the rank panel; rank set in sans; overview stats as tags; "N more to your…" line removed.

### Round 4 card home trial (October 14, 2026, on the board for review)
Applied: card scroll motion removed; date in a 64px circle; long greeting name test (wraps to two lines); quick reads get 22px top and bottom padding; video cards 3:4; all cards 16px inner padding; topic tags lilac, series keep their accent; % read pie fills red.
Added: card-style article (tap any story card). Headline card with photo and caption, one white body card with pull quotes, an inline photo and a correction note inside, follow topics and writer, Next story card, three quick reads. A red pie at the top fills as you read; the Aa, Listen, Share, Save pill hides on scroll down and returns on scroll up.
Placeholders: the inline photo and correction copy on the family business story.

### Round 5 skipped onboarding (October 15, 2026, on the board for review)
Applied: new board row 01b. Skip in onboarding now creates a guest (topics skip clears the picks; notifications skip turns them off). Guest avatar icon on Home; the account sheet and Settings offer a free account. Soft-gate half sheet for first share, second save, third follow and first milestone, with session cap and 7-day snooze. First-follow notification ask with the iOS alert. Topic nudge after three reads. For You topic picker for guests. Create account opens on its own with a close button; email completes the profile, Apple or Google leave it unfinished, which shows the profile strip and avatar dot. Saving all four fields in Account details completes it.
Live: the same flow works in the app. Skip onboarding to try it.

### Round 6 visual refinements (October 15, 2026, on the board for review)
Applied: outline topic chips with an accent check circle (D27); sparkle in place of checks next to followed tags, and the reason line back on For You (D28); smaller serif titles (D29); a traditional user icon for the avatar; Home and For You switch now matches the Video Feed and Grid toggle; For You images square after the lead, more space between stories, no rules; the text size panel loses its heavy shadow and closes on any tap; Video feed simplified (D30), grid tiles lose their topics and use sans titles.
Comments: Video side buttons now 64px glass, matching Search, aligned above it; Video title back to the 32px serif headline (D30 amended). Home and For You switch is roomier (44px, 100px segments) with a white indicator in both states and no hairline under the header; header and Video title row moved 10px lower.
Decided: Home hero 6d (D31) is live in the app; 6a–6c stay on the board. Restored the View as app and Back to board buttons, which had dropped off the board.

### Round 7 welcome screen (October 19, 2026)
Explored three animated welcome screens built from story covers in `Welcome Explorations.dc.html`: 1a Flow (covers stream toward the reader from the centre), 1b Globe (a turning sphere of covers), 1c Reels (alternating columns with copy in white line boxes).
Decided: 1b Globe (D32) is live on the board and in the app. Settings: globe radius 180, 32 covers, 44px base cover size, slight size mix, slow spin. Open: red as the primary button colour (the system reserves red for signals); a reduced-motion version; covers pulled live from the week's stories.
Notifications: removed New video, Major reporting and Sunday digest; three types remain (The big story, New in topics you follow, Writers you follow). Removed the "About N a week" estimate from Settings and onboarding.
Account: split into a one-tap choice (Apple, Google, then email) and a second screen. Apple or Google leads to About you (optional city, age range and gender chips); email leads to the full form (D33). New board phones: About you and Email sign-up. Onboarding demo updated.
Feed ends: Home and For You now end with a distinct grey surface (#F0F0F0) after the white feed. The caught-up message is centred (eyebrow, serif title, line, button) on both; on Home the milestone and send-a-story cards and the rate link sit on the same grey.
Notification levels: Everything removed; Light (The big story) and Balanced (all three types) remain, in Settings and onboarding.

### Round 8 (October 20, 2026)
Moved from the Claude design project to this repo and GitHub Pages. Fixed the app screen sliding up to show hidden sheets (the root no longer scrolls; closed sheets are hidden), and pulled the Globe in so it fits at 390px (radius now set by the screen width, about 156 on the 402px canvas; was 180 in D32). Phones get a Board chip and a View as app chip; the board header says the round and the hero row is 00. Added a home-screen preview with a solid status bar (D34), a "new version is ready" toast with Refresh, and darker glass behind the Home / For You switch.

### Round 9 (October 20, 2026): Oct 19 team review, batch 1
Ran the prompt pack (`docs/Round 9 plan.md`) as one agent per prompt, each on its own branch, merged after review. P1.1 onboarding (D35), P1.2 notifications and quiet hours (D36), P3.1 For You mark, with the star chosen (D37), P3.2 greeting, with G4 chosen (D38). P1.3 newsletter stays an exploration until Q9 is answered. P1.4, P1.5 and P3.3 are on hold. Also: the board became a Figma-style canvas (pinch or Cmd + scroll to zoom, drag to pan, Fit and 100% in the corner); the placeholder-topics line and the "Kept in your account" summary were removed.

### Round 10 (October 20, 2026): follow-up feedback
One bottom-anchored "Skip for now" in onboarding and a compact quiet-hours row (D35, D36). Discover: Series and Pillars out, Near you and Discover by province in (D39). Home: Short stories with a stopwatch and read time, then Popular (D40). Native share sheet (D41). First-load swipe-to-save hint on the first Latest story (D42). "Bonus story" and the send-a-story line (D43). End-of-Home cards on white (D44).
Notes for each prompt are in `docs/round-9/`.

### Round 9 article modules (October 21 to 23, 2026)
Mapped all 18 article-body types on begiant.ca (Sanity and `field-office/client-giant`), with usage counts, and rebuilt them for the phone in three phases: text, images, dividers and related reads; gallery, video and the photo viewer; parallax, newsletter card, callout and annotated image (D45 to D50). Twelve real begiant.ca stories were ported from Sanity as test content and lead Home. The board's section 03b has 20 phones. Gabriel's QA passed after one revision: parallax text now sits straight on the photo, and the photo holds until the text has left. Also: the article's frosted status strip now shows over the body, and board phones no longer play video or animate. The developer handoff folder `docs/handoff/` was started as the master build spec: 13 area files with stable element IDs and a Data column naming the Sanity fields each element reads. It includes a Sanity contract (queries per screen, schema change requests SCR-01 to SCR-10) and 21 open discrepancies between the prototype and these decisions (X-01 to X-21) for August Strategy to rule on.

### Round 9 rulings on prototype discrepancies (October 23, 2026)
Gabriel ruled on the 21 discrepancies the handoff found between the prototype and the decisions (X-01 to X-21 in `docs/handoff/README.md`). The prototype now follows each ruling: Home back to 12 stories; a 5-second Undo everywhere in Saved; topics-only search filters; regular-weight search highlights; "finished" at 90% (D51); the avatar dot only after the strip is dismissed; the follow ask counting follows made after onboarding; the first-follow alert ask for anyone with alerts off; topic colours from Sanity; age ranges everywhere; the back swipe from the left edge only (D52); the newsletter named from Sanity, with no confirmation email and a live Settings row; preview examples for the three current types. Kept as built: milestones up to 500, the ask at any milestone, video buttons at 54pt. The old P1.1 notes are marked superseded.

