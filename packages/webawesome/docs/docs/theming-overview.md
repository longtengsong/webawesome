---
title: 主题概述
description: 使用 @SITE_NAME@ 的主题系统为您的项目设置样式 — 调色板、变体、主题和深色模式。
layout: page-outline
---

{% from "pro-badge.njk" import proBadge %}

@SITE_NAME@ 主题在整个库中应用统一的风格，由可叠加的层次构建而成 — 一个[主题](/docs/themes)、一个[颜色调色板](/docs/color-palettes)、[变体](/docs/tokens/color#variant-colors)以及浅色或深色配色方案 — 您可以通过 `<html>` 元素上的类进行自由组合。

:::info
**实时体验！** 使用本站点头部中的 <wa-tag class="tag-ui" appearance="outlined"><wa-icon name="palette" variant="regular"></wa-icon></wa-tag> 主题和 <wa-tag class="tag-ui" appearance="outlined"><wa-icon name="sun-bright" variant="regular"></wa-icon></wa-tag> 配色方案选择器来预览主题或切换浅色/深色模式。
:::

## 关键概念

### 主题

`.wa-theme-{name}`

主题是整体外观 — 字体、边框、间距、阴影以及每个[变体](/docs/tokens/color#variant-colors)如何在各个组件中使用。两个主题可以共享同一个[调色板](/docs/color-palettes)和[变体](/docs/tokens/color#variant-colors)，但仍然给人完全不同的感觉。主题附带一个默认调色板，并可能包含针对各个组件的自定义 CSS 覆盖。

<wa-carousel class="theme-showcase" pagination loop mouse-dragging>
  {% for theme in themer.themes %}
  <wa-carousel-item>
    <figure>
      <div class="theme-frame">
        <img class="theme-img-light" src="/assets/images/themes/{{ theme.filename | stripExtension }}-light.png" alt="{{ theme.name }} 主题预览（浅色）" loading="lazy" />
        <img class="theme-img-dark" src="/assets/images/themes/{{ theme.filename | stripExtension }}-dark.png" alt="{{ theme.name }} 主题预览（深色）" loading="lazy" />
      </div>
      <figcaption class="wa-stack wa-gap-3xs">
        <div class="wa-cluster wa-gap-xs wa-font-size-m">
          <strong>{{ theme.name }}</strong>
          {% if theme.isPro %}{{ proBadge({ description: "此主题需要访问 " ~ site.namePro }) }}{% endif %}
        </div>
        <div class="wa-font-size-s">{{ theme.description }}</div>
      </figcaption>
    </figure>
  </wa-carousel-item>
  {% endfor %}
</wa-carousel>

<style>
  .theme-showcase {
    --aspect-ratio: 16 / 9;
    width: 100%;
    /* Match the docs' major-block rhythm (#content rules in docs.css). */
    margin-block: var(--wa-space-xl);
  }
  .theme-showcase::part(base) {
    column-gap: 0;
  }
  
  .theme-showcase figure {
    margin: 0;
    height: 100%;
    position: relative;
    /* Card-like wrapper: border, padding, background. Matches wa-card's surface and inner spacing. */
    box-sizing: border-box;
    border: var(--wa-border-style) var(--wa-panel-border-width) var(--wa-color-neutral-border-quiet);
    border-radius: var(--wa-panel-border-radius);
    background: var(--wa-color-surface-default);
    padding: var(--wa-space-s);
  }

  .theme-showcase .theme-frame {
    position: relative;
    height: 100%;
    overflow: hidden;
    border-radius: var(--wa-border-radius-s);
  }

  .theme-showcase img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Anchor slightly off the top-left so the comparison scrubber on the screenshot's left edge gets cropped. */
    object-position: -3% -1%;
    background: var(--wa-color-surface-default);
    /* Scale up to fill the carousel with the theme's UI content,
       cropping the screenshot's outer gray padding. Source PNGs are
       2928x1636 so 1.4x stays well below natural dimensions at any
       reasonable viewport width. */
    transform: scale(1.4);
    transform-origin: top left;
  }

  /* Swap between light and dark screenshots based on the docs' explicit color scheme toggle. */
  .theme-showcase .theme-img-dark {
    display: none;
  }
  .wa-dark .theme-showcase .theme-img-light {
    display: none;
  }
  .wa-dark .theme-showcase .theme-img-dark {
    display: block;
  }

  .theme-showcase figcaption {
    position: absolute;
    /* Inset to match the figure's padding so the caption sits inside the card frame, not over the border. */
    inset-inline: var(--wa-space-s);
    inset-block-end: var(--wa-space-s);
    padding: var(--wa-space-m);
    color: var(--wa-color-neutral-on-loud);
    /* Slightly transparent dark scrim — denser than --wa-color-overlay-modal so the title reads cleanly. */
    background: color-mix(in oklab, var(--wa-color-neutral-fill-loud), transparent 10%);
    border-radius: 0 0 var(--wa-border-radius-m) var(--wa-border-radius-m);
  }
</style>

您的主题由 `<html>` 元素上的 `class="wa-theme-{name}"` 决定。如果未指定类，则使用默认主题。

<wa-button appearance="outlined" size="s" href="/docs/themes">
  浏览内置主题
  <wa-icon slot="end" name="arrow-right"></wa-icon>
</wa-button>

### 颜色调色板

`.wa-palette-{name}`

颜色调色板是完整的 10 种色调集合 — 红色、橙色、黄色、绿色、青色、蓝色、靛蓝色、紫色、粉红色和灰色 — 每种色调从 `05`（最深）到 `95`（最浅）各有 11 个色阶，全部作为[颜色设计令牌](/docs/tokens/color)提供。

每个调色板都有其自身的色相偏移和色度，因此切换调色板会改变您项目的整体感觉 — 尤其是与[主题](/docs/themes)和[变体颜色](/docs/tokens/color#variant-colors)搭配使用时。您的调色板由 `<html>` 元素上的 `class="wa-palette-{name}"` 决定；如果未指定类，则使用默认调色板。

{% include 'theming/color-palette-viewer.njk' %}

<wa-button appearance="outlined" size="s" href="/docs/color-palettes">
  浏览所有调色板
  <wa-icon slot="end" name="arrow-right"></wa-icon>
</wa-button>

### 变体

`.wa-{variant}-{hue}`

变体将调色板色调分配给五种语义角色 — `brand`（品牌）、`neutral`（中性）、`success`（成功）、`warning`（警告）和 `danger`（危险） — 这样按钮和 callout 等组件可以通过颜色传达含义。调色板中的任意色调都可以通过 `class="wa-{variant}-{hue}"" 分配给任意变体。将类应用到 `<html>` 元素以全局设置变体，应用到包装器以将其限定到一个部分，或应用到单个组件以仅覆盖该元素。如需更深入的自定义，请在自己的 CSS 中[覆盖 `--wa-color-{variant}-*` 令牌](/docs/customizing#customizing-with-css)。

{% set colorScales = ["brand", "neutral", "success", "warning", "danger"] %}
{% include 'theming/color-palette-viewer.njk' %}

<wa-button appearance="outlined" size="s" href="/docs/tokens/color#variant-colors">
  查看变体令牌
  <wa-icon slot="end" name="arrow-right"></wa-icon>
</wa-button>

### 浅色和深色模式

<span class="wa-cluster">`.wa-light` `.wa-dark`</span>

每个主题都设计为可适应浅色和深色模式。浅色模式默认应用；使用 `class="wa-light"` 或 `class="wa-dark"` 在页面或任何部分上设置配色方案。如需反转部分、检测用户偏好或自动应用深色模式，请前往[自定义与主题](/docs/customizing#light-and-dark-mode)。

```html {.example}
{% include 'theming/light-dark-example.njk' %}
```

<wa-button appearance="outlined" size="s" href="/docs/customizing#light-and-dark-mode">
  使用深色模式
  <wa-icon slot="end" name="arrow-right"></wa-icon>
</wa-button>

## 使用主题

如需定制化指导，请在下方选择您的主题、颜色调色板和变体颜色，然后按照您偏好的方法查看说明。

{% include 'theming/instructions.njk' %}

## 创建自己的主题

您可以使用[主题构建器](/docs/customizing#theme-builder)构建自定义主题，以可视化方式自定义颜色、字体、圆角、间距和图标，或通过[自定义 CSS](/docs/customizing#customizing-with-css) 在您自己的样式表中覆盖[设计令牌](/docs/tokens)。

## 快速参考

| 任务                    | 方法                                                                                           | 了解更多                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| 更改我的品牌颜色   | 在 `<html>` 上添加 `class="wa-brand-{hue}"`                                                         | [更改变体](/docs/tokens/color#changing-variant-colors) |
| 切换颜色调色板   | 加载调色板样式表，然后在 `<html>` 上添加 `class="wa-palette-{name}"`                    | [浏览调色板](/docs/color-palettes)                         |
| 使用不同的主题   | 加载主题样式表，然后在 `<html>` 上添加 `class="wa-theme-{name}"`                        | [内置主题](/docs/themes)                                 |
| 切换深色模式        | 在 `<html>`（或任何部分）上添加 `class="wa-dark"`                                               | [浅色和深色模式](/docs/customizing#light-and-dark-mode)    |
| 覆盖单个令牌 | 在您自己的 CSS 中定义与[设计令牌](/docs/tokens)关联的 `--wa-*` 自定义属性 | [使用 CSS 自定义](/docs/customizing#customizing-with-css)  |
