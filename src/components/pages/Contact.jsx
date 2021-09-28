import React, { useState } from "react";
import web from "../images/image3.png";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.name} ${data.email}`);
    setData({ name: "", email: "" });
  };
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Contact</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1">
            <img src={web}></img>
          </div>
          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-right flex-column">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <input
                  type="text"
                  name="name"
                  onChange={inputEvent}
                  value={data.name}
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={inputEvent}
                  class="form-control"
                  value={data.email}
                  id="exampleFormControlInput1"
                  placeholder="Enter your email id"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Summary
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  I Agree
                </label>
              </div>
              <div className="col-12" style={{ paddingLeft: 250 }}>
                <button type="submit" class="btn btn-outline-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
