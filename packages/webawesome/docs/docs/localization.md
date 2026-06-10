---
title: 本地化
description: 了解如何以最小的代价本地化 @SITE_NAME@。
layout: page-outline
synonyms:
  - i18n
  - internationalization
  - l10n
  - translation
  - 国际化
  - 翻译
use-cases:
  - language
  - locale
  - rtl
  - right to left
  - 语言
  - 语言环境
  - 从右到左
---

组件可以通过导入相应的翻译文件并设置 `<html>` 元素上的 [`lang`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) 和/或 [`dir`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir) 属性来实现本地化。以下是一个使用西班牙语渲染 @SITE_NAME@ 组件的示例。

```html
<html lang="es">
  <head>
    <script type="module" src="/path/to/shoelace/dist/translations/es.js"></script>
  </head>

  <body>
    ...
  </body>
</html>
```

通过 mutation observer 的神奇力量，更改 `lang` 属性将自动更新所有本地化组件以使用新的语言环境。

## 可用翻译

@SITE_NAME@ 提供了[多种翻译](https://github.com/shoelace-style/webawesome/tree/next/packages/webawesome/src/translations)。默认语言为英语（美国），同时也是回退语言环境。因此，您无需导入英语翻译。

您可以使用以下语法导入翻译，其中 `<code>` 替换为上述任何语言代码。

```js
import '/dist/translations/<code>.js';
```

您无需预先加载翻译。即使在更新 `lang` 属性后，也可以动态导入它们。一旦翻译被注册，本地化组件将自动更新。

```js
// 等同于设置 <html lang="de">
document.documentElement.lang = 'de';

// 导入翻译
import('/translations/<code>.js');
```

### 翻译解析

通过 `<html lang="...">` 设置的语言环境是文档的默认语言环境。如果提供了国家代码，例如 `es-PE`（秘鲁西班牙语），本地化库将按以下方式解析：
 
1. 查找 `es-PE`
2. 查找 `es`
3. 回退到 `en`

@SITE_NAME@ 使用英语作为回退，以提供比渲染空白或抛出错误更好的体验。

### 提交新翻译或改进

要贡献新的翻译或改进现有翻译，请在 GitHub 上提交拉取请求。翻译文件位于 [`src/translations`](https://github.com/shoelace-style/webawesome/tree/next/packages/webawesome/src/translations)，如果您不想克隆仓库，可以直接在 GitHub 上编辑。

欢迎区域翻译！例如，如果存在德语（`de`）翻译，提交瑞士德语（`de-CH`）翻译也是完全可以接受的。

如果您有任何疑问，请发起[讨论]({{ site.github.discussions }})或在[社区聊天]({{ site.urls.discord }})中提问。

:::info
@SITE_NAME@ 为组件内部提供本地化机制。这不适用于整个应用程序的本地化。如果您需要在应用中本地化内容，应使用更合适的工具，例如 [i18next](https://www.i18next.com/)。
:::

## 单页多语言环境

您可以通过为单个组件设置 `lang` 和/或 `dir` 属性来使用不同的语言环境。以下是一个示例。

```html
<html lang="es">
  ...

  <body>
    <wa-button><!-- 西班牙语 --></wa-button>
    <wa-button lang="ru"><!-- 俄语 --></wa-button>
  </body>
</html>
```

出于性能考虑，`lang` 和 `dir` 属性必须设置在组件本身上，而不是其祖先元素上。

```html
<html lang="es">
  ...

  <body>
    <div lang="ru">
      <wa-button><!-- 仍然显示西班牙语 --></wa-button>
    </div>
  </body>
</html>
```

这个限制是因为目前没有高效的方法来确定 DOM 树中给定元素的当前语言环境。我认为这是平台的一个空白，并[提出了几个属性](https://github.com/whatwg/html/issues/7039)来解决这个问题。

## 创建自己的翻译

如果您有特定需求，或者不想等待某个翻译的合入，您可以提供自己的翻译。最简单的方法是将 `src/translations/en.ts` 复制到您自己的项目中，并翻译其中的术语。翻译完成后，您可以像使用内置翻译一样导入并使用它。

让我们以创建西班牙语翻译为例。以下假设您使用 TypeScript，但您也可以使用普通 JavaScript 创建翻译。

```ts
import { registerTranslation } from 'path/to/webawesome.js';
import type { Translation } from 'path/to/webawesome.js';

const translation: Translation = {
  $code: 'es',
  $name: 'Español',
  $dir: 'ltr',

  term1: '...',
  term2: '...',
  ...
};

registerTranslation(translation);

export default translation;
```

翻译编译为 JavaScript 后，像这样导入并激活它。

```html
<html lang="es">
  <head>
    <script type="module" src="/path/to/es.js"></script>
  </head>

  <body>
    ...
  </body>
</html>
```

:::info
如果您的翻译不起作用，请确保在导入 `registerTranslation` 时使用相同的 localize 模块。如果您使用了不同的模块，您的翻译将无法被识别。
:::
