# Notifications, newsletter, Listen and share
**ID prefixes:** NOTIF, NEWS, LISTEN, SHARE · **Status:** Partial (Notifications designed, tap-to-open not designed; Newsletter explored, in-article card and Settings switch built, placement open; Listen designed, vendor open; Share designed) · **Last changed:** Round 12, October 23, 2026 (NEWS placements and double opt-in, D62 and D64; big-story copy, D68); Round 9, October 20, 2026 (P1.2, P1.3); October 23, 2026 (D50 newsletter card) · **Board:** 09c Notifications v2 (`ob-alerts-light`, `ob-alerts-balance`, `ob-alerts-quiet`, `ob-alerts-perm`, `ob-alerts-declined`, `set-notif-off`, `set-notif-unasked`, `ios-notif`); 07 Account and settings (`07 Notifications settings`); `explorations/P1.3 Newsletter.dc.html` (13 phones); 03 Article (Listen, Share tools) · **Prototype:** `BeGiantAppPhone.dc.html` (search `alertDefs`, `obLevels`, `lvlDesc`, `quietNote`, `nsSteps`, `NXN`, `notifRef`, `newsVals`, `nlSt`, `nlEnd`, `toggleListen`, `cycleSpeed`, `mpShow`, `shareApps`, `shareActs`) · **Decisions:** D7, D10, D24, D36, D41, D50 · **Open questions:** Q4, Q7, Q9, Q13
**Affects / depends on:** `03-onboarding.md` (step 2 uses the same controls plus the preview banner), `11-account-and-settings.md` (SET-17 newsletter switch, SET-20 Notifications screen, SET-28 hub row), `04-guest-and-account-gating.md` (first-follow notification ask, first-share account ask, one ask per session), `07-article-modules.md` (MOD-44 newsletter card shares NEWS state; MOD-93 audio must not compete with Listen), `06-article.md` (Listen and Share in the reading tools), `09-video.md` (VID-12 Share), `05-home-and-for-you.md` (send-a-story and reading cards share), `02-app-shell-and-navigation.md` (mini player above the tab bar, universal links), `13-content-model.md` (CMS-14 push copy, CMS-53, CMS-54).

---

# Notifications (NOTIF)

## Summary
Readers pick one of two presets (D36): **Light**, the one big story each morning, or **Balance**, the big story plus an alert whenever a followed topic or writer publishes (Balance includes Light; decided October 20). Three type switches fine-tune it; changing them gives "Custom". Quiet hours are on by default, 10 p.m. to 7 a.m., and are a **server-side hold**, not iOS Focus. A line before Allow says the iPhone asks next. Declining leads to a calm screen; Settings shows allowed, never asked, or declined, with the way back through iPhone Settings. Choices are kept when declined. What a notification says and how a tap opens the story are not designed; there is no push-copy field in Sanity.

