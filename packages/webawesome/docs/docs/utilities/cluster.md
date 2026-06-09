---
title: 集群布局
description: 使用 `wa-cluster` 类在一行中以均匀间距排列元素，当空间有限时允许项目换行。
layout: docs
tags: layoutUtilities
synonyms:
  - inline group
  - horizontal group
  - tag group
  - flow layout
  - 内联组
  - 水平组
  - 标签组
  - 流式布局
use-cases:
  - button row
  - tag list
  - chip group
  - inline list
  - pill group
  - 按钮行
  - 标签列表
  - 芯片组
  - 内联列表
  - 胶囊组
---

<style>
  :is(.wa-flank, .wa-grid, .wa-stack) > [class*='wa-cluster']:has(div:empty) {
    border: var(--layout-example-border);
    border-radius: var(--layout-example-border-radius);
    padding: var(--layout-example-padding);
  }

  [class*='wa-cluster'] div:empty {
    background-color: var(--layout-example-element-background);
    border-radius: var(--layout-example-element-border-radius);
    min-block-size: 4rem;
    min-inline-size: 4rem;
  }
</style>

集群布局将其子元素以内联方式排列，间距均匀，并在容器空间不足时将项目换行到新行。当您有一组不同宽度的水平项目（如标签列表、按钮行、内联元数据或面包屑导航）时使用它，无需编写任何媒体查询即可在每个屏幕尺寸上保持布局整洁。

默认情况下，集群的子元素垂直居中。将 `wa-cluster` 与 [`wa-gap-*`](/docs/utilities/gap) 类配对以更改间距，并与 [`wa-align-items-*`](/docs/utilities/align-items) 类配对以更改项目在交叉轴上的对齐方式。

```html {.example}
<div class="wa-cluster">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<!-- 我们会改变 div 的大小来展示集群元素的流动 -->
<style>
  .wa-cluster div:empty:nth-child(3n) {
    min-inline-size: 6rem;
  }
  .wa-cluster div:empty:nth-child(3n + 2) {
    min-inline-size: 8rem;
  }
</style>
```

## 示例

集群布局非常适合内联列表和对齐不同大小的项目。

```html {.example}
<div class="wa-cluster">
  <wa-icon name="web-awesome"></wa-icon>
  <a href="#">Components</a>
  <a href="#">Layout</a>
  <a href="#">Patterns</a>
  <a href="#">Theming</a>
</div>
```

```html {.example}
<div class="wa-stack">
  <h3 class="wa-heading-2xl">Withywindle Pub and Eatery</h3>
  <div class="wa-cluster wa-gap-xs">
    <wa-rating value="4.6" read-only></wa-rating>
    <strong>4.6</strong>
    <span>(419 reviews)</span>
  </div>
  <div class="wa-cluster wa-gap-xs">
    <div class="wa-cluster wa-gap-3xs">
      <wa-icon name="dollar" style="color: var(--wa-color-green-60);"></wa-icon>
      <wa-icon name="dollar" style="color: var(--wa-color-green-60);"></wa-icon>
      <wa-icon name="dollar" style="color: var(--wa-color-green-60);"></wa-icon>
    </div>
    <span class="wa-caption-s">&bull;</span>
    <wa-tag size="s">Comfort Food</wa-tag>
    <wa-tag size="s">Gastropub</wa-tag>
    <wa-tag size="s">Cocktail Bar</wa-tag>
    <wa-tag size="s">Vegetarian</wa-tag>
    <wa-tag size="s">Gluten Free</wa-tag>
  </div>
</div>
```

## 对齐项目

默认情况下，项目在 `wa-cluster` 容器的块方向上居中。您可以向带有 `wa-cluster` 的元素添加以下任何 [`wa-align-items-*`](/docs/utilities/align-items) 类，以指定项目在块方向上的对齐方式：

- `wa-align-items-start`
- `wa-align-items-end`
- `wa-align-items-center`
- `wa-align-items-stretch`
- `wa-align-items-baseline`

```html {.example}
<div class="wa-stack">
  <div class="wa-cluster wa-align-items-start" style="min-height: 8rem;">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="wa-cluster wa-align-items-end" style="min-height: 8rem;">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="wa-cluster wa-align-items-center" style="min-height: 8rem;">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="wa-cluster wa-align-items-stretch" style="min-height: 8rem;">
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```

## 间距

默认情况下，集群项目之间的间距使用主题中的 `--wa-space-m`。您可以向带有 `wa-cluster` 的元素添加以下任何 [`wa-gap-*`](/docs/utilities/gap) 类，以指定项目之间的间距：

- `wa-gap-0`
- `wa-gap-3xs`
- `wa-gap-2xs`
- `wa-gap-xs`
- `wa-gap-s`
- `wa-gap-m`
- `wa-gap-l`
- `wa-gap-xl`
- `wa-gap-2xl`
- `wa-gap-3xl`
- `wa-gap-4xl`
- `wa-gap-5xl`

```html {.example}
<div class="wa-stack">
  <div class="wa-cluster wa-gap-2xs">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="wa-cluster wa-gap-2xl">
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```
