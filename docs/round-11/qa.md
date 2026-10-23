# Round 11: QA list

Test on an iPhone at https://gabrieldufresne.github.io/be-giant-app/. If the app was already open, tap Refresh on the "new version" toast. Go through onboarding, or tap "I already have an account" on the welcome to land on Home.

Point to any item by its number (for example "2.3") and say what happened. A screenshot helps.

## 1. Author profile from the byline
- 1.1 Open the lead story on Home (the family business story). Tap the byline (avatar and "By Emily Latimer"). The profile slides in from the right.
- 1.2 The top reads "Writer", then the name centred in the serif on two lines, then the bio, centred.
- 1.3 Below the bio, a Follow button. Emily has no website, so there is no Learn more.
- 1.4 The tab bar shows Home, Video, Saved and Search, not the reading tools.
- 1.5 Scroll down. "Stories by Emily" is followed by her stories, newest first: photo, topic tag, headline, dek, then date and read time.
- 1.6 Once the name has scrolled away, the top bar turns frosted and shows "Emily Latimer" in the middle.
- 1.7 Tap Share (top right). A toast says it shares begiant.ca/author/emily-latimer. The real share sheet comes in the build.

## 2. Following a writer
- 2.1 On a profile, tap Follow. It fills black with a check, and a toast says "Following {name}".
- 2.2 Tap it again. It goes back to Follow, and a toast says "Unfollowed {name}".
- 2.3 Follow a writer, go back, and open Settings › Following. The writer shows as Following there too.

## 3. Going back
- 3.1 On a profile, tap a story. It opens over the profile.
- 3.2 Close that story (Back in the reading tools). You land on the profile again.
- 3.3 Tap Back on the profile. You land on the story you started from (it reopens at the top).
- 3.4 Swipe from the very left edge of the screen on a profile. It closes, like Back.
- 3.5 Swipe from the middle of the screen on a profile. Nothing happens; the page only scrolls.

## 4. Other ways in
- 4.1 Scroll to the end of any story to Follow similar topics. Tap the writer's name (not the button). The profile opens.
- 4.2 In the same row, tap the Follow button. It follows the writer and does not open the profile.
- 4.3 Open Settings › Following and tap a writer's name. The profile opens.

## 5. Different writers (from Settings › Following)
- 5.1 Lisa Hrabluk: the bio has a Learn more link. Tap it. A toast names her website.
- 5.2 Lisa Hrabluk: the end of the list says "The latest 8 of 15 stories".
- 5.3 Tom Jokinen: the profile has no Learn more.
- 5.4 Sadiya Ansari: a long bio, then "No stories yet. Follow Sadiya…" under the heading.
- 5.5 Any profile: do the bio and names match begiant.ca/author/{name}?
- 5.6 A co-written story (for example by Stephen Maher and Tim Harper): its card on the profile says "With {the other writer}".

## 5b. Shared bylines (fix after QA)
- 5.7 Open "Eight ways Canada can turbocharge growth" (Stephen Maher and Tim Harper). Tap the byline. A sheet lists both writers.
- 5.8 Tap Follow on one writer in the sheet. It turns to Following in place; no toast covers the sheet.
- 5.9 Tap a writer's name in the sheet. Their profile opens.
- 5.10 At the end of the same story, under Follow similar topics, each writer has their own row.

## 6. Nothing else changed
- 6.1 Home, For You, Discover, Video and Saved look and work as before.
- 6.2 Story modules (galleries, parallax, video) still work in the module stories.
- 6.3 The swipe-back on a story still works only from the left edge.

## 7. The board on the phone (tap Board, then pinch to zoom)
- 7.1 The header says Round 11.
- 7.2 Section 10, Author profile: four phones (Profile, Stories by Lisa, Following, No stories yet).
- 7.3 Section 11, Loading: the launch screen, the slow cold start with a red line under the wordmark, Home loading with the shimmer, slow connection, article loading, loading more.
- 7.4 Section 12, Errors and offline: offline banner, Retry toast, offline screen, couldn't load, story not found, story not downloaded, video can't play.
- 7.5 Section 13, Account errors: sign in, wrong password, invalid fields, email already used, link expired, the age-gate phone (marked not recommended), Apple cancelled, offline.
- 7.6 Is any copy on the board wrong, unclear or off-voice? Say which phone.
