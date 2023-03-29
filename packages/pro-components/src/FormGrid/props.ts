import { FieldRule } from '@arco-design/web-vue'
import { PropType } from 'vue'

export const formGridItemProps = () => ({
  /**
   * 对 `search-bar` column 属性进行覆盖
   */
  gridProps: {
    type: Object,
    required: true,
  },
  /**
   * 表单元素在数据对象中的path（数据项必填）
   */
  field: {
    type: String,
    default: '',
  },
  /**
   * 标签的文本
   */
  label: String,
  /**
   * 是否显示冒号
   */
  showColon: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否去除样式
   */
  noStyle: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否禁用
   */
  disabled: Boolean,
  /**
   * 帮助文案
   */
  help: String,
  /**
   * 额外显示的文案
   */
  extra: String,
  /**
   * 是否必须填写
   */
  required: {
    type: Boolean,
    default: false,
  },
  /**
   * 表单项校验规则（优先级高于 form 的 rules）
   */
  rules: [Object, Array] as PropType<FieldRule | FieldRule[]>,
  /**
   * 校验状态
   */
  validateStatus: String as PropType<'success' | 'warning' | 'error' | 'validating'>,
  /**
   * 校验状态
   */
  validateTrigger: {
    type: [String, Array] as PropType<
      ('change' | 'input' | 'focus' | 'blur') | ('change' | 'input' | 'focus' | 'blur')[]
    >,
  },
  /**
   * 标签元素布局选项。参数同 col 组件一致
   */
  labelColProps: Object,
  /**
   * 标签元素布局选项。参数同 col 组件一致
   */
  wrapperColProps: Object,
  /**
   * 是否隐藏标签
   */
  hideLabel: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否隐藏星号
   */
  hideAsterisk: {
    type: Boolean,
    default: false,
  },
  /**
   * 标签元素布局组件的 style
   */
  labelColStyle: Object,
  /**
   * 表单控件布局组件的 style
   */
  wrapperColStyle: Object,
  /**
   * 表单项布局选项。参数同 row 组件一致
   */
  rowProps: Object,
  /**
   * 表单项布局组件的 class
   */
  rowClass: [String, Array, Object],
  /**
   * 表单控件包裹层的 class
   */
  contentClass: [String, Array, Object],
  /**
   * 内容层是否开启 flex 布局
   */
  contentFlex: {
    type: Boolean,
    default: true,
  },
  mergeProps: {
    type: [Boolean, Function] as PropType<
      boolean | ((props: Record<string, any>) => Record<string, any>)
    >,
    default: true,
  },
  /**
   * 设置标签 Col 组件的 flex 属性。设置时表单 Col 组件的 flex 属性会被设置为 auto。
   */
  labelColFlex: [Number, String],
  /**
   * 是否显示表单控件的反馈图标
   */
  feedback: {
    type: Boolean,
    default: false,
  },
  /**
   * 表单项标签渲染的元素
   */
  labelComponent: {
    type: String,
    default: 'label',
  },
  /**
   * 是否显示表单控件的反馈图标
   */
  labelAttrs: Object,
})
