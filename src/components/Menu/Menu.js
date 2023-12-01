import React, { Component } from "react";
import Content1 from "./Content1";
import "../../assets/css/menu.css";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";
import Footer from "../Umum/Footer";

class Menu extends Component {
  render() {
    return (
      <div>
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
        <div style={{ marginTop: "10%" }}></div>
        <Footer />
      </div>
    );
  }
}

export default Menu;
