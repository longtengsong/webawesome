---
title: 服务端渲染
description: 关于如何开始在 Web Awesome 中使用 SSR 的文档。
layout: page-outline
unlisted: true
---

服务端渲染（"SSR"）意味着您的网页在发送到用户浏览器之前在服务器上渲染完成。这提供了一开始就完整的 HTML 页面，这对 SEO 和初始加载时间非常有利。页面渲染完成后，JavaScript 启动以"水合"组件，使其具有交互性。Web 平台通过一项名为[声明式 Shadow DOM](https://web.dev/articles/declarative-shadow-dom) 的特性来支持这一点。

:::warning
Web Awesome 中的 SSR 是实验性的！存在一些已知的错误和时机问题。实验状态的部分原因来自 Lit 的 SSR 包也处于实验阶段。
:::

## 启用水合

如果您使用的是自动加载的 `webawesome.loader.js` 文件，请确保将其改为 `webawesome.ssr-loader.js`。

```diff
- <script type="module" src="/dist/webawesome.loader.js"></script>
+ <script type="module" src="/dist/webawesome.ssr-loader.js"></script>
```

如果您使用的是打包工具，请确保它放在导入任何组件的*之前*。

```js
// 确保此导入位于最前面。
import '@lit-labs/ssr-client/lit-element-hydrate-support.js';

import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/input/input.js';
```

## 启用服务端渲染

如何在后端实现 SSR 很大程度上取决于您使用的技术栈。有关如何连接后端的文档，请参考 [Lit 的这份文档](https://lit.dev/docs/ssr/server-usage/)。

例如，以下是使用 [Lit 的 11ty 插件](https://www.npmjs.com/package/@lit-labs/eleventy-plugin-lit) 的 [11ty](https://www.11ty.dev/) 集成示例。

```js
// eleventy.config.js

import litPlugin from '@lit-labs/eleventy-plugin-lit';

eleventyConfig.addPlugin(litPlugin, {
  mode: 'worker',
  componentModules: [
    '@awesome.me/webawesome/dist/components/button/button.js',
    '@awesome.me/webawesome/dist/components/input/input.js',
  ],
});
```

:::info
随着 SSR 变得更加稳定，我们将努力为各种框架和元框架添加更多说明。
:::

## 实用提示

### `did-ssr` 属性

所有经过 SSR 渲染的 Web Awesome 组件都会获得 `did-ssr` 属性。

```html
<wa-button appearance="filled" did-ssr></wa-button>
```

这有助于您在元素连接之前需要一些样式的情况。

### 时机问题

在前端设置任何属性之前，务必先等待元素定义完成，然后等待其第一次更新完成。

```js
const rating = document.querySelector('wa-rating');

// 如果我们不等待组件定义完成就开始初始水合，将会从 Lit 收到水合错误！
await customElements.whenDefined('wa-rating');
await rating.updateComplete;

rating.getSymbol = () => '<wa-icon name="heart" variant="solid"></wa-icon>';
```

### 与 Turbo 一起使用

Hotwire 库 [Turbo](https://github.com/hotwired/turbo) 在 SSR + 声明式 shadow DOM 方面存在问题。要解决此问题，您可以在每个运行 Turbo 的页面上添加以下内容。

```js
function fixDeclarativeShadowDOM(e) {
  const newElement = e.detail.newBody || e.detail.newFrame || e.detail.newStream;
  if (!newElement) {
    return;
  }

  // https://developer.chrome.com/docs/css-ui/declarative-shadow-dom#polyfill
  (function attachShadowRoots(root) {
    root.querySelectorAll('template[shadowrootmode]').forEach(template => {
      const mode = template.getAttribute('shadowrootmode');
      const shadowRoot = template.parentNode.attachShadow({ mode });
      shadowRoot.appendChild(template.content);
      template.remove();
      attachShadowRoots(shadowRoot);
    });
  })(newElement);
}

// 修复 DSD 在轻量 DOM 中残留 `<template>` 元素的问题。
// https://github.com/hotwired/turbo/issues/1292
['turbo:before-render', 'turbo:before-stream-render', 'turbo:before-frame-render'].forEach(eventName => {
  document.addEventListener(eventName, fixDeclarativeShadowDOM);
});
```

### `with-*` 属性

某些组件使用插槽检测来有条件地渲染模板的部分内容。例如，`<wa-dialog>` 仅在存在 `footer` 插槽时才渲染其页脚。在 SSR 期间，由于 DOM 不可用，插槽检测无法工作，因此这些部分将从初始服务端渲染的标记中缺失。

为解决此问题，依赖插槽检测的组件提供了 `with-*` 属性。这些属性告诉组件在 SSR 期间渲染相关部分，然后在水合启动和插槽检测接管之前。

```html
<!-- 如果没有 with-footer，页脚将不会出现在服务端渲染的 HTML 中 -->
<wa-dialog with-footer>
  <p>对话框内容</p>
  <div slot="footer">
    <wa-button>关闭</wa-button>
  </div>
</wa-dialog>
```

这些属性仅 SSR 需要。_ 在组件在客户端水合后，插槽检测正常工作，这些属性不再产生效果。

#### 给贡献者的说明

在使用 `HasSlotController` 向组件的 render 方法添加插槽检测时，始终使用 `hasUpdated` 三元模式包含 SSR 回退：

```ts
// 添加 with-* 属性
@property({ attribute: 'with-label', type: Boolean }) withLabel = false;

// 在 render() 中，在组件水合之前回退到 with-* 属性
const hasLabelSlot = this.hasUpdated
  ? this.hasSlotController.test('label')
  : this.withLabel;
```

## 已知问题

以下是一些已知问题和我们仍在努力解决的事项。

- `@shoelace-style/localize`（我们的本地化库）目前无法设置语言，总是回退到 `en`。
- 如果没有 JS，`<wa-icon>` 除了空白的 `<svg>` 之外没有回退方案。也许我们可以使用一些后端机制来获取。但需要修改 API。还应该有一种设置高度/宽度的方法，但我们不想增加 SSR 用户的麻烦。
- `<wa-qr-code>` 二维码在后端不会报错，会以适当大小渲染空白画布，但直到客户端组件连接后才会渲染画布。
- `setBasePath` 和 `kit codes` 可能需要进行重新配置才能与 SSR 配合使用。
