import type { SupportedLocale } from '@/i18n/locales'

export interface ThemeConfig {
  site: SiteConfig
  feeds: FeedConfig
  seo: SeoConfig
}

export interface SiteConfig {
  title: string
  subtitle: string
  description: string
  author: string
  socialLinks: SocialLink[]
  navigationLinks: NavigationLink[]
  locale: SupportedLocale
  website?: string
}

export interface FeedConfig {
  rss?: {
    fullText?: boolean
  }
}

export interface SeoConfig {
  twitter?: {
    username: string
  }
}

// interface ServicesConfig {
//   comments?: {
//     provider?: 'giscus' | 'disqus' | 'utterances' | 'none'
//   }
//   analytics?: {
//     provider?: 'none' | 'ga' | 'plausible' | 'umami'
//   }
// }

// export interface AppearanceConfig {
//   darkMode?: 'auto' | 'light' | 'dark'
//   font?: {
//     body?: string
//     heading?: string
//     mono?: string
//   }
// }

export interface SocialLink {
  title: string
  url: string
  icon: string
}

export interface NavigationLink {
  title: string
  url: string
}
