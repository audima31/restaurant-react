import React, { Component } from "react";
import Header from "./DetailMenu/Header";
import Content1 from "./DetailMenu/Content1";
import Content2 from "./DetailMenu/Content2";
import Content3 from "./DetailMenu/Content3";

class DetailMenu extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content1 />
        <Content2 />
        <Content3 />
      </div>
    );
  }
}

export default DetailMenu;
