import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import DataContactUs from "../../json/DataContactUs";
import fotoJeruk from "../../assets/images/Reservation/imageMid.png";

class Content5 extends Component {
  render() {
    return (
      <div>
        {/* Small */}
        <div className="d-block d-md-none">
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

export default Content5;
