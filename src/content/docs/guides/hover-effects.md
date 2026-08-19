---
title: Hover effects and clickable cards
description: One hover vocabulary shared across image, group, product card, product image and logo blocks, plus how to make a whole image card a single link.
path: /docs/guides/hover-effects
---

# Hover effects and clickable cards

## Hover effects

Image, group, product card, product image and logo blocks all offer a **Hover effect** setting drawn from the same list. Each block only offers the effects that make sense for it:

- **None** — no hover behaviour.
- **Zoom** — the image grows slightly inside its own frame. It cannot spill over whatever sits next to it, because the frame clips it.
- **Lift** — the whole element rises a little on hover. Available on image and group blocks; product cards use it by default.
- **Grayscale** — the image starts in grayscale and shows full colour on hover. Available on image blocks and on logos, where it is the default.
- **Second image** (product image block only) — hovering shows the product's next photo, useful for a quick alternate angle without opening the gallery.

Because it is one setting shared across blocks, turning an effect on or off works the same way everywhere you find it, and you can mix effects freely: a zoom on a lookbook image, a lift on your product cards, a grayscale reveal on your logo bar.

Product cards keep **Lift** on by default and logos keep **Grayscale** on by default, matching how most stores want them out of the box. Turn either off per block if you would rather they sat still.

Hover only applies to pointers that can hover — a touch screen shows the plain image. Every effect except grayscale also switches off for visitors whose device is set to reduce motion; grayscale is a colour change, not motion, so it still runs.

## On a phone

Since none of the above happens on a touch screen, the product image block carries a second setting for phones: **On a phone → Swipe through the images**. It turns the card picture into a track your visitor swipes through, with dots underneath showing which picture they are on, and it works whether or not you set a hover effect for desktop.

There are no arrows. A card in a grid is small, and its own tap has to keep opening the product, so an extra pair of tap targets on top of the picture would mostly get pressed by accident — the swipe is the gesture, the way it is everywhere else on a phone.

The extra pictures are not fetched until someone touches the card, so switching this on does not slow a page down for visitors who never swipe. It is off by default, and it needs a product with two or more pictures.

If your cards also show a **"view product" bar** across the picture, the dots sit above it rather than on top of it. Set the bar to a small pill on mobile and the dots stay where they were, since a pill leaves the bottom edge free.

## A whole card as one link

A group block with a background image can become a single clickable card:

1. Select the group and add a background image, if it does not already have one.
2. Set **Link** to the page, product or collection the card should open.
3. Turn on **Make the whole card a link**.

The whole card is now one click target and one stop in the keyboard tab order, rather than requiring a visitor to find a specific piece of text to click. Add a heading or text block inside the group to carry the link's accessible name, so a screen reader announces something more useful than "link."

If the card also holds a button, the button keeps working as its own separate link or add-to-cart control. The card link sits underneath it, so clicking the button does what the button does, and clicking anywhere else on the card follows the card's link.
