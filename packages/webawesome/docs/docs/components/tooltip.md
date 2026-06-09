---
title: 工具提示
layout: component
category: Feedback
synonyms:
  - hint
  - hover text
  - info bubble
  - title attribute
  - 提示
  - 悬停文本
  - 信息气泡
  - 标题属性
use-cases:
  - help text
  - contextual help
  - hover info
  - 帮助文本
  - 上下文帮助
  - 悬停信息
---

工具提示的目标基于指向元素 id 的 `for` 属性。

```html {.example}
<wa-tooltip for="my-button">这是一个工具提示</wa-tooltip>
<wa-button appearance="filled" id="my-button">悬停我</wa-button>
```

## 示例

### 位置

使用 `placement` 属性来设置工具提示的首选位置。

```html {.example}
<div class="tooltip-placement-example">
  <div class="tooltip-placement-example-row">
    <wa-button appearance="filled" id="tooltip-top-start"></wa-button>
    <wa-button appearance="filled" id="tooltip-top"></wa-button>
    <wa-button appearance="filled" id="tooltip-top-end"></wa-button>
  </div>

  <div class="tooltip-placement-example-row">
    <wa-button appearance="filled" id="tooltip-left-start"></wa-button>
    <wa-button appearance="filled" id="tooltip-right-start"></wa-button>
  </div>

  <div class="tooltip-placement-example-row">
    <wa-button appearance="filled" id="tooltip-left"></wa-button>
    <wa-button appearance="filled" id="tooltip-right"></wa-button>
  </div>

  <div class="tooltip-placement-example-row">
    <wa-button appearance="filled" id="tooltip-left-end"></wa-button>
    <wa-button appearance="filled" id="tooltip-right-end"></wa-button>
  </div>

  <div class="tooltip-placement-example-row">
    <wa-button appearance="filled" id="tooltip-bottom-start"></wa-button>
    <wa-button appearance="filled" id="tooltip-bottom"></wa-button>
    <wa-button appearance="filled" id="tooltip-bottom-end"></wa-button>
  </div>
</div>

<wa-tooltip for="tooltip-top-start" placement="top-start">顶部开始</wa-tooltip>
<wa-tooltip for="tooltip-top" placement="top">顶部</wa-tooltip>
<wa-tooltip for="tooltip-top-end" placement="top-end">顶部结束</wa-tooltip>
<wa-tooltip for="tooltip-left-start" placement="left-start">左侧开始</wa-tooltip>
<wa-tooltip for="tooltip-right-start" placement="right-start">右侧开始</wa-tooltip>
<wa-tooltip for="tooltip-left" placement="left">左侧</wa-tooltip>
<wa-tooltip for="tooltip-right" placement="right">右侧</wa-tooltip>
<wa-tooltip for="tooltip-left-end" placement="left-end">左侧结束</wa-tooltip>
<wa-tooltip for="tooltip-right-end" placement="right-end">右侧结束</wa-tooltip>
<wa-tooltip for="tooltip-bottom-start" placement="bottom-start">底部开始</wa-tooltip>
<wa-tooltip for="tooltip-bottom" placement="bottom">底部</wa-tooltip>
<wa-tooltip for="tooltip-bottom-end" placement="bottom-end">底部结束</wa-tooltip>

<style>
  .tooltip-placement-example {
    width: 250px;
    margin: 1rem;
  }

  .tooltip-placement-example wa-button {
    width: 2.5rem;
  }

  .tooltip-placement-example-row {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .tooltip-placement-example-row:nth-child(1),
  .tooltip-placement-example-row:nth-child(5) {
    justify-content: center;
  }
</style>
```

### 点击触发

将 `trigger` 属性设置为 `click` 以在点击而不是悬停时切换工具提示。

```html {.example}
<wa-button appearance="filled" id="toggle-button">点击切换</wa-button>
<wa-tooltip for="toggle-button" trigger="click">再次点击关闭</wa-tooltip>
```

### 手动触发

可以通过将 `trigger` 属性设置为 `manual` 来以编程方式控制工具提示。使用 `open` 属性来控制何时显示工具提示。

```html {.example}
<wa-button appearance="filled" style="margin-right: 4rem;">手动切换</wa-button>

<wa-tooltip for="manual-trigger-tooltip" trigger="manual" class="manual-tooltip">这是一个头像！</wa-tooltip>
<wa-avatar id="manual-trigger-tooltip" label="用户"></wa-avatar>

<script>
  const tooltip = document.querySelector('.manual-tooltip');
  const toggle = tooltip.previousElementSibling;

  toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
</script>
```

### 移除箭头

可以通过覆盖 `--wa-tooltip-arrow-size` 设计令牌来控制工具提示箭头的大小。要移除箭头，请使用 `without-arrow` 属性。

```html {.example}
<wa-button appearance="filled" id="no-arrow">没有箭头</wa-button>
<wa-tooltip for="no-arrow" without-arrow>这是一个没有箭头的工具提示</wa-tooltip>
```

要全局覆盖它，请在 Web Awesome 样式表加载后在样式表的根块中设置它。

```css
:root {
  --wa-tooltip-arrow-size: 0;
}
```

### 工具提示中的 HTML

使用默认插槽来创建带有 HTML 内容的工具提示。工具提示仅设计用于文本和展示性元素。避免在工具提示中放置交互式内容，如按钮、链接和表单控件。

```html {.example}
<wa-button appearance="filled" id="rich-tooltip">悬停我</wa-button>
<wa-tooltip for="rich-tooltip">
  <div>我不只是<strong>一个</strong>工具提示，我是一个带有 HTML 的<em>工具提示</em>！</div>
</wa-tooltip>
```

### 设置最大宽度

使用 `--max-width` 自定义属性来更改工具提示在换行之前可以扩展的宽度。

```html {.example}
<wa-tooltip for="wrapping-tooltip" style="--max-width: 80px;">
  这个工具提示将在仅 80 像素后换行。
</wa-tooltip>
<wa-button appearance="filled" id="wrapping-tooltip">悬停我</wa-button>
```
