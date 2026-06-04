---
title: 轮播
layout: component
category: Media
synonyms:
  - slider
  - slideshow
  - image gallery
  - rotator
  - swiper
  - 滑块
  - 图片画廊
use-cases:
  - image carousel
  - testimonial slider
  - hero slider
  - product gallery
  - 图片轮播
  - 产品画廊
---

```html {.example}
<wa-carousel pagination navigation mouse-dragging loop>
  <wa-carousel-item>
    <img
      alt="阳光照在山上和树上（作者：Adam Kool，Unsplash）"
      src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="一条蜿蜒穿过常绿森林的河流（作者：Luca Bravo，Unsplash）"
      src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="太阳在薰衣草田上空落下（作者：Leonard Cotte，Unsplash）"
      src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="一片草地，太阳在背景中落下（作者：Sapan Patel，Unsplash）"
      src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="山的风景，云层滚滚而来（作者：V2osk，Unsplash）"
      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
    />
  </wa-carousel-item>
</wa-carousel>
```

## 示例

### 分页

使用 `pagination` 属性将总幻灯片数和当前幻灯片显示为一组交互式圆点。

```html {.example}
<wa-carousel pagination>
  <wa-carousel-item>
    <img
      alt="阳光照在山上和树上（作者：Adam Kool，Unsplash）"
      src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="一条蜿蜒穿过常绿森林的河流（作者：Luca Bravo，Unsplash）"
      src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="太阳在薰衣草田上空落下（作者：Leonard Cotte，Unsplash）"
      src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="一片草地，太阳在背景中落下（作者：Sapan Patel，Unsplash）"
      src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="山的风景，云层滚滚而来（作者：V2osk，Unsplash）"
      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
    />
  </wa-carousel-item>
</wa-carousel>
```

### 导航

使用 `navigation` 属性显示上一页和下一页按钮。

```html {.example}
<wa-carousel navigation>
  <wa-carousel-item>
    <img
      alt="阳光照在山上和树上（作者：Adam Kool，Unsplash）"
      src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="一条蜿蜒穿过常绿森林的河流（作者：Luca Bravo，Unsplash）"
      src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="太阳在薰衣草田上空落下（作者：Leonard Cotte，Unsplash）"
      src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="一片草地，太阳在背景中落下（作者：Sapan Patel，Unsplash）"
      src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="山的风景，云层滚滚而来（作者：V2osk，Unsplash）"
      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
    />
  </wa-carousel-item>
</wa-carousel>
```

### 循环

默认情况下，轮播不会超出第一张和最后一张幻灯片。你可以更改此行为，并使用 `loop` 属性强制轮播"环绕"。

```html {.example}
<wa-carousel loop navigation pagination>
  <wa-carousel-item>
    <img
      alt="阳光照在山上和树上（作者：Adam Kool，Unsplash）"
      src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="一条蜿蜒穿过常绿森林的河流（作者：Luca Bravo，Unsplash）"
      src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="太阳在薰衣草田上空落下（作者：Leonard Cotte，Unsplash）"
      src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="一片草地，太阳在背景中落下（作者：Sapan Patel，Unsplash）"
      src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="山的风景，云层滚滚而来（作者：V2osk，Unsplash）"
      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
    />
  </wa-carousel-item>
</wa-carousel>
```

### 自动播放

当使用 `autoplay` 属性时，轮播将自动前进。要更改幻灯片在前进之前显示的时间长度，将 `autoplay-interval` 设置为所需的毫秒数。为获得最佳效果，当启用自动播放时使用 `loop` 属性。请注意，当用户与轮播交互时，自动播放会暂停。

