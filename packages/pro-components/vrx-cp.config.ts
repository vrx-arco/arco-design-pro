import { defineConfig } from '@vrx/cp'
import { vrxArcoPlugin } from '@vrx-arco/internal'

export default defineConfig({
  docs: {
    exclude: [/^use/],
  },
  plugins: [vrxArcoPlugin()],
  emitCJS: false,
  vite: {
    experimental: {
      enableNativePlugin: true,
    },
  },
})
