import React from "react";
import { NavLink } from "react-router-dom";
import web from "../images/image1.png";
import Features from "./Features";
import About from "./About";
import Contact from "./Contact";
import Footer from "../molecules/Footer";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-left flex-column">
                  <h1>APPLE IPHONE 12 PRO MAX</h1>
                  <h6 className="my-3">
                    Apple iPhone 12 Pro Max launched on 14th October 2020, comes
                    with a 6.7 inch display & a resolution of 1242 x 2688
                    pixels. The Smartphone is powered by 2x3.1 GHz,4x1.8 GHz
                    Hexa-core core Apple A14 Bionic processor and runs on 6 GB
                    of RAM.
                  </h6>
                  <div className="mt-3">
                    <NavLink to="/features" className="btn btn-primary">
                      Get Started
                    </NavLink>
                  </div>
                </div>
                <div
                  className="col-lg-6 order-l order-lg-2 header-img"
                  style={{ paddingLeft: 200 }}
                >
                  <img src={web}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Features />
      <Contact />
      <About />
      <Footer />
    </>
  );
};

export default Home;
