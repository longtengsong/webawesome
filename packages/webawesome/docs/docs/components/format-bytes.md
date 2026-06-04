---
title: 格式化字节
layout: component
category: Utilities
synonyms:
  - file size
  - byte formatter
  - size formatter
  - 文件大小
  - 字节格式化
  - 大小格式化
use-cases:
  - human readable bytes
  - storage size
  - download size
  - 人类可读字节
  - 存储大小
  - 下载大小
---

```html {.example}
<div class="format-bytes-overview">
  文件大小为 <wa-format-bytes value="1000"></wa-format-bytes>。<br><br>
  <wa-input type="number" value="1000" label="要格式化的数字" style="max-width: 180px;"></wa-input>
</div>

<script>
  const container = document.querySelector('.format-bytes-overview');
  const formatter = container.querySelector('wa-format-bytes');
  const input = container.querySelector('wa-input');

  input.addEventListener('input', () => (formatter.value = input.value || 0));
</script>
```

## 示例

### 格式化字节

设置 `value` 属性为一个数字以获取字节形式的值。

```html {.example}
<wa-format-bytes value="12"></wa-format-bytes><br>
<wa-format-bytes value="1200"></wa-format-bytes><br>
<wa-format-bytes value="1200000"></wa-format-bytes><br>
<wa-format-bytes value="1200000000"></wa-format-bytes>
```

### 格式化比特

要获取比特形式的值，将 `unit` 属性设置为 `bit`。

```html {.example}
<wa-format-bytes value="12" unit="bit"></wa-format-bytes><br>
<wa-format-bytes value="1200" unit="bit"></wa-format-bytes><br>
<wa-format-bytes value="1200000" unit="bit"></wa-format-bytes><br>
<wa-format-bytes value="1200000000" unit="bit"></wa-format-bytes>
```

### 本地化

使用 `lang` 属性设置数字格式化的语言环境。

```html {.example}
<wa-format-bytes value="12" lang="de"></wa-format-bytes><br>
<wa-format-bytes value="1200" lang="de"></wa-format-bytes><br>
<wa-format-bytes value="1200000" lang="de"></wa-format-bytes><br>
<wa-format-bytes value="1200000000" lang="de"></wa-format-bytes>
```
