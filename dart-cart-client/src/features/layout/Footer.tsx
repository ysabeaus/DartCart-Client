import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-black">
      <section className="footer-info">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Social Media Links */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Dart Cart
              </h6>
              <Link to="#" className="fa fa-facebook"></Link>
              <Link to="#" className="fa fa-twitter"></Link>
              <Link to="#" className="fa fa-linkedin"></Link>
              <Link to="#" className="fa fa-instagram"></Link>
              <Link to="#" className="fa fa-pinterest"></Link>
              <Link to="#" className="fa fa-snapchat-ghost"></Link>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Navigation</h6>
              <p>
                <Link to="#!" className="text-reset">
                  Home
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Login
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Register
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Explore
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Sell on Dart Cart
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Returns
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">About</h6>
              <p>Reston, VA 20190, US</p>
              <p>questions@dartcart.com</p>
              <p>+ 01 234 567 88</p>
              <p>+ 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Dart Cart
      </div>
    </footer>
  );
}
