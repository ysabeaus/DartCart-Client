export default function Footer () {

    return (
        <>
<footer className="text-center text-lg-start bg-black">

  <section className="footer-info">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Dart Cart
          </h6>
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-linkedin"></a>
          <a href="#" className="fa fa-instagram"></a>
          <a href="#" className="fa fa-pinterest"></a>
          <a href="#" className="fa fa-snapchat-ghost"></a>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 className="text-uppercase fw-bold mb-4">
            Navigation
          </h6>
          <p>
            <a href="#!" className="text-reset">Home</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Login</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Register</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Explore</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Sell on Dart Cart</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Returns</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

          <h6 className="text-uppercase fw-bold mb-4">
           
          </h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>

      </div>
    </div>
  </section>

  <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  
</footer>

    </>
    )
}