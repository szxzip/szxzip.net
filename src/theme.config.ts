import type { ThemeConfig } from './types/theme'

export const themeConfig: ThemeConfig = {
  site: {
    author: 'Moeyua',
    description: 'Rediscory the beauty of typography',
    website: 'https://typography.moeyua.com/',
    title: '講評世界',
    subtitle: 'Moeyua',
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/moeyua',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
      {
        name: 'twitter',
        href: 'https://twitter.com/moeyua',
      },
      {
        name: 'mastodon',
        href: 'https://mastodon.social/@moeyua',
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
  },
}
