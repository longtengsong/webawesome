---
title: 头像
layout: component
category: Media
synonyms:
  - profile picture
  - user image
  - profile photo
  - user icon
  - 头像
  - 用户图片
  - 个人头像
use-cases:
  - user profile
  - initials
  - placeholder image
  - gravatar
  - 用户个人资料
  - 首字母
  - 占位图片
---

默认情况下，会显示一个通用图标。你可以通过添加自定义图标、首字母和图片来个性化头像。你应该始终为辅助设备提供 `label`。

```html {.example}
<wa-avatar label="用户头像"></wa-avatar>
```

## 示例

### 图片

要使用图片作为头像，请设置 `image` 和 `label` 属性。这将优先于首字母和图标显示。
头像图片可以通过将 `loading` 属性设置为 `lazy` 来延迟加载。

```html {.example}
<wa-avatar
  image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  label="一只灰色虎斑小猫向下看的头像"
></wa-avatar>
<wa-avatar
  image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  label="一只灰白色小猫在灰色织物上的头像"
  loading="lazy"
></wa-avatar>
```

### 首字母

当你没有可用的图片时，可以设置 `initials` 属性来显示比图标更个性化的内容。

```html {.example}
<wa-avatar initials="WA" label="带有首字母的头像：WA"></wa-avatar>
```

### 自定义图标

当没有设置图片或首字母时，会显示一个图标。默认头像显示一个通用的"用户"图标，但你可以使用 `icon` 插槽来自定义它。

```html {.example}
<wa-avatar label="带有图片图标的头像">
  <wa-icon slot="icon" name="image" variant="solid"></wa-icon>
</wa-avatar>

<wa-avatar label="带有档案图标的头像">
  <wa-icon slot="icon" name="archive" variant="solid"></wa-icon>
</wa-avatar>

<wa-avatar label="带有公文包图标的头像">
  <wa-icon slot="icon" name="briefcase" variant="solid"></wa-icon>
</wa-avatar>
```

### 形状

头像可以使用 `shape` 属性来设定形状。

```html {.example}
<wa-avatar shape="square" label="方形头像"></wa-avatar>
<wa-avatar shape="rounded" label="圆角头像"></wa-avatar>
<wa-avatar shape="circle" label="圆形头像"></wa-avatar>
```

### 头像组

你可以使用几行 CSS 来将头像分组。

```html {.example}
<div class="avatar-group">
  <wa-avatar
    image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
    label="头像 1 共 4"
  ></wa-avatar>

  <wa-avatar
    image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
    label="头像 2 共 4"
  ></wa-avatar>

  <wa-avatar
    image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
    label="头像 3 共 4"
  ></wa-avatar>

  <wa-avatar
    image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
    label="头像 4 共 4"
  ></wa-avatar>
</div>

<style>
  .avatar-group wa-avatar:not(:first-of-type) {
    margin-left: calc(-1 * var(--wa-space-m));
  }

  .avatar-group wa-avatar {
    border: solid 2px var(--wa-color-surface-default);
  }
</style>
```
