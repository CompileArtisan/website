import { defineCollection, z } from 'astro:content';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');

  return rss({
    title: "Praanesh's Website",
    description: 'Here is my RSS Feed',
    site: context.site || 'https://compileartisan.pages.dev',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      // In Astro 2.0+, RSS expects this link format for items
      link: `/blog/${post.slug}/`,
      // Adding raw markdown content
      content: post.body,
    })),
    customData: `<language>en-us</language>`,
  });
}
