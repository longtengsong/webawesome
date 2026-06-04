---
title: 动画图片
layout: component
category: Media
synonyms:
  - gif
  - webp
  - motion image
  - 动态图片
  - 动图
use-cases:
  - animated gif
  - play pause image
  - hover animation
  - GIF动画
  - 播放暂停图片
  - 悬停动画
---

```html {.example}
<wa-animated-image
  src="https://shoelace.style/assets/images/walk.gif"
  alt="鞋带解开的鞋子在人行道上行走的动画"
></wa-animated-image>
```

:::info
此组件使用 `<canvas>` 来绘制冻结帧，因此图片受[跨域限制](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image)约束。
:::

## 示例

### WEBP 图片

GIF 和 WEBP 图片都支持。

```html {.example}
<wa-animated-image
  src="https://shoelace.style/assets/images/tie.webp"
  alt="系鞋带的动画"
></wa-animated-image>
```

### 设置宽度和高度

要设置自定义尺寸，将宽度和/或高度应用于宿主元素。

```html {.example}
<wa-animated-image
  src="https://shoelace.style/assets/images/walk.gif"
  alt="鞋带解开的鞋子在人行道上行走的动画"
  style="width: 150px; height: 200px;"
>
</wa-animated-image>
```

### 自定义控制框

你可以通过在样式中定位 `control-box` 部件来更改控制框的外观和位置。

```html {.example}
<wa-animated-image
  src="https://shoelace.style/assets/images/walk.gif"
  alt="鞋带解开的鞋子在人行道上行走的动画"
  class="animated-image-custom-control-box"
></wa-animated-image>

<style>
  .animated-image-custom-control-box::part(control-box) {
    top: auto;
    right: auto;
    bottom: 1rem;
    left: 1rem;
    background-color: deeppink;
    border: none;
    color: pink;
  }
</style>
```
