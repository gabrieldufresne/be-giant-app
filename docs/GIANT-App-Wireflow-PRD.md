# GIANT App — Wireflow PRD (Phase I)

**Document type:** Product requirements for a single interactive wireflow
**Purpose of this phase:** Adapt the GIANT editorial website into a native iOS app structure. Define which screens exist, how they group, what appears in the primary navigation, and how a user moves between screens.
**Primary output:** One interactive wireflow, built in Claude Design, with two synchronized views (diagram and tappable). Portable to Figma later.
**Fidelity:** Low. Placeholder content, grayscale, generic shapes. No brand type, colour, imagery, or final copy. This document defines structure and movement, not visual design.

---

## 1. Context

GIANT is a Canadian solutions-journalism platform. The website is live at begiant.ca and built by Field Office. This phase translates that experience into a native iOS app.

The app is not a one-to-one port. Some of the site becomes primary app navigation, some collapses into shared patterns, and several account-related capabilities are net-new because they do not exist on the website at all. This document is the source of truth for those decisions at the structural level.

The wireflow produced from this PRD is the Phase I deliverable. It precedes UX wireframing, UI design, and development.

---

## 2. Source structure (from the codebase)

The route definitions confirm the real information architecture. Every screen below is tagged as either **Translate** (exists on the web, adapt it) or **Net-new** (does not exist on the web, design it for the app).

| Web route | Screen / concept | App treatment | Status |
|---|---|---|---|
| `/` | Home | Home tab | Translate |
| `/stories` | Stories index (filter + pagination, 12/page) | Feed pattern, reached via Explore | Translate |
| `/stories/{pillar}` | Pillar feed (People, Places, Ideas) | Feed pattern, filtered by pillar | Translate |
| `/stories/{pillar}/{slug}` | Article | Reading view | Translate |
| `/stories?topic={slug}` | Topic (filter only, no page) | Filter state on Feed, not a screen | Translate |
| `/trending` | Trending | Surfaced inside Explore + Home rail | Translate |
| `/short-stories` | Short Stories | Surfaced inside Explore | Translate |
| `/{seriesSlug}` | Series hub | Series hub screen | Translate |
| `/author/{slug}` | Author profile | Author screen | Translate |
| `/newsletter` | Newsletter landing | Newsletter sheet (modal) | Translate |
| `/{pageSlug}` | Static pages (About, etc.) | Static content template | Translate |
| `/cookies`, `/corrections-policy` | Legal / policy | Static content template | Translate |
| `/feed.xml`, `/password` | RSS, staging gate | Excluded from app product | N/A |
| — | Onboarding | First-launch flow | **Net-new** |
| — | Login / Sign up | Auth flow (modal) | **Net-new** |
| — | Account / Profile | Account tab | **Net-new** |
| — | Saved / Favourites | Saved tab | **Net-new** |
| — | Preferences (followed topics, authors, series; notifications) | Inside Account | **Net-new** |
| — | Search | Header-triggered screen | **Net-new** |

**Key takeaway for stakeholders:** roughly a third of the app's screens are net-new and cluster entirely around accounts. That is the app's core value-add over the website (save to read later, follow, personalize, get notified) and it should read clearly as new scope.

---

## 3. Adaptation decisions (web to app)

These are the structural translation rules the wireflow follows. Each one resolves an ambiguity between the web IA and native patterns.

1. **Topics stay filters, not screens.** The web already treats a topic as a filtered view of `/stories`, with no dedicated page. The app keeps this: tapping a topic chip filters the Feed. No topic hub screen.
2. **Pillars, series, trending, and short stories consolidate under one Explore tab.** The website spreads discovery across many routes. On a phone, one browse hub is clearer than many peer destinations. Explore is the single place to move between People/Places/Ideas, the series, trending, and short stories.
3. **One Feed pattern serves many sources.** The stories index, pillar feeds, topic-filtered views, trending, and short stories are all vertical lists of story cards. They share one screen pattern with a different header and filter state, not five separate designs.
4. **Series keep their own hub.** Series carry editorial framing the site treats as distinct, so a series gets a real hub screen (intro plus entries), not just a filtered feed.
5. **Newsletter becomes a sheet, not a destination.** On the web it is a landing page. In the app it is a modal signup triggered from Home and article ends. It does not need a tab or a deep screen.
6. **Accounts are the reason the app exists beyond the site.** Onboarding, auth, saved, preferences, and account get first-class treatment because they carry the app's differentiated value.

---

## 4. Recommended navigation model

**Recommendation: a four-item bottom tab bar, with search as a persistent top-bar icon.**

```
[ Home ]   [ Explore ]   [ Saved ]   [ Account ]
```

| Tab | Role | Feeds from |
|---|---|---|
| **Home** | Curated editorial front: lead story, latest, a trending rail, a series rail, newsletter prompt | `/`, `/trending` |
| **Explore** | Browse hub: pillars (People/Places/Ideas), series, trending, short stories, topic entry | `/stories`, `/stories/{pillar}`, series, `/trending`, `/short-stories` |
| **Saved** | Saved and favourited articles. Net-new. The app's core reader benefit | Net-new |
| **Account** | Profile, preferences (followed topics/authors/series), notification settings, login state | Net-new |

