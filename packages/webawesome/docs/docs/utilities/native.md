---
title: 原生样式
description: 原生样式将您的主题应用于原生 HTML 元素，使它们与 @SITE_NAME@ 组件的外观和感觉相匹配。
layout: page-outline
tags: styleUtilities
synonyms:
  - browser default
  - native styles
  - global styles
  - 浏览器默认
  - 原生样式
  - 全局样式
use-cases:
  - native HTML
  - style native elements
  - reset
  - default styles
  - 原生 HTML
  - 样式原生元素
  - 重置
  - 默认样式
---

原生样式使用设计标记来美化原生 HTML 元素，使它们与您主题的外观和感觉相匹配。虽然这些原生样式完全可选，但它们是统一设计的绝佳起点，并且在您的项目中结合使用原生元素和 @SITE_NAME@ 组件时非常有帮助。

## 使用原生样式

<wa-tab-group>
  <wa-tab panel="cdn"><wa-icon name="rocket-launch" variant="regular"></wa-icon> CDN</wa-tab>
  <wa-tab panel="npm"><wa-icon name="box-open" variant="regular"></wa-icon> npm</wa-tab>
  <wa-tab panel="self-hosted"><wa-icon name="arrow-down-to-line" variant="regular"></wa-icon> Self-Hosted</wa-tab>

  <wa-tab-panel name="cdn">
{% markdown %}
1. 前往您的项目的 <wa-tag class="tag-ui" appearance="outlined"><wa-icon name="gear" variant="regular"></wa-icon> 设置</wa-tag>。
2. 在 <wa-tag class="tag-ui" appearance="outlined">功能</wa-tag> 旁边，选中 <wa-tag class="tag-ui" appearance="outlined">原生样式</wa-tag> 复选框。
3. <wa-tag class="tag-ui" appearance="outlined">保存更改</wa-tag> 以立即更新您使用项目的任何位置。
{% endmarkdown %}
  </wa-tab-panel>

  <wa-tab-panel name="npm">
{% markdown %}
要使用所有 @SITE_NAME@ 样式（包括 [工具](/docs/utilities/)），请在您的项目中导入以下样式表：

```js
import '@awesome.me/webawesome/dist/styles/webawesome.css';
```

或者，如果您只想要原生元素的样式，请单独导入主题和原生样式：

```js
import '@awesome.me/webawesome/dist/styles/themes/default.css';
import '@awesome.me/webawesome/dist/styles/native.css';
```
{% endmarkdown %}
</wa-tab-panel>

  <wa-tab-panel name="self-hosted">
{% markdown %}
要使用所有 @SITE_NAME@ 样式（包括 [工具](/docs/utilities/)），请在您的项目中包含以下样式表：

```html
<link rel="stylesheet" href="/dist/styles/webawesome.css" />
```

或者，如果您只想要原生元素的样式，请单独包含主题和原生样式：

```html
<link rel="stylesheet" href="/dist/styles/themes/default.css" />
<link rel="stylesheet" href="/dist/styles/native.css" />
```
{% endmarkdown %}
</wa-tab-panel>
</wa-tab-group>

您还可以包含任何预制的 [主题](/docs/themes/) 或 [颜色调色板](/docs/color-palettes/) 来更改原生元素的外观。

## 选择不使用原生样式

如果您想保留 @SITE_NAME@ 的组件、标记和工具，但让原生元素回退到浏览器默认值，请在您自己的样式表中重置该元素。

```html {.example}
<div class="wa-cluster wa-align-items-center">
  <button type="button">Styled by native.css</button>
  <button type="button" class="native-reset">Browser default button</button>
</div>

<style>
  .native-reset {
    all: revert;
    font: inherit;
  }
</style>
```

对您想要选择不使用原生样式的确切元素使用 `all: revert`。重新应用您仍然想要从应用中继承的任何属性，例如 `font`。

要为整个区域选择不使用，请在包装器中应用相同的重置，并且仅针对该区域中的原生元素。

```css
.native-reset-zone :where(button, input, select, textarea, table, details, dialog, progress) {
  all: revert;
  font: inherit;
}
```

如果您的应用程序具有单独的页面级入口点，最简单的页面级选择不使用方法是在应该保留浏览器默认值的页面上不加载 `native.css`。您仍然可以在这些页面上加载您想要的主题、组件和任何 [工具](/docs/utilities/)。

## 内容流动

原生样式使用主题中的 `--wa-content-spacing` 标记在许多块级 HTML 元素之间设置默认空间。这有助于确保您的内容是可读的。

