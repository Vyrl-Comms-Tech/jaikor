import React from "react";
import "../Styles/Cardsection.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Cardsection() {
  useGSAP(() => {
    gsap.from([".card1", ".card2", ".card3", ".card4"], {
      opacity: 0,
      y: 100,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".cardsection",
        start: "top center",
        toggleActions: "play none none reverse"
      }
    });
  });

  return (
    <>
      <div className="cardsection">
        <div className="belowtoprow">
          <img src="Assets/Line 1.png" alt="" />
          <span>
            <p>02</p>
            <h6>Services</h6>
          </span>
        </div>
        <div className="cardholder">
          <div className="cardrow1">
            <div className="card card1">
              <div className="cardimage">
                <img src="/Assets/Group 26.png" alt="" />
              </div>
              <div className="cardcontent">
                <h2>
                  General <br /> Contracting
                </h2>
                <p>
                  Robust end-to-end project execution — from
                  <br /> excavation to finishing — led by experienced project
                  <br /> managers and supported by modern machinery.
                </p>
              </div>
            </div>
            <div className="card card2">
              <div className="cardimage">
                <img src="/Assets/Vector 10.png" alt="" />
              </div>
              <div className="cardcontent">
                <h2>
                  Interior <br />
                  Works
                </h2>
                <p>
                  Design-driven interiors that reflect functional beauty —<br />
                  tailored for both residential and commercial spaces.
                </p>
              </div>
            </div>
          </div>
          <div className="cardrow2">
            <div className="card card3">
              <img src="/Assets/Rectangle 23.png" alt="" />
              <div className="cardcontent">
                <h2>Joinery Works</h2>
                <p>Expert integration of mechanical, electrical, and <br/> plumbing systems to optimize performance, safety, <br/> and sustainability.</p>
              </div>
            </div>
            <div className="card card4">
                <div className="card4row1">
                    <img src="/Assets/Vector 2.png" alt="" />
                </div>
                <div className="card4row2">
                    <h2>Engineering <br/>Services</h2>
                    <p>Technical expertise to manage structural<br/>  challenges,safety codes, and value<br/>  engineering for complex builds.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardsection;
