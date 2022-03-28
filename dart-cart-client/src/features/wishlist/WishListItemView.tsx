import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../../common/types"
import { WishListItem } from "../../common/types";
import { selectWishListItemById, fetchWishList, deleteFromWishList } from "../../common/slices/wishlistSlice";
import { Link } from "react-router-dom";
import axios, { AxiosRequestConfig } from "axios";

const WishListItemView = ({ wishListId }: WishListItem) => {

    const dispatch = useDispatch();
    const item = useSelector((state: RootState) => selectWishListItemById(state, wishListId));
    const [image, setImage] = useState("https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png");

    useEffect(() => {
        dispatch(fetchWishList())
        getImage(item?.product.name)
    }, [])

    const getImage = async (productName) => {

        const options: AxiosRequestConfig = {
            method: 'GET',
            url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
            params: {
                q: productName, 
                pageNumber: '1', 
                pageSize: '10', 
                autoCorrect: 'true'},
            headers: {
              'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
              'X-RapidAPI-Key': '28b5780197msh7b5254876e8e275p19653ajsnd85e31357767'
            }
        };

        await axios.request(options)
            .then((response) => {
                console.log(response.data)
                setImage(response.data.value[0].url)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const sendDelete = async (productId) => {
        await dispatch(deleteFromWishList(productId));
        dispatch(fetchWishList());
    }

    // getImage(item?.product.name);

    return(
        <div className="productContainer">
            <img className="productImg" src={ image }/>
            <section className="wishListBody">
                <h5 className="productName">{ item?.product.name }</h5>
                <Link to={`/shop-product/${ item?.product.id }`} className="btn viewProductBtn">View Product</Link>
                <div className="btn removeWishBtn" onClick={ () => sendDelete(item?.product.id) }>Remove from Wishlist</div>
            </section>
        </div>
    )

}

export default WishListItemView;
