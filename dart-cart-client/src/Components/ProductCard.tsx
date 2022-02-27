import { Product } from "./models"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

interface ProductCard {
    Product: Product
}

const ComputerUrl = "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"

export function ProductCard ({Product}: ProductCard)  {


    return (
        <>
        <div className=" card" style={{width: "18rem"}}>
        <img className="card-img-top" 
        src={ComputerUrl}
         alt="Card image cap"></img>
        <div className="card-body">
            <h1>{`${Product.name}`}</h1>
            <p className="card-text">{`${Product.description}`}</p>
            <Link className="btn btn-primary stretched-link" to={`/ShopProduct/${Product.product_id}`} ></Link>
        </div>
        </div>
              
        
        </>
    )

}

