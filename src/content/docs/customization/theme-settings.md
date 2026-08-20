---
title: Theme settings
description: Store-wide options for type, layout, colour, cart, and SEO.
path: /docs/customization/theme-settings
---

# Theme settings

Theme settings are the store-wide options that apply everywhere, separate from any single section. Open them from the theme editor sidebar under **Theme settings**. Here is what each group does.

## Design preset

Chooses the overall look: **Infuse** or **Utility**. The preset sets the display font, corner radius, and motion feel for the whole theme. Colours are handled separately in the schemes below. See [Styles](/docs/customization/presets) for the difference between the two.

**Animation style** overrides just the motion part of that choice, so you can keep a style's typography and shapes without keeping the way it moves.

**Follow preset** is the default and changes nothing: Infuse keeps its springy motion, which overshoots slightly and settles, and Utility keeps none at all. **Springy** and **Smooth** apply that feel to either style — smooth uses an even ease with no bounce, which suits a serious or high-end store that still wants things to move. **None** removes transitions everywhere: hovers, card lifts, drawers and menus all change state instantly.

This affects only how things move, not how they look. Nothing appears or disappears from the page when you change it.

Visitors who have asked their device to reduce motion always get **None**, whatever you pick here. That is a system-level accessibility preference and the theme honours it.

## Typography

By default, Infuse uses a self-hosted display font that loads with the theme, and Utility uses your system's monospace font for both headings and body text, which makes no font request at all and keeps prices, SKUs, and spec columns lined up without any extra setup.

You can override either of those. Two settings pick from Shopify's library:

- **Heading font**: pick any font from Shopify's font library for headings.
- **Body font**: pick any font from Shopify's font library for body text.

The rest are for a licensed typeface that is not in Shopify's library, and they come in a matching set for headings and for body text:

- **Custom heading font URL** and **Custom body font URL**: a link to a font file, used instead of the picker above it.
- **Regular weight**: which weight the file you uploaded actually is. Most regular faces are 400.
- **Custom heading font URL, bold** and **Custom body font URL, bold**, each with a **Bold weight**: the second file, for wherever the theme renders that font bold. Optional, and covered under [Bold faces](#bold-faces) below.

Leave all of these at their defaults and nothing changes: the store keeps downloading exactly what it downloaded before. They are overrides, not requirements, and a merchant only takes on a new download by actively choosing one.

If you set a custom font URL, it wins over the picker above it for what is displayed, but the picker still matters: it becomes the fallback typeface shown while your custom font loads (and if it ever fails to load), so pick the closest-looking option there rather than leaving it on the default. The picker's own file is never downloaded once a custom URL is set.

Choosing a font for Utility means giving up the alignment its monospace stack provides for prices, SKUs, and spec columns, so override it only if that trade-off is what you want.

### Using a custom font

1. In Shopify admin, go to **Content → Files**.
2. Upload your font as a `.woff2` file — that is the format the theme expects.
3. Copy the uploaded file's URL.
4. Paste it into **Custom heading font URL**, or **Custom body font URL** for body copy.
5. Set **Regular weight** to the weight that file actually is. Most files named Regular or Book are 400.
6. Set the matching picker, **Heading font** or **Body font**, to the closest-looking font in the library, so it shows as the fallback while your font loads.

### Bold faces

A font file holds one weight. The browser cannot make a real bold out of a regular file, so when something on the page is bold and only the regular file exists, it fakes one by smearing the letters wider. That fake is what makes an uploaded font look slightly wrong next to the same font in your design tool.

Both custom font settings therefore have a second URL slot and a second weight beside it. Upload your font's bold file there and the theme uses it wherever it renders that font bold. Headings use it for display sizes; body text uses it for `<strong>` words, prices, and form labels. Leave the bold slot blank and the browser goes on faking the bold from the regular file, which is a reasonable choice if bold barely appears in your design.

If you are uploading a **variable** font, put the same file URL in both slots and set the two weights to the weights you want, for example 400 and 700. The browser downloads that file once and draws both weights from it.

The fonts you pick from Shopify's library need none of this. The theme downloads their bold face for you, and for headings the bold italic as well where the family has one.

### Performance

Leaving these settings alone costs nothing: the theme downloads no more than it already does. The cost, when there is one, is the font file itself, not the setting. A subset variable `.woff2` file, which is what the theme ships for its own Fraunces display font, is around 48 KB. An unsubset family converted from TTF with several separate weight files can run 300–400 KB and will slow the store down. Upload `.woff2` files, subset them to the characters you need if your font tool supports that, and prefer one variable font used for both the regular and bold slot over two separate static files. Note that filling in a bold slot, or picking a library font that has a bold face, is a second download, so set it only if bold actually appears in your design.

What you do set here is the **size ramp**: eyebrow, small, medium, large, extra large, 2X large, and a display size with a minimum and maximum. Every heading and text block picks one of these by name, so changing a size here changes it everywhere that size is used. Sizes are in pixels, and the whole ramp still responds to browser text zoom.

Each step also has its own **mobile size**, used below 750 pixels wide. Desktop headings usually need to come down a step or two on a phone, and one shared percentage would shrink the large sizes and the body text by the same amount, which is rarely what you want. Set the pairs independently instead.

Leave **Medium (body) on mobile** at 16 pixels or above. Safari on iPhone zooms the page whenever a customer taps a form field whose text is smaller than that, which throws off checkout and search.

**Icon size** and **Icon size on mobile** are the same idea for icons: one percentage each, applied to every icon in the theme that has no size setting of its own. Leave both at 100% and nothing changes. Shrink the mobile type and you can bring the icons down with it in one place, instead of leaving them at full size next to smaller text. The header icons, social links, benefit list and carousel arrows keep their own icon settings and ignore this one, so you are never tuning the same icon through two sliders.

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

## Quick view

The quick view window opens from a product card without leaving the page, and every card on a page shares the same one — so it is set up here rather than section by section.

**Image fit** decides how the product photo sits in the left half. **Fit whole image** keeps the whole picture visible with room around it, which suits packshots on a plain background. **Fill the frame** crops the picture to fill the panel edge to edge, which suits lifestyle photography.

**Reassurance line** is the small line at the bottom, under the link to the full product page. Show **two items**, **one item**, or **hide** it. Leave **First item** and **Second item** blank to keep the theme's own wording, or type your own — your returns policy, delivery time, whatever your customers ask about most. The line is hidden on phones, where the window is already compact.

## SEO and social

Provide a logo for search and social previews, plus links to your Instagram, Facebook, TikTok, YouTube, and X profiles. These feed structured data and the footer's social links, which helps your store show up correctly when pages are shared.
