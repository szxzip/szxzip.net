export interface ThemeConfig {
  site: SiteConfig

}

export interface SiteConfig {
  author: string
  description: string
  website: string
  title: string
  subtitle: string
  socialLinks: SocialLink[]
  navigationLinks: NavigationLink[]
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
