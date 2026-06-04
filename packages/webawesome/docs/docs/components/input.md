---
title: 输入框
layout: component
category: Forms
synonyms:
  - text field, 文本字段
  - text box, 文本框
  - form field, 表单字段
  - text input, 文本输入
use-cases:
  - form input, 表单输入
  - search box, 搜索框
  - email field, 邮箱字段
  - password field, 密码字段
  - url field, 网址字段
---

```html {.example}
<wa-input></wa-input>
```

:::info
该组件与标准 `<form>` 元素配合使用。请参阅[表单控件](/docs/form-controls)一节，了解更多关于表单提交和客户端验证的信息。
:::

## 示例

### 标签

使用 `label` 特性为输入框提供可访问的标签。对于包含 HTML 的标签，请改用 `label` 插槽。

```html {.example}
<wa-input label="您叫什么名字？"></wa-input>
```

### 提示

使用 `hint` 特性为输入框添加描述性提示。对于包含 HTML 的提示，请改用 `hint` 插槽。

```html {.example}
<wa-input label="昵称" hint="你希望别人怎么称呼你？"></wa-input>
```

### 占位符

使用 `placeholder` 特性添加占位符文本。

```html {.example}
<wa-input placeholder="请输入内容"></wa-input>
```

### 可清除

添加 `with-clear` 特性，当输入框有内容时显示清除按钮。

```html {.example}
<wa-input placeholder="可清除" with-clear></wa-input>
```

### 密码切换

添加 `password-toggle` 特性，添加一个切换按钮，激活时显示密码。

```html {.example}
<wa-input type="password" placeholder="密码切换" password-toggle></wa-input>
```

### 外观

使用 `appearance` 特性更改输入框的视觉外观。

```html {.example}
<wa-input placeholder="请输入内容" appearance="filled"></wa-input><br />
<wa-input placeholder="请输入内容" appearance="filled-outlined"></wa-input><br />
<wa-input placeholder="请输入内容" appearance="outlined"></wa-input>
```

### 禁用

使用 `disabled` 特性禁用输入框。

```html {.example}
<wa-input placeholder="已禁用" disabled></wa-input>
```

### 尺寸

使用 `size` 特性更改输入框的大小。

```html {.example}
<wa-input placeholder="超小" size="xs"></wa-input>
<br />
<wa-input placeholder="小" size="s"></wa-input>
<br />
<wa-input placeholder="中" size="m"></wa-input>
<br />
<wa-input placeholder="大" size="l"></wa-input>
<br />
<wa-input placeholder="超大" size="xl"></wa-input>
```

### 药丸形

使用 `pill` 特性为输入框添加圆角边缘。

```html {.example}
<wa-input placeholder="超小" size="xs" pill></wa-input>
<br />
<wa-input placeholder="小" size="s" pill></wa-input>
<br />
<wa-input placeholder="中" size="m" pill></wa-input>
<br />
<wa-input placeholder="大" size="l" pill></wa-input>
<br />
<wa-input placeholder="超大" size="xl" pill></wa-input>
```

### 输入类型

`type` 特性控制浏览器渲染的输入框类型。

```html {.example}
<wa-input type="email" placeholder="邮箱"></wa-input>
<br />
<wa-input type="number" placeholder="数字"></wa-input>
<br />
<wa-input type="date" placeholder="日期"></wa-input>
```

### 开始和结束装饰

使用 `start` 和 `end` 插槽在输入框内添加展示性元素，如 `<wa-icon>`。

```html {.example}
<wa-input placeholder="小" size="s">
  <wa-icon name="house" slot="start"></wa-icon>
  <wa-icon name="comment" slot="end"></wa-icon>
</wa-input>
<br />
<wa-input placeholder="中" size="m">
  <wa-icon name="house" slot="start"></wa-icon>
  <wa-icon name="comment" slot="end"></wa-icon>
</wa-input>
<br />
<wa-input placeholder="大" size="l">
  <wa-icon name="house" slot="start"></wa-icon>
  <wa-icon name="comment" slot="end"></wa-icon>
</wa-input>
```

### 自定义标签位置

使用 [CSS 部件](#css-parts)自定义表单控件的绘制方式。此示例使用 CSS 网格将标签定位在控件左侧，但可能的方向几乎是无限的。相同的技术适用于输入框、文本域、单选按钮组和类似的表单控件。

```html {.example}
<div class="label-on-left">
  <wa-input label="姓名" hint="请输入您的姓名"></wa-input>
  <wa-input label="邮箱" type="email" hint="请输入您的邮箱"></wa-input>
  <wa-textarea label="简介" hint="告诉我们一些关于你自己的事情"></wa-textarea>
</div>

<style>
  .label-on-left {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--wa-space-l);
    align-items: center;

    wa-input,
    wa-textarea {
      grid-column: 1 / -1;
      grid-row-end: span 2;
      display: grid;
      grid-template-columns: subgrid;
      gap: 0 var(--wa-space-l);
      align-items: center;
    }

    ::part(label) {
      text-align: right;
    }

    ::part(hint) {
      grid-column: 2;
    }
  }
</style>
```
