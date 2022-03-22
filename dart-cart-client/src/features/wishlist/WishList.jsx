import { Component, useState } from "react";
import "./wishList.css";
import authHeader from "../../features/authentication/AuthHeader";

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

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  printState() {
    console.log(this.state.products);
  }

  fetchWishList() {
    fetch("http://localhost:9005/myWishList", {
      method: "GET",
      headers: authHeader()
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({ products: json });
      this.printState();
    })
  }

  componentDidMount() {
    this.fetchWishList();
    
  }

  render() {
      
    let productList = [];

    for (let i = 0; i < this.state.products.length; i++) {
      productList.push(
        <WishListItem key = {this.state.products[i].shopProduct.id} productName = {this.state.products[i].shopProduct.product.name}/>
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
