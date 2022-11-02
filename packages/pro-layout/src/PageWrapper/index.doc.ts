import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'PageWrapper',
  props: {},
  slots: [{ name: 'default', desc: '默认插槽' }],
  events: [],
  arco: ['Breadcrumb', 'Layout'],
})
