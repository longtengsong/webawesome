---
title: 更新日志
description: 记录项目的每个版本的变更。
layout: page-outline
---

{% from "macros/component-badges.njk" import statusBadge %}

Web Awesome 遵循 <a href="https://semver.org/" class="appearance-plain">语义化版本控制</a>，本页面的每个版本发布遵循 <a href="https://keepachangelog.com/" class="appearance-plain">维护更新日志</a> 约定。每个[组件](/docs/components) 都有一个状态徽章，告诉您可以对其 API 有什么预期。

<h2 class="wa-heading-m wa-cluster wa-gap-s" data-no-anchor data-no-outline>稳定组件 {{ statusBadge('stable') }}</h2>
这些组件有稳定的 API。重大变更仅在主要版本中出现，弃用的功能会保留到下一个主要版本。

<h2 class="wa-heading-m wa-cluster wa-gap-s" data-no-anchor data-no-outline>实验性组件 {{ statusBadge('experimental') }}</h2>
这些组件仍在成型中。API 可能会在次要版本之间更改，因此请在原型中使用它们 — 不要在难以更新的生产代码中使用。

## 未发布

:::added

- 为 `<wa-file-input>` 添加了 `capture` 属性，用于直接从设备摄像头或麦克风捕获媒体 [discuss:2380]

:::

:::fixed

- 修复了 `<wa-video>` 中的一个 bug：在搜索或 scrub 时间轴时，`timeupdate` 方法未发出 [issue:2393]
- 修复了 `<wa-breadcrumb-item>` 中的一个 bug：`href=""` 渲染为按钮而不是链接，使得当前页面项更难遵循 [WAI-ARIA 面包屑模式](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/) [issue:2387]
- 修复了 `<wa-breadcrumb-item>` 中的一个回归问题：导致没有 `href` 的项渲染为链接而不是按钮
- 修复了 `<wa-popover>` 中的一个回归问题：对于 `top/bottom-start` 和 `top/bottom-end` 位置，正文的视口边缘边距导致弹出框和箭头错位
- 修复了 `<wa-textarea>` 中的一个 bug：与其他表单控件不同，禁用状态没有视觉样式 [issue:2416]
- 修复了 `<wa-dropdown>`、`<wa-popup>`、`<wa-popover>`、`<wa-select>`、`<wa-details>`、`<wa-dialog>`、`<wa-drawer>` 和 `<wa-tree-item>` 中的默认显示/隐藏动画，以尊重 `prefers-reduced-motion: reduce`

:::

:::changed

- 将 `<wa-dropdown>`、`<wa-popup>`、`<wa-popover>`、`<wa-select>`、`<wa-combobox>`、`<wa-details>`、`<wa-dialog>`、`<wa-drawer>`、`<wa-tree-item>` 和 `<wa-toast-item>` 中的默认 `--show-duration` 和 `--hide-duration` 值与 `--wa-transition-fast` 和 `--wa-transition-normal` 令牌同步
- 将 `<wa-copy-button>`、`<wa-select>`、`<wa-combobox>` 和 `<wa-toast-item>` 中的硬编码过渡与 `--wa-transition-*` 令牌同步

:::

## 3.7.0

<small><time datetime="2026-05-12">2026 年 5 月 12 日</time></small>

:::added

- 添加了两个新的实验性组件：`<wa-video>` 和 `<wa-video-playlist>`
- 添加了 `--wa-button-transform-hover` 和 `--wa-button-transform-active` 设计令牌
- 添加了 `wa-text-wrap-nowrap` 文本工具类，用于防止文本换行
- 添加了 `wa-text-wrap-balance` 文本工具类，用于均匀分布文本
- 添加了 `wa-text-wrap-pretty` 文本工具类，用于避免最后一行出现孤立词（Firefox 不支持）

:::

:::fixed

- 修复了 `<wa-textarea>` 中的一个 bug：当文本域初始隐藏时，使用 `resize="auto"` 的高度保持折叠状态 [issue:2347]
- 修复了 `<wa-button-group>` 中的一个 bug：导致单个按钮没有正确的边框半径 [issue:2367]
- 修复了 `<wa-switch>` 中的一个 bug：在 RTL 中开关方向显示为反向 [pr:2330]
- 修复了 `<wa-popover>` 中的一个 bug：在窄屏幕上弹出框会溢出视口 [issue:2333]
- 修复了 `<wa-radio-group>` 中的一个 bug：与其他表单控件标签相比，标签垂直偏移了几个像素 [issue:2334]
- 修复了 `<wa-badge>` 中的一个 bug：当 `start` 或 `end` 插槽中有图标时，高度略有不同 [issue:2280]
- 修复了 `<wa-toast>` 中的一个 bug：在某些屏幕阅读器中，通知无法正确读取 [issue:2282]
- 修复了 Playful 主题中的一个 bug：修饰符类（如 `wa-filled`）未应用于原生按钮元素

:::

:::changed

- 更新了所有主题的 `--wa-color-mix-hover` 和 `--wa-color-mix-active` 值，以获得更好的悬停和激活反馈 [pr:2360]
- 将 `<wa-copy-button>` 组件从 _实验性_ 升级为 _稳定_
  - 添加了对自定义按钮的支持
  - 添加了 `tooltip` 属性，用于控制在悬停和点击时工具提示中何时显示反馈

:::

{% include "changelog-email-signup.njk" %}

## 3.6.0

<small><time datetime="2026-04-30">2026 年 4 月 30 日</time></small>

:::added

- 在文档中添加了 `:::pro` 标注变体，其渲染样式与 Pro 徽章相同，为橙色/白色样式
- 为所有表单控件和有尺寸的组件添加了 `xs` 和 `xl` 尺寸
  - 弃用了 `small`、`medium` 和 `large` 以支持 `s`、`m` 和 `l`（旧值在 3.x 中仍可继续工作）
- 为 `<wa-number-input>` 步进按钮添加了 `beforeinput` 事件，以便可以使用 `event.preventDefault()` 取消值更改
- 为 `<wa-dialog>` 和 `<wa-drawer>` 添加了 `--backdrop-filter` CSS 自定义属性，用于对背景应用模糊等滤镜

:::

:::fixed

- 修复了 `<wa-checkbox>` 中的一个 bug：未选中时 `value` 属性返回 `null` 而不是 `'on'`
- 修复了 `<wa-rating>` 中的一个 bug：通过 `<fieldset>` 禁用时，重新启用 fieldset 时未能正确恢复启用状态
- 修复了 `<wa-zoomable-frame>` 中的一个 bug：在解析缩放级别后，缩放控制按钮未能正确更新其禁用状态
- 修复了 `<wa-button>` 中的一个 bug：带有 `with-caret` 的仅图标按钮被设为方形，导致插入符号溢出
- 修复了 `<wa-checkbox>` 中的一个 bug：当复选框不确定时，`aria-checked` 属性未设置为 `mixed`
- 修复了 `<wa-file-input>` 中的一个 bug：错误地暴露了一个从未按描述工作的 `file-icon` 插槽 [issue:2294]
- 修复了 React 导入，使其直接指向每个组件的 `index.js` 文件 [issue:2293]
- 修复了 `<wa-dropdown-item>` 中的一个 bug：子菜单中的禁用项显示指针光标而不是默认光标 [issue:2276]
- 修复了 `<wa-dropdown-item>` 中的一个 bug：打开子菜单的项未显示选择状态
- 修复了 `<wa-input>` 和 `<wa-number-input>` 中的一个 bug：`number`、`date`、`time` 和 `datetime-local` 类型的无效值被保留，而不是像原生输入那样清理为空字符串
- 修复了 `<wa-dropdown-item>` 被错误列为实验性的 bug
- 修复了 Native Styles 中的 `<pre>` 边框半径，使其像类似元素那样正确使用 `--wa-panel-border-radius` 令牌

:::

:::changed

- 重构了核心和 Pro 包中的组件测试，以遵循一致的结构并提高覆盖率
- 将实验性的 `<wa-copy-button>` 中的工具提示替换为内置的反馈弹出框，适用于默认和自定义触发器
  - 添加了 `feedback-placement` 属性，以替换 `tooltip-placement`
  - 添加了 `feedback` CSS 部件
  - 删除了 `tooltip-placement` 属性和相关的 `tooltip__*` 部件
- 将以下组件从 _实验性_ 升级为 _稳定_：`<wa-bar-chart>`、`<wa-bubble-chart>`、`<wa-chart>`、`<wa-combobox>`、`<wa-doughnut-chart>`、`<wa-file-input>`、`<wa-line-chart>`、`<wa-copy-button>`、`<wa-number-input>`、`<wa-pie-chart>`、`<wa-polar-area-chart>`、`<wa-radar-chart>`、`<wa-scatter-chart>`、`<wa-sparkline>`、`<wa-toast>` 和 `<wa-toast-item>`
- 将 `@shoelace-style/localize` 更新为 3.2.2，以防止 Chrome 翻译抛出错误 [issue:2322]
- 将 TypeScript 更新为 5.9.3

