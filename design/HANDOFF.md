# Handoff: Viktoriia Seliverstova — portfolio website

## Overview
A personal portfolio site for a Senior Product Designer targeting remote Senior/Lead roles in Europe. Six pages, two case templates, two shared sections. The site is designed for a 15-second read by recruiters: facts shown as visuals (bars, dots, blocks), little text, real covers and screens.

Pages: **Home · Work · About · Case (open) · Case (NDA template) · Case (graphic template) · Gamut (own app)**.
Shared parts: **Nav · Contact · Timeline**.

## About the design files
The files in `design/` are **design references built in HTML** (a lightweight in-house component format, `.dc.html`, with inline styles and a small logic class per page). They show the intended look and behaviour. **Do not ship them.** Recreate the site in a real stack.

Recommended stack if none exists: **Astro** (static, fast, MDX for case studies) or **Next.js (App Router, static export)**, plain CSS with the variables in `tokens.css`, deployed to **Vercel / Netlify / Cloudflare Pages**. React islands only for the interactive parts (filters, before/after, timeline hover, portrait flip, menu). No UI library needed.

Opening a `.dc.html` file: it needs `support.js` and the `_ds/` design-system folder next to it (both included). Open in a browser; the logic class at the bottom of each file is plain JS and is the best reference for behaviour and data.

## Fidelity
**High-fidelity.** Colours, type, spacing, radii, motion and copy are final. Recreate pixel-accurately. All values are in `tokens.css`; nothing outside that file should be used. Rules page with every token, state and component: `design/Portfolio System.dc.html`.

## Content
- **All copy is final** and must be kept word for word — see `CONTENT.md` (extracted from the files). Text in `[brackets]` is a placeholder still to be written; hide the element if it is still a placeholder at launch.
- Never invent numbers, roles, years or labels. Companies under NDA are named generically ("AI meeting assistant", "government client").
- App status is "In App Store review" until Apple approves. Don't write "in the App Store" before that.
- Contacts: viktoriia.seliver@gmail.com · t.me/viktoriia_seliver · linkedin.com/in/viktoriiaseliver. "Download CV" needs the PDF (not included).

## Information architecture
```
/                 Home
/work             Work (all 44: 25 product · 5 own · 14 graphic). ?section=product|mine|graphic
/about            About
/work/<slug>      Case pages — 3 layouts: open, nda, graphic
/apps/gamut       Gamut app story
```
Case pages should be content files (MDX/JSON) rendered by one of three layouts. The design files keep each case's content in a `CASE` object at the top of the logic class — use that as the content schema.

## Global layout
- Page max-width 1440, outer padding `--page-x` (16 px at 320). Fixed nav, content starts at 84 px.
- Vertical rhythm: sections `--section-top`, blocks inside a section `--block-top`, siblings 12 px.
- Surfaces: ink or cobalt panels r32 with `--panel-pad`; grey-238 cards r28 with 24 px padding; inner image slots r20.
- Breakpoints: ≥1100 desktop · 640–1099 tablet · <640 phone. Grids go 4 → 2 → 1, 3 → 1, 2 → 1. **No lone cell** in a grid row.
- Headline pattern: Instrument Sans 500 first half + Instrument Serif italic second half (often in `--mist` on dark).
- Labels: Instrument Sans 500, 12 px, uppercase, +.06em. Numbers: Arimo 700. **No mono font.**
- Smallest text anywhere: 12 px. Tap targets ≥ 44 px.

## Shared components

### Nav (all pages)
- Fixed, 10 px from top, max 1376, light glass pill (r120, padding 6 6 6 20).
- Left: "Viktoriia Seliverstova" (16/500, ellipsis). Right: 3 links (Proof → `/#work`, All work, About; 14 px, padding 12×14, r120; current = `--hover` fill) + ink CTA pill "Contact" (case NDA: "Book a 20-min call").
- Case pages: 3 px cobalt progress line along the bottom of the pill. Open case adds a Short · 1 min / Full · 5 min segmented switch.
- **Hide on scroll**: scrolling down past 240 px slides the nav up (`translateY(-100% - 16px)`, .25s ease); any scroll up (>6 px) or top <240 px brings it back. Never hides while the menu is open.
- **< 640 px**: name + ink "Menu" button. Menu opens a sheet below the pill (sheet glass, r28, padding 8): links 20/500 in r20 rows, CTA pill at the bottom. Button reads "Close" while open. Closes on link tap, Close, Esc.

