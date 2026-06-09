---
title: 下拉菜单
layout: component
category: Actions
synonyms:
  - menu
  - context menu
  - action menu
  - popout
  - 菜单
  - 上下文菜单
  - 操作菜单
use-cases:
  - dropdown menu
  - action list
  - command menu
  - right-click menu
  - 下拉菜单
  - 操作列表
  - 右键菜单
---

下拉菜单由触发器和面板组成。默认情况下，激活触发器将显示面板，与面板外部交互将关闭它。

下拉菜单设计用于与[下拉项](/docs/components/dropdown-item)良好配合，以提供用户可以选择的选项列表。但是，下拉菜单也可以用于较低级别的应用程序。API 让你完全控制显示、隐藏和定位面板。

```html {.example}
<wa-dropdown>
  <wa-button appearance="filled" slot="trigger" with-caret>Dropdown</wa-button>

  <wa-dropdown-item>
    <wa-icon slot="icon" name="scissors"></wa-icon>
    Cut
  </wa-dropdown-item>
  <wa-dropdown-item>
    <wa-icon slot="icon" name="copy"></wa-icon>
    Copy
  </wa-dropdown-item>
  <wa-dropdown-item>
    <wa-icon slot="icon" name="paste"></wa-icon>
    Paste
  </wa-dropdown-item>
  <wa-divider></wa-divider>
  <wa-dropdown-item>
    Show images
    <wa-dropdown-item slot="submenu" value="show-all-images">Show All Images</wa-dropdown-item>
    <wa-dropdown-item slot="submenu" value="show-thumbnails">Show Thumbnails</wa-dropdown-item>
  </wa-dropdown-item>
  <wa-divider></wa-divider>
  <wa-dropdown-item type="checkbox" checked>Emoji Shortcuts</wa-dropdown-item>
  <wa-dropdown-item type="checkbox" checked>Word Wrap</wa-dropdown-item>
  <wa-divider></wa-divider>
  <wa-dropdown-item variant="danger">
    <wa-icon slot="icon" name="trash"></wa-icon>
    Delete
  </wa-dropdown-item>
</wa-dropdown>
```

## 示例

### 获取选择的项

当选择一项时，下拉菜单将发出 `wa-select` 事件。你可以检查 `event.detail.item` 以获取对所选项的引用。如果你为每个[下拉项](/docs/components/dropdown-item)提供了值，它将在 `event.detail.item.value` 中可用。

```html {.example}
<div class="dropdown-selection">
  <wa-dropdown>
    <wa-button appearance="filled" slot="trigger" with-caret>View</wa-button>
    <wa-dropdown-item value="full-screen">Enter full screen</wa-dropdown-item>
    <wa-dropdown-item value="actual">Actual size</wa-dropdown-item>
    <wa-dropdown-item value="zoom-in">Zoom in</wa-dropdown-item>
    <wa-dropdown-item value="zoom-out">Zoom out</wa-dropdown-item>
  </wa-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('wa-dropdown');

  dropdown.addEventListener('wa-select', event => {
    console.log(event.detail.item.value);
  });
</script>
```

:::info
要在选择后保持下拉菜单打开，请在 `wa-select` 事件的回调中调用 `event.preventDefault()`。
:::

### 显示图标

使用 `icon` 插槽为[下拉项](/docs/components/dropdown-item)添加图标。这与[图标](/docs/components/icon)元素配合得最好。

```html {.example}
<wa-dropdown>
  <wa-button appearance="filled" slot="trigger" with-caret>Edit</wa-button>

  <wa-dropdown-item value="cut">
    <wa-icon slot="icon" name="scissors"></wa-icon>
    Cut
  </wa-dropdown-item>

  <wa-dropdown-item value="copy">
    <wa-icon slot="icon" name="copy"></wa-icon>
    Copy
  </wa-dropdown-item>

  <wa-dropdown-item value="paste">
    <wa-icon slot="icon" name="paste"></wa-icon>
    Paste
  </wa-dropdown-item>

  <wa-dropdown-item value="delete" variant="danger">
    <wa-icon slot="icon" name="trash"></wa-icon>
    Delete
  </wa-dropdown-item>
</wa-dropdown>
```

### 显示标签和分隔线

使用任何标题，例如 `<h1>`–`<h6>` 来添加标签，并使用 [`<wa-divider>`](/docs/components/divider) 元素作为分隔符。

