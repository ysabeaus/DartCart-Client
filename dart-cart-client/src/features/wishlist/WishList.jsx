import React, { Component } from "react";
import "./wishList.css";

const WishListItem = ({ productName }) => {
  return (
    <div className="productContainer">
      <img className="productImg" src="https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"/>
      <section className="wishListBody">
        <h5 className="productName">{productName}</h5>
        <div className="btn addCartBtn">Add to Cart</div>
        <div className="btn removeWishBtn">Remove from Wishlist</div>
      </section>
    </div>
  )
}

export default class WishList extends Component {

  render() {
      
    let productList = [];
    let productNames = ["Fork", "Spoon", "Butterknife", "Spork"];

    for (let i = 0; i < productNames.length; i++) {
      productList.push(
        <WishListItem key = {i} productName = {productNames[i]}/>
      )
    }

    return (
      <>
        <h2 className="wishListHeader">Your Wish List</h2>
        {productList}
      </>
    );
  }
}
