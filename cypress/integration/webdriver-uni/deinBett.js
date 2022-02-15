import HomePage from '../../support/pageObjects/webdriver-uni/HomePage'
import LoginPage from '../../support/pageObjects/webdriver-uni/LoginPage';
import ProductPage from '../../support/pageObjects/webdriver-uni/ProductPage';
import RegistrationPage from '../../support/pageObjects/webdriver-uni/RegistrationPage';
import WishCartPage from '../../support/pageObjects/webdriver-uni/WishCart';
import WishCart from '../../support/pageObjects/webdriver-uni/WishCart';
/// <reference types="cypress" />

describe("check registration", () => {
    it("registration new user", () => {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const registrationPage = new RegistrationPage()

        homePage.vositHomePage();
        homePage.acceptCookies();
        homePage.clickOnLoginBtn();

        loginPage.clickOnRegistrationBtnClick();

        registrationPage.fillNameField()
        registrationPage.fillSurnameField();
        registrationPage.fillEmailField();
        registrationPage.fillPasswordField();
        registrationPage.agreementCheckBox();
        registrationPage.submitRegistrationBtnClick();
    })

    // it("login with authorized user", () => {
    //     const homePage = new HomePage();
    //     const loginPage = new LoginPage();

    //     homePage.vositHomePage();
    //     homePage.acceptCookies();
    //     homePage.clickOnLoginBtn();

    //     loginPage.loginInput();
    //     loginPage.passwordInput();
    //     loginPage.loginBtnClick();
    // })

    it("login with authorized user to add products in wishlist", () => {
        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const productPage = new ProductPage();
        const wishCartPage = new WishCartPage();

        homePage.vositHomePage();
        homePage.acceptCookies();
    
        // homePage.clickOnProductType();
        homePage.clickOnMatratzCategory();
        homePage.clickOnLoginBtn();

        loginPage.loginInput();
        loginPage.passwordInput();
        loginPage.submitLogin();

        productPage.listProducts();
        productPage.scrollUpToGetWishList();
        productPage.clickOnWishList();

        wishCartPage.fillIndexInWishList();
        wishCartPage.addToBasketFromWishList();


    })
})