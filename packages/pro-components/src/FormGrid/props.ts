import { array, arrayOf, bool, func, number, object, oneOf, oneOfType, string } from 'vue-types'
import { FieldRule } from '@arco-design/web-vue'

export const formGridItemProps = () =>
  ({
    /**
     * 对 `search-bar` column 属性进行覆盖
     */
    gridProps: object().isRequired,
    /**
     * 表单元素在数据对象中的path（数据项必填）
     */
    field: string().def(''),
    /**
     * 标签的文本
     */
    label: string(),
    /**
     * 是否显示冒号
     */
    showColon: bool().def(false),
    /**
     * 是否去除样式
     */
    noStyle: bool().def(false),
    /**
     * 是否禁用
     */
    disabled: bool(),
    /**
     * 帮助文案
     */
    help: string(),
    /**
     * 额外显示的文案
     */
    extra: string(),
    /**
     * 是否必须填写
     */
    required: bool().def(false),
    /**
     * 表单项校验规则（优先级高于 form 的 rules）
     */
    rules: oneOfType([object<FieldRule>(), array<FieldRule>()]),
    /**
     * 校验状态
     */
    validateStatus: oneOf(['success', 'warning', 'error', 'validating'] as const),
    /**
     * 校验状态
     */
    validateTrigger: oneOfType([
      oneOf(['change', 'input', 'focus', 'blur'] as const),
      arrayOf(oneOf(['change', 'input', 'focus', 'blur'] as const)),
    ]).def('change'),
    /**
     * 标签元素布局选项。参数同 col 组件一致
     */
    labelColProps: object(),
    /**
     * 标签元素布局选项。参数同 col 组件一致
     */
    wrapperColProps: object(),
    /**
     * 是否隐藏标签
     */
    hideLabel: bool().def(false),
    /**
     * 是否隐藏星号
     */
    hideAsterisk: bool().def(false),
    /**
     * 标签元素布局组件的 style
     */
    labelColStyle: object(),
    /**
     * 表单控件布局组件的 style
     */
    wrapperColStyle: object(),
    /**
     * 表单项布局选项。参数同 row 组件一致
     */
    rowProps: object(),
    /**
     * 表单项布局组件的 class
     */
    rowClass: oneOfType([string(), array(), object()]),
    /**
     * 表单控件包裹层的 class
     */
    contentClass: oneOfType([string(), array(), object()]),
    /**
     * 内容层是否开启 flex 布局
     */
    contentFlex: bool().def(true),
    mergeProps: oneOfType([bool(), func()]).def(true),
    /**
     * 设置标签 Col 组件的 flex 属性。设置时表单 Col 组件的 flex 属性会被设置为 auto。
     */
    labelColFlex: oneOfType([number(), string()]),
    /**
     * 是否显示表单控件的反馈图标
     */
    feedback: bool().def(false),
    /**
     * 表单项标签渲染的元素
     */
    labelComponent: string().def('label'),
    /**
     * 是否显示表单控件的反馈图标
     */
    labelAttrs: object(),
  } as const)
