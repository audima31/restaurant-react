import React, { Component } from "react";
import Gambar from "../../../assets/images/Menu/DetailMenu/Content3.png";
import Icon from "../../../assets/images/Menu/DetailMenu/icon.png";
import Left from "../../../assets/images/Menu/DetailMenu/leftArrow.png";
import Right from "../../../assets/images/Menu/DetailMenu/rightArrow.png";

class Content3 extends Component {
  render() {
    return (
      <div>
        <div className="container ">
          <img
            src={Gambar}
            alt=""
            style={{ width: "100%" }}
            className="p-md-5 mt-5 mt-md-0"
          />
        </div>
        {/* END Gambar */}
        <label className="my-5"></label>
        {/* Select Button page */}
        <div style={{ backgroundColor: "#ebf0e4" }} className="mt-md-5">
          <div className="row">
            <div className="col text-center py-4 py-md-5">
              <button className="btn">
                <label>
                  <img
                    src={Left}
                    alt=""
                    style={{ width: "15%" }}
                    className="me-2"
                  />
                  <label className="previousNext">PREVIOUS PAGE</label>
                </label>
                <br />
                <label className="mt-1 mt-md-2 fw-semibold namaMenuSlide">
                  Deep Sea Snow White
                </label>
              </button>
            </div>
            <div className="col-1 text-center d-flex justify-content-center align-items-center ">
              <img src={Icon} alt="" className="iconContent3" />
            </div>
            <div className="col text-center py-4 py-md-5">
              <button className="btn">
                <label>
                  <label className="previousNext">NEXT PAGE</label>
                  <img
                    src={Right}
                    alt=""
                    style={{ width: "15%" }}
                    className="ms-2"
                  />
                </label>
                <br />
                <label className="mt-1 mt-md-2 fw-semibold namaMenuSlide">
                  Steaks Frilled Kimchi
                </label>
              </button>
            </div>
          </div>
        </div>
        {/* END Select Button page */}
        <label
          className="d-none d-md-block"
          style={{ marginTop: "12em" }}
        ></label>
      </div>
    );
  }
}

export default Content3;
