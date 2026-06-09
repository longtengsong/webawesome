---
title: Web Awesome
description: 使用 Web Awesome 构建更好的应用，来自 Font Awesome 的开源 Web 组件库。
layout: page
---

<style>
  .title,
  .anchor-heading a,
  #outline-expandable {
    display: none;
  }
  wa-page > main {
    --content-width: 56rem;
    --content-padding-inline: 2rem;
    --content-flow-spacing: 4rem;
    max-width: 100%;
    padding: 0 !important;
    & p, h1, h2, h3, h4, h5, h6 {
      margin: 0;
    }
  }

  /** this technically relies on insertion order. */
  @media screen and (max-width: 768px) {
    wa-page > main {
      --content-flow-spacing: 3rem !important;
    }
  }

  .font-brand {
    font-family: cera-round-pro;
  }
  .emphasis {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: var(--wa-brand-orange);
      border-radius: var(--wa-border-radius-pill);
      width: 100%;
      height: 0.1em;
    }
  }
  .hero-background {
    background-color: var(--wa-brand-orange);
    background-image: linear-gradient(color-mix(in oklab, var(--wa-brand-orange), orangered 40%) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--wa-brand-orange), orangered 40%) 1px, transparent 1px);
    background-size: 2rem 2rem;
    color: white;
    padding: calc(var(--content-flow-spacing) * 1.875) 0 var(--content-flow-spacing) 0;
  }
  .hero-content {
    max-width: var(--content-width);
    margin-inline: auto;
    padding-inline: var(--content-padding-inline);
    & > * + * {
      margin-block-start: 2rem;
    }
    & h1 {
      font-size: clamp(2.5625rem, 13vw, 3.25rem);
    }
    & .emphasis::after {
      background-color: var(--wa-brand-grey);
    }

    .logo-app {
      color: var(--wa-color-brand-on-loud);
    }
  }
  .hero-cta {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    background-color: var(--wa-brand-grey);
    border-radius: 0.75rem;
    font-size: 0.875rem;
    padding: 1.5rem;
    & > *:first-child {
      flex: 1 1 67%;
    }
    & wa-button {
      &::part(base) {
        border-color: black;
        border-width: 0.125rem;
        box-shadow: 0 0.25rem 0 0 black;
        flex: 1 1 auto;
        height: 2.5rem;
      }
      &:active:not([disabled])::part(base) {
        box-shadow: 0 0 0 0 transparent;
        transform: translateY(0.25rem);
      }
    }
  }
  .home-wrapper {
    max-width: var(--content-width);
    margin-block: var(--content-flow-spacing);
    margin-inline: auto;
    padding-inline: var(--content-padding-inline);
  }
  .home-wrapper > * + * {
    margin-block-start: var(--content-flow-spacing);
  }
  .summary {
    background-color: var(--wa-brand-grey);
    border-radius: 1.125rem;
    color: white;
    padding: var(--content-flow-spacing);
    & > * + * {
      margin-block-start: 2rem;
    }
    & .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(30ch, 100%), 1fr));
      gap: 2rem;
      & h3 {
        font-size: 1rem;
      }
      & p {
        font-size: 0.875rem;
      }
    }
  }
  .split-block {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(30ch, 100%), 1fr));
    column-gap: 4rem;
    row-gap: 2rem;
    align-items: center;
    & > * > * + * {
      margin-block-start: 1rem;
    }
  }
  .icon-heading {
    > wa-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      block-size: 2em;
      inline-size: 2em;
      background-color: var(--wa-color-neutral-fill-loud);
      color: var(--wa-color-neutral-on-loud);
      border-radius: 0.25rem;
      padding: 0.5em;

      &.brand-orange {
        background-color: var(--wa-brand-orange);
        color: white;
      }
    }
    & h3 {
      font-size: 1rem;
    }
  }
  footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 0.875rem;

    & .wa-crown svg {
      width: 2rem;
    }
    & .tagline {
      font-size: 1rem;
    }
    & .attribution {
      align-self: flex-start;
      & .button-list {
        display: flex;
        flex-wrap: wrap;
        flex: 1 1 auto;
        gap: 0.5rem;
      }
      & wa-button::part(base) {
        height: 1.5rem;
        font-size: 0.75rem;
      }
    }
  }
  wa-button.tile::part(base) {
    border-color: var(--wa-color-surface-border);
    border-radius: 0.75rem;
    color: var(--wa-color-text-normal);
    height: 100%;
    line-height: var(--wa-line-height-normal);
    padding: 1.25rem;
    text-align: left;
    white-space: wrap;
  }
  wa-button.tile::part(label) {
    width: 100%;
  }
  wa-button.tile {
    width: 100%;
    height: 100%;
    & h3 {
      font-size: 1rem;
    }
    & .icon-heading + wa-icon {
      color: var(--wa-color-text-quiet);
    }
    & p {
      font-size: 0.875rem;
      font-weight: var(--wa-font-weight-normal);
    }
    &::part(label) {
      flex-direction: column;
    }
  }
  wa-callout {
    --spacing: 1.25rem;
    height: 100%;

    & .icon-heading wa-icon {
      background-color: var(--wa-color-brand-fill-normal);
      color: var(--wa-color-brand-on-normal);
    }

    & p {
      font-size: 0.875rem;
    }
  }
