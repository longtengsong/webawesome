---
title: 排版
description: 使用 @SITE_NAME@ 的排版令牌获得一致的字体样式和垂直节奏。
layout: page-outline
synonyms:
  - 字体
  - 字号比例
  - 字体大小
use-cases:
  - 字体系列
  - 行高
  - 字体粗细
  - 文本令牌
---

排版令牌为您的主题提供一致的、可缩放的文本样式，贯穿每个组件。您可以调整单个令牌或使用比例乘数一次性更改所有大小或粗细。

## 字体系列

字体系列令牌被分配了特定角色 — 正文文本、标题、代码和长篇文本。默认情况下，它们使用系统字体以获得最佳性能。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th><th>预览</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-font-family-body">
        <td class="token-name"><code>--wa-font-family-body</code></td>
        <td>正文文本和 UI 组件的默认字体</td>
        <td><div style="font-family: var(--wa-font-family-body)">字体预览示例文本。</div></td>
      </tr>
      <tr id="token-wa-font-family-heading">
        <td class="token-name"><code>--wa-font-family-heading</code></td>
        <td>标题字体</td>
        <td><div style="font-family: var(--wa-font-family-heading)">字体预览示例文本。</div></td>
      </tr>
      <tr id="token-wa-font-family-code">
        <td class="token-name"><code>--wa-font-family-code</code></td>
        <td>代码块和内联代码的字体</td>
        <td><div style="font-family: var(--wa-font-family-code)">字体预览示例文本。</div></td>
      </tr>
      <tr id="token-wa-font-family-longform">
        <td class="token-name"><code>--wa-font-family-longform</code></td>
        <td>长篇文本和阅读优化内容的字体</td>
        <td><div style="font-family: var(--wa-font-family-longform)">字体预览示例文本。</div></td>
      </tr>
    </tbody>
  </table>
</wa-scroller>

## 字体大小

字体大小使用 1.125 的比例进行缩放。中等大小（`m`）是基础；以下的尺寸依次缩小 1.125×，以上的尺寸按 *两倍* 1.125× 放大，以最大化较大尺寸之间的视觉对比度。所有值使用 `rem` 单位，并四舍五入到最接近的整数像素。

使用 `--wa-font-size-scale` 可按比例同时增大或减小所有尺寸。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th><th>预览</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-font-size-scale">
        <td class="token-name"><code>--wa-font-size-scale</code></td>
        <td>应用于所有字体大小计算的全局乘数</td>
        <td>—</td>
      </tr>
      <tr id="token-wa-font-size-3xs">
        <td class="token-name"><code>--wa-font-size-3xs</code></td>
        <td>最小的字体大小。请谨慎使用，仅用于非必要的 UI。</td>
        <td><div style="font-size: var(--wa-font-size-3xs)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-size-2xs">
        <td class="token-name"><code>--wa-font-size-2xs</code></td>
        <td>接近最小的字体大小。请谨慎使用，仅用于非必要的 UI。</td>
        <td><div style="font-size: var(--wa-font-size-2xs)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-size-xs">
        <td class="token-name"><code>--wa-font-size-xs</code></td>
        <td>特小字体大小，适合标签和元数据</td>
        <td><div style="font-size: var(--wa-font-size-xs)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-size-s">
        <td class="token-name"><code>--wa-font-size-s</code></td>
        <td>小字体大小，用于次要文本和提示</td>
        <td><div style="font-size: var(--wa-font-size-s)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-size-m">
        <td class="token-name"><code>--wa-font-size-m</code></td>
        <td>基础字体大小，用于大多数正文文本</td>
        <td><div style="font-size: var(--wa-font-size-m)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-size-l">
        <td class="token-name"><code>--wa-font-size-l</code></td>
        <td>大字体大小，用于略微强调的文本和小标题</td>
        <td><div style="font-size: var(--wa-font-size-l)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-size-xl">
        <td class="token-name"><code>--wa-font-size-xl</code></td>
        <td>特大字体大小，用于副标题</td>
        <td><div style="font-size: var(--wa-font-size-xl)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-size-2xl">
        <td class="token-name"><code>--wa-font-size-2xl</code></td>
        <td>2 倍特大字体大小，用于章节标题</td>
        <td><div style="font-size: var(--wa-font-size-2xl)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-size-3xl">
        <td class="token-name"><code>--wa-font-size-3xl</code></td>
        <td>3 倍特大字体大小，用于页面标题</td>
        <td><div style="font-size: var(--wa-font-size-3xl)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-size-4xl">
        <td class="token-name"><code>--wa-font-size-4xl</code></td>
        <td>4 倍特大字体大小，用于展示标题</td>
        <td><div style="font-size: var(--wa-font-size-4xl)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-size-5xl">
        <td class="token-name"><code>--wa-font-size-5xl</code></td>
        <td>5 倍特大字体大小，用于英雄头条</td>
        <td><div style="font-size: var(--wa-font-size-5xl)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-size-smaller">
        <td class="token-name"><code>--wa-font-size-smaller</code></td>
        <td>相对于父元素字体大小按比例缩小文本</td>
        <td><div>正常 &#8594; <span style="font-size: var(--wa-font-size-smaller)">更小</span></div></td>
      </tr>
      <tr id="token-wa-font-size-larger">
        <td class="token-name"><code>--wa-font-size-larger</code></td>
        <td>相对于父元素字体大小按比例放大文本</td>
        <td><div>正常 &#8594; <span style="font-size: var(--wa-font-size-larger)">更大</span></div></td>
      </tr>
    </tbody>
  </table>
