import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import robotsTxt from 'astro-robots-txt'

import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  // The base URL of the site
  site: 'https://typography.moeyua.com/',
  // The base path of the site
  base: '/',
  prefetch: true,
  integrations: [robotsTxt(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
