# Video
**ID prefix:** VID · **Status:** Partial (Feed, Grid and entry points designed; autoplay and sound policy, captions, loading and end states not designed) · **Last changed:** Round 6, October 15, 2026 (D30 feed simplification); Watch rail placement Round 10, October 20, 2026 (D40) · **Board:** 05 Video · Feed and Grid (`05 Feed`, `05 Paused`, `05 Grid`, `05 Grid to feed`); 08 Model 3 (`08 M3 Watch`); 02 Home and For You (`02 Home`, Watch rail) · **Prototype:** `BeGiantAppPhone.dc.html` (search `isVideo`, `vIsFeed`, `vIsGrid`, `vPanels`, `openVideo`, `dblSave`, `flashChrome`, `syncVideos`, `isRail`); films `VID` in `bg-app-data.js` (prototype reference only) · **Decisions:** D2, D13, D30, D40, D41, D46 · **Open questions:** Q6
**Affects / depends on:** `02-app-shell-and-navigation.md` (Video tab, dark-glass tab bar, minimise on scroll), `05-home-and-for-you.md` (Watch rail entry point), `08-discover-and-search.md` (video tiles open the feed), `06-article.md` (Read opens the story), `10-saved.md` (double-tap save writes to Saved), `12-notifications-newsletter-listen-share.md` (Share, SHARE-01), `07-article-modules.md` (MOD-20: in-article video is tap to play, D46), `11-account-and-settings.md` (SET-22 Play video automatically), `13-content-model.md` (CMS-12 and the shortStory fields below).

## Summary
Video is a primary tab (D2) with two views: Feed, full-screen and vertical with one film per swipe, and Grid, two columns of 9:16 tiles. Each film is meant to belong to a story. The feed has two unlabelled round side buttons, Read on top and Share below (D30). Tap pauses; double tap saves the story (D13: no save icon in the feed). The title and bottom scrim fade after 2.5 s of playback. In the prototype films autoplay muted and loop in every case; the Video tab's autoplay and sound policy is still open (Q6). Articles are different: tap to play, never autoplay (D46, MOD-20). Captions are not designed.

**Source in Sanity.** Films come from `shortStory` documents (53 published, October 23, 2026). Every one with a URL has `fullVideoUrl` on YouTube Shorts; none has `previewVideoUrl`; 43 have no `thumbnail`; 47 have no `duration`. So in practice the feed plays YouTube Shorts, which means YouTube's player (iframe API or YouTube iOS player), not a native `AVPlayer`, unless Be Giant also uploads files (to Mux, as articles already do with `muxPlaybackId`). This decides how much of the design below is buildable (see Open items 1 and 2).

