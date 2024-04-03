const { expect } = require("@playwright/test");
const { PayToSystemPage } = require("./paytoSystemPage.js");
const receivePayment="//nav[@class='navbar d-flex flex-column align-items-stretch']//a[5]",
      userName ="Type to search",
      userSelect="[class='select-option autocomplete-option-0']",
      nextButton="[class='btn d-flex justify-content-center align-items-center w-100 h-100 btn-primary']";
      
      
        const paySystem=new PayToSystemPage();

      class ReceivePaymentPage{

        async receivePaymentClick(){
             await global.page.locator(receivePayment).click();


        }

        async userNameSelect(){
            await global.page.locator(userName).fill("a");
            await global.page.hover(userSelect).click();

        }
        async amount(){
            paySystem.amountFill();
        }
        async nextButton(){  
            await global.page.locator(nextButton).click();  
            
        }
    }
    module.exports={ReceivePaymentPage}