```html {.example}
<h3>Content flows naturally</h3>
<p>
  原生样式使用您主题的设计标记在块级元素之间设置一致的间距。这意味着标题、段落、列表和其他元素无需额外努力就能很好地配合在一起。
</p>
<blockquote>
  The Road goes ever on and on<br />
  Out from the door where it began.
</blockquote>
<p>
  间距由 `--wa-content-spacing` 标记控制，因此您可以轻松调整它以匹配您的设计。如果您更愿意自己处理间距，请将其设置为零。
</p>
<hr />
<ul>
  <li>Aenean imperdiet</li>
  <li>Vivamus consectetur at est</li>
  <li>Quisque vel leo in leo semper</li>
</ul>
```

要删除此默认间距，您可以在样式中设置 `--wa-content-spacing: 0`。

## 排版

原生样式使用 [排版设计标记](/docs/tokens/typography/) 来样式化文本元素。许多样式 - 例如 `color`、`font-family`、`font-size`、`font-weight` 和 `line-height` - 都设置在 `<body>` 元素上，以便由子元素继承。

### 标题

使用 `<h1>` 到 `<h6>` 创建标题。标题使用带有 `-heading` 后缀的标记、紧凑的行高和 `text-wrap: balance` 来实现突出但紧凑的外观。

```html {.example}
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

### 段落

使用 `<p>` 创建段落。段落继承在 `<body>` 元素上设置的默认文本样式，并使用 `text-wrap: pretty` 来防止支持的浏览器中出现孤儿行。

```html {.example}
<p>
  段落继承在 body 元素上设置的默认文本样式，包括字体族、大小、粗细和行高。它们还使用 `text-wrap: pretty` 来防止支持的浏览器中出现孤儿行。
</p>

<p>
  您可以拥有任意数量的段落，它们之间会保持一致的间距。原生样式确保无论您投入多少内容，一切都保持可读和比例匀称。
</p>
```

### 块引用

使用 `<blockquote>` 强调较长的引用。块引用使用您主题的衬线字体系列、柔和的颜色、左侧边框以及随周围文本缩放的大号字体。

```html {.example}
<blockquote>
  What is a Web year now, about three months? And when people can browse around, discover new things, and download them
  fast, when we all have agents - then Web years could slip by before human beings can notice.<br /><br />
  — Tim Berners-Lee
</blockquote>
```

### 列表

使用 `<ol>` 和 `<ul>` 创建有序和无序列表，以及其中的 `<li>` 列表项。标记使用降低不透明度的 `currentColor`，使它们安静地位于文本旁边。

```html {.example}
<div class="wa-grid">
  <ol>
    <li>First item</li>
    <li>
      Another item
      <ol>
        <li>Nested item</li>
        <li>Another nested item</li>
      </ol>
    </li>
    <li>Final item</li>
  </ol>

  <ul>
    <li>First item</li>
    <li>
      Another item
      <ul>
        <li>Nested item</li>
        <li>Another nested item</li>
      </ul>
    </li>
    <li>Final item</li>
  </ul>
</div>
```

使用 `<menu>` 作为无序列表的语义替代。原生样式重置了浏览器对 `<menu>` 的默认列表样式，以支持更灵活的样式设置。

```html {.example}
<menu class="wa-cluster">
  <li>
    <button class="wa-filled wa-size-s">
      <wa-icon name="cut"></wa-icon>
      <span>Cut</span>
    </button>
  </li>
  <li>
    <button class="wa-filled wa-size-s">
      <wa-icon name="copy"></wa-icon>
      <span>Copy</span>
    </button>
  </li>
  <li>
    <button class="wa-filled wa-size-s">
      <wa-icon name="paste"></wa-icon>
      <span>Paste</span>
    </button>
  </li>
</menu>
```

使用 `<dl>` 创建术语（`<dt>`）和定义（`<dd>`）列表。

```html {.example}
<dl>
  <dt>Web Components</dt>
  <dd>
    一组 Web 平台 API，允许您创建自定义、可重用的 HTML 元素。它们跨框架和浏览器工作，使其非常适合构建设计系统和组件库。
  </dd>
  <dt>Shadow DOM</dt>
  <dd>
    一种浏览器功能，允许您将隐藏的 DOM 树附加到元素。这使组件的样式和标记保持封装，因此它们不会意外干扰页面的其余部分。
  </dd>
  <dt>Custom Elements</dt>
  <dd>
    一个 JavaScript API，允许您定义具有自己行为的新 HTML 标签。一旦注册，您就可以像内置元素一样在任何地方使用它们。
  </dd>
