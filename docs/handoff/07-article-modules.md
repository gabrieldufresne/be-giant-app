# Article modules (the article body)
**ID prefix:** MOD · **Status:** Designed for 18 of 18 body types (14 built; 4 have planned fallbacks, Phase 4) · **Last changed:** October 23, 2026 (Round 9 article modules, Phases 1 to 3, QA passed) · **Board:** 03b Article modules (20 phones) · **Prototype:** `BeGiantAppPhone.dc.html` (`modBlocks(`, `data-mod=`, `openPhotos`, `vpOn`), content in `bg-app-data.js` (prototype reference only), presets `mod-*` · **Decisions:** D45–D50 (amend D9 and answer Q6 for articles) · **Open questions:** Q6 (Video tab only), FO-2 and FO-4 below (FO-1, 3, 5, 6, 7 answered as decisions to confirm)
**Affects / depends on:** `06-article.md` (the page around the body; More like this de-duplication), `12-notifications-newsletter-listen-share.md` (newsletter state is shared with the P1.3 newsletter work and Settings), `09-video.md` (video playback policy differs: articles never autoplay), `13-content-model.md` (Sanity fields per module), `01-foundations.md` (square media, Reduce Motion, tap targets).

## Summary
Editors build article bodies on begiant.ca from rich text plus 17 custom blocks in Sanity (`articleBody` in `field-office/client-giant`). The app renders the same body natively, block by block, each rebuilt for a phone and for readers 55 and over: large type, 44pt targets, nothing that depends on hover, hidden gestures or scroll-jacking. Research, usage counts and the original plan: `docs/round-9/article-modules.md`. Test content in the prototype is 12 real begiant.ca stories converted from Sanity (prototype reference only; the build reads Sanity directly, see `13-content-model.md`).

## Rendering contract
- The app reads each story's Portable Text body through the website's `articleBodyBlocksProjection` (CMS-21, FO-1) and renders it in order. Each block type maps to one module below. Unknown types follow MOD-99.
- Body column: 24pt side margins, 18pt between blocks. Full-width modules run edge to edge (negative margins); their captions and controls stay on the 24pt margin.
- Every module works in the light and night page (ART-16) and at all five text sizes (FND-21).
- Any photo in the body opens the photo viewer (MOD-30), which pages through every photo in the story.

## Module index

| ID | Module | Sanity `_type` | Use in 145 published articles | App status |
|---|---|---|---|---|
| MOD-01 | Paragraphs, subheads, lists, links | `block` | all 145; subheads in 47; lists in 2 | Built |
| MOD-10 | Inline image | `inlineImage` | 315 in 114 | Built |
| MOD-11 | Image pair | `imagePair` | 19 in 16 | Built |
| MOD-12 | Gallery | `imageGallery` | 15 in 14 | Built |
| MOD-13 | Annotated image | `annotatedImage` | 1 in 1 | Built |
| MOD-20 | Video | `videoEmbed` | 52 in 45 (48 YouTube, 41 phone-shaped Shorts) | Built |
| MOD-21 | Parallax | `articleParallax` | 11 in 4 | Built |
| MOD-30 | Photo viewer | (all photos) | n/a | Built |
| MOD-40 | Pull quote | `pullQuote` | 53 in 41 | Built (pre-existing, see ART-09) |
| MOD-41 | Divider | `divider` | 92 in 35 | Built |
| MOD-42 | Related read | `relatedRead` | 126 in 92 | Built |
| MOD-43 | Related stories | `relatedStories` | 22 in 20 | Built |
| MOD-44 | Newsletter CTA | `newsletterCTA` | 116 in 115 | Built |
| MOD-45 | Callout | `callout` | 15 in 15 | Built |
| MOD-90 | Horizontal scroll | `articleHorizontalScroll` | 0 | Fallback planned |
| MOD-91 | Social media post | `socialEmbed` | 2 in 2 | Fallback planned |
| MOD-92 | HTML embed | `rawEmbed` | 0 | Fallback planned |
| MOD-93 | Audio / podcast | `audioEmbed` | 0 | Fallback planned |
| MOD-94 | Footnote | `footnote` | 0 | Fallback planned |
| MOD-99 | Unknown block | any other | n/a | Skip and log (CMS-06) |