</style>

<div class="hero-background">
  <div class="hero-content">
    <wa-icon name="web-awesome" family="brands" class="logo-app wa-heading-4xl"></wa-icon>
    <h1 class="font-brand">用开源 Web 组件创造<span class="emphasis">卓越</span>体验</h1>
    <div class="hero-cta">
      {%- raw -%}
        {% if currentUser.hasPro %}
          <span class="wa-font-size-l" style="text-align: center; width: 100%;">感谢您成为 {{ site.namePro }} 订阅用户！</span>
        {% else %}
          <div class="wa-stack wa-gap-xs">
            <h3 class="wa-heading-m">使用 {{ site.namePro }} 获取更多！</h3>
            <p>解锁 Pro 专属主题、组件、模式以及 Theme Builder 等优秀服务。</p>
          </div>
          <wa-button class="wa-dark" size="s" href="/purchase">
            <wa-icon slot="start" name="rocket-launch"></wa-icon>
            购买 Pro
          </wa-button>
        {% endif %}
      {% endraw %}
    </div>
  </div>
</div>

<div class="home-wrapper">
  <wa-button href="/docs/" appearance="outlined" class="tile">
    <div class="wa-stack">
      <div class="wa-split">
        <div class="wa-cluster icon-heading">
          <wa-icon name="pen-ruler" class="brand-orange"></wa-icon>
          <h3>开始使用</h3>
        </div>
        <wa-icon name="arrow-right"></wa-icon>
      </div>
      <p>查看我们的安装指南，开始使用 Web Awesome 构建应用。</p>
    </div>
  </wa-button>
  <wa-divider></wa-divider>
  <div class="summary">
    <h2 class="font-brand"><span class="emphasis">Web</span> Awesome 是什么？</h2>
    <p>Web Awesome 是最大的开源 UI 组件库，精心设计、高度可定制，且与框架无关。</p>
    <div class="grid">
      <div class="wa-stack">
        <div class="wa-cluster icon-heading">
          <wa-icon name="code" class="brand-orange"></wa-icon>
          <h3>完全原生</h3>
        </div>
        <p>基于 Web 标准构建，经得起未来考验。无需多余工具，没有第三方臃肿。</p>
      </div>
      <div class="wa-stack">
        <div class="wa-cluster icon-heading">
          <wa-icon name="palette" class="brand-orange"></wa-icon>
          <h3>完全可定制</h3>
        </div>
        <p>使用始终与您的主题保持一致适配的组件，展示您自己的风格。</p>
      </div>
      <div class="wa-stack">
        <div class="wa-cluster icon-heading">
          <wa-icon name="wheelchair-move" class="brand-orange"></wa-icon>
          <h3>无障碍优先</h3>
        </div>
        <p>构建每个人都能使用的网站。设计上力求包容且人人可用。</p>
      </div>
      <div class="wa-stack">
        <div class="wa-cluster icon-heading">
          <wa-icon name="handshake-simple" class="brand-orange"></wa-icon>
          <h3>自豪地开源</h3>
        </div>
        <p>随心使用 {{ site.nameCore }}。永远免费，永远开源。</p>
      </div>
    </div>
  </div>

  <div class="split-block">
    <div>
      <h2 class="font-brand"><span class="emphasis">您</span>让 Web Awesome 变得卓越</h2>
      <p>Web Awesome 始于一个由开发者社区贡献推动的开源项目，我们希望能够保持下去。Web Awesome 的核心——现在和将来——始终是免费且开源的。</p>
      <p>无论您是开发者、设计师，还是初出茅庐的技术爱好者，我们都希望您能加入讨论。</p>
    </div>
    <div>
      <wa-button href="{{ site.github.repo }}" rel="noopener noreferrer" target="_blank" appearance="filled" class="tile">
        <div class="wa-stack">
          <div class="wa-split">
            <div class="wa-cluster icon-heading">
              <wa-icon family="brands" name="github"></wa-icon>
              <h3>GitHub</h3>
            </div>
            <wa-icon name="arrow-up-right"></wa-icon>
          </div>
          <p>通过提交 Issue、参与讨论或创建 PR 来参与其中。</p>
        </div>
      </wa-button>
      <wa-button href="{{ site.urls.discord }}" rel="noopener noreferrer" target="_blank" appearance="filled" class="tile">
        <div class="wa-stack">
          <div class="wa-split">
            <div class="wa-cluster icon-heading">
              <wa-icon family="brands" name="discord"></wa-icon>
              <h3>Discord</h3>
            </div>
            <wa-icon name="arrow-up-right"></wa-icon>
          </div>
          <p>分享作品、提问交流，与其他 Web Awesome 开发者共同探索创意。</p>
        </div>
      </wa-button>
      <wa-button href="mailto:{{ site.emails.hello }}" appearance="filled" class="tile">
        <div class="wa-split">
          <div class="wa-cluster icon-heading">
            <wa-icon name="envelope-open"></wa-icon>
            <h3 class="wa-cluster wa-gap-xs">
              <span>{{ site.emails.hello }}</span>
              <wa-icon name="hand-wave" variant="regular"></wa-icon>
            </h3>
          </div>
          <wa-icon name="arrow-up-right"></wa-icon>
        </div>
      </wa-button>
    </div>
  </div>

