import { test, expect } from '@playwright/test'
import HomePage from '../pages/HomePage'

test.describe('Home Tests', () => {

  test('should search for a product', async ({ page }) => {
    const homePage = new HomePage(page)

    await homePage.navigate()
    
    // Take screenshot to see what CI actually sees
    await page.screenshot({ path: 'test-results/debug.png', fullPage: true })
    console.log('Page URL:', page.url())
    console.log('Page title:', await page.title())

    await homePage.search('pliers')
    await expect(page.locator('[data-test="product-name"]').first()).toBeVisible()
  })

})