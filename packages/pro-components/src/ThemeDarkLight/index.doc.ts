import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'ThemeDarkLight',
  props: {},
  slots: [],
  events: [
    {
      name: 'change',
      desc: '暗色模式切换回调',
    },
  ],
  arco: ['Button'],
})
