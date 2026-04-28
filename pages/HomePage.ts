import { Page } from '@playwright/test'
import BasePage from './BasePage'
import config from '../utils/config'

class HomePage extends BasePage {

  //constructor
  constructor(page: Page){
    super(page)
  }

  //selectors
  private searchBar = '[data-test="search-query"]'
  private searchButton = '[data-test="search-submit"]'
  
  async navigate(){
    await super.navigate(`${config.baseUrl}`)
  }
  async search(searchbar: string){
    await this.page.fill(this.searchBar, searchbar)
    await this.page.click(this.searchButton)
  }
  
}

export default HomePage