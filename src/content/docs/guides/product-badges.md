---
title: Product badges
description: Show Sale, Bestseller and New badges on product cards, and stack more than one.
path: /docs/guides/product-badges
---

# Product badges

A badge is the small tilted sticker on a product card. Infuse ships three looks: **Sale** in your accent colour, **Bestseller** in solid dark ink, and **New** as an outlined chip. All three take their colours from the colour scheme, so they restyle with the rest of your store when you switch style or scheme.

Badges are blocks, not a fixed card feature. That means you add, remove, restyle and reorder them the same way you do everything else on a product card.

## Adding a badge

1. In the theme editor, open any section that shows product cards, such as a collection page or a Featured collection.
2. Select the **Product card** block.
3. **Add block → Badge.**

The card in the default templates already has one Badge on it, set to show when a product is on sale.

## Deciding which products get one

Each Badge block has a **Show badge** setting with three choices.

**When on sale** shows the badge only on products whose compare-at price is higher than their price, and adds the discount percentage to the label, so it reads "Sale −20%". You never maintain this by hand; it follows your pricing.

**When product has a tag** shows the badge only on products carrying a tag you name in **Trigger tag**. Tag the products in Shopify admin under **Products → the product → Tags**. Capitals do not matter: `Bestseller`, `bestseller` and `BESTSELLER` all match.

**Always** shows it on every product in that grid.

## The automatic promotion

A single sale badge does something helpful on its own. If a product is on sale *and* carries your bestseller or new tag, the badge switches to that look and wording instead of showing a plain Sale, because "Bestseller" earns more attention than a discount everyone else is also running.

Two settings control the words it looks for, **Bestseller trigger tag** and **New trigger tag**, so you can tag in your own language. They default to `bestseller` and `new`. The text it switches to comes from **Bestseller promotion text** and **New promotion text**.

If you would rather compose badges yourself than rely on this, see the next section.

## Showing more than one badge

Add a second Badge block and you get a second badge. Both sit in the same corner by default and overlap, so put them in a group first.

1. On the product card, **add a Group block**.
2. Set the group's **Display** to **Overlay**. The group lifts out of the card layout and sits on top of the card instead of pushing the image down.
3. Choose **Vertical position** and **Horizontal position**. Between them you can put the group in any of nine spots: three across, three down. **Edge offset** controls how far in from the edge it sits.
4. Add your Badge blocks inside the group.

The group's **Layout direction** decides whether the badges stack downward or sit in a row, and **Gap** sets the space between them. These are the same settings every group has, so nothing new to learn.

An overlay group pins itself to the whole card, so "Bottom" puts it below the price. If you want it on the bottom edge of the *image* instead, put the image and the overlay group together inside another group, and the overlay pins to that group instead.

Overlay groups are not badge-only. Anything you can put in a group works: a short label over a lookbook photo, a corner ribbon, a small button.

## Choosing which badge wins

When you stack badges, the order you drag them into the group is the order they appear.

Sometimes you want one badge only when nothing better applies: Bestseller if the product is a bestseller, otherwise Sale. Turn on **Only if no other badge is showing** on the lower-priority badge. It then steps aside whenever another badge in the same overlay group is showing, and appears on its own when none is.

So a group holding a Bestseller badge and a Sale badge marked as the fallback gives you: Bestseller on bestsellers, Sale on everything else that is discounted, and never both at once.

## Size and position

**Size** offers small, medium and large. Type and padding scale together, so the pill keeps its proportions, and every size shrinks a little on phones so it does not swamp a small tile.

**Position** applies when a badge sits directly on a product card rather than inside a group, and offers the top-left or top-right corner. Inside an overlay group the group's own position wins and this setting does nothing.
