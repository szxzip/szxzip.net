# noJS Hugo theme

A minimal, no-JavaScript theme for the [Hugo][1] static site generator.
Check out the demo at [nojs.andy.sb][2].

![noJS theme screenshot][3]

## Features

* no JavaScript
* dark mode via [`prefers-color-scheme`][4]
* [syntax highlighting](#syntax-highlighting)
* [LaTeX via `transform.ToMath`](#latex-via-transformtomath)

## Installation

For more information read the official [quick start guide][5] of Hugo.

In your `themes/` directory, run:

```sh
git clone https://git.andy.sb/nojs.git
```

Set the theme in `hugo.toml` at the base of the Hugo site:

```toml
theme = "nojs"
```

Add menu entries:

```toml
[menus]
  [[menus.main]]
    name = 'Home'
    pageRef = '/'
    weight = 1

  [[menus.main]]
    name = 'Posts'
    pageRef = '/posts'
    weight = 2

  [[menus.main]]
    name = 'Tags'
    pageRef = '/tags'
    weight = 3
```

## Image captions

You can add captions to images (technically using `<figcaption>` HTML tags) by adding titles, like so:

```md
![Alt text here](/path/to/image.png "Put your caption here!")
```

## Syntax highlighting

Disable [`noClasses`][6] to use [this modified algol_nu theme][7].

```toml
[markup]
  [markup.highlight]
    noClasses = false
```

## LaTeX via [transform.ToMath][8]

Instead of client-side JavaScript rendering of mathematical markup using [MathJax][9] or [KaTeX][10],
use [this passthrough render hook][11] which calls the [transform.ToMath][8] function.

```toml
[markup]
  [markup.goldmark]
    [markup.goldmark.extensions]
      [markup.goldmark.extensions.passthrough]
        enable = true
        [markup.goldmark.extensions.passthrough.delimiters]
          block = [['\[', '\]'], ['$$', '$$']]
          inline = [['\(', '\)']]
```

Now add some mathematical markup to your content.

```md
Calculate the cohomology \(H^n(C;G)\) using the _universal coefficient theorem_:

\[H^n(C;G) \cong \operatorname{Ext}(H_{n-1}(C),G) \oplus \operatorname{Hom}(H_n(C),G)\]
```

Note that the [external `katex.css`][10] is loaded in the [`head.html` partial][11].

[1]: https://gohugo.io/
[2]: https://nojs.andy.sb/
[3]: https://git.andy.sb/nojs/raw/main/images/screenshot.png
[4]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
[5]: https://gohugo.io/getting-started/quick-start/
[6]: https://gohugo.io/content-management/syntax-highlighting/#noclasses
[7]: https://git.andy.sb/nojs/blob/main/assets/css/syntax.css
[8]: https://gohugo.io/functions/transform/tomath/
[9]: https://www.mathjax.org/
[10]: https://katex.org/
[11]: https://git.andy.sb/nojs/blob/main/layouts/_markup/render-passthrough.html
[12]: https://cdn.jsdelivr.net/npm/katex/dist/katex.css
[13]: https://git.andy.sb/nojs/blob/main/layouts/_partials/head.html
