---
title: 对话框
layout: component
category: Layout
synonyms:
  - modal
  - 模态框
  - popup
  - 弹出框
  - lightbox
  - 灯箱
  - overlay
  - 遮罩层
  - modal dialog
  - 模态对话框
use-cases:
  - confirmation dialog
  - 确认对话框
  - alert dialog
  - 警告对话框
  - prompt
  - 提示框
  - login modal
  - 登录模态框
  - cookie consent
  - Cookie 同意
---

```html {.example}
<wa-dialog label="对话框" id="dialog-overview">
  这是一个标准对话框。你可以在这里放置任何内容！
  <wa-button appearance="filled" slot="footer" variant="brand" data-dialog="close">关闭</wa-button>
</wa-dialog>

<wa-button appearance="filled">打开对话框</wa-button>

<script>
  const dialog = document.querySelector('#dialog-overview');
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener('click', () => (dialog.open = true));
</script>
```

## 示例

### 无头部对话框

头部默认是启用的。要渲染不带头部的对话框，添加 `without-header` 特性。

```html {.example}
<wa-dialog label="对话框" without-header class="dialog-without-header">
  看，没有头部！有时候你只需要一个简洁的对话框。
  <wa-button slot="footer" variant="brand" data-dialog="close">关闭</wa-button>
</wa-dialog>

<wa-button appearance="filled">打开对话框</wa-button>

<script>
  const dialog = document.querySelector('.dialog-without-header');
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener('click', () => (dialog.open = true));
</script>
```

### 带底部的对话框

底部可以用来显示标题等。使用 `footer` 插槽向对话框添加底部。

```html {.example}
<wa-dialog label="对话框" class="dialog-footer">
  看看下面的底部 — 这里是放置操作和按钮的好地方。
  <wa-button slot="footer" variant="brand" data-dialog="close">关闭</wa-button>
</wa-dialog>

<wa-button appearance="filled">打开对话框</wa-button>

<script>
  const dialog = document.querySelector('.dialog-footer');
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener('click', () => (dialog.open = true));
</script>
```

### 声明式打开和关闭对话框

你可以通过 JavaScript 切换 `open` 特性来打开和关闭对话框，但也可以声明式地实现。向页面上的任何按钮添加 `data-dialog="open id"`，其中 `id` 是你想要打开的对话框的 ID。

```html {.example}
<wa-dialog label="对话框" id="dialog-opening">
  这个对话框是声明式打开的 — 不需要 JavaScript！
  <wa-button slot="footer" variant="brand" data-dialog="close">关闭</wa-button>
</wa-dialog>

<wa-button appearance="filled" data-dialog="open dialog-opening">打开对话框</wa-button>
```

同样，你可以向对话框 _内部_ 的按钮添加 `data-dialog="close"` 来告诉它关闭。

```html {.example}
<wa-dialog label="对话框" id="dialog-dismiss">
  点击底部的按钮以声明式关闭此对话框。
  <wa-button slot="footer" variant="brand" data-dialog="close">关闭</wa-button>
</wa-dialog>

<wa-button appearance="filled" data-dialog="open dialog-dismiss">打开对话框</wa-button>
```

### 自定义宽度

只需使用 `--width` 自定义属性来设置对话框的宽度。

```html {.example}
<wa-dialog label="对话框" class="dialog-width" style="--width: 50vw;">
  这个对话框比默认宽度更宽 — 当你需要更多内容空间时很有用。
  <wa-button appearance="filled" slot="footer" variant="brand" data-dialog="close">关闭</wa-button>
</wa-dialog>

<wa-button appearance="filled">打开对话框</wa-button>

<script>
  const dialog = document.querySelector('.dialog-width');
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener('click', () => (dialog.open = true));
</script>
```

### 滚动

按照设计，对话框的高度永远不会超过视口的高度。因此，对话框不会随页面滚动，确保头部和底部始终对用户可访问。

