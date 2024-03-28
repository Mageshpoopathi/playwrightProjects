const { expect } = require("@playwright/test");
const { LoginPage } = require("./loginPage.js");

const bankingMenu ="#menu_banking",
      paymentToSystem ="//nav[@class='navbar d-flex flex-column align-items-stretch']//a[3]",
      amount ="0,00",
      description="#id_17",
      nextButton="[class='btn d-flex justify-content-center align-items-center w-100 h-100 btn-primary']",
      confirmButton="(//button)[2]",
      notificationMessage="//div[@class='notification-message']//div";

        const loginpage=new LoginPage();

      class PayToSystemPage{
        async bankingMenuclick(){
            loginpage.loadPageUrl();
            loginpage.ValidLogin();
            await global.page.locator(bankingMenu).click()
           
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
        async notificationMessage(text){
            await expect(page.locator(notificationMessage)).toHaveText(text);
        }
        async nextButtonClick(){
            await global.page.locator(nextButton).click()
        }
        async confirmButtonClick(){
            await global.page.locator(confirmButton).click()
        }

        }
        module.exports={PayToSystemPage}
      
      