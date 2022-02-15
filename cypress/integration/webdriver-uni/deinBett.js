import HomePage from '../../support/pageObjects/webdriver-uni/HomePage'
import LoginPage from '../../support/pageObjects/webdriver-uni/LoginPage';
import RegistrationPage from '../../support/pageObjects/webdriver-uni/RegistrationPage';
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

    it("login with authorized user", () => {
        const homePage = new HomePage();
        const loginPage = new LoginPage();

        homePage.vositHomePage();
        homePage.acceptCookies();
        homePage.clickOnLoginBtn();

        loginPage.loginInput();
        loginPage.passwordInput();
        loginPage.loginBtnClick();
    })
})