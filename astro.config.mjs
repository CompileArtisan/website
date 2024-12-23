// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  integrations: [mdx()], // Add the MDX integration
  content: {
    collections: {
      blog: './src/content/blog', // Define the path for the "blog" collection
    },
  },
});
