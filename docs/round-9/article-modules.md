# In-article modules: inventory and plan

Status (October 23, 2026): Gabriel accepted the leans on all nine questions below. **Phases 1 to 3 are built** and on in the app view (`mods="on"`); see the "built" sections at the end. Phase 4 (fallbacks) not started.

## Sources

- Website repo `field-office/client-giant`, `main` at `e8a1d3d` (October 22, 2026), read-only shallow clone.
- Schema: `studio/src/schemaTypes/objects/articleBody.tsx` lists the article body types. Each block is defined in `studio/src/schemaTypes/objects/articleBlocks/`.
- Renderer: `frontend/app/components/ArticleBodyRenderer.tsx` (the Portable Text components map). Heavier blocks have their own component files, listed below.
- Apple News converter: `frontend/lib/apple-news/format.ts`. It already turns every body block into a stacked, phone-width layout. It is the closest precedent for a native version.
- Usage: a GROQ query on Sanity project `l3tzmu37`, dataset `production`, published perspective, October 23, 2026. There are **145 published articles**. 41 of them have Show Sidebar off, which is the only setting that allows full-bleed breakouts.

## What we found

1. **The article body has 18 types:** rich text plus 17 custom blocks. Eleven of the 17 appear in real articles. Four have never been used: horizontal scroll, HTML embed, audio, and footnote.
2. **Usage is dominated by plain editorial blocks, not the showpieces.** The common ones are inline images (115 articles), the newsletter CTA (115), related reads (92), pull quotes (41), video (45) and dividers (35). Parallax appears in only 4 articles, the gallery in 14 and the annotated image in 1.
3. **Video means YouTube Shorts.** 48 of the 52 in-article videos are YouTube links, and 41 of the 52 are set to "Social (phone size)". Three are uploads to Sanity and one is another host. No in-body video uses Mux. Mux is used only for hero background video and horizontal scroll panels.
4. **The app's article body is thinner than any real article.** Every published article has inline links, and 47 have subheads (H3 and H4 mostly). The prototype's main article renders only paragraphs and pull quotes: no subheads, links, lists, inline images or dividers. The PRD feature inventory already lists inline images as missing.
5. **Some web behaviour doesn't match its own schema text.** The gallery description promises thumbnails and "clickable gallery with pop-ups", but the component is a swipe carousel with no lightbox. The parallax docstring says "Mobile (no parallax)", but the code pins the image on every breakpoint. Parallax has no reduced-motion fallback. Horizontal scroll does have one.

## Inventory

Usage counts are from the 145 published articles. "Web" columns describe what `client-giant` renders today. "App now" is `BeGiantAppPhone.dc.html`.

