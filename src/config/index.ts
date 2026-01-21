import type { ThemeConfig } from './types'

export * from './types'

export function defineThemeConfig(config: ThemeConfig) {
  if (!config) {
    throw new Error('Theme config is required')
  }
  return config
}
