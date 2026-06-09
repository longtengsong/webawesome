---
title: Angular
description: 在 Angular 应用中使用 Web Awesome 的提示。
layout: page-outline
---

<wa-breadcrumb class="page-breadcrumbs">
  <wa-icon slot="separator" name="angle-right" variant="regular"></wa-icon>
  <wa-breadcrumb-item href="/docs/frameworks">框架集成</wa-breadcrumb-item>
  <wa-breadcrumb-item>{{ title }}</wa-breadcrumb-item>
</wa-breadcrumb>

Angular [完美支持](https://custom-elements-everywhere.com/#angular)自定义元素，因此您可以轻松地在 Angular 应用中使用 Web Awesome。

## 安装

### 下载 npm 包

要添加 Web Awesome 到您的 Angular 应用，请从 npm 安装该包。

```bash
npm install @awesome.me/webawesome
```

### 更新 Angular 配置

接下来，[引入一个主题](/docs/themes)。在这个示例中，我们将导入浅色主题。

同样重要的是通过 `<script>` 标签将组件加载到 index.html 文件中。不过，Angular 的做法是通过在您的 angular.json 文件中添加脚本配置，如下所示：

```json
"architect": {
  "build": {
    ...
    "options": {
      ...
      "styles": [
        "src/styles.scss",
        "@awesome.me/webawesome/dist/styles/webawesome.css"
       ]
      ...
    }
  }
}
```

## 配置

然后确保应用自定义元素模式，如下所示。

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

## 在 Angular 组件代码中引用 Web Awesome 组件

```js
// 需要同时导入两者，否则 Angular 会通过摇树优化移除组件。
import type { WaDrawer } from '@awesome.me/webawesome/dist/components/drawer/drawer.js';
import "@awesome.me/webawesome/dist/components/drawer/drawer.js";

@Component({
  selector: 'app-drawer-example',
  template: '<div id="page"><button (click)="showDrawer()">显示抽屉</button><wa-drawer #drawer label="抽屉" class="drawer-focus" style="--size: 50vw"><p>抽屉内容</p></wa-drawer></div>'
})
export class DrawerExampleComponent implements OnInit {

  // 使用 @ViewChild 获取组件模板中 #drawer 元素的引用
  @ViewChild('drawer')
  drawer?: ElementRef<WaDrawer>;

  ...

  constructor(...) {
  }

  ngOnInit() {
  }

  ...

  showDrawer() {
    // 使用 nativeElement 访问 Web Awesome 组件
    this.drawer?.nativeElement.show();
  }
}
```

现在您可以开始在应用中使用 Web Awesome 组件了！

:::info
您正在使用 Web Awesome 和 Angular？[帮助我们改进此页面！](https://github.com/shoelace-style/webawesome/blob/next/packages/webawesome/docs/docs/frameworks/angular.md)
:::