</dl>
```

### 代码块

使用 `<pre>` 创建代码块或其他预格式化文本。预格式化文本使用您主题的等宽字体系列和微妙的背景颜色。

```html {.example}
<pre>
// do a thing
export function thing() {
  return true;
}
</pre>
```

### 内联文本

使用任何内联文本元素，如 `<strong>`、`<em>`、`<a>`、`<kbd>` 等，来样式化或强调文本。

```html {.example}
<div class="wa-grid">
  <div class="wa-stack wa-align-items-start">
    <strong>Bold</strong>
    <em>Italic</em>
    <u>Underline</u>
    <s>Strike-through</s>
    <del>Deleted</del>
    <ins>Inserted</ins>
    <small>Small</small>
  </div>
  <div class="wa-stack wa-align-items-start">
    <span>Subscript <sub>Sub</sub></span>
    <span>Superscript <sup>Sup</sup></span>
    <abbr title="Abbreviation">Abbr.</abbr>
    <mark>Highlighted</mark>
    <a href="#">Link text</a>
    <code>Inline code</code>
    <kbd>Keyboard</kbd>
  </div>
</div>
```

## 小部件和媒体

### 媒体

使用 `<img>`、`<svg>`、`<video>`、`<iframe>` 等添加响应式媒体。媒体默认占据 100% 的宽度，并根据其容器的宽度进行缩放。

```html {.example}
<img
  src="https://images.unsplash.com/photo-1620196244888-d31ff5bbf163?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt="A gray kitten lays next to a toy"
/>
```

### 图形

使用 `<figure>` 和 `<figcaption>` 将媒体与标题配对。标题使用安静的颜色和紧凑的行高，使其读起来像标签，而不是连续的文本。

```html {.example}
<figure>
  <img
    src="https://images.unsplash.com/photo-1620196244888-d31ff5bbf163?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="A gray kitten lays next to a toy"
  />
  <figcaption>一只灰色的小猫在镜头外的某个地方，在毛毡老鼠旁边休息。</figcaption>
</figure>
```

### 表格

使用 `<table>` 及相关元素如 `<caption>`、`<thead>`、`<tbody>`、`<th>`、`<tr>` 和 `<td>` 来结构化表格数据。表头带有微妙的底部边框，数字列使用 `tabular-nums` 以便数字对齐。

```html {.example}
<table>
  <caption>
    Average rainfall, in millimeters
  </caption>
  <thead>
    <tr>
      <th>City</th>
      <th>Spring</th>
      <th>Summer</th>
      <th>Autumn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lisbon</td>
      <td>119</td>
      <td>14</td>
      <td>97</td>
    </tr>
    <tr>
      <td>Reykjavík</td>
      <td>148</td>
      <td>156</td>
      <td>219</td>
    </tr>
    <tr>
      <td>Kyoto</td>
      <td>362</td>
      <td>508</td>
      <td>327</td>
    </tr>
  </tbody>
</table>
```

添加 `wa-hover-rows` 类以在悬停时高亮表格行，添加 `wa-zebra-rows` 类以向您的表格添加交替的行颜色。

```html {.example}
<table class="wa-zebra-rows wa-hover-rows">
  <thead>
    <tr>
      <th>First column</th>
      <th>Second column</th>
      <th>Third column</th>
      <th>Final column</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data</td>
      <td>Data</td>
      <td>Data</td>
      <td>Data</td>
    </tr>
    <tr>
      <td>Data</td>
      <td>Data</td>
      <td>Data</td>
      <td>Data</td>
    </tr>
    <tr>
      <td>Data</td>
      <td>Data</td>
      <td>Data</td>
      <td>Data</td>
    </tr>
    <tr>
      <td>Data</td>
      <td>Data</td>
      <td>Data</td>
      <td>Data</td>
    </tr>
  </tbody>
</table>
```

### 详情

使用 `<details>` 和 `<summary>` 创建公开小部件。详情与 [`<wa-details>`](/docs/components/details/) 的外观非常匹配。

```html {.example}
<details>
  <summary>Summary</summary>
  <p>
    单击摘要以展开并显示此内容。原生详情元素被样式化为与 `<wa-details>` 组件的外观紧密匹配，因此它们与 UI 的其余部分完美配合。
  </p>
</details>
```

### 对话框

使用 `<dialog>` 创建模态和非模态对话框。对话框与 [`<wa-dialog>`](/docs/components/dialog/) 的外观非常匹配。

```html {.example}
<dialog id="dialog-example">
  <p>This is a native dialog element styled to match @SITE_NAME@ components.</p>
  <button type="button">Close</button>
</dialog>

