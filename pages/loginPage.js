const { expect } = require("@playwright/test");

const logo="(//img[@class='logo'])[2]",
      preloginText="div[class='pre-login-text']",
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
       const logoText= await expect(global.page.locator("(//div[@class='top-title'])[2]")).toHaveText('Cyclos');
       console.log(logoText);
      }
    async ValidLogin(){
        await global.page.fill(userTextField,"demo");
        await global.page.fill(passwordTextField,"1234");
        await global.page.locator(submitButton).click();
    }
    async InvalidLogin(usernaame,password){
      await global.page.locator(userTextField).fill(usernaame);
      await global.page.locator(passwordTextField).fill(password);
      await global.page.locator(submitButton).click();
  }
}
module.exports={LoginPage}

