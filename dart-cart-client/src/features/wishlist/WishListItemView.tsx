import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../common/types"
import { WishListItem } from "../../common/types";
import { selectWishListItemById, fetchWishList, deleteFromWishList } from "../../common/slices/wishlistSlice";
import { Link } from "react-router-dom";

const WishListItemView = ({ wishListId }: WishListItem) => {

    const dispatch = useDispatch();
    const item = useSelector((state: RootState) => selectWishListItemById(state, wishListId));

    useEffect(() => {
        dispatch(fetchWishList())
    }, [])

    const sendDelete = async (productId) => {
        await dispatch(deleteFromWishList(productId));
        dispatch(fetchWishList());
    }

    return(
        <div className="productContainer">
            <img className="productImg" src="https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"/>
            <section className="wishListBody">
                <h5 className="productName">{ item?.product.name }</h5>
                <Link to={`/shop-product/${ item?.product.id }`} className="btn viewProductBtn">View Product</Link>
                <div className="btn removeWishBtn" onClick={ () => sendDelete(item?.product.id) }>Remove from Wishlist</div>
            </section>
        </div>
    )

}

export default WishListItemView;