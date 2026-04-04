import {test,expect} from '@playwright/test'
test("Search product, apply filters, add to cart in Decathlon",async({page})=>
{
    //Launch the browser
await page.goto("https://www.decathlon.in/")
const title=await page.title();
//Verify the user is navigated to the Decathlon home page
expect (await page.locator("//div[@class='flex items-center w-1/2 md:w-auto']/a")).toBeVisible();
//Click on the Search icon on the home page
await page.locator("(//span[text()='Search for  '])[1]").click();
//Verify the search input field is enabled
expect (await page.locator("(//span[text()='Search for  '])[1]")).toBeEnabled();
//Enter the product name as "shoes" in the search field
await page.locator("(//span[text()='Search for  '])[1]").pressSequentially("shoes");
// Press Enter to search the product
await page.locator("(//span[text()='Search for  '])[1]").press("Enter");
//Capture and print the page title in the console
const pagetitle=await page.title();
console.log(pagetitle);
expect(pagetitle,"Search | shoes");
//click on filters
await page.locator("//span[contains(text(),'Running')]").click();
await page.locator("//span[contains(text(),'Men')]").click();
await page.locator("//span[contains(text(),'Uk 10.5')]").click();
await page.locator("//span[text()='Exclude out of stock']").click
await page.locator("//span[text()='Most Relevant']").click();
await page.getByRole("link",{name:'Price: High to Low'}).click();
//click on image
await page.locator("(//img[@alt='Men Running Shoes Superior Grip Cushioned Upto 20km/week, Jogflow 190.1 - Blue'])[1]").click();
//select the size
await page.locator("//div[text()='UK 10.5 - EU 45']").click();
//Add to the cart
await page.locator("//span[text()='ADD TO CART']").click();
//verify product addded to cart
await page.locator("//h3[text()='Product added to cart']").isVisible();
await page.locator("//p[text()='Cart']").click();
//verify the price of the product in the cart
const total=await page.locator("//p[text()='₹2,499']").innerText();
//print the price in the console
console.log(total);






}
)