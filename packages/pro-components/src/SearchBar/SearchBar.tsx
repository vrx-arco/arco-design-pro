import { defineComponent, onMounted, ref, toRaw, toRef } from 'vue'
import { Button, Col, Divider, FieldRule, Form, Row, Space } from '@arco-design/web-vue'
import { style } from './style'
import { array, bool, func, number, object, oneOfType } from 'vue-types'
import { IconRefresh, IconSearch } from '@vrx-arco/icon'
import { klona } from 'klona/lite'
import { useAsyncLoading } from '@vrx/core'
import { useGrid } from '@vrx-arco/use'
import { CardListColumnGrid } from '../ProCard'
import { provideSearchBar } from './context'
import { defu } from 'defu'

export const SearchBar = defineComponent({
  name: 'vrx-arco-search-bar',
  props: {
    model: object().def({}),
    labelColProps: object(),
    wrapperColProps: object(),
    disabled: bool(),
    rules: oneOfType([object<FieldRule>(), array<FieldRule>()]),
    resetOnButtonClick: bool().def(false),
    validOnButtonClick: bool().def(false),
    onSearch: func<(model: any) => Promise<any>>(),
    onReset: func<(model: any) => Promise<any>>(),
    column: oneOfType([number(), object<CardListColumnGrid>()]).def({
      xs: 1,
      sm: 2,
      md: 2,
      lg: 3,
      xl: 3,
      xxl: 4,
    }),
  },
  emits: ['search', 'reset'],
  setup: (props, { slots }) => {
    const { bemClass } = style()
    const model = toRef(props, 'model')
    const column = toRef(props, 'column')

    const { gridProps } = useGrid(true, column)

    provideSearchBar({ gridProps })

    const formRef = ref()

    const resetModel = ref()

    const { loading: searchLoading, run: searchRun } = useAsyncLoading()

    const handleSearch = () => {
      if (!props.validOnButtonClick) {
        return searchRun(Promise.resolve().then(() => props.onSearch?.(toRaw(model.value))))
      }
      return searchRun(formRef.value.validate().then(() => props.onSearch?.(toRaw(model.value))))
    }

    const { loading: resetLoading, run: resetRun } = useAsyncLoading()

    const handleReset = () => {
      if (props.resetOnButtonClick) {
        defu(resetModel.value, model.value)
      }
      return resetRun(Promise.resolve().then(() => props.onReset?.(toRaw(model.value))))
    }

    onMounted(() => {
      resetModel.value = klona(model.value)
    })

    return () => {
      const { labelColProps, wrapperColProps, disabled } = props
      return (
        <Row align="center" class={bemClass()}>
          <Col flex={1}>
            <Form
              ref={formRef}
              layout="inline"
              labelAlign="left"
              model={model.value}
              wrapperColProps={wrapperColProps}
              labelColProps={labelColProps}
              disabled={disabled || resetLoading.value || searchLoading.value}
            >
              <Row align="center" class={bemClass('__form-row')}>
                {slots.default?.()}
              </Row>
            </Form>
          </Col>
          <Divider direction="vertical" class={bemClass('__split')} />
          <Col class={bemClass('__button-box')} flex="86px">
            <Space direction="vertical">
              <Button
                type="primary"
                v-slots={{ icon: () => <IconSearch /> }}
                onClick={handleSearch}
                loading={searchLoading.value}
                disabled={disabled || resetLoading.value}
              >
                搜索
              </Button>
              <Button
                v-slots={{ icon: () => <IconRefresh /> }}
                onClick={handleReset}
                loading={resetLoading.value}
                disabled={disabled || searchLoading.value}
              >
                重置
              </Button>
            </Space>
          </Col>
        </Row>
      )
    }
  },
})
