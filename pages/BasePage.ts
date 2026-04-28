import { Page } from '@playwright/test'

class BasePage {
  
  // This is the CONSTRUCTOR — it runs automatically when you create an object
  // It receives the Playwright page and stores it so all methods can use it
  protected page: Page

  constructor(page: Page) {
    this.page = page
  }

  // A method every page can use — navigate to a URL
  async navigate(url: string) {
    await this.page.goto(url)
  }

  // A method every page can use — get the current page title
  async getTitle(): Promise<string> {
    return await this.page.title()
  }

}

export default BasePage