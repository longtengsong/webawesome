---
title: 分隔线
layout: component
category: Layout
synonyms:
  - separator
  - rule
  - line
  - hr
  - horizontal rule
  - 分隔符
  - 水平线
use-cases:
  - section divider
  - content separator
  - visual break
  - 区域分隔
  - 内容分隔
---

```html {.example}
<wa-divider></wa-divider>
```

## 示例

### 宽度

使用 `--width` 自定义属性来更改分隔线的宽度。

```html {.example}
<wa-divider style="--width: 4px;"></wa-divider>
```

### 颜色

使用 `--color` 自定义属性来更改分隔线的颜色。

```html {.example}
<wa-divider style="--color: tomato;"></wa-divider>
```

### 间距

使用 `--spacing` 自定义属性来更改分隔线与其相邻元素之间的间距量。

```html {.example}
<div style="text-align: center;">
  Above
  <wa-divider style="--spacing: 2rem;"></wa-divider>
  Below
</div>
```

### 方向

分隔线的默认方向是 `horizontal`。将 `orientation` 属性设置为 `vertical` 以绘制垂直分隔线。分隔线将跨越其 [Flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox) 或 [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid) 容器的完整高度。

```html {.example}
<div style="display: flex; align-items: center;">
  First
  <wa-divider orientation="vertical"></wa-divider>
  Middle
  <wa-divider orientation="vertical"></wa-divider>
  Last
</div>
```

:::info
如果你的容器不是 Flexbox 或 CSS Grid，你可能需要为分隔线设置明确的高度。
:::

### 下拉分隔线

在[下拉菜单](/docs/components/dropdown)中使用分隔线来可视化地分组下拉项。

```html {.example}
<wa-dropdown style="max-width: 200px;">
  <wa-button appearance="filled" slot="trigger" with-caret>Menu</wa-button>
  <wa-dropdown-item value="1">Option 1</wa-dropdown-item>
  <wa-dropdown-item value="2">Option 2</wa-dropdown-item>
  <wa-dropdown-item value="3">Option 3</wa-dropdown-item>
  <wa-divider></wa-divider>
  <wa-dropdown-item value="4">Option 4</wa-dropdown-item>
  <wa-dropdown-item value="5">Option 5</wa-dropdown-item>
  <wa-dropdown-item value="6">Option 6</wa-dropdown-item>
</wa-dropdown>
```
