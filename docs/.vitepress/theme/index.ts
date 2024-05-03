import '@arco-design/web-vue/es/table/style/css'
import '@vrx-arco/pro-components/arco-style-css'
import '@vrx-arco/pro-components/style/index.css'
import '@vrx-arco/color-picker/arco-style-css'
import '@vrx-arco/color-picker/style/index.css'
import 'uno.css'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import Layout from './CustomLayout.vue'
import {
  ApiTable,
  ApiTableLine,
  EventTable,
  EventTableLine,
  SlotTable,
  SlotTableLine,
} from './components'
import './style/style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }: { app: App }) {
    app.component('ApiTable', ApiTable)
    app.component('ApiTableLine', ApiTableLine)
    app.component('SlotTable', SlotTable)
    app.component('SlotTableLine', SlotTableLine)
    app.component('EventTable', EventTable)
    app.component('EventTableLine', EventTableLine)
  },
} as Theme
