import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Display from './Components/Display';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import ShopProductDisplay from './Components/ShopProduct';
//import 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/*<Provider store={store}>*/}
          <Routes>
            <Route path="/Display" element={<Display />}></Route>
            <Route path="/ShopProduct" element={<ShopProductDisplay />}></Route>
          </Routes>
          
      {/*</Provider>*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
