---
title: 颜色
description: 使用 Web Awesome 的颜色属性确保颜色使用的一致性和可读性的对比度。
hasOutline: true
synonyms:
  - palette
  - color system
  - color tokens
  - 调色板
  - 颜色系统
  - 颜色令牌
use-cases:
  - theme colors
  - brand palette
  - semantic colors
  - 主题颜色
  - 品牌调色板
  - 语义颜色
---

<style>
  /* Palette swatches */
  .palette-swatches {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    gap: var(--wa-space-3xs);
    margin-block-start: var(--wa-space-l);
    margin-block-end: var(--wa-space-m);
  }
  .palette-swatch {
    display: block;
    position: relative;
    aspect-ratio: 1.5 / 1;

    &::before {
      content: var(--tint);
      position: absolute;
      top: calc(-1 * var(--wa-space-l));
      left: 50%;
      transform: translateX(-50%);
      font-size: var(--wa-font-size-xs);
      color: var(--wa-color-text-quiet);
      font-weight: var(--wa-font-weight-action);
      text-align: center;
      z-index: 2;
    }
  }
  .swatch-button {
    all: revert;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    cursor: pointer;
    background-color: var(--color);
    border-radius: var(--wa-border-radius-m);
    transition: transform 0.1s ease, translate 0.1s ease, box-shadow 0.1s ease;

    &:hover {
      transform: scale(1.075);
      box-shadow: var(--wa-shadow-s);
      z-index: 1;
    }

    &:active {
      translate: 0 1px;
      box-shadow: none;
    }
  }
  @media (max-width: 576px) {
    .palette-swatches {
      grid-template-columns: repeat(6, 1fr);
      gap: var(--wa-space-2xs);
      row-gap: var(--wa-space-l);
    }
    .palette-swatch {
      &::before {
        font-size: var(--wa-font-size-2xs);
        top: calc(-1 * var(--wa-space-m));
      }
    }
  }

  .color-mix-example {
    background-image:
      linear-gradient(
        to right,
        color-mix(in oklab, transparent, var(--mix-color)) 25%,
        color-mix(in oklab, var(--wa-color-brand-fill-loud), var(--mix-color)) 25%,
        color-mix(in oklab, var(--wa-color-brand-fill-loud), var(--mix-color)) 75%,
        var(--wa-color-brand-fill-loud) 75%
      );
    border: none;
    color: var(--wa-color-brand-on-loud);
    text-align: center;
  }
</style>


Web Awesome 的颜色系统由三层组成：为您提供完整色调光谱的**调色板**、定义语义颜色变体（如成功和危险）的**变体颜色**，以及将调色板和变体颜色中的色调分配给设计令牌以设置组件样式的**主题颜色**。

## 调色板
[调色板](/docs/color-palettes)为您的项目提供完整的颜色光谱，是最低级别的颜色令牌。每个调色板包含 10 种不同的色调，每种色调都有 11 种数值色调，构成从浅到深的颜色刻度——`95` 接近白色，`05` 接近黑色。

这些数值色调有助于确保符合 [WCAG 2.1 成功标准](https://www.w3.org/TR/WCAG21/#contrast-minimum)的可访问颜色对比度：

- 差值为 40 时提供最小 3:1 的对比度，适合大文本和图标（AA）
- 差值为 50 时提供最小 4.5:1 的对比度，适合正常文本（AA）和大文本（AAA）
- 差值为 60 时提供最小 7:1 的对比度，适合所有文本（AAA）


{% for hue in ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'indigo', 'purple', 'pink', 'gray'] %}
<div class="palette">
  <div class="palette-label"><code>--wa-color-{{ hue }}-*</code></div>
  <div class="palette-swatches">
    {% for tint in ['95', '90', '80', '70', '60', '50', '40', '30', '20', '10', '05'] -%}
    <wa-copy-button
      class="palette-swatch"
      value="--wa-color-{{ hue }}-{{ tint }}"
      copy-label="--wa-color-{{ hue }}-{{ tint }}"
      style="--color: var(--wa-color-{{ hue }}-{{ tint }}); --tint: '{{ tint }}'"
    >
      <button class="swatch-button" aria-label="{{ hue }} {{ tint }} (点击复制)"></button>
    </wa-copy-button>
    {%- endfor %}
  </div>
