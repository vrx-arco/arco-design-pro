import { createApp } from 'vue'
import App from './App'
import './index.scss'
import { defineRouter } from './router'
const app = createApp(App)
defineRouter(app)
app.mount('#app')
