---
title: Number Input
layout: component
category: Forms
synonyms:
  - numeric input
  - stepper
  - spin button
  - counter
  - 数字输入框
  - 步进器
  - 计数
use-cases:
  - quantity selector
  - increment decrement
  - numeric field
  - 数量选择器
  - 增减
  - 数字字段
---

```html {.example}
<wa-number-input label="数量" value="1" style="max-width: 260px;"></wa-number-input>
```

:::info
此组件与标准 `<form>` 元素配合使用。请参阅[表单控件](/docs/form-controls)一节，了解关于表单提交和客户端验证的更多信息。
:::

## 示例

### 标签

使用 `label` 属性为输入框提供可访问的标签。对于包含 HTML 的标签，请改用 `label` 插槽。

```html {.example}
<wa-number-input label="多少项？" style="max-width: 260px;"></wa-number-input>
```

### 提示

使用 `hint` 属性为输入框添加描述性提示。对于包含 HTML 的提示，请改用 `hint` 插槽。

```html {.example}
<wa-number-input
  label="订单数量"
  hint="输入你想要订购的物品数量"
  style="max-width: 260px;"
></wa-number-input>
```

### 占位符

使用 `placeholder` 属性添加占位符。

```html {.example}
<wa-number-input placeholder="输入数字" style="max-width: 260px;"></wa-number-input>
```

### 设置最小值、最大值和步长

使用 `min` 和 `max` 属性设置最小值和最大值。使用 `step` 属性更改使用步进按钮或方向键时值必须遵循的粒度。

```html {.example}
<wa-number-input
  label="捐赠金额"
  hint="金额以美元计（10-100，增量为 5）"
  min="10"
  max="100"
  step="5"
  value="25"
  style="max-width: 260px;"
></wa-number-input>
```

### 外观

使用 `appearance` 属性更改输入框的视觉外观。

```html {.example}
<wa-number-input label="轮廓" appearance="outlined" value="42" style="max-width: 260px;"></wa-number-input>
<br />
<wa-number-input label="填充" appearance="filled" value="42" style="max-width: 260px;"></wa-number-input>
<br />
<wa-number-input
  label="填充轮廓"
  appearance="filled-outlined"
  value="42"
  style="max-width: 260px;"
></wa-number-input>
```

### 禁用

使用 `disabled` 属性禁用输入框。

```html {.example}
<wa-number-input label="禁用" value="100" disabled style="max-width: 260px;"></wa-number-input>
```

### 只读

使用 `readonly` 属性使输入框只读。值仍可选择和复制，但不能更改。

```html {.example}
<wa-number-input label="只读" value="42" readonly style="max-width: 260px;"></wa-number-input>
```

### 尺寸

使用 `size` 属性更改输入框的尺寸。

```html {.example}
<wa-number-input label="超小" size="xs" value="5" style="max-width: 260px;"></wa-number-input>
<br />
<wa-number-input label="小" size="s" value="10" style="max-width: 260px;"></wa-number-input>
<br />
<wa-number-input label="中" size="m" value="20" style="max-width: 260px;"></wa-number-input>
<br />
<wa-number-input label="大" size="l" value="30" style="max-width: 260px;"></wa-number-input>
<br />
<wa-number-input label="超大" size="xl" value="40" style="max-width: 260px;"></wa-number-input>
```

### 圆角

使用 `pill` 属性为输入框提供圆角边缘。

```html {.example}
<wa-number-input label="超小圆角" size="xs" pill value="5" style="max-width: 260px;"></wa-number-input>
<br />
<wa-number-input label="小圆角" size="s" pill value="10" style="max-width: 260px;"></wa-number-input>
<br />
<wa-number-input label="中圆角" size="m" pill value="20" style="max-width: 260px;"></wa-number-input>
<br />
<wa-number-input label="大圆角" size="l" pill value="30" style="max-width: 260px;"></wa-number-input>
<br />
<wa-number-input label="超大圆角" size="xl" pill value="40" style="max-width: 260px;"></wa-number-input>
```

### 无步进器

添加 `without-steppers` 属性以移除增减按钮。用户仍可使用键盘修改值。

```html {.example}
<wa-number-input label="无步进器" value="50" without-steppers style="max-width: 260px;"></wa-number-input>
```

:::info
当步进器被隐藏时，用户仍可使用方向键增减值。
:::

### 开始和结束装饰

使用 `start` 和 `end` 插槽在输入框内添加表示性元素，如 `<wa-icon>`。

```html {.example}
<wa-number-input label="价格" value="100" style="max-width: 260px;">
  <wa-icon slot="start" name="dollar-sign" family="utility" variant="semibold"></wa-icon>
</wa-number-input>

<br />

<wa-number-input label="重量（千克）" value="75" style="max-width: 260px;">
  <wa-icon slot="end" name="bag-shopping" family="utility" variant="semibold"></wa-icon>
</wa-number-input>
```

### 自定义步进器图标

使用 `increment-icon` 和 `decrement-icon` 插槽自定义步进按钮图标。

```html {.example}
<wa-number-input label="自定义图标" value="5" style="max-width: 260px;">
  <wa-icon slot="increment-icon" name="plus" family="notdog-duo" variant="solid"></wa-icon>
  <wa-icon slot="decrement-icon" name="minus" family="notdog-duo" variant="solid"></wa-icon>
</wa-number-input>
```

### 自定义标签位置

使用 [CSS 部件](#css-parts) 自定义表单控件的绘制方式。此示例使用 CSS grid 将标签定位在控件的左侧，但可能的方向几乎是无限的。相同的技术适用于输入框、文本域、单选组和类似的表单控件。

```html {.example}
<div class="label-on-left">
  <wa-number-input label="数量" hint="你需要多少？" value="1"></wa-number-input>
  <wa-number-input label="价格" hint="每个单位的成本" value="25"></wa-number-input>
</div>

<style>
  .label-on-left {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: var(--wa-space-l);
    align-items: center;

    wa-number-input {
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

### 表单验证

使用 `required` 属性使该字段必填。与 `min` 和 `max` 组合进行范围验证。

```html {.example}
<form class="number-input-validation">
  <wa-number-input
    name="quantity"
    label="数量"
    hint="输入 1 到 10 之间的值"
    min="1"
    max="10"
    required
    style="max-width: 260px;"
  ></wa-number-input>
  <br />
  <wa-number-input
    name="price"
    label="价格"
    hint="必须是 0.25 的倍数"
    min="0"
    step="0.25"
    required
    style="max-width: 260px;"
  ></wa-number-input>
  <br />
  <wa-button appearance="filled" type="submit" variant="neutral">提交</wa-button>
  <wa-button appearance="filled" type="reset" variant="neutral">重置</wa-button>
</form>

<script type="module">
  const form = document.querySelector('.number-input-validation');

  form.addEventListener('submit', event => {
    event.preventDefault();

    // 在控制台中记录数据用于演示
    console.log(...new FormData(form));
  });
</script>
```