</div>
{% endfor %}


### 核心颜色

除了数值色调外，每种色调还有一个**核心颜色**——刻度中最鲜艳、最饱满的色调。具体的色调因调色板而异。当您想要一种色调的代表性颜色而不指定具体色调时，使用 `--wa-color-{hue}`。

每个核心颜色的色调以整数形式存储在 `--wa-color-{hue}-key` 中。这些令牌在内部用于确定在核心颜色作为背景时兼容的文本颜色，不直接由组件使用。

使用此键，颜色系统会派生一个配对的**前景颜色**，保证在相应核心颜色之上时满足 WCAG 2.1 AA 对比度标准。如果核心色调是浅色（≥ 60），则前景颜色是该色调的深色；否则为白色。每当您在核心颜色背景上渲染文本或图标时，使用 `--wa-color-{hue}-on`。


<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr>
        <th>核心颜色</th>
        <th>键</th>
        <th>前景颜色</th>
        <th>预览</th>
      </tr>
    </thead>
    <tbody>
      {% for hue in ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'indigo', 'purple', 'pink', 'gray'] -%}
      <tr>
        <td class="token-name"><code>--wa-color-{{ hue }}</code></td>
        <td class="token-name"><code>--wa-color-{{ hue }}-key</code></td>
        <td class="token-name"><code>--wa-color-{{ hue }}-on</code></td>
        <td>
          <div class="swatch" style="background-color: var(--wa-color-{{ hue }}); color: var(--wa-color-{{ hue }}-on)">
            Aa
          </div>
        </td>
      </tr>
      {%- endfor %}
    </tbody>
  </table>
</wa-scroller>


## 变体颜色

变体颜色是调色板中特定色调的别名，为它们赋予了额外的语义含义层。这些变体是熟悉的、有意义的色调，强化特定信息或预期用途：
- **品牌**用于产品识别
- **中性**用于通用和普通内容
- **成功**用于有效性或确认
- **警告**用于谨慎或不确定性
- **危险**用于错误或风险

每个变体颜色都是调色板颜色的别名，并遵循相同的令牌格式：`--wa-color-{variant}-{tint}`。


{% for variant in ['brand', 'neutral', 'success', 'warning', 'danger'] %}
<div class="palette">
  <div class="palette-label"><code>--wa-color-{{ variant }}-*</code></div>
  <div class="palette-swatches">
    {% for tint in ['95', '90', '80', '70', '60', '50', '40', '30', '20', '10', '05'] -%}
    <wa-copy-button
      class="palette-swatch"
      value="--wa-color-{{ variant }}-{{ tint }}"
      copy-label="--wa-color-{{ variant }}-{{ tint }}"
      style="--color: var(--wa-color-{{ variant }}-{{ tint }}); --tint: '{{ tint }}'"
    >
      <button class="swatch-button" aria-label="{{ variant }} {{ tint }} (点击复制)"></button>
    </wa-copy-button>
    {%- endfor %}
  </div>
</div>
{% endfor %}


### 核心颜色

就像调色板中的色调一样，每个变体都有一个**核心颜色**——为您的变体选择的颜色刻度中最鲜艳、最饱满色调的别名。当您想要变体的代表性颜色而不指定具体色调时，使用 `--wa-color-{variant}`。

每个核心颜色也有一个配对的**前景颜色**（`--wa-color-{variant}-on`），保证在其之上时满足 WCAG 2.1 AA 对比度标准。每当您在核心颜色背景上渲染文本或图标时，使用前景颜色令牌。


<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr>
        <th>核心颜色</th>
        <th>前景颜色</th>
        <th>预览</th>
      </tr>
    </thead>
    <tbody>
      {% for variant in ['brand', 'neutral', 'success', 'warning', 'danger'] -%}
      <tr>
        <td class="token-name"><code>--wa-color-{{ variant }}</code></td>
        <td class="token-name"><code>--wa-color-{{ variant }}-on</code></td>
        <td>
          <div class="swatch" style="background-color: var(--wa-color-{{ variant }}); color: var(--wa-color-{{ variant }}-on)">
            Aa
          </div>
        </td>
      </tr>
      {%- endfor %}
    </tbody>
  </table>
</wa-scroller>


### 更改变体颜色

