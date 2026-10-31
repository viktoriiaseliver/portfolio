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
src/pages/         index.astro (Home), work/index.astro (Work), about.astro, work/[slug].astro (case pages)
src/cases/         one file per case study; `layout` picks open / nda / graphic (types.ts has the schema)
src/layouts/       Base, CaseOpen, CaseNda, CaseGraphic
src/components/    Nav, Contact, Timeline, Slot (image placeholder), Ph (placeholder text)
src/styles/        tokens.css (design tokens, final), global.css
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

## Deploy

Pushing to `main` publishes the site to GitHub Pages (`.github/workflows/deploy.yml`).
One-time setup: repository **Settings → Pages → Source: GitHub Actions**.
The site lives under `/portfolio`; for a custom domain, change `site` and `base` in `astro.config.mjs`.

## Status

Done: Home, Work, About, case layouts (open: Construction CRM; NDA: Multi-asset trading; graphic: template only).
Next: Gamut page.
Still needed from the owner: portrait, app screenshots, graphic project images, CV PDF (`CV_URL` in `src/data/site.ts`).
