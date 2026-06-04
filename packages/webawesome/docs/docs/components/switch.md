---
title: 开关
layout: component
category: Forms
synonyms:
  - toggle
  - toggle switch
  - on off
  - 切换
  - 切换开关
  - 开关
use-cases:
  - boolean toggle
  - setting toggle
  - dark mode toggle
  - 布尔切换
  - 设置切换
  - 深色模式切换
---

```html {.example}
<wa-switch>开关</wa-switch>
```

:::info
此组件与标准 `<form>` 元素配合使用。请参阅[表单控件](/docs/form-controls)部分以了解有关表单提交和客户端验证的更多信息。
:::

## 示例

### 已选中

使用 `checked` 属性来激活开关。

```html {.example}
<wa-switch checked>已选中</wa-switch>
```

:::info
`checked` 属性是初始值，不反映变化，这与原生复选框一致。要使用 JavaScript 切换选中状态，请改为使用 `checked` 属性。要使用 CSS 定位已选中的开关，请使用 `:state(checked)` 选择器。
:::

### 禁用

使用 `disabled` 属性来禁用开关。

```html {.example}
<wa-switch disabled>禁用</wa-switch>
```

### 尺寸

使用 `size` 属性来改变开关的尺寸。

```html {.example}
<wa-switch size="xs">超小</wa-switch>
<br />
<wa-switch size="s">小</wa-switch>
<br />
<wa-switch size="m">中</wa-switch>
<br />
<wa-switch size="l">大</wa-switch>
<br />
<wa-switch size="xl">超大</wa-switch>
```

### 提示

使用 `hint` 属性为开关添加描述性提示。对于包含 HTML 的提示，请改为使用 `hint` 插槽。

```html {.example}
<wa-switch hint="用户应该了解关于开关的什么信息？">标签</wa-switch>
```

### 自定义样式

使用可用的自定义属性来改变开关的样式。

```html {.example}
<wa-switch style="--width: 80px; --height: 40px; --thumb-size: 36px;">超大的</wa-switch>
```
