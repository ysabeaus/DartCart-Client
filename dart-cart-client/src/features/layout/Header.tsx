import logo from "../../imgs/boldDart.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { logout, selectUser } from "../../common/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
//import

const logoStyle = {
  height: "15%",
  width: "15%",
  marginLeft: "3%",
};


const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  let username = "";
  if (user != null) {
    username = JSON.parse(user).username;
  }

  const handleLogout = async (e) => {
    dispatch(logout(null));
    window.alert("Successfully Logged Out");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-black">
        
          <img style={logoStyle} src={logo} alt="logo">
            
          </img>
        
        
        <div className="navbar-brand" style={{ width: '50%' }}>
          <form className="form-inline my-2 my-lg-0">
            <input type="submit" className="btn btn-success" value="Search" style={{ float: 'right', backgroundColor: 'green' }} />
            <div style={{ overflow: 'hidden', paddingRight: '.5em' }}>
              <input type="text" placeholder="Search" style={{ width: '100%' }} />
            </div>
          </form>
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
            {
              (username) ? (<><li className="nav-item active">
                <Link className="nav-link" to="/login" >
                  {"Welcome! " + username}
                </Link>
              </li>

                <li className="nav-item active">
                  <Link className="nav-link" to="/" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>

                <li className="nav-item active">
                  
                    <Link to="/Cart" type="button" className="btn btn-success">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                      </svg>
                      {}
                    </Link>
                  
                </li>

              </>)
                :
                (<li className="nav-item active">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>)
            }




          </ul>

        </div>
      </nav>
    </>
  );
};

export default Header;
