# 2026-11-25 — People cards: names, years, search

- Home "Show people" cards read `p.name`/`p.dates`/`p.note`, which people.json never had, so every card was a blank circle. Cards now show display name, life years and "née" maiden name, via `src/lib/people.js`.
- Years are pulled loosely from free-text dates: "About"/"or"/two years -> "c. YYYY"; `life-status: "Alive"` -> "b. YYYY, living"; nothing usable -> "Dates unknown".
- Added a name search box above the list (accents ignored, every word must match, auto-opens the list). Labels in `home.json` `sections.recent`.
- Cards now sort by surname then first name.
- `[slug].astro` still has its own `displayName`; left alone to avoid conflicting with PR #11. Can switch it to the shared helper later.
