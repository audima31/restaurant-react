import React, { Component } from "react";
import FotoDaun from "../../assets/images/image/FotoDaun.png";
import DataJson from "../../json/DataMenu";

class Content2 extends Component {
  render() {
    console.log("Data : ", DataJson);
    return (
      <div style={{ color: "#000000" }}>
        <div>
          <div className="d-none d-md-block">
            <div className="d-flex justify-content-between">
              <div className="container d-flex flex-column justify-content-center ms-5">
                <p className="fw-bold caption1Content2  ps-md-4 ps-lg-5">
                  Our Menu
                </p>
                <p className="caption2Content2 ps-md-4 ps-lg-5">
                  This is a section of your menu. Give your section a brief
                  description
                </p>
              </div>
              <div>
                <img src={FotoDaun} alt="" className="fotoDaun" />
              </div>
            </div>
          </div>

          <div className="d-block d-md-none">
            <div className="text-center mt-5 mb-5">
              <p className="fw-bold caption1Content2  ps-md-4 ps-lg-5">
                Our Menu
              </p>
              <p className="caption2Content2 ps-md-4 ps-lg-5">
                "This is a section of your menu. Give your section a brief
                description"
              </p>
            </div>
          </div>

          {/* List Menu */}
          <div className="">
            <div
              className="ms-3 me-3 ms-md-5 me-md-5 row"
              style={{ marginBottom: "10%" }}
            >
              <div className="col-md-6 mb-4 px-md-4 px-lg-5">
                <p className="text-end fw-semibold hargaMenuHome">$20</p>
                <hr />
                <h1 className="fw-semibold namaMenuHome">
                  Deep Sea Snow White
                </h1>
                <p className="captionMenuHome mt-3 ">
                  Dive into an ocean of exquisite flavors with our Deep Sea Snow
                  White Cod Fillet. Immerse your palate in the delicate and
                  flaky texture of this premium seafood delight. A culinary
                  journey awaits, where the pristine freshness of the deep sea
                  meets the artistry of our chefs. Unveil the essence of
                  indulgence with every bite.
                </p>
              </div>
              <div className="col-md-6 mb-4 px-md-4 px-lg-5">
                <p className="text-end fw-semibold hargaMenuHome">$22</p>
                <hr />
                <h1 className="fw-semibold namaMenuHome">
                  Steak Rosemary Butter
                </h1>
                <p className="captionMenuHome mt-3 ">
                  Indulge in a culinary symphony with our Steak With Rosemary
                  Butter a succulent steak perfectly grilled and adorned with a
                  luscious rosemary-infused butter. Elevate your dining
                  experience with the harmonious blend of rich flavors, creating
                  a dish that's both timeless and tantalizing. Savor the essence
                  of culinary artistry in every delectable bite.
                </p>
              </div>
              <div className="col-md-6 mb-5 px-md-4 px-lg-5">
                <p className="text-end fw-semibold hargaMenuHome">$18</p>
                <hr />
                <h1 className="fw-semibold namaMenuHome">Cucumber Salad</h1>
                <p className="captionMenuHome mt-3">
                  A melody of fresh cucumbers, tossed with garden herbs and a
                  zesty dressing, creates a light and invigorating experience on
                  your plate. Discover the perfect harmony of flavors that will
                  leave you feeling rejuvenated with every delightful crunch.
                </p>
              </div>
              <div className="col-md-6 mb-5 px-md-4 px-lg-5">
                <p className="text-end fw-semibold hargaMenuHome">$90</p>
                <hr />
                <h1 className="fw-semibold namaMenuHome">
                  Natural Wine Pairing
                </h1>
                <p className="captionMenuHome mt-3">
                  Unwind and savor the essence of handcrafted wines, carefully
                  selected to complement and enhance the rich notes of our
                  exquisite dishes. Embark on a journey of taste where each sip
                  and bite create a symphony of indulgence for the discerning
                  palate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content2;
