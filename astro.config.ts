import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { themeConfig } from '@/theme.config'

// https://astro.build/config
export default defineConfig({
  site: themeConfig.site.website,
  prefetch: true,
  base: '/',
  integrations: [
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
