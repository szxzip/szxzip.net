import type { SupportedLocale } from '@/i18n/locales'

export interface ThemeConfig {
  site: SiteConfig
  feeds: FeedConfig
  seo: SeoConfig
  latex: LatexConfig
  comment: CommentConfig
  analytics: AnalyticsConfig
  appearance: AppearanceConfig
}

export interface SiteConfig {
  title: string
  subtitle: string
  description: string
  author: string
  socialLinks: SocialLink[]
  navigationLinks: NavigationLink[]
  locale: SupportedLocale
  website: string
}

export interface FeedConfig {
  rss: {
    fullText: boolean
  }
}

export interface SeoConfig {
  twitter: {
    username: string
  }
}

export interface LatexConfig {
  provider?: 'katex'
}

export interface CommentConfig {
  provider: 'giscus' | 'twikoo' | 'disqus' | 'none'
  disqus?: {
    shortname: string
  }
  twikoo?: {
    envId: string
    region?: string
    lang?: string
  }
  giscus?: {
    scriptUrl?: string
    repo: string
    repoId?: string
    category?: string
    categoryId?: string
    mapping?: string
    term?: string
    strict: string
    reactionsEnabled: string
    emitMetadata: string
    inputPosition: string
    theme: string
    lang: string
    loading: string
  }
}

export interface AnalyticsConfig {
  provider: 'google' | 'umami' | 'none'
  google?: {
    measurementId: string
  }
  umami?: {
    websiteId: string
    scriptUrl?: string
  }
}

export interface AppearanceConfig {
  theme: 'auto' | 'light' | 'dark'
  colors: {
    dark: ColorScheme
    light: ColorScheme
  }
  font?: {
    body?: string
    heading?: string
    mono?: string
  }
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

export interface ColorScheme {
  primary: string
  secondary: string
  accent: string
  neutral: string
}