### Contact (all pages — `Contact.dc.html`)
Cobalt panel r32, min-height 60svh (Home/About 80svh). Top: green pulsing dot + status ("Available now · Remote across Europe"). Optional label (12 px caps). Headline two halves (display size; long headlines drop to h3 size, max 28ch). Optional terms chips. Email as a big underlined button — **click copies to clipboard**, chip shows COPY → COPIED for 1.5 s. Buttons: primary white pill (default "Ask for a 20-minute walkthrough" → mailto with subject), Telegram ↗, LinkedIn ↗, optional "About me →", Download CV. "© 2026 Viktoriia Seliverstova" right. Optional illustration image slot in a second column (About).
Props per page: Home (status with location, showAbout), Work (headline changes per section), About (label "05 · WHAT I'M LOOKING FOR", long headline, terms chips, illustration "about-wave", primary "Email"), NDA ("The real screens, / on a call."), Graphic ("Need a visual / identity?", "Let's talk"), Gamut (showAbout).

### Timeline (Home · Experience, About · Path — `Timeline.dc.html`)
One data source for both pages. White inner card on grey; scrolls sideways under 900 px (min-width 900). Axis 2017 → current year+1. Each row: role (16/500) + company (14 muted) in a 280 px column, a bar positioned by start/end year (r12, 40 px high; cobalt = lead role, ink = other, orange outline = to confirm). Bar label: "2024", "’23–’24" or "2019–2023" depending on width. Hover/focus/tap a row → grey row highlight + the detail strip below shows full dates, role · company, one-line summary. Below the rows: "Building now" + G / T / Ti app tiles "GAMUT · TOGO · TIMER / IN APP STORE REVIEW". Legend: LEAD ROLE · SENIOR / PRODUCT ROLE · TO CONFIRM.
Data (confirmed by the owner, Oct 2026):
| Dates | Role | Company | Lead |
|---|---|---|---|
| 2025–2026 | Head Product Designer | AI meeting-assistant platform | ● |
| 2023–2025 | Senior UX/UI Designer | One Discovery | |
| Nov 2023 – Sep 2024 | Product designer | Multi-asset trading platform | |
| 2024 | UX/UI Design Team Lead | Develit AB | ● |
| 2023 | UX/UI Design Team Lead | PokerMatch | ● |
| 2022–2023 | Product designer | OOKA Technologies | |
| 2021–2022 | Designer | Freelance | |
| Nov 2019 – 2023 | UX/UI and Graphic Designer | Techstack | |
| Jun 2017 – Nov 2019 | UI and Graphic Designer | Design studio | |
One-line summaries are in `CONTENT.md` → Shared · Timeline.

## Pages

### Home (`Home.dc.html`)
1. **Hero** — ink panel, full viewport: cobalt pill "Senior Product Designer", status dot "Available now · Remote across Europe" (tweak: or "… or hybrid on the French Riviera"); headline (3 variants, owner currently picks **C — "I turn complicated workflows into software / people pick up with little or no training."**); 4 "people" tiles (In gloves / On the road / Weak internet at sea / Mid-lockdown). Below: lead sentence + "See case studies" (cobalt) + "Download CV" (outline).
2. **Quick facts** — 4 grey cards: 9 years (9-segment strip, last 3 cobalt "leading since 2023"), 4 designers led (dot row), 7 industries (chips), Languages (bars EN C2 · FR B1 · UK native).
3. **Proof** — "Proof, not adjectives." + "All 44 works →". 4 large cards (min-height 520): Traffic 15 → 3 min (before/after bars over cover 19.jpg), Delivery 4 weeks (week blocks, cobalt), IWMS −40% (10-block strip, cover 01.jpg), OOKA 87% (20×5 dot grid). Logo strip "Products I designed are used at · JW Marriott Hotels · Metro Cash & Carry".
4. **Hand me / Engineers** — cobalt "A whole product area." with a 5-layer stack + vertical "1 DESIGNER"; ink "My designs get built." with a 4-step pipeline and tool chips.
5. **My apps** — "Designed it. Built it." 3 phone frames (image slots) Gamut · Togo · Timer, status "IN APP STORE REVIEW".
6. **Experience** — "Nine years on one line." Timeline (shared). Education line.
7. **Contact** (shared).

