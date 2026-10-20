# Be Giant — Design System

Be Giant is a **Canadian non-profit, non-partisan digital publication** reporting on "the people, places, ideas and breakthroughs shaping Canada's future." It publishes solutions-oriented journalism — long-form features, interviews, essays and short video — organized into three editorial **pillars** (People, Places, Ideas) and a set of recurring **series/franchises** (Future, Hear Me Out, Solve, The Exchange, Habitats, Brain Gains), each of which owns one accent colour.

The product is essentially one surface: **begiant.ca**, a Next.js 16 App Router frontend backed by a Sanity Studio CMS with a section-based page builder. Editors assemble homepages and pillar pages from a library of section types (split hero, full-bleed featured, editorial pillars, editors' picks, short stories, newsletter, people grid). There is no consumer app; the Studio is an internal surface and is not recreated here.

## Sources this system was built from

- **GitHub:** `https://github.com/field-office/client-giant` (branch `main`) — the production monorepo. Ground truth for every value in this system.
  - `frontend/app/globals.css` — the Tailwind `@theme` block: the entire token layer, brand palette, type scale, `@font-face` rules and editorial component classes.
  - `frontend/app/components/ui/*` — shadcn-derived primitives plus the house `ButtonUtilityOutline`, `LinkMore` / `CircledArrow`, `IconArrowTop`.
  - `frontend/app/components/snippets/*` — editorial primitives (article cards, topic badges, bylines, newsletter forms, share tools, filter bars).
  - `frontend/app/components/sections/*` and `templates/*` — the page-builder sections and the article / pillar / author / stories templates the UI kit recreates.
  - `frontend/public/{images,icons,illustrations,fonts}` — logo, icon set, illustrations, textures, gradients (all copied into `assets/`).
  - `.claude/skills/be-giant-design-tokens/SKILL.md` — the newsroom's own "always use tokens" rule, plus a hook that rejects hardcoded values.
- **Fonts (user-supplied):** `Gibson_v4-{Book,BookItalic,SemiBold,SemiBoldItalic}.woff2`, `SerrifCondensed-{Regular,SemiBold,SemiBoldItalic}.woff2`. In production these load from Typekit (`use.typekit.net/ltp4ljo.css`); the binaries here match `frontend/public/fonts/bought/`.

**Explore that repository directly** if you are building anything substantial against this brand — the section components carry layout decisions (aspect ratios, breakpoint behaviour, scroll-linked animation) in far more detail than a design system can hold.

### Missing from the sources

- **IBM Plex Mono** ships as a Google-hosted woff2 rather than a bought binary, matching how the app loads it via `next/font`.

---

## Content fundamentals

The voice is **newsroom-plain, specific, and quietly confident**. It never sells and never gushes. Copy earns attention with a concrete fact, not an adjective.

**Sentence case everywhere except utility type.** Headlines are sentence case: "The quiet race to rewire Canada", "A new kind of company town". Uppercase is reserved for *chrome* — eyebrows (`PILLARS`, `SERIES`), franchise labels (`THE EXCHANGE`), button labels (`VIEW MORE`, `SEE ALL`, `LEARN MORE`), nav links and footer column heads. Never set a headline in caps.

**Third person for journalism, second person for the reader's business.** Stories never say "we" or "I" outside a signed essay. The institution speaks in third person: *"A non-profit, non-partisan publication reporting on the people, places, ideas and breakthroughs shaping Canada's future."* Product copy addresses the reader directly and briefly: "Thanks for subscribing! You're on the list." / "You're already subscribed."

**Headlines are short and declarative; deks do the explaining.** A headline is 4–9 words and often a noun phrase. The dek adds the stake in one sentence: *"Inside the transmission buildout nobody is watching — and the eight-year window the country has to finish it."* Series headlines occasionally break the fourth wall in the franchise's voice ("Hear me out: kill the pilot project").

**Utility copy is terse and unbranded.** "View more", "See all", "Read more", "Subscribe", "Share", "12 min read", "148 results", "Sort: Newest". Buttons are verbs. There is no exclamation point in navigation, and no clever microcopy.

**Corrections are stated flatly.** "An earlier version of this story misstated the plant's annual capacity." Label first (`CORRECTION`, `CLARIFICATION`, `EDITOR'S NOTE`), date, then the fact. No apology theatre.

**Bylines are people-first.** "By Deborah Aarts · September 2, 2026 · 9 min read". Photo credit is a byline, not a caption — it runs at author weight ("Photos by Chantal Bennett"), never greyed out. Dates are always long-form: `September 2, 2026`, never `Sep 2` or `02/09/26`.

**No emoji. Anywhere.** Not in headlines, not in nav, not in newsletter copy. The one glyph exception is a `✓` in the newsletter success pill and `·` / `|` as separators.

**Canadian spelling and Canadian specificity.** Place names carry weight ("east of Thunder Bay", "Rivière-du-Loup", "Made in Windsor, again"); numbers are real and sourced.

---

## Visual foundations

### Type

Two families, sharply divided by job. **Serrif Condensed** (`--font-serif`) is the editorial voice: every headline, section head, card title, pull quote, newsletter heading and the footer mission line. It is set *light-to-regular* (300–400) at large sizes with `-0.01em` tracking — never bold. **Gibson Book** (`--font-sans`) handles everything else: body copy, deks, bylines, nav, buttons, captions, filter chrome. Body copy runs at weight 300–400; only eyebrows and section labels reach SemiBold (600).

The scale is fixed (see `tokens/typography.css`): display-xl 88/64, display 56, h1 48, h2 40, h3 32, h4 24, h5 20, h6 16; body 20/18/14; utility 14/12. Responsive steps go *down one token*, not to arbitrary sizes (`text-h2 md:text-h1`). Line-height tightens as size grows — 1.4 for body, 1.2 for card titles, 1.0–1.1 for display.

### Colour

The page is white or one of two warm papers — **Cream `#FAF7F0`** and **Beige `#EDE7DA`** — with **Ink `#171717`** type. Cream is the workhorse panel: newsletter blocks, the featured-story caption card, split-hero text panels. Beige appears in imagery-adjacent blocks. Ink is a full-bleed ground for the footer and the longform split hero.

The six accents (violet, purple, magenta, yellow, peach, red) are **franchise identifiers, not decoration**. Each series owns one; the only place a reader normally sees them is the 12px square swatch in a topic badge and the mega-menu series list. Brand red `#DB3A3A` doubles as the signal colour: correction labels, destructive actions, and the fill of a circled arrow on hover. Non-franchise topics use **Topic Neutral `#DCD6FF`**. Greys are structural only — Grey 500 `#A6A6A6` is the section rule, Grey 700 `#7A7A7A` is muted text. There is a dark theme (`.dark`) that inverts ink and background and keeps the accents unchanged.

**No gradients as decoration.** The only gradients in the system are (a) the hero scrim, a plain `to top, black/50 → transparent`, (b) a 96px white bottom fade on the overflowing "Latest" rail, and (c) four fixed two-colour SVGs used as *placeholder fills behind missing author headshots*. Nothing in this brand has a purple-blue gradient background.

### Backgrounds, texture, imagery

Photography is the primary visual material: documentary, on-location, warm-neutral, no filters, no duotone. Subjects are people at work and places under change — a geographer with a measuring device, a church mid-conversion, a storm front over prairie. Opinion and series pieces occasionally use **collage-style photo illustration** instead (cut-out figures on flat ground), and that is the only stylised imagery in the system. The live set is in `assets/imagery/`. Heroes are full-bleed at `4/5` on mobile and `16/9` (or a fixed 760px) on desktop, cropped from a hotspot. Card media is `16/9`; rail thumbnails `600/350`; small teasers and pillar tiles are square; the longform split hero uses `1/1`.

Texture is used exactly once and quietly: `footer-texture.png` tiled at 310px, **40% opacity in `mix-blend-mode: soft-light`** over the ink footer. Four tiny tile PNGs (`tile-1-*`, `tile-grid-*`) are available as repeating pattern grounds. The newsletter section sits on a full-cover SVG background (`Newsletter Sign Up.svg`) over cream.

### Geometry, borders, shadows

**The brand is square.** Media, cards, topic swatches, panels and pills all have `border-radius: 0`. Radius is reserved for interactive controls (`--radius-md`, 8px), avatars (`--radius-full`) and the newsletter success pill. If a rectangle has rounded corners, it is a control.

Structure comes from **hairline rules, not boxes**. Story cards have no border and no shadow; rail cards, sidebar items and filter bars are separated by 1px (or `0.5px` where the browser supports it) `--border-strong` rules. There are exactly two shadows in the system: `--shadow-header` (a 1px 6%-black hairline under the fixed header) and `--shadow-layer` (modals and the mega panel). Cards never get one.

Overlaid text is protected by a **scrim gradient** (`--overlay-hero`), not a capsule — except in the featured-story section, where the copy sits in a solid cream card over the photo. Transparency and blur appear only for the mega-menu backdrop: `black/20` plus `backdrop-blur(2px)`.

### Layout

A centred 1280px container with 24px gutters (12px on small mobile). Article bodies are capped at a 700px measure with an 800px hero measure; sidebars are 350px (article) / 320px (pillar) and sticky. Section rhythm is 48px vertical / 24px horizontal, stepping to 64–80px for full-width sections. Full-bleed sliders escape the container with a `left:50% / translateX(-50%)` trick capped at the container width, then re-inset their track by 24px so the first card lines up with the heading. The header is **fixed** and offset by a static spacer — on the homepage it starts 250px tall (a giant wordmark) and scrubs down to 48px over the first scroll, once per two-day cookie window.

### Motion and states

Motion is functional and short. Global default `250ms`; `150ms` for opacity fades; `300ms` for the 1.05 image scale on card hover; `500ms` with `cubic-bezier(0.16,1,0.3,1)` for pillar thumbnails growing 80px → 160px. The header intro uses a GSAP `ScrollTrigger` scrub (`0.35`) driving one custom property; the hero image drifts via CSS `animation-timeline: scroll()` where supported, and degrades to a static crop otherwise (and under `prefers-reduced-motion`). One keyframe animation exists for entrances: `fadeIn` — 400ms, opacity 0→1 with `scale(0.97)→1`. Nothing bounces.

**Hover:** nav links, icons and topic badges drop to `opacity: 0.6`; outline buttons and headline links to `0.8`; card headlines underline; card media scales to 1.05; the circled arrow scales 1.1, fills brand red and turns its glyph white. **Press:** the subscribe button lifts to `scale(1.03)` on hover and returns to `1.0` on active — the only transform-based press state. **Focus:** a 1px `--ring` (Grey 500) outline; the skip link surfaces at top-left. **Disabled:** `opacity: 0.5`, pointer events off.

---

## Iconography

The set is the brand's **own hand-drawn SVG library** in `assets/icons` — thin single-weight strokes, mostly a glyph inside a hairline circle. It ships as files loaded by `<img>` / `next/image`, not as an icon font or sprite, so `Icon` here does the same. Two shapes exist for most actions: bare (`icon-plus`, `icon-share`, `icon-arrow-top`) and circled (`icon-circled-plus`, `icon-circled-share`, `icon-circled-arrow-right`). Circled variants read as buttons; bare ones sit inside text and labels. `icon-arrow-top` — a diagonal arrow-out-of-corner — is the "learn more" mark and lives inside `ButtonUtilityOutline`.

Arrows are the brand's most-used glyph, and the `LinkMore` circled arrow is drawn inline as SVG (not loaded) precisely so its hover state can recolour the circle and glyph independently. That is the one legitimate inline-SVG case; everywhere else, load the file.

The app also imports a handful of **lucide-react** icons in chrome only — `Menu`, `Search`, `User`, `ChevronRight` at `strokeWidth={1.5}` — alongside local equivalents (`icon-menu.svg`, `icon-search.svg`, `icon-account.svg`). Either is faithful; the local files are preferred here so the system has no CDN dependency. Social platforms in `assets/icons/social/` (Bluesky, Instagram, LinkedIn, TikTok, Twitter/X, YouTube) exist as marks, but **the footer renders platform names as words, not icons**.

**No emoji, and no Unicode characters used as icons.** The only Unicode glyphs in the UI are `·` and `|` as separators and `✓` inside the newsletter success pill. Illustration is rare and reserved: three newsletter drawings (`BG-Illo-Newsletter_*`), a 404 illustration, `girl-on-planet.svg`, and a funding badge. Never invent new illustration in this style.

## Intentional additions

Two components have no direct counterpart in the repository, added so recreations don't hand-roll them:

- **`Icon`** — a thin wrapper over `assets/icons/*.svg`. The app references those files inline at each use site; a wrapper keeps agents from drawing SVG paths from memory.
- **`Eyebrow`** / **`SectionHeading`** — the app expresses these as the CSS classes `.text-eyebrow` and `.heading-section` rather than components. They are packaged as components here (the classes are still in `tokens/base.css`).

Everything else maps 1:1 to a file in `frontend/app/components`.

---

## Index

| Path | What's there |
| --- | --- |
| `styles.css` | Entry point — `@import` list only. Consumers link this one file. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `semantic.css`, `base.css` (named editorial text classes). |
| `assets/` | `logo-be-giant.svg`, `icons/` (24 glyphs + `social/`), `illustrations/`, `gradients/`, `textures/`, `fonts/`, `imagery/` (22 editorial photographs supplied by Be Giant). |
| `components/` | React primitives, grouped by concern (below). |
| `guidelines/` | 22 specimen cards — the Colors / Type / Spacing / Brand groups in the Design System tab. |
| `ui_kits/website/` | Click-through recreation of begiant.ca — homepage, stories index, article, author. |
| `SKILL.md` | Agent-Skills wrapper so this folder works inside Claude Code. |
| `github.md` | Upstream repo association and sync record. |

### Components

**core/** — `Button`, `ButtonUtilityOutline`, `Icon`, `Input`, `Badge`, `Card` (with `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`), `Separator`, `Skeleton`

**editorial/** — `ArticleCard`, `ArticleCardSmall`, `RailCard`, `TopicBadge`, `AuthorByline`, `DateDisplay`, `SectionHeading`, `Eyebrow`, `LinkMore` (with `CircledArrow`), `FigureCaption`

**navigation/** — `HeaderNav`, `Footer`, `Breadcrumb`, `PillarFilterBar`

**forms/** — `NewsletterForm`

**feedback/** — `EditorialNotice`, `ShareTools`

Each directory carries a `<Name>.jsx`, a `<Name>.d.ts` props contract, a `<Name>.prompt.md` usage note, and one `@dsCard` HTML showing its states.

### Rules of thumb

1. Never hardcode a size or colour — every value has a token, and the upstream repo has a hook that rejects edits that don't use one.
2. Serif for editorial, sans for everything else. Serif is never bold.
3. Square corners for content, rounded only for controls.
4. Hairline rules instead of card borders and shadows.
5. Accent colours identify a franchise. They are not a palette to decorate with.
6. Uppercase is chrome. Headlines are sentence case.
7. Load the brand's own icons; do not draw SVG.
