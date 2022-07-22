import { defineComponent } from 'vue'
import { LoginPage } from '@vrx-arco/pro-components'
import loginBanner from '../../assets/image/login-banner.png'

const MainPage = defineComponent({
  setup: () => {
    return () => {
      return (
        <LoginPage
          title="Arco Design Pro"
          logo="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
          bannerImage={loginBanner}
          bannerTitle="希儿天下第一"
          bannerSubtitle="黑希铠甲合体"
          formTitle="希儿"
          formSubtitle="拜托了，另一个我！"
        />
      )
    }
  },
})

export default MainPage
