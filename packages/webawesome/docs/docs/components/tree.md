---
title: 树
layout: component
category: Navigation
synonyms:
  - treeview
  - tree view
  - file tree
  - hierarchy
  - 树视图
  - 文件树
  - 层次结构
use-cases:
  - file browser
  - directory tree
  - nested list
  - org chart
  - 文件浏览器
  - 目录树
  - 嵌套列表
  - 组织架构图
---

```html {.example}
<wa-tree style="--indent-guide-width: 1px;">
  <wa-tree-item expanded>
    落叶树
    <wa-tree-item>桦树</wa-tree-item>
    <wa-tree-item expanded>
      枫树
      <wa-tree-item>糖枫</wa-tree-item>
      <wa-tree-item>红枫</wa-tree-item>
      <wa-tree-item>银枫</wa-tree-item>
    </wa-tree-item>
    <wa-tree-item>橡树</wa-tree-item>
    <wa-tree-item>胡桃树</wa-tree-item>
  </wa-tree-item>

  <wa-tree-item>
    常绿树
    <wa-tree-item>雪松</wa-tree-item>
    <wa-tree-item>
      松树
      <wa-tree-item>东部白松</wa-tree-item>
      <wa-tree-item>西黄松</wa-tree-item>
      <wa-tree-item>苏格兰松</wa-tree-item>
    </wa-tree-item>
    <wa-tree-item>云杉</wa-tree-item>
    <wa-tree-item>冷杉</wa-tree-item>
  </wa-tree-item>

  <wa-tree-item>
    热带树
    <wa-tree-item>榕树</wa-tree-item>
    <wa-tree-item>椰子树</wa-tree-item>
    <wa-tree-item>桃花心木</wa-tree-item>
    <wa-tree-item>柚木</wa-tree-item>
  </wa-tree-item>
</wa-tree>
```

## 示例

### 选择模式

`selection` 属性允许您更改树的选择行为。

- 使用 `single` 允许选择单个项（默认）。
- 使用 `multiple` 允许选择多个项。
- 使用 `leaf` 仅允许选择叶子节点。

```html {.example}
<wa-select id="selection-mode" value="single" label="选择">
  <wa-option value="single">单个</wa-option>
  <wa-option value="multiple">多个</wa-option>
  <wa-option value="leaf">叶子</wa-option>
</wa-select>

<br />

<wa-tree class="tree-selectable">
  <wa-tree-item expanded>
    电子产品
    <wa-tree-item expanded>
      计算机
      <wa-tree-item>笔记本电脑</wa-tree-item>
      <wa-tree-item>台式机</wa-tree-item>
      <wa-tree-item>平板电脑</wa-tree-item>
    </wa-tree-item>
    <wa-tree-item>
      手机
      <wa-tree-item>智能手机</wa-tree-item>
      <wa-tree-item>配件</wa-tree-item>
    </wa-tree-item>
  </wa-tree-item>
  <wa-tree-item>
    服装
    <wa-tree-item>衬衫</wa-tree-item>
    <wa-tree-item>裤子</wa-tree-item>
    <wa-tree-item>鞋子</wa-tree-item>
  </wa-tree-item>
  <wa-tree-item>书籍</wa-tree-item>
</wa-tree>

<script>
  const selectionMode = document.querySelector('#selection-mode');
  const tree = document.querySelector('.tree-selectable');

  selectionMode.addEventListener('change', () => {
    tree.querySelectorAll('wa-tree-item').forEach(item => (item.selected = false));
    tree.selection = selectionMode.value;
  });
</script>
```

### 尺寸

树默认继承其字体大小。可以通过在 `<wa-tree>` 元素上设置 `font-size` 来更改树及其所有项的大小。所有内部尺寸，包括复选框、展开按钮和标签，都会按比例缩放。