<button>Open Dialog</button>

<script>
  const dialog = document.querySelector('#dialog-example');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('button');

  openButton.addEventListener('click', () => dialog.showModal());
  closeButton.addEventListener('click', () => dialog.close());
</script>
```

### 进度

使用 `<progress>` 创建进度指示器。进度指示器与 [`<wa-progress-bar>`](/docs/components/progress-bar/) 的外观非常匹配。

```html {.example}
<progress value="40" max="100"></progress>
<br />
<progress></progress>
```

## 表单

原生样式使用 [表单控件设计标记](/docs/tokens/component-groups/#form-controls) 来样式化按钮和输入等表单元素。表单元素还从 `<body>` 元素继承 `font-family`。

### 按钮

使用 `<button>` 或 `<input type="button | submit | reset">` 创建按钮。按钮与 [`<wa-button>`](/docs/components/button/) 的外观非常匹配。

```html {.example}
<button>Button</button>
<input type="button" value="Input (button)" />
<input type="submit" value="Input (submit)" />
<input type="reset" value="Input (reset)" />
```

要创建看起来像按钮的链接，请将 `wa-button` 类添加到 `<a>` 元素。

```html {.example}
<a href="" class="wa-button">Link Button</a>
```

添加 `wa-brand`、`wa-neutral`、`wa-success`、`wa-warning` 或 `wa-danger` 类以指定按钮的 [颜色变体](/docs/utilities/color/)。

```html {.example}
<button class="wa-neutral">Neutral</button>
<button class="wa-brand">Brand</button>
<button class="wa-success">Success</button>
<button class="wa-warning">Warning</button>
<button class="wa-danger">Danger</button>
```

添加 `wa-accent`、`wa-filled`、`wa-outlined` 或 `wa-plain` 类以指定按钮的视觉外观。

```html {.example}
<button class="wa-accent wa-neutral">Accent</button>
<button class="wa-filled wa-outlined wa-neutral">Filled + Outlined</button>
<button class="wa-filled wa-neutral">Filled</button>
<button class="wa-outlined wa-neutral">Outlined</button>
<button class="wa-plain wa-neutral">Plain</button>
```

添加 `wa-size-*` 类以指定按钮的大小。可用大小为 `wa-size-xs`、`wa-size-s`、`wa-size-m`、`wa-size-l` 和 `wa-size-xl`。

```html {.example}
<button class="wa-size-xs">Extra Small</button>
<button class="wa-size-s">Small</button>
<button class="wa-size-m">Medium</button>
<button class="wa-size-l">Large</button>
<button class="wa-size-xl">Extra Large</button>
```

添加 `wa-pill` 类以给按钮提供圆角边缘。

```html {.example}
<button class="wa-pill">Pill button</button>
```

在按钮中使用 `<wa-icon>` 时，将相邻的标签文本包装在 `<span>` 或类似的标签中，以便在图标和标签之间自动添加边距，就像 `<wa-button>` 的 `start` 和 `end` 插槽一样。

```html {.example}
<button>
  <wa-icon name="plane-departure"></wa-icon>
  <span>Start Icon</span>
</button>
<button>
  <span>End Icon</span>
  <wa-icon name="plane-arrival"></wa-icon>
</button>
```

### 表单控件

使用 `<input type="">`、`<select>` 和 `<textarea>` 创建各种表单控件。每个控件都与相应的 @SITE_NAME@ 组件的外观紧密匹配。

```html {.example}
<div class="wa-stack">
  <label>Text <input type="text" placeholder="add some text" /></label>
  <label>Date <input type="date" /></label>
  <label>Time <input type="time" /></label>
  <label>Number <input type="number" placeholder="12345" /></label>
  <label>Color <input type="color" value="#f36944" /></label>
  <label>File <input type="file" multiple /></label>
  <label>Range <input type="range" /></label>
  <label>
    Select
    <select>
      <option value="option-1">Option 1</option>
      <option value="option-2">Option 2</option>
      <option value="option-3">Option 3</option>
    </select>
  </label>
  <label>Textarea <textarea placeholder="add more text"></textarea></label>
  <div class="wa-cluster">
    <label><input type="checkbox" checked /> Checked</label>
    <label><input type="checkbox" class="indeterminate" /> Indeterminate</label>
    <label><input type="checkbox" /> Unchecked</label>
  </div>
  <div class="wa-cluster">
    <label><input type="radio" name="radio-group" value="1" checked /> First radio</label>
    <label><input type="radio" name="radio-group" value="2" /> Second radio</label>
    <label><input type="radio" name="radio-group" value="3" /> Third radio</label>
  </div>
