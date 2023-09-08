import { expect, test, type Page } from '@playwright/test';

const addTodo = async (title: string, content: string, page: Page) => {
  await page.getByLabel('Title').fill(title);
  await page.getByLabel('Content').fill(content);

  await page.getByRole('button', { name: 'Add todo' }).click();

  await page.getByText(title).waitFor({ state: 'attached' });
};

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('index page has expected h1', async ({ page }) => {
  await expect(page.getByRole('heading', { name: "Mbappé's favorite todos app" })).toBeVisible();
});

test('form creates new todo and shows it in the list', async ({ page }) => {
  // Create todo
  await addTodo('My title', 'My content', page);

  // Make sure it was added
  const todo = await page.getByTestId('todo').first();

  await expect(todo.getByText('My title')).toBeVisible();
  await expect(todo.getByText('My content')).toBeVisible();
});

test('"remove" button removes todo from list by calling endpoint', async ({ page }) => {
  const unique_title = Math.random().toString();

  await addTodo(unique_title, 'content', page);

  const deleteRequest = page.waitForRequest((request) => {
    const result = request.url().includes('api/todos/') && request.method() === 'DELETE';

    return result;
  });

  await page.getByRole('button', { name: 'Remove' }).first().click();

  await deleteRequest;

  await expect(page.getByText(unique_title)).not.toBeAttached();
});
