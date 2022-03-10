import React from "react";
import logo from "../../imgs/Brand.png";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const logoStyle = {
    height: "50px",
    width: "75px",
    marginLeft: "5%"
};

const Logo = () => {
    return (
        <>
            <Navbar style={{ width: "30%" }}>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                    <h2>DartCart</h2>
                </Link>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                    <div style={{ textAlign: "left" }}>
                        <img className="logo-img" style={logoStyle} src={logo} alt="logo"></img>
                    </div>
                </Link>
            </Navbar>
        </>
    );
};

export default Logo;
