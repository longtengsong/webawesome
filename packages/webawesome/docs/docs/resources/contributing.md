---
title: 贡献指南
description: "@SITE_NAME@ 是一个开源项目，意味着每个人都可以使用它并为其开发做出贡献。"
layout: page-outline
---

许多 @SITE_NAME@ 组件是开源的，意味着每个人都可以使用它们并为其开发做出贡献。当您加入我们的社区时，您会发现一个友好的、涵盖各个经验水平的爱好者群体，他们乐意讨论与 @SITE_NAME@ 相关的任何事情。

开始贡献的最简单方式是加入[社区聊天]({{ site.urls.discord }})。这是我们交流、讨论新想法、征求意见等的地方！

关于为开源项目做贡献，一个常见的误解是您需要会写代码。这完全不正确。事实上，有*很多*方式可以做出贡献，而一些最重要的贡献恰恰来自那些从未写过一行代码的人。以下是您可以为项目做出有意义贡献的方式列表：

- 提交完善的错误报告
- 提交项目范围内的功能请求
- 改进文档
- 在社区聊天或讨论论坛中回复需要帮助的用户
- 在 GitHub 上对问题进行分类
- 担任项目的开发倡导者
- 赞助项目资金
- 编写测试
- 分享想法
- 当然，还有贡献代码！

请花一点时间阅读这些指南，以便让您自己和项目的维护者都能尽可能轻松地完成贡献过程。

## 使用问题跟踪器

[问题跟踪器]({{ site.github.issues }})用于错误报告、功能请求和拉取请求。