## Elements and behaviour
| ID | Element | Behaviour | Spec (sizes, copy, timing) | Data |
|---|---|---|---|---|
| VID-01 | Video screen | Root of the Video tab. Dark in both views. | Background `#171717`; feed panels `#000000`. Shared tab entry animation (see 02). | — |
| VID-02 | Screen title | Top-left page title. | Serif 30pt, line height 1, tracking -.01em, white. "Video" (Model 1) or "Watch" (Model 3). Row top 62, left 20, right 12, height 48. | — |
| VID-03 | Feed / Grid toggle | Glass segmented pill, top right. Switches view and clears pause. Back to Feed returns to the last film. | Pill 44pt tall, 3pt padding, full radius, `rgba(255,255,255,.16)`, 14pt blur. Segments 72pt. Indicator white; left 3 (Feed) or 75 (Grid). "Feed", "Grid": Gibson 11pt, 600, .12em, uppercase; active `#171717`, inactive white. | App state (device): last view and index |
| VID-04 | Feed pager | Vertical paging, one film per page, hard snap. A new page sets the index, resets time to 0, clears pause. | Page height = screen height; one swipe = one film (`scroll-snap-stop: always` in the prototype; native: paged vertical collection). | Ordered list of `shortStory` (`publishedAt` desc assumed; ordering rule Unclear, see Open items) |
| VID-05 | Film panel | Full-bleed, cover crop, muted, looped, inline. Only the active panel loads a source. | Top scrim `rgba(0,0,0,.4)` to clear over 150pt (always on). Bottom scrim `rgba(0,0,0,.5)` to clear at 32% height (fades with chrome). Poster-only films show a slow drift (14 s, scale 1.02 to 1.1) as a prototype stand-in. | `shortStory.fullVideoUrl` (YouTube Shorts URL, or MP4); poster `shortStory.thumbnail` (asset, hotspot, `alt`); fallback poster: YouTube thumbnail from the video id |
| VID-06 | Title | Bottom left, part of the auto-hiding chrome. No topic tag or author (D30). | Gibson 17pt, line height 1.35, white. Block left 20, right 86, bottom 124. | `shortStory.title` |
| VID-07 | Progress line and time | Real-time for the active film. Always visible. | Track 2pt `rgba(255,255,255,.28)`, white fill, 1000ms linear. Row left/right 20, bottom 104, gap 10. Time Gibson 11pt, 85% white, tabular, "0:12 / 0:45" (active) or length only. | Length: player duration once loaded; before that `shortStory.duration` (seconds; empty on 47 of 53) |
| VID-08 | Tap to pause | Single tap in the tap zone toggles pause. | Zone from 110pt below the top to 300pt above the bottom, full width. | — |
| VID-09 | Pause disc | Shown while paused; tapping the film resumes. | 76pt circle at 44% height, `rgba(255,255,255,.2)`, 12pt blur, Phosphor `play-fill` 26pt nudged 4pt right. Fade in 250ms `cubic-bezier(.16,1,.3,1)`. | — |
| VID-10 | Double tap to save | Saves the film's story; a large bookmark pops. Already saved: pop only, no unsave. | Phosphor `bookmark-simple-fill` 72pt white at 42% height; 900ms: scale .4 → 1.15 (35%) → 1 (60%) → fade. Toast "Saved for offline reading" with View (see 10). | Writes story id to Saved: Account (backend), device for guests. Needs the linked article: **Missing in schema** (VID-11) |
| VID-11 | Read button | Upper side button. Pauses and pushes the linked story. | 54pt circle, `rgba(48,48,48,.52)`, 16pt blur, shadow `0 8px 28px rgba(0,0,0,.4)`, inner hairline `rgba(255,255,255,.16)`. Phosphor light `book-open` 20pt. Pressed scale .9, 150ms. Label "Read the story". | **Missing in schema:** `shortStory` has no reference to an article. Proposed `shortStory.article` (SCR-03) (reference to `article`, optional). Without it Read and double-tap save have nothing to open or save; hide Read when empty |
| VID-12 | Share button | Lower side button. Native share sheet (D41, SHARE-01). | As VID-11 with `share-fat-light`. Label "Share". Column right 20, bottom 174, gap 10. | Linked story URL `/stories/{pillarSlug}/{slug}` from `shortStory.article` (SCR-03) (proposed); if none, `fullVideoUrl` or `/short-stories` (proposal) |
| VID-13 | Chrome auto-hide | Title and bottom scrim show on film or pause change, hide after 2.5 s of play. Stay while paused. Side buttons, progress, header never hide. | Delay 2500ms; opacity 500ms ease; title moves 8pt down, 500ms `cubic-bezier(.16,1,.3,1)`. | — |
| VID-14 | Grid | Two columns of every film. Tap opens the feed at that film (VID-16). Tab bar minimises on scroll (02). | Padding 112 top, 150 bottom; 2pt gap; 9:16 tiles, cover. Scrim `rgba(0,0,0,.72)` to clear at 55%. Header gradient 120pt `rgba(23,23,23,.96)`. Fade up 300ms. | `shortStory.thumbnail` (43 of 53 empty: fall back to the YouTube thumbnail) |
| VID-15 | Grid tile labels | Length top left, title bottom. | Phosphor `play-fill` 10pt + Gibson 11pt 600 at 12/12. Title Gibson 14pt, line height 1.3, 12pt sides, 14pt bottom. | `shortStory.duration`, `shortStory.title`. Hide the length when empty |
| VID-16 | Grow into feed | From a Grid tile, a Watch rail tile or a Discover video tile, the image grows to full screen on black, then the feed takes over at that film. | Shared element 440ms `cubic-bezier(.16,1,.3,1)`; feed swaps in at 420ms; flyer removed 80ms later. Sets Video tab, Feed, that index, time 0, playing. | — |
| VID-17 | Home Watch rail | Dark band after the first Latest stories (D40). First 6 films. "See all" opens the Video tab. | Band `#171717`, padding 28/30, margin 20 top. Eyebrow "Watch". "See all" Gibson 12pt 600 .12em uppercase, 44pt tall. Tiles 156 × 277pt, gap 8, 20pt sides. Title serif 18pt, line height 1.08. | Website already curates films in `homepage.sections[]` `shortStoriesSection.stories[]` (refs to `shortStory`). Use that list for the rail; whether the tab shows all published films or that list: Unclear |
| VID-18 | Film data (prototype) | 9 films (`st`, `t`, `dur`, `secs`, `src`); 3 MP4s in `uploads/`, 6 poster-only. | Prototype reference only. | — |
| VID-19 | Article video on cards | Not in this tab. Six articles have a Mux loop (`muxPlaybackId` with `videoOnArticleCards`, `videoOnArticleHero`, `videoOnHomepageHero`): silent background loops in place of the photo. Not designed in the app. | | `article.muxPlaybackId`, `article.videoOnArticleCards`, `article.videoOnArticleHero`, `article.videoOnHomepageHero`; `article.previewVideoUrl` is a YouTube Shorts URL for hover previews (website only) |