## Elements and behaviour
| ID | Element | Behaviour | Spec (sizes, copy, timing) | Data |
|---|---|---|---|---|
| NOTIF-01 | Intro | Title and line (onboarding step 2). | "Notifications" serif 32pt, line height 1.04. "Choose what reaches you. Start with a level, then fine-tune. You can change any of this in Settings." 15pt `#5C5C5C`. | — |
| NOTIF-02 | Preview banner | iOS-style banner showing what the current choice sends; drops in on arrival and on every change. Balance adds a second card behind it ("more than one"). Onboarding only. **Round 12:** the big story banner shows "now", not 7:00 a.m. (D68). | Card `rgba(246,246,246,.96)`, radius 22pt, padding 12/14/12/12, 38pt app icon (radius 9). System font: title 14pt 600, time 12pt `rgba(60,60,67,.6)`, body 14pt. Stack card 40pt, `rgba(236,236,236,.9)`, inset 12pt, fades 250ms; padding 320ms. Examples: "The big story" / "{lead headline}. 6 min read." / "7:00 a.m."; "New in {topic}" / "now"; "Emily Latimer has a new story" / "2h ago". | Prototype reference only (copy built from local stories). Only the three current types have examples (X-19). |
| NOTIF-03 | Preset switch | Light or Balance. **Round 12:** Light reads "Only the big story, when there is one: at most one a day, often fewer. Nothing for topics or writers." (D68). | Segmented, same as SET-22. Lines: Light "The one big story of the day, each morning. Nothing for topics or writers."; Balance "The big story, plus an alert each time a story publishes in a topic or by a writer you follow. That can be as little as one a week, depending on what you follow."; Custom "Your own mix of the types below." Default Balance. | Account (backend): preset (CMS-53) |
| NOTIF-04 | Quiet hours | Toggle with editable From and To; sits directly under the presets. | Row 66pt; 51 × 31pt switch (SET-26). Short value "Held until morning" / "Off". Sub "Held until morning" / "Off. Notifications can arrive at any hour." Time pills 30pt, radius 6, `#F2F2F2`, 14pt; native time picker, 15-minute steps. Note: "Notifications are held until morning. Anything that publishes between 10 p.m. and 7 a.m. arrives at 7 a.m. instead. Tap a time to change it." (times live). Default on, 22:00–07:00. | Account (backend): `quietFrom`, `quietTo`, on/off, device time zone, sent with the APNs token. Push service holds and releases |
| NOTIF-05 | Fine-tune types | Label "Fine-tune", then three switches. **Round 12:** The big story sub reads "When there is one, at most once a day" (D68). | 66pt rows, label 16pt, sub 12pt `#7A7A7A`: "The big story" / "One story each morning at 7 a.m." (moves to the quiet-hours end if later); "New in topics you follow" / "When a story publishes in one of your topics"; "Writers you follow" / "When they publish something new". | Account (backend): per-type flags. Triggers: big story **Missing in schema** (NOTIF-16); topic alerts from `article.topics[]`; writer alerts from `article.authors[]` |
| NOTIF-06 | Per-topic switches | Under "New in topics you follow" when on: one small switch per followed topic. | Indented 16pt with a hairline at left; 48pt rows, 15pt `#3D3D3D`; switch 42 × 26pt, knob 22pt, travel 16pt. Opens with max-height 320ms. | Account: followed `topic.slug` list minus muted ones |
| NOTIF-07 | Handoff line | Above the button before the iOS alert. | "Your iPhone asks next. Tap Allow to finish." 13pt `#5C5C5C`, centred. Button "Turn on notifications" (ink, 52pt). | — |
| NOTIF-08 | iOS permission alert | System alert, once per install. | Build: `UNUserNotificationCenter.requestAuthorization`. Prototype draws the alert. | APNs device token → push service |
| NOTIF-09 | Declined screen | After Don't Allow in onboarding. | "No notifications, for now" serif 32pt. "That's fine. Be Giant works the same without them. We kept your choices, so they're ready if you change your mind." Summary rows Preset and Quiet hours. "Turn them on later" with three steps: "Tap Open iPhone Settings", "Turn on Allow Notifications", "Tap ‹ Be Giant at the top to come back". Buttons "Continue" and "Open iPhone Settings". | Choices kept in Account (backend) |
| NOTIF-10 | Settings: allowed | Row "Allowed in iPhone Settings" / "Banners, sounds and badges"; tap opens iPhone Settings. | 15pt / 12pt. | iOS `getNotificationSettings` on every foreground |
| NOTIF-11 | Settings: never asked | Button "Turn on notifications" shows the iOS alert. | | `.notDetermined` |
| NOTIF-12 | Settings: declined | Same three steps and "Open iPhone Settings" as NOTIF-09. | | `.denied` |
| NOTIF-13 | iPhone Settings handoff | Opens the app's own notification page. Returning with notifications on shows a toast; in onboarding it continues to the account step. | Build: `UIApplication.openNotificationSettingsURLString` (iOS 16+), else `openSettingsURLString`. Prototype draws a mock page. | — |
| NOTIF-14 | Account step summary | "N notification types on", or "Notifications off" when not allowed. | | — |
| NOTIF-15 | Hub value | "Off", "Light", "Balance" or "Custom" (SET-08). Sheet shows "N on" (SET-04). | | — |
| NOTIF-16 | Notification content | Not designed. Title, body, image, grouping and timestamp format. | Proposal: title = story headline, body = a short push line, thread per type. | **Missing in schema:** `article.pushText` (SCR-02) (string, ≤ 110 characters, optional; falls back to `dek`). Big story selection: none; proposal reuse `homepage.sections[_type=="heroArticle"].article` (with `pinUntil`) or add `article.sendAsBigStory` (SCR-05) (datetime) |
| NOTIF-17 | Tap opens the story | Not designed (PRD inventory: Must). Includes cold start. | Proposal: open the story over Home with back to Home; a deleted or unpublished story opens Home with a toast. | Payload: article `_id` and `/stories/{pillarSlug}/{slug}` |
| NOTIF-18 | First-follow ask | First follow asks for notifications once if skipped (D26). After a decline iOS won't ask again, so the re-ask must open NOTIF-12 instead (P1.2 note 5). | See 04. | — |

