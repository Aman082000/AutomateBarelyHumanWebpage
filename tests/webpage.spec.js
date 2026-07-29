import { test, expect } from '@playwright/test';


test.describe('Test Suite', ()=>{

    test.beforeEach('Before Each', async({page})=>{
        await page.goto("https://cri.barelyhuman.dev/");
        await page.getByRole('button', {name:"Search"}).click();
    })

    test('Search a device', async({page})=>{
        
        await page.getByPlaceholder('Search device or rom...').fill('SHIFT')
        await page.getByText("Apply filters").click();

        const rows = page.locator('table tbody tr');
        const count = await rows.count();

        for (let i = 0; i < count; i++) {
            const firstCell = rows.nth(i).locator('td').first();
            await expect(firstCell).toContainText('SHIFT');
        }

    })

    test('Released Drop down', async({page})=>{

        await page.locator('#sort').click();
        await page.locator('#sort').selectOption({ label: 'Oldest' });  

        const rows = page.locator('table tbody tr');

        await expect(rows.nth(0).locator('td').first()).toContainText('G7 ThinQ');
        await expect(rows.nth(1).locator('td').first()).toContainText('Realme 6 (RMX2001)');
        await expect(rows.nth(2).locator('td').first()).toContainText('Realme 6 Pro (RMX206X)');
        
    })

    test('Status Drop down', async({page})=>{
        await page.locator('#status').click();
        await page.locator('#status').selectOption({ label: 'Discontinued' });

        const rows = page.locator('table tbody tr');
        const count = await rows.count();

        for (let i = 0; i < count; i++) {
            const firstCell = rows.nth(i).locator('td').nth(3);
            await expect(firstCell).toContainText('Discontinued');
        }

    })

    test('Items per page drop down', async({page})=>{
        await page.locator('#limit').selectOption({ label: '100 items' });
        await page.getByText('Apply filters').click();

        const rows = page.locator('table tbody tr');
        await expect(rows).toHaveCount(100);
    })

    test('Clear filter', async ({ page }) => {
        await page.getByPlaceholder('Search device or rom...').fill('SHIFT');

        await page.getByText('Apply filters').click();

        await page.getByRole('link', { name: 'Clear filters' }).click();

        await expect(page.getByPlaceholder('Search device or rom...')).toHaveValue('');
        await expect(page.locator('#sort option:checked')).toHaveText('Most recent');
        await expect(page.locator('#status option:checked')).toHaveText('All');
        await expect(page.locator('#limit option:checked')).toHaveText('15 items');

    });

})

test('Suite 2 ', async({page})=>{

    await page.goto("https://www.google.com/");
    await page.getByTitle('Search').fill("Cohere Health");

    await page.getByLabel("Google Search").first().click()





} )

