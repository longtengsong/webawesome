---
title: 侧边布局
description: 使用 `wa-flank` 类将两个元素并排排列，其中一个元素位于一侧，另一个拉伸以填充可用空间。
layout: docs
tags: layoutUtilities
synonyms:
  - media object
  - side by side
  - horizontal layout
  - 媒体对象
  - 并排
  - 水平布局
use-cases:
  - icon and text
  - image and content
  - avatar with text
  - 图标和文字
  - 图片和内容
  - 头像与文字
---

<style>
  :is(.wa-flank, .wa-grid, .wa-stack) > [class*='wa-flank']:has(div:empty) {
    border: var(--layout-example-border);
    border-radius: var(--layout-example-border-radius);
    padding: var(--layout-example-padding);
  }

  [class*='wa-flank'] div:empty {
    background-color: var(--layout-example-element-background);
    border-radius: var(--layout-example-element-border-radius);
    min-block-size: 4rem;
    min-inline-size: 4rem;
  }
</style>

侧边布局将两个元素并排排列，其中一个元素（"侧边"）保持其自然大小，而另一个拉伸以填充剩余空间。它是任何"小东西在大东西旁边"模式的正确选择：头像旁边的姓名和简介、段落文本旁边的图标、输入框后面的提交按钮，或页面内容旁边的侧边栏。

默认情况下，第一个子元素是侧边，但您可以使用 `wa-flank:start` 或 `wa-flank:end` 选择任意一端。当主内容变得太窄时，两个元素会自动换行到单独的行。

```html {.example}
<div class="wa-flank">
  <div></div>
  <div></div>
</div>
```

## 示例

侧边布局特别适合侧边栏、带有相邻按钮的输入框和丰富的描述列表。

```html {.example}
<div class="wa-flank:end wa-gap-xs">
  <wa-input>
    <wa-icon slot="start" name="magnifying-glass"></wa-icon>
  </wa-input>
  <wa-button appearance="filled">Search</wa-button>
</div>
```

```html {.example}
<div class="wa-stack wa-gap-xl">
  <div class="wa-flank wa-align-items-start">
    <wa-avatar
      image="https://images.unsplash.com/photo-1553284966-19b8815c7817?q=20"
      label="Gandalf's avatar"
    ></wa-avatar>
    <div class="wa-stack wa-gap-3xs">
      <strong>Gandalf</strong>
      <p class="wa-body-s">
        All we have to decide is what to do with the time that is given to us. There are other forces at work in this
        world, Frodo, besides the will of evil.
      </p>
    </div>
  </div>
  <div class="wa-flank wa-align-items-start">
    <wa-avatar
      image="https://images.unsplash.com/photo-1542403764-c26462c4697e?q=20"
      label="Boromir's avatar"
    ></wa-avatar>
    <div class="wa-stack wa-gap-3xs">
      <strong>Boromir</strong>
      <p class="wa-body-s">
        One does not simply walk into Mordor. Its Black Gates are guarded by more than just Orcs. There is evil there
        that does not sleep, and the Great Eye is ever watchful.
      </p>
    </div>
  </div>
  <div class="wa-flank wa-align-items-start">
    <wa-avatar
      image="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=20"
      label="Galadriel's avatar"
    ></wa-avatar>
    <div class="wa-stack wa-gap-3xs">
      <strong>Galadriel</strong>
      <p class="wa-body-s">
        The world is changed. I feel it in the water. I feel it in the earth. I smell it in the air. Much that once was
        is lost, for none now live who remember it.
      </p>
    </div>
  </div>
</div>
```

## 位置

默认情况下，`wa-flank` 容器中的第一个元素将位于侧边。您可以通过向 `wa-flank` 类附加 `:start` 或 `:end` 来指定是第一个还是最后一个元素位于侧边。

```html {.example}
<div class="wa-stack">
  <div class="wa-flank:start">
    <div></div>
    <div></div>
  </div>
  <div class="wa-flank:end">
    <div></div>
    <div></div>
  </div>
</div>
```

## 尺寸

侧边的内联大小由其内容的大小决定，但您可以使用 `--flank-size` 属性设置目标大小。当侧边换行时，它会拉伸以填充容器的内联大小。

```html {.example}
<div class="wa-stack">
  <div class="wa-flank" style="--flank-size: 200px;">
    <div></div>
    <div></div>
  </div>
  <div class="wa-flank" style="--flank-size: 6rem;">
    <div></div>
    <div></div>
  </div>
</div>
```

主内容填充容器的剩余内联空间。默认情况下，当主内容小于容器的 50% 时，元素会换行。您可以使用 `--content-percentage` 属性更改主内容的最小大小。

```html {.example}
<div class="wa-stack">
  <div class="wa-flank" style="--content-percentage: 70%;">
    <div></div>
    <div></div>
  </div>
  <div class="wa-flank" style="--content-percentage: 85%;">
    <div></div>
    <div></div>
  </div>
</div>
```

## 对齐项目

默认情况下，项目在 `wa-flank` 容器的块方向上居中。您可以向带有 `wa-flank` 的元素添加以下任何 [`wa-align-items-*`](/docs/utilities/align-items) 类，以指定项目在块方向上的对齐方式：

- `wa-align-items-start`
- `wa-align-items-end`
- `wa-align-items-center`
- `wa-align-items-stretch`
- `wa-align-items-baseline`

```html {.example}
<div class="wa-stack">
  <div class="wa-flank wa-align-items-start" style="min-height: 8rem;">
    <div></div>
    <div></div>
  </div>
  <div class="wa-flank wa-align-items-end" style="min-height: 8rem;">
    <div></div>
    <div></div>
  </div>
  <div class="wa-flank wa-align-items-center" style="min-height: 8rem;">
    <div></div>
    <div></div>
  </div>
  <div class="wa-flank wa-align-items-stretch" style="min-height: 8rem;">
    <div></div>
    <div></div>
  </div>
</div>
```

## 间距

默认情况下，侧边项目之间的间距使用主题中的 `--wa-space-m`。您可以向带有 `wa-flank` 的元素添加以下任何 [`wa-gap-*`](/docs/utilities/gap) 类，以指定项目之间的间距：

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

```html {.example}
<div class="wa-stack">
  <div class="wa-flank wa-gap-2xs">
    <div></div>
    <div></div>
  </div>
  <div class="wa-flank wa-gap-2xl">
    <div></div>
    <div></div>
  </div>
</div>
```
