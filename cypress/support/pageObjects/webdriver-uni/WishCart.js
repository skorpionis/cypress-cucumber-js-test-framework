
class WishCartPage {

   fillIndexInWishList(){
       cy.get("[class='input input--wishlist']").type("11155")
   }
    
   addToBasketFromWishList(){
        cy.get("[id = 'addAddToWishlist']").click()
   }
}
export default WishCartPage;