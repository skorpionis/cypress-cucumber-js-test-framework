/// <reference types="cypress" />
import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import homePage from '../../support/pageObjects/pages/HomePage'
import registrationPage from '../../support/pageObjects/pages/RegistrationPage'
import loginPage from "../../support/pageObjects/pages/LoginPage";
import productPage from "../../support/pageObjects/pages/ProductPage";
import wishCartPage from "../../support/pageObjects/pages/WishCartPage";

Given('We access the deinbett page', () => {
    homePage.visitHomePage();
})

And('We accept cookies', () => {
    homePage.clickAndAcceptCookies();
})

When('We click on login button at the top of the page', () => {
    homePage.clickOnLoginBtn();
})

Then('We click on registration button', () => {
    loginPage.clickOnRegistrationBtnClick();
})

And('We enter a username', () => {
    registrationPage.fillNameField();
})

And('We enter a surname', () => {
    registrationPage.fillSurNameField();
})

And('We enter an email', () => {
    registrationPage.fillEmailField();
})

And('We enter a password', () => {
    registrationPage.fillPasswordField();
})

And('We choose an agreement checkbox flag', () => {
    registrationPage.agreementCheckBoxClick();
})

Then('We choose submit registration with a button below', () => {
    registrationPage.submitRegistrationBtnClick();
})

And('We should be redirected on the main page and one of the categories is presented', () => {
    homePage.checkForRegistrationCompleted()
})

Then('We enter login', () => {
    loginPage.loginInput();
})

And('We enter password', () => {
    loginPage.passwordInput();
})

And('We enter invalid password - {word}', (password) => {
    loginPage.passwordWrongInput(password);
})

Then('We submit login', () => {
    loginPage.submitLogin();
})

And('We click on the one of the categories such as Matratz', () => {
    homePage.clickOnMatratzCategory();
})

And('Wait some time for dowloading', () => {
    loginPage.waiter();
})

Then('We add several products to wishlist', () => {
    productPage.addPorductCardsToWishList();
})

And('We scroll up for suitable using and clicking wishlist', () => {
    productPage.scrollUpToClickWishList();
})

Then('We click on wishlist', () => {
    productPage.clickOnWishList();
})

And('We enter index inside the wishlist', () => {
    wishCartPage.fillIndexInWishList();
})

Then('We are adding products to basket from wishlist', () => {
    wishCartPage.addToBasketFromWishList();
})

And('Wait some time for dowloading', () => {
    loginPage.waiter();
})

And('There is an error with invalid password', () => {
    loginPage.checkForErrorSign()
})

