import App from './App'
import { createVrxArcoApp } from '@vrx-arco/app'
import './index.scss'
import '@vrx-arco/pro-components/arco-style'
import '@vrx-arco/pro-layout/arco-style'
import { routes } from './router/modules'

createVrxArcoApp({
  rootComponent: App,
  rootContainer: '#app',
  router: {
    routes,
    checkPermission: () => [],
    pageNotFound: {
      name: 'Page404',
      component: () => import('./views/404'),
    },
    loginExpiredRedirect: 'login',
  },
})
