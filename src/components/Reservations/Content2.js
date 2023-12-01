import React, { Component } from "react";
import fotoJeruk from "../../assets/images/Reservation/imageMid.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/images/Reservation/image1.png";
import { Carousel } from "react-responsive-carousel";
import DataContactUs from "../../json/DataContactUs";

class Content2 extends Component {
  render() {
    console.log("Data : ", DataContactUs);
    return (
      <div>
        {/* Medium - Large */}
        <div className="d-none d-md-block">
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
                  <label className="fw-semibold">
                    We can be contacted via{" "}
                  </label>
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

        {/* Small */}
        <div className="d-block d-md-none mt-2">
          <div className="d-flex justify-content-between">
            <div className="container d-flex flex-column justify-content-center">
              <label className="fw-bold" style={{ fontSize: "2.5em" }}>
                Contact Us
              </label>
              <label
                className="caption2Content2"
                style={{ textAlign: "justify" }}
              >
                Contact us for experience is unforgettable. Reserve now and
                enjoy delicious dishes at our place.
              </label>
            </div>
            <div>
              <img src={fotoJeruk} alt="" className="fotoJeruk mt-3" />
            </div>
          </div>

          {/*  */}
          <div className="container mt-5 mb-5 pb-4 pt-3">
            <h3 className="text-center mb-3 fw-semibold">
              For more information
            </h3>
            <Carousel showThumbs={false} emulateTouch={true} showStatus={false}>
              {DataContactUs ? (
                DataContactUs.map((data) => (
                  <div key={data.id}>
                    <div className="text-center pb-5">
                      <img src={data.image} alt="" style={{ width: "18%" }} />
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          type="button"
                          style={{
                            border: "1 solid #233000",
                            backgroundColor: "#ebf0e4",
                            borderRadius: "20px",
                          }}
                        >
                          <label
                            className="py-1 px-3"
                            style={{ color: "#233000" }}
                          >
                            {data.title}
                          </label>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <p>Error</p>
                </>
              )}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Content2;
