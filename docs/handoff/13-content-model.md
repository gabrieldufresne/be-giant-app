# Sanity contract
**ID prefix:** CMS (queries `Q-…`, schema change requests `SCR-…`) · **Status:** Partial (article, modules and lists mapped; schema changes pending) · **Last changed:** October 23, 2026 · **Source of truth for fields:** `field-office/client-giant` at `e8a1d3d` (October 22, 2026): `studio/src/schemaTypes/`, extracted schema `sanity.schema.json`, website queries `frontend/sanity/lib/queries.ts`, routes `frontend/lib/routes.ts` · **Open questions:** Q11, Q13, Q14, FO-2, FO-4
**Affects / depends on:** every content screen. Each area file's **Data** column points here.

## Summary
The native app reads the same Sanity project as begiant.ca: project `l3tzmu37`, dataset `production`. The prototype's data (`bg-app-data.js`) is a design reference only; nothing in the build should copy its shapes. This file lists what each screen queries, the fields each body module reads, the schema changes the app needs (SCR), and the rules for drafts, missing references, new block types, images, offline and datasets. Where the website already has a query, the app should reuse its projection so web and app can't disagree.

## Ground rules

| ID | Rule |
|---|---|
| CMS-01 | **Project and API.** Project `l3tzmu37`, dataset `production`, API version pinned to `2025-09-25` (the website's). Read through the API CDN (`useCdn: true`), perspective `published`. The dataset is publicly readable: the app needs no token for published content. **Never ship a token in the app.** |
| CMS-02 | **Development dataset.** Develop and test against the `dev` dataset, a mirror of production refreshed with the website's `npm run dataset:refresh`. Production builds use `production`. The same rule the website follows: never develop against production. |
| CMS-03 | **Drafts and preview.** The app shows published content only. Editors preview stories in Sanity Studio's Presentation tool on the website. If an in-app preview is ever needed, it is a separate internal build that uses a server-side token with perspective `previewDrafts`; not in V1. |
| CMS-04 | **What counts as live.** A story is listed only if `slug.current` is defined, `coalesce(primaryPillar, pillar)->slug.current` is defined, `publishedAt` is defined and `publishedAt <= now()`. The website's `HERO_LIVE_STORIES` uses the same filter. This keeps future-dated and half-filled stories out. |
| CMS-05 | **Missing or deleted references.** Dereferenced articles can be `null` (for example `relatedStories.articles` are weak references). Drop `null` items and any card without a slug or pillar slug; if a list ends up empty, hide its block (MOD-43). Never render an empty card. |
| CMS-06 | **New block types after the app ships (MOD-99).** Skip any body `_type` the app doesn't know, and log it to analytics. Never show an empty box. The website already does this: its Portable Text renderer and its Apple News converter both skip unknown types. When editors get a new block, add it to `07-article-modules.md` first, so the app can support it in a later release. |
| CMS-07 | **Writer names.** Display name = `author.firstName` + " " + `author.lastName`. Some author documents still carry a legacy `name` field that isn't in the schema; don't read it. |
| CMS-08 | **Captions and credits.** Fall back to the image asset's own metadata, as the website does: caption = field or `asset->description`, credit = field or `asset->creditLine`, alt = `alt` or `asset->description`. Image pairs are the exception: per-image captions have no fallback, and the shared caption falls back to the left image's asset. |
| CMS-09 | **Images.** Build URLs with Sanity's image URL builder (`@sanity/image-url`, or the same parameters on iOS): `auto=format`, width in pixels = points × screen scale (×3 on current iPhones). For fixed shapes (cards, gallery frame, 9:16 posters) use `fit=crop` with the image's `crop` and `hotspot`. For natural-shape photos, use `fit=max` and read the size from `asset->metadata.dimensions` so the layout reserves space before loading. Use `asset->metadata.lqip` as the placeholder. Quality 70 to 80. |
| CMS-10 | **Files.** Uploaded videos (`videoEmbed.videoFile`) and other files resolve to `asset->url`. |
| CMS-11 | **Caching.** Cache list queries for a few minutes and refresh on pull to refresh (HOME pull to refresh). The website uses a Sanity webhook to clear its caches; the app can poll on foreground. A Sanity webhook or Function could also trigger pushes (see SCR-02, Q13). |
| CMS-12 | **Offline (Saved).** When a story is saved, store the full article response (`Q-ARTICLE`), and download its body images at the widths the app will show. Video stays online-only, with a poster and a "needs a connection" note. Re-fetch when online if `_updatedAt` changed. Delete the files when the story is unsaved. Storage cap and a "storage full" message are not designed (`10-saved.md`). |

## Shared projections
Reuse the website's fragments from `frontend/sanity/lib/queries.ts`:

| ID | Projection | Fields |
|---|---|---|
| CMS-20 | `articleCard` (cards everywhere) | `_id`, `title`, `shortHeadline`, `slug.current`, `dek`, `authors[]->{firstName, lastName, slug, headshot}`, `heroImage` (= `cardImage` when `cardImage.asset` is defined, else `heroImage`), `thumbnailAspectRatio`, pillar slug and title (`coalesce(primaryPillar, pillar)->`), `publishedAt` (`coalesce(publishedAt, _updatedAt)`), `readTime`, `muxPlaybackId`, `videoOnArticleCards`, `topics[]->{title, slug, color, isFranchise}` |
| CMS-21 | `articleBodyBlocksProjection` (article body) | Expands every body block: image caption, credit and alt fallbacks; `relatedRead.article` and `relatedStories.articles` as `articleCard`; `newsletterCTA.newsletter->{title, description, externalId, active}`; link `markDefs` resolved to page, article (slug + pillar slug), author, topic and pillar slugs. **The app should use it unchanged** (answers FO-1). |
| CMS-22 | Topic | `title`, `slug.current`, `color`, `description`, `illustration`, `coverImage`; `isFranchise` = the topic is in any `series.topics[]` |

## Queries per screen

| ID | Screen (area file) | Source and filter | Projection |
|---|---|---|---|
| Q-HOME-LEAD | Lead story (`05-…`) | `homepage` singleton (`_id == "homepage"`): the `heroArticle` section's `article`, if `pinUntil` is unset or in the future; else the newest live story (CMS-04) | Card plus `heroImage` or `mobileHeroImage` and `heroFeatureImage` (when `useHeroFeatureImage`), `dek`, authors, `photosCredit` |
| Q-HOME-LATEST | Latest (`05-…`) | Live stories, newest first, excluding the lead | `articleCard` |
| Q-HOME-SHORT | Short stories (`05-…`) | Live stories with `readTime < 10`, newest first, excluding stories already on Home | `articleCard` |
| Q-HOME-POPULAR | Popular (`05-…`), Trending (`08-…`) | `trendingData` singleton: `articles[]->` minus `excludedArticles`, with `pinnedArticles` first; fallback: latest | `articleCard` |
| Q-WATCH | Watch rail (`05-…`), Video tab (`09-…`) | `shortStory` documents, newest `publishedAt` first (53 published); or the homepage `shortStoriesSection.stories[]` order when editors curate | `title`, `thumbnail`, `previewVideoUrl`, `fullVideoUrl`, `externalPlatform`, `duration` (seconds). Data today: 52 of 53 are YouTube Shorts links; 43 have no `thumbnail` and 47 no `duration`; none has `previewVideoUrl`. `externalHandle` is deprecated. |
| Q-FORYOU | For You (`05-…`) | Live stories whose `topics[]._ref` intersect the reader's followed topics, plus followed writers' stories, newest first, ranked by topics shared; exclude stories already read | `articleCard` plus the reason (which topic or writer matched; computed in the app) |
| Q-ARTICLE | Article (`06-…`, `07-…`) | One story by `slug.current` + pillar slug, as the website's `articleQuery` | Everything in `articleQuery`: header fields, `heroImage` with fallbacks, `body[]{articleBodyBlocksProjection}`, `topics`, `corrections`, `clarifications`, `editorNotes`, `relatedArticlesFromTopic`, `relatedArticlesFromPillar`, `relatedArticlesFallback`, `newsletter` |
| Q-MORELIKE | More like this, Your next read (`06-…`) | From Q-ARTICLE: `relatedArticlesFromTopic` (ranked by shared topics, then date), then pillar, then fallback; skip stories shown in the body (D47) | `articleCard` |
| Q-TOPICS | Onboarding topics (`03-…`), Discover topics (`08-…`), Following (`11-…`) | `topic` documents; the onboarding list and which start checked need SCR-04 | CMS-22 |
| Q-SEARCH | Search (`08-…`) | The website endpoint `GET /api/search?q=&type=&pillar=&topic=&page=&perPage=` (Typesense, with a GROQ fallback). No direct GROQ from the app. | As returned |
| Q-SAVED | Saved (`10-…`) | Reader's saved ids (account) → `*[_type == "article" && _id in $ids]` | `articleCard`; full Q-ARTICLE for offline |
| Q-NEAR | Near you, Discover by province (`08-…`) | **Blocked by SCR-01** | |
| Q-AUTHOR | Author profile (`14-…`) | `*[_type == "author" && slug.current == $slug][0]`; stories: `*[_type == "article" && references($authorId) && <live>] | order(publishedAt desc)[$from...$to]` | `firstName`, `lastName`, `slug`, `bio` (`blockContentTextOnly`), `website`, `socialLinks[]{platform, url}`, story count; stories as `articleCard` |
| Q-NEWSLETTER | Newsletter card, Settings (`07-…`, `11-…`, `12-…`) | `newsletter` documents with `active == true` (the article's own `newsletter` reference first); subscribe through Beehiiv (API-01) | `title`, `description`, `externalId`, `active` |

## Fields per body module
The app reads these through CMS-21. Field names are verified against `studio/src/schemaTypes/objects/articleBlocks/`.

| ID | `_type` | Module | Fields |
|---|---|---|---|
| CMS-30 | `block` | MOD-01 | `style` (`normal`, `h1`–`h6`, `blockquote`), `listItem` (`bullet`, `number`), `children[]{text, marks}`; `markDefs[]` of `_type == "link"`: `linkType` (`href`, `page`, `article`, `author`, `topic`), `href`, resolved `article{slug, pillarSlug}`, `author`, `topic`, `page`, `anchor`, `openInNewTab` (ignored in the app) |
| CMS-31 | `inlineImage` | MOD-10 | `image{asset, crop, hotspot, alt}`, `caption`, `credit` (CMS-08), `size` (`small`, `medium`, `full`), `alignment` (ignored on the phone) |
| CMS-32 | `imagePair` | MOD-11 | `imageLeft` and `imageRight` `{asset, crop, hotspot, alt, caption, credit}`, shared `caption` and `credit`, `aspectRatio` (`natural`, `landscape`, `wide`, `square`), `width` (ignored on the phone) |
| CMS-33 | `imageGallery` | MOD-12 | `items[]{asset, crop, hotspot, alt, caption, credit}`, `caption`, `width` (`default`, `full`) |
| CMS-34 | `annotatedImage` | MOD-13 | `image{asset, crop, hotspot, alt}`, `caption`, `credit`, `annotations[]{label, description, dotX, dotY, dotXMobile, dotYMobile}` (tablet values ignored; percent of the image) |
| CMS-35 | `videoEmbed` | MOD-20 | `sourceType` (`external`, `upload`), `url` (YouTube, Vimeo or a direct file), `videoFile` (asset URL, CMS-10), `title`, `width` (`social`, `normal`, `fullBleed`), `posterImage{asset, hotspot, alt}`, `durationSeconds`, `caption` |
| CMS-36 | `articleParallax` | MOD-21 | `backgroundImage{asset, crop, hotspot, alt, caption, credit}`, `textColor` (`light`, `dark`), `gradientIntensity` (`dark`, `normal`, `light`, `off`), `contentBlocks[]{eyebrow, body (rich text), textStyle (display, flexible), alignment, image{…, caption, credit}, imagePosition}` (alignment and image position ignored on the phone) |
| CMS-37 | `pullQuote` | MOD-40 | `quote`, `attribution`, `style` (`leftBar`, `center`) |
| CMS-38 | `divider` | MOD-41 | `style` (`line`, `dotted`, `short`) |
| CMS-39 | `relatedRead` | MOD-42 | `article` → `articleCard` |
| CMS-40 | `relatedStories` | MOD-43 | `heading`, `articles[]` (up to 3, weak) → `articleCard`. Empty list: use Q-MORELIKE starting at the fifth result, as the website does (answers FO-6). |
| CMS-41 | `newsletterCTA` | MOD-44 | `newsletter->{title, description, externalId, active}`, `heading`, `body`. Hide the block if `active` is not true. |
| CMS-42 | `callout` | MOD-45 | `overline`, `title`, `body`, `button{buttonText, link{linkType, href, page, article, author, topic}}`, `icon` (ignored) |
| CMS-43 | `articleHorizontalScroll`, `socialEmbed`, `rawEmbed`, `audioEmbed`, `footnote` | MOD-90 to MOD-94 (fallbacks) | Horizontal scroll: `panels[]{mediaType, image, muxPlaybackId, poster, body}`. Social: `url`, `platform`. Embed: `caption`, link from the `code` iframe `src`. Audio: `url`, `title`, `caption`. Footnote: `number`, `text`. |

## Schema change requests
Numbered so Field Office and the website team can track them. None is made yet.

| ID | Field | Type | Who fills it | Breaks without it |
|---|---|---|---|---|
| SCR-01 | `article.place`: `{city: string, province: string}`, with `province` one of the 13 province and territory codes | object | Editors, at publish | Near you and Discover by province (D39, Q14). The prototype infers places from the copy. |
| SCR-02 | `article.pushText` | string, 110 characters or fewer, optional | Editors, for stories that will be pushed | Push copy falls back to `title` with `dek` as the body (NOTIF). Trigger rules are still Q13. |
| SCR-03 | `shortStory.article` | reference to `article`, optional | Editors, when the video belongs to a story | The Video feed's Read button, double-tap save and share link have no story (VID). |
| SCR-04 | New singleton `appSettings`: `onboardingTopics[]` (ordered references to `topic`), `preselectedTopics[]` (up to three references), optional `globeArticles[]` (references to `article`, only if the welcome Globe is curated rather than the latest 32 stories) | document | Editorial lead | The onboarding topics step (ONB-07) and the guests' For You picker (GATE-10) would be hard-coded in the app (Q11). |
| SCR-05 | The day's big story, for the Light notification preset and the greeting's what's-new line. Option A, no schema change: reuse the `homepage` `heroArticle` with `pinUntil`. Option B: `article.sendAsBigStory` (datetime). | none, or datetime | Editor on duty | Light has no source (NOTIF, Q13). |
| SCR-06 | `article.audioNarration` (file) and `article.audioDuration` (number, seconds) | file, number | Audio producer | Listen, only if narrated audio is chosen (Q4). Synthetic voice reads the body and needs neither. |
| SCR-07 | `shortStory.captions` | file (WebVTT) | Video producer | Captions in the Video feed, unless playback stays in YouTube's player with its own captions (VID). |
| SCR-08 | `shortStory.muxPlaybackId` | string | Video producer | Native playback, muted autoplay and the custom progress line in the Video feed. Today 52 of 53 short stories are YouTube Shorts only (VID, Q6, FO-2). |
| SCR-09 | `page.appBody` | Portable Text, optional | Editors | App versions of About and Editorial standards. Those pages are page-builder layouts that don't map to the app's page template; Privacy and Terms (`centeredRichTextSection`) map as they are (SET). |
| SCR-10 | `settings.supportUrl` | url | Be Giant | The "Support our journalism" row in Settings (SET). |

Area files may add further requests as "Missing in schema"; they get numbers here.

## API dependencies outside Sanity

| ID | API | Use |
|---|---|---|
| API-01 | Beehiiv, via the website's `POST /api/newsletter/subscribe` with `{email, publicationId, source}`. It checks for an existing subscription before adding one, accepts requests with no `Origin` header, and limits each IP to 10 attempts in 15 minutes. It sends **no** confirmation or welcome email (`double_opt_override: 'false'`, `send_welcome_email: false`). | Newsletter card and Settings. Still needed: a status lookup for the signed-in reader's email, an unsubscribe endpoint, an app value for `source.widget` (unknown values are dropped today), and a rate limit that suits phones behind shared mobile IPs (FO-3, to confirm). |
| API-02 | Website search, `GET /api/search` (Typesense, with a GROQ fallback); parameters `q`, `type`, `pillar`, `topic`, `articleType`, `page`, `perPage`; returns hits, facets, `found` and `totalPages` | Search (Q-SEARCH). Known limits to raise with Field Office: the GROQ fallback ignores `pillar` and `topic`; hits carry only `imageRef` (no crop or hotspot), so the app fetches cards by id for framing; the index stores pillar and topic titles, not slugs; `shortStory` documents aren't indexed. |
| API-03 | Sign in with Apple, Google, magic link (backend to choose) | Onboarding account step (`03-…`) |
| API-04 | Push (APNs) plus a server that holds alerts in quiet hours | Notifications (`12-…`) |

## Universal links
Website paths, from `frontend/lib/routes.ts`, that should open the app (answers FO-7, to confirm). The app maps each to a screen:
- `/stories/{pillarSlug}/{slug}`: the article.
- `/stories?topic={topicSlug}`: Discover filtered by the topic.
- `/author/{slug}`: the author profile (`14-author-profile.md`).
- `/{slug}`: a page; a series page opens on the website (Series hub removed from V1, D53).
- `/short-stories`: the Video tab.
- `/newsletter`: Settings › Newsletter.

## Reader data (app backend, not Sanity)

| ID | Data | Where | Used by |
|---|---|---|---|
| CMS-50 | Followed topics and writers | Account (on device for guests) | For You, follows, notifications |
| CMS-51 | Saved story ids, offline copies | Account plus device cache (CMS-12) | Saved |
| CMS-52 | Reading progress per story (0–1), finished flag (0.9 or more) | Account | Jump back in, reading card, rating prompt |
| CMS-53 | Notification preset, types, quiet hours | Server | Notifications |
| CMS-54 | Newsletter subscription state | Beehiiv (API-01) | Newsletter card, Settings, P1.3 asks |
| CMS-55 | Reading settings: text size, page colour, tab labels, autoplay, downloads | Device | Article, Video, Settings |
| CMS-56 | Profile: name, email, city, age range, gender (Q10) | Account | About you, Near you |

## Appendix: prototype data (prototype reference only)
`bg-app-data.js` holds the prototype's stories as hand-shaped objects (`id`, `t`, `d`, `img`, `tags`, `body` of strings and `{k:'img'}`-style items, plus lists such as `LATEST_A`, `FY`, `TRENDING`, `PLACES`). Twelve of them are real begiant.ca stories converted by `docs/round-9/port-article.py`. **None of these shapes, ids or lists is an API or a data source for the build.** They exist so the design can be reviewed with real content.