| # | Module (Studio title, `_type`) | Uses / articles | Schema file | Component | Key fields and options | Web, desktop | Web, phone | Dependencies | Won't translate as-is | App now |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Body text (`block`) | 5,494 / 145 | `articleBlocks/textBlock.ts` | `ArticleBodyRenderer.tsx` (block, list, marks) | Styles: normal, H1 to H6, quote. Bullet and numbered lists, with numbering carried across a listicle. Link annotation to a URL, page, article, author or topic, plus anchor and new-tab options. | 18px body, serif headings | Same | none | Links that open a new tab | Paragraphs only. No subheads, links or lists. |
| 2 | Image (`inlineImage`) | 315 / 114 | `articleBlocks/mediaBlocks.ts` | `ArticleBodyRenderer.tsx` | Image with hotspot and alt, caption (multi-line, `*emphasis*`), credit. Size: small (30), medium (232), full width (53). Alignment: left, centre, right (10 floated). | Full width breaks out edge to edge on sidebar-off articles. Floats wrap text from 768px. | Floats are centred. Small is capped at about 384px. Full width breaks out on sidebar-off articles. | Sanity image CDN | Text wrap around floats | Main article: hero only. Alt card article: one 4:3 inline photo (`inl`). |
| 3 | Image pair (`imagePair`) | 19 / 16 | `articleBlocks/mediaBlocks.ts` | `ArticleBodyRenderer.tsx`, `lib/image-pair-layout` | Left and right images, each with alt, caption and credit. Shared caption and credit. Width: default, wide or full. Shape: original, 3:2, 16:9 or 1:1. | Two columns. Wide and full break out. | One column: photos stack, each with its caption. | none | Side by side at 342px each | None |
| 4 | Image gallery / slider (`imageGallery`) | 15 / 14, 2 to 8 images (most 3 or 4) | `articleBlocks/mediaBlocks.ts` | `ArticleImageGallery.tsx` | Items: image, alt, caption, credit. Gallery caption. Width: default or full (only 1 uses full). | Embla carousel with loop. Photos keep their own shape, capped at 600px tall, and the height animates between slides. Arrows and dots sit below, with a caption row showing a 2/5 counter. | Same, swipeable. The 40px arrow buttons have 20px icons. | `embla-carousel-react` | Animated height change. 8px dots as tap targets. Schema promises a lightbox that doesn't exist. | None |
| 5 | Annotated image (`annotatedImage`) | 1 / 1 (the Pelican case story, 7 annotations) | `articleBlocks/annotatedImage.ts` | `AnnotatedImageBlock.tsx` | Image, caption, credit. Annotations: label, description, and a dot X/Y % with optional tablet and mobile overrides. | Cream rounded box. Square image with numbered dots and a scrolling card list beside it. Hovering a dot activates its card. | Below a 768px container: image, then a swipe card slider with dots. Dot positions switch to the mobile overrides below 480px. | `embla-carousel-react`, container queries | Hover. Small dots. Three position sets per dot. | None |
| 6 | Parallax (`articleParallax`) | 11 / 4 | `articleBlocks/parallaxBlock.ts` | `ArticleParallaxBlock.tsx` | Background image with hotspot, caption and credit. Text: light or dark. Overlay: 60, 40, 25 % or off. Content blocks, each with eyebrow, rich-text body, style (display or flexible), alignment (left, centre, right), optional image and image side. Only publishable when Show Sidebar is off. | Full-bleed. The image is sticky for 100vh while the blocks scroll over it, with a 100vh exit runway. A block with an image is a 45/55 split. | Same sticky pin. The image is requested at 300vw for phones. The split stacks. Display text drops to H3 size. | none (CSS sticky) | Long scroll-driven section. No reduced-motion fallback. Copy over an image fights Dynamic Type at large sizes. | None in the article. The Home hero 6d (D31) uses the same pinned-photo idea from `HeroFullBleed`. |
| 7 | Horizontal scroll (`articleHorizontalScroll`) | 0 / 0 | `articleBlocks/horizontalScrollBlock.ts` | `ArticleHorizontalScrollBlock.tsx`, `HorizontalScrollStage.tsx`, `LazyMuxVideo.tsx` | Panels: image or Mux video, with poster and rich-text description (3 or more recommended). Shape: original, 4:3, 1:1 or 3:4. Background: charcoal, cream, white, red or a custom hex, with text colour. | Pins, and vertical scroll drives the panels sideways 1:1. Reduced motion gets a native snap scroller instead. | Same pin. Panels are 70vw wide and at most 60svh tall. | `@mux/mux-video-react` (muted, looping, lazy-mounted) | Scroll-jacking. A hidden gesture model. | None. Designed by Gabriel in the October Figma, but never published. |
| 8 | Article video (`videoEmbed`) | 52 / 45. Width: 41 social, 8 normal, 3 full-bleed. Hosts: 48 YouTube, 3 uploads, 1 other. | `articleBlocks/embedBlocks.ts` | `ArticleVideoBlock.tsx` | Source: external URL (YouTube, Vimeo or direct file) or upload to Sanity. Title, poster, duration in seconds, caption. Width: social (330×585), body (16:9) or full-bleed. | Poster with a dark tint and a small play chip, title and duration bottom left. Tap swaps in the YouTube or Vimeo iframe with `autoplay=1`, or a native `<video controls>`. Never autoplays in the flow. | Same | YouTube and Vimeo iframes, Sanity file CDN | A drawn SVG play icon. An 11px duration label. The play chip is a 28px tap target. YouTube Shorts can only play inside YouTube's player. | None in the article. The Video tab plays the 3 uploads at 9:16. |
| 9 | Pull quote (`pullQuote`) | 53 / 41, all left bar | `articleBlocks/editorialBlocks.ts` | `ArticleBodyRenderer.tsx` | Style: left bar or centre (0 uses). Quote, attribution. | Red left bar, italic serif at 24px | Italic serif at 20px | none | none | Yes: serif at 32px between rules, not italic (`isQ`) |
| 10 | Divider (`divider`) | 92 / 35 | `articleBlocks/editorialBlocks.ts` | `ArticleBodyRenderer.tsx` | Style: line, dotted, or short and centred | `<hr>` with 56px margins | Same | none | none | None |
| 11 | Newsletter CTA (`newsletterCTA`) | 116 / 115 | `articleBlocks/editorialBlocks.ts` | `snippets/NewsletterSignup.tsx` | Newsletter reference (defaults to the Morning Brief), heading, body. Renders only if the newsletter is active. | Compact inline email form | Same | Newsletter provider, by `externalId` | A typed email field mid-article, for a signed-in reader | None in the body. P1.3 explores newsletter asks elsewhere. |
| 12 | Related read (`relatedRead`) | 126 / 92, often 2 or 3 per article | `articleBlocks/editorialBlocks.ts` | `snippets/ArticleCardSmall.tsx` | One article reference | Bordered box with a "Related" label, a 200px thumbnail and the title | The thumbnail is hidden under 500px, so it shows text only | none | none | None in the body. "More like this" sits at the end. |
| 13 | Related stories (`relatedStories`) | 22 / 20, all hand-picked | `articleBlocks/editorialBlocks.ts` | `snippets/InlineRelatedStories.tsx` | Heading (default "Related Stories"), up to 3 articles. Empty falls back to related articles 5 to 7. | Bordered box with three columns: topic badge, title, byline and date. No images. | Stacks to one column | none | A 12px heading | None in the body (see 12) |
| 14 | Callout (`callout`) | 15 / 15: "Take our survey" ×10, "Weather Week" ×5 | `articleBlocks/editorialBlocks.ts` | `snippets/ArticleCalloutBlock.tsx` | Overline, title, body, button (link), optional SVG icon. Defaults to "Our funding". | Bordered box: text and button on the left, a 180px icon on the right | Stacks, icon below | none | An SVG icon uploaded by editors | None |
| 15 | Social media post (`socialEmbed`) | 2 / 2 (Instagram, X) | `articleBlocks/embedBlocks.ts` | `SocialEmbed.tsx` | URL, platform (auto-detected), width % , Instagram crop | Loads each platform's embed script | Same | Instagram `embed.js`, X widgets | Third-party scripts, tracking, unpredictable heights | None |
| 16 | HTML embed (`rawEmbed`) | 0 / 0 | `articleBlocks/embedBlocks.ts` | `RawEmbedHtml.tsx` | Sanitized iframe code (Datawrapper, Flourish, maps), caption, max width | Iframe | Iframe | Third-party iframes | Desktop-sized charts | None |
| 17 | Audio / podcast (`audioEmbed`) | 0 / 0 | `articleBlocks/embedBlocks.ts` | `ArticleBodyRenderer.tsx` | URL (Spotify, Apple Podcasts, SoundCloud or a file), title, caption | Provider iframe or `<audio controls>` | Same | Provider iframes | Clashes with the app's own Listen player | None |
| 18 | Footnote (`footnote`) | 0 / 0 | `articleBlocks/editorialBlocks.ts` | `ArticleBodyRenderer.tsx` | Number, text | Small grey aside with a left rule | Same | none | 14px grey text is below the 55+ comfort size | None |

