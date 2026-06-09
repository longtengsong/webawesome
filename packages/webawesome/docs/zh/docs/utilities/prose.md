---
title: Prose（散文式排版）
description: wa-prose 工具类为文档、文章和营销文案等长篇内容应用层次化、非对称的排版节奏。
layout: page-outline
tags: styleUtilities
synonyms:
  - prose
  - prose（散文式排版）
  - longform
  - longform（长篇内容）
  - article
  - article（文章）
  - copy
  - copy（文案）
  - typography rhythm
  - typography rhythm（排版节奏）
use-cases:
  - blog post
  - blog post（博客文章）
  - documentation
  - documentation（文档）
  - marketing copy
  - marketing copy（营销文案）
  - long-form content
  - long-form content（长篇内容）
  - article
  - article（文章）
---

将内容块包裹在 `wa-prose` 中，应用层次化、非对称的排版节奏：标题上方间距较大，下方间距较紧，主要非文本块周围有更多呼吸空间，`<hr>` 作为真正的段落分隔符。间距基于 em 单位，并随 `wa-font-size-*` 工具类缩放。

适用于文档、博客文章、文章或营销文案。元素样式（颜色、字体、边框）仍来自 [原生样式](/docs/utilities/native/)；`wa-prose` 仅调整节奏、字号比例和阅读列宽。

## 使用 prose

使用 `wa-prose` 类包裹任何块元素中的长篇内容。

```html
<article class="wa-prose">
  <h2>章节标题</h2>
  <p>正文内容……</p>
</article>
```

默认情况下，内容限制在舒适的阅读列宽 `65ch`。在容器上覆盖 `--wa-prose-line-length` — 或直接设置 `max-inline-size` — 来加宽、收窄或移除限制。

## 示例

### 标题和段落

每个标题级别上方有较大间距，下方有较紧间距，因此眼睛会将其视为它所介绍的章节的一部分 — 而不是它后面的章节。当两个标题连续出现时，第二个标题会收紧，使其看起来从属于第一个标题。

```html {.example}
<article class="wa-prose">
  <h1>纸张的简短历史</h1>
  <h2>从树皮到大幅纸张</h2>
  <p>
    在纸浆厂和印刷机出现之前，人们在任何能留下印记的表面上书写。黏土、纸莎草纸、棕榈叶、树皮、动物皮 —— 每一种都将一种文化的文字固定在特定的时间和地点。
  </p>

  <h3>破布时代</h3>
  <p>
    早期欧洲纸张是由棉花和亚麻破布打制而成的。质量用纤维来衡量：纤维越长，纸张越结实，在装订中保存的时间就越长。
  </p>

  <h4>水印和网纹</h4>
  <p>
    将一张破布纸举到光线下，你仍然可以看到制造者的标记和模具压出的细线 —— 这是手工造纸者留下的小小签名。
  </p>
</article>
```

### 列表

多行列表项之间有一小段间距。安静的标记和粗体 `<dt>` 术语来自 [原生样式](/docs/utilities/native/)。

```html {.example}
<article class="wa-prose">
  <ul>
    <li>散叶蔬菜，保持凉爽干燥。</li>
    <li>
      红茶被压成饼状并陈化数十年，有时比饮用它的人活得更久。
    </li>
    <li>新鲜香草，当天早上采摘，泡到略高于温热。</li>
  </ul>

  <ol>
    <li>用一点热水温热茶壶；倒掉。</li>
    <li>每杯放一茶匙茶叶，再多加一勺给茶壶。</li>
    <li>倒入、盖上盖子、等待 —— 红茶三分钟，绿茶两分钟。</li>
  </ol>

  <dl>
    <dt>浸泡</dt>
    <dd>将叶子浸泡在热水中，直到味道完全释放。</dd>
    <dt>倒出</dt>
    <dd>将泡好的茶从茶叶中倒出，以停止进一步萃取。</dd>
    <dt>品茗</dt>
    <dd>一种用于评估茶或咖啡的并排品尝方法。</dd>
  </dl>
</article>
```

### 内联元素

在长篇写作中会用到的内联元素 —— `<kbd>`、`<mark>`、`<sub>`/`<sup>`、`<abbr>` —— 在 prose 容器内按预期工作，由 [原生样式](/docs/utilities/native/) 设置样式。

```html {.example}
<article class="wa-prose">
  <p>
    按 <kbd>⌘</kbd> + <kbd>K</kbd> 打开命令面板，从键盘<mark>跳转到任意位置</mark>。
    内联符号也清晰可读 —— H<sub>2</sub>O、E=mc<sup>2</sup> —— 缩写如
    <abbr title="尽快">ASAP</abbr> 会在悬停时提示完整含义。
  </p>
</article>
```

### 主要块元素

代码示例、表格、提示框和可折叠的 `<details>` 比连续散文有更多呼吸空间，因此它们被读作不同的内容块，而不是另一个句子。

