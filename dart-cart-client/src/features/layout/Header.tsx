import "../styles.css";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Nav from "./Navbar";
import Categories from "./Categories";
import { Navbar } from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar>
    <header className="navbar navbar-expand-lg navbar-fixed-top navbar-custom" style= {{width: '100%'}}>
      {/* <div className="container-fluid"> */}
        <Logo />
        <Searchbar />
        <Categories />
        <Nav />
      {/* </div> */}
    </header>
    </Navbar>
  );
};

export default Header;
