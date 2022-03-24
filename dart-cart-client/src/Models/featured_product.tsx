import React from "react";
import { Link } from "react-router-dom";
export default function FeaturedProduct(props:any) {
    return (<div className=" card bg-black text-warning" style={{ width: "18rem" }}>
        <img
         className="card-img-top"
          src={props.imageUrl}
          alt="Card product cap"
        ></img>
        <h1>{props.productName}</h1>
        <p>
            price: {props.price - props.discount}
        </p>
        <p>discount: {((props.discount / props.price) * 100).toFixed(2)} %</p>
        <Link
            id="Chosen Shop Product"
            className="btn  stretched-link"
            to={`/shop-product/${props?.id}` || ""}  
          ></Link>
       {/* //  image
        // price
        // description   */}
        
    </div>);
}