---
title: 堆叠布局
description: 使用 `wa-stack` 在块方向上以均匀间距排列元素。
layout: docs
tags: layoutUtilities
synonyms:
  - vertical stack
  - vstack
  - column layout
  - 垂直堆叠
  - 列布局
use-cases:
  - vertical spacing
  - stacked layout
  - card stack
  - vertical rhythm
  - 垂直间距
  - 卡片堆叠
  - 垂直节奏
---

<style>
  :is(.wa-flank, .wa-grid, .wa-stack) > [class*='wa-stack']:has(div:empty) {
    border: var(--layout-example-border);
    border-radius: var(--layout-example-border-radius);
    padding: var(--layout-example-padding);
  }

  [class*='wa-stack'] div:empty {
    background-color: var(--layout-example-element-background);
    border-radius: var(--layout-example-element-border-radius);
    min-block-size: 4rem;
    min-inline-size: 4rem;
  }
</style>

堆叠布局以垂直列排列其子元素，每个元素之间具有相等的间距，因此您不必为放入其中的每个元素添加上边距或下边距。它是表单、文本段落、卡片正文以及任何您想要一致垂直节奏的地方的首选布局。

默认情况下，项目拉伸以填充堆叠布局的宽度。将 `wa-stack` 与 [`wa-gap-*`](/docs/utilities/gap) 类配对以控制间距，并与 [`wa-align-items-*`](/docs/utilities/align-items) 类配对以更改子元素水平对齐方式。

```html {.example}
<div class="wa-stack">
  <div></div>
  <div></div>
  <div></div>
</div>
```

## 示例

堆叠布局非常适合表单、文本以及确保文档流中元素之间的一致间距。

```html {.example}
<div class="wa-stack">
  <wa-input label="Email">
    <wa-icon slot="start" name="envelope" variant="regular"></wa-icon>
  </wa-input>
  <wa-input label="Password" type="password">
    <wa-icon slot="start" name="lock"></wa-icon>
  </wa-input>
  <wa-checkbox>在此设备上记住我</wa-checkbox>
  <wa-button appearance="filled">登录</wa-button>
</div>
```

```html {.example}
<div class="wa-stack wa-gap-2xl">
  <h3>阿拉贡的南瓜</h3>
  <p>
    黄鼠狼完全释放，主要是藏身之处保护严密，法辛借口。坑洞下陷，哈斯菲尔体重减轻，骑上流浪儿？甘吉辛苦得来的雷声，森林宝库更愉快。过去的生日过得很卑微，树林爸爸的太阳杀戮最麻烦。
  </p>
  <p>
    即使是最渺小的人也能改变未来的进程。他们完全引诱其他洞穴，最聪明的人分裂，美味的烹饪翁多米尔朋友。多莉松脆巨大的失眠。未造就的神经烈酒击败了阿拉松。
  </p>
</div>
```

## 对齐项目

默认情况下，项目拉伸以填充 `wa-stack` 容器的内联大小。您可以向带有 `wa-stack` 的元素添加以下任何 [`wa-align-items-*`](/docs/utilities/align-items) 类，以指定项目在内联方向上的对齐方式：

- `wa-align-items-start`
- `wa-align-items-end`
- `wa-align-items-center`
- `wa-align-items-stretch`
- `wa-align-items-baseline`

```html {.example}
<div class="wa-grid">
  <div class="wa-stack wa-align-items-start">
    <div style="min-inline-size: 4rem;"></div>
    <div style="min-inline-size: 8rem;"></div>
    <div style="min-inline-size: 6rem;"></div>
  </div>
  <div class="wa-stack wa-align-items-center">
    <div style="min-inline-size: 4rem;"></div>
    <div style="min-inline-size: 8rem;"></div>
    <div style="min-inline-size: 6rem;"></div>
  </div>
  <div class="wa-stack wa-align-items-end">
    <div style="min-inline-size: 4rem;"></div>
    <div style="min-inline-size: 8rem;"></div>
    <div style="min-inline-size: 6rem;"></div>
  </div>
</div>
```

## 间距

默认情况下，堆叠项目之间的间距使用主题中的 `--wa-space-m`。您可以向带有 `wa-stack` 的元素添加以下任何 [`wa-gap-*`](/docs/utilities/gap) 类，以指定项目之间的间距：

- `wa-gap-0`
- `wa-gap-3xs`
- `wa-gap-2xs`
- `wa-gap-xs`
- `wa-gap-s`
- `wa-gap-m`
- `wa-gap-l`
- `wa-gap-xl`
- `wa-gap-2xl`
- `wa-gap-3xl`
- `wa-gap-4xl`
- `wa-gap-5xl`

```html {.example}
<div class="wa-grid">
  <div class="wa-stack wa-gap-2xs">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="wa-stack wa-gap-2xl">
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```
