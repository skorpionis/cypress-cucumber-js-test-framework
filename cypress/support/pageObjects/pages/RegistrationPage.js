/// <reference types="cypress" />
import Util from "../test-utils/Util";
import BasePage from "./BasePage";

class RegistrationPage extends BasePage {
    #generatedEmail = Util.getRandomCredentials().email
    #generatedPassword = Util.getRandomCredentials().password
    #generatedName = Util.getRandomCredentials().name
    #generatedSurname = Util.getRandomCredentials().surname

    #emailField = '.formInput__inputContainer > #email'
    #nameField = '#firstName'
    #surnamField = '#lastName'
    #password = '#password'
    #password2 = '#password2'
    #agreementCheckBox = "//span[contains(text(),'Ja, ich stimme den')]/ancestor::div[@class='checkbox checkbox--alignTop']"
    #submitRegisterBtn = '#register-submit'
    #checkboxAssertClass = 'checkbox__checkbox checkbox__checkbox--alignTop checkbox__checkbox--checked'
    #checkBoxXpathAfterClick = "//*[@class='checkbox__checkbox checkbox__checkbox--alignTop checkbox__checkbox--checked']"

    fillNameField() {
        this.fillField(this.#nameField, this.#generatedName)
    }

    fillSurNameField() {
        this.fillField(this.#surnamField, this.#generatedSurname)
    }

    fillEmailField() {
        this.fillField(this.#emailField, this.#generatedEmail)
    }

    fillPasswordField() {
        this.fillField(this.#password, this.#generatedPassword)
        this.fillField(this.#password2, this.#generatedPassword)
    }

    agreementCheckBoxClick() {
        this.clickAndAssertCheckboxByXpath(this.#agreementCheckBox, this.#checkBoxXpathAfterClick, this.#checkboxAssertClass)
    }

    submitRegistrationBtnClick() {
        this.clickMethod(this.#submitRegisterBtn)
    }
}

export default new RegistrationPage;
