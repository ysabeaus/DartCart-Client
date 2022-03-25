
import { Product } from "../../common/models";
import { Link } from "react-router-dom";
import authHeader from "../../features/authentication/AuthHeader";
import axios from "axios";
import React, { useState } from "react";


interface IShopProductCard {
  Product: Product;
}
const ComputerUrl =
  "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80";



<<<<<<< HEAD
          <Link
            id="Chosen Shop Product"
            className="btn  stretched-link"
            to={`/product-review/${Product?.id}` || ""}
          ></Link>
        </div>
      </div>
    </>
  );
=======

function addToWishList(productId){
   return axios.post("http://localhost:9005/addToWishList", {
      productId: productId
    },
      { headers: authHeader() }
    ).then(response => {
        return "Item added to wishlist!"
      }).catch((error)=>{
        return "Item already exists in wishlist!"
      })
  }
  
async function addToWL(productId){
  const y = await addToWishList(productId);
  return React.createElement("span", {class : "wishListNotice  youCanSeeMe"}, y);
>>>>>>> 961eadde6e9aeb51b00265455b45e4e168b9e74f
}

export function ShopProductCard({ Product }: IShopProductCard) {
  const [notice, setNotice] = useState(React.createElement("span", {class : "wishListNotice"}, "hey"))
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

          </div>
        </div>
      </Link>
      {JSON.stringify(authHeader()).length > 100 ? (
        <div className=" card bg-black text-warning" style={{ height: "4rem", width: "18rem" }}>
          
          <button id="addToWishList" className="btn stretched-link  addToWishList" onClick={async () => {
            setNotice(await addToWL(Product?.id));
            setTimeout(() =>{setNotice(React.createElement("span", {class : "wishListNotice"}, "hey"))}, 5000);
          }
          }>Add To Wishlist
          <div>{notice}</div>
          </button>
        </div>) : (
        <Link to={`/shop-product/${Product?.id}` || ""} style={{ textDecoration: 'none' }}>
          <div className=" card bg-black text-warning" style={{ height: "4rem", width: "18rem" }}>
          </div>
        </Link>
      )}
    </div>
  );
}