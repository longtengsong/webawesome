---
title: 对齐项目
description: 使用 align-items 和 align-self 工具类控制 flex 和 grid 容器中项目在交叉轴上的对齐。
layout: docs
tags: layoutUtilities
synonyms:
  - vertical align
  - cross axis
  - align
  - 垂直对齐
  - 交叉轴
  - 对齐
use-cases:
  - flex align
  - grid align
  - center vertically
  - flex 对齐
  - grid 对齐
  - 垂直居中
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

这些工具类控制 flex 和 grid 容器的项目如何沿着容器的[交叉轴](#什么是交叉轴？)对齐，交叉轴是与子元素流动方向垂直的轴。当 [cluster](/docs/utilities/cluster)、[stack](/docs/utilities/stack)、[flank](/docs/utilities/flank)、[split](/docs/utilities/split) 或 [grid](/docs/utilities/grid) 的默认对齐方式不符合需求时使用它们：将图标与文字居中对齐、让一行中的所有卡片高度相同、或将表单标签固定在每行顶部。

| 类名                      | `align-items` 值     | 预览                                                                                                                                 |
| ------------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `wa-align-items-baseline` | `baseline`            | <div class="wa-cluster wa-gap-2xs wa-align-items-baseline preview-wrapper"><div class="preview-block"></div><div class="preview-block"></div><div class="preview-block"></div></div> |
| `wa-align-items-center`   | `center`              | <div class="wa-cluster wa-gap-2xs wa-align-items-center preview-wrapper"><div class="preview-block"></div><div class="preview-block"></div><div class="preview-block"></div></div> |
| `wa-align-items-end`      | `flex-end`            | <div class="wa-cluster wa-gap-2xs wa-align-items-end preview-wrapper"><div class="preview-block"></div><div class="preview-block"></div><div class="preview-block"></div></div> |
| `wa-align-items-start`    | `flex-start`          | <div class="wa-cluster wa-gap-2xs wa-align-items-start preview-wrapper"><div class="preview-block"></div><div class="preview-block"></div><div class="preview-block"></div></div> |
| `wa-align-items-stretch`  | `stretch`             | <div class="wa-cluster wa-gap-2xs wa-align-items-stretch preview-wrapper"><div class="preview-block"></div><div class="preview-block"></div><div class="preview-block"></div></div> |

## 使用 Align Self 覆盖

当您需要某个 flex 或 grid 项目偏离容器的 `align-items` 属性时，使用 `wa-align-self-*` 类来设置项目的 `align-self` 属性，从而单独改变它在容器[交叉轴](#什么是交叉轴？)上的对齐方式。

| 类名                     | `align-self` 值       | 预览                                                                                                                            |
| ------------------------ | --------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `wa-align-self-center`   | `center`              | <div class="wa-cluster wa-gap-2xs preview-wrapper"><div class="preview-block de-emphasize"></div><div class="preview-block wa-align-self-center"></div><div class="preview-block de-emphasize"></div></div> |
| `wa-align-self-baseline` | `baseline`            | <div class="wa-cluster wa-gap-2xs preview-wrapper"><div class="preview-block de-emphasize"></div><div class="preview-block wa-align-self-baseline"></div><div class="preview-block de-emphasize"></div></div> |
| `wa-align-self-end`      | `flex-end`            | <div class="wa-cluster wa-gap-2xs preview-wrapper"><div class="preview-block de-emphasize"></div><div class="preview-block wa-align-self-end"></div><div class="preview-block de-emphasize"></div></div> |
| `wa-align-self-start`    | `flex-start`          | <div class="wa-cluster wa-gap-2xs preview-wrapper"><div class="preview-block de-emphasize"></div><div class="preview-block wa-align-self-start"></div><div class="preview-block de-emphasize"></div></div> |
| `wa-align-self-stretch`  | `stretch`             | <div class="wa-cluster wa-gap-2xs preview-wrapper"><div class="preview-block de-emphasize"></div><div class="preview-block wa-align-self-stretch"></div><div class="preview-block de-emphasize"></div></div> |

## 什么是交叉轴？

交叉轴与容器的内容方向垂直。对于 `flex-direction` 为 `row` 且内容沿内联方向流动的容器，交叉轴沿块方向。对于 `flex-direction` 为 `column` 且内容沿块方向流动的容器，交叉轴沿内联方向。
