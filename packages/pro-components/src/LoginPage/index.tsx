import { defineComponent } from 'vue'
import { loginPageStyle } from './style'
import { bool, func, object, string } from 'vue-types'
import { LoginBanner } from './Banner'
import { Layout } from '@arco-design/web-vue'
import { LoginForm, LoginFormModel } from '../LoginForm'
import { controlVModel } from '@vrx-arco/use'

export const LoginPage = defineComponent({
  name: 'vrx-arco-login-page',
  props: {
    /**
     * logo
     */
    logo: string(),
    /**
     * 标题
     */
    title: string(),
    /**
     * 左侧介绍页标题
     */
    bannerTitle: string(),
    /**
     * 左侧介绍页副标题
     */
    bannerSubtitle: string(),
    /**
     * 左侧介绍页图片
     */
    bannerImage: string(),
    /**
     * 登录表单标题
     */
    formTitle: string(),
    /**
     * 登录表单副标题
     */
    formSubtitle: string(),
    /**
     * 登录表单忘记密码功能
     */
    formForget: bool().def(false),
    /**
     * 登录表单注册功能
     */
    formRegister: bool().def(false),
    /**
     * 登录表单记住密码功能
     */
    formRemember: bool().def(false),
    onSubmit: func<(model: LoginFormModel, remember: boolean) => Promise<any>>(),
    /**
     * 传入任何数据外部受控表单数据
     */
    model: object<LoginFormModel>(),
  },
  emits: ['forget', 'remember', 'register', 'submit'],
  setup: (props, { slots, emit }) => {
    const { bemClass } = loginPageStyle()
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
