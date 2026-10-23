# Account and settings
**ID prefix:** SET · **Status:** Designed (sign-out, delete-account confirmation, validation and the Support row not designed; Newsletter hub row live since X-18) · **Last changed:** Round 12 QA, October 23, 2026 (SET-30 Newsletter screen; SET-17 removed; SET-28 re-pointed); Round 9, October 20–23, 2026 (P1.2 notification states; newsletter section in Account); hub built Round 3, October 14, 2026 · **Board:** 07 Account and settings (`07 Account sheet`, `07 Settings`, `07 Account`, `07 Following`, `07 Notifications settings`, `07 Reading`, `07 Static page`); 01b Skipped onboarding (`01b Unfinished profile`, `01b After dismissing`); 09c Notifications v2 (`09c Settings off`, `09c iPhone Settings`); `explorations/P1.3 Newsletter.dc.html` (Settings phones) · **Prototype:** `BeGiantAppPhone.dc.html` (search `accRows`, `isSettings`, `settingsGroups`, `subAccount`, `subFollowing`, `subNotif`, `subReading`, `subPage`, `openSub`, `nlSet`, `newsVals`); page copy `PAGES` in `bg-app-data.js` (prototype reference only) · **Decisions:** D4, D14, D15, D19, D24, D25, D27, D29, D36, D50 · **Open questions:** Q7, Q9, Q10
**Affects / depends on:** `02-app-shell-and-navigation.md` (Home avatar, back behaviour, tab labels), `04-guest-and-account-gating.md` (guest and unfinished-profile variants, Create free account), `03-onboarding.md` (same chips and notification controls), `12-notifications-newsletter-listen-share.md` (Notifications screen NOTIF-07 to NOTIF-15; newsletter state NEWS-05, NEWS-06), `06-article.md` (text size, Light or Dark page), `09-video.md` (autoplay, VID states), `10-saved.md` (downloads, Saved row), `07-article-modules.md` (MOD-44 shares the newsletter state), `13-content-model.md` (CMS-50 to CMS-56 reader data).

## Summary
Account lives behind the avatar on Home (D4). The avatar opens a half sheet with the reader's name and shortcuts; "Account and settings" opens the Settings hub (D19): Account, Following, Notifications, Reading and display, and one static page template for About, Editorial standards, Privacy and Terms. Nothing links back into onboarding. Delete account sits in Account (App Store requirement). Guests see the same hub with free-account offers instead of the account rows (D24).

