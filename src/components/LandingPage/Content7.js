import React, { Component } from "react";
import Foto1 from "../../assets/images/image/Foto1Content7.png";
import Foto2 from "../../assets/images/image/Foto2Content7.png";
import Foto3 from "../../assets/images/image/Foto3Content7.png";
import Petik from "../../assets/images/image/petik.png";
import { Carousel } from "react-responsive-carousel";

class Content7 extends Component {
  render() {
    const image = [Foto1, Foto2, Foto3];
    return (
      <div>
        <div
          className="container"
          style={{ paddingTop: "5em", paddingBottom: "5em" }}
        >
          <div className="text-center">
            <p
              className="fw-semibold "
              style={{ fontSize: "3.5em", lineHeight: "100%" }}
            >
              Calories Energy Balance
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="row text-center pt-5">
            <div className="col">
              <img src={Foto1} alt="" style={{ width: "80%" }} />
            </div>
            <div className="col">
              <img src={Foto2} alt="" style={{ width: "80%" }} />
            </div>
            <div className="col">
              <img src={Foto3} alt="" style={{ width: "80%" }} />
            </div>
          </div>

          <div className="d-flex justify-content-center flex-column text-center ">
            {/* Carousel atau elemen lainnya */}
            <img src={Petik} alt="" className="gambarPetik" />
            <h3
              style={{ width: "75%", textAlign: "justify", margin: "0 auto" }}
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus Lorem
              ipsum dolor sit amet.”
            </h3>
          </div>

          <div className="row  text-center m-0">
            <div className="col-3 text-center">1</div>
            <div className="col-6">2</div>
            <div className="col-3">2</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content7;
