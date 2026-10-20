# Be Giant App: Design PRD and Agent Prompt Pack

Oct 19, 2026 · @Gabriel Dufresne

## Overview

This pack turns the design-side questions from the Oct 19 App Review into 19 paste-ready prompts, grouped into five phases you can run as batches. Each prompt has a goal, what it waits on, and the text to paste.

**Already settled on the call (build as decided):**

- Soft onboarding: every step skippable, with easy resume later.
- Notification presets named Light and Balance, with user-set quiet hours.
- Series come out of Discover; pillars are likely out too. Topics stay.
- The For You star icon changes because it reads as an AI symbol.
- Native share sheet (not a branded modal). Home and For You end with an "all caught up" state.
- Listen to article, offline reading, and podcast are phase 2. Reserve space in the UI only.

**Still open (design both options or leave a toggle):** gender field, final topic list, newsletter placement, tablet go/no-go, gamification in V1 or phase 2, Mux hosting, and location as a scoring signal.

**Shared context block.** Paste this at the top of every prompt so each agent starts from the same brief.

```text
You are designing screens for the Be Giant mobile app, a Canada-first journalism app (iOS and Android). The reader audience skews 55+ per the survey, so use large type, obvious touch targets, and no hidden gestures without a visible hint. Keep the website's visual language: same colors, typefaces, corner radii, and illustration style, but with mobile-native navigation and swiping. Principles: the story is the hero; navigation gets out of the way; every feed ends (no endless scroll); recommendations explain themselves; personal data is requested gradually, never all at once. Out of scope for V1 (reserve UI space only): listen to article, offline reading, podcast. Deliver Figma-ready frames with short annotations on behavior and open questions.
```

**Phase plan**

| Phase | Category | Prompts | Gate before running |
| --- | --- | --- | --- |
| 1 | Flow | P1.1 to P1.5 | Final topic list (can use placeholders) |
| 2 | Structure | P2.1 to P2.4 | Series and pillars removal confirmed |
| 3 | Designs | P3.1 to P3.3 | None |
| 4 | New features | P4.1 to P4.3 | Gamification V1 vs phase 2 |
| 5 | Tablet and handoff | P5.1 to P5.4 | Tablet go/no-go; answers from Field Office |

## Phase 1: Flow

Phase 1 covers everything a reader does from first open to a finished profile. Run P1.1 and P1.2 first; P1.3 to P1.5 build on them.

### P1.1 Onboarding and account creation

**Goal:** Tighten the three-step onboarding (topics, notifications, free account) to 3 or 4 steps maximum and resolve the open data-field questions. **Waits on:** Final topic list (use placeholders, flagged). Gender decision (design with and without).

```text
[Paste shared context block]

Redesign the Be Giant onboarding as a soft, fully skippable flow of 3 to 4 steps maximum: (1) cover animation with story covers floating in and a swipeable globe, then Start; (2) "What would you like to follow?" with a few topics pre-checked; (3) notifications (see P1.2); (4) "Create your free account". Put the word "free" in the headline so nobody thinks they will be charged. Show a summary of the choices made, editable. Sign-in: Apple, Google, email, and magic link, and show a layout that still works if a fifth provider (for example Microsoft) is added. After Google or Apple, auto-fill name and email, then offer age and location as optional fields (location has a "use mine" option using the phone's location) with Skip for now. Gender is undecided: produce two versions of the profile screen, one with gender and one without, and note which has fewer fields. Topics in the mockup are placeholders; label them as such. Output: the frames, a one-line rationale per step, and the number of taps to complete versus skip.
```

### P1.2 Notifications and quiet hours

**Goal:** Make the notification choice feel low-pressure so more people opt in. **Waits on:** Cadence per preset and push triggers from Be Giant.

