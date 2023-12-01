import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import DataContactUs from "../../json/DataContactUs";
import fotoJeruk from "../../assets/images/Reservation/imageMid.png";

class Content5 extends Component {
  render() {
    return (
      <div className="d-block d-md-none">
        {/* Small */}
        <div className="d-flex flex-column paraghrap2Content1Reservations">
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-semibold" style={{ fontSize: "1.2em" }}>
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
    );
  }
}

export default Content5;
