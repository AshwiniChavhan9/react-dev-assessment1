import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>PWIP
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Links</h6>
                <p>
                  <a href="https://www.google.com/" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="https://www.google.com/" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="https://www.google.com/" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="https://www.google.com/" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Follow Us</h6>
                <section className="mb-4">
                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="https://www.google.com/"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-google"></i>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </section>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};
export default Footer;
