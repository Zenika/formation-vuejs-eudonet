import { mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

// https://vitest.dev/config
export default mergeConfig(viteConfig, {
  test: {
    environment: 'jsdom',
  },
})
