import { defineConfig, mergeConfig } from 'vite'
import { baseConfig } from '../../build/vite.base.config'
import { VrxArcoProComponentsResolver } from '@vrx-arco/pro-components/resolver'
import { VrxArcoProLayoutResolver } from '@vrx-arco/pro-layout/resolver'
import Components from 'unplugin-vue-components/vite'

export default mergeConfig(
  baseConfig,
  defineConfig({
    plugins: [
      Components({
        resolvers: [VrxArcoProLayoutResolver({}), VrxArcoProComponentsResolver({})],
      }),
    ],
  })
)
