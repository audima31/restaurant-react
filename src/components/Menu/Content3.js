import React, { Component } from "react";
import Menu2 from "../../assets/images/Menu/Menu2.png";

class Content3 extends Component {
  render() {
    return (
      <div>
        <div
          className="text-center"
          style={{ marginTop: "8%", marginBottom: "5%" }}
        >
          <p className="fw-bold caption1Content2Menu  ps-md-4 ps-lg-5">Mains</p>
          <p className="caption2Content2Menu ps-md-4 ps-lg-5">
            This is a section of your menu. Give your section a brief
            description
          </p>
        </div>

        <div className="container ">
          <div className="row ">
            <div className="col pe-5">
              <div>
                <p className="text-end fw-semibold hargaMenuHome">$20</p>
                <hr className="garisContent2Menu" />
                <a href="/menu/detail" style={{ color: "#212529" }}>
                  <h1 className="fw-semibold namaMenuHome mt-1">
                    Deep Sea Snow White
                  </h1>
                  <p className="captionMenuHome mt-3 ">
                    Dive into an ocean of exquisite flavors with our Deep Sea
                    Snow White Cod Fillet. Immerse your palate in the delicate
                    and flaky texture of this premium seafood delight. A
                    culinary journey awaits, where the pristine freshness of the
                    deep sea meets the artistry of our chefs. Unveil the essence
                    of indulgence with every bite.
                  </p>
                </a>
              </div>

              <div>
                <p className="text-end fw-semibold hargaMenuHome">$22</p>
                <hr className="garisContent2Menu" />
                <a href="/menu/detail" style={{ color: "#212529" }}>
                  <h1 className="fw-semibold namaMenuHome mt-1">
                    Steak Rosemary Butter
                  </h1>
                  <p className="captionMenuHome mt-3 ">
                    Indulge in a culinary symphony with our Steak With Rosemary
                    Butter a succulent steak perfectly grilled and adorned with
                    a luscious rosemary-infused butter. Elevate your dining
                    experience with the harmonious blend of rich flavors,
                    creating a dish that's both timeless and tantalizing. Savor
                    the essence of culinary artistry in every delectable bite.
                  </p>
                </a>
              </div>

              <div>
                <p className="text-end fw-semibold hargaMenuHome">$20</p>
                <hr className="garisContent2Menu" />
                <a href="/menu/detail" style={{ color: "#212529" }}>
                  <h1 className="fw-semibold namaMenuHome mt-1">
                    Steaks Grilled Kimchi
                  </h1>
                  <p className="captionMenuHome mt-3 ">
                    Savor the bold fusion of flavors with our Grilled Kimchi
                    Steaks. Succulent, perfectly grilled steaks paired with the
                    spicy kick of kimchi, creating a tantalizing culinary
                    experience. Elevate your taste buds with this delightful
                    blend of savory and spicy goodness.
                  </p>
                </a>
              </div>
            </div>
            <div
              className="col-4 col-md-5"
              style={{
                backgroundImage: `url(${Menu2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingLeft: "5em",
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content3;
