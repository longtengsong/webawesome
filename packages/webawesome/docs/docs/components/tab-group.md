---
title: 选项卡组
layout: component
category: Navigation
synonyms:
  - tabs
  - tabbed interface
  - tab bar
  - tab panel
  - tab set
  - 选项卡
  - 选项卡界面
  - 选项卡栏
  - 选项卡面板
  - 选项卡集
use-cases:
  - tabbed content
  - tab navigation
  - settings tabs
  - 选项卡内容
  - 选项卡导航
  - 设置选项卡
---

选项卡组使用[选项卡](/docs/components/tab)和[选项卡面板](/docs/components/tab-panel)。每个面板都应该有一个在选项卡组内唯一的名称，选项卡应该有一个指向相应面板名称的 `panel` 属性。

```html {.example}
<wa-tab-group>
  <wa-tab panel="general">常规</wa-tab>
  <wa-tab panel="custom">自定义</wa-tab>
  <wa-tab panel="advanced">高级</wa-tab>
  <wa-tab panel="disabled" disabled>禁用</wa-tab>

  <wa-tab-panel name="general">这是常规选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="custom">这是自定义选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="advanced">这是高级选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="disabled">这是一个禁用的选项卡面板。</wa-tab-panel>
</wa-tab-group>
```

## 示例

### 设置活动选项卡

要使某个选项卡处于活动状态，将 `active` 属性设置为相应面板的名称。

```html {.example}
<wa-tab-group active="advanced">
  <wa-tab panel="general">常规</wa-tab>
  <wa-tab panel="custom">自定义</wa-tab>
  <wa-tab panel="advanced">高级</wa-tab>

  <wa-tab-panel name="general">这是常规选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="custom">这是自定义选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="advanced">这是高级选项卡面板。</wa-tab-panel>
</wa-tab-group>
```

### 底部选项卡

可以通过将 `placement` 设置为 `bottom` 来在底部显示选项卡。

```html {.example}
<wa-tab-group placement="bottom">
  <wa-tab panel="general">常规</wa-tab>
  <wa-tab panel="custom">自定义</wa-tab>
  <wa-tab panel="advanced">高级</wa-tab>
  <wa-tab panel="disabled" disabled>禁用</wa-tab>

  <wa-tab-panel name="general">这是常规选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="custom">这是自定义选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="advanced">这是高级选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="disabled">这是一个禁用的选项卡面板。</wa-tab-panel>
</wa-tab-group>
```

### 左侧选项卡

可以通过将 `placement` 设置为 `start` 来在左侧显示选项卡。

```html {.example}
<wa-tab-group placement="start">
  <wa-tab panel="general">常规</wa-tab>
  <wa-tab panel="custom">自定义</wa-tab>
  <wa-tab panel="advanced">高级</wa-tab>
  <wa-tab panel="disabled" disabled>禁用</wa-tab>

  <wa-tab-panel name="general">这是常规选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="custom">这是自定义选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="advanced">这是高级选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="disabled">这是一个禁用的选项卡面板。</wa-tab-panel>
</wa-tab-group>
```

### 右侧选项卡

可以通过将 `placement` 设置为 `end` 来在右侧显示选项卡。

```html {.example}
<wa-tab-group placement="end">
  <wa-tab panel="general">常规</wa-tab>
  <wa-tab panel="custom">自定义</wa-tab>
  <wa-tab panel="advanced">高级</wa-tab>
  <wa-tab panel="disabled" disabled>禁用</wa-tab>

  <wa-tab-panel name="general">这是常规选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="custom">这是自定义选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="advanced">这是高级选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="disabled">这是一个禁用的选项卡面板。</wa-tab-panel>
</wa-tab-group>
```

### 可关闭的选项卡

可以通过在选项卡旁边添加一个关闭按钮并将其放在 `nav` 插槽中来使选项卡可关闭。可以使用 CSS 按照自己的喜好定位按钮，并通过根据需要删除/添加选项卡来处理关闭/恢复行为。注意使用 `tabindex="-1"`，这样可以防止关闭按钮干扰选项卡顺序。关闭按钮对于屏幕阅读器中的虚拟光标仍然是可识别的。

```html {.example}
<wa-tab-group class="tabs-closable">
  <wa-tab panel="general">常规</wa-tab>
  <wa-tab panel="closable">可关闭</wa-tab>
  <wa-button slot="nav" tabindex="-1" appearance="plain" size="s">
    <wa-icon name="xmark" label="关闭可关闭的选项卡"></wa-icon>
  </wa-button>
  <wa-tab panel="closable-2">高级</wa-tab>

  <wa-tab-panel name="general">这是常规选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="closable">这是可关闭的选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="advanced">这是高级选项卡面板。</wa-tab-panel>
</wa-tab-group>

<br />

<wa-button disabled>恢复选项卡</wa-button>

<style>
  .tabs-closable wa-button {
    position: relative;
    left: -1.5em;
    top: 0.675em;
  }
</style>

<script>
  const tabGroup = document.querySelector('.tabs-closable');
  const generalTab = tabGroup.querySelectorAll('wa-tab')[0];
  const closableTab = tabGroup.querySelectorAll('wa-tab')[1];
  const closeButton = tabGroup.querySelector('wa-button');
  const restoreButton = tabGroup.nextElementSibling.nextElementSibling;

  // 点击关闭按钮时删除选项卡
  closeButton.addEventListener('click', () => {
    closableTab.remove();
    closeButton.remove();
    restoreButton.disabled = false;
  });

  // 恢复选项卡
  restoreButton.addEventListener('click', () => {
    restoreButton.disabled = true;
    generalTab.insertAdjacentElement('afterend', closeButton);
    generalTab.insertAdjacentElement('afterend', closableTab);
  });
</script>
```

