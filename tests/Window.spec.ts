import {test} from '@playwright/test'

test("Window Handling", async({page,context})=>
{
await page.goto("https://www.leafground.com/window.xhtml");

let parentwindow=context.waitForEvent('page');//create event listner and promise is pending
await page.locator("//span[text()='Open']").click();
let child=await parentwindow;//resolving promise
await child.locator("#email").fill("krithygatty@gmail.com");
await child.locator("#message").fill("Hello");
const childtitle=await child.title()
console.log(childtitle);
child.close();


await page.locator("//span[text()='Open Multiple']").click()

}

)