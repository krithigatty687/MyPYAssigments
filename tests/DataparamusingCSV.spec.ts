import {test} from '@playwright/test'
import {parse} from "csv-parse/sync"
import path from 'path'

import fs from 'fs'
import { asyncWrapProviders } from 'async_hooks'

let value:any[]=parse(fs.readFileSync(path.join(__dirname,"../data/data3.csv")),{columns:true,skip_empty_lines:true})
for(let alldetails of value)
{

test(`Running test case ${alldetails.Testcasename}`, async({page})=>
{
await page.goto(alldetails.URL);
await page.getByRole("textbox",{name:'Username'}).fill(alldetails.Username);
await page.getByRole("textbox",{name:'Password'}).fill(alldetails.Password)
await page.getByRole("button",{name:'Login'}).click();
await page.getByText(alldetails.clicklink).click();
await page.locator("//a[text()='Leads']").click()
await page.locator("//a[text()='Create Lead']").click();
await page.locator("//input[@id='createLeadForm_companyName']").fill(alldetails.Company)
await page.locator("//input[@id='createLeadForm_firstName']").fill(alldetails.Firstname)
await page.locator("//input[@id='createLeadForm_lastName']").fill(alldetails.Lastname)
await page.locator("//select[@id='createLeadForm_dataSourceId']").selectOption({label:alldetails.Source})
await page.locator("//select[@id='createLeadForm_marketingCampaignId']").selectOption({label:alldetails.Market})
const market=await page.locator("//select[@id='createLeadForm_marketingCampaignId']//option")
const marketcount=await page.locator("//select[@id='createLeadForm_marketingCampaignId']//option").count()
await console.log(marketcount);
for(let i=0;i<marketcount;i++)
{
const text1  = await market.nth(i).innerText();
console.log(text1)
}

await page.locator("//select[@id='createLeadForm_industryEnumId']").selectOption({index:6})
await page.locator("//select[@name='currencyUomId']").selectOption({label:alldetails.Currency})
await page.locator("//select[@id='createLeadForm_generalCountryGeoId']").selectOption(alldetails.Country)
await page.locator("//select[@id='createLeadForm_generalStateProvinceGeoId']").selectOption(alldetails.state)
const state= page.locator("//select[@id='createLeadForm_generalStateProvinceGeoId']//option")
const totlastatecount=await state.count();
console.log(totlastatecount);
for(let i=0;i<totlastatecount;i++)
{
const states=await state.nth(i).innerText();
console.log(states)

}

await page.locator("//input[@value='Create Lead']").click();
})


}