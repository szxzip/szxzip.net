import type { AvailableLanguage, BooleanString, InputPosition, Loading, Mapping, Repo, Theme } from 'giscus'
import type { SupportedLocale } from '@/i18n/locales'

export interface ThemeConfig {
  site: SiteConfig
  feeds: FeedConfig
  seo: SeoConfig
  latex: LatexConfig
  comment: CommentConfig
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
    repo: Repo
    repoId?: string
    category?: string
    categoryId?: string
    mapping?: Mapping
    term?: string
    strict: BooleanString
    reactionsEnabled: BooleanString
    emitMetadata: BooleanString
    inputPosition: InputPosition
    theme: Theme
    lang: AvailableLanguage
    loading: Loading
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
