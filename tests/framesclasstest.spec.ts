import {expect, test} from '@playwright/test'

test("Frames test", async({page})=>{
await page.goto("https://leafground.com/frame.xhtml");
await page.frameLocator('//iframe[@src="default.xhtml"]').locator("#Click").click();
const message=await page.frameLocator('//iframe[@src="default.xhtml"]').locator("#Click").innerText();
expect(message,"Hurray! You Clicked Me.");
const allframes= page.frames();
const framescount=allframes.length;
console.log("total fames count :",framescount);
//nested frames
await page.frameLocator("//iframe[@src='page.xhtml']").frameLocator("//iframe[@src='framebutton.xhtml']")
.locator("#Click").click();
const text=await page.frameLocator("//iframe[@src='page.xhtml']").frameLocator("//iframe[@src='framebutton.xhtml']")
.locator("#Click").innerText();
expect(text,"Hurray! You Clicked Me.")



})