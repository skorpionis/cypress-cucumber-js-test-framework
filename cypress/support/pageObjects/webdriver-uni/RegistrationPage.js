/// <reference types="cypress" />
import Util from "../test-utils/Util";

class RegistrationPage {

    fillNameField() {
        cy.get('#firstName').type(Util.getRandomCredentials().name)
    }

    fillSurnameField() {
        cy.get('#lastName').type(Util.getRandomCredentials().surname)
    }

    fillEmailField() {
        cy.get('.formInput__inputContainer > #email').type(Util.getRandomCredentials().email)
    }

    fillPasswordField() {
        cy.get('#password').type(Util.getRandomCredentials().password)
        cy.get('#password2').type(Util.getRandomCredentials().password)
    }

    agreementCheckBox() {
        cy.xpath("//span[contains(text(),'Ja, ich stimme den')]/ancestor::div[@class='checkbox checkbox--alignTop']").click()
    }

    submitRegistrationBtnClick() {
        cy.get('#register-submit').click()
    }
}

export default RegistrationPage;
