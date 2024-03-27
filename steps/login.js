const {Given,When,Then}=require('@cucumber/cucumber');
const {pageUI} =require ("../pages/loginPage.js");
    const uv=new pageUI();
  Given('User should navigate to the page URL',async function (){
    uv.loginUI();
  });
  Then('User should login with valid credentials', function () {
    console.log("hello");
  });

