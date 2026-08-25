---
title: Changelog
description: Notable changes to the Infuse theme.
path: /docs/changelog
---

# Changelog

Notable changes to the Infuse theme, newest first.

## Unreleased — 2026-08-25

- **New: before/after labels have a size setting.** The two labels on an Image compare
  block were locked at one size, which read as too large on a phone. There is now a **Label
  size** setting with a separate **Label size on mobile**, both starting at "match the
  current style" so nothing moves until you change them.
- **Fixed: the "See all" mosaic thumbnails looked soft.** The tile was only ever allowed to
  fetch a small version of each collection photo, so the four-cell mosaic went blurry as
  soon as the tile had any real width. It now loads a sharp image, and there is a **Sizes**
  field on the tile if your grid uses an unusual number of columns.
- **Note: UGC tiles can already open a link in a new tab.** The **Open in new tab**
  checkbox appears on a UGC item once you paste something into its **Link** field, which is
  what you want for an Instagram post. A tile with a link opens that link instead of the
  gallery viewer.

## Unreleased — 2026-08-24c

- **New: icons can be any size you want.** The Icon block only offered Small, Medium and
  Large, so a value-prop row was stuck at 32px however much room it had. Pick **Custom
  size** and you get a slider from 12px to 128px, plus an optional separate size for
  phones. The three named sizes are unchanged, and every icon you have already placed
  keeps exactly the size it has today.

## Unreleased — 2026-08-24b

- **Fixed: you could only pick six collections.** The collection picker on every Collection
  list section stopped at six. That cap was the theme's own, not Shopify's — it now holds
  **fifty**. The **Maximum collections** slider also stopped truncating a list you pick by
  hand: it now applies only when you leave the picker empty and the section falls back to
  your whole catalogue, which is what its description always said it did. Pick twelve
  collections and you get twelve.
- **New: the "See all" tile is a card you can build.** The tile at the end of a Collection
  list used to offer three fixed looks and nothing else. It now has its own entry in the
  section's block list, with settings for a heading, a line of text, the label style
  (plain / button / pill), the icon and its frame, the collection count, background and
  text colour, border, corner radius, alignment, and label size, weight and capitals. You
  can also **drop blocks inside it** — a heading, text, a button, an image, an icon — so it
  can carry real copy instead of just a link.
- **New: arrow icons.** The theme's icon set had no arrow in it, so the "see all" tile and
  the promotion bar were falling back to a typed arrow character that sat slightly low and
  looked thinner than the rest of the icons. There are now proper **Arrow**, **Arrow
  (diagonal)**, **Chevron** and **Grid** icons, available anywhere you can pick an icon.
- **New: Mosaic tile options.** The mosaic — the tile that shows thumbnails of the
  collections that did not fit — can now use four cells, three across, one large with two
  small, or a nine-cell wall; the count can sit in the last cell, as a badge, as wording
  under the label, or be hidden; the label can sit under the mosaic, over it, or above it;
  and the colour tint behind each photo is adjustable.
- **Fixed: a dead setting on the home page's multi-column section.** A leftover spacing
  value was being sent to Shopify and discarded on every save. The section's spacing comes
  from the column block itself and is unchanged.

Existing Collection list sections keep the exact look they had — every new setting starts
at "match the current style" and changes nothing until you touch it.

## Unreleased — 2026-08-24

- **New: four more Collection list layouts, including one that fits any number of collections.**
  **Auto** asks you for a tile *size* instead of a column count and lets the browser fit as many
  per row as there is room for, so the same setting looks right on a store with four collections
  and a store with sixty. **Ribbon** alternates rows of two different widths for a magazine feel,
  with separate row counts for phones. **Rows** is a plain directory listing — small thumbnail,
  name, count, one collection per line, in one to three columns. **Carousel** and **Grid** are
  unchanged.
- **Fixed: the Bento layout looked wrong on phones.** The featured tile was meant to be a large
  square but rendered as a short full-width band, indistinguishable from an ordinary wide tile.
  It is now a true large tile on every screen size.
- **Changed: Bento now features one collection, not every fourth one.** With six collections the
  old layout produced two large tiles, and with sixteen it produced four, which read as a repeating
  pattern rather than a feature. The first collection is now the featured one and the rest are
  uniform. The same change applies to the **Editorial** layout on product grids, which was
  enlarging one product in every seven.
- **Fixed: settings on the collection title did nothing.** Padding, colour and text size on the
  Collection title block were being overridden by the card whenever the title sat on top of the
  tile, so changing them had no visible effect. They now work. Cards you have not touched look
  exactly as they did.
- **Changed: Collection list is now three sections, so you only see the cards you can use.**
  Every layout needed its own card design, and the theme editor listed all of them on every
  section, including the ones your chosen layout never draws — the "why are there several cards
  here" problem. The layouts are split across **Collection list** (Grid, Auto, Carousel),
  **Collection list editorial** (Bento, Ribbon) and **Collection list rows** (the directory).
  Existing sections keep working; pick the section that matches the layout you want.
- **Fixed: pictures in the Bento and Ribbon layouts, and in the rows directory, were the wrong
  size.** The theme was asking the browser for a picture sized for an ordinary grid tile, so large
  featured tiles loaded a picture too small for the space and small row thumbnails loaded one four
  to five times larger than needed. Each shape now asks for its own.
- **Fixed: the column setting on the rows directory did nothing.** It always drew two columns
  whatever you chose.

## Unreleased — 2026-08-23

- **Fixed: the Collections page used an old section that could not be customised.** The page that
  lists every collection was drawn by a section predating the theme's block system. It showed no
  pictures at all, its heading could not be edited, and it carried two settings. That section has
  been removed. The Collections page now uses the ordinary **Collection list** section, so it takes
  pictures, a heading you can write, layouts, widths, padding and everything else that section
  offers.
- **Removed: the "Collections bento" section from the picker.** It was the Collection list with its
  layout set to Bento, which made it look like a second section doing the same job. Add
  **Collection list** and set **Layout** to **Bento** for the same result.
- **New: a maximum for how many collections a Collection list shows.** The collection picker holds
  six. When you leave it empty the section falls back to your whole catalogue, and it used to stop
  at six there too. You can now raise that to thirty, which is what the Collections page uses.
- **Fixed: photos in a UGC gallery carousel were blurry.** The theme was asking the browser for a
  picture sized for the grid layout no matter which layout you had chosen, so a carousel with wide
  cards loaded an image far smaller than the space it filled. Each layout now asks for the size it
  actually draws, including the enlarged card in Spotlight.
- **Fixed: the UGC viewer left a lot of empty space around the photo.** The viewer sized its width
  for a portrait shape whatever shape you had set, so a square or 4:5 gallery opened around 30%
  narrower than it should have. It now matches the shape you chose.
- **Fixed: a gap appeared between a UGC photo and the text under it.** The photo's rounded corners
  were being drawn against the caption or the buy bar below, leaving two notches of background
  biting into the top of that strip. Only carousels were affected.