```html {.example}
<wa-carousel autoplay loop pagination>
  <wa-carousel-item>
    <img
      alt="阳光照在山上和树上（作者：Adam Kool，Unsplash）"
      src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="一条蜿蜒穿过常绿森林的河流（作者：Luca Bravo，Unsplash）"
      src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="太阳在薰衣草田上空落下（作者：Leonard Cotte，Unsplash）"
      src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="一片草地，太阳在背景中落下（作者：Sapan Patel，Unsplash）"
      src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="山的风景，云层滚滚而来（作者：V2osk，Unsplash）"
      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
    />
  </wa-carousel-item>
</wa-carousel>
```

### 鼠标拖拽

轮播使用 [滚动捕捉](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap) 来将幻灯片定位在各种捕捉位置。这允许用户非常自然地滚动浏览幻灯片，特别是在触摸设备上。不幸的是，桌面用户将无法用鼠标点击和拖拽，这可能会让人感觉不自然。添加 `mouse-dragging` 属性可以帮助解决这个问题。

这个示例最好使用鼠标来演示。尝试点击和拖拽幻灯片来移动它。然后切换开关，再试一次。

```html {.example}
<div class="mouse-dragging">
  <wa-carousel pagination>
    <wa-carousel-item>
      <img
        alt="阳光照在山上和树上（作者：Adam Kool，Unsplash）"
        src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
      />
    </wa-carousel-item>
    <wa-carousel-item>
      <img
        alt="一条蜿蜒穿过常绿森林的河流（作者：Luca Bravo，Unsplash）"
        src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
      />
    </wa-carousel-item>
    <wa-carousel-item>
      <img
        alt="太阳在薰衣草田上空落下（作者：Leonard Cotte，Unsplash）"
        src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
      />
    </wa-carousel-item>
    <wa-carousel-item>
      <img
        alt="一片草地，太阳在背景中落下（作者：Sapan Patel，Unsplash）"
        src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
      />
    </wa-carousel-item>
    <wa-carousel-item>
      <img
        alt="山的风景，云层滚滚而来（作者：V2osk，Unsplash）"
        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
      />
    </wa-carousel-item>
  </wa-carousel>

  <wa-divider></wa-divider>

  <wa-switch>启用鼠标拖拽</wa-switch>
</div>

<script>
  const container = document.querySelector('.mouse-dragging');
  const carousel = container.querySelector('wa-carousel');
  const toggle = container.querySelector('wa-switch');

  toggle.addEventListener('change', () => {
    carousel.toggleAttribute('mouse-dragging', toggle.checked);
  });
</script>
```

### 每页多个幻灯片

`slides-per-page` 属性使得一次显示多个幻灯片成为可能。如果需要，你还可以使用 `slides-per-move` 属性一次前进多个幻灯片。

```html {.example}
<wa-carousel navigation pagination slides-per-page="2" slides-per-move="2">
  <wa-carousel-item style="background: red;">幻灯片 1</wa-carousel-item>
  <wa-carousel-item style="background: orange;">幻灯片 2</wa-carousel-item>
  <wa-carousel-item style="background: yellow;">幻灯片 3</wa-carousel-item>
  <wa-carousel-item style="background: green;">幻灯片 4</wa-carousel-item>
  <wa-carousel-item style="background: blue;">幻灯片 5</wa-carousel-item>
  <wa-carousel-item style="background: purple;">幻灯片 6</wa-carousel-item>
</wa-carousel>
```

### 添加和删除幻灯片

轮播的内容可以通过添加或删除轮播项来更改。轮播将自动更新自身。

