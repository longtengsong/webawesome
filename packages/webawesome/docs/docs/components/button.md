---
title: 按钮
layout: component
category: Actions
synonyms:
  - btn
  - action
  - CTA
  - submit
  - 按钮
  - 操作
  - 行动号召
  - 提交
use-cases:
  - form submit
  - link button
  - icon button
  - loading button
  - 表单提交
  - 链接按钮
  - 图标按钮
  - 加载按钮
---

```html {.example}
<wa-button>按钮</wa-button>
```

## 示例

### 变体

使用 `variant` 属性来设置按钮的语义变体。

```html {.example}
<div class="wa-cluster wa-gap-2xs">
  <wa-button variant="neutral">中性</wa-button>
  <wa-button variant="brand">品牌</wa-button>
  <wa-button variant="success">成功</wa-button>
  <wa-button variant="warning">警告</wa-button>
  <wa-button variant="danger">危险</wa-button>
</div>
```

### 外观

使用 `appearance` 属性来更改按钮的视觉外观。

```html {.example}
<div class="wa-stack">
  <div class="wa-cluster wa-gap-2xs">
    <wa-button appearance="accent" variant="neutral">强调</wa-button>
    <wa-button appearance="filled-outlined" variant="neutral">填充轮廓</wa-button>
    <wa-button appearance="filled" variant="neutral">填充</wa-button>
    <wa-button appearance="outlined" variant="neutral">轮廓</wa-button>
    <wa-button appearance="plain" variant="neutral">朴素</wa-button>
  </div>
  <div class="wa-cluster wa-gap-2xs">
    <wa-button appearance="accent" variant="brand">强调</wa-button>
    <wa-button appearance="filled-outlined" variant="brand">填充轮廓</wa-button>
    <wa-button appearance="filled" variant="brand">填充</wa-button>
    <wa-button appearance="outlined" variant="brand">轮廓</wa-button>
    <wa-button appearance="plain" variant="brand">朴素</wa-button>
  </div>
  <div class="wa-cluster wa-gap-2xs">
    <wa-button appearance="accent" variant="success">强调</wa-button>
    <wa-button appearance="filled-outlined" variant="success">填充轮廓</wa-button>
    <wa-button appearance="filled" variant="success">填充</wa-button>
    <wa-button appearance="outlined" variant="success">轮廓</wa-button>
    <wa-button appearance="plain" variant="success">朴素</wa-button>
  </div>
  <div class="wa-cluster wa-gap-2xs">
    <wa-button appearance="accent" variant="warning">强调</wa-button>
    <wa-button appearance="filled-outlined" variant="warning">填充轮廓</wa-button>
    <wa-button appearance="filled" variant="warning">填充</wa-button>
    <wa-button appearance="outlined" variant="warning">轮廓</wa-button>
    <wa-button appearance="plain" variant="warning">朴素</wa-button>
  </div>
  <div class="wa-cluster wa-gap-2xs">
    <wa-button appearance="accent" variant="danger">强调</wa-button>
    <wa-button appearance="filled-outlined" variant="danger">填充轮廓</wa-button>
    <wa-button appearance="filled" variant="danger">填充</wa-button>
    <wa-button appearance="outlined" variant="danger">轮廓</wa-button>
    <wa-button appearance="plain" variant="danger">朴素</wa-button>
  </div>
</div>
```

### 尺寸

使用 `size` 属性来更改按钮的尺寸。

```html {.example}
<div class="wa-cluster wa-gap-2xs">
  <wa-button size="xs">极小</wa-button>
  <wa-button size="s">小</wa-button>
  <wa-button size="m">中</wa-button>
  <wa-button size="l">大</wa-button>
  <wa-button size="xl">极大</wa-button>
</div>
```

### 圆角按钮

使用 `pill` 属性为按钮添加圆角边缘。

```html {.example}
<div class="wa-cluster wa-gap-2xs">
  <wa-button size="xs" pill>极小</wa-button>
  <wa-button size="s" pill>小</wa-button>
  <wa-button size="m" pill>中</wa-button>
  <wa-button size="l" pill>大</wa-button>
  <wa-button size="xl" pill>极大</wa-button>
</div>
```

### 链接按钮

拥有一个像链接一样工作的按钮通常很有帮助。通过设置 `href` 属性可以实现这一点，这将使组件在底层渲染一个 `<a>`。这为你提供了浏览器提供的所有默认链接行为（例如 [[CMD/CTRL/SHIFT]] + [[CLICK]]），并暴露了 `rel`、`target` 和 `download` 属性。

```html {.example}
<div class="wa-cluster wa-gap-2xs">
  <wa-button href="https://example.com/">链接</wa-button>
  <wa-button href="https://example.com/" target="_blank">新窗口</wa-button>
  <wa-button href="/assets/images/logo.svg" download="shoelace.svg">下载</wa-button>
</div>
```

### 图标按钮

当只有一个[图标](/docs/components/icon)被插入到 `label` 插槽中时，按钮就变成了图标按钮。在这种情况下，为辅助设备用户给图标提供标签是很重要的。图标按钮可以使用任何外观或变体。

