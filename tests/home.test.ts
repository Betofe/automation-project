import { test, expect } from '@playwright/test'

test.describe('Todo App Tests', () => {

  test('should add a todo item', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc')
    await page.locator('.new-todo').fill('Buy groceries')
    await page.locator('.new-todo').press('Enter')
    await expect(page.locator('.todo-list li')).toHaveCount(1)
  })

})