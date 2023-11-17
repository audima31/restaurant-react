import React, { Component } from "react";
import FotoModel from "../../assets/images/image/Content3Model.png";

class Content3 extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#ebf0e4" }}>
        <div className="container mt-3 d-none d-md-block">
          <div className="row">
            <div className="col mt-5">
              <img src={FotoModel} alt="" style={{ width: "100%" }} />
            </div>
            <div className="col d-flex justify-content-center flex-column">
              <h1 style={{ fontSize: "4.5em" }}>Excellent Cook</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id penatibus imperdiet. Turpis egestas ultricies purus
                auctor tincidunt lacus nunc.
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-3 d-block d-md-none">
          <div className="row">
            <div className="col-12 mt-3 text-center">
              <h1 style={{ fontSize: "3em" }}>Excellent Cook</h1>
              <img src={FotoModel} alt="" style={{ width: "80%" }} />
            </div>
            <div className="col-12 text-center">
              <p className="mt-3 pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id penatibus imperdiet. Turpis egestas ultricies purus
                auctor tincidunt lacus nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content3;
