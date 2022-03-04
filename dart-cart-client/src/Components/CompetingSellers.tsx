import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompetitorProducts, selectCompetitorProducts } from "../common/CompetitorsSlice";
import { selectShopProductById } from "../common/ShopProductSlice"
import { ShopProduct } from "./models";
import "./ShopProduct.css"

interface SellerProduct {
    Seller: number//product ID
}

export function CompetingSellers ({Seller}: SellerProduct) {

    const dispatch = useDispatch()
    
    const ReduxCompetitorProducts = useSelector(selectCompetitorProducts)

    console.log(ReduxCompetitorProducts)

    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
    //Competing sellers are fetched by using the shopProduct ID of the product card from /DISPLAY
    //We then use shopProduct to retrieve all other shopproducts with matching product ID inside of Shop product model
    //finally, then use the shopID inside all of the retrieved shopProducts to get seller information
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
    useEffect(()=> {
        dispatch(fetchCompetitorProducts(Seller)) // places return value into REDUX global state
    }, [])


    return (
        
            <div className="Competitors">

            {ReduxCompetitorProducts && ReduxCompetitorProducts.
            map(competitors => {
                return (
                    
                    <div className="SellerContainer">
                        <div className="SellerWindow">

                            <div className="SellerLogo"></div>

                        </div>

                        <div className="SellerPocket">
                        
                            <div className="SellerInfo">
                                <span>{competitors.product.name}</span><br/>
                                <span>Price: ${competitors.price}.99</span><br/>
                                {competitors.discount > 0 && <span className="SellerDiscount">Discount: ${competitors.discount}.00</span>}
                            </div>
                            <div className="SellerInfo">
                                <span>Location: {competitors.location}</span><br/>
                                <span>In Stock: {competitors.quantity}</span><br/>
                            </div>

                        </div>
                        <button className="btn btn-primary" >Add to Cart</button>
                    </div>
                    
                )
                

            }) || ""
            }

            

            </div>
         
    )

}