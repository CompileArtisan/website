import { defineCollection, z } from 'astro:content';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { marked } from 'marked'; // Import a markdown parser

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: "Praanesh's Website",
    description: 'Here is my RSS Feed',
    site: 'https://compileartisan.pages.dev',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `https://compileartisan.pages.dev/blog/${post.slug}/`,
      content: marked.parse(post.body),
    })),
    customData: `<language>en-us</language>`,
  });
}
