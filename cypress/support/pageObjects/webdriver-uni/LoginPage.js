/// <reference types="cypress" />
import Util from "../test-utils/Util";
class LoginPage {
    
    clickOnRegistrationBtnClick() {
        cy.get('#registerAccount').click()
    }

    loginInput(){
        cy.get('#loginEmail').type(Util.getRandomCredentials().email)
    }

    passwordInput(){
        cy.get('#loginPassword').type(Util.getRandomCredentials().password)
    }

    loginBtnClick(){
        cy.get('#login-submit').click()
    }

}

export default LoginPage;