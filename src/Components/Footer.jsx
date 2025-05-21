import React, { useEffect } from "react";
import "../Styles/footer.css";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Footer = () => {
  const navigate=useNavigate()
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    // Footer elements stagger animation
    gsap.from(
      [
        ".footer-logo",
        ".footer-text",
        ".footer-button",
        ".footer-top-right",
        ".footer-bottom",
        ".footer-last",
      ],
      {
        scrollTrigger: {
          trigger: ".footer",
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
      }
    );
  }, []);
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-logo">
              <img src="/Assets/logo.png" alt="logo" />
            </div>
            <div className="footer-text">
              <p>
                 Established in 2000, Jeikor is a multi-division contracting
                powerhouse with a presence across general contracting, MEP,
                joinery, interiors, engineering, and trading. Headquartered in
                Dubai, we continue to deliver excellence with a focus on safety,
                sustainability, and client satisfaction.
              </p>
            </div>
            <div className="footer-button">
              <button onClick={()=>navigate('/contact')}>connect</button>
              <div className="footer-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                >
                  <path
                    d="M0.729238 10.6964L8.49239 1.22028L1.10415 1.95439L0.94224 0.968551L10.0896 0.0596522L10.9985 9.207L10.0001 9.24225L9.26595 1.85401L1.5028 11.3301L0.729238 10.6964Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="footer-top-right">
            <p>Address:</p>
            <span>P.O. Box 40454, Dubai, UAE</span>
          </div>
        </div>
        {/* bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <h4>+971 4 326 2777</h4>
            <h4>info@jeikor.com</h4>
          <h4>Twitter</h4>
          </div>
          <div className="footer-bottom-right">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/group"}>The Group</Link>
            <Link to={"/services"}>Services</Link>
          </div>
        </div>
        <div className="footer-last">
          <p>Privacy policy</p>
        </div>
        <div className="footer-top-right-lst">
          <p>Address:</p>
          <span>P.O. Box 40454, Dubai, UAE</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
