# Viktoriia Seliverstova — portfolio

Personal site of a Senior Product Designer. Built with [Astro](https://astro.build): static pages, plain CSS on the tokens in `src/styles/tokens.css`, small scripts only for the interactive parts.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321/portfolio/
npm run build    # static site in dist/
```

## Where things are

```
src/data/          all copy and numbers: site.ts (contacts, CV link), home.ts, work.ts, timeline.ts
src/pages/         index.astro (Home), work.astro (Work)
src/components/    Nav, Contact, Timeline, Slot (image placeholder)
src/styles/        tokens.css (design tokens, final), global.css
public/assets/     images (covers in public/assets/work/)
design/            handoff: HANDOFF.md (spec), CONTENT.md (all copy), reference/*.dc.html (design files)
```

To change text, edit the files in `src/data/`. Rules for editing are in `CLAUDE.md`.

## Deploy

Pushing to `main` publishes the site to GitHub Pages (`.github/workflows/deploy.yml`).
One-time setup: repository **Settings → Pages → Source: GitHub Actions**.
The site lives under `/portfolio`; for a custom domain, change `site` and `base` in `astro.config.mjs`.

## Status

Phase 1 done: Home, Work, shared Nav / Contact / Timeline.
Next: About, case templates (open, NDA, graphic), Gamut page.
Still needed from the owner: portrait, app screenshots, graphic project images, CV PDF (`CV_URL` in `src/data/site.ts`).
