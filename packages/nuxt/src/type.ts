import type { ExtendConfigOptions } from '@nuxt/kit'
export interface VrxArcoOption {
  /**
   * 引入的aro-design样式类型
   * @default 'css'
   */
  importStyle?: 'css' | 'less'
  /**
   * 自动引入相关样式的 vite/webpack 插件的额外选项
   * 详见 [extendviteconfig](https://nuxt.com/docs/api/kit/builder#extendviteconfig) 的 `ExtendViteConfigOptions` 类型说明
   */
  importStylePlugin?: ExtendConfigOptions
  /**
   * 实验性，自定义自动导入样式扫描文件范围
   * @experimental
   */
  importStyleDir?: {
    /**
     * 额外包含的目录
     */
    includeDir?: string[]
    /**
     * 排除部分目录
     */
    excludeDir?: string[]
  }
  /**
   * 是否使用自动导入样式
   * @default true
   */
  sideEffect?: boolean
  /**
   * 引入的aro-design 样式的库
   */
  theme?: string
  /**
   * 是否对内置的对 ssr 不友好的包进行自动转换配置
   * @default true
   */
  transpile?: boolean
  /**
   * 是否对 @arco-deign/web-vue 提供自动导入支持
   * @default false
   */
  arco?: boolean
  /**
   * 是否对 @arco-deign/web-vue/es/icon 提供自动导入支持
   * @default false
   */
  resolveIcons?: boolean

  /**
   * 启用实验性组件 `<ColorPicker/>`的自动引入
   * @experimental
   * @default false
   */
  colorPicker?: boolean
}
