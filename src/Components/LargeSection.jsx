import React from "react";
import "../Styles/large-section.css";

const LargeSection = () => {
  return (
    <>
      <div className="large-section-container">
        <div className="large-section-blur"></div>
        <div className="large-section-content">
          <div className="large-section-content-left">
            <h1>2019</h1>
            <p>
               Successfully completed key developments including hotels,
              residential buildings, and commercial towers in Dubai.
            </p>
          </div>
          <div className="large-line">
          <img src="/Assets/large-line.png" alt="" />
        </div>
          <div className="large-section-content-right">
            <p>
               Launched new divisions and upgraded capabilities across joinery,
              MEP, and interior works.
            </p>
            <h1>2020</h1>
          </div>
        </div>

        <div className="large-section-last-content">
          <div className="large-section-last-content-h1">
            <h1>2021</h1>
          </div>
          <div className="large-section-last-content-p">
            <p>
              Surpassed 500+ employees, bringing diverse skills, innovation, and
              a shared vision for excellence.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="large-section-image">
          <img className="large-image" src="/Assets/large-img-main.png" alt="" />
        </div>
        {/*  */}
       
        <div className="large-section-blur-last"></div>
      </div>
    </>
  );
};

export default LargeSection;

//
