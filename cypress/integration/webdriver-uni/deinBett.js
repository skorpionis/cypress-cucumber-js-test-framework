import { home } from 'ospath';
import HomePage from '../../support/pageObjects/webdriver-uni/HomePage'
import LoginPage from '../../support/pageObjects/webdriver-uni/LoginPage';
import RegistrationPage from '../../support/pageObjects/webdriver-uni/RegistrationPage';
/// <reference types="cypress" />

describe("test", () => {
it("test", () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const registrationPage = new RegistrationPage()

    homePage.vositHomePage();
    homePage.acceptCookies();
    homePage.clickOnLoginBtn();
    
    loginPage.clickOnRegistrationBtnClick();

    registrationPage.fillNameField();
    registrationPage.fillSurnameField();
    registrationPage.fillEmailField();
    registrationPage.fillPasswordField();
    registrationPage.agreementCheckBox();
    registrationPage.submitRegistrationBtnClick();
})
})
   