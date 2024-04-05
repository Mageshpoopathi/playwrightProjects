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
      registerLink="#registerLink";

const act=new PlaywrightUtils();
const apiMethods=new API();
class LoginPage{
  async loginPageAPI(expectedStatusCode){
    apiMethods.verifyStatusCode('https://demo.cyclos.org/ui/login',expectedStatusCode);
    apiMethods.verifyHeaders('https://demo.cyclos.org/ui/login');
        // let actualStatusCode = await page.evaluate(() => {
        //     return fetch("").then(res => res.status);
        // });
        //  if(actualStatusCode.toString()===expectedStatusCode){
        //      console.log(`API request in login page is passed with ${actualStatusCode} status code`);
        //   }
        //   else{
        //       console.log(`API request is failed with ${actualStatusCode}`);
        //   }
  }
  // async homePageAPI(){
  //   let response=await page.evaluate(()=>{
  //     return fetch("https://demo.cyclos.org/ui/dashboard").then(res=>res.text());
  //   })
  //   console.log(response);
  // }
  // async homePageReqres(requestData){
  //   global.apiContext.post('api/login',requestData)
  // }
      async loadPageUrl(){
        await global.page.goto("https://demo.cyclos.org/ui/login");  
      }
      async assertHomeLogo(){
        act.waitForSelector(homeLogo);
        act.visiblity(homeLogo);
        //console.log("Home page logo is visibled");
      } 
      async assertHomeTitle(){
        act.waitForSelector(homePageTitle);
        act.expectText(homePageTitle,'Cyclos');
        //console.log("Home title is visibled");
      }
      async assertUserAndPasswordIcon(){
        act.waitForSelector(userIcon)
        act.visiblity(userIcon);
        act.waitForSelector(passwordIcon)
        act.visiblity(passwordIcon)
        //console.log("Username and Password logo icon is visibled");
      }
      async assertUsernameAndPasswordTextBox(){
        act.waitForSelector(userTextField);
        act.visiblity(userTextField)
        act.waitForSelector(passwordTextField);
        act.visiblity(passwordTextField);
        //console.log("Username and Password textboxes are visibled");
      }
      async encryptPassword(password){
        this.loadPageUrl();
        act.click(passwordTextField);
        act.fill(passwordTextField,password);
      }
      async clickEyeIcon(){
        act.waitForTimeout(7000);
        act.click(eyeIcon);
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
      act.click(userTextField);
      act.fill(userTextField,'demo');
      act.click(passwordTextField);
      act.fill(passwordTextField,'1234');
      act.click(submitButton);
        console.log("Successfully login to the page");
        act.waitForTimeout(7000);
    }
    async InvalidLogin(username,password){
      // act.click(userTextField);
      act.fill(userTextField,username);
      act.click(passwordTextField);
      act.fill(passwordTextField,password);
      act.waitForTimeout(7000);
      console.log("login with invalid credentials");
  }
}
module.exports={LoginPage}

