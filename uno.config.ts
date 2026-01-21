import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [presetWind4()],
  transformers: [transformerDirectives()],
  preflights: [
    {
      getCSS: () => `
:root {
  text-autospace: normal;
  --color-primary: var(--primary);
  --color-secondary: var(--secondary);
  --color-accent: var(--accent);
  --color-neutral: var(--neutral);
  --font-serif: HiraMinProN-W6, Source Han Serif CN, Source Han Serif SC, Source Han Serif TC, serif;
  --font-sans:
    Source Sans Pro, Roboto, Helvetica, Helvetica Neue, Source Han Sans SC, Source Han Sans TC, PingFang SC,
    PingFang HK, PingFang TC, sans-serif;
}

html {
  font-size: 16px;
  font-family: var(--font-sans);
  text-rendering: optimizeLegibility;
  background-color: var(--color-secondary);
}

body {
  min-height: 100svh;
  min-width: 100svw;
  color: var(--color-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-size: 7px 7px;
  background-image:
    linear-gradient(to right, color-mix(in oklch, var(--color-neutral) 4%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklch, var(--color-neutral) 4%, transparent) 1px, transparent 1px);
}

@keyframes fade-in-down {
  0% {
    transform: translateY(-1rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-in-left {
  0% {
    opacity: 0;
    transform: translateX(1rem);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
`,
    },
  ],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      accent: 'var(--color-accent)',
      neutral: 'var(--color-neutral)',
    },
    font: {
      serif: 'var(--font-serif)',
      sans: 'var(--font-sans)',
    },
  },
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'link': 'p-[0.1em] underline underline-offset-2 decoration-[0.1em] ease-in-out duration-400 transition-colors hover:bg-primary hover:text-secondary hover:decoration-primary',
  },
  rules: [
    [
      /^text-(\d+(?:\.\d+)?)$/,
      ([, size]) => ({
        'font-size': `calc(${size} * var(--spacing))`,
      }),
    ],
    ['write-vertical-rl', { 'writing-mode': 'vertical-rl', 'text-orientation': 'mixed' }],
    ['write-vertical-lr', { 'writing-mode': 'vertical-lr', 'text-orientation': 'mixed' }],
    ['animate-fade-in-down', { animation: 'fade-in-down 1s linear 1' }],
    ['animate-fade-in-left', { animation: 'fade-in-left 1s ease-in-out 1' }],
  ],
})
