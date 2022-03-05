import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const textClasses = props.footer ? "text-reset" : "nav-link";
  const linkClasses = props.footer ? "nav-item mb-3" : "nav-item";

  const links = {
    Home: "/",
    Login: "/login",
    Register: "/register",
    Explore: "/explore",
  };

  const navLinks = Object.keys(links).map((link) => {
    return (
      <li key={link} className={linkClasses}>
        <Link to={links[link]} className={textClasses}>
          {link}
        </Link>
      </li>
    );
  });

  return (
    <nav className="navbar-header">
      <ul
        className="navbar-nav mr-auto link-container"
        style={!props.footer ? { textAlign: "center" } : {}}
      >
        {navLinks}
      </ul>
    </nav>
  );
};

export default Navbar;
