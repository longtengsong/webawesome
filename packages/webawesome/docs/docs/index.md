---
title: 安装
description: 选择最适合您的安装方式。
layout: page-outline
---

欢迎使用 @SITE_NAME@！[了解更多](@SITE_URL@/)关于该项目以及[如何参与贡献](@SITE_URL@/docs/resources/contributing)。

您可以通过 CDN 加载 @SITE_NAME@，也可以本地安装。如果您正在使用某个框架，请务必查看 [React](/docs/frameworks/react)、[Vue](/docs/frameworks/vue)、[Angular](/docs/frameworks/angular) 和 [Svelte](/docs/frameworks/svelte) 的相关页面获取更多信息。

---

## CDN（最简单）

CDN 是开始使用 @SITE_NAME@ 最快的方式。只需将以下内容复制粘贴到您的 HTML 的 `<head>` 中即可开始！

```html
<link rel="stylesheet" href="{% cdnUrl 'styles/webawesome.css' %}" />
<script type="module" src="{% cdnUrl 'webawesome.loader.js' %}"></script>
```

现在您可以[使用任意 @SITE_NAME@ 组件](/docs/components)了！试试在页面上放一个按钮：

```html
<wa-button variant="brand">点击我！</wa-button>
```

:::pro 在使用 @SITE_NAME@ Pro？
请前往<a href="/workspaces">您的工作区</a>获取个性化安装说明。
:::

## 通过 npm 安装

首先安装 @SITE_NAME@ 包：

```bash
npm install @awesome.me/webawesome
```

然后，在您的 JavaScript 文件中导入默认主题以及您想要使用的任意组件。

```js
// @SITE_NAME@ 样式
import '@awesome.me/webawesome/dist/styles/webawesome.css';

// 导入您想要使用的组件
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/input/input.js';
```

组件导入后，您就可以像往常一样在 HTML 中使用它了。组件是按需选取的，以确保获得尽可能小的包体积。您可以在每个组件的文档的"导入"部分找到相应的组件导入路径。

:::pro 在使用 @SITE_NAME@ Pro？
请前往<a href="/workspaces">您的工作区</a>获取个性化安装说明。
:::

## 获取下载包（高级）

您可以从 npm 下载 @SITE_NAME@ 并自行托管。

```bash
npm pack @awesome.me/webawesome
```

这将下载一个包含所有 @SITE_NAME@ 文件的 `.tgz` 归档文件。解压后将其托管在您自己的服务器上。

---

## 额外设置

### `/dist` 和 `/dist-cdn` 的区别

如果您通过 npm 本地安装了 @SITE_NAME@，您会注意到项目根目录中有以下目录：

```
dist/
dist-cdn/
```

`dist-cdn` 文件已将一切打包在一起，因此您无需构建工具即可直接使用。而 `dist` 文件则保持依赖分离，让您的打包工具能够更高效地优化和共享代码。

如果您直接在浏览器中加载或从 CDN 加载，请使用 `dist-cdn`。如果您使用 Webpack 或 Vite 等打包工具，请使用 `dist`。

### 引用必要的样式

如果您自行托管 @SITE_NAME@，您需要设置页面以引用必要的样式。您可以引用 `webawesome.css`，也可以挑选您想要使用的特定样式表。

```html
<!-- 选项 1：使用所有 @SITE_NAME@ 样式 -->
<link rel="stylesheet" href="/dist/styles/webawesome.css" />

<!-- 选项 2：挑选样式 -->

<!-- 主题（必需） -->
<link rel="stylesheet" href="/dist/styles/themes/default.css" />

<!-- 原生样式（可选） -->
<link rel="stylesheet" href="/dist/styles/native.css" />

<!-- CSS 工具类（可选） -->
<link rel="stylesheet" href="/dist/styles/utilities.css" />
```

如果您选择使用默认主题以外的主题，请务必在您的 `<html>` 元素上添加相应的类（例如 `.wa-theme-awesome`），以确保类被应用。

### 设置基础路径

某些组件依赖资源文件（图标、图片等），@SITE_NAME@ 需要知道它们的位置。为方便起见，@SITE_NAME@ 会根据您加载的脚本自动检测正确的位置。这假设资源文件与 `webawesome.loader.js` 位于同一目录，对大多数用户来说"开箱即用"。

==如果您使用的是 CDN，可以跳过此部分。== 但是，如果您使用的是 npm 或下载版本，则需要设置基础路径。您可以通过以下两种方式之一进行设置。

```html
<!-- 选项 1：使用 data-webawesome 属性 -->
<script src="bundle.js" data-webawesome="/path/to/webawesome/dist"></script>

<!-- 选项 2：使用 setBasePath() 方法 -->
<script type="module">
  import { setBasePath } from '/path/to/webawesome/dist/webawesome.js';
  setBasePath('/path/to/webawesome/dist');
</script>
```

### 引用资源文件

资源文件的背后魔法大多由 @SITE_NAME@ 内部处理，但如果出于任何原因您需要引用基础路径，同一模块还导出了一个名为 `getBasePath()` 的函数。可以传入一个可选的字符串参数，让您获取到任意资源的完整路径。

```html
<script type="module">
  import { getBasePath, setBasePath } from '/path/to/webawesome/dist/webawesome.js';

  setBasePath('/path/to/assets');

  // ...

  // 获取基础路径，例如 /path/to/assets
  const basePath = getBasePath();

  // 获取资源的路径，例如 /path/to/assets/file.ext
  const assetPath = getBasePath('file.ext');
</script>
```

### 使用 Font Awesome Pro 和 Pro+

{{ site.siblings.fontAwesome.name }} 用户可以提供他们的 Kit 代码来解锁 Pro 和 Pro+ 图标包。您可以通过在页面任何元素上添加 `data-fa-kit-code` 属性，或调用 `setKitCode()` 方法来实现。

```html
<!-- 选项 1：使用 data-fa-kit-code 属性 -->
<script src="bundle.js" data-fa-kit-code="abc123"></script>

<!-- 选项 2：使用 setKitCode() 方法 -->
<script type="module">
  import { setKitCode } from '{% cdnUrl 'webawesome.loader.js' %}';
  setKitCode('YOUR_KIT_CODE_HERE');
</script>
```

现在您可以通过 [`<wa-icon>`](/docs/components/icon) 组件使用 {{ site.siblings.fontAwesome.name }} 图标了！
