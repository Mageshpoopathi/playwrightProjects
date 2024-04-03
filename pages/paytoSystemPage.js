const { expect } = require("@playwright/test");
const { LoginPage } = require("./loginPage.js");
const {PlaywrightUtils} = require("../utils/action.js");
const { throws } = require("assert");

const bankingMenu ="#menu_banking",
      paymentToSystem ="//nav[@class='navbar d-flex flex-column align-items-stretch']//a[3]",
      amount ="//input[@class='form-control text-right ng-pristine ng-valid ng-touched']",
      description="[class='form-control ng-pristine ng-valid ng-touched']",
      nextButton="[class='btn d-flex justify-content-center align-items-center w-100 h-100 btn-primary']",
      confirmButton="[class='btn d-flex justify-content-center align-items-center w-100 h-100 btn-primary']",
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
            utils.click(paymentToSystem);
        }
        async amountFill(){
            utils.fill(amount,'123');
        }

        async notificationMessage(){
            utils.takeScreenshot('screenshot.png');
        //     await page.waitForLoadState('networkidle');
        //    utils.closeBrowser();
        }
        async nextButtonClick(){
            utils.click(nextButton);
        }
        async confirmButtonClick(){
            utils.waitForSelector(confirmButton);
            utils.click(confirmButton);
        }

        }
        module.exports={PayToSystemPage}
      
      