import type { SupportedLocale } from '@/i18n/locales'

export interface ThemeConfig {
  site: SiteConfig
  theme?: ThemeSettings
  content?: ContentSettings
  feeds?: FeedSettings
  services?: ServicesSettings
  experimental?: ExperimentalSettings
}

export interface SiteConfig {
  author: string
  description: string
  website: string
  title: string
  subtitle: string
  socialLinks: SocialLink[]
  navigationLinks: NavigationLink[]
  locale: SupportedLocale
}

export interface ThemeSettings {
  darkMode?: 'auto' | 'light' | 'dark'
  font?: {
    body?: string
    heading?: string
    mono?: string
  }
}

export interface ContentSettings {
  mdx?: {
    enabled?: boolean
  }
  latex?: {
    enabled?: boolean
    engine?: 'katex' | 'mathjax'
  }
}

export interface FeedSettings {
  rss?: {
    fullText?: boolean
  }
}

export interface ServicesSettings {
  comments?: {
    provider?: 'giscus' | 'disqus' | 'utterances' | 'none'
  }
  analytics?: {
    provider?: 'none' | 'ga' | 'plausible' | 'umami'
  }
}

export interface ExperimentalSettings {}

export interface SocialLink {
  title: string
  url: string
  icon: string
}

export interface NavigationLink {
  title: string
  url: string
}
