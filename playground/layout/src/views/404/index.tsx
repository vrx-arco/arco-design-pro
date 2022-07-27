import { defineComponent } from 'vue'
import { PageWrapper } from '@vrx-arco/pro-layout'

const MainPage = defineComponent({
  setup: () => {
    return () => {
      return <PageWrapper></PageWrapper>
    }
  },
})

export default MainPage
