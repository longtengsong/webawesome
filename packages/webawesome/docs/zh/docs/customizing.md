---
title: 自定义与主题
description: 了解如何通过主题、部件、自定义属性和自定义状态来自定义 Web Awesome。
layout: page-outline
synonyms:
  - styling
  - custom styles
  - override
  - theming
  - css parts
  - css custom properties
  - css variables
  - design tokens
  - 样式
  - 自定义样式
  - 覆盖
  - 主题
  - css 部件
  - css 自定义属性
  - css 变量
  - 设计令牌
use-cases:
  - theme
  - brand
  - css parts
  - custom properties
  - custom states
  - shadow dom
  - 主题
  - 品牌
  - css 部件
  - 自定义属性
  - 自定义状态
  - 影子 DOM
---

您可以通过主题在高级别上自定义 Web Awesome 的外观和感觉。有关主题系统如何运作的概述 — [主题](/docs/themes)、[调色板](/docs/color-palettes)、[变体](/docs/tokens/color#variant-colors)和深色模式 — 请参阅[主题系统](/docs/theming-overview)。对于更高级的自定义，您可以使用 CSS 部件和自定义属性来定位各个组件。

## 主题

Web Awesome 使用[主题](/docs/themes)在整个库中应用统一的视觉风格。主题由一组预定义的 CSS 自定义属性（我们称之为[设计令牌](/docs/tokens)）构建而成，您可以从许多预制主题中选择。

### 使用预制主题

{% raw %}

  <p>
    {%- if not session.isLoggedIn -%}
      <a href="/signup">注册</a>或<a href="/login">登录</a>以创建一个项目，然后按照以下步骤操作。
    {%- else -%}
      前往<a href="/teams">您的团队</a>并打开您要设置主题的项目。
    {%- endif -%}
  </p>
{% endraw %}

<div class="hosted-project-instructions">
  <div class="instruction-group wa-stack wa-gap-2xs">
    <h4 class="wa-heading-m" data-no-anchor data-no-outline>
      免费工作区项目
    </h4>
    <table class="wa-hover-rows">
      <thead>
        <tr>
          <th scope="col">步骤</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>前往您项目的 <wa-tag class="tag-ui" appearance="outlined"><wa-icon name="gear" variant="regular"></wa-icon> 设置</wa-tag>。</td>
        </tr>
        <tr>
          <td>2</td>
          <td>找到 <wa-tag class="tag-ui" appearance="outlined">主题</wa-tag> 并选择 <wa-tag class="tag-ui" appearance="outlined"><wa-icon name="paintbrush" variant="regular"></wa-icon></wa-tag> 您要使用的主题。</td>
        </tr>
        <tr>
          <td>3</td>
          <td>找到 <wa-tag class="tag-ui" appearance="outlined">调色板</wa-tag> 并选择 <wa-tag class="tag-ui" appearance="outlined"><wa-icon name="swatchbook" variant="regular"></wa-icon></wa-tag> 您要使用的调色板。</td>
        </tr>
        <tr>
          <td>4</td>
          <td>保存更改，使用您项目的任何地方都会立即更新。</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="instruction-group wa-stack wa-gap-2xs">
    <h4 class="wa-heading-m" data-no-anchor data-no-outline>
      Pro 工作区项目
    </h4>
    <table class="wa-hover-rows">
      <thead>
        <tr>
          <th scope="col">步骤</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>前往您项目的 <wa-tag class="tag-ui" appearance="outlined"><wa-icon name="gear" variant="regular"></wa-icon> 设置</wa-tag>。</td>
        </tr>
        <tr>
          <td>2</td>
          <td>点击 <wa-tag class="tag-ui" appearance="outlined"><wa-icon name="paintbrush" variant="regular"></wa-icon> 编辑您的主题</wa-tag> 以打开<a href="#theme-builder">主题构建器</a>。</td>
        </tr>
        <tr>
          <td>3</td>
          <td>选择预制主题或自定义颜色、字体、图标等。</td>
        </tr>
        <tr>
          <td>4</td>
          <td>保存您的主题，使用您项目的任何地方都会立即更新。</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

### 主题构建器

主题构建器是**Pro 工作区项目**的可视化编辑器，让您可以自定义项目的[主题](/docs/themes)、[调色板](/docs/color-palettes)、[变体颜色](/docs/tokens/color#variant-colors)、字体、圆角、间距和图标 — 并实时预览。保存后立即应用到您使用项目的任何地方。

您可以从项目的 <wa-tag class="tag-ui" appearance="outlined"><wa-icon name="gear" variant="regular"></wa-icon> 设置</wa-tag> 中点击 <wa-tag class="tag-ui" appearance="outlined"><wa-icon name="paintbrush" variant="regular"></wa-icon> 编辑您的主题</wa-tag> 来启动主题构建器。

### 浅色与深色模式

每个主题都设计为适应浅色和深色模式。默认情况下应用浅色模式样式，但您可以通过 `class="wa-light"` 或 `class="wa-dark"` 将特定配色方案应用于整个页面或仅一个部分。

```html {.example}
{% include 'theming/light-dark-example.njk' %}
```

#### 反转配色方案

您可以通过 `class="wa-invert"` 强制某个部分在浅色模式下表现为 `.wa-dark`，在深色模式下表现为 `.wa-light`。

```html {.example}
<p>此卡片将始终使用与当前文档相反的配色方案。</p>

<wa-card class="wa-invert">
  <div slot="header" class="wa-split wa-color-text-quiet">
    <h4 class="wa-heading-s">反转</h4>
    <wa-icon name="swap"></wa-icon>
  </div>
  <div class="wa-flank:end wa-align-items-end">
    <wa-select label="地点" value="upside-down">
      <wa-option value="lab">霍金斯实验室</wa-option>
      <wa-option value="mall">斯塔科特商场</wa-option>
      <wa-option value="upside-down">颠倒世界</wa-option>
    </wa-select>
    <wa-button id="go-button" appearance="filled" variant="brand">
      <wa-icon label="出发" name="person-to-portal" family="duotone"></wa-icon>
    </wa-button>
    <wa-tooltip for="go-button">出发！</wa-tooltip>
  </div>
</wa-card>
```

#### 检测配色方案偏好

虽然浅色和深色模式样式已内置于所有主题中，但 Web Awesome 不会自动检测用户的配色方案偏好。我们建议在应用程序级别实现。

以下是支持浅色和深色模式的最佳实践：

- 检查 [`prefers-color-scheme`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) 并默认使用其值
- 允许用户在您的应用中覆盖此设置
- 记住用户的偏好并在后续访问中恢复

假设您有一个 `id="color-scheme-button"` 的按钮，用于在浅色和深色模式之间切换。您可以使用以下 JS 代码段将 `class="wa-dark"` 应用到 `<html>` 元素：

```js
// 应用配色方案的函数
function applyScheme(dark) {
  document.documentElement.classList.toggle('wa-dark', dark);
}

// 获取用户首选配色方案的函数
// 优先从 localStorage 获取，否则回退到系统偏好
function getPreferredScheme() {
  const savedMode = localStorage.getItem('wa-color-scheme');
  if (savedMode !== null) return savedMode === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// 加载时应用首选配色方案
applyScheme(getPreferredScheme());

// 监听系统偏好变化
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  // 如果 localStorage 中没有保存值，则相应更新
  const savedMode = localStorage.getItem('wa-color-scheme');
  if (!savedMode) {
    applyScheme(event.matches);
  }
});

// 监听配色方案按钮的点击事件
document.getElementById('color-scheme-button').addEventListener('click', () => {
  const toDark = !document.documentElement.classList.contains('wa-dark');
  applyScheme(toDark);
  localStorage.setItem('wa-color-scheme', toDark ? 'dark' : 'light');
});
```

### 使用 CSS 自定义

如需更多自定义，您也可以仅使用 CSS 来覆盖任何主题——无需预处理器。所有令牌都以 `--wa-` 为前缀，以避免与其他库冲突。编写一个覆盖 Web Awesome [设计令牌](/docs/tokens)的样式表即可。

以下是一个在两种配色方案中调整字体、间距和圆角的入门示例：

```css
/* 自定义 CSS — 同时适用于浅色和深色模式 */
:where(:root),
.wa-light,
.wa-dark,
.wa-invert {
  --wa-font-family-body: 'Inter', sans-serif;
  --wa-font-family-heading: 'Crimson Pro', serif;
  --wa-border-radius-scale: 1.5;
  --wa-space-scale: 1.125;
}
```

要创建您自己的浅色模式样式，请将样式限定到以下选择器：

```css
:where(:root),
.wa-light,
.wa-dark .wa-invert {
  /* 您的样式在此处 */
}
```

要创建您自己的深色模式样式，请将样式限定到以下选择器：

```css
.wa-dark,
.wa-invert {
  /* 您的样式在此处 */
}
```

| 选择器                | 目标对象                                                                 |
| --------------------- | ------------------------------------------------------------------------ |
| `:where(:root)`       | 默认作用域，低特异性，因此其他主题类可以覆盖它                          |
| `.wa-light`           | 显式的浅色部分                                                          |
| `.wa-dark`            | 显式的深色部分                                                          |
| `.wa-invert`          | 反转此元素上的当前配色方案                                              |
| `.wa-dark .wa-invert` | 深色部分内的反转后代（变为浅色）                                        |

有关所有用于主题的自定义属性的完整列表，请参阅项目源代码中的 `src/styles/themes/default.css`。

### 使用多个主题

只要每个主题的样式限定到特定类，您就可以在单个页面上使用多个主题。所有预制主题都限定到它们自己的类。默认主题还额外限定到 `:where(:root)`，以便自动应用样式。

只需加载主题样式表，然后为您需要的每个元素添加相应的类。

```html {.example}
<!-- 加载每个主题的样式表 -->
<link rel="stylesheet" href="{% cdnUrl '/styles/themes/awesome.css' %}" />
<link rel="stylesheet" href="{% cdnUrl '/styles/themes/shoelace.css' %}" />

<wa-callout class="wa-theme-awesome wa-brand-yellow" style="margin-block-start: 0;">
  <wa-icon slot="icon" name="face-awesome"></wa-icon>
  <div class="wa-flank:end">
    <span>此标注使用 <code>wa-theme-awesome</code> 和 <code>wa-brand-yellow</code>。</span>
    <wa-button variant="brand" size="s">黄色按钮</wa-button>
  </div>
</wa-callout>

<wa-callout class="wa-theme-shoelace wa-brand-cyan">
  <wa-icon slot="icon" name="shoelace" family="brands"></wa-icon>
  <div class="wa-flank:end">
    <span>此标注使用 <code>wa-theme-shoelace</code> 和 <code>wa-brand-cyan</code>。</span>
    <wa-button variant="brand" size="s">青色按钮</wa-button>
  </div>
</wa-callout>
```

您还可以在同一页面上使用多个变体颜色。**在您更改变体颜色的每个元素上，也添加 `wa-theme-*`——即使主题没有更改。**否则主题将继续使用其原始变体颜色。

```html {.example}
<!-- 在每个品牌颜色发生变化的元素上添加 class="wa-theme-default" -->
<wa-callout>
  <div class="wa-stack wa-align-items-start wa-gap-xs">
    <span>此标注中的按钮使用多种品牌颜色。</span>
    <div class="wa-cluster">
      <wa-button class="wa-theme-default wa-brand-cyan" variant="brand" size="s">青色</wa-button>
      <wa-button class="wa-theme-default wa-brand-indigo" variant="brand" size="s">靛蓝</wa-button>
      <wa-button class="wa-theme-default wa-brand-purple" variant="brand" size="s">紫色</wa-button>
      <wa-button class="wa-theme-default wa-brand-pink" variant="brand" size="s">粉色</wa-button>
    </div>
  </div>
</wa-callout>
```

## 自定义组件

虽然主题提供了库级别的高级自定义方式，但各个组件也提供了不同的钩子，以便您可以逐个地进行低级自定义。Web Awesome 组件使用 [shadow DOM](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM) 来封装其样式和行为。因此，您不能简单地使用常规 CSS 选择器来定位其内部元素。相反，组件暴露了一组 CSS 部件、自定义属性和自定义状态，可供您自定义其外观。

### CSS 部件

CSS 部件为自定义各个组件提供了最大的灵活性。每个组件暴露的"部件"可以通过 [CSS 部件选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::part)，即 `::part()` 来定位。

部件允许您样式化**任何**标准的 CSS 属性，而不仅仅是那些通过自定义属性暴露的属性。以下是一个修改带有 `gradient-button` 类的按钮的示例。

```html {.example}
<wa-button class="gradient-button">渐变按钮</wa-button>

<style>
  .gradient-button::part(base) {
    background: linear-gradient(217deg, var(--wa-color-indigo-50), var(--wa-color-purple-50), var(--wa-color-red-50));
    border: solid 1px var(--wa-color-purple-50);
    transition:
      transform 100ms,
      box-shadow 100ms;
  }

  .gradient-button::part(base):hover {
    box-shadow: var(--wa-shadow-m);
    transform: translateY(-3px);
  }

  .gradient-button::part(base):active {
    box-shadow: inset var(--wa-shadow-s);
    transform: translateY(0);
  }

  .gradient-button::part(label) {
    color: white;
    text-shadow: rgb(0 0 0 / 0.3) 0 -1px;
  }
</style>
```

CSS 部件有几个重要的优势：

- 可以使用显式选择器（如 `::part(icon)`）对组件进行自定义，而不是使用更脆弱的隐式选择器（如 `.button > div > span + .icon`）。

- 组件的内部结构会随着演化而改变。通过 API 暴露 CSS 部件，只要部件保持完整，内部结构就可以重新组织，而无需担心破坏自定义样式。

- 它鼓励我们在用户利用这些功能之前，更多地考虑组件的设计方式以及应允许的自定义方式。一旦我们将某个部件纳入组件的 API，它就得到支持保证，并且在库的主版本发布之前不会被移除。

大多数（但不是全部）组件都暴露了部件。您可以在每个组件的 API 文档的"CSS 部件"部分找到它们。

### 自定义属性

组件会暴露限定在组件范围内（而非全局）的自定义属性，因此它们没有像主题自定义属性那样的 `--wa-` 前缀。这些自定义属性反映了组件的常见属性，例如 `--background-color`、`--border-style`、`--size` 等。

您可以在样式表中为组件设置自定义属性。

```css
wa-avatar {
  --size: 6rem;
}
```

如果您需要定位具有特定类别的部分组件，这也同样适用。

```css
wa-avatar.your-class {
  --size: 6rem;
}
```

或者，您也可以直接在元素上内联设置它们。

```html
<wa-avatar style="--size: 6rem;"></wa-avatar>
```

每个组件暴露的自定义属性可以在该组件的 API 文档中找到。

### 自定义状态

组件可以暴露自定义状态，允许您使用 `:state()` 选择器根据其当前状态来设置样式。自定义状态提供了一种定位特定组件状态的方法，这些状态无法通过标准伪类（如 `:hover` 或 `:focus`）覆盖。
以下是一个样式化已选中复选框的示例。

```css
wa-checkbox:state(checked) {
  outline: dotted 2px tomato;
}
```

自定义状态可以与 CSS 部件和自定义属性结合使用，以创建复杂的自定义效果。每个组件暴露的自定义状态可以在该组件的 API 文档的"自定义状态"部分找到。

### 原生元素

如果您使用[原生样式](/docs/utilities/native)，为组件添加的任何自定义样式也应定位相应的原生元素。一般来说，您为组件声明的相同样式同样适用于样式化其原生对应元素。

例如，我们可以通过使用标准 CSS 属性和 CSS 部件，为 `<input type="checkbox">` 应用与 `<wa-checkbox>` 相同的自定义样式：

```html {.example}
<wa-checkbox class="pinkify">Web Awesome 复选框</wa-checkbox>
<br />
<label>
  <input type="checkbox" class="pinkify" />
  HTML 复选框
</label>

<style>
  wa-checkbox.pinkify::part(control),
  input[type='checkbox'].pinkify {
    border-width: 3px;
  }

  wa-checkbox.pinkify:state(checked)::part(control),
  input[type='checkbox'].pinkify:checked {
    background-color: hotpink;
    border-color: hotpink;
    color: lavenderblush;
  }
</style>
```
