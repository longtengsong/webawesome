---
title: 颜色选择器
layout: component
category: Forms
synonyms:
  - color chooser
  - color selector
  - colour picker
  - eyedropper
  - 颜色选择器
  - 取色器
use-cases:
  - color input
  - hex picker
  - rgb picker
  - hsl picker
  - 颜色输入
---

```html {.example}
<wa-color-picker label="选择一个颜色"></wa-color-picker>
```

:::info
这个组件与标准的 `<form>` 元素一起工作。请参阅 [表单控件](/docs/form-controls) 部分以了解更多关于表单提交和客户端验证的信息。
:::

## 示例

### 初始值

使用 `value` 属性为颜色选择器设置初始值。

```html {.example}
<wa-color-picker value="#4a90e2" label="选择一个颜色"></wa-color-picker>
```

### 不透明度

使用 `opacity` 属性启用不透明度滑块。当启用此功能时，值将根据 `format` 显示为 HEXA、RGBA、HSLA 或 HSVA。

```html {.example}
<wa-color-picker value="#f5a623ff" opacity label="选择一个颜色"></wa-color-picker>
```

### 格式

使用 `format` 属性设置颜色选择器的格式。有效选项包括 `hex`、`rgb`、`hsl` 和 `hsv`。请注意，无论此选项如何，颜色选择器的输入将接受任何可解析的格式（包括 CSS 颜色名称）。

为了防止用户自己切换格式，添加 `without-format-toggle` 属性。

```html {.example}
<div class="wa-grid" style="--min-column-size: 12ch;">
  <wa-color-picker format="hex" value="#4a90e2" label="选择一个 hex 颜色"></wa-color-picker>
  <wa-color-picker format="rgb" value="rgb(80, 227, 194)" label="选择一个 RGB 颜色"></wa-color-picker>
  <wa-color-picker format="hsl" value="hsl(290, 87%, 47%)" label="选择一个 HSL 颜色"></wa-color-picker>
  <wa-color-picker format="hsv" value="hsv(55, 89%, 97%)" label="选择一个 HSV 颜色"></wa-color-picker>
</div>
```

### 色板

使用 `swatches` 属性为颜色选择器添加方便的预设。颜色选择器可以解析的任何格式都是可接受的（包括 [CSS 颜色名称](https://www.w3schools.com/colors/colors_names.asp)），但每个值必须用分号（`;`）分隔。或者，你可以使用 JavaScript 将颜色值数组传递给此属性。

```html {.example}
<wa-color-picker
  label="选择一个颜色"
  swatches="
    #d0021b; #f5a623; #f8e71c; #8b572a; #7ed321; #417505; #bd10e0; #9013fe;
    #4a90e2; #50e3c2; #b8e986; #000; #444; #888; #ccc; #fff;
  "
></wa-color-picker>
```

你还可以使用 JavaScript 传递一个带有 `color` 和 `label` 属性的对象数组。当提供标签时，它们将被用作每个色板的可访问名称，而不是原始颜色值。

```html {.example}
<wa-color-picker id="labeled-swatches" label="选择一个颜色"></wa-color-picker>

<script>
  const colorPicker = document.getElementById('labeled-swatches');
  colorPicker.swatches = [
    { color: '#d0021b', label: '红色' },
    { color: '#f5a623', label: '橙色' },
    { color: '#f8e71c', label: '黄色' },
    { color: '#7ed321', label: '绿色' },
    { color: '#4a90e2', label: '蓝色' },
    { color: '#bd10e0', label: '紫色' },
    { color: '#000', label: '黑色' },
    { color: '#fff', label: '白色' },
  ];
</script>
```

### 放置

下拉菜单的首选位置可以用 `placement` 属性设置。请注意，实际位置可能会有所不同，以确保面板保持在视口中。

```html {.example}
<div class="wa-gap-m wa-align-items-baseline">
  <wa-color-picker placement="top-start" label="选择一个颜色"></wa-color-picker>
  <wa-color-picker placement="bottom-end" label="选择一个颜色"></wa-color-picker>
  <wa-color-picker placement="right" label="选择一个颜色"></wa-color-picker>
  <wa-color-picker placement="left" label="选择一个颜色"></wa-color-picker>
</div>
```

### 尺寸

使用 `size` 属性来更改颜色选择器触发器的尺寸。

```html {.example}
<div class="wa-gap-m wa-align-items-baseline">
  <wa-color-picker size="xs" label="选择一个颜色"></wa-color-picker>
  <wa-color-picker size="s" label="选择一个颜色"></wa-color-picker>
  <wa-color-picker size="m" label="选择一个颜色"></wa-color-picker>
  <wa-color-picker size="l" label="选择一个颜色"></wa-color-picker>
  <wa-color-picker size="xl" label="选择一个颜色"></wa-color-picker>
</div>
```

### 禁用

颜色选择器可以渲染为禁用状态。

```html {.example}
<wa-color-picker disabled label="选择一个颜色"></wa-color-picker>
```

### 提示

使用 `hint` 属性向颜色选择器添加描述性提示。对于包含 HTML 的提示，请改用 `hint` 插槽。

```html {.example}
<wa-color-picker label="选择一个颜色" hint="选择一个具有适当对比度的颜色！"></wa-color-picker>
```
