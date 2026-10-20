# Be Giant App — PRD v2 (Phase II: UX and UI design)

**Owner:** August Strategy · **Build partner:** Field Office
**Status:** Living document. Updated at the end of every design round.
**Last updated:** October 14, 2026, after Round 4 (card home trial)
**Supersedes:** `uploads/GIANT-App-Wireflow-PRD.md` (Phase I wireflow). Phase I stays the record of the original structure. Where the two disagree, this document wins.
**Design files:** `BG App.dc.html` (board, and the full-screen app on phones or at `#app`), `BeGiantAppPhone.dc.html` (the app itself), `bg-app-data.js` (content). Earlier phase files are in `archive/`; Wireflow v2 and the Decision Roadmap stay at the root for reference.

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
| 2. UX and UI design | Board, live prototype, this PRD | Every Must feature designed, navigation model chosen, client sign-off | **In progress: Round 1 of edits** |
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
| D7 | Notifications start from a level (Light, Balanced, Everything) and break down per type and per followed topic, with quiet hours. | R1 | Strategic Foundation: segmentation beats blanket sends. |
| D8 | Article reading tools replace the tab bar: Back, Aa, Listen, Night, Share, Save. Progress is a thin line under the status bar only. | Pre-R1, R1 | |
| D9 | Article ends with "Follow similar topics" (plus the writer), then "More like this". No newsletter block in articles. | R1 | Replaces "Filed under". |
| D10 | **(changed)** Listen (text to speech) is in V1 as a mini player. | Pre-R1 | Phase I had it out of scope. Needs a technical decision (Q4). |
| D11 | Home leads with one big story that scrolls away; nothing pins. For You sits one swipe away. | R1 | |
| D12 | Topics stay filters, not hub screens. Series keep a hub. | Phase I | Unchanged. |
| D13 | Saving from lists is swipe only. Save icons are removed from cards, the cover and the video feed. The article keeps Save in its reading tools; video keeps double tap. | R2 | |
| D14 | Tab bar is icons only by default. Labels are a Display setting. | R2 | |
| D15 | **(changed from D1)** Article page is light or dark only, via the contrast tool. Cream and Paper options are removed; Aa sets text size only. | R2 | |
| D16 | Onboarding topic picker uses round bubbles in light tints of the brand accents (violet, magenta, yellow, peach). Selected bubbles fill with the full accent and show a check. | R2b | Colour is decorative here only; franchise colours still identify series elsewhere. |
| D18 | Saved has an Edit mode: select and remove, Clear finished, Clear all. No confirm dialog; a 5-second Undo toast. | R3 | |
| D19 | Settings is a hub with real screens: Account, Following, Notifications, Reading and display, plus one static page template. Nothing links back into onboarding. | R3 | Account includes delete account (App Store requirement). |
| D20 | Jump back in is a row after the lead story on Home, for a story left 10–90% read within 7 days. | R3 | |
| D21 | The end of Home rotates two beige share cards: a reading card (an award with confetti at 10, 25, 50, 100 stories; an overview between them, with a segmented progress bar and a reader rank in the style of “top 4% of readers”) and Send a story. Rating uses Apple's prompt after the third finished story, plus a quiet link at the end of Home. | R3 | Gamification stays in the brand's voice: no streaks, no badges. |
| D22 | Floating cards (end-of-Home milestone and send-a-story) may use cream #FAF7F0 and a subtle radius (12px card, 6px media). This is the only exception to the square rule; in-feed content stays square. | R3 | Overrides the earlier cream-only-for-articles rule. |
| D23 | Card home stays a board-only trial. No scroll-linked card motion (not buildable reliably). Topic tags are lilac squares; series keep their accent. Its article uses the same card language on the dark ground: one white body card with quotes, inline photos and corrections inside it, then follow topics, a Next story card and quick reads. Reading tools sit in a bottom pill that hides on scroll down. | R4 | Trial only; not replacing Home. |
| D17 | Create account leads with an email form (name, age, city, email, password). Apple and Google sit below as secondary, styled to each company's guidelines. A storage disclaimer sits above the button. | R2b | Age and city support audience reporting. Needs legal review of the disclaimer copy. |
| D24 | **(changed)** Guests can do everything without an account. Skipping onboarding makes a guest whose saves, follows and settings stay on the phone. Soft gate: the action finishes first, then a half sheet offers a free account. Asks come at the first share (after the sheet closes), second save, third follow and first milestone. One ask per session; Not now snoozes asks for 7 days; after three dismissals only the avatar asks. | R5 | Replaces the login-modal-first plan in the inventory. Protects the 3+ topics target. |
| D25 | An unfinished profile (Apple or Google sign-in, or a form left half done) shows a dismissible cream strip under the Home header with progress. Once dismissed, a red dot stays on the avatar and Finish your profile tops the account sheet. | R5 | |
| D26 | Topics for guests: For You becomes a pick-3 topic picker until three are followed; a cream nudge offers to follow a topic after three reads in it; article-end follow works without an account. The first follow asks for notifications once if they were skipped. | R5 | |
| D27 | **(changed from D16)** Topic chips are outlines: grey at rest, ink when followed, with a small check in a circle of the topic's accent. 40px tall, 14px text. Setup summary chips are outlines with an accent dot. | R6 | Less colour; clearer on and off states. |
| D28 | Followed topics are marked with the small For You sparkle, not a check. For You rows lead with the reason ("Because you follow Economy") instead of the tag. | R6 | |
| D29 | Serif page titles step down one size across the app (for example Settings and Saved 52 → 44px, onboarding 36 → 32px, article 40 → 34px). | R6 | |
| D30 | Video feed: no topic tag or author line; the title is 17px sans; Read and Share are unlabelled round buttons, with Read on top. | R6 | |
| D32 | Welcome is 1b, the Globe: story covers in mixed sizes on a slowly turning sphere (drag to spin) above centred logo and copy on white. Headline reveals line by line, then the dek, then buttons. Get started is brand red and throws the sphere outward into Topics. | R7 | Chosen over 1a Flow and 1c Reels in Welcome Explorations. |
| D33 | **(changed from D17)** Create account is split. Step 3 offers Continue with Apple, Continue with Google and, third, Continue with email, under a summary of what the account keeps; no fields. Apple or Google then shows About you: name and email confirmed from the provider, plus optional city (with Use location), age range and gender as chips. Email shows the full form. Blanks feed the unfinished-profile strip (D25). | R7 | Fewer fields before the account exists; personal details asked only after the account is made, and all optional. |
| D31 | Home hero is 6d, highlight boxes, from the website's HeroFullBleed: a pinned 2:3 photo with slight parallax; headline, dek and byline in white line boxes that scroll up over it and fade out near the top. 6a–6c stay on the board for reference. | R6 | |

