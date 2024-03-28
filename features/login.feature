@valid
Feature: login to demo cycylos website
    Background: 
          Given User should navigate to the page URL
  Scenario: login with valid credentials
     When User should validate the logo of homePage
     And User verify username and password textbox
     Then User should login with valid credentials

  Scenario Outline: Login with different invalid credentials
      When User should validate the logo of homePage   
      And User verify username and password textbox
      # Then User should login with invalid credentials of "<Username>" and "<Password>"

      # Examples:
      #     | Username |  Password | 
      #     | User1    |    1234   |
      #     | demo     |    2345   |