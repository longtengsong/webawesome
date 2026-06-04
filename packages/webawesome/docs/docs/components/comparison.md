---
title: 对比
layout: component
category: Media
synonyms:
  - before after
  - image compare
  - diff slider
  - 前后对比
  - 图片对比
use-cases:
  - image diff
  - visual comparison
  - slider comparison
  - 图片差异
  - 视觉对比
---

这对于比较图片特别有用，但可用于比较任何类型的内容（有关使用它来比较整个 UI 的示例，请查看我们的 [主题页面](/docs/themes)）。
为获得最佳效果，请使用具有相同尺寸的内容。
滑块可以通过拖动或按左右箭头键来控制。（提示：按 shift + 箭头键以较大间隔移动滑块，或按 home + end 跳转到开始或结束。）

```html {.example}
<wa-comparison>
  <img
    slot="before"
    src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&sat=-100&bri=-5"
    alt="篮子里的小猫环顾四周的灰度版本。"
  />
  <img
    slot="after"
    src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
    alt="篮子里的小猫环顾四周的彩色版本。"
  />
</wa-comparison>
```

## 示例

### 初始位置

使用 `position` 属性来设置滑块的初始位置。这是一个从 `0` 到 `100` 的百分比。

```html {.example}
<wa-comparison position="25">
  <img
    slot="before"
    src="https://images.unsplash.com/photo-1520903074185-8eca362b3dce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
    alt="一个人坐在砖头上，穿着解开的靴子。"
  />
  <img
    slot="after"
    src="https://images.unsplash.com/photo-1520640023173-50a135e35804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    alt="一个人坐在黄色路缘上系靴子的鞋带。"
  />
</wa-comparison>
```
