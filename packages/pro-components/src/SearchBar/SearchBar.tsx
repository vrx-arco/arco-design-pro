import { PropType, defineComponent, onMounted, ref, toRaw, toRef } from 'vue'
import { Button, FieldRule, Form, Row, Space } from '@arco-design/web-vue'
import { IconRefresh, IconSearch } from '@vrx-arco/icon'
import { klona } from 'klona/lite'
import { useAsyncLoading } from '@vrx/core'
import { useGrid } from '@vrx-arco/use'
import { style } from '../style/var'
import { CardListColumnGrid } from '../ProCardList'
import { provideSearchBar } from './context'

export const SearchBar = defineComponent({
  name: 'vrx-arco-search-bar',
  props: {
    /**
     * 数据源 * 如需要使用自动重置，自动验证功能 该选项必填*
     */
    model: {
      type: Object,
      default: () => ({}),
    },
    /**
     * label 的栅格布局
     */
    labelColProps: Object,
    /**
     * content 的栅格布局
     */
    wrapperColProps: Object,
    /**
     * 禁用表单
     */
    disabled: Boolean,
    /**
     * 表单验证规则
     */
    rules: [Object, Array] as PropType<FieldRule | FieldRule[]>,
    /**
     * 点击重置按钮的时候根据`model` 初始值自动重置表单
     */
    resetOnButtonClick: { type: Boolean, default: false },
    /**
     * 点击搜索按钮的时候触发验证
     */
    validOnButtonClick: { type: Boolean, default: false },
    onSearch: Function as PropType<(model: any) => Promise<any>>,
    onReset: Function as PropType<(model: any) => Promise<any>>,
    /**
     * 表单栅格布局
     */
    column: {
      type: [Number, Object] as PropType<number | CardListColumnGrid>,
      default: () => ({
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 3,
        xxl: 4,
      }),
    },
    /**
     * 劫持`search-bar-item` 第一个元素 自动绑定 `v-model`
     */
    autoUpdate: { type: Boolean, default: false },
    /**
     * 隐藏重置按钮
     */
    hideReset: { type: Boolean, default: false },
    /**
     * 隐藏操作栏
     */
    hideAction: { type: Boolean, default: false },
  },
  emits: ['search', 'reset'],
  setup: (props, { slots }) => {
    const { bemClass } = style('search-bar')
    const model = toRef(props, 'model')
    const column = toRef(props, 'column')
    const autoUpdate = toRef(props, 'autoUpdate')

    const { gridProps } = useGrid(true, column)

    provideSearchBar({ gridProps, model, autoUpdate })

    const formRef = ref()

    const resetModel = ref()

    const { loading: searchLoading, run: searchRun } = useAsyncLoading()

    const handleSearch = () => {
      if (!props.validOnButtonClick) {
        searchRun(Promise.resolve().then(() => props.onSearch?.(toRaw(model.value))))
        return
      }
      searchRun(
        formRef.value
          .validate()
          .then((error) => (error ? Promise.reject(error) : Promise.resolve()))
          .then(() => props.onSearch?.(toRaw(model.value)))
      )
    }

    const { loading: resetLoading, run: resetRun } = useAsyncLoading()

    const handleReset = () => {
      if (props.resetOnButtonClick) {
        Object.keys(model.value).forEach((key) => {
          model.value[key] = klona(resetModel.value[key])
        })
      }
      resetRun(Promise.resolve().then(() => props.onReset?.(toRaw(model.value))))
    }

    onMounted(() => {
      resetModel.value = klona(model.value)
    })

    return () => {
      const { labelColProps, wrapperColProps, disabled, hideAction, hideReset } = props

      const renderAction = () => {
        if (hideAction) {
          return
        }
        return (
          <div class={bemClass('__button-box')}>
            <Space direction="vertical">
              <Button
                type="primary"
                v-slots={{ icon: () => <IconSearch /> }}
                onClick={handleSearch}
                loading={searchLoading.value}
                disabled={disabled || resetLoading.value}
                htmlType="submit"
              >
                搜索
              </Button>
              {!hideReset && (
                <Button
                  v-slots={{ icon: () => <IconRefresh /> }}
                  onClick={handleReset}
                  loading={resetLoading.value}
                  disabled={disabled || searchLoading.value}
                >
                  重置
                </Button>
              )}
            </Space>
          </div>
        )
      }
      return (
        <Form
          ref={formRef}
          layout="horizontal"
          labelAlign="left"
          autoLabelWidth
          model={model.value}
          wrapperColProps={wrapperColProps}
          labelColProps={labelColProps}
          disabled={disabled || resetLoading.value || searchLoading.value}
        >
          <div class={bemClass()}>
            <Row align="center" class={bemClass('__form-row')} gutter={[24, 8]}>
              {slots.default?.()}
            </Row>
            {renderAction()}
          </div>
        </Form>
      )
    }
  },
})
