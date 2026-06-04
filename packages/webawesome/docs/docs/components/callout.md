---
title: 提示框
layout: component
category: Feedback
synonyms:
  - alert
  - admonition
  - notice
  - banner
  - infobox
  - 警告框
  - 提示
use-cases:
  - warning message
  - info message
  - tip
  - important note
  - 警告消息
  - 提示消息
---

```html {.example}
<wa-callout>
  <wa-icon slot="icon" name="circle-info"></wa-icon>
  这是一个标准的提示框。你可以自定义其内容甚至图标。
</wa-callout>
```

## 示例

### 变体

设置 `variant` 属性来更改提示框的变体。

```html {.example}
<wa-callout variant="brand">
  <wa-icon slot="icon" name="circle-info"></wa-icon>
  <strong>这非常有帮助</strong><br />
  你可以从这个漂亮的提示框中看出来。
</wa-callout>

<br />

<wa-callout variant="success">
  <wa-icon slot="icon" name="circle-check"></wa-icon>
  <strong>你的更改已保存</strong><br />
  现在你可以安全地退出应用程序了。
</wa-callout>

<br />

<wa-callout variant="neutral">
  <wa-icon slot="icon" name="gear"></wa-icon>
  <strong>你的设置已更新</strong><br />
  设置将在下次登录时生效。
</wa-callout>

<br />

<wa-callout variant="warning">
  <wa-icon slot="icon" name="triangle-exclamation"></wa-icon>
  <strong>你的会话已结束</strong><br />
  请重新登录以继续。
</wa-callout>

<br />

<wa-callout variant="danger">
  <wa-icon slot="icon" name="circle-exclamation"></wa-icon>
  <strong>你的账户已被删除</strong><br />
  我们很遗憾看到你离开！
</wa-callout>
```

### 外观

使用 `appearance` 属性来更改提示框的视觉外观（默认为 `filled-outlined`）。

```html {.example}
<wa-callout variant="brand" appearance="accent">
  <wa-icon slot="icon" name="square-check"></wa-icon>
  这个 <strong>强调</strong> 提示框会吸引注意力
</wa-callout>

<br />

<wa-callout variant="brand" appearance="filled-outlined">
  <wa-icon slot="icon" name="fill-drip"></wa-icon>
  这个提示框既是 <strong>填充</strong> 的又是 <strong>轮廓</strong> 的
</wa-callout>

<br />

<wa-callout variant="brand" appearance="filled">
  <wa-icon slot="icon" name="fill"></wa-icon>
  这个提示框只是 <strong>填充</strong> 的
</wa-callout>

<br />

<wa-callout variant="brand" appearance="outlined">
  <wa-icon slot="icon" name="lines-leaning"></wa-icon>
  这里有一个 <strong>轮廓</strong> 提示框
</wa-callout>

<br />

<wa-callout variant="brand" appearance="plain">
  <wa-icon slot="icon" name="font"></wa-icon>
  这个 <strong>朴素</strong> 的提示框没有多余装饰
</wa-callout>
```

### 尺寸

使用 `size` 属性来更改提示框的尺寸。

```html {.example}
<wa-callout size="xs">
  <wa-icon slot="icon" name="circle-info"></wa-icon>
  超小提示框，用于最小化强调。
</wa-callout>

<br />

<wa-callout size="s">
  <wa-icon slot="icon" name="circle-info"></wa-icon>
  小提示框，用于轻微强调。
</wa-callout>

<br />

<wa-callout size="m">
  <wa-icon slot="icon" name="circle-info"></wa-icon>
  中等提示框，默认尺寸。
</wa-callout>

<br />

<wa-callout size="l">
  <wa-icon slot="icon" name="circle-info"></wa-icon>
  大提示框，用于更多强调。
</wa-callout>

<br />

<wa-callout size="xl">
  <wa-icon slot="icon" name="circle-info"></wa-icon>
  超大提示框，用于最大强调。
</wa-callout>
```

### 无图标

图标是可选的。如果你不想要它们，只需省略 `icon` 插槽即可。

```html {.example}
<wa-callout variant="brand"> 这里没有什么花哨的，只是一个简单的提示框。 </wa-callout>
```

### 样式

你主要可以通过设置常规 CSS 属性来自定义提示框的外观。`background`、`border`、`border-radius`、`color`、`padding`、`margin` 等都能按预期工作。
