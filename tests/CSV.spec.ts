import {test} from '@playwright/test'
import {parse }from "csv-parse/sync"
import path from 'path'

import fs from 'fs'
import { asyncWrapProviders } from 'async_hooks'

let value:any[]=parse(fs.readFileSync(path.join(__dirname,"../data/data1.csv")),{columns:true,skip_empty_lines:true})
for(let login of value)
{
test(`learn to read data from json ${login.Testcaseid}`, async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.getByRole("textbox",{name:'Username'}).fill(login.Username);
await page.getByRole("textbox",{name:'Password'}).fill(login.password)
await page.getByRole("button",{name:'Login'}).click();
await page.getByText("CRM/SF").click();

})

}