---

## 4. Feature inventory

**Priority:** Must = V1 launch blocker · Should = V1 if time allows · Later = after launch
**Design status:** Designed = on the board and live · Partial = exists but incomplete · Not designed = gap

### Reading and discovery

| Feature | Priority | Design status | Gap or next step |
|---|---|---|---|
| Home: lead story, latest, Watch rail | Must | Designed | Phase I also had a trending rail and a series rail on Home. Decide whether they return (Q5). |
| For You (personalized feed with reasons) | Must | Designed | Define the empty state for readers who skip topics. |
| Pull to refresh, new-story indicator | Must | Designed | |
| Article reading view | Must | Partial | Missing: inline images, author link to the Author screen, correction or editor's note block, swipe to the next article. |
| Text size and night page | Must | Designed | Page colour options removed in R2. |
| Listen (text to speech) | Should | Designed | Needs a voice and vendor decision (Q4). |
| Share sheet | Must | Designed | Use the native iOS sheet in build. |
| Follow similar topics at article end | Must | Designed | |
| Discover (browse and search) | Must | Designed | |
| Feed pattern (topic or pillar list, filters, pagination) | Must | Partial | Search results cover it. Still missing: a filter sheet and a loading state when you scroll to the end. |
| **Series hub** | Must | **Not designed** | Intro, featured entry, entries list, follow series. |
| **Author profile** | Must | **Not designed** | Bio, follow writer, stories list. Follow writer already exists at article end. |
| Video Feed and Grid | Must | Designed | Needs an autoplay and sound policy (Q6) and captions. |
| Card long-press menu (Save, Share, Follow topic) | Should | Not designed | |

### Account and retention

| Feature | Priority | Design status | Gap or next step |
|---|---|---|---|
| Onboarding (4 steps) | Must | Designed | |
| Notification levels and permission | Must | Designed | Copy for each notification type needs editorial sign-off. |
| Create account (email form, Apple, Google) | Must | Partial | Email form with name, age, city and data disclaimer designed. Missing: sign-in versus create toggle, validation and error states, age minimum. |
| Logged-out states and login gating | Must | Designed | R5: soft gate (D24). Guest Home, For You picker, topic nudge, first-follow notification ask, four account asks, create account opened on its own, unfinished profile strip and avatar dot. Missing: Saved empty state copy for guests, sign in with an existing account from the ask. |
| Saved, offline, reading progress | Must | Designed | R3: Edit mode with Clear finished and Clear all. Missing: logged-out state and an out-of-storage message. |
| Jump back in | Should | Designed | R3. |
| End of Home: milestones, your week, send a story, rating | Should | Designed | R3. Milestone and weekly numbers need a data definition (what counts as finished). |
| Account sheet and Settings | Must | Designed | R3: Account, Following, Notifications, Reading and display screens. |
| Preferences: manage followed topics and writers | Must | Designed | Following screen in Settings (R3). |
| Notification tap opens the article | Must | Not designed | Includes cold start from a notification. |
| Newsletter signup | Should | Not designed in V1 | Removed from articles in R1. Decide where it lives: Settings, Home, or a one-time prompt (Q7). |
| Static pages (About, Editorial standards, Privacy, Terms) | Must | Designed | One template (R3). Copy is placeholder for editorial and legal. Corrections page still to add. |

### Platform and quality (needed before build)

| Feature | Priority | Status | Note |
|---|---|---|---|
| Loading, error and offline states (skeletons, retry, no connection) | Must | Not designed | Every screen needs one. |
| Accessibility: Dynamic Type, VoiceOver labels, reduced motion, contrast | Must | Not specified | The motion spec on the board needs a reduced-motion version. |
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
| Q6 | Video: autoplay on Wi-Fi only, starts muted? | Be Giant | Round 2 |
| Q7 | Where does newsletter signup live? | Be Giant | Round 2 |
| Q8 | Is Android in scope for V1? | Be Giant | Before Phase 4 |

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
