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
import "./Display.css"
import 'bootstrap/dist/css/bootstrap.min.css';
//import 


const linkStyle = {
  color: "rgb(163, 103, 39)",
  textDecoration: "none",
  padding: "1%",
  borderStyle: "solid",
  borderColor: "rgb(119, 126, 126)",
  borderWidth: "1px"
}

const Header = () => {


    return (
      <>
          
    <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-light bg-light">
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
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
      
    </>
  );
}

        /* bootstrap Css 


<div classNameName='DisplayHeader'>
        

        <input classNameName='fbar' placeholder="&#128270;"></input>
        
        <div classNameName='CatagoryNav'>
          
        <Link style={linkStyle}  to="/Clothing"><div classNameName='Catalink '>Clothing</div></Link>
        <Link style={linkStyle}  to="/Shoes"><div classNameName='Catalink '>Shoes</div></Link>
        <Link style={linkStyle}  to="/Baby"><div classNameName='Catalink '>Baby</div></Link>
        <Link style={linkStyle}  to="/Jewelry"><div classNameName='Catalink '>Jewelry</div></Link>
        <Link style={linkStyle}  to="/Home"><div classNameName='Catalink '>Home</div></Link>
        <Link style={linkStyle}  to="/Sport"><div classNameName='Catalink '>Sport</div></Link>
        <Link style={linkStyle}  to="/Health + Beauty"><div classNameName='Catalink '>Health + Beauty</div></Link>
        <Link style={linkStyle}  to="/Pharmacy"><div classNameName='Catalink '>Pharmacy</div></Link>
        <Link style={linkStyle}  to="/Appliances"><div classNameName='Catalink '>Appliances</div></Link>
        <Link style={linkStyle}  to="/Tools"><div classNameName='Catalink '>Tools</div></Link>
        <Link style={linkStyle}  to="/Outdoor"><div classNameName='Catalink '>Outdoor</div></Link>
        <Link style={linkStyle}  to="/Electronics"><div classNameName='Catalink '>Electronics</div></Link>
        <Link style={linkStyle}  to="/Toys"><div classNameName='Catalink '>Toys</div></Link>
        <Link style={linkStyle}  to="/Toys"><div classNameName='Catalink '>Grocery</div></Link>


          
        </div>


      </div>

        */

export default Header