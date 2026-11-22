// pages/SignUpPage.ts
import { type Locator, type Page } from '@playwright/test';
import { Header } from '../com/header';
import { Footer } from '../com/footer';

export class SignUpPage {
  readonly header: Header;
  readonly footer: Footer;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly signUpButton: Locator;

  constructor(page: Page) {
    this.header = new Header(page);
    this.footer = new Footer(page);
    this.firstNameField = page.locator('input[name="customer[first_name]"]');
    this.lastNameField = page.locator('input[name="customer[last_name]"]');
    this.emailField = page.locator('input[name="customer[email]"]');
    this.passwordField = page.locator('input[name="customer[password]"]');
    this.signUpButton = page.getByRole('button', { name: 'Create' });
  }
}