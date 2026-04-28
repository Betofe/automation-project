import { test, expect } from '@playwright/test'
import HomePage from '../pages/HomePage'

test.describe('Home Tests', () => {

  test('should search for a product', async ({ page }) => {
    const homePage = new HomePage(page)

    await homePage.navigate()
    await homePage.search('pliers')

    // Wait for results and assert at least one product appears
    await expect(page.locator('[data-test="product-name"]').first()).toBeVisible()
  })

})