**Search sits in the top bar** (a persistent icon on Home and Explore), not in the tab bar.

**Why four tabs and not five:** a tab bar works best when each item is a distinct, frequently-visited destination. Home, Explore, Saved, and Account each pass that test. Search is a "go find one specific thing" action rather than a place a reader dwells, and at launch the library is modest. Keeping it as a header icon leaves it one tap from both browse-heavy tabs without spending a scarce tab slot. This also matches how most editorial reading apps place search.

**Decision note (one fallback):** if Be Giant wants search maximally prominent at launch, the fallback is a five-tab bar with Search as its own tab, displacing nothing else. This is the only sanctioned variation. The PRD proceeds on the four-tab recommendation.

**Label note:** "Explore" is the working label. "Stories" or "Browse" are acceptable alternatives to confirm during review.

---

## 5. Screen inventory and specs

Each screen lists its regions (blocked-out areas, placeholder-labeled), its interactive elements, and where each element leads. This is the level of detail the wireflow renders. No real copy or imagery.

### Tab-level screens

**5.1 Home**
- Regions: top bar (logo placeholder, search icon), lead story block, latest list, trending rail (horizontal), series rail (horizontal), newsletter prompt, bottom tab bar.
- Interactive: search icon → Search (modal). Lead story / any card → Article (push). Trending rail item → Article (push). Series rail item → Series hub (push). "See all" on a rail → Feed or Explore (push). Newsletter prompt → Newsletter sheet (modal). Card long-press → context menu (Save, Share).

**5.2 Explore**
- Regions: top bar (search icon), pillar selector (People / Places / Ideas), series list, trending entry, short stories entry, topic chips, bottom tab bar.
- Interactive: search icon → Search (modal). Pillar → Feed filtered by pillar (push). Series → Series hub (push). Trending → Feed in trending mode (push). Short stories → Feed in short-stories mode (push). Topic chip → Feed filtered by topic (push).

**5.3 Saved** *(net-new)*
- Regions: header ("Saved"), saved-articles list, empty state, bottom tab bar.
- Interactive: saved card → Article (push). Card swipe or long-press → remove from saved. If logged out, show a prompt → Login/Sign up (modal).
- Empty state: explains what saving does, with a path back to Explore.

**5.4 Account** *(net-new)*
- Regions: header, logged-out state (sign-in prompt) OR logged-in state (profile summary), preferences entry, notification settings entry, static-links list (About, Editorial standards, Corrections, Cookies), bottom tab bar.
- Interactive: sign in → Login/Sign up (modal). Preferences → Preferences (push). Notifications → notification settings (push). Any static link → Static content (push).

### Drill-in / content screens

**5.5 Feed** (serves stories index, pillar, topic, trending, short stories)
- Regions: header (context title + filter button), story-card list, pagination or infinite scroll, pull-to-refresh.
- Interactive: filter button → filter sheet (bottom sheet: pillar, topic, format). Card → Article (push). Card long-press → context menu (Save, Share). Back → previous screen.

**5.6 Series hub**
- Regions: header (series title + description placeholder), featured entry, entries list, follow-series button.
- Interactive: entry → Article (push). Follow → toggles follow state (requires login; if logged out → Login modal). Back → previous.

**5.7 Article (reading view)**
- Regions: hero image placeholder, headline, byline (author link), meta row (date, reading time, pillar/series tag), body blocks (paragraphs, inline image, pull quote, callout), save + share bar, related stories, newsletter prompt.
- Interactive: save icon → toggles saved (if logged out → Login modal, then completes save). Share → share sheet. Author link → Author (push). Series/pillar tag → Series hub or Feed (push). Related story → Article (push, or swipe). Newsletter prompt → Newsletter sheet (modal).
- Native behaviours: swipe left/right between articles in the current feed context; native back; pull-to-dismiss where applicable.

**5.8 Author**
- Regions: header (name, role, bio placeholder, headshot placeholder), follow-author button, published-stories list.
- Interactive: story → Article (push). Follow → toggles follow (login required). Back → previous.

**5.9 Search** *(net-new)*
- Regions: search field (focused on entry), recent/suggested state, results list, empty/no-results state.
- Interactive: presented modally from the header icon. Typing → results. Result → Article, Author, or Series hub (push within the search context). Dismiss → returns to prior screen.

### Flow / modal screens (net-new unless noted)

**5.10 Onboarding** *(first launch)*
- Steps: welcome → pick topics to follow (optional) → notification permission prompt → into Home.
- Interactive: skippable at each step. "Pick topics" writes initial follows. Notification step triggers the iOS permission prompt. Completion → Home.

**5.11 Login / Sign up**
- Regions: email field, password field, sign-in / create-account toggle, error state, continue button.
- Interactive: presented modally. Success → dismisses back to the screen that triggered it, now in logged-in state, and completes any pending action (e.g. the save that prompted it). Note for build: this is a wireflow stub, not real auth.

