---
title: 阴影
description: 使用 Web Awesome 的阴影令牌提升您的组件。
synonyms:
  - 盒阴影
  - 高度
  - 深度
use-cases:
  - 投影
  - 卡片阴影
  - 叠加阴影
hasOutline: true
---

阴影令牌表示高度和（通常）交互性。Web Awesome 提供了三种基于大小的阴影简写，由模块化的偏移、模糊和扩散令牌构建而成。与 [`--wa-color-shadow`](?active_tab=color) 一起，这些令牌创建逼真的投影。

较大的阴影具有更大的偏移和模糊值，以暗示与下方表面的更大距离。任何阴影也可以使用 `inset` 关键字作为内阴影使用，例如 `box-shadow: inset var(--wa-shadow-s)`。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th><th>预览</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-shadow-s">
        <td class="token-name"><code>--wa-shadow-s</code></td>
        <td>小阴影，用于微妙的高度（例如卡片、输入框）</td>
        <td><div class="swatch" style="box-shadow: var(--wa-shadow-s)"></div></td>
      </tr>
      <tr id="token-wa-shadow-m">
        <td class="token-name"><code>--wa-shadow-m</code></td>
        <td>中等阴影，用于中等高度（例如下拉菜单、弹出框）</td>
        <td><div class="swatch" style="box-shadow: var(--wa-shadow-m)"></div></td>
      </tr>
      <tr id="token-wa-shadow-l">
        <td class="token-name"><code>--wa-shadow-l</code></td>
        <td>大阴影，用于高高度（例如对话框、抽屉）</td>
        <td><div class="swatch" style="box-shadow: var(--wa-shadow-l)"></div></td>
      </tr>
    </tbody>
  </table>
</wa-scroller>

## 水平偏移 (X)

偏移-x 令牌控制阴影相对于元素的水平位置。使用 `--wa-shadow-offset-x-scale` 可一次性更改所有偏移-x 令牌。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-shadow-offset-x-scale">
        <td class="token-name"><code>--wa-shadow-offset-x-scale</code></td>
        <td>水平阴影偏移的全局乘数</td>
      </tr>
      <tr id="token-wa-shadow-offset-x-s">
        <td class="token-name"><code>--wa-shadow-offset-x-s</code></td>
        <td>小水平阴影偏移</td>
      </tr>
      <tr id="token-wa-shadow-offset-x-m">
        <td class="token-name"><code>--wa-shadow-offset-x-m</code></td>
        <td>中等水平阴影偏移</td>
      </tr>
      <tr id="token-wa-shadow-offset-x-l">
        <td class="token-name"><code>--wa-shadow-offset-x-l</code></td>
        <td>大水平阴影偏移</td>
      </tr>
    </tbody>
  </table>
</wa-scroller>

## 垂直偏移 (Y)

偏移-y 令牌控制阴影相对于元素的垂直位置。使用 `--wa-shadow-offset-y-scale` 可一次性更改所有偏移-y 令牌。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-shadow-offset-y-scale">
        <td class="token-name"><code>--wa-shadow-offset-y-scale</code></td>
        <td>垂直阴影偏移的全局乘数</td>
      </tr>
      <tr id="token-wa-shadow-offset-y-s">
        <td class="token-name"><code>--wa-shadow-offset-y-s</code></td>
        <td>小垂直阴影偏移</td>
      </tr>
      <tr id="token-wa-shadow-offset-y-m">
        <td class="token-name"><code>--wa-shadow-offset-y-m</code></td>
        <td>中等垂直阴影偏移</td>
      </tr>
      <tr id="token-wa-shadow-offset-y-l">
        <td class="token-name"><code>--wa-shadow-offset-y-l</code></td>
        <td>大垂直阴影偏移</td>
      </tr>
    </tbody>
  </table>
</wa-scroller>

## 模糊

模糊令牌控制阴影边缘的柔和或锐利程度。使用 `--wa-shadow-blur-scale` 可一次性更改所有模糊令牌。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-shadow-blur-scale">
        <td class="token-name"><code>--wa-shadow-blur-scale</code></td>
        <td>阴影模糊半径的全局乘数。也会影响 <code>--wa-color-shadow</code> 的透明度。</td>
      </tr>
      <tr id="token-wa-shadow-blur-s">
        <td class="token-name"><code>--wa-shadow-blur-s</code></td>
        <td>小阴影模糊半径</td>
      </tr>
      <tr id="token-wa-shadow-blur-m">
        <td class="token-name"><code>--wa-shadow-blur-m</code></td>
        <td>中等阴影模糊半径</td>
      </tr>
      <tr id="token-wa-shadow-blur-l">
        <td class="token-name"><code>--wa-shadow-blur-l</code></td>
        <td>大阴影模糊半径</td>
      </tr>
    </tbody>
  </table>
</wa-scroller>

## 扩散

扩散令牌扩展或收缩阴影形状。负扩散（默认值）向内收缩阴影，呈现更自然的外观。使用 `--wa-shadow-spread-scale` 可一次性更改所有扩散令牌。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-shadow-spread-scale">
        <td class="token-name"><code>--wa-shadow-spread-scale</code></td>
        <td>阴影扩散的全局乘数。负值向内收缩阴影。</td>
      </tr>
      <tr id="token-wa-shadow-spread-s">
        <td class="token-name"><code>--wa-shadow-spread-s</code></td>
        <td>小阴影扩散</td>
      </tr>
      <tr id="token-wa-shadow-spread-m">
        <td class="token-name"><code>--wa-shadow-spread-m</code></td>
        <td>中等阴影扩散</td>
      </tr>
      <tr id="token-wa-shadow-spread-l">
        <td class="token-name"><code>--wa-shadow-spread-l</code></td>
        <td>大阴影扩散</td>
      </tr>
    </tbody>
  </table>
</wa-scroller>
