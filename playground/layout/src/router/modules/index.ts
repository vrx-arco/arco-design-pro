import { RouteRecordRaw } from 'vue-router'
import Layout from '../../layout/index.vue'
import { moduleRoute } from './module'

export { moduleRoute }
export const routes: RouteRecordRaw[] = [
  {
    name: 'layout',
    path: '/',
    component: Layout,
    children: [...moduleRoute],
  },
]
