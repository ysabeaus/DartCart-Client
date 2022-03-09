import React from "react";
import { Navbar } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

const Categories = () => {
  return (
    <Dropdown style={{ flex: "auto"}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Categories
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Clothing</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Personal Care</Dropdown.Item>
        <Dropdown.Item href="#/action-3">School & Office</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Entertainment</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Automotive</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Furniture</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Home Goods</Dropdown.Item>
        <Dropdown.Item href="#/action-8">Toys</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Categories;