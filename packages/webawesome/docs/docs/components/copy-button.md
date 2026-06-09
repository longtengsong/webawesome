---
title: 复制按钮
layout: component
category: Actions
synonyms:
  - clipboard
  - copy to clipboard
  - copy icon
  - 剪贴板
  - 复制图标
use-cases:
  - code copy
  - text copy
  - share link
  - 代码复制
  - 文本复制
---

```html {.example}
<wa-copy-button value="Web Awesome rocks!"></wa-copy-button>
```

:::info
复制按钮使用浏览器的 [`clipboard.writeText()`](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText) 方法，在大多数浏览器中需要[安全上下文](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts) (HTTPS)。
:::

## 示例

### 自定义标签

默认的复制按钮在悬停和聚焦时显示工具提示，工具提示文本会短暂变化以确认复制成功或失败。你可以使用 `copy-label`、`success-label` 和 `error-label` 属性来自定义这些标签。`copy-label` 也用作按钮的可访问名称。

```html {.example}
<wa-copy-button
  value="Custom labels are easy"
  copy-label="Click to copy"
  success-label="You did it!"
  error-label="Whoops, your browser doesn't support this!"
></wa-copy-button>
```

### 自定义图标

使用 `copy-icon`、`success-icon` 和 `error-icon` 插槽来自定义每个状态显示的图标。你可以使用 [`<wa-icon>`](/docs/components/icon) 或你自己的图像。

```html {.example}
<wa-copy-button value="Copied from a custom button">
  <wa-icon slot="copy-icon" name="clipboard" variant="regular"></wa-icon>
  <wa-icon slot="success-icon" name="thumbs-up" variant="solid"></wa-icon>
  <wa-icon slot="error-icon" name="xmark" variant="solid"></wa-icon>
</wa-copy-button>
```

### 自定义触发器

默认情况下，复制按钮渲染一个仅图标按钮。你可以将任何元素插槽作为自定义触发器。这适用于 Web Awesome 按钮、原生按钮或任何可点击的元素。

```html {.example}
<wa-copy-button value="You can copy anything with a custom trigger!">
  <wa-button appearance="filled">Copy to Clipboard</wa-button>
</wa-copy-button>
```

你也可以使用原生按钮作为触发器。

```html {.example}
<wa-copy-button value="Native buttons work too!">
  <button type="button" class="wa-filled">Copy to Clipboard</button>
</wa-copy-button>
```

:::info
自定义触发器会自动接收与默认触发器相同的工具提示和复制反馈 — 不需要额外的连接。图标交换是唯一特定于默认触发器的部分。使用 `without-tooltip` 来选择不使用工具提示，并使用 `wa-copy` 和 `wa-error` 事件或 `:state(success)` 和 `:state(error)` CSS 自定义状态来获得额外反馈。
:::

### 从其他元素复制值

通常，要复制的数据来自组件的 `value` 属性，但你可以通过将其 `id` 提供给 `from` 属性来从同一文档中的任何元素复制数据。

使用 `from` 属性时，默认会复制元素的 [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)。传递属性或属性修饰符将允许你从元素的属性或属性中复制数据。

要从属性复制数据，使用 `from="id[attr]"`，其中 `id` 是目标元素的 id，`attr` 是你想要复制的属性的名称。要从属性复制数据，使用 `from="id.prop"`，其中 `id` 是目标元素的 id，`prop` 是你想要复制的属性的名称。

```html {.example}
<!-- 复制 span 的 textContent -->
<div class="wa-cluster wa-align-items-center wa-gap-2xs">
  <span id="my-phone">+1 (234) 456-7890</span>
  <wa-copy-button from="my-phone"></wa-copy-button>
</div>

<br />

<!-- 复制 input 的 "value" 属性 -->
<div class="wa-cluster wa-align-items-center wa-gap-2xs">
  <wa-input id="my-input" type="text" value="User input" style="max-width: 300px;"></wa-input>
  <wa-copy-button from="my-input.value"></wa-copy-button>
</div>

<br />

<!-- 复制链接的 "href" 属性 -->
<div class="wa-cluster wa-align-items-center wa-gap-2xs">
  <a id="my-link" href="https://shoelace.style/">Web Awesome Website</a>
  <wa-copy-button from="my-link[href]"></wa-copy-button>
</div>
```

