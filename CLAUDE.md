# Portfolio — rules for Claude Code

Read design/HANDOFF.md first. References are in design/reference/*.dc.html (read the markup and the logic class); rebuild them, don't ship them.

- Use only the variables in tokens.css. If something seems to need a new value, map it to the nearest token and say so.
- Copy is final: take it from CONTENT.md word for word. Never invent numbers, roles, years, statuses or labels. Hide anything still in [brackets].
- No company names under NDA ("AI meeting assistant", "government client").
- App status is "In App Store review" until Apple approves.
- No mono font. Labels: Instrument Sans 500, 12 px, uppercase, +.06em. Numbers: Arimo 700. Nothing under 12 px.
- Glass only on floating things: nav, menu sheet, filter bar, filter pill, chips over photos.
- Under 640 px: nav = name + Menu sheet; Work filters = bottom pill + bottom sheet; one column; check every page at 320.
- No lone cell in a grid: 4 → 2×2 → 1, 3 → 1, 2 → 1.
- Grey text on white is rgb(70,74,84) or darker.
- Shared parts are components: Nav, Contact, Timeline. Timeline data lives in one place.
- Case studies are content files rendered by 3 layouts (open, nda, graphic). Adding a case = adding a content file.
- Respect prefers-reduced-motion everywhere.
- Build pages from the design system (DESIGN-SYSTEM.md): atoms, molecules, organisms in src/components/, classes in src/styles/atoms.css and layout.css.
- Before pushing UI changes run scripts/audit.cjs and scripts/states.cjs against `astro preview`; both must come back clean.