```html {.example}
<wa-dropdown>
  <wa-button appearance="filled" slot="trigger" with-caret>Device</wa-button>

  <h3>Type</h3>
  <wa-dropdown-item value="phone">Phone</wa-dropdown-item>
  <wa-dropdown-item value="tablet">Tablet</wa-dropdown-item>
  <wa-dropdown-item value="desktop">Desktop</wa-dropdown-item>

  <wa-divider></wa-divider>

  <wa-dropdown-item value="more">More options…</wa-dropdown-item>
</wa-dropdown>
```

### 显示详情

使用 `details` 插槽在[下拉项](/docs/components/dropdown-item)内部显示详情，例如键盘快捷键。

```html {.example}
<wa-dropdown>
  <wa-button appearance="filled" slot="trigger" with-caret>Message</wa-button>

  <wa-dropdown-item value="reply">
    Reply
    <span slot="details">⌘R</span>
  </wa-dropdown-item>

  <wa-dropdown-item value="forward">
    Forward
    <span slot="details">⌘F</span>
  </wa-dropdown-item>

  <wa-dropdown-item value="move">
    Move
    <span slot="details">⌘M</span>
  </wa-dropdown-item>

  <wa-divider></wa-divider>

  <wa-dropdown-item value="archive">
    Archive
    <span slot="details">⌘A</span>
  </wa-dropdown-item>

  <wa-dropdown-item value="delete" variant="danger">
    Delete
    <span slot="details">Del</span>
  </wa-dropdown-item>
</wa-dropdown>
```

### 可勾选项

你可以通过设置 `type="checkbox"` 将[下拉项](/docs/components/dropdown-item)转换为可勾选选项。添加 `checked` 属性使其初始被选中。点击时，项的选中状态将切换，下拉菜单将关闭。如果你希望保持打开，可以取消 `wa-select` 事件。

```html {.example}
<div class="dropdown-checkboxes">
  <wa-dropdown>
    <wa-button appearance="filled" slot="trigger" with-caret>View</wa-button>

    <wa-dropdown-item type="checkbox" value="canvas" checked>Show canvas</wa-dropdown-item>
    <wa-dropdown-item type="checkbox" value="grid" checked>Show grid</wa-dropdown-item>
    <wa-dropdown-item type="checkbox" value="source">Show source</wa-dropdown-item>

    <wa-divider></wa-divider>

    <wa-dropdown-item value="preferences">Preferences…</wa-dropdown-item>
  </wa-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-checkboxes');
  const dropdown = container.querySelector('wa-dropdown');

  dropdown.addEventListener('wa-select', event => {
    if (event.detail.item.type === 'checkbox') {
      // Checkbox
      console.log(event.detail.item.value, event.detail.item.checked ? 'checked' : 'unchecked');
    } else {
      // Not a checkbox
      console.log(event.detail.item.value);
    }
  });
</script>
```

:::info
当下拉菜单中任何地方存在可勾选选项时，所有项将获得额外的内边距，以便它们正确对齐。
:::

### 破坏性操作项

向任何[下拉项](/docs/components/dropdown-item)添加 `variant="danger"` 以突出显示它是一个危险的操作。

```html {.example}
<wa-dropdown>
  <wa-button appearance="filled" slot="trigger" with-caret>Project</wa-button>

  <wa-dropdown-item value="share">
    <wa-icon slot="icon" name="share"></wa-icon>
    Share
  </wa-dropdown-item>

  <wa-dropdown-item value="preferences">
    <wa-icon slot="icon" name="gear"></wa-icon>
    Preferences
  </wa-dropdown-item>

  <wa-divider></wa-divider>

  <h3>Danger zone</h3>

  <wa-dropdown-item value="archive">
    <wa-icon slot="icon" name="archive"></wa-icon>
    Archive
  </wa-dropdown-item>

  <wa-dropdown-item value="delete" variant="danger">
    <wa-icon slot="icon" name="trash"></wa-icon>
    Delete
  </wa-dropdown-item>
</wa-dropdown>
```

### 位置

下拉菜单的首选位置可以用 `placement` 属性设置。请注意，实际位置可能会有所不同，以确保面板保持在视口中。

```html {.example}
<wa-dropdown placement="right-start">
  <wa-button appearance="filled" slot="trigger">
    File formats
    <wa-icon slot="end" name="chevron-right"></wa-icon>
  </wa-button>

  <wa-dropdown-item value="pdf">PDF Document</wa-dropdown-item>
  <wa-dropdown-item value="docx">Word Document</wa-dropdown-item>
  <wa-dropdown-item value="xlsx">Excel Spreadsheet</wa-dropdown-item>
  <wa-dropdown-item value="pptx">PowerPoint Presentation</wa-dropdown-item>
  <wa-dropdown-item value="txt">Plain Text</wa-dropdown-item>
  <wa-dropdown-item value="json">JSON File</wa-dropdown-item>
</wa-dropdown>
```

