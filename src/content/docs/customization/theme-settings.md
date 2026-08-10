---
title: Theme settings
description: Store-wide options for type, layout, colour, cart, and SEO.
path: /docs/customization/theme-settings
---

# Theme settings

Theme settings are the store-wide options that apply everywhere, separate from any single section. Open them from the theme editor sidebar under **Theme settings**. Here is what each group does.

## Design preset

Chooses the overall look: **Infuse** or **Utility**. The preset sets the display font, corner radius, and motion feel for the whole theme. Colours are handled separately in the schemes below. See [Styles](/docs/customization/presets) for the difference between the two.

## Typography

By default, Infuse uses a self-hosted display font that loads with the theme, and Utility uses your system's monospace font for both headings and body text, which makes no font request at all and keeps prices, SKUs, and spec columns lined up without any extra setup.

You can override either of those with three settings:

- **Heading font**: pick any font from Shopify's font library for headings.
- **Body font**: pick any font from Shopify's font library for body text.
- **Custom heading font URL**: a link to a font file for a licensed typeface that is not in Shopify's library, used for headings instead of the picker above.

Leave all three at their defaults and nothing changes: the store keeps downloading exactly what it downloaded before. They are overrides, not requirements, and a merchant only takes on a new download by actively choosing one.

If you set a custom heading font URL, it wins over Heading font for what is displayed, but Heading font still matters: it becomes the fallback typeface shown while your custom font loads (and if it ever fails to load), so pick the closest-looking option there rather than leaving it on the default. Only one font file is ever loaded per page, whichever setting wins.

Choosing a font for Utility means giving up the alignment its monospace stack provides for prices, SKUs, and spec columns, so override it only if that trade-off is what you want.

### Using a custom font

1. In Shopify admin, go to **Content → Files**.
2. Upload your font as a `.woff2` file — that is the format the theme expects.
3. Copy the uploaded file's URL.
4. Paste it into **Custom heading font URL**.
5. Set **Heading font** to the closest-looking font in the library, so it shows as the fallback while your font loads.

### Performance

Leaving these settings alone costs nothing — the theme downloads no more than it already does. The cost, when there is one, is the font file itself, not the setting. A subset variable `.woff2` file, which is what the theme ships for its own Fraunces display font, is around 48 KB. An unsubset family converted from TTF with several separate weight files can run 300–400 KB and will slow the store down. Upload one `.woff2` file, subset it to the characters you need if your font tool supports that, and prefer a single variable font over uploading several weights.

What you do set here is the **size ramp**: eyebrow, small, medium, large, extra large, 2X large, and a display size with a minimum and maximum. Every heading and text block picks one of these by name, so changing a size here changes it everywhere that size is used. Sizes are in pixels, and the whole ramp still responds to browser text zoom.

Each step also has its own **mobile size**, used below 750 pixels wide. Desktop headings usually need to come down a step or two on a phone, and one shared percentage would shrink the large sizes and the body text by the same amount, which is rarely what you want. Set the pairs independently instead.

Leave **Medium (body) on mobile** at 16 pixels or above. Safari on iPhone zooms the page whenever a customer taps a form field whose text is smaller than that, which throws off checkout and search.

**Heading decoration** picks the default accent drawn under or around headings that turn on *Show decoration*: a wavy, straight, dotted, double or brush rule, a looping line, sparkles, a sticker, a highlight marker, or a circled word. Individual heading blocks can override it. For **Highlight marker** and **Circled word**, italicise the word or phrase you want marked in the heading text; with no italics the last word is marked.

## Layout

- **Page width**: choose a narrower or wider maximum content width.
- **Page margin**: the space between your content and the edge of the screen. Every section starts from this value. A section can add to it with its own **Horizontal padding**, and a section set to **Full** section width drops it entirely so its content runs edge to edge.
- **Favicon**: the small icon shown in browser tabs. Use a square image of at least 64 by 64 pixels.

## Colors

Colours are organised into **schemes**. A scheme is a set of colours that belong together: a background, a surface, a card, text colours, and a set of accent colours. Sections each choose which scheme they use, so a single page can move between light and dark bands cleanly.

Some blocks can break from the section around them: testimonial, feature, trust item, step, UGC item, hotspot image, badge, group and button all carry their own **Use a different colour scheme** switch, as does the header. Leave it off and the block follows its section; turn it on to give one card, badge or button a scheme of its own.

The accent is split into four roles so text always stays readable:

- **Accent**: borders, icons, and large accent text.
- **Accent vivid**: decorative fills only, where no text sits on top.
- **Accent fill**: fills that carry text, such as a call-to-action button, a promo bar, or a sale badge.
- **Accent text**: small accent text on the page background, tuned for AA contrast.

Set these once per scheme and the whole store follows. You do not need to touch colours section by section.

## Cart

**Free shipping threshold** sets the amount a customer needs to reach for free shipping, shown as a progress bar in the cart. Enter the amount in your store currency. If you prefer to manage the number in one place, a shop metafield can override this value. Leave it blank to hide the progress bar.

## SEO and social

Provide a logo for search and social previews, plus links to your Instagram, Facebook, TikTok, YouTube, and X profiles. These feed structured data and the footer's social links, which helps your store show up correctly when pages are shared.