## States
| State | Behaviour |
|---|---|
| Playing | Active film muted and looped; chrome hides after 2.5 s. |
| Paused | Disc shown; chrome stays; poster drift pauses. Board `05 Paused`. |
| Article open over video | Read pauses and unloads the film; closing returns to the feed, still paused. |
| Off screen | Plays only while the tab shows the feed; otherwise pauses and drops its source. Resume at last position after leaving the tab: Unclear in prototype (it restarts). |
| Sound on | Not designed. Every film is forced muted; no unmute control. |
| Captions | Not designed. |
| Autoplay Never or Wi-Fi only on cellular | Not designed. SET-22 stores Always, Wi-Fi only (default), Never but playback ignores it. Proposal: when autoplay is off, show the poster with the VID-09 disc; tap plays. |
| Film with no article | Not designed (see VID-11). |
| Loading, buffering, error, offline | Not designed. |
| End of feed | Not designed; the feed stops at the last film. |
| Empty grid | Not designed. |

## Motion
- Feed paging: native paging, one page per swipe, no custom curve.
- Feed entry 250ms ease (fade, 6pt rise); Grid entry 300ms `cubic-bezier(.16,1,.3,1)` (fade, scale .97).
- Toggle indicator 320ms `cubic-bezier(.16,1,.3,1)`; label colour 250ms.
- Chrome 500ms fade and 8pt slide, after 2500ms. Pause disc 250ms; save pop 900ms; button press 150ms.
- Grow into feed 440ms.
- Reduce Motion: Not specified. Proposal: cross-fade instead of the grow, no save pop scale, no poster drift.

## Accessibility
- Side buttons are labelled "Read the story" and "Share". Toggle, tiles, tap zone and rail have no labels in the prototype; tiles need title and length.
- Double tap to save has no visible alternative (D13). Add a VoiceOver custom action "Save story" on each film.
- Pause: expose as the film's default action with value "Playing" or "Paused".
- Captions are needed before launch for deaf and hard-of-hearing readers and for muted play.
- Targets: side buttons 54pt; toggle segments 72 × 38pt; "See all" 44pt.
- Dynamic Type for title and time: Not specified.

## Data and analytics
**Query sketch.** `*[_type == "shortStory" && defined(fullVideoUrl)] | order(publishedAt desc){_id, title, thumbnail{asset, hotspot, crop, alt}, fullVideoUrl, externalPlatform, duration, publishedAt}`. Do not read `externalHandle` (deprecated, hidden). For the rail: `*[_id == "homepage"][0].sections[_type == "shortStoriesSection"][0].stories[]->{…same}`.

**Proposed events:** `video_view` (film id, index, source: tab, rail, grid, discover), `video_start`, `video_complete` (loop count), `video_pause`, `video_read_tap`, `video_share`, `video_save` (method: double_tap, voiceover), `video_view_toggle` (feed, grid). Supports the PRD measure "Video starts per session".

**Missing in schema (for the change request):**
| Proposed field | Type | Filled by | Breaks without it |
|---|---|---|---|
| `shortStory.article` (SCR-03) | reference to `article`, optional | Editors when publishing a short | VID-10 save, VID-11 Read, VID-12 share URL |
| `shortStory.captions` (SCR-07) | file (WebVTT) or text track, or rely on YouTube's own captions | Video producer | Captions (accessibility, muted play) |
| A native-playable file, for example `shortStory.muxPlaybackId` (SCR-08) | string (Mux playback id, as on `article`) | Video producer | Native player, poster-frame control, muted autoplay, progress (VID-05, VID-07) without YouTube's player |

Data hygiene, not a schema change: 43 of 53 shorts have no `thumbnail` and 47 no `duration`.

## Open items
1. Q6 for this tab: autoplay on Wi-Fi only, muted start, and the sound control (none designed). Note: if films stay YouTube Shorts, muted autoplay and a custom progress line depend on what YouTube's player allows.
2. Hosting: YouTube Shorts (`fullVideoUrl`) versus Mux files. Field Office to confirm; same question as FO-2 in 07.
3. Add `shortStory.article` (SCR-03) (or decide Read is hidden for unlinked films).
4. Captions style and switch.
5. Feed order and contents: all published shorts, or the homepage list; and loading, buffering, error, offline, end-of-feed states.
6. Resume position after leaving the tab.
7. Single versus double tap: the prototype toggles pause on each tap of a double tap. The build should wait out the double-tap window.
8. Reduce Motion behaviour.
9. Sizes differ from the Round 6 log ("64px glass" side buttons, 32px title). The prototype has 54pt and 30pt. Confirm and update D30.
