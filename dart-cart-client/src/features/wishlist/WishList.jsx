import { Component, useState } from "react";
import "./wishList.css";
import authHeader from "../../features/authentication/AuthHeader";
import axios from "axios";

const WishListItem = ({ productName, shopProductId }) => {
  return (
    <div className="productContainer">
      <img className="productImg" src="https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg"/>
      <section className="wishListBody">
        <h5 className="productName">{productName}</h5>
        <div className="btn addCartBtn">Add to Cart</div>
        <div className="btn removeWishBtn" onClick={ () => {
            removeFromWishList(shopProductId);
            setTimeout(refresh, 500);
          }
        }>Remove from Wishlist</div>
      </section>
    </div>
  )
}

const removeFromWishList = (id) => {

  return axios.post("http://localhost:9005/removeFromWishList", {
    shopProductId: id
  },
  { headers: authHeader() }
  )
}

const refresh = () => {  
  window.location.reload();
}

export default class WishList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
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
    })
  }

  componentDidMount() {
    this.fetchWishList();   
  }

  render() {
      
    let productList = [];

    for (let i = 0; i < this.state.products.length; i++) {
      productList.push(
        <WishListItem key = {this.state.products[i].shopProduct.id} productName = {this.state.products[i].shopProduct.product.name} shopProductId = {this.state.products[i].shopProduct.id}/>
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
