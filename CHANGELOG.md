
## v1.5.6

[compare changes](https://gitee.com/vrx/arco-design-pro/compare/v1.5.5...v1.5.6)

### 🏡 框架

- `@vrx-arco/nuxt` `@vrx-arco/helper` 更新 `@vrx-arco/color-picker-import-resolver@0.0.1-beta.4` 使 `@vrx-arco/color-picker` 依赖可选 (0c345ed)

### ❤️ 贡献者

- Whitekite <1075790909@qq.com>

## v1.5.5

[compare changes](https://gitee.com/vrx/arco-design-pro/compare/v1.5.4...v1.5.5)

### 🩹 修复

- Update `@vrx-arco/color-picker@0.0.1-beta.3`, 修复颜色面板 slider 样式丢失的问题 (d9db000)

### 🏡 框架

- Update playgrounds (38ff4c2)

### ❤️ 贡献者

- Whitekite <1075790909@qq.com>

## v1.5.4

[compare changes](https://gitee.com/vrx/arco-design-pro/compare/v1.5.3...v1.5.4)

### 🏡 框架

- `@vrx-arco/helper` `@vrx-arco/nuxt` 支持自动导入单独维护的 `@vrx-arco/color-picker` 包 (ae7174a)

### ❤️ 贡献者

- Whitekite <1075790909@qq.com>

## v1.5.3

[compare changes](https://gitee.com/vrx/arco-design-pro/compare/v1.5.2...v1.5.3)

### 🏡 框架

- `@vrx-arco/helper` `@vrx-arco/nuxt` 支持自动导入单独维护的 `@vrx-arco/color-picker` 包 (37fa8a2)

### ❤️ 贡献者

- Whitekite <1075790909@qq.com>

## v1.5.2

[compare changes](https://gitee.com/vrx/arco-design-pro/compare/v1.5.1...v1.5.2)

### 🚀 特性

- **app:** 允许自定义路由初始化入参 (43cea54)

### ❤️ 贡献者

- Whitekite <1075790909@qq.com>

## v1.5.1

[compare changes](https://gitee.com/vrx/arco-design-pro/compare/v1.5.0...v1.5.1)

### 🩹 修复

- **use:** 修复 `createTreeSelectFilterNode` 工具未能达到预期效果 (7e47764)

### ❤️ 贡献者

- Whitekite <1075790909@qq.com>

## v1.5.0

[compare changes](https://gitee.com/vrx/arco-design-pro/compare/v1.4.1...v1.5.0)

### 🚀 特性

- ⚠️  由于 `ColorPicker` 颜色选择器功能已由官方于 `2.55.0` 实现，该组件于此次版本更新时删除 (e1044b3)
- **nuxt:** 对 nuxt module 的入参选项类型，增加 默认值 jsdoc (d226143)
- **nuxt:** 增加 nuxt module `importStylePlugin` 选项，允许自定义自动导入样式 `vite/webpack` 插件的部分行为 (d1f1fed)
- **use:** 增加一个 ***实验性*** 帮助方法解决 `useRangePickerObjectValue` 解决在使用 arco  RangePicker 向后端传递数据时常常要将数据处理 array -> object 的问题 (3e6f9c6)
- **use:** 增加一个 ***实验性*** 帮助方法解决 `useRangePickerObjectValue` 解决在使用 arco  RangePicker 向后端传递数据时常常要将数据处理 array -> object 的问题 (0d73292)

### 🩹 修复

- **nuxt:** 修复 开启 `transpile` 选项后引包 `dayjs/esm/*` 找不到模块的问题 (157a3f7)

### 🏡 框架

- 增加 ColorPicker 组件删除说明：`<ColorPicker/>` 组件，已由 `@arco-design/web-vue >= 2.55.0` 时，出现官方实现版，该组件在改版本已删除，请使用 官方提供的 <AColorPicker/> , 功能更加齐全 (ec9fdac)

#### 🚨 破坏性改动

- ⚠️  由于 `ColorPicker` 颜色选择器功能已由官方于 `2.55.0` 实现，该组件于此次版本更新时删除 (e1044b3)

### ❤️ 贡献者

- Whitekite <1075790909@qq.com>

## v1.4.1

[compare changes](https://gitee.com/vrx/arco-design-pro/compare/v1.4.0...v1.4.1)

### 🚀 特性

- **nuxt:** 补全对 `arco` 官方组件 `Watermark` `VerificationCode` `ColorPicker` 的自动组件/样式导入支持 (6d0871d)

### 🏡 框架

- Add `.node-version` file (9997a9f)
- 使用 knip 删除多余依赖/文件/导出 (cf39f8f)
- **dep:** Update `vueuse@10.9.0` (a76c9b6)

### ❤️ 贡献者

- Whitekite <1075790909@qq.com>

## v1.4.0


### 🚀 特性

- **nuxt:** Arco 自动导入组件增加验证码组件 (ffae316)
- **helper:** Update peer dep `unplugin-vue-components>=0.26.0` (704513c)
- **pro-components:** 增加 `<EditFormDialog/>` 插槽 ts 类型帮助方法 `EditFormDialogSlot` (3e851b6)
- **pro-components:** 导出 `<EditFormDialog/>` ts 类型 `EditFormDialogInstance` (868f5c3)
- **pro-components:** 为 `useEditFormDialog` `fromRef` 增加 ts 类型提示 (6454aa3)
- **pro-components:** 删除多余依赖 `tinycolor2` (88b7e12)
- **use:** 增加 `<ATableColumn/>` cell 插槽的类型帮助类型 `TableColumnCell` `ATableColumnCell` (6b76b40)
- **use:** 增加一个 ***实验性*** 帮助方法解决 `createTreeSelectFilterNode` 解决arco tree-select反人类的默认筛选 key 的帮助方法 简洁的封装 tree-select 筛选 title 的逻辑 (3061fa5)

### 🏡 框架

- Use flat eslint config (b2e4221)

### ❤️ Contributors

- Whitekite <1075790909@qq.com>

## v1.3.8


### 🚀 特性

- **nuxt:** 支持 arco-design `Watermark` 组件自动导入 (87cad22)

### ❤️ Contributors

- Whitekite <1075790909@qq.com>

## v1.3.7


### 🚀 特性

- **pro-layout:** 增加自定义菜单图标途径：允许使用 `menuIcon` 插槽定制菜单图标，使用该插槽后路由元信息上的图片配置无效 (6680aec)
- **nuxt:** 增加对 `@arco-deign/web-vue/es/icon` 图标的自动导入 (85fcd39)
- **nuxt:** `transpile` 属性增加 `@vrx-arco/pro-components` 包 (bd872b9)

### 🩹 修复

- 修复 `web-types.json` 生成 slots 信息错误的 kebabCase 转换 (29f9d4e)

### ❤️ Contributors

- Whitekite <1075790909@qq.com>

## v1.3.6


### 🩹 修复

- 修复 `<ProCardList/>` 中 `maxHeight` 属性定义与 `<AList/>` 不同 (daa82b0)

### ❤️ Contributors

- Whitekite <1075790909@qq.com>

## v1.3.5


### 🩹 修复

- 修复 `<ProList/>` 中 `maxHeight` 属性定义与 `<AList/>` 不同 (a1014ad)

### ❤️ Contributors

- Whitekite <1075790909@qq.com>

## v1.3.4


### 🚀 特性

- **ColorPalette:** Change 事件将返回当前选择的颜色，而不是颜色的状态值 (fb7938e)

### ❤️ Contributors

- Whitekite <1075790909@qq.com>

## v1.3.3


### 🏡 框架

- **nuxt:** Update dep @vrx-cp/nuxt-utils@0.0.1-beta.74 (eb65392)

### ❤️ Contributors

- Whitekite <1075790909@qq.com>

## v1.3.2


### 🩹 修复

- 修复 `pro-components` 包 dts未正确生成的问题 (66e1f85)

### ❤️ Contributors

- Whitekite <1075790909@qq.com>

## v1.3.1


### 🩹 修复

- 修复 `ColorPalette` 因为 `@ctrl/tinycolor` 升级导致的无法使用 (bd61a24)

### ❤️ Contributors

- Whitekite <1075790909@qq.com>

## v1.3.0


### 🚀 特性

- `SearchBar` 优化DOM，style结构，允许隐藏操作栏或重置按钮 (01326e6)

### 🩹 修复

- `SearchBar` 在单行时未正确居中的问题，且自动label长度未生效的问题 (05098e5)

### ❤️  贡献者

- Whitekite <1075790909@qq.com>

## v1.2.3


### 🚀 特性

- **pro-components:** 修改 `ColorPicker` `ColorPalette` prop `valueFormart` to `valueFormat` (72f5ce5)
- **pro-components:** `ColorPalette` `ColorPicker` 新增 `change` 修改事件 (d6392c1)

### ❤️  贡献者

- Whitekite <1075790909@qq.com>

## v1.2.2


### 🩹 修复

- **pro-components:** 修复 `ColorPalette` `ColorPicker` 未在主样式文件导出的问题 (abee27e)

### ❤️  贡献者

- Whitekite <1075790909@qq.com>

## v1.2.1


### 🚀 特性

- **internal:** 修改内部方法 `controlVModel` 实现逻辑 (c1f32fd)
- **internal:** `LoginForm` `LoginPage` 公用内部 事件定义 (7abec14)
- **pro-components:** 新增 简易`<ColorPicker/>` 颜色选择器 与 `<ColorPalette/>` 颜色选择器面板 (3e78efb)

### ❤️  贡献者

- Whitekite <1075790909@qq.com>

## v1.2.0


### 🚀 特性

- `ThemeDarkLight` 组件增加跟随系统状态，现在的使用表现为自动，亮色，暗色 循环切换 (4d767e6)

### 🏡 框架

- Update eslint config (1fad54d)

### ❤️  贡献者

- Whitekite <1075790909@qq.com>

## v1.1.2


### 🩹 修复

- **nuxt:** 修复 arco 导入失败 (fdae74e)

### 🏡 框架

- **eslint:** Fix code with new rules (20e6de1)
- **dep:** 升级 `vrx/cp` 系列至 `0.0.1-beta.70` (1c81b45)
- Fix eslint error (d9cfe12)

### ❤️  贡献者

- Whitekite <1075790909@qq.com>

## v1.1.1


### 🏡 框架

  - **dep:** `vrx-cp` 系列升级至 `0.0.1-beta.67` (d643adf)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v1.1.0


### 🚀 特性

  - 将 `pro-components` `pro-layout` css的样式兼容性保持与 `@arco-design/web-vue`一致 (a9193f8)
  - ⚠️  对 `unplugin-vue-components` 的 支持不再内置在组件库内部，新增 `@vrx-arco/helper` 包分离该业务 (a05c653)

#### ⚠️  Breaking Changes

  - ⚠️  对 `unplugin-vue-components` 的 支持不再内置在组件库内部，新增 `@vrx-arco/helper` 包分离该业务 (a05c653)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v1.0.0


### 🚀 特性

  - **nuxt:** 提供 为 `@arco-design/web-vue` 本地提供组件导入的功能 (cc91fa1)

### 🏡 框架

  - **nuxt:** Add README.md (a1d0d0a)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v1.0.0-beta.5


### 🚀 特性

  - **LoginPage:** 优化 sider 背景渐变颜色样式设置方式 (3d10b13)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v1.0.0-beta.4


### 🩹 修复

  - 修复 resolver dts 文件生成错误 (aba1354)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v1.0.0-beta.3


### 🚀 特性

  - 修改 volar 提示文件生成位置 (aed89bd)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v1.0.0-beta.2


### 🚀 特性

  - 修改 volar提示文件生成规则 (32e0be6)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v1.0.0-beta.1


### 🚀 特性

  - **nuxt:** 新增nuxt 模块 ,为 pro-components 提供自动导入功能 (584d772)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v1.0.0-beta.0


### 🚀 特性

  - **experimental:** 试验性的nuxt-module (3ccdd0a)
  - **pro-layout:** ⚠️  放弃 css in js 方案，转向静态css (73a10cf)
  - **pro-components:** ⚠️  放弃 css in js 方案，转向静态css (f52c334)
  - **deprecated:** 弃用 css-render 包 提供的 css in js (ae01fae)

### 🏡 框架

  - 升级 @vrx/cp@0.0.1-beta.55，并更新打包配置 (f38f2bd)
  - 修改打包策略 (9fe7878)

#### ⚠️  Breaking Changes

  - **pro-layout:** ⚠️  放弃 css in js 方案，转向静态css (73a10cf)
  - **pro-components:** ⚠️  放弃 css in js 方案，转向静态css (f52c334)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.2.7


### 🚀 特性

  - **deps:** 升级vueuse@10 (decd076)
  - **SearchLayout:** Update type SearchLayoutContentTab (6a78112)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.2.6


### 🩹 修复

  - **LoginPage:** 修复 resolver 自动导入样式缺失的问题 (5ad5219)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.2.5


### 🩹 修复

  - 修复 `<SearchBar/>` props `column` 类型错误 (089ae76)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.2.4


### 🚀 特性

  - **deps:** 内部删除所有 `vue-types` 依赖 (074cd28)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.2.3


### 🩹 修复

  - 修复 `unplugin-vue-components` 生成的预设有误的问题 (7e2e3e6)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.2.2


### 🚀 特性

  - `ProList` , `ProCardList` 新增 `maxHeight` 属性，允许最大高度受控设置 (c1d782e)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.2.1


### 🩹 修复

  - **PageWrapper:** 修复样式异常 (d9ca38d)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.2.0


### 🚀 特性

  - **PageWrapper:** 重构部分样式(界面表现未改变),添加 `scrollbar` 属性，允许在超出容器时显示虚拟滚动条 (c40e29b)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.1.48


### 🩹 修复

  - **css-render:** 导出 `CNode` 类型 (226d86c)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.1.47


### 🚀 特性

  - **ProLayout:** 增加 `navContent` 插槽，提供布局顶部中央空余空间自定义的功能 (0323e0d)
  - **ProLayout:** Update doc config (044b482)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.1.46


### 🚀 特性

  - **deps:** 升级 `@vrx/core@0.3.4` (d938e55)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.1.45


### 🚀 特性

  - 允许 `SearchBar` 回车搜索 (7d61832)

### 🩹 修复

  - 修复 `SearchBarItem` dom 元素错误显示 `autoupdate` 的问题 (ab899b9)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.1.44


### 🚀 特性

  - **EditFormDialog:** 允许自定义新增编辑时标题的前缀 (e0d0484)

### 🏡 框架

  - 适配 `@vrx/cp@0.0.1-beta.41` 新打包规则 (7552ed7)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.1.43


### 🚀 特性

  - 添加 `sideEffects` 申明，优化treeshaking (87d075a)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.1.42


### 🚀 特性

  - **css-render:** 修改 ssr适配 (6c6b6da)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.1.41


### 🚀 特性

  - **css-render:** 增加 `ssr` 适配 (0dc9ff0)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.1.40


### 🚀 特性

  - `<SearchLayoutContent/>` 增加 tab extra 额外插槽 (0573abb)

### 🏡 框架

  - 修改 `release` 脚本 (5d13a30)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.1.39


### 🚀 特性

  - `<SearchLayoutContent/>` 设置 `tabs-type` 为 line 时，删除默认下划线 (9a41828)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.1.38


### 🚀 特性

  - `<SearchLayoutContent/>` 添加 `tabsType` 属性 ,允许自定义 tabs类型 (503b929)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.1.37


### 🩹 修复

  - Unplugin-vue-compnonets resolver 支持自定义样式主题包名无效 (438d809)
  - Unplugin-vue-compnonets resolver 支持自定义样式主题包名无效 (468deb6)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.1.36


### 🩹 修复

  - Unplugin-vue-compnonets resolver 支持自定义样式主题包名无效 (c5e966c)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.1.35

## v0.1.34


### 🚀 特性

  - Unplugin-vue-compnonets resolver 支持自定义样式主题包名 (4db4364)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.1.33


### 🏡 框架

  - Generate CHANGELOG.md (d73470b)
  - 修改 release 策略 (60b6c86)
  - **dep:** 升级 `@vrx/core` `klona` `vueuse` 相关依赖 (520a3b8)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.1.31...v0.1.32


### 🏡 框架

  - Generate CHANGELOG.md (739f671)
  - 使用 pnpm --filter 进行monorepo打包 (77abafa)
  - 测试使用 自用工具 @vrx/cp 进行打包 (048416b)
  - 测试使用 自用工具 @vrx/cp 进行打包 (684241a)
  - 测试使用 自用工具 @vrx/cp 进行打包 (91e099c)
  - 测试使用 自用工具 @vrx/cp 进行打包 (437f0ad)
  - **build:** 修改打包策略import默认顶部 (8c381e3)
  - Release v0.1.32 (16d00ac)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v0.1.30...v0.1.31


### 🩹 修复

  - 导入 row col 组件导致的样式错误 (71ec1df)

### 🏡 框架

  - Generate CHANGELOG.md (5bb931f)
  - 更新 .gitignore 策略 (16a2015)
  - Release v0.1.31 (369e751)

### ❤️  Contributors

- Whitekite

## v0.1.29...v0.1.30


### 🚀 特性

  - 为 `pro-layout`& `pro-components` 提供 `unplugin-vue-components` 自动导入模版 (afb558f)

### 🏡 框架

  - Generate CHANGELOG.md (6dfb22a)
  - Release v0.1.30 (eaad7f6)

### ❤️  Contributors

- Whitekite

## v0.1.28...v0.1.29


### 🏡 框架

  - 删除  package.json - files -  "!*.doc.d.ts" 部分 (b51be18)
  - Generate CHANGELOG.md (fae3018)
  - Generate CHANGELOG.md (2b32e5c)
  - Release v0.1.29 (992e4cb)

### ❤️  Contributors

- Whitekite

## v0.1.27...v0.1.28


### 🚀 特性

- 增加 web-types.json 的支持 (07a1636)

### 🏡 框架

  - Generate CHANGELOG.md (20878b2)
  - 新增shared 包提供 arco-style web-types components.d.ts 文件的生成 (07a1636)
  - Release v0.1.28 (6089fda)

### ❤️  Contributors

- Whitekite

## v0.1.26...v0.1.27


### 🚀 特性

  - **SearchBar:** 删除多余的console (5617653)

### 🏡 框架

  - Release v0.1.27 (832fa37)

### ❤️  Contributors

- Whitekite

## v0.1.25...v0.1.26


### 🚀 特性

  - **SearchBar:** 添加自动 v-model 劫持子元素的 dynamicProps patchFlag (22a2c50)

### 🏡 框架

  - Release v0.1.26 (18eb82d)

### ❤️  Contributors

- Whitekite

## v0.1.24...v0.1.25


### 🚀 特性

  - **SearchBar:** 修改自动 v-model 数据源为 computed 监听 (7ef41a6)

### 🏡 框架

  - Generate CHANGELOG.md (72cf54a)
  - Release v0.1.25 (2f764a1)

### ❤️  Contributors

- Whitekite

## v0.1.23...v0.1.24


### 🩹 修复

  - **SpaceDivider:** 修复 下划线位置可能发生错误的问题 (09f2d81)

### 🏡 框架

  - 移除turbo依赖，改为自行控制打包顺序 (7334e7d)
  - Release v0.1.24 (238beb1)

### ❤️  Contributors

- Whitekite

## v0.1.22...v0.1.23


### 🏡 框架

  - Generate CHANGELOG.md (df70424)
  - 修复错误的打包策略，将部分外部包，打入包体内，导致的错误 (b1688d3)
  - Release v0.1.23 (7049ec1)

### ❤️  Contributors

- Whitekite

## v0.1.21...v0.1.22


### 🩹 修复

  - **LoginForm:** 修复错别字 登陆 -> 登录 (44305f1)

### 🏡 框架

  - Generate CHANGELOG.md (0243912)
  - Release v0.1.22 (870002c)

### ❤️  Contributors

- Whitekite

## v0.1.20...v0.1.21


### 🩹 修复

  - 修复 filterEmptyChildren 错误 (ee48b05)

### 🏡 框架

  - Generate CHANGELOG.md (bc86f1d)
  - Release v0.1.21 (6c82992)

### ❤️  Contributors

- Whitekite

## v0.1.19...v0.1.20


### 🚀 特性

  - 新增<SpaceDivider/> 组件 作为 <Space/> 组件的变种，修改 Divider 组件作为 间隔符 (2599477)

### 🏡 框架

  - Generate CHANGELOG.md (0a0ba93)
  - Release v0.1.20 (3207699)

### ❤️  Contributors

- Whitekite

## v0.1.18...v0.1.19


### 🚀 特性

  - **app:** `<Permission/>` 组件支持自定义无权限表现 **实验性功能，API及其不稳定，仅为内部测试用** (4a61c94)

### 🏡 框架

  - Generate CHANGELOG.md (077f6d6)
  - Release v0.1.19 (4ba8773)

### ❤️  Contributors

- Whitekite

## v0.1.17...v0.1.18


### 🚀 特性

  - **app:** 重构其内部鉴权逻辑，更改部分api，提供按钮级鉴权组件 **实验性功能，API及其不稳定，仅为内部测试用** (bd7c030)
  - **app:** 更新README.md **实验性功能，API及其不稳定，仅为内部测试用** (0a7f9b6)

### 🏡 框架

  - Generate CHANGELOG.md (9b95b31)
  - Release v0.1.18 (b9a7c60)

### ❤️  Contributors

- Whitekite

## v0.1.16...v0.1.17


### 🩹 修复

  - **app:** 修复鉴权第一个菜单直接跳出循环的问题 (21eccec)

### 🏡 框架

  - Release v0.1.17 (f14b4a3)

### ❤️  Contributors

- Whitekite

## v0.1.15...v0.1.16


### 🩹 修复

  - **app:** 筛选路由造成的层级错误 (d6ea171)

### 🏡 框架

  - Release v0.1.16 (1867d6b)

### ❤️  Contributors

- Whitekite

## v0.1.14...v0.1.15


### 🩹 修复

  - **app:** 筛选路由造成的层级错误 (40f5e3c)

### 🏡 框架

  - Release v0.1.15 (0aedf05)

### ❤️  Contributors

- Whitekite

## v0.1.13...v0.1.14


### 🩹 修复

  - **app:** 筛选路由会真实将路由删除的问题 (9901735)

### 🏡 框架

  - Release v0.1.14 (bf1ee84)

### ❤️  Contributors

- Whitekite

## v0.1.12...v0.1.13


### 🚀 特性

  - **app:** 导出 usePermissionStore (18afa10)

### 🏡 框架

  - Release v0.1.13 (aa9bfac)

### ❤️  Contributors

- Whitekite

## v0.1.11...v0.1.12


### 🚀 特性

  - **icon:** 引入路径修改 (ae21275)

### 🏡 框架

  - Generate CHANGELOG.md (d49e69c)
  - Release v0.1.12 (f05c3a3)

### ❤️  Contributors

- Whitekite

## v0.1.11 (v0.1.10..v0.1.11)


### 🏡 框架

  - Generate CHANGELOG.md (6f1ceb9)
  - 修改 `pro-layout` 与 `pro-components`dts 生成为 bundless 方案 (36429e2)
  - Release v0.1.11 (1650c29)

### ❤️  Contributors

- Whitekite

## v0.1.10 (v0.1.9..v0.1.10)


### 🚀 特性

  - `<ProLayout/>` 菜单部分增加根据路由属性 meta.list判断 是否隐藏所有子路由菜单，并将子路由第一项name作为 菜单name (90f7bde)
  - **app:** 修改 是否开启动态路由部分由 动态路由数组是否为空判断 **实验性** (59062e5)

### 🏡 框架

  - Generate CHANGELOG.md (585b9b8)
  - 修改 `pro-layout` 与 `pro-components`打包为 bundless 方案 (54190d0)
  - Release v0.1.10 (7f4f6ba)

### ❤️  Contributors

- Whitekite

## v0.1.9 (v0.1.8..v0.1.9)


### 🚀 特性

  - `<EditFormDialog/>` props.width 修改为接受 string (number)

### 🏡 框架

  - Generate CHANGELOG.md (2ef0de0)
  - Release v0.1.9 (2ff126e)

### ❤️  Contributors

- 2e7a162
- Whitekite

## v0.1.8 (v0.1.7..v0.1.8)


### 🚀 特性

  - **app:** 修复递归路由逻辑错误，导致的底层路由未被递归 (965b686)

### 🏡 框架

  - Generate CHANGELOG.md (bb50cb5)
  - Release v0.1.8 (006f4c9)

### ❤️  Contributors

- Whitekite

## v0.1.7 (v0.1.6..v0.1.7)


### 🚀 特性

  - **app:** 如果登陆后访问登陆页，则触发登陆过期回调 (57f7dff)

### 🏡 框架

  - Generate CHANGELOG.md (bdfe28a)
  - Release v0.1.7 (a94702c)

### ❤️  Contributors

- Whitekite

## v0.1.6 (v0.1.5..v0.1.6)


### 🚀 特性

  - **EditFormDialog:** 增加 close 回调 (3f53138)
  - **Login**:** 可使登陆预设组件，表单属性受控 (0dc32e2)

### 🏡 框架

  - Generate CHANGELOG.md (caa6da1)
  - Release v0.1.6 (3fc056a)

### ❤️  Contributors

- Whitekite

## v0.1.5 (v0.1.4..v0.1.5)


### 🚀 特性

  - `<EditFormDialog/>` 表单提交成功后增加 弹框提示与 事件回调 (7600289)

### 🏡 框架

  - Generate CHANGELOG.md (f407c99)
  - Release v0.1.5 (5ab1366)

### ❤️  Contributors

- Whitekite

## v0.1.4 (v0.1.3..v0.1.4)


### 🚀 特性

  - `<EditFormDialog/>` 删除 `props.visible` ,改为纯内部控制 (ef1e15b)

### 🏡 框架

  - Generate CHANGELOG.md (395bfdc)
  - Release v0.1.4 (c31e2ff)

### ❤️  Contributors

- Whitekite

## v0.1.3 (v0.1.2..v0.1.3)


### 🚀 特性

  - `<EditFormDialog/>` 组件增加 `useEditFormDialog` 帮助方法，帮助快速使用该组件 (9ced667)

### 🏡 框架

  - Generate CHANGELOG.md (a0020a9)
  - Release v0.1.3 (813699d)

### ❤️  Contributors

- Whitekite

## v0.1.2 (v0.1.1..v0.1.2)


### 🩹 修复

  - `<EditFormDialog/>` `visible` 属性配置错误的问题 (88e1463)

### 🏡 框架

  - Generate CHANGELOG.md (7978741)
  - Release v0.1.2 (4a27eaf)

### ❤️  Contributors

- Whitekite

## v0.1.1 (v0.1.0..v0.1.1)


### 🚀 特性

  - `<LoginForm/>` `<LoginPage/>` 增加form插槽，支持定义额外表单项 (7a5c7fc)
  - 增加 `<EditFormDialog/>` 提供 新增/编辑表单业务同构弹框组件 (87e4aa4)

### 🏡 框架

  - Generate CHANGELOG.md (f22825a)
  - Release v0.1.1 (2392f83)

### ❤️  Contributors

- Whitekite

## v0.1.0 (v0.0.10..v0.1.0)


### 🚀 特性

  - ⚠️  升级 `@arco-design/web-vue`最低版本为`2.37.1` `<ProLayout/>` - 菜单，增加 滚动条支持 (50a851f)
  - 新增 `@vrx-arco/app`，以提供创建快速具有动态路由加载能力的vue app (实验性质) (6a58441)

### 🏡 框架

  - Generate CHANGELOG.md (5bed64d)
  - 补充各包 仓库与主页声明 (3ba9763)
  - 补充各包 README.md (699cb62)
  - Release v0.1.0 (39c6dbf)

#### ⚠️  Breaking Changes

  - ⚠️  升级 `@arco-design/web-vue`最低版本为`2.37.1` `<ProLayout/>` - 菜单，增加 滚动条支持 (50a851f)

### ❤️  Contributors

- Whitekite

## v0.0.10 (v0.0.9..v0.0.10)


### 🏡 框架

  - Generate CHANGELOG.md (a96b9c5)
  - Release v0.0.10 (fef9b09)

### ❤️  Contributors

- Whitekite

## v0.0.9 (v0.0.8..v0.0.9)


### 🏡 框架

  - Generate CHANGELOG.md (762cbf9)
  - Release v0.0.9 (8928815)

### ❤️  Contributors

- Whitekite

## v0.0.8 (v0.0.7..v0.0.8)


### 🚀 特性

  - 删除 `<SearchLayout/>` `type=card` 错误的底部边框 (54f96c2)
  - 优化 `<ProPagination/>` 分页组件靠右样式 `float: 'right'` -> `justifyContent: 'flex-end'` (054eb62)
  - 优化 `<LoginPage/>` 在暗色模式时字体颜色 (c712afe)
  - 优化 `<LoginPage/>` 在暗色模式时字体颜色 (4abb006)

### 🏡 框架

  - Generate CHANGELOG.md (744a89c)
  - Release v0.0.8 (920e783)

### ❤️  Contributors

- Whitekite

## v0.0.7 (v0.0.6..v0.0.7)


### 🚀 特性

  - **ProPagination:** 修改分页参数覆盖区间，允许修改默认分页样式 (ae6547a)

### 🏡 框架

  - Generate CHANGELOG.md (746807d)
  - Release v0.0.7 (f59d38f)

### ❤️  Contributors

- Whitekite

## v0.0.6 (v0.0.5..v0.0.6)


### 🩹 修复

  - ProLayout 小屏幕模式部分暗色模式适配错误 (d6bca7f)

### 🏡 框架

  - Generate CHANGELOG.md (3283bf8)
  - 修改 release 命令 (142aa03)
  - Release v0.0.6 (bbd20f3)

### ❤️  Contributors

- Whitekite

## v0.0.5 (v0.0.4..v0.0.5)


### 🚀 特性

  - **ProMenu:** Arco menu 设置 `autoScrollIntoView` 属性 (c55c869)

### 🩹 修复

  - **ProMenu:** 修复 配置hidden的路由在菜单未正常打开对应父菜单的问题 (39978dc)

### 🏡 框架

  - Generate CHANGELOG.md (d312897)
  - Release v0.0.5 (8c9ebd7)

### ❤️  Contributors

- Whitekite

## v0.0.4 (v0.0.3..v0.0.4)


### 🩹 修复

  - 修复 `SearchLayout` title type 属性未响应式追踪 (1ee3501)

### 🏡 框架

  - Release v0.0.4 (85d8af7)

### ❤️  Contributors

- Whitekite

## v0.0.3 (v0.0.2..v0.0.3)


### 🩹 修复

  - 修复 `SearchLayout` title 属性未响应式追踪 (0a0485b)

### 🏡 框架

  - Release v0.0.3 (7929685)

### ❤️  Contributors

- Whitekite

## v0.0.2 (v0.0.1..v0.0.2)


### 🏡 框架

  - Release v0.0.2 (d747fc6)

### ❤️  Contributors

- Whitekite

