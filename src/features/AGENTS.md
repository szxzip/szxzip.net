# Features Module

Self-contained feature modules. Each subdirectory owns one integration concern.

## Structure

```
features/
├── analytics/     # Google Analytics / Umami
├── comment/       # Disqus / Giscus / Twikoo
├── latex/         # KaTeX math rendering
├── rss/           # Atom feed generation
└── seo/           # Open Graph / Twitter Cards (astro-seo)
```

## Provider Pattern

Every multi-provider feature follows the same structure:

1. **Facade component** (`Analytics.astro`, `Comment.astro`) — reads `themeConfig.{feature}.provider`, conditionally renders the active provider.
2. **Provider components** (`Google.astro`, `Umami.astro`, etc.) — isolated implementation per provider.

```
Comment.astro          ← facade: switches on themeConfig.comment.provider
├── Disqus.astro       ← provider: renders Disqus embed
├── Giscus.astro       ← provider: renders Giscus web component
└── Twikoo.astro       ← provider: renders Twikoo widget
```

## Where to Look

| Task                   | File                                | Notes                                                                                                    |
| ---------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Add comment provider   | `comment/`                          | Create `NewProvider.astro`, add case in `Comment.astro`, update `CommentConfig` in `src/config/types.ts` |
| Add analytics provider | `analytics/`                        | Same pattern: new component + facade case + type update                                                  |
| Fix SEO metadata       | `seo/SEO.astro`                     | Uses `astro-seo` package; has TODOs for OG/Twitter images                                                |
| RSS feed logic         | `rss/atom.ts`                       | Called from `src/pages/atom.xml.ts`                                                                      |
| LaTeX config           | `latex/LaTeX.astro` → `KaTex.astro` | Head-injected CSS/scripts; remark-math + rehype-katex in `astro.config.ts`                               |

## Conventions

- Config lives in `src/theme.config.ts`, NOT in feature components — components only read it.
- Types for new config options go in `src/config/types.ts`.
- Third-party scripts use Partytown (`is:inline` or `type="text/partytown"`) — see `analytics/Google.astro`.
- No client-side framework (React/Vue) — pure Astro components with `<script>` tags where needed.

## Anti-Patterns

- Do not hardcode provider config in components — always read from `themeConfig`.
- Do not add providers without updating the union type in `CommentConfig` or `AnalyticsConfig`.
- Do not import feature components outside `Layout.astro` or page files — features are top-level concerns.
