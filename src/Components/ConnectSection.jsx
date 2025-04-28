import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../Styles/connect-section.css";
import { useNavigate } from "react-router-dom";

const ConnectSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const buttonRef = useRef(null);
  // Add refs for the SVG paths
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);
  const path3Ref = useRef(null);
  // Add refs for the second SVG paths
  const path4Ref = useRef(null);
  const path5Ref = useRef(null);
  const path6Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "power3.out" },
    });

    // Original entrance animations
    tl.fromTo(
      h1Ref.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4 }
    )
      .fromTo(
        pRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "a"
      )
      .fromTo(
        buttonRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 },
        "a"
      );

    // Create infinite flowing line animation for the first SVG
    const flowingLines = gsap.timeline({
      repeat: -1,
      yoyo: true, // This will make the animation reverse
    });

    flowingLines
      .fromTo(
        path1Ref.current,
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" }
      )
      .fromTo(
        path2Ref.current,
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" },
        "-=1"
      )
      .fromTo(
        path3Ref.current,
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" },
        "-=1"
      );

    // Create infinite flowing line animation for the second SVG
    const flowingLines2 = gsap.timeline({
      repeat: -1,
      yoyo: true, // This will make the animation reverse
    });

    flowingLines2
      .fromTo(
        path4Ref.current,
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" }
      )
      .fromTo(
        path5Ref.current,
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" },
        "-=1"
      )
      .fromTo(
        path6Ref.current,
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" },
        "-=1"
      );
  }, []);

  return (
    <>
      <div className="connect-section-container" ref={sectionRef}>
        <div className="connect-sec1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="437"
            // height="581"
            viewBox="0 0 437 581"
            fill="none"
          >
            <path
              ref={path1Ref}
              d="M321.665 0.5H-215.5V458.5H292.165C308.458 458.5 321.665 445.292 321.665 429V0.5Z"
              stroke="url(#paint0_linear_388_8)"
            />
            <path
              ref={path2Ref}
              d="M379.083 61.5H-158.083V519.5H349.583C365.875 519.5 379.083 506.292 379.083 490V61.5Z"
              stroke="url(#paint1_linear_388_8)"
            />
            <path
              ref={path3Ref}
              d="M436.5 122.5H-100.665V580.5H407C423.292 580.5 436.5 567.292 436.5 551V122.5Z"
              stroke="url(#paint2_linear_388_8)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_388_8"
                x1="53.0827"
                y1="0"
                x2="53.0827"
                y2="459"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#273A8C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_388_8"
                x1="110.5"
                y1="61"
                x2="110.5"
                y2="520"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#273A8C" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_388_8"
                x1="167.917"
                y1="122"
                x2="167.917"
                y2="581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#273A8C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="connect-sec-text">
          <h1 ref={h1Ref}>
            Let's Connect to Build <br /> Something Great
          </h1>
          <p ref={pRef}>
            Whether it's a landmark tower, a community of villas, or a complex
            industrial facility — Jeikor is ready to deliver.
          </p>
          <div className="connect-sec-talk" ref={buttonRef}>
            <span onClick={() => navigate("/contact")}>Let's Talk</span>
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
          {/* <img src="/Assets/connect-sec2.png" alt="image" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="437"
            // height="581"
            viewBox="0 0 345 581"
            fill="none"
          >
            <path
              ref={path4Ref}
              d="M118.5 0.5H670.5V458.5H148C131.708 458.5 118.5 445.292 118.5 429V0.5Z"
              stroke="url(#paint0_linear_39_5)"
            />
            <path
              ref={path5Ref}
              d="M59.5 61.5H611.5V519.5H89C72.7076 519.5 59.5 506.292 59.5 490V61.5Z"
              stroke="url(#paint1_linear_39_5)"
            />
            <path
              ref={path6Ref}
              d="M0.5 122.5H552.5V580.5H30C13.7076 580.5 0.5 567.292 0.5 551V122.5Z"
              stroke="url(#paint2_linear_39_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_39_5"
                x1="394.5"
                y1="0"
                x2="394.5"
                y2="459"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#273A8C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_39_5"
                x1="335.5"
                y1="61"
                x2="335.5"
                y2="520"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#273A8C" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_39_5"
                x1="276.5"
                y1="122"
                x2="276.5"
                y2="581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#273A8C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default ConnectSection;
