---
title: 详情折叠
layout: component
category: Layout
synonyms:
  - accordion
  - collapsible
  - expandable
  - disclosure
  - expander
  - 折叠面板
  - 可折叠
use-cases:
  - FAQ
  - show more
  - expandable section
  - toggle content
  - 常见问题
  - 显示更多
---

```html {.example}
<wa-details summary="Toggle Me">
  Click the summary to expand and collapse the details component. You can put any content in here that you want to
  reveal on demand!
</wa-details>
```

## 示例

### 初始展开

使用 `open` 属性初始展开详情。

```html {.example}
<wa-details summary="Toggle Me" open>
  This details component is expanded by default. Users can click the summary to collapse it if they want to hide the
  content.
</wa-details>
```

### 禁用

使用 `disabled` 属性防止详情展开。

```html {.example}
<wa-details summary="Disabled" disabled>
  This content can't be seen because the details component is disabled. Try removing the disabled attribute to reveal
  what's inside!
</wa-details>
```

### 自定义摘要图标

使用 `expand-icon` 和 `collapse-icon` 插槽分别更改展开和折叠图标。要禁用动画，请覆盖 `icon` 部件上的 `rotate` 属性，如下所示。

```html {.example}
<wa-details summary="Toggle Me" class="custom-icons">
  <wa-icon name="square-plus" slot="expand-icon" variant="regular"></wa-icon>
  <wa-icon name="square-minus" slot="collapse-icon" variant="regular"></wa-icon>

  This example uses custom plus and minus icons for expanding and collapsing. You can use any icon you want to match the
  look and feel of your app.
</wa-details>

<style>
  /* 禁用展开/折叠动画 */
  wa-details.custom-icons::part(icon) {
    rotate: none;
  }
</style>
```

### 图标位置

展开和折叠图标的默认位置在摘要的末尾。将 `icon-placement` 属性设置为 `start` 以将图标放置在摘要的开头。

```html {.example}
<div class="wa-stack">
  <wa-details summary="Start" icon-placement="start">
    The expand/collapse icon is at the start of the summary. This is a common pattern that feels familiar to users who
    are used to tree views and file explorers.
  </wa-details>
  <wa-details summary="End" icon-placement="end">
    The expand/collapse icon is at the end of the summary. This is the default placement and works great for most use
    cases.
  </wa-details>
</div>
```

### 摘要中的 HTML

要在摘要中使用 HTML，请使用 `summary` 插槽。
链接和其他交互式元素仍将保留其行为：

```html {.example}
<wa-details>
  <span slot="summary">
    Some text
    <a href="https://webawesome.com" target="_blank">a link</a>
    more text
  </span>

  You can use the summary slot to put HTML in the summary, including links and other interactive elements. Pretty neat,
  right?
</wa-details>
```

### 从右到左语言

详情组件，包括其 `icon-placement`，会自动适应从右到左的语言：

```html {.example}
<div class="wa-stack">
  <wa-details summary="تبديلني" lang="ar" dir="rtl">
    استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن
  </wa-details>
  <wa-details summary="تبديلني" lang="ar" dir="rtl" icon-placement="start">
    استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن
  </wa-details>
</div>
```

### 外观

使用 `appearance` 属性来更改元素的视觉外观。

```html {.example}
<div class="wa-stack">
  <wa-details summary="Outlined (default)">
    This is the default outlined appearance. It has a subtle border that helps it stand out without being too flashy.
  </wa-details>
  <wa-details summary="Filled-outlined" appearance="filled-outlined">
    The filled-outlined appearance combines a filled header with an outlined body. It gives the summary a bit more
    visual weight while keeping the content area clean.
  </wa-details>
  <wa-details summary="Filled" appearance="filled">
    The filled appearance adds a background color to the entire component. Use this when you want the details to really
    pop on the page.
  </wa-details>
  <wa-details summary="Plain" appearance="plain">
    No bells and whistles on this one. The plain appearance strips away borders and backgrounds for a minimalist look.
  </wa-details>
</div>
```

### 分组详情

使用 `name` 属性来创建手风琴式的行为，其中只有一个具有相同名称的详情元素可以同时打开。这与原生 `<details>` 元素的行为相匹配。

```html {.example}
<div class="wa-stack">
  <wa-details name="group-1" summary="Section 1" open>
    This is the first section of the accordion. When you open another section, this one will close automatically. Give
    it a try!
  </wa-details>

  <wa-details name="group-1" summary="Section 2">
    This is the second section. Notice how the first section closed when you opened this one? That's the accordion
    behavior in action, powered by the shared name attribute.
  </wa-details>

  <wa-details name="group-1" summary="Section 3">
    And here's the third section. You can have as many sections as you need — just make sure they all share the same
    name and only one will be open at a time.
  </wa-details>
</div>
```
