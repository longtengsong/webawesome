---
title: 抽屉
layout: component
category: Layout
synonyms:
  - sidebar
  - side panel
  - offcanvas
  - slide-out
  - tray
  - sheet
  - 侧边栏
  - 滑出面板
use-cases:
  - navigation drawer
  - filter panel
  - mobile menu
  - bottom sheet
  - 导航抽屉
  - 筛选面板
  - 移动菜单
---

```html {.example}
<wa-drawer label="Drawer" id="drawer-overview">
  Drawers are great for showing additional content without leaving the current page.
  <wa-button slot="footer" variant="brand" data-drawer="close">Close</wa-button>
</wa-drawer>

<wa-button appearance="filled">Open Drawer</wa-button>

<script>
  const drawer = document.querySelector('#drawer-overview');
  const openButton = drawer.nextElementSibling;

  openButton.addEventListener('click', () => (drawer.open = true));
</script>
```

## 示例

### 无头部的抽屉

头部默认启用。要渲染没有头部的抽屉，请添加 `without-header` 属性。

```html {.example}
<wa-drawer label="Drawer" without-header class="drawer-without-header">
  Look ma, no header!
  <wa-button slot="footer" variant="brand" data-drawer="close">Close</wa-button>
</wa-drawer>

<wa-button appearance="filled">Open Drawer</wa-button>

<script>
  const drawer = document.querySelector('.drawer-without-header');
  const openButton = drawer.nextElementSibling;

  openButton.addEventListener('click', () => (drawer.open = true));
</script>
```

### 带底部的抽屉

底部可用于显示标题等。使用 `footer` 插槽为抽屉添加底部。

```html {.example}
<wa-drawer label="Drawer" class="drawer-footer">
  This drawer has a footer where you can put actions and other controls.
  <wa-button slot="footer" variant="brand" data-drawer="close">Close</wa-button>
</wa-drawer>

<wa-button appearance="filled">Open Drawer</wa-button>

<script>
  const drawer = document.querySelector('.drawer-footer');
  const openButton = drawer.nextElementSibling;

  openButton.addEventListener('click', () => (drawer.open = true));
</script>
```

### 声明式打开和关闭抽屉

你可以通过切换 `open` 属性来使用 JavaScript 打开和关闭抽屉，但你也可以声明式地这样做。将 `data-drawer="open id"` 添加到页面上的任何按钮，其中 `id` 是你要打开的抽屉的 ID。

```html {.example}
<wa-drawer label="Drawer" id="drawer-opening">
  This drawer was opened declaratively using a data attribute on the button.
  <wa-button slot="footer" variant="brand" data-drawer="close">Close</wa-button>
</wa-drawer>

<wa-button appearance="filled" data-drawer="open drawer-opening">Open Drawer</wa-button>
```

同样，你可以将 `data-drawer="close"` 添加到抽屉_内部_的按钮来告诉它关闭。

```html {.example}
<wa-drawer label="Drawer" id="drawer-dismiss">
  Click the button below to close this drawer — no JavaScript required!
  <wa-button slot="footer" variant="brand" data-drawer="close">Close</wa-button>
</wa-drawer>

<wa-button appearance="filled" data-drawer="open drawer-dismiss">Open Drawer</wa-button>
```

### 从起始端滑入

默认情况下，抽屉从末端滑入。要使抽屉从起始端滑入，请将 `placement` 属性设置为 `start`。

```html {.example}
<wa-drawer label="Drawer" placement="start" class="drawer-placement-start">
  This drawer slides in from the start.
  <wa-button slot="footer" variant="brand" data-drawer="close">Close</wa-button>
</wa-drawer>

<wa-button appearance="filled">Open Drawer</wa-button>

<script>
  const drawer = document.querySelector('.drawer-placement-start');
  const openButton = drawer.nextElementSibling;

  openButton.addEventListener('click', () => (drawer.open = true));
</script>
```

### 从顶部滑入

要使抽屉从顶部滑入，请将 `placement` 属性设置为 `top`。

```html {.example}
<wa-drawer label="Drawer" placement="top" class="drawer-placement-top">
  This drawer slides in from the top.
  <wa-button slot="footer" variant="brand" data-drawer="close">Close</wa-button>
</wa-drawer>

<wa-button appearance="filled">Open Drawer</wa-button>

<script>
  const drawer = document.querySelector('.drawer-placement-top');
  const openButton = drawer.nextElementSibling;

  openButton.addEventListener('click', () => (drawer.open = true));
</script>
```

### 从底部滑入

要使抽屉从底部滑入，请将 `placement` 属性设置为 `bottom`。

```html {.example}
<wa-drawer label="Drawer" placement="bottom" class="drawer-placement-bottom">
  This drawer slides in from the bottom.
  <wa-button slot="footer" variant="brand" data-drawer="close">Close</wa-button>
</wa-drawer>

<wa-button appearance="filled">Open Drawer</wa-button>

<script>
  const drawer = document.querySelector('.drawer-placement-bottom');
  const openButton = drawer.nextElementSibling;

  openButton.addEventListener('click', () => (drawer.open = true));
</script>
```

### 自定义尺寸

