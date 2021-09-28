import React from "react";
import web4 from "../images/image4.png";
import web7 from "../images/image7.png";
import web6 from "../images/image6.png";

const About = () => {
  return (
    <div className="my-5">
      <h1 className="text-center">ABOUT</h1>
      <div className="container contact_div" style={{ marginTop: 20 }}>
        <p className="text-left">
          This is a quick summary of your company's history and purpose, and
          should provide a clear overview of the company's brand story. A great
          About Us page can help tell your brand story, establish customer
          loyalty, and turn your bland ecommerce store into an well-loved brand
          icon
        </p>
        <div className="card-group" style={{ marginTop: 100 }}>
          <div className="card" style={{ width: 300 }}>
            <img src={web4} className="card-img-top" alt="loading" />
            <div className="card-body">
              <p className="card-text text-center">Chairman</p>
            </div>
          </div>
          <div className="card" style={{ width: 300 }}>
            <img src={web4} className="card-img-top" alt="loading" />
            <div className="card-body">
              <p className="card-text text-center">Chief Executive Officer</p>
            </div>
          </div>
          <div className="card" style={{ width: 300 }}>
            <img src={web4} className="card-img-top" alt="loading" />
            <div className="card-body">
              <p className="card-text text-center">Chief Operating Officer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
