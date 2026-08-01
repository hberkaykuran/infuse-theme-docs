---
title: Changelog
description: Notable changes to the Infuse theme.
path: /docs/changelog
---

# Changelog

Notable changes to the Infuse theme, newest first.

## Unreleased — 2026-08-01

- **Promo slides are composable cards.** Each slide picks a layout — background image, image on top, image on the left, image on the right — with a slider for how much of the card the image takes. The copy inside is a group block, so the label, heading, text and button show up as children you can reorder or remove, and each slide can run its own colour scheme.
- **Slideshow dots can sit below the slides and arrows outside them**, so neither covers the artwork. Dots default to below, arrows to outside.
- The **sage colour scheme** has been removed. Three schemes ship: warm, dark and sand.
- **Promo slideshow** is a new section: the same slide mechanics as the hero, sized for the middle of a page. Show one, two or three slides at a time on desktop and one or two on a phone, with a gap you control. Arrows, dots and optional rotation work the same way. The hero stays the hero, because it carries the image-loading behaviour that only makes sense at the top of a page.
- **Every text size now has a mobile size** under Theme settings → Typography, set independently of its desktop size. Headings that read well on a laptop were coming through oversized on a phone. See [Theme settings](/docs/customization/theme-settings).
- **Groups can lay out as a grid.** Set a group's direction to Grid and choose how many columns it uses on desktop and on mobile, with separate spacing between columns and rows. A group inside a grid can span several columns or rows, so a feature tile can sit wider than the ones beside it. This is how you rebuild a multi-column band inside a Custom section instead of reaching for a fixed section.
- **Trust strip and Multicolumn take a column count**, on desktop and on mobile. Trust strip was centring whatever badges wrapped onto the last row, which read as one badge indented for no reason on a phone. It now lays out as an even grid.
- The **Highlight marker** heading decoration marks a word instead of the whole heading, the same way Circled word already did. Italicise the word or phrase you want marked; with no italics the last word is marked.
- **Underline decorations follow every line of a wrapped heading.** A heading that ran to two or three lines was getting a single rule under the bottom line, stretched to the width of the longest one. The wavy, double and brush rules keep their drawn shape, and each line gets the same three waves across its own width.
- **"Full width" now means edge to edge** in the sections whose full-width content is imagery or tiles: logo bar, UGC gallery, shoppable image, product carousel, testimonials, feature grid, collection grid, related products, related articles, recently viewed, A+ split, multicolumn and trust strip. They were dropping the maximum width but keeping the page margin, so they still sat inset from both screen edges. Quote banner, spec table, stats row, how to and custom section keep their margin on purpose, because body copy running into the screen edge reads as broken.
- **Group settings are organised into labelled groups** (Alignment, Spacing, Size, Grid placement, Placement, Background, Color) instead of one long list, and options that only apply in one direction stay hidden in the others. A grid's row spacing sits next to its gap rather than behind a checkbox further down.
- A carousel showing more than one slide at a time was drawing one dot too many, and the extra dot moved the track by a few pixels.
- The editorial pull quote in a featured collection was rendering as plain body text. It is back to accent colour, italic, and the display heading weight.
- **Blog posts and pages style the HTML you write.** Tables, expandable `details` questions, quotes, figures with captions, horizontal rules and nested lists are all styled from your colour scheme and type scale. A wide table scrolls inside itself instead of pushing the page sideways. See [Blog posts](/docs/guides/blog-posts).
- An `aside` in a post is half width with text wrapping around it, and several in a row alternate sides on their own. A `figure` stays full width and extends slightly past the reading column on wide screens.
- Blog posts have a **table of contents**, built from the headings already in the post, highlighting the section being read. Four styles: ruled list, numbered, card, or a dotted leader. It sits in the sidebar or above the article depending on your layout, and becomes a card on narrower screens. The heading above it is yours to word, or clear.
- Articles have a **layout** setting: a column with a sidebar carrying the byline, contents and share links, or a plain centred column where images extend further past the text instead. Share links can sit below the article or in the sidebar.
- The featured image can now sit **full width with the title over it**. One slider controls how much the image is dimmed behind the title, and the title stays light whatever colour scheme you choose.
- The Article section had exactly one setting before this release. It now has layout, content width, featured-image treatment, the contents options above, and individual toggles for author, date, reading time, tags and share links.
- **Related reads is its own section now.** It was fixed at the bottom of the article with no settings of its own, which is why it did not look like the rest of the site: no heading block, so no wave or size control, and its cards were forced to hide their summaries. It now behaves like every other section — move it, restyle it, or take it out — with settings for article count, columns, summaries, category chips, width, spacing and colour scheme.
- `h4` in a post body was rendering at the browser's default size instead of the theme's. Fixed, along with list spacing that was looser on pages than in posts.
- Heading weight now comes from the style rather than a fixed value, so Utility's monospace headings pick a weight that family actually has instead of falling back unpredictably.

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
