Feature: Deinbett functional tests

    Scenario: Registration new user using valid random generated credentials (Success)
        Given We access the deinbett page
        And We accept cookies
        When We click on login button at the top of the page
        Then We click on registration button
        And We enter a username
        And We enter a surname
        And We enter an email
        And We enter a password
        And We choose an agreement checkbox flag
        Then We choose submit registration with a button below
        Then We should be redirected on the main page and one of the categories is presented

    Scenario: Login using existed valid credentials (Success)
        Given We access the deinbett page
        And   We accept cookies
        When  We click on login button at the top of the page
        Then  We enter login
        And   We enter password
        Then  We submit login

    Scenario: Login using existed valid credentials (Unsuccess)
        Given We access the deinbett page
        And   We accept cookies
        When  We click on login button at the top of the page
        Then  We enter login
        And   We enter invalid password - password123
        Then  We submit login
        And Wait some time for dowloading
        And   There is an error with invalid password

    Scenario: Login with authorized user to add products in wishlist
        Given We access the deinbett page
        And   We accept cookies
        And   We click on the one of the categories such as Matratz
        When  We click on login button at the top of the page
        Then  We enter login
        And   We enter password
        Then  We submit login
        And   Wait some time for dowloading

        Then  We add several products to wishlist
        And   We scroll up for suitable using and clicking wishlist
        Then  We click on wishlist
        And   We enter index inside the wishlist
        Then  We are adding products to basket from wishlist


