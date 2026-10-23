# Author profile
**ID prefix:** AUTH · **Status:** Designed (pagination and multi-author bylines Fallback planned) · **Last changed:** Round 11, October 23, 2026 · **Board:** 10 Author profile (Profile, Stories by Lisa, Following, No stories yet); 11 Loading (Loading more) · **Prototype:** `BeGiantAppPhone.dc.html` (search `hasAu`, `auVals(`, `openAuthor(`, `closeAuthor`, `openAuStory(`, `onAuScroll`); writer data `AUTH` in `bg-app-data.js` (ported from Sanity by `docs/round-11/port-authors.js`; prototype reference only); presets `author`, `author-list`, `author-following`, `author-none`, `author-more` · **Decisions:** D54 (and D24, D26, D52) · **Open questions:** none numbered; see Open items
**Affects / depends on:** `06-article.md` (ART-07 byline and ART-10 writer row open the profile), `11-account-and-settings.md` (SET-19 writer rows open the profile), `02-app-shell-and-navigation.md` (pushed screen, left-edge back, tab bar stays as tabs), `04-guest-and-account-gating.md` (Follow counts toward the third-follow ask), `12-notifications-newsletter-listen-share.md` (Writers you follow alerts), `13-content-model.md` (Q-AUTHOR, universal link `/author/{slug}`), `15-loading-errors-offline.md` (LOAD-06 paging).

## Summary
A writer's page, built to match begiant.ca/author/{slug} in content and order: a "Writer" eyebrow, the name centred in the serif on two lines, the bio, a Learn more link to the writer's website, then "Stories by {first name}" with their stories newest first. The app adds two things the website doesn't have: Follow (the same follow as the end of a story) and Share. Like the website, there is no headshot on the page. It is a pushed screen over whatever opened it. Values are iOS points.

## Elements and behaviour
| ID | Element | Behaviour | Spec | Data |
|---|---|---|---|---|
| AUTH-01 | Entry points | Opens the profile, pushed from the right. | From the byline (ART-07), the writer row at the end of a story (ART-10, tap the name; the button still follows), and Settings › Following (SET-19, tap the name). Also the universal link `/author/{slug}` and in-body author links (`markDefs` `linkType == "author"`). Push 340ms EX. | `author.slug.current` |
| AUTH-02 | Header bar | Back and Share over the page; turns frosted with the name once the hero scrolls away. | 102pt tall; controls in a 44pt row 58pt from the top, 8pt side inset. Back `caret-left` 22pt; Share `share-fat` 22pt. Clear at rest; after 150pt of scroll: white at 86%, blur 20, saturate 1.6, 1pt `#E6E6E6` bottom rule, name 15pt SemiBold fades in (200ms). | `firstName` + `lastName` (CMS-07) |
| AUTH-03 | Eyebrow | "Writer". | 11pt SemiBold .14em uppercase `#7A7A7A`, centred, 128pt from the top of the screen. | — |
| AUTH-04 | Name | First name on line one, last name on line two, as the website. | Serrif Condensed 48pt, line height 1, -.01em, centred, 22pt gaps. Long names wrap within each line. | `firstName`, `lastName` |
| AUTH-05 | Bio | The writer's bio, plain text. | Gibson 16pt, line height 1.65, `#3D3D3D`, centred, 28pt side padding. Hidden when empty. Italics in the bio (publication names) should keep Gibson Book Italic, as the website does. | `bio` (`blockContentTextOnly`; render its marks) |
| AUTH-06 | Follow | Follows or unfollows the writer. | 44pt, padding 0 20, radius 8, 11pt SemiBold .12em uppercase, 1pt ink outline. Following: ink fill, white text, check grows in (250ms). Toast "Following {name}" / "Unfollowed {name}". Works for guests; counts toward the third-follow ask (D24) and the first-follow alert ask (D26). | Follows (CMS-50) |
| AUTH-07 | Learn more | Opens the writer's site in the in-app browser. | `arrow-up-right` 16pt + "Learn more" 11pt SemiBold uppercase, 44pt target. Hidden when there is no link. | `website`, else the first `socialLinks[].url` (platform `website` first) |
| AUTH-08 | Share | Native share sheet (D41) with the profile URL. | Prototype shows a toast only. | `https://www.begiant.ca/author/{slug}` |
| AUTH-09 | Stories heading | "Stories by {first name}". | Serif 32pt, line height 1.05, 64pt above, 20pt below, left aligned, 24pt side padding. | `firstName` |
| AUTH-10 | Story card | One per story, newest first. Tap opens the article. | 16:10 photo, square, full width; 12pt gap; topic tag (12pt square + 12pt uppercase, star when followed, HOME-11 rule); headline serif 24pt, line height 1.08; dek 15pt `#5C5C5C` (hidden when empty); meta 12pt `#7A7A7A` "{date} · {n} min read", with "With {other writers} · " first for co-written stories. 40pt between cards. Swipe to save as on other lists (D13); not wired in the prototype. | Q-AUTHOR `articleCard` |
| AUTH-11 | Empty | A writer with no published stories. | One line under a hairline: "No stories yet. Follow {first} to hear when the first one is published." 15pt `#5C5C5C`. | count = 0 |
| AUTH-12 | More stories | Pages 20 at a time, loading the next page 600pt before the end (LOAD-06). | The prototype ports each writer's latest 8 stories and shows "The latest 8 of {n} stories" 12pt `#7A7A7A` centred under a hairline; the build replaces it with paging. | Q-AUTHOR with `[$from...$to]` |
| AUTH-13 | Back stack | Back, or a swipe from the left edge (D52), returns to what opened the profile. A story opened from the profile pushes over it; closing that story returns to the profile, and closing the profile returns to the story the reader came from. | Native: a normal navigation stack. The tab bar shows the tabs (not the reading tools) while the profile is on top. | — |

