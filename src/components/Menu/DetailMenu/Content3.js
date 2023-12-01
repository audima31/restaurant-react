import React, { Component } from "react";
import Gambar from "../../../assets/images/Menu/DetailMenu/Content3.png";

class Content3 extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <img
            src={Gambar}
            alt=""
            style={{ width: "100%" }}
            className="p-md-5"
          />
        </div>
      </div>
    );
  }
}

export default Content3;
