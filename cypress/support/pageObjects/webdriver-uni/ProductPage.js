import BasePage from "./BasePage";

class ProductPage extends BasePage {
    
    pointToAdd = "[class='wishlistIcon wishlistIcon--pointer']"
    countOfProductCardToAdd = 5
    logoToScrollTo = '.logo__icon > svg'
    wishListBtn = "//a[@href='/wunschliste'][@target='_self']"

    addPorductCardsToWishList() {
        this.addingSeveralCardsToWishList(this.pointToAdd, this.countOfProductCardToAdd)
    }

    scrollUpToClickWishList() {
        this.scrollUpToGetWishList(this.logoToScrollTo)
    }

    clickOnWishList() {
        this.clickMethodByXpath(this.wishListBtn)
    }
}
export default new ProductPage;