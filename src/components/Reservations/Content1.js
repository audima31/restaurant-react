import React, { Component } from "react";
import gambarBackground from "../../assets/images/Reservation/BackgroundHeader2.png";

class Content1 extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${gambarBackground})`,
            color: "#FFFFFF",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // Atur backgroundSize ke "cover"
            backgroundPosition: "center", // Atur backgroundPosition ke "center"
          }}
        >
          {/* Medium - Large */}
          <nav className="navbar navbar-expand-lg d-none d-md-block ">
            <div className="container-fluid d-flex align-items-center">
              <a className="navbar-brand" href="/" style={{ color: "#FFFFFF" }}>
                {/* <img src={Logo} alt="" style={{ width: "30%" }} /> */}
                <label className="fw-bold fs-4">Mayastik.</label>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="bi bi-three-dots-vertical"></i>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active ms-md-2"
                      aria-current="page"
                      href="/"
                      style={{ color: "#FFFFFF" }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item ms-md-2">
                    <a
                      className="nav-link"
                      href="/menu"
                      style={{ color: "#FFFFFF" }}
                    >
                      Menus
                    </a>
                  </li>
                  <li className="nav-item ms-md-2">
                    <a
                      className="nav-link"
                      href="/reservations"
                      style={{ color: "#FFFFFF" }}
                    >
                      Reservations
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Content1 */}
            <div className="container-CaptionReservations">
              <div className="row">
                <div className="col-md-7 col-lg-8">
                  <p className="caption1Content1Reservations d-flex flex-column ">
                    <label>Get in Touch</label>
                  </p>
                  <label className="caption2Content1Resevations">
                    The freshest ingredients for you every day
                  </label>
                </div>

                <div className="col-md-5 col-lg-4 ">
                  <div className="d-flex flex-column paraghrap2Content1Reservations">
                    <div className="d-flex justify-content-between align-items-center">
                      <div
                        className="fw-semibold"
                        style={{ fontSize: "1.2em" }}
                      >
                        Open Time
                      </div>
                      <div style={{ fontSize: "1em" }}>Sunday - Friday</div>
                    </div>
                    <hr className="garisFooter my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <label>Bruch</label>
                        <br />
                        <label>11:00-12:00</label>
                      </div>
                      <div>
                        <label>Lunch</label>
                        <br />
                        <label>13:00-17:00</label>
                      </div>
                      <div>
                        <label>Dinner</label>
                        <br />
                        <label>18:00-20:00</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Small */}
          <nav className="navbar navbar-expand-lg d-block d-md-none ">
            <div className="container-fluid d-flex align-items-center">
              <a
                className="navbar-brand"
                href="#/"
                style={{ color: "#FFFFFF" }}
              >
                {/* <img src={Logo} alt="" style={{ width: "30%" }} /> */}
                <label className="fw-bold fs-4">Mayastik.</label>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="bi bi-three-dots-vertical"></i>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active ms-md-2"
                      aria-current="page"
                      href="/"
                      style={{ color: "#FFFFFF" }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item ms-md-2">
                    <a
                      className="nav-link"
                      href="/menu"
                      style={{ color: "#FFFFFF" }}
                    >
                      Menus
                    </a>
                  </li>
                  <li className="nav-item ms-md-2">
                    <a
                      className="nav-link"
                      href="/reservations"
                      style={{ color: "#FFFFFF" }}
                    >
                      Reservations
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Content1 */}
            <div className="container-Caption">
              <div className="">
                <p className="caption1Content1Reservations d-flex flex-column ">
                  <label>Get in Touch</label>
                </p>
                <label className="caption2Content1Resevations">
                  The freshest ingredients for you every day
                </label>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Content1;
