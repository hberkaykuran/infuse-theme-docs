---
title: Product badges
description: Add as many badges as you like, decide which products get them, style them from settings, and control which one wins.
path: /docs/guides/product-badges
---

# Product badges

A badge is the small pill you see on a product card: Sale, Bestseller, New. In Infuse it is a block called **Badge**, so you add, remove, restyle and reorder badges the same way you do everything else.

One badge block is one badge. Want three, add three. Nothing about it is specific to product cards either, so the same block works as a plain pill next to a heading or inside a spec row.

## Adding a badge

1. In the theme editor, open any section that shows product cards, such as a collection page or a Featured collection.
2. Inside the **Product card**, select the **Badges** group sitting on the image.
3. **Add block → Badge.**

The default templates already have one Badge there, set to show when a product is on sale.

The add-block menu offers several ready-made badges: Sale, Bestseller, New, Sold out and a plain Pill. They are all the same block with different settings, so pick whichever is closest and change anything you like afterwards.

## Deciding which products get one

Each Badge has a **Show badge** setting.

**Always** shows it every time. This is the default, and it is what you want outside a product card.

**When on sale** shows it only on products whose compare-at price is higher than their price. Leave **Add the discount percent** on and the label reads "Sale −20%", following your pricing with nothing to maintain by hand.

**When product has a tag** shows it only on products carrying the tag you name in **Trigger tag**. Tag products in Shopify admin under **Products → the product → Tags**. Capitals do not matter, so `Bestseller`, `bestseller` and `BESTSELLER` all match, and a whole tag has to match, so a badge triggered by `new` will not appear on a product tagged `renewal`.

**When sold out** and **When in stock** follow availability.

### Badge text from a metafield

The **Text** field takes a dynamic source like any other text setting. Click the dynamic source button next to it and connect a product metafield, and each product supplies its own badge wording.

A badge with no text renders nothing at all, which makes this self-managing: products that have the metafield filled in get a badge, products that do not get nothing. You do not need a second rule to hide it.

## Where the badge sits

Badges do not position themselves. The **Badges** group they live in does, and it is an ordinary group with **Display** set to Overlay.

Select that group and you get **Vertical position** and **Horizontal position**, three choices each, so nine spots in total: any corner, any edge centre, or dead centre. **Edge offset** sets how far in from the edge it sits.

Because the group wraps the product image, those nine positions are measured against the **image**, not the whole card. Bottom means the bottom of the photo, not below the price.

The group's **Layout direction** decides whether stacked badges run downward or across, and **Gap** sets the space between them. These are the same settings every group has.

Overlay groups are not badge-only. Anything that goes in a group works: a short label over a lookbook photo, a corner ribbon, a small button. You can also add a second overlay group in a different corner, which is how you get Sale top-left and a stock note bottom-right.

## Choosing which badge wins

Every Badge has a **Priority** from 1 to 5, where 1 is highest. Priority does two jobs.

It sets the **order** badges stack in. Priority 1 sits first, whatever order you dragged them in.

It also decides who wins when you only want one. On the Badges group, turn on **Show only the highest-priority badge**. Every badge in that group except the highest-priority one that currently applies is hidden.

So a group holding Sale at priority 1, Bestseller at 2 and New at 3, with that setting on, gives you: Sale on discounted products, Bestseller on bestsellers that are not discounted, New on the rest, and never two at once. Leave the setting off and all three show, stacked in priority order.

## Styling a badge

**Fill** picks the badge's look from five options, each built from your colour scheme: **Accent**, **Ink**, **Outline**, **Soft accent** and **Neutral**. Every one is checked for contrast in all four schemes, and all of them restyle when you switch style or edit a scheme.

**Corner radius** follows your theme style by default, which means pills in Infuse and square chips in Utility. Override it per badge with Pill, Rounded or Square.

**Border width** adds a rule to any fill. Leave it at 0 and the Outline fill still draws its own.

**Tilt** picks between your style's two sticker angles or turns the tilt off. Styles with no tilt, such as Utility, stay flat regardless, and so does every badge for visitors who ask for reduced motion.

**Size** offers small, medium and large. Type and padding scale together so the pill keeps its proportions, and every size shrinks a little on phones so it does not swamp a small tile.

**Uppercase** is on by default and gives the classic badge look. Turn it off for a softer pill that reads as a label.

**Icon** puts a small glyph inside the pill, ahead of the text.

### Giving a badge its own colours

There is no colour picker on a badge, and that is deliberate: a colour typed into one badge would not follow your style or scheme, and you would have to check its contrast yourself every time.

Instead, tick **Use a different colour scheme** on the badge and pick a scheme. The badge repaints from that scheme while everything around it stays as it was. To invent a badge colour that does not exist yet, add a scheme under **Theme settings → Colours** and select it here. You only check its contrast once, in the scheme editor, and every badge using it restyles together from then on.

The same setting is available on any group, so you can repaint a whole stack of badges at once instead of one at a time.

## Using badges outside a product card

Leave **Show badge** on Always and the Badge block works anywhere blocks are accepted. Put one beside a heading, at the end of a spec row, or in a rich-text section.

For a quieter look, start from the **Pill** entry in the add-block menu: soft fill, small, no tilt, sentence case.