### 处理错误

如果值为空字符串，或者 `from` 属性指向不存在的 id，或者浏览器因任何原因拒绝操作，就会发生复制错误。发生这种情况时，会发出 `wa-error` 事件。

这个示例演示了当复制错误发生时会发生什么。你可以分别使用 `error-label` 属性和 `error-icon` 插槽来自定义错误标签和图标。

```html {.example}
<wa-copy-button from="i-do-not-exist"></wa-copy-button>
```

### 禁用

可以通过添加 `disabled` 属性来禁用复制按钮。

```html {.example}
<wa-copy-button value="You can't copy me" disabled></wa-copy-button>
```

### 更改反馈持续时间

复制后，工具提示会短暂显示成功或错误标签。使用 `feedback-duration` 属性来控制它保持可见的时间。

```html {.example}
<wa-copy-button value="Web Awesome rocks!" feedback-duration="250"></wa-copy-button>
```

### 工具提示模式

`tooltip` 属性控制内置工具提示何时出现。它适用于默认触发器和[自定义触发器](#custom-trigger)。

- `full`（默认）：工具提示在悬停和聚焦时显示，并重新用于显示复制反馈。
- `copy`：工具提示在悬停和聚焦时保持静音，仅短暂出现以确认复制成功或失败。
- `none`：在任何状态下都不显示工具提示。

```html {.example}
<wa-copy-button value="Full" tooltip="full"></wa-copy-button>
<wa-copy-button value="Copy" tooltip="copy"></wa-copy-button>
<wa-copy-button value="None" tooltip="none"></wa-copy-button>
```

```html {.example}
<wa-copy-button value="Full" tooltip="full">
  <wa-button appearance="filled">Full</wa-button>
</wa-copy-button>
<wa-copy-button value="Copy" tooltip="copy">
  <wa-button appearance="filled">Copy</wa-button>
</wa-copy-button>
<wa-copy-button value="None" tooltip="none">
  <wa-button appearance="filled">None</wa-button>
</wa-copy-button>
```

### 更改工具提示位置

工具提示默认显示在触发器上方。使用 `tooltip-placement` 属性将其定位在 `top`、`right`、`bottom` 或 `left`。

```html {.example}
<wa-copy-button value="Above" tooltip-placement="top"></wa-copy-button>
<wa-copy-button value="Right" tooltip-placement="right"></wa-copy-button>
<wa-copy-button value="Below" tooltip-placement="bottom"></wa-copy-button>
<wa-copy-button value="Left" tooltip-placement="left"></wa-copy-button>
```

同样的属性适用于自定义触发器。

```html {.example}
<wa-copy-button value="Above" tooltip-placement="top">
  <wa-button appearance="filled">Above</wa-button>
</wa-copy-button>
<wa-copy-button value="Right" tooltip-placement="right">
  <wa-button appearance="filled">Right</wa-button>
</wa-copy-button>
<wa-copy-button value="Below" tooltip-placement="bottom">
  <wa-button appearance="filled">Below</wa-button>
</wa-copy-button>
<wa-copy-button value="Left" tooltip-placement="left">
  <wa-button appearance="filled">Left</wa-button>
</wa-copy-button>
```

### 自定义样式

你可以使用 CSS 根据自己的喜好自定义按钮。

```html {.example}
<wa-copy-button value="I'm so stylish" class="custom-styles">
  <wa-icon slot="copy-icon" name="clipboard"></wa-icon>
  <wa-icon slot="success-icon" name="thumbs-up"></wa-icon>
  <wa-icon slot="error-icon" name="thumbs-down"></wa-icon>
</wa-copy-button>

<style>
  .custom-styles,
  .custom-styles::part(success-icon),
  .custom-styles::part(error-icon) {
    color: white;
  }

  .custom-styles::part(button) {
    background-color: #ff1493;
    border: solid 2px #ff7ac1;
    border-right-color: #ad005c;
    border-bottom-color: #ad005c;
    border-radius: 6px;
    transition: all var(--wa-transition-slow) var(--wa-transition-easing);
  }

  .custom-styles::part(button):hover {
    transform: scale(1.05);
  }

  .custom-styles::part(button):active {
    transform: translateY(1px);
  }

  .custom-styles::part(button):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```
