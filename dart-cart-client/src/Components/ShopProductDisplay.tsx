
import { ShopProduct } from "./models"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import "./ShopProduct.css"
import { useDispatch, useSelector } from "react-redux"
//import { useGetShopProductByIdQuery, useGetAllShopProductsQuery } from "../services/APIQuery"
import { fetchShopProducts, selectShopProductById } from '../common/ShopProductSlice'
import { CompetingSellers } from "./CompetingSellers"


//imgs
import cartoonBat from "../imgs/cartoon-baseball-bat.png"
import cartoonComputer from "../imgs/cartoon-computer.png"
import cartoonSteak from "../imgs/cartoon-steak.png"
import cartoonClothing from "../imgs/Clothing-baby-clothes.png"
import cartoonDiamond from "../imgs/diamond-ring.png"
import cartoonMeds from "../imgs/Free-medica.png"
import cartoonShoes from "../imgs/Sneaker-tennis-shoes.png"


const ShopProductDisplay = () => {

    const shopProduct_id = parseInt(useParams()?.shopProduct_id!) || 0
    const dispatch = useDispatch()

    //console.log(params)
    const ReduxShopProducts = useSelector((state) => selectShopProductById(state, shopProduct_id ))

    //console.log(ReduxShopProducts)

    // useEffect(()=> {
    //     dispatch(fetchShopProducts()) // places return value into REDUX global state
    // }, [])
    
    const ImgStyleBase = {
        backgroundImage:    "",
        backgroundSize:     "contain",
        backgroundPosition: 'center',
        backgroundRepeat:   "no-repeat",
        width:              "40%",
    }

    function ImgSplice (categories: [{id: number, name: string}]) {

            let newImg = Object.assign({}, ImgStyleBase)
            
            categories.forEach(category => {
                switch( category.name ){
                    case "Perishable":
                    newImg.backgroundImage = `url('${cartoonSteak}')`
                    break
                    case "Electronics":
                    newImg.backgroundImage = `url('${cartoonComputer}')`
                    break
                    case "Clothing":
                    newImg.backgroundImage = `url('${cartoonClothing}')`
                    break
                    case "Luxury":
                    newImg.backgroundImage = `url('${cartoonDiamond}')`
                    break
                    case "Entertainment":
                    newImg.backgroundImage = `url('${cartoonBat}')`
                    break
                    case "Medical":
                    newImg.backgroundImage = `url('${cartoonMeds}')`
                    break
                    case "Footware":
                    newImg.backgroundImage = `url('${cartoonShoes}')`
                    break
                }
            })
            return newImg
        
    }

    return (

        <>
        <Header></Header>
            
            <div className="ProductContainer">
                <div className="InnerProduct">
                    <div className="ProductInfoContainer">
                        {ReduxShopProducts &&
                            <div style={ImgSplice(ReduxShopProducts?.product.categories!)}>
                       
                        </div>}
                        
                        <div className="ProductInfoPocket">
                            <h2>{(ReduxShopProducts?.product.name)?.toUpperCase()}</h2>
                            <br/>
                            <h3>Price: ${ReduxShopProducts?.price}.99</h3>
                            <h3>In Stock: {ReduxShopProducts?.quantity}</h3>
                            <h3>Seller: {ReduxShopProducts?.shop_id}</h3>
                        </div>
                    </div>

                    <div className="ProductDescriptionPocket">
                        <p>{ReduxShopProducts?.product.description}</p>
                    </div>
                
                    
                </div>
                
                    {shopProduct_id && <CompetingSellers Seller={shopProduct_id}></CompetingSellers>}
                
            </div>
            
        <Footer></Footer>
        </>
        
    )
}

export default ShopProductDisplay;