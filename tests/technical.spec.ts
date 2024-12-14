import { test, expect } from '@playwright/test';
import data1 from './testdata.json'
import login from './logindata.json'
const testdata = JSON.parse(JSON.stringify(require("./testdata.json")));


test.describe('Loop Technical', () => {
    
    test.beforeEach(async ({ page }) => {

        //Login to Demo App.
  await page.goto(login.url);
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill(login.username);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(login.password);
  await page.getByRole('button', { name: 'Sign in' }).click();
        
  //For each loop to run the test with 8 different data sets stored in Json file for Data driven technique
    })
    data1.forEach((data1) => {
    test("Test Cases", async ({page}) => {

        //Navigate to Web Application and Mobile Application
        await page.getByRole('button', { name: data1.navigation }).click();
        //Find Column on webpage
   const Column = page.getByText(data1.column)
   //Check to see if task is included in column
    expect(Column).toContainText(data1.task)
    const taskFinder = Column.getByText(data1.tags)
    await expect(taskFinder).toBeVisible()
   // Step 5: Verify the specified tags are visible
      for (const t of data1.tags) {
        const tags = page.getByText(data1.tags)
         expect(tags).toBeVisible
      }
        
      })
        
    })
    
    
})
