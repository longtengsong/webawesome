---
title: 网格布局
description: 使用 `wa-grid` 类将元素排列成自动适应可用空间的行和列。
layout: docs
tags: layoutUtilities
synonyms:
  - columns
  - layout grid
  - 列
  - 布局网格
  - css grid
use-cases:
  - responsive grid
  - card grid
  - auto grid
  - 响应式网格
  - 卡片网格
  - 自动网格
  - masonry
---

<style>
  :is(.wa-flank, .wa-grid, .wa-stack) > [class*='wa-grid']:has(div:empty) {
    border: var(--layout-example-border);
    border-radius: var(--layout-example-border-radius);
    padding: var(--layout-example-padding);
  }

  [class*='wa-grid'] div:empty {
    background-color: var(--layout-example-element-background);
    border-radius: var(--layout-example-element-border-radius);
    min-block-size: 4rem;
    min-inline-size: 4rem;
  }
</style>

网格将其子元素放置在大小均匀的列中，这些列会随着容器大小调整而收缩、增长和重新流动，无需管理任何断点。将任意数量的项目放入 `wa-grid` 中，该工具会根据容器的宽度和您要求的最小列大小计算出每行可以容纳多少个。这是构建卡片画廊、产品列表、仪表板以及任何应该从手机上的一列适应到桌面上的多列内容的最快方法。

设置 `--min-column-size` 来更改项目开始换行的阈值，将 `wa-grid` 与 [`wa-gap-*`](/docs/utilities/gap) 类配对以调整单元格之间的间距，或者向单个项目添加 `wa-span-grid` 以使其跨越所有列。

```html {.example}
<div class="wa-grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

## 示例

网格非常适合卡片列表和设计用于浏览的内容。

```html {.example}
<div class="wa-grid">
  <div class="wa-stack wa-gap-s">
    <div class="wa-frame wa-border-radius-l">
      <img src="https://images.unsplash.com/photo-1520763185298-1b434c919102?q=20" alt="" />
    </div>
    <h3 class="wa-heading-m">Tulip</h3>
    <em>Tulipa gesneriana</em>
  </div>
  <div class="wa-stack wa-gap-s">
    <div class="wa-frame wa-border-radius-l">
      <img src="https://images.unsplash.com/photo-1591767134492-338e62f7b5a2?q=20" alt="" />
    </div>
    <h3 class="wa-heading-m">Peony</h3>
    <em>Paeonia officinalis</em>
  </div>
  <div class="wa-stack wa-gap-s">
    <div class="wa-frame wa-border-radius-l">
      <img src="https://images.unsplash.com/photo-1590872000386-4348c6393115?q=20" alt="" />
    </div>
    <h3 class="wa-heading-m">Poppy</h3>
    <em>Papaver rhoeas</em>
  </div>
  <div class="wa-stack wa-gap-s">
    <div class="wa-frame wa-border-radius-l">
      <img src="https://images.unsplash.com/photo-1516723338795-324c7c33f700?q=20" alt="" />
    </div>
    <h3 class="wa-heading-m">Sunflower</h3>
    <em>Helianthus annuus</em>
  </div>
  <div class="wa-stack wa-gap-s">
    <div class="wa-frame wa-border-radius-l">
      <img src="https://images.unsplash.com/photo-1563601841845-74a0a8ab7c8a?q=20" alt="" />
    </div>
    <h3 class="wa-heading-m">Daisy</h3>
    <em>Bellis perennis</em>
  </div>
</div>
```

```html {.example}
<div class="wa-grid" style="--min-column-size: 30ch;">
  <wa-card>
    <div class="wa-flank">
      <wa-avatar shape="rounded">
        <wa-icon slot="icon" name="globe"></wa-icon>
      </wa-avatar>
      <div class="wa-stack wa-gap-3xs">
        <span class="wa-caption-xs">Population (Zion)</span>
        <span class="wa-cluster wa-gap-xs">
          <span class="wa-heading-2xl">251,999</span>
          <wa-badge variant="danger">-3%&nbsp;<wa-icon name="arrow-trend-down"></wa-icon></wa-badge>
        </span>
      </div>
    </div>
  </wa-card>
  <wa-card>
    <div class="wa-flank">
      <wa-avatar shape="rounded">
        <wa-icon slot="icon" name="microchip"></wa-icon>
      </wa-avatar>
      <div class="wa-stack wa-gap-3xs">
        <span class="wa-caption-xs">Minds Freed</span>
        <span class="wa-cluster wa-gap-xs">
          <span class="wa-heading-2xl">0.36%</span>
          <wa-badge variant="success">+0.03%&nbsp;<wa-icon name="arrow-trend-up"></wa-icon></wa-badge>
        </span>
      </div>
    </div>
  </wa-card>
  <wa-card>
    <div class="wa-flank">
      <wa-avatar shape="rounded">
        <wa-icon slot="icon" name="robot"></wa-icon>
      </wa-avatar>
      <div class="wa-stack wa-gap-3xs">
        <span class="wa-caption-xs">Agents Discovered</span>
        <span class="wa-cluster wa-gap-xs">
          <span class="wa-heading-2xl">3</span>
          <wa-badge variant="neutral">±0%&nbsp;<wa-icon name="minus"></wa-icon></wa-badge>
        </span>
      </div>
    </div>
  </wa-card>
  <wa-card>
    <div class="wa-flank">
      <wa-avatar shape="rounded">
        <wa-icon slot="icon" name="spaghetti-monster-flying"></wa-icon>
      </wa-avatar>
      <div class="wa-stack wa-gap-3xs">
        <span class="wa-caption-xs">Sentinels Controlled</span>
        <span class="wa-cluster wa-gap-xs">
          <span class="wa-heading-2xl">208</span>
          <wa-badge variant="success">+1%&nbsp;<wa-icon name="arrow-trend-up"></wa-icon></wa-badge>
        </span>
      </div>
    </div>
  </wa-card>
</div>

<style>
  wa-badge > wa-icon {
    color: color-mix(in oklab, currentColor, transparent 40%);
  }
</style>
```

## 尺寸

默认情况下，当网格的列大小小于 `20ch` 时，网格项目会换行，但您可以使用 `--min-column-size` 属性设置自定义的最小列大小。

```html {.example}
<div class="wa-stack">
  <div class="wa-grid" style="--min-column-size: 200px;">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="wa-grid" style="--min-column-size: 6rem;">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```

## 间距

默认情况下，网格项目之间的间距使用主题中的 `--wa-space-m`。您可以向带有 `wa-grid` 的元素添加以下任何 [`wa-gap-*`](/docs/utilities/gap) 类，以指定项目之间的间距：

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
  <div class="wa-grid wa-gap-2xs">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="wa-grid wa-gap-2xl">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```

## 跨越网格

您可以向任何网格项目添加 `wa-span-grid` 以允许它跨越所有网格列。这样，网格项目占据自己的网格行。

```html {.example}
<div class="wa-grid">
  <div></div>
  <div></div>
  <div class="wa-span-grid"></div>
  <div></div>
  <div></div>
</div>
```
