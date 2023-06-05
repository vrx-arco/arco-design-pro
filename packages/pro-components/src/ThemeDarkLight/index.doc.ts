import { defineGenDoc } from '@vrx/cp'

export default defineGenDoc({
  name: 'ThemeDarkLight',
  events: {
    change: {
      desc: '暗色模式切换回调',
    },
  },
  arco: ['Button'],
})
