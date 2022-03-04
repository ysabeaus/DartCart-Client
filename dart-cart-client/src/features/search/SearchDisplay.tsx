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


const SearchDisplay = () => {

    const dispatch = useDispatch()

    //console.log(params)
    // console.log("Select:   " + selectShopProducts(""))
    // const ReduxShopProducts = useSelector(selectShopProducts);
    // console.log("Redux:   " + ReduxShopProducts)

    // console.log(searchShopProducts)

    // const searchString = useRef<HTMLHeadingElement>(null);
    
    // function findCheapest (List: ShopProduct[]) {
    //     let productMap : Map<number, number> = new Map<number, number>();

    //     let finalList: ShopProduct[] = []

    //     for(let i=0; i < List.length; i++) {
    //         if (productMap[List[i].product.product_id]) {
    //             if (List[i].price < productMap[List[i].product.product_id]) {
    //                 productMap[List[i].product.product_id] = List[i].price
    //             }
    //         } else {
    //             productMap[List[i].product.product_id] = List[i].price
    //         }
    //     }
    //     List.forEach(Sproduct => {
    //         if (Sproduct.price == productMap[Sproduct.product.product_id]) {
    //             finalList.push(Sproduct)
    //         }
    //     })
    //     return finalList
    // }

    // useEffect(()=> {
    //     dispatch(searchShopProducts("")) // places return value into REDUX global state
    // }, [])


const searchString = useRef<HTMLInputElement>(null);
const [search, setSearchResults] = useState([]);

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