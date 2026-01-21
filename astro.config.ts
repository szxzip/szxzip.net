import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import sonda from 'sonda/astro'

// https://astro.build/config
export default defineConfig({
  // [TODO] The base URL of the site
  site: 'https://typography.moeyua.com/',
  // [TODO] The base path of the site
  base: '/',
  prefetch: true,
  integrations: [
    robotsTxt(),
    sitemap(),
    mdx(),
    partytown({ config: { forward: ['dataLayer.push', 'gtag', 'twikoo.init'] } }),
    sonda({ enabled: false }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  vite: {
    build: {
      sourcemap: false,
    },
    plugins: [tailwindcss()],
  },
})
