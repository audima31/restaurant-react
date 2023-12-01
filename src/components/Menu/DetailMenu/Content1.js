import React, { Component } from "react";

class Content1 extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row d-flex justify-content-center text-center text-md-start mt-5">
            <div className="col-6 col-md-6 text-center px-5 ">
              <h3 style={{ color: "#616060", fontWeight: "bold" }}>
                Melt in Your Mouth
              </h3>
              <p className="d-block d-md-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in
                sed in pellentesque ornare nunc nisl augue habitant accumsan.
              </p>
              <p className="d-none d-md-block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in
                sed in pellentesque ornare nunc nisl augue habitant accumsan.
              </p>
            </div>
            <div className="col-6 col-md-6 text-center px-5">
              <h3 style={{ color: "#616060", fontWeight: "bold" }}>
                Cooking Suggestions
              </h3>
              <p className="d-block d-md-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in
                sed in pellentesque ornare nunc nisl augue habitant accumsan.
              </p>
              <p className="d-none d-md-block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in
                sed in pellentesque ornare nunc nisl augue habitant accumsan.
              </p>
            </div>
            <div className="col-6 col-md-6 text-center px-5 mt-3 mt-md-5">
              <h3 style={{ color: "#616060", fontWeight: "bold" }}>
                The Best Taste
              </h3>
              <p className="d-block d-md-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in
                sed in pellentesque ornare nunc nisl augue habitant accumsan.
              </p>
              <p className="d-none d-md-block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in
                sed in pellentesque ornare nunc nisl augue habitant accumsan.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content1;
