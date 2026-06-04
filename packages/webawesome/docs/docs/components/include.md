---
title: Include
layout: component
category: Utilities
synonyms:
  - html include
  - embed
  - html import
  - HTML 包含
  - 嵌入
  - HTML 导入
use-cases:
  - external content
  - partial
  - server-side include
  - 外部内容
  - 局部
  - 服务端包含
---

包含的文件使用 `window.fetch()` 异步请求。请求会被缓存，所以同一个文件可以被多次包含，但只会发起一次请求。

包含的内容会被插入到 `<wa-include>` 元素的默认插槽中，因此可以通过光 DOM 轻松访问和样式化。

```html {.example}
<wa-include src="https://shoelace.style/assets/examples/include.html"></wa-include>
```

## 示例

### 监听事件

当包含的文件成功加载时，会触发 `wa-load` 事件。你可以监听这个事件来为你的包含添加自定义加载逻辑。

如果请求失败，会触发 `wa-include-error` 事件。在这种情况下，`event.detail.status` 会包含请求的 HTTP 状态码，例如 404（未找到）。

```html
<wa-include src="https://shoelace.style/assets/examples/include.html"></wa-include>

<script>
  const include = document.querySelector('wa-include');

  include.addEventListener('wa-load', event => {
    if (event.eventPhase === Event.AT_TARGET) {
      console.log('成功');
    }
  });

  include.addEventListener('wa-include-error', event => {
    if (event.eventPhase === Event.AT_TARGET) {
      console.log('错误', event.detail.status);
    }
  });
</script>
```
