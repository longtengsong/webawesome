---
title: 文本域
layout: component
category: Forms
synonyms:
  - text area
  - multiline input
  - text box
  - 多行输入
  - 文本框
use-cases:
  - comment box
  - message input
  - description field
  - code input
  - 评论框
  - 消息输入
  - 描述字段
  - 代码输入
---

```html {.example}
<wa-textarea label="说点什么，好吗"></wa-textarea>
```

:::info
此组件与标准 `<form>` 元素配合使用。请参阅[表单控件](/docs/form-controls)部分以了解有关表单提交和客户端验证的更多信息。
:::

## 示例

### 标签

使用 `label` 属性为文本域提供一个可访问的标签。对于包含 HTML 的标签，请改为使用 `label` 插槽。

```html {.example}
<wa-textarea label="评论"></wa-textarea>
```

### 提示

使用 `hint` 属性为文本域添加描述性提示。对于包含 HTML 的提示，请改为使用 `hint` 插槽。

```html {.example}
<wa-textarea label="反馈" hint="请告诉我们您的想法。"> </wa-textarea>
```

### 行数

使用 `rows` 属性来改变显示的文本行数。

```html {.example}
<wa-textarea rows="2"></wa-textarea>
```

### 占位符

使用 `placeholder` 属性来添加占位符。

```html {.example}
<wa-textarea placeholder="输入内容"></wa-textarea>
```

### 外观

使用 `appearance` 属性来改变文本域的视觉外观。

```html {.example}
<wa-textarea placeholder="输入内容" appearance="filled"></wa-textarea><br />
<wa-textarea placeholder="输入内容" appearance="filled-outlined"></wa-textarea><br />
<wa-textarea placeholder="输入内容" appearance="outlined"></wa-textarea>
```

### 禁用

使用 `disabled` 属性来禁用文本域。

```html {.example}
<wa-textarea placeholder="文本域" disabled></wa-textarea>
```

### 初始值

使用 `value` 属性来设置初始值。

```html {.example}
<wa-textarea value="写点很棒的内容！"></wa-textarea>
```

### 尺寸

使用 `size` 属性来改变文本域的尺寸。

```html {.example}
<wa-textarea placeholder="超小" size="xs"></wa-textarea>
<br />
<wa-textarea placeholder="小" size="s"></wa-textarea>
<br />
<wa-textarea placeholder="中" size="m"></wa-textarea>
<br />
<wa-textarea placeholder="大" size="l"></wa-textarea>
<br />
<wa-textarea placeholder="超大" size="xl"></wa-textarea>
```

### 禁止调整大小

默认情况下，用户可以垂直调整文本域的大小。要禁止调整大小，请将 `resize` 属性设置为 `none`。

```html {.example}
<wa-textarea resize="none"></wa-textarea>
```

### 随内容扩展

当 `resize` 设置为 `auto` 时，文本域将自动调整大小以适应其内容。

```html {.example}
<wa-textarea resize="auto"></wa-textarea>
```

### 水平调整大小

当 `resize` 设置为 `"horizontal"` 时，文本域可以水平调整大小。

```html {.example}
<wa-textarea resize="horizontal"></wa-textarea>
```

### 双向调整大小

当 `resize` 设置为 `"both"` 时，文本域可以垂直和水平调整大小。

```html {.example}
<wa-textarea resize="both"></wa-textarea>
```

### 字符计数

添加 `with-count` 属性以在文本域下方显示字符计数。当与 `maxlength` 结合使用时，计数会改为显示剩余字符数。计数通过实时区域暴露给辅助技术，以便屏幕阅读器可以在用户输入时宣布更新。

```html {.example}
<wa-textarea label="评论" hint="与我们分享您的想法" with-count></wa-textarea>
<br />
<wa-textarea label="简介" hint="告诉我们一点关于您自己" with-count maxlength="100"></wa-textarea>
```
