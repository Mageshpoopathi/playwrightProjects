const {Given,When,Then}=require('@cucumber/cucumber');
const {LoginPage} =require ("../pages/loginPage.js");
    const HomePage=new LoginPage();
  Given('User should navigate to the page URL',async function (){
    HomePage.loadPageUrl();
  });
  When('User should validate the logo of homePage',async function(){
    HomePage.assertHomeLogo();
  });
  Then('User verify username and password textbox',function(){

  });
  Then('User should login with valid credentials', function () {
    HomePage.ValidLogin();
  });
  Then('User should login with invalid credentials of {string} and {string}',function(username,password){
      HomePage.InvalidLogin(username,password);
  })

