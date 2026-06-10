---
title: 颜色变体
description: 颜色工具允许您将主题中的品牌色、中性色、成功色、警告色和危险色应用于任何元素。
layout: docs
tags: styleUtilities
synonyms:
  - text color
  - foreground color
  - colour
  - color utility
  - semantic color
  - 文字颜色
  - 前景色
  - 颜色
  - 颜色工具
  - 语义颜色
use-cases:
  - brand color
  - status color
  - theme color
  - background color
  - danger color
  - success color
  - 品牌色
  - 状态色
  - 主题色
  - 背景色
  - 危险色
  - 成功色
---

多个 @SITE_NAME@ 组件（如 [`<wa-badge>`](/docs/components/badge)、[`<wa-button>`](/docs/components/button)、[`<wa-button-group>`](/docs/components/button-group)、[`<wa-callout>`](/docs/components/callout) 和 [`<wa-tag>`](/docs/components/tag)）接受 `variant` 属性以在主题的品牌色、中性色、成功色、警告色和危险色之间切换。颜色变体工具类将相同的表现力带入任何元素：切换品牌色提示框、警告样式的面板或成功色调的徽章，无需为每个元素编写特定于变体的 CSS。

## 变体类

向任何元素添加以下类之一以应用语义颜色：

- `.wa-brand`
- `.wa-neutral`
- `.wa-success`
- `.wa-warning`
- `.wa-danger`

## 变体如何工作

变体类不会直接应用样式。相反，每个类将一组通用的颜色标记（如 `--wa-color-fill-loud` 和 `--wa-color-on-loud`）指向匹配的[语义颜色](/docs/tokens/color/#语义颜色)组（如 `--wa-color-brand-fill-loud` 等）。这意味着您的自定义 CSS 可以使用不带组标记的标记编写一次，并自动应用添加的任何变体。未设置变体类时，标记回退到 `neutral`。

@SITE_NAME@ 的[原生样式](/docs/utilities/native/)在合理的地方使用了这种模式，这就是原生 `<button>` 可以接受 `.wa-success` 类并正常工作的原因。

## 示例：带有变体的自定义类

这是一个微小的 `.callout` 类，无需任何额外选择器即可响应所有颜色变体：

```html { .example}
<p class="callout">This is a callout.</p>
<p class="callout wa-brand">This is a callout.</p>
<p class="callout wa-success">This is a callout.</p>
<p class="callout wa-warning">This is a callout.</p>
<p class="callout wa-danger">This is a callout.</p>

<style>
  .callout {
    background-color: var(--wa-color-fill-quiet);
    border: 1px solid var(--wa-color-border-quiet);
    color: var(--wa-color-on-quiet);
    padding: var(--wa-space-m) var(--wa-space-l);
  }
</style>
```
