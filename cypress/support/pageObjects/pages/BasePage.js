class BasePage {

    clickMethodByXpath(xpath) {
        cy.xpath(xpath).click()
    }

    dblClickMethodByXpath(xpath) {
        cy.xpath(xpath).click()
    }

    dblClickMethod(path) {
        this.getElement(path).dblclick()
    }

    clickMethod(attribute) {
        cy.get(attribute).click()
    }

    fillField(attribute, inputData) {
        this.clickMethod(attribute)
        cy.get(attribute).type(inputData)
    }

    // fillFieldWithExternalData(attribute){
    //     this.clickMethod(attribute)
    //     cy.get(attribute).type(inputData)
    // }

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
        this.getElement(attribute).scrollIntoView()
    }

    checkElementBePresented(attribute) {
        this.getElement(attribute).should('be.visible')
    }

    checkElementBePresentedByXpath(attribute) {
        this.getElementByXpath(attribute).should('be.visible')
    }

    getElement(attribute) {
        return cy.get(attribute)
    }

    getElementByXpath(attribute) {
        return cy.xpath(attribute)
    }

    wait() {
        cy.wait(5000)
    }

}
export default BasePage