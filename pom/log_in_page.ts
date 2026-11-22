// pages/LoginPage.ts
import { type Locator, type Page } from '@playwright/test';
import { Header } from '../com/header';
import { Footer } from '../com/footer';

export class LoginPage {
  readonly header: Header;
  readonly footer: Footer;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.header = new Header(page);
    this.footer = new Footer(page);
    this.emailField = page.getByLabel(/email/i);
    this.passwordField = page.getByLabel(/password/i);
    this.loginButton = page.getByRole('button', { name: /log in|sign in/i });
  }
}