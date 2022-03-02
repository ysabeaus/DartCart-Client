import Header from "./Header";
import axios from "axios";
import { Product } from "./models"
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";
import "./Display.css"
import { useEffect, useState } from "react";

const MOCK_SERVER = "https://59749c7b-15b7-4456-b980-124c0bb0d8b0.mock.pstmn.io"


//const products: Product[] = getProducts()

// type DisplayProps = {
//     ProductsID: number
// }

const Display = () => {

    const [viewProducts, setProducts ] = useState<Product[]>([])

    useEffect(()=> {
        getProducts()
    })
    

    async function getProducts() {

        if(viewProducts.length < 1){
            const response = await axios.get(MOCK_SERVER+"/products")
        .then(request => setProducts(request.data))
        console.table(response)
        
        }
        
    }

    return (

        <>
        <Header></Header>
            { viewProducts.length > 0 ?
            viewProducts.map(product => {
                return <ProductCard Product={product}></ProductCard>
            })
            :   ""
           }
            </>
        
    )
}

export default Display;