使用 `--size` 自定义属性来设置抽屉的尺寸。这将根据其 `placement` 应用于抽屉的宽度或高度。

```html {.example}
<wa-drawer label="Drawer" class="drawer-custom-size" style="--size: 50vw;">
  This drawer is always 50% of the viewport.
  <wa-button slot="footer" variant="brand" data-drawer="close">Close</wa-button>
</wa-drawer>

<wa-button appearance="filled">Open Drawer</wa-button>

<script>
  const drawer = document.querySelector('.drawer-custom-size');
  const openButton = drawer.nextElementSibling;

  openButton.addEventListener('click', () => (drawer.open = true));
</script>
```

### 滚动

根据设计，抽屉的高度永远不会超过其容器的 100%。因此，抽屉不会随页面滚动，以确保头部和底部始终对用户可访问。

```html {.example}
<wa-drawer label="Drawer" class="drawer-scrolling">
  <div style="height: 150vh; border: dashed 2px var(--wa-color-surface-border); padding: 0 1rem;">
    <p>Scroll down and give it a try! 👇</p>
  </div>
  <wa-button slot="footer" variant="brand" data-drawer="close">Close</wa-button>
</wa-drawer>

<wa-button appearance="filled">Open Drawer</wa-button>

<script>
  const drawer = document.querySelector('.drawer-scrolling');
  const openButton = drawer.nextElementSibling;

  openButton.addEventListener('click', () => (drawer.open = true));
</script>
```

### 头部操作

头部默认显示一个功能性的关闭按钮。如果需要，你可以使用 `header-actions` 插槽添加额外的[按钮](/docs/components/button)。

```html {.example}
<wa-drawer label="Drawer" class="drawer-header-actions">
  <wa-button class="new-window" slot="header-actions" appearance="plain">
    <wa-icon name="arrow-up-right-from-square" variant="solid" label="Open in new window"></wa-icon>
  </wa-button>
  You can add custom actions to the header, like the button up there to open in a new window.
  <wa-button slot="footer" variant="brand" data-drawer="close">Close</wa-button>
</wa-drawer>

<wa-button appearance="filled">Open Drawer</wa-button>

<script>
  const drawer = document.querySelector('.drawer-header-actions');
  const openButton = drawer.nextElementSibling;
  const newWindowButton = drawer.querySelector('.new-window');

  openButton.addEventListener('click', () => (drawer.open = true));
  newWindowButton.addEventListener('click', () => window.open(location.href));
</script>
```

### 轻触关闭

如果你希望抽屉在用户点击遮罩层时关闭，请添加 `light-dismiss` 属性。

```html {.example}
<wa-drawer label="Drawer" light-dismiss class="drawer-light-dismiss">
  This drawer will close when you click on the overlay.
  <wa-button slot="footer" variant="brand" data-drawer="close">Close</wa-button>
</wa-drawer>

<wa-button appearance="filled">Open Drawer</wa-button>

<script>
  const drawer = document.querySelector('.drawer-light-dismiss');
  const openButton = drawer.nextElementSibling;

  openButton.addEventListener('click', () => (drawer.open = true));
</script>
```

### 防止抽屉关闭

默认情况下，当用户点击关闭按钮、点击遮罩层或按 [[Escape]] 键时，抽屉会关闭。在大多数情况下，默认行为在 UX 方面是最好的。但是，有些情况下这可能是不可取的，例如当会发生数据丢失时。

要在这种情况下保持抽屉打开，你可以取消 `wa-hide` 事件。取消后，抽屉将保持打开并短暂脉冲以吸引用户的注意力。

你可以使用 `event.detail.source` 来确定是什么触发了关闭请求。这个示例防止在点击遮罩层时关闭抽屉，但允许关闭按钮或 [[Escape]] 来关闭它。

```html {.example}
<wa-drawer label="Drawer" class="drawer-deny-close">
  This drawer will only close when you click the button below.
  <wa-button slot="footer" variant="brand" data-drawer="close">Close</wa-button>
</wa-drawer>

<wa-button appearance="filled">Open Drawer</wa-button>

<script>
  const drawer = document.querySelector('.drawer-deny-close');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('wa-button[slot="footer"]');

  openButton.addEventListener('click', () => (drawer.open = true));

  // 防止抽屉关闭，除非点击关闭按钮
  drawer.addEventListener('wa-hide', event => {
    if (event.detail.source !== closeButton) {
      event.preventDefault();
    }
  });
</script>
```

### 设置初始焦点

要在抽屉打开时聚焦到特定元素，请使用 `autofocus` 属性。

```html {.example}
<wa-drawer label="Drawer" class="drawer-focus">
  <wa-input autofocus placeholder="I will have focus when the drawer is opened"></wa-input>
  <wa-button slot="footer" variant="brand" data-drawer="close">Close</wa-button>
</wa-drawer>

<wa-button appearance="filled">Open Drawer</wa-button>

<script>
  const drawer = document.querySelector('.drawer-focus');
  const input = drawer.querySelector('wa-input');
  const openButton = drawer.nextElementSibling;

  openButton.addEventListener('click', () => (drawer.open = true));
</script>
```
