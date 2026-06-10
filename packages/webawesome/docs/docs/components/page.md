---
title: Page
layout: component
category: Layout
synonyms:
  - layout
  - page layout
  - scaffold
  - shell
  - 布局
  - 页面布局
  - 脚手架
  - 外壳
use-cases:
  - app layout
  - page structure
  - content layout
  - sidebar layout
  - 应用布局
  - 页面结构
  - 内容布局
  - 侧边栏布局
---

页面组件旨在为完整网页提供支持。它足够灵活，可以处理大多数现代设计，并包含一种处理桌面和移动导航的简单机制。

## 布局结构

此图描绘了页面的结构，包括每个部分的默认位置。标签代表你可以用来填充它们的 [命名插槽](#slots)。

大多数插槽都是可选的。没有内容的插槽将不会显示，让你可以选择只使用真正需要的部分。

<div id="page-anatomy-demo">
  <fieldset>
    <legend>Slots</legend>
    <div class="wa-grid">
      <wa-checkbox name="slot" value="banner" checked title="显示在标题上方的横幅。如果没有提供内容，横幅将不会显示。">
        banner
      </wa-checkbox>
      <wa-checkbox name="slot" value="header" checked title="显示在页面顶部的标题。如果有横幅，标题将显示在横幅下方。如果没有内容，标题将不会显示。">
        header
      </wa-checkbox>
      <wa-checkbox name="slot" value="subheader" checked title="显示在 `<code>header</code>` 下方的子标题。这是放置面包屑等内容的好地方。">
        subheader
      </wa-checkbox>
      <wa-checkbox name="slot" value="navigation-header" checked title="导航区域的标题。在移动设备上，这将是 `<code>&lt;wa-drawer&gt;</code>` 的标题。">
        navigation-header
      </wa-checkbox>
      <wa-checkbox name="slot" value="navigation" checked title="在导航区域显示的主要内容。如果不使用 `<code>menu</code>`，这会显示在页面左侧。当页面滚动时，此部分会"粘"在顶部。">
        navigation
      </wa-checkbox>
      <wa-checkbox name="slot" value="navigation-footer" checked title="导航区域的页脚。在移动设备上，这将是 `<code>&lt;wa-drawer&gt;</code>` 的页脚。">
        navigation-footer
      </wa-checkbox>
      <wa-checkbox name="slot" value="main-header" checked title="显示在主要内容内联上方的标题。">
        main-header
      </wa-checkbox>
      <wa-checkbox name="slot" value="main-footer" checked title="显示在主要内容内联下方的页脚。">
        main-footer
      </wa-checkbox>
      <wa-checkbox name="slot" value="aside" checked title="显示在页面右侧的内容。通常包含目录、广告等。当页面滚动时，此部分会"粘"在顶部。">
        aside
      </wa-checkbox>
      <wa-checkbox name="slot" value="footer" checked title="在页脚中显示的内容。这始终显示在视口下方，因此始终会使页面"可滚动"。">
        footer
      </wa-checkbox>
    </div>
  </fieldset>
  <wa-zoomable-frame src="/assets/examples/page/anatomy-demo.html" zoom="0.75" without-controls></wa-zoomable-frame>
  <link rel="stylesheet" href="/assets/examples/page/anatomy-demo.css">
  <script src="/assets/examples/page/anatomy-demo.js" type="module"></script>
</div>

<!-- ![布局结构的屏幕截图，显示了各种插槽](/assets/images/layout-anatomy.svg) -->

## 使用 `wa-page`

:::info
如果你不熟悉 HTML 中插槽的工作原理，在使用此组件之前，你可能需要 [了解更多关于插槽](/docs/usage/#slots) 的信息。
:::

页面组件提供了多个部分，其中大多数是可选的。通过 [向各种位置插入元素](/docs/usage/#slots) 来填充内容。

此组件 _不会_ 内部实现任何 [内容分段](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element#content_sectioning) 或"语义元素"（例如 `<main>`、`<header>`、`<footer>` 等）。相反，我们建议你在认为合适的地方插入内容分段元素。

使用 `<wa-page>` 时，请确保将 `<html>` 和 `<body>` 的所有 padding 和 margin 都设为零，否则你可能会看到意外的间隙。我们强烈建议在使用 `<wa-page>` 时添加以下样式：

```css
html,
body {
  min-height: 100%;
  padding: 0;
  margin: 0;
}
```

:::info
如果你使用 [原生样式](/docs/utilities/native/)，这些已经处理好了。
:::

## 示例

:::warning
在新标签页中打开演示以查看它们在不同窗口大小下的行为。下面的预览使用了模拟缩放，根据你的浏览器，这可能不准确。
:::

### 文档页面

使用 [所有可用插槽](#slots) 的示例文档页面。导航菜单在自定义的 `mobile-breakpoint` 为 920px 时折叠成抽屉。可以使用出现在 `subheader` 插槽中带有 `[data-toggle-nav]` 的按钮打开它。`aside` 插槽也会在 920px 以下隐藏。

<p>
  <wa-button appearance="filled" href="/assets/examples/page/demo-1.html" target="_blank">
    在新窗口中打开演示
  </wa-button>
</p>

### 媒体应用

使用 `header`、`navigation-header`、`main-header` 和 `main-footer` 以及默认插槽的示例媒体应用页面。导航菜单在默认的 `mobile-breakpoint` 时折叠成抽屉，可以使用出现在 `header` 插槽中带有 `[data-toggle-nav]` 的按钮打开。

<p>
  <wa-button appearance="filled" href="/assets/examples/page/demo-2.html" target="_blank">
    在新窗口中打开演示
  </wa-button>
</p>

## 自定义

### 粘性部分

页面的以下部分默认是"粘性"的，这意味着它们会在用户滚动时保持在原位。

- `banner`
- `header`
- `sub-header`
- `menu`（`navigation` 本身不是粘性的，但它的父级 `menu` 是）
- `aside`

这通常是需要的，但你可以使用 `disable-sticky` 属性更改此行为。使用空格分隔的名称列表来告诉页面哪些部分不应该是粘性的。

```html
<wa-page disable-sticky="header aside"> ... </wa-page>
```

### 跳转到内容

布局提供了一个"跳转到内容"链接，在用户将焦点移到它之前，这个链接是视觉隐藏的。你无需做任何事情来配置它，除非你想更改链接中显示的文本。在这种情况下，你可以使用 `skip-to-content` 插槽插入自己的文本。

此示例为德语用户本地化了"跳转到内容"链接。

```html
<wa-page>
  ...
  <span slot="skip-to-content">Zum Inhalt springen</span>
  ...
</wa-page>
```

### 响应式设计

页面对于响应式行为没有太多意见，但有一些工具可以帮助简化响应式设计。

#### 默认插槽样式

每个插槽都是一个 [flex 容器](https://developer.mozilla.org/zh-CN/docs/Glossary/Flex_Container)，并指定了一些 flex 属性，以便你的内容默认具有合理的响应性。

以下插槽指定了 `justify-content: space-between` 和 `flex-wrap: wrap`，以水平均匀分布子元素，并在空间有限时允许它们换行。

- `header`
- `subheader`
- `main-header`
- `main-footer`
- `footer`

以下插槽指定了 `flex-direction: column` 以垂直排列子元素。

- `navigation-header`
- `navigation`（或 `menu`）
- `navigation-footer`
- `aside`

而 `banner` 插槽指定了 `justify-content: center` 以水平居中其自元素。

你可以使用自己的 CSS 覆盖每个插槽的默认显示和 flex 属性。

#### 响应式导航

使用 `navigation` 插槽时，你插入的内容会在较小屏幕上自动折叠成抽屉。发生这种情况的断点默认为 `768px`，但你可以使用 `mobile-breakpoint` 属性更改它，该属性接受数字或 [CSS 长度](https://developer.mozilla.org/zh-CN/docs/Web/CSS/length)。

```html
<wa-page mobile-breakpoint="600"> ... </wa-page>
```

默认情况下，"汉堡包"按钮会出现在 `header` 插槽中，用于在较小屏幕上切换导航菜单。你可以通过在 `toggle-navigation` 插槽中插入自己的按钮来自定义它的外观，或者将 `data-toggle-nav` 属性放在页面上的任何按钮上。这 _不需要_ 是 @SITE_NAME@ 元素。

当使用这些方法中的任何一种时，默认按钮将不会显示 - 如果你想在页面上使用多个导航切换，只需将 `data-toggle-nav` 属性添加到多个元素即可。

```html
<wa-page mobile-breakpoint="600">
  ...
  <wa-button data-toggle-nav>Menu</wa-button>
  ...
</wa-page>
```

或者，你可以将 `nav-state="open"` 和 `nav-state="closed"` 应用于布局组件以分别显示和隐藏导航。

```html
<wa-page nav-state="open"> ... </wa-page>
```

当视口比 `mobile-breakpoint` 值更窄或更宽时，`<wa-page>` 会分别获得属性 `view="mobile"` 或 `view="desktop"`。你可以利用这些属性根据视口大小更改样式。这在视口更宽时隐藏你的 `data-toggle-nav` 按钮特别有用。

```css
wa-page[view='desktop'] [data-toggle-nav] {
  display: none;
}
```

:::info
如果你使用 [原生样式](/docs/utilities/native/)，这些已经处理好了，`data-toggle-nav` 按钮在更宽的屏幕上已经隐藏了。
:::

#### 自定义宽度

你可以使用 `--menu-width`、`--main-width` 和 `--aside-width` 的 [CSS 自定义属性](#css-custom-properties) 指定页面上一些插槽的宽度。

如果你指定 `--menu-width` 为 `navigation` 插槽应用特定宽度，即使在 `mobile-breakpoint` 以下，页面上仍会保留空间。要在较小屏幕上折叠此空间，请将以下代码添加到你的样式中。

```css
wa-page[view='mobile'] {
  --menu-width: auto;
}
```

你可以对 `--aside-width` 使用类似方法在较小屏幕上隐藏 `aside` 插槽。确保还为插槽指定 `display: none`：

```css
wa-page[view='mobile'] {
  --aside-width: auto;

  [slot='aside'] {
    display: none;
  }
}
```

### 间距

页面为每个插槽内指定默认的 `padding` 以及插槽的直接子元素之间的 `gap`。你可以将元素放在任何插槽中，并且已经为你应用了合理的间距。

你可以使用自己的 CSS 覆盖每个插槽的默认间距。在此示例中，我们为 `footer` 插槽设置了自定义的 `gap` 和 `padding`。

```css
[slot='footer'] {
  gap: var(--wa-space-xl);
  padding: var(--wa-space-xl);
}
```

## 工具类

[原生样式](/docs/utilities/native/) 为 `<wa-page>` 定义了一些有用的默认值，以及你可以用于常见响应式设计任务的两个工具类：

- `.wa-mobile-only` 在桌面视图上隐藏元素
- `.wa-desktop-only` 在移动视图上隐藏元素
