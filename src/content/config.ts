import { defineCollection, z } from 'astro:content';

const lessons = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    title: z.string(),
    subtitle: z.string(),
    part: z.string(),
    takeaway: z.string(),
    duration: z.string().default('6 min'),
  }),
});

export const collections = { lessons };
