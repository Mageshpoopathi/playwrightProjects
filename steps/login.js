const {Given,When,Then}=require('@cucumber/cucumber');
const {LoginPage} =require ("../pages/loginPage.js");
    const HomePage=new LoginPage();

  When('check login page API status as {string}',async function(statusCode){
      await HomePage.loginPageAPI(statusCode);
  })
  Then('User should validate the homepage',async function(){
      await HomePage.validateHomePageLogo();
  })
  When('check homePage API status as {string}',async function(statusCode){
    await HomePage.homePageAPI(statusCode);
  })
  When('check forgotPassword link API status as {string} and contentType',async function(statusCode){
      await HomePage.forgotPasswordLinkAPI(statusCode);
  })
  Then('verify Registration link API status as {string} and contentType',async function(statusCode){
    await HomePage.RegistartionLinkAPI(statusCode);
  })
  Given('User should navigate to the page URL',async function (){
    await HomePage.loadPageUrl();
  });
  When('User should validate the logo and title of homePage',async function(){
    await HomePage.assertHomeLogo();
    await HomePage.assertHomeTitle();
  });
  Then('User verify username and password textbox',async function(){
    await HomePage.assertUsernameAndPasswordTextBox();
  });
  Then('verify the user and password icon',async function(){
    await HomePage.assertUserAndPasswordIcon();
  })
  When("User enter the Password as {string}",async function(password){
    await HomePage.encryptPassword(password);
  })
  Then("click the eye button",async function(){
    await HomePage.clickEyeIcon();
  })
  Then("verify the password as {string}",async function(password){
    await HomePage.verifyPasswordText(password);
  })
  When("User click the forgot password link",async function(){
    await HomePage.clickForgotPasswordlink();
  })
  Then("verify the forgotPassword page",async function(){
    await HomePage.verifyForgotPasswordLink();
  })
  Then("User click the Registration link",async function(){
    await HomePage.clickRegistrationLink();
  })
  Then("verify the Registration page",async function(){
    await HomePage.verifyRegistrationLink();
  })
  Then('User should login with valid credentials',async function () {
    await HomePage.ValidLogin();
  });
  Then('User should login with invalid credentials of {string} and {string}',async function(username,password){
      await HomePage.InvalidLogin(username,password);
  })

