import React from "react";
import Logo from "../../assets/images/image/HeaderLogo.png";
export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg d-none d-md-block"
        style={{ backgroundColor: "#233000" }}
      >
        <div className="container-fluid d-flex align-items-center">
          <a className="navbar-brand" href="#/" style={{ color: "#FFFFFF" }}>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
      </nav>

      {/* <nav
        className="navbar navbar-expand-lg  d-block d-md-none"
        style={{
          position: "absolute",
          backgroundColor: "transparent",
          zIndex: 1000,
          width: "100%",
          top: 0,
        }}
      >
        <div className="container-fluid d-flex align-items-center">
          <a className="navbar-brand" href="#/" style={{ color: "#FFFFFF" }}>
            <label className="fw-bold fs-4">Mayestik.</label>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#/"
                  style={{ color: "#FFFFFF" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item ms-md-2">
                <a className="nav-link" href="#/" style={{ color: "#FFFFFF" }}>
                  Menus
                </a>
              </li>
              <li className="nav-item ms-md-2">
                <a className="nav-link" href="#/" style={{ color: "#FFFFFF" }}>
                  Reservations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
}
