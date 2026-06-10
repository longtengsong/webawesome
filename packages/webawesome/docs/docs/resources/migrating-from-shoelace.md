---
title: 从 Shoelace 迁移
description: 完整的、按组件逐个介绍的指南，帮助您从 Shoelace 2.x 迁移到 @SITE_NAME@。
layout: page-outline
---

{% from "macros/component-badges.njk" import statusBadge %}

<style type="text/css">
  .migration-soft-landing-callout,
  .migration-warning-callout {
    margin-block: var(--wa-space-xl);
  }

  .migration-checklist-actions {
    margin-block-end: var(--wa-space-xl);
  }

</style>

@SITE_NAME@ 是 [Shoelace](https://shoelace.style) 的下一个主要版本。它保留了 Shoelace 的精神（框架无关的自定义元素，默认可访问，开箱即用的美观），并在更强大的基础上进行了重构：原生表单关联、级联层、基于 OKLCH 的主题系统、真正的实用 CSS 层，以及更丰富的组件库。

本指南适用于正在使用 Shoelace 2.x 项目并希望升级的开发者。我们假设您熟悉 HTML、CSS、JavaScript 和自定义元素。

如果您是 @SITE_NAME@ 新手，[入门指南](/docs/)是更好的起点。

<wa-callout class="pro">
  <wa-icon slot="icon" name="hand-wave" animation="shake" style="--animation-delay: 2s; --animation-duration: 4s;"></wa-icon>
  <strong>部分组件现在位于 @SITE_NAME@ Pro</strong>
  Toast 通知、Combobox、文件输入和图表已移至 <a href="#whats-in-web-awesome-pro">@SITE_NAME@ Pro</a>。我们用 <wa-badge appearance="accent" pill class="pro" data-pro-badge>Pro</wa-badge> 徽章清晰标注，让您能提前知晓。
</wa-callout>

## 快速了解

如果您只需要记住最关键的几点，以下是：

1. 替换包名：`@shoelace-style/shoelace` → `@awesome.me/webawesome`
2. 替换所有元素前缀：`sl-` → `wa-`
3. 替换所有 CSS 变量前缀：`--sl-*` → `--wa-*`
4. 替换所有事件前缀：`sl-` → `wa-`（例如 `sl-show` → `wa-show`）
5. 替换 `variant="primary"` → `variant="brand"`。@SITE_NAME@ 不再使用 "primary"。
6. 移除 `outline`、`circle` 和某些地方的 `text` 按钮属性。改用 `appearance="outlined" | "filled" | "plain"`。
7. 输入框及类似控件：`prefix`/`suffix` 插槽 → `start`/`end`，`help-text` → `hint`。
8. `<sl-menu>`/`<sl-menu-item>` → `<wa-dropdown>`/`<wa-dropdown-item>`。不再有独立的菜单组件。
9. `<sl-alert>` → `<wa-callout>`（用于静态块）。Toast 交互现在位于 [`<wa-toast>`](#whats-in-web-awesome-pro) <wa-badge appearance="accent" pill class="pro">Pro</wa-badge>。
10. `<sl-image-comparer>` → `<wa-comparison>`，`<sl-range>` → `<wa-slider>`。

本页面的其余部分将详细解释这些变化、逐组件的差异，以及您获得的新功能。

## @SITE_NAME@ 与 Shoelace 的区别

在理念上有一些不同之处。提前了解这些可以节省您的时间。

**级联层（Cascade Layers）**<br>
组件样式位于 `@layer wa-component` 中，因此您的非分层应用 CSS 会自动在特异性冲突中获胜——您可以删除大部分针对组件内部的 `!important` 覆盖。@SITE_NAME@ 自身的层级按强度排序为：`wa-theme`、`wa-color-variant`、`wa-color-palette`、`wa-utilities`、`wa-component`。<br><br>
**原生表单关联**<br>
表单控件使用 `ElementInternals`，因此它们原生参与 `<form>`。`new FormData(form)` 会读取它们，`form.checkValidity()` 包含它们，`form.reset()` 会重置它们。Shoelace 所需的 `formdata` 事件垫片已被移除。<br><br>
<strong>用于软着陆的 `shoelace` 主题</strong><br>
在 `<html>` 上应用 `class="wa-theme-shoelace wa-palette-shoelace"`，可获得与 Shoelace 默认值接近的调色板和设计。浅色/深色是基于类的：`wa-light`、`wa-dark`，使用 `wa-invert` 可以翻转子树。（默认还包含 `default` 和 `awesome` 主题；Pro 版本提供更多）。<br><br>
**原生 HTML 也可以主题化**<br>
可选的 `dist/styles/native.css` 使用与 @SITE_NAME@ 主题相同的设计令牌为纯 HTML 元素（`<button>`、`<input>`、`<table>`、`<details>`、`<dialog>`、标题、列表和块引用）设置主题。Shoelace 没有此功能。<br><br>
**真正的实用层**<br>
布局原语（`wa-cluster`、`wa-stack`、`wa-grid`、`wa-frame`、`wa-flank`、`wa-split`）、间距（`wa-gap-*`）、排版（`wa-body`、`wa-heading`、`wa-caption`、`wa-longform`）和可访问性辅助（`wa-visually-hidden`）作为纯 CSS 类提供。无需 JavaScript，无需组件。<br><br>

## 选择您的迁移路径

您可以自己逐步完成，也可以将大部分迁移工作交给 AI 编码助手。

<wa-tab-group active="manual">
  <wa-tab panel="manual">手动迁移</wa-tab>
  <wa-tab panel="ai">使用 AI 助手</wa-tab>

<wa-tab-panel name="manual">

按顺序完成以下步骤。使用交互式清单跟踪进度（保存在浏览器中），或将 Markdown 版本放入您的仓库，使其与代码一起保存。

<div class="migration-checklist-actions wa-cluster wa-gap-s">
  <wa-button variant="brand" appearance="accent" size="m" href="/docs/resources/migration-checklist">
    <wa-icon slot="start" variant="regular" name="list-check"></wa-icon>
    打开交互式清单
  </wa-button>
  <wa-button variant="brand" appearance="outlined" size="m" href="/assets/downloads/shoelace-migration-checklist.md" download="shoelace-migration-checklist.md">
    <wa-icon slot="start" variant="" name="download"></wa-icon>
    下载 Markdown 格式清单
  </wa-button>
</div>

### 第 1 步：安装 @SITE_NAME@

移除 Shoelace 并添加 @SITE_NAME@。

```diff
- npm uninstall @shoelace-style/shoelace
+ npm install @awesome.me/webawesome
```

然后更新您的导入。

```diff
- import '@shoelace-style/shoelace/dist/themes/light.css';
- import '@shoelace-style/shoelace/dist/shoelace-autoloader.js';
+ import '@awesome.me/webawesome/dist/styles/webawesome.css';
+ import '@awesome.me/webawesome/dist/webawesome.loader.js';
```

或者使用 CDN：

```diff
- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2/cdn/themes/light.css" />
- <script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2/cdn/shoelace-autoloader.js"></script>
+ <link rel="stylesheet" href="{% cdnUrl 'styles/webawesome.css' %}">
+ <script type="module" src="{% cdnUrl 'webawesome.loader.js' %}"></script>
```

选择性导入单个组件的方式相同。只需将路径指向 `@awesome.me/webawesome/dist/components/*/...` 而非 `@shoelace-style/shoelace/dist/components/*/...`。

如果您使用了 `setBasePath()`，导入位置会移动，但 API 保持不变：

```diff
- import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
+ import { setBasePath } from '@awesome.me/webawesome/dist/webawesome.js';
  setBasePath('/path/to/assets');
```

<wa-callout variant="brand" class="migration-soft-landing-callout">
  <wa-icon slot="icon" name="lightbulb" variant="regular"></wa-icon>
  <strong>想要软着陆？</strong><br />
  先应用 Shoelace 兼容主题：`<code>&lt;html class="wa-theme-shoelace wa-light"&gt;</code>`。它会添加与 Shoelace 默认值接近的调色板和设计，让您可以专注于标记变更，而不必与不熟悉的样式作斗争。
</wa-callout>

### 第 2 步：全局查找和替换

大部分迁移都是机械的文本替换。以下是我们建议按顺序在代码库上运行的模式。大多数编辑器支持项目级正则表达式查找和替换；每次运行后提交。

#### 必需的全局替换

| 查找                       | 替换                  | 位置                                  |
| -------------------------- | --------------------- | ------------------------------------- |
| `@shoelace-style/shoelace` | `@awesome.me/webawesome` | 导入                                  |
| `<sl-`                     | `<wa-`                | 模板 / HTML                           |
| `</sl-`                    | `</wa-`               | 模板 / HTML                           |
| `--sl-`                    | `--wa-`               | CSS 文件、内联样式                    |
| `sl-theme-`                | `wa-theme-`           | 类名                                  |
| `'sl-`（事件名）           | `'wa-`                | JavaScript 事件监听器（见下方警告）   |
| `"sl-`（事件名）           | `"wa-`                | JavaScript 事件监听器（见下方警告）   |
| `Sl`（事件类前缀）         | `Wa`                  | TypeScript 事件类导入                 |

<wa-callout variant="warning" class="migration-warning-callout">
  <wa-icon slot="icon" name="triangle-exclamation" variant="regular"></wa-icon>
  <strong>静默损坏警告。</strong>事件监听器字符串是风险最高的变更。如果您写了 <code>el.addEventListener('sl-show', …)</code> 但忘记更新，不会抛出错误。监听器只是永远不会触发。迁移后在代码库中搜索 <code>'sl-</code> 和 <code>"sl-</code>，确认没有剩余。
</wa-callout>

#### 推荐的一次性调整

| 查找                      | 替换                | 备注                                                                       |
| ------------------------- | ------------------- | -------------------------------------------------------------------------- |
| `variant="primary"`       | `variant="brand"`   | Shoelace 的 "primary" 现在是 "brand"。影响按钮、徽章、提醒、标签等。        |
| `class="sl-theme-light"`  | `class="wa-light"`  | 浅色主题现在是独立的类                                                     |
| `class="sl-theme-dark"`   | `class="wa-dark"`   | 深色主题现在是独立的类                                                     |
| `slot="prefix"`           | `slot="start"`      | 输入框、按钮、选择框、面包屑项等                                           |
| `slot="suffix"`           | `slot="end"`        | 同上                                                                       |
| `help-text=` / `slot="help-text"` | `hint=` / `slot="hint"` | 表单控件将 help-text 重命名为 hint                                      |

完整的逐组件明细在下方。这些模式仅覆盖高频率的变更。

### 第 3 步：组件变更

以下组件按变更类型分组。**如果组件未在此列出，则只需将 `sl-`→`wa-` 重命名即可干净迁移。**这涵盖了大多数组件：avatar、breadcrumb、breadcrumb-item、card、checkbox、copy-button、details、divider、format-bytes、format-date、format-number、icon、include、mutation-observer、popup、progress-bar、progress-ring、qr-code、radio、radio-group、rating、relative-time、resize-observer、skeleton、spinner、split-panel、switch、tab、tab-group、tab-panel、textarea、tooltip、tree、tree-item。

#### 重命名的元素

| Shoelace                   | @SITE_NAME@                          | 备注                                                                                     |
| -------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------- |
| `<sl-alert>`               | `<wa-callout>`                       | 静态内联提醒。Toast 交互已移至 `<wa-toast>` <wa-badge appearance="accent" pill class="pro">Pro</wa-badge>。 |
| `<sl-image-comparer>`      | `<wa-comparison>`                    | 相同概念，更简洁的 API。                                                                 |
| `<sl-range>`               | `<wa-slider>`                        | 通过 `range` 特性添加了多滑块范围支持。                                                  |
| `<sl-menu>` + `<sl-menu-item>` | `<wa-dropdown>` + `<wa-dropdown-item>` | 独立菜单已移除。菜单只存在于下拉框中。                                    |

#### 移除的元素

| Shoelace               | 替换方案                                                                                                                                 |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `<sl-icon-button>`     | 使用带有单个 `<wa-icon>` 子元素的 `<wa-button>`。按钮会自动获得 `:state(icon-button)` 并渲染紧凑的、仅图标的样式。                       |
| `<sl-menu-label>`      | 在 `<wa-dropdown>` 中使用 `<wa-divider>` 和标题元素，或重构为嵌套的下拉项。                                                             |
| `<sl-radio-button>`    | 使用带有 `appearance="button"` 的 `<wa-radio>`。没有专门的单选按钮组件。                                                                |
| `<sl-visually-hidden>` | 在任意元素上使用 `wa-visually-hidden` 实用类。                                                                                          |

#### 新的核心组件

这些是 @SITE_NAME@ 中全新的（免费，MIT 许可）。我们在此提及它们，因为它们通常取代了之前需要在 Shoelace 之上编写自定义代码的模式。

- **`<wa-callout>`：** 替换大多数用于内联消息的 `<sl-alert>`。
- **`<wa-comparison>`：** 带有前后滑块的视觉内容（替换 `<sl-image-comparer>`）。
- **`<wa-popover>`：** 锚定的、持久的弹出框内容（与 `<wa-tooltip>` 和 `<wa-dropdown>` 分开）。适用于帮助气泡、上下文内提醒和功能高亮。
- **`<wa-page>`：** 带有 header、sidebar、main 和 footer 插槽的应用外壳，包括内置的移动端导航抽屉。
- **`<wa-scroller>`：** 带有滚动提示（阴影、边缘渐变、可选滚动按钮）的溢出容器。
- **`<wa-zoomable-frame>`：** 可缩放、可平移的 iframe 包装器。
- **`<wa-number-input>`：** 带有步进按钮的专用数字输入框，与 `<wa-input>` 分开。
- **`<wa-markdown>`：** 在浏览器中渲染 Markdown（实验性）。
- **`<wa-intersection-observer>`：** 作为组件公开的观察者原语，与现有的 mutation/resize 观察者一起。

#### 新的 Pro 组件

这些涵盖了 Shoelace 用户经常自己构建或与第三方库拼接的模式。它们位于 [`@awesome.me/webawesome-pro`](#whats-in-web-awesome-pro)：

- **`<wa-toast>` 和 `<wa-toast-item>`：** toast 通知栈。替换 `sl-alert.toast()` 模式。
- **`<wa-combobox>`：** 带有多选、异步加载和标签渲染的组合框或自动完成。
- **`<wa-file-input>`：** 带有预览和验证的拖放文件输入。
- **`<wa-chart>` 和七个类型化的图表子类：** `<wa-bar-chart>`、`<wa-line-chart>`、`<wa-pie-chart>`、`<wa-doughnut-chart>`、`<wa-bubble-chart>`、`<wa-scatter-chart>`、`<wa-radar-chart>`、`<wa-polar-area-chart>`。基于 Chart.js 构建，使用 @SITE_NAME@ 设计令牌主题化。
- **`<wa-sparkline>`：** 小型内联趋势可视化。

#### 逐组件变更

以下部分仅涵盖 API 变更超出 `sl-` 到 `wa-` 重命名的组件。未在此列出的组件可干净迁移。

##### wa-button <span class="de-emphasize">（原为 sl-button）</span>

`<wa-button>` 比 `<sl-button>` 功能更强。视觉修饰符合并到单个 `appearance` 特性中，并且 `circle` 已移除（仅图标的按钮会自动检测）。

```diff
- <sl-button variant="primary">Save</sl-button>
+ <wa-button variant="brand">Save</wa-button>

- <sl-button variant="default" outline>Cancel</sl-button>
+ <wa-button appearance="outlined">Cancel</wa-button>

- <sl-button variant="text">Learn more</sl-button>
+ <wa-button appearance="plain">Learn more</wa-button>

- <sl-button circle>
-   <sl-icon name="gear"></sl-icon>
- </sl-button>
+ <wa-button pill>
+   <wa-icon name="gear"></wa-icon>
+ </wa-button>
```

| Shoelace                 | @SITE_NAME@             | 变更                                                                                         |
| ------------------------ | ----------------------- | -------------------------------------------------------------------------------------------- |
| `variant="default"`      | （默认）                | 默认现在是 `neutral`。无需设置即可获得等效效果。                                              |
| `variant="primary"`      | `variant="brand"`       | 重命名                                                                                       |
| `variant="text"`         | `appearance="plain"`    | 视觉处理移至 `appearance`                                                                    |
| 特性 `outline`（布尔值） | `appearance="outlined"` | 替换                                                                                         |
| 特性 `circle`（布尔值）  | _（已移除）_            | 带有单个 `<wa-icon>` 子元素的按钮会自动应用图标样式。添加 `pill` 以获得圆形外观。             |
| 特性 `caret`             | 特性 `with-caret`       | 重命名                                                                                       |
| 插槽 `prefix`            | 插槽 `start`            | 重命名                                                                                       |
| 插槽 `suffix`            | 插槽 `end`              | 重命名                                                                                       |
| 事件 `sl-blur`           | 事件 `blur`             | 原生事件，无前缀                                                                             |
| 事件 `sl-focus`          | 事件 `focus`            | 原生事件，无前缀                                                                             |
| 事件 `sl-invalid`        | 事件 `wa-invalid`       | 重命名                                                                                       |

**`<wa-button>` 的新功能：**<br>
通过 `with-start` / `with-end` 实现完整的 SSR 支持、`appearance="filled"` 和 `appearance="filled-outlined"`，以及 CSS 自定义状态（`:state(disabled)`、`:state(loading)`、`:state(link)`、`:state(icon-button)`）。

##### wa-input <span class="de-emphasize">（原为 sl-input）</span>

最大的变化是 "help text" 现在是 "hint"，并且 `prefix`/`suffix` 插槽现在是 `start`/`end`。类型特定的行为也已拆分：对于数字输入，建议使用新的 `<wa-number-input>`。

```diff
- <sl-input
-   label="Username"
-   help-text="Choose something memorable"
-   clearable
- >
-   <sl-icon slot="prefix" name="user"></sl-icon>
- </sl-input>
+ <wa-input
+   label="Username"
+   hint="Choose something memorable"
+   with-clear
+ >
+   <wa-icon slot="start" name="user"></wa-icon>
+ </wa-input>
```

| Shoelace                  | @SITE_NAME@                          | 变更                                                                                                                       |
| ------------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| 特性 `help-text`          | 特性 `hint`                          | 重命名                                                                                                                     |
| 插槽 `help-text`          | 插槽 `hint`                          | 重命名                                                                                                                     |
| 插槽 `prefix`             | 插槽 `start`                         | 重命名                                                                                                                     |
| 插槽 `suffix`             | 插槽 `end`                           | 重命名                                                                                                                     |
| 特性 `clearable`          | 特性 `with-clear`                    | 重命名                                                                                                                     |
| 特性 `filled`（布尔值）   | `appearance="filled"`                | 替换                                                                                                                       |
| 事件 `sl-clear`           | _（已移除）_                         | 监听清除后的 `input`，或者如果您需要专门处理点击，则监听 `wa-clear`。大多数应用不需要此；使用 `input`。                    |
| 事件 `sl-blur`            | 事件 `blur`                          | 原生事件                                                                                                                   |
| 事件 `sl-focus`           | 事件 `focus`                         | 原生事件                                                                                                                   |
| 事件 `sl-change`          | 事件 `change`                        | 原生事件                                                                                                                   |
| 事件 `sl-input`           | 事件 `input`                         | 原生事件                                                                                                                   |
| 事件 `sl-invalid`         | 事件 `wa-invalid`                    | 重命名                                                                                                                     |
| 方法 `getForm()`          | 属性 `form`                          | 现在是返回关联 `HTMLFormElement` 的属性                                                                                   |
| 方法 `checkValidity()`    | _（使用 `internals.checkValidity()`）_ | 浏览器原生验证。在元素上调用，元素现在是表单关联的                                                                       |
| 方法 `reportValidity()`   | _（使用原生）_                       | 同上                                                                                                                       |

**数字输入：** `<sl-input type="number">` 仍然可以作为 `<wa-input type="number">` 使用，但为了获得更丰富的数字体验（清除步进按钮、`beforeinput` 取消、区域设置感知格式化），建议使用 `<wa-number-input>`。

##### wa-textarea <span class="de-emphasize">（原为 sl-textarea）</span>

与 `<wa-input>` 有相同的重命名：`help-text` → `hint`，`prefix`/`suffix` → `start`/`end`，原生事件名，`wa-invalid`。没有其他 API 差异。

##### wa-select <span class="de-emphasize">（原为 sl-select）</span>

```diff
- <sl-select label="Color" help-text="Pick one">
-   <sl-option value="red">Red</sl-option>
-   <sl-option value="green">Green</sl-option>
- </sl-select>
+ <wa-select label="Color" hint="Pick one">
+   <wa-option value="red">Red</wa-option>
+   <wa-option value="green">Green</wa-option>
+ </wa-select>
```

| Shoelace         | @SITE_NAME@                      | 变更                   |
| ---------------- | -------------------------------- | ---------------------- |
| 特性 `help-text` | 特性 `hint`                      | 重命名                 |
| 插槽 `help-text` | 插槽 `hint`                      | 重命名                 |
| 插槽 `prefix`    | 插槽 `start`                     | 重命名                 |
| 插槽 `suffix`    | 插槽 `end`                       | 重命名                 |
| 特性 `clearable` | 特性 `with-clear`                | 重命名                 |
| 特性 `filled`    | `appearance="filled"`            | 替换                   |
| 事件 `sl-*`      | 事件 `wa-*`（自定义）或原生      | 与输入框相同的模式     |

如果您需要自动完成、异步选项加载、带标签的多选或远程搜索，请参阅 [`<wa-combobox>`](#whats-in-web-awesome-pro) <wa-badge appearance="accent" pill class="pro">Pro</wa-badge>。

##### wa-checkbox、wa-radio、wa-radio-group、wa-switch

与其他表单控件有相同的模式：

- `help-text` → `hint`
- `sl-blur` / `sl-focus` / `sl-change` → 原生 `blur` / `focus` / `change`
- `sl-invalid` → `wa-invalid`
- 所有控件现在都是表单关联的自定义元素。它们原生地在 `<form>` 中工作，无需垫片。

`<sl-radio-button>`（视觉上样式化为按钮的单选框）已被移除。如果您需要该外观，请使用带有 `appearance="button"` 的 `<wa-radio>`。

##### wa-slider <span class="de-emphasize">（原为 sl-range）</span>

已重命名并获得了范围（多滑块）支持。

```diff
- <sl-range label="Volume" min="0" max="100"></sl-range>
+ <wa-slider label="Volume" min="0" max="100"></wa-slider>

  <!-- 新增：范围模式 -->
+ <wa-slider label="Price" min="0" max="1000" range
+   min-value="100" max-value="500"></wa-slider>
```

| Shoelace             | @SITE_NAME@                                                          | 变更                                     |
| -------------------- | -------------------------------------------------------------------- | ---------------------------------------- |
| 元素 `<sl-range>`    | 元素 `<wa-slider>`                                                   | 重命名                                   |
| 特性 `help-text`     | 特性 `hint`                                                          | 重命名                                   |
| 特性 `tooltip`       | 特性 `with-tooltip`（布尔值）+ `tooltip-placement` + `tooltip-distance` | 拆分                             |
| _（无）_             | 特性 `range`                                                         | 新增：启用双滑块范围选择                 |
| _（无）_             | 特性 `with-markers`                                                  | 新增：在轨道上绘制步进标记               |

##### wa-callout <span class="de-emphasize">（取代 sl-alert 用于内联使用）</span>

`<sl-alert>` 既是静态内联提醒又是 toast 通知系统。@SITE_NAME@ 将这些分开：

- **静态内联消息** → `<wa-callout>`
- **Toasts** → `<wa-toast>` <wa-badge appearance="accent" pill class="pro">Pro</wa-badge>

```diff
- <sl-alert variant="warning" open>
-   <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
-   Your session will expire in 5 minutes.
- </sl-alert>
+ <wa-callout variant="warning">
+   <wa-icon slot="icon" name="triangle-exclamation"></wa-icon>
+   Your session will expire in 5 minutes.
+ </wa-callout>
```

| Shoelace                   | @SITE_NAME@          | 变更                                                                                           |
| -------------------------- | -------------------- | ---------------------------------------------------------------------------------------------- |
| `variant="primary"`        | `variant="brand"`    | 重命名                                                                                         |
| 特性 `open`                | _（已移除）_         | 提醒始终渲染。使用您自己的条件渲染来隐藏它们。                                                 |
| 特性 `closable`            | _（已移除）_         | 如需，请添加您自己的关闭按钮。                                                                 |
| 特性 `duration`            | _（已移除）_         | 静态块，无自动关闭。如需该功能，请使用 `<wa-toast>`。                                          |
| 方法 `show()` / `hide()`   | _（已移除）_         | 通过您的框架使用显示/隐藏。                                                                   |
| 方法 `toast()`             | _（使用 `<wa-toast>`）_ | Toast 交互已移至 `<wa-toast>` <wa-badge appearance="accent" pill class="pro">Pro</wa-badge>。 |
| 事件 `sl-show`/`sl-hide`   | _（已移除）_         | 提醒上没有打开状态。                                                                          |

##### wa-dialog <span class="de-emphasize">（原为 sl-dialog）</span>

`<wa-dialog>` 构建在原生 `<dialog>` 元素之上。插槽和事件名已更改。

```diff
- <sl-dialog label="Confirm" open>
-   Are you sure?
-   <div slot="footer">
-     <sl-button variant="default">Cancel</sl-button>
-     <sl-button variant="primary">OK</sl-button>
-   </div>
- </sl-dialog>
+ <wa-dialog label="Confirm" open>
+   Are you sure?
+   <wa-button slot="footer">Cancel</wa-button>
+   <wa-button slot="footer" variant="brand">OK</wa-button>
+ </wa-dialog>
```

| Shoelace                 | @SITE_NAME@                   | 变更                                                                                                                          |
| ------------------------ | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 事件 `sl-show`           | 事件 `wa-show`                | 重命名                                                                                                                        |
| 事件 `sl-after-show`     | 事件 `wa-after-show`          | 重命名                                                                                                                        |
| 事件 `sl-hide`           | 事件 `wa-hide`                | 重命名                                                                                                                        |
| 事件 `sl-after-hide`     | 事件 `wa-after-hide`          | 重命名                                                                                                                        |
| 事件 `sl-initial-focus`  | 事件 `wa-initial-focus`       | 重命名                                                                                                                        |
| 事件 `sl-request-close`  | 事件 `wa-hide`（可取消）      | 取消 `wa-hide` 以保持对话框打开。`event.detail.source` 会告诉您是关闭按钮、遮罩还是 Escape 键。                               |
| `noHeader` 特性          | `without-header` 特性         | 重命名                                                                                                                        |
| 插槽 `header-actions`     | 插槽 `header-actions`         | 未更改                                                                                                                        |

`<wa-dialog>` 在元素上直接公开生命周期方法，但推荐使用基于特性的模式（`open`/`!open`）来驱动它。

##### wa-drawer <span class="de-emphasize">（原为 sl-drawer）</span>

与对话框有相同的事件模式：`sl-show` → `wa-show`，`sl-request-close` → 可取消的 `wa-hide`。插槽名未更改。`placement` 未更改。

##### wa-dropdown 和 wa-dropdown-item <span class="de-emphasize">（取代 sl-menu、sl-menu-item 和 sl-dropdown）</span>

这是迁移中最大的结构变更。Shoelace 为此模式有三个组件：

- `<sl-dropdown>`：浮动容器
- `<sl-menu>`：菜单（可以是独立的）
- `<sl-menu-item>`：菜单项

@SITE_NAME@ 将这些合并为两个：

- `<wa-dropdown>`：浮动容器，直接包含项
- `<wa-dropdown-item>`：菜单项

```diff
- <sl-dropdown>
-   <sl-button slot="trigger" caret>Actions</sl-button>
-   <sl-menu>
-     <sl-menu-item>Edit</sl-menu-item>
-     <sl-menu-item>Duplicate</sl-menu-item>
-     <sl-divider></sl-divider>
-     <sl-menu-item>Delete</sl-menu-item>
-   </sl-menu>
- </sl-dropdown>
+ <wa-dropdown>
+   <wa-button slot="trigger" with-caret>Actions</wa-button>
+   <wa-dropdown-item>Edit</wa-dropdown-item>
+   <wa-dropdown-item>Duplicate</wa-dropdown-item>
+   <wa-divider></wa-divider>
+   <wa-dropdown-item>Delete</wa-dropdown-item>
+ </wa-dropdown>
```

如果您独立使用 `<sl-menu>`（不在下拉框内，例如静态命令面板），您需要使用 `<wa-dropdown-item>` 在任意容器中自行组装，或使用完全不同的模式。没有独立的菜单元素。

| Shoelace                | @SITE_NAME@                        | 变更                                                      |
| ----------------------- | ---------------------------------- | --------------------------------------------------------- |
| `<sl-menu>`             | _（已移除；使用 `<wa-dropdown>`）_ | 没有独立菜单                                              |
| `<sl-menu-item>`        | `<wa-dropdown-item>`               | 重命名                                                    |
| `<sl-menu-label>`       | _（已移除）_                       | 使用 `<wa-divider>` + 标题，或嵌套的下拉项                |
| 事件 `sl-select`        | 事件 `wa-select`                   | 重命名                                                    |
| 触发器上的 `caret` 特性 | `<wa-button>` 上的 `with-caret` 特性 | 重命名                                                    |

##### wa-comparison <span class="de-emphasize">（原为 sl-image-comparer）</span>

```diff
- <sl-image-comparer position="50">
-   <img slot="before" src="before.jpg" />
-   <img slot="after" src="after.jpg" />
- </sl-image-comparer>
+ <wa-comparison position="50">
+   <img slot="before" src="before.jpg" />
+   <img slot="after" src="after.jpg" />
+ </wa-comparison>
```

插槽名（`before`、`after`、`handle`）和 `position` 特性完全相同。只有元素名更改，以及 `change` 上的事件前缀（现在是原生 `change` 事件）。

##### wa-tag <span class="de-emphasize">（原为 sl-tag）</span>

```diff
- <sl-tag variant="primary" pill removable>Featured</sl-tag>
+ <wa-tag variant="brand" pill with-remove>Featured</wa-tag>
```

| Shoelace            | @SITE_NAME@          | 变更     |
| ------------------- | -------------------- | -------- |
| `variant="primary"` | `variant="brand"`    | 重命名   |
| 特性 `removable`    | 特性 `with-remove`   | 重命名   |
| 事件 `sl-remove`    | 事件 `wa-remove`     | 重命名   |

##### wa-tooltip <span class="de-emphasize">（原为 sl-tooltip）</span>

| Shoelace                       | @SITE_NAME@                               | 变更                      |
| ------------------------------ | ----------------------------------------- | ------------------------- |
| 特性 `content`                 | 特性 `content`（或默认插槽用于 HTML）     | 相同                      |
| 事件 `sl-show`/`sl-hide` 等    | 事件 `wa-show`/`wa-hide` 等               | 重命名                    |
| 工具提示上的 `for` 特性        | 工具提示上的 `for` 特性                   | 相同。指向元素 ID         |

##### wa-tab-group、wa-tab、wa-tab-panel

标签页使用相同的结构，但激活事件已重命名，面板连接未更改。

| Shoelace                     | @SITE_NAME@                      | 变更     |
| ---------------------------- | -------------------------------- | -------- |
| `sl-tab-show`                | `wa-tab-show`                    | 重命名   |
| `sl-tab-hide`                | `wa-tab-hide`                    | 重命名   |
| 可关闭标签页上的 `sl-close`  | 请参阅文档获取更新的示例         | 重命名   |

##### wa-color-picker <span class="de-emphasize">（原为 sl-color-picker）</span>

格式和值 API 未更改。对大多数应用来说，只有事件前缀是唯一的变更。

| Shoelace                     | @SITE_NAME@            | 变更           |
| ---------------------------- | ---------------------- | -------------- |
| 事件 `sl-change`/`sl-input`  | 事件 `change`/`input`  | 原生事件       |
| 事件 `sl-invalid`            | 事件 `wa-invalid`      | 重命名         |
| 特性 `help-text`             | 特性 `hint`            | 重命名         |

##### wa-tree 和 wa-tree-item

| Shoelace                                | @SITE_NAME@                             | 变更     |
| --------------------------------------- | --------------------------------------- | -------- |
| 事件 `sl-selection-change`              | 事件 `wa-selection-change`              | 重命名   |
| 事件 `sl-expand`/`sl-collapse`          | 事件 `wa-expand`/`wa-collapse`          | 重命名   |
| 事件 `sl-after-expand` 等               | 事件 `wa-after-expand` 等               | 重命名   |
| 事件 `sl-lazy-load` / `sl-lazy-change`  | 事件 `wa-lazy-load` / `wa-lazy-change`  | 重命名   |

选择模式 API（`single`/`multiple`/`leaf`）和项结构在其他方面未更改。

##### wa-carousel 和 wa-carousel-item

`<wa-carousel>` 目前是 {{ statusBadge('experimental') }}。事件重命名与库的其他部分一致：

| Shoelace          | @SITE_NAME@       | 变更     |
| ----------------- | ----------------- | -------- |
| `sl-slide-change` | `wa-slide-change` | 重命名   |

##### wa-animation <span class="de-emphasize">（原为 sl-animation）</span>

Web Animations API 表面未更改。事件重命名：

| Shoelace    | @SITE_NAME@ | 变更     |
| ----------- | ----------- | -------- |
| `sl-cancel` | `wa-cancel` | 重命名   |
| `sl-finish` | `wa-finish` | 重命名   |
| `sl-start`  | `wa-start`  | 重命名   |

##### wa-details <span class="de-emphasize">（原为 sl-details）</span>

`<wa-details>` 扩展了原生 `<details>` 模式。

| Shoelace                       | @SITE_NAME@                    | 变更       |
| ------------------------------ | ------------------------------ | ---------- |
| 事件 `sl-show`/`sl-hide` 等    | 事件 `wa-show`/`wa-hide` 等    | 重命名     |
| 插槽 `summary`                 | 插槽 `summary`                 | 未更改     |

##### wa-copy-button <span class="de-emphasize">（原为 sl-copy-button）</span>

目前是 {{ statusBadge('experimental') }}。在其他方面可直接替换。

| Shoelace    | @SITE_NAME@ | 变更     |
| ----------- | ----------- | -------- |
| `sl-copy`   | `wa-copy`   | 重命名   |
| `sl-error`  | `wa-error`  | 重命名   |

##### wa-rating <span class="de-emphasize">（原为 sl-rating）</span>

| Shoelace                 | @SITE_NAME@                    | 变更                                       |
| ------------------------ | ------------------------------ | ------------------------------------------ |
| `sl-change` / `sl-hover` | `change`（原生）/ `wa-hover`   | `change` 是原生的；`wa-hover` 已重命名     |

##### wa-icon <span class="de-emphasize">（原为 sl-icon）</span>

默认图标库已从 Bootstrap Icons 更改为 Font Awesome。许多图标名称不同。

```diff
- <sl-icon name="exclamation-triangle"></sl-icon>
+ <wa-icon name="triangle-exclamation"></wa-icon>
```

如果您在代码库中有许多图标，您有两个选择：

1. **继续使用 Bootstrap Icons。** 将 Bootstrap Icons 注册为自定义库并使用 `library="bootstrap"`。这是图标密集型项目摩擦最小的迁移路径。
2. **切换到 Font Awesome 名称。** 大多数名称可以清晰映射（`exclamation-triangle` → `triangle-exclamation`、`check-circle` → `circle-check`、`info-circle` → `circle-info` 等）。Font Awesome 目录要大得多。

如果您有工具包，`setKitCode()` 和 `data-fa-kit-code` 为您提供一流的 Font Awesome Pro/Pro+ 工具包集成。

##### 格式化组件

`<sl-format-bytes>`、`<sl-format-date>`、`<sl-format-number>`、`<sl-relative-time>` 都可以通过直接重命名（`sl-` → `wa-`）迁移。所有特性都保留。

### 第 4 步：主题令牌

每个 Shoelace `--sl-*` 令牌都有一个 `--wa-*` 对应物，但结构在几个重要方面有所不同。最大的差异：

- **调色板比例已更改。** Shoelace 使用 50/100/200/…/950（12 个色调）。@SITE_NAME@ 使用 95/90/80/…/05（11 个色调）。数字色调是 "明度"：`95` 最亮，`05` 最暗。色调在 OKLCH 空间中推导，以实现感知一致性。
- **变体颜色现在基于令牌。** 您无需将 `--sl-color-primary-*` 重新映射到色调，而是在 `<html>` 上设置 `class="wa-brand-blue"`（或红色/绿色/紫色等）。`brand`、`success`、`warning`、`danger`、`neutral` 变体各自都有自己可交换的色调。
- **注意力层级。** 每个变体都公开 `fill-quiet`/`-normal`/`-loud`、`border-quiet`/`-normal`/`-loud` 和 `on-quiet`/`-normal`/`-loud`，组件一致使用这三个层级。
- **缩写的尺寸命名。** `medium` → `m`、`small` → `s`、`large` → `l`、`x-large` → `xl` 等。

#### 常见令牌迁移

| Shoelace                           | @SITE_NAME@                                                | 备注                                                                       |
| ---------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------- |
| `--sl-color-primary-*`             | `--wa-color-brand-*`                                       | 品牌令牌；primary → brand                                                 |
| `--sl-color-success-*`             | `--wa-color-success-*`                                     | 相同变体，带有新的数字色调                                                |
| `--sl-color-warning-*`             | `--wa-color-warning-*`                                     | 相同变体，带有新的数字色调                                                |
| `--sl-color-danger-*`              | `--wa-color-danger-*`                                      | 相同变体，带有新的数字色调                                                |
| `--sl-color-neutral-*`             | `--wa-color-neutral-*`                                     | 相同变体，带有新的数字色调                                                |
| `--sl-color-neutral-0`             | `--wa-color-surface-default`                               | 表面令牌                                                                   |
| `--sl-color-neutral-1000`          | `--wa-color-text-normal`                                   | 文本令牌                                                                   |
| `--sl-spacing-2x-small`            | `--wa-space-2xs`                                           | 命名约定 `2x-small` → `2xs`                                               |
| `--sl-spacing-x-small`             | `--wa-space-xs`                                            |                                                                            |
| `--sl-spacing-small`               | `--wa-space-s`                                             |                                                                            |
| `--sl-spacing-medium`              | `--wa-space-m`                                             |                                                                            |
| `--sl-spacing-large`               | `--wa-space-l`                                             |                                                                            |
| `--sl-spacing-x-large`             | `--wa-space-xl`                                            |                                                                            |
| `--sl-spacing-2x-large`            | `--wa-space-2xl`                                           |                                                                            |
| `--sl-font-size-x-small`           | `--wa-font-size-xs`                                        | 相同约定                                                                   |
| `--sl-font-size-small`             | `--wa-font-size-s`                                         |                                                                            |
| `--sl-font-size-medium`            | `--wa-font-size-m`                                         |                                                                            |
| `--sl-font-size-large`             | `--wa-font-size-l`                                         |                                                                            |
| `--sl-font-size-x-large`           | `--wa-font-size-xl`                                        |                                                                            |
| `--sl-font-weight-normal`          | `--wa-font-weight-normal`                                  | 相同                                                                       |
| `--sl-font-weight-semibold`        | `--wa-font-weight-semibold`                                | 相同                                                                       |
| `--sl-font-weight-bold`            | `--wa-font-weight-bold`                                    | 相同                                                                       |
| `--sl-font-mono`                   | `--wa-font-family-code`                                    | 重命名                                                                     |
| `--sl-font-sans`                   | `--wa-font-family-body`                                    | 重命名；还有 `--wa-font-family-heading`                                    |
| `--sl-font-serif`                  | `--wa-font-family-longform`                                | 重命名                                                                     |
| `--sl-line-height-dense`           | `--wa-line-height-condensed`                               | 重命名                                                                     |
| `--sl-line-height-normal`          | `--wa-line-height-normal`                                  | 相同                                                                       |
| `--sl-line-height-loose`           | `--wa-line-height-expanded`                                | 重命名                                                                     |
| `--sl-border-radius-small`         | `--wa-border-radius-s`                                     |                                                                            |
| `--sl-border-radius-medium`        | `--wa-border-radius-m`                                     |                                                                            |
| `--sl-border-radius-large`         | `--wa-border-radius-l`                                     |                                                                            |
| `--sl-border-radius-pill`          | `--wa-border-radius-pill`                                  | 相同                                                                       |
| `--sl-border-radius-circle`        | `--wa-border-radius-circle`                                | 相同                                                                       |
| `--sl-shadow-x-small` / `-small`   | `--wa-shadow-s`                                            | 合并为 s/m/l                                                               |
| `--sl-shadow-medium`               | `--wa-shadow-m`                                            |                                                                            |
| `--sl-shadow-large` / `-x-large`   | `--wa-shadow-l`                                            |                                                                            |
| `--sl-transition-x-fast` / `-fast` | `--wa-transition-fast`                                     |                                                                            |
| `--sl-transition-medium`           | `--wa-transition-normal`                                   | 重命名                                                                     |
| `--sl-transition-slow` / `-x-slow` | `--wa-transition-slow`                                     |                                                                            |
| `--sl-z-index-dropdown`            | _（使用级联层）_                                           | WA 使用级联层和堆叠上下文；显式 z-index 令牌已移除                          |
| `--sl-z-index-dialog` 等           | _（使用级联层）_                                           |                                                                            |
| `--sl-input-*`                     | `--wa-form-control-*`                                      | 所有输入令牌现在都是 `form-control` 令牌                                   |
| `--sl-toggle-size-*`               | `--wa-form-control-toggle-size`                            | 单个令牌，适应字体大小                                                     |
| `--sl-focus-ring-*`                | `--wa-focus-ring-*`（组合简写 `--wa-focus-ring`）          | 大多兼容                                                                   |

#### 新的令牌系统

您还获得了一些 Shoelace 中不存在的系统：

- **`--wa-color-{variant}-{role}-{attention}`：** 每个变体上用于填充（`fill`）、边框（`border`）和文本（`on`）的三层注意力标度。`<wa-button>`、`<wa-callout>`、`<wa-tag>` 等内部使用这些用于 `variant` 和 `appearance` 特性。
- **`--wa-color-mix-hover` 和 `--wa-color-mix-active`：** 通过 `color-mix()` 与组件颜色混合。一致地用于悬停和激活状态。覆盖一次，影响一切。
- **表面和文本令牌：** `--wa-color-surface-raised`、`-default`、`-lowered`、`-border`；`--wa-color-text-normal`、`-quiet`、`-link`。用基于角色的令牌替换临时的 `neutral-0`/`neutral-1000` 模式。
- **比例令牌：** `--wa-border-radius-scale`、`--wa-font-size-scale` 等充当所有相关令牌的乘数。例如，要增加主题的字体大小，将 `--wa-font-size-scale` 的值更改为大于 `1`。
- **模块化阴影令牌：** `--wa-shadow-s|m|l` 由独立的 `offset-x`、`offset-y`、`blur` 和 `spread` 令牌组成。使用模块化令牌基于阴影质量创建自定义阴影效果或变换。

:::info
**保持您的自定义 CSS 熟悉**
`wa-theme-shoelace` 主题和 `wa-palette-shoelace` 调色板定义了接近 Shoelace 默认值的令牌，因此您现有的大部分自定义 CSS 将继续工作。使用 `<html class="wa-theme-shoelace wa-palette-shoelace">` 应用它们，在迁移期间获得一键式逃逸舱。
:::

### 第 5 步：表单和验证

@SITE_NAME@ 表单控件是使用 `ElementInternals` 的真正表单关联自定义元素。这意味着：

- `new FormData(form)` 自动工作。无需 `formdata` 事件垫片。
- `form.checkValidity()` 和 `form.reportValidity()` 包含所有 `<wa-*>` 控件。
- `form.reset()` 与原生控件一起重置所有 `<wa-*>` 控件。
- 浏览器的原生 `:invalid`、`:valid`、`:required`、`:disabled` 伪类适用于 `<wa-*>` 表单控件。

如果您编写了处理 `formdata` 事件以提取 Shoelace 控件值的代码，您可以删除它。只需调用 `new FormData(form)`。

#### 验证事件

| Shoelace     | @SITE_NAME@               |
| ------------ | ------------------------- |
| `sl-invalid` | `wa-invalid`（可取消）    |

使用 `event.preventDefault()` 取消 `wa-invalid` 以抑制浏览器的默认验证消息并显示您自己的。`:state(user-invalid)` 和 `:state(user-valid)` 自定义状态根据用户交互应用。

#### 自定义验证

```diff
- input.setCustomValidity('That username is taken.');
- input.reportValidity();
+ input.customError = 'That username is taken.';
+ // 或调用 setCustomValidity()；两者都有效。
```

`customError` 特性是 `setCustomValidity()` 的声明式版本，您可以从模板中设置。

### 第 6 步：需要注意的事项

以下大部分是静默损坏：不会抛出但行为不当的代码。对照您的代码库检查每一项。

- **事件监听器字符串。** 更新所有 `addEventListener('sl-…', …)` 调用。错误事件名上的监听器会静默失败。
- **插槽名。** `prefix`/`suffix` → `start`/`end`。遗留的 `<sl-icon slot="prefix">` 将在默认插槽中渲染，而不是您期望的位置。
- **`help-text` → `hint`。** 相同的风险：未识别的特性不会出错。
- **`variant="primary"`。** 在 WA 中将使用_默认_（中性）变体渲染，而不是您的品牌颜色，因为 `primary` 不是有效值。
- **CSS 部件重命名。** 大多数部件是稳定的，但一些已更改（例如，dialog/drawer 的关闭按钮不再是导出的 `sl-icon-button` 部件）。如果您设置了 `::part(close-button__base)` 样式，请在组件的 API 页面上检查新的等效项。
- **CSS 自定义属性回退。** 如果您使用了 `var(--sl-color-primary-500, blue)` 但没有更新变量，回退将静默接管。搜索 `--sl-` 进行清理。
- **`<wa-callout>` 上的 `open`。** 不存在。如果您的模板中有 `<sl-alert open>` 通过特性切换可见性，您需要改为条件渲染提醒。
- **`<sl-alert>.toast()`。** 方法已移除。使用 `<wa-toast>` <wa-badge appearance="accent" pill class="pro">Pro</wa-badge> 获得通知交互。
- **Bootstrap Icons 名称。** 如果您不注册 Bootstrap Icons 库，您的图标名称将针对 Font Awesome 目录解析，许多将静默渲染为问号。

### 第 7 步：测试

迁移后：

1. 运行构建。TypeScript 和 Lit 将捕获大多数特性拼写错误和缺失的导入。
2. 打开应用。遍历每个表单。确认验证仍然有效。
3. 在代码库中搜索任何剩余的 `sl-`、`--sl-` 或 `@shoelace-style/shoelace` 字符串。
4. 在 JavaScript 中搜索 `'sl-` 和 `"sl-` 以捕获事件监听器字符串。
5. 检查您的深色模式页面。颜色令牌是最可能的视觉回归。

</wa-tab-panel>

<wa-tab-panel name="ai">

编码助手（Claude Code、Cursor、GitHub Copilot 等）可以机械地完成大部分迁移工作。将以下提示粘贴到您选择的助手中。它指示助手阅读本指南、审核您的代码库，并逐次执行机械迁移，每次之间进行验证。您参与审查和处理边缘情况。

<wa-details summary="显示迁移提示">

<pre><code>您正在帮助将项目从 Shoelace 2.x 迁移到 @SITE_NAME@。

权威的迁移指南位于：
  @SITE_URL@/docs/resources/migrating-from-shoelace

配套清单（镜像相同结构）位于：
  @SITE_URL@/docs/resources/migration-checklist

在做任何其他事情之前，获取上方的迁移指南 URL 并从头到尾阅读它。不要依赖对 Shoelace 或 @SITE_NAME@ API 的先验知识——两个库都已更改，指南是事实来源。如果您无法获取 URL，请告诉我并停止。

操作说明：

1. 阅读指南后，用 3–5 个要点向我总结您将应用的概念转变（级联层、原生表单关联、变体/外观系统、prefix/suffix → start/end、help-text → hint、primary → brand）。这确认您已获取页面。
2. 对代码库运行快速审核。报告：
   - package.json 中是否有 @shoelace-style/shoelace
   - Shoelace 当前如何加载（自动加载器、选择性导入、CDN）
   - 大致数量：sl-* 元素实例、--sl-* CSS 变量、addEventListener('sl-...') 字符串、slot="prefix"/"suffix" 实例、variant="primary" 实例
   - 是否使用 Bootstrap Icons 或其他库
3. 提出迁移计划并在更改文件前等待确认。默认每次机械操作提交一次。
4. 按此顺序执行操作，每次后提交：
   a. 交换 npm 包并更新导入。
   b. 查找和替换：sl- → wa-、--sl- → --wa-、sl-theme- → wa-theme-、JavaScript 事件字符串中的 'sl- → 'wa-（和 "sl- → "wa-）、TS 事件类导入中的 Sl → Wa。
   c. 逐组件修复：variant="primary" → variant="brand"；slot="prefix"/"suffix" → "start"/"end"；help-text → hint；clearable → with-clear；outline 布尔值 → appearance="outlined"；移除 circle（自动检测）；移除 sl-alert .toast() 使用（toast 交互移至 Pro wa-toast）；将 sl-menu/sl-menu-item 迁移到 wa-dropdown/wa-dropdown-item；sl-image-comparer → wa-comparison；sl-range → wa-slider。
   d. 主题令牌：替换 --sl-color-primary-* → --wa-color-brand-*、间距/字体大小比例重命名（small → s、x-small → xs 等）、阴影合并、--sl-input-* → --wa-form-control-*。注意颜色比例数字反转（Shoelace 50→950 从亮到暗，@SITE_NAME@ 95→05 从亮到暗）。
   e. 表单：移除基于 formdata-event 的序列化垫片；验证每个表单控件都有 name 特性；更新 sl-invalid → wa-invalid。
5. 每次操作后，运行项目的构建/类型检查/ lint 和任何测试。在继续之前报告结果。
6. 最终清理：grep 查找剩余的 sl-、--sl-、@shoelace-style/shoelace 和带引号的 'sl-/"sl- 模式。报告任何剩余匹配。
7. 标记用户必须手动验证的静默损坏风险：
   - 事件监听器字符串（如果过时没有错误；只是不触发）
   - CSS ::part() 选择器（部件可能已重命名）
   - 深色模式类交换（sl-theme-dark → wa-dark）
   - 图标正确渲染（默认库从 Bootstrap Icons 更改为 Font Awesome）

约束：

- 不要发明新行为。如果不确定 API 如何映射，请在迁移指南中查找或询问。
- 不要引入风格重构。保持精确。
- 不要跳过验证步骤。操作未完成，直到构建通过。
- 如果项目大量使用 sl-alert.toast()，提及 wa-toast 是 @SITE_NAME@ Pro 的一部分，并在建议替代方案之前询问。

从步骤 2 开始（审核）。在更改任何文件之前等待我的批准。
</code></pre>

</wa-details>

助手完成后，遍历[迁移清单](/docs/resources/migration-checklist)以捕获机械操作可能遗漏的任何内容——事件监听器字符串、`::part()` 选择器和深色模式类交换很容易被忽略。

</wa-tab-panel>
</wa-tab-group>

## 您获得的新功能

我们一直专注于更改的内容，但也有很多新内容。仅在免费的 @SITE_NAME@ 中，您就获得：

**新组件**<br>
`<wa-callout>`、`<wa-comparison>`、`<wa-popover>`、`<wa-page>`、`<wa-scroller>`、`<wa-zoomable-frame>`、`<wa-number-input>`、`<wa-markdown>` 和 `<wa-intersection-observer>` 都是全新的。它们涵盖了您之前必须自己构建或求助于第三方库的模式。<br><br>
**原生 HTML 样式**<br>
单独的 `dist/styles/native.css` 使用与 @SITE_NAME@ 主题相同的设计令牌为纯 HTML 元素（`<button>`、`<input>`、`<table>`、`<details>`、标题、列表、块引用等）设置主题。可选加入。Shoelace 没有等效功能。<br><br>
**实用 CSS 层**<br>
布局原语、间距、排版、对齐和大小调整实用程序作为纯 CSS 类提供，无需 JavaScript。您无需引入完整的实用框架即可获得 `wa-stack`、`wa-cluster`、`wa-grid` 等。<br><br>
**三个主题**<br>
`wa-theme-default`、`-awesome` 和 `-shoelace` 在核心包中提供——最后一个近似 Shoelace 的外观，是迁移期间的软着陆路径。更多主题随 Pro 提供。<br><br>
**品牌色调交换**<br>
在 `<html>` 上放置 `class="wa-brand-purple"`（或红色、绿色、靛蓝色等），即可一行代码重新皮肤化整个应用的品牌颜色。无需接触令牌即可用于主题或 A/B 测试调色板。<br><br>
**OKLCH 调色板**<br>
色调在 OKLCH 空间而非 HSL 中推导，因此它们在色调间感知一致。无论您使用红色、蓝色还是黄色，相同的色调数字具有相同的明度。<br><br>
**SSR 友好的水合**<br>
组件随附 `did-ssr` 和 `with-*` 插槽标记，因此服务器渲染的 HTML 干净水合，无闪烁。适用于任何可以发出 @SITE_NAME@ 预期特性的 SSR 框架。<br><br>
**AI 就绪文档**<br>
每次构建都发出[代理技能包](/docs/ai/agent-skills)和 `llms.txt` 文件。AI 助手可以阅读这些内容，以便熟练使用 @SITE_NAME@——不再猜测 API 表面。

## @SITE_NAME@ Pro 包含什么

@SITE_NAME@ Pro 是一个单独的付费包（`@awesome.me/webawesome-pro`），添加了用于更高风险模式的组件。它是免费版的严格超集，因此升级不会丢失任何内容。Pro 包含：

- [`<wa-toast>`](/docs/components/toast) 和 [`<wa-toast-item>`](/docs/components/toast-item)：toast 通知栈
- [`<wa-combobox>`](/docs/components/combobox)：带有多选的组合框或自动完成
- [`<wa-file-input>`](/docs/components/file-input)：带有预览的拖放文件输入
- [`<wa-chart>`](/docs/components/chart) 和七个类型化的图表子类（基于 Chart.js 构建，通过设计令牌主题化）
- [`<wa-sparkline>`](/docs/components/sparkline)：内联趋势可视化
- 8 个额外的[主题](/docs/themes)（`active`、`brutalist`、`glossy`、`matter`、`mellow`、`playful`、`premium`、`tailspin`），以及额外的手工制作[调色板](/docs/color-palettes)
- Pro 主题构建器、Pro 颜色工具、模式库、Figma 设计套件
- 托管项目和人工支持

如果您的 Shoelace 应用使用了 `sl-alert.toast()`、自定义组合框库或图表，Pro 是这些功能的自然归宿。

## 常见陷阱

<wa-details name="migration-gotcha" summary="我的按钮看起来都是灰色的">

您可能在某处有 `variant="primary"`。@SITE_NAME@ 使用 `variant="brand"`。

</wa-details>

<wa-details name="migration-gotcha" summary="我的事件监听器停止触发">

更新事件名。`sl-show` → `wa-show`、`sl-change` → `change`（原生）等等。

</wa-details>

<wa-details name="migration-gotcha" summary="我的主题覆盖不工作">

@SITE_NAME@ 将组件样式包装在 `@layer wa-component` 中。您的非分层 CSS 现在自动获胜，因此您可能可以删除 `!important` 声明。相反，如果您的覆盖_在_层内，它们现在可能会输给非分层规则。

</wa-details>

<wa-details name="migration-gotcha" summary="我的图标渲染为问号">

您在请求 Bootstrap Icons 名称（例如 `exclamation-triangle`），但默认图标库是 Font Awesome（`triangle-exclamation`）。要么注册 Bootstrap Icons，要么更新图标名称。

</wa-details>

<wa-details name="migration-gotcha" summary="&lt;sl-alert open&gt; 不再切换">

`<wa-callout>` 始终渲染。没有 `open` 特性。改为条件渲染元素，或迁移到 `<wa-toast>` 以获得弹出行为。

</wa-details>

<wa-details name="migration-gotcha" summary="表单提交缺少我的字段">

确保您的 `<wa-input>` 和类似控件具有 `name` 特性。@SITE_NAME@ 控件使用原生表单关联，因此只有命名的控件才会被 `FormData` 读取。

</wa-details>

<wa-details name="migration-gotcha" summary="我的深色模式坏了">

在 `<html>` 上将 `class="sl-theme-dark"` 替换为 `class="wa-dark"`。类名不同。

</wa-details>

## 需要帮助？

- [@SITE_NAME@ Discord](https://discord.gg/webawesome)
- [GitHub Discussions](https://github.com/shoelace-style/webawesome/discussions)
- [提交问题](https://github.com/shoelace-style/webawesome/issues)

---

我们努力保持迁移顺畅。如果这里有什么错误、缺失或可以更清晰，请[提交问题](https://github.com/shoelace-style/webawesome/issues)，我们会修复它。

<style>
  /* 为每个 wa-details 提供上下呼吸空间。 */
  #content wa-details {
    margin-block: var(--wa-space-m) var(--wa-space-l);
  }

  /* 当一个 wa-details 紧跟另一个时，收紧间距。 */
  #content wa-details:has(+ wa-details) {
    margin-block-end: var(--wa-space-2xs);
  }

  #content wa-details + wa-details {
    margin-block-start: 0;
  }

  table code { 
    white-space: nowrap;
  }

  .page-migrating-from-shoelace #content table {
    display: block;
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
  }
</style>
