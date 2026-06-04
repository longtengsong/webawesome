---
title: 动画
layout: component
category: Utilities
synonyms:
  - motion
  - transition
  - keyframes
  - animate
  - 动效
  - 过渡
  - 关键帧
use-cases:
  - entrance animation
  - exit animation
  - attention seeker
  - scroll animation
  - 入场动画
  - 出场动画
  - 吸引注意力
  - 滚动动画
---

要为元素添加动画，请将其包裹在 `<wa-animation>` 中并设置动画 `name`。动画在你添加 `play` 属性之前不会开始。请参阅[属性表](#properties)以获取所有动画选项的列表。

```html {.example}
<div class="animation-overview">
  <wa-animation name="bounce" duration="2000" play><div class="box"></div></wa-animation>
  <wa-animation name="jello" duration="2000" play><div class="box"></div></wa-animation>
  <wa-animation name="heartBeat" duration="2000" play><div class="box"></div></wa-animation>
  <wa-animation name="flip" duration="2000" play><div class="box"></div></wa-animation>
</div>

<style>
  .animation-overview .box {
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: var(--wa-color-brand-fill-loud);
    margin: 1.5rem;
  }
</style>
```

:::info
动画只会应用于 `<wa-animation>` 中找到的第一个子元素。
:::

## 示例

### 动画与缓动

此示例演示了所有内置动画和缓动。动画基于流行的 [Animate.css](https://animate.style/) 库中的动画。

```html {.example}
<div class="animation-sandbox">
  <wa-animation name="bounce" easing="ease-in-out" duration="2000" play>
    <div class="box"></div>
  </wa-animation>

  <div class="controls">
    <wa-select label="动画" value="bounce"></wa-select>
    <wa-select label="缓动" value="linear"></wa-select>
    <wa-input label="播放速率" type="number" min="0" max="2" step=".25" value="1"></wa-input>
  </div>
</div>

<script type="module">
  import { getAnimationNames, getEasingNames } from '/dist/webawesome.js';

  const container = document.querySelector('.animation-sandbox');
  const animation = container.querySelector('wa-animation');
  const animationName = container.querySelector('.controls wa-select:nth-child(1)');
  const easingName = container.querySelector('.controls wa-select:nth-child(2)');
  const playbackRate = container.querySelector('wa-input[type="number"]');
  const animations = getAnimationNames();
  const easings = getEasingNames();

  animations.map(name => {
    const option = Object.assign(document.createElement('wa-option'), {
      textContent: name,
      value: name,
    });
    animationName.appendChild(option);
  });

  easings.map(name => {
    const option = Object.assign(document.createElement('wa-option'), {
      textContent: name,
      value: name,
    });
    easingName.appendChild(option);
  });

  animationName.addEventListener('change', () => (animation.name = animationName.value));
  easingName.addEventListener('change', () => (animation.easing = easingName.value));
  playbackRate.addEventListener('input', () => (animation.playbackRate = playbackRate.value));
</script>

<style>
  .animation-sandbox .box {
    width: 100px;
    height: 100px;
    background-color: var(--wa-color-brand-fill-loud);
  }

  .animation-sandbox .controls {
    max-width: 300px;
    margin-top: 2rem;
  }

  .animation-sandbox .controls wa-select {
    margin-bottom: 1rem;
  }
</style>
```

```html {.example}
<div class="animation-sandbox-combobox">
  <wa-animation name="bounce" easing="ease-in-out" duration="2000" play>
    <div class="box"></div>
  </wa-animation>

  <div class="controls">
    <wa-combobox label="动画" placeholder="选择动画..."></wa-combobox>
    <wa-combobox label="缓动" placeholder="选择缓动..."></wa-combobox>
    <wa-input label="播放速率" type="number" min="0" max="2" step=".25" value="1"></wa-input>
  </div>
</div>

<script type="module">
  import { getAnimationNames, getEasingNames } from '/dist/webawesome.js';

  await customElements.whenDefined('wa-combobox');
  await customElements.whenDefined('wa-option');

  const container = document.querySelector('.animation-sandbox-combobox');
  const animation = container.querySelector('wa-animation');
  const animationName = container.querySelector('.controls wa-combobox:nth-child(1)');
  const easingName = container.querySelector('.controls wa-combobox:nth-child(2)');
  const playbackRate = container.querySelector('wa-input[type="number"]');
  const animations = getAnimationNames();
  const easings = getEasingNames();

  animations.forEach(name => {
    const option = document.createElement('wa-option');
    option.value = name;
    option.textContent = name;
    animationName.append(option);
  });

  easings.forEach(name => {
    const option = document.createElement('wa-option');
    option.value = name;
    option.textContent = name;
    easingName.append(option);
  });

  await Promise.all([animationName.updateComplete, easingName.updateComplete]);

  animationName.value = 'bounce';
  easingName.value = 'ease-in-out';

  animationName.addEventListener('change', () => (animation.name = animationName.value));
  easingName.addEventListener('change', () => (animation.easing = easingName.value));
  playbackRate.addEventListener('input', () => (animation.playbackRate = playbackRate.value));
</script>

<style>
  .animation-sandbox-combobox .box {
    width: 100px;
    height: 100px;
    background-color: var(--wa-color-brand-fill-loud);
  }

  .animation-sandbox-combobox .controls {
    max-width: 300px;
    margin-top: 2rem;
  }

  .animation-sandbox-combobox .controls wa-combobox {
    margin-bottom: 1rem;
  }
</style>
```

### 使用交叉观察器

使用[交叉观察器](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)在元素进入或离开视口时控制动画。例如，在屏幕中滚动下方的框。当框离开视口时，动画会停止，每次进入视口时重新开始。

```html {.example}
<div class="animation-scroll">
  <wa-animation name="jackInTheBox" duration="2000" iterations="1"><div class="box"></div></wa-animation>
</div>

<script>
  const container = document.querySelector('.animation-scroll');
  const animation = container.querySelector('wa-animation');
  const box = animation.querySelector('.box');

  // 观察框进入和离开视口。注意我们正在观察的是框，而不是动画元素！
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      // 当框进入视口时开始动画
      animation.play = true;
    } else {
      animation.play = false;
      animation.currentTime = 0;
    }
  });
  observer.observe(box);
</script>

<style>
  .animation-scroll .box {
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: var(--wa-color-brand-fill-loud);
  }
</style>
```

### 自定义关键帧格式

提供你自己的[关键帧格式](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)来构建自定义动画。

```html {.example}
<div class="animation-keyframes">
  <wa-animation easing="ease-in-out" duration="2000" play>
    <div class="box"></div>
  </wa-animation>
</div>

<script>
  const animation = document.querySelector('.animation-keyframes wa-animation');
  animation.keyframes = [
    {
      offset: 0,
      easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
      fillMode: 'both',
      transformOrigin: 'center center',
      transform: 'rotate(0)',
    },
    {
      offset: 1,
      easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
      fillMode: 'both',
      transformOrigin: 'center center',
      transform: 'rotate(90deg)',
    },
  ];
</script>

<style>
  .animation-keyframes .box {
    width: 100px;
    height: 100px;
    background-color: var(--wa-color-brand-fill-loud);
  }
</style>
```

### 按需播放动画

动画在你应用 `play` 属性之前不会播放。你可以最初省略它，然后按需应用，例如在用户交互之后。在此示例中，每次单击按钮时按钮会动画一次。

```html {.example}
<div class="animation-form">
  <wa-animation name="rubberBand" duration="1000" iterations="1">
    <wa-button appearance="filled" variant="brand">点击我</wa-button>
  </wa-animation>
</div>

<script>
  const container = document.querySelector('.animation-form');
  const animation = container.querySelector('wa-animation');
  const button = container.querySelector('wa-button');

  button.addEventListener('click', () => {
    animation.play = true;
  });
</script>
```