调色板中的任何色调都可以分配给任何变体，而无需在您自己的样式表中重新定义令牌。要使用不同的色调，只需将类 `"wa-{variant}-{hue}"` 应用于 `<html>` 元素。

```html
<html class="wa-brand-purple wa-success-cyan">
```

所有十种调色板色调——`red`、`orange`、`yellow`、`green`、`cyan`、`blue`、`indigo`、`purple`、`pink` 和 `gray`——都可用于每个变体。


## 主题颜色

主题颜色将调色板和变体颜色中的特定色调分配给设计令牌，以设置元素和组件的样式。这些令牌根据其作用而非外观命名，设计为适应明暗模式。

### 表面

表面是内容所依赖的背景层。它们传达层级结构——`raised` 最接近用户（例如对话框），而 `lowered` 最远（例如井）。


<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr>
        <th>自定义属性</th>
        <th>描述</th>
        <th>预览</th>
      </tr>
    </thead>
    <tbody>
      <tr id="token-wa-color-surface-raised">
        <td class="token-name"><code>--wa-color-surface-raised</code></td>
        <td>用于对话框和下拉菜单等提升表面的背景</td>
        <td><div class="swatch" style="background-color: var(--wa-color-surface-raised); box-shadow: var(--wa-shadow-s)"></div></td>
      </tr>
      <tr id="token-wa-color-surface-default">
        <td class="token-name"><code>--wa-color-surface-default</code></td>
        <td>默认页面或容器背景</td>
        <td><div class="swatch" style="background-color: var(--wa-color-surface-default)"></div></td>
      </tr>
      <tr id="token-wa-color-surface-lowered">
        <td class="token-name"><code>--wa-color-surface-lowered</code></td>
        <td>用于凹进表面的背景，如井和代码块</td>
        <td><div class="swatch" style="background-color: var(--wa-color-surface-lowered); box-shadow: inset var(--wa-shadow-s)"></div></td>
      </tr>
      <tr id="token-wa-color-surface-border">
        <td class="token-name"><code>--wa-color-surface-border</code></td>
        <td>用于划分表面区域的边框颜色</td>
        <td><div class="swatch" style="border-color: var(--wa-color-surface-border)"></div></td>
      </tr>
    </tbody>
  </table>
</wa-scroller>


### 文本

文本颜色用于可读内容。我们建议文本颜色与表面颜色的对比度至少为 4.5:1。


<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr>
        <th>自定义属性</th>
        <th>描述</th>
        <th>预览</th>
      </tr>
    </thead>
    <tbody>
      <tr id="token-wa-color-text-normal">
        <td class="token-name"><code>--wa-color-text-normal</code></td>
        <td>大多数内容的主要文本颜色</td>
        <td><div style="color: var(--wa-color-text-normal); font-weight: var(--wa-font-weight-semibold)">AaBb</div></td>
      </tr>
      <tr id="token-wa-color-text-quiet">
        <td class="token-name"><code>--wa-color-text-quiet</code></td>
        <td>用于提示、说明文字和其他次要内容的柔和文本</td>
        <td><div style="color: var(--wa-color-text-quiet); font-weight: var(--wa-font-weight-semibold)">AaBb</div></td>
      </tr>
      <tr id="token-wa-color-text-link">
        <td class="token-name"><code>--wa-color-text-link</code></td>
        <td>超链接的颜色</td>
        <td><div style="color: var(--wa-color-text-link); font-weight: var(--wa-font-weight-semibold)">AaBb</div></td>
      </tr>
    </tbody>
  </table>
</wa-scroller>


### 覆盖层

覆盖层提供隔离内容的背景，通常带有一些透明度，以便背景上下文显示出来。


<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr>
        <th>自定义属性</th>
        <th>描述</th>
        <th>预览</th>
      </tr>
    </thead>
    <tbody>
      <tr id="token-wa-color-overlay-modal">
        <td class="token-name"><code>--wa-color-overlay-modal</code></td>
        <td>模态对话框后面的半透明背景</td>
        <td><div class="swatch" style="background-color: var(--wa-color-overlay-modal)"></div></td>
      </tr>
      <tr id="token-wa-color-overlay-inline">
        <td class="token-name"><code>--wa-color-overlay-inline</code></td>
        <td>用于内联高亮或变暗区域的微妙覆盖层</td>
        <td><div class="swatch" style="background-color: var(--wa-color-overlay-inline)"></div></td>
      </tr>
    </tbody>
  </table>
