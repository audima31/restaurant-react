import React, { Component } from "react";
import Menu3 from "../../assets/images/Menu/Menu3.png";

class Content4 extends Component {
  render() {
    return (
      <div>
        <div
          className="text-center "
          style={{ marginTop: "8%", marginBottom: "5%" }}
        >
          <p className="fw-bold caption1Content2Menu ps-md-4 ps-lg-5">
            Pastries & Drinks
          </p>
          <p className="caption2Content2Menu ps-md-4 ps-lg-5">
            This is a section of your menu. Give your section a brief
            description
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div
              className="col-4 col-md-5"
              style={{
                backgroundImage: `url(${Menu3})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingLeft: "5em",
              }}
            ></div>
            <div className="col ps-5">
              <div>
                <p className="text-end fw-semibold hargaMenuHome">$158</p>
                <hr className="garisContent2Menu" />
                <a href="/menu/detail" style={{ color: "#212529" }}>
                  <h1 className="fw-semibold namaMenuHome mt-1">
                    Wine Pairing
                  </h1>
                  <p className="captionMenuHome mt-3 ">
                    Discover the perfect harmony of flavors as each sip
                    complements the nuances of your dish. Indulge in a sensory
                    journey that enhances the richness of your meal, making
                    every moment a celebration of taste and sophistication.
                  </p>
                </a>
              </div>

              <div>
                <p className="text-end fw-semibold hargaMenuHome">$168</p>
                <hr className="garisContent2Menu" />
                <a href="/menu/detail" style={{ color: "#212529" }}>
                  <h1 className="fw-semibold namaMenuHome mt-1">
                    Natural Wine Pairing
                  </h1>
                  <p className="captionMenuHome mt-3 ">
                    Immerse yourself in the unfiltered beauty of handcrafted
                    wines, perfectly paired to enhance the authentic flavors of
                    your meal. Experience a symphony of taste that celebrates
                    the art of pairing with nature's finest expressions.
                  </p>
                </a>
              </div>

              <div>
                <p className="text-end fw-semibold hargaMenuHome">$90</p>
                <hr className="garisContent2Menu" />
                <a href="/menu/detail" style={{ color: "#212529" }}>
                  <h1 className="fw-semibold namaMenuHome mt-1">
                    Whisky Flyer
                  </h1>
                  <p className="captionMenuHome mt-3 ">
                    Embark on a journey of sophistication with our Whisky Flyer.
                    Elevate your spirits with a curated selection of premium
                    whiskies, each sip a testament to craftsmanship and refined
                    taste. Experience the allure of the amber elixir, where
                    every pour is a celebration of distinction.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content4;
