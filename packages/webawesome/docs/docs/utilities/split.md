---
title: 分割布局
description: 使用 `wa-split` 类在可用空间中均匀分布两个或多个项目，无论是在行还是列中。
layout: docs
tags: layoutUtilities
synonyms:
  - holy grail
  - sidebar layout
  - main aside
  - 侧边栏布局
  - 主侧边
use-cases:
  - two column
  - content sidebar
  - layout split
  - 两列
  - 内容侧边栏
  - 布局分割
---

<style>
  :is(.wa-flank, .wa-grid, .wa-stack) > [class*='wa-split']:has(div:empty) {
    border: var(--layout-example-border);
    border-radius: var(--layout-example-border-radius);
    padding: var(--layout-example-padding);
  }

  [class*='wa-split'] div:empty {
    background-color: var(--layout-example-element-background);
    border-radius: var(--layout-example-element-border-radius);
    min-block-size: 4rem;
    min-inline-size: 4rem;
  }
</style>

分割布局将其子项目推到容器的相对两端，填充它们之间的空间。当您需要一侧有徽标而另一侧有导航、节标题与操作按钮配对或标签和值位于行的相对两端的列表项时，这就是您想要的。任意数量的子项都可以：第一个靠近开头，最后一个靠近结尾，中间的任何内容均匀分布。

默认情况下，分割布局水平运行；附加 `:column` 以改为垂直堆叠项目。当容器变得太窄而无法容纳所有内容在一行时，项目会自动换行。

```html {.example}
<div class="wa-split">
  <div></div>
  <div></div>
</div>
```

## 示例

分割布局对于导航、页眉和页脚布局特别有用。

```html {.example}
<div class="wa-flank">
  <div class="wa-split:column">
    <div class="wa-stack">
      <wa-button appearance="plain">
        <wa-icon name="house" label="Home"></wa-icon>
      </wa-button>
      <wa-button appearance="plain">
        <wa-icon name="calendar" label="Calendar"></wa-icon>
      </wa-button>
      <wa-button appearance="plain">
        <wa-icon name="envelope" label="Mail"></wa-icon>
      </wa-button>
    </div>
    <div class="wa-stack">
      <wa-divider></wa-divider>
      <wa-button appearance="plain">
        <wa-icon name="right-from-bracket" label="Sign Out"></wa-icon>
      </wa-button>
    </div>
  </div>
  <div class="placeholder"></div>
</div>

<style>
  .placeholder {
    min-block-size: 300px;
    background-color: var(--wa-color-neutral-fill-quiet);
    border: dashed var(--wa-border-width-s) var(--wa-color-neutral-border-normal);
    border-radius: var(--wa-border-radius-l);
  }
</style>
```

```html {.example}
<div class="wa-stack">
  <div class="wa-split">
    <wa-icon name="web-awesome" label="Web Awesome" class="wa-font-size-xl"></wa-icon>
    <div class="wa-cluster">
      <wa-button appearance="filled">Sign Up</wa-button>
      <wa-button appearance="outlined">Log In</wa-button>
    </div>
  </div>
  <div class="placeholder"></div>
</div>

<style>
  .placeholder {
    min-block-size: 300px;
    background-color: var(--wa-color-neutral-fill-quiet);
    border: dashed var(--wa-border-width-s) var(--wa-color-neutral-border-normal);
    border-radius: var(--wa-border-radius-l);
  }
</style>
```

## 方向

通过向 `wa-split` 类附加 `:row` 或 `:column`，项目可以跨一行或一列分割。

```html {.example}
<div class="wa-flank wa-align-items-start" style="block-size: 16rem;">
  <div class="wa-split:column">
    <div></div>
    <div></div>
  </div>
  <div class="wa-split:row">
    <div></div>
    <div></div>
  </div>
</div>
```

## 对齐项目

默认情况下，项目在 `wa-split` 容器的交叉轴上居中。您可以向带有 `wa-split` 的元素添加以下任何 [`wa-align-items-*`](/docs/utilities/align-items) 类，以指定项目的对齐方式：

- `wa-align-items-start`
- `wa-align-items-end`
- `wa-align-items-center`
- `wa-align-items-stretch`
- `wa-align-items-baseline`

这些修饰符指定对于 `wa-split:row` 在块方向上的项目对齐方式，以及对于 `wa-split:column` 在内联方向上的对齐方式。

```html {.example}
<div class="wa-stack">
  <div class="wa-split wa-align-items-start" style="height: 8rem;">
    <div></div>
    <div></div>
  </div>
  <div class="wa-split wa-align-items-end" style="height: 8rem;">
    <div></div>
    <div></div>
  </div>
  <div class="wa-split wa-align-items-center" style="height: 8rem;">
    <div></div>
    <div></div>
  </div>
  <div class="wa-split wa-align-items-stretch" style="height: 8rem;">
    <div></div>
    <div></div>
  </div>
</div>
```

## 间距

分割布局的间距决定了项目在换行之前可以有多近。默认情况下，分割项目之间的间距使用主题中的 `--wa-space-m`。您可以向带有 `wa-split` 的元素添加以下任何 [`wa-gap-*`](/docs/utilities/gap) 类，以指定项目之间的间距：

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

```html {.example}
<div class="wa-stack">
  <div class="wa-split wa-gap-3xs">
    <div></div>
    <div></div>
  </div>
  <div class="wa-split wa-gap-3xl">
    <div></div>
    <div></div>
  </div>
</div>
```
