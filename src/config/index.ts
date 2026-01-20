import type { ThemeConfig } from './types'
import { site } from 'astro:config/client'

export * from './types'

export function defineThemeConfig(config: ThemeConfig) {
  if (!config) {
    throw new Error('Theme config is required')
  }
  if (!site) {
    throw new Error('Site config is required')
  }

  config.site.website = site
  return config
}
