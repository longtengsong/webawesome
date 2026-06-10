---
title: 格式化日期
layout: component
category: Utilities
synonyms:
  - date formatter
  - time formatter
  - datetime
  - 日期格式化
  - 时间格式化
  - 日期时间
use-cases:
  - localized date
  - date display
  - timestamp
  - 本地化日期
  - 日期显示
  - 时间戳
---

本地化由浏览器的 [`Intl.DateTimeFormat` API](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) 处理。不需要语言包。

```html {.example}
<!-- @SITE_NAME@ 2 发布日期 🎉 -->
<wa-format-date date="2020-07-15T09:17:00-04:00"></wa-format-date>
```

`date` 属性确定格式化时要使用的日期/时间。它必须是 [`Date.parse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) 可以解析的字符串或通过 JavaScript 设置的 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象。如果省略，将使用当前日期/时间。

:::info
使用字符串时，请避免使用不明确的日期，例如 `03/04/2020`，因为根据用户的浏览器和语言环境，它可能被解释为3月4日或4月3日。相反，始终使用有效的 [ISO 8601 日期时间字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format)，以确保日期将被所有客户端正确解析。
:::

## 示例

### 日期和时间格式化

格式化选项基于 [`Intl.DateTimeFormat` API](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) 中的选项。当提供格式化选项时，日期/时间将根据这些值进行格式化。当不提供格式化选项时，将显示本地化的数字日期。

```html {.example}
<!-- 人类可读日期 -->
<wa-format-date month="long" day="numeric" year="numeric"></wa-format-date><br>

<!-- 时间 -->
<wa-format-date hour="numeric" minute="numeric"></wa-format-date><br>

<!-- 星期 -->
<wa-format-date weekday="long"></wa-format-date><br>

<!-- 月份 -->
<wa-format-date month="long"></wa-format-date><br>

<!-- 年份 -->
<wa-format-date year="numeric"></wa-format-date><br>

<!-- 无格式化选项 -->
<wa-format-date></wa-format-date>
```

### 小时格式化

默认情况下，浏览器将决定使用12小时制还是24小时制。要强制使用其中一种，将 `hour-format` 属性设置为 `12` 或 `24`。

```html {.example}
<wa-format-date hour="numeric" minute="numeric" hour-format="12"></wa-format-date><br>
<wa-format-date hour="numeric" minute="numeric" hour-format="24"></wa-format-date>
```

### 本地化

使用 `lang` 属性设置日期/时间格式化的语言环境。

```html {.example}
英语: <wa-format-date lang="en"></wa-format-date><br>
法语: <wa-format-date lang="fr"></wa-format-date><br>
俄语: <wa-format-date lang="ru"></wa-format-date>
```
