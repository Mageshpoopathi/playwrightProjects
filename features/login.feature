
Feature: login to demo cycylos website
  
  Background: 
     Given User should navigate to the page URL
@valid
  Scenario: login with valid credentials
     When User should validate the logo and title of homePage
     And User verify username and password textbox
     And verify the user and password icon
     Then User should login with valid credentials
@encrytPassword
   Scenario: verify password encryption
        When User enter the Password as "4321" 
        And verify the password as "...."
        And click the eye button
        Then  verify the password as "4321"

 @homePageLinks       
    Scenario: verify the forgotPassword and Registration links
        When User click the forgot password link
        And verify the forgotPassword page
        Then User click the Registration link
        And verify the Registration page   
        
 @invalid 
    Scenario Outline: Login with different invalid credentials
      When User should validate the logo and title of homePage   
      And User verify username and password textbox
      And verify the user and password icon
      Then User should login with invalid credentials of "<Username>" and "<Password>"

      Examples:
          | Username |  Password | 
          | User1    |    1234   |
          | demo     |    2345   |