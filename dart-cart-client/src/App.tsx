import "./App.css";
import { Login } from "./features/login/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./features/Home";
import UserRegister from "./features/user-register/UserRegister";
import React from "react";
import Display from "./features/display/Display";
import { Provider } from "react-redux";
import ShopProductDisplay from "./features/product-details/ShopProductDisplay";
import store from "./common/store";
import Header from "./features/layout/Header";
import Footer from "./features/layout/Footer";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="display" element={<Home />}></Route>
          <Route path="/register" element={<UserRegister />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/display" element={<Display />}></Route>
          <Route
            path="/products/:product_id"
            element={<ShopProductDisplay />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  );
}
export default App;
