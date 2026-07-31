---
title: Blog posts
description: Which HTML elements Infuse styles in a post or page body, and the settings that control the article layout.
path: /docs/guides/blog-posts
---

# Blog posts

Two things decide how a post looks: the HTML you write in the body, and the settings on the Article section. This page covers both. The body rules apply to pages too, so a legal page or an About page gets the same treatment.

## What you can put in a post

Everything below is styled from your colour scheme and type scale, so it restyles with the rest of the store when you switch style or edit a scheme. Write plain HTML in the Shopify editor's code view.

**Headings.** `h2`, `h3` and `h4` sit on the same scale as a Heading block, so a heading pasted into a post matches one placed in a section. Start at `h2` — the post title is already the `h1`.

**Text.** Paragraphs, links, `strong`, `em`, and lists including nested ones.

**Tables.** Comparison tables are the reason most people ask. A table that fits stays at its natural width, aligned with the text. A wide one scrolls sideways inside itself rather than pushing the page out, so phones are safe.

```html
<table>
  <thead><tr><th>Tea</th><th>Water</th><th>Time</th></tr></thead>
  <tbody>
    <tr><td>Green</td><td>80 °C</td><td>2 min</td></tr>
    <tr><td>Black</td><td>100 °C</td><td>3–5 min</td></tr>
  </tbody>
</table>
```

**Expandable questions.** A `details` element gives you a click-to-open row with no JavaScript, the same behaviour as an FAQ section but inside your copy.

```html
<details>
  <summary>Does chamomile have caffeine?</summary>
  <p>Pure chamomile does not.</p>
</details>
```

**Quotes.** A `blockquote` gets an accent rule down its side and the heading typeface in italic. It stays in your body text colour rather than the accent colour, so a long quote is as readable as the rest of the post.

**Images.** A `figure` is full width and takes an optional `figcaption`. On wide screens it extends a little past the text column, which is what stops a long post reading as one thin strip.

An `aside` is half width and text wraps around it. Several in a row alternate sides on their own, so you do not choose a side. Below roughly 700px they go full width and sit in the flow.

```html
<figure>
  <img src="…" alt="Steeping a stick">
  <figcaption>Thirty seconds in.</figcaption>
</figure>

<aside><img src="…" alt="The mesh up close"></aside>
<p>This paragraph wraps around the image above on a desktop screen.</p>
```

**Section breaks.** An `hr` draws a hairline in your scheme's line colour.

## Article settings

Open a blog post in the theme editor and select the **Article** section.

### Layout

**Content width** sets the reading column: narrow, standard or wide. Standard is the default and suits most posts. Wide is there for specs and legal text, not for making a post feel fuller — a longer line is harder to read, and images already extend past the column on their own.

**Featured image** is either full width across the top of the page, or contained inside the reading column.

### Table of contents

Built from the headings already in your post, so there is nothing to maintain. It needs at least two headings to appear.

**Position** puts it beside the article, above it, or turns it off. Beside the article is the default: it sits in the margin next to your text and highlights the section being read. On narrower screens it becomes a card above the post automatically, so you do not need a second setting for phones.

**Include** chooses main headings only, or main and sub headings.

### Article details

Individual toggles for the author, date, reading time, tags and share links. Turn off what you do not use.

## Related reads

This is its own section, sitting under the Article section in the theme editor, so you can move it, restyle it or remove it like any other. Its heading is a Heading block, so it takes the same decoration and size settings as every other section heading.

Posts sharing a tag with the one being read come first, then the most recent fill the rest. Settings cover how many to show, how many columns, whether cards carry a summary and a category chip, and the usual width, spacing and colour scheme.

It renders nothing when there is nothing to show, so a blog with a single post is safe to leave it in.

## Notes

Headings need no ids or anchors — the contents list adds them. Turkish and other non-English headings work: the link targets are generated from the actual characters, so two headings that differ only in accented letters stay distinct.

If a visitor has JavaScript turned off, the contents list does not appear and the post is otherwise unchanged.
