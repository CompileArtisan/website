// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  integrations: [mdx()],
  content: {
    collections: {
      blog: './src/content/blog',
    },
  }
});
