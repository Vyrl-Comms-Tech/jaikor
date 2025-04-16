import React, { useEffect } from "react";
import "../Styles/Homehero.css";
import Navbar from "../Components/Navbar";

function Homehero() {
  useEffect(() => {
    const homeHero = document.querySelector(".homehero");
    const mouseFollower = document.querySelector(".herocircle");
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    // Smooth mouse following
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const smoothMouseFollow = () => {
      currentX += (mouseX - currentX) * 0.25;
      currentY += (mouseY - currentY) * 0.25;

      mouseFollower.style.left = `${currentX}px`;
      mouseFollower.style.top = `${currentY}px`;

      requestAnimationFrame(smoothMouseFollow);
    };

    const handleMouseEnter = () => {
      mouseFollower.style.opacity = "1";
      mouseFollower.style.transform = "scale(1)";
    };

    const handleMouseLeave = () => {
      mouseFollower.style.opacity = "0";
      mouseFollower.style.transform = "scale(0)";
    };

    homeHero.addEventListener("mousemove", handleMouseMove);
    homeHero.addEventListener("mouseenter", handleMouseEnter);
    homeHero.addEventListener("mouseleave", handleMouseLeave);

    smoothMouseFollow();

    // Cleanup
    return () => {
      homeHero.removeEventListener("mousemove", handleMouseMove);
      homeHero.removeEventListener("mouseenter", handleMouseEnter);
      homeHero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="homehero">
        <div className="herocircle">
          <p>Scroll down</p>
        </div>
        <Navbar />
        <img src="/Assets/Rectangle 1.png" id="heroimg" alt="" />
        <div className="herosection">
          <div className="heroleft">
            <h4>
              Building lasting legacies since 2000 — from iconic high-rises and
              modern villas to complex industrial and <br />
              hospitality projects.
            </h4>
            <h1>
              Leaders in Quality Construction <br /> & Infrastructure
            </h1>
            <h3>
              let's talk
              <span id="arrow">
                <img src="Assets/Vector.svg" alt="" />
              </span>
            </h3>
          </div>
          <div className="heroright"></div>
          <div className="bottomhomerow">
            <div className="bleft">
              <div className="bbox">
                <h6>200+</h6>
                <p>Projects <br />Delivered</p>
              </div>
              <div className="bbox">
                <h6>570+</h6>
                <p>Skilled <br />Workforce</p>
              </div>
              <div className="bbox">
                <h6>23+</h6>
                <p>Years of <br />Excellence</p>
              </div>
            </div>
            <div className="bright">
              <img src="/Assets/Rectangle 15.png" alt="" />
              <h6>
                Since our inception in 2000, Jeikor has earned<br /> its place
                as a premier contracting company in <br />the UAE.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homehero;
