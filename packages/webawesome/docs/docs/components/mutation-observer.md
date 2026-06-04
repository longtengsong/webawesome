---
title: Mutation Observer
layout: component
category: Utilities
synonyms:
  - dom watcher
  - dom observer
  - change detector
  - DOM 观察者
  - DOM 监视器
  - 变更检测器
use-cases:
  - dom changes
  - attribute watcher
  - child list observer
  - DOM 变更
  - 属性监视器
  - 子列表观察
---

mutation observer 将通过 `wa-mutation` 事件报告它所包裹内容的变更。触发时，[MutationRecord](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationRecord) 对象的集合将附加到 `event.detail`，其中包含有关变更方式的信息。

```html {.example}
<div class="mutation-overview">
  <wa-mutation-observer attr="variant">
    <wa-button appearance="filled" variant="brand">点击以变更</wa-button>
  </wa-mutation-observer>

  <br />
  👆 点击按钮并观察控制台

  <script>
    const container = document.querySelector('.mutation-overview');
    const mutationObserver = container.querySelector('wa-mutation-observer');
    const button = container.querySelector('wa-button');
    const variants = ['brand', 'success', 'neutral', 'warning', 'danger'];
    let clicks = 0;

    // 更改按钮的 variant 属性
    button.addEventListener('click', () => {
      clicks++;
      button.setAttribute('variant', variants[clicks % variants.length]);
    });

    // 记录突变
    mutationObserver.addEventListener('wa-mutation', event => {
      console.log(event.detail);
    });
  </script>

  <style>
    .mutation-overview wa-button {
      margin-bottom: 1rem;
    }
  </style>
</div>
```

:::info
当你创建 mutation observer 时，你必须通过包含至少 `attr`、`child-list` 或 `char-data` 中的一个来指示它应该响应哪些变更。如果你没有指定这些属性中的至少一个，将不会发出突变事件。
:::

## 示例

### 子列表

使用 `child-list` 属性来监视被添加或删除的新子元素。

```html {.example}
<div class="mutation-child-list">
  <wa-mutation-observer child-list>
    <div class="buttons">
      <wa-button appearance="filled" variant="brand">添加按钮</wa-button>
    </div>
  </wa-mutation-observer>

  👆 添加和删除按钮并观察控制台

  <script>
    const container = document.querySelector('.mutation-child-list');
    const mutationObserver = container.querySelector('wa-mutation-observer');
    const buttons = container.querySelector('.buttons');
    const button = container.querySelector('wa-button[variant="brand"]');
    let i = 0;

    // 添加按钮
    button.addEventListener('click', () => {
      const button = document.createElement('wa-button');
      button.textContent = ++i;
      buttons.append(button);
    });

    // 删除按钮
    buttons.addEventListener('click', event => {
      const target = event.target.closest('wa-button:not([variant="brand"])');
      event.stopPropagation();

      if (target) {
        target.remove();
      }
    });

    // 记录突变
    mutationObserver.addEventListener('wa-mutation', event => {
      console.log(event.detail);
    });
  </script>

  <style>
    .mutation-child-list .buttons {
      display: flex;
      gap: 0.25rem;
      flex-wrap: wrap;
      margin-bottom: 1rem;
    }
  </style>
</div>
```
