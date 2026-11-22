// pages/MyAccountPage.ts
import { type Locator, type Page } from '@playwright/test';
import { Header } from '../com/header';
import { Footer } from '../com/footer';

export class MyAccountPage {
  readonly header: Header;
  readonly footer: Footer;
  readonly yourAccountTitle: Locator;

  constructor(page: Page) {
    this.header = new Header(page);
    this.footer = new Footer(page);
    this.yourAccountTitle = page.getByText('Your account', { exact: true });
  }
}