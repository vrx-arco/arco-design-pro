import { defineConfig, mergeConfig } from 'vite'
import { baseConfig } from '../../build/vite.base.config'

export default mergeConfig(baseConfig, defineConfig({}))
