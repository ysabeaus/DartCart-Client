import { ShopProduct } from "./models"

interface ProductPage {
    ShopProduct: ShopProduct
}


export function ShopProductPage ({ShopProduct}: ProductPage) {

    return (
        <>
            <h1>{ShopProduct.product.description}</h1>

        </>
    )

}