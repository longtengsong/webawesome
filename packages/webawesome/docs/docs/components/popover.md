---
title: Popover
layout: component
category: Utilities
synonyms:
  - popup content
  - info popup
  - interactive popup
  - 弹出内容
  - 信息弹窗
  - 交互弹窗
use-cases:
  - rich tooltip
  - hover card
  - info popover
  - click popup
  - 丰富提示
  - 悬停卡片
  - 信息弹窗
  - 点击弹窗
---

Popover 在其锚定元素被点击时显示交互内容。与 [toolip](/docs/components/tooltip) 不同，popover 可以包含链接、按钮和表单控件。它们没有覆盖层，当你点击外部或按 Escape 键时会关闭。一次只能打开一个 popover。

```html {.example}
<wa-popover for="popover__overview">
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <p>这个 popover 包含用户可以直接交互的内容。</p>
    <wa-button appearance="filled" variant="primary" size="s">执行操作</wa-button>
  </div>
</wa-popover>

<wa-button appearance="filled" id="popover__overview">显示 popover</wa-button>
```

## 示例

### 分配锚点

使用 `<wa-button>` 或 `<button>` 元素作为 popover 的锚点。通过设置 `for` 属性以匹配锚点的 `id` 来将 popover 连接到其锚点。

```html {.example}
<wa-button appearance="filled" id="popover__anchor-button">显示 Popover</wa-button>

<wa-popover for="popover__anchor-button"> 我锚定在 @SITE_NAME@ 按钮上。 </wa-popover>

<br /><br />

<button class="wa-filled" id="popover__anchor-native-button">显示 Popover</button>

<wa-popover for="popover__anchor-native-button"> 我锚定在原生按钮上。 </wa-popover>
```

:::warning
确保在 popover 连接之前，锚定元素已存在于 DOM 中。如果它不存在，popover 将不会附加，你会看到控制台警告。
:::

### 打开和关闭

当你点击它们的锚定元素时，Popover 会显示。你也可以通过将 `open` 属性设置为 `true` 或 `false` 来编程控制它们。

在 popover 内的任何按钮上使用 `data-popover="close"` 来自动关闭它。

```html {.example}
<wa-popover for="popover__opening">
  <p>下面的按钮有 `<code>data-popover="close"</code>`，因此点击它将关闭 popover。</p>
  <wa-button appearance="filled" data-popover="close" variant="primary">关闭</wa-button>
</wa-popover>

<wa-button appearance="filled" id="popover__opening">显示 popover</wa-button>
```

### 位置

使用 `placement` 属性设置 popover 相对于其锚点的显示位置。如果首选位置没有足够空间，popover 会自动重新定位。默认位置是 `top`。

```html {.example}
<div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
  <wa-button appearance="filled" id="popover__top">顶部</wa-button>
  <wa-popover for="popover__top" placement="top">我在顶部</wa-popover>

  <wa-button appearance="filled" id="popover__bottom">底部</wa-button>
  <wa-popover for="popover__bottom" placement="bottom">我在底部</wa-popover>

  <wa-button appearance="filled" id="popover__left">左侧</wa-button>
  <wa-popover for="popover__left" placement="left">我在左侧</wa-popover>

  <wa-button appearance="filled" id="popover__right">右侧</wa-button>
  <wa-popover for="popover__right" placement="right">我在右侧</wa-popover>
</div>
```

### 距离

使用 `distance` 属性控制 popover 距离其锚点的距离。

```html {.example}
<div style="display: flex; gap: 1rem; align-items: center;">
  <wa-button appearance="filled" id="popover__distance-near">近</wa-button>
  <wa-popover for="popover__distance-near" distance="0">我非常近</wa-popover>

  <wa-button appearance="filled" id="popover__distance-far">远</wa-button>
  <wa-popover for="popover__distance-far" distance="30">我更远</wa-popover>
</div>
```

### 箭头大小

使用 `--arrow-size` 自定义属性更改 popover 箭头的大小。要移除它，使用 `without-arrow` 属性。

```html {.example}
<div style="display: flex; gap: 1rem; align-items: center;">
  <wa-button appearance="filled" id="popover__big-arrow">大箭头</wa-button>
  <wa-popover for="popover__big-arrow" style="--arrow-size: 8px;">我有一个大箭头</wa-popover>

  <wa-button appearance="filled" id="popover__no-arrow">无箭头</wa-button>
  <wa-popover for="popover__no-arrow" without-arrow>我没有箭头</wa-popover>
</div>
```

### 设置最大宽度

使用 `--max-width` 自定义属性控制 popover 的最大宽度。

```html {.example}
<wa-button appearance="filled" id="popover__max-width">切换我</wa-button>
<wa-popover for="popover__max-width" style="--max-width: 160px;">
  Popover 通常会变得更宽，但这个有自定义最大宽度，强制文本换行。
</wa-popover>
```

### 设置焦点

使用 [`autofocus`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/autofocus) 全局属性在 popover 打开时将焦点移到特定表单控件。

```html {.example}
<wa-popover for="popover__autofocus">
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <wa-textarea autofocus placeholder="你在想什么？" size="s" resize="none" rows="2"></wa-textarea>
    <wa-button appearance="filled" variant="primary" size="s" data-popover="close"> 提交 </wa-button>
  </div>
</wa-popover>

<wa-button appearance="filled" id="popover__autofocus">
  <wa-icon name="comment" slot="start"></wa-icon>
  反馈
</wa-button>
```
