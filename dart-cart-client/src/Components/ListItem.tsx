import Header from "./Header";
import axios from "axios";
import { ShopProduct } from "./models"
import { ShopProductCard } from "./ShopProductCard";
import { Link } from "react-router-dom";
import "./Display.css"
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopProducts, selectShopProducts } from "../common/ShopProductSlice";

const ListItem = () => {

  return (
    <>
      <Header></Header>

      

    </>
  )

}

export default ListItem;