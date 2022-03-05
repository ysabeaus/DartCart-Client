import React from "react";

const Categories = () => {
  return (
    <div className="nav navbar-header">
      <ul className="navbar-nav">
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">
            Categories
            <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Page 1-1</a>
            </li>
            <li>
              <a href="#">Page 1-2</a>
            </li>
            <li>
              <a href="#">Page 1-3</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
