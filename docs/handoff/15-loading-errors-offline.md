# Loading, errors and offline
**ID prefixes:** LOAD, ERR · **Status:** Proposed (board only; not in the app view until approved) · **Last changed:** Round 11, October 23, 2026 · **Board:** 11 Loading (Launch screen, Slow cold start, Home loading, Slow connection, Article loading, Loading more); 12 Errors and offline (Offline with stories, Action failed, Offline nothing yet, Couldn't load, Story not found, Story not downloaded, Video can't play) · **Prototype:** `BeGiantAppPhone.dc.html` (search `bsVals(`, `bsOn`, `bsHome`, `bsArt`, `bsEmpty`, `bs404`, `bsVid`, `bsBanner`; keyframes `bgShim`, `bgSpin`, `bgLoad`); presets `load-*` and `err-*` in `bg-app-data.js` · **Decisions:** none yet (proposal, see the PRD round log) · **Open questions:** see Open items
**Affects / depends on:** every content screen: `05-home-and-for-you.md`, `06-article.md`, `07-article-modules.md`, `08-discover-and-search.md`, `09-video.md`, `10-saved.md` (offline copies), `14-author-profile.md`; `02-app-shell-and-navigation.md` (toast pattern, tab bar stays); `01-foundations.md` (shimmer motion, Reduce Motion, error red); `13-content-model.md` (CMS-11 caching, CMS-12 offline).

## Summary
The rules: never show a blank screen; show what the app already has (cached stories, the card that was tapped) and load the rest in place; say plainly what went wrong in one line and offer one way forward. Loading uses grey skeletons in the shape of the real layout with one slow shimmer. Full-screen errors reuse the website's illustrations and its voice. Small failures use the existing toast with Retry. Values are iOS points.

