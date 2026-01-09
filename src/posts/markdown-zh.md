---
title: Markdown
pubDate: 2026-01-09
tags: [test]
description: '这是关于 Markdown 语法的中文说明文档。'
draft: false
slug: markdown-zh
---

# Markdown：语法说明

- [Markdown：语法说明](#markdown语法说明)
  - [概览](#概览)
    - [设计理念](#设计理念)
  - [块级元素](#块级元素)
    - [段落与换行](#段落与换行)
    - [标题](#标题)
    - [引用块](#引用块)
    - [列表](#列表)
    - [代码块](#代码块)
  - [行内元素](#行内元素)
    - [链接](#链接)
    - [强调](#强调)
    - [行内代码](#行内代码)

**说明：** 本文档本身就是使用 Markdown 编写的，你可以通过查看源文件来了解其实际写法。

---

## 概览

### 设计理念

Markdown 的设计目标是在**可读性**和**可写性**之间取得最佳平衡。

在所有目标之中，可读性被放在首位。一个使用 Markdown 编写的文档，应该在不进行任何渲染的情况下，也能作为纯文本直接阅读，而不会显得像是被大量标签或格式指令“污染”的内容。

尽管 Markdown 的语法受到了多种现有文本到 HTML 转换工具的影响，例如 [Setext](http://docutils.sourceforge.net/mirror/setext.html)，[atx](http://www.aaronsw.com/2002/atx/)，[Textile](http://textism.com/tools/textile/)，[reStructuredText](http://docutils.sourceforge.net/rst.html),
[Grutatext](http://www.triptico.com/software/grutatxt.html)，和 [EtText](http://ettext.taint.org/doc/) 等，但其**最主要的灵感来源是纯文本电子邮件的书写格式**。

## 块级元素

### 段落与换行

一个段落由一行或多行连续文本组成，段落之间通过一个或多个空行分隔。

空行指的是：看起来是空的行 —— 即只包含空格或制表符的行，也会被视为空行。普通段落不应该使用空格或制表符进行缩进。

Markdown 支持“硬换行”的段落格式，这一点与许多其他文本转 HTML 的工具不同。默认情况下，Markdown **不会**把段落中的换行符转换为 `<br />` 标签。

如果你确实需要插入一个 `<br />` 换行，只需在行尾添加 **两个或更多空格**，然后再回车即可。

### 标题

Markdown 支持两种标题语法：

- Setext 风格
- atx 风格

atx 风格的标题可以选择性地“闭合”，也就是在标题末尾再加上一些 `#` 号。这种写法仅用于美观，对解析结果没有任何影响。

标题的级别只由**开头的 `#` 数量**决定。

### 引用块

Markdown 使用类似电子邮件的 `>` 符号来表示引用。

示例：

> 这是一个包含两个段落的引用块。Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit.

你也可以只在段落的第一行使用 `>`，Markdown 同样可以正确解析。

引用块可以进行嵌套：

> 第一层引用
>
> > 第二层引用
>
> 回到第一层

引用块中也可以包含其他 Markdown 元素，例如标题、列表或代码块：

> ## 这是一个标题
>
> 1. 第一项
> 2. 第二项
>
> 示例代码：
>
>     return shell_exec("echo $input | $markdown_script");

### 列表

Markdown 支持无序列表和有序列表。

无序列表可以使用以下符号作为标记（可以混用）：

- 星号 `*`
- 加号 `+`
- 连字符 `-`

示例：

- Red
- Green
- Blue

有序列表使用“数字 + 英文句号”的形式：

1. Bird
2. McHale
3. Parish

需要注意的是，**列表中实际书写的数字不会影响最终渲染结果**。以下写法效果完全一致：

```markdown
1. Bird
1. McHale
1. Parish
```

列表项可以包含多个段落，后续段落需要缩进 4 个空格或 1 个 Tab。

列表中也可以嵌套引用或代码块，但需要额外缩进。

### 代码块

代码块用于展示程序代码或标记语言源码。

在 Markdown 中，只需将代码块中的每一行缩进 **至少 4 个空格或 1 个 Tab**，即可生成一个代码块。

示例：

    tell application "Foo"
        beep
    end tell

在代码块中，Markdown 语法不会被解析，所有内容都会被原样输出。这使得使用 Markdown 来讲解 Markdown 本身的语法变得非常方便。

```text
tell application "Foo"
    beep
end tell
```

## 行内元素

### 链接

Markdown 支持两种链接形式：

- 行内链接
- 引用式链接

行内链接示例：

这是一个 [示例链接](http://example.com/)。

### 强调

Markdown 使用星号 `*` 或下划线 `_` 来表示强调：

- _斜体_
- **加粗**

规则如下：

- 单个 `*` 或 `_`：斜体（`<em>`）
- 双个 `*` 或 `_`：加粗（`<strong>`）

### 行内代码

行内代码使用反引号 `` ` `` 包裹，用于在普通段落中表示代码片段。

示例：

使用 `printf()` 函数进行格式化输出。
