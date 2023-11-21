import React, { Component } from "react";
import fotoJeruk from "../../assets/images/Reservation/imageMid.png";
import image1 from "../../assets/images/Reservation/image1.png";

class Content2 extends Component {
  render() {
    return (
      <div>
        <div className="container mt-md-4 mt-lg-5">
          <div className="row mb-5 pb-5">
            <div className="col-7">
              <div className="content2Image-Container mt-5 ">
                <div className="container-image1">
                  <img src={image1} alt="" className="fotoImage1" />
                </div>
                <div className="container-FotoJeruk">
                  <img src={fotoJeruk} alt="" className="fotoJeruk" />
                </div>
              </div>
            </div>

            <div className="col d-flex flex-column justify-content-end align-items-left pb-lg-5 pb-md-3">
              <div className="captions1Content2Reservation">
                <label className="fw-semibold">We can be contacted via </label>
                <br />
                <label className="fw-semibold">
                  email <label>info@Mayastik.com</label>{" "}
                </label>
                <br />
                <label className="fw-semibold ">
                  or telephone on{" "}
                  <label style={{ color: "#9CAA00" }}>+62 852 346 000</label>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content2;
