import "./App.css";
import { Login } from "./features/login/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./features/Home";
import UserRegister from "./features/user-register/UserRegister";
import PreviousOrders from './features/previous-orders/previous-orders';
import React, { useEffect } from "react";
import SellerRegister from "./features/seller-register/SellerRegister";
import Error404Page from './components/Error';
import { Provider } from "react-redux";
import Display from "./features/display/Display";
import ShopProductDisplay from "./features/product-details/ShopProductDisplay";
import store from "./common/store";
import Header from "./features/layout/Header"
import Footer from "./features/layout/Footer"


function App() {
  useEffect(() => {
    document.title = "Dart Cart";
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<UserRegister />}></Route>
            <Route path="/signup" element={<SellerRegister />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/orders" element={<PreviousOrders />}></Route>
            <Route path="/display" element={<Display />}></Route>
            <Route path="/shop/:product_id" element={<ShopProductDisplay />}></Route>
            <Route path="/*" element={<Error404Page />}></Route>
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
