Feature: The Practice test automation Website

    Scenario: As a student, I can log in to webpage

        Given I am in the login page
        When I enter my username and password
        And I click on Submit button
        Then new page URL contains Congratulations