## Elements and behaviour
| ID | Element | Behaviour | Spec (sizes, copy, timing) | Data |
|---|---|---|---|---|
| SET-01 | Account sheet | Opens from the Home avatar; backdrop tap closes. | White, radius 32pt, inset 8pt sides and bottom, padding 10/20/30, gap 18. Grabber 36 × 5pt `#D6D6D6`. Backdrop `rgba(0,0,0,.2)`, 2pt blur, 250ms. | — |
| SET-02 | Sheet header, signed in | Initials, name, email. | 56pt circle `#F2F2F2`, initials Gibson 16pt 600 .06em. Name serif 26pt. Email Gibson 13pt `#7A7A7A`. Prototype hard-codes "Maya Okafor" (prototype reference only). | Account (backend): name, email |
| SET-03 | Sheet header, guest | Replaces SET-02 (D24). | Phosphor `user-circle-light` 30pt in a 56pt `#F2F2F2` circle. "Reading as a guest" serif 26pt. "Your saves and topics are kept on this phone" 13pt. Ink button "Create free account" 52pt opens Create account (04). | App state (device): guest flag |
| SET-04 | Sheet rows | Under a 1pt `#171717` rule; 54pt rows, 22pt icon, 16pt label, 13pt `#7A7A7A` value, 16pt caret, `#E6E6E6` hairlines. | In order: "Finish your profile" (`user-circle`, "N of 4", only if unfinished, D25) → Account; "Following" (`star`, "N topics · N writers"); "Saved" (count) → Saved tab; "Notifications" (`bell`, "N on"); "Account and settings" → hub. | Account: profile fields; follows (CMS-50); saved count (CMS-51); notification types on (CMS-53) |
| SET-05 | Sheet footer | Static. | "Be Giant is a non-profit. Reader support keeps every story free." 13pt, line height 1.45, `#5C5C5C`. | — (app copy) |
| SET-06 | Settings hub | Full screen; back returns to the origin. | Back "‹ HOME" (Model 3 "READ"/"WATCH"), 44pt, Gibson 12pt 600 .12em uppercase, `caret-left-light` 20pt, top 58. Title "Settings" serif 44pt (D29). Push 28pt from right with fade, 300ms `cubic-bezier(.16,1,.3,1)`. | — |
| SET-07 | Account row (hub) | Opens Account; guests: Create account. | 1pt ink top rule, hairline bottom, 18pt padding. 56pt circle `#E3DEFC`, initials. Name serif 24pt. Sub 13pt, one line: "{email} · Account details"; unfinished "{email} · N of 4 done"; guest "Create your free account" / "Keep saves and topics on every device". | Account (backend): name, email, completeness |
| SET-08 | Hub groups | Label above a 1pt ink rule; 54pt rows, 16pt label, 14pt value. | Label 11pt 600 .14em uppercase `#7A7A7A`, 30pt above. "Your reading": Following ("N topics · N writers"), Notifications ("Off", "Light", "Balance", "Custom"), Reading and display ("Default text"). "Be Giant": Newsletter, Support our journalism, About Be Giant, Editorial standards, Privacy policy, Terms of use, then "Sign out" `#DB3A3A` without caret (guest: "Create free account"). | As each row below |
| SET-09 | Hub footer | Version and mission. | "Be Giant 1.0 (24) · A non-profit, non-partisan publication reporting on the people, places, ideas and breakthroughs shaping Canada's future." 12pt, line height 1.5, padding 34/20/170. | App bundle version and build |
| SET-10 | Sub-screen frame | Shared; back "‹ SETTINGS". | Title serif 34pt, line height 1.04; same push. Static pages add a "BE GIANT" eyebrow 11pt. | — |
| SET-11 | Account identity | Avatar, name, since line. | 64pt `#E3DEFC` circle, initials 18pt. Name serif 24pt. "Reading since September 2026" 13pt (placeholder). | Account (backend): created date |
| SET-12 | Account details form | Name, Age, City, Email, editable. | Labels 11pt 600 .14em uppercase `#5C5C5C`. Inputs 44pt, radius 8, inset 1pt `#D6D6D6`; focus 1.5pt ink, 150ms. Age (96pt, number pad) and City share a row, gap 10. Note: "Age and city are only counted in aggregate, to understand who Be Giant reaches. They are never sold or shared with advertisers." 12pt. | Account (backend): name, age, city, email (CMS-56). Age here is a number; About you uses ranges (Open items) |
| SET-13 | Save changes | Saves; completes an unfinished profile when all four are filled (D25). | Ink button 52pt. Toasts "Account updated" or "Profile complete. Thanks". | Account (backend) write |
| SET-14 | Sign-in | Provider and password. | Label "Sign-in". "Apple · Connected" (hard-coded). "Password · Change" → toast "Reset link sent to {email}". | Account (backend): auth provider(s); reset-link endpoint |
| SET-15 | Sign out (Account and hub) | Signs out. | Row 54pt, 16pt. Prototype shows toast "Signed out" only. | Account (backend) session end |
| SET-16 | Delete account | App Store requirement. | "Delete account" `#DB3A3A`; sub "Removes your account, follows and saved stories. This can't be undone." 12pt. Toast "Check your email to confirm deletion". Confirmation flow Not designed. | Account (backend) deletion; also remove the Beehiiv subscriber? (Open items) |
| SET-17 | ~~Newsletter section (Account)~~ | **Removed October 23, 2026 (Round 12 QA, D70):** moved to its own screen, SET-30. Account keeps only profile and sign-in. | — | — |
| SET-18 | Following: topics | Every topic as a chip; tap follows or unfollows (D27). | "TOPICS" + "N followed" 12pt. Chips 40pt, full radius, 14pt, outline grey or ink, 20pt accent circle with `check-light` 12pt. Gap 8, wrap; press .95; 200–250ms. | List: `topic.title`, `topic.slug`, `topic.color`. Follows: Account (device for guests), CMS-50 |
| SET-19 | Following: writers | Every byline with Follow/Following. Tapping a name opens the author profile (Round 11, AUTH-01). | "WRITERS" + "N followed". 68pt rows: 44pt round headshot, name 16pt, "N stories" 12pt. Button 36pt, radius 8, 11pt 600 .12em uppercase; Follow outline `#D6D6D6`, Following ink. Toasts "Following {name}" / "Unfollowed {name}". | `author.firstName` + " " + `author.lastName`, `author.slug`, `author.headshot`; count `count(*[_type=="article" && references(^._id)])`. Follows: Account, CMS-50 |
| SET-20 | Notifications screen | Status, presets, quiet hours, types. | Spec NOTIF-07 to NOTIF-15 in 12. | See 12 |
| SET-21 | Text size | Five stops, live sample; sets article body size. | "TEXT SIZE" + name: Smallest, Small, Default, Large, Largest = 16, 17, 18, 20, 22pt. Sample "On a clear afternoon in July, the solar farm on the edge of Summerside produces more electricity than the town can use." between hairlines, line height 1.55, 200ms. Track 2pt `#E6E6E6`; stops 22pt; selected dot 22pt ink, others 8pt `#A6A6A6` (250ms). Serif "A" 15pt and 24pt at the ends. | App state (device): size index 0–4, default 2 (CMS-55) |
| SET-22 | Article page | Light or Dark (D15); same as the Night tool. | Segmented 38pt, radius 8, `#F2F2F2`, 3pt padding; selected ink, radius 6; 11pt 600 .1em uppercase. "Light", "Dark". | App state (device) |
| SET-23 | Play video automatically | Applies to the Video tab only (articles never autoplay, D46). | Same segmented control: "Always", "Wi-Fi only", "Never"; default Wi-Fi only. Stored, not wired in the prototype (Q6, 09). | App state (device) |
| SET-24 | Tab bar labels | Names under icons (D14). | 66pt switch row: "Tab bar labels" 16pt, "Show names under the icons" 12pt. Off by default. | App state (device) |
| SET-25 | Download saved stories | Keeps saved stories offline. | Switch row, sub "Keeps them on this iPhone for reading offline". On by default. Not wired (10). | App state (device) |
| SET-26 | Switch | Used across Settings. | 51 × 31pt track; on `#171717`, off `#E6E6E6` (250ms). Knob 27pt white, shadow `0 2px 4px rgba(0,0,0,.18)`, 20pt travel, 280ms `cubic-bezier(.16,1,.3,1)`. Whole row is the target. Build: native `UISwitch`/`Toggle` styled to match. | — |
| SET-27 | Static page template | One layout for About Be Giant, Editorial standards, Privacy policy, Terms of use. | Updated line 12pt; intro 19pt, line height 1.45, `#5C5C5C`, 1pt ink rule below; section heading serif 24pt; body Gibson 16pt, line height 1.6; gap 22. Copy in `PAGES` is placeholder (prototype reference only). | Sanity `page` documents exist: `terms-of-use` and `privacy-policy` (one `centeredRichTextSection` each, so they map well); `about` and `editorial-standards` are page-builder layouts (`moduleReference`, `imageMarquee`, `discoverStories`) that don't map to this template. Proposal: Terms and Privacy from `page.pageBuilder[_type=="centeredRichTextSection"]`; About and Editorial standards open `begiant.ca/{slug}` in the in-app browser, or editors add app copy (Open items). Corrections policy is a website route (`/corrections-policy`), not a `page` |
| SET-28 | Newsletter row (hub) | Shows the real state and opens Settings › Newsletter (SET-30, D70). Was: opened Account at SET-17 (X-18). | Value "Subscribed", "To confirm" (guest waiting on the email, D64) or "Off". | Shared subscribe state (NEWS-05) |
| SET-29 | Support our journalism | Row with caret, no destination. | Not designed. | Unclear (donation URL not in schema) |
| SET-30 | Newsletter screen | Settings › Newsletter, its own sub-screen (D70). Only newsletter settings. | Frame SET-10, title "Newsletter". Line 15pt `#5C5C5C`: "The Leap is our newsletter: reporting from across Canada, by email. Free, and you can unsubscribe anytime." Under a 1pt ink rule: switch row "The Leap" (51 × 31pt) with sub "Sent to {email}" / "Not subscribed" / guest "Waiting for you to confirm. Check {email}"; signed in: "Email address" row "{email}. Change it in Account" (opens Account); guest waiting: "Resend the confirmation email" row. Note 12pt under the rows. Guest not subscribed: email field, ink "Subscribe", "We'll email you a link to confirm. No account needed." | `newsletter.title`, `description`; subscribe state (NEWS-05, API-01) |

