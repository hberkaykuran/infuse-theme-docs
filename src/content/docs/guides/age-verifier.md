---
title: Age verifier
description: Block your store behind an age check, built from your own heading, text and image blocks.
path: /docs/guides/age-verifier
---

# Age verifier

The **Age verifier** section shows a dialog the moment a page loads and does not let a visitor through until they confirm their age. Add it to any template — most stores put it on every page, or at least the ones that matter, such as the homepage and product pages.

## How it behaves

The dialog opens immediately, before a visitor sees anything else. There is no delay setting. It cannot be closed by pressing Escape or clicking outside it: the only way past it is to answer.

- Answering "no" (or entering a date of birth below the minimum age) sends the visitor to the page you set in **Where "no" goes**.
- Answering "yes" (or a date of birth at or above the minimum) closes the dialog and lets the visitor shop.
- Once a visitor has answered, the theme remembers for the number of days you set in **Remember answer for**, so they are not asked again on every visit.

## Composing the message

The wording, heading and any image are yours: add **Heading**, **Text**, and **Image** blocks inside the section the same way you would inside any other section. There is nothing fixed about the copy, so you can word the question and the warning however your market requires.

## Settings

**Confirmation type** chooses how a visitor answers:

- **Yes / no** — a simple confirmation.
- **Date of birth** — a native date field. The visitor's answer is checked against **Minimum age**, which you can set anywhere from 13 to 25. This is what to use if your market's legal age is not 18 (spirits markets often require 21, and some regions set it lower).

**Where "no" goes** is the URL a visitor lands on after declining or failing the date check. Point it at an external page, or a page on your own store explaining why they cannot enter.

**Remember answer for** is measured in days, from 1 to 90. A longer window means fewer repeat prompts for returning visitors; a shorter one re-checks more often.

## Notes

- The dialog is not dismissible on purpose. If you want a softer, closable prompt instead, that is a different pattern — a [popup](/docs/reference/sections) built from the promo popup section, not this one.
- Because the age check runs in the visitor's browser, treat it as a courtesy gate rather than a legal compliance guarantee for regulated products. Check the requirements for your market and product category.
