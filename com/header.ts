import { type Locator, type Page } from '@playwright/test';

export class Header {
  readonly searchField: Locator;
  readonly loginLink: Locator;
  readonly myAccountLink: Locator;
  readonly signUpLink: Locator;
  readonly logOutLink: Locator;
  readonly cartLink: Locator;

  constructor(private readonly page: Page) {
    this.searchField = page.getByRole('searchbox');
    this.loginLink = page.getByRole('link', { name: 'Log In' });
    this.myAccountLink = page.getByRole('link', { name: /My Account/i });
    this.signUpLink = page.getByRole('link', { name: 'Sign up' });
    this.logOutLink = page.getByRole('link', { name: /Log out/i });
    this.cartLink = page.getByRole('link', { name: /My Cart/i });
  }

  async search(query: string): Promise<void> {
    await this.searchField.fill(query);
    await this.searchField.press('Enter');
  }

  async openLogin(): Promise<void> {
    await this.loginLink.click();
  }

  async openMyAccount(): Promise<void> {
    await this.myAccountLink.click();
  }

  async openSignUp(): Promise<void> {
    await this.signUpLink.click();
  }

  async logOut(): Promise<void> {
    await this.logOutLink.click();
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }
}