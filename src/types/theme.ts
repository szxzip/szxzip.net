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
  name: string
  href: string
}

export interface NavigationLink {
  name: string
  href: string
}
