---
title: 散文
description: wa-prose 工具将分层的、不对称的排版节奏应用于长篇内容，如文档、文章和营销文案。
layout: page-outline
tags: styleUtilities
synonyms:
  - 散文
  - 长文
  - 文章
  - 文案
  - 排版节奏
use-cases:
  - 博客文章
  - 文档
  - 营销文案
  - 长篇内容
  - 文章
---

将内容块包装在 `wa-prose` 中，以应用分层的、不对称的排版节奏：标题上方空间宽松，下方空间紧凑，主要的非文本块周围有更多呼吸空间，以及 `<hr>` 的真实章节分隔线。间距基于 em 单位，并与 `wa-font-size-*` 工具一同缩放。

在文档、博客文章、文章或营销文案中使用它。元素样式（颜色、字体、边框）仍然来自[原生样式](/docs/utilities/native/)；`wa-prose` 仅调整节奏、字号比例和阅读列宽。

## 使用散文

将您的长篇内容包装在带有 `wa-prose` 类的任何块级元素中。

```html
<article class="wa-prose">
  <h2>章节标题</h2>
  <p>正文内容...</p>
</article>
```

默认情况下，内容被限制在舒适的 `65ch` 阅读列宽内。覆盖容器上的 `--wa-prose-line-length` — 或直接设置 `max-inline-size` — 以加宽、缩小或移除该限制。

## 示例

### 标题和段落

每个标题级别上方有宽松空间，下方空间紧凑，使视线将其视为它所引入的章节的一部分——而不是它后面的部分。当两个标题首尾相接时，第二个标题会收紧，使其读起来从属于第一个。

```html {.example}
<article class="wa-prose">
  <h1>纸张简史</h1>
  <h2>从树皮到宽幅纸</h2>
  <p>
    早在纸浆厂和印刷机出现之前，人们就在任何能留下痕迹的表面上写字。黏土、纸莎草、棕榈叶、树皮、兽皮——每一种都将一个文化的文字定格在一个地方和时刻。
  </p>

  <h3>碎布时代</h3>
  <p>
    早期欧洲纸张是用棉麻碎布打浆制成的。质量以纤维衡量：纤维越长，纸张越结实，在装订中保存的时间越久。
  </p>

  <h4>水印和帘纹</h4>
  <p>
    将一张碎布纸对着光线举起，您仍然可以看到制造商的标记和模具压印出的细纹——那是制纸人手艺的微小签名。
  </p>
</article>
```

### 列表

列表在多行项目之间获得小幅间距。低调的标记和粗体的 `<dt>` 术语来自[原生样式](/docs/utilities/native/)。

```html {.example}
<article class="wa-prose">
  <ul>
    <li>散叶绿茶，保持凉爽干燥。</li>
    <li>
      压成饼状并陈化数十年的红茶，有时比喝它的人活得还久。
    </li>
    <li>当天早晨采摘、用温热冲泡的新鲜香草。</li>
  </ul>

  <ol>
    <li>用少量热水温壶；倒出。</li>
    <li>每杯量取一茶匙茶叶，茶壶再加一茶匙。</li>
    <li>倒入水，盖上，等待——红茶三分钟，绿茶两分钟。</li>
  </ol>

  <dl>
    <dt>浸泡</dt>
    <dd>将茶叶浸泡在热水中直到风味完全释放。</dd>
    <dt>滗出</dt>
    <dd>将泡好的茶水与茶叶分离以停止进一步萃取。</dd>
    <dt>杯测</dt>
    <dd>用于评估茶或咖啡的并列品鉴方法。</dd>
  </dl>
</article>
```

### 内联元素

在长篇写作中会用到的内联元素——`<kbd>`、`<mark>`、`<sub>`/`<sup>`、`<abbr>`——在散文容器内按预期工作，样式来自[原生样式](/docs/utilities/native/)。

```html {.example}
<article class="wa-prose">
  <p>
    按 <kbd>⌘</kbd> + <kbd>K</kbd> 打开命令面板，从键盘<mark>跳转到任何地方</mark>。
    内联符号也同样清晰——H<sub>2</sub>O、E=mc<sup>2</sup>——以及像
    <abbr title="As Soon As Possible">ASAP</abbr> 这样的缩写会在悬停时提示其完整含义。
  </p>
</article>
```

### 主要块

代码示例、表格、提示框和可折叠的 `<details>` 比连续文本获得更多呼吸空间，使它们读起来像独立的内容块，而不是另一句话。

```html {.example}
<article class="wa-prose">
  <h2>读取胶卷暗盒</h2>
  <p>大多数胶卷在其侧面列出相同的三条信息。</p>

  <pre><code>ISO 400
36 张曝光
使用 HC-110 显影液，稀释 B</code></pre>

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
        <td>明亮日光，细腻颗粒</td>
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
    <summary>"迫冲处理"是什么意思？</summary>
    <p>
      以高于标定 ISO 的速度曝光胶卷，然后延长显影时间以进行补偿。在低光环境下获得一至两档进光量，但代价是更明显的颗粒感和更高的对比度。
    </p>
  </details>

  <wa-callout variant="brand">
    <wa-icon slot="icon" name="lightbulb" variant="regular"></wa-icon>
    用永久记号笔在胶卷暗盒上记下显影时间——省得以后还要翻看活页夹。
  </wa-callout>
</article>
```

