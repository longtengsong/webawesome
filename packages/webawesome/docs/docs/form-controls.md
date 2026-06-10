---
title: 表单控件
description: 使用 @SITE_NAME@ 表单控件。
layout: page-outline
synonyms:
  - forms
  - form elements
  - validation
  - 表单
  - 表单元素
  - 验证
use-cases:
  - form handling
  - form data
  - constraint validation
  - 表单处理
  - 表单数据
  - 约束验证
---

@SITE_NAME@ 表单控件是与表单关联的自定义元素，这意味着它们会像原生 `<form>` 控件一样随表单一起提交。它们还支持约束验证，这是浏览器原生的客户端表单验证功能。

## 约束验证

@SITE_NAME@ 表单控件可以通过浏览器的[约束验证 API](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation) 启用客户端验证。您可以使用 `required`、`pattern`、`minlength`、`maxlength` 等属性来激活它。@SITE_NAME@ 实现了与原生表单控件相同的许多属性，但请查看文档以了解每个组件支持的属性列表。

如果您不想使用客户端验证，可以通过在周围的 `<form>` 元素上添加 `novalidate` 来抑制此行为。

如果这些语法看起来不熟悉，请不要担心！您在本页学到的大部分内容也适用于原生表单控件，属于平台知识。

:::warning
客户端验证可用于改善表单的用户体验，但不能替代服务器端验证。您应始终在服务器端验证和清理用户输入！
:::

### 必填字段

要使字段必填，请使用 `required` 属性。必填字段会在其标签后自动显示一个星号。如果必填字段未填写完整，表单将无法提交。

```html {.example}
<form class="input-validation-required">
  <wa-input name="name" label="姓名" required></wa-input>
  <br />
  <wa-select label="最喜欢的动物" with-clear required>
    <wa-option value="birds">鸟类</wa-option>
    <wa-option value="cats">猫</wa-option>
    <wa-option value="dogs">狗</wa-option>
    <wa-option value="other">其他</wa-option>
  </wa-select>
  <br />
  <wa-textarea name="comment" label="评论" required></wa-textarea>
  <br />
  <wa-checkbox required>提交前请勾选此处</wa-checkbox>
  <br /><br />
  <wa-button appearance="filled" type="submit" variant="neutral">提交</wa-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-required');

  // 等待控件定义完成后附加表单监听器
  await Promise.all([
    customElements.whenDefined('wa-button'),
    customElements.whenDefined('wa-checkbox'),
    customElements.whenDefined('wa-input'),
    customElements.whenDefined('wa-option'),
    customElements.whenDefined('wa-select'),
    customElements.whenDefined('wa-textarea'),
  ]).then(() => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('所有字段均有效！');
    });
  });
</script>
```

### 输入模式

要限制值符合特定的[模式](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern)，请使用 `pattern` 属性。此示例仅允许字母 A-Z，因此如果输入数字或符号，表单将无法提交。这仅适用于 `<wa-input>` 元素。

```html {.example}
<form class="input-validation-pattern">
  <wa-input name="letters" required label="字母" pattern="[A-Za-z]+"></wa-input>
  <br />
  <wa-button appearance="filled" type="submit" variant="neutral">提交</wa-button>
  <wa-button appearance="filled" type="reset" variant="neutral">重置</wa-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-pattern');

  // 等待控件定义完成后附加表单监听器
  await Promise.all([customElements.whenDefined('wa-button'), customElements.whenDefined('wa-input')]).then(() => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('所有字段均有效！');
    });
  });
</script>
```

### 输入类型

某些输入类型会自动触发约束，例如 `email` 和 `url`。

```html {.example}
<form class="input-validation-type">
  <wa-input type="email" label="邮箱" placeholder="you@example.com" required></wa-input>
  <br />
  <wa-input type="url" label="网址" placeholder="https://example.com/" required></wa-input>
  <br />
  <wa-button appearance="filled" type="submit" variant="neutral">提交</wa-button>
  <wa-button appearance="filled" type="reset" variant="neutral">重置</wa-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-type');

  // 等待控件定义完成后附加表单监听器
  await Promise.all([customElements.whenDefined('wa-button'), customElements.whenDefined('wa-input')]).then(() => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('所有字段均有效！');
    });
  });
</script>
```

### 自定义错误消息

要创建自定义验证错误，请向 `setCustomValidity()` 方法传递一个非空字符串。这将覆盖任何现有的验证约束。当设置了自定义有效性时，表单将无法提交，浏览器会在提交包含该表单时显示验证错误。要使输入重新有效，请再次调用 `setCustomValidity('')` 并传入空字符串。

```html {.example}
<form class="input-validation-custom">
  <wa-input label="输入 webawesome" required></wa-input>
  <br />
  <wa-button appearance="filled" type="submit" variant="neutral">提交</wa-button>
  <wa-button appearance="filled" type="reset" variant="neutral">重置</wa-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-custom');
  const input = form.querySelector('wa-input');

  // 等待控件定义完成后附加表单监听器
  await Promise.all([customElements.whenDefined('wa-button'), customElements.whenDefined('wa-input')]).then(() => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('所有字段均有效！');
    });

    input.addEventListener('input', () => {
      if (input.value === 'webawesome') {
        input.setCustomValidity('');
      } else {
        input.setCustomValidity("嘿，你应该输入 'webawesome' 后再提交！");
      }
    });
  });
</script>
```

:::info
自定义验证可以应用于任何支持 `setCustomValidity()` 方法的表单控件，不限于输入框和文本区域。
:::

## 自定义验证样式

由于表单控件的使用方式多样，@SITE_NAME@ 的默认主题不提供开箱即用的表单控件验证样式。

相反，以下[自定义状态](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/states)会在用户与控件交互时被应用，以反映控件的有效性。您可以使用它们为您感兴趣的任意验证状态创建自定义样式。

- `:state(required)` - 表单控件为必填
- `:state(optional)` - 表单控件为选填
- `:state(invalid)` - 表单控件无效
- `:state(valid)` - 表单控件有效
- `:state(user-invalid)` - 表单控件无效且用户已与其交互
- `:state(user-valid)` - 表单控件有效且用户已与其交互

这些自定义状态与浏览器内置的验证伪类一起使用：[`:required`](https://developer.mozilla.org/en-US/docs/Web/CSS/:required)、[`:optional`](https://developer.mozilla.org/en-US/docs/Web/CSS/:optional)、[`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)、[`:valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid)、[`:user-invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid) 和 [`:user-valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-valid)。
