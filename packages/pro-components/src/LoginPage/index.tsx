import { PropType, defineComponent } from 'vue'
import { Layout } from '@arco-design/web-vue'
import { controlVModel } from '@vrx-arco/use'
import { style } from '../style/var'
import { LoginForm, LoginFormModel } from '../LoginForm'
import { LoginBanner } from './Banner'

export const LoginPage = defineComponent({
  name: 'vrx-arco-login-page',
  props: {
    /**
     * logo
     */
    logo: String,
    /**
     * 标题
     */
    title: String,
    /**
     * 左侧介绍页标题
     */
    bannerTitle: String,
    /**
     * 左侧介绍页副标题
     */
    bannerSubtitle: String,
    /**
     * 左侧介绍页图片
     */
    bannerImage: String,
    /**
     * 登录表单标题
     */
    formTitle: String,
    /**
     * 登录表单副标题
     */
    formSubtitle: String,
    /**
     * 登录表单忘记密码功能
     */
    formForget: {
      type: Boolean,
      default: false,
    },
    /**
     * 登录表单注册功能
     */
    formRegister: {
      type: Boolean,
      default: false,
    },
    /**
     * 登录表单记住密码功能
     */
    formRemember: {
      type: Boolean,
      default: false,
    },
    onSubmit: Function as PropType<(model: LoginFormModel, remember: boolean) => Promise<any>>,
    /**
     * 传入任何数据外部受控表单数据
     */
    model: Object as PropType<LoginFormModel>,
  },
  emits: ['forget', 'remember', 'register', 'submit'],
  setup: (props, { slots, emit }) => {
    const { bemClass } = style('login-page')
    const model = controlVModel(props, 'model', emit, () => ({
      username: '',
      password: '',
    }))

    return () => {
      const {
        logo,
        title,
        bannerTitle,
        bannerSubtitle,
        bannerImage,
        formTitle,
        formSubtitle,
        formForget,
        formRegister,
        formRemember,
        onSubmit,
      } = props
      return (
        <Layout class={bemClass()}>
          <Layout.Sider class={bemClass('__sider')} style={{ width: '30%' }}>
            <Layout class={bemClass('__sider-inner')}>
              <Layout.Header class={bemClass('__logo-container')}>
                {slots.logo?.() || <img class={bemClass('__logo')} alt="logo" src={logo} />}
                {slots.title?.() || <div class={bemClass('__logo-text')}>{title}</div>}
              </Layout.Header>
              <Layout.Content>
                <LoginBanner
                  title={bannerTitle}
                  subtitle={bannerSubtitle}
                  image={bannerImage}
                  v-slots={{
                    title: slots.bannerTitle,
                    subtitle: slots.bannerSubtitle,
                    image: slots.bannerImage,
                  }}
                />
              </Layout.Content>
            </Layout>
          </Layout.Sider>
          <Layout.Content class={bemClass('__content')}>
            <LoginForm
              v-model:model={model.value}
              class={bemClass('__form')}
              title={formTitle}
              subtitle={formSubtitle}
              forget={formForget}
              remember={formRemember}
              register={formRegister}
              onSubmit={onSubmit}
              onForget={() => emit('forget')}
              onRegister={() => emit('register')}
              v-slots={{ title: slots.formTitle, form: slots.form }}
            />
          </Layout.Content>
        </Layout>
      )
    }
  },
})
