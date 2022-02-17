/// <reference types="cypress" />
import Util from "../test-utils/Util";
import BasePage from "./BasePage";

class LoginPage extends BasePage {

    #registerAccountBtn = '#registerAccount'
    #emailField = '#loginEmail'
    #passwordField = '#loginPassword'
    #loginSubmitBtn = '#login-submit'
    #errorSign = '#loginEmail-error'

    #generatedEmail = Util.getRandomCredentials().email
    #generatedPassword = Util.getRandomCredentials().password

    clickOnRegistrationBtnClick() {
        this.clickMethod(this.#registerAccountBtn)
    }

    loginInput() {
        this.fillField(this.#emailField, this.#generatedEmail)
    }

    passwordInput() {
        this.fillField(this.#passwordField, this.#generatedPassword)
    }

    passwordWrongInput(externalPassword) {
        this.fillField(this.#passwordField, externalPassword)
    }

    submitLogin() {
        this.clickMethod(this.#loginSubmitBtn)
    }

    checkForErrorSign() {
        this.checkElementBePresented(this.#errorSign)
    }

    waiter() {
        this.wait()
    }
}

export default new LoginPage;