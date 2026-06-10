---
title: 示例文档页面
description: 使用 @SITE_NAME@ 页面组件的文档网站示例页面。
layout: blank
eleventyExcludeFromCollections: true
---

<style>
  wa-page {
    --menu-width: 15rem;
    --aside-width: 15rem;
  }

  wa-page[view='mobile'] {
    --menu-width: auto;
    --aside-width: auto;
  }
  wa-page[view='mobile'] [slot='aside'] {
    display: none;
  }
  wa-page[view='mobile'] #brand-name {
    display: none;
  }
  wa-page[view='mobile'] #search {
    display: none;
  }
  [slot='banner'] {
    --wa-color-text-link: var(--wa-color-neutral-on-loud);
    background-color: var(--wa-color-neutral-fill-loud);
  }
  [slot='header'] {
    --wa-link-decoration-default: none;
    border-block-end: var(--wa-border-width-s) var(--wa-border-style) var(--wa-color-surface-border);
  }
  [slot*='header'] a {
    font-weight: var(--wa-font-weight-action);
  }
  [slot='subheader'] {
    background-color: var(--wa-color-surface-lowered);
    border-block-end: var(--wa-border-width-s) var(--wa-border-style) var(--wa-color-surface-border);
  }
  [slot='navigation-header'] {
    border-block-end: var(--wa-border-width-s) var(--wa-border-style) var(--wa-color-surface-border);
  }
  wa-page[view='desktop'] [slot*='navigation'] {
    border-inline-end: var(--wa-border-width-s) var(--wa-border-style) var(--wa-color-surface-border);
  }
  [slot*='navigation'] a {
    --wa-color-text-link: var(--wa-color-text-normal);
  }
  [slot='navigation-footer'] {
    border-block-start: var(--wa-border-width-s) var(--wa-border-style) var(--wa-color-surface-border);
  }
  [slot='main-header'],
  main,
  [slot='main-footer'] {
    max-inline-size: 60rem;
    margin-inline: auto;
  }
  [slot='main-footer'] {
    border-block-start: var(--wa-border-width-s) var(--wa-border-style) var(--wa-color-surface-border);
  }
  [slot='footer'] {
    --wa-color-text-link: var(--wa-color-text-quiet);
    background-color: var(--wa-color-surface-lowered);
    font-size: var(--wa-font-size-s);
  }
</style>