### 章节分隔符

`<hr>` 标记主题转换。它自身的间距定义了间隔；后面的标题或段落紧贴它，使分隔线在视觉上锚定在接下来的内容上。

```html {.example}
<article class="wa-prose">
  <p>
    一个早晨的习惯，重复得足够久，就不再需要动力了。咖啡煮好了，床铺平整了，百叶窗拉起来时水壶咔嗒一声响了。
  </p>

  <hr />

  <h3>当习惯被打破时</h3>
  <p>
    旅行、生病、新的日程——那些小步骤就会散开。诀窍是先围绕一个锚点重建，然后让其余部分跟上。
  </p>
</article>
```

## 排版细节

随着节奏一同而来的一些更细微的改进：

- **运行文本中的旧式比例数字**，使数字更自然地与字母排列在一起。
- **悬挂标点** 将开引号、破折号和行末句点拉到边距中（目前支持 Safari；其他浏览器渐进增强）。
- **长单词换行** 在 `<code>` 和 `<pre>` 上，使 URL 和标识符不会溢出列宽。

## 与字号工具组合使用

将任意 [`wa-font-size-*`](/docs/utilities/text/#font-size) 工具应用于 `wa-prose` 容器，文本、标题和节奏比例会一起缩放。无需字号变体。

```html {.example}
<div class="wa-cluster wa-align-items-flex-start" style="gap: var(--wa-space-l);">
  <article class="wa-prose" style="--wa-prose-line-length: 28ch;">
    <h3>默认字号</h3>
    <p>安静的早晨是一天中最难得的时刻——在世界醒来之前占有它。</p>
    <ul>
      <li>一杯咖啡，一本书，一扇窗。</li>
      <li>第二杯之前没有通知。</li>
    </ul>
  </article>

  <article class="wa-prose wa-font-size-s" style="--wa-prose-line-length: 28ch;">
    <h3>使用 wa-font-size-s</h3>
    <p>安静的早晨是一天中最难得的时刻——在世界醒来之前占有它。</p>
    <ul>
      <li>一杯咖啡，一本书，一扇窗。</li>
      <li>第二杯之前没有通知。</li>
    </ul>
  </article>
</div>
```

## 调整节奏

在散文容器上设置 `--wa-prose-rhythm-scale` 以放大系统中的每个外边距。低于 `1` 的值收紧节奏；高于 `1` 的值放松节奏。字号不受影响。

```html {.example}
<div class="wa-cluster wa-align-items-flex-start" style="gap: var(--wa-space-l);">
  <article class="wa-prose" style="--wa-prose-line-length: 28ch;">
    <h3>默认节奏</h3>
    <p>两个相同长度、相同字号的段落。</p>
    <p>它们之间的间距是从一张卡片到下一张卡片的变化之处。</p>
  </article>

  <article class="wa-prose" style="--wa-prose-line-length: 28ch; --wa-prose-rhythm-scale: 0.6;">
    <h3>更紧凑的节奏</h3>
    <p>两个相同长度、相同字号的段落。</p>
    <p>它们之间的间距是从一张卡片到下一张卡片的变化之处。</p>
  </article>
</div>
```

## 与其他工具组合使用

`wa-prose` 类及其元素规则具有 `0,0,0` 的特异性，因此您同时应用的任何工具类——`wa-heading-m`、`wa-cluster`、`wa-text-align-center` 等——都会自动胜出。您自己样式表中的普通元素规则也是如此，无需 `!important` 或特异性技巧。

```css
/* 优先于 wa-prose 的 `h2 { font-size: 2em }` */
h2.release-header {
  font-size: var(--wa-font-size-m);
}
```

## 主题化

颜色来自主题的[颜色令牌](/docs/tokens/color/)，因此散文会自动遵循深色模式和主题更改。要重新着色散文内的元素，请在容器上使用后代选择器。

```css
.changelog.wa-prose a {
  color: var(--wa-color-brand-on-quiet);
}
```

## 选择不使用散文

将 `wa-not-prose` 应用于 `wa-prose` 容器内的任何元素，以禁用该元素及其后代的散文节奏。其他工具——`wa-cluster`、`wa-stack`、`wa-font-size-*`——在选择退出的子树中继续工作。

```html {.example}
<article class="wa-prose">
  <h3>准备好时就出发</h3>
  <p>
    本部分周围的段落遵循散文节奏。下方的按钮行位于
    <code>wa-not-prose</code> 包装器中，因此其间距恢复为组件默认值。
  </p>

  <div class="wa-not-prose">
    <div class="wa-cluster" style="gap: var(--wa-space-s);">
      <wa-button variant="brand">主要操作</wa-button>
      <wa-button appearance="outlined">次要操作</wa-button>
    </div>
  </div>

  <p>之后的段落会在原来中断的地方重新拾起节奏。</p>
</article>
```
