/// <reference types="cypress" />
import Util from "../test-utils/Util";
import BasePage from "./BasePage";

class LoginPage extends BasePage {

    #registerAccountBtn = '#registerAccount'
    #emailField = '#loginEmail'
    #passwordField = '#loginPassword'
    #loginSubmitBtn = '#login-submit'

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

    submitLogin() {
        this.clickMethod(this.#loginSubmitBtn)
    }

    waiter() {
        this.wait()
    }
}

export default new LoginPage;