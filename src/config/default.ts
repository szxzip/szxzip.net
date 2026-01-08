import type { SiteConfig, ThemeConfig } from '@/types/theme'

const siteConfig: SiteConfig = {
  author: 'Moeyua',
  description: 'Rediscory the beauty of typography',
  website: 'https://typography.moeyua.com/',
  title: '講評世界',
  subtitle: 'Typography',
  socialLinks: [
    {
      name: 'github',
      href: 'https://github.com',
    },
    {
      name: 'rss',
      href: '/atom.xml',
    },
    {
      name: 'twitter',
      href: 'https://twitter.com',
    },
    {
      name: 'mastodon',
      href: 'https://mastodon.social',
    },
  ],
  navigationLinks: [
    {
      name: 'Posts',
      href: '/',
    },
    {
      name: 'Archive',
      href: '/archive',
    },
    {
      name: 'Categories',
      href: '/categories',
    },
    {
      name: 'About',
      href: '/about',
    },
  ],
}

export const defaultConfig: ThemeConfig = {
  site: siteConfig,
}
