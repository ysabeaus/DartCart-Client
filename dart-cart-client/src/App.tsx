import "./App.css";
import { Login } from "./features/login/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./features/Home";
import UserRegister from "./features/user-register/UserRegister";
import React, { useEffect } from "react";
import Display from "./features/display/Display";
import { Provider } from "react-redux";
import Display from "./features/display/Display";
import ShopProductDisplay from "./features/product-details/ShopProductDisplay";
import store from "./common/store";
import Header from "./features/layout/Header";
import Footer from "./features/layout/Footer";


function App() {
  useEffect(() => {
    document.title = "Dart Cart";
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Display />}></Route>
            <Route path="/register" element={<UserRegister />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/shop-product/:product_id"
              element={<ShopProductDisplay />}
            ></Route>
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
