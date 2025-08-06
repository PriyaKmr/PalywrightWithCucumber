Feature: Amazon order placement

  Scenario: Place a full order
    Given I am logged into Amazon
    When I search and add an item to the cart
    And I proceed to checkout and place the order
    Then the order confirmation should be displayed
