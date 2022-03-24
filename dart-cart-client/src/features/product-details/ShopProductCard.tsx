import { Product } from "../../common/models";
import { Link } from "react-router-dom";
import authHeader from "../../features/authentication/AuthHeader";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

interface IShopProductCard {
  Product: Product;
}
const ComputerUrl =
  "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80";

function addToWishList(productId) {
  axios.post("http://localhost:9005/addToWishList", {
    productId: productId
  },
    { headers: authHeader() }
  )
}

export function ShopProductCard({ Product }: IShopProductCard) {
  return (
    <div style={{ height: "30rem" }}>
      <Link to={`/shop-product/${Product?.id}` || ""} style={{ textDecoration: 'none' }}>
        <div className=" card bg-black text-warning" style={{ height: "26rem", width: "18rem" }}>
          <img
            className="card-img-top"
            src={ComputerUrl}
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h1>{Product?.name || ""}</h1>

            <p className="card-text">{`${Product?.description || ""}`}</p>

            {/* <button id="addToWishList" className="btn  stretched-link" onClick={() =>
              addToWishList(Product?.id)
            }>Add To Wishlist</button>

            <Link
              id="Chosen Shop Product"
              className="btn  stretched-link"
              to={`/shop-product/${Product?.id}` || ""}
            ></Link> */}
          </div>
        </div>
      </Link>
      <div className=" card bg-black text-warning" style={{ height: "4rem", width: "18rem" }}>
        <button id="addToWishList" className="btn  stretched-link  addToWishList" onClick={() =>
          addToWishList(Product?.id)
        }>Add To Wishlist</button>
      </div>
    </div>
  );
}