## Elements and behaviour
| ID | Element | Behaviour | Spec | Data |
|---|---|---|---|---|
| LOAD-01 | Launch screen | iOS launch storyboard while the app starts. Static. | White; red wordmark (`be-giant-logo.svg`) 40pt tall, centred. | — |
| LOAD-02 | Slow cold start (option B) | Only if a cold start passes 1s with nothing cached: a thin red line runs under the wordmark until Home is ready. Not recommended as the default. | Track 96 × 2pt `#F0F0F0`, 22pt under the wordmark; red `#DB3A3A` segment 40% wide sweeps left to right, 1.3s, ease-in-out, repeating. Reduce Motion: no line. | — |
| LOAD-03 | Skeleton | Grey blocks in the shape of the screen's real layout. Used when nothing is cached: first launch, a new list, a cleared cache. | Blocks `#EEEEEE`, square. Shimmer: a lighter band (`#F8F8F8`) sweeps left to right, 1.6s linear, repeating, across all blocks together. Reduce Motion: no shimmer. Content replaces the skeleton with a 200ms fade; never move the layout. | — |
| LOAD-04 | Home loading | LOAD-03 for Home: the 6d hero as one 560pt block with the header controls and the headline boxes in white, then Latest rows (text lines left, 104pt square right). The tab bar is live. | Hero 560pt; headline boxes 300 / 236 / 150 × 34pt at 20pt left; rows 18pt padding, hairlines. | Q-HOME-* |
| LOAD-05 | Article loading | Opens at once with what the card had: photo, tag, headline, dek, byline, date and read time. Only the body shows LOAD-03 lines. Reading tools work straight away. | Body lines 15pt tall, 12pt gaps, widths 100/96/100/88/100/62%, then a paragraph gap. | Card data from the list; Q-ARTICLE for the body |
| LOAD-06 | Loading more | Lists that page (author stories, search results, topic lists): the next 20 load 600pt before the end. | Native small activity indicator (22pt), centred in a 64pt row under the last card. | Q-AUTHOR, Q-SEARCH |
| LOAD-07 | Slow connection | After 8s of loading, one line under the header; the skeleton stays. After 20s, the screen becomes ERR-04. | "Taking longer than usual. Your connection may be slow." 13pt `#5C5C5C`, centred. | — |
| LOAD-08 | Pull to refresh | Unchanged (HOME pull to refresh). | — | — |
| ERR-01 | Offline banner | No connection, but stories are on the phone. Home, Saved and cached articles work. A pill above the tab bar says so; it leaves by itself when the connection is back. | Ink pill 48pt, full radius, 16pt side insets, 116pt from the bottom; 8pt red dot; "Offline. Showing stories on this phone." 14pt white; "Retry" 11pt uppercase at 75%. | Reachability (device) |
| ERR-02 | Action failed toast | A save, follow, subscribe or other write that can't reach the server. Saves and follows are kept on the phone and sync later, so this is mostly for subscribe and account actions. | The shared toast (NAV) with "Retry": "Couldn't save. Check your connection." Stays 4s. | — |
| ERR-03 | Offline, nothing cached | Full screen inside the tab: no connection and nothing to show. | Illustration `girl-on-planet.svg` 200pt wide; eyebrow "No connection"; serif 34pt "You're offline"; 15pt "Connect to Wi-Fi or mobile data to load today's stories. Stories you've saved still open."; ink button "Try again"; text button "Go to Saved" (only when something is saved). Tab bar live. | — |
| ERR-04 | Couldn't load | Our side failed (Sanity, search or the app API), or LOAD-07 passed 20s. No error codes. | Same layout as ERR-03. Eyebrow "Something went wrong"; "We couldn't load the stories"; "The problem is on our side, not yours. Try again in a moment."; "Try again". After three tries, a link to a status page if Be Giant has one. | — |
| ERR-05 | Story not found | A link, notification or saved id for a story that was unpublished or moved. Mirrors the website's 404. | Eyebrow "404 · Not found"; `404-illustration.svg` 190pt; serif 36pt "This story doesn't exist yet."; "It may have moved or been taken down. But Canada's next big idea might be below."; ink "Back to Home"; then the three latest stories as rows. | Q-HOME-LATEST |
| ERR-06 | Story not downloaded | Opened offline and never downloaded. The card's content shows (LOAD-05); the body becomes one message. | Eyebrow "Offline"; serif 26pt "This story isn't on your phone yet"; "Connect to Wi-Fi or mobile data to finish loading it. Stories you save download for offline reading."; ink "Try again"; text button "Save it for later" (saves now, downloads when online). | — |
| ERR-07 | Video can't play | The film fails to load: offline, or YouTube or Mux unavailable. | Poster dimmed to 32% on black; serif 30pt white "This video can't play right now"; 15pt at 75% "Check your connection, then try again. The story it comes from still opens."; pills "Try again" (white) and "Read the story" (outline). Read the story needs SCR-03. | `shortStory` poster; SCR-03 |

## States
- **Reduce Motion:** no shimmer (static `#EEEEEE`), no LOAD-02 line, crossfades only.
- **Retry:** every Try again retries in place and returns to LOAD-03; no full reload.
- **Back online:** ERR-01 leaves; lists refresh quietly (no jump); a toast is not needed.

## Motion
Shimmer 1.6s linear, repeating (`bgShim`). Skeleton to content 200ms fade. LOAD-02 1.3s. Spinner is the system's.

## Accessibility
- Skeleton containers are one element marked busy ("Loading stories"); individual blocks are hidden from VoiceOver.
- Errors are announced (`role=alert` in the prototype). Buttons 52pt (ink) and 44pt (text).
- Contrast: the offline pill and toast are white on ink. Illustrations are decorative.

## Data and analytics
- Caching: CMS-11 (lists cached a few minutes, refresh on foreground and pull) and CMS-12 (offline copies of saved stories) decide when LOAD-03 shows versus cached content.
- Proposed events: `load_slow` (screen), `error_shown` (kind: offline, server, not_found, not_downloaded, video), `error_retry` (kind, attempt), `offline_banner_shown`.

## Open items
- Approve the proposal (skeletons over a branded loader; LOAD-02 kept as an option only).
- Status page for ERR-04: does Be Giant have one?
- Offline reading of stories that aren't saved: cache the last N opened stories as well? (Field Office, storage budget.)
- Illustrations: ERR-03 and ERR-04 share `girl-on-planet.svg`; Maya may want a second drawing for the server error (P3.3 illustrated states).
