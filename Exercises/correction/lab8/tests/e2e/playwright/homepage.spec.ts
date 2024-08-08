import { expect, test } from '@playwright/test'

test('Homepage', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('TV Shows App')

  const headingOne = await page.textContent('h1')
  expect(headingOne).toBe('My TV shows')
})
