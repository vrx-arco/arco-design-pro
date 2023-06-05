import { defineConfig } from '@vrx/cp'
import { vrxArcoPlugin } from '@vrx-arco/shared'
export default defineConfig({
  docs: {
    exclude: [/^use/],
  },
  plugins: [vrxArcoPlugin()],
})
