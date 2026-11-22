import { test, expect } from '@playwright/test';
import { PageManager } from '../pom/page_manager';
import { AllerSur, acceptCookies } from '../utility/functions';
import userData from '../data/userData.json';

test('inscription puis connexion @account @signup @login', async ({ page }) => {

  const pages = new PageManager(page);

  await test.step('Ouvrir le site et accepter les cookies', async () => {
    await AllerSur(page, userData.url);
    await acceptCookies(page);
  });

  await test.step('Créer un compte', async () => {
    await pages.home.header.signUpLink.click();
    await pages.signUp.firstNameField.fill(userData.name);
    await pages.signUp.emailField.fill(userData.email);
    await pages.signUp.passwordField.fill(userData.password);
    await pages.signUp.signUpButton.click();
  });

  await test.step('Se connecter avec le compte créé', async () => {
    await pages.home.header.loginLink.click();
    await pages.login.emailField.fill(userData.email);
    await pages.login.passwordField.fill(userData.password);
    await pages.login.loginButton.click();
  });

  await test.step('Vérifier l’accès au compte', async () => {
    await expect(pages.myAccount.yourAccountTitle).toBeVisible();
  });
});