- **New: control over products on UGC tiles.** A new **Products on tiles** setting offers **Both**
  (the product name and an add button, as before), **Info only** (the product name with no add
  button, for editorial or Instagram galleries) and **None**. Individual tiles keep their own
  switch for hiding their product.
- **Fixed: the link on a UGC item did nothing when the viewer was on.** Setting a link on a tile
  had no effect unless you also turned the whole gallery's viewer off. A link now wins for that
  tile, so one Instagram post can point at Instagram while the rest of the gallery opens the
  viewer. There is a new **Open in a new tab** switch beside it.
- **New: a gradient caption style for UGC galleries.** Alongside Plain and Accent, **Gradient veil**
  lays the caption across the foot of the photo on a soft fade, matching the collection card's
  Gradient veil. Any product name on the tile moves to the top so the two do not overlap.
- **Fixed: the Accent caption style only coloured its background.** The text inside it stayed dark
  against the accent fill. It reads correctly now.

## Unreleased — 2026-08-22

- **Fixed: adding a Collection list gave you a grid of blank tiles.** The section arrived without
  the picture and title inside its collection card, so every tile rendered empty until you built
  the card by hand. New sections now come with the card filled in. Sections you already have on a
  page are unaffected.
- **New: a "See all" tile at the end of a collection list.** The collection picker holds six, so
  on a larger catalogue the grid is a taster. You can now close it off with a tile linking to your
  full collections page, in one of three looks: an **outlined tile**, an **accent tile** that names
  how many collections are left, or a **mosaic** showing thumbnails of what is behind the cap. Off
  by default, and separate from the "View all" link in the section heading — you can run either,
  both, or neither.
- **New: a gradient title style for collection cards.** Alongside the existing chip and card-colour
  options, **Gradient veil** lays the title across the full width of the tile's foot on a soft fade,
  with the product count on its own line. Best suited to photography and full-bleed crops.
- **Fixed: one tile could stretch a collection grid out of shape.** A cell whose contents were
  wider than the rest used to take space from its neighbours, leaving uneven columns. Columns are
  now always equal.
- **Fixed: the Sale collection template had no title.** Collections using it rendered without their
  heading or description. Both are back.
- **Changed: the Rating block no longer starts at five stars.** It used to arrive pre-set to the
  maximum, so any rating block you dropped in and did not edit published a five-star score you
  never entered. It now starts at **Not set** and shows nothing until you choose a score.
- **Changed: the review score on Review photos comes from your review app.** The strip used to
  offer a free text box for typing a score by hand. It now reads the rating and review count your
  review app stores on the product, shows stars and the figure when they are there, and shows
  nothing when they are not. If you were typing a score into that box, it will no longer display —
  connect a review app to show a real one.
- **Removed: "Verified buyer" from the sample testimonials.** The theme has no way to check whether
  a reviewer bought the product, so it no longer ships the claim. The quotes, names and stars stay,
  and you can still write whatever you like in a testimonial.

## Unreleased — 2026-08-20d

- **Fixed: the mobile menu did nothing on some pages.** Opening the menu drew it correctly, but
  the page's own content painted on top of it, so taps went to the page behind. It now sits above
  every section on every template. This affected any store whose header is not sticky and not
  overlaid.
- **The mobile menu's category columns are easier to read.** When you mirror a mega menu into the
  mobile menu, its groups now sit two across at a slightly smaller size instead of stacking one
  per row — a three-group menu went from around 680px of scrolling to under 300px on a phone. If
  you use **Packed columns**, the mobile menu gets two columns as well; it could only ever manage
  one before.
- **A product video now plays in the full-screen gallery viewer.** Pressing play on a video in the
  product gallery opens the zoom viewer and starts the clip there, at the video's own shape, rather
  than swapping a player into a slide sized for product photos. The video also gets its own
  thumbnail in the viewer's filmstrip, so you can reach it from any other shot. It stops when you
  swipe to the next image or close the viewer. Needs **Enable zoom** on; with zoom off, video plays
  in place exactly as before.
- **Video and 3D thumbnails line up with the rest.** They used to sit small in the middle of their
  square with pale bands above and below. They now fill the square like the images beside them.
- **The UGC viewer's progress bar is visible on desktop.** It was drawn in white over the
  photograph, so it disappeared on any light-coloured shot.
- **A UGC photo's "Add to cart" now adds every product tagged on that photo.** One tap buys the
  whole look. Products with options are left out — there is no variant to add until someone
  chooses one — and they keep their own row inside the viewer.
- **Removed: the "Add all N to cart" button in the UGC viewer.** The photo's own button does this
  now, so the extra button in the viewer is gone along with its setting.

## Unreleased — 2026-08-20c

- **The mobile menu can show your mega menu properly.** Until now a mega menu's categories
  appeared in the mobile menu as a plain list of text links: the collection images or colour
  dots you had chosen, and the product counts, were desktop-only. The setting is now called
  **Use the mega menu panel in the mobile menu**, and it does what it says — the same columns
  the desktop panel draws, markers, counts, promotion and all. **Mega menu columns** applies
  there too, though a phone-width menu usually fits one column unless you set a narrow
  **Packed column width**. Turn it off for the old plain text list.
- **Fixed: a mega menu dropped links that were not inside a group.** If a mega menu mixed
  groups of links with a plain link at the same level, the plain one rendered as a heading
  with nothing under it and could not be clicked. It shows as a normal link now, with its
  marker and product count, on both desktop and mobile.
- **Fixed: sub-category links in the mobile menu were indented twice**, sitting two steps in
  from the edge of the menu.
- **Fixed: opening a filter stretched the filter next to it.** On a collection page, opening
  **Availability** stretched every other filter box to the same height, leaving a tall empty
  **Price** box beside it.
- **Fixed: video in the product gallery ignored the gallery's frame.** Pressing play replaced
  the picture with a video that ran edge to edge, ignoring the **Image stage padding** and the
  rounded corners every image slide sits inside. The video now opens at its own shape, in the
  same frame the thumbnail was drawn in, so nothing jumps when you press play. Videos uploaded
  to Shopify (rather than linked from YouTube or Vimeo) also get the poster-and-play-button
  treatment that linked videos already had, instead of showing a bare player with browser
  controls.

## Unreleased — 2026-08-20b

- **Every text block has a Weight setting now.** Product title, Heading, Label, Badge, Price,
  Article title, Article meta, Article excerpt, Collection title, Stock status, Stock counter,
  Product description, Product benefits, Product SKU, Product vendor, Tax / shipping note and
  Delivery estimate each gain **Weight**: Regular, Medium, Semibold or Bold. Before this, only
  the **Text** block had one, and every other block's weight was fixed in the theme's code, so
  a product title could not be made bold at any size. Each setting starts at **Inherit**, which
  renders exactly what the block rendered before, so nothing on a saved page moves until you
  change it.
