---
title: Svelte
description: 在 Svelte 应用中使用 @SITE_NAME@ 的提示。
layout: page-outline
---

<wa-breadcrumb class="page-breadcrumbs">
  <wa-icon slot="separator" name="angle-right" variant="regular"></wa-icon>
  <wa-breadcrumb-item href="/docs/frameworks">框架集成</wa-breadcrumb-item>
  <wa-breadcrumb-item>{{ title }}</wa-breadcrumb-item>
</wa-breadcrumb>

Svelte [完美支持](https://custom-elements-everywhere.com/#svelte)自定义元素，因此您可以轻松地在 Svelte 应用中使用 @SITE_NAME@。

## 安装

要添加 @SITE_NAME@ 到您的 Svelte 应用，请从 npm 安装该包。

```bash
npm install @awesome.me/webawesome
```

## 使用

接下来，导入 @SITE_NAME@ 样式表，导入您需要的组件，然后开始使用 @SITE_NAME@！

```jsx
<!-- app.html -->
<script>
  import '@awesome.me/webawesome/dist/styles/webawesome.css';
  import '@awesome.me/webawesome/dist/components/callout/callout.js'
  import '@awesome.me/webawesome/dist/components/input/input.js';

  let message = $state('')
</script>

<h1>实时编辑</h1>

<wa-input label="消息" value={message} oninput={event => message = event.target.value}></wa-input>

<wa-callout>
  <wa-icon slot="icon" name="info-circle"></wa-icon>
  {message}
</wa-callout>
```

### 双向绑定

一个需要注意的问题是，目前 Svelte 仅在 `<input>`、`<textarea>` 和 `<select>` 中支持 `bind:value` 指令，但您仍然可以手动实现双向绑定。

```jsx
// ❌ 这些不起作用
<wa-input bind:value="name"></wa-input>

<wa-select bind:value="job">
  <wa-option value="designer">设计师</wa-option>
  <wa-option value="developer">开发者</wa-option>
</wa-select>

// ✅ 这些稍微长一些，但有效
<wa-input value={name} oninput={event => name = event.target.value}></wa-input>

<wa-select value={job} oninput={event => job = event.target.value}>
  <wa-option value="designer">设计师</wa-option>
  <wa-option value="developer">开发者</wa-option>
</wa-select>
```

### 插槽

@SITE_NAME@/Web 组件中的插槽在功能上与 Svelte 中的基本插槽相同。可以使用 `slot` 属性后跟插槽名称将插槽分配给元素。

以下是一个示例：

```jsx
<wa-drawer label="抽屉" placement="start" class="drawer-placement-start" bind:open={drawerIsOpen}>
  此抽屉从起始侧滑入。
  <div slot="footer">
    <wa-button variant="primary" onclick={() => (drawerIsOpen = false)}>
      关闭
    </wa-button>
  </div>
</wa-drawer>
```

:::info
您正在使用 @SITE_NAME@ 和 Svelte？[帮助我们改进此页面！](https://github.com/shoelace-style/webawesome/blob/next/packages/webawesome/docs/docs/frameworks/svelte.md)
:::
