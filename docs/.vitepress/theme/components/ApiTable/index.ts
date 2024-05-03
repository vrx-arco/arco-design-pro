import type { App } from 'vue'
import ApiTable from './ApiTable.vue'
import ApiTableLine from './ApiTableLine.vue'

ApiTable.install = (app: App) => {
  app.component(ApiTable.name, ApiTable)
  app.component(ApiTableLine.name, ApiTableLine)
}

export { ApiTable, ApiTableLine }
