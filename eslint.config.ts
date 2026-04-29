import antfu from '@antfu/eslint-config'

export default antfu(
  {
    astro: true,
    unocss: true,
    stylistic: true,
    formatters: true,
    lessOpinionated: true,
  },
  {
    rules: {
      'pnpm/yaml-enforce-settings': 'off',
    },
  },
)
  .prepend({
    ignores: [
      '**/*.md',
    ],
  })
