---
title: 示例媒体应用页面
description: 使用 Web Awesome 页面组件的媒体应用示例页面。
layout: blank
eleventyExcludeFromCollections: true
---

<wa-page class="wa-dark">
  <header slot="header">
    <div class="wa-cluster">
      <wa-icon-button name="bars" label="菜单" data-toggle-nav></wa-icon-button>
      <wa-icon name="record-vinyl" family="duotone"></wa-icon>
      <span class="wa-heading-l">radio嘎嘎</span>
    </div>
    <wa-input placeholder="搜索" style="max-inline-size: 100%;">
      <wa-icon slot="start" name="magnifying-glass" ></wa-icon>
    </wa-input>
    <div class="wa-cluster">
      <wa-button appearance="outlined">登录</wa-button>
      <wa-button>注册</wa-button>
    </div>
  </header>
  <div slot="navigation-header" class="wa-split">
    <h2 class="wa-heading-m">为您推荐</h2>
    <wa-icon-button id="settings" name="gear" label="设置"></wa-icon-button>
  </div>
  <nav slot="navigation">
    <h3 class="wa-heading-s">发现更多</h3>
    <ul class="wa-stack wa-gap-0">
      <li>
        <a href="#" class="wa-flank">
          <wa-icon name="house"></wa-icon>
          <span>首页</span>
        </a>
      </li>
      <li>
        <a href="#" class="wa-flank">
          <wa-icon name="sparkles"></wa-icon>
          <span>新品</span>
        </a>
      </li>
      <li>
        <a href="#" class="wa-flank">
          <wa-icon name="tower-broadcast"></wa-icon>
          <span>电台</span>
        </a>
      </li>
    </ul>
    <h3 class="wa-heading-s">我的音乐库</h3>
    <ul class="wa-stack wa-gap-0">
      <li>
        <a href="#" class="wa-flank">
          <wa-icon name="heart"></wa-icon>
          <span>收藏夹</span>
        </a>
      </li>
      <li>
        <a href="#" class="wa-flank">
          <wa-icon name="list-music"></wa-icon>
          <span>播放列表</span>
        </a>
      </li>
      <li>
        <a href="#" class="wa-flank">
          <wa-icon name="microphone-stand"></wa-icon>
          <span>艺术家</span>
        </a>
      </li>
      <li>
        <a href="#" class="wa-flank">
          <wa-icon name="grid-2"></wa-icon>
          <span>专辑</span>
        </a>
      </li>
      <li>
        <a href="#" class="wa-flank">
          <wa-icon name="podcast"></wa-icon>
          <span>播客</span>
        </a>
      </li>
    </ul>
    <h3 class="wa-heading-s">最近播放</h3>
    <ul id="recent" class="wa-stack wa-gap-0">
      <li>
        <a href="#" class="wa-flank">
          <wa-icon name="cassette-tape" style="background: var(--wa-color-red-90); color: var(--wa-color-red-60);"></wa-icon>
          <span>Lo-Fi 电台</span>
        </a>
      </li>
      <li>
        <a href="#" class="wa-flank">
          <wa-icon name="face-awesome" style="background: var(--wa-color-blue-30); color: var(--wa-color-yellow-90);"></wa-icon>
          <span>Awesome 播客</span>
        </a>
      </li>
      <li>
        <a href="#" class="wa-flank">
          <wa-icon name="seedling" style="background: var(--wa-color-green-70); color: var(--wa-color-green-90);"></wa-icon>
          <div class="wa-stack wa-gap-0">
            <span>季节</span>
            <span class="wa-caption-xs">Blister Soul</span>
          </div>
        </a>
      </li>
    </ul>
  </nav>
  <div slot="main-header">
    <wa-icon-button id="back" name="chevron-left" label="返回"></wa-icon-button>
    <wa-tooltip for="back" placement="bottom" distance="2">返回</wa-tooltip>
    <div class="wa-cluster">
      <wa-icon-button id="favorite" name="heart" variant="regular" label="收藏"></wa-icon-button>
      <wa-tooltip for="favorite" placement="bottom" distance="2">收藏</wa-tooltip>
      <wa-icon-button id="options" name="ellipsis" label="选项"></wa-icon-button>
      <wa-tooltip for="options" placement="bottom" distance="2">选项</wa-tooltip>
    </div>
  </div>
  <main>
    <div class="wa-stack wa-gap-3xl">
      <div class="wa-flank wa-gap-3xl" style="--flank-size: 35%; --content-percentage: 55%;">
        <div class="wa-frame wa-border-radius-l" style="max-inline-size: 40ch;">
          <img src="https://images.unsplash.com/photo-1732430579016-8d5e5ebd3c99?q=20" alt="回家过节专辑封面" />
        </div>
        <div class="wa-split:column wa-align-items-start">
          <div class="wa-stack" style="margin-block: auto;">
            <h1 class="wa-heading-4xl">回家过节</h1>
            <a href="#" class="wa-heading-l">夏尔合唱团</a>
            <div class="wa-cluster wa-caption-s wa-gap-2xs">
              <span>节日</span>
              <span>&bull;</span>
              <span>2024</span>
              <span>&bull;</span>
              <span>12 首歌曲，41 分 9 秒</span>
            </div>
          </div>
          <div id="play-controls" class="wa-split wa-gap-xl">
            <div class="wa-cluster wa-gap-xl">
              <wa-icon-button name="play" label="播放"></wa-icon-button>
              <wa-icon-button name="shuffle" label="随机播放"></wa-icon-button>
            </div>
            <wa-icon-button name="plus" label="添加到音乐库"></wa-icon-button>
          </div>
        </div>
      </div>
      <ol class="wa-stack wa-gap-0">
        <li class="wa-split">
          <span class="wa-flank">
            <wa-icon name="1"></wa-icon>
            <span>Fa-La-La 联谊会</span>
          </span>
          <span class="wa-cluster">
            <span class="wa-caption-s">3:27</span>
            <wa-icon-button name="ellipsis" label="歌曲选项"></wa-icon-button>
          </span>
        </li>
        <li class="wa-split">
          <span class="wa-flank">
            <wa-icon name="2"></wa-icon>
            <span>雪橇之旅</span>
          </span>
          <span class="wa-cluster">
            <span class="wa-caption-s">2:36</span>
            <wa-icon-button name="ellipsis" label="歌曲选项"></wa-icon-button>
          </span>
        </li>
        <li class="wa-split">
          <span class="wa-flank">
            <wa-icon name="3"></wa-icon>
            <span>我想要的圣诞节只有炖菜</span>
          </span>
          <span class="wa-cluster">
            <span class="wa-caption-s">2:51</span>
            <wa-icon-button name="ellipsis" label="歌曲选项"></wa-icon-button>
          </span>
        </li>
        <li class="wa-split">
          <span class="wa-flank">
            <wa-icon name="4"></wa-icon>
            <span>在 Ent 周围摇摆</span>
          </span>
          <span class="wa-cluster">
            <span class="wa-caption-s">3:05</span>
            <wa-icon-button name="ellipsis" label="歌曲选项"></wa-icon-button>
          </span>
        </li>
        <li class="wa-split">
          <span class="wa-flank">
            <wa-icon name="5"></wa-icon>
            <span>快乐，你知道吗？</span>
          </span>
          <span class="wa-cluster">
            <span class="wa-caption-s">1:56</span>
            <wa-icon-button name="ellipsis" label="歌曲选项"></wa-icon-button>
          </span>
        </li>
        <li class="wa-split">
          <span class="wa-flank">
            <wa-icon name="6"></wa-icon>
            <span>快跑，Shadowfax</span>
          </span>
          <span class="wa-cluster">
            <span class="wa-caption-s">3:32</span>
            <wa-icon-button name="ellipsis" label="歌曲选项"></wa-icon-button>
          </span>
        </li>
        <li class="wa-split">
          <span class="wa-flank">
            <wa-icon name="7"></wa-icon>
            <span>你这个卑鄙的 Grima</span>
          </span>
          <span class="wa-cluster">
            <span class="wa-caption-s">2:46</span>
            <wa-icon-button name="ellipsis" label="歌曲选项"></wa-icon-button>
          </span>
        </li>
        <li class="wa-split">
          <span class="wa-flank">
            <wa-icon name="8"></wa-icon>
            <span>来吧，所有忠诚的信徒</span>
          </span>
          <span class="wa-cluster">
            <span class="wa-caption-s">3:27</span>
            <wa-icon-button name="ellipsis" label="歌曲选项"></wa-icon-button>
          </span>
        </li>
        <li class="wa-split">
          <span class="wa-flank">
            <wa-icon name="9"></wa-icon>
            <span>你听到我听到的了吗</span>
          </span>
          <span class="wa-cluster">
            <span class="wa-caption-s">2:13</span>
            <wa-icon-button name="ellipsis" label="歌曲选项"></wa-icon-button>
          </span>
        </li>
        <li class="wa-split">
          <span class="wa-flank">
            <span class="wa-cluster wa-gap-3xs">
              <wa-icon name="1"></wa-icon>
              <wa-icon name="0"></wa-icon>
            </span>
            <span>号角颂歌</span>
          </span>
          <span class="wa-cluster">
            <span class="wa-caption-s">2:55</span>
            <wa-icon-button name="ellipsis" label="歌曲选项"></wa-icon-button>
          </span>
        </li>
        <li class="wa-split">
          <span class="wa-flank">
            <span class="wa-cluster wa-gap-3xs">
              <wa-icon name="1"></wa-icon>
              <wa-icon name="1"></wa-icon>
            </span>
            <span>平安夜</span>
          </span>
          <span class="wa-cluster">
            <span class="wa-caption-s">3:10</span>
            <wa-icon-button name="ellipsis" label="歌曲选项"></wa-icon-button>
          </span>
        </li>
        <li class="wa-split">
          <span class="wa-flank">
            <span class="wa-cluster wa-gap-3xs">
              <wa-icon name="1"></wa-icon>
              <wa-icon name="2"></wa-icon>
            </span>
            <span>巫师仙境</span>
          </span>
          <span class="wa-cluster">
            <span class="wa-caption-s">3:22</span>
            <wa-icon-button name="ellipsis" label="歌曲选项"></wa-icon-button>
          </span>
        </li>
      </ol>
    </div>
  </main>
  <div slot="main-footer" class="wa-grid wa-gap-xl">
    <h2 class="wa-heading-3xl">您可能还喜欢</h2>
    <div class="wa-stack wa-gap-xs">
      <div class="wa-frame wa-border-radius-l">
        <img src="https://images.unsplash.com/photo-1675219119611-40323b738563?q=20" alt="" />
      </div>
      <span class="wa-heading-m">灯节</span>
      <span class="wa-caption-xs">电台</span>
    </div>
    <div class="wa-stack wa-gap-xs">
      <div class="wa-frame wa-border-radius-l">
        <img src="https://images.unsplash.com/photo-1481930916222-5ec4696fc0f2?q=20" alt="" />
      </div>
      <span class="wa-heading-m">节日欢乐</span>
      <span class="wa-caption-xs">精选播放列表</span>
    </div>
    <div class="wa-stack wa-gap-xs">
      <div class="wa-frame wa-border-radius-l">
        <img src="https://images.unsplash.com/photo-1667514627762-521b1c815a89?q=20" alt="" />
      </div>
      <span class="wa-heading-m">夏尔童谣</span>
      <span class="wa-caption-xs">夏尔合唱团</span>
    </div>
  </div>
