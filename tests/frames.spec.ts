import {expect, test}   from "@playwright/test"

test('Program to handle frames',async ({page}) => {

await page.goto("https://www.leafground.com/frame.xhtml")

await page.frameLocator("//iframe[@src='page.xhtml']").frameLocator("//iframe[@src='framebutton.xhtml']")
.locator("#Click").click()

const text=await page.frameLocator("//iframe[@src='page.xhtml']").frameLocator("//iframe[@src='framebutton.xhtml']")
.locator('#Click').innerText();

console.log(text);

expect(text).toBe('Hurray! You Clicked Me.');
}
)