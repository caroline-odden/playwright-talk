import { test, expect } from '@playwright/test';

test('should click button', async ({ page }) => {
    await page.goto('localhost:5173')
    await page.getByRole('button', { name: 'Reset'}).click()
    await page.getByRole('textbox').fill('Talk about Playwright')
    await page.getByRole('button', { name: 'Add'}).click()

    const text = await page.getByText('Talk about Playwright')
  
    await expect(text).toBeVisible()
  })