```html {.example}
<wa-dialog label="对话框" class="dialog-scrolling">
  <div style="height: 150vh; border: dashed 2px var(--wa-color-surface-border); padding: 0 1rem;">
    <p>向下滚动试试看！👇</p>
  </div>
  <wa-button slot="footer" variant="brand" data-dialog="close">关闭</wa-button>
</wa-dialog>

<wa-button appearance="filled">打开对话框</wa-button>

<script>
  const dialog = document.querySelector('.dialog-scrolling');
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener('click', () => (dialog.open = true));
</script>
```

### 头部操作

头部默认显示一个功能性关闭按钮。如果需要，你可以使用 `header-actions` 插槽添加额外的[按钮](/docs/components/button)。

```html {.example}
<wa-dialog label="对话框" class="dialog-header-actions">
  <wa-button class="new-window" slot="header-actions" appearance="plain">
    <wa-icon name="arrow-up-right-from-square" variant="solid" label="在新窗口打开"></wa-icon>
  </wa-button>
  你可以向头部添加自定义操作，比如上面的图标按钮！
  <wa-button slot="footer" variant="brand" data-dialog="close">关闭</wa-button>
</wa-dialog>

<wa-button appearance="filled">打开对话框</wa-button>

<script>
  const dialog = document.querySelector('.dialog-header-actions');
  const openButton = dialog.nextElementSibling;
  const newWindowButton = dialog.querySelector('.new-window');

  openButton.addEventListener('click', () => (dialog.open = true));
  newWindowButton.addEventListener('click', () => window.open(location.href));
</script>
```

### 轻量关闭

如果你希望用户点击遮罩层时对话框关闭，添加 `light-dismiss` 特性。

```html {.example}
<wa-dialog label="对话框" light-dismiss class="dialog-light-dismiss">
  当你点击遮罩层时，此对话框将关闭。
  <wa-button slot="footer" variant="brand" data-dialog="close">关闭</wa-button>
</wa-dialog>

<wa-button appearance="filled">打开对话框</wa-button>

<script>
  const dialog = document.querySelector('.dialog-light-dismiss');
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener('click', () => (dialog.open = true));
</script>
```

### 防止对话框关闭

默认情况下，当用户点击关闭按钮或按 [[Escape]] 键时，对话框将关闭。在大多数情况下，默认行为在 UX 方面是最佳行为。然而，在某些情况下，这可能是不希望的，例如当会发生数据丢失时。

要在这种情况下保持对话框打开，你可以取消 `wa-hide` 事件。取消时，对话框将保持打开并短暂脉动以引起用户注意。

你可以使用 `event.detail.source` 来确定哪个元素触发了关闭请求。此示例防止对话框关闭，除非点击了特定按钮。

```html {.example}
<wa-dialog label="对话框" class="dialog-deny-close">
  此对话框只会在你点击下面的按钮时关闭。
  <wa-button slot="footer" variant="brand" data-dialog="close">只有这个按钮会关闭它</wa-button>
</wa-dialog>

<wa-button appearance="filled">打开对话框</wa-button>

<script>
  const dialog = document.querySelector('.dialog-deny-close');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('wa-button[slot="footer"]');

  openButton.addEventListener('click', () => (dialog.open = true));

  // 防止对话框关闭，除非点击了关闭按钮
  dialog.addEventListener('wa-hide', event => {
    if (event.detail.source !== closeButton) {
      event.preventDefault();
    }
  });
</script>
```

### 设置初始焦点

要在对话框打开时将焦点赋予特定元素，使用 `autofocus` 特性。

```html {.example}
<wa-dialog label="对话框" class="dialog-focus">
  <wa-input autofocus placeholder="对话框打开时我将获得焦点"></wa-input>
  <wa-button slot="footer" variant="brand" data-dialog="close">关闭</wa-button>
</wa-dialog>

<wa-button appearance="filled">打开对话框</wa-button>

<script>
  const dialog = document.querySelector('.dialog-focus');
  const input = dialog.querySelector('wa-input');
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener('click', () => (dialog.open = true));
</script>
```