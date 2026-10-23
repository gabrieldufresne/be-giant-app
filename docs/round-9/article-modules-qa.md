# Article modules: QA list

Test on an iPhone at https://gabrieldufresne.github.io/be-giant-app/. Go through onboarding, or tap Skip to Home under the phone. The module stories are the first five under **Latest** and the first five under **Popular** on Home.

For each problem, note the story, the module, what you did and what happened. A screenshot helps.

## Story by story

**Latest**

1. **The Canadian scientist behind Ozempic** (Drucker)
   - [ ] Parallax, both blocks. The photo fills the screen first. The text rises over it with no dark box behind it, stays readable, and leaves through the top before the photo scrolls away.
   - [ ] Newsletter box: tap Subscribe. The card changes to "You're subscribed" and a toast confirms.
   - [ ] Open any other story. Its newsletter box is gone. Settings › Account shows the newsletter as subscribed.
   - [ ] Image pair: the two photos stack, each in its own shape, with the shared caption below.
   - [ ] Full-width images run edge to edge, and their captions stay on the text margin.
   - [ ] Wide video: the 16:9 poster has a play button, and the title sits below it. Tap: the full-screen player opens and YouTube plays. Close returns you to the same place in the story.
   - [ ] Short dividers break the story into parts.
2. **The polar bear capital… megaproject ambitions** (Churchill)
   - [ ] Parallax, three blocks. One has no tint over the photo. Is that quote still readable?
   - [ ] Short: tall poster. Tap plays it full screen.
3. **Dr. Shaf Keshavjee's dream** (lungs)
   - [ ] Parallax with a photo inside the text block (the 1983 transplant team).
   - [ ] Aa, at the two largest sizes: the parallax turns still, showing the photo and then the text with a rule beside it.
4. **…a portable 'hospital in a Pelican case'**
   - [ ] Annotated image: tap a number on the photo. It turns black and the list scrolls to that entry.
   - [ ] Tap an entry in the list: its number highlights on the photo.
   - [ ] Tap the photo itself: the photo viewer opens.
   - [ ] Related stories rows open their stories.
5. **How to protect a little industry…** (Churchill's little industries)
   - [ ] Full-width gallery: swipe and use the arrow buttons. "2 of 5" updates, and the caption changes with each photo.
   - [ ] Swiping the gallery does not trigger the back gesture.
   - [ ] Related read opens the Churchill megaproject story.

**Popular**

6. **This simple idea is booting an invasive species…** (Hamilton fishway)
   - [ ] Gallery: the frame never jumps between photos.
   - [ ] Short plays.
   - [ ] Related read and related stories rows open their stories.
7. **The parking lot that's keeping the lights on**
   - [ ] Callout "Take our survey": the box, title and button read clearly. "Have your say" shows a toast for the in-app browser.
   - [ ] Gallery and Short.
8. **Inside 7 of Canada's biggest challenges** (RBC summit)
   - [ ] Seven numbered subheads in the serif, not bold.
   - [ ] Underlined links:
     - [ ] "Greenley noted…" (near the end) opens the MDA story inside the app.
     - [ ] An outside link shows a toast for the in-app browser.
     - [ ] "AI" shows a toast for the topic.
   - [ ] Three related reads. The stories they show don't repeat in More like this at the end.
9. **How tapping into the Earth's layers…** (geothermal)
   - [ ] Small photo (the portrait), full-width photo, three short dividers, related stories.
   - [ ] The "solar" link in paragraph 4 opens the parking-lot story.
10. **Canada's long history of taking on the impossible** (Historica)
   - [ ] Wide video (Heritage Minute).
   - [ ] Bulleted list with square bullets.

## Across all stories

- [ ] **Photo viewer.** It opens from any photo: inline, pair, gallery or annotated.
  - [ ] Swipe between all the story's photos, and "3 of 8" updates.
  - [ ] Tap hides and shows the caption.
  - [ ] Double-tap zooms.
  - [ ] Swipe down closes it, and so does the X.
  - [ ] The clock turns white while it's open.
- [ ] **Nothing plays on its own** inside a story.
- [ ] **Aa text size.** Step through all five sizes. Body, subheads, list, related-row titles and parallax text all grow. At the two largest sizes, parallax goes still.
- [ ] **Night page** (the contrast button). Check that these all stay visible:
  - [ ] rules and dividers
  - [ ] captions
  - [ ] related rows
  - [ ] the callout border
  - [ ] the annotated list numbers
  - [ ] the gallery arrows
- [ ] **Status strip.** Scroll into any story: a frosted strip appears behind the clock and the progress line. This is new everywhere, not just in module stories.
- [ ] **Back swipe** from the left edge still closes a story.
- [ ] **Reduce Motion.** Turn it on in iPhone Settings › Accessibility › Motion, then reopen Drucker. The parallax should be still.
- [ ] **Guest newsletter.** Restart, skip sign-in so you're a guest, and open Drucker. The newsletter box shows an email field, and Subscribe says to check your email.
- [ ] **Large tap targets.** Arrows, play buttons, related rows and annotated numbers should all be easy to hit with a thumb.

## Board (desktop)

- [ ] Nothing animates and no video plays. The board's Autoplay setting turns motion back on.
- [ ] Section 03b: all 20 phones open on their module.
