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
        <div className="container-fluid">
          <a href="Display" style={{ textDecoration: "none", color: "black" }}>
            <h2>DartCart</h2>
          </a>
          <div style={{ textAlign: 'left' }}>
            <a href="Display">
              <img className="logo-img" style={logoStyle} src={logo} alt="logo"></img>
            </a>
          </div>
          <div className="nav navbar-header">
            <ul className="navbar-nav">
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Categories
                <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Page 1-1</a></li>
                  <li><a href="#">Page 1-2</a></li>
                  <li><a href="#">Page 1-3</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="navbar-brand" style={{ width: '60%', marginLeft: '20px' }}>
            <form className="form-inline my-2 my-lg-0">
              <input type="submit" className="btn btn-success" value="Search" style={{ float: 'right', backgroundColor: '#198754' }} />
              <div style={{ overflow: 'hidden', paddingRight: '.5em' }}>
                <input type="text" placeholder="Search" style={{ width: '100%' }} />
              </div>
            </form>
          </div>
          
          <div className="navbar-header">
            <ul className="navbar-nav mr-auto link-container" style={{ textAlign: 'center' }}>
              <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="login">Login</a></li>
              <li className="nav-item"><a className="nav-link" href="register">Register</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Explore</a></li>
            </ul>
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
        </div>
      </nav>
    </>
  );
};

export default Header;
