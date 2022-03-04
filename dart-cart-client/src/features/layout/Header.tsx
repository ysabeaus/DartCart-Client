import logo from "../../imgs/Brand.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

const logoStyle = {
  height: "15%",
  width: "15%",
  marginLeft: "3%",
};

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-custom">
        <div className = "image-container">
        <img className="logo-img" style={logoStyle} src={logo} alt="logo"></img>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="display">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login">
                Login
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="register">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Explore
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Header;
