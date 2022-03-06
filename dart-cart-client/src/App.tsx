
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Login } from "./features/login/Login";
import Home from "./features/Home";
import UserRegister from "./features/user-register/UserRegister";
import Display from "./features/display/Display";
import { Provider } from "react-redux";
import ShopProductDisplay from "./features/product-details/ShopProductDisplay";
import store from "./common/store";
import Header from "./features/layout/Header"
import Footer from "./features/layout/Footer"
import Cart from "./features/cart/Cart";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
        <Header/>
          <Routes>
            <Route path="/" element={<Cart />}></Route>
            <Route path="/register" element={<UserRegister />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/Display" element={<Display />}></Route> 
            <Route
              path="/ShopProduct/:product_id"
              element={<ShopProductDisplay />}
            ></Route>
          </Routes>
          <Footer/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
