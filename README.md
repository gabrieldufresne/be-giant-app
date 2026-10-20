# Be Giant App — prototype

High-fidelity, clickable prototype of the Be Giant news app: review board plus a full-screen phone app with onboarding, Home, For You, Explore, Watch, article, saved, account and settings flows, including all animations (Globe welcome, transitions, feed-end states).

Static HTML/JS. No build step, no dependencies to install. React 18 loads from unpkg at runtime, so an internet connection is needed.

## Run it locally
```bash
cd be-giant-app
npm run dev          # or: npx serve .   or: python3 -m http.server 3000
```
Open http://localhost:3000 — the board. Add `#app` (or open `/app.html`) for the full-screen app.

Opening the file by double-clicking (file://) will not work; it has to be served.

## Test on your phone
**Same Wi-Fi (fastest):** `npm run dev` prints an "On Your Network" address (e.g. `http://192.168.1.20:3000`). Open it on the phone. Phones open straight into the app.

**Anywhere (shareable link):** publish with GitHub Pages (below), then open `https://<org>.github.io/be-giant-app/app.html`. In Safari, Share → Add to Home Screen gives a full-screen icon using the Be Giant app icon.

## Put it on GitHub
```bash
cd be-giant-app
git init && git add -A && git commit -m "Be Giant app prototype, round 7"
gh repo create be-giant-app --private --source . --push     # or create on github.com and push
```
Then in the repo: Settings → Pages → Source: Deploy from branch → `main` / root. The `.nojekyll` file is required (it stops GitHub from hiding the `_ds/` folder); keep it.

Note: GitHub Pages on a private repo needs a paid GitHub plan, and the published site is public. For a private shareable link, connect the repo to Vercel or Netlify (static site, no build command, output directory `.`) and turn on password protection.

## Continue in Claude Code
```bash
cd be-giant-app
claude
```
`CLAUDE.md` gives Claude Code the file map, the component format and the house rules. A good first prompt: "Read CLAUDE.md and docs/Be Giant App - PRD v2.md, then run the dev server."

## Files
| Path | What it is |
| --- | --- |
| `BG App.dc.html` | Review board + shareable app (`#app`) |
| `BeGiantAppPhone.dc.html` | The app: every screen, state and animation |
| `bg-app-data.js` | Stories, imagery, video, onboarding content, presets |
| `support.js` | Runtime that renders `.dc.html` files. Do not edit |
| `ios-frame.js` | iPhone bezel used on the board |
| `_ds/` | Be Giant design system: tokens, fonts, components |
| `assets/` | Icons (Phosphor light/fill), imagery, illustrations, app icon |
| `uploads/` | Short-form videos used in Watch |
| `docs/` | PRD v2 (source of truth), strategic foundation, original wireflow PRD, decision roadmap |
| `index.html`, `app.html` | Short links to the board and the app |

## For developers
These files are a design reference for the native build, not production code. Rebuild the screens in the app's own stack (SwiftUI / React Native) using the Be Giant tokens in `_ds/tokens/`. The PRD's feature inventory and decisions log describe intended behaviour; the prototype shows look, motion and flow.

Fonts (Gibson, Serrif Condensed) are licensed commercial faces. Keep the repo private or confirm the licence before publishing publicly.

## Upstream sources
- Design system and site: `field-office/client-giant` (branch `main`, `frontend/app`)
- Icons: `phosphor-icons/core` (`assets/light`, `assets/fill`)
