---
title: Popup
layout: component
category: Utilities
synonyms:
  - floating element
  - anchor
  - positioned element
  - 浮动元素
  - 锚点
  - 定位元素
use-cases:
  - tooltip anchor
  - dropdown anchor
  - floating UI
  - 工具提示锚点
  - 下拉菜单锚点
  - 浮动UI
---

此组件的名称灵感来源于 [`<popup>`](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/Popup/explainer.md)。它在底层使用 [Floating UI](https://floating-ui.com/) 为工具提示、下拉菜单等提供经过充分测试、轻量级且完全声明式的定位工具。

Popup 不提供任何样式 — 仅提供定位功能！可以使用属性配置 popover 的首选位置、距离和偏移量（skidding）。可以显示指向锚点的箭头，并根据喜好进行自定义。其他定位选项可用，并在下面有更详细的描述。

:::warning
Popup 是专门为元素定位构建的底层工具。不要将它误当作 [工具提示](/docs/components/tooltip) 或类似组件，因为它_无法提供无障碍体验！_ 几乎所有 `<wa-popup>` 的正确用法都涉及构建其他组件。它应该很少（如果有的话）直接出现在你的 HTML 中。
:::

```html {.example}
<div class="popup-overview">
  <wa-popup placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </wa-popup>

  <div class="popup-overview-options">
    <wa-combobox label="位置" name="placement" placeholder="选择位置..." class="popup-overview-select"></wa-combobox>
    <wa-input type="number" name="distance" label="距离" value="0"></wa-input>
    <wa-input type="number" name="skidding" label="偏移" value="0"></wa-input>
  </div>

  <div class="popup-overview-options">
    <wa-switch name="active" checked>激活</wa-switch>
    <wa-switch name="arrow">箭头</wa-switch>
  </div>
</div>

<script type="module">
  await customElements.whenDefined('wa-combobox');
  await customElements.whenDefined('wa-option');

  const container = document.querySelector('.popup-overview');
  const popup = container.querySelector('wa-popup');
  const placement = container.querySelector('wa-combobox[name="placement"]');
  const distance = container.querySelector('wa-input[name="distance"]');
  const skidding = container.querySelector('wa-input[name="skidding"]');
  const active = container.querySelector('wa-switch[name="active"]');
  const arrow = container.querySelector('wa-switch[name="arrow"]');

  const placements = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end'];

  placements.forEach(value => {
    const option = document.createElement('wa-option');
    option.value = value;
    option.textContent = value;
    placement.append(option);
  });

  await placement.updateComplete;

  placement.value = 'top';

  placement.addEventListener('change', () => (popup.placement = placement.value));
  distance.addEventListener('input', () => (popup.distance = distance.value));
  skidding.addEventListener('input', () => (popup.skidding = skidding.value));
  active.addEventListener('change', () => (popup.active = active.checked));
  arrow.addEventListener('change', () => (popup.arrow = arrow.checked));
</script>

<style>
  .popup-overview wa-popup {
    --arrow-color: var(--wa-color-brand-fill-loud);
  }

  .popup-overview span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--wa-color-neutral-fill-loud);
    margin: 50px;
  }

  .popup-overview .box {
    width: 100px;
    height: 50px;
    background: var(--wa-color-brand-fill-loud);
    border-radius: var(--wa-border-radius-m);
  }

  .popup-overview-options {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: 1rem;
  }

  .popup-overview-options wa-combobox {
    width: 160px;
  }

  .popup-overview-options wa-input {
    width: 100px;
  }

  .popup-overview-options + .popup-overview-options {
    margin-top: 1rem;
  }
</style>
```

:::info
popup 的锚点不应该使用 `display: contents` 样式，因为坐标将无法计算。但是，如果锚点是 `<slot>` 元素，popup 将使用第一个分配的元素作为锚点。此行为允许其他组件通过组合更轻松地传递锚点。
:::

## 示例

### 激活

Popup 处于非活动和隐藏状态，直到应用 `active` 属性。移除该属性将拆除所有定位逻辑和监听器，这意味着你可以在页面上放置许多空闲的 popups 而不会影响性能。

```html {.example}
<div class="popup-active">
  <wa-popup placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </wa-popup>

  <br />
  <wa-switch checked>激活</wa-switch>
</div>

<style>
  .popup-active span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--wa-color-neutral-fill-loud);
    margin: 50px;
  }

  .popup-active .box {
    width: 100px;
    height: 50px;
    background: var(--wa-color-brand-fill-loud);
    border-radius: var(--wa-border-radius-m);
  }
</style>

<script>
  const container = document.querySelector('.popup-active');
  const popup = container.querySelector('wa-popup');
  const active = container.querySelector('wa-switch');

  active.addEventListener('change', () => (popup.active = active.checked));
</script>
```

### 外部锚点

默认情况下，锚点使用 `anchor` 插槽放置到 popup 中。如果你的锚点需要位于 popup 外部，可以将锚点的 `id` 传递给 `anchor` 属性。或者，你可以将元素引用传递给 `anchor` 属性，在不使用 `id` 的情况下达到相同效果。

```html {.example}
<span id="external-anchor"></span>

<wa-popup anchor="external-anchor" placement="top" active>
  <div class="box"></div>
</wa-popup>

<style>
  #external-anchor {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--wa-color-neutral-fill-loud);
    margin: 50px 0 0 50px;
  }

  #external-anchor ~ wa-popup .box {
    width: 100px;
    height: 50px;
    background: var(--wa-color-brand-fill-loud);
    border-radius: var(--wa-border-radius-m);
  }
</style>
```

### 位置

使用 `placement` 属性告诉 popover 首选放置位置。注意，如果你使用 `flip` 和 `shift` 等定位功能，实际位置会有所变化，以确保面板保持在视口中。

由于使用 `flip` 时放置是首选的，你可以通过查看 `data-current-placement` 属性来观察 popover 激活时的当前位置。此属性会在 popover 翻转寻找可用空间时更新，并在 popover 停用时被移除。

```html {.example}
<div class="popup-placement">
  <wa-popup placement="top" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </wa-popup>

  <wa-combobox name="placement" label="位置" placeholder="选择位置..."></wa-combobox>
</div>

<style>
  .popup-placement span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--wa-color-neutral-fill-loud);
    margin: 50px;
  }

  .popup-placement .box {
    width: 100px;
    height: 50px;
    background: var(--wa-color-brand-fill-loud);
    border-radius: var(--wa-border-radius-m);
  }

  .popup-placement wa-combobox {
    max-width: 280px;
  }
</style>

<script type="module">
  await customElements.whenDefined('wa-combobox');
  await customElements.whenDefined('wa-option');

  const container = document.querySelector('.popup-placement');
  const popup = container.querySelector('wa-popup');
  const placement = container.querySelector('wa-combobox');

  const placements = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end'];

  placements.forEach(value => {
    const option = document.createElement('wa-option');
    option.value = value;
    option.textContent = value;
    placement.append(option);
  });

  await placement.updateComplete;

  placement.value = 'top';

  placement.addEventListener('change', () => (popup.placement = placement.value));
</script>
```

### 距离

使用 `distance` 属性更改 popover 与其锚点之间的距离。正值将使 popover 远离，负值将使其靠近。

```html {.example}
<div class="popup-distance">
  <wa-popup placement="top" distance="0" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </wa-popup>

  <wa-slider min="-50" max="50" step="1" value="0" label="距离"></wa-slider>
</div>

<style>
  .popup-distance span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--wa-color-neutral-fill-loud);
    margin: 50px;
  }

  .popup-distance .box {
    width: 100px;
    height: 50px;
    background: var(--wa-color-brand-fill-loud);
    border-radius: var(--wa-border-radius-m);
  }

  .popup-distance wa-slider {
    max-width: 260px;
  }
</style>

<script>
  const container = document.querySelector('.popup-distance');
  const popup = container.querySelector('wa-popup');
  const distance = container.querySelector('wa-slider');

  distance.addEventListener('input', () => (popup.distance = distance.value));
</script>
```

### 偏移

`skidding` 属性与 `distance` 类似，但允许你沿着锚点的轴偏移 popover。允许正值和负值。

```html {.example}
<div class="popup-skidding">
  <wa-popup placement="top" skidding="0" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </wa-popup>

  <wa-slider min="-50" max="50" step="1" value="0" label="偏移"></wa-slider>
</div>

<style>
  .popup-skidding span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--wa-color-neutral-fill-loud);
    margin: 50px;
  }

  .popup-skidding .box {
    width: 100px;
    height: 50px;
    background: var(--wa-color-brand-fill-loud);
    border-radius: var(--wa-border-radius-m);
  }

  .popup-skidding wa-slider {
    max-width: 260px;
  }
</style>

<script>
  const container = document.querySelector('.popup-skidding');
  const popup = container.querySelector('wa-popup');
  const skidding = container.querySelector('wa-slider');

  skidding.addEventListener('input', () => (popup.skidding = skidding.value));
</script>
```

### 箭头

使用 `arrow` 属性为 popover 添加箭头。通常设置 `distance` 为箭头留出空间是个好主意。要调整箭头的颜色和大小，分别使用 `--arrow-color` 和 `--arrow-size` 自定义属性。你也可以定位 `arrow` 部分来添加额外的样式，如阴影和边框，以匹配应用于 popover 元素其余部分的样式。

默认情况下，箭头会尽可能靠近锚点的中心对齐，考虑可用空间和 `arrow-padding`。你可以使用 `arrow-placement` 属性强制箭头对齐到 popover 的起始、结束或中心。

```html {.example}
<div class="popup-arrow">
  <wa-popup placement="top" arrow arrow-placement="anchor" distance="8" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </wa-popup>

  <div class="popup-arrow-options">
    <wa-combobox label="位置" name="placement" placeholder="选择位置..." class="popup-overview-select"></wa-combobox>

    <wa-select label="箭头位置" name="arrow-placement" value="anchor">
      <wa-option value="anchor">锚点</wa-option>
      <wa-option value="start">起始</wa-option>
      <wa-option value="end">结束</wa-option>
      <wa-option value="center">中心</wa-option>
    </wa-select>
  </div>

  <div class="popup-arrow-options">
    <wa-switch name="arrow" checked>箭头</wa-switch>
  </div>

  <style>
    .popup-arrow wa-popup {
      --arrow-color: var(--wa-color-brand-fill-loud);
    }

    .popup-arrow span[slot='anchor'] {
      display: inline-block;
      width: 150px;
      height: 150px;
      border: dashed 2px var(--wa-color-neutral-fill-loud);
      margin: 50px;
    }

    .popup-arrow .box {
      width: 100px;
      height: 50px;
      background: var(--wa-color-brand-fill-loud);
      border-radius: var(--wa-border-radius-m);
    }

    .popup-arrow-options {
      display: flex;
      flex-wrap: wrap;
      align-items: end;
      gap: 1rem;
    }

    .popup-arrow-options wa-combobox,
    .popup-arrow-options wa-select {
      width: 160px;
    }

    .popup-arrow-options + .popup-arrow-options {
      margin-top: 1rem;
    }
  </style>

  <script type="module">
    await customElements.whenDefined('wa-combobox');
    await customElements.whenDefined('wa-option');

    const container = document.querySelector('.popup-arrow');
    const popup = container.querySelector('wa-popup');
    const placement = container.querySelector('wa-combobox[name="placement"]');
    const arrowPlacement = container.querySelector('wa-select[name="arrow-placement"]');
    const arrow = container.querySelector('[name="arrow"]');

    const placements = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end'];

    placements.forEach(value => {
      const option = document.createElement('wa-option');
      option.value = value;
      option.textContent = value;
      placement.append(option);
    });

    await placement.updateComplete;

    placement.value = 'top';

    placement.addEventListener('change', () => (popup.placement = placement.value));
    arrowPlacement.addEventListener('change', () => (popup.arrowPlacement = arrowPlacement.value));
    arrow.addEventListener('change', () => (popup.arrow = arrow.checked));
  </script>
</div>
```

### 添加边框

也可以通过定位 `wa-popup` 元素的内容为 popover 元素添加边框。这种样式也可以通过定位 popover 中的 `.arrow` 类扩展到箭头本身。

在为带有箭头的 popover 元素添加边框时，请确保设置 `--popup-border-width` 自定义属性以匹配 popover 边框的宽度。设置此属性将允许箭头重叠 popover 的边框，使它们在视觉上看起来是连接的。

```html {.example}
<div class="popup-border">
  <wa-popup placement="top" arrow arrow-placement="anchor" distance="8" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </wa-popup>

  <div class="popup-border-options">
    <wa-combobox label="位置" name="placement" placeholder="选择位置..." class="popup-overview-select"></wa-combobox>
  </div>

  <style>
    
    .popup-border span[slot='anchor'] {
      display: inline-block;
      width: 150px;
      height: 150px;
      border: dashed 2px var(--wa-color-neutral-fill-loud);
      margin: 50px;
    }

    .popup-border .box {
      width: 100px;
      height: 50px;
      background: var(--wa-color-brand-on-loud);
      border-radius: var(--wa-border-radius-m);
      border: var(--wa-panel-border-width) solid var(--wa-color-brand-border-loud);
      border-style: var(--wa-panel-border-style);
      box-shadow: var(--wa-shadow-l);
    }
    
    .popup-border wa-popup {
      --arrow-color: var(--wa-color-brand-on-loud);
      --popup-border-width: var(--wa-panel-border-width);

      &::part(arrow) {
        border-bottom: var(--wa-panel-border-width) var(--wa-panel-border-style) var(--wa-color-brand-border-loud);
        border-right: var(--wa-panel-border-width) var(--wa-panel-border-style) var(--wa-color-brand-border-loud);
      }
    }

    .popup-border-options {
      display: flex;
      flex-wrap: wrap;
      align-items: end;
      gap: 1rem;
    }

    .popup-border-options wa-combobox {
      width: 160px;
    }
  </style>
  
  <script type="module">
    await customElements.whenDefined('wa-combobox');

    const container = document.querySelector('.popup-border');
    const popup = container.querySelector('wa-popup');
    const placement = container.querySelector('wa-combobox[name="placement"]');

    const placements = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end'];

    placements.forEach(value => {
      const option = document.createElement('wa-option');
      option.value = value;
      option.textContent = value;
      placement.append(option);
    });

    await placement.updateComplete;

    placement.value = 'top';

    placement.addEventListener('change', () => (popup.placement = placement.value));
  </script>
</div>
```

{# TODO: this example totally destroys browsers. Needs investigation.

### 与锚点尺寸同步

使用 `sync` 属性使 popover 与锚点元素具有相同的宽度或高度。这对于需要 popover 保持与触发器相同宽度或高度的控件很有用。

```html {.example}
<div class="popup-sync">
  <wa-popup placement="top" sync="width" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </wa-popup>

  <wa-select value="width" label="同步">
    <wa-option value="width">宽度</wa-option>
    <wa-option value="height">高度</wa-option>
    <wa-option value="both">两者</wa-option>
    <wa-option value="">无</wa-option>
  </wa-select>
</div>

<style>
  .popup-sync span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--wa-color-neutral-fill-loud);
    margin: 50px;
  }

  .popup-sync .box {
    width: 100%;
    height: 100%;
    min-width: 50px;
    min-height: 50px;
    background: var(--wa-color-brand-fill-loud);
    border-radius: var(--wa-border-radius-m);
  }

  .popup-sync wa-select {
    width: 160px;
  }
</style>

<script>
  const container = document.querySelector('.popup-sync');
  const popup = container.querySelector('wa-popup');
  const fixed = container.querySelector('wa-switch');
  const sync = container.querySelector('wa-select');

  sync.addEventListener('change', () => (popup.sync = sync.value));
</script>
```
#}

### 翻转

当 popover 在其首选位置没有足够的空间时，它可以自动翻转以保持可见并与锚点在视觉上连接。
要启用此功能，请使用 `flip` 属性。默认情况下，popover 会翻转到相反的位置，但你可以使用 `flip-fallback-placement` 和 `flip-fallback-strategy` 配置首选的回退位置。其他选项可用于控制翻转行为的边界和填充。

默认情况下，当 popover 会溢出视口时，翻转生效。
你可以使用 `boundary="scroll"` 使 popover 在溢出其最近的可滚动容器时调整大小。

滚动容器以查看 popover 如何翻转以防止被裁剪。

```html {.example}
<div class="popup-flip">
  <div class="overflow">
    <wa-popup placement="top" flip active boundary="scroll">
      <span slot="anchor"></span>
      <div class="box"></div>
    </wa-popup>
  </div>

  <br />
  <wa-switch checked>翻转</wa-switch>
</div>

<style>
  .popup-flip .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--wa-color-surface-border);
    overflow: auto;
  }

  .popup-flip span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--wa-color-neutral-fill-loud);
    margin: 150px 50px;
  }

  .popup-flip .box {
    width: 100px;
    height: 50px;
    background: var(--wa-color-brand-fill-loud);
    border-radius: var(--wa-border-radius-m);
  }
</style>

<script>
  const container = document.querySelector('.popup-flip');
  const popup = container.querySelector('wa-popup');
  const flip = container.querySelector('wa-switch');

  flip.addEventListener('change', () => (popup.flip = flip.checked));
</script>
```

### 翻转回退

在使用 `flip` 属性时，你可以在首选位置没有空间时自定义 popover 的位置。为此，请使用 `flip-fallback-placements` 和 `flip-fallback-strategy`。

如果首选位置没有空间，将使用 `flip-fallback-placement` 中找到的第一个合适位置。此属性的值必须是包含任意数量位置的字符串，用空格分隔，例如 `"right bottom"`。

如果没有回退位置有效，最终位置将由 `flip-fallback-strategy` 确定。此值可以是 `initial`（默认），其中位置恢复到 `placement` 中的位置，或者是 `best-fit`，其中根据可用空间选择位置。

滚动容器以查看 popover 如何更改其回退位置以防止被裁剪。

```html {.example}
<div class="popup-flip-fallbacks">
  <div class="overflow">
    <wa-popup
      placement="top"
      flip
      flip-fallback-placements="right bottom"
      flip-fallback-strategy="initial"
      active
      boundary="scroll"
    >
      <span slot="anchor"></span>
      <div class="box"></div>
    </wa-popup>
  </div>
</div>

<style>
  .popup-flip-fallbacks .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--wa-color-surface-border);
    overflow: auto;
  }

  .popup-flip-fallbacks span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--wa-color-neutral-fill-loud);
    margin: 250px 50px;
  }

  .popup-flip-fallbacks .box {
    width: 100px;
    height: 50px;
    background: var(--wa-color-brand-fill-loud);
    border-radius: var(--wa-border-radius-m);
  }
</style>
```

### 移位

当 popover 比其锚点长时，它有溢出的风险。
在这种情况下，使用 `shift` 属性沿其轴移动 popover 并回到视图中。你可以使用 `shiftBoundary` 和 `shift-padding` 自定义移位行为。

默认情况下，当 popover 会溢出视口时，自动大小生效。
你可以使用 `boundary="scroll"` 使 popover 在溢出其最近的可滚动容器时调整大小。

切换开关以查看区别。

```html {.example}
<div class="popup-shift">
  <div class="overflow">
    <wa-popup placement="top" shift shift-padding="10" active boundary="scroll">
      <span slot="anchor"></span>
      <div class="box"></div>
    </wa-popup>
  </div>

  <wa-switch checked>移位</wa-switch>
</div>

<style>
  .popup-shift .overflow {
    position: relative;
    border: solid 2px var(--wa-color-surface-border);
    overflow: auto;
  }

  .popup-shift span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--wa-color-neutral-fill-loud);
    margin: 60px 0 0 10px;
  }

  .popup-shift .box {
    width: 300px;
    height: 50px;
    background: var(--wa-color-brand-fill-loud);
    border-radius: var(--wa-border-radius-m);
  }
</style>

<script>
  const container = document.querySelector('.popup-shift');
  const popup = container.querySelector('wa-popup');
  const shift = container.querySelector('wa-switch');

  shift.addEventListener('change', () => (popup.shift = shift.checked));
</script>
```

### 自动大小

使用 `auto-size` 属性告诉 popover 在必要时调整大小以防止溢出。
可能的值是 `horizontal`、`vertical` 和 `both`。你可以使用 `autoSizeBoundary` 和 `auto-size-padding` 自定义此选项的行为。自动大小与 `flip` 配合使用效果很好，但如果你使用 `auto-size-padding`，请确保 `flip-padding` 是相同的值。

默认情况下，当 popover 会溢出视口时，自动大小生效。
你可以使用 `boundary="scroll"` 使 popover 在溢出其最近的可滚动容器时调整大小。

在使用 `auto-size` 时，`--auto-size-available-width` 和 `--auto-size-available-height` 中的一个或两个将应用于宿主元素。这些值确定 popover 在裁剪发生之前可用的空间。由于它们级联，你可以使用它们来设置 popover 内容的最大宽度/高度，并轻松控制其溢出。

滚动容器以查看 popover 在可用空间变化时如何调整大小。

```html {.example}
<div class="popup-auto-size">
  <div class="overflow">
    <wa-popup placement="top" auto-size="both" auto-size-padding="10" active boundary="scroll">
      <span slot="anchor"></span>
      <div class="box"></div>
    </wa-popup>
  </div>

  <br />
  <wa-switch checked>自动大小</wa-switch>
</div>

<style>
  .popup-auto-size .overflow {
    position: relative;
    height: 300px;
    border: solid 2px var(--wa-color-surface-border);
    overflow: auto;
  }

  .popup-auto-size span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--wa-color-neutral-fill-loud);
    margin: 250px 50px 100px 50px;
  }

  .popup-auto-size .box {
    background: var(--wa-color-brand-fill-loud);
    border-radius: var(--wa-border-radius-m);

    /* 这设置了 popover 内容的首选大小 */
    width: 100px;
    height: 200px;

    /* 这设置了最大尺寸，并在自动大小生效时允许滚动 */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
    overflow: auto;
  }
</style>

<script>
  const container = document.querySelector('.popup-auto-size');
  const popup = container.querySelector('wa-popup');
  const autoSize = container.querySelector('wa-switch');

  autoSize.addEventListener('change', () => (popup.autoSize = autoSize.checked ? 'both' : ''));
</script>
```

### 悬停桥

当锚点和 popover 元素之间存在间隙时，此选项将添加一个"悬停桥"，使用不可见元素填充间隙。这使得监听 `mouseover` 和 `mouseout` 等事件更加合理，因为指针从未真正离开元素。悬停桥只有在 popover 激活时才会绘制。为了演示目的，此示例中的桥显示为橙色。

```html {.example}
<div class="popup-hover-bridge">
  <wa-popup placement="top" hover-bridge distance="10" skidding="0" active>
    <span slot="anchor"></span>
    <div class="box"></div>
  </wa-popup>
  <br />
  <wa-switch checked>悬停桥</wa-switch><br />
  <wa-slider min="0" max="50" step="1" value="10" label="距离"></wa-slider>
  <wa-slider min="-50" max="50" step="1" value="0" label="偏移"></wa-slider>
</div>
<style>
  .popup-hover-bridge span[slot='anchor'] {
    display: inline-block;
    width: 150px;
    height: 150px;
    border: dashed 2px var(--wa-color-neutral-fill-loud);
    margin: 50px;
  }

  .popup-hover-bridge .box {
    width: 100px;
    height: 50px;
    background: var(--wa-color-brand-fill-loud);
    border-radius: var(--wa-border-radius-m);
  }

  .popup-hover-bridge wa-slider {
    max-width: 260px;
    margin-top: 0.5rem;
  }

  .popup-hover-bridge wa-popup::part(hover-bridge) {
    background: tomato;
    opacity: 0.5;
  }
</style>
<script>
  const container = document.querySelector('.popup-hover-bridge');
  const popup = container.querySelector('wa-popup');
  const hoverBridge = container.querySelector('wa-switch');
  const distance = container.querySelector('wa-slider[label="距离"]');
  const skidding = container.querySelector('wa-slider[label="偏移"]');
  distance.addEventListener('input', () => (popup.distance = distance.value));
  skidding.addEventListener('input', () => (popup.skidding = skidding.value));
  hoverBridge.addEventListener('change', () => (popup.hoverBridge = hoverBridge.checked));
</script>
```

### 虚拟元素

在大多数情况下，popups 锚定到实际元素。有时，将它们锚定到非元素可能很有用。为此，你可以将 `VirtualElement` 传递给 anchor 属性。虚拟元素必须包含一个名为 `getBoundingClientRect()` 的函数，该函数返回如下所示的 [`DOMRect`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMRect) 对象。

```ts
const virtualElement = {
  getBoundingClientRect() {
    // ...
    return { width, height, x, y, top, left, right, bottom };
  },
};
```

此示例使用虚拟元素将 popover 锚定到鼠标光标。因此，需要鼠标才能正确查看它。

```html {.example}
<div class="popup-virtual-element">
  <wa-popup placement="right-start">
    <div class="circle"></div>
  </wa-popup>

  <wa-switch>高亮鼠标光标</wa-switch>
</div>

<script>
  const container = document.querySelector('.popup-virtual-element');
  const popup = container.querySelector('wa-popup');
  const circle = container.querySelector('.circle');
  const enabled = container.querySelector('wa-switch');
  let clientX = 0;
  let clientY = 0;

  // 将虚拟元素设置为属性
  popup.anchor = {
    getBoundingClientRect() {
      return {
        width: 0,
        height: 0,
        x: clientX,
        y: clientY,
        top: clientY,
        left: clientX,
        right: clientX,
        bottom: clientY,
      };
    },
  };

  // 仅在开关选中时激活 popover
  enabled.addEventListener('change', () => {
    popup.active = enabled.checked;
  });

  // 监听鼠标移动
  document.addEventListener('mousemove', handleMouseMove);

  // 随着鼠标移动更新虚拟元素
  function handleMouseMove(event) {
    clientX = event.clientX;
    clientY = event.clientY;

    // 当虚拟锚点移动时重新定位 popover
    if (popup.active) {
      popup.reposition();
    }
  }
</script>

<style>
  /* 如果你需要设置 z-index，像这样在 popup 部分上设置 */
  .popup-virtual-element wa-popup::part(popup) {
    z-index: 1000;
    pointer-events: none;
  }

  .popup-virtual-element .circle {
    width: 100px;
    height: 100px;
    border: solid 4px var(--wa-color-neutral-fill-loud);
    border-radius: 50%;
    translate: -50px -50px;
    animation: 1s virtual-cursor infinite;
  }

  @keyframes virtual-cursor {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.1;
    }
  }
</style>
```

### 内置动画

以下类可以应用于 popover 的 `popup` 部分，以编程方式使其淡入或淡出。你可以使用 `--show-duration` 和 `--hide-duration` 自定义属性控制动画持续时间。

- `show` / `hide` - 使用淡入淡出显示或隐藏 popover
- `show-with-scale` / `hide-with-scale` - 使用淡入淡出和细微缩放效果显示或隐藏 popover