```html {.example}
<article class="wa-prose">
  <h2>读取胶卷盒</h2>
  <p>大多数胶卷在侧面列出相同的三条信息。</p>

  <pre><code>ISO 400
36 exposures
develop in HC-110, dilution B</code></pre>

  <table>
    <thead>
      <tr>
        <th>ISO</th>
        <th>最佳用途</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>100</td>
        <td>明亮日光，细颗粒</td>
      </tr>
      <tr>
        <td>400</td>
        <td>混合条件，日常使用</td>
      </tr>
      <tr>
        <td>3200</td>
        <td>低光环境，可用光</td>
      </tr>
    </tbody>
  </table>

  <details>
    <summary>"推冲处理"是什么意思？</summary>
    <p>
      以高于额定速度的 ISO 曝光胶卷，然后延长显影时间来补偿。您可以在低光环境下获得一到两档的曝光，代价是更多的颗粒和更深的对比度。
    </p>
  </details>

  <wa-callout variant="brand">
    <wa-icon slot="icon" name="lightbulb" variant="regular"></wa-icon>
    用永久性记号笔在胶卷盒上记下显影时间 —— 这样以后就不必再翻看活页夹了。
  </wa-callout>
</article>
```

### 段落分隔

`<hr>` 标记主题转换。它自己的边距定义了间距；跟随它的标题或段落会紧贴着它，这样分隔线在视觉上保持锚定在后面的内容上。

```html {.example}
<article class="wa-prose">
  <p>
    一个早晨的例行公事，重复足够久后，就不再需要动力了。咖啡煮好了，床铺拉平了，水壶在百叶窗升起时咔嗒作响。
  </p>

  <hr />

  <h3>当例行公事中断时</h3>
  <p>
    旅行、生病、新的日程安排 —— 这些小步骤会分崩离析。关键是先围绕一个锚点重建，然后让其他部分跟随。
  </p>
</article>
```

## 排版细节

除了节奏之外，还有一些更细微的改进：

- **旧体比例数字** 在连续文本中，数字与字母更自然地排列在一起。
- **悬挂标点** 将开头引号、破折号和结尾标点拉入边距（Safari 目前支持；其他浏览器渐进增强）。
- **长词断行** 在 `<code>` 和 `<pre>` 上，URL 和标识符不会溢出列宽。

## 与字体大小工具类组合

将任何 [`wa-font-size-*`](/docs/utilities/text/#font-size) 工具类应用于 `wa-prose` 容器，文本、标题和节奏会一起缩放。不需要尺寸变体。

```html {.example}
<div class="wa-cluster wa-align-items-flex-start" style="gap: var(--wa-space-l);">
  <article class="wa-prose" style="--wa-prose-line-length: 28ch;">
    <h3>默认尺寸</h3>
    <p>安静的早晨是一天中最稀有的时刻 —— 在世界醒来之前抓住它。</p>
    <ul>
      <li>一杯咖啡，一本书，一扇窗户。</li>
      <li>第二次倒咖啡前不接收通知。</li>
    </ul>
  </article>

  <article class="wa-prose wa-font-size-s" style="--wa-prose-line-length: 28ch;">
    <h3>使用 wa-font-size-s</h3>
    <p>安静的早晨是一天中最稀有的时刻 —— 在世界醒来之前抓住它。</p>
    <ul>
      <li>一杯咖啡，一本书，一扇窗户。</li>
      <li>第二次倒咖啡前不接收通知。</li>
    </ul>
  </article>
</div>
```

## 调整节奏

在 prose 容器上设置 `--wa-prose-rhythm-scale` 来乘以系统中的每个边距。低于 `1` 的值会收紧节奏；高于 `1` 的值会放松节奏。字号不受影响。

```html {.example}
<div class="wa-cluster wa-align-items-flex-start" style="gap: var(--wa-space-l);">
  <article class="wa-prose" style="--wa-prose-line-length: 28ch;">
    <h3>默认节奏</h3>
    <p>两段相同长度、相同大小的段落。</p>
    <p>它们之间的间距是每张卡片之间变化的部分。</p>
  </article>

  <article class="wa-prose" style="--wa-prose-line-length: 28ch; --wa-prose-rhythm-scale: 0.6;">
    <h3>更紧凑的节奏</h3>
    <p>两段相同长度、相同大小的段落。</p>
    <p>它们之间的间距是每张卡片之间变化的部分。</p>
  </article>
</div>
```

## 与其他工具类组合

`wa-prose` 类及其元素规则的优先级为 `0,0,0`，因此您一起应用的任何工具类 —— `wa-heading-m`、`wa-cluster`、`wa-text-align-center` 等 —— 都会自动获胜。您自己样式表中的普通元素规则也是如此，不需要 `!important` 或优先级技巧。

```css
/* 优于 wa-prose 的 `h2 { font-size: 2em }` */
h2.release-header {
  font-size: var(--wa-font-size-m);
}
```

## 主题

颜色来自主题的 [颜色令牌](/docs/tokens/color/)，因此 prose 会自动跟随暗色模式和主题变化。要重新为 prose 内部的元素着色，请在容器上使用后代选择器。

```css
.changelog.wa-prose a {
  color: var(--wa-color-brand-on-quiet);
}
```

## 退出 prose

在 `wa-prose` 容器内的任何元素上应用 `wa-not-prose`，可为该元素及其后代禁用 prose 节奏。其他工具类 —— `wa-cluster`、`wa-stack`、`wa-font-size-*` —— 在退出子树中继续工作。

```html {.example}
<article class="wa-prose">
  <h3>准备就绪</h3>
  <p>
    此部分周围的段落遵循 prose 节奏。下面的按钮行位于
    <code>wa-not-prose</code> 包装器内，因此其间距恢复为组件默认值。
  </p>

  <div class="wa-not-prose">
    <div class="wa-cluster" style="gap: var(--wa-space-s);">
      <wa-button variant="brand">主要操作</wa-button>
      <wa-button appearance="outlined">次要操作</wa-button>
    </div>
  </div>

  <p>后面的段落从离开的地方继续节奏。</p>
</article>
```