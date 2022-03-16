import "./wishList.css"

export function WishList() {
    return(
        <>
            <h2 className="wishListHeader">Your Wish List</h2>
            <div className="productContainer">
                <img className="productImg" src="https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"/>
                <section className="wishListBody">
                    <h5 className="productName">Product Name</h5>
                    <div className="btn addCartBtn">Add to Cart</div>
                    <div className="btn removeWishBtn">Remove from Wishlist</div>
                </section>
            </div>
            <div className="productContainer">
                <img className="productImg" src="https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"/>
                <section className="wishListBody">
                    <h5 className="productName">Product Name</h5>
                    <div className="btn addCartBtn">Add to Cart</div>
                    <div className="btn removeWishBtn">Remove from Wishlist</div>
                </section>
            </div>
            <div className="productContainer">
                <img className="productImg" src="https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"/>
                <section className="wishListBody">
                    <h5 className="productName">Product Name</h5>
                    <div className="btn addCartBtn">Add to Cart</div>
                    <div className="btn removeWishBtn">Remove from Wishlist</div>
                </section>
            </div>
        </>
    );
}