### Outside the body, for context

These are set on the article document, not dropped into the body. They change how the article reads, but they are not in-body modules.

| Item | Use | Web | App now |
|---|---|---|---|
| Hero type (`heroType`) | Standard 116, full-bleed 13, split 16 | `HeroFullBleed` pins a photo with the headline in white line boxes. Split puts the headline next to the image on dark. There's a "headline below image on mobile" option. | One article hero: a 520px photo, caption, then the headline. 6d borrows `HeroFullBleed`, but on Home. |
| Corrections, clarifications, editor's notes | 3, 0 and 1 articles | Notes at the top or end of the article | Correction note in the alt card article only |
| Series callout, survey URL | 0, 1 | Series box at the top or bottom | None |

## Questions for Gabriel

1. **V1 scope.** I'd build the eight that real articles use most: text styles, inline image, divider, related read, newsletter CTA, video, image pair and gallery. Should parallax, related stories and the callout join them? I'd leave out horizontal scroll, HTML embed, audio, footnote and social posts: they are unused or nearly so, and make them graceful fallbacks only.
2. **Parallax.** Keep it, or turn it into a static stack on the phone? My lean is a single, gentle version: a full-bleed photo with the text card scrolling over it once, and no 100vh runway. Reduce Motion or Large Text would flatten it to photo, then text. The Apple News version already flattens it this way.
3. **Galleries.** Swipe in place, or tap to open full screen? My lean: both. The gallery swipes in place, with a visible "1 of 4" and arrow buttons, since the audience shouldn't depend on a hidden swipe. Tapping any article photo (inline, pair or gallery) opens a full-screen viewer with pinch to zoom. That also covers the P2.4 "image zoom into article" item.
4. **Video.** Autoplay muted, on Wi-Fi only? Or tap to play? This is PRD Q6, still open. In-article video is almost all YouTube Shorts, and we can't autoplay or restyle those in a native player. My lean is tap to play everywhere in the article: a 9:16 poster with a large play button. Autoplay belongs to the Video tab.
5. **Related reads and More like this.** They overlap. Related reads are editor-placed and mid-story, often two or three per article. More like this is algorithmic and sits at the end. Keep both? My lean: keep the in-body related read as a single compact row, and drop any story it shows from More like this so nothing repeats.
6. **Newsletter CTA.** It appears in 115 of 145 articles. Should it follow the P1.3 decision (which waits on Q9)? Should signed-in readers who are already subscribed never see it? My lean: one-tap subscribe for signed-in readers, hidden once subscribed, and for guests the same ask as P1.3.
7. **Exploration or live?** Build straight into the live article behind a prop, or as a separate exploration page first? My lean is live, behind a prop that is off by default, plus a board section with one phone per module. Text styles, images and dividers can go on by default once approved, since they only fill gaps.
8. **Test content.** I'd port "The Canadian scientist behind Ozempic on why he never, ever gave up" (Drucker) as a new story: it has parallax, an image pair, video, a pull quote, a divider and a newsletter CTA in one piece. I'd add real video and related reads to Potash and Eight ways (already in the app, both have Shorts). Galleries would come from Regina or "How to fight wildfires at night". The Pelican case story would cover the annotated image, if it's in scope. OK to use their real photos from the Sanity CDN, as the app already does for heroes?
9. **Annotated image.** It's used once. Build it, or let it fall back to a plain image with a numbered list underneath, as Apple News does?