## States
Allowed / never asked / declined / provisional (`.provisional`, not designed; P1.2 note 6). Preset Light, Balance, Custom. Quiet hours on (default) or off; times edited (board `ob-alerts-quiet`: 11 p.m. to 6:30 a.m.). Held notifications released at the end time, one by one or as a summary: open (Q13). Notification received in foreground, tapped, cold start: Not designed.

## Motion
Banner drop on change (iOS-style; prototype uses a transform on `notifRef`); stack card 250ms; per-topic panel 320ms `cubic-bezier(.16,1,.3,1)`; switches 280ms. Reduce Motion: Not specified (proposal: banner fades instead of dropping).

## Accessibility
Native switches with labels; the preview banner is decorative (hide from VoiceOver, or read "Example notification: …"). Time pills open the system picker. Steps in NOTIF-09 are a numbered list, not images.

## Data and analytics
Events: `notif_preset_select`, `notif_type_toggle` (type, topic), `quiet_hours_change` (from, to, on), `notif_permission_prompt`, `notif_permission_result` (allowed, denied), `notif_open_settings`, `notif_received`, `notif_open` (type, article id, cold start). Missing in schema: `article.pushText` (SCR-02); big-story selection (see NOTIF-16).

## Open items
1. Q13: cadence (daily? fixed 7 a.m. or on publish?), Balance cap, held alerts one by one or a summary.
2. Who picks the big story, from which field (NOTIF-16); do topic alerts use every tag or the primary pillar; does an update resend?
3. Notification content and tap behaviour (NOTIF-16, NOTIF-17).
4. Re-ask after decline (with P1.4) and provisional authorisation.
5. Copy sign-off by editorial (PRD inventory).

---

# Newsletter (NEWS)

## Summary
P1.3 explored three asks (Q7): **A** a checkbox on the free-account step, **B** a checkbox after personal details, **C** a one-time half sheet after the reader's second finished story. **Recommended: C plus the Settings switch for everyone**; add A only if signups become a core KPI (Q9); not B. None of A, B or C is live: they render only with `news="a" | "b" | "c"`. Live now: the editor-placed card in articles (MOD-44, D50) and the switch in Settings > Account (SET-17). All three share one subscribe state. Subscriptions go to Beehiiv through the website's `/api/newsletter/subscribe`; Sanity holds one newsletter today, "The Leap" (`active: true`), while app copy says "the Be Giant newsletter".