**5.12 Preferences**
- Regions: followed topics, followed authors, followed series, notification toggles.
- Interactive: add/remove follows; toggle notifications. Reached from Account (push).

**5.13 Newsletter sheet**
- Regions: value prompt, email field, subscribe button, success/error state.
- Interactive: bottom sheet. Submit → success state → dismiss.

### Utility

**5.14 Static content template** (About, Editorial standards, Corrections, Cookies)
- Regions: header (page title), body text placeholder, back.
- One template serves all static pages.

---

## 6. Core flows the tappable view must support

The tappable prototype should let a stakeholder walk each of these end to end.

1. **First launch:** Splash → Onboarding (welcome → topics → notifications) → Home.
2. **Read loop:** Home → tap card → Article → swipe to next Article → tap save → saved confirmation.
3. **Browse to read:** Explore → pillar → Feed → open filter sheet → Article.
4. **Series:** Explore → Series hub → follow → Article.
5. **Save and retrieve:** Article → save (logged out → Login modal → save completes) → Saved tab → open saved Article.
6. **Search:** header search icon → Search → type → result → Article.
7. **Account and preferences:** Account (logged out) → Login → Account (logged in) → Preferences → add a followed topic.
8. **Newsletter:** Home prompt (or Article end) → Newsletter sheet → submit → success.

---

## 7. Navigation legend

The diagram view encodes movement type in the arrow. The tappable view honours the same behaviours.

| Type | Meaning | Diagram arrow | Native behaviour |
|---|---|---|---|
| **Tab** | Switch between top-level sections | Bar connector at screen bottom | Bottom tab bar, no back stack between tabs |
| **Push** | Drill deeper into a hierarchy | Solid arrow | Slide-in, native back, swipe-back |
| **Modal** | Task or interruption, then dismiss | Dashed arrow (upward) | Slide-up sheet, dismiss control |
| **Sheet** | Lightweight modal (filters, newsletter) | Dashed short arrow | Bottom sheet, drag to dismiss |
| **In-place** | State change on the same screen | Loop / self-arrow | Toggle, feedback, no navigation |

Each arrow originates at the specific interactive element (the hotspot), not the screen edge, so the trigger is unambiguous.

---

## 8. Build spec for Claude Design

Build **one interactive artifact** with a **view toggle** at the top switching between Diagram and Tappable. Both views are driven by the **same screen definitions** so they never drift.

### 8.1 Diagram view
- A canvas showing every screen from Section 5 as a low-fidelity wireframe card at phone aspect ratio.
- Cards grouped by cluster: tab-level, content, flow/modal, utility.
- Arrows connect hotspots between cards, styled per the Section 7 legend (solid = push, dashed = modal/sheet, bar = tab, loop = in-place).
- A visible legend keying the arrow styles.
- Goal: a reviewer sees the whole app structure and every path at once.

### 8.2 Tappable view
- A single phone frame. Screens swap on tap. Bottom tab bar is persistent and functional across Home / Explore / Saved / Account.
- Push transitions slide in with a working back control. Modals and sheets slide up and dismiss.
- Onboarding runs as a real step-through on first entry. Login stub flips logged-out to logged-in and completes any pending action.
- Search opens modally from the header icon.
- Goal: a reviewer clicks through all eight flows in Section 6.

### 8.3 Fidelity rules (apply to both views)
- Grayscale only. No GIANT red, peach, violet, or any brand colour.
- Placeholder labels, not real content: "Headline," "Hero image," "Article body," "Card," "Byline." No real article text, author names, or photos.
- Generic shapes for controls: a bottom icon row reads as a tab bar, a magnifier reads as search, a bookmark reads as save. No final iconography or typography.
- Neutral and structural, so it does not preempt the visual design phase.
- Self-contained: no external assets, no stored data, in-memory state only.

### 8.4 Technical notes
- React artifact, state-driven screen switching (no router needed).
- Do not use browser storage. Hold all state (current screen, logged-in flag, saved list, follows) in component state for the session.
- Keep every screen definition in one data structure so the diagram and tappable views read from the same source.

---

## 9. Out of scope this phase / future considerations

Logged here for roadmap awareness. Not designed, wireflowed, or built in this phase.

- **Text-to-speech** (listen-to-article mode)
- **Podcast listening** (native audio player, background playback, lock-screen controls)
- **Video library and browsing**
- **iPad layout** (this phase assumes iPhone)
- **Real authentication and backend** (the wireflow uses stubs)

Each of these would attach cleanly to the model above: audio and video as new content types inside Explore and Article, a listen control on the Article save bar, and a possible fifth surface if a media tab is later warranted.

---

## 10. Handoff notes (Figma portability)

The screen inventory (Section 5), the navigation legend (Section 7), and the flow list (Section 6) map directly onto a FigJam or Figma wireflow: one frame per screen, arrows labeled by the Section 7 types, grouped by the Section 5 clusters. If this moves to Figma, the diagram view becomes the board layout and the tappable view becomes a Figma prototype using the same connections.