## Plan

Each module becomes its own block in the article section of `BeGiantAppPhone.dc.html`, driven by typed body items in `bg-app-data.js`. Today's `{isQ:true}` becomes one of several kinds: `{k:'h'}`, `{k:'img'}`, `{k:'pair'}`, `{k:'gallery'}`, `{k:'video'}`, `{k:'rel'}`, `{k:'news'}`, `{k:'rule'}`, `{k:'parallax'}`, `{k:'callout'}`. `isQ` keeps working. A `mods` prop on the phone (off by default) turns on the new kinds in the main article. The board gets an "Article modules" section with one phone per module, each on a preset that scrolls to it (`art-mod-gallery` and so on). Everything follows `CLAUDE.md`: square media, #E6E6E6 hairlines, the serif never bold, Phosphor light icons, functional text at 11px or more, sentence case, Canadian spelling.

Icons needed from the Phosphor light set, copied into `assets/light/` rather than drawn: `arrows-out`, `pause`, `speaker-simple-slash`, `speaker-simple-high`, `images` (gallery count), `link` (optional).

### Phase 1: fill the gaps (structure first)

| Module | Mobile version |
|---|---|
| Text styles | H3 and H4 subheads in the serif at regular weight (as on the website, never bold), sized a step above the body text. Inline links underlined, opening the story in-app when they point to Be Giant. Bullet lists. All of it scales with the Aa size setting. |
| Inline image | Medium and small go to the body width (24px gutters). Full width goes edge to edge. Floats become centred. The photo keeps its own shape, square-cornered. Caption and credit sit below at 13px. Tapping opens the viewer (Phase 2). |
| Divider | A hairline rule, or a short centred rule, with generous space around it |
| Image pair | Stacks to two full-width photos, each with its own caption, then the shared caption. This matches the web and Apple News on phones. |
| Related read | A single row: "Related" overline, title, and a square thumbnail at 72px. The whole row is the tap target, at least 64px tall. It opens the story with the existing fly transition. It also marks that story so More like this skips it. |
| Related stories | The same row style, up to three, under its heading |

