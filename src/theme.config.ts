import { defineThemeConfig } from './config'

export const themeConfig = defineThemeConfig({
  site: {
    author: 'Moeyua',
    description: 'Rediscory the beauty of typography',
    title: '活版印字',
    subtitle: 'Typography',
    locale: 'zh-cn',
    navigationLinks: [
      {
        title: '文章',
        url: '/',
      },
      {
        title: '归档',
        url: '/archives',
      },
      {
        title: '标签',
        url: '/tags',
      },
      {
        title: '关于',
        url: '/about',
      },
    ],
    socialLinks: [
      {
        title: 'github',
        url: 'https://github.com',
        icon: 'mdi--github',
      },
      {
        title: 'rss',
        url: '/atom.xml',
        icon: 'mdi--rss',
      },
      {
        title: 'twitter',
        url: 'https://twitter.com',
        icon: 'mdi--twitter',
      },
      {
        title: 'mastodon',
        url: 'https://mastodon.social',
        icon: 'mdi--mastodon',
      },
    ],
    website: '',
  },
  feeds: {
    rss: {
      fullText: true,
    },
  },
  seo: {
    twitter: {
      username: '@moeyua13',
    },
  },
  latex: {
    enable: true,
  },
})
