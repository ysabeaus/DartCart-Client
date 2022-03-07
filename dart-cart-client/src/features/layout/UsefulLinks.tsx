import React from "react";
import { Link } from "react-router-dom";

const UsefulLinks = () => {
  const links = {
    "Sell on Dart Cart": "#",
    Returns: "#",
    Orders: "/orders",
    Help: "#",
  };

  const navLinks = Object.keys(links).map((link) => {
    return (
      <p key={link}>
        <Link to={links[link]} className="text-reset">
          {link}
        </Link>
      </p>
    );
  });

  return <>{navLinks}</>;
};

export default UsefulLinks;
