import Header from "../layout/Header";
import "../display/display.css"
import { useEffect, useRef, useState } from "react";
import Footer from "../layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopProducts } from "../../common/slices/shopProductSlice";
import { selectFilteredProducts } from '../../common/slices/shopProductSlice'
import { RootState } from "../../common/types";
import { ProductCard } from "../product-details/ProductCard";

const SearchDisplay = () => {

    const dispatch = useDispatch()
    const filteredProducts = useSelector( (state: RootState) => selectFilteredProducts(state))

    useEffect(() => {
        dispatch(fetchShopProducts());
    }, [])

    return (

        <>
        <Header></Header>
            <div className="">

            </div>
            <div className="ProductCardContainer">
            { 
                filteredProducts.length > 0 ? 
                filteredProducts.map(Product => {
                    console.log(Product)
                    return <ProductCard Product={Product}></ProductCard> })
                : ""
            }
           </div>
        <Footer></Footer>
        </>
        
    )
}

export default SearchDisplay;