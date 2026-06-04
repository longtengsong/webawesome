---
title: 自定义
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

您可以通过主题在高级别上自定义 Web Awesome 的外观和感觉。对于更高级的自定义，您可以使用 CSS 部件和自定义属性来定位各个组件。

## 主题

Web Awesome 使用[主题](/docs/themes)在整个库中应用统一的视觉风格。主题由一组预定义的 CSS 自定义属性（我们称之为[设计令牌](/docs/tokens)）构建而成，您可以从许多预制主题中进行选择。

{% raw %}
  <p>
    要使用预制主题{%- if currentUser.hasPro -%}&nbsp;或自行构建{%- endif -%},&nbsp;
    {%- if not session.isLoggedIn -%}
      <a href="/signup">注册</a>或<a href="/login">登录</a>以创建一个项目。&nbsp;
    {%- else -%}
      前往<a href="/teams">您的团队</a>并打开您要使用的项目。&nbsp;
    {%- endif -%}
    在项目的 <wa-icon name="gear" variant="regular"></wa-icon> <strong>设置</strong>中,&nbsp;
    {%- if not currentUser.hasPro -%}
      选择一个 <wa-icon name="paintbrush" variant="regular"></wa-icon> <strong>主题</strong>和一个 <wa-icon name="swatchbook" variant="regular"></wa-icon> <strong>颜色调色板</strong>，保存更改，然后享受新主题带来的光彩。
    {%- else -%}
      点击 <wa-icon name="paintbrush" variant="regular"></wa-icon> <strong>编辑您的主题</strong>打开主题构建器，选择预制主题或自定义颜色、字体、图标等。
    {%- endif -%}
  </p>
{% endraw %}

如果需要更多自定义，您也可以使用 CSS 来覆盖任何主题——无需预处理器。所有设计令牌都以 `--wa-` 为前缀，以避免与其他库和您自己的自定义属性冲突。只需在您自己的样式表中，通过将样式限定在 `:root` 和相应配色方案的类（如果需要）来设置任何设计令牌的样式。以下是一个在浅色模式下使用浅色表面颜色的示例：

```css
:root,
.wa-light,
.wa-dark .wa-invert {
  --wa-color-surface-raised: var(--wa-color-neutral-95);
  --wa-color-surface-default: var(--wa-color-neutral-90);
  --wa-color-surface-lowered: var(--wa-color-neutral-80);
}
```

有关所有用于主题的自定义属性的完整列表，请参阅项目源代码中的 `src/styles/themes/default.css`。

虽然主题提供了一种高级别的库自定义方式，但单个组件提供了不同的钩子，可以逐一进行低级别的自定义。Web Awesome 组件使用[影子 DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) 来封装其样式和行为。因此，您不能使用常规的 CSS 选择器直接定位其内部元素。相反，组件会暴露一组 CSS 部件、自定义属性和自定义状态，您可以定位它们来自定义其外观。

## CSS 部件

CSS 部件为自定义各个组件提供了最大的灵活性。每个组件暴露的"部件"可以通过 [CSS 部件选择器](https://developer.mozilla.org/en-US/docs/Web/CSS/::part)，即 `::part()` 来定位。

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

## 自定义属性

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

## 自定义状态

组件可以暴露自定义状态，允许您使用 `:state()` 选择器根据其当前状态来设置样式。自定义状态提供了一种定位特定组件状态的方法，这些状态无法通过标准伪类（如 `:hover` 或 `:focus`）覆盖。
以下是一个样式化已选中复选框的示例。

```css
wa-checkbox:state(checked) {
  outline: dotted 2px tomato;
}
```

自定义状态可以与 CSS 部件和自定义属性结合使用，以创建复杂的自定义效果。每个组件暴露的自定义状态可以在该组件的 API 文档的"自定义状态"部分找到。

## 原生元素

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
