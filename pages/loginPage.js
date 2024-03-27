const { expect } = require("@playwright/test");

const logo="//img[@class='logo']";
class pageUI{
      async loginUI(){
        await global.page.goto("https://demo.cyclos.org/ui/login");
        await global.page.locator("//input[@placeholder='User']").fill("demo");
        //setTimeout(6000);
        //const actualText=await expect(global.page.locator(logo)).toBeVisible();
        const text=await expect(global.page.locator("(//div[@class='top-title'])[2]")).toHaveText('Cyclos');
       // console.log(actualText);
        console.log(text);
    }
}
module.exports={pageUI}