- 请**不要**将问题跟踪器用于个人支持请求。请改用[讨论论坛]({{ site.github.helpSupport }})。
- 请**不要**将问题跟踪器用于功能请求。请改用[讨论论坛]({{ site.github.ideas }})。
- 请**不要**偏离主题、劫持或破坏问题。保持讨论的焦点，并尊重他人。
- 请**不要**发表带有"+1"或"👍"的评论。请改用[表情反应](https://github.blog/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/)。
- 请**要**将问题跟踪器用于错误报告和拉取请求。

不遵守这些指南的问题可能会被关闭。作者和贡献者根本没有足够的资源来处理个人支持请求。

### 功能请求

功能请求可以通过[讨论论坛]({{ site.github.ideas }})提交。

- 请**要**在提出新功能之前搜索是否已有相同的请求。
- 请**要**使用投票按钮为功能投票。
- 请**要**分享支持新功能的实质性用例和观点（如果尚未被提及）。
- 请**不要**催促、垃圾邮件或@提及贡献者以优先处理您的功能。

### 错误报告

错误是*由库中的代码引起的可演示问题*。错误报告是对项目质量的重要贡献。提交错误报告时，您可以采取几个步骤来确保您的问题能快速得到关注。

- 请**不要**粘贴大段无关代码
- 请**要**在创建新问题之前搜索是否已有相同的问题
- 请**要**清晰地解释错误
- 请**要**提供演示该错误的最小测试用例（例如 [jsfiddle.net](https://jsfiddle.net/) 或 [CodePen](https://codepen.io/)）
- 请**要**在必要时提供额外的信息来复现错误

**最小测试用例对于成功的错误报告至关重要。** 它证明了错误存在于库中而非周围代码中。贡献者应该能够在不研究您的代码的情况下理解错误，否则他们可能会转向处理另一个错误。

### 拉取请求

为了保持项目按计划进行，请在提交 PR 之前考虑以下指南。

- 请**不要**在没有先开 issue 的情况下提交 PR，除非更改是微不足道的（例如修复拼写错误或过时的文档）。这可以避免您做的工作因各种原因而不被接受（例如，已经有人在做、不适合项目路线图、需要额外规划等）
- 请**要**确保您的 PR 清晰地定义您更改的内容。即使您觉得您的更改很明显，也请解释它们，以便其他贡献者更容易审查您的工作。没有详细描述的 PR 可能会在等待更多细节时被关闭。
- 请**要**针对 `next` 分支提交 PR。
- 请**不要**编辑 `dist/` 中的任何内容。这些文件是自动生成的，因此您需要编辑源文件。

作者保留拒绝任何超出项目范围或不符合代码质量标准的 PR 的权利。

### 分支

`current` - 此分支反映最新版本。

`next` - 这是您应提交拉取请求的分支。它反映了*下一个*版本中的内容。

## 文档

维护良好的文档可能是一项艰巨的任务，但糟糕的文档会导致用户沮丧并使项目对用户失去吸引力。幸运的是，为 @SITE_NAME@ 编写文档既快捷又简单！

@SITE_NAME@ 的大部分技术文档是通过 JSDoc 注释和源代码中的 TypeScript 元数据生成的。每个属性、方法、事件等都是通过这种方式记录的。代码内注释鼓励贡献者在发生变更时保持文档的更新，从而使文档不太容易过时。请参考现有组件了解如何在 @SITE_NAME@ 中使用 JSDoc 注释。

说明、代码示例和交互式演示是经过精心策划的，以提供最佳的用户体验。通常，最相关的信息会首先显示，不太常见的示例会显示在底部。边缘情况和陷阱应在上下文中通过提示或警告来指出。

文档由 [Eleventy](https://www.11ty.dev/) 驱动。查看 `docs/components/*.md` 了解页面的结构和格式。如果您要创建新组件，可以使用现有组件的 markdown 文件作为模板。

如果您在文档方面需要帮助，请随时在[社区聊天]({{ site.urls.discord }})中联系。

### @SITE_NAME@ 风格的 Markdown

@SITE_NAME@ 文档使用 [markdown-it](https://github.com/markdown-it/markdown-it) 的扩展版本。一般来说，它遵循 [Commonmark 规范](https://spec.commonmark.org/)，同时添加了一些额外的功能。

#### 代码预览

要渲染代码预览，请使用标准代码字段语法并添加 `example` 类：

````md
```html {.example}
[代码写在这里]
```
````

您还可以附加 `.open` 以默认展开代码，以及 `.no-edit` 以禁用 CodePen 按钮。这些修饰符的顺序不重要，但语言和修饰符之间不应有空格。

````md
```html {.example .open .no-edit}
[代码写在这里]
```
````

#### 提示块

可以使用以下语法添加特殊提示块。

```
:::info
这是一个提示/信息性提示块
:::

:::warning
这是一个警告提示块
:::
```

#### GitHub 问题

要链接到 GitHub 问题、PR 或讨论，请使用以下语法。

```
[#1234]
```

### Frontmatter

@SITE_NAME@ 文档中有许多 frontmatter 属性用于执行不同的操作。

例如，要仅在开发中显示页面，请使用 `unpublished: true` 键/值对。

```md
---
unpublished: true
---
```

要构建页面但不将其添加到任何搜索索引和集合中（使其不显示在侧边栏中），请使用 `unlisted: true, eleventyExcludeFromCollections: true` 键/值对。

```md
---
unlisted: true
eleventyExcludeFromCollections: true
---
```

### 示例中的图标

文档示例应默认使用 [Font Awesome Free](https://fontawesome.com/search?o=r&m=free) 图标，以便用户可以复制粘贴而无需 Pro 工具包代码。在专门演示 Pro 功能（如 Duotone、Sharp、Pro+ 图标包）的部分中可以使用 Pro 图标。

## 最佳实践

以下是我们努力遵循的约定、模式和最佳实践的非详尽列表。作为贡献者，我们要求您也尽最大努力遵循它们。这可以确保整个项目的一致性和可维护性。

如有疑问，请自行判断，维护者将很乐意在代码审查过程中为您提供指导。如果您在提交 PR 之前需要某些方面的澄清，请随时在[社区聊天]({{ site.urls.discord }})中联系。

:::info
本节内容可能一次阅读量较大，因此不要觉得需要马上全部吸收。大多数贡献者最好先略读本节，然后根据需要回顾相关内容。
:::

### 无障碍性

@SITE_NAME@ 在构建时考虑了无障碍性。创建适用于各种能力用户在多种场景下的通用组件是一个艰巨的挑战。通常，a11y 问题的解决方案并非黑白分明，因此我们可能无法一次性解决所有问题。但我们可以遵循一些指南，努力使 @SITE_NAME@ 成为构建应用程序和网站的可访问基础。

我们认真对待这一承诺，因此请确保您的贡献牢记这一目标。如果您在任何与 a11y 相关的事情上需要帮助，请在[社区聊天]({{ site.urls.discord }})中联系寻求帮助。如果您在库中发现无障碍性问题，请在[问题跟踪器]({{ site.github.issues }})上提交错误。

重要的是要记住，尽管无障碍性始于基础组件，但它并不止于此。每个人都有责任推广最佳实践，并确保我们为所有用户提供最佳体验。

### 代码格式化

大多数代码格式化由 [Prettier](https://prettier.io/) 通过提交钩子自动处理。但为了获得最佳体验，您应该在[编辑器中安装它](https://prettier.io/docs/en/editors.html)并启用保存时格式化。

未经咨询维护者，请不要对 `prettier.config.cjs` 进行任何更改。

### 可组合性

组件应该是可组合的，这意味着您可以轻松地在其他组件内部和与其一起重用它们。这减小了库的整体大小，加快了功能开发，并保持了用户体验的一致性。

### 组件结构

所有组件都有一个宿主元素，即对 `<wa-*>` 元素本身的引用。请确保始终根据您的需要将宿主元素的 `display` 属性设置为适当的值，因为根据自定义元素规范，默认值是 `inline`。

```css
:host {
  display: block;
}
```

除了 `display` 之外，尽可能避免在宿主元素上设置样式。原因是应用于宿主元素的样式不是封装的。相反，创建一个包裹组件内部内容的基础元素，并对其设置样式。这个约定也使在组件中使用 BEM 更加容易，因为基础元素可以作为"块"实体。

编写组件时，请尽量遵循其他组件中相同的结构和约定。例如，类通常遵循以下结构：

- 静态属性/方法
- 私有/公有属性（*非*响应式的）
- `@query` 装饰器
- `@state` 装饰器
- `@property` 装饰器
- 生命周期方法（`connectedCallback()`、`disconnectedCallback()`、`firstUpdated()` 等）
- 私有方法
- `@watch` 装饰器
- 公有方法
- `render()` 方法

请避免对类字段使用 `public` 关键字。当与装饰器、属性名称和参数结合使用时，它显得过于冗长。但是，请**务必**在任何有意定义为私有的属性或方法前添加 `private`。

:::info
这看起来可能很多，但一旦您开始使用该库，就会相当直观。不过，不要让这个结构阻止您提交 PR。[代码可以改变](https://www.abeautifulsite.net/posts/code-can-change/)，没有人会责备您"做错了"。同时，鼓励一致性有助于保持库的可维护性并让他人易于理解。（一个有助于此的 lint 规则将会是一个非常受欢迎的 PR！）
:::

### 类名

所有组件都使用 [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)，因此样式与文档的其余部分完全隔离。因此，组件*内部*使用的类名不会与组件*外部*的类名冲突，我们可以自由命名。

在内部，每个组件使用 [BEM 方法](http://getbem.com/) 来命名类名。这样做没有技术要求——这完全是作者的偏好，以在整个组件中强制执行一致性和清晰度。因此，所有贡献都应遵循此模式。

### 布尔属性

布尔属性应*始终*默认为 `false`，否则用户无法仅通过特性来取消设置。为了保持 API 尽可能友好和一致，请使用以下约定来显示或隐藏可选内容。

- `with-*` - 默认不显示内容，但当此特性存在时显示
- `without-*` - 默认显示内容，但当此特性存在时不显示

### 条件插槽

当组件依赖插槽内容的存在来执行某些操作时，不要假设其初始状态是永久的。插槽内容可以随时添加或删除，组件必须意识到这一点。管理此问题的良好做法是：

- 将 `@slotchange={this.handleSlotChange}` 添加到您要监视的插槽上
- 添加 `handleSlotChange` 方法，并使用 `hasSlot` 工具来更新相应插槽的状态变量
- 永远不要在组件中有条件地渲染 `<slot>` 元素——始终使用 `hidden`，以便插槽保留在 DOM 中并能捕获 `slotchange` 事件

请参阅卡片、对话框或抽屉的源代码以获取示例。

### 动态插槽名称和展开/折叠图标

在 `<wa-details>` 和 `<wa-tree-item>` 中已经建立了一种用于展开/折叠图标的模式，该图标在打开/关闭时动画化。简而言之，创建两个名为 `expand-icon` 和 `collapse-icon` 的插槽，并在 DOM 中同时渲染它们，使用 CSS 根据当前打开状态仅显示/隐藏其中一个。避免有条件地渲染它们。同时避免使用动态插槽名称，如 `<slot name=${open ? 'open' : 'closed'}>`，因为 Firefox 不会对其进行动画处理。

两个插槽周围应立即有一个容器元素。该容器应默认使用 CSS 动画，并应具有一个部件，以便用户可以覆盖动画或禁用它。请参阅 `<wa-details>` 和/或 `<wa-tree-item>` 的源代码和文档以获取详细信息。

### 插槽中的回退内容

在 `<slot>` 元素内提供回退内容时，避免添加部件，例如：

```html
<slot name="icon">
  <wa-icon part="close-icon"></wa-icon>
</slot>
```

这会造成混淆，因为部件会被文档化，但当用户插入自己的内容时它不会工作。自定义此示例的推荐方式是让用户插入自己的内容，并根据需要使用 CSS 定位其样式。

### 派发事件

组件只能发出以 `wa-` 命名空间开头的事件。为了与使用 DOM 模板的框架兼容，事件必须使用小写 kebab 风格的名称。例如，使用 `wa-event` 而不是 `waEvent`。

这个约定避免了浏览器将特性转为小写的问题，这会导致某些框架无法监听它们。这个问题并非特指某个框架，但 [Vue 的文档](https://vuejs.org/v2/guide/components-custom-events.html#Event-Names) 提供了很好的解释。

### 数据特性调用器

某些组件可以使用[数据特性](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/data-*)来控制，这些特性触发特定行为。这些控件必须使用以下约定：

```html
<button data-component="action id">按钮文本</button>
```

`data-component` 部分对应于组件的名称（不含 `wa-` 前缀）。例如，`data-dialog` 必须控制一个 `<wa-dialog>` 组件。

`action` 参数是必需的，必须是一个简洁、描述性的术语，指示预期的行为，例如 `open` 和 `close`。

`id` 参数必须指向目标组件的 ID。当且仅当目标组件包裹了带有 `data-` 特性的元素时，可以省略 ID。

```html
<wa-dialog id="my-dialog"> 对话框内容 </wa-dialog>

<button data-dialog="open my-dialog">打开对话框</button>
```

### CSS 自定义属性

自定义属性允许用户通过跨组件的 Shadow DOM 边界暴露特定样式来自定义 @SITE_NAME@ 组件。使用自定义属性暴露组件的关键特性，用于底层主题定制。避免使用可能干扰正常渲染的样式的自定义属性。

要将自定义属性作为组件 API 的一部分暴露，请将它们限定在 `:host` 块中。

```css
:host {
  --color: var(--wa-color-brand-on-loud);
  --background-color: var(--wa-color-brand-fill-loud);
}
```

然后使用以下注释语法，以便它们出现在生成的文档中。不要使用 `--wa-` 前缀，因为该前缀保留给位于全局作用域中的设计令牌。

```js
/**
 * @cssproperty --color: 组件的文本颜色。
 * @cssproperty --background-color: 组件的背景颜色。
 */
@customElement('wa-example')
export default class WaExample {
  // ...
}
```

### 禁用项的焦点

当键盘可导航集合中的某个项被禁用时（例如标签页、树、菜单项等），禁用的项*不应*通过键盘、鼠标点击或触摸获得焦点。它应该被跳过，就像操作系统菜单和原生 HTML 表单控件中一样。没有例外。如果某个特定项需要焦点以提供良好的辅助设备用户体验，则该不应被禁用，并且在激活时，它应告知用户为什么无法完成相应操作。

### 何时使用属性 vs. CSS 自定义属性

在设计组件的 API 时，标准属性通常用于更改组件的*行为*，而 CSS 自定义属性（"CSS 变量"）用于更改组件的*外观*。请记住，属性无法响应媒体查询，但 CSS 变量可以。

这有一些例外（例如，当它显著改善开发者体验时），但一个好的经验法则是"这需要根据屏幕大小变化吗？"如果是，您可能应该使用 CSS 变量。

### 何时使用 CSS 自定义属性 vs. CSS 部件

有两种方式可以为组件实现自定义。一种是使用 CSS 自定义属性（"CSS 变量"），另一种是使用 CSS 部件（"parts"）。

CSS 变量限定在宿主元素的作用域内，并可以在整个组件中重用。CSS 变量的一个很好的例子是 `--border-width`，它可以在整个组件中重用以确保所有内部元素共享相同的边框宽度。

部件允许您定位组件 Shadow DOM 内的特定元素，但根据设计，您不能定位部件的子元素或兄弟元素。您*只能*自定义部件本身。当您需要允许组件内的单个元素接受样式时，使用部件。

当通过不遵循这些建议能显著改善开发者体验时，可以放宽此约定。

### CSS 部件命名

虽然 CSS 部件可以命名为[几乎任何内容](https://www.abeautifulsite.net/posts/valid-names-for-css-parts/)，但在 @SITE_NAME@ 中，它们必须使用 kebab-case 约定和小写字母。此外，使用[受 BEM 启发的命名约定](https://www.abeautifulsite.net/posts/css-parts-inspired-by-bem/)来区分部件、子部件和状态。

组合元素时，使用 `part` 导出宿主元素，使用 `exportparts` 导出其部件。

```js
render() {
  return html`
    <div part="base">
      <wa-icon part="icon" exportparts="base:icon__base" ...></wa-icon>
    </div>
  `;
}
```

这为部件产生了一致且易于理解的结构。在此示例中，`icon` 部件将定位宿主元素，而 `icon__base` 部件将定位图标的 `base` 部件。

### 依赖项

简而言之——当且仅当一个组件在另一个组件的 Shadow Root 内部渲染时，它才是一个依赖项。

许多 @SITE_NAME@ 组件在内部使用其他 @SITE_NAME@ 组件。例如，`<wa-button>` 分别使用 `<wa-icon>` 和 `<wa-spinner>` 作为其插入符图标和加载状态。由于这些组件出现在按钮的 Shadow Root 中，它们被视为 Button 的依赖项。由于依赖项会自动加载，用户只需导入按钮，一切都会按预期工作。

依赖项的经验法则是：如果一个组件在宿主元素的 Shadow Root *内部*渲染，或者如果该组件需要由用户插入（例如 `<wa-radio-group>` + `<wa-radio>`），那么它就是依赖项。

### 表单控件

表单控件应通过以下约定支持提交和验证：

- 表单控件应继承自 `WebAwesomeFormAssociatedElement`
- 所有表单控件必须以与 `HTMLInputElement` 相同的方式使用 `name`、`value` 和 `disabled` 属性
- 所有具有 `disabled` 属性的表单控件**不**应反射 `disabled` 特性。
- 所有表单控件必须有一个 `invalid` 属性来反映其有效性
- 所有表单控件应尽可能镜像其原生验证特性，如 `required`、`pattern`、`minlength`、`maxlength` 等，并使用 `MirrorValidator`。
- 所有表单控件必须经过测试以与标准 `<form>` 元素配合使用
- **没有**可编辑值的表单控件（如按钮）只需要 `@property({ reflect: true }) value`
- **有**可编辑值的表单控件（如输入框或文本域）应有：`@property({ attribute: false }) value` 和 `@property({ attribute: "value", reflect: true }) defaultValue`。我们这样做是为了与原生表单控件的工作方式保持一致。
- 具有可编辑属性（如 `checked` 或 `selected`）的表单控件也应分别具有 `defaultSelected` 和 `defaultChecked` 属性，用于表单"重置"时使用。

### 可关闭覆盖层

覆盖层组件（对话框、抽屉、下拉框、工具提示、弹出框、颜色选择器等）各自附加自己的文档 `keydown` 监听器。没有协调的话，所有打开的覆盖层会同时响应 Escape 键——导致嵌套的覆盖层一次性全部关闭。

为了解决这个问题，在 `src/internal/dismissible-stack.ts` 中维护了一个共享的可关闭栈。可以使用 Escape 键关闭的组件必须使用它来协调哪个覆盖层响应。栈按顺序跟踪打开的可关闭项，因此只有最顶层的项处理按键事件。

- 当覆盖层变为可见时调用 `registerDismissible(this)`
- 当覆盖层关闭或从 DOM 中移除时调用 `unregisterDismissible(this)`
- 在处理 Escape 之前，调用 `isTopDismissible(this)` 确认您的组件是最顶层的可关闭项——如果返回 `false`，则忽略按键事件

此模式模仿了 `scroll.ts` 锁定模式。请参考现有的覆盖层组件，如 `<wa-dialog>` 或 `<wa-drawer>` 作为示例。

### 服务端渲染 (SSR)

@SITE_NAME@ 通过 [Lit SSR](https://lit.dev/docs/ssr/overview/) 支持服务端渲染。在 SSR 期间，Lit 调用 `constructor()` 和 `connectedCallback()`，但**不**调用 `firstUpdated()`、`updated()` 或事件处理程序。这意味着仅在浏览器中可用的 API，如 `document.*`、`window.*`、`ResizeObserver`、`MutationObserver` 等，需要在构造函数、类字段初始化器、`connectedCallback()` 和模块级代码中加以保护。在 `firstUpdated()`、`updated()`、事件处理程序或 `@watch` 处理程序中**不需要**保护。

要保护仅浏览器可用的代码，从 `lit` 导入 `isServer` 并提前短路或包装相关代码。不要将浏览器 API 填充到 `globalThis` 上作为变通方法——直接使用 `isServer` 保护。

```ts
import { isServer } from 'lit';

connectedCallback() {
  super.connectedCallback();

  // SSR 保护：服务端渲染期间无法使用 ResizeObserver
  if (isServer) {
    return;
  }

  this.resizeObserver = new ResizeObserver(() => this.handleResize());
  this.resizeObserver.observe(this);
}
```

#### 插槽检测和 `with-*` 特性

某些组件使用 `HasSlotController` 有条件地渲染模板的某些部分（例如，仅当存在 `footer` 插槽时才显示的页脚）。在 SSR 期间，插槽检测不起作用，因为 DOM 不可用，因此这些部分将从初始服务器渲染的标记中丢失。

为了解决这个问题，在 `render()` 方法中依赖插槽检测的组件必须提供 `with-*` 特性作为 SSR 回退。使用 `hasUpdated` 三元模式：

```ts
/**
 * 仅在 SSR 时需要。如果您要插入 `label` 元素，设置为 `true`，以便服务器渲染的标记
 * 在组件在客户端水合之前包含标签。
 */
@property({ attribute: 'with-label', type: Boolean }) withLabel = false;

render() {
  const hasLabelSlot = this.hasUpdated
    ? this.hasSlotController.test('label')
    : this.withLabel;
}
```

在组件水合之前（`hasUpdated` 为 `false`），使用 `with-*` 属性。水合后，`HasSlotController` 接管实际的插槽检测。所有 `with-*` SSR 属性必须包含一个 JSDoc 注释，明确指出该属性仅在 SSR 时需要。

### 系统图标

避免在模板中内联 SVG 图标。如果组件需要图标，请确保 `<wa-icon>` 是组件的依赖项，并使用[系统库](/docs/components/icon#customizing-the-system-library)：

```html
<wa-icon library="system" name="..." variant="..."></wa-icon>
```

这将立即渲染图标，而默认库将从远程源获取图标。如果系统库中没有某个图标，您需要将其添加到 `library.system.ts` 中。使用系统库可确保所有图标立即加载，并且用户可以通过为系统库提供自定义解析器来自定义图标。

### 编写测试

对于给定组件要测试的内容：

- 从检查组件默认版本仍能渲染的简单测试开始。
- 添加至少一个无障碍性测试（无障碍性检查仅覆盖当前可见和渲染的 DOM 部分。根据组件的不同，可能需要多个无障碍性测试来覆盖所有场景。）：

```ts
const myComponent = await fixture<WaComponent>(html`<wa-component>...</wa-component>`);

await expect(myComponent).to.be.accessible();
```

- 尝试覆盖组件描述中宣传的所有功能

编写测试的指南：

- 每个测试都应声明自己的手工制作的 HTML 测试夹具。不要试图编写一个大型组件来匹配所有测试。这有助于保持每个测试的独立可理解性。
- 测试不应产生日志行。注意，有时这是无法避免的，因为测试运行器可能会记录错误（例如 404）。
- 保持主测试可读性：将更复杂的选择器/命令/断言集提取到单独的函数中。
- 力求测试组件的面向用户的功能，而不是组件的内部工作原理。
- 将同一功能的多个测试分组到 describe 块中。

### 运行测试

目前，测试以"水合"（SSR → 客户端水合）和"仅客户端"两种方式运行。如果您只调试特定类型，可以设置环境变量。例如，要仅运行客户端测试，可以执行：

```bash
CSR_ONLY="true" npm run test
```

或仅运行水合渲染：

```bash
SSR_ONLY="true" npm run test
```
