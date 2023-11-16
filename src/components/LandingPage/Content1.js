import React, { Component } from "react";
import Gambar1 from "../../assets/images/image/Foto1.png";
import GambarBackground from "../../assets/images/image/Mobile/HeaderHome.png";

class Content1 extends Component {
  render() {
    return (
      <div style={{ color: "#FFFFFF" }}>
        <div
          className="d-none d-md-block"
          style={{ backgroundColor: "#233000" }}
        >
          <div className="row">
            <div
              className="col-6 mt-4 mb-4 d-flex align-items-center justify-content-center "
              style={{ top: "2em" }}
            >
              <img className="gambar1Content1 mb-5" src={Gambar1} alt="" />
              <p className="scrollText">----------Mayastik----------</p>
            </div>

            <div className="col-5 d-flex justify-content-center flex-column containerCaption1 ">
              <p className="caption1Content1 paragrap1hContent1 d-flex flex-column">
                <label>Healthy Eating is</label>
                <label>Important Part of</label> <label>Lifestyle</label>
              </p>
              <p className="caption2Content1 mt-3 paragraph2Content1">
                Join us at the table as you dine for the perfect meal.
              </p>
              <p className="paragraph2Content1">
                We treat all of our customers with utmost care and service.
              </p>
              <div className="pb-5 mt-2">
                <button type="button" className="btn button1Content1">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="mr-2" style={{ color: "#233000" }}>
                      Menus
                    </label>
                    <i
                      className="bi bi-arrow-right-short mt-1"
                      style={{ color: "#233000" }}
                    ></i>
                  </div>
                </button>
                <button type="button" className="btn ms-4 button2Content1">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="mr-2" style={{ color: "#233000" }}>
                      Reservations
                    </label>
                    <i
                      className="bi bi-arrow-right-short mt-1"
                      style={{ color: "#233000" }}
                    ></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-block d-md-none"
          style={{
            backgroundImage: `url(${GambarBackground})`,
            color: "#FFFFFF",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <div className="container-fluid d-flex align-items-center">
              <a href="/" style={{ color: "#FFFFFF" }}>
                <label className="fw-bold fs-4">Mayastik.</label>
              </a>

              <ul className="ms-auto listMobile">
                <li>
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/">
                    Menus
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/">
                    Reservations
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <p
              className="fw-bold text-center ps-3 pe-3 pt-3"
              style={{ fontSize: "2em" }}
            >
              Healthy Eating is Important Part of Lifestyle
            </p>
            <p
              className="text-center"
              style={{ fontSize: "0.9em", lineHeight: "0%" }}
            >
              Join us at the table as you dine for the perfect meal.
            </p>
            <p
              className="text-center"
              style={{ fontSize: "0.9em", lineHeight: "50%" }}
            >
              We treat all of our customers with utmost care and service.
            </p>
            <div className="pb-5 mt-4 text-center">
              <button type="button" className="btn button1Content1">
                <div className="d-flex align-items-center justify-content-between">
                  <label className="mr-2" style={{ color: "#233000" }}>
                    Menus
                  </label>
                  <i
                    className="bi bi-arrow-right-short mt-1"
                    style={{ color: "#233000" }}
                  ></i>
                </div>
              </button>
              <button type="button" className="btn ms-4 button2Content1">
                <div className="d-flex align-items-center justify-content-between">
                  <label className="mr-2" style={{ color: "#233000" }}>
                    Reservations
                  </label>
                  <i
                    className="bi bi-arrow-right-short mt-1"
                    style={{ color: "#233000" }}
                  ></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content1;
