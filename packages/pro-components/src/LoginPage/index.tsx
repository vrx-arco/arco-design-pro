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
    logo: string(),
    title: string(),
    bannerTitle: string(),
    bannerSubtitle: string(),
    bannerImage: string(),
    formTitle: string(),
    formSubtitle: string(),
    formForget: bool().def(false),
    formRegister: bool().def(false),
    formRemember: bool().def(false),
    onSubmit: func<(model: LoginFormModel, remember: boolean) => Promise<any>>(),
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
