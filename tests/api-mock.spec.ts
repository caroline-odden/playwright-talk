import { test, expect } from '@playwright/test';

test('mock api', async ({ page }) => {
  page.route('**/todos', async (route) => {
    const json = [{ title: 'Tooodooo'}]
    route.fulfill({ json })
  })

  await page.goto('localhost:5173');

  const text = await page.getByText('Number of todos:')

  await expect(text).toHaveText("Number of todos: 1")
})