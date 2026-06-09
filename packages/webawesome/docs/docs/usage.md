---
title: 使用指南
description: 了解如何使用和自定义自定义元素。
layout: page-outline
synonyms:
  - getting started
  - install
  - setup
  - quickstart
  - theming
  - styling
  - custom styles
  - override
  - 快速开始
  - 安装
  - 设置
  - 主题
  - 样式
  - 自定义样式
  - 覆盖
use-cases:
  - cdn
  - npm install
  - import
  - autoloader
  - css custom properties
  - css variables\
  - design tokens
  - brand
  - 安装
  - 导入
  - 自动加载器
  - css 自定义属性
  - css 变量
  - 设计令牌
  - 品牌
---

Web Awesome 组件就是普通的 HTML 元素，或者更准确地说，是[自定义元素](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)。您可以像使用其他元素一样使用它们。每个组件都有详细的文档描述其完整的 API，包括属性、事件、方法等。

如果您对自定义元素（通常称为"Web 组件"）还不熟悉，本部分将帮助您了解如何使用它们。

## 属性和特性

许多组件都具有可以通过 HTML 属性设置的属性。例如，按钮接受一个 `size` 属性，该属性映射到 `size` 属性，决定按钮的大小。

```html
<wa-button size="s">点击我</wa-button>
```

有些属性是布尔类型的，因此它们只有 true/false 两个值。要激活一个布尔属性，只需添加对应的属性而不带值。

```html
<wa-button disabled>点击我</wa-button>
```

:::info
避免使用自闭合标签！自定义元素不能是空元素，必须始终包含闭合标签。
:::

## 插槽

许多组件使用插槽来接受其中的内容。最常见的插槽是_默认_插槽，它包含组件内没有 `slot` 属性的任何内容。

例如，按钮的默认插槽用于填充其标签文本。

```html
<wa-button>点击我</wa-button>
```

有些组件还有_命名_插槽。命名插槽可以通过添加带有相应 `slot` 属性的子元素来填充。注意下面的图标具有 `slot="start"` 属性？这告诉组件将图标放置到其 `start` 插槽中。

```html
<wa-button>
  <wa-icon slot="start" name="gear" variant="solid"></wa-icon>
  设置
</wa-button>
```

命名插槽的位置无关紧要。您可以将其放在组件内的任何位置，浏览器会自动将其移动到正确的位置！

请参阅组件的文档以获取可用插槽的完整列表。

## 事件

您可以像往常一样监听标准事件，如 `click`、`mouseover` 等。此外，某些组件还有自己的自定义事件。例如，您可以监听 `wa-after-show` 来确定对话框何时被显示。

Web Awesome 的自定义事件以 `wa-` 为前缀，以防止与标准事件和其他库冲突。请参阅组件的文档以获取其事件的完整列表。

如果您正在使用 React 或其他使用合成事件的框架，请参阅[框架指南](/docs/frameworks)了解关于绑定自定义事件名称的注意事项。

## 方法

某些组件具有可调用的方法，用于触发各种行为。例如，您可以使用 `focus()` 方法来聚焦 Web Awesome 输入框。

```html
<wa-input></wa-input>

<script>
  const input = document.querySelector('wa-input');
  input.focus();
</script>
```

请参阅组件的文档以获取其方法及参数的完整列表。

## 与原生元素的差异

您可能会期望名称相似的元素具有与原生 HTML 元素相同的 API，但情况并非总是如此。Web Awesome 组件**并非**设计为与其 HTML 对应物一一替换。虽然它们通常共享相同的 API，但可能存在细微差异。

例如，`<button>` 和 `<wa-button>` 都有 `type` 属性，但原生按钮默认为 `submit`，而 Web Awesome 按钮默认为 `button`，因为这对大多数用户来说是更好的默认值。

:::info
**不要对组件的 API 做假设！** 为防止意外行为，请花时间查阅文档，确保您理解每个属性、特性、方法和事件的用途。
:::

## 等待组件就绪

当您在首次加载时通过 JavaScript 与组件交互时，元素可能尚未升级完成。与传统框架不同，自定义元素没有集中的初始化阶段，因此您需要在读取其属性或调用其方法之前确认组件已注册。

您可以使用 [`customElements.whenDefined()`](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined) 方法来确保特定组件已就绪：

```ts
await customElements.whenDefined('wa-button');

// <wa-button> 已准备好使用！
const button = document.querySelector('wa-button');
```

当处理多个组件时，逐个检查每个组件可能会变得繁琐。为方便起见，Web Awesome 提供了 `allDefined()` 函数，该函数会自动检测并等待 DOM 中所有 Web Awesome 组件初始化完成后才继续执行。

```ts
import { allDefined } from '/dist/webawesome.js';

// 等待 DOM 中所有 Web Awesome 组件注册完成
await allDefined();

// 页面上的所有 Web Awesome 组件都已就绪！
```

<wa-details summary="高级用法" style="margin-block-end: var(--wa-space-l);">

默认情况下，`allDefined()` 会等待当前 `document` 中所有以 `wa-` 为前缀的自定义元素注册完成。
您可以通过传入选项来自定义此行为：

