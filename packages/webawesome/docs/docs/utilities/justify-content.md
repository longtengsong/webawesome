---
title: 内容对齐
description: 内容对齐工具确定 flex 和 grid 容器中项目之间的空间如何分配。
layout: docs
tags: layoutUtilities
synonyms:
  - horizontal align
  - main axis
  - distribute
  - 水平对齐
  - 主轴
  - 分配
use-cases:
  - flex justify
  - space between
  - center horizontally
  - flex 对齐
  - 空间之间
  - 水平居中
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

这些工具类控制空间如何沿着 flex 或 grid 容器的 [主轴](#什么是主轴？) 分配，主轴是其子元素流动的方向。当您想将项目推到 [集群布局](/docs/utilities/cluster) 或 [堆叠布局](/docs/utilities/stack) 的一端、居中一行按钮或在标题中均匀分布一组导航链接时使用它们。

| 类名                           | `justify-content` 值  | 预览                                                                                                                |
| ------------------------------ | --------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `wa-justify-content-start`     | `flex-start`          | <div class="wa-cluster wa-gap-2xs wa-justify-content-start preview-wrapper"><div class="preview-block"></div><div class="preview-block"></div></div>     |
| `wa-justify-content-end`       | `flex-end`            | <div class="wa-cluster wa-gap-2xs wa-justify-content-end preview-wrapper"><div class="preview-block"></div><div class="preview-block"></div></div>       |
| `wa-justify-content-center`    | `center`              | <div class="wa-cluster wa-gap-2xs wa-justify-content-center preview-wrapper"><div class="preview-block"></div><div class="preview-block"></div></div>    |
| `wa-justify-content-space-around` | `space-around`     | <div class="wa-cluster wa-gap-2xs wa-justify-content-space-around preview-wrapper"><div class="preview-block"></div><div class="preview-block"></div></div> |
| `wa-justify-content-space-between` | `space-between`   | <div class="wa-cluster wa-gap-2xs wa-justify-content-space-between preview-wrapper"><div class="preview-block"></div><div class="preview-block"></div></div> |
| `wa-justify-content-space-evenly`  | `space-evenly`    | <div class="wa-cluster wa-gap-2xs wa-justify-content-space-evenly preview-wrapper"><div class="preview-block"></div><div class="preview-block"></div></div>  |

## 什么是主轴？

主轴与容器的内容方向平行。对于 `flex-direction` 为 `row` 的网格容器和 flex 容器，主轴沿内联方向运行。对于 `flex-direction` 为 `column` 的容器，主轴沿块方向运行。
