import React, { Component } from "react";
import Menu1 from "../../assets/images/Menu/Menu1.png";

class Content2 extends Component {
  render() {
    return (
      <div>
        <div className="text-center containerMenu">
          <label className="fw-bold caption1Content2Menu ps-md-4 ps-lg-5">
            Starters
          </label>
          <br />
          <label className="mt-1 mt-md-2 caption2Content2Menu ps-md-4 ps-lg-5">
            This is a section of your menu. Give your section a brief
            description
          </label>
        </div>

        {/* Medium - Large */}
        <div className="d-none d-md-block">
          <div className="container mt-5 mt-md-0">
            <div className="row ">
              <div
                className="col-5"
                style={{
                  backgroundImage: `url(${Menu1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  paddingLeft: "5em",
                }}
              ></div>
              <div className="col ps-5">
                <div>
                  <p className="text-end fw-semibold hargaMenuHome">$20</p>
                  <hr className="garisContent2Menu" />

                  <a
                    href="/menu/detail"
                    style={{ color: "#212529" }}
                    menuName={"Grilled Okra and Tomatoes"}
                  >
                    <h1 className="fw-semibold namaMenuHome mt-1">
                      Grilled Okra and Tomatoes
                    </h1>
                    <p className="captionMenuHome mt-3 ">
                      Indulge in the exquisite flavors of our Grilled Okra and
                      Tomatoes, a perfect harmony of smoky grilled okra pods and
                      juicy tomatoes. Savor the delightful blend of textures and
                      tastes in every bite, showcasing the freshness of these
                      thoughtfully prepared ingredients.
                    </p>
                  </a>
                </div>

                <div>
                  <p className="text-end fw-semibold hargaMenuHome">$18</p>
                  <hr className="garisContent2Menu" />
                  <a
                    href="/menu/detail"
                    style={{ color: "#212529" }}
                    menuName={"Cucumber Salad"}
                  >
                    <h1 className="fw-semibold namaMenuHome mt-1">
                      Cucumber Salad
                    </h1>
                    <p className="captionMenuHome mt-3 ">
                      Savor the crispness and refreshing goodness of our
                      Cucumber Salad. A delightful blend of crunchy cucumbers,
                      vibrant herbs, and a zesty dressing that promises a burst
                      of flavor in every bite. Experience the perfect balance of
                      lightness and taste in this refreshing salad sensation.
                    </p>
                  </a>
                </div>

                <div>
                  <p className="text-end fw-semibold hargaMenuHome">$12</p>
                  <hr className="garisContent2Menu" />
                  <a
                    href="/menu/detail"
                    style={{ color: "#212529" }}
                    menuName={"Basil Pancakes"}
                  >
                    <h1 className="fw-semibold namaMenuHome mt-1">
                      Basil Pancakes
                    </h1>
                    <p className="captionMenuHome mt-3 ">
                      Indulge in the aromatic delight of our Basil Pancakes – a
                      savory twist on the classic. Immerse yourself in the
                      perfect fusion of fluffy pancakes infused with the rich
                      essence of fresh basil. Elevate your breakfast experience
                      with this unique and flavorful culinary creation.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small */}
        <div className="d-block d-md-none">
          <div className="container">
            <div className="row ">
              <div
                className="col-3 col-md-5"
                style={{
                  backgroundImage: `url(${Menu1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  paddingLeft: "5em",
                }}
              ></div>
              <div className="col ps-5 px-4">
                <div>
                  <p className="text-end fw-semibold hargaMenuHome">$20</p>
                  <hr className="garisContent2Menu" />
                  <a href="/menu/detail" style={{ color: "#212529" }}>
                    <h1 className="fw-semibold namaMenuHome mt-1">
                      Grilled Okra and Tomatoes
                    </h1>
                    <p className="captionMenuHome mt-3 ">
                      Indulge in the exquisite flavors of our Grilled Okra and
                      Tomatoes, a perfect harmony of smoky grilled okra pods and
                      juicy tomatoes. Savor the delightful blend of textures and
                      tastes in every bite, showcasing the freshness of these
                      thoughtfully prepared ingredients.
                    </p>
                  </a>
                </div>

                <div>
                  <p className="text-end fw-semibold hargaMenuHome">$18</p>
                  <hr className="garisContent2Menu" />
                  <a href="/menu/detail" style={{ color: "#212529" }}>
                    <h1 className="fw-semibold namaMenuHome mt-1">
                      Cucumber Salad
                    </h1>
                    <p className="captionMenuHome mt-3 ">
                      Savor the crispness and refreshing goodness of our
                      Cucumber Salad. A delightful blend of crunchy cucumbers,
                      vibrant herbs, and a zesty dressing that promises a burst
                      of flavor in every bite. Experience the perfect balance of
                      lightness and taste in this refreshing salad sensation.
                    </p>
                  </a>
                </div>

                <div>
                  <p className="text-end fw-semibold hargaMenuHome">$12</p>
                  <hr className="garisContent2Menu" />
                  <a href="/menu/detail" style={{ color: "#212529" }}>
                    <h1 className="fw-semibold namaMenuHome mt-1">
                      Basil Pancakes
                    </h1>
                    <p className="captionMenuHome mt-3 ">
                      Indulge in the aromatic delight of our Basil Pancakes – a
                      savory twist on the classic. Immerse yourself in the
                      perfect fusion of fluffy pancakes infused with the rich
                      essence of fresh basil. Elevate your breakfast experience
                      with this unique and flavorful culinary creation.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content2;
