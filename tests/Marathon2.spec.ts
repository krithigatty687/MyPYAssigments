import {test,expect} from '@playwright/test'
test("Search product, apply filters, add to cart in Decathlon",async({page})=>
{
await page.goto("https://www.decathlon.in/")
const title=await page.title()
console.log(title)
})