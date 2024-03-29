@smoke
Feature: Verifying payment to system  module
@pay 
Scenario: user should pay a amount to the system
   Given User should login to the application and navigate to the bannking menu
   Then   User should click the payment to system option
   Then  User should enter the amount within the balance and select the paynow option in the scheduling type
   When User fill the description and click the confirm button 
   Then User should see the message "The payment was successfully processed"


