import {test} from '@playwright/test'

test("file upload", async({page})=>
{
await page.goto("https://www.naukri.com/registration/createAccount")
await page.locator("//div/p[text()='  I have work experience (excluding internships)']").click();
const fileupload= page.locator("//input[@type='file']")
fileupload.setInputFiles('utils/PW_W4_Frame_Leafground.pdf')
await page.waitForTimeout(5000)

})