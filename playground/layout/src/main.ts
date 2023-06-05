import App from './App'
import { createVrxArcoApp } from '@vrx-arco/app'
import './index.scss'
import '@vrx-arco/pro-components/arco-style'
import '@vrx-arco/pro-layout/arco-style'
import '@vrx-arco/pro-layout/style/index.css'
import '@vrx-arco/pro-components/style/index.css'
import { routes } from './router/modules'

createVrxArcoApp({
  rootComponent: App,
  rootContainer: '#app',
  router: {
    routes,
    dynamicRoutes: [
      {
        path: '/a404',
        name: 'Page404',
        component: () => import('./views/404'),
      },
    ],
    pageNotFound: {
      name: 'Page404',
      component: () => import('./views/404'),
    },
    loginExpiredRedirect: 'login',
  },
  authentication: {
    getPermission: () => [],
    checkPermission: (permission, data) => {
      console.log(permission, data)
      return true
    },
  },
})
