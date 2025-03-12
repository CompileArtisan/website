import rss from '@astrojs/rss';

export function GET() {
  const blogPosts = Object.values(import.meta.glob('../content/blog/*.md', { eager: true }));
  return rss({
    title: 'Praanesh’s Website',
    description: 'Here is my RSS Feed',
    site: 'https://compileartisan.pages.dev',
    items: blogPosts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
    })),
    customData: `<language>en-us</language>`,
  });
}