- **Delivery estimate can show the cutoff line on its own.** A new **Show the delivery window**
  checkbox turns off the estimated-dates sentence, leaving just the dispatch countdown. The
  cutoff line also gets its own **Text size** and **Weight**, separate from the estimate above
  it, and the estimate's own size choices now run from Eyebrow to Extra large instead of three
  steps. With the window turned off and no cutoff time set on any day, the block shows a note
  in the theme editor explaining why it is painting nothing.
- **Fixed: the password page's Enter button sat flush against the password field.** The form
  had no spacing of its own, so its heading, field and button stacked with no gap between them.

## Unreleased — 2026-08-20

- **Icons have a size setting now.** Theme settings → Typography gains **Icon size** and
  **Icon size on mobile**, a percentage each. They scale every icon in the theme that had no
  size of its own, so a store that brings its mobile type down 15% can bring the icons with
  it instead of leaving them at full size. Both start at 100%, which renders exactly what the
  theme rendered before. The header icons, social links, benefit list and carousel arrows keep
  their own icon settings and are left out of it.
- **A product title can carry the pack size on the same line.** **Product title** gains a
  **Suffix** setting that reads a product metafield (`custom.pack` by default) and prints it
  next to the name, in the same run of text, with a separator you choose. Previously the
  amount had to be a second block, which meant a second box: a title that wrapped left a
  half-empty last line and pushed the amount onto a row of its own, on every card. Size and
  colour for the suffix are separate, so it can sit small and muted beside a large title. Off
  unless you turn it on, and it works the same on the product page and on product cards.
- **Delivery estimate can count down to your dispatch cutoff.** Turn on **Show a cutoff
  countdown** and set a time per weekday, in 24-hour `HH:MM` and your shop's timezone. Saturday
  can close at 11:00 while weekdays close at 13:00, and a day left blank means you do not
  dispatch that day at all. Before the cutoff the block adds a line counting down and naming
  the day the order ships, as *today*, *tomorrow* or a weekday name. After it, you choose
  whether to name the next dispatch day or keep the countdown running to it. The clock runs in
  the customer's browser, so a cached page can never show a stale countdown, and a customer
  with JavaScript off still sees the plain delivery estimate.

## Unreleased — 2026-08-19f

- **Product info is four blocks now.** Vendor, SKU, stock status and the tax / shipping note
  used to be four rows inside one **Product info** block, in a fixed order, each behind a
  checkbox. They are separate blocks — **Product vendor**, **Product SKU**, **Stock status**,
  **Tax / shipping note** — so each one can go where you want it, in its own group, at its own
  size, colour and alignment. The stock pill can sit under the buy button while the SKU stays
  up by the title. New product pages ship with **Stock status** only; add the others where you
  want them. Stores that had **Product info** on a saved page need to add the blocks they were
  using.


- **Colour pickers where there were none.** The in stock / low stock / sold out lines in
  **Product info** each take their own colour (the green "In stock" was fixed in the code and
  followed no palette), and **Benefits** and **Delivery estimate** now colour their text and
  their icon. **Rating** stars take a custom colour too. Leave any of them empty and it looks
  exactly as it does today.
- **The multicolumn grid owns its own grid.** **Columns**, **Columns on mobile** and **Gap**
  moved off the section and onto the **Columns** block that draws the grid, where you would
  look for them, and the grid's own **Max width** is a setting instead of a fixed 56rem — which
  is why a full-width multicolumn section still drew a narrow grid. If you had changed columns
  on the section, set them again on the block.

## Unreleased — 2026-08-19e

- **Text can take a collection's colour, or one you pick.** The **Color** setting on text,
  heading, label, icon, product title, product info, product description and collection title
  now offers **Collection color** and **Custom**. Collection color uses the **Color** metafield
  (`custom.accent_color`) on the collection: on a product card it is the colour of the
  collection that product belongs to, so a category line under each card comes out in its own
  colour with one setting for the whole grid. Custom reveals a colour picker. Set neither and
  nothing changes.


- **The quick view window can hug its contents.** New **Width** setting: **Fixed** keeps it at
  the **Max width** as before, **Fit content** lets it shrink to whatever the blocks inside
  need. Capping the width of the details column used to leave empty space down the right of the
  window; now the window comes in with it.
- **Overlay settings show their effect straight away.** Changing a setting on the quick view,
  the cart drawer or the promo popup closed the very window you were editing, so the change
  looked like it did nothing. The window now reopens itself after each change.
- **The accordion body has its own text size and spacing.** **Details / accordion** only ever
  styled its title. It now takes a **Text size** for the collapsible part (**Same as page** by
  default) and its own top and bottom padding.
- **The benefit checklist can run across, not just down.** The ticked lines under the product
  title were always one per row. **Layout** now offers **Row**, which flows them side by side
  and wraps when they run out of space, and **Grid**, which lines them up in the number of
  **Columns** you pick. **Layout on mobile** and **Columns on mobile** set what happens on a
  phone, so a four-across row on desktop can be two-across, or back to a list, on a small
  screen. Existing stores look exactly as they did.

## Unreleased — 2026-08-19b

- **Quick view opens straight away.** The window used to sit there loading, still showing
  whichever product you looked at last. It now starts fetching the moment your pointer reaches
  the quick view button, so by the time you click it is usually ready, and a different product
  never flashes the old one first.
- **The link to the full product page is a block now.** It used to be a fixed line under the
  whole window, which put it below the picture no matter how you arranged the rest. Add a
  **Button** wherever you want it — inside the details column, under the price, anywhere — and
  set **Link to** to **Current product page**. The old **Show details link** setting is still
  there for stores using it, and it now shows in the editor even before you pick a product.
- **A separate logo for phones.** The header takes a **Mobile logo**, used below 750px. Only the
  one that fits the screen is downloaded, so a wide wordmark on desktop and a compact mark on a
  phone cost nothing extra.
- **Size the logo by height.** **Size logo by** now offers **Height** as well as **Width**, which
  is what a wordmark needs to line up with the menu, and the only way two logos of different
  shapes come out the same size. Both have their own phone value behind **Custom logo size on
  mobile**.
- **Header icons scale.** **Icon size** sets the search, account and cart icons, with **Custom
  icon size on mobile** for a different size on phones.
- **Text sizes go much further.** Every size in **Typography** had a narrow range that stopped
  well short of small captions and big display headings. All of them now run from far lower to
  far higher. Your current values are unchanged.

## Unreleased — 2026-08-19

- **Tighter pages on phones.** The announcement bar, the header and the product section each
  take their own phone spacing now: turn on **Use different spacing on mobile** for a separate
  top and bottom padding, and on the product section also **Space under breadcrumbs (mobile)**,
  which can go all the way to nothing. Before, the gap under the breadcrumb trail was tied to
  the gap between the picture and the details, so closing one closed the other — and the bar
  and header had one padding for every screen size. Desktop is untouched either way.
- **Add a whole look to the cart at once.** A gallery photo tagged with several products shows
  an **Add all to cart** button under the shoppable list in the viewer. It covers the tagged
  products that have a single option and are in stock; anything with sizes or colours keeps its
  own button, because there is no way to guess which one the customer wants.
