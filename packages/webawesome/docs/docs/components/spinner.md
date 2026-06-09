---
title: 加载器
layout: component
category: Feedback
synonyms:
  - loading
  - loader
  - busy indicator
  - throbber
  - 加载
  - 加载动画
  - 忙碌指示器
use-cases:
  - loading animation
  - indeterminate progress
  - ajax loader
  - 加载动画
  - 不确定进度
  - AJAX加载
---

```html {.example}
<wa-spinner></wa-spinner>
```

## 示例

### 尺寸

加载器的尺寸基于当前字体大小。要改变它们的尺寸，可以在加载器本身或父元素上设置 `font-size` 属性，如下所示。

```html {.example}
<wa-spinner></wa-spinner>
<wa-spinner style="font-size: 2rem;"></wa-spinner>
<wa-spinner style="font-size: 3rem;"></wa-spinner>
```

### 轨道宽度

可以通过设置 `--track-width` 自定义属性来改变加载器轨道的宽度。

```html {.example}
<wa-spinner style="font-size: 50px; --track-width: 10px;"></wa-spinner>
```

### 颜色

可以通过设置 `--indicator-color` 和 `--track-color` 自定义属性来改变加载器的颜色。

```html {.example}
<wa-spinner style="font-size: 3rem; --indicator-color: deeppink; --track-color: pink;"></wa-spinner>
```