- `root` 允许您传入一个不同的元素作为搜索范围，或一个完全不同的文档对象（默认为 `document`）。
- `match` 允许您指定一个自定义函数来决定等待哪些元素。该函数应对您想要等待的元素返回 `true`，对不等待的元素返回 `false`。
- `additionalElements` 允许您等待在调用 `allDefined()` 时可能尚未出现在 DOM 中的自定义元素被定义。这对于通过 JS 动态加载的元素非常有用。

以下是一个使用 `match` 和 `root` 来等待 id 为 `sidebar` 的元素内部的所有 Web Awesome 组件注册完成，加上 DOM 中可能存在的 `<my-component>` 元素，以及无论是否在 DOM 中都可能存在的 `<wa-slider>` 和 `<other-slider>` 元素的示例：

```js
import { allDefined } from '/dist/webawesome.js';

await allDefined({
  match: tagName => tagName.startsWith('wa-') || tagName === 'my-component',
  root: document.getElementById('sidebar'),
  additionalElements: ['wa-slider', 'other-slider'],
});
```

</wa-details>

## 组件的渲染和更新

Web Awesome 组件使用 [Lit](https://lit.dev/) 构建，这是一个小型库，使编写自定义元素更加容易、更易于维护且充满乐趣！作为 Web Awesome 用户，以下是一些关于渲染和更新的有用信息，您可能希望了解。

为优化性能并减少不必要的重新渲染，Lit 会批量处理组件更新。这意味着同时更改多个属性或特性将只会导致一次重新渲染。在大多数情况下，这不会造成问题，但有时您可能需要等待组件更新完成后再继续操作。

考虑以下示例。我们将更改复选框的 `checked` 属性，并观察其对应的 `checked` 属性（该属性会同步反映）。

```js
const checkbox = document.querySelector('wa-checkbox');
checkbox.checked = true;

console.log(checkbox.hasAttribute('checked')); // false
```

大多数开发者会期望结果为 `true` 而非 `false`，但组件尚未有机会重新渲染，因此在调用 `hasAttribute()` 时该属性还不存在。由于更改是批量处理的，我们需要等待更新完成后再继续。可以通过 `updateComplete` 属性来实现，该属性在所有基于 Lit 的组件上均可使用。

```js
const checkbox = document.querySelector('wa-checkbox');
checkbox.checked = true;

checkbox.updateComplete.then(() => {
  console.log(checkbox.hasAttribute('checked')); // true
});
```

这次我们看到 `true`，确认布尔属性在更新后已存在。

:::info
要等待多个组件完成更新，请同时等待它们所有的 `updateComplete` Promise：

```js
await Promise.all(elements.map(el => el.updateComplete));
```

:::

## 代码补全

### VS Code

Web Awesome 附带一个名为 `vscode.html-custom-data.json` 的文件，可用于向 [Visual Studio Code](https://code.visualstudio.com/) 描述其自定义元素。这为 Web Awesome 组件启用了代码补全功能（也称为"代码提示"或"IntelliSense"）。要启用它，您需要告诉 VS Code 该文件的位置。

1. [本地安装 Web Awesome](/docs/#通过 npm 安装)
2. 如果尚不存在，请在项目根目录创建一个名为 `.vscode` 的文件夹
3. 如果尚不存在，请在该文件夹内创建一个名为 `settings.json` 的文件
4. 将以下内容添加到文件中

```json
{
  "html.customData": ["./node_modules/@awesome.me/webawesome/dist/vscode.html-custom-data.json"]
}
```

如果 `settings.json` 已存在，只需将上述行添加到对象的根级别。请注意，您可能需要重启 VS Code 才能使更改生效。

### JetBrains IDE

如果您正在使用 [JetBrains IDE](https://www.jetbrains.com/) 并通过 NPM 安装 Web Awesome，编辑器将自动检测包中的 `web-types.json` 文件，您应该会立即在编辑器中看到组件信息。

请确保在您的 `package.json` 中添加对 `web-types.json` 文件的引用，以便您的编辑器正确检测它。

```json
{
  ...
  "web-types": "./web-types.json"
  ...
}
```

如果您使用来自多个项目的类型，可以添加一个引用数组。

```json
{
  ...
  "web-types": [
    ...,
    "./web-types.json"
  ]
  ...
}
```

### 其他编辑器

大多数流行编辑器都支持通过少量配置实现自定义代码补全。请为您偏好的编辑器[提交功能请求](https://github.com/shoelace-style/webawesome/issues/new/choose)。也欢迎提交 PR！

## 下一步

- [Customizing & Theming](/docs/customizing) — themes, CSS parts, custom properties, and custom states.
- [Form Controls](/docs/form-controls) — using Web Awesome inputs, validation, and form submission.
- [Frameworks](/docs/frameworks) — guides for React, Vue, Angular, and Svelte.
- [Localization](/docs/localization) — translating component strings and configuring text direction.
- [Preventing FOUCE](/docs/utilities/fouce) — avoid the flash of un-upgraded custom elements on first load.
