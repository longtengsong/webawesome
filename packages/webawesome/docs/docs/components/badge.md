---
title: 徽章
layout: component
category: Feedback
synonyms:
  - chip
  - label
  - count
  - indicator
  - pill
  - 标签
  - 计数
  - 指示器
use-cases:
  - notification count
  - status indicator
  - unread count
  - new indicator
  - 通知计数
  - 状态指示器
  - 未读计数
  - 新内容指示器
---

```html {.example}
<wa-badge>徽章</wa-badge>
```

## 示例

### 变体

设置 `variant` 属性来更改徽章的变体。

```html {.example}
<wa-badge variant="brand">品牌</wa-badge>
<wa-badge variant="success">成功</wa-badge>
<wa-badge variant="neutral">中性</wa-badge>
<wa-badge variant="warning">警告</wa-badge>
<wa-badge variant="danger">危险</wa-badge>
```

### 外观

使用 `appearance` 属性来更改徽章的视觉外观。

```html {.example}
<div style="margin-block-end: 1rem;">
  <wa-badge appearance="accent" variant="neutral">强调</wa-badge>
  <wa-badge appearance="filled-outlined" variant="neutral">填充轮廓</wa-badge>
  <wa-badge appearance="filled" variant="neutral">填充</wa-badge>
  <wa-badge appearance="outlined" variant="neutral">轮廓</wa-badge>
</div>
<div style="margin-block-end: 1rem;">
  <wa-badge appearance="accent" variant="brand">强调</wa-badge>
  <wa-badge appearance="filled-outlined" variant="brand">填充轮廓</wa-badge>
  <wa-badge appearance="filled" variant="brand">填充</wa-badge>
  <wa-badge appearance="outlined" variant="brand">轮廓</wa-badge>
</div>
<div style="margin-block-end: 1rem;">
  <wa-badge appearance="accent" variant="success">强调</wa-badge>
  <wa-badge appearance="filled-outlined" variant="success">填充轮廓</wa-badge>
  <wa-badge appearance="filled" variant="success">填充</wa-badge>
  <wa-badge appearance="outlined" variant="success">轮廓</wa-badge>
</div>
<div style="margin-block-end: 1rem;">
  <wa-badge appearance="accent" variant="warning">强调</wa-badge>
  <wa-badge appearance="filled-outlined" variant="warning">填充轮廓</wa-badge>
  <wa-badge appearance="filled" variant="warning">填充</wa-badge>
  <wa-badge appearance="outlined" variant="warning">轮廓</wa-badge>
</div>
<div>
  <wa-badge appearance="accent" variant="danger">强调</wa-badge>
  <wa-badge appearance="filled-outlined" variant="danger">填充轮廓</wa-badge>
  <wa-badge appearance="filled" variant="danger">填充</wa-badge>
  <wa-badge appearance="outlined" variant="danger">轮廓</wa-badge>
</div>
```

### 尺寸

徽章的尺寸相对于当前字体大小。你可以在任何徽章（或祖先元素）上设置 `font-size` 来更改它。

```html {.example}
<wa-badge variant="brand" style="font-size: var(--wa-font-size-xs);">品牌</wa-badge>
<wa-badge variant="brand" style="font-size: var(--wa-font-size-s);">品牌</wa-badge>
<wa-badge variant="brand" style="font-size: var(--wa-font-size-m);">品牌</wa-badge>
<wa-badge variant="brand" style="font-size: var(--wa-font-size-l);">品牌</wa-badge>
<wa-badge variant="brand" style="font-size: var(--wa-font-size-xl);">品牌</wa-badge>
```

### 药丸形状徽章

使用 `pill` 属性来给徽章添加圆角边缘。

```html {.example}
<wa-badge variant="brand" pill>品牌</wa-badge>
<wa-badge variant="success" pill>成功</wa-badge>
<wa-badge variant="neutral" pill>中性</wa-badge>
<wa-badge variant="warning" pill>警告</wa-badge>
<wa-badge variant="danger" pill>危险</wa-badge>
```

### 吸引注意力

使用 `attention` 属性通过微妙的动画来吸引对徽章的注意。支持的效果是 `bounce`、`pulse` 和 `none`。

```html {.example}
<div class="badge-attention">
  <wa-badge variant="brand" attention="pulse" pill>1</wa-badge>
  <wa-badge variant="success" attention="pulse" pill>1</wa-badge>
  <wa-badge variant="neutral" attention="pulse" pill>1</wa-badge>
  <wa-badge variant="warning" attention="pulse" pill>1</wa-badge>
  <wa-badge variant="danger" attention="pulse" pill>1</wa-badge>
</div>

<div class="badge-attention">
  <wa-badge variant="brand" attention="bounce" pill>1</wa-badge>
  <wa-badge variant="success" attention="bounce" pill>1</wa-badge>
  <wa-badge variant="neutral" attention="bounce" pill>1</wa-badge>
  <wa-badge variant="warning" attention="bounce" pill>1</wa-badge>
  <wa-badge variant="danger" attention="bounce" pill>1</wa-badge>
</div>

<style>
  .badge-attention {
    margin-block-end: var(--wa-space-m);

    wa-badge:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
</style>
```

### 开始和结束装饰

使用 `start` 和 `end` 插槽在徽章标签旁边添加展示元素，如 `<wa-icon>`。

```html {.example}
<wa-badge>
  <wa-icon slot="start" name="seedling"></wa-icon>
  开始
</wa-badge>
<wa-badge>
  <wa-icon slot="end" name="tree"></wa-icon>
  结束
</wa-badge>
<wa-badge>
  <wa-icon slot="start" name="cow"></wa-icon>
  <wa-icon slot="end" name="meteor"></wa-icon>
  两者都有
</wa-badge>
```

### 与按钮一起使用

徽章最常见的用例之一是将它们附加到按钮上。为了简化这一点，当徽章是按钮的子元素时，它们会自动定位在右上角。

```html {.example}
<wa-button appearance="filled">
  请求
  <wa-badge pill>30</wa-badge>
</wa-button>

<wa-button appearance="filled" style="margin-inline-start: 1rem;">
  警告
  <wa-badge variant="warning" pill>8</wa-badge>
</wa-button>

<wa-button appearance="filled" style="margin-inline-start: 1rem;">
  错误
  <wa-badge variant="danger" pill>6</wa-badge>
</wa-button>
```
