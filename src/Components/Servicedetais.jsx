import React, { useRef } from "react";
import "../Styles/Servicedetais.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Splitting from "splitting";
import "splitting/dist/splitting.css";

gsap.registerPlugin(ScrollTrigger);
function Servicedetais() {
  const h1Ref = useRef(null);
  useGSAP(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".Servicedetais",
        start: "top 80%",
        // markers: true,
      },
    });
    tl2.fromTo(
      ".belowtoprow img",
      { clipPath: "inset(0 100% 0 0)" }, // Start with the element hidden
      {
        clipPath: "inset(0 0% 0 0)", // Reveal the element
        duration: 1.25,
        ease: "power3.inout",
      }
    );

    // Text split fill colour animation
    const results = Splitting({ target: h1Ref.current, by: "chars" });

    // GSAP animation for the split text
    tl2.fromTo(
      h1Ref.current.querySelectorAll(".char"),
      { opacity: 1, y: 5, color: "#999" }, // Start state
      {
        opacity: 1,
        y: 0,
        color: "#273A8C", // Fill color on scroll
        duration: 2,
        stagger: 0.05, // Animate each character with a slight delay
        ease: "power3.out",
        scrollTrigger: {
          trigger: h1Ref.current, // Trigger animation when h1 enters the viewport
          start: "top 80%", // Start animation when the top of h1 is 80% down the viewport
          end: "top 50%", // End animation when the top of h1 is 50% down the viewport
          scrub: true, // Smooth scrolling effect
        },
      }
    );

    const tl3=gsap.timeline({
        scrollTrigger: {
          trigger: ".services-container",
          start: "top 80%",
        //   markers: true,
        },
    })
    tl3.set("#groupimg2 path", {
      strokeDasharray: function (index, element) {
        return element.getTotalLength();
      },
      strokeDashoffset: function (index, element) {
        return element.getTotalLength();
      },
      fill: "none",
      stroke: function (index, element) {
        return element.getAttribute("fill");
      },
      strokeWidth: 2,
    });

    // Animate each path
    tl3.to("#groupimg2 path", {
      strokeDashoffset: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power2.inOut",
    //   delay: 0.,
    });


    const tl4=gsap.timeline({
        scrollTrigger: {
            trigger: ".services-container",
            start: "top 80%",
        },
    })
    
    tl4.fromTo('.service-card',{
        opacity:0,
        y:50
    },{
        opacity:1,
        y:0,
        duration:0.5,
        ease:"power3.inout",
        stagger:0.3,
        delay:1,
    })
  }, []);
  return (
    <>
      <div className="Servicedetais">
        <div className="belowtoprow">
          <img src="Assets/Line 1.png" alt="" />
          <span>
            <div className="blue-ball"></div>

            <h6>Services</h6>
          </span>
        </div>
        <div className="h1holder">
          <h1 ref={h1Ref}>
            Whether it’s a commercial tower, residential community, hotel, or
            <br />
            warehouse — we bring the experience, equipment, and expertise to
            <br /> get it done right.
          </h1>
        </div>
        <div className="services-container">
          <div className="services-illustration">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 590 581"
              fill="none"
              id="groupimg2"
            >
              <path
                d="M37.5 30C37.5 13.7076 50.7076 0.5 67 0.5H589.5V458.5H67C50.7076 458.5 37.5 445.292 37.5 429V30Z"
                stroke="url(#paint0_linear_87_219)"
              />
              <path
                d="M-21.5 91C-21.5 74.7076 -8.2924 61.5 8 61.5H530.5V519.5H7.99999C-8.29241 519.5 -21.5 506.292 -21.5 490V91Z"
                stroke="url(#paint1_linear_87_219)"
              />
              <path
                d="M-80.5 152C-80.5 135.708 -67.2924 122.5 -51 122.5H471.5V580.5H-51C-67.2924 580.5 -80.5 567.292 -80.5 551V152Z"
                stroke="url(#paint2_linear_87_219)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_87_219"
                  x1="313.5"
                  y1="0"
                  x2="313.5"
                  y2="459"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#273A8C" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_87_219"
                  x1="254.5"
                  y1="61"
                  x2="254.5"
                  y2="520"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#273A8C" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_87_219"
                  x1="195.5"
                  y1="122"
                  x2="195.5"
                  y2="581"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#273A8C" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h2>General Contracting</h2>
              <div className="divider"></div>
              <p>
                From Groundbreaking To Final Handover, We Manage All Aspects Of
                Construction. Our Experienced Teams Ensure Projects Are
                Completed On Schedule, Within Budget, And To The Highest Quality
                And Safety Standards.
              </p>
            </div>

            <div className="service-card">
              <h2>MEP Contracting</h2>
              <div className="divider"></div>
              <p>
                We Integrate Mechanical, Electrical, And Plumbing Systems That
                Form The Core Of Any Development. Our MEP Division Ensures
                Operational Efficiency, Sustainability, And Code Compliance
                Across All Installations.
              </p>
            </div>

            <div className="service-card">
              <h2>Joinery Works</h2>
              <div className="divider"></div>
              <p>
                With A Fully-Equipped Carpentry Workshop, We Deliver Customized
                Woodwork And Fittings That Combine Craftsmanship With
                Functionality — For Residential, Commercial, And Hospitality
                Spaces.
              </p>
            </div>

            <div className="service-card">
              <h2>Engineering Services</h2>
              <div className="divider"></div>
              <p>
                Our Engineers Handle Complex Challenges With Precision —
                Offering Structural Insights, Design Integration, And Smart
                Problem-Solving To Support Long-Term Project Stability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicedetais;
