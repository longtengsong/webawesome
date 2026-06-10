---
title: Vue（版本 2）
description: 在 Vue 2 应用中使用 @SITE_NAME@ 的提示。
layout: page-outline
---

<wa-breadcrumb class="page-breadcrumbs">
  <wa-icon slot="separator" name="angle-right" variant="regular"></wa-icon>
  <wa-breadcrumb-item href="/docs/frameworks">框架集成</wa-breadcrumb-item>
  <wa-breadcrumb-item>{{ title }}</wa-breadcrumb-item>
</wa-breadcrumb>

Vue [完美支持](https://custom-elements-everywhere.com/#vue)自定义元素，因此您可以轻松地在 Vue 应用中使用 @SITE_NAME@。

:::info
这些说明适用于 Vue 2。如果您使用的是 Vue 3 及以上版本，请参阅 [Vue 3 说明](/frameworks/vue)。
:::

## 安装

要添加 @SITE_NAME@ 到您的 Vue 应用，请从 npm 安装该包。

```bash
npm install @awesome.me/webawesome
```

接下来，导入 @SITE_NAME@ 样式表，导入您需要的组件，然后开始使用 @SITE_NAME@！

```jsx
// main.js 或 main.ts
import '@awesome.me/webawesome/dist/styles/webawesome.css';
import '@awesome.me/webawesome/dist/components/button/button.js';
```

## 配置

您需要告诉 Vue 忽略 @SITE_NAME@ 组件。这非常简单，因为它们都以 `wa-` 开头。

```js
import Vue from 'vue';
import App from './App.vue';

Vue.config.ignoredElements = [/wa-/];

const app = new Vue({
  render: h => h(App)
});

app.$mount('#app');
```

现在您可以开始在应用中使用 @SITE_NAME@ 组件了！

## 使用

### 绑定复杂数据

当绑定复杂数据（如对象和数组）时，使用 `.prop` 修饰符使 Vue 将它们作为属性而非特性进行绑定。

```html
<wa-color-picker :swatches.prop="mySwatches" />
```

### 双向绑定

一个需要注意的问题是，目前[自定义元素不支持 v-model](https://github.com/vuejs/vue/issues/7830)，但您仍然可以手动实现双向绑定。

```html
<!-- ❌ 这不起作用 -->
<wa-input v-model="name"></wa-input>
<!-- ✅ 这有效，但稍微长一些 -->
<wa-input :value="name" @input="name = $event.target.value"></wa-input>
```

:::info
您正在使用 @SITE_NAME@ 和 Vue 2？[帮助我们改进此页面！](https://github.com/shoelace-style/webawesome/blob/next/packages/webawesome/docs/docs/frameworks/vue-2.md)
:::
