import React from "react";
import Categories from "./Categories"
import { Navbar } from 'react-bootstrap';
const Searchbar = () => {
  return (

    <div className="navbar-brand" style={{width:" 60%", marginLeft: "20px" }}>
      <div className="form-inline my-2 my-lg-0">
        <input
          type="submit"
          className="btn btn-success"
          value="Search"
          style={{ float: "right", backgroundColor: "#198754" }}
        />
        <div style={{ overflow: "hidden", paddingRight: ".5em" }}>
          <input type="text" placeholder="Search" style={{ width: "100%" }} />
        </div>
      </div>
    </div>


  );
};

export default Searchbar;
