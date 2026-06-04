---
title: 过渡
description: 使用 Web Awesome 的过渡令牌自定义主题的内置过渡效果。
synonyms:
  - animation timing
  - easing
  - duration
  - 动画时间
  - 缓动
  - 持续时间
use-cases:
  - transition speed
  - motion tokens
  - 过渡速度
  - 动效令牌
hasOutline: true
---

<style>
  .transition-swatch {
    background-color: var(--wa-color-neutral-fill-normal);
    border: none;
    position: relative;
    overflow: hidden;
  }
  .transition-swatch::after {
    content: '';
    position: absolute;
    background-color: var(--wa-color-brand-fill-loud);
    border-radius: var(--wa-border-radius-m);
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    transition: inherit;
  }
  .transition-swatch:hover::after,
  .transition-swatch:focus::after {
    width: 100%;
  }
</style>

过渡令牌使交互感觉更加生动，并帮助用户理解其操作与其结果之间的关系。

将鼠标悬停或聚焦在下面的预览样例上，以查看每个令牌的实际效果。

## 持续时间

Web Awesome 使用不同的过渡持续时间，以便于跟踪组件状态，同时最大程度地减少迟钝或分散注意力的动作。

频繁、偶然状态（如悬停）之间变化的属性通常比故意状态（如打开菜单或选中复选框）之间变化的属性使用更快的持续时间。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th><th>预览</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-transition-fast">
        <td class="token-name"><code>--wa-transition-fast</code></td>
        <td>用于频繁、偶然状态变化的快速持续时间，如悬停和聚焦</td>
        <td><div tabindex="0" class="swatch transition-swatch" style="transition: width var(--wa-transition-fast) var(--wa-transition-easing)"></div></td>
      </tr>
      <tr id="token-wa-transition-normal">
        <td class="token-name"><code>--wa-transition-normal</code></td>
        <td>用于典型状态变化的标准持续时间</td>
        <td><div tabindex="0" class="swatch transition-swatch" style="transition: width var(--wa-transition-normal) var(--wa-transition-easing)"></div></td>
      </tr>
      <tr id="token-wa-transition-slow">
        <td class="token-name"><code>--wa-transition-slow</code></td>
        <td>用于故意、有影响的状态变化的缓慢持续时间，如打开面板或选中复选框</td>
        <td><div tabindex="0" class="swatch transition-swatch" style="transition: width var(--wa-transition-slow) var(--wa-transition-easing)"></div></td>
      </tr>
    </tbody>
  </table>
</wa-scroller>

## 缓动

缓动控制 Web Awesome 中所有过渡使用的标准 `transition-timing-function`。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th><th>预览</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-transition-easing">
        <td class="token-name"><code>--wa-transition-easing</code></td>
        <td>用于所有 Web Awesome 过渡的计时函数 (<code>transition-timing-function</code>)</td>
        <td><div tabindex="0" class="swatch transition-swatch" style="transition: width 600ms var(--wa-transition-easing)"></div></td>
      </tr>
    </tbody>
  </table>
</wa-scroller>