- **The quick view window is yours to set up.** New **Quick view** settings: **Image fit**
  (fit the whole picture, or fill the frame) and the small reassurance line at the bottom —
  two items, one, or none, with your own wording.

- **The "view product" bar sits on the picture again.** On cards whose picture is taller than it
  is wide, the bar was landing partway up the image instead of across its bottom edge. It now
  follows the picture whatever shape you give it.
- **The bar has its own mobile setting.** A phone has no hover, so the bar was simply always
  there, covering the bottom of every carton. **On mobile** now offers a **small pill** in the
  corner or hides the bar altogether, and leaves the full bar as the default.
- **Packed mega menu columns work.** Setting **Mega menu columns** to **Packed** used to squeeze
  the whole panel into one narrow strip. It now spreads the groups across the number of columns
  you pick in **Packed columns**, stacking short groups under each other so there is no tall gap
  beside a group holding one link.
- **The mobile menu scrolls.** A long menu, especially one showing mega menu content, could run
  past the bottom of the screen with no way to reach the last items. It scrolls on its own now.

## Unreleased — 2026-08-18e

- **You can put your own blocks under a grid.** Sections that arrange tiles — features, badges,
  steps, logos, columns, stats, testimonials, gallery items, spec rows — accept blocks of your own
  below the tiles now, so a "view all" button or a line of small print can live inside the section
  instead of needing one of its own underneath. The heading area above the tiles was already yours
  to fill. Hero and Promo slideshows do not take these, since they are edge-to-edge bands with
  nothing but the slides in them.
- **Every repeated tile now sits in one named group.** Testimonials, badges, steps, logos,
  columns, stats, slides, gallery items and spec rows used to appear in the editor as a loose
  run of blocks, with nothing showing which of them formed the grid. Each section now has a
  single group holding them — **Testimonial items**, **Trust strip**, **How-to row** and so on —
  so you can tell the grid apart from the heading above it, and the **Add block** button inside
  that group adds another tile straight away instead of opening the full block list. The group
  cannot be deleted or duplicated by accident, because it is part of the section rather than
  something you add.
- **The product page's detail rows are an accordion.** **Description**, **Nutrition facts**,
  **Shipping** and **Returns** were four separate blocks sitting in the product column with
  nothing joining them. They are now inside a **Product details accordion**, whose add button
  makes a new row. Adding the accordion from scratch gives you three rows to edit rather than an
  empty box. A row still draws nothing when its source is empty, so a metafield you have not
  filled in will not leave a blank heading on the page.
- **Product cards on Featured collection are fixed.** On some stores the picture escaped its
  frame and painted over the title and price. That is repaired.
- **Cards no longer show greyed-out entries you cannot use.** A product card listed dimmed
  **Product image**, **Product title**, **Price** and **Add to cart** rows that could not be
  moved or removed, and adding your own block to the card made the card's contents disappear.
  Both are gone. If a card of yours is empty after updating, open it and add the blocks you want;
  every card the theme ships arrives complete.
- **The block list says which half of a split section you are editing.** In sections with a
  picture on one side and words on the other, the two entries read **Image** and **Group**, which
  told you nothing — and with **Media position** set to the right, their order did not match what
  you saw. They now read **Media** and **Copy**, and the same went for step, stat, column and
  gallery entries, which are numbered instead of repeating one word.
- **Sections that are deliberately empty explain themselves.** A Blog posts section with no blog
  chosen, a Video section with no video, or a Related products section on a page that has no
  product used to be invisible in the editor with no clue whether they were broken. Each now
  shows a short line telling you what it needs. Visitors never see it.
- **Slide text no longer sits flush against the edge of the screen.** On a full-width Hero
  slideshow the heading and buttons touched the very edge of the phone screen. They keep the
  page's normal margin now, and **Horizontal padding** still adds to it.

## Unreleased — 2026-08-18c

- **Testimonials, features, steps, badges, FAQ answers and hero slides hold any blocks.** Each of
  these used to draw its own fixed arrangement and then let you add blocks after it, so anything
  you added landed at the bottom. A picture could not go above a quote, or beside the author's
  name. They are canvases now: the parts are ordinary blocks you can reorder, restyle or replace,
  and each arrives arranged the way it always looked, so nothing changes until you move something.
- **A Rating block.** The stars that were locked inside a testimonial are a block of their own,
  so you can put a rating anywhere blocks go.
- **Text blocks can be quotes, captions or paragraphs.** A new **Tag** option on the Text block
  chooses what kind of text it is, which matters for search engines and screen readers, and a
  **Weight** option sets how bold it looks.
- **Search engines get a fuller description of your store.** The data the theme hands to Google
  now covers article, page and blog pages, which previously sent none, and product data gained
  condition, price validity, correct barcode fields and your return policy. Collection and blog
  pages describe their contents as a list. None of this changes how your store looks.

## Unreleased — 2026-08-18b

- **Product card pictures can be swiped on a phone.** The **Hover effect** options that page through a product's other photos — **Second image** and **Scrub** — need a mouse, so on a phone a card showed one picture and nothing else. **Product image → On a phone → Swipe through the images** turns the card picture into a track your visitor swipes, with dots underneath showing where they are. There are no arrows on purpose: the card is small and its own tap has to keep opening the product, so the swipe is the gesture. It is off by default, and the extra pictures are only fetched once someone touches the card, so a card that nobody swipes costs nothing.
- **The zoom button on a product page stays where it is.** It was drawn on each picture, so it slid off the screen with the picture as you moved through the gallery and a new one slid in behind it. There is one button now, fixed to the corner of the gallery, and it opens whichever picture you are looking at. It hides itself on a video or 3D slide, which have their own buttons.
- **The large tile in an editorial grid is fixed.** After the previous update, the tile that is drawn twice as wide in the **Editorial** layout could render as an empty box on a page you had already built, and arrived without its add-to-cart button. Both are fixed. If you had already arranged that section, open **Featured collection → Product card** in the editor to compose the large tile the way you want it; a section you add from now on brings the full card.

## Unreleased — 2026-08-18

