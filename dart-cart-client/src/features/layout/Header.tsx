import "../styles.css";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";
import Categories from "./Categories";

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-fixed-top navbar-custom">
      <div className="container-fluid">
        <Logo />
        <Searchbar />
        <Categories />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
