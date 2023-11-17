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
            <p className="fw-semibold text-center caption1Content6">
              Make a Reservation
            </p>
            <p className="text-center">Get in touch with restaurant</p>
          </div>

          <div className="d-none d-md-block">
            <div className="d-flex d-flex justify-content-evenly mt-5">
              <div>
                <input
                  type="date"
                  className="form-control form-control-lg reservationInput"
                  id="dateInput"
                  placeholder="dd/mm/yyyy"
                />
              </div>

              <div>
                <select
                  className="form-select form-select-lg reservationInput"
                  aria-label="Default select example"
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
                  className="form-select form-select-lg reservationInput"
                  aria-label="Default select example"
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

          <div className="d-block d-md-none px-2">
            <div className="mt-5">
              <div>
                <input
                  type="date"
                  className="form-control form-control-lg mb-4"
                  id="dateInput"
                  style={{
                    borderColor: "#212529",
                    borderRadius: 0,
                    backgroundColor: "#ebf0e4",
                  }}
                />
              </div>

              <div>
                <select
                  className="form-select form-select-lg mb-4"
                  aria-label="Default select example"
                  style={{
                    borderColor: "#212529",
                    borderRadius: 0,
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
                  className="form-select form-select-lg mb-4"
                  aria-label="Default select example"
                  style={{
                    borderColor: "#212529",
                    borderRadius: 0,
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
            <div className="d-flex justify-content-center pt-3">
              <button
                type="button"
                style={{ border: 0, backgroundColor: "#233000", width: "100%" }}
              >
                <label className="py-2 px-5" style={{ color: "white" }}>
                  Book Now
                </label>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content6;
