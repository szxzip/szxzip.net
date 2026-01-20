---
title: LaTeX 公式示例
pubDate: 2026-01-20
tags: [LaTeX, Math]
description: '用于验证 LaTeX 数学公式渲染的测试文章，包含行内公式、块级公式与矩阵示例。'
draft: true
slug: latex-demo
---

# LaTeX 公式示例

这篇文章用于测试 LaTeX 渲染能力，包含行内与块级公式。

## 1. 行内公式

爱因斯坦质能方程为 $E = mc^2$，欧拉恒等式是 $e^{i\pi} + 1 = 0$。

## 2. 块级公式

$$
\int_{0}^{\infty} e^{-x^2} \, dx = \frac{\sqrt{\pi}}{2}
$$

$$
\sum_{k=1}^{n} k = \frac{n(n+1)}{2}
$$

## 3. 矩阵与分段函数

$$
A = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

$$
|x| = \begin{cases}
-x, & x < 0 \\
0, & x = 0 \\
x, & x > 0
\end{cases}
$$

## 4. 对齐公式

$$
\begin{aligned}
\nabla \cdot \vec{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial \vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0 \vec{J} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}
\end{aligned}
$$
