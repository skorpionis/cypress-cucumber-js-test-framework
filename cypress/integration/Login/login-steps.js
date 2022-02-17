/// <reference types="cypress" />
import {Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import homePage from '../../support/pageObjects/pages/HomePage'

Given('We access the deinbett page', () => {
    homePage.visitHomePage();
})

And('We accept cookies', () =>{
    homePage.clickAndAcceptCookies();
})

When('We click on login button at the top of the page', () =>{
    homePage.clickOnLoginBtn();
})