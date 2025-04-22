import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/core-values.css";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const CoreValues = () => {
  const sectionRef = useRef(null);
  const centerBoxRef = useRef(null);
  const leftBoxRef = useRef(null);
  const rightBoxRef = useRef(null);

  useGSAP(() => {
    // Create a timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 0%",
        end: "bottom 70%",
        scrub: 1,
        pin: true, // Pin the section while animating
        // markers: true,
      },
    });

    // Initial setup
    gsap.set(centerBoxRef.current.querySelector("img"), { rotate: "-45" });
    gsap.set(leftBoxRef.current, { rotate: "-45" });
    gsap.set(rightBoxRef.current, { rotate: "-45" });

    // Animation sequence
    tl.to(
      centerBoxRef.current.querySelector("img"),
      {
        rotation: 0,
        duration: 1.5,
        ease: "power2.inOut",
      },
      "a"
    )

      .to(
        leftBoxRef.current,
        {
          rotation: 0,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "a"
      )
      .to(
        rightBoxRef.current,
        {
          rotation: 0,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "a"
      )
      .to(leftBoxRef.current, {
        x: -450,
        opacity: 1,
        duration: 2,
        ease: "ease",
      })
      .to(
        rightBoxRef.current,
        {
          x: 450,
          opacity: 1,
          duration: 2,
          ease: "ease",
        },
        "<"
      );

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="core-values-section">
      <div className="core-l">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="222"
          // height="797"
          viewBox="0 0 222 797"
          fill="none"
        >
          <path
            d="M-119.43 47.7074L-610.226 266.033L-424.077 684.497L39.7655 478.162C54.6515 471.54 61.3508 454.104 54.729 439.218L-119.43 47.7074Z"
            stroke="url(#paint0_linear_56_300)"
          />
          <path
            d="M-42.1766 80.1051L-532.973 298.43L-346.823 716.895L117.019 510.559C131.905 503.938 138.605 486.502 131.983 471.616L-42.1766 80.1051Z"
            stroke="url(#paint1_linear_56_300)"
          />
          <path
            d="M35.0771 112.503L-455.719 330.828L-269.57 749.293L194.273 542.957C209.159 536.335 215.858 518.9 209.236 504.014L35.0771 112.503Z"
            stroke="url(#paint2_linear_56_300)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_56_300"
              x1="-365.032"
              y1="156.413"
              x2="-178.476"
              y2="575.791"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#273A8C" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_56_300"
              x1="-287.778"
              y1="188.811"
              x2="-101.222"
              y2="608.189"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#273A8C" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_56_300"
              x1="-210.524"
              y1="221.209"
              x2="-23.9684"
              y2="640.587"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#273A8C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="header-container">
        <h1 className="main-title">Core Values</h1>
        <p className="subtitle">
          Our Foundation: Values That Build Beyond Concrete
        </p>
      </div>

      <div className="values-container">
        <div ref={leftBoxRef} className="value-box left-box">
          <img src="/Assets/left-box.png" alt="left-div" />
          <h2>Integrity First</h2>
          <p>
            Every Decision, Every Action, Rooted In Honesty And Transparency
          </p>
        </div>

        <div ref={centerBoxRef} className="value-box center-box">
          <img src="/Assets/center-box.png" alt="center-div" />
          <h2>Client-Centric</h2>
          <p>
            We Listen, Adapt, And Customize Our Approach To Each Client's Unique
            Vision
          </p>
        </div>

        <div ref={rightBoxRef} className="value-box right-box">
          <img src="/Assets/left-box.png" alt="left-div" />
          <h2>
            Relentless <br />
            Excellence
          </h2>
          <p>Welcome To Valor GP, A Leading Heavy Civil Construction Company</p>
        </div>
      </div>
      <div className="core-r">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="285"
          // height="777"
          viewBox="0 0 285 777"
          fill="none"
        >
          <path
            d="M105.549 259.484L593.301 1.0219L786.295 365.226L324.61 609.876C310.214 617.504 292.359 612.018 284.731 597.622L105.549 259.484Z"
            stroke="url(#paint0_linear_505_3)"
          />
          <path
            d="M79.1273 335.629L566.879 77.1667L759.873 441.371L298.188 686.021C283.792 693.649 265.937 688.163 258.309 673.767L79.1273 335.629Z"
            stroke="url(#paint1_linear_505_3)"
          />
          <path
            d="M52.7052 411.774L540.456 153.311L733.45 517.516L271.766 762.165C257.37 769.794 239.515 764.308 231.886 749.912L52.7052 411.774Z"
            stroke="url(#paint2_linear_505_3)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_505_3"
              x1="349.191"
              y1="129.811"
              x2="542.653"
              y2="494.899"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F5F5F5" />
              <stop offset="1" stop-color="#273A8C" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_505_3"
              x1="322.769"
              y1="205.956"
              x2="516.231"
              y2="571.044"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F5F5F5" />
              <stop offset="1" stop-color="#273A8C" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_505_3"
              x1="296.347"
              y1="282.101"
              x2="489.809"
              y2="647.189"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F5F5F5" />
              <stop offset="1" stop-color="#273A8C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default CoreValues;
