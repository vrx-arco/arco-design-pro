import { computed, defineComponent, FunctionalComponent, ref, toRaw } from 'vue'
import { bool, func, object, oneOf, string } from 'vue-types'
import { Drawer, Form, Modal } from '@arco-design/web-vue'
import { controlVModel } from '@vrx-arco/use'
import { klona } from 'klona/json'

export * from './useEditFormDialog'
const Dialog: FunctionalComponent<{
  visible?: boolean
  type: 'drawer' | 'modal'
  title: string
  width?: number | string
  unmountOnClose?: boolean
  onSubmit?: () => Promise<any>
}> = (props, { slots, emit }) => {
  const { type, title, width, visible, unmountOnClose } = props
  const handleSubmit = (done) => {
    props
      .onSubmit?.()
      .then(() => done(true))
      .catch(() => done(false))
  }
  if (type === 'modal') {
    return (
      <Modal
        title={title}
        width={width}
        draggable
        unmountOnClose={unmountOnClose}
        visible={visible}
        onBeforeOk={handleSubmit}
        onUpdate:visible={(visible) => {
          emit('update:visible', visible)
        }}
      >
        {slots.default?.()}
      </Modal>
    )
  }
  return (
    <Drawer
      title={title}
      width={width}
      unmountOnClose={unmountOnClose}
      visible={visible}
      onBeforeOk={handleSubmit}
      onUpdate:visible={(visible) => {
        emit('update:visible', visible)
      }}
    >
      {slots.default?.()}
    </Drawer>
  )
}

/**
 * 新增/编辑表单弹框
 */
export const EditFormDialog = defineComponent({
  name: 'vrx-arco-edit-form-dialog',
  props: {
    /**
     * 弹框类型
     */
    type: oneOf(['drawer', 'modal'] as const).def('drawer'),
    /**
     * 根据是否有id，判断是否为编辑状态
     */
    id: string().isRequired,
    /**
     * 表单数据
     */
    model: object(),
    /**
     * 标题
     */
    title: string(),
    /**
     * 宽度
     */
    width: string(),
    /**
     * 表单验证规则
     */
    rules: object(),
    /**
     * 是否禁用表单
     */
    disabled: bool().def(false),
    /**
     * 是否在弹框关闭时销毁整个表单
     */
    unmountOnClose: bool().def(true),
    /**
     * 新增方法
     */
    add: func<(model: Record<string, any>) => Promise<any>>(),
    /**
     * 编辑方法
     */
    edit: func<(model: Record<string, any>) => Promise<any>>(),
    /**
     * 提交方法
     */
    onConfirm: func<(model: Record<string, any>) => Promise<any>>(),
  },
  emits: ['update:visible', 'update:model', 'confirm'],
  setup: (props, { emit, slots, expose }) => {
    /**
     * 控制弹框显示
     */
    const visible = ref(false)

    /**
     * 表单数据
     */
    const model = controlVModel(props, 'model', emit, () => ({} as Record<string, any>))

    /**
     * 是否是修改状态
     */
    const isEdit = computed(() => !!model.value[props.id])

    /**
     * 弹框标题
     */
    const title = computed(() => {
      let prefix = isEdit.value ? '修改' : '新增'
      if (props.disabled) {
        prefix = ''
      }
      return `${prefix}${props.title || ''}`
    })

    /**
     * 表单实例
     */
    const formRef = ref()

    /**
     * 提交方法
     */
    const submitFn = () => {
      const formModel = klona(toRaw(model.value))
      if (props.onConfirm) {
        return props.onConfirm(formModel)
      }
      if (!props.edit || !props.add) {
        return Promise.resolve()
      }
      if (isEdit.value) {
        return props.edit(formModel)
      }

      return props.add(formModel)
    }

    /**
     * 提交事件
     */
    const handleSubmit = () => {
      return formRef.value
        .validate()
        .then((error) => (error ? Promise.reject(error) : Promise.resolve()))
        .then(submitFn)
    }

    const open = (value = {}) => {
      model.value = klona(toRaw(value))
      visible.value = true
    }

    expose({ open })

    return () => {
      const { type, width, unmountOnClose, rules, disabled } = props

      return (
        <Dialog
          v-model:visible={visible.value}
          type={type}
          width={width}
          title={title.value}
          unmountOnClose={unmountOnClose}
          onSubmit={handleSubmit}
        >
          <Form ref={formRef} model={model.value} autoLabelWidth rules={rules} disabled={disabled}>
            {slots.default?.({ model: model.value, isEdit: isEdit.value })}
          </Form>
        </Dialog>
      )
    }
  },
})
