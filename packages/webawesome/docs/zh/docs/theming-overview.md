---
title: 主题系统
description: 使用 Web Awesome 的主题系统为您的项目设计风格——调色板、变体、主题和深色模式。
layout: page-outline
---

{% from "pro-badge.njk" import proBadge %}

Web Awesome 主题通过可堆叠的层级——[主题](/docs/themes)、[调色板](/docs/color-palettes)、[变体](/docs/tokens/color#variant-colors)以及浅色或深色配色方案——在整个库中应用一致的视觉风格，您可以通过 `<html>` 元素上的类来自由组合它们。

:::info
**实时体验！** 使用此网站页眉中的 <wa-tag class="tag-ui" appearance="outlined"><wa-icon name="palette" variant="regular"></wa-icon></wa-tag> 主题和 <wa-tag class="tag-ui" appearance="outlined"><wa-icon name="sun-bright" variant="regular"></wa-icon></wa-tag> 配色方案选择器来预览主题或切换浅色/深色模式。
:::

## 关键概念

### 主题

`.wa-theme-{name}`

主题是整体外观——字体、边框、间距、阴影，以及每个[变体](/docs/tokens/color#variant-colors)在组件中的使用方式。两个主题可以共享同一个[调色板](/docs/color-palettes)和[变体](/docs/tokens/color#variant-colors)，但仍然可以有完全不同的感觉。主题附带一个默认调色板，并可能包含针对各个组件的自定义 CSS 覆盖。

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
          {% if theme.isPro %}{{ proBadge({ description: "此主题需要 " ~ site.namePro ~ " 访问权限" }) }}{% endif %}
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
    /* 匹配文档的主要块节奏（docs.css 中的 #content 规则）。 */
    margin-block: var(--wa-space-xl);
  }
  .theme-showcase::part(base) {
    column-gap: 0;
  }
  
  .theme-showcase figure {
    margin: 0;
    height: 100%;
    position: relative;
    /* 类似卡片的包装器：边框、内边距、背景。匹配 wa-card 的表面和内间距。 */
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
    /* 稍微偏离左上角锚点，使截图左侧边缘的比较滑块被裁剪掉。 */
    object-position: -3% -1%;
    background: var(--wa-color-surface-default);
    /* 放大以用主题的 UI 内容填充轮播，裁剪掉截图的外部灰色内边距。
       源 PNG 为 2928x1636，1.4 倍在任何合理的视口宽度下仍远低于自然尺寸。 */
    transform: scale(1.4);
    transform-origin: top left;
  }

  /* 根据文档的显式配色方案切换，在浅色和深色截图之间切换。 */
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
    /* 向内缩进以匹配 figure 的内边距，使说明文字位于卡片框内，而不是在边框上。 */
    inset-inline: var(--wa-space-s);
    inset-block-end: var(--wa-space-s);
    padding: var(--wa-space-m);
    color: var(--wa-color-neutral-on-loud);
    /* 略微透明的深色遮罩——比 --wa-color-overlay-modal 更浓密，使标题清晰可读。 */
    background: color-mix(in oklab, var(--wa-color-neutral-fill-loud), transparent 10%);
    border-radius: 0 0 var(--wa-border-radius-m) var(--wa-border-radius-m);
  }
</style>

您的主题由 `<html>` 元素上的 `class="wa-theme-{name}"` 决定。如果未指定类，则使用默认主题。

<wa-button appearance="outlined" size="s" href="/docs/themes">
  浏览内置主题
  <wa-icon slot="end" name="arrow-right"></wa-icon>
</wa-button>

### 调色板

`.wa-palette-{name}`

调色板是完整的 10 种色调集合——红、橙、黄、绿、青、蓝、靛蓝、紫、粉红和灰色——每种色调包含从 `05`（最深）到 `95`（最亮）的 11 级色阶，全部以[颜色设计令牌](/docs/tokens/color)的形式提供。

