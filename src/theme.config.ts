import type { ThemeConfig } from './types/theme'

export const themeConfig: ThemeConfig = {
  site: {
    author: 'Moeyua',
    description: 'Rediscory the beauty of typography',
    website: 'https://typography.moeyua.com/',
    title: '講評世界',
    subtitle: 'Moeyua',
    navigationLinks: [
      {
        title: 'Posts',
        url: '/',
      },
      {
        title: 'Archive',
        url: '/archive',
      },
      {
        title: 'Categories',
        url: '/categories',
      },
      {
        title: 'About',
        url: '/about',
      },
    ],
    socialLinks: [
      {
        title: 'github',
        url: 'https://github.com/moeyua',
      },
      {
        title: 'rss',
        url: '/atom.xml',
      },
      {
        title: 'twitter',
        url: 'https://twitter.com/moeyua',
      },
      {
        title: 'mastodon',
        url: 'https://mastodon.social/@moeyua',
      },
    ],

  },
}
