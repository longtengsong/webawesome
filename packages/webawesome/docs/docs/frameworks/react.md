---
title: React
description: 在 React 应用中使用 Web Awesome 的提示。
layout: page-outline
---

<wa-breadcrumb class="page-breadcrumbs">
  <wa-icon slot="separator" name="angle-right" variant="regular"></wa-icon>
  <wa-breadcrumb-item href="/docs/frameworks">框架集成</wa-breadcrumb-item>
  <wa-breadcrumb-item>{{ title }}</wa-breadcrumb-item>
</wa-breadcrumb>

## 安装

要添加 Web Awesome 到您的 React 应用，请从 npm 安装该包。

```bash
npm install @awesome.me/webawesome
```

接下来，在您的应用中引入 Web Awesome 主题，导入您需要的组件，然后开始使用它们！

```jsx
import '@awesome.me/webawesome/dist/styles/webawesome.css';
import '@awesome.me/webawesome/dist/components/button/button.js';

export default function App() {
  return <wa-button variant="brand">按钮</wa-button>;
}
```

React 19+ [原生支持自定义元素](https://react.dev/blog/2024/04/25/react-19#support-for-custom-elements)，因此您可以像使用其他 HTML 元素一样使用 Web Awesome 组件。无需包装器！

如果您使用的是 React 18 或更低版本，请跳转到[旧版 React 包装器](#旧版-react-包装器react-18-及以下)部分。

:::pro 在使用 Web Awesome Pro？
请前往<a href="/workspaces">您的工作区</a>获取个性化安装说明。
:::

## TypeScript

如果您正在使用 TypeScript，可以通过 Web Awesome 附带的类型文件添加类型安全。

```
node_modules/@awesome.me/webawesome/dist/custom-elements-jsx.d.ts
```

这为每个组件提供了内联文档、自动补全和类型安全验证。通过更新 `tsconfig.json` 文件将类型添加到您的项目中。

```json
{
  "compilerOptions": {
    "types": ["node_modules/@awesome.me/webawesome/dist/custom-elements-jsx.d.ts"]
  }
}
```

或者，您可以创建一个声明文件并扩展 JSX 的 `IntrinsicElements`：

```ts
import type { CustomElements, CustomCssProperties } from '@awesome.me/webawesome/dist/custom-elements-jsx.d.ts';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  interface CSSProperties extends CustomCssProperties {}
}
```

## 事件处理

许多 Web Awesome 组件会触发[原生事件](https://developer.mozilla.org/en-US/docs/Web/API/Event)。例如，[输入框组件](/components/input)在收到输入时会触发 `input` 事件。在 React 中，您可以使用 `onInput` 来监听该事件。

以下是如何将输入框的值绑定到状态变量。

```jsx
import { useState } from 'react';
import '@awesome.me/webawesome/dist/components/input/input.js';

function MyComponent() {
  const [value, setValue] = useState('');

  return <wa-input value={value} onInput={event => setValue(event.target.value)} />;
}

export default MyComponent;
```

如果您使用的是 TypeScript，需要注意的是 `event.target` 引用的是底层的自定义元素。您可以使用 `(event.target as any).value` 作为快速修复，或者像下面这样强类型化事件目标。

```tsx
import { useState } from 'react';
import '@awesome.me/webawesome/dist/components/input/input.js';
import type WaInputElement from '@awesome.me/webawesome/dist/components/input/input.js';

function MyComponent() {
  const [value, setValue] = useState('');

  return <wa-input value={value} onInput={event => setValue((event.target as WaInputElement).value)} />;
}

export default MyComponent;
```

### Preact

使用组件时遇到类型错误的 Preact 用户可以通过在 `tsconfig.json` 中设置 "paths" 来受益，这样 react 类型将解析为 preact/compat，如 [Preact 的 TypeScript 文档](https://preactjs.com/guide/v10/typescript/#typescript-preactcompat-configuration)所述。

## 使用 Jest 进行测试

如果您的测试环境运行在 Node 环境（即不是真实的浏览器）中，测试 Web 组件可能会很有挑战性。幸运的是，[Jest](https://jestjs.io/) 在支持 Web 组件和提供额外浏览器 API 方面取得了不少进展。然而，它仍然不是浏览器环境的完整复制。

以下是一些提示，如果您的 Jest + Web Awesome 遇到问题，可以帮助您顺利解决。

:::info
如果您正在寻找一个快速、现代的测试替代方案，请考虑 [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/)。
:::

### 升级 Jest

Jest 经历了一次重大改版，并在[版本 26.5.0](https://github.com/facebook/jest/blob/main/CHANGELOG.md#2650) 中引入了 [JSDOM 16.2.0](https://github.com/jsdom/jsdom/blob/master/Changelog.md#1620)，从而支持了 Web 组件。这个版本还包含了对许多内置浏览器函数的模拟，如 `MutationObserver`、`document.createRange` 等。

如果您使用的是 [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)，您可以更新 `react-scripts`，它也会更新 Jest。

```
npm install react-scripts@latest
```

### 模拟缺失的 API

某些组件使用 `window.matchMedia`，但这个函数不受 JSDOM 支持，因此您需要自己模拟它。

在 `src/setupTests.js` 中添加以下内容。

```js
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // 已弃用
    removeListener: jest.fn(), // 已弃用
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
```

更多详情，请参考 Jest 的[手动模拟](https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom)文档。

### 转换 ES 模块

ES 模块是一个[得到良好支持的浏览器标准](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)。这是 Web Awesome 的发布方式，但大多数 React 应用期望使用 CommonJS。因此，您可能会遇到以下错误。

```
Error: Unable to import outside of a module
```

要修复此问题，请将以下内容添加到您的 `package.json` 中，告诉转译器处理 Web Awesome 模块。

```js
{
  "jest": {
    "transformIgnorePatterns": ["node_modules/(?!(@awesome.me|lit|@lit-labs))"]
  }
}
```

这些说明适用于通过 Create React App 创建的应用。如果您直接使用 Jest，可以将 `transformIgnorePatterns` 直接添加到 `jest.config.js` 中。

更多详情，请参考 Jest 的 [`transformIgnorePatterns` 自定义](https://jestjs.io/docs/tutorial-react-native#transformignorepatterns-customization)文档。

## 旧版 React 包装器（React 18 及以下）

React 18 及以下版本对自定义元素的[支持较差](https://custom-elements-everywhere.com/#react)。对于这些版本，Web Awesome 为每个组件提供了 React 包装器。

### 导入 React 包装器

每个 Web Awesome 组件都可以作为 React 组件导入。请注意，在下面的示例中，您导入的是 `<WaButton>` _React 组件_，而不是 `<wa-button>` _自定义元素_。

```jsx
import WaButton from '@awesome.me/webawesome/dist/react/button/index.js';

const MyComponent = () => <WaButton variant="primary">点击我</WaButton>;

export default MyComponent;
```

您可以在每个组件文档的 _导入_ 部分选择 _React_ 标签，找到每个组件的复制 + 粘贴导入语句。

#### 关于摇树优化的说明

以前，推荐从单个入口点导入，如下所示：

```jsx
import { WaButton } from '@awesome.me/webawesome/dist/react';
```

然而，对额外 Web Awesome 组件进行摇树优化被证明是一个挑战。因此，我们现在建议挑选您要使用的组件，而不是从单个入口点导入。

```diff
- import { WaButton } from '@awesome.me/webawesome/dist/react';
+ import WaButton from '@awesome.me/webawesome/dist/react/button/index.js';
```

### 使用 React 包装器处理事件

许多 Web Awesome 组件会触发[原生事件](https://developer.mozilla.org/en-US/docs/Web/API/Event)。例如，[输入框组件](/components/input)在收到输入时会触发 `input` 事件。在 React 中，您可以使用 `onInput` 来监听该事件。

以下是如何将输入框的值绑定到状态变量。

```jsx
import { useState } from 'react';
import WaInput from '@awesome.me/webawesome/dist/react/input/index.js';

function MyComponent() {
  const [value, setValue] = useState('');

  return (
    <>
      <WaInput value={value} onInput={event => setValue(event.target.value)} />;
      <WaInput defaultValue={'Foo'} /> {/* 这是一个"非受控输入框" */}
    </>
  );
}

export default MyComponent;
```

如果您使用的是 TypeScript，需要注意的是 `event.target` 引用的是底层的自定义元素。您可以使用 `(event.target as any).value` 作为快速修复，或者像下面这样强类型化事件目标。

```tsx
import { useState } from 'react';
import WaInput from '@awesome.me/webawesome/dist/react/input/index.js';
import type WaInputElement from '@awesome.me/webawesome/dist/components/input/input.js';

function MyComponent() {
  const [value, setValue] = useState('');

  return <WaInput value={value} onInput={event => setValue((event.target as WaInputElement).value)} />;
}

export default MyComponent;
```

您也可以在回调中导入事件类型，如下所示。

```tsx
import { useCallback, useState } from 'react';
import WaInput, { type WaInputEvent } from '@awesome.me/webawesome/dist/react/input/index.js';
import type WaInputElement from '@awesome.me/webawesome/dist/components/input/input.js';

function MyComponent() {
  const [value, setValue] = useState('');
  const onInput = useCallback((event: WaInputEvent) => {
    setValue(event.detail);
  }, []);

  return <WaInput value={value} onInput={event => setValue((event.target as WaInputElement).value)} />;
}

export default MyComponent;
```

:::info
您正在使用 Web Awesome 和 React？[帮助我们改进此页面！](https://github.com/shoelace-style/webawesome/blob/next/packages/webawesome/docs/docs/frameworks/react.md)
:::
