import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon

} from 'mdb-react-ui-kit';

import { IoMdSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'
import logo from '../../imgs/boldDart.jpg'
import "../display/display.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatedSearchString } from '../../common/slices/shopProductSlice';

// const [GetSearch, setSearch] = useState("Header")


const logoStyle = {
height: "15%",
width:  "15%",
marginLeft: "3%"

}

const Header = () => {

  const dispatch = useDispatch();


  const handleSearch = (e: any) => {
    if(e.code !== "Enter") {
      dispatch(updatedSearchString(e.target.value))
    } else {
      // navigate to search page
    }
  }


  return (
    <>
  
  <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-black">
  <img style={logoStyle} src={logo}></img>
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
        <input className="form-control mr-sm-2 " type="text" placeholder="Search" aria-label="Search" onKeyUp={e => handleSearch(e)}></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </div>
  </nav>
    
  </>
);
}

export default Header