# Saved
**ID prefix:** SAVED · **Status:** Designed (offline download states, storage full, guest empty copy and sync Not designed) · **Last changed:** Round 3 (October 14, 2026), Edit mode; no Saved changes since · **Board:** `BG App.dc.html` section 06 Saved (Saved, Edit and clear, Grouped by topic, Swipe to remove, Empty); 01b Second save (guest ask) · **Prototype:** `BeGiantAppPhone.dc.html` (search `isSaved`, `savedItems`, `sortOpts`, `sEdit`, `removeSaved`, `bulkRemove`, `toastTap`, `noSaved`, `clearFinished`) · **Decisions:** D13, D18, D24 · **Open questions:** none specific
**Affects / depends on:** `02-app-shell-and-navigation.md` (Saved tab; the tab bar is hidden in Edit mode; toasts), `05-home-and-for-you.md` (swipe to save on rows; "Saved for offline reading" toast with View; Jump back in and the reading card share the progress data), `06-article.md` (Save in the reading tools; progress written on leaving the story), `07-article-modules.md` (offline photos and video posters), `08-discover-and-search.md` (swipe to save on results), `09-video.md` (double tap saves the video's story), `04-guest-and-account-gating.md` (guest saves stay on the phone; account ask at the second save), `11-account-and-settings.md` ("Download saved stories" switch; Saved row in the account sheet), `13-content-model.md` (what the offline copy contains).

## Summary
Saved is the reader's list of stories to read later. Saved stories download for offline reading by default, and each row shows how far the reader got. The list sorts by latest, topic or author; rows swipe left to remove; Edit mode removes several at once, clears finished stories or clears all, with a 5-second Undo instead of a confirm dialog (D18). Saving happens elsewhere: swipe on any list row (D13), Save in the article tools, double tap on a video. Values are iOS points. The list is reader data, not Sanity; Sanity supplies the story content behind each id.

## Elements and behaviour
| ID | Element | Behaviour | Spec (sizes, copy, timing) | Data |
|---|---|---|---|---|
| SAVED-01 | Title and Edit | Page title, with Edit at the right while anything is saved. Edit toggles Edit mode; it reads Done while on. | Header padding 58 20 22. "Saved" serif 44pt, line height 1, 16pt above. "Edit" / "Done" 12pt SemiBold .12em uppercase in a 44pt target. | — |
| SAVED-02 | Offline line | Count and offline status. | Check 16pt + 13pt `#5C5C5C` "{n} stories · Downloaded for offline reading" ("1 story"). Static in the prototype: it ignores the Download switch and download progress. | App state (device): download status per story; the "Download saved stories" setting (`11-…`). |
| SAVED-03 | Sort | Three-way segmented control. Latest = save order, newest first; By topic and By author group rows under headers. | 44pt, radius 8, `#F2F2F2`, 3pt inset; white thumb, radius 6, shadow `0 1px 3px rgba(0,0,0,.12)`, slides 320ms EX. "Latest", "By topic", "By author", 11pt SemiBold .1em uppercase; active ink, inactive `#7A7A7A` (200ms). Native: a segmented control styled to match. | App state (device): chosen sort. |
| SAVED-04 | Group header | In By topic and By author. Groups appear in the order of their first row. | Padding 30 20 12, gap 10. Topic: 12pt square in the topic colour; author: 22pt round photo. Label 13pt SemiBold .12em uppercase; count 12pt `#7A7A7A` "{n} stories". Topic grouping uses the row's tag (series, else followed topic, else first topic; HOME-11). | Topic: `article.topics[]->{title, color, isFranchise}`. Author: `authors[0]->{firstName, lastName, headshot}` (the prototype uses gradient avatars; prototype reference only). Stories with several authors: Unclear in prototype (first author proposed). |
| SAVED-05 | Saved row | Photo left, text right, progress at the bottom. Tap opens the story. | Padding 18 20, gap 16, hairline `#E6E6E6` inset 20pt at the top. Photo 112pt square. Tag line as HOME-10. Title serif 21pt, line height 1.1. Status 12pt `#7A7A7A`: "Unread · {n} min read", "{n} min left", or "Finished" (98% or more). 2pt bar, `#E6E6E6` track, ink fill to the read fraction. Build: open at the saved position (the prototype opens at the top). | Story: `title`, `heroImage` (= `cardImage` when set) with hotspot, `topics[]->`, `authors[]->`, `readTime`, `slug`, pillar slug (`articleCard` projection, by `_id`). Reader: saved id, progress fraction (App state, or Account when signed in). Min left = `readTime` × (1 − progress), at least 1. |
| SAVED-06 | Progress | Stored when the reader leaves a story, for saved stories. | Fraction of the story scrolled (0–1). | App state (device); Account (backend) when signed in. |
| SAVED-07 | Swipe to remove | Swipe left on a row; a red panel shows through; past 96pt the icon grows; release past 96pt collapses the row and offers Undo. | Panel 190pt `#DB3A3A`, "Remove" 11pt SemiBold .14em uppercase white, Phosphor `x` 22pt white. Drag rules as HOME-12 (follows the finger, rubber-band past 120pt, icon 1.15× past 96pt). Collapse: height to 0 in 260ms EX, opacity 150ms. Toast "Removed from Saved" with "Undo", 5s (D18). Undo puts the story back at the top, not its old place. | Writes the saved list. |
| SAVED-08 | Edit mode (D18) | Selection circles appear on every row; tapping a row selects it instead of opening it. An action bar replaces the tab bar and Search button. Done, or emptying the list, ends Edit mode; the selection clears each time. | Circle 24pt, 1.5pt ring `#A6A6A6`; selected: ink fill, white check 14pt (150ms). Circles fade in 250ms. Action bar white, top hairline `#E6E6E6`, padding 14 20 34, rises 6pt and fades in 250ms. Whether swipe works in Edit mode: Unclear in prototype. | App state: selection (not stored). |
| SAVED-09 | Remove selected | Primary button in the action bar; disabled until something is selected. | Ink button 52pt, radius 8: "Select stories to remove" (disabled), then "Remove {n} selected". Toast "Removed {n} story" / "Removed {n} stories" with Undo, 5s. | Writes the saved list. |
| SAVED-10 | Clear finished | Removes every saved story read 90% or more (D51). Grey when there are none. | 44pt, 12pt SemiBold .12em uppercase: "Clear finished" or "Clear finished · {n}"; ink with finished stories, `#A6A6A6` without (tappable, does nothing). Toast "Cleared {n} finished story" / "stories" with Undo, 5s. | Progress ≥ .9. |
| SAVED-11 | Clear all | Removes everything. No confirm dialog. | 44pt, 12pt SemiBold .12em uppercase `#DB3A3A` "Clear all". Toast "Cleared {n} stories" with Undo, 5s. | Writes the saved list. |
| SAVED-12 | Undo toast | Bulk Undo restores the whole previous list; single Undo restores one story. | Ink pill 44pt, radius 999, 14pt white; action 11pt SemiBold .14em uppercase at 70%; 40pt above the bottom when the tab bar is hidden, 104pt when it shows. Rows collapse 280ms before a bulk toast. "Undo", 5s for every remove, single or bulk (D18, X-02). | Keep the removed ids until the toast closes; delete offline copies only then. |
| SAVED-13 | Empty state | Shown when nothing is saved; teaches the swipe. | Padding 20 20 160, centred, gap 16. Illustration `BG-Illo-Newsletter_Mailbox` 180 × 160pt. Serif 30pt "Nothing saved yet". 15pt `#5C5C5C`, max 310pt: "Swipe left on any story, or tap the bookmark while you read. Saved stories download for reading offline." Demo row 96pt: 72pt photo, serif 19pt "The rover that reads mine waste", "Rebecca Gao · 8 min read"; it slides 118pt to show a 160pt ink "Save" panel and back, 3.4s loop. Ink button 52pt "Browse today's stories" opens Home. | Demo row content is fixed copy (prototype reference only; any story works). |
| SAVED-14 | Ways to save | Swipe left on any list row (Home, For You, results), Save in the article tools, double tap on a video. | Toast "Saved for offline reading" with View (opens Saved). New saves go to the top. | Saved list: App state (device) for guests; Account (backend) when signed in. |
| SAVED-15 | Offline copy | Saving downloads the story so it opens with no connection. | Not drawn. Proposal: download on save over any connection while the switch is on; remove the copy on unsave; refresh when the story changes. | `articleQuery` for the story: `body[]` with the website's `articleBodyBlocksProjection`, `title`, `dek`, `authors[]->`, `heroImage`, inline image assets, video posters (MOD-20), `corrections[]`, `updatedAt` / `_updatedAt` to detect changes. Images sized for the device through the image URL builder. |

## States
- **Default:** Latest order. **Grouped:** By topic, By author. **Edit mode:** none selected, some selected. **Removing:** collapse, then Undo.
- **Empty:** SAVED-13. Guests start here (skipping onboarding clears the sample saves). Guest-specific empty copy: Not designed.
- **Guest:** saves live on the phone; the second save shows the account ask after the save completes ("Saved on this phone", "Keep your saved stories"; `04-…`).
- **Offline:** the list and every downloaded story open with no connection. Rows not yet downloaded, downloading, or failed: Not designed. Video in a saved story shows its poster and "Needs a connection" (`07-…`, Not designed).
- **Download switch off, storage full, download failed, first sync on a new device:** Not designed.

## Motion
| What | Duration and easing | Reduce Motion |
|---|---|---|
| Sort thumb | 320ms EX | Not specified |
| List re-enters on sort change | 6pt rise and fade, 250ms | Not specified (proposal: fade only) |
| Swipe release, icon scale | 250ms EX | Same |
| Row collapse | Height 260ms EX, opacity 150ms (bulk 280ms) | Not specified |
| Edit circles, action bar | 250ms | Same |
| Undo toast | Opacity 250ms, 10pt rise 250ms EX | Same |
| Empty-state demo row | 3.4s loop, EX | Should stop |
| Rows reveal (app view) | 28pt rise, 560ms, staggered | Not specified |

## Accessibility
- No labels in the prototype on Edit, sort segments, rows, circles or action bar buttons; the followed star reads "Following".
- Swipe to remove needs a VoiceOver custom action (Remove). Circles need a selected trait; the sort control a selected segment. The Undo toast must be announced and reachable; with VoiceOver on, keep it until dismissed.
- Progress is already text ("12 min left"); read it with the row.
- Targets: Edit, segments, Clear finished, Clear all, toast 44pt; Remove 52pt.
- Contrast: 12pt `#7A7A7A` status is about 4.3:1; disabled "Clear finished" in `#A6A6A6` must be announced as dimmed. Dynamic Type: Not specified (the 112pt photo layout needs a large-text variant).

## Data and analytics
- **Reader data per saved item:** story `_id`, saved-at time, progress (0–1), finished (see below), download status and size. Guests: device only. Signed in: Account (backend), synced across devices; guest saves move into the account when one is made (D24). Conflict rules: Not designed.
- ~~"Finished" threshold~~: resolved (D51), 90%.
- **Sanity:** read only; every field above exists. No **Missing in schema** proposals for Saved.
- **Proposed events:** saved_view, save (source: swipe, article, video_double_tap; screen), remove (source: swipe, edit, clear_finished, clear_all; count), undo (action), sort_change (value), saved_open (progress at open), edit_enter, saved_empty_cta, offline_open (opened with no connection), download_failed.

## Open items
- ~~Undo length and label~~: resolved (X-02).
- Open a saved story at its saved position (not wired in the prototype).
- Offline line is static; download progress, failure, storage full and switch-off states.
- Guest empty copy, and signing in to an existing account from the save ask (PRD inventory).
- Undo restores to the top, not the original place: confirm.
- Swipe while in Edit mode: Unclear in prototype.
