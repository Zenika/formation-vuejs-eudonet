import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'tests/e2e/cypress/specs/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173',
    supportFile: 'tests/e2e/cypress/support/e2e.ts',
    fixturesFolder: 'tests/e2e/cypress/fixtures',
  },

  component: {
    indexHtmlFile: 'tests/component/cypress/support/component-index.html',
    specPattern: 'tests/component/cypress/specs/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    supportFile: 'tests/component/cypress/support/component.ts',
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
})