## States
| State | Behaviour |
|---|---|
| Signed in | SET-02, SET-07 with email. Board `07 Account sheet`, `07 Settings`. |
| Guest | SET-03; hub account row and last row offer a free account; Account not reachable. Board 01b. |
| Unfinished profile | Sheet leads with "Finish your profile N of 4"; hub sub "N of 4 done". Board `01b After dismissing`. |
| Notifications allowed, never asked, declined | NOTIF-07 to NOTIF-09 in 12. Hub "Off" when not allowed. |
| Newsletter subscribed, not subscribed, declined | SET-17 copy above. |
| Validation and errors | Not designed (invalid email, empty name, age limits). |
| Saving, offline, server error | Not designed. |
| Signed out | Not designed (landing screen; what stays on the phone). |
| Delete account confirmation | Not designed. |
| Static page loading or failed | Not designed. |

## Motion
- Sheet rises (translateY 110% to 0) 320ms `cubic-bezier(.16,1,.3,1)`; backdrop 250ms ease.
- Hub and sub-screens push 300ms. Native build: standard navigation push and sheet detents.
- Switch 280ms; segmented 200ms; chips 200–250ms; text sample 200ms.
- Reduce Motion: Not specified.

## Accessibility
- Rows 54pt or more; switches use the whole row. In the prototype only the newsletter switch has `role="switch"`; the build uses native toggles with labels.
- Visible labels on every field; Age uses the number pad.
- Destructive rows use `#DB3A3A`; add a confirm so colour is not the only cue.
- Text size sets article text only. How chrome follows iOS Dynamic Type: Not specified.

