---
title: 面包屑
layout: component
category: Navigation
synonyms:
  - breadcrumbs
  - navigation trail
  - path
  - 导航路径
  - 路径
use-cases:
  - wayfinding
  - site navigation
  - hierarchy navigation
  - 寻路
  - 站点导航
  - 层级导航
---

面包屑通常放置在页面的主要内容之前，最后显示当前页面，以指示用户在导航中的位置。

```html {.example}
<wa-breadcrumb>
  <wa-breadcrumb-item>目录</wa-breadcrumb-item>
  <wa-breadcrumb-item>服装</wa-breadcrumb-item>
  <wa-breadcrumb-item>女装</wa-breadcrumb-item>
  <wa-breadcrumb-item>衬衫和上衣</wa-breadcrumb-item>
</wa-breadcrumb>
```

## 示例

### 面包屑链接

默认情况下，面包屑项被渲染为按钮，因此你可以使用它们来导航单页应用。在这种情况下，你需要添加事件监听器来处理点击。

对于网站，你可能希望使用链接代替。你可以通过向任何面包屑项应用 `href` 属性来将其设为链接。现在，当用户激活它时，他们会被带到相应的页面——不需要事件监听器。

最后一项代表当前页面。使用 `href=""` 使其指向自身——`<wa-breadcrumb>` 会为你使用 `aria-current="page"` 标记它并将其样式设为非交互式。

```html {.example}
<wa-breadcrumb>
  <wa-breadcrumb-item href="https://example.com/home">首页</wa-breadcrumb-item>

  <wa-breadcrumb-item href="https://example.com/home/services">我们的服务</wa-breadcrumb-item>

  <wa-breadcrumb-item href="https://example.com/home/services/digital">数字媒体</wa-breadcrumb-item>

  <wa-breadcrumb-item href="">网页设计</wa-breadcrumb-item>
</wa-breadcrumb>
```

### 开始和结束装饰

使用 `start` 和 `end` 插槽在任何面包屑项旁边添加展示元素，如 `<wa-icon>`。

```html {.example}
<wa-breadcrumb>
  <wa-breadcrumb-item>
    <wa-icon slot="start" name="house"></wa-icon>
    首页
  </wa-breadcrumb-item>
  <wa-breadcrumb-item>文章</wa-breadcrumb-item>
  <wa-breadcrumb-item>
    <wa-icon slot="end" name="umbrella-beach"></wa-icon>
    旅行
  </wa-breadcrumb-item>
</wa-breadcrumb>
```

### 自定义分隔符

使用 `separator` 插槽来更改面包屑项之间的分隔符。图标效果很好，但你也可以使用文本或图片。

```html {.example}
<wa-breadcrumb>
  <wa-icon slot="separator" name="angles-right" variant="solid"></wa-icon>
  <wa-breadcrumb-item>第一项</wa-breadcrumb-item>
  <wa-breadcrumb-item>第二项</wa-breadcrumb-item>
  <wa-breadcrumb-item>第三项</wa-breadcrumb-item>
</wa-breadcrumb>

<br />

<wa-breadcrumb>
  <wa-icon slot="separator" name="arrow-right" variant="solid"></wa-icon>
  <wa-breadcrumb-item>第一项</wa-breadcrumb-item>
  <wa-breadcrumb-item>第二项</wa-breadcrumb-item>
  <wa-breadcrumb-item>第三项</wa-breadcrumb-item>
</wa-breadcrumb>

<br />

<wa-breadcrumb>
  <span slot="separator">/</span>
  <wa-breadcrumb-item>第一项</wa-breadcrumb-item>
  <wa-breadcrumb-item>第二项</wa-breadcrumb-item>
  <wa-breadcrumb-item>第三项</wa-breadcrumb-item>
</wa-breadcrumb>
```

### 自定义颜色

面包屑标签与 `<wa-breadcrumb-item>` 上设置的颜色相匹配。`start`、`end` 和 `separator` 插槽中的内容可以使用 CSS 部件进行样式设置。

```html {.example}
<style>
  .redcrumbs wa-breadcrumb-item {
    color: firebrick;
  }
  .redcrumbs wa-breadcrumb-item:last-of-type {
    color: crimson;
  }
  .redcrumbs wa-breadcrumb-item::part(separator) {
    color: pink;
  }
  .redcrumbs wa-breadcrumb-item::part(start),
  .redcrumbs wa-breadcrumb-item::part(end) {
    color: currentColor;
  }
</style>
<wa-breadcrumb class="redcrumbs">
  <wa-breadcrumb-item>
    <wa-icon slot="start" name="house" variant="solid"></wa-icon>
    首页
  </wa-breadcrumb-item>
  <wa-breadcrumb-item>文章</wa-breadcrumb-item>
  <wa-breadcrumb-item>旅行</wa-breadcrumb-item>
</wa-breadcrumb>
```

### 与下拉菜单一起使用

下拉菜单可以放置在默认插槽中以提供额外选项。

```html {.example}
<wa-breadcrumb>
  <wa-breadcrumb-item>首页</wa-breadcrumb-item>
  <wa-breadcrumb-item>
    <wa-dropdown>
      <wa-button slot="trigger" size="s" appearance="filled" pill>
        <wa-icon label="更多选项" name="ellipsis" variant="solid"></wa-icon>
      </wa-button>
      <wa-dropdown-item type="checkbox" checked>网页设计</wa-dropdown-item>
      <wa-dropdown-item type="checkbox">网页开发</wa-dropdown-item>
      <wa-dropdown-item type="checkbox">营销</wa-dropdown-item>
    </wa-dropdown>
  </wa-breadcrumb-item>
  <wa-breadcrumb-item>我们的服务</wa-breadcrumb-item>
  <wa-breadcrumb-item>数字媒体</wa-breadcrumb-item>
</wa-breadcrumb>
```

或者，你可以将下拉菜单放置在 `start` 或 `end` 插槽中。

```html {.example}
<wa-breadcrumb>
  <wa-breadcrumb-item>首页</wa-breadcrumb-item>
  <wa-breadcrumb-item>我们的服务</wa-breadcrumb-item>
  <wa-breadcrumb-item>数字媒体</wa-breadcrumb-item>
  <wa-breadcrumb-item>
    网页设计
    <wa-dropdown slot="end">
      <wa-button slot="trigger" size="s" appearance="filled" pill>
        <wa-icon label="更多选项" name="ellipsis" variant="solid"></wa-icon>
      </wa-button>
      <wa-dropdown-item type="checkbox" checked>网页设计</wa-dropdown-item>
      <wa-dropdown-item type="checkbox">网页开发</wa-dropdown-item>
      <wa-dropdown-item type="checkbox">营销</wa-dropdown-item>
    </wa-dropdown>
  </wa-breadcrumb-item>
</wa-breadcrumb>
```
