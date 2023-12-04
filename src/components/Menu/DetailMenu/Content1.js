import React, { Component } from "react";

class Content1 extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-12 col-md-6 text-md-center px-4 px-md-5 ">
              <h3
                className="text-center"
                style={{ color: "#616060", fontWeight: "bold" }}
              >
                Melt in Your Mouth
              </h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in
                sed in pellentesque ornare nunc nisl augue habitant accumsan.
              </p>
            </div>
            <div className="col-12 col-md-6 text-md-center px-4 px-md-5 mt-3 mt-md-0">
              <h3
                className="text-center"
                style={{ color: "#616060", fontWeight: "bold" }}
              >
                Cooking Suggestions
              </h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in
                sed in pellentesque ornare nunc nisl augue habitant accumsan.
              </p>
            </div>
            <div className="col-12 col-md-6 text-md-center px-4 px-md-5 mt-3 mb-5 mt-md-5 mb-md-0">
              <h3
                className="text-center"
                style={{ color: "#616060", fontWeight: "bold" }}
              >
                The Best Taste
              </h3>
              <p className="text-center">
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