Counts: Sanity production dataset, October 23, 2026.

## Text (MOD-01)

| ID | Element | Behaviour | Spec | Data |
|---|---|---|---|---|
| MOD-01a | Paragraph | Plain text at the Aa size. | Gibson, 16–22pt (default 18), line height 1.6. | CMS-30 |
| MOD-01b | Subhead (`h2`–`h6`) | One app style for all heading levels. | Serif regular (never bold), 22 / 23 / 24 / 26 / 28pt with Aa, line height 1.12, 14pt extra space above. | CMS-30 (`style`) |
| MOD-01c | Bulleted list | Square bullets. Numbered lists render the same in V1 (none are published); numbering across a split list is a website feature to revisit. | 6pt square bullet in the text colour, 14pt gap, 10pt between items, body size. | CMS-30 (`listItem`) |
| MOD-01d | Link | Underlined in the text colour. A begiant.ca story link opens the story in the app (match on pillar/slug). A topic link opens that topic in Discover. Any other link opens the in-app browser. | Underline 1pt, offset 0.2em. Prototype shows toasts for topic and outside links. | CMS-30 (`markDefs` links; routes in 13-content-model.md, Universal links) |
| MOD-01e | Italic | Kept (for example publication names). Bold is not used. | | CMS-30 (`marks`) |

## Images

| ID | Element | Behaviour | Spec | Data |
|---|---|---|---|---|
| MOD-10 | Inline image | Small and medium fill the body width; full width runs edge to edge. Left and right floats are centred. The photo keeps its own shape (aspect from the asset). Tap opens the photo viewer. | Square corners; 6pt above and below. Caption and credit below with FigureCaption (12pt); full-width captions on the 24pt margin. | CMS-31 |
| MOD-11 | Image pair | The two photos stack at body width, each in its own shape. Per-image captions (if set) under each photo; the shared caption after both. Wide and full width are treated as body width on the phone. Tap either photo for the viewer. | 12pt between photos. | CMS-32 |
| MOD-12 | Gallery | One photo per page in a sideways scroller with snap. A row under it: previous arrow, "2 of 4", next arrow. The caption below changes with the photo (falls back to the gallery caption). Tap a photo for the viewer. Full width runs edge to edge with the controls on the margin. | Frame takes the first photo's shape, clamped between 16:9 and 4:5; other shapes centre inside it, so controls never move. Arrows: Phosphor caret, 22pt in a 44pt target; faded to 30% at the ends. Count 13pt. Hairline above the controls. The scroller must not trigger the back swipe. | CMS-33 |
| MOD-13 | Annotated image | Numbered points on the photo, and the same numbers in a list underneath that is always visible. Tapping a point selects it and scrolls its list entry into view; tapping an entry selects its point. A line says "Tap a number to jump to it in the list." Tapping the photo opens the viewer. Point 1 starts selected. | Points: 30pt white circles with ink numbers (14pt SemiBold), selected 34pt ink with white numbers, 2pt white ring and shadow, 44pt tap target, 200ms. Positions use the editor's mobile X/Y if set, else desktop (percent of the photo). List rows: 28pt numbered circle (ink when selected), label 17pt, description 15pt muted, hairlines. | CMS-34 |

## Video and parallax

