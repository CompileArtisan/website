import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

const home = defineCollection({
  type: 'content_layer',
  schema: z.object({
    label: z.string(),
    title: z.string(),
    order: z.number(),
  }),
});

export const collections = { blog, home };
