import React, { Component } from "react";
import Detail from "../../../assets/images/Menu/DetailMenu/Detail.png";

class Content2 extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <img
            src={Detail}
            alt=""
            style={{ width: "100%" }}
            className="p-md-5"
          />
          <p className="text-center px-md-5 caption2Content2Menu">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
            id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc. Convallis pellentesque quis fringilla
            sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
    );
  }
}

export default Content2;
