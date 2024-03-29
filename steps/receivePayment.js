const {Given,When,Then}=require('@cucumber/cucumber');
const {ReceivePaymentPage} =require ("../pages/receivePaymentPage.js");
const receieve = new ReceivePaymentPage();
Then("User should click the receive payment option",function(){
receieve.receivePaymentClick();
})
Then("User should enter the user name",function(){
receieve.userNameSelect();
})
Then("User should fill the amount",function(){
receieve.amount();
})
Then("User click the next button and check the payment received or not",function(){
receieve.nextButton();
})
