import { home } from 'ospath';
import HomePage from '../../support/pageObjects/webdriver-uni/HomePage'
import LoginPage from '../../support/pageObjects/webdriver-uni/LoginPage';
/// <reference types="cypress" />

describe("test", () => {
it("test", () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    homePage.vositHomePage();
    homePage.acceptCookies();
    homePage.clickOnLoginBtn();
    
    loginPage.clickOnRegistrationBtnClick();
    
})
})
   