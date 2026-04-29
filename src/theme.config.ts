import { defineThemeConfig } from './config'

export const themeConfig = defineThemeConfig({
  site: {
    author: 'szxzip.net',
    description: '时代，前进 | Time, Forward | Temps, en avant | Время, вперёд',
    title: 'Pizxzs',
    subtitle: '',
    website: 'https://next.szxzip.net/',
    locale: 'en-us',
    navigationLinks: [
      {
        title: 'Posts',
        url: '/',
      },
      {
        title: 'Archives',
        url: '/archives',
      },
      {
        title: 'Tags',
        url: '/tags',
      },
      {
        title: 'About',
        url: '/about',
      },
    ],
    socialLinks: [
      {
        title: 'matrix',
        url: 'https://matrix.to/#/#general:matrix.szxzip.net',
        icon: 'i-mdi-matrix',
      },
      {
        title: 'status',
        url: 'https://status.szxzip.net',
        icon: 'i-mdi-web',
      },
      {
        title: 'rss',
        url: '/atom.xml',
        icon: 'i-mdi-rss',
      },
    ],
  },
  feeds: {
    rss: {
      fullText: true,
    },
  },
  seo: {},
  latex: {
    provider: 'katex',
  },
  comment: {
    provider: 'giscus',
    disqus: {},
    twikoo: {},
    giscus: {
      scriptUrl: 'https://giscus.app/client.js',
      repo: 'szxzip/szxzip.net',
      repoId: 'R_kgDOSEGCsw',
      category: 'General',
      categoryId: 'DIC_kwDOSEGCs84C69lg',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '1',
      inputPosition: 'top',
      theme: 'transparent_dark',
      lang: 'en',
      loading: 'lazy',
    },
  },
  analytics: {},
  appearance: {
    theme: 'auto',
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
