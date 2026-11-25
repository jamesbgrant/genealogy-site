# 2026-11-25 — Sources list on person pages

- Added optional `sources: [{label, url}]` to the person data model; `[slug].astro` renders it as a "Sources" section, hidden when empty. Styles in `theme.css` (`.sources-list`).
- Moved the three NLI register links out of `notes` for #223 Maria, #224 Christopher and #226 Thomas into `sources`. Notes text otherwise unchanged.
- #31 Patrick, #185 Catherine, #34 Thomas: their notes cite civil registers in text but have no URLs, so nothing moved.
- No people added or changed otherwise. See `docs/patterns/person-sources.md`.
- Next: James will send links in batches as "Name (year): label, URL".