### Phase 2: media

| Module | Mobile version |
|---|---|
| Video, social width (most) | A 9:16 poster at about 80% of the body width, centred, with a large play button (56px) and the title and duration below rather than over the image. Tap to play full screen, using the Video tab player for uploads. Shorts open in a YouTube player sheet. No autoplay. |
| Video, body and full-bleed | A 16:9 poster at body or full width, the same controls |
| Gallery | Full-width swipe, one photo per page, each keeping its shape inside a fixed 4:5 frame. No animated height. "1 of 4" and 44px previous and next buttons sit below, with the caption for the current photo. Tap for the full-screen viewer. |
| Full-screen photo viewer | Black, pinch to zoom, swipe between the photos of the same story, caption toggled with a tap, a 44px close button, and swipe down to dismiss with a visible cue. Shared by all image modules. |

### Phase 3: editorial asks and showpieces

| Module | Mobile version |
|---|---|
| Newsletter CTA | A cream inline card (the same allowance as the topic nudge) with heading, one line and a single button. Signed in: one tap subscribes and shows a confirmation. Guest: follows P1.3. Hidden once subscribed. |
| Callout | A bordered box with overline, serif title, body and one full-width button. A survey opens in the in-app browser. The editor's SVG icon is dropped on mobile, or kept small. |
| Parallax | Depends on question 2. Default proposal: full-bleed photo at the screen height, then each content block as a white or dark text card that scrolls up over it once. Display text at 32px serif light. Reduce Motion and the larger Aa sizes switch to a static photo followed by text. |
| Annotated image (if in scope) | Square photo with numbered dots of at least 28px. Below it, a numbered list of labels and descriptions, always visible. Tapping a dot scrolls to its item, and the reverse. No hover, no hidden slider. |

### Phase 4: fallbacks only

Horizontal scroll becomes stacked panels: media then caption, like Apple News. Social posts, HTML embeds and audio become a plain link card ("View on Instagram" or "Open the chart"), opening in the in-app browser. Footnotes become a numbered notes list at the end of the story at body-adjacent size. Nothing here gets a bespoke design unless editors start using it.

### End of round

Update the PRD v2 feature inventory (Article reading view), decisions log and round log. Close or reword Q6 if the video answer settles it.

## Questions for Field Office

1. **Body payload.** Will the app receive the raw Portable Text body (block types as in `articleBody.tsx`) and render it natively, or HTML, or a converted form like the Apple News one? The plan assumes native rendering of these block types.
2. **YouTube Shorts.** For native playback of in-article video, can Be Giant upload the originals to Mux (already used for heroes) or Sanity? Otherwise every in-article video has to go through the YouTube iframe player, with its branding and no autoplay.
3. **Newsletter subscribe.** Is there an API for one-tap subscribe with the reader's account email, for the newsletter CTA? Can the app know whether a reader is already subscribed?
4. **Parallax and scroll effects.** Is a scroll-linked pin feasible and smooth in SwiftUI at article scale, or should parallax be native-static from the start?
5. **Fallback rule.** When the app meets a block type it doesn't know (new blocks will keep arriving), what should it do: skip it silently, or show a link card to the web version?
6. **Links.** Will internal links (article, author, topic, page) resolve to app screens through universal links (PRD, Field Office row)?
7. **Schema drift.** The gallery schema promises thumbnails and pop-ups that the site doesn't render, and the parallax docstring says mobile has no parallax while the code pins the image on phones. Which is intended? It affects what editors expect to see in the app.

## Phase 1: built (October 23, 2026)

Board section **03b · Article modules · Round 9, Phase 1**, right after 03 Article: seven phones, one per module, each with `mods="on"` and a preset that scrolls to its block. At Gabriel's request (same day), the app view (`#app`, the shareable app) also has `mods="on"`, and the two test stories sit at the top of Latest on Home. Other board phones keep the prop off.

