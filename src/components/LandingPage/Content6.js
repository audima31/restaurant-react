import React, { Component } from "react";

class Content6 extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#ebf0e4" }}>
        <div
          className="container"
          style={{ paddingTop: "5em", paddingBottom: "5em" }}
        >
          <div>
            <p
              className="fw-semibold text-center "
              style={{ fontSize: "3.5em", lineHeight: "80%" }}
            >
              Make a Reservation
            </p>
            <p className="text-center" style={{ lineHeight: "50%" }}>
              Get in touch with restaurant
            </p>
          </div>

          <div className="d-flex d-flex justify-content-evenly mt-5">
            <div>
              <input
                type="date"
                className="form-control form-control-lg"
                id="dateInput"
                style={{
                  borderColor: "#212529",
                  borderRadius: 0,
                  width: "15em",
                  backgroundColor: "#ebf0e4",
                }}
              />
            </div>

            <div>
              <select
                className="form-select form-select-lg"
                aria-label="Default select example"
                style={{
                  borderColor: "#212529",
                  borderRadius: 0,
                  width: "15em",
                  backgroundColor: "#ebf0e4",
                }}
              >
                <option selected value="0">
                  10:00 am
                </option>
                <option value="1">11:00 am</option>
                <option value="2">12:00 pm</option>
                <option value="3">01:00 pm</option>
                <option value="4">02:00 pm</option>
                <option value="5">03:00 pm</option>
                <option value="6">04:00 pm</option>
                <option value="7">05:00 pm</option>
                <option value="8">06:00 pm</option>
                <option value="9">07:00 pm</option>
                <option value="10">08:00 pm</option>
                <option value="11">09:00 pm</option>
              </select>
            </div>

            <div>
              <select
                className="form-select form-select-lg"
                aria-label="Default select example"
                style={{
                  borderColor: "#212529",
                  borderRadius: 0,
                  width: "15em",
                  backgroundColor: "#ebf0e4",
                }}
              >
                <option selected value="0">
                  1 Person
                </option>
                <option value="1">2 Person</option>
                <option value="2">3 Person</option>
                <option value="3">4 Person</option>
                <option value="4">5 Person</option>
                <option value="5">6 Person</option>
                <option value="6">7 Person</option>
                <option value="7">8 Person</option>
                <option value="8">9 Person</option>
                <option value="9">10 Person</option>
              </select>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5 pb-5">
            <button
              type="button"
              style={{ border: 0, backgroundColor: "#233000" }}
            >
              <label className="py-2 px-5" style={{ color: "white" }}>
                Book Now
              </label>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Content6;