## States
- **Default:** as above. **Following:** AUTH-06 filled. **No link:** AUTH-07 hidden. **No bio:** AUTH-05 hidden.
- **No stories:** AUTH-11. **Loading:** the hero text shows at once from the byline data; cards load as skeletons (LOAD-03 style). **Offline:** cached profile, else ERR-03.
- **Unknown or unpublished writer (link):** ERR-05 Not found.
- **Several writers on one byline:** decided (D61): tapping the byline opens a short sheet listing each writer with Follow; tapping a name opens the profile. Not built yet; the prototype opens the first writer who has a profile.

## Motion
Push and pop 340ms / 300ms EX, like the article. Header frost 250ms. Follow check 250ms.

## Accessibility
- Header title is the screen's accessibility label ("{name}, writer"). Back and Share 44pt with labels.
- Follow announces its state ("Follow Lisa Hrabluk", "Following"). Cards are single buttons labelled with the headline, then dek and meta.
- Dynamic Type: the name may wrap more than two lines at the largest sizes; never truncate it.

## Data and analytics
- **Q-AUTHOR** (`13-content-model.md`): `*[_type == "author" && slug.current == $slug][0]{firstName, lastName, slug, bio, website, socialLinks[]{platform, url}, headshot, gradient, "count": count(*[_type == "article" && references(^._id) && <live>])}` plus `*[_type == "article" && references($id) && <live>] | order(publishedAt desc)[$from...$to]{articleCard}`.
- `headshot` and `gradient` are not shown on the profile (the website doesn't either) but stay in the byline avatar (ART-07: headshot, else the initial in the gradient circle).
- Proposed events: `author_open` (source: byline, article_end, following, link), `follow_writer` (source: author_profile), `author_story_open`, `author_link_open`.

## Open items
- Multi-author byline sheet: decided (D61), build next round.
- Whether series should get their own page later: Series hub removed from V1 (D53).
- Prototype: the 8 latest stories per writer and their first paragraphs are stubs ported from Sanity on October 23, 2026; re-run `node docs/round-11/port-authors.js` to refresh.
