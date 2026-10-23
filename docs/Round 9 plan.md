# Round 9 plan: Oct 19 team review prompts

## Status (October 23, 2026)

| Prompt | Status |
|---|---|
| P1.1 Onboarding | Merged and live. Later changed in Round 10: one bottom-anchored Skip for now; no Kept in your account summary; no placeholder-topics line. |
| P1.2 Notifications | Merged and live. Quiet hours compacted to one row in Round 10. |
| P3.1 For You icon | Merged: the star replaces the sparkle everywhere. Exploration page kept. |
| P3.2 Greeting | G4 overlay chosen and built (opt-in, not on in the app yet). G1 to G3 removed. |
| P1.3 Newsletter | Merged as an exploration only. Waits on Be Giant's KPI answer (PRD Q9). |
| P1.4, P1.5, P3.3 | On hold (Gabriel ran only P1.3 from batch 2). P1.5's swipe-to-save peek was built separately in Round 10. |
| P2.1 to P5.4 | Not started as prompts. Round 10 covered parts of P2.1 (Series and Pillars out, region section), P2.2 (short stories, 12 stories on Home, bonus story) and P2.3 (native share); the article-modules work covered P2.4's image zoom. |
| Article modules (added, not in the pack) | Done: all 18 website body types mapped, 14 rebuilt for the phone in three phases, 4 fallbacks planned, QA'd on 12 real begiant.ca stories ported from Sanity. See `docs/round-9/article-modules.md` and `article-modules-qa.md`. |
| Developer handoff (added) | Done: `docs/handoff/`, a master build spec with one file per area, stable element IDs and a Sanity contract. Gabriel ruled on all 21 prototype discrepancies (X-01 to X-21); the prototype follows the rulings. |

Decisions are in the PRD decisions log (D34 to D52).

Source: `Be Giant App Design PRD and Agent Prompt Pack.md` (19 prompts, P1.1 to P5.4). This plan maps each prompt onto the prototype as it stands after Round 8, sets how agents share the work, and lists what needs Gabriel or Be Giant before it ships.

## How agents work in this repo

- **Output is the prototype, not Figma.** "Figma-ready frames" means: working screens in `BeGiantAppPhone.dc.html`, shown as a new board row in `BG App.dc.html`, plus a short notes file in `docs/round-9/<prompt>.md` (rationale, annotations, tables, open questions). Figma export can come later from the board.
- **One agent per prompt, each in its own worktree and branch** (`round-9/p1-1-onboarding` and so on), branched from `round-9`. Agents commit to their branch only and never push or merge.
- **Gabriel reviews each batch; Claude merges the branches into `round-9` one at a time**, resolves conflicts, checks the board and `/app.html` at 390×844, then deploys.
- **Stay in your lane.** Each agent edits only the sections its prompt owns (listed below). New state goes in new lines near the end of `renderVals()`, never inside an existing long line, so merges stay clean. No reformatting, no renames outside the prompt.
- **Explorations get their own file.** Prompts that compare options (P3.1, P3.2, P1.3) build in `explorations/<prompt>.dc.html`, mounting the phone where useful. Nothing changes in the live app until Gabriel picks.
- **House rules still apply** (CLAUDE.md): Phosphor light icons only, no drawn SVG icons, no emoji, Canadian spelling, sentence-case headlines, square media, white pages, serif never bold. Read `docs/Be Giant App - PRD v2.md` first.

## Conflicts to flag (the pack vs settled decisions)

| Item | Pack says | Prototype / PRD today | Proposed handling |
|---|---|---|---|
| Notification preset name | "Balance" | "Balanced" (R7) | Use "Balance" per the call; note it |
| For You icon options | Custom hybrids, a hand-drawn star in Maya's style | Rule: Phosphor icons only, never draw | Explore with Phosphor marks; mock custom ones as labelled placeholders for Maya |
| Platforms | "iOS and Android" | Q8 Android open | Design iOS; note Android as open |
| Audience 55+, large type | New guidance | Type scale set in R6 | P5.4 and P3.3 note it; no global type change this round without sign-off |
| Saved swipe | Swipe right to remove | Lists: swipe to save (D13); Saved: swipe to remove | Keep; confirm direction in P2.3 notes |
| Magic link sign-in | New | Apple, Google, email | Add in P1.1 |

