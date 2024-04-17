Feature: The Airbnb Website

  Scenario Outline: As a user, I can find the required place to stay

  Given I am in homepage
  When I select drop down and select details
  And I click on search button
  Then I get redirected to results page
  When I click on top preferred stay option
  Then I get redirected to top stay page
  When I click on reserve button
  Then I get redirected to reservation page

