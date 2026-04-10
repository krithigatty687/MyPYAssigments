import {test,expect,chromium} from '@playwright/test'
test("Create individual for sales force", async({})=>
{
    const browser=  await chromium.launch();
    const context=await browser.newContext({permissions:['geolocation'],
                                           geolocation:{latitude:12.9141,longitude:74.8560}});
    const page=await context.newPage();
await page.goto("https://login.salesforce.com/");
await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
await page.locator("#password").fill("TestLeaf@2025")
await page.locator("#Login").click();

await page.locator("//button[@title='App Launcher']").click();
await page.locator("//button[text()='View All']").click();
await page.locator("//input[@placeholder='Search apps or items...']").pressSequentially("Accounts")

await page.locator("//span/p/mark").click();
await page.locator("(//a[@title='New'])[1]").click();
//await page.locator("//input[@aria-describedby='help-message-3682']").fill("Mom")
await page.getByRole("textbox",{name:'Account Name'}).fill("Mom")

await page.locator("(//button/span[text()='--None--'])[1]").click();
await page.locator("//span[@title='Prospect']").click();
await page.locator("(//span[text()='--None--'])[2]").click();
await page.locator("//span[@title='Banking']").click();
await page.locator("//button[@name='SaveEdit']").click();
await page.locator("//div[@class='slds-list--inline']").isVisible();

const fupload=page.waitForEvent('filechooser');
await page.locator("(//span[text()='Upload Files'])[1]").click();
let fileupload=await fupload;
await fileupload.setFiles('Utils/PW_W4_Frame_Leafground.pdf')
page.waitForLoadState('domcontentloaded')
await page.locator("//span[text()='Done']").click();
await page.locator("//span[text()='1 file was added to the Account.']").isVisible()
})