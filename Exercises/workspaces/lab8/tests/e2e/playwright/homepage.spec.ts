import { test } from '@playwright/test'

test('Homepage', async ({ page }) => {
  await page.goto('/')
  /**
   * Expect:
   * The meta title
   * and
   * the <h1>
   */
})
