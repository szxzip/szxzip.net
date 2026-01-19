---
title: Markdown 语法示例
pubDate: 2024-07-20
tags: [Markdown, Guide]
description: '覆盖基础 Markdown 与常见 GFM 扩展的示例文档，用于验证标题、列表、表格、代码块、脚注、任务列表与删除线等语法渲染效果。'
draft: true
pinned: true
slug: markdown-sample
---

# Markdown 语法示例

这篇文章用于测试 Markdown 与 GFM 扩展的渲染效果，尽量覆盖常见语法。

## 1. 标题层级

# H1 标题

## H2 标题

### H3 标题

#### H4 标题

##### H5 标题

###### H6 标题

## 2. 段落与强调

普通段落文字。**加粗文本**、_斜体文本_、~~删除线~~、`行内代码`。

## 3. 引用与分隔线

> 这是一个引用块，用于测试引用样式。
> 可以有多行内容。

---

## 4. 无序与有序列表

- 无序列表项 A
- 无序列表项 B
  - 子列表项 B-1
  - 子列表项 B-2

1. 有序列表项 1
2. 有序列表项 2
3. 有序列表项 3

## 5. 任务列表（GFM）

- [x] 已完成任务
- [ ] 未完成任务
- [ ] 继续完善任务项

## 6. 表格（GFM）

| 字段    | 说明     | 备注 |
| ------- | -------- | ---- |
| title   | 标题     | 必填 |
| pubDate | 发布日期 | 必填 |
| tags    | 标签     | 可选 |

## 7. 链接与图片

这是一个链接示例：[Astro 官网](https://astro.build)。

这是一个图片示例：

![示例图片](https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=60)

## 8. 代码块

```ts
interface PostMeta {
  title: string
  pubDate: Date
  tags?: string[]
}

const meta: PostMeta = {
  title: 'Markdown 语法示例文档',
  pubDate: new Date('2024-07-20'),
  tags: ['markdown', '示例'],
}
```

## 9. 脚注（GFM）

这里是一段包含脚注的文本。你可以在句尾添加说明[^1]。

[^1]: 这是脚注内容，用于测试脚注渲染。
