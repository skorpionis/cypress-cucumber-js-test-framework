/// <reference types="cypress" />

class RegistrationPage {
    fillingCredentials(data) {
        cy.get("").type(data)
    }
}

export default RegistrationPage;