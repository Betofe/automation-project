import { Page } from '@playwright/test'
import BasePage from './BasePage'
import config from '../utils/config'

class LoginPage extends BasePage {

  // These are the SELECTORS — they live here and nowhere else
  private usernameField = '#username'
  private passwordField = '#password'
  private loginButton = 'button[type="submit"]'
  private errorMessage = '#flash'

  constructor(page: Page) {
    super(page) // This calls the BasePage constructor — gives us this.page
  }

  async navigate() {
  await super.navigate(`${config.baseUrl}/login`)
}

  async login(username: string, password: string) {
    await this.page.fill(this.usernameField, username)
    await this.page.fill(this.passwordField, password)
    await this.page.click(this.loginButton)
  }

  async getErrorMessage(): Promise<string> {
    return await this.page.textContent(this.errorMessage) ?? ''
  }

}

export default LoginPage