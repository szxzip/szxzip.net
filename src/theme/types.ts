import type { Props as AstroSeoProps } from 'astro-seo'
import type { SupportedLocale } from '@/i18n/locales'

export interface ThemeConfig {
  site: SiteConfig
  theme?: AppearanceConfig
  content?: ContentConfig
  feeds?: FeedConfig
  services?: ServicesConfig
  experimental?: ExperimentalConfig
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

export interface FeedConfig {
  rss?: {
    fullText?: boolean
  }
}

export interface SeoConfig extends AstroSeoProps {}

interface ServicesConfig {
  comments?: {
    provider?: 'giscus' | 'disqus' | 'utterances' | 'none'
  }
  analytics?: {
    provider?: 'none' | 'ga' | 'plausible' | 'umami'
  }
}

export interface AppearanceConfig {
  darkMode?: 'auto' | 'light' | 'dark'
  font?: {
    body?: string
    heading?: string
    mono?: string
  }
}

interface ContentConfig {
  mdx?: {
    enabled?: boolean
  }
  latex?: {
    enabled?: boolean
    engine?: 'katex' | 'mathjax'
  }
}

export interface ExperimentalConfig {}

export interface SocialLink {
  title: string
  url: string
  icon: string
}

export interface NavigationLink {
  title: string
  url: string
}
