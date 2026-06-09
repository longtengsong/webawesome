---
title: 标签
layout: component
category: Feedback
synonyms:
  - chip
  - label
  - pill
  - token
  - badge
  - 芯片
  - 标签
  - 药片状
  - 令牌
  - 徽章
use-cases:
  - filter tag
  - removable tag
  - category label
  - keyword
  - 过滤器标签
  - 可移除标签
  - 分类标签
  - 关键词
---

```html {.example}
<wa-tag variant="brand">品牌</wa-tag>
<wa-tag variant="success">成功</wa-tag>
<wa-tag variant="neutral">中性</wa-tag>
<wa-tag variant="warning">警告</wa-tag>
<wa-tag variant="danger">危险</wa-tag>
```

## 示例

### 外观

使用 `size` 属性来改变标签的视觉外观。默认外观是 `filled-outlined`。

```html {.example}
<div class="wa-stack">
  <p>
    <wa-tag variant="brand" appearance="accent">强调</wa-tag>
    <wa-tag variant="brand" appearance="filled-outlined">填充轮廓</wa-tag>
    <wa-tag variant="brand" appearance="filled">填充</wa-tag>
    <wa-tag variant="brand" appearance="outlined">轮廓</wa-tag>
  </p>
  <p>
    <wa-tag variant="success" appearance="accent">强调</wa-tag>
    <wa-tag variant="success" appearance="filled-outlined">填充轮廓</wa-tag>
    <wa-tag variant="success" appearance="filled">填充</wa-tag>
    <wa-tag variant="success" appearance="outlined">轮廓</wa-tag>
  </p>

  <p>
    <wa-tag variant="neutral" appearance="accent">强调</wa-tag>
    <wa-tag variant="neutral" appearance="filled-outlined">填充轮廓</wa-tag>
    <wa-tag variant="neutral" appearance="filled">填充</wa-tag>
    <wa-tag variant="neutral" appearance="outlined">轮廓</wa-tag>
  </p>

  <p>
    <wa-tag variant="warning" appearance="accent">强调</wa-tag>
    <wa-tag variant="warning" appearance="filled-outlined">填充轮廓</wa-tag>
    <wa-tag variant="warning" appearance="filled">填充</wa-tag>
    <wa-tag variant="warning" appearance="outlined">轮廓</wa-tag>
  </p>

  <p>
    <wa-tag variant="danger" appearance="accent">强调</wa-tag>
    <wa-tag variant="danger" appearance="filled-outlined">填充轮廓</wa-tag>
    <wa-tag variant="danger" appearance="filled">填充</wa-tag>
    <wa-tag variant="danger" appearance="outlined">轮廓</wa-tag>
  </p>
</div>
```

### 尺寸

使用 `size` 属性来改变标签的尺寸。

```html {.example}
<wa-tag size="xs">超小</wa-tag>
<wa-tag size="s">小</wa-tag>
<wa-tag size="m">中</wa-tag>
<wa-tag size="l">大</wa-tag>
<wa-tag size="xl">超大</wa-tag>
```

### 药丸形状

使用 `pill` 属性为标签赋予圆角边缘。

```html {.example}
<wa-tag size="xs" pill>超小</wa-tag>
<wa-tag size="s" pill>小</wa-tag>
<wa-tag size="m" pill>中</wa-tag>
<wa-tag size="l" pill>大</wa-tag>
<wa-tag size="xl" pill>超大</wa-tag>
```

### 可移除

使用 `with-remove` 属性为标签添加移除按钮。

```html {.example}
<div class="tags-removable">
  <wa-tag size="xs" with-remove>超小</wa-tag>
  <wa-tag size="s" with-remove>小</wa-tag>
  <wa-tag size="m" with-remove>中</wa-tag>
  <wa-tag size="l" with-remove>大</wa-tag>
  <wa-tag size="xl" with-remove>超大</wa-tag>
</div>

<script>
  const div = document.querySelector('.tags-removable');

  div.addEventListener('wa-remove', event => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-removable wa-tag {
    transition: opacity var(--wa-transition-normal);
  }
</style>
```
