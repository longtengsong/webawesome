---
title: LLMs
description: "@SITE_NAME@ 提供 llms.txt 文件来帮助 AI 助手理解并使用我们的组件。"
layout: page-outline
---

[llms.txt 规范](https://llmstxt.org/) 是一个提议的标准，用于以 AI 易于消费的格式提供信息。它类似于 robots.txt，但与其告诉搜索引擎如何抓取您的网站，不如说它帮助 AI 助手理解您的项目。

@SITE_NAME@ 发布了一个 `llms.txt` 文件，为 AI 工具提供关于我们组件的结构化信息，包括 API、属性、事件、方法、插槽和 CSS 自定义属性。

:::warning
此功能是实验性的！llms.txt 格式及其内容可能会根据反馈和 AI 能力的发展而发生变化。
:::

## 为什么要使用它？

在使用像 Claude、ChatGPT、Copilot 或 Cursor 这样的 AI 编程助手时，您可以引用 llms.txt 文件为 AI 提供关于 @SITE_NAME@ 组件的上下文。这可以带来更准确的代码建议，并在 AI 生成 @SITE_NAME@ 代码时减少幻觉。

## 访问文件

llms.txt 文件在每个 @SITE_NAME@ 构建中都可以在以下位置找到：

```
/dist/llms.txt
/dist-cdn/llms.txt
```

如果您通过 npm 安装了 @SITE_NAME@，也可以在 `node_modules` 目录中找到它：

```
node_modules/@awesome.me/webawesome/dist/llms.txt
```

## 如何使用

引用该文件的方式取决于您使用的 AI 工具。

### Claude 项目

如果您正在使用 [Claude 项目](https://www.anthropic.com/news/projects)，您可以将 llms.txt URL 添加到您的项目知识中。Claude 将在帮助您编写 @SITE_NAME@ 代码时使用此上下文。

### Cursor

在 [Cursor](https://cursor.sh/) 中，您可以通过 **Cursor 设置 > 功能 > 文档** 将文件添加到项目的文档源。您也可以在添加后在聊天中直接使用 `@Docs` 引用该文件，或将内容粘贴到聊天上下文中。

### VS Code + Copilot

VS Code 中的 GitHub Copilot 没有内置的方式引用外部文档文件，但您可以：

1. 将 llms.txt 文件复制到项目的根目录
2. 在 VS Code 标签页中打开它（Copilot 会将打开的标签页视为上下文）
3. 在 Copilot Chat 中使用 `#file` 显式引用它（例如 `#file:llms.txt 如何创建一个对话框？`）

### VS Code + Claude Code

如果您正在使用 [Claude Code 扩展](https://marketplace.visualstudio.com/items?itemName=anthropics.claude-code)，您可以直接通过路径引用该文件：

```
@node_modules/@awesome.me/webawesome/dist/llms.txt
```

或者直接让 Claude 读取它——Claude Code 可以直接访问您项目中的文件。

### 其他 AI 工具

大多数 AI 编程助手允许您通过 URL、文件上传或直接粘贴来提供上下文。请查看您工具的文档，了解包含外部引用的最佳方式。

## 包含的内容

llms.txt 文件包含：

- @SITE_NAME@ 及其功能的概览
- 文档章节的链接
- 所有组件的完整列表及其描述
- 每个组件的详细 API 参考，包括：
  - 插槽
  - 属性及其类型
  - 方法及其签名
  - 事件
  - CSS 自定义属性
  - CSS 部件
  - CSS 状态

## llms.txt 与 Agent Skills 的对比

@SITE_NAME@ 同时提供 [Agent Skills](https://agentskills.io/) 和 [llms.txt 文件](/docs/ai/llms)。以下是如何选择使用：

| 特性 | llms.txt | Agent Skills |
|---------|----------|-------------|
| 格式 | 单个文本文件 | 包含多个 markdown 文件的目录 |
| 最适合 | 快速上下文、简单查询 | 深度集成、复杂任务 |
| 上下文使用 | 一次性加载所有内容 | 渐进式披露（按需加载） |
| 支持工具 | 大多数 AI 工具 | 支持 agentskills.io 规范的工具 |

如果您的 AI 工具支持 Agent Skills，我们建议使用 skill 以获得更好的上下文效率。否则，llms.txt 文件是一个很好的选择，几乎适用于任何 AI 工具。

## 反馈

由于这是实验性的，我们很想听听您的使用体验！如果您发现生成的内容有问题或有改进建议，请 [在 GitHub 上提出 issue]({{ site.github.issues }})。
