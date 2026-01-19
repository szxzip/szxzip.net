import type { SupportedLocale } from '@/i18n/locales'

export interface ThemeConfig {
  site: SiteConfig
}

export interface SiteConfig {
  author: string
  description: string
  website: string
  title: string
  subtitle: string
  rss?: {
    fullText?: boolean
  }
  socialLinks: SocialLink[]
  navigationLinks: NavigationLink[]
  locale: SupportedLocale
}

export interface SocialLink {
  title: string
  url: string
  icon: string
}

export interface NavigationLink {
  title: string
  url: string
}
