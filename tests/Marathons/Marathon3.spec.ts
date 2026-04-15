import {test,expect} from '@playwright/test'

test("Service now application", async({page})=>
{
    //launching application
await page.goto("https://dev280319.service-now.com/navpage.do");
await page.locator("#user_name").fill("admin")
await page.locator("#user_password").fill("YApVc0-vyN5-")
await page.locator("//button[text()='Log in']").click();
await page.getByRole("menuitem",{name:'All'}).click();
const frameloc=page.frameLocator("#gsft_main");
await page.getByRole("link",{name:'Service Catalog 3 of 23'}).click();
await frameloc.locator("//a/h2[contains(text(),'Mobiles')]").click();
await frameloc.getByRole("link",{name:'Apple iPhone 13 pro'}).click();
await frameloc.locator(".radio-label",{hasText :"Yes"}).click()
await frameloc.locator("//input[@class='cat_item_option sc-content-pad form-control']").fill("99")
await frameloc.locator("//select[@class='form-control cat_item_option ']").selectOption("Unlimited [add $4.00]")
await frameloc.locator(".radio-label",{hasText :"Sierra Blue"}).click()
await frameloc.locator(".radio-label",{hasText :"512 GB"}).click();
await frameloc.locator("//button[text()='Order Now']").click();
const orderdetails='Thank you, your request has been submitted';
const actualtext=await frameloc.locator("(//div[@class='notification notification-success']/span)[2]").innerText();
//assertion
expect(actualtext,orderdetails);
//screenshot
await page.screenshot({ path: 'data/file1.png', fullPage: true });
})