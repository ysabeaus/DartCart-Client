import "../display/display.css"
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopProducts } from "../../common/slices/shopProductSlice";
import { selectFilteredProducts } from '../../common/slices/shopProductSlice'
import { RootState } from "../../common/types";
import { ProductCard } from "../product-details/ProductCard";
import { ShopProduct } from "../../common/models";
import { ShopProductCard } from "../product-details/ShopProductCard";

const SearchDisplay = () => {

    const dispatch = useDispatch()
    const filteredProducts = useSelector( (state: RootState) => selectFilteredProducts(state))

    

    useEffect(() => {
        dispatch(fetchShopProducts());
    }, [])

    return (

        <>   
            <div className="">

            </div>
            <div className="ProductCardContainer">
            { 
                filteredProducts.length > 0 ? 
                filteredProducts.map(Product => {
                    return <ShopProductCard ShopProduct={Product}></ShopProductCard> })
                : ""
            }




           </div>       
        </>
        
    )
}

export default SearchDisplay;