import { test, expect } from '@playwright/test'
import LoginPage from '../pages/LoginPage'
import config from '../utils/config'

test.describe('Login Tests', () => {

  test('should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page)  // Creating an OBJECT from the class

    await loginPage.navigate()
    //await page.pause()
    await loginPage.login(
      config.credentials.username,
      config.credentials.password
    )

    await expect(page).toHaveURL(/secure/)
  })

  test('should show error with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.navigate()
    await loginPage.login('wrong@email.com', 'wrongpassword')

    const error = await loginPage.getErrorMessage()
    expect(error).toContain('Your username is invalid') })

})