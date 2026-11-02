# Viktoriia Seliverstova — portfolio

Personal site of a Senior Product Designer. Built with [Astro](https://astro.build): static pages, plain CSS on the tokens in `src/styles/tokens.css`, small scripts only for the interactive parts.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321/portfolio/  (BASE_PATH=/ npm run dev for the root)
npm run build    # static site in dist/
```

## Where things are

```
src/data/          all copy and numbers: site.ts (contacts, CV link), home.ts, work.ts, timeline.ts
src/pages/         index.astro (Home), work/index.astro (Work), about.astro, work/[slug].astro (case pages)
src/cases/         one file per case study; `layout` picks open / nda / graphic (types.ts has the schema)
src/layouts/       Base, CaseOpen, CaseNda, CaseGraphic
src/components/    atoms/, molecules/, organisms/ — see DESIGN-SYSTEM.md
src/styles/        tokens.css (final primitives), semantic.css, base.css, layout.css, atoms.css
scripts/           audit.cjs, states.cjs, shots.cjs, diff.py — accessibility, interaction and visual checks
public/assets/     images (covers in public/assets/work/)
design/            handoff: HANDOFF.md (spec), CONTENT.md (all copy), reference/*.dc.html (design files)
```

To change text, edit the files in `src/data/`. Rules for editing are in `CLAUDE.md`.

### Case studies

Adding a case = adding a file to `src/cases/` (copy an existing one). Its page appears at `/work/<slug>`.
To link it from the Work list, add the slug to `LIVE_CASES` in `src/data/work.ts`.

Text in `[brackets]` is a placeholder still to be written. The built site hides it (and any block that is still all placeholders);
`npm run dev` shows it as a marked draft, so you can see what is missing. A case with `draft: true` is built only in dev
(`_graphic-template.ts` is the graphic template).

## Design system

Atomic tokens → atoms → molecules → organisms. Reference: `DESIGN-SYSTEM.md` and the live page `/system`.

## Deploy

Pushing to `main` publishes the site to GitHub Pages (`.github/workflows/deploy.yml`).
One-time setup: repository **Settings → Pages → Source: GitHub Actions**.

### Custom domain (seliver.design)

1. At the domain registrar add DNS records for GitHub Pages: four `A` records for `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153, and `CNAME` `www` → `viktoriiaseliver.github.io`.
2. Add a file `public/CNAME` containing `seliver.design`.
3. In `.github/workflows/deploy.yml` set `SITE_URL: https://seliver.design` and `BASE_PATH: /`.
4. Settings → Pages → Custom domain: `seliver.design`, then tick **Enforce HTTPS** once the certificate is issued.

`robots.txt` and the sitemap are generated with the right URLs; robots.txt only takes effect at the domain root, i.e. after step 3.

## Launch

**v1 scope:** Home, Works (`/works`), About, 404, Construction CRM (`/work/construction-crm`), Gamut (`/products/gamut`), CV (`/cv`).
Multi-asset trading (NDA) is built but set to `draft: true` until it is part of the launch.

**Before going live (owner):**
- CV PDF → `public/`, path in `CV_URL` (`src/data/site.ts`). Until then every "Download CV" button is hidden and `/cv` opens the contact block.
- Second flagship case (OOKA, PokerMatch or AI meeting assistant) once the facts are in: copy `src/cases/construction-crm.ts`, fill it, add the slug to `LIVE_CASES`.
- Old Readymag case links for cards without a new page: `OLD_CASES` in `src/data/work.ts` (fix the AnOther link, duplicate Results and borrowed texts there first).
- Images: drop files into `public/assets/…` and pass `src` to the slots; run `node scripts/images.mjs` to make AVIF/WebP.
- Social previews: `node scripts/og.cjs` regenerates `public/og/*.png` after headline changes.

**Checks (all passing):** `scripts/audit.cjs`, `scripts/states.cjs`, Lighthouse ≥ 95 on every page (performance 95–100, accessibility, best practices and SEO 100).

## Status

Done: Home, Works, About, Gamut, 404, case layouts (open: Construction CRM; NDA: Multi-asset trading, draft; graphic: template only), design system, launch prep.
Next (owner's site plan): more flagships and B/C cases, /ai, Togo and Timer pages, graphic pages, illustrations.
Still needed from the owner: portrait, app screenshots, graphic project images, CV PDF (`CV_URL` in `src/data/site.ts`).
