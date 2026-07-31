---
title: Changelog
description: Notable changes to the Infuse theme.
path: /docs/changelog
---

# Changelog

Notable changes to the Infuse theme, newest first.

## Unreleased — 2026-07-31

- Groups have a **Display** setting. Set it to Overlay and the group lifts out of the layout and sits on top of the block behind it, with nine positions to choose from and an edge offset. Its blocks still arrange by direction and gap.
- **Badges are rebuilt.** One Badge block is now one badge, so a product card can carry as many as you like. Product cards ship with the image and a Badges group together, which means badge positions are measured against the image rather than the whole card. See [Product badges](/docs/guides/product-badges).
- Badges are styled from settings instead of three fixed looks: **Fill** (accent, ink, outline, soft, neutral), **Corner radius**, **Border width**, **Tilt**, **Size**, **Uppercase** and an optional **Icon**. Every fill is built from your colour scheme, so badges restyle with the rest of the store.
- Badges have a **Priority** from 1 to 5. It sets the order they stack in, and turning on **Show only the highest-priority badge** on their group shows just the winner.
- Badge text takes a dynamic source, so each product can supply its own wording from a metafield. A badge with no text does not render, so no second rule is needed to hide it.
- Badges show on **Always**, on sale, a tag, sold out or in stock. Always is the new default, which means a badge also works as a plain pill outside a product card.
- Any group, and any badge, can carry its own **colour scheme**. That is how you give a badge a colour the theme does not ship: add a scheme under Theme settings → Colours and select it.
- Tag matching ignores capitals and matches whole tags, so a badge triggered by `new` does not appear on products tagged `renewal`.
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
