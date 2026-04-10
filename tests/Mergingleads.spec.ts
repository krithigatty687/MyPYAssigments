import { expect, test } from '@playwright/test';

test("Merge leads testcase", async ({ page,context }) => {

await page.goto("https://leaftaps.com/opentaps/control/main");
await page.locator("#username").fill("Demosalesmanager");
await page.locator("#password").fill("crmsfa")
await page.locator(".decorativeSubmit").click();
await page.locator("//a[contains(text(),'CRM/SFA')]").click();
await page.locator("//a[text()='Leads']").click();
await page.locator("//a[text()='Merge Leads']").click()
const [childpages]=await Promise.all
([context.waitForEvent('page'),page.locator("(//img[@src='/images/fieldlookup.gif'])[1]").click()]);
const totalpages=childpages.context().pages();
let newpage=totalpages[1];
await newpage.waitForLoadState('domcontentloaded');
await newpage.locator("(//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a)[2]").click();
//deleaing with next child
await page.waitForTimeout(4000)
const [child2]=await Promise.all([context.waitForEvent('page'),page.locator("(//img[@src='/images/fieldlookup.gif'])[2]").click()]);
const secondpages=child2.context().pages();
let newsecond=secondpages[1]
await newsecond.waitForLoadState('domcontentloaded')
await newsecond.locator("(//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a)[1]").click();


//alert accepting
 page.on("dialog", async(alert)=>

{
await alert.accept();

})

await page.locator("//td/a[@class='buttonDangerous']").click();

const titlee=await page.title();
console.log(titlee)

expect(titlee,"Merge Leads | opentaps CRM")


})
