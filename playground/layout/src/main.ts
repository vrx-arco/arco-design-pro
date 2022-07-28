import { createApp } from 'vue'
import App from './App'
import './index.scss'
import '@vrx-arco/pro-components/arco-style-css'
import '@vrx-arco/pro-layout/arco-style-css'
import { defineRouter } from './router'

const app = createApp(App)
defineRouter(app)
app.mount('#app')
