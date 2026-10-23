# Article reading view
**ID prefix:** ART · **Status:** Designed (body modules: see `07-article-modules.md`) · **Last changed:** Round 9 article modules, October 23, 2026 · **Board:** 03 Article (Hero, Body and progress, Text and page, Night page, Listen, Share, Follow similar topics), 03b Article modules · **Prototype:** `BeGiantAppPhone.dc.html` (`hasArt`, `onArtScroll`, `artTools`, `a.blocks`) · **Decisions:** D8, D9 (amended by D45), D13, D15, D29, D41, D45–D48 · **Open questions:** Q4
**Affects / depends on:** `07-article-modules.md` (the body), `02-app-shell-and-navigation.md` (tools replace the tab bar; back swipe), `05-home-and-for-you.md` and `10-saved.md` (reading progress, Jump back in, finished count), `12-notifications-newsletter-listen-share.md` (Listen, Share), `04-guest-and-account-gating.md` (follow and save asks, read counts for the topic nudge).

## Summary
One scrolling page per story: hero photo, headline block, the body (paragraphs plus modules), then Follow similar topics, More like this and Your next read. While an article is open the tab bar is replaced by six reading tools. Progress is a 2pt line under the status bar.

## Elements and behaviour

| ID | Element | Behaviour | Spec | Data |
|---|---|---|---|---|
| ART-01 | Open | Tapping a story card flies its photo into the hero position, then the page appears. From a list without a photo, the page slides in from the right. | Shared element 440ms ease-out; slide 340ms. | — |
| ART-02 | Hero photo | Full width, fixed height, cropped to the editor's hotspot. Scrolls with a slight parallax and darkens. | 520pt tall. While scrolling the first 640pt: moves down at 0.45 × scroll, scales up to 1.05, brightness down to 0.7. | `heroImage{asset, crop, hotspot}`; `mobileHeroImage` when `useMobileHeroImage`; no hero if `hideHeroImage` |
| ART-03 | Hero caption | Caption and credit under the photo on the page colour. | Design system FigureCaption, 12pt; 24pt side margins. | `heroImage.caption`, `heroImage.credit` (fallbacks CMS-08) |
| ART-04 | Topic and pillar | Topic square in the topic's colour, topic name, the star if followed (D37), then the pillar. | Square 12pt; labels 12pt uppercase. | `topics[0]->{title, color}`, followed state (CMS-50), `coalesce(primaryPillar, pillar)->title` |
| ART-05 | Headline | Serif, never bold. | 34pt, line height 1.04 (D29). | `title` |
| ART-06 | Dek | Under the headline. | Gibson 19pt, line height 1.4, muted. | `dek` |
| ART-07 | Byline | Writer avatar, "By [writer] · [photographer]", date and read time. | Avatar 40pt round; 14pt / 12pt. Author profile screen is not designed (feature inventory). | `authors[]->{firstName, lastName, headshot}` (CMS-07; hidden if `hideAuthors`), `photosCredit`, `photosCreditLabel`, `publishedAt` (hidden if `settings.hideArticleDates`), `readTime` |
| ART-08 | Body | Paragraphs and modules in a 24pt-margin column, 18pt between blocks. | See `07-article-modules.md`. Body text at the Aa size, line height 1.6. | `body[]` via `articleBodyBlocksProjection` (CMS-21) |
| ART-09 | Pull quote | Serif quote between an ink rule above and a hairline below, attribution under it. | 32pt, line height 1.08; attribution 13pt muted. Same in all stories. | `pullQuote.quote`, `pullQuote.attribution` |
| ART-10 | Follow similar topics | Overline, serif line "Get more stories like this in For You", then up to three topic rows and the writer. Each row has a Follow button that becomes Following with a check. | Rows 64pt min; button 36pt tall in a 44pt target, 8pt radius, 11pt uppercase. Follow fills ink and grows a check (250ms); a toast confirms. Works for guests (D26). | `topics[]->{title, slug, color}` (first three), `authors[0]`; follows (CMS-50) |
| ART-11 | More like this | Three stories sharing a topic, as rows with an 104pt square photo. Stories already shown in the body by a related read or related stories block are skipped (D47). | Serif 21pt titles, 12pt meta. | Q-MORELIKE |
| ART-12 | Your next read | Ink rule, overline and arrow, then a 16:10 photo, topic, serif headline, dek and meta. Tapping opens the next story in the editorial order. | Headline serif 26pt. | No editorial source (the prototype's order is prototype reference only). Proposal: the first Q-MORELIKE story not already shown. |
| ART-13 | Reading tools | Replace the tab bar while reading: Back, Aa, Listen, Night (contrast), Share, Save. Hide on scroll down, return on any scroll up and at the end. | Hide after 8pt of downward scroll once past 300pt; show on 8pt upward scroll or past 97% read. 250ms. | — |
| ART-14 | Progress line | 2pt line under the status bar, in the text colour on a faint track, inside the frosted strip (FND-03). | Strip and line fade in after 470pt of scroll. | — |
| ART-15 | Aa panel | Glass panel from the Aa button with five size stops. Body, subheads, lists, related titles and parallax text resize live. | 0.97 to 1 scale, 320ms. Sizes: see FND-21. At the two largest sizes, parallax turns still (`07-article-modules.md`). | App state (device), CMS-55 |
| ART-16 | Night page | Contrast button switches the page to ink with white text; rules, captions and tools follow. | Crossfade 250ms. Light or dark only (D15). | App state (device), CMS-55 |
| ART-17 | Save | Save tool toggles saved; the icon fills. | Toast "Saved for offline reading" with View. Guests: second save triggers the account ask (D24). | Account, CMS-51 |
| ART-18 | Share | Native share sheet (D41). | See `12-notifications-newsletter-listen-share.md`. | URL `https://www.begiant.ca/stories/{pillarSlug}/{slug.current}` |
| ART-19 | Listen | Mini player rises above the tools. | See `12-notifications-newsletter-listen-share.md` (Q4). | See LISTEN; SCR-06 |
| ART-20 | Back | Back tool, or an edge swipe from the left. | Swipe past 120pt closes; otherwise snaps back (250ms). Horizontal scrollers in the body (galleries) don't trigger it. | — |
| ART-21 | Reading progress | Progress is saved for saved stories; leaving at 90% or more counts the story as finished (feeds the end-of-Home reading card and the rating prompt after three finished stories). A story left 10 to 90% read in the last 7 days feeds Jump back in (D20). | | Account, CMS-52 |
| ART-22 | Website hero options | The app has one article hero. The website's hero variants and layout flags don't change the app. | — | `heroType`, `headlineBelowImageOnMobile`, `showSidebar`, `layout`, `heroImageDisplay`: ignored by the app |

## States
- Light (default) and night (ART-16).
- Guest and signed in: same page; asks follow `04-guest-and-account-gating.md`.
- Corrections, clarifications and editor's notes: built only in the board's card-home trial article; not designed for this view (feature inventory).
- Loading, error and offline: Not designed. Saved stories are read offline (`10-saved.md`).
- Swipe to the next article: Not designed.

## Motion
ART-01, ART-02, ART-13, ART-15, ART-16 above. Reduce Motion: the hero parallax (ART-02) should stay still; not yet specified in the prototype.

## Accessibility
- Tools are 44pt targets. The Back tool needs the label "Back"; Aa "Text size"; Night "Dark page".
- Body sizes should map to Dynamic Type (FND-21).

## Data and analytics
- Query: Q-ARTICLE in `13-content-model.md` (reuses the website's `articleQuery`). Every row above names its fields.
- Per reader: saved state, progress (0–1), finished flag, follows.
- Proposed events: article_open (source), article_progress (25/50/75/90%), article_finish, follow_topic, follow_writer, save, share, listen_start, text_size_change, night_toggle.

## Open items
- Author profile screen (Must, not designed).
- Corrections and editor's notes block in this view.
- Reduce Motion for the hero parallax.
- Swipe to the next article.
