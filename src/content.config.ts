// import { rssSchema } from '@astrojs/rss'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/contents/posts' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string().optional().default(''),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
    pinned: z.boolean().optional().default(false),
    slug: z.string().optional(),
  }),
})

export const collections = { posts }
