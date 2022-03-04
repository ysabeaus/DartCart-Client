import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { LoginComponent } from './LoginComponent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./common/Home";
import Account from "./features/account/Account";
import PreviousOrders from './features/previous-orders/previous-orders';
import Error404Page from './components/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Account />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/orders" element={<PreviousOrders />}></Route>
          <Route path="/*" element={<Error404Page />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
