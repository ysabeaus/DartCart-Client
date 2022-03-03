import Header from "./Header";
import axios from "axios";
import { ShopProduct } from "./models"
import { ShopProductCard } from "./ShopProductCard";
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
    
    function findCheapest (List: ShopProduct[]) {
        let productMap : Map<number, number> = new Map<number, number>();

        let finalList: ShopProduct[] = []

        for(let i=0; i < List.length; i++) {
            if (productMap[List[i].product.product_id]) {
                if (List[i].price < productMap[List[i].product.product_id]) {
                    productMap[List[i].product.product_id] = List[i].price
                }
            } else {
                productMap[List[i].product.product_id] = List[i].price
            }
        }
        
        List.forEach(Sproduct => {
            if (Sproduct.price == productMap[Sproduct.product.product_id]) {
                finalList.push(Sproduct)
            }
        })
        return finalList
    }

    useEffect(()=> {
        dispatch(fetchShopProducts()) // places return value into REDUX global state
    }, [])


    return (

        <>
        <Header></Header>
            <div className="">

            </div>

            <div className="ProductCardContainer">
            { 
            
            ReduxShopProducts.length > 0 ?
           findCheapest(ReduxShopProducts)
            .map(ShopProduct => {
                return <ShopProductCard ShopProduct={ShopProduct}></ShopProductCard>
            })
            :   ""
           }
           </div>
        <Footer></Footer>
        </>
        
    )
}

export default Display;