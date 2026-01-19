---
title: 配置文档：站点与构建设置
pubDate: 2024-08-05
tags: [配置, guide, 站点]
description: '详细说明如何配置站点信息与构建选项，涵盖 theme.config.ts 与 astro.config.ts 的核心字段、用途与调整建议。'
draft: false
slug: config-guide
---

# 配置说明

本文集中说明两个配置文件：`src/theme.config.ts` 与 `astro.config.ts`。前者负责站点信息与导航，后者负责构建与集成设置。

## 1. `src/theme.config.ts`

配置入口通过 `defineThemeConfig` 包裹，核心字段位于 `site`。

### 1.1 站点信息

- `site.author`：作者名，展示在站点元信息中。
- `site.description`：站点描述，建议用于 SEO 与页面摘要。
- `site.website`：站点主页地址，用于生成 canonical URL。
- `site.title`：站点主标题，通常用于导航或页面标题。
- `site.subtitle`：站点副标题，用于补充主题说明。
- `site.locale`：站点语言，如 `zh-cn`。

### 1.2 导航链接

`site.navigationLinks` 为导航数组，每一项包含：

- `title`：导航名称
- `url`：目标路径

建议保持路由一致，避免导航与页面实际路径不一致。

### 1.3 社交链接

`site.socialLinks` 用于社交图标展示，每一项包含：

- `title`：平台名称
- `url`：平台地址
- `icon`：图标名称（例如 `mdi--github`）

## 2. `astro.config.ts`

这是 Astro 的构建配置文件，负责集成与构建层设置。

### 2.1 integrations

`integrations` 为集成插件列表。当前为空数组，若需要添加例如 sitemap、mdx 等插件，可在这里注册。

### 2.2 Vite 配置

当前通过 `vite.plugins` 引入 `@tailwindcss/vite` 插件，用于样式构建。

如需添加额外 Vite 插件，可在 `vite` 字段中继续扩展。

## 3. 调整建议

- 修改 `theme.config.ts` 后，重点检查导航、标题与社交链接。
- 调整 `astro.config.ts` 后，重新运行 `pnpm dev` 与 `pnpm build` 验证输出。
- 配置内容越多越要保持字段命名一致，避免运行时错误。
