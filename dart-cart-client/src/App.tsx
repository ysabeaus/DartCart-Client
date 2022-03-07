import "./App.css";
import { Login } from "./features/login/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./features/Home";
import UserRegister from "./features/user-register/UserRegister";
import SellerRegister from "./features/seller-register/SellerRegister";
import React, { useEffect } from "react";
import Display from "./features/display/Display";
import { Provider } from "react-redux";
import ShopProductDisplay from "./features/product-details/ShopProductDisplay";
import store from "./common/store";
import SellerHomepage from "./features/seller-homepage/SellerHomepage";
import ShopPage from "./features/shop-page/ShopPage";
import ListItem from "./features/list-item/ListItem";

function App() {
    useEffect(() => {
        document.title = "DartCart";
    });

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/register" element={<UserRegister />}></Route>
                    <Route path="/signup" element={<SellerRegister />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/sellers/:seller_homepage" element={<SellerHomepage />}></Route>
                    <Route path="/shops/:shop_id" element={<ShopPage />}></Route>
                    <Route path="/shops/:shop_id/list" element={<ListItem />}></Route>
                    <Route path="/products" element={<Display />}></Route>
                    <Route path="/products/:product_id" element={<Display />}></Route>

                    {/* Not sure if this route will work, YOLO */}
                    <Route path="/shops/:shop_id/:product_id" element={<ShopProductDisplay />}></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
