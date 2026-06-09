---
title: 组件组
description: 使用这些 Web Awesome 令牌样式化共享相似特质的组件组。
order: 9999
layout: page-outline
synonyms:
  - 组件令牌
  - 组令牌
use-cases:
  - 共享令牌
  - 令牌集
---

组件令牌让您可以一次性样式化相关组件组。这些令牌不是覆盖单个组件样式，而是传播到每个共享给定视觉特质的组件中。

## 表单控件

诸如 [input](/docs/components/input)、[select](/docs/components/select)、[textarea](/docs/components/textarea)、[checkbox](/docs/components/checkbox) 等组件共享使用 `--wa-form-control-*` 前缀定义的样式。

并非每个表单控件都使用所有这些自定义属性。例如，[radio](/docs/components/radio) 定义了自身的高度和边框圆角以实现其熟悉的形状，但与其他组件共享许多其他样式以保持一致的外观和感觉。同样，[button](/docs/components/button) 定义了许多自身样式，但与其他表单控件匹配高度和边框宽度。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-form-control-background-color">
        <td class="token-name"><code>--wa-form-control-background-color</code></td>
        <td>表单控件输入框的背景颜色</td>
      </tr>
      <tr id="token-wa-form-control-border-color">
        <td class="token-name"><code>--wa-form-control-border-color</code></td>
        <td>表单控件输入框的边框颜色</td>
      </tr>
      <tr id="token-wa-form-control-border-style">
        <td class="token-name"><code>--wa-form-control-border-style</code></td>
        <td>表单控件输入框的边框线条样式</td>
      </tr>
      <tr id="token-wa-form-control-border-width">
        <td class="token-name"><code>--wa-form-control-border-width</code></td>
        <td>表单控件输入框的边框粗细</td>
      </tr>
      <tr id="token-wa-form-control-border-radius">
        <td class="token-name"><code>--wa-form-control-border-radius</code></td>
        <td>表单控件输入框的圆角</td>
      </tr>
      <tr id="token-wa-form-control-activated-color">
        <td class="token-name"><code>--wa-form-control-activated-color</code></td>
        <td>控件处于活动、选中或已选择状态时的强调色</td>
      </tr>
      <tr id="token-wa-form-control-label-color">
        <td class="token-name"><code>--wa-form-control-label-color</code></td>
        <td>表单控件标签的文本颜色</td>
      </tr>
      <tr id="token-wa-form-control-label-font-weight">
        <td class="token-name"><code>--wa-form-control-label-font-weight</code></td>
        <td>表单控件标签的字体粗细</td>
      </tr>
      <tr id="token-wa-form-control-label-line-height">
        <td class="token-name"><code>--wa-form-control-label-line-height</code></td>
        <td>表单控件标签的行高</td>
      </tr>
      <tr id="token-wa-form-control-value-color">
        <td class="token-name"><code>--wa-form-control-value-color</code></td>
        <td>用户输入或选中值的文本颜色</td>
      </tr>
      <tr id="token-wa-form-control-value-font-weight">
        <td class="token-name"><code>--wa-form-control-value-font-weight</code></td>
        <td>用户输入或选中值的字体粗细</td>
      </tr>
      <tr id="token-wa-form-control-value-line-height">
        <td class="token-name"><code>--wa-form-control-value-line-height</code></td>
        <td>用户输入或选中值的行高</td>
      </tr>
      <tr id="token-wa-form-control-hint-color">
        <td class="token-name"><code>--wa-form-control-hint-color</code></td>
        <td>表单控件下方提示文本的文本颜色</td>
      </tr>
      <tr id="token-wa-form-control-hint-font-weight">
        <td class="token-name"><code>--wa-form-control-hint-font-weight</code></td>
        <td>提示文本的字体粗细</td>
      </tr>
      <tr id="token-wa-form-control-hint-line-height">
        <td class="token-name"><code>--wa-form-control-hint-line-height</code></td>
        <td>提示文本的行高</td>
      </tr>
      <tr id="token-wa-form-control-placeholder-color">
        <td class="token-name"><code>--wa-form-control-placeholder-color</code></td>
        <td>输入框占位文本的文本颜色</td>
      </tr>
      <tr id="token-wa-form-control-required-content">
        <td class="token-name"><code>--wa-form-control-required-content</code></td>
        <td>附加到必填字段标签后的内容</td>
      </tr>
      <tr id="token-wa-form-control-required-content-color">
        <td class="token-name"><code>--wa-form-control-required-content-color</code></td>
        <td>必填字段指示器的颜色</td>
      </tr>
      <tr id="token-wa-form-control-required-content-offset">
        <td class="token-name"><code>--wa-form-control-required-content-offset</code></td>
        <td>标签文本与必填指示器之间的内联间距</td>
      </tr>
      <tr id="token-wa-form-control-padding-block">
        <td class="token-name"><code>--wa-form-control-padding-block</code></td>
        <td>表单控件输入框内部的块（上/下）内边距</td>
      </tr>
      <tr id="token-wa-form-control-padding-inline">
        <td class="token-name"><code>--wa-form-control-padding-inline</code></td>
        <td>表单控件输入框内部的内联（左/右）内边距</td>
      </tr>
      <tr id="token-wa-form-control-height">
        <td class="token-name"><code>--wa-form-control-height</code></td>
        <td>单行表单控件的计算高度；由内边距和行高派生</td>
      </tr>
      <tr id="token-wa-form-control-toggle-size">
        <td class="token-name"><code>--wa-form-control-toggle-size</code></td>
        <td>切换控件（复选框、单选按钮、开关）的大小</td>
      </tr>
    </tbody>
  </table>
