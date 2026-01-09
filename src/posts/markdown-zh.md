---
title: Markdown（中文译本）
pubDate: 2026-01-09
tags: [test]
description: '这是 Markdown 语法的中文翻译文档。'
draft: false
slug: markdown-zh
---

# Markdown：语法

- [Markdown：语法](#markdown语法)
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

**说明：** 本文档就是用 Markdown 写成的；你可以在 URL 后加上 `.text` 来查看它的源文件：`/projects/markdown/syntax.text`。

---

## 概览

### 设计理念

Markdown 的目标是尽可能让文本**易读、易写**。

但所有目标中，可读性被放在首位。一个使用 Markdown 编写的文档，应当能直接以纯文本发布，而不会显得像被标签或格式指令“污染”。Markdown 的语法受到许多文本转 HTML 工具的影响——包括 [Setext](http://docutils.sourceforge.net/mirror/setext.html)、[atx](http://www.aaronsw.com/2002/atx/)、[Textile](http://textism.com/tools/textile/)、[reStructuredText](http://docutils.sourceforge.net/rst.html)、[Grutatext](http://www.triptico.com/software/grutatxt.html) 和 [EtText](http://ettext.taint.org/doc/) 等——但**最主要的灵感来源是纯文本电子邮件的格式**。

## 块级元素

### 段落与换行

一个段落由一行或多行连续文本组成，段落之间以一个或多个空行分隔。（空行指看起来是空的行——只包含空格或制表符的行也算空行。）普通段落不应使用空格或制表符缩进。

“连续多行文本”意味着 Markdown 支持“硬换行”的段落写法。这与大多数其他文本转 HTML 的格式化工具（包括 Movable Type 的“Convert Line Breaks”选项）不同，后者会把段落中的每个换行字符都转成 `<br />`。

当你**确实**需要插入 `<br />` 换行时，只需在行尾加上两个或更多空格，然后回车。

### 标题

Markdown 支持两种标题风格：[Setext] [1] 和 [atx] [2]。

atx 风格的标题可以选择性地“闭合”。这纯粹是视觉效果——可以根据喜好使用。末尾的 `#` 数量不必与开头匹配；标题级别只由开头的 `#` 数量决定。

### 引用块

Markdown 使用类似电子邮件的 `>` 字符来创建引用。如果你熟悉邮件中的引用语法，就知道怎么在 Markdown 里写引用。若希望效果更好，可以为硬换行的每一行都加上 `>`：

> 这是一个包含两个段落的引用块。Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

Markdown 也允许偷懒，只在硬换行段落的第一行加 `>`：

> 这是一个包含两个段落的引用块。Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

引用块可以嵌套（即“引用中的引用”），通过增加 `>` 层级实现：

> 这里是第一层引用。
>
> > 这里是嵌套的第二层引用。
>
> 回到第一层。

引用块可以包含其他 Markdown 元素，包括标题、列表和代码块：

> ## 这是一个标题。
>
> 1.  这是列表的第一项。
> 2.  这是列表的第二项。
>
> 下面是示例代码：
>
>     return shell_exec("echo $input | $markdown_script");

任何像样的文本编辑器都能让邮件式引用写起来更方便。例如在 BBEdit 中，选中文本后可在 Text 菜单中选择 “Increase Quote Level”。

### 列表

Markdown 支持有序（编号）和无序（项目符号）列表。

无序列表可以使用星号、加号或连字符作为标记（可以混用）：

- Red
- Green
- Blue

与下面的写法等效：

- Red
- Green
- Blue

或这样也可以：

- Red
- Green
- Blue

有序列表使用数字加英文句号：

1.  Bird
2.  McHale
3.  Parish

需要注意，列表里实际写的数字**不会影响** Markdown 输出的 HTML。上面列表生成的 HTML 与下面完全一致：

1.  Bird
1.  McHale
1.  Parish

甚至这样也一样：

3. Bird
1. McHale
1. Parish

如果你希望源码中的序号与生成的 HTML 一致，可以按顺序书写；但如果想偷懒，也可以全写成 1。

为了让列表更美观，你可以给列表项添加悬挂缩进：

- Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
  viverra nec, fringilla in, laoreet vitae, risus.
- Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
  Suspendisse id sem consectetuer libero luctus adipiscing.

当然，不缩进也可以：

- Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
  viverra nec, fringilla in, laoreet vitae, risus.
- Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
  Suspendisse id sem consectetuer libero luctus adipiscing.

列表项可以包含多个段落。列表项内后续段落需要缩进 4 个空格或 1 个 Tab：

1.  这是一个包含两个段落的列表项。Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit. Aliquam hendrerit
    mi posuere lectus.

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
    sit amet velit.

2.  Suspendisse id sem consectetuer libero luctus adipiscing.

把引用放进列表项中时，引用的 `>` 需要缩进：

- 一个带引用的列表项：

  > 这是一个引用
  > 位于列表项中。

把代码块放进列表项时，代码块需要再缩进一层（8 个空格或两个 Tab）：

- 一个带代码块的列表项：

        <code goes here>

### 代码块

预格式化的代码块用于展示程序代码或标记源码。代码块中的每一行都会被原样对待，Markdown 会在外层加上 `<pre>` 和 `<code>` 标签。

在 Markdown 中生成代码块，只需把代码块的每一行缩进至少 4 个空格或 1 个 Tab。

这是一个普通段落：

    This is a code block.

下面是一个 AppleScript 示例：

    tell application "Foo"
        beep
    end tell

代码块会持续到遇到未缩进的行（或文档结束）。

在代码块中，`&`、`<`、`>` 会自动转换成 HTML 实体。这让包含 HTML 示例变得非常方便，例如：

    <div class="footer">
        &copy; 2004 Foo Corporation
    </div>

常规 Markdown 语法在代码块内不会被解析。例如星号在代码块里就是普通字符。这也意味着可以方便地用 Markdown 来讲解 Markdown 自身的语法。

```
tell application "Foo"
    beep
end tell
```

## 行内元素

### 链接

Markdown 支持两种链接形式：**行内**和**引用**。

两种形式中，链接文字都由方括号包裹。

行内链接的写法是在方括号后紧跟圆括号，括号里放链接 URL，后面可选地加上用引号包裹的标题。例如：

This is [an example](http://example.com/) inline link.

[This link](http://example.net/) has no title attribute.

### 强调

Markdown 使用星号（`*`）和下划线（`_`）表示强调。用单个 `*` 或 `_` 包裹的文本会转换成 `<em>`；用两个 `*` 或 `_` 包裹的文本会转换成 `<strong>`。例如：

_single asterisks_

_single underscores_

**double asterisks**

**double underscores**

### 行内代码

行内代码用反引号（`` ` ``）包裹，表示在普通段落中的代码片段。例如：

Use the `printf()` function.
