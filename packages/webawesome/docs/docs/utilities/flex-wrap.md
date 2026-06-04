---
title: Flex 换行
description: Flex 换行工具指定 flex 容器内的项目如何换行。
layout: docs
tags: layoutUtilities
synonyms:
  - wrapping
  - flow
  - line wrap
  - 换行
  - 流动
  - 文本换行
use-cases:
  - responsive wrap
  - multi-line flex
  - flex wrap reverse
  - nowrap
  - 响应式换行
  - 多行 flex
  - flex 反向换行
  - 不换行
---

<style>
  .preview-wrapper {
    border: var(--layout-example-border);
    border-radius: var(--wa-border-radius-m);
    min-block-size: 3em;
    max-inline-size: 6em;
    padding: var(--wa-space-2xs);

    counter-reset: item-counter;
  }
  
  .preview-block {
    aspect-ratio: 1 / 1;
    background-color: var(--layout-example-element-background);
    border-radius: var(--wa-border-radius-s);
    min-block-size: 2em;

    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      counter-increment: item-counter;
      content: counter(item-counter);
      color: var(--layout-example-element-color);
    }
  }
</style>

这些工具类控制 flex 容器内的项目在水平空间不足时是否换行到新行，以及换行的方向。使用它们强制 [集群布局](/docs/utilities/cluster) 或 [分割布局](/docs/utilities/split) 无论宽度如何都保持在一行，或者翻转换行方向，使新行出现在上一行的上方而不是下方。

## Flex 换行类

| 类名                  | `flex-wrap` 值 | 预览                                                                                                                   |
| --------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `wa-flex-wrap`        | `wrap`         | <div class="wa-cluster wa-gap-2xs wa-flex-wrap preview-wrapper"><div class="preview-block"></div><div class="preview-block"></div><div class="preview-block"></div></div>         |
| `wa-flex-nowrap`      | `nowrap`       | <div class="wa-cluster wa-gap-2xs wa-flex-nowrap preview-wrapper"><div class="preview-block"></div><div class="preview-block"></div><div class="preview-block"></div></div>       |
| `wa-flex-wrap-reverse`| `wrap-reverse` | <div class="wa-cluster wa-gap-2xs wa-flex-wrap-reverse preview-wrapper"><div class="preview-block"></div><div class="preview-block"></div><div class="preview-block"></div></div> |