:::

## 3.5.0

<small><time datetime="2026-04-03">2026 年 4 月 3 日</time></small>

:::added

- 将 `<wa-page>` 从 {{ site.namePro }} 移到 Web Awesome 核心
- 添加了新的免费实验性组件：`<wa-markdown>`（14 个扩展目标中的第 6 个）
- 为使用自动加载器时预加载尚未在页面上的组件添加了 `data-wa-preload` 属性 [issue:1501]
- 为 `<wa-color-picker>` 添加了 `placement` 属性 [issue:2099]
- 为 `<wa-rating>` 添加了表单关联
- 为 `<wa-copy-button>` 添加了默认插槽，以便用户可以提供自定义按钮 [issue:1327]
- 为 `<wa-copy-button>` 添加了 `:state(success)` 和 `:state(error)` CSS 自定义状态，用于在自定义触发器上的反馈样式
- 为 `<wa-button>` 添加了 `disabled`、`icon-button`、`link` 和 `loading` 自定义状态 [discuss:2185]
- 为 `<wa-option>` 添加了 `disabled` 自定义状态，以便在使用属性时应用禁用样式 [issue:1997]
- 为 `<wa-textarea>` 添加了 `with-count` 属性，用于在文本域下方显示字符数

:::

:::fixed

- 修复了 Native Styles 实用程序中的一个 bug：当所选选项有长名称时，`<select>` 文本可能会与插入符号图标重叠
- 修复了 Native Styles 实用程序中的一个 bug：`<select multiple>` 未展开以显示多个选项
- 修复了 `<wa-badge>` 中的一个 bug：`role` 在 `<slot>` 元素上错误设置，这不符合规范 [issue:2163]
- 修复了 `<wa-toast-item>` 中的一个 bug：进度环连续更新的值被屏幕阅读器读出 [issue:2126]
- 修复了 `<wa-spinner>` 中的一个 bug：`--track-width` 自定义属性未正确应用于轨道和指示器 [issue:1317]
- 修复了表单控件中的一个 bug：在 Firefox 深色模式下，由于浏览器从系统轮廓颜色过渡，焦点环会闪烁白色 [issue:2074]
- 修复了 `<wa-dropdown>` 中的一个 bug：菜单中的标题颜色使用 `!important`，阻止用户用轻 DOM 样式覆盖它们 [issue:2102]
- 修复了 `<wa-select>` 中的一个 bug：当所选选项有空字符串值时，`state(blank)` 自定义状态错误应用 [issue:1920]
- 修复了 `<wa-dropdown-item>` 中的一个 bug：当项禁用时，`click` 事件仍然可能触发 [issue:1817]
- 修复了 `<wa-select>`、`<wa-combobox>` 和 `<wa-option>` 中的一个 bug：`change` 和 `input` 事件可能以不正确的时机触发 [pr:2243]
- 修复了 `<wa-drawer>` 中的一个 bug：在 `<head>` 中包含 Web Awesome 时会抛出错误 [discuss:2241]
- 修复了多个组件中的 Lit 开发模式"更新中更改"警告 [issue:1269]
- 修复了 Native Styles 中的一个 bug：文本会在 `<pre>` 元素中错误溢出
- 修复了 `<wa-details>` 中的一个 bug：快速切换打开状态可能会导致内容可见性与打开属性不同步
- 修复了 `<wa-tree-item>` 中的一个 bug：快速点击展开按钮可能导致展开/折叠指示器与子项可见性不同步
- 修复了 `<wa-select>` 和 `<wa-combobox>` 中的一个 bug：当值属性在选项添加到 DOM 之前设置时，未显示所选值 [pr:2253]
- 修复了 `<wa-carousel>` 中的一个 bug：当轮播图初始在隐藏容器（如非活动选项卡面板）中渲染时，幻灯片内容不可交互 [pr:2133]

:::

:::changed

- 更新了 Awesome 和 Shoelace 主题 [pr:2135]：
  - 为 Shoelace 主题添加了缺失的 `<input type="range">` 覆盖，以匹配 `<wa-slider>`
  - 为两个主题添加了 `<wa-combobox>` 覆盖，以匹配其他基于文本的输入
  - 修复了 Awesome 主题中的一个 bug：从 `appearance="button"` 的 `<wa-radio>` 中移除了错误的 `transform` 属性 [issue:1766]
  - 修复了 Shoelace 主题中的一个 bug：`size` 对 `<wa-callout>` 没有影响
  - 修复了两个主题中的一个 bug：`appearance` 对 `<wa-card>` 没有影响
  - 更新了 Awesome 主题的 `--wa-form-control-padding-block` 和 `--wa-form-control-padding-inline`，以更好地匹配其原始素材（{{ site.siblings.fontAwesome.name }}）
  - 更新了 Shoelace 主题的 `--wa-color-focus` 和焦点样式，以更好地匹配其原始素材（Shoelace）
- 通过将 role 和 ARIA 属性移动到宿主元素，改进了 `<wa-rating>` 的可访问性 [issue:2205]
- 通过仅在必要时创建 ResizeObserver，提高了 `<wa-textarea>` 的性能
- 通过为使用浏览器专用 API 的组件添加服务器端渲染保护，改进了 SSR 兼容性

:::

## 3.4.0

<small><time datetime="2026-03-25">2026 年 3 月 25 日</time></small>

:::added

- 为所有主题添加了 `--wa-space-5xl` 设计令牌 [issue:1606]
- 添加了 `wa-gap-5xl` 工具类 [issue:1606]
- 将 `wa-gap-4xl` 添加到了间距工具 `:where()` 选择器
- 添加了 `--wa-font-size-3xs` 和 `--wa-font-size-5xl` 设计令牌 [issue:1606]
- 将 `*-3xs` 和 `*-5xl` 添加到了 `wa-font-size`、`wa-body`、`wa-heading`、`wa-caption` 和 `wa-longform` 工具类 [issue:1606]
- 通过 `swatches` 属性接受 `{ color, label }` 对象数组，从而为 `<wa-color-picker>` 添加了带标签的样例支持，提高了屏幕阅读器可访问性
- 添加了从图标解析器返回承诺的能力 [discuss:2144]

:::

:::fixed

- 修复了 `<wa-dropdown-item>` 中的一个 bug：当类型不是 `checkbox` 时，`aria-checked` 错误地设置在项上 [pr:2180]
- 修复了 `<wa-badge>` 字体大小，现在令牌可用时使用 `--wa-font-size-3xs` [pr:2162]
- 修复了 `<wa-tree>` 中缩进指南的偏离中心位置
- 修复了使用 `label` 插槽时的滑块样式，使其与属性使用匹配 [issue:2124]
- 修复了 `<wa-scroller>` 中的一个 bug：在 Chrome 中包含表格等宽内容时导致水平页面溢出 [issue:2074]
- 修复了 `<wa-details>` 和原生 `<details>` 中的一个 bug：导致全宽元素在详情内容中溢出 [issue:2137]
- 修复了 `<wa-slider>` 中的一个 bug：引入了对范围元素无效的 `required` 属性 [issue:1471]
- 修复了 `<wa-card>` 中的水平布局样式，使用无效或不匹配的 `::slotted()` 选择器用于 body 和 actions 区域 [pr:2198]
- 修复了 `<wa-input>` 和 `<wa-combobox>` 中的 `autocorrect` 属性类型，使用 `boolean` 而不是字符串联合
- 修复了 `<wa-dropdown-item>` 中的一个 bug：导致在某些行高时，下行字母被裁剪 [issue:2207]
- 修复了 `<wa-number-input>` 中的一个 bug：在触摸设备上按下步进按钮会显示虚拟键盘并移动页面
- 修复了 `<wa-select>` 中的一个 bug：设置了初始值时无法清除 [pr:2141]

:::

:::changed