```text
[Paste shared context block]

Design the notification step and the matching screen in Settings. A toggle offers two presets. Light: the one big story of the day only, nothing for followed topics or writers. Balance: a notification each time a story in a followed topic, or by a followed writer, publishes (as little as one a week, depending on how many topics are followed). Add a quiet-hours control that the user sets themselves (a default of 10 PM to 7 AM may be pre-filled but must be editable), with copy explaining that notifications are held until morning. Show a live preview of what a notification looks like for each preset. Show the screen that links out to the phone's system settings for the final Allow step, and the state when the user declines. Output: frames for both presets, the quiet-hours control, the system-settings handoff, and the declined state.
```

### P1.3 Newsletter opt-in placements

**Goal:** Offer the newsletter without nagging existing subscribers. **Waits on:** Whether newsletter signup is a core KPI.

```text
[Paste shared context block]

Design three newsletter opt-in placements as separate options: (A) a checkbox on the free account step, (B) a checkbox after the personal data fields, (C) a one-time prompt after the reader finishes their first or second article. For every option, design the state for someone who is already subscribed (no prompt shown, status visible in Settings) and the state after dismissing (never asked again, or at most once more). Tone: this is a deeper level of commitment than a website visit, so keep it friendly and never repetitive. Output: the three options side by side with a recommendation and the reason.
```

### P1.4 Downstream nudges and skipped-onboarding states

**Goal:** Capture sign-ups and profile data later, at moments when the reader has a reason to give it. **Waits on:** Trigger thresholds (3rd open, 6th story read are placeholders).

```text
[Paste shared context block]

Design the follow-up moments for people who skipped onboarding or finished it partially. (1) "Finish your profile" toast and the top-of-profile banner, triggered on the 3rd app open or after the 6th story read. (2) An empty For You tab for a user who skipped topics, explaining how For You works with topic picks to start. (3) A notification re-ask after a first save or follow if they declined notifications earlier. (4) Prompts to create a free account after a first share, a first save, following 3 topics, or sharing a milestone. (5) An App Store rating prompt at a good moment. Keep each nudge dismissible and add a note on how often it can reappear. Output: frames for each, plus a one-page table of trigger, message, and re-appearance rule.
```

### P1.5 In-app walkthrough

**Goal:** Teach the non-obvious gestures to an older audience in 3 to 5 steps. **Waits on:** Nothing.

```text
[Paste shared context block]

Design a short walkthrough shown after onboarding, 3 steps minimum and 5 steps maximum, skippable at every step, that points at real UI. Cover: tapping the hero story; the navigation hiding as you scroll and returning when you scroll up (tap once to open, tap the active tab again to go to top); swiping right on a story card to save it; the reading toolbar (font size, contrast); and following topics at the end of a story. Also design the first-card peek animation that hints at swipe-to-save in the feed. Output: the step frames, the peek animation spec, and a note on which steps could be cut first if you need only three.
```

## Phase 2: Structure

Phase 2 fixes how content is organized across Discover, the two feeds, Saved, video, and the reader. These prompts correct things the team flagged on the call.

### P2.1 Discover

**Goal:** Make Discover the single place for browsing by topic, trending, video, and short reads. **Waits on:** Confirmation that series and pillars are removed; the final topic list.

```text
[Paste shared context block]

Redesign the Discover tab. Keep search at the top. Below it, a horizontal bar for jumping between topics, showing topics only (remove series, franchises, and pillars, which readers will not search for). Then: trending stories, a video row, and a "quick reads" section for stories under 10 minutes. Leave a labelled slot for a "browse by region" section (see P4.3) that could sit where series and pillars used to be. Design the empty-search state with an illustration and suggested searches. Rationale to respect: the survey showed readers want Be Giant to guide them, so Discover is a fallback for browsing, not the main path. Output: the Discover frame, the empty-search state, and a short note on what moved or was removed.
```

### P2.2 Home and For You

**Goal:** Lock the two feeds, their lengths, and their end states. **Waits on:** Confirmation of the counts (12 on Home, 5 on For You).

