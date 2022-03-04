import Header from "../layout/Header";
import axios from "axios";
import { ShopProduct } from "../../common/models"
import { ShopProductCard } from "../product-details/ShopProductCard";
import { Link } from "react-router-dom";
import "../display/display.css"
import { useEffect, useRef, useState } from "react";
import Footer from "../layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { searchShopProducts, selectShopProducts } from "../../common/slices/searchSlice";
import { fetchShopProducts } from "../../common/slices/shopProductSlice";
import { selectFilteredProducts } from '../../common/slices/shopProductSlice'


const SearchDisplay = () => {

    const dispatch = useDispatch()
    const filteredProducts = useSelector(selectFilteredProducts)

    return (

        <>
        <Header></Header>
            <div className="">

            </div>
            <div className="ProductCardContainer">
                 {/* <input onKeyUp={searchShopProducts()} placeholder="Search for products"></input> */}
            {/* { 
            ReduxShopProducts.length > 0 ? 
                ReduxShopProducts.map(ShopProduct => {
                    return <ShopProductCard ShopProduct={ShopProduct}></ShopProductCard>
            })
            :   ""
           } */}
           </div>
        <Footer></Footer>
        </>
        
    )
}

export default SearchDisplay;