<wa-page mobile-breakpoint="920">
  <div slot="banner" class="wa-body-s">
    <a href="#" class="wa-cluster wa-align-items-baseline wa-gap-xs" style="flex-wrap: nowrap;">
      <wa-icon name="gift"></wa-icon>
      <span>为假期献上爱心：立即捐赠，让您的爱心翻倍。</span>
    </a>
  </div>
  <header slot="header" class="wa-split">
    <div class="wa-cluster">
      <wa-icon name="feather-pointed" style="color: var(--wa-color-brand-fill-loud); font-size: 1.5em;"></wa-icon>
      <span id="brand-name" class="wa-heading-m">奥杜邦全球</span>
      <a href="#">我们的工作</a>
      <a href="#">关于我们</a>
      <a href="#">探索发现</a>
      <a href="#">参与其中</a>
    </div>
    <div class="wa-cluster wa-gap-xs">
      <wa-button size="s" variant="brand" appearance="outlined">找到您当地的奥杜邦</wa-button>
      <wa-button size="s" variant="brand">捐赠</wa-button>
    </div>
  </header>
  <nav slot="subheader">
    <div class="wa-cluster" style="flex-wrap: nowrap;">
      <wa-icon-button data-toggle-nav name="bars" label="菜单"></wa-icon-button>
      <wa-breadcrumb class="wa-font-size-s">
        <wa-breadcrumb-item>野外指南</wa-breadcrumb-item>
        <wa-breadcrumb-item>猫头鹰</wa-breadcrumb-item>
        <wa-breadcrumb-item>大角鸮</wa-breadcrumb-item>
      </wa-breadcrumb>
    </div>
    <wa-input id="search" placeholder="搜索" size="s" style="max-inline-size: 12rem;">
      <wa-icon slot="start" name="magnifying-glass"></wa-icon>
    </wa-input>
  </nav>
  <nav slot="navigation-header">
    <div class="wa-flank">
      <wa-avatar image="https://images.unsplash.com/photo-1544648720-132573cb590d?q=20" label=""></wa-avatar>
      <div class="wa-stack wa-gap-3xs">
        <span class="wa-heading-m">大角鸮</span>
        <span class="wa-caption-xs" lang="la"><em>Bubo virginianus</em></span>
      </div>
    </div>
  </nav>
  <nav slot="navigation">
    <a href="#identification">识别特征</a>
    <a href="#range">分布范围和栖息地</a>
    <a href="#behavior">行为习性</a>
    <a href="#conservation">保护状况</a>
  </nav>
  <nav slot="navigation-footer">
    <a href="#" class="wa-flank" style="--flank-size: 1.25em;">
      <wa-icon name="camera"></wa-icon>
      <span>图片画廊</span>
    </a>
    <a href="#" class="wa-flank" style="--flank-size: 1.25em;">
      <wa-icon name="map-location-dot"></wa-icon>
      <span>交互式分布图</span>
    </a>
  </nav>
  <header slot="main-header">
    <div class="wa-flank:end wa-border-radius-l wa-dark" style="background-color: var(--wa-color-surface-lowered); --content-percentage: 35%; padding: var(--wa-space-m);">
      <div class="wa-stack" style="margin: var(--wa-space-2xl);">
        <h1>大角鸮</h1>
        <wa-divider></wa-divider>
        <div class="wa-cluster wa-gap-xs">
          <wa-tag size="s">猫头鹰</wa-tag>
          <wa-tag size="s">猛禽</wa-tag>
          <wa-tag size="s">更新世鸟类</wa-tag>
        </div>
        <div class="wa-flank">
          <wa-icon name="ruler"></wa-icon>
          <span class="wa-caption-s">体长 21.5 英寸 | 翼展 48.5 英寸</span>
        </div>
        <div class="wa-flank">
          <wa-icon name="earth-americas"></wa-icon>
          <span class="wa-caption-s">北美洲（广泛分布）、中美洲（有限）、南美洲（有限）</span>
        </div>
        <div class="wa-flank">
          <wa-icon name="shield-heart"></wa-icon>
          <span class="wa-caption-s">无危</span>
        </div>
      </div>
      <div class="wa-frame" style="wa-border-radius-l max-inline-size: 40ch;">
        <img src="https://images.unsplash.com/photo-1544648720-132573cb590d?q=20" alt="" />
      </div>
    </div>
  </header>
  <main class="wa-body-l">
    <h2 id="identification">识别特征</h2>
    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Eget habitant scelerisque lectus ultrices nascetur aliquet sapien primis. Cursus sapien fusce semper nulla elit sociosqu lectus per sem. Sem ad porttitor dictum nisl pharetra tortor convallis. Sit molestie hendrerit porta dictum tortor posuere euismod magna. Mauris suspendisse pharetra finibus; eleifend etiam ridiculus.</p>
    <h2 id="range">分布范围和栖息地</h2>
    <p>Diam sed ipsum pretium porttitor class cubilia elementum. Blandit felis ligula habitant ultricies vulputate rutrum lacus commodo pulvinar. Nostra semper placerat lectus in dis eu. Sagittis ipsum placerat rhoncus lacus id eget. Erat pharetra aptent enim, augue accumsan ultrices inceptos habitasse. Senectus id maximus parturient tellus; fermentum posuere vulputate luctus. Ac tempus dapibus vehicula ligula ullamcorper sit duis.</p>
    <h2 id="behavior">行为习性</h2>
    <p>Erat vitae luctus arcu taciti malesuada pretium arcu justo primis. Cubilia vitae maecenas congue velit id netus arcu. Dictum vel pellentesque taciti fermentum risus consectetur amet. Faucibus commodo habitasse sem maximus praesent purus, dignissim tristique porta. Platea magna justo ipsum ut metus ac facilisi. Imperdiet laoreet pharetra maximus lacus tortor suscipit. Nam quisque iaculis orci porttitor pellentesque rhoncus. Molestie sagittis tincidunt quisque nisi non urna conubia.</p>
    <h2 id="conservation">保护状况</h2>
    <p>Nullam magna quam quisque eu varius integer. Inceptos donec facilisi risus himenaeos semper mollis habitasse. Vehicula lacus vivamus euismod pharetra mollis dictum. Ante ex tortor elementum eleifend habitasse orci aliquam. Fames erat senectus fames etiam dapibus cursus.</p>
  </main>
  <footer slot="main-footer">
    <section>
      <h2 class="wa-heading-l">参考来源</h2>
      <ul class="wa-body-s">
        <li><cite><a href="https://www.audubon.org/field-guide/bird/great-horned-owl" target="_blank" rel="noopener">大角鸮</a></cite>，国家奥杜邦协会。检索于 2024 年 12 月 5 日。</li>
        <li><cite><a href="https://www.allaboutbirds.org/guide/Great_Horned_Owl/" target="_blank" rel="noopener">大角鸮</a></cite>，康奈尔鸟类实验室全关于鸟类。检索于 2024 年 12 月 5 日。</li>
        <li>Armistead, G. L. (2015). <cite>宾夕法尼亚州鸟类野外指南</cite>。Scott &amp; Nix, Inc.</li>
      </ul>
    </section>
  </footer>
  <aside slot="aside">
    <h2 class="wa-heading-l">发现更多鸟类</h2>
    <wa-card>
      <div slot="media" class="wa-frame">
        <img src="https://images.unsplash.com/photo-1635254859323-65b78408dcca?q=20" alt="" />
      </div>
      <div class="wa-stack wa-gap-3xs">
        <span class="wa-heading-m">长耳鸮</span>
        <span class="wa-caption-xs" lang="la"><em>Asio otus</em></span>
      </div>
    </wa-card>
    <wa-card>
      <div slot="media" class="wa-frame">
        <img src="https://images.unsplash.com/photo-1661350356618-f5915c7b6a3c?q=20" alt="" />
      </div>
      <div class="wa-stack wa-gap-3xs">
        <span class="wa-heading-m">北鹰鸮</span>
        <span class="wa-caption-xs" lang="la"><em>Surnia ulula</em></span>
      </div>
    </wa-card>
    <wa-card>
      <div slot="media" class="wa-frame">
        <img src="https://images.unsplash.com/photo-1660307777355-f08bced145d3?q=20" alt="" />
      </div>
      <div class="wa-stack wa-gap-3xs">
        <span class="wa-heading-m">金雕</span>
        <span class="wa-caption-xs" lang="la"><em>Aquila chrysaetos</em></span>
      </div>
    </wa-card>
  </aside>
  <footer slot="footer" class="wa-grid wa-gap-xl">
    <div class="wa-cluster" style="flex-wrap: nowrap;">
      <wa-icon name="feather-pointed" style="font-size: 1.5em;"></wa-icon>
      <span class="wa-heading-m">奥杜邦全球</span>
    </div>
    <div class="wa-stack">
      <h3 class="wa-heading-s">我们的工作</h3>
      <a href="#">栖息地恢复</a>
      <a href="#">迁徙科学</a>
      <a href="#">倡导</a>
    </div>
    <div class="wa-stack">
      <h3 class="wa-heading-s">关于我们</h3>
      <a href="#">我们的历史</a>
      <a href="#">领导团队</a>
      <a href="#">财务报告</a>
    </div>
    <div class="wa-stack">
      <h3 class="wa-heading-s">探索发现</h3>
      <a href="#">野外指南</a>
      <a href="#">图片搜索</a>
      <a href="#">工具和资源</a>
    </div>
    <div class="wa-stack">
      <h3 class="wa-heading-s">参与其中</h3>
      <a href="#">认养一只鸟</a>
      <a href="#">您当地的奥杜邦</a>
      <a href="#">青少年奥杜邦营</a>
    </div>
  </footer>
</wa-page>
