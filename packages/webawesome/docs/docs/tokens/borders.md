---
title: 边框
description: 边框令牌定义 Web Awesome 组件的边缘和角落。
synonyms:
  - 边框
  - 轮廓
  - 描边
use-cases:
  - 边框宽度
  - 边框样式
  - 边框颜色
hasOutline: true
---

<style>
  .swatch {
    border-color: var(--wa-color-neutral-border-normal);
  }
</style>

边框令牌定义 Web Awesome 组件的边缘和角落。它们使用 `rem` 单位，以便随根字体大小缩放。您可以调整单个令牌或使用比例乘数一次性更改所有宽度或半径。

## 边框样式

单个样式令牌控制整个库中所有组件边框使用的线条类型。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th><th>预览</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-border-style">
        <td class="token-name"><code>--wa-border-style</code></td>
        <td>所有组件中使用的标准边框线条样式</td>
        <td><div class="swatch" style="border-style: var(--wa-border-style)"></div></td>
      </tr>
    </tbody>
  </table>
</wa-scroller>

## 边框宽度

边框宽度令牌使用 `rem` 单位，并通过 `--wa-border-width-scale` 缩放。值小于 `1` 会使所有边框变细；值大于 `1` 会使它们变粗。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th><th>预览</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-border-width-scale">
        <td class="token-name"><code>--wa-border-width-scale</code></td>
        <td>所有边框宽度计算的全局乘数</td>
        <td>—</td>
      </tr>
      <tr id="token-wa-border-width-s">
        <td class="token-name"><code>--wa-border-width-s</code></td>
        <td>细边框，用于大多数组件轮廓</td>
        <td><div class="swatch" style="border-width: var(--wa-border-width-s)"></div></td>
      </tr>
      <tr id="token-wa-border-width-m">
        <td class="token-name"><code>--wa-border-width-m</code></td>
        <td>中等边框，用于强调的边框</td>
        <td><div class="swatch" style="border-width: var(--wa-border-width-m)"></div></td>
      </tr>
      <tr id="token-wa-border-width-l">
        <td class="token-name"><code>--wa-border-width-l</code></td>
        <td>粗边框，用于突出的轮廓</td>
        <td><div class="swatch" style="border-width: var(--wa-border-width-l)"></div></td>
      </tr>
    </tbody>
  </table>
</wa-scroller>

## 边框圆角

边框圆角令牌控制组件的角落圆角。基于大小的令牌使用 `rem` 单位，并通过 `--wa-border-radius-scale` 缩放。值小于 `1` 使角落更锐利；值大于 `1` 使它们更圆润。形状令牌提供固定的形状，不受比例影响。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th><th>预览</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-border-radius-scale">
        <td class="token-name"><code>--wa-border-radius-scale</code></td>
        <td>所有边框圆角计算的全局乘数</td>
        <td>—</td>
      </tr>
      <tr id="token-wa-border-radius-s">
        <td class="token-name"><code>--wa-border-radius-s</code></td>
        <td>小圆角，用于徽章和复选框等紧凑型组件</td>
        <td><div class="swatch" style="border-radius: var(--wa-border-radius-s)"></div></td>
      </tr>
      <tr id="token-wa-border-radius-m">
        <td class="token-name"><code>--wa-border-radius-m</code></td>
        <td>中等圆角，大多数输入和按钮的默认值</td>
        <td><div class="swatch" style="border-radius: var(--wa-border-radius-m)"></div></td>
      </tr>
      <tr id="token-wa-border-radius-l">
        <td class="token-name"><code>--wa-border-radius-l</code></td>
        <td>大圆角，用于卡片和面板</td>
        <td><div class="swatch" style="border-radius: var(--wa-border-radius-l)"></div></td>
      </tr>
      <tr id="token-wa-border-radius-pill">
        <td class="token-name"><code>--wa-border-radius-pill</code></td>
        <td>全圆角端部，无论元素大小如何都形成药丸形状</td>
        <td><div class="swatch" style="border-radius: var(--wa-border-radius-pill)"></div></td>
      </tr>
      <tr id="token-wa-border-radius-circle">
        <td class="token-name"><code>--wa-border-radius-circle</code></td>
        <td>完美圆形；元素必须具有 1:1 的宽高比</td>
        <td><div class="swatch" style="aspect-ratio: 1 / 1; border-radius: var(--wa-border-radius-circle)"></div></td>
      </tr>
      <tr id="token-wa-border-radius-square">
        <td class="token-name"><code>--wa-border-radius-square</code></td>
        <td>无圆角；锐利的方形角落</td>
        <td><div class="swatch" style="border-radius: var(--wa-border-radius-square)"></div></td>
      </tr>
    </tbody>
  </table>
</wa-scroller>