| ID | Element | Behaviour | Spec | Data |
|---|---|---|---|---|
| MOD-20 | Video | Never autoplays in the story (D46). A poster with a large play button; title and length below, not on the poster. Tap opens a full-screen black player with a Close button, title and caption; closing returns to the same scroll position. YouTube videos play in YouTube's own player (build: YouTube iOS player or the iframe API); uploaded files play in the native player. A plain link (other hosts) opens in the in-app browser. | Social (phone-size) width: 9:16 poster at 78% of the column, centred. Body width: 16:9 at the column width. Full-bleed: 16:9 edge to edge. Poster: the editor's, else the YouTube thumbnail cropped to shape. Play: 64pt white circle (94%), Phosphor play fill 26pt, shadow. Title Gibson 15pt Medium; meta "YouTube · 1:24" 12pt muted. Player: Close 44pt top right, light status bar. | CMS-35 |
| MOD-21 | Parallax | Moving version: the background photo pins at screen height under the editor's tint; it shows alone first, then each content block scrolls up over it, straight on the tint (no panel, as on the website). After the last block there is a full screen of runway, so the last line leaves through the top before the photo lets go. Still version (Reduce Motion, or Aa at the two largest sizes): the photo in the column at its own shape, then each block as text with a 2pt rule beside it. The background caption follows the block on the 24pt margin. | Tint: black at 60 / 40 / 25 / 0% for light-tone blocks; white for dark-tone blocks. Text: white (light tone) with shadow `0 1px 2px rgba(0,0,0,.4), 0 0 24px rgba(0,0,0,.3)`; ink (dark tone) with a white glow. First text starts 78% of a screen down; blocks are 55% of a screen apart; runway after the last block = screen height + 24pt. Display style: serif regular 26–32pt with Aa, line height 1.16. Flexible style: body size. Eyebrow 11pt uppercase. A block's inset photo sits above its text with its own caption. Native build: a pinned background view in the scroll view, not a scroll-driven animation. | CMS-36 |

## Photo viewer (MOD-30)

| ID | Element | Behaviour | Spec | Data |
|---|---|---|---|---|
| MOD-30a | Open | From any body photo (inline, pair, gallery, annotated). Opens at that photo. | Black, 220ms fade. Light status bar. | Photos from CMS-31 to CMS-34, in body order |
| MOD-30b | Paging | Swipe sideways through every photo in the story, in body order. | Count "3 of 8" top left, 13pt, 80% white. | — |
| MOD-30c | Caption | Caption and credit at the bottom; a single tap hides or shows it. | 14pt, 92% white; credit at 60%. | Caption and credit with fallbacks (CMS-08) |
| MOD-30d | Zoom | Double-tap zooms to 2× and back; pinch to zoom in the build. While zoomed, dragging pans and swipe-down is off. | | Larger image width (CMS-09) |
| MOD-30e | Close | Close (Phosphor X, 44pt, top right) or swipe down. A 36 × 5pt handle at the top is the cue for the swipe. Swipe down follows the finger and fades; release past 110pt closes, otherwise it springs back. | Close fade 200ms. | — |

## Editorial blocks

| ID | Element | Behaviour | Spec | Data |
|---|---|---|---|---|
| MOD-40 | Pull quote | See ART-09. The website's centred style is not used (0 uses). | | CMS-37 |
| MOD-41 | Divider | Short (centred), line or dotted, in the text colour. | Short 64pt; 22pt above and below. | CMS-38 |
| MOD-42 | Related read | One row: ink rule above, hairline below, "Related" overline, serif headline, byline and read time, 80pt square photo. The whole row is the tap target and opens the story with the photo transition. The story is then left out of More like this (D47). | Headline serif 18–24pt with Aa, line height 1.1; meta 12pt muted; row padding 14pt; pressed 60% opacity. | CMS-39 |
| MOD-43 | Related stories | The editor's heading (default "Related stories") as an overline, then up to three rows in the MOD-42 style. Missing or unpublished stories are skipped; if none remain, the block is hidden. Empty editor lists: the website falls back to related articles; the app should do the same (FO-6). | | CMS-40 |
| MOD-44 | Newsletter CTA | A cream card: envelope icon and the newsletter's name as the overline (`newsletter.title`; the only active newsletter today is "The Leap"; the prototype says "The Be Giant newsletter"), the editor's heading (default "Get our reporting by email"), their line, and one Subscribe button. Signed in: "Sends to [account email]. Free; unsubscribe anytime." and one tap subscribes. Guest: an email field above the button. The prototype says "Check your email to confirm", but the website's subscribe endpoint sends no confirmation email today, so this copy depends on Q9 (CASL consent and double opt-in). After subscribing, the card turns into "You're subscribed" with a check in that story, and the newsletter card is hidden in every other story. State is shared with Settings and the P1.3 newsletter asks (D50). | Cream `#FAF7F0`, square, 20pt padding. Heading serif 26pt; line 16pt. Button 48pt, ink, 8pt radius, 12pt uppercase. Email field 48pt, 1pt ink border, 8pt radius, 16pt text. Toast: "You're subscribed to the newsletter" or "Check your email to confirm". Renders only if the referenced newsletter is active (website rule). | CMS-41; subscribe state API-01, CMS-54 |
| MOD-45 | Callout | Editor promos (for example "Take our survey", Weather Week). Box with optional overline, title, body and one button that opens the link in the in-app browser. The website's SVG icon is not shown. | 1pt box in the text colour, 20pt padding. Title serif 26pt; body 16pt, line height 1.5. Button 48pt, outlined, 8pt radius, 12pt uppercase with a Phosphor arrow-up-right. | CMS-42 |

