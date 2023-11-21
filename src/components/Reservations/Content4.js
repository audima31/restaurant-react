import React, { Component } from "react";

class Content4 extends Component {
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

          <div className="d-flex justify-content-between">
            <div class=" w-100 pe-2">
              <input
                type="text"
                className="form-control form-control-lg  reservationsInputContent4"
                id="FormInputContent4"
                placeholder="First Name"
              />
            </div>
            <div class=" w-100 ps-2">
              <input
                type="text"
                className="form-control form-control-lg reservationsInputContent4"
                id="FormInputContent4"
                placeholder="Last Name"
              />
            </div>
          </div>

          <input
            type="text"
            className="form-control form-control-lg  reservationsInputContent4 mt-3"
            id="FormInputContent4"
            placeholder="Email"
          />

          <input
            type="number"
            className="form-control form-control-lg  reservationsInputContent4 mt-3"
            id="FormInputContent4"
            placeholder="Phone Number"
          />

          <div className="d-flex justify-content-between mt-3">
            <div class=" w-100 pe-2">
              <input
                type="date"
                className="form-control form-control-lg  reservationsInputContent4"
                id="FormInputContent4"
                placeholder="First Name"
              />
            </div>
            <div class=" w-100 ps-2">
              <select
                className="form-select form-select-lg reservationsInputContent4"
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
          </div>

          <div>
            <select
              className="form-select form-select-lg reservationsInputContent4 mt-3"
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

          <div className="d-flex justify-content-center mt-4">
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

export default Content4;
