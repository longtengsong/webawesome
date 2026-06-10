---
title: 图标
layout: component
category: Media
synonyms:
  - symbol
  - glyph
  - pictogram
  - fa icon
  - 符号
  - 字形
  - 象形图
  - Font Awesome 图标
use-cases:
  - icon button
  - status icon
  - navigation icon
  - 图标按钮
  - 状态图标
  - 导航图标
---

@SITE_NAME@ 附带了超过 2,000 个由 [Font Awesome](https://fontawesome.com/) 提供的免费图标。这些图标属于 `default` 图标库。Font Awesome Pro 用户可以解锁额外的图标系列。或者，如果你愿意，可以注册自己的[自定义图标库](#icon-libraries)。

```html {.example}
<wa-icon name="star" label="星星" style="font-size: 2em;"></wa-icon>
```

:::info
不确定使用哪个图标？[在 {{ site.siblings.fontAwesome.name }} 找到完美的图标！](https://fontawesome.com/search?o=r&m=free&f=brands%2Cclassic)
:::

## 示例

### 尺寸

图标大小相对于当前字体大小。要更改它们的大小，请在图标本身或父元素上设置 `font-size` 属性，如下所示。

```html {.example}
<div class="wa-cluster" style="font-size: 44px;">
  <wa-icon name="bell"></wa-icon>
  <wa-icon name="heart"></wa-icon>
  <wa-icon name="image"></wa-icon>
  <wa-icon name="microphone"></wa-icon>
  <wa-icon name="search"></wa-icon>
  <wa-icon name="star"></wa-icon>
</div>
```

### 颜色

图标从当前文本颜色继承其颜色。因此，你可以在 `<wa-icon>` 元素或祖先元素上设置 `color` 属性来更改颜色。

```html {.example}
<div class="wa-cluster" style="font-size: 1.5em;">
  <wa-icon name="heart" style="color: salmon;"></wa-icon>
  <wa-icon name="fire" style="color: coral;"></wa-icon>
  <wa-icon name="sun" style="color: gold;"></wa-icon>
  <wa-icon name="leaf" style="color: mediumseagreen;"></wa-icon>
  <wa-icon name="cloud-showers-heavy" style="color: steelblue;"></wa-icon>
  <wa-icon name="hat-wizard" style="color: mediumpurple;"></wa-icon>
</div>
```

### 标签

对于非装饰性图标，使用 `label` 属性将其告知辅助技术。

```html {.example}
<wa-icon name="star" label="收藏" style="font-size: 1.5em;"></wa-icon>
```

### 系列和变体

默认图标库是 Font Awesome Free，它带有两个图标系列：`classic` 和 `brands`。使用 `family` 属性设置图标系列。

许多 Font Awesome Pro 图标系列有变体，如 `thin`、`light`、`regular` 和 `solid`。Font Awesome Pro 用户可以[提供他们的工具包代码](/docs/#using-font-awesome-kit-codes)来解锁额外的高级图标系列，包括 `sharp`、`duotone`、`sharp-duotone` 和额外的 Pro+ 图标包。

对于支持多种字重的系列，使用 `variant` 属性设置变体。

```html {.example}
<div class="wa-stack wa-gap-xl">
  <div class="wa-flank" style="--flank-size: 12ch;">
    <span>Classic</span>
    <div class="wa-cluster" style="font-size: 1.5em;">
      <wa-icon name="eyedropper"></wa-icon>
      <wa-icon variant="regular" name="grip-vertical"></wa-icon>
      <wa-icon variant="light" name="play"></wa-icon>
      <wa-icon variant="thin" name="star"></wa-icon>
    </div>
  </div>
  <div class="wa-flank" style="--flank-size: 12ch;">
    <span>Duotone</span>
    <div class="wa-cluster" style="font-size: 1.5em;">
      <wa-icon family="duotone" name="eyedropper"></wa-icon>
      <wa-icon family="duotone" variant="regular" name="grip-vertical"></wa-icon>
      <wa-icon family="duotone" variant="light" name="play"></wa-icon>
      <wa-icon family="duotone" variant="thin" name="star"></wa-icon>
    </div>
  </div>
  <div class="wa-flank" style="--flank-size: 12ch;">
    <span>Sharp</span>
    <div class="wa-cluster" style="font-size: 1.5em;">
      <wa-icon family="sharp" name="eyedropper"></wa-icon>
      <wa-icon family="sharp" variant="regular" name="grip-vertical"></wa-icon>
      <wa-icon family="sharp" variant="light" name="play"></wa-icon>
      <wa-icon family="sharp" variant="thin" name="star"></wa-icon>
    </div>
  </div>
  <div class="wa-flank" style="--flank-size: 12ch;">
    <span>Sharp Duotone</span>
    <div class="wa-cluster" style="font-size: 1.5em;">
      <wa-icon family="sharp-duotone" name="eyedropper"></wa-icon>
      <wa-icon family="sharp-duotone" variant="regular" name="grip-vertical"></wa-icon>
      <wa-icon family="sharp-duotone" variant="light" name="play"></wa-icon>
      <wa-icon family="sharp-duotone" variant="thin" name="star"></wa-icon>
    </div>
  </div>
  <div class="wa-flank" style="--flank-size: 12ch;">
    <span>Brands</span>
    <div class="wa-cluster" style="font-size: 1.5em;">
      <wa-icon family="brands" name="font-awesome"></wa-icon>
      <wa-icon family="brands" name="web-awesome"></wa-icon>
      <wa-icon family="brands" name="github"></wa-icon>
      <wa-icon family="brands" name="discord"></wa-icon>
    </div>
  </div>
</div>
```

### 自动宽度

默认情况下，图标具有 `1em` 高度和固定的 `1.25em` 宽度。使用 `auto-width` 属性允许图标使用其自然可变宽度。

```html {.example}
无自动宽度<br>
<div style="font-size: 1.5em; color: #193154;">
  <wa-icon family="solid" name="exclamation" style="background: lightsalmon;"></wa-icon>
  <wa-icon family="solid" name="circle-check" style="background: lightsalmon;"></wa-icon>
  <wa-icon family="solid" name="magnifying-glass" style="background: lightsalmon;"></wa-icon>
  <wa-icon family="solid" name="ruler-vertical" style="background: lightsalmon;"></wa-icon>
  <wa-icon family="solid" name="ruler-horizontal" style="background: lightsalmon;"></wa-icon>
  <wa-icon family="solid" name="envelope" style="background: lightsalmon;"></wa-icon>
</div>

<br>

有自动宽度<br>
<div style="font-size: 1.5em; color: #193154;">
  <wa-icon auto-width family="solid" name="exclamation" style="background: lightsalmon;"></wa-icon>
  <wa-icon auto-width family="solid" name="circle-check" style="background: lightsalmon;"></wa-icon>
  <wa-icon auto-width family="solid" name="magnifying-glass" style="background: lightsalmon;"></wa-icon>
  <wa-icon auto-width family="solid" name="ruler-vertical" style="background: lightsalmon;"></wa-icon>
  <wa-icon auto-width family="solid" name="ruler-horizontal" style="background: lightsalmon;"></wa-icon>
  <wa-icon auto-width family="solid" name="envelope" style="background: lightsalmon;"></wa-icon>
</div>
```

### 旋转和翻转

@SITE_NAME@ 支持 [{{ site.siblings.fontAwesome.name }} 的旋转和翻转实用程序](https://docs.fontawesome.com/web/style/rotate/)来调整图标方向。要旋转或翻转型号，在引用图标时使用 `rotate` 和 `flip` 属性。

```html {.example}
<wa-icon name="snowboarding" label="单板滑雪" style="font-size: 2em;"></wa-icon>
<wa-icon name="snowboarding" rotate="90" label="单板滑雪" style="font-size: 2em;"></wa-icon>
<wa-icon name="snowboarding" rotate="180" label="单板滑雪" style="font-size: 2em;"></wa-icon>
<wa-icon name="snowboarding" rotate="270" label="单板滑雪" style="font-size: 2em;"></wa-icon>
<wa-icon name="snowboarding" flip="x" label="单板滑雪" style="font-size: 2em;"></wa-icon>
<wa-icon name="snowboarding" flip="y" label="单板滑雪" style="font-size: 2em;"></wa-icon>
<wa-icon name="snowboarding" flip="both" label="单板滑雪" style="font-size: 2em;"></wa-icon>
```

### 动画

@SITE_NAME@ 支持 [{{ site.siblings.fontAwesome.name }} 的动画实用程序](https://docs.fontawesome.com/web/style/animate/)来为图标添加视觉吸引力。要选择不同类型的动画，在引用图标时使用 `animation` 属性。

:::info
所有[图标动画都遵守](https://docs.fontawesome.com/web/style/animate/#accessibility) `prefers-reduced-motion` 并在设置为 `reduce` 时自动禁用。
:::

#### 跳动

使用 `beat` 动画上下缩放图标。这对于吸引注意力或与健康/心脏相关的图标搭配使用很有用。

```html {.example}
<wa-icon name="circle-plus" animation="beat" label="跳动的加号" style="font-size: 2em;"></wa-icon>
<wa-icon name="heart" animation="beat" label="跳动的心脏" style="font-size: 2em;"></wa-icon>
<wa-icon
  name="heart"
  animation="beat"
  label="跳动的心脏"
  style="font-size: 2em; --animation-duration: 0.5s;"
></wa-icon>
<wa-icon
  name="heart"
  animation="beat"
  label="跳动的心脏"
  style="font-size: 2em; --animation-duration: 2s;"
></wa-icon>
<wa-icon name="heart" animation="beat" label="跳动的心脏" style="font-size: 2em; --beat-scale: 2;"></wa-icon>
```

#### 淡出

使用 `fade` 动画让图标在视觉上淡入淡出，以微妙（或不那么微妙）的方式吸引注意力。

```html {.example}
<wa-icon name="triangle-exclamation" animation="fade" label="淡出的警告" style="font-size: 2em;"></wa-icon>
<wa-icon name="skull-crossbones" animation="fade" label="淡出的危险" style="font-size: 2em;"></wa-icon>
<wa-icon name="cloud-arrow-down" animation="fade" label="淡出的下载" style="font-size: 2em;"></wa-icon>
<wa-icon
  name="i-cursor"
  animation="fade"
  label="淡出的光标"
  style="font-size: 2em; --animation-duration: 2s; --fade-opacity: 0.6;"
></wa-icon>
```

#### 跳动淡出

使用 `beat-fade` 动画通过视觉缩放和脉冲图标淡入淡出吸引注意力。

```html {.example}
<wa-icon name="person-digging" animation="beat-fade" label="跳动淡出的施工" style="font-size: 2em;"></wa-icon>
<wa-icon name="circle-exclamation" animation="beat-fade" label="跳动淡出的警报" style="font-size: 2em;"></wa-icon>
<wa-icon
  name="poo-bolt"
  animation="beat-fade"
  label="跳动淡出的闪电"
  style="font-size: 2em; --beat-fade-opacity: 0.1;--beat-fade-scale: 1.25"
></wa-icon>
<wa-icon
  name="circle-info"
  animation="beat-fade"
  label="跳动淡出的信息"
  style="font-size: 2em; --beat-fade-opacity: 0.67;--beat-fade-scale: 1.075"
></wa-icon>
```

#### 弹跳

使用 `bounce` 动画通过视觉上上下弹跳图标来吸引注意力。

```html {.example}
<wa-icon name="volleyball" animation="bounce" label="弹跳的排球" style="font-size: 2em;"></wa-icon>

<!-- 弹跳带有额外反弹和着陆时的"挤压" -->
<wa-icon
  name="basketball"
  animation="bounce"
  label="弹跳的篮球"
  style="font-size: 2em; --bounce-land-scale-x: 1.2;--bounce-land-scale-y: .8;--bounce-rebound: 5px;"
></wa-icon>

<!-- 无"挤压"的弹跳动画 -->
<wa-icon
  name="frog"
  animation="bounce"
  label="弹跳的青蛙"
  style="font-size: 2em; --bounce-start-scale-x: 1; --bounce-start-scale-y: 1; --bounce-jump-scale-x: 1; --bounce-jump-scale-y: 1; --bounce-land-scale-x: 1; --bounce-land-scale-y: 1;"
></wa-icon>

<!-- 无"挤压"或"反弹"的弹跳动画 -->
<wa-icon
  name="envelope"
  animation="bounce"
  label="弹跳的信封"
  style="font-size: 2em; --bounce-start-scale-x: 1;--bounce-start-scale-y: 1;--bounce-jump-scale-x: 1;--bounce-jump-scale-y: 1;--bounce-land-scale-x: 1;--bounce-land-scale-y: 1;--bounce-rebound: 0;"
></wa-icon>
```

#### 翻转

使用 `flip` 动画在 3D 空间中旋转图标。默认情况下，翻转会围绕 Y 轴旋转图标 180 度。翻转对于过渡、处理状态或使用在现实世界中翻转的物理对象很有用。

```html {.example}
<wa-icon name="compact-disc" animation="flip" label="翻转的光盘" style="font-size: 2em;"></wa-icon>
<wa-icon name="camera-rotate" animation="flip" label="翻转的相机旋转" style="font-size: 2em;"></wa-icon>
<wa-icon name="compact-disc" animation="flip" label="翻转的光盘" style="font-size: 2em;"></wa-icon>
<wa-icon
  name="scroll"
  animation="flip"
  label="翻转的卷轴"
  style="font-size: 2em; --flip-x: 1; --flip-y: 0"
></wa-icon>
<wa-icon
  name="money-check-dollar"
  animation="flip"
  label="翻转的美元支票"
  style="font-size: 2em; --animation-duration: 3s;"
></wa-icon>
```

#### 抖动

使用 `shake` 动画通过前后抖动图标来吸引注意力或表明不允许某些内容。

```html {.example}
<wa-icon name="bell" animation="shake" label="抖动的铃铛" style="font-size: 2em;"></wa-icon>
<wa-icon name="lock" animation="shake" label="抖动的锁" style="font-size: 2em;"></wa-icon>
<wa-icon name="stopwatch" animation="shake" label="抖动的秒表" style="font-size: 2em;"></wa-icon>
<wa-icon name="bomb" animation="shake" label="抖动的炸弹" style="font-size: 2em;"></wa-icon>
```

#### 旋转

使用 `spin` 动画让任何图标旋转，并使用 `spin-pulse` 让它以八步旋转。使用 `spin-reverse` 逆时针旋转。这与 `spinner` 以及 spinner 图标类别中的所有内容搭配使用效果特别好。

```html {.example}
<wa-icon name="sync" animation="spin" label="旋转的同步" style="font-size: 2em;"></wa-icon>
<wa-icon name="circle-notch" animation="spin" label="旋转的圆形缺口" style="font-size: 2em;"></wa-icon>
<wa-icon name="cog" animation="spin" label="旋转的齿轮" style="font-size: 2em;"></wa-icon>
<wa-icon name="cog" animation="spin-reverse" label="反向旋转的齿轮" style="font-size: 2em;"></wa-icon>
<wa-icon name="spinner" animation="spin-pulse" label="脉冲旋转的加载器" style="font-size: 2em;"></wa-icon>
<wa-icon
  name="spinner"
  animation="spin-pulse"
  label="脉冲旋转的加载器"
  style="font-size: 2em; --animation-direction: reverse"
></wa-icon>
```

### 双色调

{{ site.siblings.fontAwesome.name }} 的[双色调图标](https://docs.fontawesome.com/web/style/duotone)也会随 `color` 属性更改，但你可以使用 `--primary-color` 和 `--secondary-color` 自定义属性独立自定义主色和辅色。要更改任一颜色的不透明度，请使用 `--primary-opacity` 和 `--secondary-opacity`。

请注意，这些自定义属性不会继承，并且_必须直接应用于图标_。

```html {.example}
<div class="wa-stack">
  <div class="wa-cluster" style="font-size: 1.5em;">
    <wa-icon
      family="duotone"
      name="crow"
      style="--primary-color: dodgerblue; --secondary-color: gold; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      name="campfire"
      style="--primary-color: sienna; --secondary-color: red; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      name="birthday-cake"
      style="--primary-color: pink; --secondary-color: palevioletred; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      name="ear"
      style="--primary-color: sandybrown; --secondary-color: bisque; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      name="corn"
      style="--primary-color: mediumseagreen; --secondary-color: gold; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      name="cookie-bite"
      style="--primary-color: saddlebrown; --secondary-color: burlywood; --secondary-opacity: 1.0;"
    ></wa-icon>
  </div>

  <div class="wa-cluster" style="font-size: 1.5em;">
    <wa-icon
      family="duotone"
      variant="regular"
      name="crow"
      style="--primary-color: dodgerblue; --secondary-color: gold; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      variant="regular"
      name="campfire"
      style="--primary-color: sienna; --secondary-color: red; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      variant="regular"
      name="birthday-cake"
      style="--primary-color: pink; --secondary-color: palevioletred; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      variant="regular"
      name="ear"
      style="--primary-color: sandybrown; --secondary-color: bisque; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      variant="regular"
      name="corn"
      style="--primary-color: mediumseagreen; --secondary-color: gold; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      variant="regular"
      name="cookie-bite"
      style="--primary-color: saddlebrown; --secondary-color: burlywood; --secondary-opacity: 1.0;"
    ></wa-icon>
  </div>

  <div class="wa-cluster" style="font-size: 1.5em;">
    <wa-icon
      family="duotone"
      variant="light"
      name="crow"
      style="--primary-color: dodgerblue; --secondary-color: gold; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      variant="light"
      name="campfire"
      style="--primary-color: sienna; --secondary-color: red; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      variant="light"
      name="birthday-cake"
      style="--primary-color: pink; --secondary-color: palevioletred; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      variant="light"
      name="ear"
      style="--primary-color: sandybrown; --secondary-color: bisque; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      variant="light"
      name="corn"
      style="--primary-color: mediumseagreen; --secondary-color: gold; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      variant="light"
      name="cookie-bite"
      style="--primary-color: saddlebrown; --secondary-color: burlywood; --secondary-opacity: 1.0;"
    ></wa-icon>
  </div>

  <div class="wa-cluster" style="font-size: 1.5em;">
    <wa-icon
      family="duotone"
      variant="thin"
      name="crow"
      style="--primary-color: dodgerblue; --secondary-color: gold; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      variant="thin"
      name="campfire"
      style="--primary-color: sienna; --secondary-color: red; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      variant="thin"
      name="birthday-cake"
      style="--primary-color: pink; --secondary-color: palevioletred; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      variant="thin"
      name="ear"
      style="--primary-color: sandybrown; --secondary-color: bisque; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      variant="thin"
      name="corn"
      style="--primary-color: mediumseagreen; --secondary-color: gold; --secondary-opacity: 1.0;"
    ></wa-icon>
    <wa-icon
      family="duotone"
      variant="thin"
      name="cookie-bite"
      style="--primary-color: saddlebrown; --secondary-color: burlywood; --secondary-opacity: 1.0;"
    ></wa-icon>
  </div>
</div>
```

:::info
双色调图标可以通过[提供有效的 {{ site.siblings.fontAwesome.name }} 工具包代码](/docs/#using-font-awesome-kit-codes)来解锁。
:::

### 交换双色调不透明度

对于双色调图标，你可以使用 `swap-opacity` 属性交换主色和辅色的不透明度值。当你想要强调图标的辅助层时，这很有用。

```html {.example}
普通双色调<br>
<div class="wa-cluster" style="font-size: 1.5em;">
  <wa-icon family="duotone" name="home"></wa-icon>
  <wa-icon family="duotone" name="user"></wa-icon>
  <wa-icon family="duotone" name="envelope"></wa-icon>
  <wa-icon family="duotone" name="calendar"></wa-icon>
</div>

<br>

交换双色调<br>
<div class="wa-cluster" style="font-size: 1.5em;">
  <wa-icon family="duotone" name="home" swap-opacity></wa-icon>
  <wa-icon family="duotone" name="user" swap-opacity></wa-icon>
  <wa-icon family="duotone" name="envelope" swap-opacity></wa-icon>
  <wa-icon family="duotone" name="calendar" swap-opacity></wa-icon>
</div>
```

### Font Awesome Pro+ 图标

如果你是 [Font Awesome Pro+ 客户](https://fontawesome.com/)，你可以访问更多图标！只需在图标上设置适当的 `family`、`variant` 和 `name`。

```html {.example}
<div class="wa-stack wa-gap-xl">
  <div class="wa-flank" style="--flank-size: 10ch;">
    <a href="https://fontawesome.com/icons/packs/chisel" target="_blank">Chisel</a>
    <div class="wa-cluster" style="font-size: 1.5em;">
      <wa-icon family="chisel" variant="regular" name="house"></wa-icon>
    </div>
  </div>

  <div class="wa-flank" style="--flank-size: 10ch;">
    <a href="https://fontawesome.com/icons/packs/etch" target="_blank">Etch</a>
    <div class="wa-cluster" style="font-size: 1.5em;">
      <wa-icon family="etch" variant="solid" name="house"></wa-icon>
    </div>
  </div>

  <div class="wa-flank" style="--flank-size: 10ch;">
    <a href="https://fontawesome.com/icons/packs/graphite" target="_blank">Graphite</a>
    <div class="wa-cluster" style="font-size: 1.5em;">
      <wa-icon family="graphite" variant="thin" name="house"></wa-icon>
    </div>
  </div>

  <div class="wa-flank" style="--flank-size: 10ch;">
    <a href="https://fontawesome.com/icons/packs/jelly" target="_blank">Jelly</a>
    <div class="wa-cluster" style="font-size: 1.5em;">
      <wa-icon family="jelly" variant="regular" name="house"></wa-icon>
      <wa-icon
        family="jelly"
        variant="duo-regular"
        name="house"
        style="--secondary-color: skyblue; --secondary-opacity: 0.8;"
      ></wa-icon>
      <wa-icon family="jelly" variant="fill-regular" name="house"></wa-icon>
    </div>
  </div>

  <div class="wa-flank" style="--flank-size: 10ch;">
    <a href="https://fontawesome.com/icons/packs/notdog" target="_blank">Notdog</a>
    <div class="wa-cluster" style="font-size: 1.5em;">
      <wa-icon family="notdog" variant="solid" name="house"></wa-icon>
      <wa-icon
        family="notdog-duo"
        variant="solid"
        name="house"
        style="--secondary-color: skyblue; --secondary-opacity: 0.8;"
      ></wa-icon>
    </div>
  </div>

  <div class="wa-flank" style="--flank-size: 10ch;">
    <a href="https://fontawesome.com/icons/packs/slab" target="_blank">Slab</a>
    <div class="wa-cluster" style="font-size: 1.5em;">
      <wa-icon family="slab" variant="regular" name="house"></wa-icon>
      <wa-icon family="slab" variant="press-regular" name="house"></wa-icon>
    </div>
  </div>

  <div class="wa-flank" style="--flank-size: 10ch;">
    <a href="https://fontawesome.com/icons/packs/thumbprint" target="_blank">Thumbprint</a>
    <div class="wa-cluster" style="font-size: 1.5em;">
      <wa-icon
        family="thumbprint"
        variant="light"
        name="house"
        style="--secondary-color: skyblue; --secondary-opacity: 0.8;"
      ></wa-icon>
    </div>
  </div>

  <div class="wa-flank" style="--flank-size: 10ch;">
    <a href="https://fontawesome.com/icons/packs/utility" target="_blank">Utility</a>
    <div class="wa-cluster" style="font-size: 1.5em;">
      <wa-icon family="utility" variant="semibold" name="house"></wa-icon>
      <wa-icon
        family="utility-duo"
        variant="semibold"
        name="house"
        style="--secondary-color: skyblue; --secondary-opacity: 0.8;"
      ></wa-icon>
      <wa-icon family="utility-fill" variant="semibold" name="house"></wa-icon>
    </div>
  </div>

  <div class="wa-flank" style="--flank-size: 10ch;">
    <a href="https://fontawesome.com/icons/packs/whiteboard" target="_blank">Whiteboard</a>
    <div class="wa-cluster" style="font-size: 1.5em;">
      <wa-icon family="whiteboard" variant="semibold" name="house"></wa-icon>
    </div>
  </div>
</div>
```

:::info
Pro+ 图标可以通过[提供有效的 {{ site.siblings.fontAwesome.name }} 工具包代码](/docs/#using-font-awesome-kit-codes)来解锁。
:::

### 自定义图标

自定义图标可以使用 `src` 属性单独加载。仅支持本地或启用 CORS 的端点上的 SVG。如果你使用多个自定义图标，注册一个[自定义图标库](#icon-libraries)可能是有意义的。

```html {.example}
<wa-icon src="https://shoelace.style/assets/images/shoe.svg" style="font-size: 4rem;"></wa-icon>
```

### 自托管默认库

默认情况下，图标从 {{ site.siblings.fontAwesome.name }} CDN 加载。如果你希望[下载图标](https://fontawesome.com/download)并从你自己的服务器提供它们，可以使用 `setIconPath()` 函数将默认图标库指向你的自托管目录。

当你下载 {{ site.siblings.fontAwesome.name }} 时，压缩包将包含一个带有子目录（如 `solid/`、`regular/`、`brands/` 等）的 `svgs` 目录。将 `svgs` 目录（或其内容）复制到你的项目中并设置图标路径指向它。

```html
<script type="module">
  import { setIconPath } from '/dist/webawesome.js';

  // 指向你的 Font Awesome 下载中的 `svgs` 目录
  setIconPath('/assets/fontawesome/svgs');
</script>
```

调用 `setIconPath()` 后，图标将解析到你的自托管目录而不是 CDN。例如，`<wa-icon name="house">` 将从 `/assets/fontawesome/svgs/solid/house.svg` 加载。

为了更好地控制图标 URL 的构建方式，可以使用 `getIconFolder()` 辅助函数以及 `registerIconLibrary()` 来构建自定义解析器。`getIconFolder()` 函数将系列和变体映射到正确的文件夹名称，因此你不必自己复制该逻辑。

```html
<script type="module">
  import { getIconFolder, registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('default', {
    resolver: (name, family, variant) => {
      const folder = getIconFolder(name, family, variant);
      return `/assets/fontawesome/svgs/${folder}/${name}.svg?v=2`;
    },
  });
</script>
```

:::warning
`setIconPath()` 必须在 @SITE_NAME@ 组件加载之前调用，类似于 `setBasePath()` 和 `setKitCode()`。
:::

### 自定义默认库

默认图标库包含超过 2,000 个由 [{{ site.siblings.fontAwesome.name }}]({{ site.siblings.fontAwesome.url }}) 提供的图标。这些是在使用 `<wa-icon>` 而没有 `library` 属性时显示的图标。如果你希望这些图标解析到其他地方或不同的图标库，请使用 `default` 名称和自定义解析器注册一个图标库。

例如，这会将默认图标库更改为使用从 jsDelivr CDN 加载的 [Bootstrap 图标](https://icons.getbootstrap.com/)。

```html
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('default', {
    resolver: (name, family) => {
      const suffix = family === 'filled' ? '-fill' : '';
      return `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/icons/${name}${suffix}.svg`;
    },
  });
</script>
```

#### 自定义默认库以使用 SVG 精灵

为了提高性能，你可以使用 SVG 精灵来避免为每个 SVG 进行多次请求。浏览器将加载一次精灵表，然后使用哈希选择器引用精灵表中的特定 SVG。

一如既往，请确保对这些更改进行基准测试。使用 HTTP/2 时，使用多个小请求而不是 1 个大精灵表实际上可能更节省带宽。

:::warning
使用精灵表时，`wa-load` 和 `wa-error` 事件不会触发。

出于安全原因，浏览器可能会对位于 `<wa-icon>` 阴影 DOM 中的 `<use>` 元素应用同源策略，并可能拒绝加载跨源 URL。目前没有为 `<use>` 元素设置跨源策略的定义方法。因此，精灵表只应在你自托管它们时使用。
:::

```html
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('sprite', {
    resolver: name => `/assets/images/sprite.svg#${name}`,
    mutator: svg => svg.setAttribute('fill', 'currentColor'),
    spriteSheet: true,
  });
</script>
```

### 自定义系统库

系统库仅包含 @SITE_NAME@ 组件内部使用的图标。与默认图标库不同，系统库不依赖于物理资产。相反，它的图标作为数据 URI 硬编码在解析器中，以确保它们的可用性。

如果你想更改 @SITE_NAME@ 内部使用的图标，可以使用 `system` 名称和自定义解析器注册一个图标库。如果你选择这样做，你有责任提供组件所需的所有图标。你可以参考 `src/components/library.system.ts` 获取 @SITE_NAME@ 使用的系统图标的完整列表。

```html
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('system', {
    resolver: name => `/path/to/custom/icons/${name}.svg`,
  });
</script>
```

### 第三方图标库

你可以通过图标库注册额外的图标以与 `<wa-icon>` 组件一起使用。图标文件可以存在于本地或启用 CORS 的端点（例如 CDN）。你可以注册的图标库数量没有限制，注册它们也没有相关成本，因为单个图标仅在使用时才会被请求。

@SITE_NAME@ 附带两个内置图标库，`default` 和 `system`。[默认图标库](#customizing-the-default-library)由 [{{ site.siblings.fontAwesome.name }}]({{ site.siblings.fontAwesome.url }}) 提供。[系统图标库](#customizing-the-system-library)仅包含 @SITE_NAME@ 组件内部使用的一小部分图标。

要注册额外的图标库，请使用从 `dist/webawesome.js` 导出的 `registerIconLibrary()` 函数。至少，你必须提供一个名称和一个解析器函数。解析器函数将图标名称转换为相应 SVG 文件存在的 URL。请参考下面的示例以更好地理解它的工作原理。

如果需要，可以使用 mutator 函数在渲染之前修改 SVG 元素。由于 SVG 的制作方式多种多样，这对于某些库来说是必要的。例如，图标应该理想地通过 `currentColor` 继承当前文本颜色，因此你可能需要使用此函数将 `fill="currentColor` 或 `stroke="currentColor"` 应用于 SVG 元素。

下面是一个注册位于 `/assets/icons` 目录中的图标库的示例。

```html
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('my-icons', {
    resolver: (name, family, variant) => `/assets/icons/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor'),
  });
</script>
```

要显示图标，请设置 `<wa-icon>` 元素的 `library` 和 `name` 属性。

```html
<!-- 这将显示位于 /assets/icons/smile.svg 的图标 -->
<wa-icon library="my-icons" name="smile"></wa-icon>
```

如果在注册之前使用图标，它最初将是空的，但在注册时会显示。

以下示例演示如何通过 CDN 注册多个流行的开源图标库。随意根据你的需要调整代码，使用你自己的源或命名约定。

#### Bootstrap 图标

这将使用 jsDelivr CDN 注册 [Bootstrap 图标](https://icons.getbootstrap.com/)库。该库有两个系列：`regular` 和 `filled`。

该库中的图标根据 [MIT 许可证](https://github.com/twbs/icons/blob/main/LICENSE)获得许可。

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('bootstrap', {
    resolver: (name, family) => {
      const suffix = family === 'filled' ? '-fill' : '';
      return `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/icons/${name}${suffix}.svg`;
    },
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="bootstrap" name="backpack"></wa-icon>
  <wa-icon library="bootstrap" name="cup-hot"></wa-icon>
  <wa-icon library="bootstrap" name="envelope-heart"></wa-icon>
  <wa-icon library="bootstrap" name="inboxes"></wa-icon>
  <wa-icon library="bootstrap" name="lamp"></wa-icon>
  <wa-icon library="bootstrap" name="piggy-bank"></wa-icon>
  <br>
  <wa-icon library="bootstrap" family="filled" name="backpack"></wa-icon>
  <wa-icon library="bootstrap" family="filled" name="cup-hot"></wa-icon>
  <wa-icon library="bootstrap" family="filled" name="envelope-heart"></wa-icon>
  <wa-icon library="bootstrap" family="filled" name="inboxes"></wa-icon>
  <wa-icon library="bootstrap" family="filled" name="lamp"></wa-icon>
  <wa-icon library="bootstrap" family="filled" name="piggy-bank"></wa-icon>
</div>
```

#### Boxicons

这将使用 jsDelivr CDN 注册 [Boxicons](https://boxicons.com/) 库。该库有三种变体：regular (`bx-*`)、solid (`bxs-*`) 和 logos (`bxl-*`)。需要一个 mutator 函数来将 SVG 的 `fill` 设置为 `currentColor`。

该库中的图标根据 [Creative Commons 4.0 许可证](https://github.com/atisawd/boxicons#license)获得许可。

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('boxicons', {
    resolver: name => {
      let folder = 'regular';
      if (name.substring(0, 4) === 'bxs-') folder = 'solid';
      if (name.substring(0, 4) === 'bxl-') folder = 'logos';
      return `https://cdn.jsdelivr.net/npm/boxicons@2.1.4/svg/${folder}/${name}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor'),
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="boxicons" name="bx-bot"></wa-icon>
  <wa-icon library="boxicons" name="bx-cookie"></wa-icon>
  <wa-icon library="boxicons" name="bx-joystick"></wa-icon>
  <wa-icon library="boxicons" name="bx-save"></wa-icon>
  <wa-icon library="boxicons" name="bx-server"></wa-icon>
  <wa-icon library="boxicons" name="bx-wine"></wa-icon>
  <br>
  <wa-icon library="boxicons" name="bxs-bot"></wa-icon>
  <wa-icon library="boxicons" name="bxs-cookie"></wa-icon>
  <wa-icon library="boxicons" name="bxs-joystick"></wa-icon>
  <wa-icon library="boxicons" name="bxs-save"></wa-icon>
  <wa-icon library="boxicons" name="bxs-server"></wa-icon>
  <wa-icon library="boxicons" name="bxs-wine"></wa-icon>
  <br>
  <wa-icon library="boxicons" name="bxl-apple"></wa-icon>
  <wa-icon library="boxicons" name="bxl-chrome"></wa-icon>
  <wa-icon library="boxicons" name="bxl-edge"></wa-icon>
  <wa-icon library="boxicons" name="bxl-firefox"></wa-icon>
  <wa-icon library="boxicons" name="bxl-opera"></wa-icon>
  <wa-icon library="boxicons" name="bxl-microsoft"></wa-icon>
</div>
```

#### Lucide

这将使用 jsDelivr CDN 注册 [Lucide](https://lucide.dev/) 图标库。该项目是流行的 [Feather](https://feathericons.com/) 图标库的社区维护分支。

该库中的图标根据 [MIT 许可证](https://github.com/lucide-icons/lucide/blob/master/LICENSE)获得许可。

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('lucide', {
    resolver: name => `https://cdn.jsdelivr.net/npm/lucide-static@1.8.0/icons/${name}.svg`,
    mutator: svg =>
      svg.querySelectorAll('path').forEach(path => {
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', 'currentColor');
      }),
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="lucide" name="feather"></wa-icon>
  <wa-icon library="lucide" name="pie-chart"></wa-icon>
  <wa-icon library="lucide" name="settings"></wa-icon>
  <wa-icon library="lucide" name="map-pin"></wa-icon>
  <wa-icon library="lucide" name="printer"></wa-icon>
  <wa-icon library="lucide" name="shopping-cart"></wa-icon>
</div>
```

#### Heroicons

这将使用 jsDelivr CDN 注册 [Heroicons](https://heroicons.com/) 库。

该库中的图标根据 [MIT 许可证](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE)获得许可。

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('heroicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/heroicons@2.2.0/24/outline/${name}.svg`,
    mutator: svg =>
      svg.querySelectorAll('path').forEach(path => {
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', 'currentColor');
      }),
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="heroicons" name="chat-bubble-left"></wa-icon>
  <wa-icon library="heroicons" name="cloud"></wa-icon>
  <wa-icon library="heroicons" name="cog"></wa-icon>
  <wa-icon library="heroicons" name="document-text"></wa-icon>
  <wa-icon library="heroicons" name="gift"></wa-icon>
  <wa-icon library="heroicons" name="speaker-wave"></wa-icon>
</div>
```

#### Iconoir

这将使用 jsDelivr CDN 注册 [Iconoir](https://iconoir.com/) 库。

该库中的图标根据 [MIT 许可证](https://github.com/lucaburgio/iconoir/blob/master/LICENSE)获得许可。

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('iconoir', {
    resolver: (name, family) => {
      return `https://cdn.jsdelivr.net/npm/iconoir@7.11.0/icons/regular/${name}.svg`;
    },
    mutator: svg =>
      svg.querySelectorAll('path').forEach(path => {
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', 'currentColor');
      }),
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="iconoir" name="check-circle"></wa-icon>
  <wa-icon library="iconoir" name="drawer"></wa-icon>
  <wa-icon library="iconoir" name="keyframes"></wa-icon>
  <wa-icon library="iconoir" name="headset-help"></wa-icon>
  <wa-icon library="iconoir" name="color-picker"></wa-icon>
  <wa-icon library="iconoir" name="wifi"></wa-icon>
</div>
```

#### Ionicons

这将使用 jsDelivr CDN 注册 [Ionicons](https://ionicons.com/) 库。该库有三种变体：outline（默认）、filled (`*-filled`) 和 sharp (`*-sharp`)。需要一个 mutator 函数来补充我们未包含的一些样式。

该库中的图标根据 [MIT 许可证](https://github.com/ionic-team/ionicons/blob/master/LICENSE)获得许可。

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('ionicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/ionicons@8.0.13/dist/ionicons/svg/${name}.svg`,
    mutator: svg => {
      svg.setAttribute('fill', 'currentColor');
      svg.setAttribute('stroke', 'currentColor');
      [...svg.querySelectorAll('.ionicon-fill-none')].map(el => el.setAttribute('fill', 'none'));
      [...svg.querySelectorAll('.ionicon-stroke-width')].map(el => el.setAttribute('stroke-width', '32px'));
    },
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="ionicons" name="alarm"></wa-icon>
  <wa-icon library="ionicons" name="american-football"></wa-icon>
  <wa-icon library="ionicons" name="bug"></wa-icon>
  <wa-icon library="ionicons" name="chatbubble"></wa-icon>
  <wa-icon library="ionicons" name="settings"></wa-icon>
  <wa-icon library="ionicons" name="warning"></wa-icon>
  <br>
  <wa-icon library="ionicons" name="alarm-outline"></wa-icon>
  <wa-icon library="ionicons" name="american-football-outline"></wa-icon>
  <wa-icon library="ionicons" name="bug-outline"></wa-icon>
  <wa-icon library="ionicons" name="chatbubble-outline"></wa-icon>
  <wa-icon library="ionicons" name="settings-outline"></wa-icon>
  <wa-icon library="ionicons" name="warning-outline"></wa-icon>
  <br>
  <wa-icon library="ionicons" name="alarm-sharp"></wa-icon>
  <wa-icon library="ionicons" name="american-football-sharp"></wa-icon>
  <wa-icon library="ionicons" name="bug-sharp"></wa-icon>
  <wa-icon library="ionicons" name="chatbubble-sharp"></wa-icon>
  <wa-icon library="ionicons" name="settings-sharp"></wa-icon>
  <wa-icon library="ionicons" name="warning-sharp"></wa-icon>
</div>
```

#### Jam Icons

这将使用 jsDelivr CDN 注册 [Jam Icons](https://jam-icons.com/) 库。该库有两种变体：regular（默认）和 filled (`*-f`)。需要一个 mutator 函数来将 SVG 的 `fill` 设置为 `currentColor`。

该库中的图标根据 [MIT 许可证](https://github.com/michaelampr/jam/blob/master/LICENSE)获得许可。

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('jam', {
    resolver: name => `https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor'),
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="jam" name="calendar"></wa-icon>
  <wa-icon library="jam" name="camera"></wa-icon>
  <wa-icon library="jam" name="filter"></wa-icon>
  <wa-icon library="jam" name="leaf"></wa-icon>
  <wa-icon library="jam" name="picture"></wa-icon>
  <wa-icon library="jam" name="set-square"></wa-icon>
  <br>
  <wa-icon library="jam" name="calendar-f"></wa-icon>
  <wa-icon library="jam" name="camera-f"></wa-icon>
  <wa-icon library="jam" name="filter-f"></wa-icon>
  <wa-icon library="jam" name="leaf-f"></wa-icon>
  <wa-icon library="jam" name="picture-f"></wa-icon>
  <wa-icon library="jam" name="set-square-f"></wa-icon>
</div>
```

#### Material Icons

这将使用 jsDelivr CDN 注册 [Material Icons](https://material.io/resources/icons/?style=baseline) 库。该库有三种变体：outline（默认）、round (`*_round`) 和 sharp (`*_sharp`)。需要一个 mutator 函数来将 SVG 的 `fill` 设置为 `currentColor`。

该库中的图标根据 [Apache 2.0 许可证](https://github.com/google/material-design-icons/blob/master/LICENSE)获得许可。

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('material', {
    resolver: name => {
      const match = name.match(/^(.*?)(_(round|sharp))?$/);
      return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.33/svg/${match[1]}/${match[3] || 'outline'}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor'),
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="material" name="notifications"></wa-icon>
  <wa-icon library="material" name="email"></wa-icon>
  <wa-icon library="material" name="delete"></wa-icon>
  <wa-icon library="material" name="volume_up"></wa-icon>
  <wa-icon library="material" name="settings"></wa-icon>
  <wa-icon library="material" name="shopping_basket"></wa-icon>
  <br>
  <wa-icon library="material" name="notifications_round"></wa-icon>
  <wa-icon library="material" name="email_round"></wa-icon>
  <wa-icon library="material" name="delete_round"></wa-icon>
  <wa-icon library="material" name="volume_up_round"></wa-icon>
  <wa-icon library="material" name="settings_round"></wa-icon>
  <wa-icon library="material" name="shopping_basket_round"></wa-icon>
  <br>
  <wa-icon library="material" name="notifications_sharp"></wa-icon>
  <wa-icon library="material" name="email_sharp"></wa-icon>
  <wa-icon library="material" name="delete_sharp"></wa-icon>
  <wa-icon library="material" name="volume_up_sharp"></wa-icon>
  <wa-icon library="material" name="settings_sharp"></wa-icon>
  <wa-icon library="material" name="shopping_basket_sharp"></wa-icon>
</div>
```

#### Remix Icon

这将使用 jsDelivr CDN 注册 [Remix Icon](https://remixicon.com/) 库。该库按类别对图标进行分组，因此名称必须包含类别和图标，用斜杠分隔，以及所需的 `-line` 或 `-fill` 后缀。需要一个 mutator 函数来将 SVG 的 `fill` 设置为 `currentColor`。

该库中的图标根据 [Apache 2.0 许可证](https://github.com/Remix-Design/RemixIcon/blob/master/License)获得许可。

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('remixicon', {
    resolver: name => {
      const match = name.match(/^(.*?)\/(.*?)?$/);
      match[1] = match[1].charAt(0).toUpperCase() + match[1].slice(1);
      return `https://cdn.jsdelivr.net/npm/remixicon@4.9.1/icons/${match[1]}/${match[2]}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor'),
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="remixicon" name="business/cloud-line"></wa-icon>
  <wa-icon library="remixicon" name="design/brush-line"></wa-icon>
  <wa-icon library="remixicon" name="business/pie-chart-line"></wa-icon>
  <wa-icon library="remixicon" name="development/bug-line"></wa-icon>
  <wa-icon library="remixicon" name="media/image-line"></wa-icon>
  <wa-icon library="remixicon" name="system/alert-line"></wa-icon>
  <br>
  <wa-icon library="remixicon" name="business/cloud-fill"></wa-icon>
  <wa-icon library="remixicon" name="design/brush-fill"></wa-icon>
  <wa-icon library="remixicon" name="business/pie-chart-fill"></wa-icon>
  <wa-icon library="remixicon" name="development/bug-fill"></wa-icon>
  <wa-icon library="remixicon" name="media/image-fill"></wa-icon>
  <wa-icon library="remixicon" name="system/alert-fill"></wa-icon>
</div>
```

#### Tabler Icons

这将使用 jsDelivr CDN 注册 [Tabler Icons](https://tabler-icons.io/) 库。该库具有超过 1,950 个开源图标。

该库中的图标根据 [MIT 许可证](https://github.com/tabler/tabler-icons/blob/master/LICENSE)获得许可。

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('tabler', {
    resolver: name => `https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/${name}.svg`,
    mutator: svg => {
      svg.style.fill = 'none';
      svg.setAttribute('stroke', 'currentColor');
    },
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="tabler" name="alert-triangle"></wa-icon>
  <wa-icon library="tabler" name="arrow-back"></wa-icon>
  <wa-icon library="tabler" name="at"></wa-icon>
  <wa-icon library="tabler" name="ball-baseball"></wa-icon>
  <wa-icon library="tabler" name="cake"></wa-icon>
  <wa-icon library="tabler" name="files"></wa-icon>
  <br>
  <wa-icon library="tabler" name="keyboard"></wa-icon>
  <wa-icon library="tabler" name="moon"></wa-icon>
  <wa-icon library="tabler" name="pig"></wa-icon>
  <wa-icon library="tabler" name="printer"></wa-icon>
  <wa-icon library="tabler" name="ship"></wa-icon>
  <wa-icon library="tabler" name="toilet-paper"></wa-icon>
</div>
```

#### Unicons

这将使用 jsDelivr CDN 注册 [Unicons](https://iconscout.com/unicons) 库。该库有两种变体：line（默认）和 solid (`*-s`)。需要一个 mutator 函数来将 SVG 的 `fill` 设置为 `currentColor`。

该库中的图标根据 [Apache 2.0 许可证](https://github.com/Iconscout/unicons/blob/master/LICENSE)获得许可。出现在 Unicons 网站上的一些图标，特别是许多 solid 变体，需要许可证，因此在 CDN 中不可用。

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('unicons', {
    resolver: name => {
      const match = name.match(/^(.*?)(-s)?$/);
      return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.2.0/svg/${match[2] === '-s' ? 'solid' : 'line'}/${match[1]}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor'),
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="unicons" name="clock"></wa-icon>
  <wa-icon library="unicons" name="graph-bar"></wa-icon>
  <wa-icon library="unicons" name="padlock"></wa-icon>
  <wa-icon library="unicons" name="polygon"></wa-icon>
  <wa-icon library="unicons" name="rocket"></wa-icon>
  <wa-icon library="unicons" name="star"></wa-icon>
  <br>
  <wa-icon library="unicons" name="clock-s"></wa-icon>
  <wa-icon library="unicons" name="graph-bar-s"></wa-icon>
  <wa-icon library="unicons" name="padlock-s"></wa-icon>
  <wa-icon library="unicons" name="polygon-s"></wa-icon>
  <wa-icon library="unicons" name="rocket-s"></wa-icon>
  <wa-icon library="unicons" name="star-s"></wa-icon>
</div>
```
