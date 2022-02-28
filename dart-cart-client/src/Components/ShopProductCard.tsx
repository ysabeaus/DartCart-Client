import { ShopProduct } from "./models"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

interface ShopProductCard {
    ShopProduct: ShopProduct
}

const ComputerUrl = "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"

export function ShopProductCard ({ShopProduct}: ShopProductCard)  {


    //Add .navbar-fixed-top 
    //and include a .container
    // or .container-fluid to center and pad navbar content.
//  <nav class="navbar navbar-default navbar-fixed-top">
//   <div class="container">
//     ...
//   </div>
// </nav>



    return (
        <>
        <div className=" card" style={{width: "18rem"}}>
        <img className="card-img-top" 
        src={ComputerUrl}
         alt="Card image cap"></img>
        <div className="card-body">
            <h1>{`${ShopProduct.product.name}`}</h1>
            <h4>${`${ShopProduct.price}`}.95</h4>


            <p className="card-text">{`${ShopProduct.product.description}`}</p>

            
            <p className="card-text">In Stock: {`${ShopProduct.quantity}`}</p>
            <Link className="btn  stretched-link" to={`/DisplayProduct/${ShopProduct.product.product_id}`} state={ShopProduct}></Link>
        </div>
        </div>
              
        
        </>
    )

}