<wa-divider></wa-divider>

  <div class="wa-stack wa-gap-xl">
    <h2 class="wa-cluster font-brand">
      <wa-icon name="hashtag" style="color: var(--wa-brand-orange);"></wa-icon>
      <span>关注我们</span>
    </h2>
    <div class="wa-grid" style="--min-column-size: 30ch;">
      <wa-button href="{{ site.urls.bluesky }}" rel="noopener noreferrer" target="_blank" appearance="filled" class="tile">
        <div class="wa-split">
          <div class="wa-cluster icon-heading">
            <wa-icon family="brands" name="bluesky"></wa-icon>
            <h3>Bluesky</h3>
          </div>
          <wa-icon name="arrow-up-right"></wa-icon>
        </div>
      </wa-button>
      <wa-button href="{{ site.urls.mastodon }}" rel="noopener noreferrer" target="_blank" appearance="filled" class="tile">
        <div class="wa-split">
          <div class="wa-cluster icon-heading">
            <wa-icon family="brands" name="mastodon"></wa-icon>
            <h3>Mastodon</h3>
          </div>
          <wa-icon name="arrow-up-right"></wa-icon>
        </div>
      </wa-button>
      <wa-button href="{{ site.urls.x }}" rel="noopener noreferrer" target="_blank" appearance="filled" class="tile">
        <div class="wa-split">
          <div class="wa-cluster icon-heading">
            <wa-icon family="brands" name="x-twitter"></wa-icon>
            <h3>Twitter (X)</h3>
          </div>
          <wa-icon name="arrow-up-right"></wa-icon>
        </div>
      </wa-button>
      <wa-button href="{{ site.urls.threads }}" rel="noopener noreferrer" target="_blank" appearance="filled" class="tile">
        <div class="wa-split">
          <div class="wa-cluster icon-heading">
            <wa-icon family="brands" name="threads"></wa-icon>
            <h3>Threads</h3>
          </div>
          <wa-icon name="arrow-up-right"></wa-icon>
        </div>
      </wa-button>
    </div>
  </div>

<wa-divider></wa-divider>

  <footer>
    <wa-icon name="web-awesome" family="brands" class="logo-app wa-body-l"></wa-icon>
    <div class="split-block">
      <div>
        <strong class="font-brand tagline">一起创造卓越</strong>
        <p>Web Awesome 是来自 <a href="{{ site.siblings.fontAwesome.url }}">{{ site.siblings.fontAwesome.name }}</a> 的开发极客们打造的设计系统平台和开源 Web 组件库。</p>
      </div>
      <div class="attribution">
        <span>特别鸣谢</span>
        <div class="button-list">
          <wa-button appearance="filled" pill href="https://www.11ty.dev/">11ty</wa-button>
          <wa-button appearance="filled" pill href="https://lit.dev/">Lit</wa-button>
          <wa-button appearance="filled" pill href="https://github.com/open-wc/custom-elements-manifest">Custom Elements Manifest</wa-button>
          <wa-button appearance="filled" pill href="https://floating-ui.com/">Floating UI</wa-button>
          <wa-button appearance="filled" pill href="https://animate.style/">animate.css</wa-button>
          <wa-button appearance="filled" pill href="https://lucaong.github.io/minisearch/">MiniSearch</wa-button>
        </div>
      </div>
    </div>
    <div>
      &copy; {{ site.company }}
    </div>
  </footer>
</div>
