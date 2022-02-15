
class HomePage {
    vositHomePage() {
        cy.clearCookies()
        cy.visit(Cypress.env("deinBett"))
    }

    acceptCookies() {
        cy.xpath("//button[text()='Alle auswählen & bestätigen']").click()
    }

    clickOnLoginBtn() {
        cy.xpath("//a[@href='/login'][@target='_self']").click()
    }

    clickOnProductType(){
        // cy.xpath("//a[@href='/matratzen'][@class='menu__linkHref menu__linkHref--default']").click()
        // cy.get(':nth-child(2) > .menu__link > .menu__linkHref > .menuLinkTitles > span').click().
        // cy.xpath("//ul[@class='menu']").click()
        cy.get('.headerMenu__navigation').click()
    }

    clickOnMatratzCategory(){
        // cy.visit("https://www.deinbett.de/matratzen")
        cy.get("a[href$='/matratzen'][target='_self']").dblclick();
    }
}

export default HomePage;