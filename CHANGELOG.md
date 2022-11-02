
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

