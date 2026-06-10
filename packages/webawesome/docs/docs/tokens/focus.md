---
title: 焦点
description: 使用 @SITE_NAME@ 的焦点令牌配置可识别的焦点状态。
synonyms:
  - 焦点环
  - 焦点轮廓
  - 焦点可见
use-cases:
  - 键盘焦点
  - 无障碍焦点
  - Tab 焦点
hasOutline: true
---

焦点令牌创建一致、可识别的轮廓，让键盘用户能够追踪他们在页面上的位置。与 [`--wa-color-focus`](?active_tab=color) 一起，这些令牌组装了应用于所有交互式 @SITE_NAME@ 组件的焦点环。

<wa-scroller>
  <table class="token-table wa-hover-rows">
    <thead>
      <tr><th>自定义属性</th><th>描述</th></tr>
    </thead>
    <tbody>
      <tr id="token-wa-focus-ring-style">
        <td class="token-name"><code>--wa-focus-ring-style</code></td>
        <td>焦点轮廓的线条样式</td>
      </tr>
      <tr id="token-wa-focus-ring-width">
        <td class="token-name"><code>--wa-focus-ring-width</code></td>
        <td>焦点轮廓的粗细</td>
      </tr>
      <tr id="token-wa-focus-ring">
        <td class="token-name"><code>--wa-focus-ring</code></td>
        <td>将样式、宽度和颜色组合为完整焦点轮廓值的简写</td>
      </tr>
      <tr id="token-wa-focus-ring-offset">
        <td class="token-name"><code>--wa-focus-ring-offset</code></td>
        <td>元素边缘与焦点轮廓之间的间隙</td>
      </tr>
    </tbody>
  </table>
</wa-scroller>

通过使用键盘导航此表单来查看您主题的焦点环：

```html {.example}
<form class="wa-stack">
  <wa-input label="文本输入">
    <span slot="hint">按 <kbd>Tab</kbd> 键将焦点移动到其他交互式元素。</span>
  </wa-input>
  <wa-checkbox>复选框</wa-checkbox>
  <wa-button variant="brand">按钮</wa-button>
</form>
```
