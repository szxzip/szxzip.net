import antfu from '@antfu/eslint-config'

export default antfu(
  {
    lessOpinionated: true,
    stylistic: true,
    astro: true,
    formatters: true,
  },
  {
    rules: {
      'pnpm/yaml-enforce-settings': 'off',
    },
  },
)