### 距离

面板到触发器的距离可以使用 `distance` 属性自定义。此值以像素为单位指定。

```html {.example}
<wa-dropdown distance="30">
  <wa-button appearance="filled" slot="trigger" with-caret>Edit</wa-button>

  <wa-dropdown-item>Cut</wa-dropdown-item>
  <wa-dropdown-item>Copy</wa-dropdown-item>
  <wa-dropdown-item>Paste</wa-dropdown-item>

  <wa-divider></wa-divider>

  <wa-dropdown-item>Find</wa-dropdown-item>
  <wa-dropdown-item>Replace</wa-dropdown-item>
</wa-dropdown>
```

### 偏移

面板沿触发器的偏移可以使用 `skidding` 属性自定义。此值以像素为单位指定。

```html {.example}
<wa-dropdown skidding="30">
  <wa-button appearance="filled" slot="trigger" with-caret>Edit</wa-button>

  <wa-dropdown-item>Cut</wa-dropdown-item>
  <wa-dropdown-item>Copy</wa-dropdown-item>
  <wa-dropdown-item>Paste</wa-dropdown-item>

  <wa-divider></wa-divider>

  <wa-dropdown-item>Find</wa-dropdown-item>
  <wa-dropdown-item>Replace</wa-dropdown-item>
</wa-dropdown>
```

### 子菜单

要创建子菜单，请在下拉项内部嵌套[下拉项](/docs/components/dropdown-item)，并为每个项分配 `slot="submenu"`。你还可以根据需要添加[分隔线](/docs/components/divider)。

```html {.example}
<div class="dropdown-submenus">
  <wa-dropdown>
    <wa-button appearance="filled" slot="trigger" with-caret>Export</wa-button>

    <wa-dropdown-item>
      Documents
      <wa-dropdown-item slot="submenu" value="pdf">PDF</wa-dropdown-item>
      <wa-dropdown-item slot="submenu" value="docx">Word Document</wa-dropdown-item>
    </wa-dropdown-item>

    <wa-dropdown-item>
      Spreadsheets
      <wa-dropdown-item slot="submenu">
        Excel Formats
        <wa-dropdown-item slot="submenu" value="xlsx">Excel (.xlsx)</wa-dropdown-item>
        <wa-dropdown-item slot="submenu" value="xls">Excel 97-2003 (.xls)</wa-dropdown-item>
        <wa-dropdown-item slot="submenu" value="csv">CSV (.csv)</wa-dropdown-item>
      </wa-dropdown-item>

      <wa-dropdown-item slot="submenu">
        Other Formats
        <wa-dropdown-item slot="submenu" value="ods">OpenDocument (.ods)</wa-dropdown-item>
        <wa-dropdown-item slot="submenu" value="tsv">Tab-separated (.tsv)</wa-dropdown-item>
        <wa-dropdown-item slot="submenu" value="json">JSON (.json)</wa-dropdown-item>
      </wa-dropdown-item>

      <wa-dropdown-item slot="submenu" value="numbers">Apple Numbers</wa-dropdown-item>
    </wa-dropdown-item>

    <wa-divider></wa-divider>

    <wa-dropdown-item>
      Options
      <wa-dropdown-item slot="submenu" type="checkbox" value="compress">Compress files</wa-dropdown-item>
      <wa-dropdown-item slot="submenu" type="checkbox" checked value="metadata">Include metadata</wa-dropdown-item>
      <wa-dropdown-item slot="submenu" type="checkbox" value="password">Password protect</wa-dropdown-item>
    </wa-dropdown-item>
  </wa-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-submenus');
  const dropdown = container.querySelector('wa-dropdown');

  dropdown.addEventListener('wa-select', event => {
    console.log(event.detail.item.value);
  });
</script>
```

:::info
具有子菜单的下拉项不会发出 `wa-select` 事件。但是，子菜单内的项会发出，除非它们也有子菜单。
:::

:::warning
作为 UX 最佳实践，尽可能避免使用多于一级的子菜单。
:::

### 禁用项

向任何[下拉项](/docs/components/dropdown-item)添加 `disabled` 属性以禁用它。

```html {.example}
<wa-dropdown>
  <wa-button appearance="filled" slot="trigger" with-caret>Payment method</wa-button>

  <wa-dropdown-item value="cash">Cash</wa-dropdown-item>
  <wa-dropdown-item value="check" disabled>Personal check</wa-dropdown-item>
  <wa-dropdown-item value="credit">Credit card</wa-dropdown-item>
  <wa-dropdown-item value="gift-card">Gift card</wa-dropdown-item>
</wa-dropdown>
```
