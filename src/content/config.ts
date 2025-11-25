import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';

const blog = defineCollection({ });

export const collections = { blog };
