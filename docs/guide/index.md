# 开始{#getting-start}

## 总览{#overflow}

`vrx-arco` 是对 [arco-design-pro-vue](https://github.com/arco-design/arco-design-pro-vue)的组件级封装

灵感来自 [@ant-design-vue/pro-layout](https://www.npmjs.com/package/@ant-design-vue/pro-layout)

**只是个人项目，整体较为随便，作为开发途中的经验总结，如有相似的需求，推荐copy或阅读源码，不建议将该包在实际项目中使用**

## 预览

<img src="/images/layout-preview.png" alt="layout-preview.png">

## 安装{#install}

:::code-group

```bash [npm]
$ npm i @vrx-arco/pro-layout @vrx-arco/pro-components
```

```bash [yarn]
$ yarn add @vrx-arco/pro-layout @vrx-arco/pro-components
```

```bash [pnpm]
$ pnpm add @vrx-arco/pro-layout @vrx-arco/pro-components
```

```bash [bun]
$ bun add @vrx-arco/pro-layout @vrx-arco/pro-components
```

:::

## 样式完整导入
```ts
// 导入依赖的所有 less样式
import '@vrx-arco/pro-components/arco-style'
import '@vrx-arco/pro-layout/arco-style'

// 导入依赖的所有css样式
import '@vrx-arco/pro-components/arco-style-css'
import '@vrx-arco/pro-layout/arco-style-css'

// 导入自身样式
import '@vrx-arco/pro-components/style/index.css'
import '@vrx-arco/pro-layout/style/index.css'
```
## 自动导入 {#auto-update}

使用 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 对组件与样式进行自动按需导入

### 安装

:::code-group

```bash [npm]
$ npm i @vrx-arco/helper -D
```

```bash [yarn]
$ yarn add @vrx-arco/helper -D
```

```bash [pnpm]
$ pnpm add @vrx-arco/helper -D
```

```bash [bun]
$ bun add @vrx-arco/helper -D
```

:::

### 使用

```ts
import { VrxArcoProComponentsResolver, VrxArcoProLayoutResolver } from '@vrx-arco/helper'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Components({
      resolvers: [VrxArcoProLayoutResolver({}), VrxArcoProComponentsResolver({})],
    }),
  ],
})
```
