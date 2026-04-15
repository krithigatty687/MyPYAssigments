import {test} from '@playwright/test'

import testdata from "../data/Input.json"

for(let logindata of testdata)
{
test(`login data read from ${logindata.TestID}`,async({page})=>{
await page.goto("https://login.salesforce.com/");
await page.locator("#username").fill(logindata.Username);
await page.locator("#password").fill(logindata.Password)
await page.locator("#Login").click();
await page.locator("//div[@class='slds-icon-waffle']").click();
await page.locator("//input[@placeholder='Search apps and items...']").fill("Individuals")
await page.locator("//b[text()='Individuals']").click();


})


}