</div>

<script>
  document.querySelector('.indeterminate').indeterminate = true;
</script>
```

向任何表单控件或其父 `<label>` 添加 `wa-size-*` 类以指定其大小。可用大小为 `wa-size-xs`、`wa-size-s`、`wa-size-m`、`wa-size-l` 和 `wa-size-xl`。

```html {.example}
<div class="wa-stack">
  <input type="text" placeholder="Extra small input" class="wa-size-xs" />
  <div class="wa-cluster">
    <label class="wa-size-xs"><input type="checkbox" checked /> Extra small checkbox</label>
    <label class="wa-size-xs"><input type="radio" name="radio-xs" value="1" checked /> Extra small radio</label>
  </div>
  <input type="text" placeholder="Small input" class="wa-size-s" />
  <div class="wa-cluster">
    <label class="wa-size-s"><input type="checkbox" checked /> Small checkbox</label>
    <label class="wa-size-s"><input type="radio" name="radio-small" value="1" checked /> Small radio</label>
  </div>
  <input type="text" placeholder="Medium input" class="wa-size-m" />
  <div class="wa-cluster">
    <label class="wa-size-m"><input type="checkbox" checked /> Medium checkbox</label>
    <label class="wa-size-m"><input type="radio" name="radio-medium" value="1" checked /> Medium radio</label>
  </div>
  <input type="text" placeholder="Large input" class="wa-size-l" />
  <div class="wa-cluster">
    <label class="wa-size-l"><input type="checkbox" checked /> Large checkbox</label>
    <label class="wa-size-l"><input type="radio" name="radio-large" value="1" checked /> Large radio</label>
  </div>
  <input type="text" placeholder="Extra large input" class="wa-size-xl" />
  <div class="wa-cluster">
    <label class="wa-size-xl"><input type="checkbox" checked /> Extra large checkbox</label>
    <label class="wa-size-xl"><input type="radio" name="radio-xl" value="1" checked /> Extra large radio</label>
  </div>
</div>
```

向输入添加 `wa-filled` 类以给它一个填充的背景。

```html {.example}
<div class="wa-stack">
  <input type="text" placeholder="Filled input" class="wa-filled" />
  <select class="wa-filled">
    <option value="filled">Filled select</option>
  </select>
  <textarea placeholder="Filled textarea" class="wa-filled"></textarea>
</div>
```

向输入或选择添加 `wa-pill` 类以给它圆角边缘。

```html {.example}
<div class="wa-stack">
  <input type="text" placeholder="Pill input" class="wa-pill" />
  <select class="wa-pill">
    <option value="pill">Pill select</option>
  </select>
</div>
```

向 `<input type="file">` 添加任何 [按钮](#buttons) 修饰符类以更改文件选择器按钮的颜色变体、外观、大小和形状。

```html {.example}
<input type="file" class="wa-filled wa-outlined wa-warning wa-size-s wa-pill" />
```

### 字段集

使用 `<fieldset>` 和 `<legend>` 将表单控件分组在一起。

```html {.example}
<fieldset class="wa-stack wa-align-items-start">
  <legend>Legend</legend>
  <label><input type="radio" name="legends" value="1" checked /> King Arthur</label>
  <label><input type="radio" name="legends" value="2" /> Robin Hood</label>
  <label><input type="radio" name="legends" value="3" /> Odysseus</label>
</fieldset>
```

### 表单布局

将表单控件包装在 flex 容器中，以均匀间距水平或垂直排列它们。布局工具类，如 [`wa-cluster`](/docs/utilities/cluster) 和 [`wa-stack`](/docs/utilities/stack)，可以直接添加到 `<fieldset>` 或 `<form>` 中，使这变得特别容易。

```html {.example}
<fieldset class="wa-cluster">
  <legend>Ducks in a row</legend>
  <label><input type="checkbox" checked /> Mallard</label>
  <label><input type="checkbox" /> Common Loon</label>
  <label><input type="checkbox" /> Least Grebe</label>
</fieldset>

<br />

<form class="wa-stack">
  <label>Number of pancakes <input type="number" value="5" /></label>
  <label>
    Syrup flavor
    <select>
      <option value="maple">Maple</option>
      <option value="strawberry">Strawberry</option>
      <option value="blueberry">Blueberry</option>
      <option value="pecan">Butter pecan</option>
    </select>
  </label>
  <label><input type="checkbox" checked /> Add whipped butter</label>
  <button>
    <wa-icon name="layer-group"></wa-icon>
    Stack 'em up
  </button>
</form>
```