### 滚动选项卡

当选项卡数量超过水平空间允许的范围时，导航栏将可滚动。

```html {.example}
<wa-tab-group>
  <wa-tab panel="tab-1">选项卡 1</wa-tab>
  <wa-tab panel="tab-2">选项卡 2</wa-tab>
  <wa-tab panel="tab-3">选项卡 3</wa-tab>
  <wa-tab panel="tab-4">选项卡 4</wa-tab>
  <wa-tab panel="tab-5">选项卡 5</wa-tab>
  <wa-tab panel="tab-6">选项卡 6</wa-tab>
  <wa-tab panel="tab-7">选项卡 7</wa-tab>
  <wa-tab panel="tab-8">选项卡 8</wa-tab>
  <wa-tab panel="tab-9">选项卡 9</wa-tab>
  <wa-tab panel="tab-10">选项卡 10</wa-tab>
  <wa-tab panel="tab-11">选项卡 11</wa-tab>
  <wa-tab panel="tab-12">选项卡 12</wa-tab>
  <wa-tab panel="tab-13">选项卡 13</wa-tab>
  <wa-tab panel="tab-14">选项卡 14</wa-tab>
  <wa-tab panel="tab-15">选项卡 15</wa-tab>
  <wa-tab panel="tab-16">选项卡 16</wa-tab>
  <wa-tab panel="tab-17">选项卡 17</wa-tab>
  <wa-tab panel="tab-18">选项卡 18</wa-tab>
  <wa-tab panel="tab-19">选项卡 19</wa-tab>
  <wa-tab panel="tab-20">选项卡 20</wa-tab>

  <wa-tab-panel name="tab-1">选项卡面板 1</wa-tab-panel>
  <wa-tab-panel name="tab-2">选项卡面板 2</wa-tab-panel>
  <wa-tab-panel name="tab-3">选项卡面板 3</wa-tab-panel>
  <wa-tab-panel name="tab-4">选项卡面板 4</wa-tab-panel>
  <wa-tab-panel name="tab-5">选项卡面板 5</wa-tab-panel>
  <wa-tab-panel name="tab-6">选项卡面板 6</wa-tab-panel>
  <wa-tab-panel name="tab-7">选项卡面板 7</wa-tab-panel>
  <wa-tab-panel name="tab-8">选项卡面板 8</wa-tab-panel>
  <wa-tab-panel name="tab-9">选项卡面板 9</wa-tab-panel>
  <wa-tab-panel name="tab-10">选项卡面板 10</wa-tab-panel>
  <wa-tab-panel name="tab-11">选项卡面板 11</wa-tab-panel>
  <wa-tab-panel name="tab-12">选项卡面板 12</wa-tab-panel>
  <wa-tab-panel name="tab-13">选项卡面板 13</wa-tab-panel>
  <wa-tab-panel name="tab-14">选项卡面板 14</wa-tab-panel>
  <wa-tab-panel name="tab-15">选项卡面板 15</wa-tab-panel>
  <wa-tab-panel name="tab-16">选项卡面板 16</wa-tab-panel>
  <wa-tab-panel name="tab-17">选项卡面板 17</wa-tab-panel>
  <wa-tab-panel name="tab-18">选项卡面板 18</wa-tab-panel>
  <wa-tab-panel name="tab-19">选项卡面板 19</wa-tab-panel>
  <wa-tab-panel name="tab-20">选项卡面板 20</wa-tab-panel>
</wa-tab-group>
```

### 手动激活

当聚焦时，键盘用户可以按 [[左]] 或 [[右]] 来选择所需的选项卡。默认情况下，相应的选项卡面板将立即显示（自动激活）。可以通过设置 `activation="manual"` 来更改此行为，这将要求用户按 [[空格]] 或 [[回车]] 来显示选项卡面板（手动激活）。

```html {.example}
<wa-tab-group activation="manual">
  <wa-tab panel="general">常规</wa-tab>
  <wa-tab panel="custom">自定义</wa-tab>
  <wa-tab panel="advanced">高级</wa-tab>
  <wa-tab panel="disabled" disabled>禁用</wa-tab>

  <wa-tab-panel name="general">这是常规选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="custom">这是自定义选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="advanced">这是高级选项卡面板。</wa-tab-panel>
  <wa-tab-panel name="disabled">这是一个禁用的选项卡面板。</wa-tab-panel>
</wa-tab-group>
```