```html {.example}
<wa-carousel class="dynamic-carousel" pagination navigation>
  <wa-carousel-item style="background: red">幻灯片 1</wa-carousel-item>
  <wa-carousel-item style="background: orange">幻灯片 2</wa-carousel-item>
  <wa-carousel-item style="background: yellow">幻灯片 3</wa-carousel-item>
</wa-carousel>

<div class="carousel-options">
  <wa-button appearance="filled" id="dynamic-add">添加幻灯片</wa-button>
  <wa-button appearance="filled" id="dynamic-remove">删除幻灯片</wa-button>
</div>

<style>
  .dynamic-carousel {
    --aspect-ratio: 3 / 2;
  }

  .dynamic-carousel ~ .carousel-options {
    display: flex;
    justify-content: center;
    gap: var(--wa-space-xs);
    margin-top: var(--wa-space-l);
  }

  .dynamic-carousel wa-carousel-item {
    flex: 0 0 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wa-font-size-2xl);
  }
</style>

<script>
  (() => {
    const dynamicCarousel = document.querySelector('.dynamic-carousel');
    const dynamicAdd = document.querySelector('#dynamic-add');
    const dynamicRemove = document.querySelector('#dynamic-remove');
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    let colorIndex = 2;

    const addSlide = () => {
      const slide = document.createElement('wa-carousel-item');
      const color = colors[++colorIndex % colors.length];
      slide.innerText = `幻灯片 ${dynamicCarousel.children.length + 1}`;
      slide.style.setProperty('background', color);
      dynamicCarousel.appendChild(slide);
      dynamicRemove.disabled = false;
    };

    const removeSlide = () => {
      const slide = dynamicCarousel.children[dynamicCarousel.children.length - 1];
      const numSlides = dynamicCarousel.querySelectorAll('wa-carousel-item').length;

      if (numSlides > 1) {
        slide.remove();
        colorIndex--;
      }

      dynamicRemove.disabled = numSlides - 1 <= 1;
    };

    dynamicAdd.addEventListener('click', addSlide);
    dynamicRemove.addEventListener('click', removeSlide);
  })();
</script>
```

### 垂直滚动

将 `orientation` 属性设置为 `vertical` 将以垂直布局渲染轮播。如果你的幻灯片内容高度不同，你需要使用 CSS 在轮播上设置显式的 `height` 或 `max-height`。

```html {.example}
<wa-carousel class="vertical" pagination orientation="vertical">
  <wa-carousel-item>
    <img
      alt="阳光照在山上和树上（作者：Adam Kool，Unsplash）"
      src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="一条蜿蜒穿过常绿森林的河流（作者：Luca Bravo，Unsplash）"
      src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="太阳在薰衣草田上空落下（作者：Leonard Cotte，Unsplash）"
      src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="一片草地，太阳在背景中落下（作者：Sapan Patel，Unsplash）"
      src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="山的风景，云层滚滚而来（作者：V2osk，Unsplash）"
      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
    />
  </wa-carousel-item>
</wa-carousel>
<style>
  .vertical {
    max-height: 400px;
  }

  .vertical::part(base) {
    grid-template-areas: 'slides slides pagination';
  }

  .vertical::part(pagination) {
    flex-direction: column;
  }

  .vertical::part(navigation) {
    transform: rotate(90deg);
    display: flex;
  }
</style>
```

### 宽高比

使用 `--aspect-ratio` 自定义属性从默认的 16/9 值自定义轮播视口的大小。

```html {.example}
<wa-carousel class="aspect-ratio" navigation pagination style="--aspect-ratio: 3/2;">
  <wa-carousel-item>
    <img
      alt="阳光照在山上和树上（作者：Adam Kool，Unsplash）"
      src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="一条蜿蜒穿过常绿森林的河流（作者：Luca Bravo，Unsplash）"
      src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="太阳在薰衣草田上空落下（作者：Leonard Cotte，Unsplash）"
      src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="一片草地，太阳在背景中落下（作者：Sapan Patel，Unsplash）"
      src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="山的风景，云层滚滚而来（作者：V2osk，Unsplash）"
      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
    />
  </wa-carousel-item>
</wa-carousel>

<wa-divider></wa-divider>

<wa-select label="宽高比" name="aspect" value="3/2">
  <wa-option value="1/1">1/1</wa-option>
  <wa-option value="3/2">3/2</wa-option>
  <wa-option value="16/9">16/9</wa-option>
</wa-select>

<script>
  (() => {
    const carousel = document.querySelector('wa-carousel.aspect-ratio');
    const aspectRatio = document.querySelector('wa-select[name="aspect"]');

    aspectRatio.addEventListener('change', () => {
      carousel.style.setProperty('--aspect-ratio', aspectRatio.value);
    });
  })();
</script>
```

