import {test} from '@playwright/test'

test("nth method", async({page})=>

{

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("Demosalesmanager");
      await page.locator("#password").fill("crmsfa");
      await page.locator(".decorativeSubmit").click();
      await page.locator("//a[contains(text(),'CRM')]").click();
 await page.locator("//a[text()='Leads']").click();
 await page.locator("//a[text()= 'Create Lead']").click();
await page.locator("//input[@id='createLeadForm_companyName']").fill("krithi")
await page.locator("//input[@id='createLeadForm_firstName']").fill("krithi");
await page.locator("//input[@id='createLeadForm_lastName']").fill("gatty");
await page.locator("//input[@name='personalTitle']").fill("Mrs")
await page.locator("//input[@name='generalProfTitle']").fill("ABS")
await page.locator("//input[@id='createLeadForm_annualRevenue']").fill("200000");
await page.locator("//input[@id='createLeadForm_primaryPhoneNumber']").fill("9876543222")
await page.locator("//input[@name='departmentName']").fill("CS")
await page.locator("//select[@name='dataSourceId']").click();
await page.locator("//select[@name='dataSourceId']").selectOption({value:'LEAD_COLDCALL'})
const dropdown=page.locator("//select[@name='dataSourceId']/option")
const countt=await dropdown.count();
for(let i=0;i<countt;i++)
{
console.log(await dropdown.nth(i).innerText());

}
await page.locator("//select[@id='createLeadForm_industryEnumId']").click();
await page.locator("//select[@id='createLeadForm_industryEnumId']").selectOption({label:'Aerospace'})
const industrydropdowns=page.locator("//select[@id='createLeadForm_industryEnumId']/option")
const industrycount=await industrydropdowns.count();
for(let j=0;j<industrycount;j++)
{
console.log(await industrydropdowns.nth(j).innerText());

}
await page.locator("//input[@value='Create Lead']").click();

})



test("nth method update", async({page})=>

{

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("Demosalesmanager");
      await page.locator("#password").fill("crmsfa");
      await page.locator(".decorativeSubmit").click();
      await page.locator("//a[contains(text(),'CRM')]").click();
 await page.locator("//a[text()='Leads']").click();
 await page.locator("//a[text()= 'Create Lead']").click();
await page.locator("//input[@id='createLeadForm_companyName']").fill("krithi")
await page.locator("//input[@id='createLeadForm_firstName']").fill("krithi");
await page.locator("//input[@id='createLeadForm_lastName']").fill("gatty");
await page.locator("//input[@name='personalTitle']").fill("Mrs")
await page.locator("//input[@name='generalProfTitle']").fill("ABS")
await page.locator("//input[@id='createLeadForm_annualRevenue']").fill("200000");
await page.locator("//input[@id='createLeadForm_primaryPhoneNumber']").fill("9876543222")
await page.locator("//input[@name='departmentName']").fill("CS")
await page.locator("//select[@name='dataSourceId']").click();
await page.locator("//select[@name='dataSourceId']").selectOption({value:'LEAD_COLDCALL'})
await page.locator("//input[@value='Create Lead']").click();
await page.locator("//a[contains(text(),'Edit')]").click();
await page.waitForTimeout(2000);
await page.locator("//input[@id='createLeadForm_companyName']").fill("lalith")
await page.locator("//input[@value='Update']").click();


})