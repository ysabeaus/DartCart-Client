import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Display from './Components/Display';
import ShopProductDisplay from './Components/ShopProductDisplay';
import store from './common/store'
import { Login } from "./features/login/Login";
import Home from "./features/Home";
import UserRegister from "./features/user-register/UserRegister";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/register" element={<UserRegister />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/Display" element={<Display />}></Route>
              <Route path="/ShopProduct/:shopProduct_id" element={<ShopProductDisplay />}></Route>
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
