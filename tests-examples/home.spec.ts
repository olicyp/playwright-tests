import {test, expect} from "@playwright/test";

test.describe("First Test Suite", () => {

    test('Open Homepage', async ({ page }) => {
        await page.goto("https://practice.sdetunicorns.com");

        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");

        await page.locator('#menu-item-491').getByRole('link', { name: 'About' }).click();

        await expect(page).toHaveURL("https://practice.sdetunicorns.com/about/");

        await expect(page).toHaveTitle("About – Practice E-Commerce Site");
    })

    test('Using CSS selector', async ({ page }) => {
        await page.goto("https://practice.sdetunicorns.com");

        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");

       
       await page.getByRole('link', { name: 'get started', exact: true }).click();
       

        await expect(page).toHaveURL("https://practice.sdetunicorns.com/#get-started");

        const homeButton = page.locator('#menu-item-489').getByRole('link', { name: 'Home' });

        await homeButton.click();

        await expect(page).toHaveURL("https://practice.sdetunicorns.com");  
    })

    test('Saints Google Search', async ({ page }) => {

        await page.goto("https://www.google.com/");
        
     await page.locator('iframe[name="callout"]').contentFrame().getByLabel('Stay signed out').click();

       await page.getByRole('combobox', { name: 'Search' }).fill('New Orleans Saints');

       //await page.locator('//*//*[@id="Alh6id"]/div[1]/div/ul/li[1]/div').click;

       await page.locator('div').filter({ hasText: /^new orleans saints$/ }).click();

       await expect(page.getByRole('link', { name: 'New Orleans Saints 3rd in NFC' })).toBeVisible();
       
       
    })

    test('Find Nav Bar Links and Verify', async ({ page }) => {

        const expectedLinks = [ "Home", "About", "Shop", "Blog", "Contact", "My account"];
        const homeButton = page.locator('#menu-item-489').getByRole('link', { name: 'Home' });
        const contactButton = page.locator('#menu-item-493').getByRole('link', { name: 'Contact' });
        const blogButton = page.locator('#menu-item-490').getByRole('link', { name: 'Blog' });

            await page.goto("https://practice.sdetunicorns.com");
            await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
            await page.getByRole('link', { name: 'get started', exact: true }).click();
            await expect(page).toHaveURL("https://practice.sdetunicorns.com/#get-started");  
            await homeButton.click();
            await expect(page).toHaveURL("https://practice.sdetunicorns.com");
            const navLinks = await page.locator('#zak-primary-menu li[id*=menu]');
        //await expect(await navLinks.allTextContents()).toEqual(expectedLinks);
        //print out all the links by looping through links
        for (const el of await navLinks.elementHandles()) {
            console.log(await el.textContent());
        }
        contactButton.click();
        await page.getByLabel('Name *').fill('Oli Cyp');
        await page.getByLabel('Email *').fill('OliCyp@nowere.com');
        await page.getByLabel('Phone *').fill('504-912-3452');
        await page.getByRole('textbox', {name: 'Message'}).fill('One Love');
        await page.getByRole('button', {name: 'Submit'}).click
        await expect(page.getByRole('alert')).toContainText('Thanks for contacting us! We will be in touch with you shortly');
        
        //await expect(page.getByText('Thanks for contacting us! We')).toBeVisible();

        const postLinks = await page.locator('#zak-secondary li');
        
  
    })    

    test('recorded test', async ({ page }) => {

        await page.goto('https://practice.sdetunicorns.com/')
  await page.locator('#menu-item-493').getByRole('link', { name: 'Contact' }).click()
  await page.locator('#evf-277-field_ys0GeZISRs-1-container').click()
  await page.getByLabel('Name *').fill('o')
  await page.getByLabel('Name *').press('CapsLock')
  await page.getByLabel('Name *').fill('oOCA')
  await page.getByLabel('Email *').click()
  await page.getByLabel('Email *').fill('A@GMAIL.COM')
  await page.getByLabel('Email *').press('Tab')
  await page.getByLabel('Phone *').press('CapsLock')
  await page.getByLabel('Phone *').fill('504-912-3452')
  await page.getByLabel('Message').click()
  await page.getByLabel('Message').fill('one')
  await page.getByRole('button', { name: 'Submit' }).click()
  await expect(page.getByRole('alert')).toContainText('Thanks for contacting us! We will be in touch with you shortly')
        
    })


})