# Foundations
**ID prefix:** FND · **Status:** Designed · **Last changed:** Round 9 article modules, October 23, 2026 · **Board:** every section · **Prototype:** `BeGiantAppPhone.dc.html` (`<helmet>` keyframes, `const W = 402, EX =`), design system bundle `_ds/` · **Decisions:** D1, D15, D22, D27, D29, D34, D44 · **Open questions:** Q8
**Affects / depends on:** every other file. Change anything here and every area is affected; list it in the change log in `README.md`.

## Summary
The app follows the begiant.ca visual system: white pages, ink type, hairline rules, Serrif Condensed for editorial and Gibson for everything else. The audience skews 55 and over, so type is large, tap targets are obvious, and no feature depends on a hidden gesture without a visible alternative. The prototype canvas is a 402 × 874pt iPhone (iPhone 17 Pro class); build to iOS points.

## Platform

| ID | Topic | Spec |
|---|---|---|
| FND-01 | Target | iOS, iPhone, portrait. iPad is Later. Android is open (Q8). |
| FND-02 | Canvas | 402pt wide in the prototype. Layouts are fluid from 375pt to 440pt; nothing may assume 402. |
| FND-03 | Status bar | Native: content runs under the status bar with iOS 26's soft scroll-edge blur, controls above it (D34). The prototype's solid bar on the home-screen preview is a web limitation, not the design. In articles, a 50pt frosted strip (white at 86% with a 16px blur, or ink at 86% on the night page) fades in once the reader is past the hero and sits above all article content. |
| FND-04 | Safe areas | Respect top and bottom safe areas. Floating controls (tab bar, reading tools, mini player) sit above the home indicator. |
| FND-05 | Prototype-only behaviour | These exist only because the prototype is a web page: the "new version" Refresh toast, the board's `still` mode (no video or motion on board phones), toasts that stand in for the in-app browser or topic screens ("Opens … in the in-app browser"), YouTube played in an embedded web player. The native equivalents are named in each area file. |

## Colour

| ID | Token | Value | Use |
|---|---|---|---|
| FND-10 | Ink | `#171717` | Text, primary buttons, rules that open a section |
| FND-11 | White | `#FFFFFF` | Page background (D1) |
| FND-12 | Hairline | `#E6E6E6` | Rules between rows and blocks; night: `rgba(255,255,255,.18)` |
| FND-13 | Muted text | `#5C5C5C` (meta, captions), `#3D3D3D` (secondary body); night: `#A6A6A6` | |
| FND-14 | Feed-end grey | `#F0F0F0` | Surface below the Home and For You feeds; panels inside cards on it use `#F2F2F2` (D44) |
| FND-15 | Cream | `#FAF7F0` | Only: the unfinished-profile strip, the topic nudge and the in-article newsletter card. Not a page colour (D15, D44). |
| FND-16 | Night page | `#171717` background, `#FFFFFF` text | Article contrast tool (D15) |
| FND-17 | Brand red | `#DB3A3A` | Signals and the Get started button; not decoration |
| FND-18 | Accents | violet `#A293F5`, purple `#936A9B`, magenta `#DD68BB`, yellow `#F5CA55`, peach `#FF9072` | Series colours and topic chip check circles only (D27). Topic neutral `#DCD6FF`. |

## Type

| ID | Role | Spec |
|---|---|---|
| FND-20 | Families | Serif: Serrif Condensed (`--font-serif`), editorial only, **never bold**. Sans: Gibson Book / SemiBold (`--font-sans`) for everything else. |
| FND-21 | Article body | Gibson, line height 1.6. Five Aa sizes: 16, 17, **18 (default)**, 20, 22pt. In the build, map these to Dynamic Type so the system setting also moves them. |
| FND-22 | Article headline | Serif 34pt, line height 1.04 (D29) |
| FND-23 | Page titles | Serif, sized per screen (for example Settings and Saved 44pt, onboarding 32pt; D29) |
| FND-24 | Subheads in articles | Serif regular, 22 to 28pt following Aa (see `07-article-modules.md`) |
| FND-25 | Overlines and chrome labels | Gibson SemiBold 11pt, letter spacing 0.14em, uppercase. Uppercase only for chrome, never for headlines. |
| FND-26 | Minimum size | Functional text is never below 11pt. Captions 12 to 13pt; body never below 16pt. |
| FND-27 | Copy rules | Sentence case for headlines and buttons' visible text (buttons render uppercase by style), Canadian spelling, no emoji. |

## Shape, rules and layout

| ID | Topic | Spec |
|---|---|---|
| FND-30 | Square media | All photos and video posters are square-cornered, in feeds and in articles. |
| FND-31 | Rounded controls | Buttons and inputs 8pt radius; pills and round buttons fully rounded; chips 40pt tall (D27). |
| FND-32 | Floating cards | The one exception to square: 12pt card radius, 6pt media inside (end-of-Home cards; D22, D44). In-feed content and in-article blocks stay square. |
| FND-33 | Rules | 1pt hairlines in `#E6E6E6`. A 1pt ink rule opens a section or a related block. |
| FND-34 | Margins | Article column 24pt side margins; lists 20pt. Full-bleed media runs edge to edge. |

## Icons

| ID | Topic | Spec |
|---|---|---|
| FND-40 | Library | Phosphor, light weight (`assets/light/`), fill weight only for a few states (`assets/fill/`: bookmark, play, star, heart). Never draw custom SVG icons. |
| FND-41 | Size | 18 to 24pt in a 44pt tap area. On dark or photo backgrounds, icons are white (invert). |
| FND-42 | For You mark | Phosphor `star` (D37). Four-point stars are ruled out. |

## Motion

| ID | Topic | Spec |
|---|---|---|
| FND-50 | Easing | Standard ease-out `cubic-bezier(.16,1,.3,1)` for most movement; plain `ease` for fades. |
| FND-51 | Durations | Fades 200 to 250ms; panels and sheets 320 to 340ms; shared-element open into an article 440ms. |
| FND-52 | Reduce Motion | Every animated feature needs a still version. Built so far: greeting G4 (fade only), article parallax (still layout). Still missing: the Globe welcome, Home hero 6d, the swipe-to-save hint. |
| FND-53 | No scroll-jacking | Scroll-linked effects move at the reader's speed; nothing pins input or hijacks scrolling. |

## Accessibility baseline

| ID | Topic | Spec |
|---|---|---|
| FND-60 | Tap targets | 44 × 44pt minimum for every control, including icon buttons, gallery arrows and annotated-image points. |
| FND-61 | Hidden gestures | Every gesture has a visible alternative or a visible cue: swipe to save has a first-run hint; galleries have buttons; the photo viewer has a Close button and a handle for swipe down. |
| FND-62 | VoiceOver | Icon-only buttons need labels (the prototype uses `aria-label` where it has them). Gaps are listed in each area file. |
| FND-63 | Contrast | Text on photos sits on a tint or has a soft shadow; check every white-on-photo case on device. |

## Open items
- Dynamic Type mapping for every text style (only the article body has a size control today).
- Reduce Motion versions for the Globe welcome, Home hero and swipe hint (FND-52).
- Loading, error and offline states for every screen are not designed (PRD feature inventory).