```text
[Paste shared context block]

Refine the Home and For You feeds. Home is curated by Be Giant: a full-screen hero story, an optional "jump back in" card (shows time left on a story the reader left partway, dismissible), Latest with 3 stories (design versions for 1 and for 7), a video carousel, and more stories, ending at 12 stories with an "all caught up" stop. For You is personalized, 5 stories, each showing a short line explaining why it appears (see P4.3), ending with an "all caught up on today's 5 picks" counter and a "show me a bonus story" button (test the wording against "random story"). Text on the hero fades as the reader scrolls. Output: Home and For You frames, the three Latest variants, and both end states.
```

### P2.3 Saved and video

**Goal:** Finish the Saved list and the video experience, including empty and edge cases. **Waits on:** Mux hosting decision; Field Office answers on sharing links.

```text
[Paste shared context block]

Refine Saved and the video tab. Saved: filter chips at the top (latest by default, plus topic, author, and length of under or over 10 minutes), a progress bar on articles already started, an Edit mode to select, clear, or mark as finished, swipe right to remove, and an empty state. Include the "saved" toast for V1 and a greyed placeholder for the phase 2 "saved for offline reading" version. Video: a vertical swipe feed (Reels style) with a short title, an "Open article" button, and a share button; a 2 by 2 grid view; an optional end-of-list state. Design the case where a video has no linked article, so the button is simply absent. Show the share sheet as the native one. Output: the frames above plus a note on any element that depends on the sharing-link decision.
```

### P2.4 Navigation and article reader

**Goal:** Settle the bottom navigation, the reading mode, and the end-of-article modules. **Waits on:** Podcast placement; whether writers and video creators are followable.

```text
[Paste shared context block]

Design the bottom navigation and the reader. Navigation: the current four tabs plus a variant with a fifth podcast tab (phase 2) and a variant where podcast lives inside video or Home. The bar slides away on scroll down and returns on scroll up; tap once to open, tap the active tab again to scroll to the top. Add an optional setting that shows tab labels under the icons (off by default, for older readers). Reader: tapping a card zooms its image into the top of the article. While reading, the bar is hidden; scrolling up swaps it for a toolbar with font size, listen (greyed, phase 2), contrast or dark mode, share, and save. End of article: modules that can each be turned on or off: following status for the current topic, an adjacent topic to follow, follow the author (and a variant for video creators), more like this, and one suggested next read. Output: nav variants, reader states, end-of-article module stack, and the labels-on version of the bar.
```

## Phase 3: Designs

Phase 3 is the visual layer. These three prompts have no external dependencies, so they can run in parallel with Phase 1 if you want faster progress.

### P3.1 For You icon and followed-tag cue

**Goal:** Replace the star on For You and settle the mark that shows a tag is one the reader follows. **Waits on:** Nothing.

```text
[Paste shared context block]

The current star-style symbol for the For You tab and the followed-tag marker reads as an AI-generated indicator (it resembles the Gemini mark). Explore 6 alternatives, from restrained to playful, that feel personal rather than generative: a bookmark-heart hybrid, a person-and-page, a compass, a single hand-drawn star from the illustrator Maya's style (not the three-spark AI star), and two of your own. Show each at tab-bar size in active and inactive states, in light and dark mode, and as a small marker next to a followed tag. Output: a comparison board, your top two with the reason, and a note on any option that risks looking like an AI symbol.
```

### P3.2 Personalized greeting

**Goal:** Test a friendly "good morning" moment without weakening the immersive hero. **Waits on:** Nothing.

```text
[Paste shared context block]

Explore a personalized greeting ("Good morning, [name]", with afternoon and evening versions) in three treatments: (1) a short animation where the greeting slides up over the hero and fades out, leaving the hero untouched; (2) a small line above Latest instead of over the hero; (3) a bolder variant that pushes the content down a little and sets a warmer, more personal tone. For each, describe what a signed-out reader sees. The starting position is that the hero story must stay immersive, so rank the three by how little they interrupt it. Output: frames, a motion description for treatment 1, and a recommendation.
```

### P3.3 Illustrated states

**Goal:** Give the app's empty and error moments a consistent illustrated voice. **Waits on:** Maya's availability for any new illustrations.

