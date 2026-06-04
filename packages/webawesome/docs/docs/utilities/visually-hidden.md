---
title: 视觉隐藏
description: 视觉隐藏工具在屏幕上隐藏内容，但保持其对辅助技术的可访问性。
layout: docs
tags: styleUtilities
synonyms:
  - screen reader only
  - sr-only
  - accessible hide
  - 仅屏幕阅读器
  - 可访问隐藏
use-cases:
  - a11y hide
  - skip link
  - assistive text
  - 辅助功能隐藏
  - 跳过链接
  - 辅助文本
---

向任何元素添加 `wa-visually-hidden` 类，以在视觉上将其从页面中移除，同时保持其对屏幕阅读器和其他辅助技术的可访问性。这是您想要用于跳转链接、仅图标按钮上的不可见标签以及任何描述有视力的用户已经从上下文中理解的内容的地方。

> "存在视觉隐藏内容可能合适的真实世界情况，同时内容应保持对辅助技术（如屏幕阅读器）的可访问性。例如，隐藏搜索字段的标签，因为常用的放大镜图标被用来代替它。"
> — [The A11Y Project](https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/)

由于视觉隐藏的内容在选项卡导航时可以接收焦点，因此一旦其中的内容收到焦点，该元素就会再次变得可见。这种行为是有意的：有视力的键盘用户需要看到焦点指示器的位置。

```html {.example}
<div style="min-height: 1.875rem;">
  <a href="#" class="wa-visually-hidden">Skip to main content</a>
</div>
```

## 示例

### 在新窗口中打开的链接

在此示例中，链接将打开一个新窗口。屏幕阅读器将宣布“在新窗口中打开”，即使文本内容对有视力的用户不可见。

```html {.example}
<a href="https://example.com/" target="_blank">
  Visit External Page
  <wa-icon name="arrow-up-right-from-square"></wa-icon>
  <span class="wa-visually-hidden">opens in a new window</span>
</a>
```

### 由上下文传达的内容

添加标签有时可能看起来是多余的，但它们对没有视力的用户非常有帮助。与其省略它们，不如您可以使用视觉隐藏的内容为无视力的用户提供上下文，这些内容将由辅助设备（如屏幕阅读器）宣布。

```html {.example}
<wa-card style="width: 100%; max-width: 360px;">
  <header class="wa-visually-hidden">Personal Info</header>
  <wa-input label="Name" style="margin-bottom: .5rem;"></wa-input>
  <wa-input label="Email" type="email"></wa-input>
</wa-card>
```

### 视觉隐藏的输入部分

有时您希望表单控件具有更清洁、更简约的外观，方法是在视觉上隐藏 `label` 或 `hint`。但是，完全移除这些元素会使表单对使用辅助技术的用户不可访问。

相反，您可以通过添加 `wa-visually-hidden-label` 或 `wa-visually-hidden-hint` 类在视觉上隐藏它们，同时保持它们对屏幕阅读器的可用性。

```html {.example}
<wa-input
  label="Search Articles"
  type="search"
  placeholder="Search for..."
  class="wa-visually-hidden-label"
  style="margin-block-end: 1rem;"
>
  <wa-icon slot="start" name="magnifying-glass"></wa-icon>
</wa-input>

<wa-input
  label="Phone Number"
  type="tel"
  hint="We'll send you a verification code"
  placeholder="(555) 867-5309"
  class="wa-visually-hidden-hint"
  style="margin-block-end: 1rem;"
>
  <wa-icon slot="start" name="phone"></wa-icon>
</wa-input>

<wa-select
  label="Country"
  hint="Select your country for shipping calculations"
  class="wa-visually-hidden-hint"
  style="margin-block-end: 1rem;"
>
  <wa-option value="us">United States</wa-option>
  <wa-option value="ca">Canada</wa-option>
  <wa-option value="mx">Mexico</wa-option>
  <wa-option value="uk">United Kingdom</wa-option>
  <wa-option value="de">Germany</wa-option>
  <wa-option value="fr">France</wa-option>
  <wa-option value="wakanda">Wakanda</wa-option>
  <wa-option value="genovia">Genovia</wa-option>
  <wa-option value="elbonia">Elbonia</wa-option>
  <wa-icon slot="start" name="globe"></wa-icon>
</wa-select>

<wa-input
  label="Email Address"
  type="email"
  hint="We'll never share your email or secret identity"
  placeholder="e.g. miles.morales@brooklynvisions.edu"
  class="wa-visually-hidden-label wa-visually-hidden-hint"
>
  <wa-icon slot="start" name="envelope" variant="regular"></wa-icon>
</wa-input>
```

### 强制视觉隐藏

有些情况下，您希望**始终**在视觉上隐藏某些内容，即使它有焦点。
例如，当隐藏复选框以渲染自定义复选框时：

```html {.example}
<label>
  <span class="checkbox">
    <input type="checkbox" class="wa-visually-hidden-force" />
  </span>
  I have read the terms and conditions
</label>

<style>
  .checkbox {
    display: flex;
    vertical-align: middle;
    width: var(--wa-font-size-l);
    height: var(--wa-font-size-l);
    background: var(--wa-color-neutral-fill-quiet);
    color: var(--wa-color-neutral-on-quiet);
    border-radius: var(--wa-border-radius-s);
    margin-inline-end: var(--wa-space-xs);

    &::after {
      content: '✓' / '';
      margin: auto;
      transition: opacity var(--wa-transition-slow) var(--wa-transition-easing);
    }

    &:has(:checked) {
      background: var(--wa-color-brand-fill-loud);
      color: var(--wa-color-brand-on-loud);
    }

    &:not(:has(:checked)) {
      &::after {
        opacity: 0;
      }
    }

    &:focus-within {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }
</style>
```
