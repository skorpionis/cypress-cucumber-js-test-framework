class BasePage {

    clickMethodByXpath(xpath) {
        cy.xpath(xpath).should('be.visible').click()
    }

    clickAndAssertCheckboxByXpath(xpath, checkXpath, className) {
        this.getElementByXpath(xpath).click()
        cy.xpath(checkXpath).should('have.class', className)
    }

    dblClickMethodByXpath(xpath) {
        this.getElementByXpath(xpath).should('be.visible').click()
    }

    dblClickMethod(path) {
        this.getElement(path).dblclick()
    }

    clickMethod(attribute) {
        this.getElement(attribute).click()
    }

    fillField(attribute, inputData) {
        this.clickMethod(attribute)
        this.getElement(attribute).type(inputData)
    }

    clearAllCookies() {
        cy.clearCookies()
    }

    addingSeveralCardsToWishList(attribute, iterationSteps) {
        cy.get(attribute).each((item, index, list) => {
            for (index; index < iterationSteps; index++) {
                cy.wrap(item).click()
            }
        }).wait(5000)
    }

    scrollUpToGetWishList(attribute) {
        cy.get(attribute).scrollIntoView()
    }

    checkElementBePresented(attribute) {
        this.getElement(attribute)
    }

    checkElementBePresentedByXpath(attribute) {
        this.getElementByXpath(attribute).should('be.visible')
    }

    getElement(attribute) {
        return cy.get(attribute).should('be.visible')
    }

    getElementByXpath(attribute) {
        return cy.xpath(attribute).should('be.visible')
    }

    wait() {
        cy.wait(5000)
    }

    checkElementNotPresented(attribute) {
        cy.xpath(attribute).should('not.exist')
    }
}
export default BasePage