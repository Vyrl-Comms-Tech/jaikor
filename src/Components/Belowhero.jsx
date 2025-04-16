import React from "react";
import "../Styles/Belowhero.css";

function Belowhero() {
  return (
    <div className="belowhero">
      <div className="belowtoprow">
        <img src="Assets/Line 1.png" alt="" />
        <span >
          <p>01</p>
          <h6>About</h6>
        </span>
      </div>
      <div className="belowcenter">
        <div className="belowleft">
          <h3>
            Since our inception in 2000, Jeikor has earned its place<br/> as a
            premier contracting company in the UAE.
          </h3>
          <h3>
            With over 200 successfully executed projects across residential,
            commercial, industrial, and hospitality sectors, we are trusted by
            clients for our commitment to timely delivery, quality
            craftsmanship, and operational excellence.
          </h3>
          <h3 className="textbold">
            Welcome to Jeikor GP., a leading heavy civil <br/> construction
          </h3>
        </div>
        <div className="belowright">
          <h1>
            Your Partner in Heavy & Civil Construction <br/>
            Dubai, UAE
          </h1>
          <div className="flex">
            <div className="aboutbox">
              <img src="Assets/Rectangle 21.png" alt="" />
            </div>
            <div className="aboutbox2">
              <div className="aboutbox">
                <h4>200+</h4>
                <p>Completed Projects</p>
              </div>
              <div className="aboutbox">
                <h4>570+</h4>
                <p>Employees</p>
              </div>
              <div className="aboutbox">
                <h4>6</h4>
                <p>Operational Divisions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Belowhero;
