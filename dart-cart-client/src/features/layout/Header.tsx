import logo from "../../imgs/Brand.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";
import Categories from "./Categories";
import ToggleButton from "./ToggleButton";

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-fixed-top navbar-custom">
      <div className="container-fluid">
        <Logo />
        <Searchbar />
        <Categories />
        <Navbar />
        <ToggleButton />
      </div>
    </header>
  );
};

export default Header;
