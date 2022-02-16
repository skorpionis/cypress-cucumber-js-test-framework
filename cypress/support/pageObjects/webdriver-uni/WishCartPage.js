import BasePage from "./BasePage";

class WishCartPage extends BasePage {

    regionIndex = "11155"
    wishListIcon = "[class='input input--wishlist']"
    addToWishListBtn = "[id = 'addAddToWishlist']"

    fillIndexInWishList() {
        this.fillField(this.wishListIcon, this.regionIndex)
    }

    addToBasketFromWishList() {
        this.clickMethod(this.addToWishListBtn)
    }
}
export default new WishCartPage;