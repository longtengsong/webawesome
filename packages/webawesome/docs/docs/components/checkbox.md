---
title: 复选框
layout: component
category: Forms
synonyms:
  - check
  - tick
  - checkmark
  - 勾选框
use-cases:
  - boolean toggle
  - multi-select option
  - terms agreement
  - todo item
  - 布尔切换
  - 多选项
---

```html {.example}
<wa-checkbox>复选框</wa-checkbox>
```

:::info
这个组件与标准的 `<form>` 元素一起工作。请参阅 [表单控件](/docs/form-controls) 部分以了解更多关于表单提交和客户端验证的信息。
:::

## 示例

### 选中

使用 `checked` 属性来激活复选框。

```html {.example}
<wa-checkbox checked>已选中</wa-checkbox>
```

:::info
`checked` 属性是初始值，不会反映更改，与原生复选框一致。要使用 JavaScript 切换选中状态，请改用 `checked` 属性。要使用 CSS 定位选中的复选框，请使用 `:state(checked)` 选择器。
:::

### 不确定

使用 `indeterminate` 属性使复选框处于不确定状态。

```html {.example}
<wa-checkbox indeterminate>不确定</wa-checkbox>
```

### 禁用

使用 `disabled` 属性来禁用复选框。

```html {.example}
<wa-checkbox disabled>已禁用</wa-checkbox>
```

### 尺寸

使用 `size` 属性来更改复选框的尺寸。

```html {.example}
<wa-checkbox size="xs">超小</wa-checkbox>
<br />
<wa-checkbox size="s">小</wa-checkbox>
<br />
<wa-checkbox size="m">中</wa-checkbox>
<br />
<wa-checkbox size="l">大</wa-checkbox>
<br />
<wa-checkbox size="xl">超大</wa-checkbox>
```

### 提示

使用 `hint` 属性向开关添加描述性提示。对于包含 HTML 的提示，请改用 `hint` 插槽。

```html {.example}
<wa-checkbox hint="用户应该了解关于复选框的什么？">标签</wa-checkbox>
```

### 自定义验证

使用 `setCustomValidity()` 方法来设置自定义验证消息。这将阻止表单提交，并使浏览器显示你提供的错误消息。要清除错误，请用空字符串调用此函数。

```html {.example}
<form class="custom-validity">
  <wa-checkbox>勾选我</wa-checkbox>
  <br />
  <wa-button appearance="filled" type="submit" variant="neutral" style="margin-top: 1rem;">提交</wa-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const checkbox = form.querySelector('wa-checkbox');
  const errorMessage = `别忘了勾选我！`;

  // 一旦元素定义就设置初始有效性
  customElements.whenDefined('wa-checkbox').then(async () => {
    await checkbox.updateComplete;
    checkbox.setCustomValidity(errorMessage);
  });

  // 在更改时更新有效性
  checkbox.addEventListener('change', () => {
    checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
  });

  // 处理提交
  customElements.whenDefined('wa-checkbox').then(() => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('所有字段都有效！');
    });
  });
</script>
```