### 滚动提示

使用 `--scroll-hint` 自定义属性在水平轮播中添加内边距，在垂直轮播中添加块内边距。这将使最接近的幻灯片略微可见，暗示轮播中还有更多项目。

```html {.example}
<wa-carousel class="scroll-hint" pagination style="--scroll-hint: 10%;">
  <wa-carousel-item>
    <img
      alt="阳光照在山上和树上（作者：Adam Kool，Unsplash）"
      src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="一条蜿蜒穿过常绿森林的河流（作者：Luca Bravo，Unsplash）"
      src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="太阳在薰衣草田上空落下（作者：Leonard Cotte，Unsplash）"
      src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="一片草地，太阳在背景中落下（作者：Sapan Patel，Unsplash）"
      src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="山的风景，云层滚滚而来（作者：V2osk，Unsplash）"
      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
    />
  </wa-carousel-item>
</wa-carousel>
```

### 画廊示例

轮播有一个强大的 API，使得扩展和自定义成为可能。这个示例将活动幻灯片与一组缩略图同步，有效地创建了一个画廊风格的轮播。

```html {.example}
<wa-carousel class="carousel-thumbnails" navigation loop>
  <wa-carousel-item>
    <img
      alt="阳光照在山上和树上（作者：Adam Kool，Unsplash）"
      src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="一条蜿蜒穿过常绿森林的河流（作者：Luca Bravo，Unsplash）"
      src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="太阳在薰衣草田上空落下（作者：Leonard Cotte，Unsplash）"
      src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="一片草地，太阳在背景中落下（作者：Sapan Patel，Unsplash）"
      src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="山的风景，云层滚滚而来（作者：V2osk，Unsplash）"
      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
    />
  </wa-carousel-item>
</wa-carousel>

<div class="thumbnails">
  <div class="scroller">
    <img
      alt="缩略图 1"
      class="image active"
      src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
    />
    <img alt="缩略图 2" class="image" src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10" />
    <img alt="缩略图 3" class="image" src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10" />
    <img alt="缩略图 4" class="image" src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10" />
    <img alt="缩略图 5" class="image" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10" />
  </div>
</div>

<style>
  .carousel-thumbnails {
    --slide-aspect-ratio: 3 / 2;
  }

  .thumbnails {
    display: flex;
    justify-content: center;
  }

  .scroller {
    display: flex;
    gap: var(--wa-space-s);
    overflow-x: auto;
    scrollbar-width: none;
    scroll-behavior: smooth;
    scroll-padding: var(--wa-space-s);
  }

  .scroller::-webkit-scrollbar {
    display: none;
  }

  .image {
    width: 64px;
    height: 64px;
    object-fit: cover;

    opacity: 0.3;
    will-change: opacity;
    transition: 250ms opacity;

    cursor: pointer;
  }

  .image.active {
    opacity: 1;
  }
</style>

<script>
  {
    const carousel = document.querySelector('.carousel-thumbnails');
    const scroller = document.querySelector('.scroller');
    const thumbnails = document.querySelectorAll('.image');

    scroller.addEventListener('click', e => {
      const target = e.target;

      if (target.matches('.image')) {
        const index = [...thumbnails].indexOf(target);
        carousel.goToSlide(index);
      }
    });

    carousel.addEventListener('wa-slide-change', e => {
      const slideIndex = e.detail.index;

      [...thumbnails].forEach((thumb, i) => {
        thumb.classList.toggle('active', i === slideIndex);
        if (i === slideIndex) {
          thumb.scrollIntoView({
            block: 'nearest',
          });
        }
      });
    });
  }
</script>
```