### Work (`Work.dc.html`)
- **Console** (cobalt panel): giant "Work", live count "N / 44 PROJECTS SHOWN", lead sentence, 4 section tabs with counts (All 44 · Product work 25 · My products 5 · Graphic & illustration 14). Tabs reset filters and scroll to top; `?section=` deep link.
- **Filter bar — desktop/tablet** (only when product work is shown): one sticky light-glass row, 56 px, r120, top 72 px (10 px when the nav is hidden). Contents: **Industry dropdown** (pill showing "Industry · All" or the chosen one in ink; opens a sheet-glass list r20, 340 px: "All industries" + 7 rows with radio dot, label, live count; zero-count rows dimmed .4 and disabled; picking closes; outside click / Esc close) · **Platform segmented** (All · Web · Mobile · iOS; iOS clears industry) · spacer · "**N** projects" (singular for 1) · "Clear" (only when something is selected) · **View segmented** (Rows · Index · Cards; Index desktop only).
- **Filters — phone**: no bar on top. Fixed glass pill bottom-centre (12 px + safe-area): ink "Filter" / "Filter · n" button with a 3-line icon + count. Opens a **bottom sheet** (scrim `--scrim`, sheet glass, top radius 28, grabber, max 86svh): title "Filter" + "Clear all"; VIEW segmented; PLATFORM segmented; INDUSTRY list (white r20 container, same rows as desktop). Sticky footer button "Show N projects". Body scroll locked while open. Pill hidden while the menu or sheet is open.
- **Counts** always include every other active filter. Empty result: "Nothing here yet." + "Clear filters".
- **Product groups** by industry (7): header column (NN / total, count badge, h4 label, description — description hidden on phone) + list. **Rows** (desktop): title, meta, result in cobalt Arimo, round arrow; hover → ink row with floating cover preview following the cursor (fine pointers only). **Rows (phone)**: grey r20 list, 56 px thumb, title 18, result, short meta, chevron; **max 3 per industry, then "Show N more ↓"**. **Cards**: 3/2/1 columns, cover if exists, result, title, description, meta, tags. **Index** (desktop): list left, sticky ink preview panel right.
- **My products**: Gamut / Togo / Timer (phone frame + slogan + description + 3 decisions + what I did), Kvit and AI-practice blocks; Gamut links to `/apps/gamut`.
- **Graphic & illustration**: 4 type chips (Brand 3 · Illustration 5 · Print 3 · Icons & motion 3) + 14 image tiles.
- Product data (25 rows: industry, title, result, description, meta, tags, cover) is in the logic class `PRODUCTS` and in `CONTENT.md`.

### About (`About.dc.html`)
Continuous page tied by a left **spine** (desktop): a line from "What I do" to Contact fills cobalt with scroll; stops grow and turn cobalt for the active section; each stop is a link.
1. **Hero** — ink panel: "Available for new roles" chip, "Hi, I'm Viktoriia.", intro paragraph, Download CV + Let's talk, languages as "Hello / Bonjour / Привіт" with levels. Right: **portrait flip** — photo slot, the illustrated self-portrait slot cross-fades over it on hover / tap (.5s), PHOTO / DRAWN chips. Bottom strip: 5 numbers (9 years · 25 products · 7 industries · 400+ components · 7 markets) with proportional marks; each links to its section; hover → cobalt.
2. **What I do** — one stage: 4 tabs (Complex products · Design systems · Code & AI · Brand & visual) drive one demo area + text + "SEE IT IN" case links. Demos: phone with tapping buttons; button cycling LIGHT·EN / DARK·DE / LIGHT·AR·RTL every 1.8 s; code lines growing into a screen; morphing icons. Footer: cobalt leadership line + 17 dots (you white centre, 4 periwinkle designers).
3. **How I work** — ink panel, 6 stages on one line (Discovery → Handoff & QA), each with its tools as chips; hover lights the line up to that stage; "AI does the volume. I own the decisions." + AI tools.
4. **Path** — Timeline (shared) + 7 markets line (west → east, hover a dot shows the product; labels hidden on phone except the active one) + Studied list.
5. **Beyond work** — peach sketchbook spread with centre fold, 4 tilted cards (Jury · Teaching · Free icons · Stitch) with image slots; hover straightens.
6. **Contact** (shared, About variant).

### Case — open (`Case - Construction CRM.dc.html`)
Hero (ink text card + cover with 2 glass result chips) · Quick look (4 cards: −8 min as 8 blocks, 3 → 1 workflow, 3 roles, my zone) · body with **sticky chapter rail** (desktop left column 220 px, glass; tablet/phone horizontal strip) + "Skip to result ↓" · Problem (Before/After tabs, auto-toggle every 2.6 s while in view until touched; diagram: 4 app nodes with dashed links and orange pulsing loss dots → nodes line up on one cobalt timeline) · Research (3 insight cards, Full only) · Decisions (number + title + 16:10 screen slot with numbered pins + note cards Why / Trade-off) · Path of one order (cobalt panel, 4 stops, Play/Pause, prev/next, auto-advance; last stop shows "−8 min per order" chip) · Explored, not shipped (greyed slot with orange strike, Full only) · Result (giant counter counts 0 → 8 on enter, 1.4 s ease-out; 8 minute blocks fill; extra numbers; "how measured" chip; peach "What I'd do differently") · Next case row · Contact.
Short/Full switch hides Research and Explored and renumbers chapters.

### Case — NDA template (`Template - Case NDA.dc.html`)
Hero with orange "UNDER NDA" chip and a **Ghost UI** panel (skeleton of the real structure with shimmer, light/dark toggle) · Scale sheet (4 number cards with dots) · The plate (cobalt panels "where the screenshot would be") · How, not what (4 artefact cards) · I can / I can't (two columns, green / orange dots) · Release log · Contact ("The real screens, on a call.").

