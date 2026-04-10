import {test} from '@playwright/test'

    test.use({storageState:'data/salesforce.json'})

test("Use storage state", async({page})=>
{
await page.goto("https://testleaf.lightning.force.com/lightning/page/home");
await page.locator("(//span[text()='Accounts'])[1]").click();

}
)