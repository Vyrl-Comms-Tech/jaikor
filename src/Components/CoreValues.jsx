import {  useRef } from "react";
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
        start: "top 20%",
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
      .to(
        leftBoxRef.current,
        {
          x: -450,
          opacity: 1,
          duration: 2,
          ease: "ease",
        },
        
      )
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
          <h2>Relentless Excellence</h2>
          <p>Welcome To Valor GP, A Leading Heavy Civil Construction Company</p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
