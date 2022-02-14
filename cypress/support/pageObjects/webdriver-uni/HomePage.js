
class HomePage {
    vositHomePage() {
        cy.visit(Cypress.env("deinBett"))
    }

    acceptCookies() {
        cy.xpath("//button[text()='Alle auswählen & bestätigen']").click()
    }

    clickOnLoginBtn() {
        cy.xpath("//a[@href='/login'][@target='_self']").click()
    }
}

export default HomePage;