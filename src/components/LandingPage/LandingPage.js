import React, { Component } from "react";
import Content1 from "./Content1";
import Header from "../Umum/Header";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";
import Content5 from "./Content5";
import Content6 from "./Content6";
import Content7 from "./Content7";
import Footer from "../Umum/Footer";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
        {/* <Content5 /> */}
        <Content6 />
        <Content7 />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
