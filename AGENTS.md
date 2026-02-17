# PROJECT KNOWLEDGE BASE

**Generated:** 2026-02-17
**Commit:** 4fa6173
**Branch:** next

## Overview

Astro blog theme ("Typography") focused on Chinese typographic aesthetics. Stack: Astro 5 + TypeScript (strict) + UnoCSS (presetWind4) + MDX.

## Structure

```
./
├── astro.config.ts          # Integrations: MDX, sitemap, partytown, UnoCSS, robotsTxt, sonda
├── uno.config.ts            # UnoCSS config (NOT Tailwind) — presetWind4, presetIcons, custom rules
├── src/
│   ├── theme.config.ts      # Central theme config — site, comments, analytics, appearance, feeds
│   ├── config/              # ThemeConfig type system (defineThemeConfig helper + interfaces)
│   ├── content.config.ts    # Content collection: posts from src/contents/posts (md/mdx)
│   ├── contents/posts/      # Blog post markdown files
│   ├── components/          # Shared Astro components (Pagination, PostSummary, SiteNav, etc.)
│   ├── features/            # Feature modules — analytics, comment, latex, rss, seo (see AGENTS.md)
│   ├── layouts/             # Single Layout.astro — header/main/footer with view transitions
│   ├── pages/               # Routes: index→/posts/1 redirect, posts/[page], posts/[slug], tags, archives, atom.xml
│   ├── post/                # Post data layer: types (PostEntry), utils (getPostEntries, sorting, pinning)
│   ├── i18n/                # i18n: useTranslate(locale) + locale mappings (en, zh-cn, zh-tw, ja, ko, it)
│   └── styles/              # CSS: main.css imports base.css + typography.css + heti.css (Chinese typography)
├── scripts/                 # CLI: create-post.ts (interactive post scaffolding)
└── public/                  # Static assets (favicon, OG image)
```

## Where to Look

| Task                   | Location                                    | Notes                                                            |
| ---------------------- | ------------------------------------------- | ---------------------------------------------------------------- |
| Add/edit blog post     | `src/contents/posts/`                       | Frontmatter: title, pubDate, description, tags, draft, pinned    |
| Create post via CLI    | `pnpm post:create`                          | Interactive, runs `scripts/create-post.ts`                       |
| Site metadata          | `src/theme.config.ts`                       | Author, title, subtitle, description, website, locale            |
| Add nav link           | `src/theme.config.ts` → `navigationLinks`   | Also add page in `src/pages/`                                    |
| Add social link        | `src/theme.config.ts` → `socialLinks`       | Icon: Iconify class (`i-mdi-*`); restart dev server              |
| Comment provider       | `src/theme.config.ts` → `comment`           | Disqus / Giscus / Twikoo / none                                  |
| Analytics provider     | `src/theme.config.ts` → `analytics`         | Google / Umami / none                                            |
| Theme colors           | `src/theme.config.ts` → `appearance.colors` | Light/dark: primary, secondary, accent, neutral                  |
| UnoCSS shortcuts/rules | `uno.config.ts`                             | `flex-center`, `link`, dynamic `text-{n}`, animations            |
| Typography styles      | `src/styles/typography.css`                 | Post content overrides; `heti.css` for Chinese spacing           |
| Content schema         | `src/content.config.ts`                     | Zod schema for post frontmatter                                  |
| Post utilities         | `src/post/utils.ts`                         | getPostEntries, sorting, pinning, date formatting (Temporal API) |
| i18n strings           | `src/i18n/locales.ts`                       | Add locale mappings here                                         |
| Feature modules        | `src/features/`                             | Each feature is self-contained; see `src/features/AGENTS.md`     |

## Conventions

### Styling — UnoCSS, Not Tailwind

- **UnoCSS with presetWind4** — Tailwind-compatible syntax but configured in `uno.config.ts`, NOT `tailwind.config.*`.
- Theme colors from `themeConfig.appearance.colors` flow into UnoCSS theme (e.g. `text-primary`, `bg-secondary`).
- Custom fonts: `font-serif` (HiraMinProN/Source Han Serif) and `font-sans` (Source Sans Pro/Source Han Sans).
- Shortcuts: `flex-center`, `link` (underline hover effect).
- Custom rules: `text-{n}` → `font-size: calc(n * var(--spacing))`.
- `presetIcons()` for Iconify icons — social link icons are safelisted from config.
- `transformerDirectives()` enables `@apply` in CSS files.

### Theme Config Pattern

- All user-facing settings in `src/theme.config.ts` via `defineThemeConfig()`.
- Types in `src/config/types.ts` — update types when adding config options.
- Config is imported directly (not via context/store); changes require dev server restart.

### Content Collections

- Posts live in `src/contents/posts/` (note: `contents` not `content`).
- Schema in `src/content.config.ts` uses `glob` loader.
- `draft: true` posts are filtered out in production only (`import.meta.env.PROD`).
- `pinned: true` posts float to top of listings.

### Component Patterns

- Astro components use `PascalCase` filenames.
- Frontmatter for imports + props; `class:list` for conditional classes.
- Feature components read `themeConfig` directly — no prop drilling for config.
- Provider pattern: facade component (e.g. `Comment.astro`) switches on `themeConfig.*.provider`.

### Date Handling

- Uses `@js-temporal/polyfill` (Temporal API), not `Date` directly for formatting.
- `formatPostDate()` in `src/post/utils.ts` handles locale-aware display.

### View Transitions

- Astro `ClientRouter` + `transition:animate` for page transitions.
- Animations: `fade-in-down`, `fade-in-left` (defined in `Layout.astro` scoped styles).

## Anti-Patterns

- **No Tailwind config** — do not create `tailwind.config.*`; use `uno.config.ts`.
- **No Prettier/Stylelint** — ESLint (`@antfu/eslint-config`) is the only formatter.
- **No new formatting tools** — do not add Prettier, Stylelint, etc.
- **No editing generated files** — `dist/`, `.astro/`.
- **No `any`** — TypeScript strict mode; avoid casting unless justified.
- **No new tooling without discussion** — keep dependencies minimal.
- **README\*.md excluded from lint** — `lint-staged` config explicitly skips them.

## Commands

```bash
pnpm dev            # Dev server (--host)
pnpm build          # Production build
pnpm preview        # Preview build
pnpm lint           # ESLint check
pnpm lint:fix       # ESLint auto-fix
pnpm post:create    # Interactive post creation CLI
```

## Notes

- **HACK in Layout.astro**: UnoCSS doesn't generate neutral background color variable — workaround uses `theme('colors.neutral')` in scoped CSS with `--neutral-background`.
- **TODOs in SEO.astro**: Twitter card image, Open Graph image, and article metadata are placeholders.
- **TODOs in astro.config.ts**: `site` and `base` marked for customization.
- **Pre-commit**: `simple-git-hooks` (not husky) runs `pnpm lint-staged` → `eslint --fix` on staged files (excluding README\*.md).
- **No tests**: No test runner configured. Update this file if tests are added.
- **Partytown**: Configured to forward `dataLayer.push`, `gtag`, `twikoo.init` for third-party script isolation.
- **Sonda**: Bundle analysis integration (disabled by default).
- **pnpm workspace**: `pnpm-workspace.yaml` exists but single-package repo currently.
