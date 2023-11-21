import React, { Component } from "react";
import Content1 from "./Content1";
import "../../assets/css/reservations.css";
import Content2 from "./Content2";
import Footer from "../Umum/Footer";
import Content3 from "./Content3";
import Content4 from "./Content4";

class Reservations extends Component {
  render() {
    return (
      <div>
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
        <Footer />
      </div>
    );
  }
}

export default Reservations;