```html {.example}
<wa-tree style="font-size: .75rem;" selection="multiple">
  <wa-tree-item expanded>
    小
    <wa-tree-item>新闻通讯</wa-tree-item>
    <wa-tree-item>
      促销
      <wa-tree-item>每周优惠</wa-tree-item>
      <wa-tree-item>季节特卖</wa-tree-item>
    </wa-tree-item>
  </wa-tree-item>
</wa-tree>

<br />

<wa-tree selection="multiple">
  <wa-tree-item expanded>
    默认
    <wa-tree-item>新闻通讯</wa-tree-item>
    <wa-tree-item>
      促销
      <wa-tree-item>每周优惠</wa-tree-item>
      <wa-tree-item>季节特卖</wa-tree-item>
    </wa-tree-item>
  </wa-tree-item>
</wa-tree>

<br />

<wa-tree style="font-size: 1.5rem;" selection="multiple">
  <wa-tree-item expanded>
    大
    <wa-tree-item>新闻通讯</wa-tree-item>
    <wa-tree-item>
      促销
      <wa-tree-item>每周优惠</wa-tree-item>
      <wa-tree-item>季节特卖</wa-tree-item>
    </wa-tree-item>
  </wa-tree-item>
</wa-tree>
```

### 显示缩进指南

可以通过设置 `--indent-guide-width` 来绘制缩进指南。还可以分别使用 `--indent-guide-color`、`--indent-guide-style` 和 `--indent-guide-offset` 来更改颜色、样式和偏移。

```html {.example}
<wa-tree class="tree-with-lines">
  <wa-tree-item expanded>
    设计
    <wa-tree-item expanded>
      品牌
      <wa-tree-item>颜色</wa-tree-item>
      <wa-tree-item>排版</wa-tree-item>
      <wa-tree-item>标识</wa-tree-item>
    </wa-tree-item>
    <wa-tree-item>
      组件
      <wa-tree-item>按钮</wa-tree-item>
      <wa-tree-item>表单</wa-tree-item>
      <wa-tree-item>导航</wa-tree-item>
    </wa-tree-item>
  </wa-tree-item>

  <wa-tree-item expanded>
    开发
    <wa-tree-item>前端</wa-tree-item>
    <wa-tree-item>后端</wa-tree-item>
    <wa-tree-item>基础设施</wa-tree-item>
  </wa-tree-item>

  <wa-tree-item>
    营销
    <wa-tree-item>社交媒体</wa-tree-item>
    <wa-tree-item>邮件活动</wa-tree-item>
    <wa-tree-item>分析</wa-tree-item>
  </wa-tree-item>
</wa-tree>

<style>
  .tree-with-lines {
    --indent-guide-width: 1px;
  }
</style>
```

### 懒加载

在树节点上使用 `lazy` 属性来指示内容尚未存在，稍后将加载。当用户尝试展开节点时，`loading` 状态被设置为 `true`，并且将发出 `wa-lazy-load` 事件以允许您异步加载数据。节点将保持加载状态，直到其内容被更改。

如果您想在第一次加载后禁用此行为，只需删除 `lazy` 属性，然后在下一次展开时，将显示现有内容。

```html {.example}
<wa-tree>
  <wa-tree-item lazy>远程仓库</wa-tree-item>
</wa-tree>

<script type="module">
  const lazyItem = document.querySelector('wa-tree-item[lazy]');

  lazyItem.addEventListener('wa-lazy-load', () => {
    // 模拟从服务器获取数据
    setTimeout(() => {
      const repos = ['design-system', 'marketing-site', 'mobile-app', 'api-gateway'];

      for (const repo of repos) {
        const treeItem = document.createElement('wa-tree-item');
        treeItem.innerText = repo;
        lazyItem.append(treeItem);
      }

      // 加载内容后禁用懒加载模式
      lazyItem.lazy = false;
    }, 1000);
  });
</script>
```

### 自定义展开和折叠图标

分别使用 `expand-icon` 和 `collapse-icon` 插槽来更改展开和折叠图标。要禁用动画，请覆盖 `expand-button` 部件上的 `rotate` 属性，如下所示。

