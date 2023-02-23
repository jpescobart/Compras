Feature:  test
@test
Scenario: buy products on the page saucedemo
    Given I am logged into the shopping site
    When  I select one or more items
    And   I add them to the shopping cart
    Then  process to make the purchase of the selected items correctly  
