---
title: Intersection Observer
layout: component
category: Utilities
synonyms:
  - scroll spy
  - lazy load trigger
  - viewport observer
  - 滚动监听
  - 懒加载触发器
  - 视口观察者
use-cases:
  - infinite scroll
  - scroll tracking
  - element visibility
  - 无限滚动
  - 滚动追踪
  - 元素可见性
---

这个组件利用 [IntersectionObserver API](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver) 来跟踪它的直接子元素何时进入或离开指定的根元素。每当元素越过可见性阈值时，就会触发 `wa-intersect` 事件。

```html {.example}
<div id="intersection__overview">
  <wa-intersection-observer threshold="1" intersect-class="visible">
    <div class="box"><wa-icon name="lightbulb"></wa-icon></div>
  </wa-intersection-observer>
</div>

<small>滚动以查看元素在 100% 可见度时的相交</small>

<style>
  /* 容器样式 */
  #intersection__overview {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 300px;
    border: solid 2px var(--wa-color-surface-border);
    padding: 1rem;
    overflow-y: auto;

    /* 用于演示滚动的间隔 */
    &::before {
      content: '';
      height: 260px;
      flex-shrink: 0;
    }

    &::after {
      content: '';
      height: 260px;
      flex-shrink: 0;
    }

    /* 盒子样式 */
    .box {
      flex-shrink: 0;
      width: 120px;
      height: 120px;
      background-color: var(--wa-color-neutral-fill-normal);
      color: var(--wa-color-neutral-10);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-inline: auto;
      transition: all 50ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

      wa-icon {
        font-size: 3rem;
        stroke-width: 1px;
      }

      &.visible {
        background-color: var(--wa-color-brand-60);
        color: white;
      }
    }

    + small {
      display: block;
      text-align: center;
      margin-block-start: 1rem;
    }
  }
</style>
```

:::info
请记住，只有宿主元素的直接子元素会被监控。嵌套元素不会触发相交事件。
:::

## 使用示例

### 添加可观察内容

相交观察者只跟踪它的直接子元素。该组件使用 [`display: contents`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display#contents) 样式，这使得它可以与父容器的 flex 和 grid 布局无缝集成。

```html
<div style="display: flex; flex-direction: column;">
  <wa-intersection-observer>
    <div class="box">盒子 1</div>
    <div class="box">盒子 2</div>
    <div class="box">盒子 3</div>
  </wa-intersection-observer>
</div>
```

该组件在元素进入和退出根元素（默认是视口）时跟踪它们，并在状态变化时发出 `wa-intersect` 事件。该事件提供 `event.detail.entry`，一个包含相交详细信息的 [`IntersectionObserverEntry`](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserverEntry) 对象。

你可以通过 `entry.target` 识别触发元素。检查 `entry.isIntersecting` 以确定元素是进入还是退出视口。

```javascript
observer.addEventListener('wa-intersect', event => {
  const entry = event.detail.entry;

  if (entry.isIntersecting) {
    console.log('元素进入视口:', entry.target);
  } else {
    console.log('元素离开视口:', entry.target);
  }
});
```

### 设置自定义根元素

你可以通过将 `root` 属性分配给 [根元素的](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/root) ID 来观察特定容器内的相交。使用 `root-margin` 属性应用 [`rootMargin`](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/rootMargin) 来扩展或收缩观察区域。

```html
<div id="scroll-container">
  <wa-intersection-observer root="scroll-container" root-margin="50px 0px"> ... </wa-intersection-observer>
</div>
```

### 配置多个阈值

通过以空格分隔列表的形式提供多个 [`threshold`](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API#threshold) 值来跟踪不同的可见性百分比。

```html
<wa-intersection-observer threshold="0 0.25 0.5 0.75 1"> ... </wa-intersection-observer>
```

### 在相交时应用类

当直接子元素变得可见时，`intersect-class` 属性会自动切换指定的类。这支持纯 CSS 样式，无需 JavaScript 事件处理程序。

```html {.example}
<div id="intersection__classes">
  <wa-intersection-observer threshold="0.5" intersect-class="visible" root="intersection__classes">
    <div class="box fade">淡入</div>
    <div class="box slide">滑入</div>
    <div class="box scale">缩放 & 旋转</div>
    <div class="box bounce">弹跳</div>
  </wa-intersection-observer>
</div>

<small>滚动以查看元素在 50% 可见度时的过渡</small>

<style>
  /* 容器样式 */
  #intersection__classes {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 300px;
    border: solid 2px var(--wa-color-surface-border);
    padding: 1rem;
    overflow-y: auto;

    /* 用于演示滚动的间隔 */
    &::before {
      content: '';
      height: 260px;
      flex-shrink: 0;
    }

    &::after {
      content: '';
      height: 260px;
      flex-shrink: 0;
    }

    + small {
      display: block;
      text-align: center;
      margin-block-start: 1rem;
    }

    /* 共享盒子样式 */
    .box {
      flex-shrink: 0;
      width: 120px;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      opacity: 0;
      padding: 2rem;
      margin-inline: auto;

      /* 淡入 */
      &.fade {
        background: var(--wa-color-brand-fill-loud);
        color: var(--wa-color-brand-on-loud);
        transform: translateY(30px);
        transition: all 0.6s ease;

        &.visible {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* 滑入 */
      &.slide {
        background: var(--wa-color-brand-fill-loud);
        color: var(--wa-color-brand-on-loud);
        transform: translateX(-50px);
        transition: all 0.5s ease;

        &.visible {
          opacity: 1;
          transform: translateX(0);
        }
      }

      /* 缩放 */
      &.scale {
        background: var(--wa-color-brand-fill-loud);
        color: var(--wa-color-brand-on-loud);
        transform: scale(0.6) rotate(-15deg);
        transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        &.visible {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }
      }

      /* 弹跳进入和退出 */
      &.bounce {
        background: var(--wa-color-brand-fill-loud);
        color: var(--wa-color-brand-on-loud);
        opacity: 0;
        transform: scale(0.8);
        transition: none;

        &.visible {
          opacity: 1;
          transform: scale(1);
          animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        &:not(.visible) {
          animation: bounceOut 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
      }
    }
  }

  @keyframes bounceIn {
    0% {
      transform: scale(0.8);
    }
    40% {
      transform: scale(1.08);
    }
    65% {
      transform: scale(0.98);
    }
    80% {
      transform: scale(1.02);
    }
    90% {
      transform: scale(0.99);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes bounceOut {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    20% {
      transform: scale(1.02);
      opacity: 1;
    }
    40% {
      transform: scale(0.98);
      opacity: 0.8;
    }
    60% {
      transform: scale(1.05);
      opacity: 0.6;
    }
    80% {
      transform: scale(0.95);
      opacity: 0.3;
    }
    100% {
      transform: scale(0.8);
      opacity: 0;
    }
  }
</style>
```
