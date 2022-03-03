import "./App.css";
import { LoginComponent } from "./LoginComponent";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./common/Home";
import Account from "./features/account/Account";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Account />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
