---
title: 按钮组
layout: component
category: Actions
synonyms:
  - button bar
  - toolbar
  - action group
  - segmented control
  - 按钮栏
  - 工具栏
  - 操作组
use-cases:
  - toggle group
  - split button
  - grouped actions
  - 切换组
  - 分割按钮
  - 分组操作
---

```html {.example}
<wa-button-group label="对齐方式">
  <wa-button appearance="filled">左</wa-button>
  <wa-button appearance="filled">中</wa-button>
  <wa-button appearance="filled">右</wa-button>
</wa-button-group>
```

## 示例

### 垂直按钮组

将 `orientation` 属性设置为 `vertical` 以制作垂直按钮组。

```html {.example}
<wa-button-group orientation="vertical" label="选项">
  <wa-button appearance="filled">按钮</wa-button>
  <wa-dropdown>
    <wa-button appearance="filled" slot="trigger" with-caret>下拉菜单</wa-button>
    <wa-dropdown-item>项目 1</wa-dropdown-item>
    <wa-dropdown-item>项目 2</wa-dropdown-item>
    <wa-dropdown-item>项目 3</wa-dropdown-item>
  </wa-dropdown>
  <wa-button appearance="filled">按钮</wa-button>
</wa-button-group>
```

### 药丸形状按钮

通过按钮的 `pill` 属性支持药丸形状按钮。

```html {.example}
<wa-button-group label="对齐方式">
  <wa-button appearance="filled" size="xs" pill>左</wa-button>
  <wa-button appearance="filled" size="xs" pill>中</wa-button>
  <wa-button appearance="filled" size="xs" pill>右</wa-button>
</wa-button-group>

<br /><br />

<wa-button-group label="对齐方式">
  <wa-button appearance="filled" size="s" pill>左</wa-button>
  <wa-button appearance="filled" size="s" pill>中</wa-button>
  <wa-button appearance="filled" size="s" pill>右</wa-button>
</wa-button-group>

<br /><br />

<wa-button-group label="对齐方式">
  <wa-button appearance="filled" size="m" pill>左</wa-button>
  <wa-button appearance="filled" size="m" pill>中</wa-button>
  <wa-button appearance="filled" size="m" pill>右</wa-button>
</wa-button-group>

<br /><br />

<wa-button-group label="对齐方式">
  <wa-button appearance="filled" size="l" pill>左</wa-button>
  <wa-button appearance="filled" size="l" pill>中</wa-button>
  <wa-button appearance="filled" size="l" pill>右</wa-button>
</wa-button-group>

<br /><br />

<wa-button-group label="对齐方式">
  <wa-button appearance="filled" size="xl" pill>左</wa-button>
  <wa-button appearance="filled" size="xl" pill>中</wa-button>
  <wa-button appearance="filled" size="xl" pill>右</wa-button>
</wa-button-group>
```

### 按钮组中的下拉菜单

下拉菜单可以放置到按钮组中。

```html {.example}
<wa-button-group label="示例按钮组">
  <wa-button appearance="filled">按钮</wa-button>
  <wa-dropdown>
    <wa-button appearance="filled" slot="trigger" with-caret>下拉菜单</wa-button>
    <wa-dropdown-item>项目 1</wa-dropdown-item>
    <wa-dropdown-item>项目 2</wa-dropdown-item>
    <wa-dropdown-item>项目 3</wa-dropdown-item>
  </wa-dropdown>
  <wa-button appearance="filled">按钮</wa-button>
</wa-button-group>
```

### 分割按钮

使用按钮和下拉菜单创建分割按钮。使用[视觉隐藏](/docs/utilities/visually-hidden)标签以确保下拉菜单可被使用辅助设备的用户访问。

```html {.example}
<wa-button-group label="示例按钮组">
  <wa-button appearance="filled" variant="brand">保存</wa-button>
  <wa-dropdown placement="bottom-end">
    <wa-button appearance="filled" slot="trigger" variant="brand">
      <wa-icon name="chevron-down" label="更多选项"></wa-icon>
    </wa-button>
    <wa-dropdown-item>保存</wa-dropdown-item>
    <wa-dropdown-item>另存为&hellip;</wa-dropdown-item>
    <wa-dropdown-item>全部保存</wa-dropdown-item>
  </wa-dropdown>
</wa-button-group>
```

### 按钮组中的工具提示

按钮可以包裹在工具提示中，以在用户与它们交互时提供更多详细信息。

```html {.example}
<wa-button-group label="对齐方式">
  <wa-button appearance="filled" id="button-left">左</wa-button>
  <wa-button appearance="filled" id="button-center">中</wa-button>
  <wa-button appearance="filled" id="button-right">右</wa-button>
</wa-button-group>

<wa-tooltip for="button-left">我在左边</wa-tooltip>
<wa-tooltip for="button-center">我在中间</wa-tooltip>
<wa-tooltip for="button-right">我在右边</wa-tooltip>
```

### 工具栏示例

使用按钮组创建交互式工具栏。

```html {.example}
<div class="button-group-toolbar">
  <wa-button-group label="历史">
    <wa-button appearance="filled" id="undo-button"><wa-icon name="undo" variant="solid" label="撤销"></wa-icon></wa-button>
    <wa-button appearance="filled" id="redo-button"><wa-icon name="redo" variant="solid" label="重做"></wa-icon></wa-button>
  </wa-button-group>

  <wa-button-group label="格式">
    <wa-button appearance="filled" id="button-bold"><wa-icon name="bold" variant="solid" label="加粗"></wa-icon></wa-button>
    <wa-button appearance="filled" id="button-italic"><wa-icon name="italic" variant="solid" label="斜体"></wa-icon></wa-button>
    <wa-button appearance="filled" id="button-underline"><wa-icon name="underline" variant="solid" label="下划线"></wa-icon></wa-button>
  </wa-button-group>

  <wa-button-group label="对齐">
    <wa-button appearance="filled" id="button-align-left">
      <wa-icon name="align-left" variant="solid" label="左对齐"></wa-icon>
    </wa-button>
    <wa-button appearance="filled" id="button-align-center">
      <wa-icon name="align-center" variant="solid" label="居中对齐"></wa-icon>
    </wa-button>
    <wa-button appearance="filled" id="button-align-right">
      <wa-icon name="align-right" variant="solid" label="右对齐"></wa-icon>
    </wa-button>
  </wa-button-group>
</div>

<wa-tooltip for="undo-button">撤销</wa-tooltip>
<wa-tooltip for="redo-button">重做</wa-tooltip>
<wa-tooltip for="button-bold">加粗</wa-tooltip>
<wa-tooltip for="button-italic">斜体</wa-tooltip>
<wa-tooltip for="button-underline">下划线</wa-tooltip>

<wa-tooltip for="button-align-left">左对齐</wa-tooltip>
<wa-tooltip for="button-align-center">居中对齐</wa-tooltip>
<wa-tooltip for="button-align-right">右对齐</wa-tooltip>

<style>
  .button-group-toolbar wa-button-group:not(:last-of-type) {
    margin-right: var(--wa-space-xs);
  }
</style>
```
