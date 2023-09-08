import { expect, test, type Page, type Request } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('todo').first().getByRole('link', { name: 'Edit' }).click();

  await page.waitForURL('**/edit');
});

test("form fields can't be empty", async ({ page }) => {
  const requests: Request[] = [];

  page.on('request', (request) => requests.push(request));

  await page.getByLabel('Title').fill('');
  await page.getByLabel('Content').fill('');

  await page.getByRole('button', { name: 'Edit todo' }).click();

  expect(requests).toHaveLength(0);
});

test('user is able to edit and submit form', async ({ page }) => {
  const editRequest = page.waitForResponse((response) => response.url().includes('/edit'));

  await page.getByLabel('Title').fill('__title');
  await page.getByLabel('Content').fill('__content');

  await page.getByRole('button', { name: 'Edit todo' }).click();

  await expect(page.getByTestId('edit-loading-msg')).toBeVisible();

  await editRequest;

  await expect(page.getByTestId('edit-done-msg')).toBeVisible();
});