- **The mega menu finally reaches your phone visitors.** A mega menu panel could hold a promotion, featured products, or any blocks you liked, and none of it appeared in the mobile menu — the phone menu was a list of links and nothing else, on the screen most of your visitors use. That content now appears under its menu's links when you open that section of the mobile menu. The category links are not repeated, since the mobile menu already lists them. **Header → Show mega menu content in the mobile menu** turns it off if you would rather keep the menu plain. Blocks you place in a panel keep their own settings, so a promotion built as a group can use **Mobile layout direction** to stack on a phone and sit in a row on a desktop.
- **Mega menu columns can be packed.** Every second-level group used to take a column of its own, so a group with three links sitting beside one with twelve left a hole as tall as the difference. **Header → Mega menu columns → Packed** fits as many columns as the panel allows and stacks short groups under each other, with **Packed column width** to tune how many that is. The default is unchanged.
- **The big picture in an editorial grid is sharp now.** In the **Editorial** layout of a collection page or a Featured collection section, every seventh product is drawn twice as wide as the rest — but it was being sent the same small picture as its neighbours, so it appeared blurry and upscaled. The large tile now gets its own card and its own picture size. The same fix went into the **Bento** layout of Collection list, where the large and wide tiles had it too. Nothing else fetches a bigger picture than before.
- **A product page can use a compact gallery on phones.** **Product → Phone gallery → Compact: arrows and dots** swaps the row of thumbnails for the carousel's own arrows and dots and shrinks the zoom button to its icon, which gives the picture more of a small screen. Where the arrows and dots sit, how big they are and whether they show at all stay with the **Carousel navigation** block, so you can put the arrows over the picture or under it. Thumbnails remain the default.
- **Product cards can show a "view product" bar instead of a buy button.** A bar across the bottom of the picture that slides up when a mouse is over the card and is simply there on a touch screen. Turn it on with **Show a "view product" bar** on the product card, and set its wording. A softer alternative to an add-to-cart button on a card in a browsing grid.

## Unreleased — 2026-08-17

- **The magnifier panel shows the part of the picture you are pointing at.** On a product page with **Aspect ratio** set to **Adapt to image**, or **Image fit** set to **Cover**, the panel beside the gallery was showing a different part of the picture than the box on the picture itself, and on **Cover** it also drew a band of the stage's background along the edges. Both are fixed, in every combination of those two settings.
- **The box that marks the magnified region keeps all four of its edges.** When you moved the pointer near an edge of the picture, the box drawn on it lost the outline along that edge, and its corner was clipped where the picture's rounded corner is. It is now drawn just inside its own outline, and rounded to match your **Image corner radius**, so it stays whole wherever you point.

## Unreleased — 2026-08-16

- **The footer is built from blocks now.** It used to offer a fixed set of columns — a brand column, link columns, a text column, a newsletter, social links — and nothing else. You can now add any block to the footer, and arrange them with groups: a group set to a horizontal layout is a row of columns, and a second group is a second row underneath it. The brand column is a group as well, so its logo is an ordinary **Logo** block you can restyle or replace, and you can put anything beside it.
- **Five new blocks came out of that.** **Link list** (a menu with an optional heading), **Newsletter** (the signup, with its own button and placeholder wording and a one-row or stacked layout) and **Social links** (with **Plain**, **Outlined** and **Filled** icon styles and a size slider) are ordinary blocks now, so they are not stuck in the footer — put a newsletter signup in a section, or social links in a mega menu. The country and language picker, the copyright line and the payment icons stay where they were, at the bottom.
- **Your existing footer is not carried over.** Because the old footer columns were a different kind of block, a footer you had already arranged cannot be converted automatically. After updating, open **Footer** in the editor and rebuild it — the theme's own footer arrives already assembled, so the quickest route is usually to start from that and swap in your menus and wording.
- **The blog post page is built from blocks too.** The title, byline, post content, contents list, tags and share row were fixed parts of the page, switched on and off with checkboxes and always in the same order. They are blocks now — **Article title**, **Article details**, **Article body**, **Table of contents**, **Article tags**, **Share links** — so you can reorder them, restyle them, drop a button or a promotion into the middle of a post, or wrap the picture in a group and put a badge on top of it.
- **The sidebar is yours to fill.** On the **Column with sidebar** layout, the narrow rail beside the writing used to hold the contents list and the share row and nothing else. It is now a group you fill with any blocks you like.
- **The featured picture stays a section setting.** It is the biggest image on the page and the theme loads it with priority so the page feels fast, which a block cannot do. **Featured image** gains a **Hidden** option for when you would rather place it yourself as a block further down.
- **You can set how the theme animates, whatever style you are on.** **Theme settings → Design preset → Animation style** offers **Springy**, **Smooth** and **None** alongside **Follow preset**. Smooth keeps things moving without the bounce, which suits a store where springy feels too casual, and None removes transitions entirely. Visitors who ask their device to reduce motion still get none of it, as before.
- **Collection colours are yours to choose.** The theme used to carry a fixed set of six colours, and a collection picked one of them by name. Those colours were built into the theme, so they were not editable. They are gone. A collection now carries its own colour in a **Color** metafield, `custom.accent_color`, which you create once in **Settings → Custom data → Collections** — see [Collection colours](/docs/guides/collection-colors). Collections with no colour set use your colour scheme's accent, so a store that never sets one still looks deliberate. If you were using the old `custom.family_key` metafield, enter the hex codes you want in the new one; the old field is no longer read.
- **The newsletter block behaves inside a row.** It was taking a whole row to itself even when placed in a horizontal group, and on a phone the email field and button spilled past the edge of the screen. Both are fixed. If you set a **Max width** on it to work around this, you can set it back to 0.
- **Article details can show reading time.** The **Article details** block already showed the date and the author; it now has **Show reading time** as well, so the byline under a post title can be built from one block instead of relying on the page's own settings.

## Unreleased — 2026-08-15

- **Blog card titles, excerpts and dates take the settings every other text block has.** They were the one text family in the theme with no padding of their own, so the only way to space a title away from the picture above it was to change the gap for the whole card. All three now have **Vertical padding** and **Horizontal padding**, and the title also gains **Color**, **Letter spacing** and **Uppercase**, so a card title can be styled like any other heading rather than being stuck with one look.
- **A blog posts or related articles section you add yourself arrives with a real card in it.** The card inside those two sections came in empty, which drew a stand-in built from a picture, a title and an excerpt that could not be reordered and disappeared the moment you added a block of your own. Both sections now bring the full card — picture, tag, date, title, excerpt — as blocks you can reorder, restyle or remove. Sections already on your pages keep what they have; this applies to ones you add from now on.
- **Underlined headings no longer draw over the line below them.** The hand-drawn underline styles (**Wavy**, **Double** and **Brush**) are painted under each line of a heading, but no room was reserved for them, so on a heading long enough to wrap, the squiggle under the first line landed on top of the words in the second. Every heading with a decoration now leaves room for it. A heading that fits on one line will sit very slightly taller than before.
- **The blog sections no longer list a second, invisible card.** Blog posts and Related articles each showed two **Article card** entries in the editor that could not be removed. In Blog posts the second one only ever appeared if the blog you picked had no posts in it yet, so it looked like a duplicate that did nothing; in Related articles both were real, but each owned some of the cards in the grid, so styling one changed only half of them. There is now one card per section, and it governs every card in the grid. The empty case shows a short message instead of a card, the way the blog page already did.
- **Trust badges lay out like a group.** A badge in the trust strip was always a single row with the icon beside the text, so nesting your own blocks inside one gave you no say in how they were arranged. It now has **Layout direction**, **Mobile layout**, **Vertical alignment**, **Distribution** and **Padding**, the same controls a group has — so a badge can stack its icon above its text on a phone and sit side by side on a desktop.

## Unreleased — 2026-08-13c

