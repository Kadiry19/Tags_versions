// utility/functions_global.ts
import {  Page, Locator  } from '@playwright/test';

export async function AllerSur(page: Page, path: string): Promise<void> {
  await page.goto(path);
}


export async function acceptCookies(page: Page): Promise<void> {
  const acceptButton: Locator = page.getByRole('button', {
    name: /accept( all)? cookies|accept all/i,
  });

  if (await acceptButton.isVisible()) {
    await acceptButton.click();
  }
}