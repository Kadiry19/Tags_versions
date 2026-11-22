import { type Locator, type Page } from '@playwright/test';
import { Header } from '../com/header';
import { Footer } from '../com/footer';

export class HomePage {
  readonly header: Header;
  readonly footer: Footer;
  readonly searchResultImages: Locator;

  constructor(page: Page) {
    this.header = new Header(page);
    this.footer = new Footer(page);
    this.searchResultImages = page.locator('.product-card img');
  }
}