</wa-scroller>

```html {.example}
<form class="wa-stack">
  <wa-input label="输入框" placeholder="占位文本"></wa-input>
  <wa-select label="选择框" value="option-1">
    <wa-option value="option-1">选项 1</wa-option>
    <wa-option value="option-2">选项 2</wa-option>
    <wa-option value="option-3">选项 3</wa-option>
  </wa-select>
  <wa-textarea label="文本域" placeholder="占位文本"></wa-textarea>
  <wa-radio-group label="单选组" name="a" value="1">
    <wa-radio value="1">选项 1</wa-radio>
    <wa-radio value="2">选项 2</wa-radio>
    <wa-radio value="3">选项 3</wa-radio>
  </wa-radio-group>
  <wa-checkbox>复选框</wa-checkbox>
  <wa-switch>开关</wa-switch>
  <wa-slider label="滑块"></wa-slider>
  <wa-button>按钮</wa-button>
</form>
```

## 按钮

除了与表单控件共享样式外，[按钮](/docs/components/button)还有自己独特的令牌子集。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th><th>预览</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-panel-border-style">
        <td class="token-name"><code>--wa-button-transform-hover</code></td>
        <td>鼠标悬停时应用于按钮的变换函数</td>
        <td><wa-button variant="brand" appearance="filled">鼠标悬停于我</wa-button></td>
      </tr>
      <tr id="token-wa-panel-border-style">
        <td class="token-name"><code>--wa-button-transform-active</code></td>
        <td>按下/激活时应用于按钮的变换函数</td>
        <td><wa-button variant="brand" appearance="filled">按下我</wa-button></td>
      </tr>
    </tbody>
  </table>
</wa-scroller>

## 面板

面板令牌适用于具有较大、包含性表面积的组件，如 [callout](/docs/components/callout)、[card](/docs/components/card)、[details](/docs/components/details) 和 [dialog](/docs/components/dialog)。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-panel-border-style">
        <td class="token-name"><code>--wa-panel-border-style</code></td>
        <td>面板组件的边框线条样式</td>
      </tr>
      <tr id="token-wa-panel-border-width">
        <td class="token-name"><code>--wa-panel-border-width</code></td>
        <td>面板组件的边框粗细</td>
      </tr>
      <tr id="token-wa-panel-border-radius">
        <td class="token-name"><code>--wa-panel-border-radius</code></td>
        <td>面板组件的圆角</td>
      </tr>
    </tbody>
  </table>
</wa-scroller>

```html {.example}
<div class="wa-stack">
  <wa-callout>
    <wa-icon slot="icon" name="circle-info" variant="regular"></wa-icon>
    这是一个带图标的简单标注框。
  </wa-callout>
  <wa-card>这是一张基本的、简洁的卡片。</wa-card>
  <wa-details summary="详情">
    <code>wa-details</code>，为您服务。
  </wa-details>
</div>
```

## 工具提示

工具提示令牌适用于 [tooltip](/docs/components/tooltip) 组件以及其他组件（如 [slider](/docs/components/slider) 和 [copy button](/docs/components/copy-button)）中的内置工具提示。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-tooltip-arrow-size">
        <td class="token-name"><code>--wa-tooltip-arrow-size</code></td>
        <td>工具提示箭头/指示标记的大小</td>
      </tr>
      <tr id="token-wa-tooltip-background-color">
        <td class="token-name"><code>--wa-tooltip-background-color</code></td>
        <td>工具提示主体的背景颜色</td>
      </tr>
      <tr id="token-wa-tooltip-border-color">
        <td class="token-name"><code>--wa-tooltip-border-color</code></td>
        <td>工具提示的边框颜色</td>
      </tr>
      <tr id="token-wa-tooltip-border-style">
        <td class="token-name"><code>--wa-tooltip-border-style</code></td>
        <td>工具提示的边框线条样式</td>
      </tr>
      <tr id="token-wa-tooltip-border-width">
        <td class="token-name"><code>--wa-tooltip-border-width</code></td>
        <td>工具提示的边框粗细</td>
      </tr>
      <tr id="token-wa-tooltip-border-radius">
        <td class="token-name"><code>--wa-tooltip-border-radius</code></td>
        <td>工具提示的圆角</td>
      </tr>
      <tr id="token-wa-tooltip-content-color">
        <td class="token-name"><code>--wa-tooltip-content-color</code></td>
        <td>工具提示内容的文本颜色</td>
      </tr>
      <tr id="token-wa-tooltip-font-size">
        <td class="token-name"><code>--wa-tooltip-font-size</code></td>
        <td>工具提示文本的字体大小</td>
      </tr>
      <tr id="token-wa-tooltip-line-height">
        <td class="token-name"><code>--wa-tooltip-line-height</code></td>
        <td>工具提示文本的行高</td>
      </tr>
    </tbody>
  </table>
</wa-scroller>

```html {.example}
<wa-button id="tooltip-demo" appearance="plain">
  <wa-icon label="目标" name="bullseye"></wa-icon>
</wa-button>
<wa-tooltip for="tooltip-demo" open trigger="manual">这是一个工具提示</wa-tooltip>
```
