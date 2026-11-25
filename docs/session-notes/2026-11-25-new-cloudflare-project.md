# 2026-11-25 — Site moved to James's Cloudflare project

- Cloudflare stopped building after the repo moved from brynestein to jamesbgrant: the last build was on f757165 (4 Aug), so byrne-genealogy.pages.dev was stuck on the August build.
- James created his own Pages project from jamesbgrant/genealogy-site (master, Astro, `npm run build`, `dist`). It is live at https://genealogy-site.pages.dev.
- Updated the site URL in astro.config.mjs, Layout.astro (canonical/OG), robots.txt and CLAUDE.md. Older session notes still mention the old URL, because that was correct when they were written.
- Home "People" tile count now comes from people.json: tiles.json writes `{people} profiles` and index.astro swaps in `people.length`. Places and Stories counts are still typed by hand.
