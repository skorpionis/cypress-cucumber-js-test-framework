import BasePage from "./BasePage";

class WishCartPage extends BasePage {

    #regionIndex = "11155"
    #wishListIcon = "[class='input input--wishlist']"
    #addToWishListBtn = "[id = 'addAddToWishlist']"
    #finalSign = "//div[@id='overlayRight']//div[@class='generalOverlay__headlineText']"

    fillIndexInWishList() {
        this.fillField(this.#wishListIcon, this.#regionIndex)
    }

    addToBasketFromWishList() {
        this.clickMethod(this.#addToWishListBtn)
    }

    checkForCompletedAddingToBasket(){
        this.checkElementBePresentedByXpath(this.#finalSign)
    }
}
export default new WishCartPage;