```text
[Paste shared context block]

List every empty, error, and quiet moment in the app and design the illustrated state for each: empty search with suggested searches, empty Saved, For You before onboarding, offline or connection lost, all caught up on Home, all caught up on For You, and a notification-permission declined state. Match the existing illustration style and flag where a new illustration commission is needed versus reusing existing art. Keep the copy warm and short. Output: a state inventory table (state, trigger, copy, illustration needed or reused) and frames for the five most important states.
```

## Phase 4: New features

Phase 4 designs features that did not exist before this call. Gamification was flagged by JP as phase 2, so treat P4.1 as exploratory unless Be Giant says otherwise. P4.2 and P4.3 shape the recommendation experience and depend on data Field Office has to confirm.

### P4.1 Gamification and shareable cards

**Goal:** Give readers playful, shareable proof of their reading without gimmicks. **Waits on:** Be Giant deciding V1 or phase 2, and what readers are comfortable sharing publicly.

```text
[Paste shared context block]

Design an optional "your reading" card system that sits at the end of Home. Mechanics to explore: a weekly streak (opened the app 5 times this week), a Spotify-style standing ("top 4% of Be Giant readers this week"), giant tiers by stories read (baby giant, medium giant, giant giant), a topic card ("14 stories read this month in climate" with a topic character), and the order the reader read stories in, framed like a daily puzzle result. Make each card shareable as a 9:16 Instagram Story with a small Be Giant logo that invites curiosity rather than reading as an ad, and a 1:1 version. Keep tone playful and harmless, and design so no card shows private data without a clear opt-in. Output: one card per mechanic, the share-sheet flow, and a recommendation of the two cards worth building first.
```

### P4.2 Coffee read and time-based reading

**Goal:** Let readers pick content by the time they have. **Waits on:** Be Giant confirming it wants a snackable section and time buckets.

```text
[Paste shared context block]

Design a time-based reading module. In For You, always include one short story styled differently and labelled "Your coffee read". On Home, add a "quick read" slot (a story of about 5 minutes) under Latest. In Discover, add a row for stories under 10 minutes with a playful picker (5, 10, or 15 minutes, with light labels like "coffee", "snack", or "long run"). Show the reading time clearly on every card. Make sure this does not add a fifth feed or push the hero lower. Output: the three placements and a comparison of the picker labels with a recommendation.
```

### P4.3 Browse by region and the "why you're seeing this" line

**Goal:** Show regional relevance and make every recommendation explain itself. **Waits on:** Field Office confirming that stories can carry a location field in Sanity; Be Giant tagging stories by location.

```text
[Paste shared context block]

Design two connected pieces. (1) A browse-by-region section in Discover: the reader's own province or city first, then the other provinces or main metro areas, with a state for regions that have no stories yet. (2) The one-line explanation shown on For You cards. Write variants for each cause: a followed topic ("Because you follow Economy"), reading habits ("You read 8 Economy stories this month"), a saved or liked topic, freshness or popularity, and location ("From Montreal, like you"). Add a small question-mark tap target that opens a short sheet describing how recommendations work, but do not expose scores. Keep each line under 8 words. Output: the region section, the explanation line variants in context, and the how-it-works sheet.
```

## Phase 5: Tablet and handoff

Tablet came up for the first time on the call. The Be Giant team asked for an hours-based estimate rather than assuming free work, so P5.1 produces that estimate before P5.2 designs anything. Website traffic is about 78% desktop, 20% mobile, and 1.15% tablet, but the team believes older readers and long weekend reads lean on tablets.

### P5.1 Tablet scope and estimate

**Goal:** Produce an hours estimate Be Giant can say yes or no to. **Waits on:** Field Office input on scaling tools and what a V1 baseline includes.