- **The header can sit on top of the first section.** Until now it always took its own strip of the page, so a picture at the top of a page started underneath it. **Overlay the first section** puts the header over that picture instead, with the logo and menu floating on top of it. It starts on **Never**, so nothing changes until you turn it on, and it works with any scroll behaviour including sticky and hide-on-scroll.
- **You choose which pages it applies to.** **On every page** does exactly that. **Only when the page opens with an image section** leaves the header in its normal place on pages that begin with writing, so the menu never lands on top of a paragraph, and overlays it on the ones that open with a picture.
- **The header gets its own colour scheme while it is overlaying.** A dark photograph usually wants a light logo and menu, which is rarely what the header uses further down the page. **Colour scheme while overlaying** applies only while it is over the first section; scrolling past returns it to its normal scheme. There is also **Shading behind the header** (None / Soft / Strong), a soft gradient that keeps the logo readable over a busy or bright photograph.
- **Full-height sections can ignore the header's height.** A hero set to **Full** height subtracts the header so it ends exactly at the bottom of the screen. **Count this header in full-height sections** lets you turn that off so the hero fills the whole screen instead. It is a separate setting from the overlay one on purpose: you can have a floating header that still shortens the hero, or a normal header that does not.

## Unreleased — 2026-08-13b

- **Pictures can take a different shape on the phone.** The image block's **Aspect ratio** applied at every screen size, so a **Portrait** that looked right beside the writing in an A+ split turned into a very tall slab once the two halves stacked on a phone. **Aspect ratio on mobile** sits beside it and starts on **Same as desktop**, so nothing changes until you pick something else.
- **A card can no longer come out empty.** Product, blog post and collection cards are composed from blocks, and a page layout that was written by hand rather than built in the editor could leave a card with nothing declared inside it, which drew an empty box with no warning. A card in that state now falls back to its picture, title and price so the page still reads, and any block you add replaces the fallback.

## Unreleased — 2026-08-13

- **Carousel navigation is its own block now.** Every carousel in the theme — the hero and promo slideshows, the product, blog post, collection and testimonial carousels, the gallery and the announcement ticker — carries a **Carousel navigation** entry in the editor, nested under the section. Its settings used to be scattered across each section's own panel, or missing entirely. It holds: **Arrows** (Above the carousel / Either side / On the sides over the media / In the corner / Under the carousel beside the dots / None), **Arrows on mobile** with its own copy of those choices, **Show dots**, **Dots position**, **Arrow size**, **Dot size**, and what happens **when there is nothing to scroll**.
- **Arrows can differ between phone and desktop.** Previously the theme hid carousel arrows below 750px in code, with no way to turn them back on — on most sections the only arrangement that showed arrows on a phone was the under-the-carousel row. **Arrows on mobile** defaults to "Same as desktop" and can be set to any position independently.
- **A carousel with nothing to scroll can still show its controls.** When every card already fits, the arrows and dots disappear, which is right for a shopper and confusing when you are setting the section up. **When there is nothing to scroll** switches that between hiding the controls and showing them greyed out.
- **Blog post cards are built from blocks.** A blog card used to be one fixed lump: image on top at a fixed crop, date and author, title, excerpt, in that order, with nothing adjustable. It is now composed the same way a product card is — **Article image**, **Article tag**, **Article meta**, **Article title** and **Article excerpt** are separate blocks you can reorder, remove, restyle or drop other blocks in beside. Image ratio and fit, corner radius, which of date and author show and in what format, the separator between them, title tag and size and line clamp, excerpt length and colour, and where the tag sticker sits and whether it tilts, are all settings now. The card frame itself takes background, padding, border and hover effect. Used by the blog posts section, the blog page and related articles.
- **Collection cards are built from blocks.** Same change for the collection list: **Collection image** and **Collection title** are blocks, with image source (the collection's own photo or its first product's), ratio, fit, padding and radius on the image, and tag, size, alignment, uppercase, letter spacing and an optional product count on the title. Whether the title sits on the tile or below it moved onto the card, where it belongs.
- **A card no longer gets clipped when it lifts on hover.** Inside a carousel the track has to clip horizontally, which also clipped vertically — so a card that rises on hover had its top edge cut off. Every scrolling track now reserves room for the lift.
- **Card carousels have a Slide width on mobile setting.** Blog posts, product, collection and testimonial carousels each had their phone card width fixed in the code. The slider replaces it: anything under 100% leaves a peek of the next card showing, which is what tells a visitor there is more to scroll. Each section's default is the width it already used, so nothing moves until you move it.
- **Product images take a corner radius setting.** The main product image, its zoom pane and the product card image were pinned to the theme's own corner radius with no way to change them. Each now has a radius setting that starts at **Use the theme's radius**, so both styles look exactly as they did until you switch it off and pick a value.
- **One set of arrows and dots across the theme.** The chevron was drawn eight separate times at three different sizes, and the dots had drifted into three different active colours. There is now one definition. Two things you may notice: arrows match in sections where they used to differ by a few pixels, and **Either side of the carousel** now places the arrows just outside the track's edges rather than narrowing the track to make room for them.

## Unreleased — 2026-08-12b

- **Slideshow arrows and dots can sit under the picture.** **Arrows** on the hero slideshow and the promo slideshow has a new **Under the slideshow** option. The back and forward arrows and the dots move off the picture and into one row beneath it, on the section's own background, so nothing covers your photograph and the dots stay readable whatever the photograph is doing. On the promo slideshow this setting takes over where the dots go as well, so the **Dots** setting is hidden while it is on.
- **The dot for the slide you are on doubles as a rotation timer.** When **Rotate** is on, the wide dot fills across as the countdown to the next slide runs, so a visitor can see how long they have to read the slide. Hovering the slideshow or tabbing into it holds the timer where it is, the same pause that already stopped the slides from advancing. With Rotate off the dot is solid, exactly as before, and visitors who have asked their device to reduce motion see the solid dot too.
- **The hero slideshow renders at all.** It was collapsing to nothing on any page it was added to, so the section took up its height and drew none of its slides. Nothing in the theme's own page layouts used it, which is why it went unnoticed.
- **A full width marquee no longer makes the page scroll sideways.** The marquee sized itself to the length of its own scrolling text rather than to the screen, so at **Full** width, which is its default, it ran to roughly twice the width of the window and dragged the whole page with it. **Page** and **Narrow** were unaffected. If you had worked around this by setting a marquee to Page, you can put it back to Full.
- **The image banner fills its width.** It was drawing as a thin strip regardless of the width you chose, because it measured itself against the text inside it instead of the space available.
- **Blog posts can be a carousel on the phone and a grid on the desktop.** A new **Layout on mobile** setting sits under **Layout**: leave it on **Same as desktop** and nothing changes, or set it to **Carousel** while the desktop stays a **Grid**. That is the arrangement you usually want, because three posts side by side already fit a wide screen and there is nothing for a carousel to scroll there.
- **A blog posts carousel no longer draws bullet points beside the cards.** In carousel mode the row of cards kept the browser's own list styling, so each card had a bullet next to it and the whole row sat indented from everything else in the section.
- **Line breaks in a heading are typed as `[br]`, not `<br>`.** The old instruction did not work: Shopify checks a heading field for HTML as you save it and rejects the tag with "Tag '<br>' is not permitted", so the break could only ever be saved in the fields that quietly escaped it. Type `[br]` where you want the line to break and it works in every heading and text field that offers it. Anything you already saved as `<br>` keeps working.
- **Slideshow dots keep their own colours on a page with two slideshows.** The dots are drawn light on the hero slideshow, dark on the promo slideshow, and grey in a blog post carousel. Putting two of those sections on the same page made them fight over one another, so a hero's dots could come out dark against its photograph.

