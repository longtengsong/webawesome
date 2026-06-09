---
title: 可缩放框架
layout: component
category: Media
synonyms:
  - iframe zoom
  - preview frame
  - minimap
  - iframe缩放
  - 预览框架
  - 迷你地图
use-cases:
  - component preview
  - responsive preview
  - scaled iframe
  - 组件预览
  - 响应式预览
  - 缩放iframe
---

```html {.example}
<wa-zoomable-frame src="/examples/themes/showcase" zoom="0.5"> </wa-zoomable-frame>
```

## 示例

### 加载外部内容

使用 `src` 属性来嵌入外部网站或资源。URL 必须可访问，并且由于同源策略，跨域限制可能适用，可能会限制对 iframe 内容的访问。

```html
<wa-zoomable-frame src="https://example.com/"> </wa-zoomable-frame>
```

可缩放框架默认填充 100% 宽度，具有 16:9 宽高比。使用 `aspect-ratio` CSS 属性自定义此设置。

```html
<wa-zoomable-frame src="https://example.com/" style="aspect-ratio: 4/3;"> </wa-zoomable-frame>
```

使用 `srcdoc` 属性或属性直接在 iframe 中显示自定义 HTML 内容，非常适合在没有外部资源的情况下渲染内联内容。

```html
<wa-zoomable-frame srcdoc="<html><body><h1>你好，世界！</h1><p>这是内联内容。</p></body></html>">
</wa-zoomable-frame>
```

:::info
当同时指定 `src` 和 `srcdoc` 时，`srcdoc` 优先。
:::

### 控制缩放行为

设置 `zoom` 属性来控制框架的缩放级别。使用 `1` 表示 100%，`2` 表示 200%，`0.5` 表示 50%，依此类推。

使用 `zoom-levels` 属性通过空格分隔的百分比和小数值定义特定的缩放增量，例如 `zoom-levels="0.25 0.5 75% 100%"`。

```html {.example}
<wa-zoomable-frame src="/examples/themes/showcase" zoom="0.5" zoom-levels="50% 0.75 100%"> </wa-zoomable-frame>
```

### 隐藏缩放控件

添加 `without-controls` 属性以从框架中隐藏缩放控件界面。

```html {.example}
<wa-zoomable-frame src="/examples/themes/showcase" without-controls zoom="0.5"> </wa-zoomable-frame>
```

### 禁止用户交互

应用 `without-interaction` 属性使框架不可交互。请注意，这会禁止键盘导航进入框架，这可能会影响某些用户的可访问性。

```html {.example}
<wa-zoomable-frame src="/examples/themes/showcase" zoom="0.5" without-interaction> </wa-zoomable-frame>
```

### 启用主题同步

默认情况下，框架不会将主题类同步到 iframe 中。添加 `with-theme-sync` 属性可以将宿主页面的浅色/深色模式和[主题选择器类](/docs/theming-overview)（例如 `wa-theme-*`、`wa-brand-*` 和 `wa-palette-*`）镜像到 iframe 文档中。当 iframe 渲染应与宿主页面主题匹配的 Web Awesome 样式时，这非常有用。

```html {.example}
<wa-zoomable-frame src="/examples/themes/showcase" zoom="0.5" with-theme-sync> </wa-zoomable-frame>
```
