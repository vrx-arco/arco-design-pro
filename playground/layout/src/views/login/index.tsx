import { defineComponent } from 'vue'
import { LoginForm } from '@vrx-arco/pro-components'

const MainPage = defineComponent({
  setup: () => {
    return () => {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: '#fff',
          }}
        >
          <LoginForm
            title={'登录 Arco Design Pro'}
            subtitle={'登录 Arco Design Pro'}
            style="width:320px;"
            register
            remember
            onSubmit={() => {
              return Promise.reject('登录')
            }}
          />
        </div>
      )
    }
  },
})

export default MainPage
