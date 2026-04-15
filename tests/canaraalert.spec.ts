import {test} from '@playwright/test'

test("alertss", async({page})=>
{
await page.goto("https://www.canarabank.bank.in/pages/Net-banking");


await page.locator("//a[@id='netbanking-link']").click();
await page.locator("(//button[text()='Continue'])[2]").click();



})