### Case — graphic template (`Template - Case Graphic.dc.html`)
Tall hero image slot (peach) with kind + year chips · title + facts · pieces gallery (dense grid, 4/2/1 columns, spans) · palette strip (swatches with hairline + caption row) and type card "Aa" + format chips · Sketch → Vector → Colour → Print · next project card (peach) · Contact.

### Gamut (`Gamut.dc.html`)
App story: hero, why and for whom, interactive "Try it" mini-version of the app, decisions, what I cut, how I made it, craft, status and next, Contact.

## Interactions & behaviour (global)
- Motion: one curve `cubic-bezier(.2,.8,.2,1)`; .15s hover/colour/focus · .25s press/tabs/menu/nav-hide · .4s bars/sheet/cross-fade · .6s diagram morph only.
- May loop: hero demos, status dot, skeleton shimmer, before/after while in view. Never moves: body text, nav, buttons at rest, numbers after count-up.
- **prefers-reduced-motion**: all loops stop, counters jump to final, auto-play off, cross-fades instant.
- States (one look everywhere): hover darkens/lifts (cards translateY(-4px) + `--shadow-lift`), focus 2 px `--focus` ring offset 3, pressed scale(.97), selected = ink fill (chips) / white + shadow (segmented), disabled .4.
- Every hover has a tap equivalent (portrait, rows, timeline, tools, markets).
- Esc closes any sheet/dropdown/menu. Only one overlay at a time.

## State (per page)
- Nav: `menu`, `navHidden`, `w` (viewport width).
- Work: `section`, `ind`, `plat`, `gtype`, `view`, `hover`, `sel`, `dd` (dropdown), `sheet`, `openG` (expanded industries on phone), `canHover`.
- About: `ill` (portrait), `tab`, `dsStep`, `stage`, `mk`, `active` (spine), `spineH`.
- Case: `depth` (short|full), `after`, `baTouched`, `step`, `playing`, `counter`, `active` chapter, `progress`.
No data fetching; all content is static.

## Design tokens
See `tokens.css` (complete). Summary: 24 colours by role · 3 font families · 15 type sizes (12 px floor) · 9 letter-spacings · 7 radii (4/12/20/28/32/120/50%) · 4-point gaps · 4 durations · 3 glass recipes.

## Assets
- `design/assets/work/01.jpg, 05.jpg, 17.jpg, 19.jpg` — project covers (IWMS, Construction CRM, OOKA, Traffic).
- **To be supplied by the owner** (empty image slots in the design, each has an id and a caption saying what goes there): photo portrait, illustrated self-portrait, waving illustration with Stitch, Beyond-work images (jury badge, lecture sketch, icon set, Stitch), app screenshots (Gamut, Togo, Timer), case screens (decision screens, order-path screens, explored alternative), graphic project images (14), CV PDF.
- Fonts: Google Fonts — Instrument Sans (400/500), Instrument Serif (italic), Arimo (700).
- No logo: the brand mark is the name set in Instrument Sans.

## Files
```
design/
  Home.dc.html                     Home
  Work.dc.html                     All work + filters
  About.dc.html                    About
  Case - Construction CRM.dc.html  Open case (layout + CASE data)
  Template - Case NDA.dc.html      NDA case layout
  Template - Case Graphic.dc.html  Graphic case layout
  Gamut.dc.html                    App story
  Contact.dc.html                  Shared contact section
  Timeline.dc.html                 Shared timeline
  Portfolio System.dc.html         Rules: tokens, components inventory, states, motion, nav & filter rules, phone rules, 320 lab
  support.js, image-slot.js        Runtime for opening the references
  _ds/                             Design-system bundle the references load
  assets/work/                     Covers
tokens.css                         All tokens as CSS variables
CONTENT.md                         All copy, per page
CLAUDE.md                          Working rules for Claude Code
```

## Acceptance checklist
- [ ] Every page passes at 320 / 390 / 768 / 1100 / 1440: no horizontal scroll, nothing under 12 px, every tap target ≥ 44 px.
- [ ] Only values from `tokens.css`.
- [ ] Copy matches `CONTENT.md`; no `[placeholder]` visible.
- [ ] Nav hides on scroll down, menu works under 640, Esc closes overlays.
- [ ] Work filters: counts correct with combined filters, dropdown and sheet behave as above, "1 project" singular.
- [ ] Reduced motion respected.
- [ ] Lighthouse ≥ 95 (perf, a11y, SEO); images in AVIF/WebP with width/height; fonts preloaded, `font-display: swap`.
- [ ] Meta: title "Viktoriia Seliverstova — Senior Product Designer", description from the Home lead, OG image per page, `hreflang` not needed (English only), sitemap.xml, robots.txt.
