import { defineConfig } from 'astro/config';

const BASE = '/infuse-theme-docs';

// Prepend the GitHub Pages base to root-relative links/images inside Markdown.
// Astro rewrites base for .astro assets but NOT for authored Markdown hrefs, so
// a plain [text](/docs/x) would break on Pages — this fixes them all in one place.
// Manual hast walk to avoid pulling in unist-util-visit.
function rehypeBaseLinks() {
  const attr = { a: 'href', img: 'src' };
  const walk = (node) => {
    const key = attr[node.tagName];
    const val = node.properties && node.properties[key];
    if (typeof val === 'string' && val.startsWith('/') && !val.startsWith('//') && !val.startsWith(BASE + '/')) {
      node.properties[key] = BASE + val;
    }
    if (node.children) node.children.forEach(walk);
  };
  return (tree) => tree.children.forEach(walk);
}

export default defineConfig({
  site: 'https://hberkaykuran.github.io',
  base: BASE,
  output: 'static',
  trailingSlash: 'ignore',
  markdown: {
    rehypePlugins: [rehypeBaseLinks],
  },
});
