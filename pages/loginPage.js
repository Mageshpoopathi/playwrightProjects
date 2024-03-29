const { expect } = require("@playwright/test");

const homeLogo="//img[@class='logo']",
      homePageTitle="(//div[@class='top-title'])[2]",
      userIcon="(//div[@class='input-group-prepend'])[1]",/////
      passwordIcon="(//div[@class='input-group-prepend'])[2]",/////
      eyeIcon=".input-group-append",
      userTextField="//input[@placeholder='User']",//use keyboard loop
      passwordTextField="//input[@placeholder='Password']",
      submitButton="(//button)[2]",
      forgotPasswordLink="#forgotPasswordLink",
      registerLink="#registerLink";


class LoginPage{
      async loadPageUrl(){
        await global.page.goto("https://demo.cyclos.org/ui/login");  
      }
      async assertHomeLogo(){
        await page.waitForSelector(homeLogo, { timeout: 10000 });
        await expect(global.page.locator(homeLogo)).toBeVisible();
        //console.log("Home page logo is visibled");
      } 
      async assertHomeTitle(){
        await page.waitForSelector(homePageTitle, { timeout: 10000 });
        await expect(global.page.locator(homePageTitle)).toHaveText('Cyclos');
        //console.log("Home title is visibled");
      }
      async assertUserAndPasswordIcon(){
        await page.waitForSelector(userIcon, { timeout: 10000 });
        await expect(global.page.locator(userIcon)).toBeVisible();
        await expect(global.page.locator(passwordIcon)).toBeVisible();
        //console.log("Username and Password logo icon is visibled");
      }
      async assertUsernameAndPasswordTextBox(){
        await page.waitForSelector(userTextField, { timeout: 10000 });
        await expect(global.page.locator(userTextField)).toBeVisible();
        await page.waitForSelector(passwordTextField, { timeout: 10000 });
        await expect(global.page.locator(passwordTextField)).toBeVisible();
        //console.log("Username and Password textboxes are visibled");
      }
      async encryptPassword(password){
        this.loadPageUrl();
        await global.page.fill(passwordTextField,password);  
      }
      async clickEyeIcon(){
        await global.page.locator(eyeIcon).click();
      }
      async verifyPasswordText(expectedText){
        const input=global.page.locator(passwordTextField);
        const actualText = await input.evaluate(element => element.value);
        if(actualText===expectedText){
          console.log("password is not encrypted");
        }
        else{
          console.log("password is encrypted");
        }
      }
      async clickForgotPasswordlink(){
        await page.waitForSelector(forgotPasswordLink, { timeout: 10000 })
          await global.page.locator(forgotPasswordLink).click();
      }
      async verifyForgotPasswordLink(){
        const currentURL=await global.page.url();
        const expectedURL="https://demo.cyclos.org/ui/post-login/forgot-password";
        if(currentURL===expectedURL){
          console.log("pageURL is matched");
        }
        else{
          console.log("pageURL is not matched");
        }
        await global.page.goBack();
      }
      async clickRegistrationLink(){
        await page.waitForSelector(registerLink, { timeout: 10000 })
        await global.page.locator(registerLink).click();
      }
      async verifyRegistrationLink(){
        const currentURL=await global.page.url();
        const expectedURL="https://demo.cyclos.org/ui/users/registration";
        if(currentURL===expectedURL){
          console.log("pageURL is matched");
        }
        else{
          console.log("pageURL is not matched");
        }
      }

     
    async ValidLogin(){
      await global.page.locator(userTextField).click();
        await global.page.fill(userTextField,"demo");
        await global.page.locator(passwordTextField).click();
        await global.page.fill(passwordTextField,"1234");
        await global.page.locator(submitButton).click();
        console.log("Successfully login to the page");
    }
    async InvalidLogin(usernaame,password){
      await global.page.locator(userTextField).fill(usernaame);
      await global.page.locator(passwordTextField).fill(password);
      await global.page.locator(submitButton).click();
  }
}
module.exports={LoginPage}

