import type { ThemeConfig } from '~/types'

// This is the default configuration for the template, please do not modify it directly.
// You can override this configuration in the `.config/user.ts` file.

export const defaultConfig: ThemeConfig = {
  site: {
    title: 'Pizxzs',
    subtitle: '',
    author: 'szxzip.net',
    description: '时代，前进 | Time, Forward | Temps, en avant | Время, вперёд',
    website: 'https://szxzip.net/',
    pageSize: 10,
    socialLinks: [
      {
        name: 'matrix',
        href: 'https://matrix.to/#/#general:matrix.szxzip.net',
      },
      {
        name: 'web',
        href: 'https://status.szxzip.net'
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
    ],
    navLinks: [
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
    categoryMap: [{ name: '胡适', path: 'hu-shi' }],
    footer: [
      '© %year <a target="_blank" href="%website">%author</a>',
      'Theme <a target="_blank" href="https://github.com/Moeyua/astro-theme-typography">Typography</a> by <a target="_blank" href="https://moeyua.com">Moeyua</a>',
      'Proudly published with <a target="_blank" href="https://astro.build/">Astro</a>',
    ],
  },
  appearance: {
    theme: 'system',
    locale: 'en-us',
    colorsLight: {
      primary: '#2e405b',
      background: '#ffffff',
    },
    colorsDark: {
      primary: '#FFFFFF',
      background: '#232222',
    },
    fonts: {
      header:
        '"HiraMinProN-W6","Source Han Serif CN","Source Han Serif SC","Source Han Serif TC",serif',
      ui: '"Source Sans Pro","Roboto","Helvetica","Helvetica Neue","Source Han Sans SC","Source Han Sans TC","PingFang SC","PingFang HK","PingFang TC",sans-serif',
    },
  },
  seo: {
    meta: [],
    link: [],
  },
  rss: {
    fullText: true,
  },
  comment: {
    giscus: {
      repo: 'szxzip/szxzip.net',
      repoId: 'R_kgDOSEGCsw',
      category: 'General',
      categoryId: 'DIC_kwDOSEGCs84C69lf',
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
  analytics: {
    googleAnalyticsId: '',
    umamiAnalyticsId: '',
  },
  latex: {
    katex: false,
  },
}