## Data and analytics
**Proposed events:** `settings_open` (source: sheet, hub), `profile_update` (fields changed, completed), `follow_topic` / `unfollow_topic` (source: settings), `follow_writer` / `unfollow_writer`, `text_size_change` (index), `page_theme_change`, `autoplay_change`, `tab_labels_toggle`, `downloads_toggle`, `newsletter_toggle` (source: settings), `static_page_view` (slug), `sign_out`, `delete_account_request`.

**Missing in schema (for the change request):**
| Proposed field | Type | Filled by | Breaks without it |
|---|---|---|---|
| App copy for About and Editorial standards, for example `page.appBody` (SCR-09) | Portable Text on `page` (optional) | Editorial | SET-27 for those two pages (otherwise open the website) |
| `settings.supportUrl` (SCR-10) | url on the `settings` singleton | Be Giant | SET-29 Support our journalism |

Reader data (not Sanity): profile, follows, settings, newsletter state are listed in `13-content-model.md` CMS-50 to CMS-56. Whether reading settings sync to the account: Unclear in prototype (all device-only).

## Open items
1. Sign-out flow and delete-account confirmation; whether deletion also unsubscribes from Beehiiv.
2. Validation and error states; age minimum.
3. Age as a number (Account) versus ranges (About you, D33). Pick one.
4. Sign-in section should reflect the real provider (Apple, Google, magic link, password); Password only for password accounts.
5. Settle the wider newsletter placement (Q7, Q9). The hub row is live (X-18).
6. Support our journalism destination.
7. Sheet shows "Notifications · N on"; hub shows the preset name. Align.
8. Wire autoplay (SET-23) and downloads (SET-25).
9. Static pages: Sanity for Terms and Privacy; decide About and Editorial standards; add a Corrections page (PRD inventory).
10. Gender (Q10) is not shown in Account.
