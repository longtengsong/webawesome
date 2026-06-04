---
title: 卡片
layout: component
category: Layout
synonyms:
  - tile
  - panel
  - content box
  - surface
  - 面板
  - 内容块
use-cases:
  - product card
  - info card
  - media card
  - feature card
  - 产品卡片
  - 信息卡片
---

```html {.example}
<wa-card class="card-overview">
  <img
    slot="media"
    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    alt="一只小猫耐心地坐在陶土花盆和装饰性草丛之间。"
  />

  <strong>小手套</strong><br />
  这只小猫既可爱又调皮。今天就带它回家吧！<br />
  <small class="wa-caption-s">6周大</small>

  <wa-button slot="footer" variant="brand" pill>更多信息</wa-button>
  <wa-rating slot="footer-actions" label="评分"></wa-rating>
</wa-card>

<style>
  .card-overview {
    width: 300px;
  }
</style>
```

## 示例

### 基础卡片

基础卡片不是很令人兴奋，但它们可以显示你想要的任何内容。

```html {.example}
<wa-card class="card-basic">
  这只是一个基础卡片。没有媒体，没有页眉，也没有页脚。只有你的内容。
</wa-card>

<style>
  .card-basic {
    max-width: 300px;
  }
</style>
```

### 带页眉的卡片

页眉可用于显示标题等内容。
如果使用 SSR，你还需要使用 `with-header` 属性来为卡片添加页眉（如果不使用，则会自动添加）。

```html {.example}
<wa-card class="card-header">
  <h3 slot="header">页眉标题</h3>
  这个卡片有一个页眉。你可以在里面放各种各样的东西！
  <wa-button appearance="plain" slot="header-actions">
    <wa-icon name="gear" variant="solid" label="设置"></wa-icon>
  </wa-button>
</wa-card>

<style>
  .card-header {
    max-width: 300px;
  }

  .card-header h3 {
    margin: 0;
  }
</style>
```

### 带页脚的卡片

页脚可用于显示操作、摘要或其他相关内容。
如果使用 SSR，你还需要使用 `with-footer` 属性来为卡片添加页脚（如果不使用，则会自动添加）。

```html {.example}
<wa-card class="card-footer">
  这个卡片有一个页脚。你可以在里面放各种各样的东西！

  <wa-rating slot="footer"></wa-rating>

  <wa-button slot="footer-actions" variant="brand">预览</wa-button>
</wa-card>

<style>
  .card-footer {
    max-width: 300px;
  }
</style>
```

### 媒体

卡片媒体显示在卡片顶部，并会拉伸以适应。
如果使用 SSR，你还需要使用 `with-media` 属性来为卡片添加媒体部分（如果不使用，则会自动添加）。

```html {.example}
<div class="wa-grid">
  <wa-card class="card-media">
    <div slot="media" class="wa-frame:landscape">
      <img
        src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        alt="一只小猫在托盘上向相机走来。"
      />
    </div>
    这个卡片有一张小猫在托盘上行走的图片。
  </wa-card>
  <wa-card class="card-media">
    <video slot="media" controls>
      <source src="https://uploads.webawesome.com/dog-with-glasses.mp4" />
      <p>你的浏览器不支持 HTML 视频</p>
    </video>
    这个卡片有一只戴眼镜的狗的视频。
  </wa-card>
</div>

<style>
  .card-media {
    max-width: 300px;
  }
</style>
```

### 外观

使用 `appearance` 属性来更改卡片的视觉外观。

```html {.example}
<div class="wa-grid">
  <wa-card>
    <img
      slot="media"
      src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
      alt="一只小猫耐心地坐在陶土花盆和装饰性草丛之间。"
    />
    轮廓（默认）
  </wa-card>
  {% for appearance in ['filled-outlined', 'plain', 'filled', 'accent'] -%}
  <wa-card appearance="{{ appearance }}">
    <img
      slot="media"
      src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
      alt="一只小猫耐心地坐在陶土花盆和装饰性草丛之间。"
    />
    {{ appearance | capitalize }}
  </wa-card>
  {%- endfor %}
</div>
```

### 方向

将 `orientation` 属性设置为 `horizontal` 以创建具有水平并排布局的卡片。确保为媒体插槽设置宽度或最大宽度。水平卡片目前不包含页眉和页脚插槽。

:::info
`actions` 插槽仅在水平方向上可用
:::

```html {.example}
<div class="wa-grid">
  <wa-card orientation="horizontal" class="horizontal-card">
    <img
      slot="media"
      src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
      alt="一只小猫耐心地坐在陶土花盆和装饰性草丛之间。"
    />
    这个卡片有水平方向，媒体、正文和操作并排排列。
    <wa-button slot="actions" variant="neutral" appearance="plain"
      ><wa-icon name="ellipsis" label="操作"></wa-icon
    ></wa-button>
  </wa-card>
</div>

<style>
  .horizontal-card {
    img[slot='media'] {
      max-width: 300px;
    }
  }
</style>
```
