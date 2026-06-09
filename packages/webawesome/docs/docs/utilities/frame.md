---
title: 框架布局
description: 使用 `wa-frame` 类创建一个具有一致比例的响应式容器来包裹内容。
layout: docs
tags: layoutUtilities
synonyms:
  - aspect ratio
  - media frame
  - ratio box
  - 宽高比
  - 媒体框架
  - 比例框
use-cases:
  - video frame
  - image container
  - responsive embed
  - 视频框架
  - 图片容器
  - 响应式嵌入
---

<style>
  [class*='wa-frame']:has(div:empty) {
    border: var(--layout-example-border);
    padding: var(--layout-example-padding);
  }

  [class*='wa-frame'] div:empty {
    background-color: var(--layout-example-element-background);
    border-radius: var(--layout-example-element-border-radius);
    min-block-size: 4rem;
    min-inline-size: 4rem;
  }
</style>

框架是一个保持固定形状的盒子，无论它变得多大或多小。将图片、视频、地图或占位符包裹在 `wa-frame` 中，它默认保持为正方形，或者是您指定的横向、纵向或任何自定义宽高比，即使周围的布局调整大小。这意味着不再有黑边，不再有等待慢图片加载而折叠的盒子，也不再有最终高度不同的卡片。

将 `wa-frame` 与 [`wa-border-radius-*`](/docs/utilities/rounding) 类之一配对，以在不裁剪内部内容的情况下圆角。

```html {.example}
<div class="wa-frame" style="max-inline-size: 20rem;">
  <div></div>
</div>
```

## 示例

框架非常适合图片和图片占位符。

```html {.example}
<div class="wa-flank" style="--flank-size: 8rem;">
  <div class="wa-frame wa-border-radius-m">
    <img src="https://images.unsplash.com/photo-1523593288094-3ccfb6b2c192?q=20" alt="" />
  </div>
  <div class="wa-flank:end" style="--content-percentage: 70%">
    <div class="wa-stack wa-gap-xs">
      <h3>The Lord of the Rings: The Fellowship of the Ring</h3>
      <span>J.R.R. Tolkien</span>
    </div>
    <wa-button id="options-menu" appearance="plain">
      <wa-icon name="ellipsis" label="Options"></wa-icon>
    </wa-button>
    <wa-tooltip for="options-menu">Options</wa-tooltip>
  </div>
</div>
```

```html {.example}
<div class="wa-grid" style="--min-column-size: 25ch;">
  <wa-card>
    <div class="wa-frame:landscape" slot="media">
      <img src="https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=20" alt="Grey and white tabby kitten" />
    </div>
    <div class="wa-stack wa-gap-xs">
      <h3 class="wa-heading-m">White-socks</h3>
      <span class="wa-body-s">Kitten &bull; Male</span>
      <div class="wa-flank:end wa-gap-xs">
        <wa-button size="s" appearance="filled" variant="brand">Adopt this pet</wa-button>
        <wa-button id="fav-whitesocks" appearance="plain" size="s">
          <wa-icon name="heart" variant="regular" label="Favorite"></wa-icon>
        </wa-button>
        <wa-tooltip for="fav-whitesocks">Favorite</wa-tooltip>
      </div>
    </div>
  </wa-card>
  <wa-card>
    <div class="wa-frame:landscape" slot="header">
      <div class="wa-stack wa-align-items-center wa-gap-xs wa-caption-s">
        <wa-icon name="paw"></wa-icon>
        <span>Photo coming soon</span>
      </div>
    </div>
    <div class="wa-stack wa-gap-xs">
      <h3 class="wa-heading-m">Bumpkin</h3>
      <span class="wa-body-s">Adult &bull; Male</span>
      <div class="wa-flank:end wa-gap-xs">
        <wa-button size="s" appearance="filled" variant="brand">Adopt this pet</wa-button>
        <wa-button id="fav-bumpkin" appearance="plain" size="s">
          <wa-icon name="heart" variant="regular" label="Favorite"></wa-icon>
        </wa-button>
        <wa-tooltip for="fav-bumpkin">Favorite</wa-tooltip>
      </div>
    </div>
  </wa-card>
  <wa-card>
    <div class="wa-frame:landscape" slot="media">
      <img src="https://images.unsplash.com/photo-1445499348736-29b6cdfc03b9?q=20" alt="Diluted calico kitten" />
    </div>
    <div class="wa-stack wa-gap-xs">
      <h3 class="wa-heading-m">Swish-tail</h3>
      <span class="wa-body-s">Kitten &bull; Female</span>
      <div class="wa-flank:end wa-gap-xs">
        <wa-button size="s" appearance="filled" variant="brand">Adopt this pet</wa-button>
        <wa-button id="fav-swishtail" appearance="plain" size="s">
          <wa-icon name="heart" variant="regular" label="Favorite"></wa-icon>
        </wa-button>
        <wa-tooltip for="fav-swishtail">Favorite</wa-tooltip>
      </div>
    </div>
  </wa-card>
  <wa-card>
    <div class="wa-frame:landscape" slot="media">
      <img src="https://images.unsplash.com/photo-1517451330947-7809dead78d5?q=20" alt="Short-haired tabby cat" />
    </div>
    <div class="wa-stack wa-gap-xs">
      <h3 class="wa-heading-m">Sharp-ears</h3>
      <span class="wa-body-s">Adult &bull; Female</span>
      <div class="wa-flank:end wa-gap-xs">
        <wa-button size="s" appearance="filled" variant="brand">Adopt this pet</wa-button>
        <wa-button id="fav-sharpears" appearance="plain" size="s">
          <wa-icon name="heart" variant="regular" label="Favorite"></wa-icon>
        </wa-button>
        <wa-tooltip for="fav-sharpears">Favorite</wa-tooltip>
      </div>
    </div>
  </wa-card>
</div>
```

## 宽高比

框架默认具有正方形的宽高比。您可以在标记中向 `wa-frame` 类附加 `:square` (1 / 1)、`:landscape` (16 / 9) 或 `:portrait` (9 / 16) 来指定框架的宽高比。或者，您可以定义 `aspect-ratio` 属性来设置自定义比例。

```html {.example}
<div class="wa-grid">
  <div class="wa-frame:landscape">
    <div></div>
  </div>
  <div class="wa-frame:portrait">
    <div></div>
  </div>
  <div class="wa-frame" style="aspect-ratio: 4 / 3;">
    <div></div>
  </div>
</div>
```

## 圆角

框架默认具有正方形的圆角。您可以向带有 `wa-frame` 的元素添加以下任何 [`wa-border-radius-*`](/docs/utilities/rounding) 类来指定圆角：

- `wa-border-radius-s`
- `wa-border-radius-m`
- `wa-border-radius-l`
- `wa-border-radius-pill`
- `wa-border-radius-circle`
- `wa-border-radius-square`

或者，您可以定义 `border-radius` 属性来设置自定义圆角。

```html {.example}
<div class="wa-grid">
  <div class="wa-frame wa-border-radius-l">
    <div></div>
  </div>
  <div class="wa-frame wa-border-radius-circle">
    <div></div>
  </div>
  <div class="wa-frame" style="border-radius: 50% 0%;">
    <div></div>
  </div>
</div>
```
