import {test,expect,chromium} from '@playwright/test'

test("Verify dynamic movie ticket booking flow in PVR Cinemas website", async()=>
{
    //Browser permission to accept brower alerts
  const browser=  await chromium.launch();
const context=await browser.newContext({permissions:['geolocation'],
                                       geolocation:{latitude:12.9141,longitude:74.8560}});
const page=await context.newPage();
//launch PVR Application
await page.goto("https://www.pvrcinemas.com/")
//select chennai
await page.locator("(//span[@class='cities-placed'])[2]").click();
await page.getByPlaceholder("Search for city").fill("Chennai");
await page.getByRole("option",{name:'Chennai'}).click();
//select cinema
await page.locator("//span[@class='filter-pvr-active']/following-sibling::span").click()
await page.locator("//span[text()='Select Cinema']").click();
// Select any available cinema from the list.
await page.locator("//span[text()='INOX National,Virugambakkam Chennai']").click();
//Select any available date (Today/Tomorrow/Upcoming).
await page.locator("//li[@class='p-dropdown-item']/span[contains(text(),'Today')]").click()
// Select any available movie from the movie list.
await page.locator("//li/span[text()='HAPPY RAJ']").click()
 //Select any available show time.
await page.locator("//li//span/span[text()='10:40 PM']").click();
//. Click on the Submit button.
await page.locator("//button[@class='p-button p-component sc-hjsuWn kDwaXw bgColor filter-btn']/span[text()='Book']").click();
//accept popup
await page.locator("//button[text()='Accept']").click();
// Select any available seat from the seating layout.
await page.locator("//TR[5]/TD[23]").click()
// Verify the selected seat information is displayed.
const text=await page.locator("//div[@class='seat-number']/p").innerText();
expect(text,"F22");
 //Verify the total ticket amount is displayed.
const total=await page.locator("//div[@class='grand-prices']/h6").innerText();
expect(total,"218.02");
//verify the title
const titlee=await page.title();
expect(titlee,"PVR Cinemas");
//Click on the Proceed button.
await page.locator("//button[text()='Proceed']").click()
})