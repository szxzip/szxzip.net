// import path from 'node:path'
import antfu from '@antfu/eslint-config'
// eslint-disable-next-line ts/ban-ts-comment
// @ts-ignore
// import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    stylistic: true,
    astro: true,
    unocss: true,
    formatters: true,
  },
  {
    rules: {
      'pnpm/yaml-enforce-settings': 'off',
    },
  },
)
