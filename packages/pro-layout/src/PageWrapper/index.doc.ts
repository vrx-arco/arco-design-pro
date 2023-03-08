import { defineGenDoc } from '@vrx-arco/shared'

export default defineGenDoc({
  name: 'PageWrapper',
  slots: { default: { desc: '默认插槽' } },
  arco: ['Breadcrumb', 'Layout'],
})
