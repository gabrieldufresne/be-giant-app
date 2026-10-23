# App shell and navigation
**ID prefix:** NAV · **Status:** Designed (floating vs docked and Model 1 vs Model 3 still open) · **Last changed:** Round 10, October 20, 2026 (handoff written October 23, 2026) · **Board:** 02 Home and For You (Header turns solid, For You, Swipe to save, Swipe hint, Tab bar minimises), 03 Article (Hero, Body and progress), 07 Account and settings (Account sheet), 08 Model 3 (Read, Watch, Article, Menu and mode switch), 09 Key transitions (Cover to article, Home to For You, Swipe to save, Push and swipe back) · **Prototype:** `BeGiantAppPhone.dc.html` (`barMode`, `goTab(`, `liquid(`, `collapseOn(`, `swRef`, `toast(`, `closeSheets`, `onDown =`, `dragEnd(`, `darkChrome`) · **Decisions:** D4, D5, D8, D13, D14, D34, D41, D42 · **Open questions:** Q1, Q2, Q3
**Affects / depends on:** `01-foundations.md` (status bar FND-03, easing, tap targets); `05-home-and-for-you.md` (Home header, pager, pull to refresh, swipe hint); `06-article.md` (reading tools ART-13 replace the tab bar, shared-element open ART-01, frosted strip ART-14); `08-discover-and-search.md` (Search button, bar hides while typing); `09-video.md` (dark glass on Video); `10-saved.md` (Edit mode hides the bar, swipe to remove, Undo toasts); `11-account-and-settings.md` (account sheet rows, tab labels switch); `04-guest-and-account-gating.md` (asks use the sheet pattern, avatar dot); `12-notifications-newsletter-listen-share.md` (mini player in the bar's gap, native share sheet).

## Summary
The shell is the iOS 26 Model 1 layout (D5): a floating glass tab bar with Home, Video and Saved, plus Search as its own round glass button. Account lives behind the avatar in the Home header (D4). Inside an article the bar becomes the reading tools (D8). One toast, one backdrop and one bottom-sheet pattern serve every screen. Floating vs docked (Q1) and Model 1 vs Model 3 (Q2) are open, so both alternatives are specified. Build with native iOS 26 components (tab bar material, sheets, navigation pushes) and treat the prototype values as targets, not something to rebuild by hand.

## Elements and behaviour

| ID | Element | Behaviour | Spec (sizes, copy, timing) | Data |
|---|---|---|---|---|
| NAV-01 | Floating tab bar (Model 1) | Glass capsule with three icon tabs: Home, Video, Saved. The active tab sits on a highlight pill. Shown on Home, Video, Saved, Discover and Settings (Settings counts as Home for the highlight). | Left 16pt, right 90pt, bottom 26pt, height 64pt, fully rounded, 6pt inner padding; three items of 94.7pt. Phosphor light `house`, `play`, `bookmark-simple`, 24pt. Inactive tabs 62% opacity. Glass light `rgba(255,255,255,.64)`, dark `rgba(48,48,48,.52)`, blur 16 with saturation 1.8, drop shadow `0 8px 28px rgba(0,0,0,.12)` plus inner highlights, top specular gradient. Native: iOS 26 tab bar material. | — |
| NAV-02 | Tab highlight | On a tab change the pill stretches across both tabs like liquid, then settles on the new one. | Light `rgba(23,23,23,.08)`, dark `rgba(255,255,255,.18)`. 460ms `cubic-bezier(.16,1,.3,1)`; at 45% it spans both tabs and squashes to 84% height. | — |
| NAV-03 | Search button | Separate round glass button right of the bar; opens Discover (name: Q3). Shows its own inner highlight while Discover is current; the bar's pill hides then. | 64 × 64pt at right 16pt, bottom 26pt; `magnifying-glass` 24pt; inner highlight inset 6pt. Hides with the bar: scale 0.6 and fade, 320ms. | — |
| NAV-04 | Shrink on scroll | Floating Model 1 only. Scrolling down shrinks the bar to the active tab alone (highlight becomes a 52pt circle matching Search); scrolling up restores it. A tap on the shrunk bar restores it without switching tabs. Changing tab restores it. | Shrinks after more than 6pt of downward travel once past 160pt of scroll; restores on 6pt upward. Bar narrows to 64pt, 380ms ease-out; other tabs fade to 0. Applies on Home, For You, Video Grid, Saved. Not on Discover, docked or Model 3. The Listen mini player slides into the freed gap (`12-…`). | — |
| NAV-05 | Tab reselect | Tapping Home on Home scrolls Home and For You to the top. | Smooth scroll. Video and Saved reselect: Unclear in prototype. | — |
| NAV-06 | Tab labels (D14) | Icons only by default. Settings > Reading and display, "Tab bar labels" ("Show names under the icons"), off by default. | Gibson SemiBold 9.5pt, 0.08em, uppercase, 3pt under the icon. Hidden while shrunk. | App state (device). Whether it syncs to Account (backend) for signed-in readers: Unclear in prototype. |
| NAV-07 | Bar hidden | Bar and Search slide away in onboarding, during the video grow transition, while typing in Discover, and in Saved Edit mode (Saved shows its own action bar). | Slides down 130pt and fades, 250ms. | — |
| NAV-08 | Bar becomes reading tools | Opening an article crossfades the tabs out and six tools in, in the same capsule: Back, Aa, Listen, Night, Share, Save. | 250ms crossfade, groups move 10pt. Tool behaviour: `06-article.md` ART-13. | — |
| NAV-09 | Dark glass | Bar and Search switch to dark glass on Video and on the night article page. | Background crossfades 250ms; icons invert to white. | — |
| NAV-10 | Docked alternative (Q1) | Full-width bar fixed to the bottom with four tabs: Home, Search, Video, Saved. A 2pt ink line on top marks the active tab. No shrink. | 92pt tall, square corners, light `rgba(255,255,255,.84)` / dark `rgba(23,23,23,.86)`, hairline top `inset 0 .5px 0 rgba(0,0,0,.14)`. Icons 26pt, inactive 45%. Padding 22pt top, 34pt bottom (16pt top with labels). Indicator 25% wide, slides 280ms. Board: only through the board's Navigation style property (Floating / Docked). | — |
| NAV-11 | Model 3 alternative (Q2) | Centred glass bar with a Read / Watch switch and a menu button. The menu card holds search, Saved, Account and settings, Notifications and topic chips. Discover and Saved open as pushed pages. No avatar in the Home header. | Bar 60pt tall, 64pt from each side. Switch indicator 50% wide, 280ms. Menu button 48pt; `list` icon turns to `x`, 250ms. Card 16pt from the sides, 98pt from the bottom, radius 28pt, grows from 96% scale and 12pt below, 320ms. Labels "Read", "Watch" 12pt SemiBold 0.14em uppercase. | — |
| NAV-12 | Home header | Transparent over the lead photo, solid once the reader scrolls past it; always solid on For You. Holds the Home / For You switch (left) and the avatar (right). | 110pt tall including the status bar area; 44pt control row 62pt from the top; padding 8pt right, 10pt left. Solid: white at 86% with a 20pt blur; type and icons blend white to ink over the last 50pt of the hero. Board note mentions a 1px header shadow; not in the code. | — |
| NAV-13 | Home / For You switch | Two-segment glass pill. Tap a segment or swipe the pager (NAV-24). The white thumb tracks the pager live. | 44pt tall, 4pt padding, segments 100pt wide. "Home", "For You" with a 13pt `star` (D37), Gibson SemiBold 11pt, 0.12em, uppercase. Pill ink at 45% over the photo, 6% when solid. | — |
| NAV-14 | Avatar (account entry) | Opens the account sheet (NAV-20). Model 1 only. | 44pt target, Phosphor `user-circle` 36pt, white over the photo, ink when solid. Unfinished-profile dot: 10pt `#DB3A3A`, 4pt from the top right (GATE-09). Same icon for guests and signed-in readers. | Account (backend): profile completeness for the dot. Guest flag: App state (device). |
| NAV-15 | Status bar (D34) | Native: content runs under the status bar with iOS 26's soft scroll-edge blur; header controls sit above it. Light content over dark surfaces (Video, Home lead photo before the header is solid, article hero before the frosted strip, night page, photo viewer, video player); dark content elsewhere, including onboarding. The article's frosted strip is ART-14. | Prototype only: the board draws a mock bar (9:41); the home-screen web app shows a solid iOS bar. Don't read the solid bar as the design. | — |
| NAV-16 | Toast | One pill near the bottom for confirmations. Tapping it runs its action (if any) and dismisses it. A new toast replaces the current one. | 44pt tall, padding 0 18pt, fully rounded, `#171717`, white Gibson 14pt, one line, shadow `0 10px 30px rgba(0,0,0,.22)`. Action label Gibson SemiBold 11pt, 0.14em, uppercase, 70% opacity, after the text. Bottom offset 104pt above the bar, 40pt when the bar is hidden, 166pt above a full-width mini player. Rises 10pt and fades, 250ms. Default 2.4s. Sits above sheets. | — |
| NAV-17 | Toast actions | "View" opens Saved. "Undo" restores what was removed. | "Saved for offline reading" + VIEW; "Removed from Saved" + UNDO (2.4s). Saved Edit bulk removes ("Removed N stories", "Cleared N finished stories", "Cleared N stories") show 5s with an undo action (D18), but the prototype labels it VIEW (bug; should read UNDO). Swipe hint "Swipe left on any story to save it", 5.2s (D42). | Writes the saved list (see NAV-25). |
| NAV-18 | Backdrop | Behind any open sheet or menu. Tap closes every sheet; on an account ask it counts as Not now (GATE-05). | Black 20% with a 2pt blur, fades 250ms. | — |
| NAV-19 | Bottom sheet pattern | Account sheet, account ask, notification ask and the newsletter exploration share one shape. Rises from the bottom; for asks, the action has already finished first. | Inset 8pt from the sides and bottom, white, radius 32pt, padding 10 / 20 / 26–30pt, grabber 36 × 5pt `#D6D6D6`. Rises from 110% below, 320ms ease-out. Primary button 52pt ink; "Not now" text button 44pt, 12pt SemiBold uppercase `#5C5C5C`. No drag to dismiss in the prototype; native should be a standard iOS sheet (proposal). | — |
| NAV-20 | Account sheet | From the avatar. Signed in: initials, name, email. Guest: "Reading as a guest", "Your saves and topics are kept on this phone", Create free account. Rows under an ink rule. | Header avatar 56pt `#F2F2F2`, name serif 26pt. Rows 54pt, 22pt icon, label, value, chevron: Finish your profile ("N of 4", unfinished only), then Following, Saved, Notifications, Account and settings. Footer: "Be Giant is a non-profit. Reader support keeps every story free." Signed-in header is hard-coded (Maya Okafor) in the prototype. | Account (backend): name, email. Counts: App state (device) or Account (backend). Details: `11-account-and-settings.md`. |
| NAV-21 | Share sheet | Native share sheet (D41). | UIActivityViewController; the prototype's iOS mock is a stand-in. `12-…`. | Share URL from routes: `/stories/{primaryPillar->slug.current}/{slug.current}`. |
| NAV-22 | System alerts | Notification permission and App Store rating are system UI. | Prototype draws 280pt mock alerts; build uses the system APIs. | APNs authorization; SKStoreReviewController. |
| NAV-23 | Back from an article | Back tool, or swipe right. Release past 120pt closes; less snaps back. | Close slides out right, 300ms ease-out; snap back 250ms. The prototype accepts the swipe from anywhere on the page except inside sideways scrollers (`data-hscroll`); native should use the standard left-edge interactive pop. | — |
| NAV-24 | Home / For You pager | Horizontal drag on Home pages to For You and back, 1:1 with the finger, resisting past either end. | More than 70pt of travel changes page, else snaps back, 320ms ease-out. 30% resistance past the ends. A left drag that starts on a story row is swipe to save (NAV-25); paging starts from the hero, header and gaps; sideways rails scroll themselves. Disabled while a sheet is open. | — |
| NAV-25 | Swipe to save (D13) | Drag a story row left to reveal an ink Save panel; release past the threshold saves (or unsaves). In Saved the same gesture removes, in red. | Panel 190pt wide, `#171717` (`#DB3A3A` in Saved), icon 22pt, label SAVE / UNSAVE 11pt SemiBold uppercase. Panel fades in over the first 50pt; 35% resistance past 120pt; threshold 96pt, where the icon scales to 1.15. Row returns 250ms ease-out. Rows on Home, For You, Discover results, Saved. First-run hint D42 (`05-…`). Needs a VoiceOver custom action. | Saved list: App state (device) for guests; Account (backend) when signed in (D24). Stores article `_id`. |
| NAV-26 | Shared-element open | Defined in `06-article.md` ART-01 (photo grows into the hero, 440ms; slide-in from the right 340ms without a photo). Video tiles grow to full screen on black, 420ms (`09-video.md`). | — | Card image: `cardImage` when `cardImage.asset` is set, else `heroImage` (website `articleCard` pattern), cropped with `hotspot` / `crop`. |
| NAV-27 | Screen transitions | Tab switch: new screen rises 6pt and fades, 250ms. Settings and sub-screens push in 28pt from the right with a fade, 300ms; onboarding steps the same, 400ms; leaving onboarding fades out, 400ms. | Native: standard navigation pushes with interactive pop. Settings Back reads "Home" in Model 1 even when it returns to Video or Saved (prototype quirk). | — |
| NAV-28 | Haptics | Not designed. | Round 1 proposed haptics on pull to refresh and save; never decided. | — |
| NAV-29 | "New version is ready" toast | **Prototype only.** The shareable prototype checks for a new deploy (every 120s and on return to the tab) and offers Refresh (then "Refreshing") with a dismiss X. | Not part of the app; App Store updates replace it. The board's Board and View as app chips, and frozen video on board phones, are also prototype only. | — |

## States
- **Default:** floating Model 1 bar, light glass, Home active.
- **Scrolled:** bar shrunk (NAV-04); Home header solid (NAV-12).
- **Reading:** tools replace tabs (NAV-08) and hide while scrolling down.
- **Dark surfaces:** Video and night article: dark glass, white icons, light status bar.
- **Sheet open:** backdrop on; pager, row swipe and pull to refresh disabled.
- **Guest vs signed in:** same avatar icon; account sheet header and rows change (`04-guest-and-account-gating.md`). Unfinished profile adds the dot and the Finish your profile row.
- **Model 3 / Docked:** NAV-11 / NAV-10; neither shrinks.
- **Loading, error, offline, Dynamic Type:** Not designed for the shell.

## Motion
Movement uses `cubic-bezier(.16,1,.3,1)`; fades use `ease`.

| What | Timing |
|---|---|
| Bar shrink / restore | 380ms |
| Tab highlight stretch | 460ms |
| Bar hide / show; tabs and tools crossfade | 250ms |
| Search hide (scale 0.6) | 320ms |
| Header solid blend | Scroll-linked over 50pt; thumb pager-linked |
| Pager settle | 320ms |
| Row return | 250ms |
| Article close / snap back | 300ms / 250ms |
| Sheets; backdrop | 320ms; 250ms |
| Toast | 250ms |
| Model 3 menu | 320ms, opacity 200ms |

Reduce Motion is not specified for the shell. Proposal: crossfades instead of the stretch, grow and pushes; shrink as an instant state change (FND rules in `01-foundations.md`).

## Accessibility
- Targets: tabs 94.7 × 52pt, Search 64pt, avatar 44pt, toast 44pt tall, sheet rows 54pt, Not now 44pt. Home / For You segments are 36pt tall inside a 44pt pill (raise to 44pt in the build).
- Prototype labels: tabs "Home", "Video", "Saved"; "Search"; avatar "Account"; Model 3 "Menu"; reading tools use their names.
- Gaps to cover natively: tab and selected traits on the bar and the switch; the avatar dot needs a spoken state (proposal: "Account, profile unfinished"); toasts should post a VoiceOver announcement; sheets need modal focus; swipe to save needs a custom action "Save".
- White header type over the photo relies on a top scrim; check light glass over busy photos on device.

## Data and analytics
- The shell itself reads no Sanity content. Saved list and settings: App state (device) for guests, Account (backend) for signed-in readers (D24).
- **Missing in schema:** none for this area.
- Proposed events: `tab_selected` (tab, from), `search_opened` (source), `bar_collapsed` (screen), `article_opened` (source, transition), `article_closed` (method: back or swipe, percent read), `pager_changed` (to, method: tap or swipe), `row_swiped` (action: save, unsave, remove), `toast_action` (view, undo), `account_sheet_opened` (guest, partial, signed in).

## Open items
- Q1 floating or docked; Q2 Model 1 or Model 3; Q3 final name for Search / Discover.
- Bulk-remove toast reads VIEW while it undoes (NAV-17); fix to UNDO.
- The 01b board note says the avatar "turns into a guest icon"; the code uses the same `user-circle` for everyone (NAV-14). Decide.
- Header shadow in the board note is not built (NAV-12). Settings Back always reads "Home" (NAV-27).
- Reselect on Video and Saved, Reduce Motion, Dynamic Type, haptics, offline and error states: not defined.
