import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => 
    await page.goto('localhost:5173')
)

test('should show heading', async ({ page }) => {
    const heading = await page.getByRole('heading', { name: 'Playwright demo'})

    await expect(heading).toBeVisible()
})

test('should show button', async ({ page }) => {
    const button = await page.getByRole('button', { name: /Add/})
    
    await expect(button).toBeVisible()
})
  