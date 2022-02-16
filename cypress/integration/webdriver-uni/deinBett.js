import homePage from '../../support/pageObjects/webdriver-uni/HomePage'
import loginPage from '../../support/pageObjects/webdriver-uni/LoginPage'
import productPage from '../../support/pageObjects/webdriver-uni/ProductPage'
import registrationPage from '../../support/pageObjects/webdriver-uni/RegistrationPage'
import wishCartPage from '../../support/pageObjects/webdriver-uni/WishCartPage';
/// <reference types="cypress" />


describe("check registration", () => {
    it("registration new user", () => {

        homePage.visitHomePage();
        homePage.clickAndAcceptCookies();
        homePage.clickOnLoginBtn();

        loginPage.clickOnRegistrationBtnClick();

        registrationPage.fillNameField()
        registrationPage.fillSurNameField();
        registrationPage.fillEmailField();
        registrationPage.fillPasswordField();
        registrationPage.agreementCheckBoxClick();
        registrationPage.submitRegistrationBtnClick();
    })

    // it("login with authorized user", () => {

    //     homePage.visitHomePage();
    //     homePage.acceptCookies();
    //     homePage.clickOnLoginBtn();

    //     loginPage.loginInput();
    //     loginPage.passwordInput();
    //     loginPage.loginBtnClick();
    // })

    it("login with authorized user to add products in wishlist", () => {

        homePage.visitHomePage();
        homePage.clickAndAcceptCookies();

        homePage.clickOnMatratzCategory();
        homePage.clickOnLoginBtn();

        loginPage.loginInput();
        loginPage.passwordInput();
        loginPage.submitLogin();
        loginPage.waiter();

        productPage.addPorductCardsToWishList();
        productPage.scrollUpToClickWishList();
        productPage.clickOnWishList();

        wishCartPage.fillIndexInWishList();
        wishCartPage.addToBasketFromWishList();
    })
})