</wa-scroller>


### 阴影

所有阴影都使用单一颜色。与[阴影令牌](?active_tab=shadows)一起使用以构现实的阴影。


<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr>
        <th>自定义属性</th>
        <th>描述</th>
        <th>预览</th>
      </tr>
    </thead>
    <tbody>
      <tr id="token-wa-color-shadow">
        <td class="token-name"><code>--wa-color-shadow</code></td>
        <td>用于所有组件阴影的颜色</td>
        <td><div class="swatch" style="background-color: var(--wa-color-surface-raised); box-shadow: var(--wa-shadow-l)"></div></td>
      </tr>
    </tbody>
  </table>
</wa-scroller>


### 交互

这些令牌在所有交互组件中提供一致的悬停、激活和焦点状态。


<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr>
        <th>自定义属性</th>
        <th>描述</th>
        <th>预览</th>
      </tr>
    </thead>
    <tbody>
      <tr id="token-wa-color-focus">
        <td class="token-name"><code>--wa-color-focus</code></td>
        <td>键盘焦点环的轮廓颜色。与<a href="?active_tab=focus">焦点令牌</a>一起使用。</td>
        <td><div class="swatch" style="outline: var(--wa-focus-ring)"></div></td>
      </tr>
      <tr id="token-wa-color-mix-hover">
        <td class="token-name"><code>--wa-color-mix-hover</code></td>
        <td>通过 <code>color-mix()</code> 在悬停时混合到组件颜色中的颜色和可选百分比</td>
        <td><div class="swatch color-mix-example" style="--mix-color: var(--wa-color-mix-hover)"><small>混合</small></div></td>
      </tr>
      <tr id="token-wa-color-mix-active">
        <td class="token-name"><code>--wa-color-mix-active</code></td>
        <td>通过 <code>color-mix()</code> 在按下/激活时混合到组件颜色中的颜色和可选百分比</td>
        <td><div class="swatch color-mix-example" style="--mix-color: var(--wa-color-mix-active)"><small>混合</small></div></td>
      </tr>
    </tbody>
  </table>
</wa-scroller>


### 语义变体

语义变体使用来自[变体颜色](#variant-colors)的 `--wa-color-{variant}-{tint}` 令牌来驱动按钮、徽章、标注和许多其他组件共享的 `variant=""` 属性。每个变体是一个完整的、自包含的颜色系统，由五个组构建而成——`brand`、`success`、`neutral`、`warning` 和 `danger`——每个组在三个注意力级别上定义填充、边框和前景颜色。

令牌遵循格式 `--wa-color-{variant}-{role}-{attention}`。三个**作用**是：

- **Fill** 用于背景或大于几个像素的区域
- **Border** 用于边框、分隔线和描边
- **On** 用于显示在填充*上方*的内容（将 `on-loud` 与 `fill-loud` 配对）

三个**注意力**级别是 `quiet`、`normal` 和 `loud`——从视觉上最不突出到最突出。


{% set variants = ['brand', 'neutral', 'success', 'warning', 'danger'] %}
<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr>
        <th>自定义属性</th>
        {% for variant in variants -%}
          <th><code>{{ variant }}</code></th>
        {%- endfor %}
      </tr>
    </thead>
    <tbody>
      {% for type in ['fill', 'border', 'on'] -%}
        {% for attention in ['quiet', 'normal', 'loud'] -%}
          <tr id="token-color-{{ type }}-{{ attention }}">
            <td class="token-name"><code>--wa-color-*-{{ type }}-{{ attention }}</code></td>
            {% for variant in variants -%}
              <td>
                {%- if type == 'border' -%}
                  <div class="swatch" style="border-color: var(--wa-color-{{ variant }}-{{ type }}-{{ attention }})"></div>
                {%- else -%}
                  <div class="swatch" style="background-color: var(--wa-color-{{ variant }}-fill-{{ attention }}); color: var(--wa-color-{{ variant }}-on-{{ attention }})">{{ 'Aa' if type == 'on' }}</div>
                {%- endif %}
              </td>
            {%- endfor %}
          </tr>
        {%- endfor %}
      {%- endfor %}
    </tbody>
  </table>
</wa-scroller>