## Fallbacks (Phase 4, not built)

| ID | Module | Planned fallback | Data |
|---|---|---|---|
| MOD-90 | Horizontal scroll | Stack the panels: media, then its text, like Apple News. No pinned sideways scrolling. Video panels follow MOD-20. | CMS-43 |
| MOD-91 | Social media post | A link card ("View on Instagram", "View on X") with the platform name; opens in the in-app browser. No third-party scripts. | CMS-43 |
| MOD-92 | HTML embed | A link card ("Open the chart") with the caption; opens in the in-app browser. | CMS-43 |
| MOD-93 | Audio / podcast | A link card to the episode. Must not compete with Listen (`12-…`). | CMS-43 |
| MOD-94 | Footnote | Collected into a numbered Notes list at the end of the story, at 15pt or more. | CMS-43 |
| MOD-99 | Unknown block | Skip it and log it to analytics; never show an empty box. Matches the website and Apple News (FO-5, to confirm). | CMS-06 |

## States
- Light and night: all modules use page colours; the newsletter card stays cream with ink text in both.
- Text size: MOD-01, MOD-21, MOD-42/43 scale; at Aa sizes 4 and 5 parallax is still.
- Reduce Motion: parallax still; photo viewer and player fades can stay.
- Guest vs signed in: only MOD-44 differs.
- Loading: Not designed (photos should reserve their aspect ratio so the page doesn't jump; the prototype reads it from the asset).
- Offline (saved stories): photos must be cached with the story; video shows its poster and a "Needs a connection" note (Not designed).

## Accessibility
- All controls 44pt (gallery arrows, play, Close, annotated points).
- VoiceOver labels in the prototype: "Previous photo", "Next photo", "Play video", "Close", "Point 3: Cardiac monitor", "Your email". Photos need the editor's alt text (Sanity `alt`).
- No module depends on hover or a hidden gesture: galleries have buttons, the viewer has Close and a handle, annotated points have the list.

## Data and analytics
- Sanity fields per module: `13-content-model.md`.
- Proposed events: module_view (type), gallery_page, photo_viewer_open, video_play (source: article, host), related_read_tap, newsletter_subscribe (source: article_inline, signed in or guest), callout_tap, link_tap (internal, topic, external).

## Field Office: decisions to confirm and open questions
Answered from the website repo (`field-office/client-giant` at `e8a1d3d`); each is a decision for Field Office to confirm.
- **FO-1 (decision to confirm)** The app reads the raw Portable Text body through the website's own `articleBodyBlocksProjection` and renders it natively (CMS-21).
- **FO-3 (decision to confirm)** Newsletter subscribe goes to Beehiiv through the website's `/api/newsletter/subscribe`, which already checks for an existing subscription. The app also needs a status check for the signed-in reader's email (API-01).
- **FO-5 (decision to confirm)** Unknown block types are skipped and logged, as the website and its Apple News converter already do (CMS-06, MOD-99).
- **FO-6 (decision to confirm)** An empty related-stories block uses the merged related list (shared topics, then pillar, then latest), starting at the fifth story, as the website does (CMS-40).
- **FO-7 (decision to confirm)** Universal links follow the website's routes (`13-content-model.md`, Universal links).

Still open:
- **FO-2** Can in-article videos move from YouTube to Mux (already used for hero and card video) or Sanity files, so they can play natively?
- **FO-4** Is a pinned background with content scrolling over it (MOD-21) smooth in SwiftUI at article length?

## Change history
- October 23, 2026: Phases 1 to 3 built, QA passed. Parallax revised: no panel behind the text; photo holds until the last line has left.