## Unreleased — 2026-08-12

- **Bold headings and bold text are really bold now.** The theme asked the browser for a bolder weight of your chosen font but only ever downloaded the regular file, so the browser drew a fake bold by smearing the regular letters wider. Every display heading in the theme was affected, and so was any bold body text, such as a `<strong>` word or a price. The theme now downloads the bold face of the font you picked, and the italic bold as well where the family has one.
- **A custom font upload declares its own weight.** The **Custom heading font URL** setting used to tell the browser that whatever single file you uploaded covered every weight from thin to black, which is only true of a variable font. Any normal font file was then stretched by the browser to fake the rest. There is now a **Regular weight** setting next to the URL so the file is described honestly, and a second **Custom heading font URL, bold** slot with its own weight for the bold face.
- **Body text takes a custom font too.** **Custom body font URL** is the body-side twin of the heading setting, with the same **Regular weight**, bold URL and bold weight beside it, so a licensed typeface that is not in Shopify's font library can now be used for body copy and not just headings. See [Theme settings](/docs/customization/theme-settings).
- **Buttons, dropdowns and form fields have a visible edge on every colour scheme.** Some borders were drawn in the theme's separator colour, which on several schemes was too faint to see against the background at all, below the contrast level accessibility guidelines set for a control you are meant to click. Others were drawn in the full text colour, which was far heavier than a quiet control wants. Both now use a derived tone that sits between the two: strong enough to see, quiet enough not to shout. This affects secondary buttons, variant dropdowns and swatches, quantity steppers, search suggestion chips, collection price filters, and contact form fields. Dividers and decorative rules are unchanged.
- **The add to cart button has an "Outlined (neutral)" style.** The other three styles all carry your accent colour, so there was no way to make the control genuinely recede rather than just lighten. This one draws the border and label in a neutral tone and fills solid on hover.
- **The split hero has a Media width setting.** The picture used to take a fixed share of the row, slightly more than half. You can now set it anywhere from 30% to 70%. The picture still never grows taller than the hero height you chose, so a tall crop may end up narrower than the share you set, and it now sits against the copy rather than against the page edge when that happens.
- **Blog posts can run as a carousel.** The section gains a **Layout** setting: keep **Grid** for the arrangement it has today, or choose **Carousel** for one row that scrolls, with arrows, dots, and one card per view on a phone.
- **The comparison table fits on a phone.** The three column table it ships with was wider than a narrow phone screen, which pushed the whole thing into a side-scrolling box and took the feature names off screen with it. It now tightens its type and cell padding to fit in place at that width. Wider tables still scroll.
- **A line break works in the comparison table heading and the hero slideshow heading.** Both headings printed the tag on the page as visible text instead of breaking the line. They now behave like the heading block, which got this in the 2026-08-08 round. (The token to type became `[br]` in the round after this one.)
- **Custom icon images stay sharp at larger sizes.** Blocks that let you upload your own icon were capped at a 96 pixel image and told the browser to draw it at 32, so raising the icon size setting produced a blurry icon. The uploaded image now follows the size you set, at double resolution for sharp screens.
- **Spec rows and trust items can be added inside a group.** A label and value row, and an icon with a line of text, were previously only available inside the spec table and trust strip sections. They can now be placed in any group, which is what you want for a short spec ledger inside a hero or a trust row on a product page.

## Unreleased — 2026-08-10

