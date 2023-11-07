export interface VrxArcoOption {
  /**
   * 引入的aro-design样式类型
   */
  importStyle?: 'css' | 'less'
  /**
   * 是否使用自动导入样式
   */
  sideEffect?: boolean
  /**
   * 引入的aro-design 样式的库
   */
  theme?: string
  /**
   * 是否对内置的对 ssr 不友好的包进行自动转换配置
   */
  transpile?: boolean
  /**
   * 是否对 @arco-deign/web-vue 提供自动导入支持
   */
  arco?: boolean
  /**
   * 是否对 @arco-deign/web-vue/es/icon 提供自动导入支持
   */
  resolveIcons?: boolean
}
