---
title: 减少 FOUCE
description: 通过隐藏未预渲染的自定义元素直到它们被注册，来改善加载体验的实用工具。
layout: docs
tags: styleUtilities
synonyms:
  - flash of unstyled content
  - custom element flash
  - 未样式化内容的闪烁
  - 自定义元素闪烁
  - FOUC
  - CLS
use-cases:
  - component loading flash
  - undefined element
  - hydration flash
  - layout shift
  - 组件加载闪烁
  - 未定义元素
  - 水合闪烁
  - 布局偏移
---

通常，组件在其逻辑和样式有机会加载之前就会显示出来，这也称为[未定义自定义元素的闪烁](https://www.abeautifulsite.net/posts/flash-of-undefined-custom-elements/)。

FOUCE 样式工具负责隐藏自定义元素，直到 **它们及其内容** 都已被注册，最长等待时间为两秒。

## 遮蔽

在许多情况下，这还不够，您可能希望隐藏更广泛的包装元素，甚至整个页面，直到其中的所有 WA 元素都已加载完毕。为此，您可以将 `wa-cloak` 类添加到页面上的任何元素，甚至可以通过将类放在 `<html>` 元素上来应用于整个页面：

```html
<html class="wa-cloak">
  ...
</html>
```

一旦所有元素都已注册 _或_ 经过两秒后，自动加载器将显示页面。两秒超时防止了在慢速网络上和有错误的页面上出现持续的白屏。

## Turbo (Hotwire) 用户

如果您正在使用 [Turbo](https://turbo.hotwired.dev/) 将多页面应用（MPA）作为单页面应用（SPA）提供，您可能会在页面间导航时注意到 FOUCE。这是因为 Turbo 在自动加载器有机会注册新组件之前就渲染了新页面的内容。

以下函数作为中间件，确保组件在页面显示 _之前_ 被注册，从而消除使用 Turbo 进行页面间导航时的 FOUCE。

```js
import { preventTurboFouce } from '/dist/webawesome.js';

preventTurboFouce();
```
