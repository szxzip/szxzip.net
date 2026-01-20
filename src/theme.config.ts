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
  theme: {
    // 未实现：夜间模式与外观切换
    darkMode: 'auto',
    // 未实现：字体配置
    font: {
      body: 'serif',
      heading: 'serif',
      mono: 'monospace',
    },
  },
  content: {
    // 未实现：MDX 渲染
    mdx: {
      enabled: false,
    },
    // 未实现：LaTeX 渲染
    latex: {
      enabled: false,
      engine: 'katex',
    },
  },
  services: {
    // 未实现：评论系统
    comments: {
      provider: 'none',
    },
    // 未实现：数据分析
    analytics: {
      provider: 'none',
    },
  },
  // 未实现：实验性功能
  experimental: {},
})