</wa-page>

<style>
  wa-page {
    --menu-width: 18rem;
    --wa-tooltip-arrow-size: 0;
    background-color: var(--wa-color-surface-lowered);
  }

  wa-page[view='mobile'] {
    --menu-width: auto;
  }
  wa-page,
  [slot='header'],
  wa-page[view='desktop'] [slot*='navigation'] {
    background-color: var(--wa-color-surface-lowered);
  }
  wa-page[view='mobile'] [slot*='navigation'] {
    padding: 0;
  }
  wa-page::part(base) {
    background-color: var(--wa-color-surface-lowered);
  }
  [slot='header'] {
    background: linear-gradient(to bottom, var(--wa-color-surface-raised), var(--wa-color-surface-lowered));
  }
  [slot='navigation-header'],
  [slot='main-header'] {
    padding-block-end: 0;
  }
  [slot='navigation'] a {
    --wa-color-text-link: var(--wa-color-text-normal);
    --wa-link-decoration-default: none;
    --wa-link-decoration-hover: none;
    --flank-size: 2rem;
    font-weight: var(--wa-font-weight-action);
    gap: 0.5rem;
  }
  [slot='navigation'] ul {
    list-style: none;
    margin: 0;
  }
  [slot='navigation'] ul a {
    border-radius: var(--wa-border-radius-m);
    padding: var(--wa-space-xs);
  }
  [slot='navigation'] ul a:hover,
  main ol li:hover {
    background-color: color-mix(in oklab, var(--wa-color-surface-default), var(--wa-color-brand-fill-quiet));
  }
  [slot='navigation'] wa-icon {
    align-items: center;
    aspect-ratio: 1;
    color: var(--wa-color-brand-fill-loud);
    display: flex;
    height: var(--flank-size);
    justify-content: center;
  }
  [slot='navigation'] #recent wa-icon {
    border-radius: var(--wa-border-radius-s);
  }
  [slot='main-header'] {
    border-block-start: var(--wa-border-width-s) var(--wa-border-style) var(--wa-color-surface-border);
    border-inline: var(--wa-border-width-s) var(--wa-border-style) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-l) var(--wa-border-radius-l) 0 0;
  }
  main,
  [slot*='main'] {
    margin-inline: var(--wa-space-m);
  }
  main ol li {
    padding: var(--wa-space-m);
  }
  main ol li .wa-flank {
    --flank-size: 2rem;
  }
  main ol li:not(:first-child) {
    border-block-start: var(--wa-border-width-s) var(--wa-border-style) var(--wa-color-surface-border);
  }
  main,
  [slot='main-footer'] {
    border-inline: var(--wa-border-width-s) var(--wa-border-style) var(--wa-color-surface-border);
  }
  main,
  [slot='main-header'] {
    background-color: var(--wa-color-surface-raised);
  }
  #play-controls wa-icon-button::part(base) {
    border: var(--wa-border-width-l) var(--wa-border-style) currentColor;
    border-radius: var(--wa-border-radius-circle);
    font-size: 1.5rem;
  }
  #play-controls wa-icon-button[name="play"]::part(base) {
    background-color: var(--wa-color-brand-fill-loud);
    border: none;
    color: var(--wa-color-brand-on-loud);
    font-size: 3rem;
    padding: 1.5rem;
  }
</style>
