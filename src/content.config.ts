import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/contents/post' }),
  schema: z.object({
    title: z.string(),
    published: z.date(),
    description: z.string().optional().default(''),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
  }),
})

const specs = defineCollection({})

export const collections = { posts, specs }
