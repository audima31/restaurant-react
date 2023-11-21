import React, { Component } from "react";
import image2 from "../../assets/images/Reservation/image2.png";
class Content3 extends Component {
  render() {
    return (
      <div>
        <div className="container pt-4 pb-5 mb-5">
          <div className="row">
            <div className="col d-flex flex-column justify-content-center align-items-start pt-5">
              <div className="captions2Content2Reservation">
                <label className="fw-semibold">
                  We are located in 1959 Sepulveda Blvd. Culver
                </label>
                <br />
                <label className="fw-semibold">City, CA, 90230</label>
                <div>
                  <button
                    className="mt-3"
                    type="button"
                    style={{
                      border: "1 solid black",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <label className="py-1 px-3">View in maps</label>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <img src={image2} alt="" className="fotoImage2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content3;