- 改进了 `<wa-tree>` 和 `<wa-tree-item>`，使所有内部尺寸（标签、复选框、展开按钮等）与 `font-size` 成比例缩放，使调整树大小变得容易 [discuss:2147]
- 改进了 `<wa-combobox>`
  - 为 `<wa-combobox>` 添加了 `autocapitalize`、`autocorrect`、`enterkeyhint`、`inputmode` 和 `spellcheck` 属性，以支持虚拟键盘自定义
  - 为 `<wa-combobox>` 添加了 `allow-create` 属性，允许用户动态创建新选项。当输入不匹配任何现有选项的文本时，显示 "创建 [value]" 选项。选择它会向 DOM 添加真实的 `<wa-option>`。触发可取消的 `wa-create` 事件用于自定义处理。
  - 在用户输入时为 `<wa-combobox>` 添加了 `input` 事件触发，与 `<wa-input>` 和原生表单控件的行为匹配
  - 修复了 `<wa-combobox>` 中的一个 bug：设置 `allow-custom-value` 时，自定义值在失焦时未提交
  - 修复了 `<wa-combobox>` 中的一个 bug：清除输入并失焦会恢复先前选择而不是清除值
  - 从 `<wa-combobox>` 中移除了 `autocomplete` 属性，因为它与原生 HTML 属性冲突
- 通过批量插槽更改、缓存选项和懒惰渲染选中图标，改进了 `<wa-select>`、`<wa-combobox>` 和 `<wa-option>` 在大量选项时的性能
- 改进了 `<wa-card>`：`body` 部件将默认插槽包裹在容器中而不是在插槽上，保持正常的插槽显示和可访问性 [pr:2198]
- 改进了 `<wa-tab-group>`：`body` 部件将默认插槽包裹在容器中而不是在插槽上，与 `<wa-dialog>` 和 `<wa-card>` 一致
- 使用主题同步的可选属性更新了 `<wa-zoomable-frame>` [pr:2165]
- [文档]：为新令牌和工具更新了间距、间隙、堆栈和集群文档 [issue:1606]
- [文档]：为新令牌和工具更新了排版和文本文档 [issue:1606]

:::

## 3.3.1

<small><time datetime="2026-03-04">2026 年 3 月 4 日</time></small>

:::removed

- 从 {{ site.namePro }} 包中移除了导致某些包管理器中出现问题的 `preinstall` 脚本。

:::

## 3.3.0

<small><time datetime="2026-03-03">2026 年 3 月 3 日</time></small>

:::added

- 添加了 `<wa-chart>` 和其他图表类型作为实验性 Pro 组件 [pr:1073]
- 添加了 `<wa-toast>` 和 `<wa-toast-item>` 作为实验性 Pro 组件 [pr:105]
- 添加了 `wa-button` 类，用于将 `<a>` 元素样式化为按钮 [pr:2040]
- 为 `<wa-popup>` 添加了 `--popup-border-width` 参数。必须设置此参数以匹配添加到弹出元素的任何边框宽度 [pr:2070]
- 为 `<wa-badge>` 添加了 `start` 和 `end` 插槽 [pr:2082]

:::

:::fixed

- 修复了 `<wa-switch>` 和 `<wa-checkbox>` 首次加载时未正确渲染的 bug [pr:2105]
- 修复了 `<wa-drawer>` 和 `<wa-dialog>` 中的一个 bug：在服务器环境中尝试注册全局事件监听器 [pr:2105]
- 修复了 `<wa-textarea>` 和 `<wa-input>` 中的一个 bug：内部渲染的表单控件未正确重置其值 [pr:2105]
- 修复了 HasSlotController 中的一个 bug：尝试调用服务器上不可用的 API [pr:2105]
- 修复了 `<wa-page>` 中的一个 bug：在 SSR 期间尝试使用不受支持的 API 插入样式 [issue:1862]
- 修复了 `<wa-page>` 中的一个 bug：没有插槽内容时，汉堡导航会显示 [issue:1601]
- 修复了 `<wa-dropdown-item>` 中的一个 bug：`disabled` 时 `click` 事件会触发 [pr:2023]
- 修复了自定义元素清单中的一个 bug：事件可能没有名称 [pr:2026]
- 修复了 `<wa-select>` 中的一个 bug：当存在 `with-clear` 时，通过框架属性绑定（如 Vue 的 `:selected`）设置的 `selected` 选项未被尊重 [pr:1985]
- 修复了 `<wa-radio-group>`、`<wa-slider>`、`<wa-checkbox>` 和 `<wa-switch>` 中的一个 bug，以与浏览器区分属性与属性的方式保持一致 [pr:2105]
- 修复了 `<wa-input>` 中的一个 bug：更新 value 属性时保持无效 [pr:2105]
- 修复了 `<wa-color-picker>` 中的一个 bug：当位置在视口右侧时，阻止其水平翻转 [pr:2024]
- 修复了一个 bug，通过为 `<wa-dialog>` 和 `<wa-drawer>` 样式添加 `color: inherit`，使它们从文档上下文而不是浏览器默认值继承文本颜色 [pr:2064]
- 修复了内部 `animateWithClass()` 函数中的一个 bug：导致 0ms 动画无法正确触发 [pr:2068]
- 修复了导致 `<wa-dropdown>` 元素在 Chrome 145 中滚动文档的 bug
- 修复了 Native Styles 中的一个 bug：`border-radius` 默认不应用于 `svg` 元素 [pr:2078]
- 修复了 `<wa-popup>` 中的一个 bug：`-start` 和 `-end` 位置的箭头指向错误方向
- 修复了 `<wa-split-panel>` 中的一个 bug：在 Chromium 浏览器中调整主面板大小时导致 ResizeObserver 错误 [issue:2018]
- 修复了一个 bug：当嵌套在其他可关闭元素中时，`Escape` 键关闭了多个活动的可关闭组件 [pr:2096]
- 修复了对宿主元素强制 box-sizing 偏好的 bug

:::

:::changed