```html {.example}
<wa-tree class="custom-icons">
  <wa-icon name="square-plus" variant="solid" slot="expand-icon"></wa-icon>
  <wa-icon name="square-minus" variant="solid" slot="collapse-icon"></wa-icon>

  <wa-tree-item expanded>
    食谱
    <wa-tree-item expanded>
      早餐
      <wa-tree-item>煎饼</wa-tree-item>
      <wa-tree-item>煎蛋卷</wa-tree-item>
      <wa-tree-item>格兰诺拉麦片</wa-tree-item>
    </wa-tree-item>
    <wa-tree-item>
      午餐
      <wa-tree-item>凯撒沙拉</wa-tree-item>
      <wa-tree-item>烤鸡卷</wa-tree-item>
    </wa-tree-item>
    <wa-tree-item>
      晚餐
      <wa-tree-item>意大利面碳烤</wa-tree-item>
      <wa-tree-item>炒菜</wa-tree-item>
      <wa-tree-item>烤三文鱼</wa-tree-item>
    </wa-tree-item>
  </wa-tree-item>

  <wa-tree-item>
    甜点
    <wa-tree-item>巧克力蛋糕</wa-tree-item>
    <wa-tree-item>提拉米苏</wa-tree-item>
    <wa-tree-item>水果塔</wa-tree-item>
  </wa-tree-item>
</wa-tree>

<style>
  .custom-icons wa-tree-item::part(expand-button) {
    /* 禁用展开/折叠动画 */
    rotate: none;
  }
</style>
```

### 带图标

可以在标签前使用装饰性图标来为每个节点提供提示。

```html {.example}
<wa-tree class="tree-with-icons">
  <wa-tree-item expanded>
    <wa-icon name="folder" variant="regular"></wa-icon>
    文档

    <wa-tree-item expanded>
      <wa-icon name="folder" variant="regular"></wa-icon>
      照片
      <wa-tree-item>
        <wa-icon name="image" variant="regular"></wa-icon>
        vacation.jpg
      </wa-tree-item>
      <wa-tree-item>
        <wa-icon name="image" variant="regular"></wa-icon>
        family-portrait.png
      </wa-tree-item>
      <wa-tree-item>
        <wa-icon name="image" variant="regular"></wa-icon>
        sunset.jpg
      </wa-tree-item>
    </wa-tree-item>

    <wa-tree-item expanded>
      <wa-icon name="folder" variant="regular"></wa-icon>
      工作
      <wa-tree-item>
        <wa-icon name="file-pdf" variant="regular"></wa-icon>
        quarterly-report.pdf
      </wa-tree-item>
      <wa-tree-item>
        <wa-icon name="file-lines" variant="regular"></wa-icon>
        budget.xls
      </wa-tree-item>
      <wa-tree-item>
        <wa-icon name="file" variant="regular"></wa-icon>
        meeting-notes.txt
      </wa-tree-item>
    </wa-tree-item>

    <wa-tree-item>
      <wa-icon name="folder" variant="regular"></wa-icon>
      个人
      <wa-tree-item>
        <wa-icon name="file" variant="regular"></wa-icon>
        journal.txt
      </wa-tree-item>
      <wa-tree-item>
        <wa-icon name="file-pdf" variant="regular"></wa-icon>
        resume.pdf
      </wa-tree-item>
    </wa-tree-item>
  </wa-tree-item>

  <wa-tree-item>
    <wa-icon name="folder" variant="regular"></wa-icon>
    下载
    <wa-tree-item>
      <wa-icon name="file-zipper" variant="regular"></wa-icon>
      archive.zip
    </wa-tree-item>
    <wa-tree-item>
      <wa-icon name="file" variant="regular"></wa-icon>
      readme.txt
    </wa-tree-item>
  </wa-tree-item>
</wa-tree>
```
