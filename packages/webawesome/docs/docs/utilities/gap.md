---
title: 间距
description: 间距工具像其他 Web Awesome 布局工具一样设置 flex 和 grid 容器的 gap 属性。
layout: docs
tags: layoutUtilities
synonyms:
  - spacing
  - gutter
  - margin
  - space between
  - 间距
  -  gutter
  - 边距
  - 空间之间
use-cases:
  - flex gap
  - grid gap
  - element spacing
  - flex 间距
  - grid 间距
  - 元素间距
---

<style>
  .preview-wrapper {
    border: var(--layout-example-border);
    border-radius: var(--wa-border-radius-m);
    min-block-size: 3em;
    min-inline-size: 5em;
    padding: var(--wa-space-2xs);
  }

  .preview-block {
    aspect-ratio: 1 / 1;
    background-color: var(--layout-example-element-background);
    border-radius: var(--wa-border-radius-s);
    min-block-size: 1em;
  }
</style>

这些工具类设置 flex 或 grid 容器内项目之间的空间。将它们与 [集群布局](/docs/utilities/cluster)、[堆叠布局](/docs/utilities/stack)、[网格布局](/docs/utilities/grid) 或 [分割布局](/docs/utilities/split) 等布局工具配对以覆盖该布局的默认间距，或者将 `wa-gap-*` 应用于您自己的任何 `display: flex` 或 `display: grid` 元素，以获得相同的标记而无需编写自定义 CSS。

除 `wa-gap-0` 外的每个类都对应于您主题中的 [`--wa-space-*`](/docs/tokens/space) 标记之一，因此您选择的间距与设计系统的其余部分保持同步。

## 间距类

| 类名         | `gap` 值         | 预览                                                                                                                 |
| ------------ | ----------------- | -------------------------------------------------------------------------------------------------------------------- |
| `wa-gap-0`   | `0`               | <div class="preview-wrapper wa-cluster wa-gap-0"><div class="preview-block"></div><div class="preview-block"></div></div>   |
| `wa-gap-3xs` | `--wa-space-3xs`  | <div class="preview-wrapper wa-cluster wa-gap-3xs"><div class="preview-block"></div><div class="preview-block"></div></div> |
| `wa-gap-2xs` | `--wa-space-2xs`  | <div class="preview-wrapper wa-cluster wa-gap-2xs"><div class="preview-block"></div><div class="preview-block"></div></div> |
| `wa-gap-xs`  | `--wa-space-xs`   | <div class="preview-wrapper wa-cluster wa-gap-xs"><div class="preview-block"></div><div class="preview-block"></div></div>  |
| `wa-gap-s`   | `--wa-space-s`    | <div class="preview-wrapper wa-cluster wa-gap-s"><div class="preview-block"></div><div class="preview-block"></div></div>   |
| `wa-gap-m`   | `--wa-space-m`    | <div class="preview-wrapper wa-cluster wa-gap-m"><div class="preview-block"></div><div class="preview-block"></div></div>   |
| `wa-gap-l`   | `--wa-space-l`    | <div class="preview-wrapper wa-cluster wa-gap-l"><div class="preview-block"></div><div class="preview-block"></div></div>   |
| `wa-gap-xl`  | `--wa-space-xl`   | <div class="preview-wrapper wa-cluster wa-gap-xl"><div class="preview-block"></div><div class="preview-block"></div></div>  |
| `wa-gap-2xl` | `--wa-space-2xl`  | <div class="preview-wrapper wa-cluster wa-gap-2xl"><div class="preview-block"></div><div class="preview-block"></div></div> |
| `wa-gap-3xl` | `--wa-space-3xl`  | <div class="preview-wrapper wa-cluster wa-gap-3xl"><div class="preview-block"></div><div class="preview-block"></div></div> |
| `wa-gap-4xl` | `--wa-space-4xl`  | <div class="preview-wrapper wa-cluster wa-gap-4xl"><div class="preview-block"></div><div class="preview-block"></div></div> |
| `wa-gap-5xl` | `--wa-space-5xl`  | <div class="preview-wrapper wa-cluster wa-gap-5xl"><div class="preview-block"></div><div class="preview-block"></div></div> |
