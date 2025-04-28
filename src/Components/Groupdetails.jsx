import React, { useEffect, useRef } from "react";
import "../Styles/Groupdetails.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";
import "splitting/dist/splitting.css";

gsap.registerPlugin(ScrollTrigger);

function Groupdetails() {
  const groupImgRef = useRef(null);
  const detailsCenterRef = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".groupdetails",
        start: "top 80%",
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
    // First, set initial state for all SVG paths
    gsap.set("#groupimg path", {
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
    tl2.to("#groupimg path", {
      strokeDashoffset: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power2.inOut",
      delay: -0.5,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".detailsbottom", // Shared trigger
        start: "top 80%", // Start animation when the top of the trigger is 80% down the viewport
        end: "top 50%", // End animation when the top of the trigger is 50% down the viewport
      },
    });

    tl.fromTo(
      groupImgRef.current,
      { clipPath: "inset(0 100% 0 0)" }, // Start with the image hidden
      {
        clipPath: "inset(0 0% 0 0)", // Reveal the image
        duration: 1.25,
        ease: "power3.inout",
      }
    ).fromTo(
      detailsCenterRef.current,
      { opacity: 0, right: "38%" }, // Start with the element off-screen
      {
        opacity: 1,
        right: "45%",
        duration: 0.6,
        delay: -0.4,
        ease: "power3.inout",
      }
    );

    // Split the text in the h1 element into characters
    const results = Splitting({ target: h1Ref.current, by: "chars" });

    // GSAP animation for the split text
    gsap.fromTo(
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
  }, []);

  return (
    <>
      <div className="groupdetails">
        <div className="belowtoprow">
          <img src="Assets/Line 1.png" alt="" />
          <span>
            <p>01</p>
            <h6>About</h6>
          </span>
        </div>
        <div className="detailscenter">
          <h1 ref={h1Ref}>
            Since its inception in 2000, Jeikor Group has grown <br /> into a
            multi-disciplinary powerhouse with operations <br /> spanning the
            UAE Iraq, Turkey, and Europe.
          </h1>
          <h5 ref={detailsCenterRef}>
              With deep roots in construction, a strong focus on innovation, and
              an eye on the future, each company under the Jeikor banner brings
              unique value, expertise, and capabilities — all working in synergy
              to deliver world-class solutions.
            </h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 529 435"
            fill="none"
            id="groupimg"
          >
            <path
              d="M118.5 -145.5H670.5V312.5H148C131.708 312.5 118.5 299.292 118.5 283V-145.5Z"
              stroke="url(#paint0_linear_62_32)"
            />
            <path
              d="M59.5 -84.5H611.5V373.5H89C72.7076 373.5 59.5 360.292 59.5 344V-84.5Z"
              stroke="url(#paint1_linear_62_32)"
            />
            <path
              d="M0.5 -23.5H552.5V434.5H30C13.7076 434.5 0.5 421.292 0.5 405V-23.5Z"
              stroke="url(#paint2_linear_62_32)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_62_32"
                x1="394.5"
                y1="-146"
                x2="394.5"
                y2="313"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#273A8C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_62_32"
                x1="335.5"
                y1="-85"
                x2="335.5"
                y2="374"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#273A8C" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_62_32"
                x1="276.5"
                y1="-24"
                x2="276.5"
                y2="435"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#273A8C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="detailsbottom">
          <img src="/Assets/Rectangle 210.png" id='lapimg'  ref={groupImgRef} alt="" />
          <img src="/Assets/Rectangle 211.png" id='mobimg' alt="" />
          
          <div id="rectangelholder">
            <img src="/Assets/Rectangle 16.png" alt="" />
            <h5 ref={detailsCenterRef}>
              With deep roots in construction, a strong focus on innovation, and
              an eye on the future, each company under the Jeikor banner brings
              unique value, expertise, and capabilities — all working in synergy
              to deliver world-class solutions.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Groupdetails;
