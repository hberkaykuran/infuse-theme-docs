---
title: Collection colours
description: Give each collection its own accent colour and let product pages, cards and search results pick it up automatically.
path: /docs/guides/collection-colors
---

# Collection colours

Infuse can tint parts of the storefront with a colour that belongs to a collection rather than to the theme. A tea shop can give Herbal a green and Coffee a warm brown; a clothing shop can give each season its own shade. Anything a product sits in carries the colour with it, so a product page, a card in a grid, a quick view and a search result all agree without you setting the colour in five places.

This is optional. Leave it alone and everything uses your colour scheme's accent, which looks deliberate on its own.

## Where the colour shows up

- The **collection page** header, as the rule under the title.
- The **product page** picture stage, as a light wash behind the image.
- **Featured product** and **Shoppable image** hotspots, the same wash.
- **Quick view** and the **search suggestions** panel, so a card opened from a grid keeps the colour it had in the grid.

It is always a tint, never a background fill, so text and buttons keep their normal contrast.

On a product page the colour comes from the first collection the product belongs to that has one set. A product in both Herbal and Sale takes Herbal's colour if Sale has none.

## Setting it up

The colour lives on the collection, not in theme settings, because it has to differ from one collection to the next. Shopify stores that kind of per-collection information in a metafield, which you create once.

1. In Shopify admin, go to **Settings → Custom data → Collections**.
2. **Add definition.**
3. Name it whatever you like — *Accent colour* reads well.
4. Set the namespace and key to **`custom.accent_color`**. This exact value is what the theme looks for, so it has to match.
5. Choose **Color** as the type, and save.

Every collection now has a colour swatch on its admin page:

1. **Products → Collections →** the collection you want.
2. Scroll to the metafield you just created and pick a colour.
3. Save, then reload the storefront.

Collections you leave blank simply use your scheme's accent, so you can colour two collections and ignore the rest.

## Choosing colours that hold up

The colour is used at low strength behind pictures and at full strength for a thin rule, so mid-tones work best. Very pale colours vanish into the page; near-black ones read as a mistake rather than a choice. If your store runs a dark colour scheme, check the result there too — a colour chosen against white can disappear against a dark surface.

You do not need to worry about text contrast: the theme keeps its own ink and button colours and never draws text on the raw accent.

## Turning the wash off

The product page picture stage has its own switch. Open **Product** in the theme editor and turn off **Tint the stage** to keep the stage neutral while collection colours keep working everywhere else.

## Upgrading from an earlier version

Before 2026-08-16 the theme carried a fixed set of six colours and collections chose one by name through a `custom.family_key` metafield. That palette lived in the theme, so the colours were not yours to change. It has been removed. If your store used it, follow the setup above and enter the hex codes you want; the old `custom.family_key` metafield is no longer read and can be deleted.
