// Generates the Sections and Blocks reference data from the theme repo's
// capability-catalog.json, so the docs always match the real theme schemas.
// Ported from the old site/build.mjs generation logic.
//
//   node scripts/sync-reference.mjs
//
// Output: src/data/sections.json + src/data/blocks.json (committed).
// Never hand-edit those files; re-run this after the theme schema changes.
// Cross-links are emitted as structured tokens ({text,page,anchor}); the Astro
// pages turn them into base-aware hrefs — this script stays URL-agnostic.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const CATALOG = join(HERE, '..', '..', 'shopify-theme', 'docs', 'capability-catalog.json');
const OUT_DIR = join(HERE, '..', 'src', 'data');

const catalog = JSON.parse(readFileSync(CATALOG, 'utf8'));

const slugId = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Plain-language description for a setting with no info text of its own.
function plainType(s) {
  switch (s.type) {
    case 'text': case 'textarea': case 'inline_richtext': case 'richtext': return 'Text you type in.';
    case 'url': return 'A link to a page, product, or collection.';
    case 'range': return 'A slider.';
    case 'checkbox': return 'An on / off switch.';
    case 'select': return 'Choose one option.';
    case 'text_alignment': return 'Left, center, or right alignment.';
    case 'color': case 'color_background': return 'A colour picker.';
    case 'color_scheme': return 'Picks which colour scheme this section uses.';
    case 'image_picker': return 'An image you upload or pick from files.';
    case 'video': return 'A video hosted on Shopify.';
    case 'video_url': return 'A YouTube or Vimeo link.';
    case 'collection': return 'Pick one collection.';
    case 'collection_list': return 'Pick several collections.';
    case 'product': return 'Pick one product.';
    case 'product_list': return 'Pick several products.';
    case 'blog': return 'Pick a blog.';
    case 'page': return 'Pick a page.';
    case 'link_list': return 'Pick a navigation menu.';
    case 'liquid': return 'Custom Liquid code, for advanced use.';
    default: return 'A setting.';
  }
}

function settings(list) {
  if (!list || !list.length) return [];
  return list.map((s) => ({
    label: s.label || s.id,
    desc: s.info ? s.info : plainType(s),
    options: s.type === 'select' && s.options ? s.options.map((o) => o.label) : null,
  }));
}

const KNOWN_BLOCKS = new Set(catalog.blocks.map((b) => b.name));
const KNOWN_SECTIONS = new Set(catalog.sections.map((s) => s.name));

// Cross-reference token: {text} plain | {text,code} | {text,page,anchor} link.
function hostLink(name) {
  if (KNOWN_BLOCKS.has(name)) return { text: name, page: 'blocks', anchor: slugId(name) };
  if (KNOWN_SECTIONS.has(name)) return { text: name, page: 'sections', anchor: slugId(name) };
  return { text: name, code: true };
}
function blockRef(name) {
  if (name === '@theme') return { text: 'any content block' };
  if (name === '@app') return { text: 'app blocks' };
  if (KNOWN_BLOCKS.has(name)) return { text: name, page: 'blocks', anchor: slugId(name) };
  return { text: name, code: true };
}

const CAT_LABELS = {
  Header: 'Header and announcement bar',
  Banners: 'Hero and banner sections',
  Collections: 'Collection sections',
  Products: 'Product sections',
  Storytelling: 'Storytelling and social proof',
  Text: 'Text and content sections',
  Layout: 'Layout and structure sections',
  Forms: 'Form sections',
  Footer: 'Footer',
};
const CAT_ORDER = ['Header', 'Banners', 'Collections', 'Products', 'Storytelling', 'Text', 'Layout', 'Forms', 'Footer'];

function sectionCard(s) {
  const meta = [];
  if (s.layout_variants && s.layout_variants.length)
    meta.push({ label: 'Layouts', items: s.layout_variants.map((v) => ({ text: v })) });
  if (s.accepted_blocks && s.accepted_blocks.length)
    meta.push({ label: 'Add inside', items: s.accepted_blocks.map(blockRef) });
  if (s.presets && s.presets.length)
    meta.push({ label: 'Presets', items: s.presets.map((p) => ({ text: p.name })) });
  return { name: s.schema_name || s.name, sysname: s.name, id: slugId(s.name), meta, settings: settings(s.settings) };
}

