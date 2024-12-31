import { FunctionalComponent, PropType, computed, defineComponent, ref, toRaw } from 'vue'
import { Drawer, Form, Modal, Notification } from '@arco-design/web-vue'
import { controlVModel, useAbortController } from '@vrx-arco/use'
import { klona } from 'klona/json'
import { SlotsType } from 'vue'
import { type EditFormDialogConfirmOptions, EditFormDialogSlot } from './types'

const Dialog: FunctionalComponent<{
  visible?: boolean
  type: 'drawer' | 'modal'
  title: string
  width?: number | string
  unmountOnClose?: boolean
  onSubmit?: () => Promise<any>
  onCancel?: () => any
  onClose?: () => any
}> = (props, { slots, emit }) => {
  const { type, title, width, visible, unmountOnClose } = props

  const handleSubmit = (done) => {
    props
      .onSubmit?.()
      .then(() => done(true))
      .catch(() => done(false))
  }

  const handleCancel = () => {
    emit('cancel')
  }

  const handleClose = () => {
    emit('close')
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
        onCancel={handleCancel}
        onClose={handleClose}
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
      onCancel={handleCancel}
      onClose={handleClose}
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
    type: {
      type: String as PropType<'drawer' | 'modal'>,
      default: 'drawer',
    },
    /**
     * 根据是否有id，判断是否为编辑状态
     */
    id: {
      type: String,
      required: true,
    },
    /**
     * 表单数据
     */
    model: Object,
    /**
     * 标题
     */
    title: String,
    /**
     * 宽度
     */
    width: [String, Number],
    /**
     * 表单验证规则
     */
    rules: Object,
    /**
     * 是否禁用表单
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否在弹框关闭时销毁整个表单
     */
    unmountOnClose: {
      type: Boolean,
      default: true,
    },
    /**
     * 初始化表单数据
     */
    initModel: {
      type: Function as PropType<() => Record<string, any>>,
      default: () => ({}),
    },
    /**
     * 新增方法
     */
    add: Function as PropType<
      (model: Record<string, any>, options: EditFormDialogConfirmOptions) => Promise<any>
    >,
    /**
     * 编辑方法
     */
    edit: Function as PropType<
      (model: Record<string, any>, options: EditFormDialogConfirmOptions) => Promise<any>
    >,
    /**
     * 自定义新增编辑时标题的前缀 ['新增', '编辑']
     */
    prefix: {
      type: Array as any as PropType<[string, string]>,
      default: () => ['新增', '编辑'],
    },
    /**
     * 提交方法
     */
    onConfirm: Function as PropType<
      (model: Record<string, any>, options: EditFormDialogConfirmOptions) => Promise<any>
    >,
  },
  emits: ['update:visible', 'update:model', 'confirm', 'success', 'close'],
  slots: Object as SlotsType<{ default: EditFormDialogSlot }>,
  setup: (props, { emit, slots, expose }) => {
    /**
     * 控制弹框显示
     */
    const visible = ref(false)

    /**
     * 表单数据
     */
    const model = controlVModel(props, 'model', emit, () => ({}) as Record<string, any>)

    /**
     * 是否是修改状态
     */
    const isEdit = computed(() => !!model.value[props.id])

    /**
     * 弹框标题
     */
    const title = computed(() => {
      const prefixIndex = isEdit.value ? 1 : 0
      let prefix = props.prefix[prefixIndex]
      if (props.disabled) {
        prefix = ''
      }
      return `${prefix}${props.title || ''}`
    })

    /**
     * 表单实例
     */
    const formRef = ref()

    const abortController = useAbortController()

    /**
     * 提交方法
     */
    const submitFn = () => {
      const formModel = klona(toRaw(model.value))
      if (props.onConfirm) {
        return props.onConfirm(formModel, { singal: abortController.signal })
      }
      if (!props.edit || !props.add) {
        return Promise.resolve()
      }
      if (isEdit.value) {
        return props.edit(formModel, { singal: abortController.signal })
      }
      return props.add(formModel, { singal: abortController.signal })
    }

    /**
     * 提交事件
     */
    const handleSubmit = () => {
      return formRef.value
        .validate()
        .then((error) => (error ? Promise.reject(error) : Promise.resolve()))
        .then(submitFn)
        .then(() => {
          Notification.success({
            title: '提示',
            content: `${title.value}成功`,
          })
          emit('success', isEdit.value)
        })
    }

    const handleCancel = () => {
      model.value = klona(props.initModel())
      formRef.value.clearValidate()
    }

    const handleClose = () => {
      abortController.abort()
      emit('close')
    }

    const open = (value) => {
      model.value = klona(toRaw(value) || props.initModel())
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
          onCancel={handleCancel}
          onClose={handleClose}
        >
          <Form ref={formRef} model={model.value} autoLabelWidth rules={rules} disabled={disabled}>
            {slots.default?.({ model: model.value, isEdit: isEdit.value })}
          </Form>
        </Dialog>
      )
    }
  },
})

export interface EditFormDialogInstance extends InstanceType<typeof EditFormDialog> {
  open(value: any): void
}
