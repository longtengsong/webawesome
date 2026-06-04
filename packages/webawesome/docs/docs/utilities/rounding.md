---
title: 圆角工具
description: 圆角工具设置元素的 border-radius 属性。
layout: docs
tags: styleUtilities
synonyms:
  - border radius
  - rounded corners
  - pill shape
  - border-radius
  - 圆角
  - pill 形状
use-cases:
  - rounded
  - circle
  - pill button
  - pill 按钮
---

<style>
  .preview-block {
    background-color: var(--wa-color-neutral-fill-loud);
    min-block-size: 2em;
  }
</style>

这些工具类使用主题中的圆角标记来圆角任何元素，因此按钮、卡片、图像和自定义组件都可以共享相同的角样式，而无需硬编码值。常见用途包括圆角 [框架](/docs/utilities/frame) 中的图像、将头像塑造成圆形或给标签提供 pill 轮廓。

每个类都对应于您主题中的 [`--wa-border-radius-*`](/docs/tokens/borders/#radius) 标记之一，因此如果您调整主题的圆角比例，您选择的角样式会自动更新。

## 圆角类

| 类名                     | border-radius 值                | 预览                                                                                  |
| ------------------------ | -------------------------------- | ------------------------------------------------------------------------------------- |
| `wa-border-radius-s`     | `--wa-border-radius-s`           | <div class="preview-block" style="border-radius: var(--wa-border-radius-s)"></div>     |
| `wa-border-radius-m`     | `--wa-border-radius-m`           | <div class="preview-block" style="border-radius: var(--wa-border-radius-m)"></div>     |
| `wa-border-radius-l`     | `--wa-border-radius-l`           | <div class="preview-block" style="border-radius: var(--wa-border-radius-l)"></div>     |
| `wa-border-radius-pill`  | `--wa-border-radius-pill`        | <div class="preview-block" style="border-radius: var(--wa-border-radius-pill)"></div>  |
| `wa-border-radius-circle`| `--wa-border-radius-circle`      | <div class="preview-block" style="border-radius: var(--wa-border-radius-circle)"></div>|
| `wa-border-radius-square`| `--wa-border-radius-square`      | <div class="preview-block" style="border-radius: var(--wa-border-radius-square)"></div>|
