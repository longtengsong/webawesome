---
title: 文本工具
description: 文本工具类使用 Web Awesome 主题中的自定义属性和其他标准 CSS 属性来即时样式化文本元素。
layout: docs
tags: styleUtilities
synonyms:
  - typography
  - font
  - text style
  - 排版
  - 字体
  - 文本样式
use-cases:
  - text size
  - text align
  - text weight
  - truncate
  - 文本大小
  - 文本对齐
  - 文本粗细
  - 截断
---

<style>
  th {
    min-inline-size: 15ch;
  }
</style>

{{ description }}

本页面中的类涵盖了最常见的需求：为正文副本选择大小和粗细、样式化标题、对齐段落、截断溢出以及更改字体颜色。每个类都基于您主题的排版标记构建，因此切换主题或调整您的字体系列会一次性更新整个站点。

## 正文

使用 `wa-body-*` 类来样式化页面的主要内容。每个类都指定一个对应于您主题中的 [字体大小标记](/docs/tokens/typography/#font-size) 的 `font-size`。

:::info
`3xs` 和 `2xs` 低于典型的可读性。最好将它们的使用限制在非必要的 UI 元素上（例如标签、元数据），以保持可访问性。
:::

或者，使用 `wa-body` 来应用相同的样式而没有显式的字体大小。

| 类名           | 预览                                                      |
| -------------- | --------------------------------------------------------- |
| `wa-body-3xs`  | <div class="wa-body-3xs">Five boxing wizards</div>        |
| `wa-body-2xs`  | <div class="wa-body-2xs">Five boxing wizards</div>        |
| `wa-body-xs`   | <div class="wa-body-xs">Five boxing wizards</div>         |
| `wa-body-s`    | <div class="wa-body-s">Five boxing wizards</div>          |
| `wa-body-m`    | <div class="wa-body-m">Five boxing wizards</div>          |
| `wa-body-l`    | <div class="wa-body-l">Five boxing wizards</div>          |
| `wa-body-xl`   | <div class="wa-body-xl">Five boxing wizards</div>         |
| `wa-body-2xl`  | <div class="wa-body-2xl">Five boxing wizards</div>        |
| `wa-body-3xl`  | <div class="wa-body-3xl">Five boxing wizards</div>        |
| `wa-body-4xl`  | <div class="wa-body-4xl">Five boxing wizards</div>        |
| `wa-body-5xl`  | <div class="wa-body-5xl">Five boxing wizards</div>        |

## 标题

使用 `wa-heading-*` 类来样式化内容中的节标题和标题。每个类都指定一个对应于您主题中的 [字体大小标记](/docs/tokens/typography/#font-size) 的 `font-size`。

或者，使用 `wa-heading` 来应用相同的样式而没有显式的字体大小。

| 类名              | 预览                                                         |
| ----------------- | ------------------------------------------------------------ |
| `wa-heading-3xs`  | <div class="wa-heading-3xs">Five boxing wizards</div>        |
| `wa-heading-2xs`  | <div class="wa-heading-2xs">Five boxing wizards</div>        |
| `wa-heading-xs`   | <div class="wa-heading-xs">Five boxing wizards</div>         |
| `wa-heading-s`    | <div class="wa-heading-s">Five boxing wizards</div>          |
| `wa-heading-m`    | <div class="wa-heading-m">Five boxing wizards</div>          |
| `wa-heading-l`    | <div class="wa-heading-l">Five boxing wizards</div>          |
| `wa-heading-xl`   | <div class="wa-heading-xl">Five boxing wizards</div>         |
| `wa-heading-2xl`  | <div class="wa-heading-2xl">Five boxing wizards</div>        |
| `wa-heading-3xl`  | <div class="wa-heading-3xl">Five boxing wizards</div>        |
| `wa-heading-4xl`  | <div class="wa-heading-4xl">Five boxing wizards</div>        |
| `wa-heading-5xl`  | <div class="wa-heading-5xl">Five boxing wizards</div>        |

## 说明文字

使用 `wa-caption-*` 类来样式化内容中的描述或辅助文本。每个类都指定一个对应于您主题中的 [字体大小标记](/docs/tokens/typography/#font-size) 的 `font-size`。

或者，使用 `wa-caption` 来应用相同的样式而没有显式的字体大小。

| 类名              | 预览                                                         |
| ----------------- | ------------------------------------------------------------ |
| `wa-caption-3xs`  | <div class="wa-caption-3xs">Five boxing wizards</div>        |
| `wa-caption-2xs`  | <div class="wa-caption-2xs">Five boxing wizards</div>        |
| `wa-caption-xs`   | <div class="wa-caption-xs">Five boxing wizards</div>         |
| `wa-caption-s`    | <div class="wa-caption-s">Five boxing wizards</div>          |
| `wa-caption-m`    | <div class="wa-caption-m">Five boxing wizards</div>          |
| `wa-caption-l`    | <div class="wa-caption-l">Five boxing wizards</div>          |
| `wa-caption-xl`   | <div class="wa-caption-xl">Five boxing wizards</div>         |
| `wa-caption-2xl`  | <div class="wa-caption-2xl">Five boxing wizards</div>        |
| `wa-caption-3xl`  | <div class="wa-caption-3xl">Five boxing wizards</div>        |
| `wa-caption-4xl`  | <div class="wa-caption-4xl">Five boxing wizards</div>        |
| `wa-caption-5xl`  | <div class="wa-caption-5xl">Five boxing wizards</div>        |

## 长文本

使用 `wa-longform-*` 类来样式化长内容，如文章或博客文章。每个类都指定一个对应于您主题中的 [字体大小标记](/docs/tokens/typography/#font-size) 的 `font-size`。

或者，使用 `wa-longform` 来应用相同的样式而没有显式的字体大小。

| 类名               | 预览                                                         |
| ------------------ | ------------------------------------------------------------ |
| `wa-longform-3xs`  | <div class="wa-longform-3xs">Five boxing wizards</div>       |
| `wa-longform-2xs`  | <div class="wa-longform-2xs">Five boxing wizards</div>       |
| `wa-longform-xs`   | <div class="wa-longform-xs">Five boxing wizards</div>        |
| `wa-longform-s`    | <div class="wa-longform-s">Five boxing wizards</div>         |
| `wa-longform-m`    | <div class="wa-longform-m">Five boxing wizards</div>         |
| `wa-longform-l`    | <div class="wa-longform-l">Five boxing wizards</div>         |
| `wa-longform-xl`   | <div class="wa-longform-xl">Five boxing wizards</div>        |
| `wa-longform-2xl`  | <div class="wa-longform-2xl">Five boxing wizards</div>       |
| `wa-longform-3xl`  | <div class="wa-longform-3xl">Five boxing wizards</div>       |
| `wa-longform-4xl`  | <div class="wa-longform-4xl">Five boxing wizards</div>       |
| `wa-longform-5xl`  | <div class="wa-longform-5xl">Five boxing wizards</div>       |

## 链接

使用 `wa-link` 来为交互式文本提供类似链接的外观。或者，使用 `wa-link-plain` 来从 `<a>` 元素中移除典型的链接样式。

| 类名             | 预览                                                         |
| ---------------- | ------------------------------------------------------------ |
| `wa-link`        | <div class="wa-link">Five boxing wizards</div>               |
| `wa-link-plain`  | <a href="" class="wa-link-plain">Five boxing wizards</a>     |

## 列表

有序 (`<ol>`) 和无序列表 (`<ul>`) 由 Web Awesome 的 [原生样式](/docs/utilities/native/) 或您的浏览器提供默认样式。使用 `wa-list-plain` 来清除任何内置的列表样式。

| 类名             | 预览                                                         |
| ---------------- | ------------------------------------------------------------ |
| `wa-list-plain`  | <ol class="wa-list-plain"><li>First list item</li><li>Second list item</li><li>Final list item</li></ol> |

## 表单控件

使用 `wa-form-control-*` 类，使用您主题中的 [表单控件标记](/docs/tokens/component-groups/#form-controls) 在典型表单控件上下文之外样式化标签、值、占位符和提示。

| 类名                      | 预览                                                         |
| ------------------------- | ------------------------------------------------------------ |
| `wa-form-control-label`   | <div class="wa-form-control-label">Five boxing wizards</div>  |
| `wa-form-control-value`   | <div class="wa-form-control-value">Five boxing wizards</div>  |
| `wa-form-control-placeholder` | <div class="wa-form-control-placeholder">Five boxing wizards</div> |
| `wa-form-control-hint`    | <div class="wa-form-control-hint">Five boxing wizards</div>   |

## 字体大小

使用单一用途的 `wa-font-size-*` 类，在没有额外样式的情况下，将您主题中的给定 [字体大小](/docs/tokens/typography/#font-size) 应用于任何元素。

| 类名                 | 预览                                                         |
| -------------------- | ------------------------------------------------------------ |
| `wa-font-size-3xs`   | <div class="wa-font-size-3xs">Five boxing wizards</div>      |
| `wa-font-size-2xs`   | <div class="wa-font-size-2xs">Five boxing wizards</div>      |
| `wa-font-size-xs`    | <div class="wa-font-size-xs">Five boxing wizards</div>       |
| `wa-font-size-s`     | <div class="wa-font-size-s">Five boxing wizards</div>        |
| `wa-font-size-m`     | <div class="wa-font-size-m">Five boxing wizards</div>        |
| `wa-font-size-l`     | <div class="wa-font-size-l">Five boxing wizards</div>        |
| `wa-font-size-xl`    | <div class="wa-font-size-xl">Five boxing wizards</div>       |
| `wa-font-size-2xl`   | <div class="wa-font-size-2xl">Five boxing wizards</div>      |
| `wa-font-size-3xl`   | <div class="wa-font-size-3xl">Five boxing wizards</div>      |
| `wa-font-size-4xl`   | <div class="wa-font-size-4xl">Five boxing wizards</div>      |
| `wa-font-size-5xl`   | <div class="wa-font-size-5xl">Five boxing wizards</div>      |

## 字体粗细

使用单一用途的 `wa-font-weight-*` 类，在没有额外样式的情况下，将您主题中的给定 [字体粗细](/docs/tokens/typography/#font-weight) 应用于任何元素。

| 类名                     | 预览                                                         |
| ------------------------ | ------------------------------------------------------------ |
| `wa-font-weight-light`   | <div class="wa-font-weight-light">Five boxing wizards</div>   |
| `wa-font-weight-normal`  | <div class="wa-font-weight-normal">Five boxing wizards</div>  |
| `wa-font-weight-semibold`| <div class="wa-font-weight-semibold">Five boxing wizards</div>|
| `wa-font-weight-bold`    | <div class="wa-font-weight-bold">Five boxing wizards</div>    |

## 文本颜色

使用单一用途的 `wa-color-text-*` 类，在没有额外样式的情况下，将您主题中的给定 [文本颜色](/docs/tokens/color/#text) 应用于任何元素。

| 类名                  | 预览                                                         |
| --------------------- | ------------------------------------------------------------ |
| `wa-color-text-quiet` | <div class="wa-color-text-quiet">Five boxing wizards</div>    |
| `wa-color-text-normal`| <div class="wa-color-text-normal">Five boxing wizards</div>   |
| `wa-color-text-link`  | <div class="wa-color-text-link">Five boxing wizards</div>     |

## 换行

使用 `wa-text-wrap-*` 类来控制文本跨多行的换行方式。这些工具应用标准 CSS [`text-wrap`](https://developer.mozilla.org/docs/Web/CSS/text-wrap) 值。

| 类名                  | 预览                                                                                                                                            |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `wa-text-wrap-nowrap` | <div class="wa-text-wrap-nowrap" style="max-width: 40ch; overflow: hidden;">The five boxing wizards jump quickly. How quickly daft jumping zebras vex!</div> |
| `wa-text-wrap-balance`| <div class="wa-text-wrap-balance" style="max-width: 40ch;">The five boxing wizards jump quickly. How quickly daft jumping zebras vex!</div>     |
| `wa-text-wrap-pretty` | <div class="wa-text-wrap-pretty" style="max-width: 40ch;">The five boxing wizards jump quickly. How quickly daft jumping zebras vex!</div>      |

:::info
`wa-text-wrap-pretty` 包装在 `@supports` 规则中，因为 Firefox 尚不支持 `text-wrap: pretty`。在不支持的浏览器中，该类没有效果，文本正常换行。
:::

## 截断

使用 `wa-text-truncate` 类来用省略号截断文本，而不是让它溢出或换行。

| 类名               | 预览                                                                                                                               |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `wa-text-truncate` | <div class="wa-text-truncate" style="max-width: 40ch;">The five boxing wizards jump quickly. How quickly daft jumping zebras vex!</div> |
