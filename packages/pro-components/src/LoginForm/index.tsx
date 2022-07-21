import { defineComponent, Ref, ref, toRaw, unref } from 'vue'
import {
  Button,
  Checkbox,
  FieldRule,
  Form,
  Input,
  Link,
  Message,
  Space,
} from '@arco-design/web-vue'
import { IconLock, IconUser } from '@arco-design/web-vue/es/icon'
import { bool, func, string } from 'vue-types'
import '@arco-design/web-vue/es/form/style'
import '@arco-design/web-vue/es/input/style'
import '@arco-design/web-vue/es/space/style'
import '@arco-design/web-vue/es/checkbox/style'
import '@arco-design/web-vue/es/link/style'
import '@arco-design/web-vue/es/button/style'
import '@arco-design/web-vue/es/message/style'
import { style } from './style'
import { useToggle } from '@vueuse/core'

export interface LoginFormModel {
  username: string
  password: string
}

export const LoginForm = defineComponent({
  name: 'vrx-arco-login-form',
  props: {
    forget: bool().def(false),
    register: bool().def(false),
    remember: bool().def(false),
    title: string(),
    subtitle: string(),
    onSubmit: func<() => Promise<any>>(),
  },
  expose: ['setModel'],
  emits: ['submit', 'forget', 'register'],
  setup: (props, { slots, expose, emit }) => {
    style()

    const model = ref({
      username: '',
      password: '',
    })

    const rules = ref<Record<string, FieldRule | FieldRule[]>>({
      username: {
        required: true,
        message: '用户名不能为空',
      },
      password: {
        required: true,
        message: '密码不能为空',
      },
    })

    /**
     * 记住密码选择框
     */
    const rememberChecked = ref(false)

    /**
     * 切换loading
     */
    const [loading, setLoading] = useToggle(false)

    /**
     * 错误信息
     */
    const errorMessage = ref('')

    /**
     * 设置表单值
     * @param data
     */
    const setModel = (data: LoginFormModel | Ref<LoginFormModel>) => {
      model.value = unref(data)
    }

    /**
     * 表单提交
     */
    const handleSubmit = () => {
      const { onSubmit } = props
      setLoading(true)
      errorMessage.value = ''
      return onSubmit?.(toRaw(model.value), rememberChecked.value)
        .then(() => {
          Message.success('登陆成功')
        })
        .catch((err) => {
          if (typeof err === 'string') {
            errorMessage.value = err
          }
          if (err instanceof Error) {
            errorMessage.value = err.message
          }
          Message.error(errorMessage.value || '登陆出错')
        })
        .finally(() => {
          setLoading(false)
        })
    }

    expose({ setModel })

    return () => {
      const { register, remember, forget, title, subtitle } = props
      return (
        <div class="vrx-arco-login-form">
          {slots.title?.() || (
            <>
              <div class="vrx-arco-login-form__title">{title}</div>
              <div class="vrx-arco-login-form__subtitle">{subtitle}</div>
            </>
          )}
          <div class="vrx-arco-login-form__error-msg">{errorMessage.value}</div>
          <Form
            model={model.value}
            rules={rules.value}
            layout="vertical"
            onSubmitSuccess={handleSubmit}
          >
            <Form.Item field="username" hideLabel hideAsterisk validateTrigger="input">
              <Input
                v-model={model.value.username}
                placeholder="请输入用户名"
                v-slots={{ prefix: () => <IconUser /> }}
              />
            </Form.Item>
            <Form.Item field="password" hideLabel hideAsterisk validateTrigger="input">
              <Input.Password
                v-model={model.value.password}
                {...{ placeholder: '请输入密码', allowClear: true }}
                v-slots={{ prefix: () => <IconLock /> }}
              />
            </Form.Item>
            <Space direction="vertical" size={16}>
              {(remember || forget) && (
                <div class="vrx-arco-login-form__password-actions">
                  {remember && <Checkbox v-model={rememberChecked.value}>记住密码</Checkbox>}
                  {forget && <Link onClick={() => emit('forget')}>忘记密码</Link>}
                </div>
              )}
              <Button type="primary" htmlType="submit" long loading={loading.value}>
                登陆
              </Button>
              {register && (
                <Button
                  type="text"
                  long
                  class="vrx-arco-login-form__register-btn"
                  onClick={() => emit('register')}
                >
                  注册
                </Button>
              )}
            </Space>
          </Form>
        </div>
      )
    }
  },
})