</wa-scroller>

## 字体粗细

字体粗细令牌有两种类型：覆盖完整范围的命名权重，以及针对特定文本类型的基于角色的权重。基于角色的权重默认引用命名权重。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th><th>预览</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-font-weight-light">
        <td class="token-name"><code>--wa-font-weight-light</code></td>
        <td>细体文字粗细</td>
        <td><div style="font-weight: var(--wa-font-weight-light)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-weight-normal">
        <td class="token-name"><code>--wa-font-weight-normal</code></td>
        <td>正常文字粗细</td>
        <td><div style="font-weight: var(--wa-font-weight-normal)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-weight-semibold">
        <td class="token-name"><code>--wa-font-weight-semibold</code></td>
        <td>中等/半粗体文字粗细</td>
        <td><div style="font-weight: var(--wa-font-weight-semibold)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-weight-bold">
        <td class="token-name"><code>--wa-font-weight-bold</code></td>
        <td>粗体文字粗细</td>
        <td><div style="font-weight: var(--wa-font-weight-bold)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-weight-body">
        <td class="token-name"><code>--wa-font-weight-body</code></td>
        <td>正文/段落文本的粗细</td>
        <td><div style="font-weight: var(--wa-font-weight-body)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-weight-heading">
        <td class="token-name"><code>--wa-font-weight-heading</code></td>
        <td>标题的粗细</td>
        <td><div style="font-weight: var(--wa-font-weight-heading)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-weight-code">
        <td class="token-name"><code>--wa-font-weight-code</code></td>
        <td>代码的粗细</td>
        <td><div style="font-weight: var(--wa-font-weight-code); font-family: var(--wa-font-family-code)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-weight-longform">
        <td class="token-name"><code>--wa-font-weight-longform</code></td>
        <td>长篇文本的粗细</td>
        <td><div style="font-weight: var(--wa-font-weight-longform)">AaBb</div></td>
      </tr>
      <tr id="token-wa-font-weight-action">
        <td class="token-name"><code>--wa-font-weight-action</code></td>
        <td>交互式文本（如按钮标签和选项卡）的粗细。也推荐用于不使用文本装饰的链接。</td>
        <td><div style="font-weight: var(--wa-font-weight-action)">AaBb</div></td>
      </tr>
    </tbody>
  </table>
</wa-scroller>

## 行高

行高是无单位的，以便与文本大小按比例缩放。为了可读性，段落文本应至少为 `1.5`。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th><th>预览</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-line-height-condensed">
        <td class="token-name"><code>--wa-line-height-condensed</code></td>
        <td>紧凑行高，用于标题和短 UI 文本</td>
        <td><div style="line-height: var(--wa-line-height-condensed); border-block-color: var(--wa-color-neutral-border-loud)">那只敏捷的棕色狐狸<br>跳过了懒惰的狗</div></td>
      </tr>
      <tr id="token-wa-line-height-normal">
        <td class="token-name"><code>--wa-line-height-normal</code></td>
        <td>标准行高，用于正文/段落文本</td>
        <td><div style="line-height: var(--wa-line-height-normal); border-block-color: var(--wa-color-neutral-border-loud)">那只敏捷的棕色狐狸<br>跳过了懒惰的狗</div></td>
      </tr>
      <tr id="token-wa-line-height-expanded">
        <td class="token-name"><code>--wa-line-height-expanded</code></td>
        <td>宽松行高，用于阅读优化或宽松的内容</td>
        <td><div style="line-height: var(--wa-line-height-expanded); border-block-color: var(--wa-color-neutral-border-loud)">那只敏捷的棕色狐狸<br>跳过了懒惰的狗</div></td>
      </tr>
    </tbody>
  </table>
</wa-scroller>

## 链接装饰

与 [`--wa-color-text-link`](?active_tab=color) 一起，这些令牌为 `<a>` 元素添加文本装饰，以表明它们作为超链接的角色。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th><th>预览</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-link-decoration-default">
        <td class="token-name"><code>--wa-link-decoration-default</code></td>
        <td>链接在默认（非悬停）状态下应用的文本装饰</td>
        <td><span class="wa-link" style="text-decoration: var(--wa-link-decoration-default)">链接文本</span></td>
      </tr>
      <tr id="token-wa-link-decoration-hover">
        <td class="token-name"><code>--wa-link-decoration-hover</code></td>
        <td>链接在悬停状态下应用的文本装饰</td>
        <td><span class="wa-link" style="text-decoration: var(--wa-link-decoration-hover)">链接文本</span></td>
      </tr>
    </tbody>
  </table>
</wa-scroller>
