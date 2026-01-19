import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { themeConfig } from '@/theme.config'

// https://astro.build/config
export default defineConfig({
  site: themeConfig.site.website,
  integrations: [
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