```text
[Paste shared context block]

Audit every screen in the current mobile prototype and estimate the design effort to make each tablet-native instead of simply scaled up. For each screen, state: the layout change (for example two-column reader, grid for Discover, split view for Saved and article), whether it can reuse the phone design with only scaling, and a range of hours for design. Group screens into two packages: a V1 baseline (phone layouts scaled sensibly, nothing broken) and an optimized package (purpose-built tablet layouts), with total hours for each. Flag any screen that affects development effort more than design effort so it can be passed to Field Office. Output: a table (screen, change needed, reuse or rebuild, hours low and high) and two package totals.
```

### P5.2 Tablet layouts

**Goal:** Design the optimized tablet experience for the screens that matter most. **Waits on:** Be Giant approving the tablet package from P5.1.

```text
[Paste shared context block]

Design tablet layouts in portrait and landscape for the core reading path: Home, For You, article reader, Discover, and Saved. The aim is the best long-form reading experience on an iPad in the country, not a larger phone. Use wider margins and a comfortable line length in the reader, a two-pane view where it helps (for example the feed on the left and the article on the right in landscape), and larger touch targets. Keep the same navigation logic, the same gestures, and the same visual language as the phone version. Output: the frames, a note on what differs from phone and why, and any component that needs a new variant.
```

### P5.3 Desktop module translation

**Goal:** Decide which website modules (parallax and others) belong in the app and how. **Waits on:** The list of desktop modules in progress.

```text
[Paste shared context block]

I will give you a list of the story modules being built for the desktop site (including parallax and scroll-driven modules). For each module, decide whether it should exist in the app, be simplified, or be left out, and design the mobile-native version of those that stay. Consider performance on older phones, the hidden-navigation reading mode, and the fact that the app should feel familiar but mobile-native rather than a copy of the website. Output: a table (module, keep, simplify, or skip, reason) and frames for the modules that stay.
```

### P5.4 Code-ready handoff for Field Office

**Goal:** Give JP a package he can build from without guessing. **Waits on:** The separate Gabriel and JP session on the handoff process.

```text
[Paste shared context block]

Prepare the handoff package for the Field Office developers. Include: a screen inventory in build order (core flows first), the component library with states (default, pressed, disabled, loading, empty, error), design tokens (color, type, spacing, radius), a motion spec for every animation (the cover zoom into the article, the hiding navigation, the card entry, the swipe-to-save peek), a table of rules (triggers and thresholds for nudges, feed lengths, quiet-hours defaults), and a list of open questions marked for Field Office. Number each screen so tickets can reference it. Output: the inventory, component and token pages, the motion spec, the rules table, and the open-questions list.
```

## Dependencies and batching order

None of these block starting: every prompt can run with placeholders or two variants. They decide which variant ships.

| Decision | Feeds | Owner |
| --- | --- | --- |
| Final onboarding topic list | P1.1, P2.1 | Be Giant |
| Gender field: collect or drop | P1.1 | Be Giant |
| Notification cadence and quiet-hours default | P1.2 | Be Giant |
| Newsletter placement; is it a KPI | P1.3 | Be Giant |
| Series and pillars removed from Discover | P2.1 | Be Giant |
| Mux hosting, share-link behavior, offline timing | P2.3 | Be Giant with Field Office |
| Podcast placement; follow writers and video creators | P2.4 | Be Giant |
| Gamification: V1 or phase 2 | P4.1 | Be Giant |
| Location field in Sanity and scoring weight | P4.3 | Be Giant with Field Office |
| Tablet go/no-go after the estimate | P5.2 | Be Giant |
| Handoff process and build order | P5.4 | Gabriel with JP |

**Suggested batches** (each batch is one run of agents in parallel; wait for results before the next):

1. P1.1, P1.2, P3.1, P3.2 (flow core plus two visual explorations with no dependencies)
2. P1.3, P1.4, P1.5, P3.3 (the rest of the flow and illustrated states)
3. P2.1, P2.2, P2.3, P2.4 (structure, once you have reviewed Phase 1 outputs)
4. P4.2, P4.3, P4.1 (new features; P4.1 last since its status is uncertain)
5. P5.1, then P5.2 and P5.3 after Be Giant approves the estimate
6. P5.4 (handoff, once the screens above are stable)
