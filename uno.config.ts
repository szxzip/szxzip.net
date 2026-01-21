import { defineConfig, presetIcons, presetWind4, transformerDirectives } from 'unocss'
import { themeConfig } from './src/theme.config'

const colors = themeConfig.appearance.theme === 'dark' ? themeConfig.appearance.colors.dark : themeConfig.appearance.colors.light

export default defineConfig({
  presets: [presetWind4(), presetIcons()],
  transformers: [transformerDirectives()],
  preflights: [
    {
      getCSS: () => `
        :root {
          --colors-neutral: ${colors.neutral};
        }
      `,
    },
  ],
  theme: {
    colors: {
      ...colors,
    },
    font: {
      serif: 'HiraMinProN-W6, Source Han Serif CN, Source Han Serif SC, Source Han Serif TC, serif',
      sans: 'Source Sans Pro, Roboto, Helvetica, Helvetica Neue, Source Han Sans SC, Source Han Sans TC, PingFang SC, PingFang HK, PingFang TC, sans-serif',
    },
  },
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'link': 'p-[0.1em] underline underline-offset-2 decoration-[0.1em] ease-in-out duration-400 transition-colors hover:bg-primary hover:text-secondary hover:decoration-primary',
  },
  rules: [
    [
      /^text-(\d+(?:\.\d+)?)$/,
      ([, size]) => ({
        'font-size': `calc(${size} * var(--spacing))`,
      }),
    ],
    ['animate-fade-in-down', { animation: 'fade-in-down 1s linear 1' }],
    ['animate-fade-in-left', { animation: 'fade-in-left 1s ease-in-out 1' }],
  ],
  safelist: [
    ...themeConfig.site.socialLinks.map(social => `${social.icon}`),
  ],
})
