import Header from "./Header";
import axios from "axios";
import { Product } from "./models"
import { ShopProductCard } from "./ShopProductCard";
import { Link } from "react-router-dom";
import "./Display.css"
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectProducts } from "../common/ProductSlice";

const ListItem = () => {

  const dispatch = useDispatch()
  // const ReduxProducts = useSelector(selectProducts)
  const ReduxProducts = useSelector(selectProducts)


  // function getProducts(){
  //   console.log(ReduxProducts)
  // }



  return (
    <>
      <Header></Header>

      {console.log(fetchProducts)}
 

      <h3>Select Product to List</h3>

      
      {/* <script>
      for(let i = 0; ReduxProducts.length; i++) {
        
      }
      </script> */}
    <input placeholder="Product Name"></input>
    <input placeholder="Product Description"></input>
    
    <select name ="products">
      <option value="test">Test</option>
      <option value="test2">Test2</option>
    </select>

    <input placeholder="Product Category"></input>
    <input placeholder="Price"></input>
    <input placeholder="Quantity"></input>

    <button className='btn btn-dark'>Submit</button>

    
    
      {/* <select name ="products">
        <option value="test">Test</option>
        <option value="test2">Test2</option>
      </select> */}


    </>
  )

}

export default ListItem;