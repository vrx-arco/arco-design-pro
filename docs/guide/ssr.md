#  服务端渲染SSR

:::tip 提示

暂时只支持 `@vrx-arco/pro-components`,  `@vrx-arco/icon` 服务端渲染SSR

:::

## nuxt

对 `@vrx-arco/pro-components` 提供 `nuxt` 自动导入

如果你在使用 Nuxt，请确保你 `@vrx-arco` 系列版本 `>=1.0.0`

## 安装{#install}

:::code-group

```bash [npm]
$ npm i  @vrx-arco/nuxt -D
```

```bash [yarn]
$ yarn add @vrx-arco/nuxt -D
```

```bash [pnpm]
$ pnpm add @vrx-arco/nuxt -D
```

```bash [bun]
$ bun add @vrx-arco/nuxt -D
```

:::

## Options

请跳转 [Options](https://gitee.com/vrx/arco-design-pro/blob/master/packages/nuxt/src/type.ts) 查看

##  对 `@arco-design/web-vue` 的自动导入支持

:::warning 警告

⚠️ 试验性

:::

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
