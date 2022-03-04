import { ShopProduct } from "../../common/models";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../common/slices/cartSlice';

import "bootstrap/dist/css/bootstrap.min.css";

interface IShopProductCard {
  ShopProduct: ShopProduct;
}
const ComputerUrl =
  "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80";

export function ShopProductCard({ ShopProduct }: IShopProductCard) {
  const dispatch = useDispatch()

  function handleAddtoCard(event) {
    event.preventDefault();
    console.log(ShopProduct.shop_product_id)
    localStorage.setItem("shopId", (ShopProduct.shop_product_id).toString());
    dispatch(addToCart());
  }

  return (
    <>
      <div className=" card bg-black text-warning" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={ComputerUrl}
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <h1>{ShopProduct.product.name}</h1>
          <h4>$ {ShopProduct.price}</h4>

          <p className="card-text">{`${ShopProduct.product.description}`}</p>

          <Link
            id="Chosen Shop Product"
            className="btn  stretched-link"
            to={`/ShopProduct/${ShopProduct.product.product_id}`}
          ></Link>

          
        </div>
        
      </div>
      <div>
        <button className="btn btn-primary" value={ShopProduct.shop_product_id} onClick={(e) => handleAddtoCard(e)}>Add to card</button>
        </div>
    </>
  );
}
