import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Display from "./features/display/Display";
import "./App.css";
import { Provider } from "react-redux";
import ShopProductDisplay from "./features/product-details/ShopProductDisplay";
import store from "./common/store";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/Display" element={<Display />}></Route>
            <Route
              path="/ShopProduct/:product_id"
              element={<ShopProductDisplay />}
            ></Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
