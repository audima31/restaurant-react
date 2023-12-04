import React from "react";
import GambarBackground from "../../../assets/images/Menu/BgDetailMenu.png";

const Header = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${GambarBackground})`,
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
              <i class="bi bi-list" style={{ color: "white" }}></i>
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
              <p className="caption1Content1Menu d-flex flex-column text-center ">
                <label>Nama Menu Makanan</label>
              </p>
            </div>
          </div>
        </nav>

        {/* Small */}
        <nav className="navbar navbar-expand-lg d-block d-md-none ">
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
              <i class="bi bi-list" style={{ color: "white" }}></i>
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
            <div className="text-center">
              <p className="caption1Content1Menu d-flex flex-column text-center ">
                <label>Nama Menu Makanan</label>
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
