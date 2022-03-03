import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompetitorProducts, selectCompetitorProductById } from "../common/CompetitorsSlice";
import { ShopProduct } from "./models";
import "./ShopProduct.css"

interface SellerProduct {
    Seller: number//product ID
}

export function CompetingSellers ({Seller}: SellerProduct) {

    const dispatch = useDispatch()
    
    const ReduxCompetitorProducts = useSelector((state) => selectCompetitorProductById(state, Seller))

    useEffect(()=> {
        dispatch(fetchCompetitorProducts(Seller)) // places return value into REDUX global state
    }, [])


    return (
        <>
            <div className="Competitors">

            {ReduxCompetitorProducts && ReduxCompetitorProducts?.product.product_id}

            <button className="btn btn-primary" >Add to Cart</button>

            </div>
            
            

        </>
    )

}