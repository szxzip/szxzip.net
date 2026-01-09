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
        title: '文章',
        url: '/',
      },
      {
        title: '归档',
        url: '/archive',
      },
      {
        title: '分类',
        url: '/categories',
      },
      {
        title: '关于',
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
