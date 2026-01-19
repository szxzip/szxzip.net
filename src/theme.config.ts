import { defineThemeConfig } from '@/theme'

export const themeConfig = defineThemeConfig({
  site: {
    author: 'Moeyua',
    description: 'Rediscory the beauty of typography',
    website: 'https://typography.moeyua.com/',
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
    rss: {
      fullText: true,
    },
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
  },
})
