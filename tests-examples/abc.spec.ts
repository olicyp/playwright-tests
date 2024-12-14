import { test, expect } from '@playwright/test';
const testdata = JSON.parse(JSON.stringify(require("../testdata.json")))

test.describe('Data-Driven Test Suite for Demo App', () => {
  test.beforeEach(async ({ page }) => {
   //Login to Demo App.
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('admin');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('password123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  });

  // Generate tests dynamically from the test data
  testdata.forEach(({ description, navigation, column, task, tags }) => {
    test(description, async ({ page }) => {
        await page.getByRole('banner').getByRole('heading', { name: '${navigation}'}).click
    
        //Verify "Implement user authentication" is in the "To Do" column.
   const todoColumn = await page.getByText('${column}')
   await expect(todoColumn).toContainText('${task}')

      // Step 5: Verify the specified tags are visible
      for (const t of tags) {
        const tags = page.getByText('${tags}')
        await expect(tags).toBeVisible
      }
    });
  });
});
