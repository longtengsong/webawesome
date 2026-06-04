---
title: 格式化数字
layout: component
category: Utilities
synonyms:
  - number formatter
  - currency
  - percent
  - 数字格式化
  - 货币
  - 百分比
use-cases:
  - localized number
  - decimal format
  - currency display
  - 本地化数字
  - 小数格式
  - 货币显示
---

本地化由浏览器的 [`Intl.NumberFormat` API](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) 处理。不需要语言包。

```html {.example}
<div class="format-number-overview">
  <wa-format-number value="1000"></wa-format-number>
  <br><br>
  <wa-input type="number" value="1000" label="要格式化的数字" style="max-width: 180px;"></wa-input>
</div>

<script>
  const container = document.querySelector('.format-number-overview');
  const formatter = container.querySelector('wa-format-number');
  const input = container.querySelector('wa-input');

  input.addEventListener('input', () => (formatter.value = input.value || 0));
</script>
```

## 示例

### 百分比

要获取百分比形式的值，将 `type` 属性设置为 `percent`。

```html {.example}
<wa-format-number type="percent" value="0"></wa-format-number><br>
<wa-format-number type="percent" value="0.25"></wa-format-number><br>
<wa-format-number type="percent" value="0.50"></wa-format-number><br>
<wa-format-number type="percent" value="0.75"></wa-format-number><br>
<wa-format-number type="percent" value="1"></wa-format-number>
```

### 本地化

使用 `lang` 属性设置数字格式化的语言环境。

```html {.example}
英语: <wa-format-number value="2000" lang="en" minimum-fraction-digits="2"></wa-format-number><br>
德语: <wa-format-number value="2000" lang="de" minimum-fraction-digits="2"></wa-format-number><br>
俄语: <wa-format-number value="2000" lang="ru" minimum-fraction-digits="2"></wa-format-number>
```

### 货币

要将数字格式化为货币值，将 `type` 属性设置为 `currency` 并将 `currency` 属性设置为所需的 ISO 4217 货币代码。你还应该指定 `lang` 以确保数字为目标语言环境正确格式化。

```html {.example}
<wa-format-number type="currency" currency="USD" value="2000" lang="en-US"></wa-format-number><br>
<wa-format-number type="currency" currency="GBP" value="2000" lang="en-GB"></wa-format-number><br>
<wa-format-number type="currency" currency="EUR" value="2000" lang="de"></wa-format-number><br>
<wa-format-number type="currency" currency="RUB" value="2000" lang="ru"></wa-format-number><br>
<wa-format-number type="currency" currency="CNY" value="2000" lang="zh-cn"></wa-format-number>
```
