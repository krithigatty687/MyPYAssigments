import {test} from '@playwright/test'

test("storage test", async({page})=>
{
await page.goto("https://login.salesforce.com/");
await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
await page.locator("#password").fill("TestLeaf@2025")
await page.locator("#Login").click();
await page.locator("//button[@title='App Launcher']").click();
await page.context().storageState({path:'data/salesforce.json'});



}
)