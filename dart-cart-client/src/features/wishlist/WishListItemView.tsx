import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../common/types"
import { WishListItem } from "../../common/types";
import { selectWishListItemById, fetchWishList } from "../../common/slices/wishlistSlice";

const WishListItemView = ({ wishListId }: WishListItem) => {

    const dispatch = useDispatch();
    const item = useSelector((state: RootState) => selectWishListItemById(state, wishListId));

    useEffect(() => {
        dispatch(fetchWishList())
    }, [])

    console.log(`Returned item in wish list item view: ${item}`);

    return(
        <div className="productContainer">
            <img className="productImg" src="https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"/>
            <section className="wishListBody">
                <h5 className="productName">{ item?.product.name }</h5>
                <div className="btn viewProductBtn">View Product</div>
                <div className="btn removeWishBtn">Remove from Wishlist</div>
            </section>
        </div>
    )

}

export default WishListItemView;