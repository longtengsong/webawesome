---
title: 间距
description: 使用 @SITE_NAME@ 的间距令牌锁定一致的间距。
synonyms:
  - 间距
  - 间距比例
  - 空白
use-cases:
  - 内边距
  - 外边距
  - 间距
  - 间距令牌
hasOutline: true
---

<style>
  .spacing-example {
    --dot-size: 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--wa-color-neutral-fill-normal);
    height: 2em;
    margin-inline: var(--dot-size);
  }
  .spacing-example::before {
    content: '';
    aspect-ratio: 1 / 1;
    width: var(--dot-size);
    background-color: var(--wa-color-neutral-fill-loud);
    border-radius: 50%;
    margin-inline-start: calc(var(--dot-size) * -1);
  }
  .spacing-example::after {
    content: '';
    aspect-ratio: 1 / 1;
    width: var(--dot-size);
    background-color: var(--wa-color-neutral-fill-loud);
    border-radius: 50%;
    margin-inline-end: calc(var(--dot-size) * -1);
  }
</style>

间距令牌创建可预测的节奏和有意义的邻近关系。它们使用 `rem` 单位，以便间距与根字体大小按比例缩放。

使用 `--wa-space-scale` 可一次性增大或减小所有间距。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th><th>预览</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-space-scale">
        <td class="token-name"><code>--wa-space-scale</code></td>
        <td>应用于所有间距令牌的全局乘数</td>
        <td>—</td>
      </tr>
      <tr id="token-wa-space-3xs">
        <td class="token-name"><code>--wa-space-3xs</code></td>
        <td>最小的间距，用于极细的间隙和微调</td>
        <td><div class="spacing-example" style="width: var(--wa-space-3xs)"></div></td>
      </tr>
      <tr id="token-wa-space-2xs">
        <td class="token-name"><code>--wa-space-2xs</code></td>
        <td>接近最小的间距，用于文本或图标间隙</td>
        <td><div class="spacing-example" style="width: var(--wa-space-2xs)"></div></td>
      </tr>
      <tr id="token-wa-space-xs">
        <td class="token-name"><code>--wa-space-xs</code></td>
        <td>特小间距，用于紧密相关的元素</td>
        <td><div class="spacing-example" style="width: var(--wa-space-xs)"></div></td>
      </tr>
      <tr id="token-wa-space-s">
        <td class="token-name"><code>--wa-space-s</code></td>
        <td>小间距，用于小型组件的内边距</td>
        <td><div class="spacing-example" style="width: var(--wa-space-s)"></div></td>
      </tr>
      <tr id="token-wa-space-m">
        <td class="token-name"><code>--wa-space-m</code></td>
        <td>基础间距，最常见的填充和间距大小</td>
        <td><div class="spacing-example" style="width: var(--wa-space-m)"></div></td>
      </tr>
      <tr id="token-wa-space-l">
        <td class="token-name"><code>--wa-space-l</code></td>
        <td>大间距，用于较大组件的内边距</td>
        <td><div class="spacing-example" style="width: var(--wa-space-l)"></div></td>
      </tr>
      <tr id="token-wa-space-xl">
        <td class="token-name"><code>--wa-space-xl</code></td>
        <td>特大间距，用于组之间或周围的内边距</td>
        <td><div class="spacing-example" style="width: var(--wa-space-xl)"></div></td>
      </tr>
      <tr id="token-wa-space-2xl">
        <td class="token-name"><code>--wa-space-2xl</code></td>
        <td>2 倍特大间距</td>
        <td><div class="spacing-example" style="width: var(--wa-space-2xl)"></div></td>
      </tr>
      <tr id="token-wa-space-3xl">
        <td class="token-name"><code>--wa-space-3xl</code></td>
        <td>3 倍特大间距</td>
        <td><div class="spacing-example" style="width: var(--wa-space-3xl)"></div></td>
      </tr>
      <tr id="token-wa-space-4xl">
        <td class="token-name"><code>--wa-space-4xl</code></td>
        <td>4 倍特大间距</td>
        <td><div class="spacing-example" style="width: var(--wa-space-4xl)"></div></td>
      </tr>
      <tr id="token-wa-space-5xl">
        <td class="token-name"><code>--wa-space-5xl</code></td>
        <td>最大的间距，用于超宽松的间距</td>
        <td><div class="spacing-example" style="width: var(--wa-space-5xl)"></div></td>
      </tr>
      <tr id="token-wa-content-spacing">
        <td class="token-name"><code>--wa-content-spacing</code></td>
        <td>语义别名，表示顶级块之间的默认间距</td>
        <td><div class="spacing-example" style="width: var(--wa-content-spacing)"></div></td>
      </tr>
    </tbody>
  </table>
</wa-scroller>
