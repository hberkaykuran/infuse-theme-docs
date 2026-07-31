---
title: Changelog
description: Notable changes to the Infuse theme.
path: /docs/changelog
---

# Changelog

Notable changes to the Infuse theme, newest first.

## Unreleased — 2026-07-31

- Groups have a **Display** setting. Set it to Overlay and the group lifts out of the layout and sits on top of the block behind it, with nine positions to choose from and an edge offset. Its blocks still arrange by direction and gap.
- **Product cards can show more than one badge.** Put your Badge blocks inside an overlay group and they stack instead of landing on top of each other. See [Product badges](/docs/guides/product-badges).
- Badges gained a **Size** setting (small, medium, large) and an **Only if no other badge is showing** option, which lets one badge act as the fallback when a higher-priority one is not showing.
- The tags that promote a sale badge to Bestseller or New are now settings instead of fixed English words, so you can tag products in your own language. Tag matching ignores capitals everywhere.
- Adding several different products to the cart in quick succession no longer drops any of them. This could show up when adding more than one tagged product from a UGC gallery.
- A UGC gallery item tagged with a single product now shows that product full width in the viewer instead of leaving room for a second card.

## Unreleased — 2026-07-30

- FAQ sections now use an Accordion block, and each question is a Question block you add inside it. Add an Accordion first, then add Questions inside it. Row spacing moved from the FAQ section onto the accordion itself.
- Groups can carry a background image, turning any group into a promo card. Use it anywhere blocks are accepted, including inside a mega menu panel.
- Hotspot markers placed near the edge of an image keep their full tap target instead of being clipped.
- Block settings now show only when they apply, so the editor has fewer irrelevant fields to scroll past.
- The second style is now **Utility**, an engineered, monospace, zero-radius look, replacing the 1.0.0-era Heirloom style. Stores still set to the old style should switch their Design preset to Utility or Infuse. See [Styles](/docs/customization/presets).

## 1.0.0

*Initial release*

- First public release of the Infuse theme.
- Two styles: Infuse and Heirloom, switched from a single setting.
- Full library of home-page, product, and content sections built from composable blocks.
- Product pages with a media gallery, sticky buy bar, and in-page anchors.
- Cart drawer with an optional free-shipping progress bar and product suggestions.
- Colour schemes with a four-role accent tuned for AA contrast.
- Full translation support through Shopify Translate & Adapt.
- Performance-first build: small deferred scripts and native browser features.
