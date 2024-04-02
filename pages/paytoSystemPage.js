const { expect } = require("@playwright/test");
const { LoginPage } = require("./loginPage.js");
const {PlaywrightUtils} = require("../utils/action.js");
const { throws } = require("assert");

const bankingMenu ="#menu_banking",
      paymentToSystem ="//nav[@class='navbar d-flex flex-column align-items-stretch']//a[3]",
      amount ="0,00",
      description="#id_17",
      nextButton="[class='btn d-flex justify-content-center align-items-center w-100 h-100 btn-primary']",
      confirmButton="(//button)[2]",
      notificationMessage="[class='d-flex flex-column flex-xs-row align-items-center']";

        const loginpage=new LoginPage();
        const utils = new PlaywrightUtils();
      class PayToSystemPage{
        async bankingMenuclick(){
            loginpage.loadPageUrl();
            loginpage.ValidLogin();
            utils.click(bankingMenu);
           
        }
        async paymentToSystemclick(){
            await global.page.locator(paymentToSystem).click()
        }
        async amountFill(){
            await global.page.getByPlaceholder(amount).fill('123');
        }
        async descriptionFill(){
            await global.page.fill(description,"system")
        }
        async notificationMessage(){
            try{
                utils.waitForSelector(notificationMessage);
             utils.expectVisible(notificationMessage);
            }
            catch(Exception){
                console.log(Exception);
            }
        }
        async nextButtonClick(){
            await global.page.locator(nextButton).click()
        }
        async confirmButtonClick(){
            await global.page.locator(confirmButton).click()
        }

        }
        module.exports={PayToSystemPage}
      
      