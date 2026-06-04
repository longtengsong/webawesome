---
title: 分割面板
layout: component
category: Layout
synonyms:
  - resizable panels
  - pane splitter
  - split view
  - splitter
  - 可调整大小的面板
  - 面板分割器
  - 分割视图
use-cases:
  - code editor layout
  - side by side
  - resizable columns
  - 代码编辑器布局
  - 并排显示
  - 可调整列宽
---

```html {.example}
<wa-split-panel>
  <div
    slot="start"
    style="height: 200px; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    开始
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    结束
  </div>
</wa-split-panel>
```

## 示例

### 初始位置

要设置初始位置，使用 `position` 属性。如果没有提供位置，默认将使用可用空间的 50%。

```html {.example}
<wa-split-panel position="75">
  <div
    slot="start"
    style="
      height: 200px;
      background: var(--wa-color-surface-lowered);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    "
  >
    开始
  </div>
  <div
    slot="end"
    style="
      height: 200px;
      background: var(--wa-color-surface-lowered);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    "
  >
    结束
  </div>
</wa-split-panel>
```

### 像素初始位置

要以像素而不是百分比设置初始位置，使用 `position-in-pixels` 属性。

```html {.example}
<wa-split-panel position-in-pixels="150">
  <div
    slot="start"
    style="height: 200px; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    开始
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    结束
  </div>
</wa-split-panel>
```

### 方向

设置 `orientation` 属性为 `vertical` 并提供高度，以垂直方向渲染分割面板，其中开始和结束面板堆叠排列。

```html {.example}
<wa-split-panel orientation="vertical" style="height: 400px;">
  <div
    slot="start"
    style="height: 100%; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    开始
  </div>
  <div
    slot="end"
    style="height: 100%; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    结束
  </div>
</wa-split-panel>
```

### 吸附

要在拖动时将面板吸附到特定位置，添加带有一个或多个空格分隔值的 `snap` 属性。值必须以像素或百分比表示。例如，要在 `100px` 和 `50%` 处吸附面板，使用 `snap="100px 50%"`。还可以使用 `snap-threshold` 属性自定义在吸附之前分割器必须接近的距离。

```html {.example}
<div class="split-panel-snapping">
  <wa-split-panel snap="100px 50%">
    <div
      slot="start"
      style="height: 200px; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden;"
    >
      开始
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden;"
    >
      结束
    </div>
  </wa-split-panel>

  <div class="split-panel-snapping-dots"></div>
</div>

<style>
  .split-panel-snapping {
    position: relative;
  }

  .split-panel-snapping-dots::before,
  .split-panel-snapping-dots::after {
    content: '';
    position: absolute;
    bottom: -12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--wa-color-neutral-fill-loud);
    transform: translateX(-3px);
  }

  .split-panel-snapping-dots::before {
    left: 100px;
  }

  .split-panel-snapping-dots::after {
    left: 50%;
  }
</style>
```

### 禁用

添加 `disabled` 属性以防止分割器被重新定位。

```html {.example}
<wa-split-panel disabled>
  <div
    slot="start"
    style="height: 200px; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    开始
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    结束
  </div>
</wa-split-panel>
```

### 设置主面板

默认情况下，当宿主元素调整大小时，两个面板将按比例增长或缩小。如果指定了主面板，它将保持其大小，而次要面板将增长或缩小以适应剩余空间。可以使用 `primary` 属性将主面板设置为 `start` 或 `end`。

尝试在每个选项下调整示例的大小，观察面板的响应方式。

```html {.example}
<div class="split-panel-primary">
  <wa-split-panel>
    <div
      slot="start"
      style="height: 200px; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden;"
    >
      开始
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden;"
    >
      结束
    </div>
  </wa-split-panel>

  <wa-select label="主面板" style="max-width: 200px; margin-top: 1rem;">
    <wa-option value="" selected>无</wa-option>
    <wa-option value="start">开始</wa-option>
    <wa-option value="end">结束</wa-option>
  </wa-select>
</div>

<script>
  const container = document.querySelector('.split-panel-primary');
  const splitPanel = container.querySelector('wa-split-panel');
  const select = container.querySelector('wa-select');

  select.addEventListener('change', () => (splitPanel.primary = select.value));
</script>
```

### 最小和最大

要设置主面板的最小或最大大小，使用 `--min` 和 `--max` 自定义属性。由于次要面板是灵活的，大小限制只能应用于主面板。如果没有指定主面板，这些限制将应用于 `start` 面板。

这个示例展示了如何使用 `--min`、`--max` 和 `calc()` 函数确保两个面板都至少有 150px。

```html {.example}
<wa-split-panel style="--min: 150px; --max: calc(100% - 150px);">
  <div
    slot="start"
    style="height: 200px; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    开始
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    结束
  </div>
</wa-split-panel>
```

### 嵌套分割面板

通过嵌套分割面板创建可以独立重新定位的复杂布局。

```html {.example}
<wa-split-panel>
  <div
    slot="start"
    style="height: 400px; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden"
  >
    开始
  </div>
  <div slot="end">
    <wa-split-panel orientation="vertical" style="height: 400px;">
      <div
        slot="start"
        style="height: 100%; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden"
      >
        顶部
      </div>
      <div
        slot="end"
        style="height: 100%; background: var(--wa-color-surface-lowered); display: flex; align-items: center; justify-content: center; overflow: hidden"
      >
        底部
      </div>
    </wa-split-panel>
  </div>
</wa-split-panel>
```

### 自定义分割器

可以针对 `divider` 部件向分割器应用 CSS 属性。要添加自定义手柄，将图标插入到 `divider` 插槽中。自定义分割器时，请确保考虑键盘用户的焦点样式。

```html {.example}
<wa-split-panel style="--divider-width: 20px;">
  <wa-icon slot="divider" name="grip-vertical" variant="solid"></wa-icon>
  <div
    slot="start"
    style="
      height: 200px;
      background: var(--wa-color-surface-lowered);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    "
  >
    开始
  </div>
  <div
    slot="end"
    style="
      height: 200px;
      background: var(--wa-color-surface-lowered);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    "
  >
    结束
  </div>
</wa-split-panel>
```

这里有一个更详细的示例，它改变了分割器的颜色和宽度，并添加了一个带样式的手柄。

```html {.example}
<div class="split-panel-divider">
  <wa-split-panel>
    <wa-icon slot="divider" name="grip-vertical" variant="solid"></wa-icon>
    <div
      slot="start"
      style="
        height: 200px;
        background: var(--wa-color-surface-lowered);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      "
    >
      开始
    </div>
    <div
      slot="end"
      style="
        height: 200px;
        background: var(--wa-color-surface-lowered);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      "
    >
      结束
    </div>
  </wa-split-panel>
</div>

<style>
  .split-panel-divider wa-split-panel {
    --divider-width: 4px;
  }

  .split-panel-divider wa-split-panel::part(divider) {
    background-color: var(--wa-color-red-50);
  }

  .split-panel-divider wa-icon {
    position: absolute;
    border-radius: var(--wa-border-radius-l);
    background: var(--wa-color-red-50);
    color: white;
    padding: 0.5rem 0.25rem;
  }

  .split-panel-divider wa-split-panel::part(divider):focus-visible {
    background-color: var(--wa-color-blue-50);
  }

  .split-panel-divider wa-split-panel:focus-within wa-icon {
    background-color: var(--wa-color-blue-50);
    color: white;
  }
</style>
```
