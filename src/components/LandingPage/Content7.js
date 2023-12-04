import React, { Component } from "react";
import Foto1 from "../../assets/images/image/Foto1Content7.png";
import Foto2 from "../../assets/images/image/Foto2Content7.png";
import Foto3 from "../../assets/images/image/Foto3Content7.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ratingComment from "../../json/LandingPage";
import avatar1 from "../../assets/images/image/Avatar.png";
class Content7 extends Component {
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="text-center">
            <p
              className="fw-semibold caption1Content2 "
              style={{ lineHeight: "100%" }}
            >
              Calories Energy Balance
            </p>
            <p className="caption2Content2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="d-none d-md-block ">
            <div className=" row text-center pt-5">
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
          </div>

          <div className="d-block d-md-none">
            <div className=" row text-center pt-4">
              <div className="col-6">
                <img src={Foto1} alt="" style={{ width: "80%" }} />
              </div>
              <div className="col-6">
                <img src={Foto2} alt="" style={{ width: "80%" }} />
              </div>
              <div className="col mt-3">
                <img src={Foto3} alt="" style={{ width: "40%" }} />
              </div>
            </div>
          </div>

          {/* Carousel atau elemen lainnya */}
          <Carousel
            showThumbs={false}
            emulateTouch={true}
            showStatus={false}
            className="mt-0 mt-md-1 mt-lg-4 "
          >
            {ratingComment ? (
              ratingComment.map((data) => (
                <div key={data.id} style={{ color: "#6a665d" }}>
                  <div className="mt-5 ratingComment mb-5 pt-4 pb-4">
                    {/* <img src={Petik} alt="" className="gambarPetik" /> */}
                    <div>
                      <p
                        style={{
                          textAlign: "justify",
                          margin: "0 auto",
                        }}
                        className="captionRating fw-semibold"
                      >
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Purus lorem id penatibus imperdiet. Turpis egestas
                        ultricies purus Lorem ipsum dolor sit amet.
                      </p>
                    </div>

                    <div className="d-flex justify-content-start align-items-center mt-3 ">
                      <img src={data.avatar} alt="" className="avatarRating" />
                      <div className="text-start ms-2">
                        <label className="fw-semibold caption1User ">
                          {data.name}
                        </label>
                        <p className="captionProfesi">{data.profesi}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </Carousel>

          <label className="mt-5 mt-md-0"></label>
        </div>
      </div>
    );
  }
}

export default Content7;
