import React, { Component } from "react";
import Logo1 from "../../assets/images/image/Icon1Content4.png";
import Logo2 from "../../assets/images/image/Icon2Content4.png";
import Logo3 from "../../assets/images/image/Icon3Content4.png";

class Content4 extends Component {
  render() {
    return (
      <div className="containerContent4" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container pt-3 pb-3">
          <div className="row ">
            {/*  d-flex justify-content-between p-5 */}
            <div className="col-12 col-md-4 text-center">
              <img className="iconContent4" src={Logo1} alt="" />
              <h3 className="fw-semibold mt-3">Premium Quality</h3>
              <p>
                Nikmati kualitas terbaik dari bahan-bahan pilihan kami,
                disajikan dengan keahlian untuk memastikan pengalaman kuliner
                terbaik untuk Anda
              </p>
            </div>
            <div className="col-12 col-md-4 text-center">
              <img className="iconContent4" src={Logo2} alt="" />
              <h3 className="fw-semibold  mt-3">Seasonal Vegetables</h3>
              <p>
                Ditemukan kesegaran dalam setiap gigitan dengan koleksi sayuran
                musiman terbaik kami, ditanam secara organik untuk cita rasa
                yang tiada duanya
              </p>
            </div>
            <div className="col-12 col-md-4 text-center">
              <img className="iconContent4" src={Logo3} alt="" />
              <h3 className="fw-semibold mt-3">Fresh Fruit</h3>
              <p>
                Rasakan kelezatan buah-buahan segar pilihan kami, dipilih dengan
                cermat untuk memberikan keceriaan dan nutrisi alami
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content4;