- 更新了 `<wa-icon>`，以使用 [{{ site.siblings.fontAwesome.name }} 7.2.0](https://fontawesome.com/changelog#v7-2-0) [pr:2059]
- 更新了 `<wa-popup>` 箭头样式，以防止较大尺寸的箭头与弹出内容重叠 [pr:2070]

:::

## 3.2.1

<small><time datetime="2026-02-04">2026 年 2 月 4 日</time></small>

:::fixed

- 修复了构建脚本中的一个 bug：导致 `llms.txt` 和 `dist/skills` 从 {{ site.namePro }} 包中遗漏 [pr:2022]

:::

## 3.2.0

<small><time datetime="2026-02-04">2026 年 2 月 4 日</time></small>

:::added

- 添加了 `<wa-file-input>` 作为实验性 Pro 组件 [issue:1240]
- 添加了 `<wa-sparkline>` 作为实验性 Pro 组件
- 添加了 `<wa-number-input>` 作为实验性组件，用于带步进按钮的数值输入 [issue:1688]
- 添加了 [代理技能](/docs/ai/agent-skills)，供遵循 [agentskills.io](https://agentskills.io/) 规范的 AI 编码助手使用
- 添加了 llms.txt 以协助 AI 助手使用 Web Awesome [discuss:1100]
- 添加了 CEM 生成的 Vue 和 Svelte 类型
- 为可拖动元素添加了 `pointercancel` 和 `touchcancel` 事件处理，以防止拖动卡住
- 添加了 `wa-justify-content-*` 工具类 [pr:1930]
- 添加了 `wa-flex-wrap` 工具类 [pr:1994]
- 添加了缺失的 `wa-gap-4xl` 工具类 [pr:1931]
- 为 `<wa-progress-ring>` 添加了 `track` 和 `indicator` CSS 部件 [pr:1863]
- 为 `<wa-icon>` 添加了旋转、翻转和动画支持，带有支持 {{ site.siblings.fontAwesome.name }} 的动画工具的 `rotate`、`flip` 和 `animation` 属性 [pr:1824]
- 添加了禁用 `<wa-button>` 中链接按钮的能力 [pr:1848]
- [文档]：包含了 Svelte、Vue 和 Angular 的特定框架文档 [pr:1895]

:::

:::fixed

- 修复了 `<wa-select>` 中的一个 bug：当存在 `with-clear` 时，`<wa-option>` 上的 `selected` 属性被忽略 [issue:1922]
- 修复了 `<wa-popover>` 中的一个 bug：在 shadow DOM 中声明时，点击内部时会意外关闭 [pr:1969]
- 修复了 `<wa-tag>` 中的一个 bug：图标颜色与标签的 `appearance` 不匹配 [pr:1814]
- 修复了 `<wa-animated-image>`、`<wa-carousel>`、`<wa-progress-ring>`、`<wa-slider>` 中的一个 bug：启用时违反了 `style-src-attr` CSP 指令 [pr:1937]
- 修复了 `<wa-icon>` 中的一个 bug：支持包含限定符的 Font Awesome Pro+ 图标族（例如 `family="jelly-duo"` 现在正常工作，而不需要 `family="jelly" variant="duo-regular"`），并将 Font Awesome 更新为 7.1.0
- 修复了 `<wa-icon>` 中的一个 bug：Bootstrap 图标大小被覆盖 [pr:1968]
- 修复了 `<wa-tooltip>` 中的一个 bug：安全三角形未被尊重 [pr:1967]
- 修复了 `<wa-dropdown>` 中的一个 bug：子菜单检测在 shadow DOM 中无法工作 [pr:1956]
- 修复了 `<wa-popup>` 和 `<wa-dropdown-item>` 中的一个 bug：在弹出打开时移除弹出时导致错误 [issue:1910]
- 修复了 `<wa-popup>` 和 `<wa-dropdown>` 中的一个 bug：当 shadow DOM 查询返回 null 时导致错误 [issue:1911]
- 修复了 `<wa-combobox>` 中的一个 bug：当选项被预选时阻止列表框打开 [issue:1883]
- 修复了可拖动元素中的一个 bug：`event.touches` 为空时，`touchend` 事件上的 TypeError
- 修复了 `<wa-tree-item>` 中的一个 bug：没有展开图标时，光标显示为指针 [pr:1936]
- 修复了 `<wa-tree-item>` 中的一个 bug：在 RTL 中 chevron 渲染为错误方向 [pr:1798]
- 修复了 `<wa-button>` 中的一个 bug：放在 `<form>` 元素内时，导致 `<wa-dropdown>` 元素打开后立即关闭 [pr:1996]
- 修复了 `<wa-radio-group>` 中的一个 bug：即使组没有设置大小，具有显式大小的 `<wa-radio>` 元素会被组覆盖 [pr:2005]
- 修复了 `<wa-radio-group>` 中的一个 bug：导致单选大小不符合文档工作 [issue:2001]
- 修复了 `<wa-popover>` 中的一个 bug：当在 DOM 中移动宿主元素时，事件处理程序会丢失 [pr:1976]
- 修复了一个 bug：阻止 `wa-visually-hidden-label` 类隐藏单选组和颜色选择器的标签 [pr:2012]

:::

:::changed

- [文档]：组件 API（如插槽、状态、方法等）现在按字母顺序排列 [pr:1895]
- [文档]：组件 API 现在正确检查其继承链 [pr:1895]
- 改进了波斯语翻译 [pr:1923]
- 改进了 `<wa-qr-code>`，在宿主上使用 CSS `color` 作为填充，`background-color` 作为背景 [pr:1991]
  - 弃用了 `fill` 和 `background` 属性
  - 现有实现现在正确自动适应浅色/深色模式
  - 使用 CSS 时，二维码现在会自动适应 `color` 和 `background-color` 更改
- 修改了 `wa-align-items-*` 工具类，默认应用 `display: flex` [pr:1943]

:::

## 3.1.0

<small><time datetime="2025-12-16">2025 年 12 月 16 日</time></small>

:::added

- 添加了 `<wa-combobox>` 作为实验性 Pro 组件 [issue:1074]
- 添加了 [官方 Web Awesome Figma 设计套件](/docs/resources/figma) 的 2.0.0 版
- 添加了对 {{ site.namePro }} 的 npm 支持
- 添加了 `layers.css` 以定义级联层顺序，并更新了调色板、主题、原生样式和工具以导入新规则以获得更安全的模块化 [pr:1793]

:::

:::fixed

- [Pro]：修复了 `<wa-page>` 中的几个大小 bug，`slot="footer"` 不再总是"溢出"容器。
- 修复了 `<wa-slider>` 中的一个 bug：导致某些触摸设备最终具有不正确的值 [issue:1703]
- 修复了 `<wa-card>` 中的一个 bug：防止某些插槽被正确检测到 [discuss:1450]
- 修复了 `<wa-scroller>` 样式中的 z-index bug [issue:1724]
- 修复了 `<wa-icon>` 中的一个 bug：导致某些图标库以不正确的 SVG 填充渲染 [issue:1733]
- 修复了 `<wa-tree-item>` 中的一个 bug：在延迟加载时微调器不显示 [issue:1678]
- 修复了 `<wa-dropdown>` 中的一个 bug：在取消 `wa-hide` 事件时，浏览器挂起 [issue:1483]
- 修复了 `<wa-tab-group>` 中的一个 bug：确保活动指示器始终显示 [issue:1206]
- 修复了 `<wa-dropdown-item>` 中的一个 bug：防止导入图标依赖 [issue:1825]
- 修复了 `<wa-select>` 中的一个 bug：在多选模式下，阻止点击标签的删除按钮删除选项
- 修复了 `<wa-select>` 中的一个 bug：在使用 `multiple` 时，标签按字母顺序出现而不是选择顺序
- 修复了 Web Awesome 表单控件中的一个 bug：导致 `<wa-input form="foo">` 将表单属性设置为等于 `"foo"` 而不是返回打破平台预期的 `HTMLFormElement` [pr:1815]
- 修复了 `<wa-button>` 中的一个 bug：阻止其没有为表单提交复制属性 [pr:1815]
- 修复了构建脚本未构建 `/dist/(utilities|events).js` 的 bug [pr:1816]

:::

:::changed

- 改进了 `<wa-icon>` 的性能，使初始渲染更快，尤其是在页面上有多个图标时 [issue:1729]
- 改进了 `<wa-slider>`，当将字符串值传递给 `min`、`max` 和 `step` 属性时不会抛出错误 [issue:1823]
- 通过修复 CSS 导入和重用方式，改进了所有组件的性能 [issue:1812]
- 修改了 `<wa-dropdown-item>` 的默认 `transition` 样式以使用设计令牌 [pr:1693]

:::

## 3.0.0

<small><time datetime="2025-12-02">2025 年 12 月 2 日</time></small>

:::breaking

- 🚨 重大更改：在以下元素中将 `appearance="filled outlined"` 更改为 `appearance="filled-outlined"` [issue:1127]
  - `<wa-button>`
  - `<wa-callout>`
  - `<wa-card>`
  - `<wa-details>`
  - `<wa-input>`
  - `<wa-select>`
  - `<wa-tag>`
  - `<wa-textarea>`
- 🚨 重大更改：修复了 `<wa-input>` 中 `base` 和 `input` 部件交换的 bug [issue:1646]

:::

:::added

- 添加了哈萨克语翻译 [pr:1496]
- 添加了 VS Code 和 JetBrains 的代码补全文档 [pr:1550]
- 为 `<wa-textarea>` 重新添加了缺失的 `form-control-label` 部件，以便与其他表单控件保持一致 [pr:1533]
- 为 `<wa-button>` 添加了焦点委托，以确保使用 `tabindex` 时 tab 键正常工作 [issue:1622]
- 添加了 [文本工具](/docs/utilities/text/)，用于长文本、表单控件文本、字体大小、字体粗细、文本颜色和截断 [pr:1602]
- 添加了 [官方 Web Awesome Figma 设计套件](/docs/resources/figma) 的 1.0.0 版

:::

:::fixed

- 修复了 `<wa-button>` 中的一个 bug：当有 `href` 时，带槽的徽章没有正确定位 [issue:1377]
- 修复了 `<wa-details>` 和原生 `<details>` 中的焦点轮廓样式 [issue:1456]
- 修复了 `<wa-scroller>`、`<wa-dialog>` 和 `<wa-drawer>` 中的焦点轮廓样式 [issue:1484]
- 修复了 `<wa-checkbox>` 中的一个 bug：其值在选中/未选中时恢复为 `""` [pr:1547]
- 修复了一个 bug：导致图标按钮标签在框架中未渲染 [issue:1542]
- 修复了 `<wa-details>` 中的一个 bug：`name` 属性未反映 [pr:1538]
- 修复了 `<wa-dialog>` 和 `<wa-drawer>` 中的一个 bug：阻止在打开时将焦点设置在对话框/抽屉上 [issue:1302]
- 修复了一个溢出样式：导致选项卡组内容被不必要截断 [issue:1401]
- 修复了 `<wa-icon>` 中的一个 bug：当非文本节点被放入插槽时，导致图标按钮渲染 [issue:1475]
- 修复了 `<wa-tooltip>` 中的一个 bug：防止在断开连接然后重新连接到 DOM 时，工具提示显示 [issue:1595]
- 修复了一个 bug：导致表单标签中必需的 `*` 在 `<wa-checkbox>` 和 `<wa-switch>` 中有不正确的间距 [issue:1472]
- 修复了 `<wa-dialog>` 和 `<wa-drawer>` 中的一个 bug：当使用某些子元素时，导致组件提前隐藏 [pr:1636]
- 修复了 `<wa-popover>` 和 `<wa-tooltip>` 中的一个 bug：阻止使用点和其他有效的 ID 字符 [issue:1648]
- [Pro] 修复了 `<wa-page>` 中的一个 bug：导致菜单和侧边栏内容为带有 `disable-sticky` 的插槽预留空间
- 修复了 `<wa-include>` 派发的 `wa-include-error` 事件的不正确文档 [issue:1663]
- 修复了 `<wa-card>` 中的一个 bug：带槽的页眉和页脚内容没有正确对齐 [pr:1435]

:::

:::changed

- 改进了 `<wa-input>` 中的自动填充样式，使其跨整个视觉输入宽度 [issue:1439]
- 改进了 [文本工具](/docs/utilities/text/)，使每个大小修饰符始终与应用的字体大小完全匹配 [pr:1602]
- 改进了 Native Styles 以使用 `--wa-font-weight-code` 设计令牌
- 修改了 `<wa-slider>`，在范围模式下仅在被拖动的手柄上显示工具提示 [issue:1320]
- 将 `<wa-page>` 从 _实验性_ 升级为 _稳定_

:::

## 预发布版本

每个主要版本之前的 Beta 版本候选版本和快照。

<details data-no-outline>

<summary>显示所有预发布版本</summary>

## 3.0.0-beta.6

:::fixed

- 修复了 `<wa-dropdown>` 中的一个 bug：在阻止 `wa-select` 时关闭下拉事件 [issue:1432]
- 由于 `4.1.1` 和 `4.1.2` 中存在恶意软件，将 `@ctrl/tinycolor` 固定为 `4.1.0`。<https://socket.dev/npm/package/@ctrl/tinycolor/overview/4.1.1>

:::

## 3.0.0-beta.5

:::breaking

- 🚨 重大更改：更新了 `<wa-icon>` 以使用 {{ site.siblings.fontAwesome.name }} 7 [pr:1222]
  - 添加了 `auto-width` 属性以自动调整图标大小，因为 FA7 现在默认为固定宽度
  - 将图标的默认宽度更改为 `1.25em`，以匹配 FA7 的固定宽度比例
  - 改进了 `<wa-icon>` 中双色调图标的支持，包括自定义颜色、自定义不透明度和不透明度交换
  - 删除了 `fixed-width` 属性，因为它现在是默认行为
- 🚨 重大更改：在 `<wa-details>` 中将 `icon-position` 属性重命名为 `icon-placement` [discuss:1340]
- 🚨 重大更改：从 `<wa-button-group>` 中删除了 `size` 属性，因为它只设置初始大小，并且按钮更新时会不同步（改为将 `size` 应用于每个按钮）

:::

:::added

- 添加了 `<wa-intersection-observer>` 组件
- 添加了印地语翻译 [pr:1307]
- 为 `<wa-select>` 添加了 `--show-duration` 和 `--hide-duration` [issue:1281]
- 为 `<wa-card>` 添加了水平方向支持，使用 `orientation="horizontal"`

:::

:::fixed

- 修复了 `<wa-slider>` 中错误命名的导出工具提示部件 [pr:1277]
- 修复了 `<wa-dropdown>` 中的一个 bug：导致菜单溢出视口而不是调整大小 [issue:1267]
- 修复了 `<wa-dropdown>` 中的一个 bug：在嵌套在 shadow root 中时阻止键盘选择项 [issue:1270]
- 修复了 `<wa-dropdown>` 中的一个 bug：阻止从插槽传入的项被检测到 [issue:1271]
- 修复了 JSX 类型中的一个 bug：阻止类型文件被导出 [pr:1295]
- 修复了 JSX 类型中的一个 bug：生成不正确的组件导入 [issue:1303]
- 修复了 `<wa-slider>` 中的一个 bug：在点击/轻按时阻止拇指获得焦点 [issue:1312]
- 修复了 `<wa-scroller>` 中的一个 bug：导致阴影出现在相对定位的元素下方 [issue:1326]
- 修复了 `<wa-details>` 中的一个 bug：在摘要中点击交互式元素时导致展开/折叠 [issue:1252]
- 修复了 `<wa-button>` 默认具有 `static` 定位，仅在与 `<wa-badge>` 一起使用时才具有 `relative` 定位 [pr:1346]
- 修复了 `<wa-input>` 中的间距，当同时存在清除和密码切换图标时 [issue:1325]
- 修复了 `<wa-radio-group>` 和 `<wa-radio>` 中的一个 bug：动态更改外观时渲染不正确 [issue:1178]
- 修复了 `<wa-input>` 中的一个 bug：在将非字符串值分配给 `value` 时阻止值更改 [issue:1323]
- 修复了 `<wa-color-picker>` 中的一个 bug：防止选择器保持在视口中
- 修复了 `<wa-icon>` 中的一个 bug：`library`、`family`、`variant` 和 `name` 未反映 [pr:#1395]
- 修复了 `<wa-format-date>` 和 `<wa-relative-time>` 中的一个 bug：在输出前后出现空格 [#1417]

:::

## 3.0.0-beta.4

:::added

- 为 `<wa-details>` 添加了 `icon-position` 属性 [discuss:1099]
- 为 `<wa-details>` 添加了 `animating` 自定义状态 [pr:1214]
- 添加了 `--wa-tooltip-border-color`、`--wa-tooltip-border-style` 和 `--wa-tooltip-border-width` 令牌 [issue:1224]
- 为 `<wa-popover>` 和 `<wa-tooltip>` 添加了 `without-arrow` 属性，以在没有瑕疵的情况下隐藏箭头
- 添加了 React 和其他库的 JSX 类型 [pr:1256]
- 将 `<input type="file">` 添加到原生样式 [pr:1279]

:::

:::fixed

- 修复了 `<wa-details>` 中的一个 bug：在动画时导致内容溢出容器 [issue:1149]
- 修复了 `<wa-dialog>` 和 `<wa-drawer>` 中的一个 bug：缺少标签时阻止标题显示 [issue:1209]
- 修复了 React 包装器所需的缺失依赖项
- 修复了没有外观修饰符类的原生按钮上缺少的 `:hover` 和 `:active` 样式

:::

## 3.0.0-beta.3

:::added

- 为 `<wa-progress-bar>` 添加了 `--track-height` 自定义属性 [pr:1154]
- 为 `<wa-badge>` 添加了 `--pulse-color` 自定义属性 [pr:1173]

:::

:::fixed

- 修复了 `<wa-badge>` 中的一个 bug：`appearance="pulse"` 未按预期工作 [pr:1173]
- 修复了 `<wa-badge>` 缺失的 TypeScript 类型：其 `attention` 属性缺少 `bounce` 值 [pr:1173]
- 修复了 `package.json` 中缺失的 `nanoid` 依赖 [discuss:1139]
- 修复了 `<wa-slider>` 中的一个 bug：防止提示显示 [discuss:1172]
- 修复了 `<wa-textarea>` 中的一个 bug：设置 `resize="auto"` 导致文本区域高度加倍 [issue:1155]
- 修复了 `<wa-color-picker>`、`<wa-checkbox>`、`<wa-input>`、`<wa-radio-group>`、`<wa-switch>` 和 `<wa-textarea>` 中的一个 bug：阻止屏幕阅读器读出提示 [issue:1186]
- 修复了 `<wa-card>` 中的一个 bug：导致带槽媒体的边角不正确 [issue:1107]
- 修复了 `<wa-button-group>` 中的一个 bug：阻止药丸按钮正确渲染边角 [issue:1165]
- 修复了 `<wa-button-group>` 中的一个 bug：导致某些垂直组显示为水平 [issue:1152]

:::

:::changed

- 改进了 `<wa-animated-image>` 的可访问性，以便键盘用户可以聚焦和切换动画 [issue:1177]

:::

## 3.0.0-beta.2

:::added

- 将 `.wa-hover-rows` 添加到原生样式，以选择加入悬停时突出显示表格行。
- 将 `.wa-hover-rows` 添加到原生样式，以选择加入悬停时突出显示表格行 [pr:1111]
- 添加了 beta.1 缺失的更新日志条目 [pr:1117]

:::

:::fixed

- 修复了 `<wa-select>` 中的一个 bug：选项有空字符串值 [pr:1136]
- 修复了 `<wa-dropdown>` 中的一个 bug：防止菜单翻转/移位以保持菜单在视口中 [pr:1122]
- 修复了主题页面，使其显示正确的调色板和导入 [pr:1125]
- 修复了各种组件中的 `filled` 和 `outlined` 外观样式 [issue:1102]
- 修复了 Awesome 主题中的活动状态样式 [pr:1129]
- 修复了应用于某些背景时的原生文本样式 [pr:https://github.com/shoelace-style/webawesome/pull/1130]

:::

:::changed

- 改进了基本样式和可选样式的组织 [pr:1113]

:::

## 3.0.0-beta.1

我们很高兴分享 Web Awesome 的第一个 Beta 版本，其中包括一些重大更改，使库更加直观和一致！

列表看起来很广泛，但这是因为我们尝试全面记录了每个更改。我们预计大多数用户在升级期间只会遇到其中的几个。大多数是简单的属性重命名（如 clearable 变为 with-clear）和组件简化，实际上减少了您需要编写的代码量。

**如果您是 Web Awesome alpha 用户，请仔细阅读这些发行说明！**

这些更改和改进中有许多是像您这样的用户反馈的直接结果！这些更改代表了我们在从 alpha 转向更稳定的 beta 版本时正确处理基础的承诺。

:::breaking

- 表单控件（如 `<wa-input>`）上的 `input` 和 `change` 事件现在始终设置为 `bubble` 和 `compose`。
- 大大简化了原生样式的工作方式并删除了冗余工具
  - 删除了 `.wa-button`、`.wa-callout` 类
  - 删除了 `themes/native/*.css` 文件；使用 `native.css` 选择加入原生样式
  - 阐明了哪些工具类可以应用于哪些原生元素
- 将 `classic` 主题重命名为 `shoelace`
- 除了默认主题和颜色之外，从所有主题、调色板和语义颜色样式表中删除了 `:root` 选择器。所有这些样式现在仅作用域于类，例如 `.wa-theme-awesome`、`.wa-palette-bright` 和 `.wa-brand-orange`。
- 从组件中删除了大多数自定义属性，这些属性否则可以使用 `::part()` 选择器和标准 CSS 属性设置样式。
- `<wa-dropdown>` 已重新设计和简化，不再使用菜单、菜单项、菜单标签；请改用 `<wa-dropdown-item>`
- 将 `<wa-badge>` 中的 `pulse` 属性重命名为 `attention="pulse"` 并添加了 `attention="bounce"` [issue:940]
- 在 `<wa-split-panel>` 和 `<wa-divider>` 中将 `vertical` 属性重命名为 `orientation="vertical"`，以与其他组件和平台保持一致 [issue:674]
- 使用 `with-*` 和 `without-*` 模式重命名了某些布尔属性以保持一致：
  - `<wa-button caret>` => `<wa-button with-caret>`
  - `<wa-color-picker no-format-toggle>` => `<wa-color-picker without-format-toggle>`
  - `<wa-format-number no-grouping>` => `<wa-format-number without-grouping>`
  - `<wa-input no-spin-buttons>` => `<wa-input without-spin-buttons>`
  - `<wa-input clearable>` => `<wa-input with-clear>`
  - `<wa-select clearable>` => `<wa-select with-clear>`
  - `<wa-tab-group no-scroll-controls>` => `<wa-tab-group without-scroll-controls>`
  - `<wa-tag removable>` => `<wa-tag with-remove>`
- 将所有 `prefix` 和 `suffix` 插槽重命名为 `start` 和 `end`，影响以下组件：
  - `<wa-breadcrumb-item>`
  - `<wa-button>`
  - `<wa-input>`
  - `<wa-select>`
  - `<wa-option>`
- 删除了 `<wa-carousel>` CSS 部件名称 `pagination-item--active` 中的额外破折号 => `pagination-item-active`
- 在 `<wa-color-picker>` 中将 `eye-dropper-*` 部件重命名为 `eyedropper`
- 从 `<wa-card>` 中删除了 `size` 属性；请直接在子元素上设置子元素大小
- 大大简化了跨组件和工具的大小策略
  - 删除了 `--wa-size`、`--wa-size-smaller`、`--wa-size-larger`、`--wa-space`、`--wa-space-smaller` 和 `--wa-space-larger`
  - 添加了 `--wa-form-control-padding-inline`、`--wa-form-control-padding-block` 和 `--wa-form-control-toggle-size` 的令牌
  - 重构了默认的 `--wa-font-size-*` 值，使用明显的 1.125 比例并将渲染值四舍五入到最近的整像素
  - 添加了 `--wa-font-size-smaller` 和 `--wa-font-size-larger` 的便捷令牌
  - 更新了组件在适当的地方使用相对 `em` 值用于内部填充和边距
- 从 `<wa-radio>` 中删除了 `hint` 属性和插槽；请直接将提示应用于 `<wa-radio-group>`
- 使用丰富的新功能重新设计了 `<wa-slider>`
  - 使用 `range` 属性添加了对带双拇指的范围滑块支持
  - 使用 `orientation="vertical"` 添加了垂直方向支持
  - 使用 `with-markers` 在每个步骤添加了视觉标记
  - 使用 `reference` 插槽添加了上下文参考标签
  - 使用 `with-tooltip` 添加了显示当前值的工具提示
  - 使用 `indicator-offset` 属性添加了可自定义的指示器偏移
  - 使用 `valueFormatter` 属性添加了值格式化支持
  - 改进了样式 API 以保持一致且更强大（不再有浏览器特定的选择器和伪元素样式）
  - 更新为使用一致的 `with-*` 属性命名模式
- 重新设计了 `<wa-select>` 以使用 `<wa-option selected>` 来设置初始选定选项，删除了选项值的"不允许空格"限制

:::

:::added

- 添加了新组件：`<wa-popover>`（14 个扩展目标中的第 2 个）
- 添加了新组件：`<wa-zoomable-frame>`（14 个扩展目标中的第 3 个）
- 为 `<wa-divider orientation="vertical">` 添加了 `min-block-size`，以确保无论容器高度如何，分隔线都可见
- 为 `<wa-details>` 添加了对 `name` 的支持，以在组中排他性打开一个
- 为主题添加了 `--wa-content-spacing`，以在 Native Styles 中设置 HTML 元素之间的默认间距
- 为 `<wa-checkbox>` 添加了 `--checked-icon-scale`
- 当使用 `multiple` 时为 `<wa-select>` 添加了 `--tag-max-size`
- 为 `<wa-dialog>` 添加了对 `data-dialog="open <id>"` 的支持
- 为 `<wa-drawer>` 添加了对 `data-drawer="open <id>"` 的支持
- 为组件悬停样式添加了 `@media (hover: hover)`，以防止粘性悬停状态
- 添加了使用 `<wa-radio-group disabled>` 禁用组中所有单选按钮的能力

:::

:::fixed

- 修复了 `<wa-radio-group>` 中的一个 bug：在分配数值时导致单选按钮取消选中
- 修复了 `<wa-button-group>`，使分隔线在按钮之间正确显示
- 修复了使用 RTL 时 `<wa-slider>` 中的工具提示位置
- 修复了 `<wa-details>` 和原生 `<details>` 样式中的一个 bug：使摘要难以点击
- 修复了统一跨组件和原生元素表单控件高度的几个 bug
- 修复了组件的 `input` 事件没有冒泡的 bug

:::

:::changed

- 改进了 CSS 工具和原生样式以使用 [CSS 层](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)，以便更轻松地自定义最终用户（不再有特异性冲突 — 您的 CSS 获胜！）
- 改进了原生 `<button>` 样式以正确间隔图标
- 改进了 `<wa-color-picker>` 中的按钮外观
- 改进了 `<wa-rating>` 以默认具有更可访问的图标

:::

:::removed

- 删除了实验性 `<wa-code-demo>` 组件
- `<wa-menu>`、`<wa-menu-item>`、`<wa-menu-label>` 已被删除；请改用 `<wa-dropdown-item>`
- `<wa-icon-button>` 已被删除；现在可以通过 `<wa-button>` 添加图标按钮
- `<wa-radio-button>` 已被删除；请改用 `<wa-radio appearance="button">`

:::

## 3.0.0-alpha.13

:::breaking

- 🚨 重大更改：将 `<image-comparer>` 重命名为 `<wa-comparison>` 并改进了非图像内容的兼容性
- 🚨 重大更改：为 `<wa-dialog>` 和 `<wa-drawer>` 添加了插槽检测，因此您无需指定 `with-header` 和 `with-footer`；页眉现在默认打开，但您可以使用 `without-header` 属性关闭它们
- 🚨 重大更改：将 `image` 插槽重命名为 `media` 以获得更合适的命名约定

:::

:::added

- 添加了主题构建器来创建您自己的主题
- 添加了新的博客与新闻模式类别
- 添加了新组件：`<wa-scroller>`（14 个扩展目标中的第 1 个）
- 为 `<wa-icon>` 添加了对双色调浅色、浅色和常规样式以及 Sharp Duotone 系列样式的支持
- 为 `<wa-tag>` 添加了默认 `gap`，以便在与图标一起使用时获得更好的默认间距

:::

:::fixed

- 修复了导致 `<wa-radio-group>` 在其下方有不希望的边距的 bug
- 修复了 Matter 主题中的一个 bug：防止点击表单控件标签时无法聚焦控件
- 修复了 `<wa-select>` 中的一个 bug：导致图标间距不正确
- 修复了 `<wa-select>` 中的一个 bug：导致禁用后列表框现在显示
- 修复了 `<wa-radio-group>` 中的一个 bug：阻止单选按钮验证

:::

:::changed

- 改进了原生单选对齐
- 改进了 `.wa-cloak` 工具类，使所有与 FOUCE 相关的解决方案 100% 选择加入

:::

## 3.0.0-alpha.12

:::added

- 为 [`<wa-details>`](/docs/components/details) 和 [`<wa-card>`](/docs/components/card) 添加了 `appearance`，并在 [`<details>` 原生样式](/docs/utilities/native/#details) 中支持外观工具。
- 为所有调色板添加了 `orange` 比例
- 添加了 [`.wa-cloak` 工具](/docs/utilities/fouce) 以防止 FOUCE
- 添加了 [`allDefined()` 工具](/docs/usage/#all-defined) 用于等待组件注册
- 在 `<wa-menu-item>` 中添加了 `checked-icon` 和 `submenu-icon` 插槽，以便可以使用自定义图标

:::

:::changed

- 通过删除 `base` CSS 部件简化了 `<wa-breadcrumb-item>`
- 通过删除 `base` CSS 部件简化了 `<wa-menu-item>` 和 `<wa-menu-label>`

:::

:::fixed

- 在 `<wa-tooltip>` 上指定继承的 CSS 属性现在按预期工作
- 修复了 `<wa-select>` 中的一个 bug：使其难以与 VueJS、Svelte 和许多其他框架一起使用
- 修复了 `<wa-select multiple>` 中的一个 bug：有时导致空 `<div>` 元素输出
- 修复了更改 `<wa-option>` 标签不会在 `<wa-select>` 中更新显示标签的 bug
- 为 `<wa-tab>` 中的带槽图标添加了默认间距
- 围绕药丸形状元素的多个修复：
  - 修复了文本字段的 `wa-pill` 类
  - 修复了 `<wa-input>` 和 `<wa-radio-button>` 元素的 `pill` 样式
- 修复了 `<wa-radio-button>` 中的一个 bug：防止活动按钮获得正确样式
- 修复了 `<wa-button>` 中的一个 bug：阻止焦点环在 Safari 中显示
- 修复了 `<wa-dropdown>` 在按钮组中的对齐
- 从 `<wa-dialog>` 和 `<wa-drawer>` 中删除了关闭观察器逻辑，以修复背景隐藏动画 bug；此逻辑已处理，当浏览器支持更好且行为一致时，我们将重新审视 `CloseWatcher`
- 恢复了 `<wa-dialog>` 结构和 CSS 以修复对话框中内容被裁剪的问题（WA-A #123）和 iOS Safari 中的轻按关闭（WA-A #201）
- 修复了 `<wa-color-picker>` 中的一个 bug：在颜色选择器下拉列表正上方点击时阻止轻按关闭
- 修复了 `<wa-progress>` 中的一个 bug：阻止 Safari 动画进度更改
- 修复了 [原生复选框样式](/docs/utilities/native/#form-controls) 中缺失的不确定图标
- 修复了 `<wa-radio>` 中的一个 bug：元素堆叠而不是内联显示
- 文档修复：
  - 修复了搜索对话框的样式，使其在搜索时不会跳动
  - 主题卡片现在有图标了

:::

## 3.0.0-alpha.11

:::added

- 调色板调整 UI。调整色相、灰度、整体色彩丰富度，保存或分享结果。
- 为所有调色板添加了 `pink` 比例
- 添加了 `--wa-color-[hue]` 令牌，带有每个比例的"核心"颜色，无论它位于哪个色调。您可以在每个调色板的第一列找到它们。
- 为 `<wa-radio>` 添加了 `hint` 属性和相应插槽
- 为 `<wa-select>` 添加了 `tag` 部件（以及相关的导出部件），以允许在选择了超过最大可见项数时定位显示的标签
- 为 `<wa-option>` 添加了 `label` 属性和 `defaultLabel` 属性，以覆盖生成的标签（对于富内容有用）
- 为 `<wa-menu-item>` 添加了 `label` 属性和 `defaultLabel` 属性，以覆盖生成的标签（对于富内容有用）
- 在 `<wa-card>` 上重新引入了 `--border-color`，以便卡片本身可以具有与其内部边框不同的边框颜色。
- 为原生单选文档添加了方向示例

:::

:::fixed

- 修复了 `<wa-switch>` 中的一个 bug：在切换开关时工具提示工作不正确
- 修复了 `<wa-select>` 中的一个 bug：阻止使用 `--wa-form-control-placeholder-color` 令牌自定义占位符颜色
- 修复了 `<wa-select>` 中展开图标中的错误 CSS 值
- 修复了 `<wa-select>` 中的一个 bug：防止屏幕阅读器读出描述
- 修复了 `<wa-card>` 中的一个 bug：缺少页眉和页脚时，子元素没有正确的圆角
- 修复了 `<wa-card>` 中的一个 bug：阻止插槽在没有 `with-*` 属性时自动显示
- 修复了导致 `document.createElement('wa-tab')` 失败的 bug（这也意味着它不能在 VueJS 和其他框架中使用）
- 修复了整个文档中多个断裂的事件监听器

:::

:::changed

- 调整了所有调色板的色相，使它们更独特并使其色相更有意
- 改进了主题混合 UI：
  - 现在可以用支持的 9 种色相中的任何一种覆盖任何主题的品牌颜色。
  - 丰富的预览
  - 生成可复制的代码片段。
  - 永久链接
- 更新了 Active、Glossy、Playful 和 Premium 主题，使 `--wa-color-brand-fill-loud` 使用所选品牌颜色的核心颜色，无论色调如何。

:::

:::removed

- 从调色板中删除了 `violet` 和 `teal`，转而使用 `purple` 和 `cyan`（这不只是重命名，颜色也已调整）。
- 从 `<wa-radio>` 中删除了 `base` 部件。现在可以通过直接向元素本身应用 CSS 来设置样式。
- 从 `<wa-option>` 中删除了 `getTextLabel()` 方法（如果需要动态标签，只需动态设置 `label` 属性）
- 从 `<wa-option>` 中删除了 `base` 部件，以便更轻松地进行样式设置。现在可以通过直接向元素本身应用 CSS 来设置样式。
- 从 `<wa-menu-item>` 中删除了 `getTextLabel()` 方法（如果需要动态标签，只需动态设置 `label` 属性）

:::

## 3.0.0-alpha.10

:::breaking

- 🚨 重大变更：更新所有组件以使用原生事件而非 `wa-` 前缀事件。这将允许组件在您的代码、框架、第三方插件等中更像原生元素一样工作。要更新您的代码，只需从以下事件的事件监听器中移除前缀即可：
  - `wa-input` => `input`
  - `wa-change` => `change`
  - `wa-blur` => `blur`（此事件不再冒泡，请使用 `focusout` 获取冒泡版本）
  - `wa-focus` => `focus`（此事件不再冒泡，请使用 `focusin` 获取冒泡版本）

:::

:::added

- 添加了 `.wa-callout` 工具类
- 为 `<wa-radio-group>` 添加了 `orientation` 属性以支持垂直和水平的单选按钮项
- 添加了视觉测试文档
- 添加了如何挑选原生样式的文档

:::

:::fixed

- 修复了 `<wa-tab-group>` 中的一个 bug：阻止嵌套的标签组正常工作
- 修复了 `<wa-input>` 中的 `show-password-icon` 和 `hide-password-icon` 插槽名称，以更直观地表示它们的功能
- 修复了 `<wa-textarea>` 中的一个 bug：如果以某种方式删除初始值，空控件会提交一个值
- 修复了 `<input>`、`<textarea>` 和 `<select>` 样式中的一个 bug：当包裹在 `<label>` 中时，阻止全宽控件使用 100% 宽度
- 修复了 `<select>` 样式中的一个 bug：导致插入符号阻止交互，并且除非包裹在 `<label>` 中，否则阻止插入符号渲染
- 修复了 `<wa-checkbox>` 中的一个 bug：导致提示与标签内联渲染

:::

:::changed

- 更改了 `variant` 和 `size` 属性的行为，以便支持这些属性但未设置它们的嵌套组件继承其父级上设置的值。此外：
  - 为 `<wa-dropdown>`、`<wa-button-group>`、`<wa-menu>`、`<wa-rating>`、`<wa-card>` 添加了 `size` 属性
  - 为 `<wa-button-group>` 添加了 `variant` 属性

:::

## 3.0.0-alpha.9

:::added

- 添加了新主题：
  - Glossy
  - Matter
  - Premium
  - Playful
- 添加了主题和调色板文档
- 添加了测试套件以确保所有调色板提供它们应该提供的对比度
- 添加了 `.wa-invert` 工具类以反转当前配色方案
- 为 `<wa-input>`、`<wa-textarea>` 和 `<wa-select>` 添加了 `:state(blank)`，以便在空时以不同方式样式化表单输入

:::

:::changed

- 将颜色和排版从主题中分离出来，以便它们可以独立使用

:::

## 3.0.0-alpha.8

:::added

- 为 `<wa-callout>` 和 `<wa-tag>` 添加了 `appearance`
- 添加了新主题：
  - Awesome
  - Active
  - Brutalist
  - Mellow
  - Tailspin

:::

:::fixed

- 修复了 `<wa-switch>` 中的一个 bug：当属性更改时，它不会正确更改其"checked"状态
- 修复了 `<wa-switch>` 中的一个 bug：当提供值且开关被选中时，值会错误地提交为"on"
- 修复了 `wa-split` CSS 工具中的一个 bug：导致它行为不正确

:::

:::changed

- 简化了 `<wa-card>` 的内部结构和 CSS 属性，删除了 `base` 部件
- 提高了使用大量选项时 `<wa-select>` 的性能
- 更新了日语翻译
- 为了熟悉度和准确性，将 `--wa-form-control-resting-color` 重命名为 `--wa-form-control-border-color`
- 更新了 `--wa-border-width-*` 和 `--wa-border-radius-*` 比例以获得更好的开发体验
  - 将 `--wa-border-width-scale` 的值更改为 `1` 并更新了基于大小的 `--wa-border-width-*` 令牌的计算
  - 将 `--wa-border-radius-scale` 的值更改为 `1` 并更新了基于大小的 `--wa-border-radius-*` 令牌的计算
  - 缩小了比例，使 `--wa-border-radius-s` 现在是最小的边框半径令牌，与之前的 `--wa-border-radius-xs` 令牌的值匹配
- 更新了 `--wa-shadow-*` 比例以获得更好的开发体验
  - 将 `--wa-shadow-offset-y-scale` 的值更改为 `1` 并更新了基于大小的 `--wa-shadow-offset-y-*` 令牌的计算
  - 将 `--wa-shadow-blur-scale` 的值更改为 `1` 并更新了基于大小的 `--wa-shadow-blur-*` 令牌的计算
  - 将 `--wa-shadow-spread-scale` 的值更改为 `-0.5` 并更新了基于大小的 `--wa-shadow-spread-*` 令牌的计算
  - 更新了基于大小的 `--wa-shadow-offset-x-*` 令牌的计算以匹配其他阴影质量使用的计算（`--wa-shadow-offset-x-scale` 保持为 `0`）

:::

:::removed

- 删除了基于大小的 `--wa-form-control-height-*` 令牌，转而使用 `--wa-form-control-height`（参见 [尺寸工具](/docs/utilities/size/)）
- 删除了未使用的 `--wa-border-radius-xs` 令牌和 `wa-border-radius-xs` 工具类
- 删除了未使用的 `--wa-shadow-xs` 令牌

:::

## 3.0.0-alpha.7

:::changed

- 将 applied.css 重命名为 webawesome.css

:::

## 3.0.0-alpha.6

:::added

- 为以下内容添加了原生样式：
  [按钮](/docs/utilities/native/#buttons)、
  [输入字段](/docs/utilities/native/#form-controls)、
  [对话框](/docs/utilities/native/#dialog)、
  [详情](/docs/utilities/native/#details)、
  [表格](/docs/utilities/native/#tables)、
  [列表](/docs/utilities/native/#lists)
  和大多数 [内容元素](/docs/utilities/native/#typography)
- 添加了 [颜色变体工具](/docs/utilities/color/)
- 添加了 [外观工具](/docs/utilities/appearance/)
- 添加了 [尺寸工具](/docs/utilities/size/)
- 添加了 [布局工具](/docs/layout/#utilities)
- 添加了 [`.wa-visually-hidden`](/docs/utilities/visually-hidden) 工具
- 添加了 [`<wa-page>`](/docs/components/page/#styles) 原生样式和工具
- 为 `<wa-checkbox>` 和 `<wa-radio>` 添加了 `checked` 和 `disabled` 自定义状态
- 为 `<wa-tree-item>` 添加了 `disabled`、`expanded`、`indeterminate` 和 `selected` 自定义状态

:::

:::changed

- `<wa-page>`：`mobile-breakpoint` 现在接受任何 CSS 长度，而不只是像素
- 在 `<wa-carousel>` 中将 `navigation-button--previous` 和 `navigation-button--next` 部件重命名为 `navigation-button-previous` 和 `navigation-button-next`
- 在 `<wa-tab-group>` 中将 `scroll-button--start` 和 `scroll-button--end` 部件重命名为 `scroll-button-start` 和 `scroll-button-end`

:::

:::removed

- 删除了 `<wa-visually-hidden>`，转而使用工具类
- 删除了有状态 CSS 部件，转而使用自定义状态
  - `<wa-checkbox>`：`control--checked`、`control--indeterminate`
  - `<wa-radio>`：`control--checked`
  - `<wa-tree-item>`：`item--disabled`、`item--expanded`、`item--indeterminate`、`item--selected`

:::

## 3.0.0-alpha.5

:::added

- 添加了芬兰语翻译
- 添加了意大利语翻译
- 添加了乌克兰语翻译
- 为 `<wa-split-panel>` 添加了对 <kbd>Enter</kbd> 的支持，以与 ARIA APG 的 [窗口拆分器模式](https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/) 保持一致
- 为 `<wa-select>` 中的延迟加载选项添加了更强大的支持
- 添加了对垂直按钮组的支持
- 为 `<wa-radio-group>` 添加了 `focus()` 方法

:::

:::fixed

- 修复了 `<wa-dialog>` 中滚动锁定导致视口移动的 bug
- 修复了使用 `.show()` 时 `<wa-dialog>` 中的 bug
- 修复了使用 `precision` 时 `<wa-rating>` 中的 bug
- 修复了 `<wa-rating>` 中的一个 bug：在只读时允许 tab 键进入评分
- 修复了 `<wa-relative-time>` 中的一个 bug：title 属性会显示冗余信息
- 修复了 `<wa-select>` 中的一个 bug：在使用占位符和多选时导致占位符显示不正确
- 修复了 `<wa-tooltip>` 中的一个 bug：在断开连接的元素中导致内存泄漏
- 修复了 `<wa-select>` 中的一个 bug：阻止 `<wa-option>` 中的标签更改更新控制器
- 修复了 `<wa-carousel>` 中的一个 bug：在拖动时激活交互元素
- 修复了 `<wa-tab-group>` 中的一个 bug：阻止通过在 `<wa-tab>` 元素上设置 `active` 来更改标签
- 修复了 `<wa-tab-group>` 中的一个 bug：当太快地从 DOM 中移除时导致错误
- 修复了 `<wa-textarea>` 中的 bug：使用 `resize="auto"` 时导致滚动跳转
- 修复了某些打包工具使用动态导入时的 bug

:::

:::changed

- 改进了 `<wa-animated-image>` 中播放图标的对齐方式
- 改进了链接按钮的行为，默认不设置 `noreferrer noopener`
- 更新了所有方向检查，使用 `this.localize.dir()` 而非 `el.matches(:dir(rtl))`，这样旧浏览器不会报错

:::

</details>

<wa-callout>
  <div class="wa-flank:end">
    <div class="wa-stack wa-gap-2xs">
      <strong>看起来有什么不对或缺少什么吗？</strong>
      <span>如果您发现了拼写错误、缺少的更改或任何看起来不正确的内容，请告诉我们。</span>
    </div>
    <div class="wa-cluster wa-gap-s">
      <wa-button
        size="s"
        href="{{ site.github.issues }}"
        target="_blank"
        data-track-event="changelog:link_click"
        data-track-context="feedback_callout"
        data-track-destination="report_bug"
      >
        <wa-icon slot="start" variant="regular" name="bug"></wa-icon>
        报告 bug
      </wa-button>
      <wa-button
        size="s"
        href="{{ site.github.discussions }}"
        target="_blank"
        data-track-event="changelog:link_click"
        data-track-context="feedback_callout"
        data-track-destination="ask_for_help"
      >
        <wa-icon slot="start" variant="regular" name="message-question"></wa-icon>
        寻求帮助
      </wa-button>
    </div>
  </div>
</wa-callout>