function sectionsData() {
  const addable = catalog.sections.filter((s) => s.addable !== false);
  const byCat = {};
  for (const s of addable) {
    const cat = (s.picker_categories && s.picker_categories[0]) || 'Header';
    (byCat[cat] ||= []).push(s);
  }
  const groups = [];
  for (const cat of CAT_ORDER) {
    if (!byCat[cat]) continue;
    const list = byCat[cat].sort((a, b) => (a.schema_name || a.name).localeCompare(b.schema_name || b.name));
    groups.push({ id: slugId(cat), label: CAT_LABELS[cat] || cat, cards: list.map(sectionCard) });
  }
  const builtin = catalog.sections.filter((s) => s.addable === false)
    .sort((a, b) => (a.schema_name || a.name).localeCompare(b.schema_name || b.name));
  groups.push({
    id: 'builtin',
    label: 'Built-in page sections',
    note: 'These sections are part of specific page templates (the product page, cart, collection, header, footer, and account pages). You do not add them by hand. You edit their settings on the template where they appear.',
    cards: builtin.map(sectionCard),
  });
  return { addableCount: addable.length, groups };
}

const BLOCK_GROUPS = [
  ['Layout and text', 'The core building blocks you drop into almost any section.',
    ['heading', 'text', 'label', 'button', 'icon', 'image', 'group']],
  ['Product and commerce', 'Blocks for product pages and product cards: the buy area, pricing, variants, stock, and delivery.',
    ['product-card', 'product-title', 'product-image', 'product-meta', 'product-benefits', 'product-description',
      'product-details', 'price', 'sale-badge', 'buy-buttons', 'variant-picker', 'quantity',
      'stock-counter', 'delivery-estimate', 'size-chart', 'spec-row']],
  ['Reviews and social proof', 'Blocks that show ratings, customer photos, and trust signals.',
    ['testimonial', 'review-photos', 'trust-item', 'ugc-item']],
  ['Media and section content', 'Blocks used to fill specific storytelling sections.',
    ['feature', 'step', 'accordion', 'hero-slide', 'logo', 'image-compare', 'video']],
];

function blockCard(b) {
  const meta = [];
  if (b.layout_variants && b.layout_variants.length)
    meta.push({ label: 'Styles', items: b.layout_variants.map((v) => ({ text: v })) });
  const isPickable = b.addable !== false && !b.name.startsWith('_');
  const homes = [];
  if (b.accepted_by && b.accepted_by.length) homes.push(...b.accepted_by.map(hostLink));
  if (isPickable && b.accepted_via_theme && b.accepted_via_theme.length) homes.push({ text: 'most sections that accept content' });
  if (homes.length) meta.push({ label: 'Where it works', items: homes });
  if (!isPickable && !homes.length)
    meta.push({ label: 'Where it works', items: [{ text: b.addable === false ? 'Built into the header. You cannot add this block manually.' : 'Only addable inside its parent block.' }] });
  if (b.accepted_blocks && b.accepted_blocks.length)
    meta.push({ label: 'Nest inside it', items: b.accepted_blocks.map(blockRef) });
  return { name: b.schema_name || b.name, sysname: b.name, id: slugId(b.name), meta, settings: settings(b.settings) };
}

function blocksData() {
  const grouped = new Set();
  const groups = [];
  for (const [title, blurb, names] of BLOCK_GROUPS) {
    const list = names.map((n) => catalog.blocks.find((b) => b.name === n)).filter(Boolean);
    list.forEach((b) => grouped.add(b.name));
    groups.push({ id: slugId(title), label: title, note: blurb, cards: list.map(blockCard) });
  }
  const rest = catalog.blocks.filter((b) => !grouped.has(b.name))
    .sort((a, b) => (a.schema_name || a.name).localeCompare(b.schema_name || b.name));
  if (rest.length) groups.push({ id: 'other', label: 'Other blocks', cards: rest.map(blockCard) });
  return { total: catalog.blocks.length, groups };
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, 'sections.json'), JSON.stringify(sectionsData(), null, 2) + '\n');
writeFileSync(join(OUT_DIR, 'blocks.json'), JSON.stringify(blocksData(), null, 2) + '\n');
console.log(`Synced reference from ${catalog.section_count} sections + ${catalog.block_count} blocks.`);
