import {test,expect} from '@playwright/test'

test("Test visiblity", async({page})=>
{

await page.goto("https://leafground.com/waits.xhtml")
await page.locator("//span[text()='Click']").first().click();
await page.locator("//span[text()='I am here']").waitFor({state:'visible'})
await page.locator("//span[text()='Click']").nth(2).click();
await page.locator("//span[text()='I am about to hide']").waitFor({state:'hidden'});


})