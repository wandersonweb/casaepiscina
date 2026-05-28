import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    permalink: z.string(),
    canonical: z.string().url(),
    date: z.coerce.date(),
    image: z.string(),
    alt: z.string(),
    category: z.string(),
    city: z.string().optional(),
  }),
});

export const collections = { posts };
