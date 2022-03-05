import React from "react";
import logo from "../../imgs/Brand.png";

const logoStyle = {
  height: "15%",
  width: "15%",
  marginLeft: "3%",
};

const Logo = () => {
  return (
    <>
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
    </>
  );
};

export default Logo;
