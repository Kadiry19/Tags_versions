import { type Locator, type Page } from '@playwright/test';

export class Footer {
  readonly searchLink: Locator;
  readonly aboutLink: Locator;

  constructor(page: Page) {
    this.searchLink = page.getByRole('link', { name: 'Search' });
    this.aboutLink = page.getByRole('link', { name: 'About Us' });
  }
}