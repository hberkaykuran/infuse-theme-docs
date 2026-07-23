import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Prose docs (guides, getting-started, changelog, faq). Reference pages and the
// support form are plain .astro pages, not part of this collection.
const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    // Base-relative route, matches an entry in src/nav.js (drives sidebar highlight).
    path: z.string(),
  }),
});

export const collections = { docs };
