import axios from "axios"
import { ShopProduct } from "./models"
import { useEffect, useState } from "react"
import { ShopProductCard } from "./ShopProductCard"
import Header from "./Header"
import Footer from "./Footer"

import { ShopProductPage } from "./ShopProductPage"
import { useDispatch, useSelector } from "react-redux"
//import { useGetShopProductByIdQuery, useGetAllShopProductsQuery } from "../services/APIQuery"
import { fetchShopProducts, selectShopProducts, selectShopProductById } from '../common/ShopProductSlice'
import { CompetingSellers } from "./CompetingSellers"


const ShopProductDisplay = () => {

    const dispatch = useDispatch()

    const ReduxShopProducts = useSelector((state) => selectShopProductById(state, 1))

    console.log(ReduxShopProducts)

    useEffect(()=> {
        dispatch(fetchShopProducts()) // places return value into REDUX global state
    }, [])
    

    return (

        <>
        <Header></Header>
            
            
            {ReduxShopProducts?.shop_product_id}
            

            <CompetingSellers Seller={1}></CompetingSellers>
            

        <Footer></Footer>
        </>
        
    )
}

export default ShopProductDisplay;