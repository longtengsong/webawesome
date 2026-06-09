---
title: 可视化测试
description: 用于可视化测试组件样式与原生样式的页面。
layout: page
wide: true
---

<style>
  #content {
    p {
      max-width: 90ch;
    }

    tbody {
      & .wa-grid {
        --min-column-size: 5ch;
      }

      & tr th:first-of-type {
        width: 20ch;
      }

      & th {
        vertical-align: middle;
      }

      & tr:hover {
        background-color: color-mix(in oklch, var(--wa-color-fill-quiet), transparent 60%)
      }
    }

    wa-divider {
      --width: var(--wa-border-width-m);
      --spacing: var(--wa-space-3xl);
    }
  }
</style>

构建和使用 Web Awesome 组件的方式多种多样，可视化测试有助于确保一致性，并防止错误的样式泄露到生产环境中。

这些测试在创建或自定义您自己的主题时会派上用场。逐个查看每个测试用例，确保您主题中的自定义样式涵盖了 Web Awesome 提供的所有特性、工具类和内置样式。

<wa-tab-group>
  <wa-tab panel="native">原生</wa-tab>
  <wa-tab panel="color">颜色</wa-tab>
  <wa-tab panel="size">尺寸</wa-tab>
  <wa-tab panel="alignment">对齐</wa-tab>
  <wa-tab panel="harmony">和谐</wa-tab>

<wa-tab-panel name="alignment">

## 对齐

对齐测试展示了组件的顶部边界、垂直居中和底部边界。这些有助于评估组件在水平排列时的对齐效果。

{% include 'visual-tests/alignment.njk' %}

</wa-tab-panel>

<wa-tab-panel name="color">

## 颜色

颜色测试确保 `variant` 特性和 `.wa-[variant]` 类对于支持它们的组件具有相同的结果。开发者应该能够互换使用这两者，为组件赋予预期的语义颜色。

{% include 'visual-tests/color.njk' %}

</wa-tab-panel>

<wa-tab-panel name="harmony">

## 和谐

和谐测试展示了相关组件放在一起时的外观。这些有助于验证设计选择，或揭示需要设计干预的地方，以获得一致、和谐的外观和感觉。

{% include 'visual-tests/harmony.njk' %}

</wa-tab-panel>

<wa-tab-panel name="native">

## 原生

原生样式测试确保支持的原生元素和工具类与对应的 Web Awesome 组件外观一致。原生元素也可以支持与组件相同的外观、颜色和尺寸工具类。

{% include 'visual-tests/native.njk' %}

</wa-tab-panel>

<wa-tab-panel name="size">

## 尺寸

尺寸测试确保 `size` 特性和 `.wa-size-[xs|s|m|l|xl]` 类对于支持它们的组件具有相同的结果。开发者应该能够互换使用这两者来为组件设置预期的尺寸。

{% include 'visual-tests/size.njk' %}

</wa-tab-panel>

</wa-tab-group>
