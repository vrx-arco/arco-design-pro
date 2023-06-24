# @vrx-arco/nuxt

对 `@vrx-arco/pro-components` 提供 `nuxt` 自动导入

## 安装

```shell
npm i @vrx-arco/nuxt -D
yarn add @vrx-arco/nuxt -D
pnpm add @vrx-arco/nuxt -D
```

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
