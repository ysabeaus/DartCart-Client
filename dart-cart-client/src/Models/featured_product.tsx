import React from "react";
import { Link } from "react-router-dom";
export default function Featured_Product(props:any) {
    return (<div className=" card bg-black text-warning" style={{ width: "18rem" }}>
        <img
         className="card-img-top"
          src={props.imageUrl}
          alt="Card image cap"
        ></img>
        <h1>{props.productName}</h1>
        <Link
            id="Chosen Shop Product"
            className="btn  stretched-link"
            to={`/FeatureProduct/${props?.id}` || ""}  
          ></Link>
       {/* //  image
        // price
        // description   */}
        
    </div>);
}