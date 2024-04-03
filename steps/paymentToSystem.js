const {Given,When,Then}=require('@cucumber/cucumber');
const {PayToSystemPage} =require ("../pages/paytoSystemPage.js");

const pay=new PayToSystemPage();

Given('User should login to the application and navigate to the bannking menu',function(){
pay.bankingMenuclick();
})
Then('User should click the payment to system option',async function(){
pay.paymentToSystemclick();
})
Then('User should enter the amount within the balance and select the paynow option in the scheduling type',async function(){
pay.amountFill();
})
When("User fill the description and click the confirm button",async function(){
pay.nextButtonClick();
pay.confirmButtonClick();
})

Then('User should see the message',async function () {
    pay.notificationMessage();
    
  });