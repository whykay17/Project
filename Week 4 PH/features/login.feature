Feature: PH CC Website

  Scenario Outline: As a user, I create an order and pay successfully

    Given I am on the login page
    When I login with username and password
    Then I log into PH home
    When I go to Orders and select sample and supplies order
    And I fill out all information and create order
    Then I select all items and proceed to payment
    And I fill out payment details
    Then The payment gets added
