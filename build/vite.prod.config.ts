import { defineConfig, mergeConfig } from 'vite'
import { resolve } from 'node:path'
import { baseConfig } from './vite.base.config'

const FormatExt = {
  es: '.mjs',
  cjs: '.js',
}

export const prodConfig = mergeConfig(
  baseConfig,
  defineConfig({
    server: {
      host: true,
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'name',
        formats: ['cjs', 'es'],
        fileName: (m) => `index${FormatExt[m]}`,
      },
      rollupOptions: {
        input: [resolve(process.cwd(), 'src/index.ts')],
        output: [
          {
            format: 'es',
            dir: 'dist',
            entryFileNames: '[name].mjs',
            preserveModules: true,
            preserveModulesRoot: resolve(process.cwd(), 'src'),
          },
          {
            format: 'cjs',
            dir: 'dist',
            entryFileNames: '[name].js',
            preserveModules: true,
            preserveModulesRoot: resolve(process.cwd(), 'src'),
          },
        ],
        external: [
          'vue',
          'vue-types',
          'vue-router',
          '@arco-design/web-vue',
          '@vueuse/core',
          RegExp(String.raw`@arco-design/web-vue/es/.*`),
          RegExp(String.raw`@arco-design/web-vue/lib/.*`),
          RegExp(String.raw`@vrx-arco/.*`),
        ],
      },
      minify: false,
      target: 'es2015',
    },
    plugins: [
      {
        name: 'vite:external-node_modules',
        enforce: 'pre',
        async resolveId(source: string, importer) {
          const result = await this.resolve(source, importer, {
            skipSelf: true,
            custom: { 'node-resolve': {} },
          })

          if (result && /node_modules/.test(result.id)) {
            return false
          }

          return null
        },
      },
    ],
  })
)