## What each prompt changes (delta from what exists)

| Prompt | Already built | New work | Owns |
|---|---|---|---|
| P1.1 Onboarding | Globe welcome, topic chips, account split, About you with city, age and gender | Pre-checked topics, magic link, five-provider layout, gender on and off variants, placeholder topic labels, tap counts | Onboarding steps 1, 2 and 4, About you, Email |
| P1.2 Notifications | Light/Balanced, preview banner, quiet hours in Settings | "Balance" rename, quiet hours in onboarding (10 PM to 7 AM, editable), system-settings handoff, declined state | Onboarding step 3, Settings > Notifications |
| P1.3 Newsletter | Nothing | Three placements, subscribed and dismissed states, recommendation | `explorations/` |
| P1.4 Nudges | Guest asks, profile strip, For You picker, notification re-ask, rate prompt (D24 to D26) | 3rd-open and 6th-story triggers, toast plus profile banner, trigger table | Guest and nudge states |
| P1.5 Walkthrough | Nothing | 3 to 5 coach-mark steps, swipe-to-save peek, cut order | New overlay section |
| P2.1 Discover | Discover with search, topics, trending, video, series, pillars | Remove series and pillars, topic bar, quick reads, region slot, empty search | Discover |
| P2.2 Home and For You | Hero 6d, Jump back in, Latest, Watch, feed ends | 12 and 5 story counts, Latest 1/3/7 variants, bonus story, end counters | Home and For You lists |
| P2.3 Saved and video | Saved with Edit and Undo, video feed and grid | Filter chips, offline placeholder, no-article video, end of list | Saved, Video |
| P2.4 Nav and reader | Floating bar, label setting, reading tools, article end modules | Podcast tab variants, active-tab-to-top, image zoom into article, module toggles, creator follow | Tab bar, Article |
| P3.1 For You icon | Sparkle (reads as AI) | Six options, light and dark, tab and tag sizes, top two | `explorations/` |
| P3.2 Greeting | Greeting in card-home trial | Three treatments, signed-out state, ranking | `explorations/` |
| P3.3 Illustrated states | Caught-up, empty Saved, guest picker | Inventory table, offline, declined, empty search art | Empty and error states |
| P4.1 Reading cards | Milestone, week and rank cards (D21) | Streak, tiers, topic card, reading order, 9:16 and 1:1 share | End of Home |
| P4.2 Coffee read | Quick reads in card trial | Coffee read in For You, quick read on Home, Discover time picker | For You, Home, Discover rows |
| P4.3 Region and why-line | Reason line on For You (D28) | Region section, reason variants, how-it-works sheet | Discover region, For You reasons |
| P5.1 Tablet estimate | Nothing | Hours table, two packages | Doc only, no code |
| P5.2 to P5.4 | Nothing | Tablet layouts, desktop module translation, handoff package | After approvals |

## Batches

Each batch runs in parallel, then pauses for Gabriel's review and the merge.

1. **P1.1, P1.2, P3.1, P3.2.** P1.1 and P1.2 both touch onboarding, so P1.2 owns only the notifications step and Settings. P3.1 and P3.2 are explorations in their own files.
2. **P1.3, P1.4, P1.5, P3.3.**
3. **P2.1, P2.2, P2.3, P2.4.** Waits on Be Giant confirming series and pillars are removed.
4. **P4.2, P4.3, then P4.1.** P4.1 waits on gamification V1 vs phase 2.
5. **P5.1** (doc only; can run any time), then **P5.2 and P5.3** after the tablet go/no-go.
6. **P5.4** once screens are stable; needs the Gabriel and JP handoff session.

## After each batch

Claude merges, verifies, deploys to Pages, and adds the batch to the PRD (decisions log, feature inventory, round log), including the Round 8 items still pending.