## Elements and behaviour
| ID | Element | Behaviour | Spec (sizes, copy, timing) | Data |
|---|---|---|---|---|
| NEWS-01 | A: account-step checkbox | Above the sign-in buttons; never pre-ticked (CASL). Applies to whichever sign-in follows. Unticked = no, never asked again. **Round 12:** in the app (D62), together with NEWS-03 and the Settings switch. | 26pt box, radius 6, whole row the target. "Send me the Be Giant newsletter" + "Our reporting from across Canada, by email. Free, and you can unsubscribe anytime." | Subscribe call after the account exists (NEWS-07) |
| NEWS-02 | B: after personal details | Same checkbox below About you fields, or below the password on the email form. Hidden if already subscribed. Not recommended. | As NEWS-01. | Status lookup (NEWS-07) |
| NEWS-03 | C: second-story sheet | After the end of the second finished story, never over a story; never in a session that already showed an account or notification ask. Backdrop tap = Not now. **Round 12:** in the app (D62). Guests who say yes get "Check your email to confirm" (D64). | Envelope icon, "NEWSLETTER" kicker; headline "Get our reporting by email"; "You've finished two stories. The Be Giant newsletter brings more like them to your inbox, from across Canada."; signed in "Sent to {email}"; guest email field; Subscribe (ink) and "Not now"; footer "Free. Unsubscribe anytime, from any email or in Settings." Toast: "You're subscribed to the newsletter" (guests too, X-16). | App state (device): finished-story count, ask history |
| NEWS-04 | C: second ask | At least 30 days and 5 more finished stories after one Not now. Then never. | "Still want the newsletter?"; "One last ask. The Be Giant newsletter brings stories like the ones you've been reading to your inbox."; footer "We won't ask again. It's always in Settings."; button "No thanks". | App state (device) or Account |
| NEWS-05 | Shared subscribe state | One state for MOD-44, SET-17, SET-28 and A/B/C: subscribed, not subscribed, declined (never ask), later (C dismissed once), off (turned off in Settings = no). Existing subscribers are never asked. | | Signed in: Beehiiv status by account email (no app-usable endpoint today; the website route only reports `alreadySubscribed` on a subscribe call). Guests: device |
| NEWS-06 | Settings switch | SET-17 in 11. | | As NEWS-07 |
| NEWS-07 | Subscribe call | POST JSON `{email, publicationId, source}` to `https://www.begiant.ca/api/newsletter/subscribe`. **Round 12:** guest signups need Beehiiv’s confirmation email on (double opt-in, D64); signed-in readers with a verified email can skip it. Field Office to set this with Be Giant. | Returns `{success}` or `{success, alreadySubscribed, status}`; 429 after 10 attempts per IP per 15 min; 503 without a key. A missing `Origin` header is allowed. `source` (`{widget, pagePath}`) is optional; an unknown `widget` is silently dropped, so app signups carry no attribution until an app value is added to the website's list (today: `popup`, `article_sidebar`, `article_inline_cta`, `pillar_sidebar`, `newsletter_section`, `newsletter_hero`). | `publicationId` = `newsletter.externalId` (Beehiiv publication) of the first `active` `newsletter`, or the one on the article's `newsletterCTA` |

## States
Signed in, guest, already subscribed (no ask; card hidden), declined, later, off, confirmation pending (guest), error (Not designed), offline (Not designed).

## Accessibility
Checkbox and switch are real controls (`role="switch"` on the prototype switch only). The email field needs a label and the email keyboard.

## Data and analytics
Events: `newsletter_ask_shown` (option A/B/C, ask number), `newsletter_subscribe` (source: account_step, about_you, story_sheet, article_inline, settings; signed in or guest), `newsletter_dismiss`, `newsletter_unsubscribe`. Record consent time, screen and exact wording (CASL). No Sanity field is missing for the subscribe itself; the gaps are API endpoints: status by email and unsubscribe (FO-3 in 07).

## Open items
1. Q7 and Q9: pick C (recommended) or A plus C; lists and frequency; whether the name is "The Leap".
2. ~~Double opt-in~~: decided (X-16). No confirmation email, as on the website; guests are subscribed at once and see "You're subscribed". Counsel can still revisit under Q9.
3. App endpoints: status lookup, unsubscribe, a `source.widget` value for the app, and a per-IP rate limit that suits mobile networks.
4. Sign in with Apple relay addresses won't match website subscribers.

---

# Listen (LISTEN)

## Summary
Listen reads the story aloud (D10). It starts from the Listen tool in the article and continues in a mini player that floats above the tab bar while the reader moves around the app. How the audio is made is open (Q4): synthetic voice or narrated audio only. Sanity has no audio field.

