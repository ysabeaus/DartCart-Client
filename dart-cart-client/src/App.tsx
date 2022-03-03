import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Display from './Components/Display';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import ShopProductDisplay from './Components/ShopProductDisplay';
import store from './common/store'
import Product from './Components/Product';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
          <Routes>
            <Route path="/Display" element={<Display />}></Route>
            <Route path="/Product" element={<Product />}></Route>
            <Route path="/ShopProduct/:product_id" element={<ShopProductDisplay />}></Route>
          </Routes>
          
      </Provider>
      </BrowserRouter>
    </div>
  );
}
{
  //"/ShopProduct/:id"
}
export default App;
