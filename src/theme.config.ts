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
        icon: 'mdi--github',
      },
      {
        title: 'rss',
        url: '/atom.xml',
        icon: 'mdi--rss',
      },
      {
        title: 'twitter',
        url: 'https://twitter.com/moeyua',
        icon: 'mdi--twitter',
      },
      {
        title: 'mastodon',
        url: 'https://mastodon.social/@moeyua',
        icon: 'mdi--mastodon',
      },
    ],

  },
}
