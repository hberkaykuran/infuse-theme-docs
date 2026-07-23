# Infuse Theme Docs Site

Landing page + merchant documentation site for the **Infuse** Shopify theme (built in `C:\Projects\Work\shopify-theme`, sold on the Theme Store). Replaces the old hand-rolled `site/` generator that lived inside the theme repo.

## Stack
- **Astro** (static output, zero client JS by default) + **Pagefind** for docs search.
- Deployed to GitHub Pages repo `infuse-theme-docs` → `https://hberkaykuran.github.io/infuse-theme-docs/`.
- Design source of truth: Claude Design project (landing + docs template), Infuse brand = theme's Playful preset (Fraunces display, rosehip-coral accent, radius 10/16). Token reference: `../shopify-theme/design/playful-tokens.css`.

## Commands
- `npm run dev` — local dev server.
- `npm run build` — static build to `dist/` (runs Pagefind indexing post-build).

## Gotchas / rules
- **Sections/blocks reference pages are generated** from the theme repo's `../shopify-theme/docs/capability-catalog.json` — never hand-edit them; re-run the sync script after theme schema changes.
- Site URLs are referenced in the theme's `config/settings_schema.json` (docs + support links) — update those when routes change.
- Base path on GitHub Pages is `/infuse-theme-docs/` — always use Astro's `base`-aware links, never absolute `/` paths.
- Merchant-facing copy rules: no AI-tell patterns (no em-dash clause constructions, no "it's not X, it's Y").

## Knowledge graph
Run `/graphify .` after the first Astro code lands (skipped at onboard — repo was empty).
