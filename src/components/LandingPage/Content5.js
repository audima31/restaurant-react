import React, { Component } from "react";
import Foto1 from "../../assets/images/image/Foto1Content5.png";
import Foto2 from "../../assets/images/image/Foto2Content5.png";
import Avatar1 from "../../assets/images/image/Avatar1.png";
import Avatar2 from "../../assets/images/image/Avatar2.png";

class Content5 extends Component {
  render() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const monthName = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();

    // Mendapatkan jam dan menentukan apakah itu AM atau PM
    const hours = currentDate.getHours() % 12 || 12; // 12 jam, jika 0 maka dianggap sebagai 12
    const minutes = currentDate.getMinutes();
    const ampm = currentDate.getHours() >= 12 ? "PM" : "AM";
    const formattedTime = `${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${ampm}`;

    return (
      <div className="mb-5 pb-5">
        <div className="row ">
          <div className="col">
            <div className="text-center">
              <img src={Foto1} alt="" style={{ width: "80%" }} />
            </div>
            {/* <div>
              <img
                src={Avatar1}
                alt=""
                className="m-0"
                style={{ width: "8%" }}
              />
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ marginTop: "-0.5em" }}
            >
              <p className="mb-0 ">Julie Christie</p>
              <i className="bi bi-dot mt-1"></i>
              <p className="mb-0">
                {monthName} {day}, {year}
              </p>
              <i className="bi bi-dot mt-1"></i>
              <p className="mb-0">{formattedTime}</p>
            </div> */}
            <div className="mt-4" style={{ paddingInline: "5em" }}>
              <div style={{ width: "100%" }}>
                <h3 className="fw-semibold">
                  Fruit and vegetables and protection against diseases
                </h3>
                <hr className="garisContent5" />
                <label>
                  {" "}
                  Our Fruit and Vegetables collection not only tantalizes your
                  taste buds but also offers a shield against diseases.
                </label>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <img src={Foto2} alt="" style={{ width: "80%" }} />
            </div>

            <div className="mt-4" style={{ paddingInline: "5em" }}>
              <div style={{ width: "100%" }}>
                <h3 className="fw-semibold">
                  Asparagus Spring Salad with Rocket, Goat's Cheese
                </h3>
                <hr className="garisContent5" />
                <label>
                  Featuring crisp rocket greens and creamy goat's cheese—a
                  refreshing blend of seasonal goodness!
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content5;
