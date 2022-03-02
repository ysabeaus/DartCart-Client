import Header from "./Header";
import axios from "axios";
import { ShopProduct } from "./models"
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";
import "./Display.css"
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopProducts, selectShopProducts } from "../common/ShopProductSlice";


const Display = () => {

    const dispatch = useDispatch()

    //console.log(params)
    const ReduxShopProducts = useSelector(selectShopProducts)

    console.log(ReduxShopProducts)

    useEffect(()=> {
        dispatch(fetchShopProducts()) // places return value into REDUX global state
    }, [])


    return (

        <>
        <Header></Header>
            <div className="">

            </div>

            <div className="ProductCardContainer">
            { ReduxShopProducts.length > 0 ?
            ReduxShopProducts.map(ShopProduct => {
                return <ProductCard ShopProduct={ShopProduct}></ProductCard>
            })
            :   ""
           }
           </div>
        <Footer></Footer>
        </>
        
    )
}

export default Display;