---
title: Agent Skills
description: "@SITE_NAME@ 发布 Agent Skills 来帮助 AI 编程助手理解并使用我们的组件。"
layout: page-outline
---

[Agent Skills 规范](https://agentskills.io/) 是一个标准，用于为 AI 编程助手提供结构化文档。它通过一个组织良好的 markdown 文件目录，帮助 AI 工具理解您项目的 API、约定和最佳实践。

@SITE_NAME@ 发布了一个 Agent Skills，为 AI 工具提供关于我们组件的全面信息，包括它们的 API、使用模式、主题选项等。

:::warning
此功能是实验性的！Agent Skills 格式及其内容可能会根据反馈和 AI 能力的发展而发生变化。
:::

## 为什么要使用它？

在使用像 Claude Code、Cursor 或其他支持 Agent Skills 的 AI 编程助手时，您可以引用 @SITE_NAME@ skill，为 AI 提供关于我们组件的深入上下文。这可以带来更准确的代码建议，更好地理解组件 API，并在生成 @SITE_NAME@ 代码时减少幻觉。

与单个文件不同，Agent Skills 使用渐进式披露——AI 只加载当前任务所需的文档，使其在复杂项目中更高效。

## 访问 Skill

Agent Skills 在每个 @SITE_NAME@ 构建中都可以在以下位置找到：

```
/dist/skills/webawesome/
/dist-cdn/skills/webawesome/
```

如果您通过 npm 安装了 @SITE_NAME@，也可以在 `node_modules` 目录中找到它：

```
node_modules/@awesome.me/webawesome/dist/skills/webawesome/
```

skill 目录包含：

```
webawesome/
├── SKILL.md              # 主要 skill 文件，包含概览和快速参考
└── references/
    ├── components/       # 每个组件的独立文档
    ├── frameworks/       # React、Vue、Angular、Svelte 指南
    ├── utilities/        # 布局和样式工具
    ├── installation.md   # 安装指南
    ├── usage.md          # 使用模式
    ├── form-controls.md  # 表单集成
    ├── themes.md         # 主题和调色板
    └── ...
```

## 如何使用

引用 skill 的方式取决于您使用的 AI 工具。

### Claude Code

如果您正在使用 [Claude Code](https://claude.ai/code)，您可以使用 [skills CLI](https://skills.sh/) 在本地安装 @SITE_NAME@ skill：

```bash
# 安装 skill
npx skills add ./node_modules/@awesome.me/webawesome/dist/skills/webawesome

# 卸载 skill
npx skills remove webawesome
```

安装后，Claude Code 将自动使用该 skill。该 skill 以符号链接方式安装，因此当您通过 npm 更新 @SITE_NAME@ 时，它会自动保持最新。

您也可以手动引用 skill 目录：

```
@node_modules/@awesome.me/webawesome/dist/skills/webawesome/
```

或者让 Claude 读取特定的参考文件：

```
@node_modules/@awesome.me/webawesome/dist/skills/webawesome/references/components/button.md
```

Claude Code 还可以自动发现并使用您项目中的 skill。

### Cursor

在 [Cursor](https://cursor.sh/) 中，您可以通过 **Cursor 设置 > 功能 > 文档** 将 skill 目录添加到项目的文档源。将其指向 `node_modules` 文件夹中的 `dist/skills/webawesome/` 目录。

### 其他 AI 工具

大多数支持 Agent Skills 规范的 AI 编程助手都可以使用此 skill。请查看您工具的文档，了解如何添加自定义 skill 或文档源。

## 包含的内容

Agent Skills 包含：

- **SKILL.md** — @SITE_NAME@ 概览、快速入门指南、组件列表、主题信息以及详细参考的链接
- **组件文档** — 每个组件的独立文件，包含完整的 API 详情、示例、插槽、属性、方法、事件和 CSS 自定义选项
- **安装指南** — npm、CDN 和自托管选项
- **使用模式** — 使用属性、特性、事件、方法和插槽
- **表单控件** — 表单集成和验证
- **主题** — 免费和专业主题、调色板和自定义
- **工具** — 布局工具（堆叠、集群、网格等）和原生样式
- **框架指南** — 与 React、Vue、Angular 和 Svelte 的集成

## Agent Skills 与 llms.txt 的对比

@SITE_NAME@ 同时提供 [llms.txt 文件](/docs/ai/llms) 和 [Agent Skills](https://agentskills.io/)。以下是如何选择使用：

| 特性 | Agent Skills | llms.txt |
|---------|-------------|----------|
| 格式 | 包含多个 markdown 文件的目录 | 单个文本文件 |
| 最适合 | 深度集成、复杂任务 | 快速上下文、简单查询 |
| 上下文使用 | 渐进式披露（按需加载） | 一次性加载所有内容 |
| 支持工具 | 支持 agentskills.io 规范的工具 | 大多数 AI 工具 |

如果您的 AI 工具支持 Agent Skills，我们建议使用 skill 以获得更好的上下文效率。否则，llms.txt 文件是一个很好的备选方案。

## 反馈

由于这是实验性的，我们很想听听您的使用体验！如果您发现生成的内容有问题或有改进建议，请 [在 GitHub 上提出 issue]({{ site.github.issues }})。