每个调色板都有独特的色相偏移和色度，因此切换调色板会改变项目的整体感觉——特别是与[主题](/docs/themes)和[变体颜色](/docs/tokens/color#variant-colors)配合使用时。您的调色板由 `<html>` 元素上的 `class="wa-palette-{name}"` 决定；如果未指定类，则使用默认调色板。

{% include 'theming/color-palette-viewer.njk' %}

<wa-button appearance="outlined" size="s" href="/docs/color-palettes">
  浏览所有调色板
  <wa-icon slot="end" name="arrow-right"></wa-icon>
</wa-button>

### 变体

`.wa-{variant}-{hue}`

变体将调色板中的色调分配给五个语义角色——`brand`（品牌）、`neutral`（中性）、`success`（成功）、`warning`（警告）和 `danger`（危险）——因此按钮和呼出框等组件可以通过颜色传达含义。调色板中的任何色调都可以通过 `class="wa-{variant}-{hue}"` 分配给任何变体。将类应用于 `<html>` 元素可以全局设置变体，应用于包装器可以限定到某个区域，或应用于单个组件可以仅覆盖该元素。要进行更深入的自定义，可以在您自己的 CSS 中[覆盖 `--wa-color-{variant}-*` 令牌](/docs/customizing#customizing-with-css)。

{% set colorScales = ["brand", "neutral", "success", "warning", "danger"] %}
{% include 'theming/color-palette-viewer.njk' %}

<wa-button appearance="outlined" size="s" href="/docs/tokens/color#variant-colors">
  查看变体令牌
  <wa-icon slot="end" name="arrow-right"></wa-icon>
</wa-button>

### 浅色和深色模式

<span class="wa-cluster">`.wa-light` `.wa-dark`</span>

每个主题都设计为适应浅色和深色模式。浅色模式默认应用；应用 `class="wa-light"` 或 `class="wa-dark"` 可在页面或任何区域上设置配色方案。要反转区域、检测用户偏好或自动应用深色模式，请前往[自定义与主题](/docs/customizing#light-and-dark-mode)。

```html {.example}
{% include 'theming/light-dark-example.njk' %}
```

<wa-button appearance="outlined" size="s" href="/docs/customizing#light-and-dark-mode">
  使用深色模式
  <wa-icon slot="end" name="arrow-right"></wa-icon>
</wa-button>

## 使用主题

要获得针对性指导，请在下方选择您的主题、调色板和变体颜色，然后按照您首选方法的说明进行操作。

{% include 'theming/instructions.njk' %}

## 创建自定义主题

您可以使用[主题构建器](/docs/customizing#theme-builder)以可视化方式构建自定义主题，来自定义颜色、字体、圆角、间距和图标，或通过[自定义 CSS](/docs/customizing#customizing-with-css) 在您自己的样式表中覆盖[设计令牌](/docs/tokens)来实现。

## 快速参考

| 任务                    | 操作方法                                                                                         | 了解更多                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| 更改品牌颜色            | 在 `<html>` 上添加 `class="wa-brand-{hue}"`                                                       | [更改变体](/docs/tokens/color#changing-variant-colors) |
| 切换调色板              | 加载调色板样式表，然后在 `<html>` 上添加 `class="wa-palette-{name}"`                                | [浏览调色板](/docs/color-palettes)                         |
| 使用不同的主题          | 加载主题样式表，然后在 `<html>` 上添加 `class="wa-theme-{name}"`                                    | [内置主题](/docs/themes)                                 |
| 切换深色模式            | 在 `<html>`（或任何区域）上添加 `class="wa-dark"`                                                   | [浅色和深色模式](/docs/customizing#light-and-dark-mode)    |
| 覆盖单个令牌            | 在您自己的 CSS 中定义与[设计令牌](/docs/tokens)关联的 `--wa-*` 自定义属性                               | [使用 CSS 自定义](/docs/customizing#customizing-with-css)  |
