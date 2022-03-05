import React from "react";
import logo from "../../imgs/Brand.png";
import { Navbar } from 'react-bootstrap';

const logoStyle = {
  height: "15%",
  width: "15%",
  marginLeft: "3%",
};

const Logo = () => {
  return (
    <>
    <Navbar>
      <a href="Display" style={{ textDecoration: "none", color: "black" }}>
        <h2>DartCart</h2>
      </a>
      <div style={{ textAlign: "left" }}>
        <a href="Display">
          <img
            className="logo-img"
            style={logoStyle}
            src={logo}
            alt="logo"
          ></img>
        </a>
      </div>
      </Navbar>
    </>
  );
};

export default Logo;
