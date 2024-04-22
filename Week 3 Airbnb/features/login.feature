Feature: The Airbnb Website

  Scenario Outline: As a user, I can find the required place to stay

  Given I am in homepage
  When I select drop down and select <location>
  And I click on search button
  Then I get redirected to results page and see <location> as title
  When I click on top <type> stay
  Then I get redirected to top stay page
  When I click on reserve button
  Then I get redirected to reservation page

  Examples:
    | location       | type  |
    | Europe         | Cabin |
    | Thailand       | Flat  |
    | United Kingdom | Home  |

  # Scenario Outline: As a user, I do not find required stay

  # Given I am in homepage
  # When I select drop down and select details
  # And I click on search button
  # Then I get redirected to results page
  # When I click on top preferred stay option
  # Then I do not get redirected to top stay page