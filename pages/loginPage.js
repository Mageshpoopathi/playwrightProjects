const { expect } = require("@playwright/test");
const { request } = require("http");
const { PlaywrightUtils } =require("../utils/action");
const {API} =require('../utils/apiMethods');
const homeLogo="//img[@class='logo']",
      homePageTitle="(//div[@class='top-title'])[2]",
      userIcon="(//div[@class='input-group-prepend'])[1]",
      passwordIcon="(//div[@class='input-group-prepend'])[2]",
      eyeIcon=".input-group-append",
      userTextField="//input[@placeholder='User']",
      passwordTextField="//input[@placeholder='Password']",
      submitButton="(//button)[2]",
      forgotPasswordLink="#forgotPasswordLink",
      registerLink="#registerLink",
      homePageProfile='#profile-link';

const act=new PlaywrightUtils();
const apiMethods=new API();
class LoginPage{
  async loginPageAPI(expectedStatusCode){
    await apiMethods.verifyStatusCode('https://demo.cyclos.org/ui/login',expectedStatusCode);  
   await apiMethods.getHeader('https://demo.cyclos.org/ui/login');
   //await apiMethods.postDataInText();
  }
  async validateHomePageLogo(){
    await act.waitForSelector(homePageProfile);
    await act.visiblity(homePageProfile);
  }
  async homePageAPI(expectedStatusCode){
    await apiMethods.verifyStatusCode('https://demo.cyclos.org/ui/dashboard',expectedStatusCode);
    await apiMethods.getHeader('https://demo.cyclos.org/ui/dashboard');
  }
  async forgotPasswordLinkAPI(expectedStatusCode){
    await apiMethods.verifyStatusCode('https://demo.cyclos.org/ui/post-login/forgot-password',expectedStatusCode);
    await apiMethods.getHeader('https://demo.cyclos.org/ui/post-login/forgot-password');
  }
  async RegistartionLinkAPI(expectedStatusCode){
    await apiMethods.verifyStatusCode('https://demo.cyclos.org/ui/users/registration',expectedStatusCode);
    await apiMethods.getHeader('https://demo.cyclos.org/ui/users/registration');
  }
      async loadPageUrl(){
        await global.page.goto("https://demo.cyclos.org/ui/login");  
      }
      async assertHomeLogo(){
        await act.waitForSelector(homeLogo);
        await act.visiblity(homeLogo);
        console.log("Home page logo is visibled");
      } 
      async assertHomeTitle(){
        await act.waitForSelector(homePageTitle);
        await act.expectText(homePageTitle,'Cyclos');
        console.log("Home title is visibled");
      }
      async assertUserAndPasswordIcon(){
        await act.waitForSelector(userIcon)
        await  act.visiblity(userIcon);
        await  act.waitForSelector(passwordIcon)
        await  act.visiblity(passwordIcon)
        console.log("Username and Password logo icon is visibled");
      }
      async assertUsernameAndPasswordTextBox(){
        await act.waitForSelector(userTextField);
        await  act.visiblity(userTextField)
        await act.waitForSelector(passwordTextField);
        await act.visiblity(passwordTextField);
        console.log("Username and Password textboxes are visibled");
      }
      async encryptPassword(password){
        await this.loadPageUrl();
        await act.click(passwordTextField);
        await act.fill(passwordTextField,password);
      }
      async clickEyeIcon(){
         act.waitForTimeout(7000);
        await act.click(eyeIcon);
      }
      async verifyPasswordText(expectedText){
         act.waitForTimeout(7000);
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
        act.waitForSelector(forgotPasswordLink);
        act.click(forgotPasswordLink)
        act.waitForTimeout(7000);
      }
      async verifyForgotPasswordLink(){
        act.waitForTimeout(7000);
        const currentURL=await global.page.url();
        const Url=currentURL.toString();
        const expectedURL="https://demo.cyclos.org/ui/post-login/forgot-password";
        if(Url===expectedURL){
          console.log("pageURL is not matched");
        }
        else{
          console.log("pageURL is matched");
        }
        await act.navigate("https://demo.cyclos.org/ui/login");
        act.waitForTimeout(7000);
      }
      async clickRegistrationLink(){
        await act.waitForSelector(registerLink);
        await act.click(registerLink);
       
      }
      async verifyRegistrationLink(){
         act.waitForTimeout(7000);
        const currentURL=await global.page.url();
        const Url=currentURL.toString();
        const expectedURL="https://demo.cyclos.org/ui/users/registration";
        if(Url===expectedURL){
          console.log("pageURL is not matched");
        }
        else{
          console.log("pageURL is matched");
        }
      }

     
    async ValidLogin(){
      await act.click(userTextField);
      await act.fill(userTextField,'demo');
      await act.click(passwordTextField);
      await act.fill(passwordTextField,'1234');
      await act.click(submitButton);
      console.log("Successfully login to the page");
    }
    async InvalidLogin(username,password){
      // act.click(userTextField);
      await act.fill(userTextField,username);
      await act.click(passwordTextField);
      await act.fill(passwordTextField,password);
       act.waitForTimeout(7000);
      console.log("login with invalid credentials");
  }
}
module.exports={LoginPage}

