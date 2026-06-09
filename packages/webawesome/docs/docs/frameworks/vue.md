---
title: Vue 3
description: 在 Vue 3 应用中使用 Web Awesome 的提示。
layout: page-outline
---

<wa-breadcrumb class="page-breadcrumbs">
  <wa-icon slot="separator" name="angle-right" variant="regular"></wa-icon>
  <wa-breadcrumb-item href="/docs/frameworks">框架集成</wa-breadcrumb-item>
  <wa-breadcrumb-item>{{ title }}</wa-breadcrumb-item>
</wa-breadcrumb>

Vue [完美支持](https://custom-elements-everywhere.com/#vue)自定义元素，因此您可以轻松地在 Vue 应用中使用 Web Awesome。

:::info
这些说明适用于 Vue 3 及以上版本。如果您使用的是 Vue 2，请参阅 [Vue 2 说明](/frameworks/vue-2)。
:::

## 安装

要添加 Web Awesome 到您的 Vue 应用，请从 npm 安装该包。

```bash
npm install @awesome.me/webawesome
```

接下来，导入 Web Awesome 样式表，导入您需要的组件，然后开始使用 Web Awesome！

```jsx
// main.js 或 main.ts
import '@awesome.me/webawesome/dist/styles/webawesome.css';
import '@awesome.me/webawesome/dist/components/button/button.js';
```

## 配置

如果您尚未配置 Vue.js 项目以支持自定义元素/Web 组件，请根据您的项目类型 [按照这里的说明](https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue) 操作，以确保您的项目在遇到自定义元素时不会抛出错误。

现在您可以开始在应用中使用 Web Awesome 组件了！

## 类型

一旦您为您的应用配置了自定义元素支持，您应该能够在不引发任何错误的情况下使用 Shoelace。不幸的是，这并不会将自定义元素注册为与 Vue 构建的组件相同的行为。要为您组件提供自动完成信息和类型安全，您可以将 Shoelace Vue 类型导入到您的 `tsconfig.json` 中，以在您的标准 Vue 和 JSX 模板中获得更好的集成。

```json
{
  "compilerOptions": {
    "types": ["@awesome.me/webawesome/dist/types/vue/index.d.ts"]
  }
}
```

## 使用

### 二维码生成器示例

```html
<template>
  <div class="container">
    <h1>二维码生成器</h1>

    <wa-input maxlength="255" clearable label="值" v-model="qrCode"></wa-input>

    <wa-qr-code :value="qrCode"></wa-qr-code>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import '@awesome.me/webawesome/dist/components/qr-code/qr-code.js';
  import '@awesome.me/webawesome/dist/components/input/input.js';

  const qrCode = ref();
</script>

<style>
  .container {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
```

### 绑定复杂数据

当绑定复杂数据（如对象和数组）时，使用 `.prop` 修饰符使 Vue 将它们作为属性而非特性进行绑定。

```html
<wa-color-picker :swatches.prop="mySwatches" />
```

### 双向绑定

一个需要注意的问题是，目前自定义元素的 [v-model 支持程度各不相同](https://github.com/vuejs/vue/issues/7830)，但您仍然可以手动实现双向绑定。

```html
<!-- ❌ 这有时有效（Vue 3 中 v-model 在内部有所变化） -->
<wa-input v-model="name"></wa-input>
<!-- ✅ 这应该始终有效，但稍微长一些 -->
<wa-input :value="name" @input="name = $event.target.value"></wa-input>
```

### 插槽

Web Awesome/Web 组件中的插槽在功能上与 Vue 中的基本插槽相同。可以使用 `slot` 属性后跟插槽名称将插槽分配给元素。

以下是一个示例：

```html
<wa-drawer label="抽屉" placement="start" class="drawer-placement-start" :open="drawerIsOpen">
  此抽屉从起始侧滑入。
  <div slot="footer">
    <wa-button variant="primary" @click="drawerIsOpen = false">关闭</wa-button>
  </div>
</wa-drawer>
```

有关更多关于插槽以及 Web 组件限制的信息，请查阅 Vue 文档：<https://vuejs.org/guide/extras/web-components#slots>

:::info
您正在使用 Web Awesome 和 Vue？[帮助我们改进此页面！](https://github.com/shoelace-style/webawesome/blob/next/packages/webawesome/docs/docs/frameworks/vue.md)
:::