- **Every section takes a Horizontal padding setting.** It sits under Padding with the top and bottom sliders and adds space at the left and right on top of the theme's own **Page margin**. Left at 0 nothing changes anywhere. Set a section's width to **Full** and the page margin goes away, so the slider becomes the whole gutter: leave it at 0 for content that runs edge to edge, or dial in exactly the inset you want.
- **Full width means full width.** A section set to **Full** stretched across the screen but kept the page margin on both sides, and no setting could reach it. Sections whose Full width steps the text up to the page width rather than going edge to edge, such as Rich text and FAQ, keep their margin so body copy never touches the screen edge.
- **A picture no longer decides how tall your hero is.** In the split hero the picture sized itself from the width of its half of the row, so a tall portrait shot could push a hero set to **Full** height to nearly twice the height of the screen. The height you choose now wins and the picture fits inside it.
- **The picture in an A+ split feature shows up on phones.** When the two halves stacked, the picture collapsed to nothing and the section rendered as text alone.
- **The title on a "Full width, title over it" article banner stays on the banner.** It was being placed against the full height of the uncropped photo rather than the banner you see, which on a tall image dropped it hundreds of pixels below the visible strip. The banner also grows now when a long headline needs more room than the crop allows, instead of cutting the title off on a narrow screen.
- **A full-height hero now ends where the screen ends.** **Full** used to mean the height of the browser window, with the announcement bar and the header sitting on top of that, so the bottom of the hero always fell past the fold by their combined height. It now measures the two and takes them off, on the hero and the hero slideshow both. **Large** is taller as well: it was close enough to a laptop screen that Large and Full produced nearly the same picture.
- **Every image on the page carries alt text again.** Around a fifth of the images in the theme were rendering with no alt attribute at all, which is worse than an empty one because a screen reader falls back to reading the file name out loud. Images that have alt text in your Files or product media now use it, and decorative images carry an empty attribute as they should. Where a fallback was meant to fill in (an article's title standing in for a missing image description, for instance) it now actually does.
- **Press and partner logos take alt text.** The logo block in a logo bar has an **Alt text** field. Leave it blank and the image's own alt text from Files is used.
- **Badges have a Hover effect setting.** A badge reacts when you hover the card it sits on. The default, **Follow the card**, keeps what badges do today and adds one thing: a card whose own hover effect is set to None now stays completely still, badges included. **Straighten**, **Pop** and **None** override that for a single badge.
- **The comparison table's heading can colour its italic word.** It gains the same **Italic / marked word colour** setting the heading block has, so the word you italicise there can differ in colour from the rest of the title. It was the one heading in the theme that could not.
- **The article layout "Full width, title over it" works.** The banner was rendering narrower than the page with a bare strip beside it, and the title over it could come out invisible: it took the colour a merchant had set for text on the accent colour, which on a pale accent is dark, and the banner it sat on is dark. The banner is full width now and the title is pinned to the same light-on-scrim colour the hero uses, so no colour scheme can produce dark on dark.
- **Step images can fill their frame.** The step block in How-to steps now has a **Fit** setting next to the image ratio. It stays on **Contain**, which fits the whole picture inside the frame and is right for packshots. Switch it to **Cover** and the photo fills the frame edge to edge, so a row of steps shot at different sizes lines up as even tiles.

## Unreleased — 2026-08-08

- **Headings and text can break a line where you want them to.** Type `<br>` in a heading or a text block and the line breaks there. Shopify's heading field has no line-break button of its own, and typing the tag used to print it on the page as visible text. In a text block, pressing Enter still starts a new paragraph with space around it; the break has no gap around it. (The token to type became `[br]` on 2026-08-12b, because Shopify rejects the tag outright in some fields.)
- **A custom icon can follow your colour scheme.** Every block with a custom icon (icon, feature, trust item, product benefits, delivery estimate) now also takes **Custom icon (SVG code)**. Paste the SVG source instead of uploading a file and the icon is drawn into the page directly, so it takes the block's icon colour and size like the built-in glyphs do. An uploaded image still works and is still used when the code field is empty, but it keeps its own colours. Icons drawn with a fixed colour in their own code keep that colour either way.
- **The footer email field looks like a field again.** It was filled with the footer band's own raised-panel tone, which on the sand scheme left it nearly the same colour as the band behind it. It now uses the same fill as every other input in the theme.
- **Feature icons go up to 96 pixels.** The size slider on a feature stopped at 56, which was small for a row of four across a wide screen.
- **The promo popup is off on a new install.** It shipped switched on with demo wording, so a store that had not touched it showed a discount popup a few seconds after the page loaded. Turn it on under Overlays when you have written your own offer.
- **The before/after slider clips its labels as you drag.** Sliding the divider across a label now cuts into the text instead of passing underneath it, the handle arrows spread apart when you hover or focus the slider, and a new **Label position** setting puts the labels at the top or the bottom.
- **Italic text in a heading can take its own colour.** The heading block has a new **Italic / marked word colour**. With the Highlight or Circled word decoration this colours the word you italicised to mark; with any other decoration, or none at all, it colours plain italic text. Left at **Same as heading** nothing changes.
- **The footer takes an image block.** Add one to put a payment-methods strip, a trust seal, or a certification logo in the footer itself, with its own optional column title, a width, and an optional link. Previously the only footer image was the logo in the brand block, so anything else had to be a separate section underneath the footer, where it did not line up with the footer's own margins.
- **Payment icons no longer leave an empty gap.** If your store takes payment through a provider Shopify does not draw an icon for, turning **Show payment icons** on used to reserve the space and show nothing. It now shows nothing at all, and the footer closes up.
- **The newsletter signup button label can be changed.** The footer newsletter block has a **Button label** field; leave it blank to keep the translated default.
- **The footer newsletter can run its own colour scheme.** Turn on **Use a different colour scheme** on the newsletter block to lift the signup out of the footer's palette, the same opt-in the group and button blocks already have.
- **The announcement bar can rotate every 2 seconds.** The slowest-to-fastest range used to stop at 3.
- **Three new typography settings let you override the default fonts.** Theme settings → Typography now has **Heading font** and **Body font** (pick from Shopify's font library) and **Custom heading font URL** (for a licensed font that is not in the library). All three default to no change: Infuse keeps its self-hosted display font, Utility keeps its system monospace stack, and existing stores download exactly what they downloaded before. A custom heading font URL takes over from Heading font for what is shown, but Heading font is still used as the fallback face while it loads. See [Theme settings](/docs/customization/theme-settings).

## Unreleased — 2026-08-07

- **Section settings are organised into the same groups everywhere**: content first, then Layout, Appearance, Spacing, Padding, and Advanced. Every section in the theme follows this order now, so once you have opened one you know your way around the rest.
- **Six more blocks and the header can carry their own colour scheme**: testimonial, feature, trust item, step, UGC item and hotspot image. Turn on **Use a different colour scheme** and pick one; leave it off and the block keeps following the section around it, so nothing changes unless you ask it to.
- **Section width** is now a setting on ten sections that did not have one: hero, hero slideshow, image banner, video, marquee, promo bar, featured product, product anchors, contact, and custom Liquid. Choose narrow, page, or full on each.
- **Section padding** reaches five more sections — contact, footer, announcement bar, hero slideshow, and the header — and every padding control in the theme now shares one range, 0 to 100 pixels.
- **New style controls on eight blocks.** Product meta gets a size and a colour. Stock counter and the price block's sale colour get a colour setting. Quantity gets a size, a colour, and padding. Button gets a colour scheme override. Hotspot image gets a corner radius. Variant picker gets a gap and padding.
- **One name for image ratio everywhere.** Every block that crops an image now calls the setting **Ratio** with the same four choices — Adapt, Square, Portrait, Landscape — instead of a different name and a slightly different option list per block.
- **Copy over a scrim always stays readable.** A hero slide, image banner, or gallery caption sitting on a darkened image keeps light text and outlines regardless of which colour scheme the section uses. Picking the dark scheme on a hero slideshow used to render dark text on a dark scrim, which was unreadable.
- **Alignment settings are ready for right-to-left languages.** They describe start and end rather than left and right under the hood. Nothing changes for an English or Turkish store today.
- **Back to top** is a new section: a link back to the top of the page once a visitor has scrolled down. Four styles (pill, soft, outline, or a labelled button), either side of the screen, and no JavaScript involved.
- **Age verifier** is a new section for stores that need to check a visitor's age before they can shop. It opens as a dialog the moment the page loads and cannot be closed without answering. Compose the message from your own heading, text, and image blocks, choose a simple yes/no question or a date-of-birth check, set the minimum age, choose where a "no" answer sends the visitor, and decide how many days an answer is remembered before asking again.
- **A whole image card can become one link.** Give a group a background image and a link, turn on **Make the whole card a link**, and the entire card becomes a single click target. A button inside the card still works on its own, and the card is one stop for a keyboard, not several.
- **One hover vocabulary across image blocks.** Image, group, product card, product image, and logo blocks all now offer hover effects from the same list — none, zoom, lift, grayscale, or (on the product image block) swap to a second photo — with each block offering only the ones that make sense for it. Zoom now grows the image inside its own frame instead of spilling over whatever sits next to it. Product cards keep their lift and logos keep their colour-to-grayscale reveal by default, and both can be turned off. Every effect except grayscale switches off for visitors who have asked their device to reduce motion.

## Unreleased — 2026-08-01

- **The add-to-cart button has a style setting**: a label, an icon on its own, or both. Icon only shrinks to a compact 44 by 44 button instead of stretching across the card, so it sits beside the price rather than under it. It always announces the product name to a screen reader, so a grid of them does not read as "button" over and over.
- Shopping bag and plus are now part of the icon set, so the add-to-cart icon and the quick-add button draw the same bag.
- **Product cards on the home page and collection pages show a trust row**: easy refund, safe payment and fast shipment, three across on desktop and stacked on a phone. Built from icon and text blocks inside a grid group, so you can reword them, swap the icons, or take the row out.
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
