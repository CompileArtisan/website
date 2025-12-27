// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://compileartisan.dev',
  adapter: cloudflare(),
    integrations: [mdx(), sitemap(), react()],
  content: {
    collections: {
      blog: "./src/content/blog",
    },
  },
});
