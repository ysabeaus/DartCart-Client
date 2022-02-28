
import axios from "axios"
import { ShopProduct } from "./models"
import { useEffect, useState } from "react"
import { ShopProductCard } from "./ShopProductCard"
import Header from "./Header"
import Footer from "./Footer"
import { ShopProductPage } from "./ShopProductPage"
import { useLocation } from 'react-router-dom'
import { selectShopProducts } from "./common/ShopProductSlice"
import { useSelector } from "react-redux"

const MOCK_SERVER = "https://59749c7b-15b7-4456-b980-124c0bb0d8b0.mock.pstmn.io"

const ShopProductDisplay = () => {

    
    //const state = useLocation()
    const [viewProducts, setProducts ] = useState<ShopProduct[]>([])
    //const [showPID, setPID] = useState(state)
    const ReduxShopProducts = useSelector(selectShopProducts)


    //console.log(state)

    useEffect(()=> {
        getProducts()
    })
    

    async function getProducts() {

        if(viewProducts.length < 1){
            const response = await axios.get(MOCK_SERVER+"/ShopProducts")
        .then(request => setProducts(request.data))
        console.table(response)
        
        }
        
    }



    //selectShopProducts
    // { viewProducts.length > 0 ?
    //     viewProducts.map(shopproduct => {
    //         return <ShopProductCard ShopProduct={shopproduct}></ShopProductCard>
    //     })
    //     :   ""
    //    }<ShopProductPage></ShopProductPage>

    return (

        <>
        <Header></Header>
            

            <h1>hfghf</h1>
 
        <Footer></Footer>
        </>
        
    )
}

export default ShopProductDisplay;