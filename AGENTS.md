# AGENTS

## Purpose

- This file guides agentic coding tools working in this repository.
- It reflects the current project tooling and conventions.
- Keep changes aligned with existing configs and scripts.

## Project Overview

- Framework: Astro
- Package manager: pnpm
- Language: TypeScript (strict)
- Linting/formatting: ESLint (via @antfu/eslint-config)

## Commands

### Development

- Start dev server: `pnpm dev` (astro dev --host)
- Build for production: `pnpm build` (astro build)
- Preview production build: `pnpm preview` (astro preview)

### Linting / Formatting

- Lint: `pnpm lint`
- Lint and auto-fix: `pnpm lint:fix`
- Lint-staged: runs `eslint --fix` on all changed files

### Tests

- No test runner or test scripts are configured.
- There is no single-test command at this time.
- If tests are added later, update this section.

## Code Style and Formatting

- ESLint is the source of truth for style and formatting.
- No separate Prettier/Stylelint/EditorConfig config exists.
- Use `pnpm lint:fix` to apply consistent formatting.
- Prefer minimal, readable diffs; avoid noisy reformatting.

## Imports

- Use the `@/` alias for `src/*` (defined in `tsconfig.json`).
- Prefer absolute alias imports over deep relative paths.
- Import order guideline:
  - External packages first
  - Internal alias imports (`@/`)
  - Relative imports (`./` and `../`)
- Avoid unused imports; keep import lists tidy.

## TypeScript Guidelines

- Keep `any` usage to an absolute minimum.
- Prefer explicit types at public boundaries (props, exported APIs).
- Use type inference inside local scopes when clear.
- Respect strict null checks; handle undefined/null explicitly.
- Avoid casting unless required and well justified.

## Naming Conventions

- Variables and functions: `camelCase`.
- Classes and Astro/TS components: `PascalCase`.
- Files and directories: `kebab-case` where possible.
- Constants: `SCREAMING_SNAKE_CASE` only for true constants.
- Keep names descriptive and aligned with domain language.

## Error Handling

- Do not silently swallow errors.
- Prefer early returns and explicit error handling.
- If a failure is expected, document the behavior clearly.
- Log only meaningful information; avoid noisy console output.

## Astro and Template Conventions

- Keep component markup concise and readable.
- Use frontmatter for data loading and setup only.
- Keep styling colocated when it improves clarity.
- Favor semantic HTML and accessible attributes.

## Linting and Hooks

- Pre-commit hooks run `pnpm lint-staged`.
- Expect auto-fixes to be applied during commit.
- If lint fixes change your output, include those changes.

## Repo Hygiene

- Do not add new tooling without discussion.
- Avoid introducing new formatting tools by default.
- Keep dependency additions minimal and justified.

## Cursor / Copilot Rules

- No `.cursor/rules`, `.cursorrules`, or `.github/copilot-instructions.md` found.
- If such files are added later, align this document accordingly.

## Expected Agent Behavior

- Follow existing conventions and structure.
- Prefer small, focused changes.
- Update this file if tooling or rules change.
- Ask for clarification when requirements are ambiguous.
