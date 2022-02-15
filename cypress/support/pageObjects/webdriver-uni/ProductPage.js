
class ProductPage {
    listProducts() {
        // cy.xpath("//div[@class='wishlistIcon wishlistIcon--pointer']")
        cy.get("[class='wishlistIcon wishlistIcon--pointer']").each((item, index, list) => {
            // console.log(list)

            for (index; index < 5; index++) {
                cy.wrap(item).click()
            }
        }).wait(5000)
    }

    scrollUpToGetWishList() {
        cy.get('.logo__icon > svg').scrollIntoView()
    }

    clickOnWishList() {
        cy.xpath("//a[@href='/wunschliste'][@target='_self']").click()
    }
}
export default ProductPage;