**Test content.** Two real begiant.ca stories, ported from Sanity with their text, photos, captions and links:

- "Inside 7 of Canada's biggest challenges – and how we can meet them" (`rbc`). It has seven H3 subheads, 11 links, an image pair, an inline image, three related reads and a pull quote.
- "How tapping into the Earth's layers could yield limitless energy" (`geo`). It has a small, a medium and a full-width image, three short dividers, a related-stories box, 6 links and a pull quote.

Five more entries (`mda`, `arctic`, `spaceport`, `cups`, `sewage`) are the stories those related reads point to: the real headline, dek, photo and opening paragraph, like the app's other short entries. `rbc` and `geo` are in `ST` (so they show in Home's Latest, search and Your next read, and `ORDER` puts them after the family story). The five short entries stay in `MST`, outside every list, and open only from those two stories. Latest now lists five stories instead of three; trim it once Phase 1 is approved. The newsletter CTAs and the video in the originals are left out until Phases 2 and 3. Lists are supported but not shown, since neither story has one (only 2 published articles do).

**What each block does** (`modBlocks()` in `BeGiantAppPhone.dc.html`):

| Block | Data | Mobile version as built |
|---|---|---|
| Subhead | `{k:'h', text}` | Serif at regular weight, 22 to 28px following the Aa size, 14px of extra space above |
| Links and italics | `{k:'p', r:[...]}` runs | Underlined in the text colour, 1px. A begiant.ca story the app has (matched by `slug`) opens in place. A topic link, an unknown story or an outside site shows a toast saying where it would go (the topic, the story in the app, or the site in the in-app browser). |
| List | `{k:'ul', items}` | 6px square bullets in the text colour, at body size |
| Inline image | `{k:'img', size}` | Small and medium at body width, full width edge to edge with the caption kept on the text margin. Each keeps its own shape (aspect ratio read from the Sanity file name, so the layout doesn't jump). Square corners. The design system's FigureCaption sits below. |
| Image pair | `{k:'pair'}` | The two photos stack at body width, then per-image captions if set, then the shared caption |
| Divider | `{k:'rule', style}` | Short (64px, centred), line or dotted, in the text colour, 22px above and below |
| Related read | `{k:'rel', id}` | Ink rule above, hairline below. "Related" overline, serif headline (18 to 24px with Aa), byline and read time, an 80px square photo. The whole row is the tap target and opens the story with the photo transition. |
| Related stories | `{k:'rels', head, ids}` | The editor's heading, then up to three rows in the same style. Missing stories are skipped. |

Stories shown by a related read or related stories are skipped in More like this (only while `mods` is on).

**Checked in the browser.**

- Every preset scrolls to its block.
- Night page and the largest Aa size, for subheads, links and related rows.
- A story link opens MDA in place.
- The related read and the related stories rows open their stories.
- An outside link and a topic link show their toasts.
- With mods off, the RBC story shows plain paragraphs only.
- The board loads with no console errors, and the 03 Article phones still show the family story's pull quote.

**For the PRD (coordinating session):** the feature inventory row for "Article reading view" can drop "inline images" from Missing once Phase 1 is approved and switched on. Proposed decision: in-body modules follow `docs/round-9/article-modules.md`. Phase 1 shipped opt-in.

**Next:** Phase 2 (video, gallery, full-screen photo viewer).

## Phase 2: built (October 23, 2026)

Gallery, video and a full-screen photo viewer. Gabriel asked for more real articles with each batch, and for everything to land in the app view as well as the board.

**Four more real stories**, ported by `docs/round-9/port-article.py`. The script reads the public Sanity API and converts the Portable Text body into the prototype's block format. In app terms, the stories are:

| Id | Story | Shows |
|---|---|---|
| `bears` | How to protect a little industry when a big one comes to town (Tom Jokinen, Oct 22) | Full-width gallery (5), image pair, inline image, pull quote, related read |
| `fishway` | This simple idea is booting an invasive species out of a Hamilton marsh (Brian Banks) | Gallery (4), YouTube Short, related read, related stories |
| `parking` | The parking lot that's keeping the lights on (Connor Garel) | Gallery (3), YouTube Short, pull quote, links |
| `historica` | Canada's long history of taking on the impossible – and winning (Anthony Wilson-Smith) | 16:9 YouTube video, bulleted list, related stories |

Five more short entries are the targets of their related reads: `polyunity`, `ocean`, `winnipeg`, `upside` and `churchill`.

**Home:**
- Latest is now `bears`, `fishway`, `parking`, `rbc`, `geo`.
- Popular is now `historica`, `potash`, `productivity`, `mls`, `summit`, `church`. `rover`, `solar` and `coast` drop off Home, but stay in search and For You.
- `ORDER` runs family, bears, fishway, parking, rbc, geo, historica, then the rest.

Newsletter CTAs, callouts and parallax are already in the data as `{k:'news'}`, `{k:'callout'}` and `{k:'parallax'}`, so Phase 3 won't need a re-port. They render nothing until then.

**What each block does:**

| Block | Data | Mobile version as built |
|---|---|---|
| Gallery | `{k:'gallery', width, items:[{img, cap, credit}]}` | A native sideways scroller with snap, marked `data-hscroll` so it doesn't trigger the article's back-swipe. The frame takes the first photo's shape (clamped between 16:9 and 4:5), and other shapes centre inside it, so the controls never jump. Below it: 44px previous and next buttons with Phosphor carets, a "2 of 4" count, then the current photo's caption. Full width runs edge to edge, with the controls and caption on the text margin. |
| Video | `{k:'video', width, yt or src, title, dur, poster}` | Social width: a 9:16 poster at 78% of the column, centred. Body and full-bleed: 16:9. A 64px white play button, then the title (15px) and "YouTube · 0:58" below, not on top. The poster is the editor's, or YouTube's thumbnail cropped to shape. Tap opens a full-screen black player: YouTube in its own embedded player (youtube-nocookie, autoplay), uploads in the native player. Close is 44px. Nothing autoplays in the story. |
| Photo viewer | (every inline, pair and gallery photo) | Opens at the tapped photo and swipes through every photo in the story, with "3 of 8" at the top left and Close at the top right. Tap hides or shows the caption. Double-tap zooms 2x, and you scroll to pan; pinch is for the build. Swipe down (a handle shows at the top) or Close to leave. The status bar turns light while the viewer or player is open, and the phone's own gestures pause. |

**Board:** six more phones in 03b: Gallery, Gallery full width, Photo viewer (opened through a new `tapSel` preset option), Video Short, Video wide and List.

**Checked in the browser:**
- Every preset lands on its block.
- The gallery's next button moves to "2 of 4".
- Tapping the Short opens the player, and the YouTube embed plays.
- The viewer pages to "3 of 8" and closes.
- In the app view (`#app`), all six new and Phase 1 stories show on Home, and the fishway story opens with its gallery, video, image and related rows.
- One fix from testing: the Short player was sized taller than the space between its header and title, so it now fits.

**For the PRD (coordinating session):** Q6 (video autoplay) can be answered for articles: tap to play, no autoplay, as Gabriel accepted. The Video tab's own policy is still open.

**Next:** Phase 3: parallax, newsletter CTA, callout and annotated image.

## Phase 3: built (October 23, 2026)

Parallax, newsletter CTA, callout and annotated image, with four more real stories.

**Stories** (ported with `port-article.py`, which now also brings over annotated images, newsletter text and parallax paragraphs, and strips editors' zero-width spaces):

| Id | Story | Shows |
|---|---|---|
| `drucker` | The Canadian scientist behind Ozempic on why he never, ever gave up (Dan Bilefsky, Oct 2) | Two parallax blocks, newsletter CTA, image pair, full-width images, wide video, six dividers |
| `churchill` | The polar bear capital of the world has multibillion-dollar megaproject ambitions (Tom Jokinen, Oct 16) | Three parallax blocks (flexible text, one with the overlay off), newsletter, pair, Short. Replaces the earlier short entry. |
| `lungs` | Dr. Shaf Keshavjee's dream: first, fix lung transplants… (Karen Zagor, Sept 11) | Two display-style parallax blocks with an inset photo, dividers |
| `pelican` | How a Canadian cardiologist built a portable 'hospital in a Pelican case' (Rebecca Gao) | Annotated image (7 points), newsletter CTA, related stories |

There are two more short entries, `gold` and `milica`. The callout is shown on `parking`, from Phase 2.

**Home:**
- Latest is now `drucker`, `churchill`, `lungs`, `pelican`, `bears`.
- Popular is now `fishway`, `parking`, `rbc`, `geo`, `historica`, `potash`.
- `productivity`, `mls`, `summit` and `church` leave Home but stay in search and For You.

**What each block does:**

| Block | Data | Mobile version as built |
|---|---|---|
| Parallax | `{k:'parallax', bg, tone, tint, blocks:[{eyebrow, paras, style, img}]}` | The photo pins at the phone's height (`position:sticky` inside the article scroller), with the editor's tint (60, 40 or 25 %, or off). The text arrives after 78% of a screen, each block in a solid panel: ink at 90% with white text, or white for dark-tone blocks. Legibility never depends on the photo. Display style is the serif at regular weight, 26 to 32px with Aa. Flexible style is body text. An inset photo sits at the top of its panel. The photo lets go 62% of a screen after the last panel, and the caption follows on the text margin. **Still version**, used for Reduce Motion or Aa sizes 4 and 5: the photo in the column at its own shape, then the text with a 2px rule beside it. Nothing scroll-jacks: the page always moves at the reader's speed. |
| Newsletter CTA | `{k:'news', head, line}` | A cream card (the topic-nudge allowance), square, with an envelope icon and a "The Be Giant newsletter" overline. Then the editor's heading (default "Get our reporting by email"), their line and a 48px ink Subscribe button. Signed in: "Sends to [account email]", and one tap subscribes. Guest: an email field, and Subscribe sends a confirmation. It shares P1.3's `nl` state, so once subscribed the card says "You're subscribed" in that story, disappears from every other story, and Settings shows Subscribed. |
| Callout | `{k:'callout', over, title, body, btn, href}` | A 1px box in the text colour, with the overline, a 26px serif title and 16px body. One 48px outlined button with an arrow opens the link (in the build, the in-app browser). The editor's SVG icon is dropped. |
| Annotated image | `{k:'annot', img, pins:[{label, text, x, y}]}` | The photo at its own shape. Numbered points use the editor's mobile position when set, otherwise the desktop one. They're 30px white (34px ink when selected), with a 44px tap area. A line under the photo says the numbers are tappable. Below that, a numbered list of every label and description, always visible. Tapping a point selects it and scrolls its entry into view; tapping an entry selects its point. Tapping the photo opens the photo viewer. |

**Board:** seven more phones in 03b: Parallax (a panel over the pinned photo), Parallax arriving, Parallax still, Newsletter signed in, Newsletter guest, Callout and Annotated image (point 3 selected). Module presets now re-apply their scroll at 1.8 and 3.2 seconds, because the article grows as captions load. An `artOff` of 0 now counts.

**Fix outside the modules:** the frosted 50px strip behind the status bar was painted underneath the article body on `main`, because the body has z-index 1 and the strip had none. So it never showed over the text, though the 03 Article note says it should. It now has z-index 2. That keeps the clock readable over a pinned parallax photo, and over body text generally.

**Checked in the browser:**
- All seven presets land exactly on their block.
- The parallax photo pins and the panel scrolls over it.
- The still version shows at Aa size 4.
- Subscribe turns the card into "You're subscribed" and shows the toast.
- Tapping list entry 6 selects point 6.
- In the app view, Drucker opens from Home with all 16 of its blocks.
- The board loads 20 module phones with no script errors.

Not checked: Reduce Motion itself (the browser pane can't switch it on). The still version is the same one large text gets.

**Next:** Phase 4, fallbacks for horizontal scroll, social posts, HTML embeds, audio and footnotes. None of the published articles use them now, except two social posts.

### Parallax revision (October 23, 2026, Gabriel's notes)

- **No panel.** The text now sits straight on the photo, under the editor's tint, as on the website: white for light-tone blocks, ink for dark. A soft shadow behind the letters (`0 1px 2px` plus a 24px glow) keeps them readable. One Churchill block has the overlay off, so check that one on a phone.
- **Exit before release.** The runway after the last block is now a full screen plus 24px, so the last line leaves through the top before the photo lets go. Measured in the browser on three blocks: the photo is still pinned when the last line clears the top, and it releases about 24px of scroll later.
