import { defineGenDoc } from '@vrx/cp'

export default defineGenDoc({
  name: 'PageWrapper',
  slots: { default: { desc: '默认插槽' } },
  arco: ['Breadcrumb', 'Scrollbar'],
})
