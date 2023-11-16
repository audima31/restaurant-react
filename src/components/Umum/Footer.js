import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#233000", color: "#FFFFFF" }}>
        <div className="container">
          <div className="row p-5">
            <div className="col-2 text-center d-flex align-items-center">
              <h1 className="fs-1">
                Food <br /> Zero.
              </h1>
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
                    className="py-3 ps-3 pe-5"
                    id="textInput"
                    placeholder="Email Address"
                    style={{
                      borderColor: "#FFFFFF",
                      borderRadius: 0,
                      backgroundColor: "#233000",
                    }}
                  />
                  <button
                    className="ms-2"
                    type="submit"
                    style={{ border: 0, backgroundColor: "#5E6600" }}
                  >
                    <label className="py-3 px-4" style={{ color: "white" }}>
                      Subscribe
                    </label>
                  </button>
                </div>
                <label className="mt-2" style={{ fontSize: "0.9 em" }}>
                  Join our subscribers and get best recipe delivered each week!
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr className="garisFooter" />
      </div>
    );
  }
}

export default Footer;
