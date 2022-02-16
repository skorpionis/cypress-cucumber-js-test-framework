import BasePage from "./BasePage"

class HomePage extends BasePage {

    #cookiesAccept = "//button[text()='Alle auswählen & bestätigen']"
    #loginBtn = '.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__icon'
    #productType = '.headerMenu__navigation'
    #matratzCategory = "a[href$='/matratzen'][target='_self']"

    visitHomePage() {
        this.clearCookiesHomePage()
        cy.visit(Cypress.env("deinBett"))
    }

    clickAndAcceptCookies() {
        this.clickMethodByXpath(this.#cookiesAccept)
    }

    clickOnLoginBtn() {
        this.clickMethod(this.#loginBtn)
    }

    clickOnProductType() {
        this.clickMethod(this.#productType)
    }

    clickOnMatratzCategory() {
        this.dblClickMethod(this.#matratzCategory)
    }

    clearCookiesHomePage() {
        this.clearAllCookies()
    }
}

export default new HomePage;