// Single source of truth for the docs IA: drives the sidebar nav AND the
// /docs home cards. Paths are base-relative (no leading base); helpers in the
// layout prepend import.meta.env.BASE_URL.

export const docsNav = [
  {
    title: 'Getting started',
    blurb: 'Install Infuse, pick a style, and build your first page.',
    items: [
      { path: '/docs/getting-started/installation', label: 'Installation' },
      { path: '/docs/getting-started/quick-start', label: 'Quick start' },
    ],
  },
  {
    title: 'Customization',
    blurb: 'Store-wide theme settings and the two built-in styles.',
    items: [
      { path: '/docs/customization/theme-settings', label: 'Theme settings' },
      { path: '/docs/customization/presets', label: 'Styles (Infuse & Utility)' },
    ],
  },
  {
    title: 'Reference',
    blurb: 'Every section and block, generated from the theme schemas.',
    items: [
      { path: '/docs/reference/sections', label: 'Sections' },
      { path: '/docs/reference/blocks', label: 'Blocks' },
    ],
  },
  {
    title: 'Guides',
    blurb: 'Badge your products, style your blog, and translate your store into more languages.',
    items: [
      { path: '/docs/guides/product-badges', label: 'Product badges' },
      { path: '/docs/guides/collection-colors', label: 'Collection colours' },
      { path: '/docs/guides/blog-posts', label: 'Blog posts' },
      { path: '/docs/guides/hover-effects', label: 'Hover effects and clickable cards' },
      { path: '/docs/guides/age-verifier', label: 'Age verifier' },
      { path: '/docs/guides/localization', label: 'Localization' },
    ],
  },
  {
    title: 'Help',
    blurb: 'Common questions and how to reach support.',
    items: [
      { path: '/docs/help/faq', label: 'FAQ' },
      { path: '/docs/help/support', label: 'Support' },
    ],
  },
  {
    title: 'Changelog',
    blurb: 'Notable changes to the Infuse theme.',
    items: [
      { path: '/docs/changelog', label: 'Changelog' },
    ],
  },
];

// Base-aware href for a base-relative path.
export function withBase(path) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + path;
}

// Flat reading order (drives prev/next pager + breadcrumb group lookup).
const flat = docsNav.flatMap((g) => g.items.map((it) => ({ ...it, group: g.title })));

// prev/next cards for a page path. Null on the docs home or unknown paths.
export function pager(path) {
  const i = flat.findIndex((it) => it.path === path);
  if (i === -1) return { prev: null, next: null };
  return { prev: flat[i - 1] || null, next: flat[i + 1] || null };
}

// Breadcrumb trail: ['Docs', group, page] — group/page omitted if not found.
export function crumb(path) {
  const hit = flat.find((it) => it.path === path);
  return hit ? ['Docs', hit.group, hit.label] : ['Docs'];
}