## Elements and behaviour
| ID | Element | Behaviour | Spec (sizes, copy, timing) | Data |
|---|---|---|---|---|
| LISTEN-01 | Listen tool | In the article tools (D8). Starts the current story; when playing, its icon becomes animated bars; tap again pauses or plays. | Phosphor `play-light` 22pt in a 48 × 44pt target. Label "Listen". | Audio source: **Missing in schema** (LISTEN-06) or a TTS vendor reading `article.title`, `dek`, `body` text |
| LISTEN-02 | Mini player | Glass pill. Shown while something plays or is paused, except during onboarding, while typing, and on the Video tab. | 56pt tall, full radius, tab-bar glass (16pt blur), padding 0/6/0/8. Above the bar: left/right 16pt, bottom 100pt; with the bar collapsed it sits inline: left/right 88pt, bottom 30pt. Moves 380ms `cubic-bezier(.16,1,.3,1)`; shows with opacity 250ms and transform 250ms. | App state (device) |
| LISTEN-03 | Play / pause | Left 44pt control: three bars animating while playing, `play-fill` 18pt when paused. | Bars 3 × 16pt, gap 3, `bgBars` 900ms ease-in-out, staggered -300ms. | — |
| LISTEN-04 | Title and time | Tap opens the story if no article is open. | Kicker "Listening · 2:14 / 6:00" or "Paused · …" 10pt 600 .14em uppercase, 70%, tabular. Title serif 16pt, line height 1.1, one line, ellipsis. Progress 2pt line at the bottom, inset 22pt, 1000ms linear. | `article.title`; length: audio duration (prototype uses `readTime` × 60 s, prototype reference only) |
| LISTEN-05 | Speed | Cycles 1x → 1.25x → 1.5x → 0.8x. Hidden in the inline (narrow) player. | 44pt target, 13pt 600. | App state (device) |
| LISTEN-06 | Stop | Closes the player. | Phosphor `x-light` 18pt in 44pt. Label "Stop". | — |

States: playing, paused, stopped; inline versus above the bar; Lock Screen and Control Centre controls, background audio, interruptions (calls), AirPods: Not designed (native `AVAudioSession` and `MPNowPlayingInfoCenter` expected). Loading, error, offline: Not designed. What happens to body modules (images, quotes, parallax) when read aloud: Not specified.

**Data and analytics.** Events `listen_start` (article id, source), `listen_pause`, `listen_complete`, `listen_speed` (value), `listen_stop` (position). Missing in schema: `article.audioNarration` (SCR-06) (file, optional; filled by the audio producer) and `article.audioDuration` (number, seconds) if narrated; nothing if synthetic, but then a vendor and a text-extraction rule for Portable Text.

**Open items.** Q4 vendor or narration; whether in-article `audioEmbed` (MOD-93) pauses Listen; whether Listen hides on the Video tab or ducks under video sound.

---

# Share (SHARE)

## Summary
Every share uses the native share sheet (D41): `UIActivityViewController` on iOS, the Android sharesheet later. The prototype draws the iOS sheet. The shared link is the story's website URL. A guest's first share asks for a free account after the sheet closes (D24).

## Elements and behaviour
| ID | Element | Behaviour | Spec (sizes, copy, timing) | Data |
|---|---|---|---|---|
| SHARE-01 | Entry points | Article tools Share; Video feed Share (VID-12); end-of-Home "Send a story" card; milestone reading card. | Phosphor `share-fat-light`. | — |
| SHARE-02 | Share sheet | Native. Prototype: preview row (52pt image, radius 10; title 15pt 600, two lines; "begiant.ca" 13pt), app row (AirDrop, Messages, Mail, Notes, More), actions Copy, Add to Reading List, Add Bookmark, each with a toast ("Link copied" and so on). | Prototype only: sheet `rgba(242,242,247,.97)`, 30pt blur, radius 36pt, inset 8pt. | — |
| SHARE-03 | Story link | The item passed to the sheet. | Proposal: URL plus title as `LPLinkMetadata` so the preview shows the photo. | `https://www.begiant.ca/stories/{pillarSlug}/{slug}` with `pillarSlug = coalesce(primaryPillar, pillar)->slug.current`, `slug.current`; preview `title` and `heroImage` (or `cardImage`). `article.sharingDetails` is a read-only Studio helper, not data |
| SHARE-04 | Milestone card | Shares the reading card: "My 10th story on Be Giant", "Reading card · begiant.ca". Image not designed for export. | | App state; image rendering Not designed |
| SHARE-05 | Guest ask | After the first share by a guest, the account ask shows 900ms after the sheet closes (D24). | See 04. | App state (device): share count |

States: shared, cancelled (no toast; the native sheet gives no result for some targets). UTM or attribution on shared links: Not specified. Universal links so shared URLs open the app: Must, Not specified (02, FO-7).

**Data and analytics.** Events `share_open` (source: article, video, send_story, milestone), `share_complete` (activity type when iOS reports it). No schema change needed.

**Open items.** Universal links and the `apple-app-site-association` file on begiant.ca; whether shared links carry UTM tags; milestone card image.