```html {.example}
<div class="wa-cluster wa-gap-2xs">
  <wa-button variant="neutral" appearance="accent"><wa-icon name="house" label="首页"></wa-icon></wa-button>
  <wa-button variant="neutral" appearance="outlined"><wa-icon name="house" label="首页"></wa-icon></wa-button>
  <wa-button variant="neutral" appearance="filled"><wa-icon name="house" label="首页"></wa-icon></wa-button>
  <wa-button variant="neutral" appearance="plain"><wa-icon name="house" label="首页"></wa-icon></wa-button>
</div>
```

### 设置自定义宽度

正如预期的那样，可以通过设置 `width` CSS 属性来给按钮设置自定义宽度。这对于在较小屏幕上让按钮跨越容器的整个宽度很有用。

```html {.example}
<div class="wa-stack">
  <wa-button size="xs" style="width: 100%;">极小</wa-button>
  <wa-button size="s" style="width: 100%;">小</wa-button>
  <wa-button size="m" style="width: 100%;">中</wa-button>
  <wa-button size="l" style="width: 100%;">大</wa-button>
  <wa-button size="xl" style="width: 100%;">极大</wa-button>
</div>
```

### 开始和结束装饰

使用 `start` 和 `end` 插槽在按钮标签旁边添加装饰元素，如 `<wa-icon>`。

```html {.example}
<div class="wa-stack">
  <div class="wa-cluster wa-gap-2xs">
    <wa-button size="s">
      <wa-icon slot="start" name="gear"></wa-icon>
      设置
    </wa-button>

    <wa-button size="s">
      <wa-icon slot="end" name="undo"></wa-icon>
      刷新
    </wa-button>

    <wa-button size="s">
      <wa-icon slot="start" name="link"></wa-icon>
      <wa-icon slot="end" name="arrow-up-right-from-square"></wa-icon>
      打开
    </wa-button>
  </div>

  <div class="wa-cluster wa-gap-2xs">
    <wa-button>
      <wa-icon slot="start" name="gear"></wa-icon>
      设置
    </wa-button>

    <wa-button>
      <wa-icon slot="end" name="undo"></wa-icon>
      刷新
    </wa-button>

    <wa-button>
      <wa-icon slot="start" name="link"></wa-icon>
      <wa-icon slot="end" name="arrow-up-right-from-square"></wa-icon>
      打开
    </wa-button>
  </div>

  <div class="wa-cluster wa-gap-2xs">
    <wa-button size="l">
      <wa-icon slot="start" name="gear"></wa-icon>
      设置
    </wa-button>

    <wa-button size="l">
      <wa-icon slot="end" name="undo"></wa-icon>
      刷新
    </wa-button>

    <wa-button size="l">
      <wa-icon slot="start" name="link"></wa-icon>
      <wa-icon slot="end" name="arrow-up-right-from-square"></wa-icon>
      打开
    </wa-button>
  </div>
</div>
```

### 下拉指示器

当按钮将触发下拉菜单、菜单或弹出框时，使用 `with-caret` 属性添加下拉指示器。

```html {.example}
<div class="wa-cluster wa-gap-2xs">
  <wa-button size="xs" with-caret>极小</wa-button>
  <wa-button size="s" with-caret>小</wa-button>
  <wa-button size="m" with-caret>中</wa-button>
  <wa-button size="l" with-caret>大</wa-button>
  <wa-button size="xl" with-caret>极大</wa-button>
</div>
```

### 加载

使用 `loading` 属性使按钮处于忙碌状态。宽度将保持与之前相同，防止相邻元素移动。

```html {.example}
<div class="wa-cluster wa-gap-2xs">
  <wa-button variant="brand" loading>品牌</wa-button>
  <wa-button variant="success" loading>成功</wa-button>
  <wa-button variant="neutral" loading>中性</wa-button>
  <wa-button variant="warning" loading>警告</wa-button>
  <wa-button variant="danger" loading>危险</wa-button>
</div>
```

### 禁用

使用 `disabled` 属性禁用按钮。

```html {.example}
<wa-button variant="brand" disabled>品牌</wa-button>
<wa-button variant="success" disabled>成功</wa-button>
<wa-button variant="neutral" disabled>中性</wa-button>
<wa-button variant="warning" disabled>警告</wa-button>
<wa-button variant="danger" disabled>危险</wa-button>

<br /><br />

<wa-button href="https://example.com/" disabled>链接</wa-button>
<wa-button href="https://example.com/" target="_blank" disabled>新窗口</wa-button>
<wa-button href="/assets/images/logo.svg" download="shoelace.svg" disabled>下载</wa-button>
```

### 样式化按钮

此示例演示了如何使用自定义类来样式化按钮。如果你需要添加其他变体，这是推荐的方法。要自定义现有变体，请修改选择器以针对按钮的 `variant` 属性而不是类（例如 `wa-button[variant="brand"]`）。

```html {.example}
<wa-button class="pink">粉色按钮</wa-button>

<style>
  wa-button.pink::part(base) {
    border-radius: 6px;
    border: solid 2px;
    background: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: all var(--wa-transition-slow) var(--wa-transition-easing);
  }

  wa-button.pink::part(base):hover {
    transform: scale(1.05);
  }

  wa-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: translateY(1px);
  }

  wa-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```
