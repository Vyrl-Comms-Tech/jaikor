import React from "react";
import "../Styles/connect-section.css";

const ConnectSection = () => {
  return (
    <>
      <div className="connect-section-container">
        <div className="connect-sec1">
          <img src="/Assets/Group 40.png" alt="image" />
        </div>
        <div className="connect-sec-text">
          <h1>
             Let’s Connect to Build <br /> Something Great
          </h1>
          <p>
             Whether it’s a landmark tower, a community of villas, or a complex
            industrial facility — Jeikor is ready to deliver.
          </p>
          <div className="connect-sec-talk">
            <span>Let's Talk</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="25"
              viewBox="0 0 21 25"
              fill="none"
            >
              <path
                d="M0.96554 22.9472L14.7908 3.05689L0.575425 5.819L0.135973 3.92417L17.7359 0.504412L20.6642 18.1928L18.735 18.4412L16.3698 4.15447L2.54463 24.0448L0.96554 22.9472Z"
                fill="#111E57"
              />
            </svg>
          </div>
        </div>
        <div className="connect-sec2">
          <img src="/Assets/connect-sec2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default ConnectSection;
