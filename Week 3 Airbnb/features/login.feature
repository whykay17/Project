Feature: The Airbnb Website

  Scenario Outline: As a user, I can find the best place to stay in europe

  Given I am in homepage
  When I select drop down and select europe
  And I select dates for travel
  And I add one adult visiting
  And I click on search button
  Then I get redirected to results page
  When I click on top stay option
  Then I get name of top stay page
  When I click on reserve button
  Then I get redirected to reservation page