import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({ });

const home = defineCollection({
  type: 'content',
  schema: z.object({
    label: z.string(),
    title: z.string(),
    order: z.number(),
  }),
});

export const collections = { blog, home };
