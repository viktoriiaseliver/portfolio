# Design system

Atomic: **tokens → atoms → molecules → organisms → pages**. Live reference: `/system` (not linked, `noindex`).

## Tokens

| Layer | File | What |
|---|---|---|
| Primitives | `src/styles/tokens.css` | Final values from the design handoff: 13 colours, overlays, 3 fonts, 15 type sizes, 7 radii, gaps, layout, motion, glass, shadows. Do not add values. |
| Semantic | `src/styles/semantic.css` | Roles that point at primitives: surfaces (`--surface-dark`, `--surface-brand`…), text (`--text-secondary`, `--text-on-dark-secondary`…), control sizes (`--control-min` 44, `--control-md` 48, `--control-lg` 52, `--control-seg` 38). |

`src/styles/global.css` imports, in order: tokens → semantic → base (reset, focus, reduced motion) → layout (page frame, rhythm, grids) → atoms.

## Layout

- `.page` frame (max 1440, side padding, content starts below the nav), `.section` / `.block` vertical rhythm, `.stack`.
- Grids that never leave a lone cell: `.grid-4` (4 → 2 → 1), `.grid-3` (3 → 1), `.grid-2` (2 → 1; `.tablet-1` collapses on tablet too).
- Breakpoints: desktop ≥ 1100 · tablet 640–1099 · phone < 640. Checked at 320, 390, 639, 640, 768, 1099, 1100, 1440.

## Atoms — `src/components/atoms/` + `src/styles/atoms.css`

| Atom | Variants |
|---|---|
| Typography classes | `text-hero`, `display`, `h2`–`h5`, `lead`, `body`, `small`, `label`, `label-s`, `num`, `num-xl/l/s`, `serif`; colour roles `muted`, `mist`, `on-ink-muted`, `accent` |
| `Button` | `brand`, `ink`, `white` (`onBrand`), `outline`, `outline-light`, `text`; sizes `sm` 44 / `md` 48 / `lg` 52; `arrow` |
| `Chip` | `white`, `soft`, `dark` (`ring`), `ink`, `brand`, `outline-dark`, `glass`, `warn`; `size="s"` for label chips; `dot` |
| `Badge` | `brand`, `on-dark` |
| `Dot` | `live` (pulses), `green`, `orange`, `periwinkle`, `brand` |
| `Heading` | two-part headline: sans first half + serif italic second half, any size |
| `Segmented` | `hover`, `soft`, `ink` tracks; 38px pills with a 44px hit area |
| `Marks` | data bars / blocks: `total`, `on`, colours via `--on` / `--off` / `--off-o` |
| `Slot`, `Phone`, `Ph` | image placeholder, phone frame, draft placeholder text |

## Molecules — `src/components/molecules/`

`Panel` (tone × radius × padding), `SectionHead`, `Facts`, `Status`, `StatHead`, `FactCard`.

## Organisms — `src/components/organisms/`

`Nav` (hide on scroll, phone menu, reading progress, Short/Full), `Contact`, `Timeline` (one data source), `CaseHero`.
Page-specific organisms (Work filters, About stage, case diagram…) live in their page or layout file.

## Rules

- Build with the pieces above; reach for a new class only for page-specific layout.
- Text contrast ≥ 4.5:1 (3:1 for 24px+). Pairs in use are listed on `/system`; all pass.
- Tap targets ≥ 44px; nothing under 12px; no mono font.
- Every hover has a tap equivalent; Esc closes any overlay; focus moves into a sheet and back.
- `prefers-reduced-motion`: loops stop, auto-play off, counters jump to the end.

## Checks

```sh
npm run build && npx astro preview &
node scripts/audit.cjs      # overflow, text < 12px, contrast, tap targets — every page × 8 widths
node scripts/states.cjs     # menu, filter sheet, dropdown, views, focus, reduced motion, loops
node scripts/shots.cjs out/ # full-page screenshots; python3 scripts/diff.py before/ after/ to compare
```

### Illustration (atom) and the /ai page
- `atoms/Illustration.astro` is a frame for the owner's drawings. With an empty `src` it is hidden on the built site and shows a placeholder in `npm run dev`.
- All drawings are listed in one file: `src/data/illustrations.ts`. That covers the 7 industry scenes (shown in the Works group headers) and the agents diagram (on /ai). To put a drawing on the site, paste its path into `src`.
- `/ai` is built from `src/data/ai.ts`. While `published = false`, the page carries noindex, stays out of the sitemap and nothing links to it. Set it to `true` once the video is ready; the Works AI card then gets a "How I work with AI" button.
