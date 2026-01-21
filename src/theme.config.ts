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
    provider: 'katex',
  },
  comment: {
    provider: 'giscus',
    disqus: {
      shortname: 'typography-astro',
    },
    twikoo: {
      envId: 'https://twikoo-tau-flame.vercel.app',
    },
    giscus: {
      scriptUrl: 'https://giscus.app/client.js',
      repo: 'moeyua/astro-theme-typography',
      repoId: 'R_kgDOKy9HOQ',
      category: 'General',
      categoryId: 'DIC_kwDOKy9HOc4CUZP7',
      mapping: 'pathname',
      strict: '1',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: 'preferred_color_scheme',
      lang: 'zh-CN',
      loading: 'lazy',
    },
  },
  analytics: {
    provider: 'umami',
    google: {
      measurementId: 'G-TFT0WTWV89',
    },
    umami: {
      websiteId: 'df27d14d-1306-4f2b-ad16-9f30be54b80a',
      scriptUrl: 'https://umami.moeyua.com/script.js',
    },
  },
  appearance: {
    darkMode: 'auto',
    colors: {
      light: {
        primary: '#2e405b',
        secondary: '#ffffff',
        accent: '#c7254e',
        neutral: '#000000',
      },
      dark: {
        primary: '#ffffff',
        secondary: '#232222',
        accent: '#c7254e',
        neutral: '#ffffff',
      },
    },
  },
})
