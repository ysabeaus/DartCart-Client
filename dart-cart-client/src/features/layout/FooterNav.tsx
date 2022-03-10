import React from "react";
import { Link } from "react-router-dom";

const FooterNav = () => {
    const links = {
        Home: "/",
        Categoriees: "#",
        Deals: "#",
        "Top Items": "#"
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

export default FooterNav;
