a/// <reference types="cypress" />

class LoginPage {
    
    clickOnRegistrationBtnClick() {
        cy.get('#registerAccount').click()
    }
}

export default LoginPage;