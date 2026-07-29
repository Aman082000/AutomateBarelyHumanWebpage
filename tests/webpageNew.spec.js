import {test, expect} from '@playwright/test'


test.describe('Test Suite', ()=>{

    test.beforeEach('BeforeEach', async({page})=>{
        await page.goto('https://cri.barelyhuman.dev/')
        await page.getByRole('button', {name: "Search"}).click()
    })

    test('Test fill functionality', async({page})=>{
        await page.getByPlaceholder('Search device or rom...').fill("SHIFT");
        await page.getByText("Apply filters").click();


        const row = await page.locator('table tbody tr');
        const rowsCount = row.count();

        for(let i=0;i<rowsCount ;i++){
            let columnValue = await row.nth(i).locator('td').first();
            expect(columnValue).toContainText('SHIFT');
        }
        
    })

    


})