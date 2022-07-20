import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

const MainPage = defineComponent({
  setup: () => {
    return () => {
      return <RouterView />
    }
  },
})

export default MainPage
