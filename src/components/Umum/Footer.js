import React, { Component } from "react";
import iconLinkedIn from "../../assets/images/image/Linkedin.png";
class Footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#233000", color: "#FFFFFF" }}>
        {/* >Large */}
        <div className="d-none d-lg-block">
          <div className="container ">
            <div className="row p-5">
              <div className="col-2 text-center d-flex align-items-center">
                <h1 className="fs-1">Mayastik.</h1>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <div className="d-flex align-items-start flex-column">
                  <p className="fs-5 fw-semibold">Contact</p>
                  <label>(+62) 81234567890</label>
                  <label>info@mayastiklezat.com</label>
                  <br />
                  <label>1959 Pondok Cilegon Bahagia.</label>
                  <label>Cilegon City, CLG, 42161</label>
                </div>
              </div>

              <div className="col-6 d-flex justify-content-center">
                <div className="d-flex align-items-start flex-column">
                  <p className="fs-5 fw-semibold">Never Miss a Recipe</p>
                  <div>
                    <input
                      type="text"
                      className="inputEmail"
                      id="textInput"
                      placeholder="Email Address"
                    />
                    <button
                      className="ms-2"
                      type="submit"
                      style={{ border: 0, backgroundColor: "#5E6600" }}
                    >
                      <label className="buttonSubscribe">Subscribe</label>
                    </button>
                  </div>
                  <label className="mt-2 subCaption3">
                    Join our subscribers and get best recipe delivered each
                    week!
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr className="garisFooter" />
        </div>

        {/* Small - Medium */}
        <div className="d-block d-lg-none">
          {/* Small */}
          <div className="d-block d-md-none">
            <div className="text-center">
              <h1 className="fs-1 pt-3"> Mayastik.</h1>
            </div>

            <div className="text-center mt-4 pt-2">
              <input
                type="text"
                className="inputEmail"
                id="textInput"
                placeholder="Email Address"
              />
              <button
                className="ms-2"
                type="submit"
                style={{ border: 0, backgroundColor: "#5E6600" }}
              >
                <label className="buttonSubscribe">Subscribe</label>
              </button>
              <p className="mt-3 pt-1 pb-3">
                Join our subscribers and get best recipe delivered each week!
              </p>
            </div>
            <div>
              {/* <p
                className="fw-semibold px-2 text-center"
                style={{ padding: 0, margin: 0, fontSize: "0.9em" }}
              >
                Contact Us!
              </p>

              <div className="row pt-2 px-2">
                <div className="col" style={{ fontSize: "0.75em" }}>
                  <label>(+62) 81234567890</label>
                  <br />
                  <label>info@mayastiklezat.com</label>
                </div>
                <div className="col" style={{ fontSize: "0.75em" }}>
                  <div className=" d-flex justify-content-end">
                    1959 Pondok Cilegon Bahagia.
                  </div>
                  <div className=" d-flex justify-content-end">
                    Cilegon City, CLG, 42161
                  </div>
                </div>
              </div> */}
              <hr className="garisFooter mt-3" />
              <div className="container d-flex justify-content-between">
                <div
                  className="mt-2 pb-2"
                  style={{ fontSize: "0.85em", color: "#FFFFFF" }}
                >
                  Copyright © 2023
                </div>
                <div className="mt-2 ">
                  <a href="https://www.linkedin.com/in/audimaoktasena/">
                    <img src={iconLinkedIn} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Medium */}
          <div className="d-none d-md-block">
            <div className="row px-3 py-5">
              <div className="col-6 col-md-2 text-center d-flex align-items-center">
                <h1 className="fs-1"> Mayastik. .</h1>
              </div>
              <div className="col-6 col-md-4 d-flex justify-content-center">
                <div className="d-flex align-items-start flex-column">
                  <p className="fs-5 fw-semibold">Contact</p>
                  <label>(+62) 81234567890</label>
                  <label>info@mayastiklezat.com</label>
                  <br />
                  <label>1959 Pondok Cilegon Bahagia.</label>
                  <label>Cilegon City, CLG, 42161</label>
                </div>
              </div>

              {/*  */}
              <div className="col-md-6 d-flex justify-content-center">
                <div className="d-flex align-items-start flex-column">
                  <p className="fs-5 fw-semibold">Never Miss a Recipe</p>
                  <div>
                    <input
                      type="text"
                      className="inputEmail"
                      id="textInput"
                      placeholder="Email Address"
                    />
                    <button
                      className="ms-2"
                      type="submit"
                      style={{ border: 0, backgroundColor: "#5E6600" }}
                    >
                      <label
                        className="buttonSubscribe"
                        style={{ color: "white" }}
                      >
                        Subscribe
                      </label>
                    </button>
                  </div>
                  <label className="mt-2" style={{ fontSize: "0.9 em" }}>
                    Join our subscribers and get best recipe delivered each
                    week!
                  </label>
                </div>
              </div>
            </div>
            <hr className="garisFooter" />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
