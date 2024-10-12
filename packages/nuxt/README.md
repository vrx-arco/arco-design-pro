<p align="center">
<img src="https://vrx-arco.github.io/arco-design-pro/favicon.svg" width="200" height="250">
</p>

# @vrx-arco/nuxt

<!-- automd:badges color="orange" license licenseBranch  bundlephobia packagephobia -->

[![npm version](https://img.shields.io/npm/v/@vrx-arco/nuxt?color=orange)](https://npmjs.com/package/@vrx-arco/nuxt)
[![npm downloads](https://img.shields.io/npm/dm/@vrx-arco/nuxt?color=orange)](https://npm.chart.dev/@vrx-arco/nuxt)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@vrx-arco/nuxt?color=orange)](https://bundlephobia.com/package/@vrx-arco/nuxt)
[![license](https://img.shields.io/github/license/vrx-arco/arco-design-pro?color=orange)](https://github.com/vrx-arco/arco-design-pro/blob/true/LICENSE)

<!-- /automd -->

对 `@vrx-arco/pro-components` 提供 `nuxt` 自动导入

## 安装

<!-- automd:pm-install -->

```sh
# ✨ Auto-detect
npx nypm install @vrx-arco/nuxt

# npm
npm install @vrx-arco/nuxt

# yarn
yarn add @vrx-arco/nuxt

# pnpm
pnpm install @vrx-arco/nuxt

# bun
bun install @vrx-arco/nuxt

# deno
deno install @vrx-arco/nuxt
```

<!-- /automd -->

```ts
export default defineNuxtConfig({
  modules: ['@vrx-arco/nuxt'],
  vrxArco: {
    /** Options */
  },
})
```

## Options

请跳转 [Options](https://gitee.com/vrx/arco-design-pro/blob/master/packages/nuxt/src/type.ts) 查看

##  对 `@arco-design/web-vue` 的自动导入支持

> ⚠️ 试验性

因为 `@arco-design/web-vue` 并未官方对 `nuxt` 提供支持，启用该特性，可以为其提供组件/样式自动导入

### 启用功能

```ts
export default defineNuxtConfig({
  modules: ['@vrx-arco/nuxt'],
  vrxArco: {
    arco: true,
  },
})
```

## 贡献者
<!-- automd:contributors author="Colourlessglow" license="MIT" -->

Published under the [MIT](https://github.com/vrx-arco/arco-design-pro/blob/main/LICENSE) license.
Made by [@Colourlessglow](https://github.com/Colourlessglow) and [community](https://github.com/vrx-arco/arco-design-pro/graphs/contributors) 💛
<br><br>
<a href="https://github.com/vrx-arco/arco-design-pro/graphs/contributors">
<img src="https://contrib.rocks/image?repo=vrx-arco/arco-design-pro" />
</a>

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
