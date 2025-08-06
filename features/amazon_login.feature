Feature: Amazon login

  Scenario: Valid user login
    Given I navigate to the Amazon login page
    When I login with valid credentials
    Then I should be redirected to the Amazon homepage
