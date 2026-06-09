---
title: Markdown
layout: component
category: Utilities
synonyms:
  - md
  - markdown renderer
  - rich text
  - 标记语言渲染器
  - 富文本
use-cases:
  - markdown display
  - markdown preview
  - content rendering
  - markdown 显示
  - markdown 预览
  - 内容渲染
---

markdown 组件使用 [Marked](https://marked.js.org/) 库将原始 markdown 转换为渲染后的 HTML。缩进会自动处理。你可以在任何深度嵌套你的 markdown 以匹配周围的 HTML 结构，在解析之前会剥离公共前导空格。

```html {.example}
<wa-markdown>
  <script type="text/markdown">
    ## 开始使用

    这里是一个带有 **粗体**、*斜体* 和 `内联代码` 的快速概述。

    - 安装包
    - 导入组件
    - 开始编写 markdown
  </script>
</wa-markdown>
```


:::info
由于内容是在客户端渲染的，搜索引擎爬虫无法看到它，在 JavaScript 加载之前它也不可用。这使得它不适合 SEO 关键内容，如登录页面和博客文章。它最适合原型设计、仪表板、管理面板以及其他不关注搜索索引的场景。
:::

:::warning
**不要将此组件与未经过滤的用户输入一起使用。** Markdown 会原样解析，没有经过净化，因此渲染不受信任的内容可能导致 XSS 漏洞。
:::

## 示例

### 提供内容

Markdown 必须放在 `<script type="text/markdown">` 元素内，该元素必须是 markdown 组件的直接子元素。（需要这个脚本是为了防止浏览器解析内容。）渲染的输出放在光 DOM 中，在这里它会继承你页面的样式。

```html
<wa-markdown>
  <script type="text/markdown">
    带有 `<尖括号>` 和 **格式** 的 Markdown 不会被解析为 HTML。
  </script>
</wa-markdown>
```

在后台使用 [Marked](https://marked.js.org/) 库来渲染 markdown。Marked 支持 [GitHub Flavored Markdown](https://github.github.com/gfm/) (GFM) 和 [CommonMark](https://commonmark.org/) 规范。这包括标题、粗体、斜体、链接、图像、列表、块引用、代码块、表格、任务列表、删除线和自动链接。有关支持的语法的完整分解，请参阅 [Marked 文档](https://marked.js.org/#specifications)。

### 空白字符规范化

脚本内部的缩进会在 markdown 解析器看到它之前自动规范化。这让你可以缩进内容以匹配周围的 HTML，而不会将其视为代码块。规范化过程：

1. 根据配置的制表位宽度将前导制表符转换为空格（默认：4）
2. 从开头和结尾裁剪空白行
3. 确定所有非空行共享的最小缩进
4. 从每行中删除该公共前缀

这意味着你可以在任何缩进级别编写 markdown，并且它会正确渲染。即使内容缩进 8 个空格以匹配 HTML 结构，输出也会渲染得好像根本没有额外的缩进一样。

```html {.example .no-edit}
<wa-markdown>
  <script type="text/markdown">
            ## 深度缩进

            尽管在源文件中该内容被大量缩进，
            但在解析之前会剥离共享的空格。

                保留具有超出公共前缀额外
                缩进的行，例如这个代码块。
  </script>
</wa-markdown>
```

对于使用制表符缩进的源文件，使用 `tab-size` 属性调整制表位宽度。

```html
<wa-markdown tab-size="2">
  <script type="text/markdown">
    ...
  </script>
</wa-markdown>
```

### 格式化功能

Marked 支持的所有标准 markdown 格式都可用，包括标题、列表、块引用、代码块、链接和图像。

```html {.example .no-edit}
<wa-markdown>
  <script type="text/markdown">
    ## 功能概述

    设置项目的步骤：

    1. 克隆仓库
    2. 安装依赖
    3. 运行开发服务器

    一个相关的引用：

    > "简单是极致的复杂。" — 列奥纳多·达·芬奇

    以及一个自动链接：<https://developer.mozilla.org>
  </script>
</wa-markdown>
```

### 配置 Marked

所有 `<wa-markdown>` 实例共享单个 [Marked](https://marked.js.org/using_advanced) 实例。你可以通过任何 `<wa-markdown>` 元素的 `marked` 属性访问它。进行更改后，调用 `WaMarkdown.updateAll()` 来重新渲染每个已连接的实例。

```html {.example .no-edit}
<wa-markdown id="markdown__config">
  <script type="text/markdown">
    访问 https://developer.mozilla.org 获取文档。
  </script>
</wa-markdown>

<script type="module">
  await customElements.whenDefined('wa-markdown');
  const md = document.getElementById('markdown__config');

  await new Promise(requestAnimationFrame);

  // 自定义链接渲染器以在新标签页中打开链接
  const renderer = {
    link(href, title, text) {
      const titleAttr = title ? ` title="${title}"` : '';
      return `<a href="${href}"${titleAttr} target="_blank" rel="noopener">${text}</a>`;
    }
  };

  md.marked.use({ renderer });
  md.renderMarkdown();
</script>
```

:::info
Marked 实例在所有 `<wa-markdown>` 元素之间共享。如果你希望页面上的每个实例都采用新配置，请调用 `WaMarkdown.updateAll()` 而不是在单个元素上调用 `renderMarkdown()`。
:::

### 编写自定义 Marked 插件

可以通过任何元素的 `marked` 属性应用自定义 [Marked 扩展](https://marked.js.org/using_advanced#extensions)。下面的示例添加了对 `==highlight==` 语法的支持，将匹配的文本包裹在 `<mark>` 标签中。

```html {.example .no-edit}
<wa-markdown id="markdown__plugin">
  <script type="text/markdown">
    这段文本中间有一个 ==高亮短语==。
  </script>
</wa-markdown>

<script type="module">
  await customElements.whenDefined('wa-markdown');
  const md = document.getElementById('markdown__plugin');

  const highlight = {
    extensions: [{
      name: 'highlight',
      level: 'inline',
      start(src) { return src.indexOf('=='); },
      tokenizer(src) {
        const match = src.match(/^==([^=]+)==/);
        if (match) {
          return {
            type: 'highlight',
            raw: match[0],
            text: match[1]
          };
        }
      },
      renderer(token) {
        return `<mark>${token.text}</mark>`;
      }
    }]
  };

  md.marked.use(highlight);
  md.renderMarkdown();
</script>
```

### 动态更新内容

当脚本元素首次被插槽时，组件会自动解析和渲染。它不会监视脚本内容的后续更改。要在修改源后重新渲染，请更新脚本的 `textContent` 并调用 `renderMarkdown()`。

```html {.example .no-edit}
<div id="markdown__dynamic">
  <wa-markdown id="markdown__dynamic-md">
    <script type="text/markdown">
      点击按钮交换此内容。
    </script>
  </wa-markdown>
  <br>
  <wa-button>更新内容</wa-button>
</div>

<script type="module">
  await customElements.whenDefined('wa-markdown');
  const md = document.getElementById('markdown__dynamic-md');
  const button = document.querySelector('#markdown__dynamic wa-button');
  const script = md.querySelector('script[type="text/markdown"]');

  button.addEventListener('click', () => {
    script.textContent = '## 新鲜内容\n\n这是通过调用 `renderMarkdown()` **交换的**。';
    md.renderMarkdown();
  });
</script>
```

<!-- 演示样式 -->
<style>
  wa-markdown {
    h1,
    h2 {
      margin-block-start: 0;
    }
  }
</style>
