import Util from "../test-utils/Util";

class RegistrationPage{
    
    fillNameField() {
        cy.get('#firstName').type(Util.randomLetters())
    }

    fillSurnameField() {
        cy.get('#lastName').type(Util.randomLetters())
    }

    fillEmailField() {
        cy.get('.formInput__inputContainer > #email').type(Util.randomEmailGeneration())
    }
    
    fillPasswordField(){
        let pass = Util.randomPasswordWithLettersDigitsSymbols()
        cy.get('#password').type(pass)
        cy.get('#password2').type(pass)
    }

    agreementCheckBox(){
        cy.xpath("//span[contains(text(),'Ja, ich stimme den')]/ancestor::div[@class='checkbox checkbox--alignTop']").click()
    }

    submitRegistrationBtnClick(){
        cy.get('#register-submit').click()
    }
}

export default RegistrationPage;
